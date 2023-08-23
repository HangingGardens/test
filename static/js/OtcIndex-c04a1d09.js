import{_ as oe,d as ae,A as fe,D as X,E as q,b as f,e as K,g as t,h as s,t as n,G as P,ao as ke,k as S,F as ie,s as be,H as B,L as V,K as se,j as N,Z as $e,aw as _e,M as ee,ax as Ae,ay as Oe,z as Me,a4 as W,a6 as H,a8 as Ie,az as re,a2 as le,a5 as pe,a3 as he,m as ue,w as we,a as j,C as ce,o as me,X as Z,P as ne,W as G,at as ye,u as Be,p as Ce,l as Fe,ac as Se}from"./index-dd2b66f1.js";const Le=""+new URL("../images/sell-28e94682.svg",import.meta.url).href,Te=""+new URL("../images/buy-0ac551f5.svg",import.meta.url).href;const Ue={class:"pt-5"},Pe={class:"flex items-center h-5 text-[#2E2008] text-base"},Ve=["src"],qe={class:"font-semibold ml-0.5"},De={class:"bg-[#FFF1D9]/[0.6] rounded-xl mt-2.5 p-4 pb-1.5"},Ne={class:"w-full"},Re={class:"flex"},Ee={class:"my-th w-4/12"},je={class:"my-th w-5/12"},ze={class:"my-th w-3/12"},We={key:1,class:"max-h-36 w-full overflow-auto pt-1.5"},He={class:"w-4/12 text-overflow"},Ge={class:"text-base font-medium text-[#2E2008]"},Xe={class:"w-5/12 text-overflow"},Ke={class:"text-base font-medium text-[#2E2008]"},Ye={class:"w-3/12 text-overflow"},Ze=ae({props:{type:{type:null,required:!0},list:{type:Array,required:!0},isOld:{type:Boolean,required:!1}},emits:["onClick","onCheckMyOrder"],setup(o,{emit:i}){const{type:A,list:L}=o,_=fe(),I=X(()=>{const w={icon:Le,title:_.t("ecology.Sellorders"),subTitle:_.t("ecology.mysellorder"),btnText:_.t("ecology.buyin")};return A=="buy"&&(w.icon=Te,w.title=_.t("ecology.buyorder"),w.subTitle=_.t("ecology.mybill"),w.btnText=_.t("ecology.sellout")),w}),T=w=>{i("onClick",A,w)},m=()=>{i("onCheckMyOrder",A)};return(w,v)=>{const k=q("van-icon"),z=q("van-skeleton"),y=q("VanButton");return f(),K("div",Ue,[t("div",Pe,[t("img",{src:s(I).icon,class:"w-5",alt:""},null,8,Ve),t("span",qe,n(s(I).title),1),t("span",{class:"ml-auto font-medium opacity-80",onClick:m},n(s(I).subTitle),1),P(k,{class:"font-semibold text-sm mx-px",name:"arrow",onClick:m})]),t("div",De,[t("div",Ne,[t("div",Re,[t("span",Ee,n(w.$t("mall.price")),1),t("span",je,n(w.$t("ecology.quantity")),1),t("span",ze,n(w.$t("shop.operation")),1)]),s(ke)?(f(),S(z,{key:0,class:"mt-3",row:3})):(f(),K("div",We,[(f(!0),K(ie,null,be(o.list,O=>(f(),K("div",{class:"flex w-full py-2.5",key:O.price},[t("span",He,[t("span",Ge,n(O.price),1)]),t("span",Xe,[t("span",Ke,n(O.amount),1)]),t("span",Ye,[P(y,{class:se(["align-middle btn rounded px-3.5 h-6 leading-6",{"btn-buy":o.type=="buy"}]),onClick:U=>T(O),disabled:o.isOld},{default:B(()=>[V(n(s(I).btnText),1)]),_:2},1032,["class","onClick","disabled"])])]))),128))]))]),N(` <table border="1" class="w-full">
        <thead>
          <tr>
            <th class="my-th w-4/12">{{ $t('mall.price') }}</th>
            <th class="my-th w-5/12">{{ $t('ecology.quantity') }}</th>
            <th class="my-th w-3/12">{{ $t('shop.operation') }}</th>
          </tr>
        </thead>
        <tbody class="max-h-36">
          <tr class="h-10 leading-10 " v-for="(item, index) in list" :key="item.price">
            <td class="w-4/12">
              <span class="text-base font-medium text-[#2E2008]">{{ item.price }}</span>
            </td>
            <td class="w-5/12">
              <span class="text-base font-medium text-[#2E2008]">{{ item.amount }}</span>
            </td>
            <td class="w-3/12">
              <VanButton class="align-middle btn rounded px-3.5 h-6 leading-6" :class="{ 'btn-buy': type == 'buy' }"
                @click="onClick">
                {{ labels.btnText }}
              </VanButton>
            </td>
          </tr>
        </tbody>

      </table> `)])])}}}),ve=oe(Ze,[["__scopeId","data-v-1cc2456f"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/OtcOrder.vue"]]);const Je={class:"w-[21rem] p-5 bg-[#FFFDF8] text-xs text-[#2E2008]"},Qe={class:"flex justify-between items-center pb-4 header font-semibold text-base"},et=ae({props:{show:{type:Boolean,required:!0},title:{type:null,required:!0}},emits:["close"],setup(o,{emit:i}){const{show:A,title:L}=o,_=()=>{i("close")};return(I,T)=>{const m=q("van-icon"),w=q("van-popup");return f(),S(w,_e(I.$attrs,{show:o.show,"onUpdate:show":T[0]||(T[0]=v=>ee(A)?A.value=v:null),round:"","overlay-class":"",onClose:_}),{default:B(()=>[t("div",Je,[t("div",Qe,[t("span",null,n(o.title),1),P(m,{name:"cross",class:"font-semibold text-xl",onClick:_})]),t("div",null,[$e(I.$slots,"default",{},void 0,!0)])])]),_:3},16,["show"])}}}),ge=oe(et,[["__scopeId","data-v-41985eb3"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/MyDialog.vue"]]),de=o=>{const i=o?Ae():Oe(),A=Me().getCurrentAccount();return{pending:async(e,l,r)=>{try{const $=await(await i.pending(e,le(l),le(r))).wait();return W($)}catch($){return pe($),H($)}},usdtAddress:async()=>{try{const e=await i.USDT();return W(e)}catch(e){return H(e)}},MIN_AMOUNT:async()=>{try{const e=await i.MIN_AMOUNT();return Ie(e)}catch{return 0}},MIN_REMAIN_AMOUNT:async()=>{try{const e=await i.MIN_REMAIN_AMOUNT();return W(e)}catch(e){return H(e)}},lastPrice:async()=>{try{const e=await i.lastPrice();return re(e.toString())}catch{return 0}},getMarketPrices:async e=>{try{const l=await i.getMarketPrices(e);return W(l)}catch(l){return H(l)}},getPriceTotals:async(e,l)=>{try{const r=await i.getPriceTotals(e,le(l));return W(r)}catch(r){return H(r)}},getMarketIds:async(e,l)=>{try{const r=await i.getMarketIds(e,l);return W(r)}catch(r){return H(r)}},getOrderInfo:async e=>{try{const l=await i.getOrderInfo(e);return W(l)}catch(l){return H(l)}},batchTrade:async e=>{try{const r=await(await await i.batchTrade(e)).wait();return W(r)}catch(l){return pe(l),H(l)}},trade:async(e,l)=>{try{const r=await i.estimateGas.trade(e,le(l)),M=await(await await i.trade(e,le(l),{gasLimit:he(r,3e3)})).wait();return W(M)}catch(r){return pe(r),H(r)}},getPendingIds:async()=>{try{const e=await i.getPendingIds(A);return W(e)}catch(e){return H(e)}},cancel:async e=>{try{const l=await i.estimateGas.cancel(e),$=await(await await i.cancel(e.toString(),{gasLimit:he(l,3e3)})).wait();return W($)}catch(l){return pe(l),H(l)}},musdAddress:async()=>{try{const e=await i.MUSD();return W(e)}catch(e){return H(e)}},maiAddress:async()=>{try{const e=await i.MAI();return W(e)}catch(e){return H(e)}}}};const tt={class:"mt-4 text-[#2E2008]"},st={class:"text-sm font-medium"},nt={class:"bg-[#fff9f0] mt-3 rounded-lg py-1.5 pr-2.5"},ot={class:"mt-5 text-sm font-medium"},at={class:"flex justify-between items-center bg-[#fff9f0] mt-3 rounded-lg py-1.5 pr-2.5"},lt={class:"text-base opacity-60"},rt={class:"flex flex-col items-center justify-center mt-5"},ct={key:3,class:"mt-5 text-center"},it={key:4,class:"mt-5 text-center"},ut=ae({props:{show:{type:Boolean,required:!0},type:{type:String,required:!0},lastPrice:{type:null,required:!0}},emits:["update:show","success"],setup(o,{emit:i}){const{show:A,type:L}=o,{t:_}=fe(),{musdAddress:I,MIN_AMOUNT:T,maiAddress:m,pending:w}=de(),v=ue({number:null,price:null}),k=X(()=>{const a={title:_("ecology.Pendingpurchase"),numberText:_("ecology.buyquantity"),priceText:_("ecology.buyprice")};return L=="sell"&&(a.title=_("ecology.Hangforsale"),a.numberText=_("ecology.sellquantity"),a.priceText=_("ecology.sellingprice")),a}),z=X(()=>x.value>0&&x.value>=y.value);we(()=>v.price,(a,u)=>{O.value||(y.value=+a*+v.number)}),we(()=>v.number,(a,u)=>{U.value||(y.value=+a*+v.price)});const y=j(null),O=j(!1),U=j(!1),b=()=>{O.value=!1,U.value=!0},R=()=>{O.value=!0,U.value=!1},[c,e]=ce(!1),l=()=>{i("update:show",!1)},r=j(""),$=async()=>{const a=L==="buy"?await I():await m();!a.success||(r.value=a.result)},M=async()=>{e(!0);const a=await await Z(r.value).approve(ne.otc);e(!1),a.success&&g()},x=j(null),g=async()=>{e(!0);const a=await(await Z(r.value)).allowance(ne.otc);x.value=a.result||0,e(!1)},C=j(0),te=async()=>{const a=await T();C.value=+a,console.log(C.value,"\u6700\u5C0F\u6302\u5355\u6570\u91CF")},E=j(0),J=async()=>{const a=await Z(r.value).balanceOf();E.value=+a,console.log("\u4F59\u989D",E.value)},[p,F]=ce(!1),d=async()=>{F(!0);const a=await w(L==="buy"?1:2,v.price,v.number);F(!1),a.success&&(l(),i("success"))},h=async()=>{g(),te(),J()};return me(async()=>{await $(),h()}),(a,u)=>{const Q=q("VanField"),D=q("VanButton");return f(),S(ge,{show:o.show,"onUpdate:show":u[2]||(u[2]=Y=>ee(A)?A.value=Y:null),title:s(k).title,onClose:l},{default:B(()=>[t("div",tt,[t("div",st,n(s(k).numberText),1),t("div",nt,[P(Q,{class:"bg-[#fff9f0] text-3xl font-bold",onFocus:R,modelValue:s(v).number,"onUpdate:modelValue":u[0]||(u[0]=Y=>s(v).number=Y),type:"number",placeholder:"0"},null,8,["modelValue"])]),t("div",ot,n(s(k).priceText),1),t("div",at,[P(Q,{class:"bg-[#fff9f0] text-3xl font-bold",modelValue:s(v).price,"onUpdate:modelValue":u[1]||(u[1]=Y=>s(v).price=Y),onFocus:b,type:"number",placeholder:"0"},null,8,["modelValue"]),t("span",lt,n((o.type==="buy","MUSD")),1)]),t("div",rt,[s(z)?o.type==="buy"?(f(),S(D,{key:1,onClick:d,disabled:+s(v).price<=0||s(v).number<C.value||y.value>E.value,loading:s(p),class:"font-semibold btn h-[38px] min-w-[130px] px-4 rounded-3xl text-base"},{default:B(()=>[V(n(a.$t("common.submit")),1)]),_:1},8,["disabled","loading"])):(f(),S(D,{key:2,onClick:d,disabled:+s(v).price<=0||s(v).number<C.value||s(v).number>E.value,loading:s(p),class:"font-semibold btn h-[38px] min-w-[130px] px-4 rounded-3xl text-base"},{default:B(()=>[V(n(a.$t("common.submit")),1)]),_:1},8,["disabled","loading"])):(f(),S(D,{key:0,class:"font-semibold btn h-[38px] min-w-[130px] px-4 rounded-3xl text-base",loading:s(c),onClick:M},{default:B(()=>[V(n(a.$t("assets.auth"))+" "+n(o.type==="buy"?"MUSD":"MAI"),1)]),_:1},8,["loading"])),o.type=="sell"?(f(),K("div",ct,[t("div",null,"MAI:"+n(E.value),1),t("div",null,n(a.$t("ecology.new price"))+n(o.lastPrice),1),t("div",null,n(a.$t("ecology.hand num"))+" "+n(C.value)+"MAI",1),t("div",null,n(a.$t("ecology.estimated get"))+" "+n(y.value)+"MUSD",1)])):(f(),K("div",it,[t("div",null,"MUSD: "+n(E.value),1),t("div",null,n(a.$t("ecology.new price"))+n(o.lastPrice),1),t("div",null,n(a.$t("ecology.hand num"))+" "+n(C.value)+"MAI",1),t("div",null,n(a.$t("ecology.estimated consume"))+" "+n(y.value)+"MUSD",1)]))])])]),_:1},8,["show","title"])}}}),dt=oe(ut,[["__scopeId","data-v-6f90ea23"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/PostForm.vue"]]);const pt={class:"mt-5"},mt={class:"flex justify-between"},yt={class:"text-base font-semibold"},ft={class:"text-base font-medium opacity-80"},bt={class:"flex justify-between mt-2.5"},gt={class:"text-base font-semibold"},ht={class:"text-base font-medium opacity-80"},wt={class:"flex justify-between mt-6"},vt={class:"text-sm font-medium"},_t={class:"text-sm opacity-80"},xt={class:"flex justify-between items-center bg-[#fff9f0] mt-3 rounded-lg py-2.5 pr-2.5 mt-2.5"},kt={class:"flex flex-col items-center justify-center mt-5"},$t={class:"mt-5 text-center w-56"},At={class:"mt-2"},Ot={class:"text-[#FBA923]"},Mt=ae({props:{show:{type:Boolean,required:!0},type:{type:String,required:!0},token:{type:String,required:!0},musd:{type:String,required:!0},isAuth:{type:Boolean,required:!0},orderInfo:{type:null,required:!0},musdBalance:{type:[Number,String],required:!0},tokenBalance:{type:[Number,String],required:!0},musdAllowance:{type:[Number,String],required:!0},tokenAllowance:{type:[Number,String],required:!0},otcAddress:{type:String,required:!0}},emits:["update:show","approve","success"],setup(o,{emit:i}){const{show:A,type:L,token:_,musd:I,isAuth:T,orderInfo:m,musdBalance:w,tokenBalance:v,otcAddress:k,tokenAllowance:z,musdAllowance:y}=o,O=.05,{trade:U}=de(),b=ue({isAuth:!1,btnLoading:!1}),R=X(()=>m.remain<M.number),c=X(()=>m.remain>10?`1-${G(m.remain-10)}`:m.remain),e=X(()=>{if(L=="buy")return 1;if(L=="sell")return 2}),l=()=>{i("update:show",!1)},r=async()=>{b.btnLoading=!0;let g;if(e.value===1?g=await Z(_).approve(k):g=await Z(I).approve(k),!g.success)return b.btnLoading=!1;b.isAuth=!0,i("approve"),b.btnLoading=!1,$()},$=async()=>{if(!T&&!b.isAuth)return r();const g=m.remain;if(e.value===1){if(g>z&&g<=v)return r()}else if(g>y&&g<=w)return r();b.btnLoading=!0;try{(await U(m.id,+M.number)).success&&i("success")}finally{b.btnLoading=!1}},M=ue({number:""}),x=()=>{e.value===1?M.number=+v<+m.remain?v:m.remain:M.number=+w/m.price<+m.remain?+w/m.price:m.remain};return(g,C)=>{const te=q("VanField"),E=q("VanButton");return f(),S(ge,{show:o.show,"onUpdate:show":C[1]||(C[1]=J=>ee(A)?A.value=J:null),title:o.type=="sell"?g.$t("otc.buyIn"):g.$t("otc.sellOut"),onClose:l,overlay:!1},{default:B(()=>[t("div",pt,[t("div",mt,[t("span",yt,n(g.$t("mall.price")),1),t("span",ft,n(s(G)(o.orderInfo.price||0,4))+" MUSD",1)]),t("div",bt,[t("span",gt,n(g.$t("ecology.total")),1),t("span",ht,n(s(G)(o.orderInfo.remain||0,4))+" MAI",1)]),t("div",wt,[t("span",vt,n(o.type=="sell"?g.$t("ecology.buyquantity"):g.$t("ecology.sellquantity")),1),t("span",_t,n(o.type=="sell"?"MUSD":"MAI")+n(g.$t("assets.balance"))+n(o.type=="sell"?o.musdBalance:o.tokenBalance),1)]),t("div",xt,[P(te,{class:"bg-[#fff9f0] text-3xl font-bold",modelValue:s(M).number,"onUpdate:modelValue":C[0]||(C[0]=J=>s(M).number=J),type:"number",placeholder:"0"},null,8,["modelValue"]),t("div",{class:"px-1.5 py-1 border-[1px] rounded border-[#FBA923] border-solid text-xs text-[#FBA923] font-medium",onClick:x},"MAX ")]),t("div",kt,[o.isAuth||s(b).isAuth?(f(),S(E,{key:0,loading:s(b).btnLoading,disabled:!s(M).number||+s(M).number<=0||s(R),class:"font-semibold btn h-[38px] min-w-[130px] px-4 rounded-3xl text-base",onClick:$},{default:B(()=>[V(n(g.$t("common.submit")),1)]),_:1},8,["loading","disabled"])):(f(),S(E,{key:1,class:"font-semibold btn h-[38px] min-w-[130px] px-4 rounded-3xl text-base",disabled:!s(M).number||+s(M).number<=0||s(R),loading:s(b).btnLoading,onClick:r},{default:B(()=>[V(n(g.$t("ecology.authorized")),1)]),_:1},8,["disabled","loading"])),t("div",$t,n(g.$t("ecology.tips",{Currency:o.type=="sell"?"MAI":"MUSD",num:s(c)})),1),t("div",At,[V("*"+n(g.$t("ecology.Estimatedconsumption"))+" ",1),t("span",Ot,n(s(e)===1?s(G)(+s(M).number*O):s(G)(+s(M).number*o.orderInfo.price*O)),1),V(" "+n(o.type=="sell"?"MUSD":"MAI"),1)])])])]),_:1},8,["show","title"])}}}),It=oe(Mt,[["__scopeId","data-v-67dbb134"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/OperateDetail.vue"]]);const Bt={class:"mt-4"},Ct={class:"text-sm text-[#2E2008] font-medium"},Ft={class:"text-white flex flex-col justify-center items-center mt-5 font-semibold text-sm"},St=ae({props:{show:{type:Boolean,required:!0},type:{type:String,required:!0},price:{type:Number,required:!0},token:{type:String,required:!0},musd:{type:String,required:!0}},emits:["update:show","success"],setup(o,{emit:i}){const{show:A,type:L,price:_,token:I,musd:T}=o,m=fe(),{getMarketIds:w,getOrderInfo:v,batchTrade:k,MIN_AMOUNT:z}=de(),y=ne.otc,[O,U]=ce(!1),b=j([]),R=p=>{b.value=p},c=ue({orderInfo:{},amountShow:!1,list:[],btnLoading:!1,tokenAllowance:"",tokenBalance:"",musdAllowance:"",musdBalance:""}),e=X(()=>+c.tokenAllowance>=+c.tokenBalance&&+c.tokenAllowance>0),l=X(()=>+c.musdAllowance>+c.musdBalance&&+c.musdAllowance>0),r=X(()=>{const p={title:m.t("ecology.buy"),btnText:m.t("ecology.buyin"),batchBtnText:m.t("ecology.Bulkbuy"),btnClass:"btn-green"};return L=="buy"&&(p.title=m.t("ecology.Sell"),p.btnText=m.t("ecology.sellout"),p.batchBtnText=m.t("ecology.sellinbulk"),p.btnClass="btn-pink"),p}),$=X(()=>{if(L=="buy")return 1;if(L=="sell")return 2}),M=()=>{i("update:show",!1)},x=async()=>{const p=await Z(T).allowance(ne.otc);c.musdAllowance=p.result,c.musdBalance=String(G(await Z(T).balanceOf()));const F=await Z(I).allowance(ne.otc);c.tokenAllowance=F.result,c.tokenBalance=String(G(await Z(I).balanceOf()))},g=async()=>{const p=await w($.value,le(_)),F=[];for(let d=0;d<p.result.length;d++){const h=await v(p.result[d]);F.push({id:p.result[d],price:_,remain:re(h.result.remain.toString())})}c.list=F},C=async()=>{c.btnLoading=!0;let p;if($.value===1?p=await Z(I).approve(ne.otc):p=await Z(T).approve(ne.otc),!p.success)return c.btnLoading=!1;await x(),te()},te=async()=>{const p=c.list.reduce((F,d)=>b.value.find(h=>h==d.id)?F+d.remain:F,0);if($.value===1){if(p>c.tokenAllowance&&p<=c.tokenBalance)return C()}else if(p>c.musdAllowance&&p<=c.musdBalance)return C();c.btnLoading=!0;try{(await k(b.value)).success&&i("success")}finally{c.btnLoading=!1}},E=p=>{c.orderInfo=p,U(!0)},J=()=>{U(!1),i("success")};return me(async()=>{c.btnLoading=!0,await x(),await g(),c.btnLoading=!1}),(p,F)=>{const d=q("van-checkbox"),h=q("VanButton"),a=q("van-checkbox-group");return f(),K(ie,null,[P(ge,{show:o.show,"onUpdate:show":F[1]||(F[1]=u=>ee(A)?A.value=u:null),title:`${o.price}${s(r).title}`,onClose:M,"close-on-click-overlay":!s(O)},{default:B(()=>[t("div",Bt,[P(a,{modelValue:b.value,"onUpdate:modelValue":F[0]||(F[0]=u=>b.value=u),onChange:R},{default:B(()=>[(f(!0),K(ie,null,be(s(c).list,u=>(f(),K("div",{class:"flex justify-between items-center bg-[#fff9f0] mt-3 rounded-lg p-2.5 mt-2.5",key:u.id},[P(d,{name:u.id,"icon-size":"1rem","checked-color":"#14D8A9"},{default:B(()=>[t("span",Ct,n(s(G)(u.remain||0,4))+" MAI",1)]),_:2},1032,["name"]),P(h,{class:se(["align-middle btn rounded px-3.5 h-6 leading-6",{"btn-buy":o.type=="buy"}]),onClick:Q=>E(u)},{default:B(()=>[V(n(s(r).btnText),1)]),_:2},1032,["class","onClick"])]))),128))]),_:1},8,["modelValue"]),t("div",Ft,[N(" \u6388\u6743 "),s($)==1&&!s(e)||s($)==2&&!s(l)?(f(),S(h,{key:0,disabled:!b.value.length,loading:s(c).btnLoading,class:se(["py-3 flex-1 w-40",s(r).btnClass]),onClick:C},{default:B(()=>[V(n(p.$t("ecology.authorized")),1)]),_:1},8,["disabled","loading","class"])):(f(),K(ie,{key:1},[N(" \u6279\u91CF\u8D2D\u4E70 "),P(h,{disabled:!b.value.length,loading:s(c).btnLoading,class:se(["py-3 flex-1 w-40",s(r).btnClass]),onClick:te},{default:B(()=>[V(n(s(r).batchBtnText),1)]),_:1},8,["disabled","loading","class"])],2112))])])]),_:1},8,["show","title","close-on-click-overlay"]),s(O)?(f(),S(It,{key:0,type:o.type,show:s(O),"onUpdate:show":F[2]||(F[2]=u=>ee(O)?O.value=u:null),token:o.token,musd:o.musd,isAuth:o.type=="sell"?s(l):s(e),isMusdtAuth:s(l),orderInfo:s(c).orderInfo,musdBalance:s(c).musdBalance,tokenBalance:s(c).tokenBalance,otcAddress:s(y),tokenAllowance:s(c).tokenAllowance,musdAllowance:s(c).musdAllowance,onApprove:x,onSuccess:J},null,8,["type","show","token","musd","isAuth","isMusdtAuth","orderInfo","musdBalance","tokenBalance","otcAddress","tokenAllowance","musdAllowance"])):N("v-if",!0)],64)}}}),Lt=oe(St,[["__scopeId","data-v-176626b2"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/OperatePopup.vue"]]),Tt=""+new URL("../images/Rectangle_L_O-1a09b3b3.svg",import.meta.url).href,Ut=""+new URL("../images/Rectangle_L_W-bf92913e.svg",import.meta.url).href,Pt=""+new URL("../images/Rectangle_R_O-b6604591.svg",import.meta.url).href,Vt=""+new URL("../images/Rectangle_R_W-ed1e7ed6.svg",import.meta.url).href;const qt={class:"w-[21rem] bg-[#FFFDF8] text-xs text-[#2E2008]"},Dt={class:"container"},Nt={class:"flex justify-between items-center font-semibold text-base py-4 px-5"},Rt={class:"h-10 flex relative"},Et=["src"],jt=["src"],zt={class:"h-10 z-10 flex items-center w-[21rem] text-base font-medium"},Wt={class:"p-2.5 maxH overflow-auto"},Ht={class:"flex justify-between header pb-2.5"},Gt={class:"text-xl font-bold"},Xt={class:"flex justify-between mt-2.5 text-sm"},Kt={class:"opacity-80"},Yt={class:"font-semibold"},Zt={class:"flex justify-between mt-2.5 text-sm"},Jt={class:"opacity-80"},Qt={class:"font-semibold"},es={class:"flex justify-between mt-2.5 text-sm"},ts={class:"opacity-80"},ss={class:"font-semibold"},ns=ae({props:{show:{type:Boolean,required:!0},type:{type:String,required:!0},isOld:{type:Boolean,required:!1}},emits:["update:show"],setup(o,{emit:i}){const{show:A,type:L,isOld:_}=o,{getPendingIds:I,cancel:T,getOrderInfo:m}=de(_),w=()=>{i("update:show",!1)},v=X(()=>k.value==="buy"?b.value.filter(e=>e.direct===1):b.value.filter(e=>e.direct===2)),k=j("buy"),z=e=>{k.value!=e&&(k.value=e)},y=X(()=>k.value=="buy"?Ut:Tt),O=X(()=>k.value=="sell"?Vt:Pt),U=j([]),b=j([]),R=async()=>{const e=await I();!e.success||(U.value=e.result,U.value.forEach(async l=>{const r=await m(l);b.value.push({direct:+r.result.direct,price:G(ye(r.result.price)),total:G(ye(r.result.total)),remain:G(ye(r.result.remain)),token:r.result.token,sender:r.result.sender,status:+r.result.status,id:l})}))},c=async e=>{!(await T(e)).success||w()};return me(()=>{k.value=L,R()}),(e,l)=>{const r=q("van-icon"),$=q("VanButton"),M=q("van-popup");return f(),S(M,_e(e.$attrs,{show:o.show,"onUpdate:show":l[2]||(l[2]=x=>ee(A)?A.value=x:null),style:{height:"80vh"},round:"","overlay-class":"",onClose:w}),{default:B(()=>[t("div",qt,[t("div",Dt,[t("div",Nt,[t("span",null,n(e.$t("ecology.mypendingorder")),1),P(r,{name:"cross",class:"font-semibold text-xl",onClick:w})]),t("div",Rt,[t("img",{class:se(["h-10 absolute left-0 bottom-[-1px]",{"z-10":k.value=="buy"}]),src:s(y),alt:""},null,10,Et),t("img",{class:se(["h-10 absolute right-0 bottom-[-1px]",{"z-10":k.value=="sell"}]),src:s(O),alt:""},null,10,jt),t("div",zt,[t("span",{class:se(["text-[#2E2008] flex-1 text-center",{"text-[#FEA021]":k.value=="buy"}]),onClick:l[0]||(l[0]=x=>z("buy"))},n(e.$t("ecology.mybill")),3),t("span",{class:se(["text-[#2E2008] opacity-60 flex-1 text-center",{"text-[#FEA021]":k.value=="sell"}]),onClick:l[1]||(l[1]=x=>z("sell"))},n(e.$t("ecology.mysellorder")),3)])])]),t("div",Wt,[N(" \u8BA2\u5355\u9879 "),(f(!0),K(ie,null,be(s(v),(x,g)=>(f(),K("div",{class:"bg-[#FFF1D9]/[0.4] rounded p-2.5 mt-2.5 order-box",key:g},[t("div",Ht,[t("span",Gt,n(x.price||0),1),N(" \u64A4\u9500 "),x.status==1?(f(),S($,{key:0,class:"btn-border px-3.5 h-[28px] rounded-2xl text-xs text-[#FBA923] font-medium min-w-[65px] text-center"},{default:B(()=>[V(n(e.$t("ecology.completed")),1)]),_:1})):N("v-if",!0),x.status==0?(f(),S($,{key:1,onClick:C=>c(x.id),class:"px-3.5 h-[28px] border-[1px] rounded-2xl border-transparent border-solid text-xs text-[#FF507A] font-medium min-w-[65px] text-center bg-[#FF507A]/[0.2]"},{default:B(()=>[V(n(e.$t("ecology.revoke")),1)]),_:2},1032,["onClick"])):N("v-if",!0),x.status===2?(f(),S($,{key:2,class:"px-3.5 h-[28px] border-[1px] rounded-2xl border-transparent border-solid text-xs text-[#FF507A] font-medium min-w-[65px] text-center bg-[#FF507A]/[0.2]"},{default:B(()=>[V(n(e.$t("ecology.canceled")),1)]),_:1})):N("v-if",!0)]),t("div",Xt,[t("span",Kt,n(e.$t("ecology.Totalendingorders")),1),t("span",Yt,n(x.total||0)+" MAI",1)]),t("div",Zt,[t("span",Jt,n(e.$t("ecology.transactionquantity")),1),t("span",Qt,n(x.total-x.remain||0)+" MAI",1)]),t("div",es,[t("span",ts,n(e.$t("ecology.remainingquantity")),1),t("span",ss,n(x.remain||0)+" MAI",1)])]))),128))])])]),_:1},16,["show"])}}}),os=oe(ns,[["__scopeId","data-v-0ab69f7b"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/components/MyOtcOrder.vue"]]);const xe=o=>(Ce("data-v-5b5e4784"),o=o(),Fe(),o),as={class:"bg-[#FFFDF8] rounded-xl p-2.5 pt-5 pb-3.5"},ls={class:"flex-center flex-col text-[#F36B07] rounded-xl bg-[#FFF1D9]/[0.6] py-5 font-normal text-sm"},rs={class:"text-3xl font-bold"},cs=xe(()=>t("span",{class:"ml-2"},"MUSD",-1)),is={class:"text-[#2E2008] font-medium opacity-60"},us={class:"pt-2.5 pb-1 flex justify-between text-white font-semibold text-sm"},ds=xe(()=>t("div",{class:"w-5"},null,-1)),ps=ae({props:{isOld:{type:Boolean,required:!1}},setup(o){const i=o,{loadingToggle:A}=Se(),{lastPrice:L,getMarketPrices:_,getMarketIds:I,maiAddress:T,musdAddress:m,getOrderInfo:w}=de(i.isOld),{reloadStore:v}=Be(),k=1,z=2,y=ue({token:"",musd:"",sellOrderList:[],buyOrderList:[],lastPrice:0,selectPrice:0,minAmount:0,maxAmount:0}),O=j(),U=j(""),b=j(""),[R,c]=ce(!1),[e,l]=ce(!1),[r,$]=ce(!1),M=d=>{U.value=d,c(!0)},x=(d,h)=>{O.value=h.price,b.value=d,l(!0)},g=d=>{b.value=d,$(!0)},C=async()=>{const d=await L();y.lastPrice=d||0},te=async()=>{const d=await T(),h=await m();y.token=d.result,y.musd=h.result},E=async()=>{const d=await _(z),h=[];for(let a=0;a<d.result.length;a++){const u=await I(z,d.result[a]);let Q=0;for(let D=0;D<u.result.length;D++){const Y=await w(u.result[D]);Q+=re(Y.result.remain.toString())}h.push({price:re(d.result[a].toString()),amount:G(Q)}),y.sellOrderList=h.filter(D=>D.amount!==0),y.sellOrderList=y.sellOrderList.sort((D,Y)=>D.price-Y.price)}},J=async()=>{const d=await _(k),h=[];for(let a=0;a<d.result.length;a++){const u=await I(k,d.result[a]);let Q=0;for(let D=0;D<u.result.length;D++){const Y=await w(u.result[D]);Q+=re(Y.result.remain.toString())}h.push({price:re(d.result[a].toString()),amount:G(Q)})}y.buyOrderList=h.filter(a=>a.amount!==0),y.buyOrderList=y.buyOrderList.sort((a,u)=>u.price-a.price)},p=async()=>{v.reload(),J(),E(),C(),l(!1)},F=async()=>{A(!0),await Promise.all([te(),C(),E(),J()]),A(!1)};return me(async()=>{await F()}),(d,h)=>{const a=q("VanButton");return f(),K("div",as,[t("div",ls,[t("div",null,[t("span",rs,n(s(y).lastPrice),1),cs]),t("div",is,n(d.$t("ecology.Latesttransactionprice")),1)]),t("div",us,[P(a,{class:"flex-1 h-10 px-4 btn-green",onClick:h[0]||(h[0]=u=>M("buy")),disabled:o.isOld},{default:B(()=>[V(n(d.$t("ecology.Pendingpurchase")),1)]),_:1},8,["disabled"]),ds,P(a,{class:"flex-1 h-10 px-4 btn-pink",onClick:h[1]||(h[1]=u=>M("sell")),disabled:o.isOld},{default:B(()=>[V(n(d.$t("ecology.Hangforsale")),1)]),_:1},8,["disabled"])]),P(ve,{type:"sell",onOnClick:x,onOnCheckMyOrder:g,list:s(y).sellOrderList,isOld:o.isOld},null,8,["list","isOld"]),P(ve,{type:"buy",onOnClick:x,onOnCheckMyOrder:g,list:s(y).buyOrderList,isOld:o.isOld},null,8,["list","isOld"]),N(" \u53D1\u5E03\u7684\u5F39\u7A97 "),s(R)?(f(),S(dt,{key:0,show:s(R),"onUpdate:show":h[2]||(h[2]=u=>ee(R)?R.value=u:null),onSuccess:p,type:U.value,lastPrice:s(y).lastPrice},null,8,["show","type","lastPrice"])):N("v-if",!0),N(" \u4E70\u5165\u5356\u51FA\u64CD\u4F5C\u5F39\u7A97 "),s(e)?(f(),S(Lt,{key:1,show:s(e),"onUpdate:show":h[3]||(h[3]=u=>ee(e)?e.value=u:null),type:b.value,price:O.value,token:s(y).token,musd:s(y).musd,onSuccess:p},null,8,["show","type","price","token","musd"])):N("v-if",!0),N(" \u6211\u7684\u8BA2\u5355\u5F39\u7A97 "),s(r)?(f(),S(os,{key:2,show:s(r),"onUpdate:show":h[4]||(h[4]=u=>ee(r)?r.value=u:null),type:b.value,isOld:o.isOld},null,8,["show","type","isOld"])):N("v-if",!0)])}}}),ys=oe(ps,[["__scopeId","data-v-5b5e4784"],["__file","/Users/wangkeai/work/xueyan/mai/flashmall-dapp/src/view/ecology/OtcIndex.vue"]]);export{ys as O};
