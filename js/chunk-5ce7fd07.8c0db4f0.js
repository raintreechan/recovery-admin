(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ce7fd07"],{"3cbe":function(e,t,i){},"5e9d":function(e,t,i){"use strict";var n=i("3cbe"),s=i.n(n);s.a},7386:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"menuBox",staticClass:"menu-box",style:"top:"+e.clientY+"px;left:"+e.clientX+"px",on:{mousedown:function(e){e.stopPropagation()},click:function(e){e.stopPropagation()}}},[i("ul",e._l(e.menuArr,function(t,n){return i("li",{key:"menu"+n,on:{click:function(i){return i.stopPropagation(),e.listClick(t,n)},contextmenu:function(e){e.preventDefault(),e.stopPropagation()}}},[e._v(e._s(t))])}),0)])},s=[],o=(i("96cf"),i("3b8d")),a=i("d225"),c=i("b0b4"),r=i("308d"),h=i("6bb5"),l=i("4e2b"),d=i("9ab4"),u=i("60a3"),v=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(r["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.clientX=0,e.clientY=0,e.windowW=0,e.windowH=0,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"mouseEvent",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.windowW=window.innerWidth,this.windowH=window.innerHeight,e.next=4,this.$refs.menuBox;case 4:i=e.sent,t.clientX+i.offsetWidth>=this.windowW&&t.clientY+i.offsetHeight>=this.windowH?(this.clientX=this.windowW-i.offsetWidth,this.clientY=this.eventData.clientY-i.offsetHeight):t.clientX+i.offsetWidth>=this.windowW?(this.clientX=this.windowW-i.offsetWidth,this.clientY=this.eventData.clientY):t.clientY+i.offsetHeight>=this.windowH?(this.clientX=this.eventData.clientX,this.clientY=this.eventData.clientY-i.offsetHeight):(this.clientX=this.eventData.clientX,this.clientY=this.eventData.clientY);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"removeBodyClick",value:function(e){if(e){document.addEventListener("contextmenu",this.shade,!1),window.addEventListener("resize",this.shade,!1),document.addEventListener("mousewheel",this.shade,!1),window.addEventListener("mousedown",this.shade,!1),document.addEventListener("visibilitychange",this.shade)}else document.removeEventListener("contextmenu",this.shade,!1),window.removeEventListener("resize",this.shade,!1),document.removeEventListener("mousewheel",this.shade,!1),window.removeEventListener("mousedown",this.shade,!1),document.removeEventListener("visibilitychange",this.shade)}},{key:"shade",value:function(){console.log("测试body点击事件委托"),this.$emit("update:visible",!1)}},{key:"listClick",value:function(e,t){this.shade(),this.$emit("listClick",e,t)}}]),t}(u["d"]);d["a"]([Object(u["b"])({type:Boolean})],v.prototype,"visible",void 0),d["a"]([Object(u["b"])({default:[]})],v.prototype,"menuArr",void 0),d["a"]([Object(u["b"])()],v.prototype,"eventData",void 0),d["a"]([Object(u["e"])("eventData")],v.prototype,"mouseEvent",null),d["a"]([Object(u["e"])("visible")],v.prototype,"removeBodyClick",null),v=d["a"]([Object(u["a"])({components:{}})],v);var w=v,f=w,p=(i("5e9d"),i("2877")),m=Object(p["a"])(f,n,s,!1,null,null,null);t["default"]=m.exports}}]);