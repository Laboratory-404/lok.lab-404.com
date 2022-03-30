import{S as te,i as ae,s as le,L as ne,C as z,e as w,c as y,a as E,d as _,Q as U,g as R,R as se,M as oe,N as re,O as ie,z as de,q as v,o as T,T as W,U as fe,V as ce,l as B,k as N,w as A,W as ue,X as _e,m as H,x as F,F as h,y as Y,B as K,b as L,n as G,p as M,G as j,Y as he,Z as me,_ as pe,$ as be,t as I,h as S,a0 as ge,a1 as $e,a2 as ke,a3 as ve,j as O,H as we,f as V}from"./vendor-a6ce574c.js";function ye(r){let t,n,e,a,l;const o=r[3].default,s=ne(o,r,r[2],null);let f=[{class:n="box "+(r[0]?"aside":"")},r[1]],u={};for(let c=0;c<f.length;c+=1)u=z(u,f[c]);return{c(){t=w("div"),s&&s.c(),this.h()},l(c){t=y(c,"DIV",{class:!0});var i=E(t);s&&s.l(i),i.forEach(_),this.h()},h(){U(t,u)},m(c,i){R(c,t,i),s&&s.m(t,null),e=!0,a||(l=se(t,"click",r[4]),a=!0)},p(c,[i]){s&&s.p&&(!e||i&4)&&oe(s,o,c,c[2],e?ie(o,c[2],i,null):re(c[2]),null),U(t,u=de(f,[(!e||i&1&&n!==(n="box "+(c[0]?"aside":"")))&&{class:n},i&2&&c[1]]))},i(c){e||(v(s,c),e=!0)},o(c){T(s,c),e=!1},d(c){c&&_(t),s&&s.d(c),a=!1,l()}}}function Ee(r,t,n){let{$$slots:e={},$$scope:a}=t,{aside:l=!1}=t;function o(s){fe.call(this,r,s)}return r.$$set=s=>{n(1,t=z(z({},t),W(s))),"aside"in s&&n(0,l=s.aside),"$$scope"in s&&n(2,a=s.$$scope)},t=W(t),[l,t,a,e,o]}class Te extends te{constructor(t){super();ae(this,t,Ee,ye,le,{aside:0})}}function X(r,t,n){const e=r.slice();return e[6]=t[n],e}function Re(r){let t,n,e=r[3]&&Z(r);return{c(){t=w("aside"),e&&e.c(),this.h()},l(a){t=y(a,"ASIDE",{class:!0});var l=E(t);e&&e.l(l),l.forEach(_),this.h()},h(){L(t,"class","search")},m(a,l){R(a,t,l),e&&e.m(t,null),n=!0},p(a,l){a[3]?e?(e.p(a,l),l&8&&v(e,1)):(e=Z(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),T(e,1,1,()=>{e=null}),M())},i(a){n||(v(e),n=!0)},o(a){T(e),n=!1},d(a){a&&_(t),e&&e.d()}}}function Z(r){let t,n;return t=new me({props:{id:"land-"+r[0]}}),{c(){A(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){Y(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.id="land-"+e[0]),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){T(t.$$.fragment,e),n=!1},d(e){K(t,e)}}}function De(r){let t;return{c(){t=I("No data")},l(n){t=S(n,"No data")},m(n,e){R(n,t,e)},p:j,i:j,o:j,d(n){n&&_(t)}}}function Ne(r){let t,n,e;function a(o){r[5](o)}let l={id:"land-"+r[0],settings:r[4],data:r[1],$$slots:{default:[He]},$$scope:{ctx:r}};return r[2]!==void 0&&(l.dataRows=r[2]),t=new ge({props:l}),$e.push(()=>ke(t,"dataRows",a)),{c(){A(t.$$.fragment)},l(o){F(t.$$.fragment,o)},m(o,s){Y(t,o,s),e=!0},p(o,s){const f={};s&1&&(f.id="land-"+o[0]),s&2&&(f.data=o[1]),s&524&&(f.$$scope={dirty:s,ctx:o}),!n&&s&4&&(n=!0,f.dataRows=o[2],ve(()=>n=!1)),t.$set(f)},i(o){e||(v(t.$$.fragment,o),e=!0)},o(o){T(t.$$.fragment,o),e=!1},d(o){K(t,o)}}}function J(r){let t,n=r[3],e=[];for(let a=0;a<n.length;a+=1)e[a]=x(X(r,n,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=B()},l(a){for(let l=0;l<e.length;l+=1)e[l].l(a);t=B()},m(a,l){for(let o=0;o<e.length;o+=1)e[o].m(a,l);R(a,t,l)},p(a,l){if(l&8){n=a[3];let o;for(o=0;o<n.length;o+=1){const s=X(a,n,o);e[o]?e[o].p(s,l):(e[o]=x(s),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},d(a){we(e,a),a&&_(t)}}}function x(r){let t,n,e=r[6].name+"",a,l,o,s=r[6].continent+"",f,u,c,i=r[6].kingdomId+"",d,p,k,m=r[6].total+"",b,$;return{c(){t=w("tr"),n=w("td"),a=I(e),l=N(),o=w("td"),f=I(s),u=N(),c=w("td"),d=I(i),p=N(),k=w("td"),b=I(m),$=N()},l(D){t=y(D,"TR",{});var g=E(t);n=y(g,"TD",{});var C=E(n);a=S(C,e),C.forEach(_),l=H(g),o=y(g,"TD",{});var P=E(o);f=S(P,s),P.forEach(_),u=H(g),c=y(g,"TD",{});var q=E(c);d=S(q,i),q.forEach(_),p=H(g),k=y(g,"TD",{});var Q=E(k);b=S(Q,m),Q.forEach(_),$=H(g),g.forEach(_)},m(D,g){R(D,t,g),h(t,n),h(n,a),h(t,l),h(t,o),h(o,f),h(t,u),h(t,c),h(c,d),h(t,p),h(t,k),h(k,b),h(t,$)},p(D,g){g&8&&e!==(e=D[6].name+"")&&O(a,e),g&8&&s!==(s=D[6].continent+"")&&O(f,s),g&8&&i!==(i=D[6].kingdomId+"")&&O(d,i),g&8&&m!==(m=D[6].total+"")&&O(b,m)},d(D){D&&_(t)}}}function He(r){let t,n,e,a,l,o,s,f,u,c,i,d,p,k,m=r[2]&&J(r);return{c(){t=w("thead"),n=w("th"),e=I("Name"),a=N(),l=w("th"),o=I("Continent"),s=N(),f=w("th"),u=I("Kingdom"),c=N(),i=w("th"),d=I("Total"),p=N(),k=w("tbody"),m&&m.c(),this.h()},l(b){t=y(b,"THEAD",{});var $=E(t);n=y($,"TH",{"data-key":!0,style:!0});var D=E(n);e=S(D,"Name"),D.forEach(_),a=H($),l=y($,"TH",{"data-key":!0,style:!0});var g=E(l);o=S(g,"Continent"),g.forEach(_),s=H($),f=y($,"TH",{"data-key":!0,style:!0});var C=E(f);u=S(C,"Kingdom"),C.forEach(_),c=H($),i=y($,"TH",{"data-key":!0,style:!0});var P=E(i);d=S(P,"Total"),P.forEach(_),$.forEach(_),p=H(b),k=y(b,"TBODY",{});var q=E(k);m&&m.l(q),q.forEach(_),this.h()},h(){L(n,"data-key","name"),V(n,"width","100px"),L(l,"data-key","continent"),V(l,"width","100px"),L(f,"data-key","kingdomId"),V(f,"width","100px"),L(i,"data-key","total"),V(i,"width","100px")},m(b,$){R(b,t,$),h(t,n),h(n,e),h(t,a),h(t,l),h(l,o),h(t,s),h(t,f),h(f,u),h(t,c),h(t,i),h(i,d),R(b,p,$),R(b,k,$),m&&m.m(k,null)},p(b,$){b[2]?m?m.p(b,$):(m=J(b),m.c(),m.m(k,null)):m&&(m.d(1),m=null)},d(b){b&&_(t),b&&_(p),b&&_(k),m&&m.d()}}}function Ie(r){let t,n,e=r[3]&&ee(r);return{c(){t=w("aside"),e&&e.c()},l(a){t=y(a,"ASIDE",{});var l=E(t);e&&e.l(l),l.forEach(_)},m(a,l){R(a,t,l),e&&e.m(t,null),n=!0},p(a,l){a[3]?e?(e.p(a,l),l&8&&v(e,1)):(e=ee(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),T(e,1,1,()=>{e=null}),M())},i(a){n||(v(e),n=!0)},o(a){T(e),n=!1},d(a){a&&_(t),e&&e.d()}}}function ee(r){let t,n,e,a;return t=new pe({props:{id:"land-"+r[0]}}),e=new be({props:{id:"land-"+r[0]}}),{c(){A(t.$$.fragment),n=N(),A(e.$$.fragment)},l(l){F(t.$$.fragment,l),n=H(l),F(e.$$.fragment,l)},m(l,o){Y(t,l,o),R(l,n,o),Y(e,l,o),a=!0},p(l,o){const s={};o&1&&(s.id="land-"+l[0]),t.$set(s);const f={};o&1&&(f.id="land-"+l[0]),e.$set(f)},i(l){a||(v(t.$$.fragment,l),v(e.$$.fragment,l),a=!0)},o(l){T(t.$$.fragment,l),T(e.$$.fragment,l),a=!1},d(l){K(t,l),l&&_(n),K(e,l)}}}function Se(r){let t,n,e,a,l,o,s=r[4].detached_search&&Re(r);const f=[Ne,De],u=[];function c(d,p){return d[1]?0:1}n=c(r),e=u[n]=f[n](r);let i=r[4].detached_pagination&&Ie(r);return{c(){s&&s.c(),t=N(),e.c(),a=N(),i&&i.c(),l=B()},l(d){s&&s.l(d),t=H(d),e.l(d),a=H(d),i&&i.l(d),l=B()},m(d,p){s&&s.m(d,p),R(d,t,p),u[n].m(d,p),R(d,a,p),i&&i.m(d,p),R(d,l,p),o=!0},p(d,p){d[4].detached_search&&s.p(d,p);let k=n;n=c(d),n===k?u[n].p(d,p):(G(),T(u[k],1,1,()=>{u[k]=null}),M(),e=u[n],e?e.p(d,p):(e=u[n]=f[n](d),e.c()),v(e,1),e.m(a.parentNode,a)),d[4].detached_pagination&&i.p(d,p)},i(d){o||(v(s),v(e),v(i),o=!0)},o(d){T(s),T(e),T(i),o=!1},d(d){s&&s.d(d),d&&_(t),u[n].d(d),d&&_(a),i&&i.d(d),d&&_(l)}}}function Be(r){let t,n=`<style>
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
</style>`,e,a,l,o;return l=new Te({props:{style:"height: 80vh;",$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){t=new ce,e=B(),a=N(),A(l.$$.fragment),this.h()},l(s){const f=ue('[data-svelte="svelte-1pq1ay4"]',document.head);t=_e(f),e=B(),f.forEach(_),a=H(s),F(l.$$.fragment,s),this.h()},h(){t.a=e},m(s,f){t.m(n,document.head),h(document.head,e),R(s,a,f),Y(l,s,f),o=!0},p(s,[f]){(!o||f&1)&&n!==(n=`<style>
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
</style>`)&&t.p(n);const u={};f&527&&(u.$$scope={dirty:f,ctx:s}),l.$set(u)},i(s){o||(v(l.$$.fragment,s),o=!0)},o(s){T(l.$$.fragment,s),o=!1},d(s){_(e),s&&t.d(),s&&_(a),K(l,s)}}}function Ce(r,t,n){let e,a=j,l=()=>(a(),a=he(u,i=>n(3,e=i)),u);r.$$.on_destroy.push(()=>a());let{id:o}=t,{data:s}=t;const f={detached_search:!1,detached_pagination:!1,sortable:!0,pagination:!0,scrollY:!0,rowsPerPage:50,columnFilter:!1,css:!0,labels:{search:"Search...",filter:"Filter",noRows:"No entries to found",info:"Showing {start} to {end} of {rows} entries",previous:"Previous",next:"Next"},blocks:{searchInput:!0,paginationButtons:!1,paginationRowCount:!1}};let u;function c(i){u=i,l(n(2,u))}return r.$$set=i=>{"id"in i&&n(0,o=i.id),"data"in i&&n(1,s=i.data)},[o,s,u,e,f,c]}class qe extends te{constructor(t){super();ae(this,t,Ce,Be,le,{id:0,data:1})}}export{qe as L};
