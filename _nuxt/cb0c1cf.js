(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{380:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d}));var r=n(382),c=n(2),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),f=Object(c.g)("v-card__text"),d=Object(c.g)("v-card__title");r.a},381:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},to:{type:String,default:""}}},c=n(81),o=n(104),l=n.n(o),f=n(382),d=n(380),v=n(164),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"gradient",attrs:{ripple:!!t.to,to:t.to,shaped:"",color:"secondary"}},[t.icon?n("v-card",{staticClass:"text",attrs:{justify:"center",color:"transparent",align:"center",elevation:"0"}},[n("v-icon",{staticClass:"text-h1 ma-5 white--text",attrs:{"x-large":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),n("v-card-title",{staticClass:"justify-center white--text font-weight-bold text-capitalize"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("v-card-text",{attrs:{align:"center"}},[n("p",{staticClass:"subtitle-1 white--text"},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.b,VCardTitle:d.c,VIcon:v.a})},405:function(t,e,n){"use strict";n(6),n(11),n(16),n(17);var r=n(1),c=(n(35),n(9),n(29),n(50),n(383),n(12),n(30),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(34),n(55),n(7),n(65),n(397),n(0)),o=n(170),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var r=n[t],c=h(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},406:function(t,e,n){"use strict";n(6),n(11),n(16),n(17);var r=n(1),c=(n(55),n(75),n(28),n(9),n(29),n(50),n(383),n(12),n(30),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(34),n(7),n(397),n(0)),o=n(170),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=O("align",(function(){return{type:String,default:null,validator:j}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},m=O("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=O("alignContent",(function(){return{type:String,default:null,validator:S}})),_={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(C)},x={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=x[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var V=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:S}},C),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=V.get(l);return d||function(){var t,e;for(e in d=[],_)_[e].forEach((function(t){var r=n[t],c=P(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),V.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},481:function(t,e,n){"use strict";n.r(e);var r={components:{Card:n(381).default}},c=n(81),o=n(104),l=n.n(o),f=n(405),d=n(488),v=n(240),y=n(406),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"py-10"},[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("card",{attrs:{title:"Vuepress Plugins",description:"Find The best Vuepress Plugins and give your Vuepress project\n              superpowers.",icon:"mdi-power-plug"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-img",{attrs:{src:"img/plugins.svg",alt:"Vuepress plugins","max-height":"500",contain:""}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Card:n(381).default}),l()(component,{VCol:f.a,VContainer:d.a,VImg:v.a,VRow:y.a})}}]);