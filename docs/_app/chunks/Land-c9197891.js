import{S as te,i as ae,s as le,L as ne,C as z,e as w,c as y,a as E,d as _,Q as U,g as R,R as se,M as oe,N as ie,O as re,z as fe,q as v,o as T,T as W,U as de,V as ce,l as B,k as N,w as A,W as ue,X as _e,m as H,x as F,F as h,y as Y,B as K,b as q,n as G,p as M,G as j,Y as he,Z as me,_ as pe,$ as be,t as I,h as S,a0 as ge,a1 as $e,a2 as ke,a3 as ve,j as O,H as we,f as V}from"./vendor-a6ce574c.js";function ye(i){let t,n,e,a,l;const o=i[3].default,s=ne(o,i,i[2],null);let d=[{class:n="box "+(i[0]?"aside":"")},i[1]],u={};for(let c=0;c<d.length;c+=1)u=z(u,d[c]);return{c(){t=w("div"),s&&s.c(),this.h()},l(c){t=y(c,"DIV",{class:!0});var r=E(t);s&&s.l(r),r.forEach(_),this.h()},h(){U(t,u)},m(c,r){R(c,t,r),s&&s.m(t,null),e=!0,a||(l=se(t,"click",i[4]),a=!0)},p(c,[r]){s&&s.p&&(!e||r&4)&&oe(s,o,c,c[2],e?re(o,c[2],r,null):ie(c[2]),null),U(t,u=fe(d,[(!e||r&1&&n!==(n="box "+(c[0]?"aside":"")))&&{class:n},r&2&&c[1]]))},i(c){e||(v(s,c),e=!0)},o(c){T(s,c),e=!1},d(c){c&&_(t),s&&s.d(c),a=!1,l()}}}function Ee(i,t,n){let{$$slots:e={},$$scope:a}=t,{aside:l=!1}=t;function o(s){de.call(this,i,s)}return i.$$set=s=>{n(1,t=z(z({},t),W(s))),"aside"in s&&n(0,l=s.aside),"$$scope"in s&&n(2,a=s.$$scope)},t=W(t),[l,t,a,e,o]}class Te extends te{constructor(t){super();ae(this,t,Ee,ye,le,{aside:0})}}function X(i,t,n){const e=i.slice();return e[6]=t[n],e}function Re(i){let t,n,e=i[3]&&Z(i);return{c(){t=w("aside"),e&&e.c(),this.h()},l(a){t=y(a,"ASIDE",{class:!0});var l=E(t);e&&e.l(l),l.forEach(_),this.h()},h(){q(t,"class","search")},m(a,l){R(a,t,l),e&&e.m(t,null),n=!0},p(a,l){a[3]?e?(e.p(a,l),l&8&&v(e,1)):(e=Z(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),T(e,1,1,()=>{e=null}),M())},i(a){n||(v(e),n=!0)},o(a){T(e),n=!1},d(a){a&&_(t),e&&e.d()}}}function Z(i){let t,n;return t=new me({props:{id:"land-"+i[0]}}),{c(){A(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){Y(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.id="land-"+e[0]),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){T(t.$$.fragment,e),n=!1},d(e){K(t,e)}}}function De(i){let t;return{c(){t=I("No data")},l(n){t=S(n,"No data")},m(n,e){R(n,t,e)},p:j,i:j,o:j,d(n){n&&_(t)}}}function Ne(i){let t,n,e;function a(o){i[5](o)}let l={id:"land-"+i[0],settings:i[4],data:i[1],$$slots:{default:[He]},$$scope:{ctx:i}};return i[2]!==void 0&&(l.dataRows=i[2]),t=new ge({props:l}),$e.push(()=>ke(t,"dataRows",a)),{c(){A(t.$$.fragment)},l(o){F(t.$$.fragment,o)},m(o,s){Y(t,o,s),e=!0},p(o,s){const d={};s&1&&(d.id="land-"+o[0]),s&2&&(d.data=o[1]),s&524&&(d.$$scope={dirty:s,ctx:o}),!n&&s&4&&(n=!0,d.dataRows=o[2],ve(()=>n=!1)),t.$set(d)},i(o){e||(v(t.$$.fragment,o),e=!0)},o(o){T(t.$$.fragment,o),e=!1},d(o){K(t,o)}}}function J(i){let t,n=i[3],e=[];for(let a=0;a<n.length;a+=1)e[a]=x(X(i,n,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=B()},l(a){for(let l=0;l<e.length;l+=1)e[l].l(a);t=B()},m(a,l){for(let o=0;o<e.length;o+=1)e[o].m(a,l);R(a,t,l)},p(a,l){if(l&8){n=a[3];let o;for(o=0;o<n.length;o+=1){const s=X(a,n,o);e[o]?e[o].p(s,l):(e[o]=x(s),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},d(a){we(e,a),a&&_(t)}}}function x(i){let t,n,e=i[6].name+"",a,l,o,s=i[6].continent+"",d,u,c,r=i[6].kingdomId+"",f,p,k,m=i[6].total+"",b,$;return{c(){t=w("tr"),n=w("td"),a=I(e),l=N(),o=w("td"),d=I(s),u=N(),c=w("td"),f=I(r),p=N(),k=w("td"),b=I(m),$=N()},l(D){t=y(D,"TR",{});var g=E(t);n=y(g,"TD",{});var C=E(n);a=S(C,e),C.forEach(_),l=H(g),o=y(g,"TD",{});var P=E(o);d=S(P,s),P.forEach(_),u=H(g),c=y(g,"TD",{});var L=E(c);f=S(L,r),L.forEach(_),p=H(g),k=y(g,"TD",{});var Q=E(k);b=S(Q,m),Q.forEach(_),$=H(g),g.forEach(_)},m(D,g){R(D,t,g),h(t,n),h(n,a),h(t,l),h(t,o),h(o,d),h(t,u),h(t,c),h(c,f),h(t,p),h(t,k),h(k,b),h(t,$)},p(D,g){g&8&&e!==(e=D[6].name+"")&&O(a,e),g&8&&s!==(s=D[6].continent+"")&&O(d,s),g&8&&r!==(r=D[6].kingdomId+"")&&O(f,r),g&8&&m!==(m=D[6].total+"")&&O(b,m)},d(D){D&&_(t)}}}function He(i){let t,n,e,a,l,o,s,d,u,c,r,f,p,k,m=i[2]&&J(i);return{c(){t=w("thead"),n=w("th"),e=I("Name"),a=N(),l=w("th"),o=I("Continent"),s=N(),d=w("th"),u=I("Kingdom"),c=N(),r=w("th"),f=I("Total"),p=N(),k=w("tbody"),m&&m.c(),this.h()},l(b){t=y(b,"THEAD",{});var $=E(t);n=y($,"TH",{"data-key":!0,style:!0});var D=E(n);e=S(D,"Name"),D.forEach(_),a=H($),l=y($,"TH",{"data-key":!0,style:!0});var g=E(l);o=S(g,"Continent"),g.forEach(_),s=H($),d=y($,"TH",{"data-key":!0,style:!0});var C=E(d);u=S(C,"Kingdom"),C.forEach(_),c=H($),r=y($,"TH",{"data-key":!0,style:!0});var P=E(r);f=S(P,"Total"),P.forEach(_),$.forEach(_),p=H(b),k=y(b,"TBODY",{});var L=E(k);m&&m.l(L),L.forEach(_),this.h()},h(){q(n,"data-key","name"),V(n,"width","100px"),q(l,"data-key","continent"),V(l,"width","100px"),q(d,"data-key","kingdomId"),V(d,"width","100px"),q(r,"data-key","total"),V(r,"width","100px")},m(b,$){R(b,t,$),h(t,n),h(n,e),h(t,a),h(t,l),h(l,o),h(t,s),h(t,d),h(d,u),h(t,c),h(t,r),h(r,f),R(b,p,$),R(b,k,$),m&&m.m(k,null)},p(b,$){b[2]?m?m.p(b,$):(m=J(b),m.c(),m.m(k,null)):m&&(m.d(1),m=null)},d(b){b&&_(t),b&&_(p),b&&_(k),m&&m.d()}}}function Ie(i){let t,n,e=i[3]&&ee(i);return{c(){t=w("aside"),e&&e.c()},l(a){t=y(a,"ASIDE",{});var l=E(t);e&&e.l(l),l.forEach(_)},m(a,l){R(a,t,l),e&&e.m(t,null),n=!0},p(a,l){a[3]?e?(e.p(a,l),l&8&&v(e,1)):(e=ee(a),e.c(),v(e,1),e.m(t,null)):e&&(G(),T(e,1,1,()=>{e=null}),M())},i(a){n||(v(e),n=!0)},o(a){T(e),n=!1},d(a){a&&_(t),e&&e.d()}}}function ee(i){let t,n,e,a;return t=new pe({props:{id:"land-"+i[0]}}),e=new be({props:{id:"land-"+i[0]}}),{c(){A(t.$$.fragment),n=N(),A(e.$$.fragment)},l(l){F(t.$$.fragment,l),n=H(l),F(e.$$.fragment,l)},m(l,o){Y(t,l,o),R(l,n,o),Y(e,l,o),a=!0},p(l,o){const s={};o&1&&(s.id="land-"+l[0]),t.$set(s);const d={};o&1&&(d.id="land-"+l[0]),e.$set(d)},i(l){a||(v(t.$$.fragment,l),v(e.$$.fragment,l),a=!0)},o(l){T(t.$$.fragment,l),T(e.$$.fragment,l),a=!1},d(l){K(t,l),l&&_(n),K(e,l)}}}function Se(i){let t,n,e,a,l,o,s=i[4].detached_search&&Re(i);const d=[Ne,De],u=[];function c(f,p){return f[1]?0:1}n=c(i),e=u[n]=d[n](i);let r=i[4].detached_pagination&&Ie(i);return{c(){s&&s.c(),t=N(),e.c(),a=N(),r&&r.c(),l=B()},l(f){s&&s.l(f),t=H(f),e.l(f),a=H(f),r&&r.l(f),l=B()},m(f,p){s&&s.m(f,p),R(f,t,p),u[n].m(f,p),R(f,a,p),r&&r.m(f,p),R(f,l,p),o=!0},p(f,p){f[4].detached_search&&s.p(f,p);let k=n;n=c(f),n===k?u[n].p(f,p):(G(),T(u[k],1,1,()=>{u[k]=null}),M(),e=u[n],e?e.p(f,p):(e=u[n]=d[n](f),e.c()),v(e,1),e.m(a.parentNode,a)),f[4].detached_pagination&&r.p(f,p)},i(f){o||(v(s),v(e),v(r),o=!0)},o(f){T(s),T(e),T(r),o=!1},d(f){s&&s.d(f),f&&_(t),u[n].d(f),f&&_(a),r&&r.d(f),f&&_(l)}}}function Be(i){let t,n=`<style>
	#land-${i[0]} {
		background-color: transparent;
	}

	#land-${i[0]} section {
		margin-left: 0;
	}

	#land-${i[0]} section.dt-search input {
		margin-left: 0;
		color: var(--accent-color);
		border: 1px solid rgba(255, 204, 0, 0.65);
	}

	#land-${i[0]} section.dt-search input:focus {
		border: 1px solid var(--accent-color);
	}

	#land-${i[0]} section.dt-header thead {
		background-color: var(--bg-color-secondary);
	}

	#land-${i[0]} section.dt-header thead th {
		background-color: transparent;
	}
</style>`,e,a,l,o;return l=new Te({props:{style:"height: 80vh;",$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){t=new ce,e=B(),a=N(),A(l.$$.fragment),this.h()},l(s){const d=ue('[data-svelte="svelte-hhx7id"]',document.head);t=_e(d),e=B(),d.forEach(_),a=H(s),F(l.$$.fragment,s),this.h()},h(){t.a=e},m(s,d){t.m(n,document.head),h(document.head,e),R(s,a,d),Y(l,s,d),o=!0},p(s,[d]){(!o||d&1)&&n!==(n=`<style>
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
</style>`)&&t.p(n);const u={};d&527&&(u.$$scope={dirty:d,ctx:s}),l.$set(u)},i(s){o||(v(l.$$.fragment,s),o=!0)},o(s){T(l.$$.fragment,s),o=!1},d(s){_(e),s&&t.d(),s&&_(a),K(l,s)}}}function Ce(i,t,n){let e,a=j,l=()=>(a(),a=he(u,r=>n(3,e=r)),u);i.$$.on_destroy.push(()=>a());let{id:o}=t,{data:s}=t;const d={detached_search:!1,detached_pagination:!1,sortable:!0,pagination:!0,scrollY:!0,rowsPerPage:50,columnFilter:!1,css:!0,labels:{search:"Search...",filter:"Filter",noRows:"No entries to found",info:"Showing {start} to {end} of {rows} entries",previous:"Previous",next:"Next"},blocks:{searchInput:!0,paginationButtons:!1,paginationRowCount:!1}};let u;function c(r){u=r,l(n(2,u))}return i.$$set=r=>{"id"in r&&n(0,o=r.id),"data"in r&&n(1,s=r.data)},[o,s,u,e,d,c]}class Le extends te{constructor(t){super();ae(this,t,Ce,Be,le,{id:0,data:1})}}export{Le as L};
