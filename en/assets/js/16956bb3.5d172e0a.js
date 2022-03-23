"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16552],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41042:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={slug:"2020-04-27-taro-vs-jd",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",authors:"JJ"},u=void 0,l={permalink:"/taro/en/blog/2020-04-27-taro-vs-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-04-27-taro-vs-jd.md",source:"@site/blog/2020-04-27-taro-vs-jd.md",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",description:"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002",date:"2020-04-27T00:00:00.000Z",formattedDate:"April 27, 2020",tags:[],readingTime:11.335,truncated:!0,authors:[{name:"JJ",title:"Taro \u56e2\u961f\u6210\u5458",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2020-04-27-taro-vs-jd",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",authors:"JJ"},prevItem:{title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",permalink:"/taro/en/blog/2020-04-27-taro-build-jd"},nextItem:{title:"Taro Next H5 \u8de8\u6846\u67b6\u7ec4\u4ef6\u5e93\u5b9e\u8df5",permalink:"/taro/en/blog/2020-4-13-taro-components"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png",alt:null})),(0,a.kt)("p",null,"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362",(0,a.kt)("a",{parentName:"p",href:"https://taro.jd.com/jdmp/index.html"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u5404\u79cd\u7591\u95ee\uff0c\u6211\u4eec\u4ece\u6027\u80fd\u4e0e\u5f00\u53d1\u4f53\u9a8c\u7684\u89d2\u5ea6\u5207\u5165\uff0c\u628a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u539f\u751f\u5f00\u53d1\u4e0e Taro \u5f00\u53d1\u8fdb\u884c\u4e86\u4e00\u756a\u5bf9\u6bd4\u3002"))}m.isMDXComponent=!0}}]);