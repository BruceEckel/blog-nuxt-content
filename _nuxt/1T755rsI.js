import{Y as o,r as u,Z as f,$ as d,B as v,a0 as l,a1 as i,a2 as h,E as m}from"./DDvRrLmO.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),m()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
