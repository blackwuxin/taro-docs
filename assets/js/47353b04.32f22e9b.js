"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10469],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||v[d]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34964:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(83117),i=r(80102),c=(r(67294),r(3905)),o=["components"],a={title:"Taro.getBLEDeviceServices(OBJECT)",sidebar_label:"getBLEDeviceServices"},s=void 0,l={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"version-1.x/apis/device/ble/getBLEDeviceServices",title:"Taro.getBLEDeviceServices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getBLEDeviceServices\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getBLEDeviceServices(OBJECT)",sidebar_label:"getBLEDeviceServices"},sidebar:"version-1.x/API",previous:{title:"getBLEDeviceCharacteristics",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"notifyBLECharacteristicValueChange",permalink:"/taro/docs/1.x/apis/device/ble/notifyBLECharacteristicValueChange"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],v={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBLEDeviceServices.html"},(0,c.kt)("inlineCode",{parentName:"a"},"wx.getBLEDeviceServices")),"\uff0c\u652f\u6301 ",(0,c.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,c.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.getBLEDeviceServices(params).then(...)\n")))}u.isMDXComponent=!0}}]);