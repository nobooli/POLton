(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-327d254c"],{"11c1":function(t,e,n){var r=n("c437"),o=n("c64e"),a=o;a.v1=r,a.v4=o,t.exports=a},2366:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);function o(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}t.exports=o},"275a":function(t,e,n){},3510:function(t,e,n){"use strict";var r=n("275a"),o=n.n(r);o.a},9463:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"1500"}},[n("v-btn",{attrs:{href:"https://twitter.com/intent/tweet?text=%E4%BD%A0%E8%83%BD%E8%B7%9F%E5%BE%97%E4%B8%8A%E9%A6%AC%E6%88%B2%E5%9C%98%E7%9A%84%E9%80%9F%E5%BA%A6%E5%97%8E%EF%BC%9F%E4%BE%86%20%23%E5%B0%BE%E4%B8%B8%E3%83%9D%E3%83%AB%E3%82%AB%E4%B8%80%E5%91%A8%E5%B9%B4%E3%82%AF%E3%82%A4%E3%82%BA%20%E6%B8%AC%E8%A9%A6%E4%BD%A0%E7%9A%84%E5%BA%A7%E9%95%B7%E7%9F%A5%E8%AD%98%E5%90%A7%20:%0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz",target:"_blank"}},[n("v-icon",[t._v(" mdi-twitter ")])],1),n("iframe",{staticClass:"quizframe",attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSdlQBXOUHs85egImCgkCq44ZUnFHEW5FAizrOVDxQus7xW-rQ/viewform?usp=pp_url&entry.378588067="+t.uuid+"&embedded=true",width:"100%",height:"100%",frameborder:"0"}})],1)])},o=[],a=(n("4160"),n("159b"),n("11c1")),i=n("f5af"),s=n.n(i),c={setup:function(){},methods:{AOSInit:function(){var t=this;this.aos=s.a,this.aos.init({duration:1500,disable:"mobile"});var e=document.querySelectorAll("img");e.forEach((function(e){e.addEventListener("load",(function(){t.aos.refresh()}))}))}},mounted:function(){var t=this;this.$nextTick((function(){t.AOSInit()}));var e=document.createElement("script");e.setAttribute("src","https://platform.twitter.com/widgets.js"),e.setAttribute("async",""),e.setAttribute("charset","utf-8"),document.head.appendChild(e)},data:function(){return{uuid:Object(a["v4"])()}}},u=c,d=(n("3510"),n("2877")),f=n("6544"),l=n.n(f),E=n("8336"),v=n("a523"),p=n("132d"),m=Object(d["a"])(u,r,o,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:E["a"],VContainer:v["a"],VIcon:p["a"]})},c437:function(t,e,n){var r,o,a=n("e1f4"),i=n("2366"),s=0,c=0;function u(t,e,n){var u=e&&n||0,d=e||[];t=t||{};var f=t.node||r,l=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==l){var E=a();null==f&&(f=r=[1|E[0],E[1],E[2],E[3],E[4],E[5]]),null==l&&(l=o=16383&(E[6]<<8|E[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),p=void 0!==t.nsecs?t.nsecs:c+1,m=v-s+(p-c)/1e4;if(m<0&&void 0===t.clockseq&&(l=l+1&16383),(m<0||v>s)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=v,c=p,o=l,v+=122192928e5;var A=(1e4*(268435455&v)+p)%4294967296;d[u++]=A>>>24&255,d[u++]=A>>>16&255,d[u++]=A>>>8&255,d[u++]=255&A;var h=v/4294967296*1e4&268435455;d[u++]=h>>>8&255,d[u++]=255&h,d[u++]=h>>>24&15|16,d[u++]=h>>>16&255,d[u++]=l>>>8|128,d[u++]=255&l;for(var B=0;B<6;++B)d[u+B]=f[B];return e||i(d)}t.exports=u},c64e:function(t,e,n){var r=n("e1f4"),o=n("2366");function a(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var i=t.random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var s=0;s<16;++s)e[a+s]=i[s];return e||o(i)}t.exports=a},e1f4:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}}}]);
//# sourceMappingURL=chunk-327d254c.c0017c99.js.map