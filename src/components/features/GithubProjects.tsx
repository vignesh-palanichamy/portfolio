import { Link } from 'react-router-dom';
import { Github, ArrowUpRight } from 'lucide-react';
import { useGithubRepos } from '@/hooks/useGithubRepos';
export default function GithubProjects(){
 const {repos,live}=useGithubRepos();
 const selected=repos.filter(r=>!r.fork&&!r.archived&&!['.github','vignesh-palanichamy','vikky7662'].includes(r.name)).slice(0,3);
 return <div className="cd-github-projects"><div className="cd-github-top"><div><p className="cd-kicker">MORE FROM MY GITHUB</p><h3>EXPLORE MY WORK.</h3></div><p>{repos.length} repositories · {live?'Public details updated':'Selected collection'}</p></div><div className="cd-github-grid">{selected.map(r=><a key={r.html_url} href={r.html_url} target="_blank" rel="noopener noreferrer"><Github size={25} aria-hidden="true"/><h4>{r.name.replace(/[-_]/g,' ')}</h4><p>{r.description||(r.visibility==='public'?'Browse the source code and project files on GitHub.':'Selected project. GitHub access may be required.')}</p><span>{r.visibility==='public'?(r.language||'Public repository'):r.visibility==='private'?'Private repository':'Access unverified'} <ArrowUpRight size={19} aria-hidden="true"/></span></a>)}</div><Link className="cd-github-all" to="/projects">BROWSE ALL {repos.length} REPOSITORIES ↗</Link></div>;
}
