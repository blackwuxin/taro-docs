"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Taro.authorize(option)",sidebar_label:"authorize"},p=void 0,c={unversionedId:"apis/open-api/authorize/authorize",id:"apis/open-api/authorize/authorize",title:"Taro.authorize(option)",description:"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42\u3002\u8c03\u7528\u540e\u4f1a\u7acb\u523b\u5f39\u7a97\u8be2\u95ee\u7528\u6237\u662f\u5426\u540c\u610f\u6388\u6743\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u67d0\u9879\u529f\u80fd\u6216\u83b7\u53d6\u7528\u6237\u7684\u67d0\u4e9b\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5b9e\u9645\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u5df2\u7ecf\u540c\u610f\u6388\u6743\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u5f39\u7a97\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002\u66f4\u591a\u7528\u6cd5\u8be6\u89c1 \u7528\u6237\u6388\u6743\u3002",source:"@site/docs/apis/open-api/authorize/authorize.md",sourceDirName:"apis/open-api/authorize",slug:"/apis/open-api/authorize/",permalink:"/taro/docs/next/apis/open-api/authorize/",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/authorize/authorize.md",tags:[],version:"current",frontMatter:{title:"Taro.authorize(option)",sidebar_label:"authorize"},sidebar:"API",previous:{title:"authorizeForMiniProgram",permalink:"/taro/docs/next/apis/open-api/authorize/authorizeForMiniProgram"},next:{title:"openSetting",permalink:"/taro/docs/next/apis/open-api/settings/openSetting"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],s={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42\u3002\u8c03\u7528\u540e\u4f1a\u7acb\u523b\u5f39\u7a97\u8be2\u95ee\u7528\u6237\u662f\u5426\u540c\u610f\u6388\u6743\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u67d0\u9879\u529f\u80fd\u6216\u83b7\u53d6\u7528\u6237\u7684\u67d0\u4e9b\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5b9e\u9645\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u5df2\u7ecf\u540c\u610f\u6388\u6743\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u5f39\u7a97\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002\u66f4\u591a\u7528\u6cd5\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u7528\u6237\u6388\u6743"),"\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"option"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scope"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u83b7\u53d6\u6743\u9650\u7684 scope\uff0c\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8"},"scope \u5217\u8868"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"complete"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fail"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"success"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u53ef\u4ee5\u901a\u8fc7 Taro.getSetting \u5148\u67e5\u8be2\u4e00\u4e0b\u7528\u6237\u662f\u5426\u6388\u6743\u4e86 \"scope.record\" \u8fd9\u4e2a scope\nTaro.getSetting({\n  success: function (res) {\n    if (!res.authSetting['scope.record']) {\n      Taro.authorize({\n        scope: 'scope.record',\n        success: function () {\n          // \u7528\u6237\u5df2\u7ecf\u540c\u610f\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u5f55\u97f3\u529f\u80fd\uff0c\u540e\u7eed\u8c03\u7528 Taro.startRecord \u63a5\u53e3\u4e0d\u4f1a\u5f39\u7a97\u8be2\u95ee\n          Taro.startRecord()\n        }\n      })\n    }\n  }\n})\n")))}m.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);