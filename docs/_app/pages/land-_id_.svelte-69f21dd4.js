import{S as J,i as M,s as Z,a1 as te,l as S,k as D,w as C,a2 as ae,a3 as le,d,m as H,x as P,F as u,g as I,y as q,q as k,o as R,B as A,I as ne,e as w,c as E,a as T,b as K,n as x,p as ee,G as j,V as re,W as oe,X as se,Y as ie,t as B,h as N,Q as ce,R as de,T as fe,U as ue,j as G,H as _e,f as O}from"../chunks/vendor-88f8caf4.js";import{d as me}from"../chunks/stores-d1a01a18.js";import{B as he}from"../chunks/Box-ce1f39c0.js";function U(s,t,a){const e=s.slice();return e[7]=t[a],e}function pe(s){let t,a,e=s[2]&&V();return{c(){t=w("aside"),e&&e.c(),this.h()},l(n){t=E(n,"ASIDE",{class:!0});var l=T(t);e&&e.l(l),l.forEach(d),this.h()},h(){K(t,"class","search")},m(n,l){I(n,t,l),e&&e.m(t,null),a=!0},p(n,l){n[2]?e?l&4&&k(e,1):(e=V(),e.c(),k(e,1),e.m(t,null)):e&&(x(),R(e,1,1,()=>{e=null}),ee())},i(n){a||(k(e),a=!0)},o(n){R(e),a=!1},d(n){n&&d(t),e&&e.d()}}}function V(s){let t,a;return t=new oe({props:{id:"my-table"}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){q(t,e,n),a=!0},i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){R(t.$$.fragment,e),a=!1},d(e){A(t,e)}}}function be(s){let t;return{c(){t=B("No data")},l(a){t=N(a,"No data")},m(a,e){I(a,t,e)},p:j,i:j,o:j,d(a){a&&d(t)}}}function ge(s){let t,a,e;function n(o){s[5](o)}let l={settings:s[3],data:s[4],id:"land-"+s[0],style:"--id: "+s[0]+";",$$slots:{default:[$e]},$$scope:{ctx:s}};return s[1]!==void 0&&(l.dataRows=s[1]),t=new ce({props:l}),de.push(()=>fe(t,"dataRows",n)),{c(){C(t.$$.fragment)},l(o){P(t.$$.fragment,o)},m(o,r){q(t,o,r),e=!0},p(o,r){const c={};r&1&&(c.id="land-"+o[0]),r&1&&(c.style="--id: "+o[0]+";"),r&1030&&(c.$$scope={dirty:r,ctx:o}),!a&&r&2&&(a=!0,c.dataRows=o[1],ue(()=>a=!1)),t.$set(c)},i(o){e||(k(t.$$.fragment,o),e=!0)},o(o){R(t.$$.fragment,o),e=!1},d(o){A(t,o)}}}function W(s){let t,a=s[2],e=[];for(let n=0;n<a.length;n+=1)e[n]=X(U(s,a,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=S()},l(n){for(let l=0;l<e.length;l+=1)e[l].l(n);t=S()},m(n,l){for(let o=0;o<e.length;o+=1)e[o].m(n,l);I(n,t,l)},p(n,l){if(l&4){a=n[2];let o;for(o=0;o<a.length;o+=1){const r=U(n,a,o);e[o]?e[o].p(r,l):(e[o]=X(r),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=a.length}},d(n){_e(e,n),n&&d(t)}}}function X(s){let t,a,e=s[7].name+"",n,l,o,r=s[7].continent+"",c,$,g,f=s[7].kingdomId+"",i,m,y,_=s[7].total+"",h,b;return{c(){t=w("tr"),a=w("td"),n=B(e),l=D(),o=w("td"),c=B(r),$=D(),g=w("td"),i=B(f),m=D(),y=w("td"),h=B(_),b=D()},l(v){t=E(v,"TR",{});var p=T(t);a=E(p,"TD",{});var F=T(a);n=N(F,e),F.forEach(d),l=H(p),o=E(p,"TD",{});var L=T(o);c=N(L,r),L.forEach(d),$=H(p),g=E(p,"TD",{});var Y=T(g);i=N(Y,f),Y.forEach(d),m=H(p),y=E(p,"TD",{});var Q=T(y);h=N(Q,_),Q.forEach(d),b=H(p),p.forEach(d)},m(v,p){I(v,t,p),u(t,a),u(a,n),u(t,l),u(t,o),u(o,c),u(t,$),u(t,g),u(g,i),u(t,m),u(t,y),u(y,h),u(t,b)},p(v,p){p&4&&e!==(e=v[7].name+"")&&G(n,e),p&4&&r!==(r=v[7].continent+"")&&G(c,r),p&4&&f!==(f=v[7].kingdomId+"")&&G(i,f),p&4&&_!==(_=v[7].total+"")&&G(h,_)},d(v){v&&d(t)}}}function $e(s){let t,a,e,n,l,o,r,c,$,g,f,i,m,y,_=s[1]&&W(s);return{c(){t=w("thead"),a=w("th"),e=B("Name"),n=D(),l=w("th"),o=B("Continent"),r=D(),c=w("th"),$=B("Kingdom"),g=D(),f=w("th"),i=B("Total"),m=D(),y=w("tbody"),_&&_.c(),this.h()},l(h){t=E(h,"THEAD",{});var b=T(t);a=E(b,"TH",{"data-key":!0,style:!0});var v=T(a);e=N(v,"Name"),v.forEach(d),n=H(b),l=E(b,"TH",{"data-key":!0,style:!0});var p=T(l);o=N(p,"Continent"),p.forEach(d),r=H(b),c=E(b,"TH",{"data-key":!0,style:!0});var F=T(c);$=N(F,"Kingdom"),F.forEach(d),g=H(b),f=E(b,"TH",{"data-key":!0,style:!0});var L=T(f);i=N(L,"Total"),L.forEach(d),b.forEach(d),m=H(h),y=E(h,"TBODY",{});var Y=T(y);_&&_.l(Y),Y.forEach(d),this.h()},h(){K(a,"data-key","name"),O(a,"width","100px"),K(l,"data-key","continent"),O(l,"width","100px"),K(c,"data-key","kingdomId"),O(c,"width","100px"),K(f,"data-key","total"),O(f,"width","100px")},m(h,b){I(h,t,b),u(t,a),u(a,e),u(t,n),u(t,l),u(l,o),u(t,r),u(t,c),u(c,$),u(t,g),u(t,f),u(f,i),I(h,m,b),I(h,y,b),_&&_.m(y,null)},p(h,b){h[1]?_?_.p(h,b):(_=W(h),_.c(),_.m(y,null)):_&&(_.d(1),_=null)},d(h){h&&d(t),h&&d(m),h&&d(y),_&&_.d()}}}function ke(s){let t,a,e=s[2]&&z();return{c(){t=w("aside"),e&&e.c()},l(n){t=E(n,"ASIDE",{});var l=T(t);e&&e.l(l),l.forEach(d)},m(n,l){I(n,t,l),e&&e.m(t,null),a=!0},p(n,l){n[2]?e?l&4&&k(e,1):(e=z(),e.c(),k(e,1),e.m(t,null)):e&&(x(),R(e,1,1,()=>{e=null}),ee())},i(n){a||(k(e),a=!0)},o(n){R(e),a=!1},d(n){n&&d(t),e&&e.d()}}}function z(s){let t,a,e,n;return t=new se({props:{id:"my-table"}}),e=new ie({props:{id:"my-table"}}),{c(){C(t.$$.fragment),a=D(),C(e.$$.fragment)},l(l){P(t.$$.fragment,l),a=H(l),P(e.$$.fragment,l)},m(l,o){q(t,l,o),I(l,a,o),q(e,l,o),n=!0},i(l){n||(k(t.$$.fragment,l),k(e.$$.fragment,l),n=!0)},o(l){R(t.$$.fragment,l),R(e.$$.fragment,l),n=!1},d(l){A(t,l),l&&d(a),A(e,l)}}}function ye(s){let t,a,e,n,l,o,r=s[3].detached_search&&pe(s);const c=[ge,be],$=[];function g(i,m){return i[4]?0:1}a=g(s),e=$[a]=c[a](s);let f=s[3].detached_pagination&&ke(s);return{c(){r&&r.c(),t=D(),e.c(),n=D(),f&&f.c(),l=S()},l(i){r&&r.l(i),t=H(i),e.l(i),n=H(i),f&&f.l(i),l=S()},m(i,m){r&&r.m(i,m),I(i,t,m),$[a].m(i,m),I(i,n,m),f&&f.m(i,m),I(i,l,m),o=!0},p(i,m){i[3].detached_search&&r.p(i,m),e.p(i,m),i[3].detached_pagination&&f.p(i,m)},i(i){o||(k(r),k(e),k(f),o=!0)},o(i){R(r),R(e),R(f),o=!1},d(i){r&&r.d(i),i&&d(t),$[a].d(i),i&&d(n),f&&f.d(i),i&&d(l)}}}function ve(s){let t,a=`<style>
	#land-${s[0]} {
		background-color: transparent;
	}

	#land-${s[0]} section {
		margin-left: 0;
	}

	#land-${s[0]} section.dt-search input {
		margin-left: 0;
		color: var(--accent-color);
		border: 1px solid rgba(255, 204, 0, 0.65);
	}

	#land-${s[0]} section.dt-search input:focus {
		border: 1px solid var(--accent-color);
	}

	#land-${s[0]} section.dt-header thead {
		background-color: var(--bg-color-secondary);
	}

	#land-${s[0]} section.dt-header thead th {
		background-color: transparent;
	}
</style>`,e,n,l,o;return l=new he({props:{style:"height: 80vh;",$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){t=new te,e=S(),n=D(),C(l.$$.fragment),this.h()},l(r){const c=ae('[data-svelte="svelte-hhx7id"]',document.head);t=le(c),e=S(),c.forEach(d),n=H(r),P(l.$$.fragment,r),this.h()},h(){t.a=e},m(r,c){t.m(a,document.head),u(document.head,e),I(r,n,c),q(l,r,c),o=!0},p(r,[c]){(!o||c&1)&&a!==(a=`<style>
	#land-${r[0]} {
		background-color: transparent;
	}

	#land-${r[0]} section {
		margin-left: 0;
	}

	#land-${r[0]} section.dt-search input {
		margin-left: 0;
		color: var(--accent-color);
		border: 1px solid rgba(255, 204, 0, 0.65);
	}

	#land-${r[0]} section.dt-search input:focus {
		border: 1px solid var(--accent-color);
	}

	#land-${r[0]} section.dt-header thead {
		background-color: var(--bg-color-secondary);
	}

	#land-${r[0]} section.dt-header thead th {
		background-color: transparent;
	}
</style>`)&&t.p(a);const $={};c&1031&&($.$$scope={dirty:c,ctx:r}),l.$set($)},i(r){o||(k(l.$$.fragment,r),o=!0)},o(r){R(l.$$.fragment,r),o=!1},d(r){d(e),r&&t.d(),r&&d(n),A(l,r)}}}function we(s,t,a){let e,n,l=j,o=()=>(l(),l=re(g,i=>a(2,n=i)),g);ne(s,me,i=>a(6,e=i)),s.$$.on_destroy.push(()=>l());let{id:r=0}=t;const c={detached_search:!1,detached_pagination:!0,sortable:!0,pagination:!0,scrollY:!0,rowsPerPage:50,columnFilter:!0,css:!0,labels:{search:"Search...",filter:"Filter",noRows:"No entries to found",info:"Showing {start} to {end} of {rows} entries",previous:"Previous",next:"Next"},blocks:{searchInput:!0,paginationButtons:!1,paginationRowCount:!1}};let $=e==null?void 0:e.lands[0].data[r].contribution,g;function f(i){g=i,o(a(1,g))}return s.$$set=i=>{"id"in i&&a(0,r=i.id)},[r,g,n,c,$,f]}class Ee extends J{constructor(t){super();M(this,t,we,ve,Z,{id:0})}}function Te(s){let t,a;return t=new Ee({props:{id:s[0]}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){q(t,e,n),a=!0},p:j,i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){R(t.$$.fragment,e),a=!1},d(e){A(t,e)}}}const Be=async({routeId:s,url:t,params:a})=>({props:{routeId:s,url:t,params:a}});function Ie(s,t,a){let{routeId:e}=t,{params:n}=t,{url:l}=t;console.log(e),console.log(l),console.log(n);let o=n.id;return s.$$set=r=>{"routeId"in r&&a(1,e=r.routeId),"params"in r&&a(2,n=r.params),"url"in r&&a(3,l=r.url)},[o,e,n,l]}class Ne extends J{constructor(t){super();M(this,t,Ie,Te,Z,{routeId:1,params:2,url:3})}}export{Ne as default,Be as load};
