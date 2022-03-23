"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[71669],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Taro.openCard(option)",sidebar_label:"openCard"},c=void 0,d={unversionedId:"apis/open-api/card/openCard",id:"version-3.x/apis/open-api/card/openCard",title:"Taro.openCard(option)",description:"Views cards and offers in WeChat Cards & Offers. It can be used only in Mini Programs or cultural interaction Mini Games that complete verification. For more documents, see API Documentation for WeChat Cards & Offers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/open-api/card/openCard.md",sourceDirName:"apis/open-api/card",slug:"/apis/open-api/card/openCard",permalink:"/taro/en/docs/apis/open-api/card/openCard",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/card/openCard.md",tags:[],version:"3.x",frontMatter:{title:"Taro.openCard(option)",sidebar_label:"openCard"},sidebar:"API",previous:{title:"chooseAddress",permalink:"/taro/en/docs/apis/open-api/address/chooseAddress"},next:{title:"addCard",permalink:"/taro/en/docs/apis/open-api/card/addCard"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"RequestInfo",id:"requestinfo",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Views cards and offers in WeChat Cards & Offers. It can be used only in Mini Programs or cultural interaction Mini Games that complete ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/product/renzheng.html"},"verification"),". For more documents, see ",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2"},"API Documentation for WeChat Cards & Offers"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/card/wx.openCard.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"cardList"),(0,o.kt)("td",null,(0,o.kt)("code",null,"RequestInfo[]")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The list of cards and offers to be opened")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"requestinfo"},"RequestInfo"),(0,o.kt)("p",null,"object.cardList is composed as follows"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"cardId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The ID of the card or offer")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"code"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"It is obtained after the encrypted code in the objects returned by ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/card/wx.addCard.html"},"Taro.addCard")," is decrypted. For details, see ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/doc/offiaccount/Cards_and_Offer/Coupons-Mini_Program_Start_Up.html"},"Code Decryption API"))))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.openCard({\n  cardList: [{\n    cardId: '',\n    code: ''\n  }, {\n    cardId: '',\n    code: ''\n  }],\n  success: function (res) { }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.openCard"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);