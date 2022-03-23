"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99209],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86846:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),c=["components"],i={title:"Ad",sidebar_label:"Ad"},p=void 0,l={unversionedId:"components/open/ad",id:"version-1.x/components/open/ad",title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-1.x/components/open/ad.md",sourceDirName:"components/open",slug:"/components/open/ad",permalink:"/taro/docs/1.x/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/open/ad.md",tags:[],version:"1.x",frontMatter:{title:"Ad",sidebar_label:"Ad"},sidebar:"version-1.x/components",previous:{title:"Canvas",permalink:"/taro/docs/1.x/components/canvas/"},next:{title:"OfficialAccount",permalink:"/taro/docs/1.x/components/open/official-account"}},s=[{value:"Banner \u5e7f\u544a",id:"banner-\u5e7f\u544a",children:[],level:5}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h5",{id:"banner-\u5e7f\u544a"},"Banner \u5e7f\u544a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u7528\u6cd5\u8bf7\u770b\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Ad"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Ad \u7ec4\u4ef6\nimport { Ad } from '@tarojs/components'\n\nclass App extends Component {\n  render () {\n    return (\n      <Ad\n        unit-id=''\n        ad-intervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n")))}d.isMDXComponent=!0}}]);