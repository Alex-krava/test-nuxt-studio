import{r as _,ak as z,al as D,am as F,M as b,I as P,a7 as G,aj as X,o as H,d as T,x as J,b as h,c as k,e as M,g as $,w as K,X as E,T as Q,n as O,a6 as U,p as Y,i as Z,k as L,t as ee,f as te,a5 as ne}from"./entry.f3cf02dc.js";function W(e){return D()?(F(e),!0):!1}function C(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,se=e=>oe.call(e)==="[object Object]",x=()=>{},ae=re();function re(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function ce(e){let n;function s(){return n||(n=e()),n}return s.reset=async()=>{const t=n;n=void 0,t&&await t},s}function ie(e,n,s={}){const{immediate:t=!0}=s,r=_(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function i(){r.value=!1,l()}function d(...p){l(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...p)},C(n))}return t&&(r.value=!0,S&&d()),W(i),{isPending:z(r),start:d,stop:i}}function g(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const j=S?window:void 0,N=S?window.navigator:void 0;function w(...e){let n,s,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,r]=e,n=j):[n,s,t,r]=e,!n)return x;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},i=(u,f,a,c)=>(u.addEventListener(f,a,c),()=>u.removeEventListener(f,a,c)),d=G(()=>[g(n),C(r)],([u,f])=>{if(l(),!u)return;const a=se(f)?{...f}:f;o.push(...s.flatMap(c=>t.map(m=>i(u,c,m,a))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return W(p),p}let B=!1;function ue(e,n,s={}){const{window:t=j,ignore:r=[],capture:o=!0,detectIframe:l=!1}=s;if(!t)return;ae&&!B&&(B=!0,Array.from(t.document.body.children).forEach(a=>a.addEventListener("click",x)),t.document.documentElement.addEventListener("click",x));let i=!0;const d=a=>r.some(c=>{if(typeof c=="string")return Array.from(t.document.querySelectorAll(c)).some(m=>m===a.target||a.composedPath().includes(m));{const m=g(c);return m&&(a.target===m||a.composedPath().includes(m))}}),u=[w(t,"click",a=>{const c=g(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(i=!d(a)),!i){i=!0;return}n(a)}},{passive:!0,capture:o}),w(t,"pointerdown",a=>{const c=g(e);i=!d(a)&&!!(c&&!a.composedPath().includes(c))},{passive:!0}),l&&w(t,"blur",a=>{setTimeout(()=>{var c;const m=g(e);((c=t.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&n(a)},0)})].filter(Boolean);return()=>u.forEach(a=>a())}function le(){const e=_(!1);return X()&&H(()=>{e.value=!0}),e}function R(e){const n=le();return P(()=>(n.value,!!e()))}function I(e,n={}){const{controls:s=!1,navigator:t=N}=n,r=R(()=>t&&"permissions"in t);let o;const l=typeof e=="string"?{name:e}:e,i=_(),d=()=>{o&&(i.value=o.state)},p=ce(async()=>{if(r.value){if(!o)try{o=await t.permissions.query(l),w(o,"change",d),d()}catch{i.value="prompt"}return o}});return p(),s?{state:i,isSupported:r,query:p}:i}function de(e={}){const{navigator:n=N,read:s=!1,source:t,copiedDuring:r=1500,legacy:o=!1}=e,l=R(()=>n&&"clipboard"in n),i=I("clipboard-read"),d=I("clipboard-write"),p=P(()=>l.value||o),u=_(""),f=_(!1),a=ie(()=>f.value=!1,r);function c(){l.value&&i.value!=="denied"?n.clipboard.readText().then(y=>{u.value=y}):u.value=q()}p.value&&s&&w(["copy","cut"],c);async function m(y=C(t)){p.value&&y!=null&&(l.value&&d.value!=="denied"?await n.clipboard.writeText(y):V(y),u.value=y,f.value=!0,a.start())}function V(y){const v=document.createElement("textarea");v.value=y??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function q(){var y,v,A;return(A=(v=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:v.toString())!=null?A:""}return{isSupported:p,text:u,copied:f,copy:m}}const pe=e=>(Y("data-v-2c5d870f"),e=e(),Z(),e),fe=pe(()=>M("span",{class:"sr-only"},"Copy to clipboard",-1)),me={class:"icon-wrapper"},ye=T({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=_(),{copy:t}=de();ue(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:r}=J(),o=_("init"),l=i=>{t(n.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(i,d)=>{const p=U;return h(),k("button",{ref_key:"copyButtonRef",ref:s,class:O([(e.show||o.value==="copied")&&"show"]),onClick:l},[fe,M("span",me,[$(Q,{name:"fade"},{default:K(()=>{var u,f;return[o.value==="copied"?(h(),E(p,{key:0,name:(u=b(r).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),E(p,{key:1,name:(f=b(r).copyButton)==null?void 0:f.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const ve=L(ye,[["__scopeId","data-v-2c5d870f"]]),_e={key:0,class:"filename"},ge=T({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(s,t)=>{const r=ve;return h(),k("div",{class:O([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(h(),k("span",_e,ee(e.filename),1)):te("",!0),ne(s.$slots,"default",{},void 0,!0),$(r,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const we=L(ge,[["__scopeId","data-v-ef0b30fc"]]);export{we as default};
