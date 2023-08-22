import{_ as H,d as z,E as b,b as r,e as w,g as o,G as $,t as u,j as _,k as S,H as m,L as C,ah as G,p as O,l as Q,A as W,u as X,B as Y,a as p,D as Z,m as ee,h as D,F as U,s as q}from"./index-8df1d5de.js";import{B as te}from"./BackIcon-c7e5ac8d.js";import{_ as se}from"./MCOIN-c941fc3b.js";import{a as oe}from"./mall-0e3af19e.js";import{q as N,a as ae}from"./goods-2f79b80c.js";const ne=""+new URL("../images/goodsmask-e0eac318.png",import.meta.url).href;const I=t=>(O("data-v-024ecdcc"),t=t(),Q(),t),le={class:"rounded-xl bg-white mt-3 text-sm text-default overflow-hidden relative"},ie=I(()=>o("img",{src:ne,class:"absolute right-0 top-0 w-[140px]"},null,-1)),de={class:"flex gap-2 px-4 py-3 relative"},ue={class:"flex-1 flex flex-col"},re={class:"flex-center-bw flex-1"},ce={class:"font-semibold line-clamp-2"},pe={key:0,class:"text-xs opacity-60 mt-1 min-w-fit"},ve={class:"flex items-center"},ge=I(()=>o("img",{src:se,class:"w-4 h-4 mr-1.5"},null,-1)),me={class:"flex items-baseline"},fe={class:"text-lg font-semibold mr-1"},he=I(()=>o("div",{class:"text-xs"},"Mcoin",-1)),xe={class:"flex justify-end gap-3 text-xs px-4 py-2 bg-color2 relative"},ye=z({props:{goods:{type:null,required:!0},index:{type:Number,required:!0}},emits:["handleTo","handleDown","handleUp","handleDel"],setup(t,{emit:a}){return(v,c)=>{const n=b("VanImage"),l=b("VanButton");return r(),w("div",le,[ie,o("div",de,[$(n,{src:t.goods.icons&&t.goods.icons.split(",")[0],class:"w-[60px] h-[60px] rounded-md overflow-hidden",alt:"",fit:"cover"},null,8,["src"]),o("div",ue,[o("div",re,[o("div",ce,u(t.goods.goodsName),1),t.goods.deliveryType===1?(r(),w("div",pe,u(v.$t("shop.sellAmount"))+" "+u(t.goods.salesVolume||0),1)):_("v-if",!0)]),o("div",ve,[ge,o("div",me,[o("div",fe,u(t.goods.price),1),he])])])]),o("div",xe,[_(` <VanButton round hairline type="primary" class="border border-solid border-default text-default h-[24px] px-5"
        :loading="goods.loading" v-if="goods.status">
        {{ $t('shop.editPrice') }}
      </VanButton> `),t.goods.status&&t.goods.status===1?(r(),S(l,{key:0,round:"",hairline:"",type:"primary",class:"border border-solid border-default text-default h-[24px] px-5",loading:t.goods.loading,onClick:c[0]||(c[0]=G(()=>a("handleDown",t.goods,t.index),["stop"]))},{default:m(()=>[C(u(v.$t("shop.down")),1)]),_:1},8,["loading"])):_("v-if",!0),t.goods.status&&t.goods.status===2?(r(),S(l,{key:1,round:"",hairline:"",type:"primary",class:"border border-solid border-default text-default h-[24px] px-5",loading:t.goods.loading,onClick:c[1]||(c[1]=G(()=>a("handleUp",t.goods,t.index),["stop"]))},{default:m(()=>[C(u(v.$t("shop.up")),1)]),_:1},8,["loading"])):_("v-if",!0),_(` <VanButton round hairline type="primary" class="border border-solid border-default text-default h-[24px] px-5"
        :loading="goods.loading" @click.stop="() => emits('handleDel', goods, index)" v-if="!goods.status">
        {{ $t('shop.delete') }}
      </VanButton> `),$(l,{round:"",hairline:"",class:"btn text-white bg-primary h-[24px] px-5",loading:t.goods.loading,onClick:c[2]||(c[2]=()=>a("handleTo",`/editgoods?id=${t.goods.id}`))},{default:m(()=>[C(u(v.$t("shop.modify")),1)]),_:1},8,["loading"])])])}}}),_e=H(ye,[["__scopeId","data-v-024ecdcc"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/shop/components/SellingGoodsItem.vue"]]);const be={class:"text-default text-sm pb-20 bg-gray1"},we={class:"flex-start gap-2 px-3 py-2 sticky top-0 z-50 bg-white"},$e={class:"px-3"},ke=z({setup(t){const{t:a}=W(),{accountStore:v}=X(),c=Y(),n=p(0),l=Z(()=>[{id:1,name:`${a("shop.selling")}(${n.value})`},{id:2,name:a("shop.watiShelf")},{id:0,name:a("shop.manuscript")}]),k=ee({active:0,tabList:[{id:1,name:`${a("shop.selling")}(0)`},{id:2,name:a("shop.watiShelf")},{id:0,name:a("shop.manuscript")}]}),L=e=>{c.push(e)},i=p([]),f=p(!1),h=p(!1),x=p(0),F=p(10),B=p(0),R=async()=>{h.value=!1,x.value=0,B.value=0,T()},T=async()=>{f.value=!0,x.value+=1,await A(),f.value=!1},A=async()=>{const e=await oe({merchant:v.account,status:l.value[k.active].id,page:x.value,size:F.value});if(f.value=!1,!e.success){h.value=!0;return}if(!e.data||!e.total){h.value=!0,i.value=x.value===1?[]:i.value;return}B.value=e.total,n.value=k.active?n.value:e.total,console.log(n.value,"\u51FA\u552E\u6570\u91CF"),l.value[0].name=`${a("shop.selling")}(${n.value})`;const s=p([]);s.value=e.data.map((d,g)=>({btnLoading:!1,...d.goods})),i.value=x.value===1?s.value:i.value.concat(s.value),i.value.length>=B.value&&(h.value=!0)},E=()=>{R()},M=async(e,s)=>{e.loading=!0;const d={id:e.id,status:2},g=await N(d);e.loading=!1,g.success&&(i.value.splice(s,1),n.value=n.value-1,l.value[0].name=`${a("shop.selling")}(${n.value})`)},j=async(e,s)=>{e.loading=!0;const d={id:e.id,status:1},g=await N(d);e.loading=!1,g.success&&(i.value.splice(s,1),n.value=n.value+1,l.value[0].name=`${a("shop.selling")}(${n.value})`)},P=async(e,s)=>{e.loading=!0;const d=await ae(e.id);e.loading=!1,d.success&&i.value.splice(s,1)};return(e,s)=>{const d=b("VanList"),g=b("VanTab"),J=b("VanTabs");return r(),w("div",be,[o("div",we,[$(te),o("div",null,u(e.$t("shop.sellingGoods")),1)]),o("div",$e,[$(J,{active:D(k).active,"onUpdate:active":s[2]||(s[2]=V=>D(k).active=V),onChange:E},{default:m(()=>[(r(!0),w(U,null,q(D(l),V=>(r(),S(g,{title:V.name,key:V.id,class:"relative"},{default:m(()=>[$(d,{loading:f.value,"onUpdate:loading":s[0]||(s[0]=y=>f.value=y),finished:h.value,"finished-text":e.$t("common.noMore"),"loading-text":e.$t("common.loading"),onLoad:T},{default:m(()=>[(r(!0),w(U,null,q(i.value,(y,K)=>(r(),S(_e,{key:y.id,index:K,goods:y,onHandleDown:M,onHandleUp:j,onHandleDel:P,onHandleTo:L},null,8,["index","goods"]))),128))]),_:1},8,["loading","finished","finished-text","loading-text"]),o("button",{class:"btn-orange w-[180px] h-10 flex-center text-white font-semibold fixed x-center bottom-9 z-50",onClick:s[1]||(s[1]=y=>L("/editgoods"))},u(e.$t("shop.releaseGoods")),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])])])}}}),Ie=H(ke,[["__scopeId","data-v-27246be8"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/shop/ShopGoods.vue"]]);export{Ie as default};
