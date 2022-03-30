import{S as Z,i as x,s as ee,a1 as te,l as S,k as H,w as C,a2 as ae,a3 as ne,d as c,m as I,x as P,F as _,g as D,y as q,q as k,o as v,B as A,e as E,c as T,a as R,b as K,n as O,p as Q,G,V as le,W as oe,X as re,Y as se,t as N,h as B,Q as ie,R as de,T as fe,U as ce,j as U,H as ue,f as j,I as _e,u as he}from"../chunks/vendor-88f8caf4.js";import{d as me}from"../chunks/stores-d1a01a18.js";import{B as pe}from"../chunks/Box-ce1f39c0.js";function W(s,t,l){const e=s.slice();return e[6]=t[l],e}function $e(s){let t,l,e=s[3]&&X(s);return{c(){t=E("aside"),e&&e.c(),this.h()},l(a){t=T(a,"ASIDE",{class:!0});var n=R(t);e&&e.l(n),n.forEach(c),this.h()},h(){K(t,"class","search")},m(a,n){D(a,t,n),e&&e.m(t,null),l=!0},p(a,n){a[3]?e?(e.p(a,n),n&8&&k(e,1)):(e=X(a),e.c(),k(e,1),e.m(t,null)):e&&(O(),v(e,1,1,()=>{e=null}),Q())},i(a){l||(k(e),l=!0)},o(a){v(e),l=!1},d(a){a&&c(t),e&&e.d()}}}function X(s){let t,l;return t=new oe({props:{id:"land-"+s[0]}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){q(t,e,a),l=!0},p(e,a){const n={};a&1&&(n.id="land-"+e[0]),t.$set(n)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){A(t,e)}}}function be(s){let t;return{c(){t=N("No data")},l(l){t=B(l,"No data")},m(l,e){D(l,t,e)},p:G,i:G,o:G,d(l){l&&c(t)}}}function ge(s){let t,l,e;function a(o){s[5](o)}let n={id:"land-"+s[0],settings:s[4],data:s[1],$$slots:{default:[ke]},$$scope:{ctx:s}};return s[2]!==void 0&&(n.dataRows=s[2]),t=new ie({props:n}),de.push(()=>fe(t,"dataRows",a)),{c(){C(t.$$.fragment)},l(o){P(t.$$.fragment,o)},m(o,r){q(t,o,r),e=!0},p(o,r){const d={};r&1&&(d.id="land-"+o[0]),r&2&&(d.data=o[1]),r&524&&(d.$$scope={dirty:r,ctx:o}),!l&&r&4&&(l=!0,d.dataRows=o[2],ce(()=>l=!1)),t.$set(d)},i(o){e||(k(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){A(t,o)}}}function z(s){let t,l=s[3],e=[];for(let a=0;a<l.length;a+=1)e[a]=J(W(s,l,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=S()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);t=S()},m(a,n){for(let o=0;o<e.length;o+=1)e[o].m(a,n);D(a,t,n)},p(a,n){if(n&8){l=a[3];let o;for(o=0;o<l.length;o+=1){const r=W(a,l,o);e[o]?e[o].p(r,n):(e[o]=J(r),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(a){ue(e,a),a&&c(t)}}}function J(s){let t,l,e=s[6].name+"",a,n,o,r=s[6].continent+"",d,u,w,f=s[6].kingdomId+"",i,m,g,h=s[6].total+"",p,b;return{c(){t=E("tr"),l=E("td"),a=N(e),n=H(),o=E("td"),d=N(r),u=H(),w=E("td"),i=N(f),m=H(),g=E("td"),p=N(h),b=H()},l(y){t=T(y,"TR",{});var $=R(t);l=T($,"TD",{});var F=R(l);a=B(F,e),F.forEach(c),n=I($),o=T($,"TD",{});var L=R(o);d=B(L,r),L.forEach(c),u=I($),w=T($,"TD",{});var Y=R(w);i=B(Y,f),Y.forEach(c),m=I($),g=T($,"TD",{});var V=R(g);p=B(V,h),V.forEach(c),b=I($),$.forEach(c)},m(y,$){D(y,t,$),_(t,l),_(l,a),_(t,n),_(t,o),_(o,d),_(t,u),_(t,w),_(w,i),_(t,m),_(t,g),_(g,p),_(t,b)},p(y,$){$&8&&e!==(e=y[6].name+"")&&U(a,e),$&8&&r!==(r=y[6].continent+"")&&U(d,r),$&8&&f!==(f=y[6].kingdomId+"")&&U(i,f),$&8&&h!==(h=y[6].total+"")&&U(p,h)},d(y){y&&c(t)}}}function ke(s){let t,l,e,a,n,o,r,d,u,w,f,i,m,g,h=s[2]&&z(s);return{c(){t=E("thead"),l=E("th"),e=N("Name"),a=H(),n=E("th"),o=N("Continent"),r=H(),d=E("th"),u=N("Kingdom"),w=H(),f=E("th"),i=N("Total"),m=H(),g=E("tbody"),h&&h.c(),this.h()},l(p){t=T(p,"THEAD",{});var b=R(t);l=T(b,"TH",{"data-key":!0,style:!0});var y=R(l);e=B(y,"Name"),y.forEach(c),a=I(b),n=T(b,"TH",{"data-key":!0,style:!0});var $=R(n);o=B($,"Continent"),$.forEach(c),r=I(b),d=T(b,"TH",{"data-key":!0,style:!0});var F=R(d);u=B(F,"Kingdom"),F.forEach(c),w=I(b),f=T(b,"TH",{"data-key":!0,style:!0});var L=R(f);i=B(L,"Total"),L.forEach(c),b.forEach(c),m=I(p),g=T(p,"TBODY",{});var Y=R(g);h&&h.l(Y),Y.forEach(c),this.h()},h(){K(l,"data-key","name"),j(l,"width","100px"),K(n,"data-key","continent"),j(n,"width","100px"),K(d,"data-key","kingdomId"),j(d,"width","100px"),K(f,"data-key","total"),j(f,"width","100px")},m(p,b){D(p,t,b),_(t,l),_(l,e),_(t,a),_(t,n),_(n,o),_(t,r),_(t,d),_(d,u),_(t,w),_(t,f),_(f,i),D(p,m,b),D(p,g,b),h&&h.m(g,null)},p(p,b){p[2]?h?h.p(p,b):(h=z(p),h.c(),h.m(g,null)):h&&(h.d(1),h=null)},d(p){p&&c(t),p&&c(m),p&&c(g),h&&h.d()}}}function we(s){let t,l,e=s[3]&&M(s);return{c(){t=E("aside"),e&&e.c()},l(a){t=T(a,"ASIDE",{});var n=R(t);e&&e.l(n),n.forEach(c)},m(a,n){D(a,t,n),e&&e.m(t,null),l=!0},p(a,n){a[3]?e?(e.p(a,n),n&8&&k(e,1)):(e=M(a),e.c(),k(e,1),e.m(t,null)):e&&(O(),v(e,1,1,()=>{e=null}),Q())},i(a){l||(k(e),l=!0)},o(a){v(e),l=!1},d(a){a&&c(t),e&&e.d()}}}function M(s){let t,l,e,a;return t=new re({props:{id:"land-"+s[0]}}),e=new se({props:{id:"land-"+s[0]}}),{c(){C(t.$$.fragment),l=H(),C(e.$$.fragment)},l(n){P(t.$$.fragment,n),l=I(n),P(e.$$.fragment,n)},m(n,o){q(t,n,o),D(n,l,o),q(e,n,o),a=!0},p(n,o){const r={};o&1&&(r.id="land-"+n[0]),t.$set(r);const d={};o&1&&(d.id="land-"+n[0]),e.$set(d)},i(n){a||(k(t.$$.fragment,n),k(e.$$.fragment,n),a=!0)},o(n){v(t.$$.fragment,n),v(e.$$.fragment,n),a=!1},d(n){A(t,n),n&&c(l),A(e,n)}}}function ve(s){let t,l,e,a,n,o,r=s[4].detached_search&&$e(s);const d=[ge,be],u=[];function w(i,m){return i[1]?0:1}l=w(s),e=u[l]=d[l](s);let f=s[4].detached_pagination&&we(s);return{c(){r&&r.c(),t=H(),e.c(),a=H(),f&&f.c(),n=S()},l(i){r&&r.l(i),t=I(i),e.l(i),a=I(i),f&&f.l(i),n=S()},m(i,m){r&&r.m(i,m),D(i,t,m),u[l].m(i,m),D(i,a,m),f&&f.m(i,m),D(i,n,m),o=!0},p(i,m){i[4].detached_search&&r.p(i,m);let g=l;l=w(i),l===g?u[l].p(i,m):(O(),v(u[g],1,1,()=>{u[g]=null}),Q(),e=u[l],e?e.p(i,m):(e=u[l]=d[l](i),e.c()),k(e,1),e.m(a.parentNode,a)),i[4].detached_pagination&&f.p(i,m)},i(i){o||(k(r),k(e),k(f),o=!0)},o(i){v(r),v(e),v(f),o=!1},d(i){r&&r.d(i),i&&c(t),u[l].d(i),i&&c(a),f&&f.d(i),i&&c(n)}}}function ye(s){let t,l=`<style>
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
</style>`,e,a,n,o;return n=new pe({props:{style:"height: 80vh;",$$slots:{default:[ve]},$$scope:{ctx:s}}}),{c(){t=new te,e=S(),a=H(),C(n.$$.fragment),this.h()},l(r){const d=ae('[data-svelte="svelte-hhx7id"]',document.head);t=ne(d),e=S(),d.forEach(c),a=I(r),P(n.$$.fragment,r),this.h()},h(){t.a=e},m(r,d){t.m(l,document.head),_(document.head,e),D(r,a,d),q(n,r,d),o=!0},p(r,[d]){(!o||d&1)&&l!==(l=`<style>
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
</style>`)&&t.p(l);const u={};d&527&&(u.$$scope={dirty:d,ctx:r}),n.$set(u)},i(r){o||(k(n.$$.fragment,r),o=!0)},o(r){v(n.$$.fragment,r),o=!1},d(r){c(e),r&&t.d(),r&&c(a),A(n,r)}}}function Ee(s,t,l){let e,a=G,n=()=>(a(),a=le(u,f=>l(3,e=f)),u);s.$$.on_destroy.push(()=>a());let{id:o}=t,{data:r}=t;const d={detached_search:!1,detached_pagination:!1,sortable:!0,pagination:!0,scrollY:!0,rowsPerPage:50,columnFilter:!1,css:!0,labels:{search:"Search...",filter:"Filter",noRows:"No entries to found",info:"Showing {start} to {end} of {rows} entries",previous:"Previous",next:"Next"},blocks:{searchInput:!0,paginationButtons:!1,paginationRowCount:!1}};let u;function w(f){u=f,n(l(2,u))}return s.$$set=f=>{"id"in f&&l(0,o=f.id),"data"in f&&l(1,r=f.data)},[o,r,u,e,d,w]}class Te extends Z{constructor(t){super();x(this,t,Ee,ye,ee,{id:0,data:1})}}function Re(s){let t,l;return t=new Te({props:{id:s[1],data:s[0]}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){q(t,e,a),l=!0},p(e,[a]){const n={};a&2&&(n.id=e[1]),a&1&&(n.data=e[0]),t.$set(n)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){A(t,e)}}}const Be=async({params:s})=>({props:{params:s}});function De(s,t,l){let e,a;_e(s,me,r=>l(3,a=r));let{params:n}=t,o;return he(()=>{l(0,o=a==null?void 0:a.lands[0].data[e].contribution)}),s.$$set=r=>{"params"in r&&l(2,n=r.params)},s.$$.update=()=>{s.$$.dirty&4&&l(1,e=n.id)},[o,e,n]}class Se extends Z{constructor(t){super();x(this,t,De,Re,ee,{params:2})}}export{Se as default,Be as load};
