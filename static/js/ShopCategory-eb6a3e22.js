import{_ as z,d as J,A as K,C as S,D as P,m as Q,a as T,w as $,o as W,E as p,e as r,g as a,G as y,t as l,H as h,h as i,b as o,F as L,s as U,k as m,j as k,L as C,ac as X,T as Y,p as Z,l as ee}from"./index-8df1d5de.js";import{B as se}from"./BackIcon-c7e5ac8d.js";import{q as te,a as ae,b as oe}from"./category-94d50442.js";const ne=""+new URL("../images/delete-8f82856e.svg",import.meta.url).href;const I=b=>(Z("data-v-b1edad48"),b=b(),ee(),b),le={class:"px-3 text-default text-sm bg-gray1"},de={class:"flex-start gap-2 mt-2"},re={class:"rounded-xl bg-white px-2 py-4"},ie={class:"grid grid-cols-4 opacity-60 text-right mb-[10px]"},ce={class:""},ue={class:"text-right"},pe={class:"text-center"},he=I(()=>a("div",null,null,-1)),me={class:"py-[10px] border-t border-[#e8e8e8] border-solid grid grid-cols-4 gap-1"},be={key:0,class:"min-w-min col-span-1.5"},ve={class:"text-black text-center whitespace-nowrap bg-[#EBEBEB] px-2 py-1 rounded-3xl"},_e={class:"relative flex justify-end"},ge={key:1,class:"inline-flex border border-black border-solid rounded-[20px] h-[1.75rem] px-2 justify-center items-center"},fe={class:"relative"},xe=["onClick"],ye=I(()=>a("img",{src:ne,class:"w-4 h-4",alt:""},null,-1)),ke=["onClick"],Ce=J({setup(b){const{t:f}=K(),{loadingToggle:w}=X(),[V,v]=S(!1),[E,c]=S(!1),j=P(()=>[{id:1,name:f("shop.goods")},{id:2,name:f("shop.service")}]),e=Q({active:0,goodsClass:[],goodsTypeClass:[],classObj:{id:null,name:null,sortOrder:0,type:1,isEdit:!0}}),B=T([]),q=T(null),_=async()=>{w(!0);try{const s=await te({type:j.value[e.active].id});e.goodsClass=(s.data||[]).map(n=>({...n,isEdit:!1}))}finally{w(!1)}};$(()=>e.goodsClass,(s,n)=>{e.goodsTypeClass=s.filter(d=>d.type===e.active+1)},{deep:!0}),$(()=>e.active,(s,n)=>{e.goodsTypeClass=e.goodsClass.filter(d=>d.type===s+1)});const N=()=>{_()},F=()=>{v(!0),e.classObj.id=null,e.classObj.name=null,e.classObj.sortOrder=null,e.classObj.type=e.active+1,e.classObj.isEdit=!0,e.goodsClass.push(e.classObj)},D=s=>{V.value||(v(!0),e.classObj=s,s.isEdit=!0)},G=async()=>{if(!e.classObj.name)return Y(f("shop.emptySubClass"));c(!0);const s=await ae(e.classObj);c(!1),s.success&&(v(!1),_())},R=async(s,n)=>{if(c(!0),!s.id){e.goodsClass.splice(n+1,1),v(!1),c(!1);return}const d=await oe(s.id);c(!1),d.success&&_()};return W(async()=>{_()}),(s,n)=>{const d=p("VanField"),A=p("van-checkbox-group"),O=p("VanButton"),H=p("VanTab"),M=p("VanTabs");return o(),r("div",le,[a("div",de,[y(se),a("div",null,l(s.$t("order.shopCategory")),1)]),y(M,{active:i(e).active,"onUpdate:active":n[1]||(n[1]=g=>i(e).active=g),onChange:N},{default:h(()=>[(o(!0),r(L,null,U(i(j),g=>(o(),m(H,{title:g.name,key:g.id,class:"relative"},{default:h(()=>[a("div",re,[a("div",ie,[a("div",ce,l(s.$t("shop.categoryName")),1),a("div",ue,l(s.$t("shop.position")),1),a("div",pe,l(s.$t("shop.operation")),1),he]),y(A,{modelValue:B.value,"onUpdate:modelValue":n[0]||(n[0]=t=>B.value=t),ref:(t,x)=>{x.checkboxGroup=t,q.value=t}},{default:h(()=>[(o(!0),r(L,null,U(i(e).goodsTypeClass,(t,x)=>(o(),r("div",me,[k(` <van-checkbox :name="item.id" class="min-w-min col-span-1.5" v-if="!item.isEdit">
                <div class="text-black  whitespace-nowrap bg-[#EBEBEB] px-2 py-1 rounded-3xl">{{ item.name }}</div>
              </van-checkbox> `),t.isEdit?(o(),m(d,{key:1,class:"text-black whitespace-nowrap text-center items-center justify-center h-[1.75rem] px-[5px] mx-auto border border-black border-solid rounded-[20px]",modelValue:t.name,"onUpdate:modelValue":u=>t.name=u,placeholder:s.$t("shop.emptySubClass"),maxlength:"5"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):(o(),r("div",be,[a("div",ve,l(t.name),1)])),a("div",_e,[t.isEdit?(o(),m(d,{key:0,modelValue:t.sortOrder,"onUpdate:modelValue":u=>t.sortOrder=u,"input-align":"center",class:"absolute text-center items-center justify-center h-[1.75rem] border border-black border-solid rounded-[20px]"},null,8,["modelValue","onUpdate:modelValue"])):(o(),r("div",ge,l(t.sortOrder),1))]),a("div",fe,[a("div",{class:"absolute right-0 inline-flex items-center justify-center h-[1.75rem] px-3 mx-auto border border-black border-solid rounded-[20px]",onClick:u=>R(t,x)},[ye,C(" "+l(s.$t("shop.delete")),1)],8,xe)]),t.isEdit?k("v-if",!0):(o(),r("div",{key:2,class:"inline-flex items-center justify-center text-primary",onClick:u=>D(t)},l(s.$t("shop.edit")),9,ke))]))),256))]),_:1},8,["modelValue"])]),k(` <div class="rounded-xl bg-white px-2 py-4 mt-4 flex-center-bw">
          <van-radio-group v-model="checked">
            <van-radio name="1" checked-color="#fea021">\u5168\u9009</van-radio>
          </van-radio-group>
          <VanButton round hairline class=" btn text-primary py-3 px-[35px]">
            \u6279\u91CF\u5220\u9664
          </VanButton>
        </div> `),i(V)?(o(),m(O,{key:1,class:"btn-orange w-[180px] h-10 flex-center text-white font-semibold fixed x-center bottom-9",loading:i(E),onClick:G},{default:h(()=>[C(l(s.$t("common.finish")),1)]),_:1},8,["loading"])):(o(),m(O,{key:0,class:"btn-orange w-[180px] h-10 flex-center text-white font-semibold fixed x-center bottom-9",loading:i(E),onClick:F},{default:h(()=>[C(l(s.$t("shop.addClass")),1)]),_:1},8,["loading"]))]),_:2},1032,["title"]))),128))]),_:1},8,["active"])])}}}),je=z(Ce,[["__scopeId","data-v-b1edad48"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/shop/ShopCategory.vue"]]);export{je as default};
