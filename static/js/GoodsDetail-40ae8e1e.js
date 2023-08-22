import{_ as h,d as w,E as f,b as n,k as m,H as g,e as c,s as T,g as e,t as l,G as _,F as b,ai as D,v as N,j as v,x as S,L as G,ah as L,p as R,l as U,h as A,W as F,A as P,ae as j,B as H,a as $,o as M,ac as z,T as E}from"./index-8df1d5de.js";import{B as O}from"./BackIcon-c7e5ac8d.js";import{_ as W,a as J}from"./outline-4c6b317f.js";import{R as K}from"./RatioBox-5cd4042e.js";import{b as Q}from"./goods-2f79b80c.js";import{q as X}from"./cart-eacb2434.js";const Y={class:"w-full h-[9.375rem] rounded-2xl object-contain overflow-hidden"},Z={class:"pt-5"},ee=w({props:{imgs:{type:null,required:!0}},setup(s){const o=s,i=t=>{D({images:o.imgs,closeable:!0,showIndex:!0,startPosition:t})};return(t,d)=>{const a=f("VanImage"),p=f("van-swipe-item"),k=f("van-swipe");return n(),m(k,{"indicator-color":"#fba923",class:"min-w-full"},{default:g(()=>[(n(!0),c(b,null,T(s.imgs,(x,I)=>(n(),m(p,{onClick:y=>i(I)},{indicator:g(({active:y,total:C})=>[e("div",Z,l(y+1)+"/"+l(C),1)]),default:g(()=>[e("div",Y,[_(a,{src:x,class:"w-full h-full object-cover",fit:"contain"},null,8,["src"])])]),_:2},1032,["onClick"]))),256))]),_:1})}}}),se=h(ee,[["__scopeId","data-v-f15aee08"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/goods/components/GoodsImg.vue"]]),oe={class:"bg-gray1 rounded-lg"},te={class:"p-2 break-all"},ae=w({props:{text:{type:null,required:!0},imgs:{type:null,required:!0}},setup(s){return(o,i)=>{const t=f("VanImage");return n(),c("div",oe,[e("div",te,l(s.text),1),s.imgs.length>0?(n(!0),c(b,{key:0},T(s.imgs,d=>N((n(),m(t,{src:d,class:"w-full h-auto",fit:"cover"},null,8,["src"])),[[S,d]])),256)):v("v-if",!0)])}}}),ne=h(ae,[["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/goods/components/GoodsDesciption.vue"]]),le=""+new URL("../images/shop-f5359f77.svg",import.meta.url).href,ie=""+new URL("../images/kefu-db7f46bd.svg",import.meta.url).href;const V=s=>(R("data-v-0127c54c"),s=s(),U(),s),de={class:"fixed bottom-0 left-0 w-full px-2.5 safe-bottom sm:bottom-[5%] lg:bottom-[10%] z-20 flex-center"},re={class:"w-full h-14 flex items-center justify-between pb-0.5 px-2 bg-white rounded-full sm:w-[355px] shadow-2"},ce={class:"grid grid-cols-3 gap-4 items-center flex-1"},ue=V(()=>e("img",{src:le,class:"w-5 h-5 m-auto mb-0.5"},null,-1)),me=V(()=>e("img",{src:ie,class:"w-5 h-5 m-auto mb-0.5"},null,-1)),_e={class:"flex"},pe=w({emits:["handeToShop","handleConnect","handleBuy","handleAddCart"],setup(s,{emit:o}){return(i,t)=>{const d=f("VanButton");return n(),c("div",de,[e("div",re,[e("div",ce,[e("div",{class:"text-xs text-center",onClick:t[0]||(t[0]=()=>o("handeToShop"))},[ue,e("div",null,l(i.$t("mall.shop")),1)]),e("div",{class:"text-xs text-center",onClick:t[1]||(t[1]=()=>o("handleConnect"))},[me,e("div",null,l(i.$t("common.service")),1)])]),e("div",_e,[_(d,{class:"linear-btn text-sm text-white rounded-l-3xl px-3",onClick:t[2]||(t[2]=L(a=>o("handleAddCart"),["stop"]))},{default:g(()=>[G(l(i.$t("common.addCart")),1)]),_:1}),_(d,{class:"bg-primary text-sm text-white rounded-r-3xl px-5",onClick:t[3]||(t[3]=()=>o("handleBuy"))},{default:g(()=>[G(l(i.$t("common.buy")),1)]),_:1})])])])}}}),ve=h(pe,[["__scopeId","data-v-0127c54c"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/goods/components/GoodsBar.vue"]]),fe={class:"bg-[#FFF9F1] rounded-lg p-5"},ge={class:"flex items-center"},he={class:"flex items-baseline"},we={class:"text-primary text-[30px] mr-2"},xe=e("div",null,"MCOIN",-1),ye={class:"mt-2 font-semibold break-all"},$e={class:"mt-2 flex items-center"},be=e("img",{src:W,class:"w-6 mr-2"},null,-1),ke=e("img",{src:J,class:"w-6 mr-2"},null,-1),Ie=w({props:{goods:{type:null,required:!0}},setup(s){return(o,i)=>(n(),c("div",fe,[e("div",ge,[e("div",he,[e("div",we,l(A(F)(s.goods.price||0)),1),xe]),_(K,{ratio:s.goods.discountRatio,class:"h-6 ml-2"},null,8,["ratio"])]),e("div",ye,l(s.goods.goodsName||""),1),e("div",$e,[s.goods.deliveryType===1?(n(),c(b,{key:0},[be,e("div",null,l(o.$t("common.send")),1)],64)):(n(),c(b,{key:1},[ke,e("div",null,l(o.$t("common.offline")+o.$t("common.Payment")),1)],64))])]))}}),Ce=h(Ie,[["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/goods/components/GoodsInfo.vue"]]),Be={key:0,class:"relative w-full h-full bg-white px-2.5 safe-bottom-page"},Ge={class:"flex items-center justify-between sticky top-0 z-50 bg-white py-2.5"},Te={class:"flex items-center flex-wrap"},Ve={class:"ml-2"},qe=w({setup(s){const{loadingToggle:o}=z(),{t:i}=P(),t=j(),d=H(),a=$(null),p=$(null),k=$([]),x=$(),I=async()=>{const u=t.query.id,r=await Q(+u);x.value=r.data.categoryName,a.value=r.data.goods,p.value=r.data.stores,k.value=r.data.goodsList},y=()=>{d.push(`submitOrder?id=${a.value.id}`)},C=async()=>{o(!0);const u=await X(a.value.id);o(!1),u.success&&E(i("cart.addTips"))},B=u=>{d.push(u)};return M(async()=>{o(!0),await I(),o(!1)}),(u,r)=>a.value?(n(),c("div",Be,[e("header",Ge,[e("div",Te,[_(O),e("div",Ve,l(x.value||""),1)])]),a.value.icons?(n(),m(se,{key:0,imgs:(a.value.icons||"").split(","),class:"mb-2.5"},null,8,["imgs"])):v("v-if",!0),_(Ce,{goods:a.value,class:"mb-2.5"},null,8,["goods"]),a.value.goodsDesc||a.value.goodsPic?(n(),m(ne,{key:1,text:a.value.goodsDesc,imgs:(a.value.goodsPic||"").split(",")},null,8,["text","imgs"])):v("v-if",!0),+a.value.deliveryType==1?(n(),m(ve,{key:2,onHandleBuy:y,onHandeToShop:r[0]||(r[0]=q=>B(`/shop?id=${p.value.id}`)),onHandleConnect:r[1]||(r[1]=q=>B(`/shopInfo?address=${p.value.merchant}`)),onHandleAddCart:C})):v("v-if",!0)])):v("v-if",!0)}}),Ae=h(qe,[["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/goods/GoodsDetail.vue"]]);export{Ae as default};
