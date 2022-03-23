"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42208],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Taro.getUserProfile(option)",sidebar_label:"getUserProfile"},p=void 0,s={unversionedId:"apis/open-api/user-info/getUserProfile",id:"apis/open-api/user-info/getUserProfile",title:"Taro.getUserProfile(option)",description:"\u6700\u4f4e Taro \u7248\u672c: 2.2.17+\uff0c3.0.29+",source:"@site/docs/apis/open-api/user-info/getUserProfile.md",sourceDirName:"apis/open-api/user-info",slug:"/apis/open-api/user-info/getUserProfile",permalink:"/taro/docs/next/apis/open-api/user-info/getUserProfile",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/user-info/getUserProfile.md",tags:[],version:"current",frontMatter:{title:"Taro.getUserProfile(option)",sidebar_label:"getUserProfile"},sidebar:"API",previous:{title:"getAccountInfoSync",permalink:"/taro/docs/next/apis/open-api/account/getAccountInfoSync"},next:{title:"getUserInfo",permalink:"/taro/docs/next/apis/open-api/user-info/getUserInfo"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",children:[],level:2}],c={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6700\u4f4e Taro \u7248\u672c: 2.2.17+\uff0c3.0.29+")),(0,l.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u5f39\u51fa\u6388\u6743\u7a97\u53e3\uff0c\u7528\u6237\u540c\u610f\u540e\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"userInfo"),"\u3002"),(0,l.kt)("p",null,"\u82e5\u5f00\u53d1\u8005\u9700\u8981\u83b7\u53d6\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5934\u50cf\u3001\u6635\u79f0\u3001\u6027\u522b\u4e0e\u5730\u533a\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getUserProfile \u63a5\u53e3\u8fdb\u884c\u83b7\u53d6\uff0c"),(0,l.kt)("p",null,"\u5fae\u4fe1\u8be5\u63a5\u53e3\u4ece\u57fa\u7840\u5e93 ",(0,l.kt)("strong",{parentName:"p"},"2.10.4")," \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u8be5\u63a5\u53e3\u53ea\u8fd4\u56de\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\uff0c\u4e0d\u5305\u542b\u7528\u6237\u8eab\u4efd\u6807\u8bc6\u7b26\u3002\u8be5\u63a5\u53e3\u4e2d desc \u5c5e\u6027\uff08\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff09\u540e\u7eed\u4f1a\u5c55\u793a\u5728\u5f39\u7a97\u4e2d\uff0c\u8bf7\u5f00\u53d1\u8005\u8c28\u614e\u586b\u5199\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u6bcf\u6b21\u901a\u8fc7\u8be5\u63a5\u53e3\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u5747\u9700\u7528\u6237\u786e\u8ba4\uff0c\u8bf7\u5f00\u53d1\u8005\u59a5\u5584\u4fdd\u7ba1\u7528\u6237\u5feb\u901f\u586b\u5199\u7684\u5934\u50cf\u6635\u79f0\uff0c\u907f\u514d\u91cd\u590d\u5f39\u7a97\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801"},"\u5fae\u4fe1\u7aef\u8c03\u6574\u80cc\u666f\u548c\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\u6587\u6863")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Language")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desc"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u4e0d\u8d85\u8fc730\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UserInfo")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4fe1\u606f\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rawData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signature"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 sha1( rawData + sessionkey ) \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryptedData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iv"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a\u4e91\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6 ",(0,l.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u89c1\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Taro.getUserProfile \u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u5f00\u53d1\u8005\u6bcf\u6b21\u901a\u8fc7\u8be5\u63a5\u53e3\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u5747\u9700\u7528\u6237\u786e\u8ba4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getUserProfile({\n  desc: '\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599', // \u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u540e\u7eed\u4f1a\u5c55\u793a\u5728\u5f39\u7a97\u4e2d\uff0c\u8bf7\u8c28\u614e\u586b\u5199\n  success: (res) => {\n    // \u5f00\u53d1\u8005\u59a5\u5584\u4fdd\u7ba1\u7528\u6237\u5feb\u901f\u586b\u5199\u7684\u5934\u50cf\u6635\u79f0\uff0c\u907f\u514d\u91cd\u590d\u5f39\u7a97\n    this.setState({\n      userInfo: res.userInfo,\n      hasUserInfo: true\n    })\n  }\n})\n")),(0,l.kt)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),(0,l.kt)("p",null,"\u76f8\u5173 issue : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/8810"},"Taro\u4ec0\u4e48\u65f6\u5019\u652f\u6301 getUserProfile \u65b9\u6cd5")))}m.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);