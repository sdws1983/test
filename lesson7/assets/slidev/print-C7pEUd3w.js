import{d as _,I as i,N as L,Q as N,J as E,o as n,b as d,l as p,z as e,i as q,c as m,g as y,h as B,F as v,ae as j,e as z,f as O,B as R}from"../modules/vue-BoI2EFOv.js";import{l as V,m as g,e as A,c as k,o as F,_ as f,q as G,r as C,t as h,v as P,x as D,y as I,z as T,f as x,w as W}from"../index-BXwUvftx.js";import{G as H,g as J,S as M,a as Q}from"./bottom-DBhboDgj.js";import{P as K}from"./PrintStyle-C6nXC3eR.js";import"../modules/unplugin-icons-CfAESjuq.js";import"../modules/shiki-DdzKTf6Q.js";const U=["id"],X=_({__name:"PrintSlideClick",props:{clicksContext:{type:null,required:!0},nav:{type:Object,required:!0},route:{type:Object,required:!0}},setup(c){const l=c,t=i(()=>({height:`${V}px`,width:`${g}px`})),r=L();A(()=>import("./DrawingPreview-D5xHHnSv.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(s=>r.value=s.default);const o=i(()=>`${l.route.path.toString().padStart(3,"0")}-${(l.nav.clicks.value+1).toString().padStart(2,"0")}`);return N(F,E({nav:l.nav,configs:k,themeConfigs:i(()=>k.themeConfig)})),(s,u)=>{var a;return n(),d("div",{id:o.value,class:"print-slide-container",style:B(t.value)},[p(e(H)),p(e(M),{is:(a=s.route)==null?void 0:a.component,"clicks-context":s.clicksContext,class:q(e(J)(s.route)),route:s.route},null,8,["is","clicks-context","class","route"]),r.value?(n(),m(e(r),{key:0,page:+s.route.path},null,8,["page"])):y("v-if",!0),p(e(Q))],12,U)}}}),$=f(X,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Y=_({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(c){const l=c,t=i(()=>l.route),r=G(t),o=C(t.value,0);return(s,u)=>(n(),d(v,null,[p($,{"clicks-context":e(o),nav:e(r),route:t.value},null,8,["clicks-context","nav","route"]),e(o).disabled?y("v-if",!0):(n(!0),d(v,{key:0},j(e(o).total,a=>(n(),m($,{key:a,"clicks-context":e(C)(t.value,a),nav:e(r),route:t.value},null,8,["clicks-context","nav","route"]))),128))],64))}}),Z=f(Y,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ee={id:"print-content"},te=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const l=c,t=i(()=>l.width),r=i(()=>l.width/h),o=i(()=>t.value/r.value),s=i(()=>o.value<h?t.value/g:r.value*h/g);let u=I;P.value.query.range&&(u=D(u.length,P.value.query.range).map(b=>u[b-1]));const a=i(()=>({"select-none":!k.selectable}));return N(T,s),(S,b)=>(n(),d("div",{id:"print-container",class:q(a.value)},[z("div",ee,[(n(!0),d(v,null,j(e(u),w=>(n(),m(Z,{key:w.path,route:w},null,8,["route"]))),128))]),O(S.$slots,"controls")],2))}}),se=f(te,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ne={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=_({__name:"print",setup(c){return R(()=>{x?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,t)=>(n(),d(v,null,[e(x)?(n(),m(K,{key:0})):y("v-if",!0),z("div",ne,[p(se,{class:"w-full h-full",style:B({background:"var(--slidev-slide-container-background, black)"}),width:e(W).width.value},null,8,["style","width"])])],64))}}),de=f(le,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/print.vue"]]);export{de as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-D5xHHnSv.js","assets/modules/vue-BoI2EFOv.js","assets/index-BXwUvftx.js","assets/modules/unplugin-icons-CfAESjuq.js","assets/modules/shiki-DdzKTf6Q.js","assets/modules/shiki-BSchMNmt.css","assets/index-BFRyLUNk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
