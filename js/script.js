import { a, b} from "./vars.js";
console.log(a,b);


"use strict"

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBarry: function () {
      return navigator.userAgent.match(/BlackBarry/i);
   },
   IOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBarry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()){
   document.body.classList.add("_touch");
}
else {
   document.body.classList.add("_pc");
}