function w(){}function v(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(j)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function U(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function A(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t){let n;return m(t,e=>n=e)(),n}function C(t,n,e){t.$$.on_destroy.push(m(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?v(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,l){if(o){const _=y(n,e,r,l);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t,n,e){return t.set(e),n}let f;function h(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){x().$$.on_mount.push(t)}function L(t){x().$$.after_update.push(t)}const a=[],g=[];let c=[];const b=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function N(){return q(),k}function O(t){c.push(t)}const d=new Set;let u=0;function z(){if(u!==0)return;const t=f;do{try{for(;u<a.length;){const n=a[u];u++,h(n),M(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];d.has(e)||(d.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{U as a,O as b,C as c,J as d,L as e,g as f,B as g,F as h,z as i,P as j,A as k,Q as l,f as m,w as n,K as o,h as p,j as q,E as r,S as s,N as t,a as u,q as v,D as w,H as x,I as y,G as z};
