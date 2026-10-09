import { Code2, Layout, Server, Database, Boxes, GitBranch } from 'lucide-react';
const groups = [
 {title:'THE LANGUAGE',subtitle:'Where ideas start.',icon:Code2,skills:['JavaScript','Python']},
 {title:'THE INTERFACE',subtitle:'What you see and feel.',icon:Layout,skills:['React.js','Next.js','HTML5','Tailwind CSS','Bootstrap']},
 {title:'THE ENGINE',subtitle:'Making it all work.',icon:Server,skills:['Node.js','Express.js']},
 {title:'THE MEMORY',subtitle:'Giving data a home.',icon:Database,skills:['MongoDB','Firebase']},
 {title:'THE EXTRA DIMENSION',subtitle:'Exploring beyond the flat screen.',icon:Boxes,skills:['Three.js','WebGL','Blender']},
 {title:'THE WORKFLOW',subtitle:'Build. Review. Improve.',icon:GitBranch,skills:['Git','GitHub']},
];
export default function CinemaSkills(){return <section id="skills" className="cd-skills" aria-labelledby="cd-skills-title">
 <div className="cd-skills-orbit" aria-hidden="true"><span/><span/><span/><span/></div>
 <div className="cd-skills-heading"><div><h2 id="cd-skills-title">GOOD IDEAS.<br/><em>RIGHT TOOLS.</em></h2></div><p className="cd-skills-intro">From the first line of code to the finishing touch—these are the tools I build with.</p></div>
 <div className="cd-skills-grid">{groups.map(({title,subtitle,icon:Icon,skills},i)=><article className="cd-skill-card" key={title}><div className="cd-skill-card-top"><Icon size={30} strokeWidth={1.7} aria-hidden="true"/><span>0{i+1}</span></div><h3>{title}</h3><p>{subtitle}</p><ul aria-label={title}>{skills.map(skill=><li key={skill}>{skill}</li>)}</ul></article>)}</div>
 <div className="cd-skills-bottom"><span aria-hidden="true">✳</span><p>ALWAYS LEARNING. ALWAYS BUILDING.</p><a href="#demo-work">SEE THEM IN ACTION ↘</a></div>
 </section>}
