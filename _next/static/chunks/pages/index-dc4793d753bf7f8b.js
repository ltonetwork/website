(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1789)}])},4140:function(e,s,t){"use strict";var a=t(2455);s.Z=function(){var e=document.querySelectorAll(".feat .items");e&&e.forEach((function(e){e.onmouseover=function(s){e.classList.add("active");(0,a.m7)(e).map((function(e){return e.classList.remove("active")}))}}))}},2319:function(e,s,t){"use strict";var a=t(5893),n=(t(7294),t(8636));s.Z=function(e){var s=e.title,t=e.subtitle,i=e.backTitle,r=e.paddingTop;return(0,a.jsxs)("div",{className:"sec-head custom-font text-center pt-".concat(r),children:[(0,a.jsx)("h6",{className:"wow fadeIn pt-50","data-wow-delay":".5s",children:t}),(0,a.jsx)(n.Z,{children:(0,a.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:s})}),(0,a.jsx)("span",{className:"tbg",children:i})]})}},1789:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return X}});var a=t(5893),n=t(7294),i=t(5579);function r(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function l(e,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,s){return!s||"object"!==h(s)&&"function"!==typeof s?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):s}function d(e,s){return(d=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=c(e);if(s){var n=c(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return o(this,t)}}var u=function(e){var s=document.querySelector(".hero"),t=document.querySelectorAll(".hero__image"),a=e.type.includes("touch")?e.touches[0].clientX:e.clientX,n=e.type.includes("touch")?e.touches[0].clientY:e.clientY,i=s.offsetHeight,r=s.offsetWidth,l=s.offsetLeft+r/2,c=s.offsetTop+i/2,o=l-a,d=c-n;t.forEach((function(e,s){var t=parseFloat(e.dataset.x),a=parseFloat(e.dataset.y),n=parseFloat(e.dataset.scale),l=(n-1)/2,c=r*l,h=i*l,m=-r*l,u=-i*l,p=Math.max(m,Math.min(c,t*o)),f=Math.max(u,Math.min(h,a*d));e.style.left=p+"px",e.style.top=f+"px",e.style.transform="scale("+n+")"}))},p=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&d(e,s)}(c,e);var s,t,n,i=m(c);function c(){return r(this,c),i.apply(this,arguments)}return s=c,(t=[{key:"componentDidMount",value:function(){console.log("doot1"),window.addEventListener("load",(function(){document.querySelectorAll(".hero__image").forEach((function(e,s){var t=parseFloat(e.dataset.scale);e.classList.contains("hero__image--sun")?e.style.transform="scale("+t+") translateY(100%)":e.style.transform="scale("+t+")"})),console.log("doot2!"),setTimeout((function(){document.querySelector(".hero__inner").classList.add("lto-animate"),console.log("fade in hero..."),setTimeout((function(){document.querySelector(".hero__image--sun").classList.add("lto-animate"),console.log("sunrise...")}),1e3)}),1e3)}))}},{key:"render",value:function(){return(0,a.jsx)("div",{className:"hero",onMouseMove:u,onTouchMove:u,children:(0,a.jsxs)("div",{className:"hero__inner",children:[(0,a.jsx)("div",{className:"hero__image","data-x":"0.05","data-y":"0.05","data-scale":"1.05",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-sky.jpg"})}),(0,a.jsx)("div",{className:"hero__image hero__image--sun","data-x":"0.065","data-y":"0.065","data-scale":"1.1",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-sunNoSparkle.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--sparkle","data-x":"0.065","data-y":"0.065","data-scale":"1.1",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-sunSparkle.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.09","data-y":"0.09","data-scale":"1.15",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-smallField.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.13","data-y":"0.13","data-scale":"1.15",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-bigField.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf7","data-x":"0.17","data-y":"0.17","data-scale":"1.19",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf7Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf6","data-x":"0.22","data-y":"0.22","data-scale":"1.2",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf6Trans.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.25","data-y":"0.25","data-scale":"1.2",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf5.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf4","data-x":"0.28","data-y":"0.28","data-scale":"1.22",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf4Trans.png"})}),(0,a.jsx)("div",{className:"hero__image","data-x":"0.3","data-y":"0.3","data-scale":"1.25",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf3.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf2","data-x":"0.2","data-y":"0.2","data-scale":"1.18",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf2Trans.png"})}),(0,a.jsx)("div",{className:"hero__image hero__image--leaf1","data-x":"0.28","data-y":"0.28","data-scale":"1.25",children:(0,a.jsx)("img",{src:"https://assets.codepen.io/450456/layer-leaf1Trans.png"})})]})})}}])&&l(s.prototype,t),n&&l(s,n),c}(n.Component),f=t(2532),x=t(8636),g=function(){return(0,a.jsx)("section",{id:"about",className:"intro-section pt-80 pb-0",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"htit mb-20",children:(0,a.jsx)("h2",{className:"section-title",children:"What is LTO Network?"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:"LTO Network is a hybrid blockchain for securing, exchanging and verification of digital assets. Our mission is to build cutting edge solutions that promote decentralization across B2B, consumer and crypto to crypto use cases."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Our network has been used by some of the following organizations:"})]})})]})})},j=JSON.parse('[{"id":1,"src":"un-logo.png","alt":"UN Logo","link":"view/un"},{"id":2,"src":"ibm-logo.png","alt":"IBM Logo","link":"view/ibm"},{"id":3,"src":"dutch-gvt-logo.png","alt":"Dutch government logo","link":"view/dutch"}]'),w=t(1664),v=function(e){var s=e.theme,t=e.withBG,n=e.withPadding,i=e.halfBG,r=e.withOutTitle;return(0,a.jsxs)("section",{className:"services ".concat(n?"section-padding":""," ").concat(t?"sub-bg":""," pt-30 pb-60"),children:[(0,a.jsxs)("div",{className:"container",children:[!r&&(0,a.jsxs)("div",{className:"sec-head custom-font text-center",children:[(0,a.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Best Features"}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Services."})}),(0,a.jsx)("span",{className:"tbg",children:"Services"})]}),(0,a.jsx)("div",{className:"row",children:j.map((function(e,t){return(0,a.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,a.jsxs)("div",{className:"item ".concat(t!=j.length-1?"md-mb50":""," wow fadeInUp light-purple-border-top"),"data-wow-delay":1==e.id?".5s":2==e.id?".3s":".8s",children:[(0,a.jsx)("img",{src:"/img/project-background/".concat(e.src),className:"icon ".concat(e.src),alt:"".concat(e.alt)}),(0,a.jsx)(w.default,{href:"/".concat(e.link),style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"btn-curve ".concat("light"==s?"btn-blc":"btn-lit"," wow fadeInUp bg-color"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"View"})})})]})},e.id)}))}),(0,a.jsx)("div",{className:"row justify-content-end pt-50",children:(0,a.jsx)("div",{className:"col-lg-3 d-flex",children:(0,a.jsx)(w.default,{href:"/partnerships",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"btn-curve ".concat("light"==s?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Explore Projects"})})})})})]}),i&&(0,a.jsx)("div",{className:"half-bg bottom"})]})},b=function(e){var s=e.children;return(0,a.jsx)("section",{className:"section-wrapper pt-40 pb-0 sub-bg",children:s})},y=t(2319),N=function(){return(0,a.jsx)("section",{className:"intro-section section-padding pt-20 pb-0 sub-bg",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"htit mb-20 cont",children:(0,a.jsx)("h4",{className:"section-title",children:"Hybrid Architecture"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"PRIVATE DATA, PUBLIC CONSENSUS"}),(0,a.jsxs)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:["What makes ",(0,a.jsx)("em",{children:"LTO Network"})," unique is that it\u2019s a hybrid blockchain with a public and private layer. All data being public is the very thing that makes blockchain special, but sometimes information needs to stay private."]}),(0,a.jsx)("p",{children:"A hybrid chain allows some information to be shared privately while still relying on public consensus to ensure integrity."}),(0,a.jsx)("br",{})]})})]})})},k=JSON.parse('[{"T":"Private Layer","k":"Blockchain application can access the private layer and pass information to make privacy aware applications where private data is shielded from the outside world."},{"T":"Public Layer","k":"This is where the event itself gets logged and verified in a way that\'s visible to the public"}]'),_=function(e){e.withBG,e.withPadding,e.halfBG,e.withOutTitle;return(0,a.jsx)("section",{className:"min-area sub-bg section-padding pt-30 pb-70",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 light-purple-bg",style:{padding:"30px"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Z,{children:(0,a.jsx)("h4",{className:"wow custom-font words chars splitting","data-splitting":!0,children:(0,a.jsx)("h3",{children:k[0].T})})}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:(0,a.jsx)("p",{children:k[0].k})})})]})}),(0,a.jsx)("div",{className:"col-lg-6 dark-purple-bg",style:{padding:"30px"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Z,{children:(0,a.jsx)("h4",{className:"wow custom-font words chars splitting","data-splitting":!0,children:(0,a.jsx)("h3",{children:k[1].T})})}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:(0,a.jsx)("p",{children:k[1].k})})})]})})]})})})},T=function(){return(0,a.jsx)("section",{className:"intro-section pb-0 sub-bg",children:(0,a.jsxs)("div",{className:"container pb-30",children:[(0,a.jsx)("div",{className:"htit mb-20",children:(0,a.jsx)("h4",{className:"section-title",children:"Identity Platform"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"PRIVACY AND REGULATORY COMPLIANCE"}),(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:"LTO Network\u2019s privacy-friendly identity platform allows for GDPR compliant solutions that enable customers to work in DeFi whilst maintaining ownership of their identity and sensitive data. Our tools allow DeFi projects to follow regulatory frameworks and opens up a whole new sector of commerce."})]})})]})})},I=t(4140),O=function(e){var s=e.theme;n.useEffect((function(){(0,I.Z)()}),[]);var t=(0,n.useState)("MyCompany Wallet"),i=t[0],r=t[1],l=(0,n.useState)("Details coming soon!"),c=l[0],o=l[1];return(0,a.jsx)("section",{className:"min-area sub-bg section-padding pt-30 pb-60",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-5 valign",children:(0,a.jsx)("div",{className:"content pl-0 pt-0 pb-20",children:(0,a.jsxs)("ul",{className:"feat",children:[(0,a.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{children:"Decentralized Identifiers"}),(0,a.jsx)("p",{className:"pl-0",children:"Allowing LTO Network to be used as an identity platform. Any account can be resolved as DID. Multiple ciphers/curves are supported (natively)."})]}),(0,a.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".4s",children:[(0,a.jsx)("h6",{children:"Verifiable Credentials"}),(0,a.jsx)("p",{className:"pl-0",children:"Decentralized revocation registry for verifiable credentials. Verifiable presentations can be shared over private layer to comply with GDPR."})]}),(0,a.jsx)("li",{children:(0,a.jsx)(w.default,{href:"/learn-more",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"btn-curve ".concat("light"==s?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Learn More"})})})})]})})}),(0,a.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,a.jsxs)("div",{className:"tab-box",children:[(0,a.jsxs)("div",{className:"tab-box__tabs",children:[(0,a.jsx)("span",{children:(0,a.jsx)("button",{className:"btn-curve ".concat("MyCompany Wallet"==i?"dark-purple-bg":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",onClick:function(){r("MyCompany Wallet"),o("MyCompanyWallet content to go here")},style:{padding:"12px 25px"},children:(0,a.jsx)("span",{children:"MyCompany Wallet"})})}),(0,a.jsx)("span",{children:(0,a.jsx)("button",{className:"btn-curve ".concat("Proofi"==i?"dark-purple-bg":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",onClick:function(){r("Proofi"),o("Proofi content to go here")},style:{padding:"12px 25px"},children:(0,a.jsx)("span",{children:"Proofi"})})}),(0,a.jsx)("span",{children:(0,a.jsx)("button",{className:"btn-curve ".concat("LtoWallet"==i?"dark-purple-bg":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",onClick:function(){r("LtoWallet"),o("LTO content to go here")},style:{padding:"12px 25px"},children:(0,a.jsx)("span",{children:"LTO Wallet"})})})]}),(0,a.jsx)("div",{className:"tab-box__content",style:{backgroundImage:"url(/img/about/IdentityPlatformTabsBg.jpg)"},children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Z,{children:(0,a.jsx)("h4",{className:"wow custom-font words chars splitting","data-splitting":!0,children:(0,a.jsx)("h3",{children:i})})}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:(0,a.jsx)("p",{children:c})})})]})}),(0,a.jsx)("div",{className:"col-lg-5 col-md-5 mt-20-md",children:(0,a.jsx)("div",{className:"content pt-0 pb-0",children:(0,a.jsx)("img",{className:"icon ".concat(i),src:"/img/identity-platform/".concat(i,".png"),alt:"".concat(i)})})})]})})]})})]})})})},S=t(6066);t(8322),t(2739),t(1239),t(2157);function P(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],a=!0,n=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(t.push(r.value),!s||t.length!==s);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var s=P(n.useState(!1),2);s[0],s[1];n.useEffect((function(){console.clear()}),[]);return(0,a.jsx)("section",{className:"block-sec sub-bg",children:(0,a.jsx)("div",{className:"background bg-img section-padding pt-0",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("h3",{className:"wow mb-20 section-title","data-splitting":!0,children:"Ownables"})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsx)("div",{className:"vid-area",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"TRULY DECENTRALIZED DIGITAL COLLECTABLES"}),(0,a.jsx)("p",{children:"Ownables can contain media files, images, songs, 3D models and much more. Whatever the content, the owner has full possession over the asset."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"With NFT2.0, TITANIUM will empower content creators worldwide, such as artists, musicians, game developers (and more) to develop, build and expand their own worlds."})]})})}),(0,a.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,a.jsx)("div",{className:"testim-box",style:{backgroundImage:"url(/img/titanium-litepaper/background.jpg)"},children:(0,a.jsxs)("div",{className:"head-box",children:[(0,a.jsx)("h4",{className:"wow fadeInLeft min-content-block","data-wow-delay":".5s",children:"Titanium LitePaper"}),(0,a.jsx)(w.default,{href:"/read-now",children:(0,a.jsx)("a",{className:"btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp bg-color"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Read Now"})})})]})})})]})})})})},L=JSON.parse('[{"id":1,"image":"/img/team/rick-schmitz.jpg","name":"Rick Schmitz","title":"CEO","color":"#ff00ff","linkedin":"#rick-linkedin","twitter":"#rick-twitter"},{"id":2,"image":"/img/team/martijn.jpg","name":"Martijn","title":"CFO","color":"#ff00ff","linkedin":"#martijn-linkedin","twitter":"#martijn-twitter"},{"id":3,"image":"/img/team/shawn-naderi.jpg","name":"Shawn Naderi","title":"CMO","color":"#ff00ff","linkedin":"#shawn-linkedin","twitter":"#shawn-twitter"},{"id":3,"image":"/img/team/arnold-daniels.jpg","name":"Arnold Daniels","title":"Chief Architect","color":"#00ccdd","linkedin":"","twitter":""},{"id":4,"image":"/img/team/andrea.jpg","name":"Andrea","title":"Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":5,"image":"/img/team/maurits.jpg","name":"Maurits","title":"Dev","color":"#00ccdd","linkedin":"","twitter":""},{"id":6,"image":"/img/team/ben.jpg","name":"Ben","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":7,"image":"/img/team/christin.jpg","name":"Christin","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":8,"image":"/img/team/dom.jpg","name":"Dom","title":"Marketing","color":"#510094","linkedin":"","twitter":""},{"id":9,"image":"/img/team/cees.jpg","name":"Cees","title":"Marketing","color":"#510094","linkedin":"","twitter":""}]');function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,s){return!s||"object"!==M(s)&&"function"!==typeof s?C(e):s}function D(e,s){return(D=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var M=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function B(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=R(e);if(s){var n=R(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return U(this,t)}}var Z=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&D(e,s)}(r,e);var s,t,n,i=B(r);function r(e){var s,t,n,l;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,r),s=i.call(this,e),t=C(s),l=function(){return(0,a.jsxs)("div",{className:"navs mt-30 wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("span",{className:"prev cursor-pointer",onClick:function(){return s.slider.slickPrev()},children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsx)("span",{className:"next cursor-pointer",onClick:function(){return s.slider.slickNext()},children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})},(n="renderArrows")in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,s}return s=r,(t=[{key:"render",value:function(){var e=this;return(0,a.jsx)("section",{className:"team section-padding",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 valign",children:(0,a.jsxs)("div",{className:"full-width",children:[(0,a.jsxs)("div",{className:"sec-head custom-font mb-0",children:[(0,a.jsx)("h3",{style:{lineHeight:"1em"},children:"Team"}),(0,a.jsx)("p",{children:"Meet the vibrant team behind LTO Network"})]}),this.renderArrows()]})}),(0,a.jsx)("div",{className:"col-lg-9",children:(0,a.jsx)(S.Z,{className:"team-container",ref:function(s){return e.slider=s},dots:!1,infinite:!0,arrows:!0,autoplay:!0,slidesToScroll:1,slidesToShow:4,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],children:L.map((function(e){return(0,a.jsxs)("div",{className:"item wow fadeInUp ".concat(""==e.linkedin&&""==e.twitter?"item--noFade":""),"data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"img wow imago",children:(0,a.jsx)("img",{src:e.image,alt:""})}),(0,a.jsxs)("div",{className:"info",style:{backgroundColor:e.color},children:[(0,a.jsx)("h5",{children:e.name}),(0,a.jsx)("span",{children:e.title}),(0,a.jsxs)("div",{className:"social",children:[e.linkedin?(0,a.jsx)(w.default,{href:e.linkedin,children:(0,a.jsx)("a",{children:(0,a.jsx)("i",{className:"fab fa-linkedin-in"})})}):"",e.twitter?(0,a.jsx)(w.default,{href:e.twitter,children:(0,a.jsx)("a",{children:(0,a.jsx)("i",{className:"fab fa-twitter"})})}):""]})]})]},e.id)}))})})]})})})}}])&&A(s.prototype,t),n&&A(s,n),r}(n.Component);function F(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],a=!0,n=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(t.push(r.value),!s||t.length!==s);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(e){var s=F(n.useState(!1),2);s[0],s[1];n.useEffect((function(){console.clear()}),[]);return(0,a.jsx)("section",{className:"block-sec",children:(0,a.jsx)("div",{className:"background bg-img section-padding",style:{backgroundImage:"url(/img/presskit/background.jpg)"},"data-overlay-dark":"8",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"vid-area",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("h3",{className:"wow","data-splitting":!0,children:"Press Kit"}),(0,a.jsx)("span",{className:"pb-20 secondary-color subtitle",children:"OUR PRESS KIT"}),(0,a.jsx)("p",{children:"LTO Network's branding should look clean, futuristic and minimal."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Blah blah blah blah blah"})]})})}),(0,a.jsx)("div",{className:"col-lg-6 valign",children:(0,a.jsx)("div",{className:"content pl-0 pt-0",style:{flexGrow:"1"},children:(0,a.jsxs)("ul",{className:"feat",children:[(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style pink-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 pl-15 valign",children:"Logos"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(w.default,{href:"/download/logos",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Download"})})})})]}),(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style dark-purple-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 valign pl-15",children:"Fonts"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(w.default,{href:"/download/fonts",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Download"})})})})]}),(0,a.jsxs)("li",{className:"wow fadeInUp list-custom-style cyan-bg d-flex justify-content-center","data-wow-delay":".2s",children:[(0,a.jsx)("h6",{className:"col-lg-4 valign pl-15",children:"Style Guide"}),(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsx)(w.default,{href:"/download/style-guide",style:"position:absolute; right:0;",children:(0,a.jsx)("a",{className:"press-kit-btn btn-curve ".concat("light"==e?"btn-blc":"btn-lit"," wow fadeInUp"),"data-wow-delay":".5s",children:(0,a.jsx)("span",{children:"Download"})})})})]})]})})})]})})})})},G=t(9008),V=t(2873),q=t(965);t(933),t(92);function z(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],a=!0,n=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(t.push(r.value),!s||t.length!==s);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}q.ZP.use([q.W_]);var Y=function(e){var s=e.subBG,t=z(n.useState(!0),2),i=t[0],r=t[1];n.useEffect((function(){setTimeout((function(){r(!1)}))}),[]);var l=n.useRef(null),c=n.useRef(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G.default,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"/css/ionicons.min.css"})}),(0,a.jsx)("section",{className:"work-carousel section-padding caroul ".concat(s?"sub-bg":""," position-re"),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"sec-head custom-font text-center",children:[(0,a.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"2022 Development Roadmap"}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Roadmap"})}),(0,a.jsx)("span",{className:"tbg",children:"Roadmap"})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12 no-padding",children:(0,a.jsx)("div",{className:"swiper-container",children:(0,a.jsxs)("div",{className:"swiper-container",children:[i?null:(0,a.jsxs)(V.t,{speed:1e3,loop:!1,spaceBetween:0,breakpoints:{320:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:0},1024:{slidesPerView:3,spaceBetween:0}},navigation:{prevEl:l.current,nextEl:c.current},onBeforeInit:function(e){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=c.current},onSwiper:function(e){setTimeout((function(){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=c.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:1,children:[(0,a.jsx)(V.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"top-label",children:"Q1 - 2022"}),(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-1.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"Triall"}),(0,a.jsx)("h4",{children:"Clinical trials including Covid19 Vaccine research on the LTO Network"})]})]})}),(0,a.jsx)(V.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-2.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"SignRequest"}),(0,a.jsx)("h4",{children:"Immutable PDFs on LTO Network. Over 1 million business documents signed every year."})]})]})}),(0,a.jsx)(V.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"top-label",children:"Q2 - 2022"}),(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-3.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"NEN"}),(0,a.jsx)("h4",{children:"Smart certificates to facilitate on the spot verification for The Dutch Standardization Institute"})]})]})}),(0,a.jsx)(V.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-4.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"New Timeline Item"}),(0,a.jsx)("h4",{children:"Text will go here."})]})]})}),(0,a.jsx)(V.o,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"content wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/about/roadmap-5.jpg)"}}),(0,a.jsxs)("div",{className:"cont bgbox",children:[(0,a.jsx)("h6",{children:"New Timeline Item"}),(0,a.jsx)("h4",{children:"Text will go here."})]})]})})]}),(0,a.jsx)("div",{ref:c,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,a.jsx)("i",{className:"ion-ios-arrow-right"})}),(0,a.jsx)("div",{ref:l,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,a.jsx)("i",{className:"ion-ios-arrow-left"})})]})})})})]})})]})},K=t(1690),X=function(){return(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(p,{}),(0,a.jsx)(g,{}),(0,a.jsx)(v,{withPadding:!0,withOutTitle:!0}),(0,a.jsxs)(b,{children:[(0,a.jsx)(y.Z,{title:"Key Tech & Benefits",subtitle:"What we offer",backTitle:"Key Tech",paddingTop:"0"}),(0,a.jsx)(N,{}),(0,a.jsx)(_,{}),(0,a.jsx)(T,{}),(0,a.jsx)(O,{theme:"dark"}),(0,a.jsx)(E,{})]}),(0,a.jsx)(Z,{}),(0,a.jsx)(W,{}),(0,a.jsx)(Y,{}),(0,a.jsx)(K.Z,{})]})}}},function(e){e.O(0,[468,211,325,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);