import{_ as se,d as ae,A as te,u as oe,m as ne,C as y,D as P,w as U,a as E,o as le,E as A,e as m,g as a,G as c,h as s,H as k,q as $,P as i,W as d,b as l,k as x,t as o,j as ce,a9 as B,L as f,p as ie,l as de,X as p,T as ue}from"./index-8df1d5de.js";import{_ as re}from"./Vector-light-ecef907e.js";import{_ as me}from"./exchange-1-427770c5.js";import{U as pe,a as fe,C as _e}from"./ChangeLang-45385e49.js";import{B as ge}from"./BgBox-c33f790b.js";import{u as he}from"./lendingPoolContract-00f14220.js";import{e as be}from"./exchangeContract-20464eac.js";import"./avatarRing-8eae2442.js";import"./level-93a6fb73.js";import"./TokenBalance-7572284a.js";const T=_=>(ie("data-v-2fb3abd6"),_=_(),de(),_),xe={class:"h-full relative"},ve={class:"px-2.5 flex justify-between items-center py-5 relative header-bg"},we=T(()=>a("img",{src:re,alt:"",class:"absolute w-[125px] right-0 z-0"},null,-1)),ye={class:"bg-[#FFFDF8] rounded-2xl shadow-inset-2 px-2 py-4"},Ae={class:"text-center mt-2 flex-center font-semibold gap-1"},ke=["src"],Be=f(" 1 MAI = "),De=["src"],Le={key:1},Me={class:"flex-center mt-4 mb-3.5"},Se={class:"text-center px-2"},Ce={class:"opacity-80 mb-1"},Ve={class:"font-semibold text-2xl"},Fe={key:1},Ie={class:"flex-center-bw"},Pe={class:"flex-start gap-2.5"},Ue=["src"],Ee={class:"font-semibold"},$e={class:"opacity-80 flex-center"},Te={key:1},Ne={class:"bg-[#fff9f0] mt-3 rounded-lg p-2"},ze=T(()=>a("div",{class:"flex-center mt-3"},[a("img",{src:me,class:"w-20 block",alt:""})],-1)),Oe={class:"flex-center-bw"},Re={class:"flex-start gap-2.5"},je=["src"],He={class:"font-semibold"},Ke={class:"opacity-80 flex-center"},qe={key:1},Ge={class:"bg-[#fff9f0] mt-3 rounded-lg p-2"},We={class:"flex-center gap-4 mt-5 text-white font-semibold"},Xe=ae({setup(_){he();const{mai:N,lastPrice:z,withdraw:O,getTokenList:R}=be(),{t:j}=te();oe();const e=ne({userInfo:{address:""},token0:"MAI",token1:"MUSD",musdBalance:0,resouceAmount:null,toAmount:null,authLoading:!1,isAuth:!1,exchangeLoading:!1,maiBalanece:0,poolBalanece:0,maiPrice:0,resouceDisabled:!0,toDisabled:!0,allowanceAmount:0}),[D,g]=y(!1),[H,L]=y(!1),[v,M]=y(!0),h=P(()=>({name:e.token0,icon:$(`images/tokens/${e.token0}.png`),token:i[`${e.token0}`]})),w=P(()=>({name:e.token1,icon:$(`images/tokens/${e.token1}.png`),token:i[`${e.token1}`]})),K=()=>{e.resouceDisabled=!1,e.toDisabled=!0},q=()=>{e.resouceDisabled=!0,e.toDisabled=!1};U(()=>e.resouceAmount,(t,n)=>{e.resouceDisabled||(e.toAmount=d(t*e.maiPrice),e.isAuth=+e.allowanceAmount>=parseFloat(t||0)&&e.allowanceAmount>0)},{immediate:!0,deep:!0}),U(()=>e.toAmount,(t,n)=>{e.toDisabled||(e.resouceAmount=d(t/e.maiPrice))});const u=E(""),G=async()=>{const t=await N();u.value=t},S=async()=>{console.log(u.value,"222");const t=await await p(u.value).allowance(i.maiExchange);!t.success||(e.allowanceAmount=t.result||0,e.isAuth=+t.result>0)},W=async()=>{e.authLoading=!0;const{approve:t}=p(u.value),n=await t(i.maiExchange);e.authLoading=!1,n.success&&S()},X=async()=>{g(!0),e.musdBalance=+await p(i.MUSD).balanceOf(),g(!1)},J=async()=>{g(!0),e.maiBalanece=+await p(u.value).balanceOf(),console.log(e.maiBalanece,"2222"),g(!1)},Q=async()=>{M(!0),e.maiPrice=+await z(),M(!1)},Y=async()=>{L(!0),e.poolBalanece=+await p(i.MUSD).balanceOf(i.maiExchange),console.log(e.poolBalanece,"\u83B7\u53D6\u6C60\u5B50\u4F59\u989D"),L(!1)},C=E(""),Z=async()=>{const t=await R();if(!!t.success)return C.value=t.result[0],console.log(C.value,"TOKEN_ADDRESS.value"),t.result[0]},ee=async()=>{if(!e.resouceAmount)return ue(j("assets.pleaseInput"));e.exchangeLoading=!0;const t=await O(i.MUSD,d(e.resouceAmount));e.exchangeLoading=!1,t.success&&(e.resouceAmount=0,V())},V=async()=>{await S(),Z(),X(),J(),Y(),Q(),e.authLoading=!1,e.exchangeLoading=!1};return le(async()=>{await G(),V()}),(t,n)=>{const b=A("van-loading"),F=A("VanField"),I=A("VanButton");return l(),m("div",xe,[a("div",ve,[c(pe,{class:"z-50",info:s(e).userInfo},null,8,["info"]),c(_e,{class:"mr-auto ml-[5px]"}),c(fe,{tokens:["MCOIN","MUSD","MAI"],onHandleTo:n[0]||(n[0]=r=>t.$router.push(r)),class:"z-50 asset-max-width"}),we]),c(ge,{icon:"svg/ecology/redemption.svg",text:t.$t("ecology.withdraw")},{default:k(()=>[a("div",ye,[a("div",Ae,[a("img",{src:s(h).icon,alt:"",class:"w-6 h-6"},null,8,ke),Be,a("img",{src:s(w).icon,alt:"",class:"w-6 h-6"},null,8,De),s(v)?(l(),x(b,{key:0,size:"18px"})):(l(),m("span",Le,o(s(d)(s(e).maiPrice))+" MUSD",1))]),ce(" \u53D1\u884C\u603B\u91CF\u548C\u6C60\u5B50\u4F59\u989D "),a("div",Me,[a("div",Se,[a("div",Ce,o(t.$t("ecology.balance")),1),a("div",Ve,[s(H)?(l(),x(b,{key:0,size:"18px"})):(l(),m("span",Fe,o(s(B)(s(d)(s(e).poolBalanece)))+"MUSD",1))])])]),a("section",null,[a("div",Ie,[a("div",Pe,[a("img",{src:s(h).icon,alt:"",class:"w-6 h-6"},null,8,Ue),a("span",Ee,o(s(h).name),1)]),a("div",$e,[f(o(t.$t("assets.balance"))+" ",1),s(D)?(l(),x(b,{key:0,size:"18px"})):(l(),m("span",Te,o(s(B)(s(d)(s(e).maiBalanece||0))),1))])]),a("div",Ne,[c(F,{class:"bg-[#fff9f0] text-4xl font-bold","input-align":"left",disabled:s(v),modelValue:s(e).resouceAmount,"onUpdate:modelValue":n[1]||(n[1]=r=>s(e).resouceAmount=r),onFocus:K,type:"number",placeholder:"0"},null,8,["disabled","modelValue"])])]),ze,a("section",null,[a("div",Oe,[a("div",Re,[a("img",{src:s(w).icon,alt:"",class:"w-6 h-6"},null,8,je),a("span",He,o(s(w).name),1)]),a("div",Ke,[f(o(t.$t("assets.balance"))+" ",1),s(D)?(l(),x(b,{key:0,size:"18px"})):(l(),m("span",qe,o(s(B)(s(d)(s(e).musdBalance||0))),1))])]),a("div",Ge,[c(F,{class:"bg-[#fff9f0] text-4xl font-bold","input-align":"left",modelValue:s(e).toAmount,"onUpdate:modelValue":n[2]||(n[2]=r=>s(e).toAmount=r),disabled:s(v),onFocus:q,type:"number",placeholder:"0"},null,8,["modelValue","disabled"])])]),a("div",We,[c(I,{class:"btn h-[35px] min-w-[100px] px-4",disabled:s(e).isAuth,loading:s(e).authLoading,onClick:W},{default:k(()=>[f(o(t.$t("assets.auth"))+o(s(h).name),1)]),_:1},8,["disabled","loading"]),c(I,{class:"btn h-[35px] min-w-[100px] px-4",loading:s(e).exchangeLoading,disabled:!s(e).isAuth||s(e).authLoading,onClick:ee},{default:k(()=>[f(o(t.$t("ecology.redeem")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["text"])])}}}),ls=se(Xe,[["__scopeId","data-v-2fb3abd6"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/Redemption.vue"]]);export{ls as default};
