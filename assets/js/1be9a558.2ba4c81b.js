"use strict";(self.webpackChunkrenative_docs=self.webpackChunkrenative_docs||[]).push([[8774],{5071:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"templates",title:"Templates",sidebar_label:"Templates",original_id:"templates"},p=void 0,s={unversionedId:"guides/templates",id:"guides/templates",title:"Templates",description:"Templates / Starters",source:"@site/docs/guides/templates.md",sourceDirName:"guides",slug:"/guides/templates",permalink:"/docs/guides/templates",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/templates.md",tags:[],version:"current",frontMatter:{id:"templates",title:"Templates",sidebar_label:"Templates",original_id:"templates"},sidebar:"docsSidebar",previous:{title:"Runtime",permalink:"/docs/guides/runtime"},next:{title:"Workspaces",permalink:"/docs/guides/workspaces"}},c=[{value:"Templates / Starters",id:"templates--starters",children:[],level:2},{value:"Built-in",id:"built-in",children:[],level:2},{value:"Community",id:"community",children:[],level:2},{value:"Custom",id:"custom",children:[],level:2},{value:"CLI Support",id:"cli-support",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_templates.png",width:"50",height:"50"}),(0,l.kt)("h2",{id:"templates--starters"},"Templates / Starters"),(0,l.kt)("p",null,"Templates are used as initial bootstrap structure you can use instead of creating your project source, configs and assets from scratch."),(0,l.kt)("p",null,"Templates are offered during creation of new project ( ",(0,l.kt)("inlineCode",{parentName:"p"},"rnv new")," )"),(0,l.kt)("h2",{id:"built-in"},"Built-in"),(0,l.kt)("p",null,"Hello World:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/renative-template-hello-world"},"https://www.npmjs.com/package/renative-template-hello-world")),(0,l.kt)("p",null,"Blank:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/renative-template-blank"},"https://www.npmjs.com/package/renative-template-blank")),(0,l.kt)("h2",{id:"community"},"Community"),(0,l.kt)("p",null,"Chat App:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@reactseals/renative-template-chat"},"https://www.npmjs.com/package/@reactseals/renative-template-chat")),(0,l.kt)("h2",{id:"custom"},"Custom"),(0,l.kt)("p",null,"During ",(0,l.kt)("inlineCode",{parentName:"p"},"rnv new")," you will be give an option to choose between existing built-in templates or option to type your custom one."),(0,l.kt)("p",null,"You can type name of any package with has support for RNV template. (contains ",(0,l.kt)("inlineCode",{parentName:"p"},"renative.template.json")," file at its root)"),(0,l.kt)("p",null,"ie:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"renative-template-hello-world")),(0,l.kt)("p",null,"or"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@reactseals/renative-template-chat")),(0,l.kt)("p",null,"and so on"),(0,l.kt)("h2",{id:"cli-support"},"CLI Support"),(0,l.kt)("p",null,"You can manage your templates in your project via rnv command line."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rnv template list")," - list available and installed templated in your project"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rnv template add")," - add template to your project"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rnv template apply")," - apply one of the installed templates to your project"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"for full CLI reference, visit ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/cli-engine-core#template-add"},"Engine Core API Reference")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);