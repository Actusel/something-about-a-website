const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CQHA-TPy.js","../chunks/scheduler.z1SYPEOu.js","../chunks/index.DHBtu_xu.js","../chunks/paths.CFqX2Qoj.js","../assets/0.CkNXpsRP.css","../nodes/1.D8QcgFjD.js","../chunks/entry.C4392c6n.js","../nodes/2.B3H3QiD0.js","../assets/2.q6AaUJ8J.css","../nodes/3.BguiPRWX.js","../chunks/user.DX6Df8TL.js","../assets/3.De92mZPA.css","../nodes/4.Zon-MC3n.js","../chunks/each.D6YF6ztN.js","../assets/4.Bm2jngaP.css","../nodes/5.Ce4dj7mJ.js","../assets/5.BeeAmPwH.css","../nodes/6.BoeiKKPd.js","../assets/6.BuZrbYBH.css","../nodes/7.DVEltzkz.js","../assets/7.DfRn3BVl.css"])))=>i.map(i=>d[i]);
import{s as N,e as q,o as U,f as O,t as j}from"../chunks/scheduler.z1SYPEOu.js";import{S as z,i as F,s as G,x as h,f as H,g as v,A as g,B as I,y as w,d as b,e as W,c as J,a as K,n as T,o as p,t as Q,b as X,j as Y,z as D,E as P,F as R,G as V,H as L,I as A}from"../chunks/index.DHBtu_xu.js";const Z="modulepreload",M=function(o,e){return new URL(o,e).href},S={},d=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=M(f,r),f in S)return;S[f]=!0;const a=f.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let k=t.length-1;k>=0;k--){const y=t[k];if(y.href===f&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Z,a||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),a)return new Promise((k,y)=>{m.addEventListener("load",k),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function _(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return s.then(t=>{for(const i of t||[])i.status==="rejected"&&_(i.reason);return e().catch(_)})},se={};function $(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=P(s,_(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),I()}s?(e=P(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=P(s,_(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),I()}s?(e=P(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,r;var s=o[1][1];function _(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=P(s,_(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),I()}s?(e=P(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[10](null),e&&A(e,t)}}}function B(o){let e,n=o[6]&&C(o);return{c(){e=W("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(b),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(r,s){v(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=C(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d()}}}function C(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,r){v(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(o){let e,n,r,s,_;const t=[x,$],i=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=i[e]=t[e](o);let f=o[5]&&B(o);return{c(){n.c(),r=G(),f&&f.c(),s=h()},l(a){n.l(a),r=H(a),f&&f.l(a),s=h()},m(a,u){i[e].m(a,u),v(a,r,u),f&&f.m(a,u),v(a,s,u),_=!0},p(a,[u]){let E=e;e=l(a),e===E?i[e].p(a,u):(D(),g(i[E],1,1,()=>{i[E]=null}),I(),n=i[e],n?n.p(a,u):(n=i[e]=t[e](a),n.c()),w(n,1),n.m(r.parentNode,r)),a[5]?f?f.p(a,u):(f=B(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){_||(w(n),_=!0)},o(a){g(n),_=!1},d(a){a&&(b(r),b(s)),i[e].d(a),f&&f.d(a)}}}function ne(o,e,n){let{stores:r}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:f=null}=e;q(r.page.notify);let a=!1,u=!1,E=null;U(()=>{const c=r.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,a=!0),c});function m(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function y(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,f=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&r.page.set(s)},[t,_,i,l,f,a,u,E,r,s,m,k,y]}class oe extends z{constructor(e){super(),F(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.CQHA-TPy.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>d(()=>import("../nodes/1.D8QcgFjD.js"),__vite__mapDeps([5,1,2,6,3]),import.meta.url),()=>d(()=>import("../nodes/2.B3H3QiD0.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/3.BguiPRWX.js"),__vite__mapDeps([9,1,2,3,10,11]),import.meta.url),()=>d(()=>import("../nodes/4.Zon-MC3n.js"),__vite__mapDeps([12,1,2,13,14]),import.meta.url),()=>d(()=>import("../nodes/5.Ce4dj7mJ.js"),__vite__mapDeps([15,1,2,16]),import.meta.url),()=>d(()=>import("../nodes/6.BoeiKKPd.js"),__vite__mapDeps([17,1,2,3,10,18]),import.meta.url),()=>d(()=>import("../nodes/7.DVEltzkz.js"),__vite__mapDeps([19,1,2,13,20]),import.meta.url)],le=[],fe={"/":[2],"/login":[3],"/memory":[4],"/photoapp":[5],"/register":[6],"/shoppinglist":[7]},ce={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
