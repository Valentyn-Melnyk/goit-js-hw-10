import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";import{o as n}from"./assets/octagon-aa0f7cf0.js";const m="/goit-js-hw-10/assets/check2circle-2492957f.svg",i=document.querySelector(".form"),c=(e,o,s,t)=>{r.show({title:e,titleColor:"white",message:o,backgroundColor:s,messageColor:"white",closeOnEscape:!0,position:"topRight",iconUrl:t,iconColor:"white"})},l=e=>{setTimeout(()=>{c("OK",`Fulfilled promise in ${e}ms`,"green",m)},e)},a=e=>{setTimeout(()=>{c("ERROR",`Rejected promise in ${e}ms`,"red",n)},e)},u=e=>{e.preventDefault(),new Promise((o,s)=>{const t=document.querySelector('[name="delay"]').value;document.querySelector('input[name="state"]:checked').value==="fulfilled"?o(l(t)):s(a(t))}),i.reset()};i.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers2.js.map