import{n as u,s as g}from"./scheduler.z1SYPEOu.js";const n=[];function m(e,r){return{subscribe:h(e,r).subscribe}}function h(e,r=u){let i;const o=new Set;function b(t){if(g(e,t)&&(e=t,i)){const c=!n.length;for(const s of o)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function f(t){b(t(e))}function _(t,c=u){const s=[t,c];return o.add(s),o.size===1&&(i=r(b,f)||u),t(e),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_gmfzso)==null?void 0:a.base)??"";var l;const z=((l=globalThis.__sveltekit_gmfzso)==null?void 0:l.assets)??p;export{z as a,p as b,m as r,h as w};