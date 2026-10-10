import GithubProjects from './GithubProjects';
import { Code2, Boxes, Globe, Terminal } from 'lucide-react';

const posters = [
 {title:['ZENITH','MENTOR.'],name:'Zenith Mentor',subtitle:'A coding practice platform with live code execution and test cases.',icon:Terminal,badge:'</>',extra:Code2,skills:['React','Next.js','Node.js','MongoDB','Judge0 API']},
 {title:['COGNOID','SYSTEMS.'],name:'Cognoid Systems',subtitle:'Production-ready web development.',icon:Boxes,badge:'{ }',extra:Globe,skills:['Next.js','Node.js','MongoDB'],url:'https://www.cognoidsystems.com'},

];

export default function CinemaProjects() {
  return <section id="demo-work" className="cd-skills cd-skills-posters" aria-labelledby="cd-project-posters-title">
    <div className="cd-skills-orbit" aria-hidden="true"><span/><span/><span/><span/></div>
    <div className="cd-skills-heading"><div><h2 id="cd-project-posters-title">IDEAS.<br/><em>MADE REAL.</em></h2></div><p className="cd-skills-intro">Selected projects.<br/>Built with purpose.</p></div>
    <div className="cd-skills-grid">{posters.map(({ title, name, subtitle, icon: Icon, badge, extra: Extra, skills, url }, i) =>
      <article className={'cd-skill-card cd-skill-poster cd-skill-poster-' + i} key={name} aria-labelledby={'skill-poster-' + i}>
        <div className="cd-poster-surface">
          <div className="cd-poster-meta"><span>PROJECT / 0{i + 1}</span><Code2 size={20} aria-hidden="true"/></div>
          <h3 id={'skill-poster-' + i}>{title.map(line => <span key={line}>{line}</span>)}</h3>
          <div className="cd-poster-art" aria-hidden="true"><div className="cd-poster-disc"><Icon strokeWidth={1.15}/></div><span className="cd-poster-token">{badge}</span><div className="cd-poster-mini"><Extra strokeWidth={1.5}/></div><span className="cd-poster-spark">✳</span></div>
          <div className="cd-poster-caption"><h4>{url ? <a href={url} target="_blank" rel="noreferrer">{name} ↗</a> : <span aria-disabled="true">{name}</span>}</h4><p>{subtitle}</p><ul aria-label={name}>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
        </div>
        <span className="cd-poster-v" aria-hidden="true">V</span>
      </article>
    )}</div>
    <GithubProjects/>
    <div className="cd-skills-bottom"><span aria-hidden="true">✳</span><p>ALWAYS LEARNING. ALWAYS BUILDING.</p><a href="/projects">EXPLORE ALL REPOSITORIES ↗</a></div>
  </section>;
}
