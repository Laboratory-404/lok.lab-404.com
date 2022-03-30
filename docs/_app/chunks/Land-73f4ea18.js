import{S as te,i as ae,s as le,L as ne,C as z,e as y,c as E,a as T,d as _,Q as U,g as R,R as se,M as oe,N as re,O as ie,z as fe,q as v,o as w,T as W,U as de,V as ce,W as ue,l as B,k as N,w as C,X as _e,Y as he,m as H,x as P,F as h,y as q,B as L,G as j,Z as me,b as K,n as G,p as M,_ as pe,$ as be,a0 as ge,t as I,h as S,a1 as $e,a2 as ke,a3 as ve,a4 as we,j as O,H as ye,f as V}from"./vendor-ff875600.js";function Ee(r){let t,l,e,a,n;const o=r[3].default,s=ne(o,r,r[2],null);let d=[{class:l="box "+(r[0]?"aside":"")},r[1]],u={};for(let c=0;c<d.length;c+=1)u=z(u,d[c]);return{c(){t=y("div"),s&&s.c(),this.h()},l(c){t=E(c,"DIV",{class:!0});var i=T(t);s&&s.l(i),i.forEach(_),this.h()},h(){U(t,u)},m(c,i){R(c,t,i),s&&s.m(t,null),e=!0,a||(n=se(t,"click",r[4]),a=!0)},p(c,[i]){s&&s.p&&(!e||i&4)&&oe(s,o,c,c[2],e?ie(o,c[2],i,null):re(c[2]),null),U(t,u=fe(d,[(!e||i&1&&l!==(l="box "+(c[0]?"aside":"")))&&{class:l},i&2&&c[1]]))},i(c){e||(v(s,c),e=!0)},o(c){w(s,c),e=!1},d(c){c&&_(t),s&&s.d(c),a=!1,n()}}}function Te(r,t,l){let{$$slots:e={},$$scope:a}=t,{aside:n=!1}=t;function o(s){de.call(this,r,s)}return r.$$set=s=>{l(1,t=z(z({},t),W(s))),"aside"in s&&l(0,n=s.aside),"$$scope"in s&&l(2,a=s.$$scope)},t=W(t),[n,t,a,e,o]}class Re extends te{constructor(t){super();ae(this,t,Te,Ee,le,{aside:0})}}function X(r,t,l){const e=r.slice();return e[6]=t[l],e}function De(r){let t,l,e=r[3]&&Z(r);return{c(){t=y("aside"),e&&e.c(),this.h()},l(a){t=E(a,"ASIDE",{class:!0});var n=T(t);e&&e.l(n),n.forEach(_),this.h()},h(){K(t,"class","search")},m(a,n){R(a,t,n),e&&e.m(t,null),l=!0},p(a,n){a[3]?e?(e.p(a,n),n&8&&v(e,1)):(e=Z(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),w(e,1,1,()=>{e=null}),M())},i(a){l||(v(e),l=!0)},o(a){w(e),l=!1},d(a){a&&_(t),e&&e.d()}}}function Z(r){let t,l;return t=new pe({props:{id:"land-"+r[0]}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){q(t,e,a),l=!0},p(e,a){const n={};a&1&&(n.id="land-"+e[0]),t.$set(n)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Ne(r){let t;return{c(){t=I("No data")},l(l){t=S(l,"No data")},m(l,e){R(l,t,e)},p:j,i:j,o:j,d(l){l&&_(t)}}}function He(r){let t,l,e;function a(o){r[5](o)}let n={id:"land-"+r[0],settings:r[4],data:r[1],$$slots:{default:[Ie]},$$scope:{ctx:r}};return r[2]!==void 0&&(n.dataRows=r[2]),t=new $e({props:n}),ke.push(()=>ve(t,"dataRows",a)),{c(){C(t.$$.fragment)},l(o){P(t.$$.fragment,o)},m(o,s){q(t,o,s),e=!0},p(o,s){const d={};s&1&&(d.id="land-"+o[0]),s&2&&(d.data=o[1]),s&524&&(d.$$scope={dirty:s,ctx:o}),!l&&s&4&&(l=!0,d.dataRows=o[2],we(()=>l=!1)),t.$set(d)},i(o){e||(v(t.$$.fragment,o),e=!0)},o(o){w(t.$$.fragment,o),e=!1},d(o){L(t,o)}}}function J(r){let t,l=r[3],e=[];for(let a=0;a<l.length;a+=1)e[a]=x(X(r,l,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=B()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);t=B()},m(a,n){for(let o=0;o<e.length;o+=1)e[o].m(a,n);R(a,t,n)},p(a,n){if(n&8){l=a[3];let o;for(o=0;o<l.length;o+=1){const s=X(a,l,o);e[o]?e[o].p(s,n):(e[o]=x(s),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(a){ye(e,a),a&&_(t)}}}function x(r){let t,l,e=r[6].name+"",a,n,o,s=r[6].continent+"",d,u,c,i=r[6].kingdomId+"",f,p,k,m=r[6].total+"",b,$;return{c(){t=y("tr"),l=y("td"),a=I(e),n=N(),o=y("td"),d=I(s),u=N(),c=y("td"),f=I(i),p=N(),k=y("td"),b=I(m),$=N()},l(D){t=E(D,"TR",{});var g=T(t);l=E(g,"TD",{});var A=T(l);a=S(A,e),A.forEach(_),n=H(g),o=E(g,"TD",{});var F=T(o);d=S(F,s),F.forEach(_),u=H(g),c=E(g,"TD",{});var Y=T(c);f=S(Y,i),Y.forEach(_),p=H(g),k=E(g,"TD",{});var Q=T(k);b=S(Q,m),Q.forEach(_),$=H(g),g.forEach(_)},m(D,g){R(D,t,g),h(t,l),h(l,a),h(t,n),h(t,o),h(o,d),h(t,u),h(t,c),h(c,f),h(t,p),h(t,k),h(k,b),h(t,$)},p(D,g){g&8&&e!==(e=D[6].name+"")&&O(a,e),g&8&&s!==(s=D[6].continent+"")&&O(d,s),g&8&&i!==(i=D[6].kingdomId+"")&&O(f,i),g&8&&m!==(m=D[6].total+"")&&O(b,m)},d(D){D&&_(t)}}}function Ie(r){let t,l,e,a,n,o,s,d,u,c,i,f,p,k,m=r[2]&&J(r);return{c(){t=y("thead"),l=y("th"),e=I("Name"),a=N(),n=y("th"),o=I("Continent"),s=N(),d=y("th"),u=I("Kingdom"),c=N(),i=y("th"),f=I("Total"),p=N(),k=y("tbody"),m&&m.c(),this.h()},l(b){t=E(b,"THEAD",{});var $=T(t);l=E($,"TH",{"data-key":!0,style:!0});var D=T(l);e=S(D,"Name"),D.forEach(_),a=H($),n=E($,"TH",{"data-key":!0,style:!0});var g=T(n);o=S(g,"Continent"),g.forEach(_),s=H($),d=E($,"TH",{"data-key":!0,style:!0});var A=T(d);u=S(A,"Kingdom"),A.forEach(_),c=H($),i=E($,"TH",{"data-key":!0,style:!0});var F=T(i);f=S(F,"Total"),F.forEach(_),$.forEach(_),p=H(b),k=E(b,"TBODY",{});var Y=T(k);m&&m.l(Y),Y.forEach(_),this.h()},h(){K(l,"data-key","name"),V(l,"width","100px"),K(n,"data-key","continent"),V(n,"width","100px"),K(d,"data-key","kingdomId"),V(d,"width","100px"),K(i,"data-key","total"),V(i,"width","100px")},m(b,$){R(b,t,$),h(t,l),h(l,e),h(t,a),h(t,n),h(n,o),h(t,s),h(t,d),h(d,u),h(t,c),h(t,i),h(i,f),R(b,p,$),R(b,k,$),m&&m.m(k,null)},p(b,$){b[2]?m?m.p(b,$):(m=J(b),m.c(),m.m(k,null)):m&&(m.d(1),m=null)},d(b){b&&_(t),b&&_(p),b&&_(k),m&&m.d()}}}function Se(r){let t,l,e=r[3]&&ee(r);return{c(){t=y("aside"),e&&e.c()},l(a){t=E(a,"ASIDE",{});var n=T(t);e&&e.l(n),n.forEach(_)},m(a,n){R(a,t,n),e&&e.m(t,null),l=!0},p(a,n){a[3]?e?(e.p(a,n),n&8&&v(e,1)):(e=ee(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),w(e,1,1,()=>{e=null}),M())},i(a){l||(v(e),l=!0)},o(a){w(e),l=!1},d(a){a&&_(t),e&&e.d()}}}function ee(r){let t,l,e,a;return t=new be({props:{id:"land-"+r[0]}}),e=new ge({props:{id:"land-"+r[0]}}),{c(){C(t.$$.fragment),l=N(),C(e.$$.fragment)},l(n){P(t.$$.fragment,n),l=H(n),P(e.$$.fragment,n)},m(n,o){q(t,n,o),R(n,l,o),q(e,n,o),a=!0},p(n,o){const s={};o&1&&(s.id="land-"+n[0]),t.$set(s);const d={};o&1&&(d.id="land-"+n[0]),e.$set(d)},i(n){a||(v(t.$$.fragment,n),v(e.$$.fragment,n),a=!0)},o(n){w(t.$$.fragment,n),w(e.$$.fragment,n),a=!1},d(n){L(t,n),n&&_(l),L(e,n)}}}function Be(r){let t,l,e,a,n,o,s=r[4].detached_search&&De(r);const d=[He,Ne],u=[];function c(f,p){return f[1]?0:1}l=c(r),e=u[l]=d[l](r);let i=r[4].detached_pagination&&Se(r);return{c(){s&&s.c(),t=N(),e.c(),a=N(),i&&i.c(),n=B()},l(f){s&&s.l(f),t=H(f),e.l(f),a=H(f),i&&i.l(f),n=B()},m(f,p){s&&s.m(f,p),R(f,t,p),u[l].m(f,p),R(f,a,p),i&&i.m(f,p),R(f,n,p),o=!0},p(f,p){f[4].detached_search&&s.p(f,p);let k=l;l=c(f),l===k?u[l].p(f,p):(G(),w(u[k],1,1,()=>{u[k]=null}),M(),e=u[l],e?e.p(f,p):(e=u[l]=d[l](f),e.c()),v(e,1),e.m(a.parentNode,a)),f[4].detached_pagination&&i.p(f,p)},i(f){o||(v(s),v(e),v(i),o=!0)},o(f){w(s),w(e),w(i),o=!1},d(f){s&&s.d(f),f&&_(t),u[l].d(f),f&&_(a),i&&i.d(f),f&&_(n)}}}function Ce(r){let t,l;return t=new Re({props:{style:"height: 80vh;",$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){C(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){q(t,e,a),l=!0},p(e,a){const n={};a&527&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Pe(r){let t,l=`<style>
	#land-${r[0]} {
		background-color: transparent;
	}

	#land-${r[0]} section.dt-search {
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

	#land-${r[0]} section.dt-table {
		overflow-x: auto;
	}
</style>`,e,a,n,o;return n=new ce({props:{animation:"fade-in 0.3s",once:!0,$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){t=new ue,e=B(),a=N(),C(n.$$.fragment),this.h()},l(s){const d=_e('[data-svelte="svelte-1pq1ay4"]',document.head);t=he(d),e=B(),d.forEach(_),a=H(s),P(n.$$.fragment,s),this.h()},h(){t.a=e},m(s,d){t.m(l,document.head),h(document.head,e),R(s,a,d),q(n,s,d),o=!0},p(s,[d]){(!o||d&1)&&l!==(l=`<style>
	#land-${s[0]} {
		background-color: transparent;
	}

	#land-${s[0]} section.dt-search {
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

	#land-${s[0]} section.dt-table {
		overflow-x: auto;
	}
</style>`)&&t.p(l);const u={};d&527&&(u.$$scope={dirty:d,ctx:s}),n.$set(u)},i(s){o||(v(n.$$.fragment,s),o=!0)},o(s){w(n.$$.fragment,s),o=!1},d(s){_(e),s&&t.d(),s&&_(a),L(n,s)}}}function qe(r,t,l){let e,a=j,n=()=>(a(),a=me(u,i=>l(3,e=i)),u);r.$$.on_destroy.push(()=>a());let{id:o}=t,{data:s}=t;const d={detached_search:!1,detached_pagination:!1,sortable:!0,pagination:!0,scrollY:!0,rowsPerPage:50,columnFilter:!1,css:!0,labels:{search:"Search...",filter:"Filter",noRows:"No entries to found",info:"Showing {start} to {end} of {rows} entries",previous:"Previous",next:"Next"},blocks:{searchInput:!0,paginationButtons:!1,paginationRowCount:!1}};let u;function c(i){u=i,n(l(2,u))}return r.$$set=i=>{"id"in i&&l(0,o=i.id),"data"in i&&l(1,s=i.data)},[o,s,u,e,d,c]}class Ae extends te{constructor(t){super();ae(this,t,qe,Pe,le,{id:0,data:1})}}export{Ae as L};
//# sourceMappingURL=Land-73f4ea18.js.map
