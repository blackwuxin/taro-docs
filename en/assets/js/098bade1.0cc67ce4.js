"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[86619],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(a),f=r,s=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return a?n.createElement(s,o(o({ref:t},d),{},{components:a})):n.createElement(s,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8326:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],i={title:"AudioBuffer",sidebar_label:"AudioBuffer"},p=void 0,u={unversionedId:"apis/media/audio/AudioBuffer",id:"version-3.x/apis/media/audio/AudioBuffer",title:"AudioBuffer",description:"AudioBuffer \u63a5\u53e3\u8868\u793a\u5b58\u5728\u5185\u5b58\u91cc\u7684\u4e00\u6bb5\u77ed\u5c0f\u7684\u97f3\u9891\u8d44\u6e90\uff0c\u5229\u7528 WebAudioContext.decodeAudioData \u65b9\u6cd5\u4ece\u4e00\u4e2a\u97f3\u9891\u6587\u4ef6\u6784\u5efa\uff0c\u6216\u8005\u5229\u7528 AudioContext.createBuffer.html) \u4ece\u539f\u59cb\u6570\u636e\u6784\u5efa\u3002\u628a\u97f3\u9891\u653e\u5165 AudioBuffer \u540e\uff0c\u53ef\u4ee5\u4f20\u5165\u5230\u4e00\u4e2a AudioBufferSourceNode \u8fdb\u884c\u64ad\u653e\u3002",source:"@site/versioned_docs/version-3.x/apis/media/audio/AudioBuffer.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/AudioBuffer",permalink:"/taro/en/docs/apis/media/audio/AudioBuffer",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/audio/AudioBuffer.md",tags:[],version:"3.x",frontMatter:{title:"AudioBuffer",sidebar_label:"AudioBuffer"},sidebar:"API",previous:{title:"createAudioContext",permalink:"/taro/en/docs/apis/media/audio/createAudioContext"},next:{title:"AudioContext",permalink:"/taro/en/docs/apis/media/audio/AudioContext"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"getChannelData",id:"getchanneldata",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:4}],level:3},{value:"copyFromChannel",id:"copyfromchannel",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[],level:4}],level:3},{value:"copyToChannel",id:"copytochannel",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],c={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"AudioBuffer \u63a5\u53e3\u8868\u793a\u5b58\u5728\u5185\u5b58\u91cc\u7684\u4e00\u6bb5\u77ed\u5c0f\u7684\u97f3\u9891\u8d44\u6e90\uff0c\u5229\u7528 ",(0,l.kt)("a",{parentName:"p",href:"./WebAudioContext#decodeaudiodata"},"WebAudioContext.decodeAudioData")," \u65b9\u6cd5\u4ece\u4e00\u4e2a\u97f3\u9891\u6587\u4ef6\u6784\u5efa\uff0c\u6216\u8005\u5229\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/(AudioContext.createBuffer).html"},"AudioContext.createBuffer")," \u4ece\u539f\u59cb\u6570\u636e\u6784\u5efa\u3002\u628a\u97f3\u9891\u653e\u5165 AudioBuffer \u540e\uff0c\u53ef\u4ee5\u4f20\u5165\u5230\u4e00\u4e2a AudioBufferSourceNode \u8fdb\u884c\u64ad\u653e\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampleRate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5728\u7f13\u5b58\u533a\u7684PCM\u6570\u636e\u7684\u91c7\u6837\u7387\uff08\u5355\u4f4d\u4e3asample/s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b58\u50a8\u5728\u7f13\u5b58\u533a\u7684PCM\u6570\u636e\u7684\u91c7\u6837\u5e27\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b58\u50a8\u5728\u7f13\u5b58\u533a\u7684PCM\u6570\u636e\u7684\u65f6\u957f\uff08\u5355\u4f4d\u4e3a\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfChannels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u50a8\u5b58\u5728\u7f13\u5b58\u533a\u7684PCM\u6570\u636e\u7684\u901a\u9053\u6570")))),(0,l.kt)("h3",{id:"getchanneldata"},"getChannelData"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a Float32Array\uff0c\u5305\u542b\u4e86\u5e26\u6709\u9891\u9053\u7684PCM\u6570\u636e\uff0c\u7531\u9891\u9053\u53c2\u6570\u5b9a\u4e49\uff08\u67090\u4ee3\u8868\u7b2c\u4e00\u4e2a\u9891\u9053\uff09"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.getChannelData.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(channel: number) => Float32Array\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const audioCtx = Taro.createWebAudioContext()\nconst myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);\nconst nowBuffering = myArrayBuffer.getChannelData(channel);\n")),(0,l.kt)("h3",{id:"copyfromchannel"},"copyFromChannel"),(0,l.kt)("p",null,"\u4ece AudioBuffer \u7684\u6307\u5b9a\u9891\u9053\u590d\u5236\u5230\u6570\u7ec4\u7ec8\u7aef\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyFromChannel.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const audioCtx = Taro.createWebAudioContext()\nconst audioBuffer = audioCtx.createFromAudioFile({\n  filePath:'/pages/res/bgm.mp3', // \u9759\u6001\u8d44\u6e90\n  mixToMono:true,\n  sampleRate:44100\n});\nconst channels = audioBuffer.numberOfChannels\nconst anotherArray = new Float32Array(frameCount);\nconst rate = audioBuffer.sampleRate\nconst startOffSet = 0\nconst endOffset = rate * 3;\nconst newAudioBuffer = audioCtx.createBuffer(channels,endOffset - startOffset,rate)\nconst offset = 0\n\nfor (let channel = 0; channel < channels; channel++) {\n  audioBuffer.copyFromChannel(anotherArray, channel, startOffset);\n  newAudioBuffer.copyToChannel(anotherArray, channel, offset);\n}\n")),(0,l.kt)("h3",{id:"copytochannel"},"copyToChannel"),(0,l.kt)("p",null,"\u4ece\u6307\u5b9a\u6570\u7ec4\u590d\u5236\u6837\u672c\u5230 audioBuffer \u7684\u7279\u5b9a\u901a\u9053"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyToChannel.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(source: Float32Array, channelNumber: number, startInChannel: number) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u590d\u5236\u7684\u6e90\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelNumber"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u590d\u5236\u5230\u7684\u76ee\u7684\u901a\u9053\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startInChannel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u590d\u5236\u504f\u79fb\u6570\u636e\u91cf")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioBuffer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioBuffer.getChannelData"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioBuffer.copyFromChannel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioBuffer.copyToChannel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);