"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[9577],{6749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"web",title:"Web Platform",sidebar_label:"Web",original_id:"web"},p=void 0,u={unversionedId:"platforms/web",id:"platforms/web",isDocsHomePage:!1,title:"Web Platform",description:"Overview",source:"@site/docs/platforms/web.md",sourceDirName:"platforms",slug:"/platforms/web",permalink:"/docs/platforms/web",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/web.md",tags:[],version:"current",frontMatter:{id:"web",title:"Web Platform",sidebar_label:"Web",original_id:"web"},sidebar:"tutorialSidebar",previous:{title:"tvOS",permalink:"/docs/platforms/tvos"},next:{title:"LG WebOS",permalink:"/docs/platforms/webos"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"Modifying index.html",id:"modifying-indexhtml",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],c={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_web.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports Chrome, Safari, Firefox, IE10+")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with web support:"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no extra requirements required")),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webpack"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"3.11.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"react-native-web"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0.9.1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Babel Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"7.1.2"))))),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p web\n")),(0,a.kt)("p",null,"RNV will run local server and attempt to open browser URL: ",(0,a.kt)("a",{parentName:"p",href:"http://0.0.0.0:8080/"},"http://0.0.0.0:8080/")),(0,a.kt)("p",null,"If you only want to run server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv start -p web\n")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv build -p web\n")),(0,a.kt)("p",null,"your deployable web app folder will be located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./platformBuilds/<APP_ID>_web/public")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p web -r\n")),(0,a.kt)("p",null,"Run with verbose logging:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p web --info\n")),(0,a.kt)("p",null,"Run app on custom port ",(0,a.kt)("inlineCode",{parentName:"p"},"9999"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p web --port 9999\n")),(0,a.kt)("h2",{id:"modifying-indexhtml"},"Modifying index.html"),(0,a.kt)("p",null,"In order for you to do that you'll need to run the project first, so it generates the files you need first. Then you can copy ",(0,a.kt)("inlineCode",{parentName:"p"},"platformBuilds/<APP_ID>_web/template.js")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"appConfigs/base/builds/template.js")," and modify it."),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/json-config"},"see: Web based config")))}s.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);