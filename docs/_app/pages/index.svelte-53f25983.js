var O=Object.defineProperty,b=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var $=(n,a,e)=>a in n?O(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,h=(n,a)=>{for(var e in a||(a={}))T.call(a,e)&&$(n,e,a[e]);if(L)for(var e of L(a))E.call(a,e)&&$(n,e,a[e]);return n},y=(n,a)=>b(n,R(a));import{S as v,i as I,s as B,w as D,x as P,y as j,G as C,q as G,o as S,B as k,I as x,P as _}from"../chunks/vendor-ff875600.js";import{d as m}from"../chunks/stores-f002070f.js";import{L as q}from"../chunks/Land-73f4ea18.js";const M={MODE:"production",DEV:!1,PROD:!0,BASE_URL:"/_app/",API_ROOT:"https://api-lok-live.leagueofkingdoms.com/api"},U=5e3,W=1,Y=100,V=n=>new Promise(a=>setTimeout(()=>a(),n)),z=async(n,a={},e)=>{let t=null,o;if(typeof AbortController=="function"){const{timeout:w=U}=a,r=new AbortController;t=setTimeout(()=>r.abort(),w),typeof e=="function"?o=await e(n,y(h({},a),{signal:r.signal})):o=await fetch(n,y(h({},a),{signal:r.signal}))}else typeof e=="function"?o=await e(n,a):o=await fetch(n,a);return t!==null&&clearTimeout(t),o},A=async(n,a={},e,t=W)=>{try{return await z(n,a,e)}catch(o){if(console.error(o),t===1)throw o;return await V(Y),A(n,a,e,t-1)}},g=(n,a,e,t,o)=>A(`${M.API_ROOT}/stat/land/contribution?landId=${n}&from=${a}&to=${e}`,o,t);function F(n){let a,e;return a=new q({props:{id:J,data:n[0]}}),{c(){D(a.$$.fragment)},l(t){P(a.$$.fragment,t)},m(t,o){j(a,t,o),e=!0},p:C,i(t){e||(G(a.$$.fragment,t),e=!0)},o(t){S(a.$$.fragment,t),e=!1},d(t){k(a,t)}}}let d="2022-03-22",i="2022-03-28",H=134223,J=0;function K(n,a,e){let t;x(n,m,r=>e(1,t=r));let o=[134223,134224,134225,133969,133968,133967,133711,133712,133713,133455,133456,133457,150949];if(Array.isArray(t.lands))if(t.lands.length===0)_(m,t.lands=[{start:d,end:i,data:{}}],t),t.lands.map((r,s)=>{r.start===d&&r.end===i&&o.map(async f=>{let l=await g(f,d,i).catch(u=>console.error(u)),c=await(l==null?void 0:l.json().catch(u=>console.error(u)));typeof r.data=="undefined"&&_(m,t.lands[s].data={},t),_(m,t.lands[s].data[f]=c,t)})}),console.log("Loaded from server");else{let r=!1;t.lands.map(s=>{s.start===d&&s.end===i&&(r=!0)}),r?t.lands.map((s,f)=>{s.start===d&&s.end===i&&(s.data&&Object.keys(s.data).length===0?(o.map(async l=>{let c=await g(l,d,i).catch(p=>console.error(p)),u=await(c==null?void 0:c.json().catch(p=>console.error(p)));typeof s.data=="undefined"&&_(m,t.lands[f].data={},t),_(m,t.lands[f].data[l]=u,t)}),console.log("Loaded from server")):console.log("Loaded from cache"))}):(t.lands.push({start:d,end:i,data:{}}),t.lands.map((s,f)=>{s.start===d&&s.end===i&&o.map(async l=>{let c=await g(l,d,i).catch(p=>console.error(p)),u=await(c==null?void 0:c.json().catch(p=>console.error(p)));typeof s.data=="undefined"&&_(m,t.lands[f].data={},t),_(m,t.lands[f].data[l]=u,t)})}),console.log("Loaded from server"))}return[t==null?void 0:t.lands[0].data[H].contribution]}class tt extends v{constructor(a){super();I(this,a,K,F,B,{})}}export{tt as default};
//# sourceMappingURL=index.svelte-53f25983.js.map