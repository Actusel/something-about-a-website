var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,h as w,i as B,j as S,k as I,b,l as q,m as D,p as N,q as L,u as P,v as T}from"./scheduler.DvELEDzw.js";let p=!1;function H(){p=!0}function M(){p=!1}function O(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:O(1,l,d=>t[n[d]].claim_order,a))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const c=[],s=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);u>=r;u--)s.push(t[u]);u--}for(;u>=0;u--)s.push(t[u]);c.reverse(),s.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<s.length;r++){for(;a<c.length&&s[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;e.insertBefore(s[r],o)}}function F(e,t){if(p){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){p&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function le(e){return function(t){return t.preventDefault(),e.call(this,t)}}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function W(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,l=!1){G(e);const c=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l||(e.claim_info.last_index=s),u}}for(let s=e.claim_info.last_index-1;s>=0;s--){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,u}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function A(e,t,n,i){return E(e,l=>l.nodeName===t,l=>{const c=[];for(let s=0;s<l.attributes.length;s++){const u=l.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>l.removeAttribute(s))},()=>i(t))}function ue(e,t,n){return A(e,t,n,U)}function ce(e,t,n){return A(e,t,n,V)}function J(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function fe(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t){e.value=t??""}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function me(e,t,n){for(let i=0;i<e.options.length;i+=1){const l=e.options[i];if(l.__value===t){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function he(e){const t=e.querySelector(":checked");return t&&t.__value}function pe(e,t){return new e(t)}const m=new Set;let _;function $e(){_={r:0,c:[],p:_}}function ye(){_.r||h(_.c),_=_.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(L).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),l.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(q(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(P.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,l,c,s=null,u=[-1]){const r=D;N(e);const a=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(f,d,...v)=>{const g=v.length?v[0]:d;return a.ctx&&l(a.ctx[f],a.ctx[f]=g)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](g),o&&Y(e,f)),d}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){H();const f=W(t.target);a.fragment&&a.fragment.l(f),f.forEach(R)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),M(),B()}N(r)}class be{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{$e as A,pe as B,ve as C,ge as D,Q as E,X as F,be as S,W as a,J as b,ue as c,R as d,U as e,fe as f,te as g,F as h,we as i,oe as j,V as k,se as l,ce as m,ae as n,de as o,_e as p,re as q,le as r,ne as s,x as t,me as u,he as v,ie as w,xe as x,ye as y,K as z};
