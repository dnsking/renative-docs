"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[9594],{2849:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return k},toc:function(){return m},default:function(){return s}});var l=t(7462),p=t(3366),a=(t(7294),t(3905)),r=["components"],o={id:"cli-engine-rn-electron",title:"Engine Electron CLI Reference",sidebar_label:"engine-rn-electron"},i=void 0,k={unversionedId:"api/cli-engine-rn-electron",id:"api/cli-engine-rn-electron",isDocsHomePage:!1,title:"Engine Electron CLI Reference",description:"---",source:"@site/docs/api/cli-engine-rn-electron.md",sourceDirName:"api",slug:"/api/cli-engine-rn-electron",permalink:"/docs/api/cli-engine-rn-electron",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/cli-engine-rn-electron.md",tags:[],version:"current",frontMatter:{id:"cli-engine-rn-electron",title:"Engine Electron CLI Reference",sidebar_label:"engine-rn-electron"},sidebar:"apiSidebar",previous:{title:"engine-core",permalink:"/docs/api/cli-engine-core"},next:{title:"engine-rn-next",permalink:"/docs/api/cli-engine-rn-next"}},m=[{value:"run",id:"run",children:[],level:2},{value:"package",id:"package",children:[],level:2},{value:"build",id:"build",children:[],level:2},{value:"configure",id:"configure",children:[],level:2},{value:"start",id:"start",children:[],level:2},{value:"export",id:"export",children:[],level:2},{value:"deploy",id:"deploy",children:[],level:2},{value:"debug",id:"debug",children:[],level:2}],u={toc:m};function s(e){var n=e.components,t=(0,p.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Run your app on target device or emulator")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv run\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--target")," - select specific Target device/simulator"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--device")," - select connected Device"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--hosted")," - Run in a hosted environment (skip budleAssets)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-P"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--port")," - custom Port"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-D"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," - enable or disable remote debugger."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--debugIp")," - (optional) overwrite the ip to which the remote debugger will connect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--skipTargetCheck")," - Skip Android target check, just display the raw adb devices to choose from"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-H"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--host")," - custom Host ip"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"package"},"package"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Package source files into bundle")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv package\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"build"},"build"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Build project binary")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv build\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configure"},"configure"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Configure current project")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv configure\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"start"},"start"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Starts bundler / server")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv start\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"export"},"export"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Export the app into deployable binary")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv export\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"deploy"},"deploy"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Deploy the binary via selected deployment intgeration or buld hook")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv deploy\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This command reference applies if your platform uses engine ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-electron"),"."),(0,a.kt)("p",null,"More info at ",(0,a.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn-electron"},"Engine RN Electron Guide")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"debug"},"debug"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Debug your app on target device or emulator")),(0,a.kt)("p",null,"Supported Platforms:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rnv debug\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,a.kt)("p",null,"test"))}s.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var l=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,p=function(e,n){if(null==e)return{};var t,l,p={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=l.createContext({}),k=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=k(e.components);return l.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=k(t),d=p,c=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return t?l.createElement(c,r(r({ref:n},m),{},{components:t})):l.createElement(c,r({ref:n},m))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,r=new Array(a);r[0]=s;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,r[1]=o;for(var k=2;k<a;k++)r[k]=t[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);