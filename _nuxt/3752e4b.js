(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{380:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return d}));var n=r(382),c=r(2),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),f=Object(c.g)("v-card__text"),d=Object(c.g)("v-card__title");n.a},381:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},to:{type:String,default:""}}},c=r(81),o=r(104),l=r.n(o),f=r(382),d=r(380),v=r(164),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"gradient",attrs:{ripple:!!t.to,to:t.to,shaped:"",color:"secondary"}},[t.icon?r("v-card",{staticClass:"text",attrs:{justify:"center",color:"transparent",align:"center",elevation:"0"}},[r("v-icon",{staticClass:"text-h1 ma-5 white--text",attrs:{"x-large":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),r("v-card-title",{staticClass:"justify-center white--text font-weight-bold text-capitalize"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("v-card-text",{attrs:{align:"center"}},[r("p",{staticClass:"subtitle-1 white--text"},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.b,VCardTitle:d.c,VIcon:v.a})},401:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5ee2ef52",content,!0,{sourceMap:!1})},402:function(t,e,r){var n=r(23)(!1);n.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=n},404:function(t,e,r){"use strict";r(9),r(6),r(11),r(16),r(7),r(17);var n=r(1),c=(r(35),r(401),r(64)),o=r(110),l=r(172),f=r(2),d=r(20);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,o.a,l.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return O({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return O({height:Object(f.f)(this.size),minWidth:Object(f.f)(this.size),width:Object(f.f)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})},405:function(t,e,r){"use strict";r(6),r(11),r(16),r(17);var n=r(1),c=(r(35),r(9),r(29),r(50),r(383),r(12),r(30),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(34),r(55),r(7),r(65),r(397),r(0)),o=r(170),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(O),offset:Object.keys(h),order:Object.keys(y)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var n=r[t],c=m(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},406:function(t,e,r){"use strict";r(6),r(11),r(16),r(17);var n=r(1),c=(r(55),r(75),r(28),r(9),r(29),r(50),r(383),r(12),r(30),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(34),r(7),r(397),r(0)),o=r(170),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=["start","end","center"];function h(t,e){return v.reduce((function(r,n){return r[t+Object(l.w)(n)]=e(),r}),{})}var y=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:y}})),m=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:m}})),_=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},k=h("alignContent",(function(){return{type:String,default:null,validator:_}})),P={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(k)},S={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,r){var n=S[t];if(null!=r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var x=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},j),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:_}},k),render:function(t,e){var r=e.props,data=e.data,c=e.children,l="";for(var f in r)l+=String(r[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var n=r[t],c=C(e,t,n);c&&d.push(c)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),x.set(l,d)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},482:function(t,e,r){"use strict";r.r(e);var n=r(18),c=r(1),o=(r(57),r(26),r(6),r(45),r(9),r(11),r(16),r(7),r(17),r(381)),l=r(69);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Card:o.default},data:function(){return{pkg:{}}},fetch:function(){this.fetchPackage(this.$route.params.id)},head:function(){return{title:this.pkg.name,meta:[{hid:"description",name:"description",content:this.pkg.description}]}},watch:{"$route.params.id":"fetchPackage"},methods:d(d({},Object(l.b)(["setLoading"])),{},{fetchPackage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.setLoading(!0),r.next=3,e.$content("plugins/".concat(t)).fetch();case 3:n=r.sent,e.pkg=n,e.setLoading(!1);case 6:case"end":return r.stop()}}),r)})))()}})},O=r(81),h=r(104),y=r.n(h),j=r(404),m=r(244),w=r(382),_=r(380),k=r(405),P=r(488),S=r(164),C=r(406),x=r(54),component=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"py-10"},[r("v-row",[r("v-col",{attrs:{cols:12}},[r("card",{attrs:{title:t.pkg.name,description:t.pkg.description}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:12}},[r("v-card",{staticClass:"pa-5",attrs:{shaped:"",flat:"",outlined:""}},[t.pkg.author?r("div",[t.pkg.author.name||t.pkg.author.username?r("v-card-title",[r("v-avatar",{attrs:{size:"50",color:"red"}},[r("img",{attrs:{src:t.pkg.author.avatar,alt:"alt"}})]),t._v(" "),r("span",{staticClass:"mx-5"},[t._v("By "+t._s(t.pkg.author.name||t.pkg.author.username))])],1):t._e()],1):t._e(),t._v(" "),r("v-card-actions",{staticClass:"py-5"},[r("v-btn",{attrs:{rounded:"",elevation:"0",color:"primary",href:t.pkg.repository,target:"_blank"}},[r("v-icon",[t._v("mdi-github")]),t._v(" Github")],1),t._v(" "),r("v-btn",{attrs:{rounded:"",elevation:"0",color:"primary",href:t.pkg.npm,target:"_blank"}},[r("v-icon",[t._v("mdi-npm")]),t._v(" npm")],1),t._v(" "),r("v-btn",{attrs:{rounded:"",elevation:"0",color:"primary",href:t.pkg.repository,target:"_blank"}},[r("v-icon",[t._v("mdi-star")]),t._v(" "+t._s(t.pkg.stars||0))],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:12}},[r("v-sheet",{staticClass:"overflow-hidden",attrs:{flat:"",outlined:"",shaped:""}},[r("nuxt-content",{staticClass:"pa-5",attrs:{document:t.pkg}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Card:r(381).default}),y()(component,{VAvatar:j.a,VBtn:m.a,VCard:w.a,VCardActions:_.a,VCardTitle:_.c,VCol:k.a,VContainer:P.a,VIcon:S.a,VRow:C.a,VSheet:x.a})}}]);