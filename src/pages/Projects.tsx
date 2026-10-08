import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Search, Github } from 'lucide-react';
import repos from '../repos.json';
import './funky-portfolio.css';
import './project-shelf.css';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('All');
  const [page, setPage] = useState(1);
  const languages = ['All', ...new Set(repos.map(r => r.language).filter((l): l is string => Boolean(l)))];
  const filtered = repos.filter(r => (language === 'All' || r.language === language) && `${r.name} ${r.description || ''} ${r.topics.join(' ')}`.toLowerCase().includes(search.toLowerCase()));
  const pages = Math.ceil(filtered.length / 6);
  return <main className="funky-page shelf"><div className="fk-wrap">
    <header className="fk-nav"><Link to="/" className="shelf-sign">Vignesh ✳</Link><nav><Link to="/#demo-work">Back to portfolio ↗</Link></nav></header>
    <div className="shelf-heading"><div><p className="fk-chapter">THE COLLECTION / PUBLIC GITHUB REPOSITORIES</p><h1>The project shelf<span>.</span></h1></div><p className="shelf-sticker">{repos.length} repos.<br />Lots of curiosity.</p></div>
    <div className="shelf-controls"><label className="shelf-search"><Search size={20}/><input aria-label="Search projects" placeholder="Find a project…" value={search} onChange={e => {setSearch(e.target.value);setPage(1);}} /></label><div className="shelf-filters" aria-label="Filter by language">{languages.map(l => <button key={l} aria-pressed={language === l} onClick={() => {setLanguage(l);setPage(1);}}>{l === 'All' ? `All ${repos.length}` : l}</button>)}</div></div>
    <p className="shelf-caption">Real repositories. Small experiments, useful tools, and things I’m building.</p>
    <div className="shelf-grid">{filtered.slice((page-1)*6,page*6).map(r => <article className="shelf-card" key={r.html_url}>
      <a href={r.html_url} target="_blank" rel="noopener noreferrer" className={`shelf-cover shelf-color-${repos.indexOf(r)%4}`} aria-label={`Open ${r.name} on GitHub (new tab)`}><span className="shelf-number">{String(repos.indexOf(r)+1).padStart(2,'0')}</span><Code2 size={68} strokeWidth={1.4}/><span className="shelf-cover-name">{r.name.replace(/[-_]/g,' ')}</span><span className="shelf-star">✳</span></a>
      <div className="shelf-card-copy"><h2><a href={r.html_url} target="_blank" rel="noopener noreferrer">{r.name} <ArrowUpRight size={20}/></a></h2><p>{r.description || 'Explore the source, files, and latest work on GitHub.'}</p><div className="shelf-meta"><span>{r.language || 'Repository'}</span>{r.homepage && /^https?:\/\//.test(r.homepage) && <a href={r.homepage} target="_blank" rel="noopener noreferrer">Website ↗</a>}</div></div>
    </article>)}</div>
    {filtered.length === 0 && <div className="shelf-empty"><h2>No projects found.</h2><p>Try another search or language.</p><button className="fk-button" onClick={() => {setSearch('');setLanguage('All');setPage(1);}}>Clear filters</button></div>}
    <footer className="shelf-footer"><p role="status">{filtered.length ? `Showing ${(page-1)*6+1}–${Math.min(page*6,filtered.length)} of ${filtered.length}` : '0 results'}</p><nav aria-label="Project pages">{Array.from({length:pages},(_,i) => <button key={i} aria-label={`Page ${i+1}`} aria-current={page === i+1 ? 'page' : undefined} onClick={()=>setPage(i+1)}>{i+1}</button>)}</nav><a href="https://github.com/vignesh-palanichamy?tab=repositories" target="_blank" rel="noopener noreferrer"><Github size={18}/> All on GitHub ↗</a></footer>
  </div></main>;
}

