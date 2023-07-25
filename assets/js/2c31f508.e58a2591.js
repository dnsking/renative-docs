"use strict";(self.webpackChunkrenative_docs=self.webpackChunkrenative_docs||[]).push([[3278],{9849:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return f},toc:function(){return s},default:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],a={id:"firefoxtv",title:"Firefox TV Platform",sidebar_label:"Firefox TV",original_id:"firefoxtv"},p=void 0,f={unversionedId:"platforms/firefoxtv",id:"platforms/firefoxtv",title:"Firefox TV Platform",description:"File Extension Support",source:"@site/docs/platforms/firefoxtv.md",sourceDirName:"platforms",slug:"/platforms/firefoxtv",permalink:"/docs/platforms/firefoxtv",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/firefoxtv.md",tags:[],version:"current",frontMatter:{id:"firefoxtv",title:"Firefox TV Platform",sidebar_label:"Firefox TV",original_id:"firefoxtv"},sidebar:"docsSidebar",previous:{title:"Firefox OS",permalink:"/docs/platforms/firefoxos"},next:{title:"FireTV",permalink:"/docs/platforms/firetv"}},s=[{value:"File Extension Support",id:"file-extension-support",children:[{value:"Requirements",id:"requirements",children:[],level:4},{value:"Run",id:"run",children:[],level:4}],level:2},{value:"App Config",id:"app-config",children:[],level:2}],u={toc:s};function c(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,o.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_firefoxtv.gif",height:"250"}),(0,o.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,o.kt)("p",null,"Extenstions are defined via engines. Engines with firefoxtv support: "),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/developer/"},"FirefoxDeveloperEdition")," for IDE + Emulator")),(0,o.kt)("p",null,"After installation you can launch it via Applications:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tools -> Web Developer -> WebIDE")),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{src:"https://renative.org/img/firefoxos.png"})))),(0,o.kt)("h4",{id:"run"},"Run"),(0,o.kt)("p",null,"Run on Simulator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p firefoxtv\n")),(0,o.kt)("p",null,"Run on Device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p firefoxtv -d\n")),(0,o.kt)("p",null,"Run in Browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p firefoxtv --hosted\n")),(0,o.kt)("h2",{id:"app-config"},"App Config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/json-config"},"see: Web based config")))}c.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),f=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=f(r),d=i,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var f=2;f<o;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);