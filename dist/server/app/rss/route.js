"use strict";(()=>{var e={};e.id=575,e.ids=[575],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},3574:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>g,patchFetch:()=>h,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>c,staticGenerationAsyncStorage:()=>m});var a={};r.r(a),r.d(a,{GET:()=>p});var n=r(8999),i=r(8657),s=r(6370),o=r(7124),l=r(7048);async function p(){let e=(await (0,l.u)()).sort((e,t)=>new Date(e.metadata.publishedAt)>new Date(t.metadata.publishedAt)?-1:1).map(e=>`<item>
          <title>${e.metadata.title}</title>
          <link>${o.F}/blog/${e.slug}</link>
          <description>${e.metadata.summary||""}</description>
          <pubDate>${new Date(e.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`).join("\n");return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${o.F}</link>
        <description>This is my portfolio RSS feed</description>
        ${e}
    </channel>
  </rss>`,{headers:{"Content-Type":"text/xml"}})}let u=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/rss/route",pathname:"/rss",filename:"route",bundlePath:"app/rss/route"},resolvedPagePath:"C:\\Users\\ASUS\\Documents\\Amrit\\Code\\amritwt\\app\\rss\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:m,serverHooks:c}=u,g="/rss/route";function h(){return(0,s.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:m})}},7048:(e,t,r)=>{r.d(t,{p:()=>l,u:()=>o});var a=r(7147),n=r.n(a),i=r(1017),s=r.n(i);function o(){var e,t;return(t=e=s().join(process.cwd(),"app","blog","posts"),n().readdirSync(t).filter(e=>".mdx"===s().extname(e))).map(t=>{var r,a;let i,o,l,p,u;let{metadata:d,content:m}=(r=s().join(e,t),a=n().readFileSync(r,"utf-8"),o=(i=/---\s*([\s\S]*?)\s*---/).exec(a)[1],l=a.replace(i,"").trim(),p=o.trim().split("\n"),u={},p.forEach(e=>{let[t,...r]=e.split(": "),a=r.join(": ").trim();a=a.replace(/^['"](.*)['"]$/,"$1"),u[t.trim()]=a}),{metadata:u,content:l});return{metadata:d,slug:s().basename(t,s().extname(t)),content:m}})}function l(e,t=!1){let r=new Date;e.includes("T")||(e=`${e}T00:00:00`);let a=new Date(e),n=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth(),s=r.getDate()-a.getDate(),o="";o=n>0?`${n}y ago`:i>0?`${i}mo ago`:s>0?`${s}d ago`:"Today";let l=a.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"});return t?`${l} (${o})`:l}},7124:(e,t,r)=>{r.d(t,{F:()=>a}),r(7048);let a="https://amritwt.vercel.app"},8999:(e,t,r)=>{e.exports=r(517)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[592],()=>r(3574));module.exports=a})();