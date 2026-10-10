import { useEffect, useState } from 'react';
import savedRepos from '@/repos.json';
export type GithubRepo = { name:string; description:string|null; html_url:string; homepage:string|null; language:string|null; topics:string[]; fork:boolean; archived:boolean; visibility:string };
type RepoSnapshot = { repos: GithubRepo[]; live: boolean };
let snapshotRequest: Promise<RepoSnapshot> | null = null;
let cacheUntil = 0;
function loadRepos(): Promise<RepoSnapshot> {
 if(snapshotRequest && Date.now()<cacheUntil)return snapshotRequest;
 const controller=new AbortController();
 const timeout=window.setTimeout(()=>controller.abort(),10000);
 cacheUntil=Infinity;
 snapshotRequest=(async()=>{
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
   if(controller.signal.aborted)throw new Error('GitHub request timed out');
   const current=new Map(result.map(r=>[r.name,r]));
   return {repos:savedRepos.map(r=>current.get(r.name)||{...r,visibility:r.visibility==='private'?'private':'unverified'}),live:true};
  }catch{
   return {repos:savedRepos,live:false};
  }finally{
   window.clearTimeout(timeout);
   cacheUntil=Date.now()+30000;
  }
 })();
 return snapshotRequest;
}
export function useGithubRepos(){
 const [repos,setRepos]=useState<GithubRepo[]>(savedRepos);
 const [live,setLive]=useState(false);
 useEffect(()=>{
  let active=true;
  void loadRepos().then(snapshot=>{if(active){setRepos(snapshot.repos);setLive(snapshot.live);}});
  return()=>{active=false;};
 },[]);
 return {repos,live};
}
