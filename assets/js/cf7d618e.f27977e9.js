"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[86951],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=i(r),b=o,d=s["".concat(l,".").concat(b)]||s[b]||p[b]||a;return r?n.createElement(d,u(u({ref:t},f),{},{components:r})):n.createElement(d,u({ref:t},f))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69132:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},assets:function(){return f},toc:function(){return p},default:function(){return b}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),u=["components"],c={slug:"2019-09-25-taro-flex",title:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7",author:"ZakaryCode",author_url:"https://github.com/ZakaryCode",author_image_url:"https://avatars0.githubusercontent.com/u/24262362?s=460&u=dfb6bbff0f0d07de91d03174474b6ba220ed960c&v=4"},l=void 0,i={permalink:"/taro/blog/2019-09-25-taro-flex",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-09-25-taro-flex.md",source:"@site/blog/2019-09-25-taro-flex.md",title:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7",description:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7\uff0c\u5e26\u4f60\u4e86\u89e3 flex \u5e03\u5c40\u5728\u5404\u5c0f\u7a0b\u5e8f\u7aef\u7684\u8868\u73b0\u8be6\u60c5\u5e76\u7ed9\u51fa\u6700\u4f73\u5b9e\u8df5 demo",date:"2019-09-25T00:00:00.000Z",formattedDate:"2019\u5e749\u670825\u65e5",tags:[],readingTime:22.765,truncated:!0,authors:[{name:"ZakaryCode",url:"https://github.com/ZakaryCode",imageURL:"https://avatars0.githubusercontent.com/u/24262362?s=460&u=dfb6bbff0f0d07de91d03174474b6ba220ed960c&v=4"}],frontMatter:{slug:"2019-09-25-taro-flex",title:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7",author:"ZakaryCode",author_url:"https://github.com/ZakaryCode",author_image_url:"https://avatars0.githubusercontent.com/u/24262362?s=460&u=dfb6bbff0f0d07de91d03174474b6ba220ed960c&v=4"},prevItem:{title:"Taro \u9080\u4f60\u52a0\u5165\u793e\u533a\u5171\u5efa \u2014 \u793e\u533a\u5171\u5efa\u5021\u8bae\u4e66",permalink:"/taro/blog/2019-10-24-taro-open"},nextItem:{title:"\u4f7f\u7528 React Hooks \u91cd\u6784\u4f60\u7684\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2019-07-10-taro-hooks"}},f={authorsImageUrls:[void 0]},p=[],s={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7\uff0c\u5e26\u4f60\u4e86\u89e3 flex \u5e03\u5c40\u5728\u5404\u5c0f\u7a0b\u5e8f\u7aef\u7684\u8868\u73b0\u8be6\u60c5\u5e76\u7ed9\u51fa\u6700\u4f73\u5b9e\u8df5 demo")),(0,a.kt)("p",null,"Taro \u662f\u4e00\u5957\u9075\u5faa React \u8bed\u6cd5\u89c4\u8303\u7684\u8de8\u5e73\u53f0\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u662f\u76ee\u524d\u5f53\u6211\u4eec\u4f7f\u7528 Taro \u7684\u65f6\u5019\uff0c\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7684\u5f00\u53d1\u4f53\u9a8c\u8fd8\u6709\u4e0d\u4e00\u81f4\u7684\u5730\u65b9\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u90fd\u671f\u5f85\u6709\u4e00\u5957\u8de8\u5e73\u53f0\u7edf\u4e00\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u80fd\u591f\u4ee5\u6700\u5c0f\u5dee\u5f02\u7684\u65b9\u5f0f\u5411\u5f00\u53d1\u8005\u63d0\u4f9b\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"))}b.isMDXComponent=!0}}]);