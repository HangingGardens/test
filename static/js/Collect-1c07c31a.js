import{_,d as p,u,f as m,D as f,a as h,o as v,e as b,G as r,g as t,t as e,h as a,b as g,i as x,p as w,l as y}from"./index-8df1d5de.js";import{_ as S}from"./avatarBig-f2d754bd.js";import{B as C}from"./BackIcon-c7e5ac8d.js";import{Q as k}from"./qrcode.vue.esm-4bdd1219.js";const B=o=>(w("data-v-673484ba"),o=o(),y(),o),I={class:"bg-gradient-to-b from-color4 to-color9 px-4 pt-4"},D={class:"mt-6 text-lg bg-white px-9 py-3.5 rounded-t-xl"},N={class:"font-bold"},V={class:"text-[#D1C2A7]"},$={class:"py-6 rounded-b-xl linear-bg text-center"},A={class:"mt-2 text-[#646464]"},M=B(()=>t("img",{class:"bottom-img absolute bottom-0 left-4",src:S},null,-1)),Q=p({setup(o){const{accountStore:c}=u(),{merchantDiscounts:n}=m(),i=f(()=>{const s={address:c.account};return window.location.origin+`/#/pay?params=${JSON.stringify(s)}`}),l=h(0),d=async()=>{l.value=await n()};return v(()=>{d()}),(s,U)=>(g(),b("div",I,[r(C,{class:"text-white/90"}),t("header",D,[t("div",N,e(a(x)(a(c).account)),1),t("div",V,e(s.$t("common.ratio")+l.value*100)+"%",1)]),t("div",$,[r(k,{value:a(i),size:180,level:"H",class:"m-auto"},null,8,["value"]),t("div",A,e(s.$t("bill.codeTip")),1)]),M]))}}),H=_(Q,[["__scopeId","data-v-673484ba"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/bill/Collect.vue"]]);export{H as default};
