"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17461],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98217:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Taro.setStorage(option)",sidebar_label:"setStorage"},p=void 0,c={unversionedId:"apis/storage/setStorage",id:"apis/storage/setStorage",title:"Taro.setStorage(option)",description:"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002\u9664\u975e\u7528\u6237\u4e3b\u52a8\u5220\u9664\u6216\u56e0\u5b58\u50a8\u7a7a\u95f4\u539f\u56e0\u88ab\u7cfb\u7edf\u6e05\u7406\uff0c\u5426\u5219\u6570\u636e\u90fd\u4e00\u76f4\u53ef\u7528\u3002\u5355\u4e2a key \u5141\u8bb8\u5b58\u50a8\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u4e3a 1MB\uff0c\u6240\u6709\u6570\u636e\u5b58\u50a8\u4e0a\u9650\u4e3a 10MB\u3002",source:"@site/docs/apis/storage/setStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/setStorage",permalink:"/taro/docs/next/apis/storage/setStorage",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/storage/setStorage.md",tags:[],version:"current",frontMatter:{title:"Taro.setStorage(option)",sidebar_label:"setStorage"},sidebar:"API",previous:{title:"setStorageSync",permalink:"/taro/docs/next/apis/storage/setStorageSync"},next:{title:"revokeBufferURL",permalink:"/taro/docs/next/apis/storage/revokeBufferURL"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002\u9664\u975e\u7528\u6237\u4e3b\u52a8\u5220\u9664\u6216\u56e0\u5b58\u50a8\u7a7a\u95f4\u539f\u56e0\u88ab\u7cfb\u7edf\u6e05\u7406\uff0c\u5426\u5219\u6570\u636e\u90fd\u4e00\u76f4\u53ef\u7528\u3002\u5355\u4e2a key \u5141\u8bb8\u5b58\u50a8\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u4e3a 1MB\uff0c\u6240\u6709\u6570\u636e\u5b58\u50a8\u4e0a\u9650\u4e3a 10MB\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u5b58\u50a8\u7684\u5185\u5bb9\u3002\u53ea\u652f\u6301\u539f\u751f\u7c7b\u578b\u3001Date\u3001\u53ca\u80fd\u591f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"td"},"JSON.stringify"),"\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'Taro.setStorage({\n  key:"key",\n  data:"value"\n})\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  Taro.setStorageSync('key', 'value')\n} catch (e) { }\n")))}d.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);