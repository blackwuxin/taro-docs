"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88712],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(83117),a=n(80102),p=(n(67294),n(3905)),o=["components"],i={title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},l=void 0,c={unversionedId:"apis/base/weapp/app-event/onAppHide",id:"apis/base/weapp/app-event/onAppHide",title:"Taro.onAppHide(callback)",description:"Listens on the event that Mini Program is switched to background. The callback timing for this event is consistent with that of App.onHide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/app-event/onAppHide.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppHide",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onAppHide",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onAppHide.md",tags:[],version:"current",frontMatter:{title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},sidebar:"API",previous:{title:"onAppShow",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onAppShow"},next:{title:"offUnhandledRejection",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/offUnhandledRejection"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Listens on the event that Mini Program is switched to background. The callback timing for this event is consistent with that of ",(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onhide"},(0,p.kt)("inlineCode",{parentName:"a"},"App.onHide")),"."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onAppHide.html"},"Reference"))),(0,p.kt)("h2",{id:"type"},"Type"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",null,(0,p.kt)("tr",null,(0,p.kt)("th",null,"Property"),(0,p.kt)("th",null,"Type"),(0,p.kt)("th",null,"Description"))),(0,p.kt)("tbody",null,(0,p.kt)("tr",null,(0,p.kt)("td",null,"callback"),(0,p.kt)("td",null,(0,p.kt)("code",null,"(res: CallbackResult) => void")),(0,p.kt)("td",null,"The callback function for the event that Mini Program is switched to background.")))),(0,p.kt)("h2",{id:"api-support"},"API Support"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"API"),(0,p.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,p.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,p.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"Taro.onAppHide"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);