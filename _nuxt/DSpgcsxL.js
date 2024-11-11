import{_ as ne}from"./CPbutLVt.js";import ae from"./CK86nUge.js";import le from"./Co1hU4_1.js";import re from"./BGLvrV1l.js";import{d as A,c as d,e as g,y as j,n as E,z as l,A as I,r as L,B as z,C as ie,D as M,E as ce,G as ue,H as de,I as te,J as U,K as pe,L as me,M as fe,N as _e,O as ge,P as S,w as h,i as b,g as G,t as V,f as t,Q as H,p as se,o as oe,h as O,R as he,U as ve,S as Q,b as be,F as X,V as Y,W as P,T as Z}from"./Degck_Qc.js";import{_ as ye,f as xe,c as we,g as $e}from"./DGLutU8h.js";import{u as J}from"./QNLEPkld.js";import{_ as Ce}from"./B8B6gUQf.js";import{q as ee}from"./Cvm75aOw.js";import{_ as ke}from"./DlAUqK2U.js";import"./CxgHqCz3.js";import"./Bn88H06b.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./BG1LJoe_.js";import"./mV5q6uWO.js";import"./de_y_WTO.js";const Te=A({__name:"Card",props:{class:{}},setup(o){const e=o;return(s,a)=>(d(),g("div",{class:E(l(I)("rounded-lg bg-card text-card-foreground shadow-sm",e.class))},[j(s.$slots,"default")],2))}}),Ve=A({__name:"CardContent",props:{class:{}},setup(o){const e=o;return(s,a)=>(d(),g("div",{class:E(l(I)("p-6 pt-0",e.class))},[j(s.$slots,"default")],2))}}),Ae=A({__name:"CardDescription",props:{class:{}},setup(o){const e=o;return(s,a)=>(d(),g("p",{class:E(l(I)("text-sm text-muted-foreground",e.class))},[j(s.$slots,"default")],2))}}),De=A({__name:"CardHeader",props:{class:{}},setup(o){const e=o;return(s,a)=>(d(),g("div",{class:E(l(I)("flex flex-col gap-y-1.5 p-6",e.class))},[j(s.$slots,"default")],2))}}),Se=A({__name:"CardTitle",props:{class:{}},setup(o){const e=o;return(s,a)=>(d(),g("h3",{class:E(l(I)("text-2xl font-semibold leading-none tracking-tight",e.class))},[j(s.$slots,"default")],2))}});typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ee=o=>typeof o<"u";function Oe(o){return JSON.parse(JSON.stringify(o))}function Ie(o,e,s,a={}){var r,i,p;const{clone:_=!1,passive:D=!1,eventName:B,deep:y=!1,defaultValue:w,shouldEmit:$}=a,v=ce(),x=s||(v==null?void 0:v.emit)||((r=v==null?void 0:v.$emit)==null?void 0:r.bind(v))||((p=(i=v==null?void 0:v.proxy)==null?void 0:i.$emit)==null?void 0:p.bind(v==null?void 0:v.proxy));let C=B;C=C||`update:${e.toString()}`;const N=c=>_?typeof _=="function"?_(c):Oe(c):c,u=()=>Ee(o[e])?N(o[e]):w,n=c=>{$?$(c)&&x(C,c):x(C,c)};if(D){const c=u(),k=L(c);let m=!1;return z(()=>o[e],T=>{m||(m=!0,k.value=N(T),ie(()=>m=!1))}),z(k,T=>{!m&&(T!==o[e]||y)&&n(T)},{deep:y}),k}else return M({get(){return u()},set(c){n(c)}})}const Be=A({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(o,{emit:e}){const s=o,r=Ie(s,"modelValue",e,{passive:!0,defaultValue:s.defaultValue});return(i,p)=>ue((d(),g("input",{"onUpdate:modelValue":p[0]||(p[0]=_=>te(r)?r.value=_:null),class:E(l(I)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s.class))},null,2)),[[de,l(r)]])}});function Ne(o,e,s){const[a={},r]=typeof e=="string"?[{},e]:[e,s],i=M(()=>U(o)),p=a.key||pe([r,typeof i.value=="string"?i.value:"",...Ue(a)]);if(!p||typeof p!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+p);const _=p===r?"$f"+p:p;if(!a.baseURL&&typeof i.value=="string"&&i.value[0]==="/"&&i.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:D,lazy:B,default:y,transform:w,pick:$,watch:v,immediate:x,getCachedData:C,deep:N,dedupe:u,...n}=a,c=me({...fe,...n,cache:typeof a.cache=="boolean"?void 0:a.cache}),k={server:D,lazy:B,default:y,transform:w,pick:$,immediate:x,getCachedData:C,deep:N,dedupe:u,watch:v===!1?[]:[c,i,...v||[]]};let m;return J(_,()=>{var f;(f=m==null?void 0:m.abort)==null||f.call(m,"Request aborted as another request to the same endpoint was initiated."),m=typeof AbortController<"u"?new AbortController:{};const q=U(a.timeout);let R;return q&&(R=setTimeout(()=>m.abort("Request aborted due to timeout."),q),m.signal.onabort=()=>clearTimeout(R)),(a.$fetch||globalThis.$fetch)(i.value,{signal:m.signal,...c}).finally(()=>{clearTimeout(R)})},k)}function Ue(o){var s;const e=[((s=U(o.method))==null?void 0:s.toUpperCase())||"GET",U(o.baseURL)];for(const a of[o.params||o.query]){const r=U(a);if(!r)continue;const i={};for(const[p,_]of Object.entries(r))i[U(p)]=U(_);e.push(i)}return e}const Le={class:"flex flex-col gap-2"},Me={class:"flex space-x-1.5"},Re=A({__name:"Newsletter",setup(o){const{toast:e}=_e(),{t:s}=ge(),a=L(""),r=async()=>{const{error:p}=await i(a.value);a.value="",p.length?e({title:s("newsletter.signupError"),description:s("newsletter.signupErrorDescription")}):e({title:s("newsletter.successTitle"),description:s("newsletter.successDescription")})},i=async p=>await Ne("/api/subscribeUser",{method:"POST",body:{email:p}},"$n0shmvardM");return(p,_)=>{const D=Se,B=Ae,y=De,w=Be,$=ye,v=Ve,x=Te;return d(),S(x,null,{default:h(()=>[b(y,null,{default:h(()=>[b(D,null,{default:h(()=>[G(V(p.$t("newsletter.cardTitle")),1)]),_:1}),b(B,null,{default:h(()=>[G(V(p.$t("newsletter.cardDescription")),1)]),_:1})]),_:1}),b(v,null,{default:h(()=>[t("form",{onSubmit:H(r,["prevent"])},[t("div",Le,[t("div",Me,[b(w,{name:"emailInput",modelValue:l(a),"onUpdate:modelValue":_[0]||(_[0]=C=>te(a)?a.value=C:null),type:"email",placeholder:"Enter your email"},null,8,["modelValue"]),b($,{class:"self-end",type:"submit"},{default:h(()=>[G(V(p.$t("newsletter.submit")),1)]),_:1})])])],32)]),_:1})]),_:1})}}}),je=A({__name:"Comments",setup(o){const e=L(),s=se();z(s,(r,i)=>{a(r.path)}),oe(()=>{a(s.path)});function a(r){const i=document.createElement("script");i.setAttribute("src","https://utteranc.es/client.js"),i.setAttribute("repo","codybontecou/blog-nuxt-content"),i.setAttribute("issue-term",r),i.setAttribute("label","Comments"),i.setAttribute("theme","github-light"),i.setAttribute("crossorigin","anonymous"),i.setAttribute("async","true"),e.value.innerHTML="",e.value.appendChild(i)}return(r,i)=>(d(),g("section",{ref_key:"comments",ref:e},null,512))}}),qe=A({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(o){const e=o,s=M(()=>{const{class:a,...r}=e;return r});return(a,r)=>(d(),S(l(ve),he(s.value,{class:l(I)("shrink-0 bg-border relative",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:h(()=>[e.label?(d(),g("span",{key:0,class:E(l(I)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},V(e.label),3)):O("",!0)]),_:1},16,["class"]))}});function Fe(o){for(let e=o.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[o[e],o[s]]=[o[s],o[e]]}return o}const Pe={class:"relative"},ze={key:0,class:"hidden lg:block fixed right-8 top-32 w-64 max-h-[calc(100vh-200px)] overflow-y-auto"},Ge={class:"toc"},He={class:"space-y-3"},Je=["href","onClick"],We={key:0,class:"lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white rounded-t-xl shadow-lg max-h-[75vh] overflow-y-auto"},Ke={class:"sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between"},Qe={class:"p-4"},Xe={class:"space-y-4"},Ye=["href","onClick"],Ze={class:"flex flex-col justify-center max-w-3xl mx-auto"},et={class:"prose lg:prose-lg"},tt={class:"text-4xl font-normal mb-4"},st={class:"text-gray-600 text-lg mb-10"},ot={class:"mb-6"},nt=A({__name:"BlogPost",async setup(o){var N;let e,s;const{path:a}=se(),{data:r}=([e,s]=Q(()=>J(`post-${a}`,()=>ee(a).findOne())),e=await e,s(),e),i=(N=r.value)==null?void 0:N.topics,{data:p}=([e,s]=Q(()=>J("allArticles",()=>ee("/").sort({date:-1}).where({draft:{$ne:!0},ignore:{$ne:!0}}).find())),e=await e,s(),e),_=M(()=>p.value.filter(u=>{if(u.title===r.value.title)return!1;const n=u.topics||[],c=i||[];return n.length>0&&c.length>0&&n.some(k=>c.includes(k))}).slice(0,5)),D=M(()=>{if(_.value.length===5)return _.value;const n=5-_.value.length,c=p.value.filter(m=>!_.value.map(T=>T.title).includes(m.title)),k=Fe(c).slice(0,n).sort((m,T)=>new Date(T.date)-new Date(m.date));return _.value.concat(k)}),B=M(()=>{var u;return $e((u=r.value)==null?void 0:u.body)}),y=L(!1),w=L(""),$=L(null),v=L([]),x=M(()=>{var u,n,c;return(c=(n=(u=r.value)==null?void 0:u.body)==null?void 0:n.toc)!=null&&c.links?r.value.body.toc.links:[]});oe(()=>{v.value=x.value.map(u=>u.id),$.value=new IntersectionObserver(u=>{u.forEach(n=>{n.isIntersecting&&(w.value=n.target.id)})},{rootMargin:"-10% 0% -85% 0%",threshold:0}),v.value.forEach(u=>{var c;const n=document.getElementById(u);n&&((c=$.value)==null||c.observe(n))})}),be(()=>{$.value&&$.value.disconnect()});const C=u=>{const n=document.getElementById(u);n&&(n.scrollIntoView({behavior:"smooth"}),y.value=!1)};return z(y,u=>{u?document.body.style.overflow="hidden":document.body.style.overflow=""}),(u,n)=>{const c=ae,k=le,m=re,T=Re,q=je,R=qe,W=Ce;return d(),g("div",Pe,[l(x).length?(d(),g("aside",ze,[(d(),S(P,null,{default:h(()=>[t("nav",Ge,[n[3]||(n[3]=t("h2",{class:"font-medium mb-4"},"On this page",-1)),t("ul",He,[(d(!0),g(X,null,Y(l(x),f=>(d(),g("li",{key:f.id,class:"text-sm"},[t("a",{href:`#${f.id}`,onClick:H(F=>C(f.id),["prevent"]),class:E({"text-primary hover:text-primary-dark transition-colors duration-200":!0,"text-indigo-600 font-medium":l(w)===f.id,"text-gray-600 hover:text-gray-900":l(w)!==f.id})},V(f.text),11,Je)]))),128))])])]),fallback:h(()=>n[4]||(n[4]=[t("div",{class:"animate-pulse"},[t("div",{class:"h-6 bg-gray-200 rounded w-3/4 mb-4"}),t("div",{class:"space-y-3"},[t("div",{class:"h-4 bg-gray-200 rounded w-5/6"}),t("div",{class:"h-4 bg-gray-200 rounded w-4/6"}),t("div",{class:"h-4 bg-gray-200 rounded w-3/6"})])],-1)])),_:1}))])):O("",!0),l(x).length?(d(),g("button",{key:1,onClick:n[0]||(n[0]=f=>y.value=!0),class:"lg:hidden flex items-center justify-center fixed right-4 bottom-4 z-20 rounded-full p-3 bg-white shadow transition-colors duration-200","aria-label":"Open table of contents"},[b(c,{name:"material-symbols:menu-book-outline",class:"w-6 h-6"})])):O("",!0),l(x).length?(d(),S(Z,{key:2,"enter-active-class":"transition-opacity duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:h(()=>[l(y)?(d(),g("div",{key:0,class:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30",onClick:n[1]||(n[1]=f=>y.value=!1)})):O("",!0)]),_:1})):O("",!0),l(x).length?(d(),S(Z,{key:3,"enter-active-class":"transition-transform duration-300 ease-out","enter-from-class":"translate-y-full","enter-to-class":"translate-y-0","leave-active-class":"transition-transform duration-200 ease-in","leave-from-class":"translate-y-0","leave-to-class":"translate-y-full"},{default:h(()=>[l(y)?(d(),g("div",We,[t("div",Ke,[n[5]||(n[5]=t("h2",{class:"font-medium"},"On this page",-1)),t("button",{onClick:n[2]||(n[2]=f=>y.value=!1),class:"p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200","aria-label":"Close table of contents"},[b(c,{name:"material-symbols:close",class:"w-6 h-6"})])]),t("nav",Qe,[(d(),S(P,null,{default:h(()=>[t("ul",Xe,[(d(!0),g(X,null,Y(l(x),f=>(d(),g("li",{key:f.id},[t("a",{href:`#${f.id}`,onClick:H(F=>C(f.id),["prevent"]),class:E(["block py-2 px-3 rounded-lg transition-colors duration-200",{"bg-gray-100 font-semibold":l(w)===f.id,"hover:bg-gray-100":l(w)!==f.id}])},V(f.text),11,Ye)]))),128))])]),fallback:h(()=>n[6]||(n[6]=[t("div",{class:"animate-pulse space-y-4"},[t("div",{class:"h-10 bg-gray-200 rounded-lg"}),t("div",{class:"h-10 bg-gray-200 rounded-lg"}),t("div",{class:"h-10 bg-gray-200 rounded-lg"})],-1)])),_:1}))])])):O("",!0)]),_:1})):O("",!0),(d(),S(P,null,{default:h(()=>[t("main",Ze,[b(m,null,{default:h(({doc:f})=>{var F,K;return[t("article",et,[t("h1",tt,V((F=l(r))==null?void 0:F.title),1),t("div",st,V(l(xe)((K=l(r))==null?void 0:K.date))+" · "+V(l(we)(l(B)))+" "+V(u.$t("latest.minuteRead")),1),b(k,{value:l(r)},null,8,["value"])])]}),_:1}),b(T,{class:"mt-10 lg:w-2/3"}),b(q,{class:"mt-10"}),b(R,{class:"my-20"}),t("div",null,[t("h2",ot,V(u.$t("slug.alsoEnjoy")),1),l(D)&&l(D).length?(d(),S(W,{key:0,articles:l(D)},null,8,["articles"])):O("",!0)])])]),fallback:h(()=>n[7]||(n[7]=[t("div",{class:"animate-pulse max-w-3xl mx-auto"},[t("div",{class:"h-8 bg-gray-200 rounded w-3/4 mb-4"}),t("div",{class:"h-4 bg-gray-200 rounded w-1/4 mb-10"}),t("div",{class:"space-y-4"},[t("div",{class:"h-4 bg-gray-200 rounded"}),t("div",{class:"h-4 bg-gray-200 rounded"}),t("div",{class:"h-4 bg-gray-200 rounded w-5/6"})])],-1)])),_:1}))])}}}),at=ke(nt,[["__scopeId","data-v-7b61459a"]]),lt={class:"max-w-3xl mx-0 md:mx-auto py-8 px-4"},Ct=A({__name:"[...slug]",setup(o){return(e,s)=>{const a=ne;return d(),g("div",lt,[b(a),(d(),S(P,null,{default:h(()=>[b(l(at))]),fallback:h(()=>s[0]||(s[0]=[t("div",{class:"animate-pulse"},[t("div",{class:"h-8 bg-gray-200 rounded w-3/4 mb-4"}),t("div",{class:"h-4 bg-gray-200 rounded w-1/4 mb-10"}),t("div",{class:"space-y-4"},[t("div",{class:"h-4 bg-gray-200 rounded"}),t("div",{class:"h-4 bg-gray-200 rounded"}),t("div",{class:"h-4 bg-gray-200 rounded w-5/6"})])],-1)])),_:1}))])}}});export{Ct as default};
