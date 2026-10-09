import { useEffect, useState } from 'react';
import savedRepos from '@/repos.json';
export type GithubRepo = { name:string; description:string|null; html_url:string; homepage:string|null; language:string|null; topics:string[]; fork:boolean; archived:boolean; visibility:string };
export function useGithubRepos(){
 const [repos,setRepos]=useState<GithubRepo[]>(savedRepos);
 const [live,setLive]=useState(false);
 useEffect(()=>{
  const controller=new AbortController();
  const timeout=window.setTimeout(()=>controller.abort(),10000);
  (async()=>{
   try{
    const result:GithubRepo[]=[];
    for(let page=1;page<=10;page++){
     const response=await fetch('https://api.github.com/users/vignesh-palanichamy/repos?per_page=100&sort=updated&type=owner&page='+page,{signal:controller.signal});
     if(!response.ok)throw new Error('GitHub unavailable');
     const data=await response.json();
     if(!Array.isArray(data))throw new Error('Invalid GitHub response');
     for(const r of data){if(r.private||!savedRepos.some(selected=>selected.name.toLowerCase()===r.name?.toLowerCase())||r.owner?.login?.toLowerCase()!=='vignesh-palanichamy')continue;
      result.push({name:r.name,description:r.description,html_url:r.html_url,homepage:r.homepage,language:r.language,topics:r.topics||[],fork:Boolean(r.fork),archived:Boolean(r.archived),visibility:"public"});
     }
     if(data.length<100)break;
    }
    if(!controller.signal.aborted){const current=new Map(result.map(r=>[r.name,r]));
      const merged=savedRepos.map(r=>current.get(r.name)||{...r,visibility:r.visibility==='private'?'private':'unverified'});
      setRepos(merged);setLive(true);}
   }catch{/* Keep the saved public snapshot available offline or when rate limited. */}
   finally{window.clearTimeout(timeout);}
  })();
  return()=>{controller.abort();window.clearTimeout(timeout);};
 },[]);
 return {repos,live};
}
