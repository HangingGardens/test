import{u as t,U as e}from"./index-8df1d5de.js";const a=()=>{const{accountStore:s}=t(),r=s.sign.address;return e("GET","/address/list",{address:r})},u=s=>e("POST","/address/save",s),o=s=>e("POST","/address/remove?id="+s,{id:s}),n=s=>e("POST","/address/setDefault?id="+s,{id:s});export{o as a,n as b,u as c,a as q};
