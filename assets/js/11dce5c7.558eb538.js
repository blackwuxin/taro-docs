"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13604],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(a),u=r,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||c;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},18448:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=a(83117),r=a(80102),c=(a(67294),a(3905)),o=["components"],i={title:"OffscreenCanvas",sidebar_label:"OffscreenCanvas"},l=void 0,p={unversionedId:"apis/canvas/OffscreenCanvas",id:"version-3.x/apis/canvas/OffscreenCanvas",title:"OffscreenCanvas",description:"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002",source:"@site/versioned_docs/version-3.x/apis/canvas/OffscreenCanvas.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/OffscreenCanvas",permalink:"/taro/docs/apis/canvas/OffscreenCanvas",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/OffscreenCanvas.md",tags:[],version:"3.x",frontMatter:{title:"OffscreenCanvas",sidebar_label:"OffscreenCanvas"},sidebar:"API",previous:{title:"ImageData",permalink:"/taro/docs/apis/canvas/ImageData"},next:{title:"Path2D",permalink:"/taro/docs/apis/canvas/Path2D"}},s=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"createImage",id:"createimage",children:[],level:3},{value:"getContext",id:"getcontext",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],m={toc:s};function f(e){var t=e.components,i=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002"),(0,c.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,c.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,c.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,c.kt)("h3",{id:"createimage"},"createImage"),(0,c.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u56fe\u7247\u5bf9\u8c61\u3002\u652f\u6301\u5728 2D Canvas \u548c WebGL Canvas \u4e0b\u4f7f\u7528, \u4f46\u4e0d\u652f\u6301\u6df7\u7528 2D \u548c WebGL \u7684\u65b9\u6cd5"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e0d\u5141\u8bb8\u6df7\u7528 webgl \u548c 2d \u753b\u5e03\u521b\u5efa\u7684\u56fe\u7247\u5bf9\u8c61\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u5c3d\u91cf\u4f7f\u7528 canvas \u81ea\u8eab\u7684 createImage \u521b\u5efa\u56fe\u7247\u5bf9\u8c61\u3002")),(0,c.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,c.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,c.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.createImage.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Image\n")),(0,c.kt)("h3",{id:"getcontext"},"getContext"),(0,c.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de OffscreenCanvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5f53\u524d\u4ec5\u652f\u6301\u83b7\u53d6 WebGL \u7ed8\u56fe\u4e0a\u4e0b\u6587")),(0,c.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,c.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,c.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.getContext.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(contextType: string) => RenderingContext\n")),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,c.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"contextType"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"string"))))),(0,c.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"OffscreenCanvas"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.createImage"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.getContext"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}f.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);