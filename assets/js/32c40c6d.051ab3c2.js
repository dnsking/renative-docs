"use strict";(self.webpackChunkrenative_docs=self.webpackChunkrenative_docs||[]).push([[8640],{9204:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"chromecast",title:"Chromecast Platform",sidebar_label:"Chromecast",original_id:"chromecast"},c=void 0,p={unversionedId:"platforms/chromecast",id:"platforms/chromecast",title:"Chromecast Platform",description:"Overview",source:"@site/docs/platforms/chromecast.md",sourceDirName:"platforms",slug:"/platforms/chromecast",permalink:"/docs/platforms/chromecast",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/chromecast.md",tags:[],version:"current",frontMatter:{id:"chromecast",title:"Chromecast Platform",sidebar_label:"Chromecast",original_id:"chromecast"},sidebar:"docsSidebar",previous:{title:"Android Wear",permalink:"/docs/platforms/androidwear"},next:{title:"Firefox OS",permalink:"/docs/platforms/firefoxos"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"Modifying index.html",id:"modifying-indexhtml",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,i.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,i.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,i.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,i.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_chromecast.gif",height:"250"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports Chromecast devices")),(0,i.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,i.kt)("p",null,"Extenstions are defined via engines. Engines with chromecast support: "),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no extra requirements required")),(0,i.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Webpack"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"3.11.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"react-native-web"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"0.9.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Babel Core"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"7.1.2"))))),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv run -p chromecast\n")),(0,i.kt)("p",null,"RNV will run local server at URL: ",(0,i.kt)("a",{parentName:"p",href:"http://0.0.0.0:8095/"},"http://0.0.0.0:8095/")),(0,i.kt)("p",null,"If you only want to run server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv start -p chromecast\n")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv build -p chromecast\n")),(0,i.kt)("p",null,"your deployable chromecast app folder will be located in ",(0,i.kt)("inlineCode",{parentName:"p"},"./platformBuilds/<APP_ID>_chromecast/public")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"Clean and Re-build platform project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv run -p chromecast -r\n")),(0,i.kt)("p",null,"Run with verbose logging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv run -p chromecast --info\n")),(0,i.kt)("p",null,"Run app on custom port ",(0,i.kt)("inlineCode",{parentName:"p"},"9999"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rnv run -p chromecast --port 9999\n")),(0,i.kt)("h2",{id:"modifying-indexhtml"},"Modifying index.html"),(0,i.kt)("p",null,"In order for you to do that you'll need to run the project first, so it generates the files you need first. Then you can copy ",(0,i.kt)("inlineCode",{parentName:"p"},"platformBuilds/<APP_ID>_chromecast/template.js")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfigs/base/builds/template.js")," and modify it."),(0,i.kt)("h2",{id:"app-config"},"App Config"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/json-config"},"see: Web based config")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);