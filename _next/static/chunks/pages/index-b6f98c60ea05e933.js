(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(110)}])},2319:function(e,t,s){"use strict";var a=s(5893),i=(s(7294),s(8636));t.Z=function(e){var t=e.title,s=e.subtitle,n=e.backTitle,r=e.paddingTop;return(0,a.jsx)("div",{className:"sec-head custom-font text-center pt-".concat(r),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h6",{className:"wow fadeIn pt-50","data-wow-delay":".5s",children:s}),(0,a.jsx)(i.Z,{children:(0,a.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:t})}),(0,a.jsx)("span",{className:"tbg",children:n})]})})}},110:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return K}});var a=s(5893),i=s(7294),n=s(5579),r=s(1664),l=JSON.parse('[{"id":1,"title":"Love <br>Thy <br>On-chain"},{"id":2,"title":"Lets <br>Talk <br>Ownership"},{"id":3,"title":"Live <br>To <br>Own"},{"id":4,"title":"Lime <br>Tomato <br>Onion"},{"id":5,"title":"Learn <br>To be <br>Open"}]');function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?o(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=m(e);if(t){var i=m(this).constructor;s=Reflect.construct(a,arguments,i)}else s=a.apply(this,arguments);return u(this,s)}}var w=function(){var e=document.querySelector(".hero"),t=document.querySelector(".hero__inner"),s=e.offsetHeight,a=e.offsetWidth;if(s>a/1.6){e.classList.add("hero--vert"),e.classList.remove("hero--horz"),t.style.width=1.6*s+"px",t.style.height="100%";var i=(1.6*s-a)/2/(1.6*s)*100*1.4,n=i/2;document.querySelectorAll(".nudge-left").forEach((function(e,t){e.classList.contains("stay-top")?(e.style.left=.5*n+"%",e.style.top="-"+.2*n+"%"):(e.style.left=.7*n+"%",e.style.top=n+"%"),e.style.width=100-i+"%",e.style.height=100-i+"%"})),document.querySelectorAll(".nudge-right").forEach((function(e,t){e.classList.contains("stay-bot")?e.style.top=2.25*n+"%":e.style.top=n+"%",e.style.left=1.4*n+"%",e.style.width=100-i+"%",e.style.height=100-i+"%"}))}else e.classList.add("hero--horz"),e.classList.remove("hero--vert"),t.style.width="100%",t.style.height=a/1.6+"px",document.querySelectorAll(".nudge-left, .nudge-right").forEach((function(e,t){e.style.left="0px",e.style.top="0px",e.style.width="100%",e.style.height="100%"}))},f=function(e){var t=document.querySelector(".hero"),s=document.querySelectorAll(".hero__image"),a=e.type.includes("touch")?e.touches[0].clientX:e.clientX,i=e.type.includes("touch")?e.touches[0].clientY:e.clientY,n=t.offsetHeight,r=t.offsetWidth,l=t.offsetLeft+r/2,o=t.offsetTop+n/2,c=l-a,d=o-i;s.forEach((function(e,t){var s=parseFloat(e.dataset.x),a=parseFloat(e.dataset.y),i=parseFloat(e.dataset.scale),l=(i-1)/2,o=r*l,h=n*l,m=-r*l,u=-n*l,g=Math.max(m,Math.min(o,s*c)),p=Math.max(u,Math.min(h,a*d));e.style.transform="translate3d("+g+"px,"+p+"px,0px) scale("+i+")"}))},j=function(){var e=l[Math.floor(Math.random()*l.length)].title;document.querySelector(".hero__title").innerHTML=e,document.querySelectorAll(".hero__image").forEach((function(e,t){var s=parseFloat(e.dataset.scale);e.classList.contains("hero__image--sun")?e.style.transform=" translate3d(0,100%,0) scale("+s+")":e.style.transform="scale("+s+")"})),window.addEventListener("resize",w),w(),setTimeout((function(){var e=document.querySelector(".hero__image--sun");document.querySelector(".hero__inner").classList.add("lto-animate"),setTimeout((function(){e.classList.add("lto-animate"),setTimeout((function(){e.classList.remove("lto-animate"),e.style.transform="translate3d(0px,0px,0px) scale(1.1)"}),1500)}),1e3)}),1e3)},b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(r,e);var t,s,i,n=x(r);function r(){var e;return c(this,r),h(o(e=n.apply(this,arguments)),"scrollToAbout",(function(){window.scrollTo({top:document.getElementById("about").offsetTop-50,behavior:"smooth"})})),e}return t=r,(s=[{key:"componentDidMount",value:function(){"complete"==document.readyState&&j(),window.addEventListener("load",j)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",j),window.removeEventListener("resize",w)}},{key:"render",value:function(){var e=this;return(0,a.jsxs)("div",{className:"hero",onMouseMove:f,onTouchMove:f,children:[(0,a.jsxs)("div",{className:"hero__inner",children:[(0,a.jsx)("div",{className:"hero__image","data-x":"0.05","data-y":"0.05","data-scale":"1.05",children:(0,a.jsx)("img",{src:"/img/hero/layer-sky.jpg"})}),(0,a.jsx)("div",{className:"hero__image hero__image--sun","data-x":"0.065","data-y":"0.065","data-scale":"1.1",children:(0,a.jsx)("img",{src:"/img/hero/layer-sunNoSparkle.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--sparkle","data-x":"0.065","data-y":"0.065","data-scale":"1.1",children:(0,a.jsx)("img",{src:"/img/hero/layer-sunSparkle.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.09","data-y":"0.09","data-scale":"1.15",children:(0,a.jsx)("img",{src:"/img/hero/layer-smallField.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.13","data-y":"0.13","data-scale":"1.15",children:(0,a.jsx)("img",{src:"/img/hero/layer-bigField.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--text","data-x":"0.15","data-y":"1.5","data-scale":"1",children:(0,a.jsxs)("h1",{className:"hero__title",children:["L",(0,a.jsx)("br",{}),"T",(0,a.jsx)("br",{}),"O"]})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf7 nudge-left","data-x":"0.17","data-y":"0.17","data-scale":"1.19",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf7Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf6 nudge-left","data-x":"0.22","data-y":"0.22","data-scale":"1.2",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf6Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf5 nudge-left stay-top","data-x":"0.25","data-y":"0.25","data-scale":"1.2",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf5.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf4 nudge-right stay-bot","data-x":"0.28","data-y":"0.28","data-scale":"1.22",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf4Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf3 nudge-right stay-bot","data-x":"0.3","data-y":"0.3","data-scale":"1.25",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf3.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf2 nudge-right","data-x":"0.2","data-y":"0.2","data-scale":"1.18",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf2Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf1 nudge-right","data-x":"0.28","data-y":"0.28","data-scale":"1.25",children:(0,a.jsx)("img",{src:"/img/hero/layer-leaf1Trans.png"})})]}),(0,a.jsx)("div",{className:"hero__prompt",children:(0,a.jsx)("img",{src:"/img/hero/down-arrow-glow.png",alt:"Scroll down"})}),(0,a.jsx)("div",{onClick:function(){return e.scrollToAbout()},className:"hero__link"})]})}}])&&d(t.prototype,s),i&&d(t,i),r}(i.Component),v=s(2532),y=s(8636),N=function(){return(0,a.jsxs)("section",{id:"about",className:"about-intro",children:[(0,a.jsx)("div",{className:"about-intro__bg"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h2",{children:"What is LTO Network?"}),(0,a.jsxs)("div",{className:"about-intro__text",children:[(0,a.jsxs)("p",{children:["LTO Network is an award-winning ",(0,a.jsx)("span",{children:"HYBRID BLOCKCHAIN"})]}),(0,a.jsxs)("p",{children:["It can be used to ",(0,a.jsx)("span",{children:"Secure, Exchange, & Verify"})," critical data, digital assets, and identities."]})]}),(0,a.jsxs)("div",{className:"about-intro__mission",children:[(0,a.jsx)("h3",{children:"Our Mission"}),(0,a.jsx)("div",{className:"about-intro__mission__statement",children:"\u201cBuild the leading platform for cutting-edge next-gen blockchain apps focusing on B2B, identities, media, and ownership.\u201d"})]}),(0,a.jsxs)("div",{className:"about-intro__partners",children:[(0,a.jsx)("h3",{children:"Our Network Has Been Used By"}),(0,a.jsxs)("div",{className:"about-intro__partners__inner",children:[(0,a.jsx)("img",{src:"/img/partners/un-logo.png",alt:"UN Logo",style:{width:100,height:91}}),(0,a.jsx)("img",{src:"/img/partners/nen-logo.png",alt:"NEN Logo",style:{width:115,height:68}}),(0,a.jsx)("img",{src:"/img/partners/signrequest-logo.png",alt:"SignRequest Logo",style:{width:225,height:58}}),(0,a.jsx)("img",{src:"/img/partners/ibm-logo.png",alt:"IBM Logo",style:{width:119,height:47}}),(0,a.jsx)("img",{src:"/img/partners/govned-logo.png",alt:"Government of the Netherlands Logo",style:{width:159,height:61}}),(0,a.jsx)("img",{src:"/img/partners/cloud9-logo.png",alt:"Cloud 9 Logo",style:{width:173,height:87}})]}),(0,a.jsx)("div",{className:"text-center mt-50",children:(0,a.jsx)(r.default,{href:"/partnerships",children:(0,a.jsx)("a",{className:"btn-curve btn-lit bg-color",children:(0,a.jsx)("span",{children:"Explore Projects"})})})})]})]})]})},_=function(e){var t=e.children;return(0,a.jsx)("section",{className:"section-wrapper pt-40 pb-0 sub-bg",children:t})},k=s(2319),T=JSON.parse('[{"T":"Private Layer","k":"Blockchain applications can access the private layer and pass information to make privacy-aware applications where private data is shielded from the outside world."},{"T":"Public Layer","k":"This is where the event itself gets logged and verified in a way that\'s visible to the public."}]'),I=function(){return(0,a.jsxs)("section",{className:"intro-section section-padding pt-20 pb-0 sub-bg hybrid",children:[(0,a.jsxs)("div",{className:"container hybrid__content",children:[(0,a.jsx)("div",{className:"htit mb-20 cont",children:(0,a.jsx)("h4",{className:"section-title",children:"Hybrid Architecture"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)(y.Z,{children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"PRIVATE DATA, PUBLIC CONSENSUS"}),(0,a.jsxs)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:["What makes ",(0,a.jsx)("em",{children:"LTO Network"})," unique is that it\u2019s a hybrid blockchain with a public and private layer. All data being public is the very thing that makes blockchain special, but sometimes information needs to stay private."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"A hybrid chain allows some information to be shared privately while still relying on public consensus to ensure integrity."})]})})]}),(0,a.jsx)("div",{className:"container pt-30 pb-70",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 light-purple-bg",style:{padding:"30px"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(y.Z,{children:(0,a.jsx)("h4",{className:"wow custom-font words chars splitting","data-splitting":!0,children:(0,a.jsx)("h3",{children:T[0].T})})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:T[0].k})})]})}),(0,a.jsx)("div",{className:"col-lg-6 dark-purple-bg",style:{padding:"30px"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(y.Z,{children:(0,a.jsx)("h4",{className:"wow custom-font words chars splitting","data-splitting":!0,children:(0,a.jsx)("h3",{children:T[1].T})})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:T[1].k})})]})})]})})]})},O=function(){return(0,a.jsxs)("section",{className:"intro-section pt-40 pb-0 sub-bg identity",children:[(0,a.jsxs)("div",{className:"container pb-30",children:[(0,a.jsx)("div",{className:"htit mb-20",children:(0,a.jsx)("h4",{className:"section-title",children:"Identity Platform"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)(y.Z,{children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"PRIVACY AND REGULATORY COMPLIANCE"}),(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:"LTO Network\u2019s privacy-friendly identity platform allows for GDPR-compliant solutions that enable customers to work in DeFi whilst maintaining ownership of their identity and sensitive data. Our tools allow DeFi projects to follow regulatory frameworks and opens up a whole new sector of commerce."})]})})]}),(0,a.jsx)("div",{className:"container min-area pt-30 pb-60",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-5 valign",children:(0,a.jsx)("div",{className:"content pl-0 pt-0 pb-20",children:(0,a.jsxs)("ul",{className:"feat",children:[(0,a.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{children:"Decentralized Identifiers"}),(0,a.jsx)("p",{className:"pl-0",children:"Allowing LTO Network to be used as an identity platform. Any account can be resolved as DID. Multiple ciphers/curves are supported (natively)."})]}),(0,a.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".4s",children:[(0,a.jsx)("h6",{children:"Verifiable Credentials"}),(0,a.jsx)("p",{className:"pl-0",children:"Decentralized revocation registry for verifiable credentials. Verifiable presentations can be shared over private layer to comply with GDPR."})]}),(0,a.jsx)("li",{className:"wow fadeInUp","data-wow-delay":".6s",children:(0,a.jsx)("img",{src:"/img/about/gdpr.png",alt:"GDPR Compliant",style:{width:"183px"}})})]})})}),(0,a.jsx)("div",{className:"col-lg-6 offset-lg-1 valign",children:(0,a.jsx)("img",{src:"/img/about/cobalt-promo-big.png",alt:"Cobalt by LTO Network - Powered by Mainnet Update",style:{width:"450px",marginLeft:"auto"}})})]})})]})},L=s(6066);s(8322),s(2739);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],a=!0,i=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(o){i=!0,n=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=function(e){var t=S(i.useState(!1),2);t[0],t[1];i.useEffect((function(){console.clear()}),[]);return(0,a.jsx)("section",{className:"block-sec sub-bg ownables",children:(0,a.jsx)("div",{className:"section-padding pt-40",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("h3",{className:"wow mb-20 section-title","data-splitting":!0,children:"Ownables"})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsx)("div",{className:"vid-area",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"TRULY DECENTRALIZED DIGITAL COLLECTIBLES"}),(0,a.jsx)("p",{children:"Ownables can contain media files, images, songs, 3D models and much more. Whatever the content, the owner has full possession over the asset."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"With NFT2.0, TITANIUM will empower content creators worldwide, such as artists, musicians, game developers (and more) to develop, build and expand their own worlds."})]})})}),(0,a.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,a.jsx)("div",{className:"testim-box",style:{backgroundImage:"url(/img/titanium-litepaper/background.jpg)"},children:(0,a.jsxs)("div",{className:"head-box",children:[(0,a.jsx)("h4",{className:"wow fadeInLeft min-content-block","data-wow-delay":".5s",children:"TITANIUM Litepaper"}),(0,a.jsx)(r.default,{href:"https://ltonetwork.com/documents/LTO%20Network%20-%20TITANIUM.pdf",children:(0,a.jsx)("a",{className:"btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp bg-color"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Read Now"})})})]})})})]})})})})},E=JSON.parse('[{"id":1,"image":"/img/team/rick-schmitz.jpg","name":"Rick Schmitz","title":"CEO","color":"#ff00ff","linkedin":"https://linkedin.com/in/rschmitz","twitter":"https://twitter.com/realrickschmitz"},{"id":2,"image":"/img/team/martijn.png","name":"Martijn Migchelsen","title":"CFO","color":"#ff00ff","linkedin":"https://www.linkedin.com/in/migchelsen","twitter":""},{"id":3,"image":"/img/team/shawn_naderi.png","name":"Shawn Naderi","title":"CMO","color":"#ff00ff","linkedin":"","twitter":"https://twitter.com/itsnaderi"},{"id":3,"image":"/img/team/arnold_v3.png","name":"Arnold Daniels","title":"Chief Architect","color":"#00ccdd","linkedin":"https://www.linkedin.com/in/arnolddaniels","twitter":"https://twitter.com/ArnoldDaniels"},{"id":3,"image":"/img/team/borja.png","name":"Borja","title":"Business Development","color":"#00ccdd","linkedin":"","twitter":""},{"id":4,"image":"/img/team/andrea.jpg","name":"Andrea","title":"Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":5,"image":"/img/team/benas.png","name":"Benas","title":"Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":6,"image":"/img/team/empty.png","name":"Maurits","title":"Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":7,"image":"/img/team/empty.png","name":"Joshua Van Boxtel","title":"Web-Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":8,"image":"/img/team/ben.png","name":"Ben","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":9,"image":"/img/team/christin_team.png","name":"Christin","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":10,"image":"/img/team/dom.jpg","name":"Dom","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":11,"image":"/img/team/empty.png","name":"Jason","title":"Co-ordinator","color":"#510094","linkedin":"","twitter":""},{"id":12,"image":"/img/team/tegan_team.png","name":"Tegan","title":"Business Admin","color":"#510094","linkedin":"","twitter":""},{"id":13,"image":"/img/team/empty.png","name":"Cees","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":14,"image":"/img/team/dog.png","name":"Kobe","title":"Woof","color":"#510094","linkedin":"","twitter":""}]');function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return!t||"object"!==B(t)&&"function"!==typeof t?P(e):t}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=C(e);if(t){var i=C(this).constructor;s=Reflect.construct(a,arguments,i)}else s=a.apply(this,arguments);return M(this,s)}}var F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(l,e);var t,s,i,n=D(l);function l(e){var t,s,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),t=n.call(this,e),s=P(t),r=function(){return(0,a.jsxs)("div",{className:"navs mt-30 wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("span",{className:"prev cursor-pointer",onClick:function(){return t.slider.slickPrev()},children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsx)("span",{className:"next cursor-pointer",onClick:function(){return t.slider.slickNext()},children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})},(i="renderArrows")in s?Object.defineProperty(s,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[i]=r,t.checkScroll=t.checkScroll.bind(P(t)),t}return t=l,(s=[{key:"checkScroll",value:function(){var e=document.querySelector(".team-container"),t=window.pageYOffset||document.documentElement.scrollTop,s=t+e.getBoundingClientRect().bottom;t+window.innerHeight>s?this.slider.slickPlay():this.slider.slickPause()}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.checkScroll),this.checkScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.checkScroll)}},{key:"render",value:function(){var e=this;return(0,a.jsx)("section",{className:"team section-padding",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 valign",children:(0,a.jsxs)("div",{className:"full-width",children:[(0,a.jsxs)("div",{className:"sec-head custom-font mb-0",children:[(0,a.jsx)("h3",{style:{lineHeight:"1em"},children:"Team"}),(0,a.jsx)("p",{children:"Meet the vibrant team behind LTO Network"})]}),this.renderArrows()]})}),(0,a.jsx)("div",{className:"col-lg-9",children:(0,a.jsx)(L.Z,{className:"team-container",ref:function(t){return e.slider=t},dots:!1,infinite:!0,arrows:!0,autoplay:!1,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],children:E.map((function(e){return(0,a.jsxs)("div",{className:"item wow fadeInUp ".concat(""==e.linkedin&&""==e.twitter?"item--noFade":""),"data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"img wow imago",children:(0,a.jsx)("img",{src:e.image,alt:""})}),(0,a.jsxs)("div",{className:"info",style:{backgroundColor:e.color},children:[(0,a.jsx)("h5",{children:e.name}),(0,a.jsx)("span",{children:e.title}),(0,a.jsxs)("div",{className:"social",children:[e.linkedin?(0,a.jsx)(r.default,{href:e.linkedin,children:(0,a.jsx)("a",{children:(0,a.jsx)("i",{className:"fab fa-linkedin-in"})})}):"",e.twitter?(0,a.jsx)(r.default,{href:e.twitter,children:(0,a.jsx)("a",{children:(0,a.jsx)("i",{className:"fab fa-twitter"})})}):""]})]})]},e.id)}))})})]})})})}}])&&U(t.prototype,s),i&&U(t,i),l}(i.Component);s(1239),s(2157);function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],a=!0,i=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(o){i=!0,n=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Z=function(e){var t=W(i.useState(!1),2);t[0],t[1];i.useEffect((function(){console.clear()}),[]);return(0,a.jsx)("section",{className:"block-sec press-kit",children:(0,a.jsx)("div",{className:"background bg-img section-padding",style:{backgroundImage:"url(/img/about/press-kit-bg.png)"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 press-kit__content",children:(0,a.jsx)("div",{className:"vid-area",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("h3",{className:"wow mb-10","data-splitting":!0,children:"Press Kit"}),(0,a.jsx)("span",{className:"mb-20 secondary-color subtitle",children:"Our Press Kit and Branding Assets"}),(0,a.jsx)("p",{children:"LTO Network's branding should look clean, futuristic and minimal."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"You can access our latest branding elements here."})]})})}),(0,a.jsx)("div",{className:"col-lg-6 valign",children:(0,a.jsx)("div",{className:"content pl-0 pt-0",style:{flexGrow:"1"},children:(0,a.jsxs)("ul",{className:"feat",children:[(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style pink-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 pl-15 valign",children:"Logos"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(r.default,{href:"/downloads/LTO_logos.zip",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",download:!0,children:(0,a.jsx)("span",{children:"Download"})})})})]}),(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style dark-purple-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 valign pl-15",children:"Fonts"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(r.default,{href:"/downloads/LTO_fonts.zip",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",download:!0,children:(0,a.jsx)("span",{children:"Download"})})})})]}),(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style cyan-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 valign pl-15",children:"Style Guide"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(r.default,{href:"/downloads/lto_style_guide_v1_1.pdf",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",target:"_blank",rel:"nofollower",children:(0,a.jsx)("span",{children:"Download"})})})})]})]})})})]})})})})},q=s(9008),z=s(2873),G=s(965);s(933),s(92);function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],a=!0,i=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(o){i=!0,n=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}G.ZP.use([G.W_]);var H=function(e){var t=e.subBG,s=V(i.useState(!0),2),n=s[0],r=s[1];i.useEffect((function(){setTimeout((function(){r(!1)}))}),[]);var l=i.useRef(null),o=i.useRef(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(q.default,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"/css/ionicons.min.css"})}),(0,a.jsx)("section",{className:"work-carousel section-padding caroul ".concat(t?"sub-bg":""," position-re"),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"sec-head custom-font text-center",children:[(0,a.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"2022 Development Roadmap"}),(0,a.jsx)(y.Z,{children:(0,a.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Roadmap"})}),(0,a.jsx)("span",{className:"tbg",children:"Roadmap"})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12 no-padding",children:(0,a.jsx)("div",{className:"swiper-container",children:(0,a.jsxs)("div",{className:"swiper-container",children:[n?null:(0,a.jsxs)(z.t,{speed:1e3,loop:!1,spaceBetween:0,breakpoints:{320:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:0},1024:{slidesPerView:3,spaceBetween:0}},navigation:{prevEl:l.current,nextEl:o.current},onBeforeInit:function(e){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=o.current},onSwiper:function(e){setTimeout((function(){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=o.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:1,children:[(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"top-label",children:"Q2 - 2022"}),(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-1.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"New Website - Stage 1"}),(0,a.jsx)("h4",{children:"Stage 1 launch of LTO Network\u2019s new website."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-2.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Proofi Launch"}),(0,a.jsx)("h4",{children:"Our game changing identity solution, Proofi will be launched. "})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-3.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Partnership Announcement"}),(0,a.jsx)("h4",{children:"A major partnership will be announced."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-4.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"TITANIUM Alpha"}),(0,a.jsx)("h4",{children:"TITANIUM Alpha on the Testnet"})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-5.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Native Wallet Alpha"}),(0,a.jsx)("h4",{children:"Native Wallet Alpha Version will be delivered."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"top-label",children:"Q3 - 2022"}),(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-6.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"GoLand Registry"}),(0,a.jsx)("h4",{children:"The 1st stage of GoLand Code Update will be announced and details provided."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-7.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"NFT2.0 Partnership"}),(0,a.jsx)("h4",{children:"NFT2.0 Partnership Announcement"})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-7.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"NFT2.0 Partnership"}),(0,a.jsx)("h4",{children:"NFT2.0 Partnership Announcement"})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-8.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Native Wallet Release"}),(0,a.jsx)("h4",{children:"LTO Native Wallet will be released."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-9.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Titanium Mainnet Update"}),(0,a.jsx)("h4",{children:"Full release of our NFT2.0 Ownables tech."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"top-label",children:"Q4 - 2022"}),(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-10.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Titanium Alloy"}),(0,a.jsx)("h4",{children:"Mainnet Update."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-11.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"NFT2.0 Partnership Announce"}),(0,a.jsx)("h4",{children:"NFT2.0 Partnership Announcement - Artist Focus."})]})]})}),(0,a.jsx)(z.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-12.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Embedded Smart Contracts"}),(0,a.jsx)("h4",{children:"Mainnet Upgrade"})]})]})})]}),(0,a.jsx)("div",{ref:o,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,a.jsx)("i",{className:"ion-ios-arrow-right"})}),(0,a.jsx)("div",{ref:l,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,a.jsx)("i",{className:"ion-ios-arrow-left"})})]})})})})]})})]})},Y=s(1690),K=function(){return(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(b,{}),(0,a.jsx)(N,{}),(0,a.jsxs)(_,{children:[(0,a.jsx)(k.Z,{title:"Key Tech & Benefits",subtitle:"What we offer",backTitle:"Key Tech",paddingTop:"0"}),(0,a.jsx)(I,{}),(0,a.jsx)(O,{}),(0,a.jsx)(A,{})]}),(0,a.jsx)(F,{}),(0,a.jsx)(Z,{}),(0,a.jsx)(H,{}),(0,a.jsx)(Y.Z,{})]})}}},function(e){e.O(0,[996,121,842,104,325,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);