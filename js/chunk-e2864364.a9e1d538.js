(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2864364"],{"0a49":function(t,e,r){var a=r("9b43"),n=r("626a"),o=r("4bf8"),i=r("9def"),s=r("cd1c");t.exports=function(t,e){var r=1==t,c=2==t,u=3==t,d=4==t,g=6==t,l=5==t||g,f=e||s;return function(e,s,p){for(var h,m,I=o(e),D=n(I),y=a(s,p,3),T=i(D.length),A=0,v=r?f(e,T):c?f(e,0):void 0;T>A;A++)if((l||A in D)&&(h=D[A],m=y(h,A,I),t))if(r)v[A]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return A;case 2:v.push(h)}else if(d)return!1;return g?-1:u||d?d:v}}},1169:function(t,e,r){var a=r("2d95");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"551a":function(t,e,r){},"5dbc":function(t,e,r){var a=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var o,i=e.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&a(o)&&n&&n(t,o),t}},"67d8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"doc-arrange-item-main-view"},[r("div",{staticClass:"doc-arrange-item"},[t._l(t.currHandleData,function(e,a){return 1===t.timeType?[e.treatItemMenuDataId&&e.treatItemMenuTypeDataId==t.menuTypeId?r("div",{key:a,class:{notallocationbg:0==e.arrangeState,allocationbg:1==e.arrangeState||4==e.arrangeState},staticStyle:{position:"relative"},attrs:{"data-isshare":e.isShare?"1":"0","data-id":t.docInfoItem.treatDoctorDataId},on:{click:function(r){return r.stopPropagation(),t.getTableColumn(e,t.docInfoItem,t.docIndex)},drop:function(e){return t.drag(e,!1)},dragover:function(e){return t.drop(e)},dblclick:function(e){return t.$emit("getInfoClick")}}},[0==e.arrangeState?r("div",{attrs:{"data-isshare":"0"}},[r("span",{attrs:{"data-isshare":"0"}},[t._v(t._s(e.patientInfoText?e.patientInfoText:"")+t._s(e.treatDeviceModelName?"("+e.treatDeviceModelName+")":""))])]):r("div",{staticStyle:{position:"absolute",width:"100%",height:"100%"},attrs:{draggable:"true","data-isshare":e.isShare?"1":"0"},on:{contextmenu:function(r){return t.moreMenu(r,e,t.docInfoItem,e.arrangeDataId,e.patientDataId)},drop:function(r){return t.drag2(r,!1,e)},dragend:function(r){return t.drop2(r,e)},dragstart:function(r){return t.drag3(r,e)}}},[r("p",[r("span",[t._v(t._s(e.patientInfoText?e.patientInfoText:"")+t._s(e.treatDeviceModelName?"("+e.treatDeviceModelName+")":""))])]),t.currentMoreMenu==e.patientDataId+e.arrangeDataId?r("div",{staticClass:"right-menu",style:{left:t.layerX,top:t.layerY}},[r("ul",[r("li",{on:{click:function(e){return e.stopPropagation(),t.$emit("getInfoClick")}}},[t._v("查看医嘱")]),r("li",{on:{click:function(e){return e.stopPropagation(),t.$emit("setReArrangeClick",t.docIndex)}}},[t._v("重新安排治疗")])])]):t._e()])]):t.typeStatus?r("div",{key:a,staticClass:"occupybg",staticStyle:{cursor:"default!important"},attrs:{"data-isshare":e.isShare?"1":"0","data-id":t.docInfoItem.treatDoctorDataId},on:{click:function(e){return e.stopPropagation(),t.$emit("getOccupyCurData",t.occupyCurData)},drop:function(r){return t.drag(r,!1,e)},dragover:function(e){return t.drop(e)}}},[t._v("\n\t\t"+t._s(e.patientInfoText?e.patientInfoText:"")+t._s(e.treatDeviceModelName?"("+e.treatDeviceModelName+")":"")+"\n\t\t\n\t\t")]):r("div",{key:a,staticClass:"notarrangebg",attrs:{"data-isshare":"2","data-id":t.docInfoItem.treatDoctorDataId},on:{drop:function(r){return t.drag(r,!0,e)},dragover:function(e){return t.drop(e)},dragenter:t.defaultEnter,dragleave:t.defaultLeave}})]:r("div",[t._v("空白段")])})],2)])},n=[],o=(r("7514"),r("c5f6"),r("afc3")),i={},s={data:function(){return{currHandleData:[],newArrageItem:[],typeStatus:!1,occupyCurData:{},layerX:0,layerY:0}},props:{startMinute:{type:Number},endMinute:{type:Number},doctreatArrangeInfos:{type:Array},treatDocDataId:{type:String},currMenuMaxExecCount:{type:Number},timeType:{type:Number},unitHeight:{type:Number,default:40},tableHeight:{},docInfoItem:{},menuTypeId:{},treatDurationMinute:{},popper:{type:Boolean,default:!1},timeIndex:{type:Number,default:0},arrangeTimes:{type:Array},currentMoreMenu:{type:String},date:{type:String},docIndex:{type:Number}},watch:{doctreatArrangeInfos:function(t,e){this.newArrageItem=t,this.currHandleData=[],this.occupyCurData={},this.getArrageColumn()}},created:function(){this.newArrageItem=this.doctreatArrangeInfos,this.getArrageColumn()},methods:{defaultEnter:function(t){t.target.className+=" activebgcolor",console.log("进入这个格子")},defaultLeave:function(t){t.target.className="notarrangebg",console.log("离开这个格子")},drag:function(t,e,r){var a=this;if(this.$store.state.drageTarget){if(!e)return this.$message({showClose:!0,message:"请拖拽到浅绿色的格子里进行操作！",type:"error"}),void this.$emit("openCollapse");console.log(t),console.log("当前拖拽目标id为："+t),this.$emit("nllocationHandle",{treatDocDataId:this.treatDocDataId,startMinute:this.startMinute,treatDurationMinute:this.treatDurationMinute,docIndex:this.docIndex}),console.log({treatDocDataId:this.treatDocDataId,startMinute:this.startMinute,treatDurationMinute:this.treatDurationMinute}),t.target.className="notarrangebg",this.$emit("openCollapse")}else{if(console.log(t),console.log(r),console.log("当前拖拽目标是否占用："+t.path[0].dataset.isshare),this.$store.commit("setDrageStatus",t.path[0].dataset.isshare),"0"==t.path[0].dataset.isshare)return this.$message({showClose:!0,message:"请拖拽到浅绿色的格子里进行操作！",type:"error"}),!1;if("2"==t.path[0].dataset.isshare){console.log({treatDocDataId:this.treatDocDataId,startTicks:this.startMinute}),console.log(this.timeIndex),console.log(this.arrangeTimes);var n={};this.arrangeTimes.find(function(t,e){e==a.timeIndex&&(console.log(t),n=t)}),console.log(n);var s={date:this.date,patientId:this.$store.state.addArrangeTrim.patientDataId,startTicks:n.startTicks,minuteLength:n.treatDurationMinute};Object(o["f"])(s).then(function(t){if(console.log(t),console.log(i),t){if(i.startTime==t.startTime.slice(0,5)&&i.endTime==t.endTime.slice(0,5)&&i.startTicks==t.startTicks&&i.treatDurationMinute==t.treatDurationMinute)return a.$store.dispatch("changeDoctorArageStatus",!0),a.$emit("changeDragTarget",{treatDocDataId:a.treatDocDataId,startTicks:a.startMinute}),!1;a.$store.dispatch("changeDoctorArageStatus",!1);var e="已被".concat(t.treatPlanOrderName," ").concat(t.treatDocName,"占用");a.$message({showClose:!0,message:e,type:"warning"})}else a.$store.dispatch("changeDoctorArageStatus",!0),a.$emit("changeDragTarget",{treatDocDataId:a.treatDocDataId,startTicks:a.startMinute})}),t.target.className="notarrangebg"}}},drop:function(t){this.$emit("changeDragTarget",{treatDocDataId:this.treatDocDataId,startTicks:this.startMinute}),t.preventDefault()},allowDrop:function(t){t.preventDefault()},drag2:function(t,e){this.$emit("changeDragTarget",{treatDocDataId:this.treatDocDataId,startTicks:this.startMinute}),this.$store.commit("setDrageStatus","1"),this.$store.state.drageTarget||this.$message({showClose:!0,message:"请拖拽到浅绿色的格子里进行操作！",type:"error"})},drag3:function(t,e){console.log("格子拖拽开始"),this.$store.commit("setDrageTarget",!1),console.log(e),i=e,this.$store.commit("setAddArrangeTrim",{fromArrangeDataId:e.arrangeDataId,fromArrangeFixDataId:e.arrangeFixDataId,patientDataId:e.patientDataId})},drop2:function(t,e){var r=this;this.$store.commit("setDrageTarget",!1),console.log(e),console.log(t),console.log("当前拖拽目标是否占用："+this.$store.state.drageStatus),"2"==this.$store.state.drageStatus&&setTimeout(function(){r.$store.state.doctorArageStatus&&r.$emit("changeDragTargetResult",{treatPlanOrderDataId:e.treatPlanOrderDataId,arrangeDataId:e.arrangeDataId,docIndex:r.docIndex})},100),t.preventDefault()},allowDrop2:function(t){console.log("格子拖拽开始"),t.preventDefault()},getTableColumn:function(t,e){this.$emit("getTableColumn",{item:t,docInfoItem:e,docIndex:this.docIndex})},moreMenu:function(t,e,r,a,n){t.preventDefault(),console.log(a);var o=n+a;this.$emit("getTableColumn",{item:e,docInfoItem:r,rightMenuId:o}),console.log(t);var i=document.body.clientWidth||document.documentElement.clientWidth;console.log("当前可视区域宽度："+i);var s=document.body.clientHeight||document.documentElement.clientHeight;console.log("当前可视区域高度："+s),t.clientX+105>=i-15?(console.log("X轴已在边界"),this.layerX="45px",console.log(this.layerX),this.layerY=t.layerY+"px",t.clientY+66>=s-15&&(this.layerY="-16px")):t.clientY+66>=s-15?(console.log("Y轴已在边界"),this.layerX=t.layerX+"px",this.layerY="-16px"):(this.layerX=t.layerX+"px",this.layerY=t.layerY+"px")},getInfoClick:function(t){console.log(t)},getArrageColumn:function(){if(1===this.timeType){this.newArrageItem&&this.newArrageItem.length>0&&this.newArrageItem.length;for(var t=0;t<this.newArrageItem.length;t++){var e=this.newArrageItem[t],r=e.startTicks+e.treatDurationMinute;if((e.startTicks<=this.startMinute&&r>this.startMinute||e.startTicks>=this.startMinute&&e.startTicks<this.endMinute)&&(this.currHandleData.push(e),!this.typeStatus&&e.treatItemMenuTypeDataId!==this.menuTypeId)){this.typeStatus=!0,this.occupyCurData=e;break}}for(var a=0;this.currHandleData.length<1;a++)this.currHandleData.push({patientInfoText:""})}}}},c=s,u=(r("7a4e"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=d.exports},7514:function(t,e,r){"use strict";var a=r("5ca1"),n=r("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o](function(){i=!1}),a(a.P+a.F*i,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"7a4e":function(t,e,r){"use strict";var a=r("551a"),n=r.n(a);n.a},"8b97":function(t,e,r){var a=r("d3f4"),n=r("cb7c"),o=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:o}},aa77:function(t,e,r){var a=r("5ca1"),n=r("be13"),o=r("79e5"),i=r("fdef"),s="["+i+"]",c="​",u=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),g=function(t,e,r){var n={},s=o(function(){return!!i[t]()||c[t]()!=c}),u=n[t]=s?e(l):i[t];r&&(n[r]=u),a(a.P+a.F*s,"String",n)},l=g.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(d,"")),t};t.exports=g},afc3:function(t,e,r){"use strict";r.d(e,"h",function(){return n}),r.d(e,"k",function(){return o}),r.d(e,"f",function(){return i}),r.d(e,"g",function(){return s}),r.d(e,"b",function(){return c}),r.d(e,"o",function(){return u}),r.d(e,"d",function(){return d}),r.d(e,"c",function(){return g}),r.d(e,"t",function(){return l}),r.d(e,"q",function(){return f}),r.d(e,"s",function(){return p}),r.d(e,"l",function(){return h}),r.d(e,"u",function(){return m}),r.d(e,"p",function(){return I}),r.d(e,"n",function(){return D}),r.d(e,"j",function(){return y}),r.d(e,"m",function(){return T}),r.d(e,"i",function(){return A}),r.d(e,"a",function(){return v}),r.d(e,"e",function(){return M}),r.d(e,"r",function(){return b});var a=r("eabe");function n(t){return a["a"].get("/api/treatArrange/treatArrange/getDoctorArrange",t)}function o(t){return a["a"].get("/api/visit/TreatPlanOrders/GetNotArrangedList",t)}function i(t){return a["a"].get("/api/treatArrange/TreatArrange/GetCurrTimeArrangeByPatientId",t)}function s(t){return a["a"].get("/api/treatArrange/TreatArrange/GetDocIdleTimeListByMenuId",t)}function c(t){return a["a"].post("/api/treatArrange/TreatArrange/ArrangeTreatToDoctor",t)}function u(t){return a["a"].get("/api/visit/TreatPlanOrders/GetTreatPlanOrderInfo",t)}function d(t){return a["a"].get("/api/treatArrange/TreatArrange/GetArrangeInfo",t)}function g(t){return a["a"].post("/api/treatArrange/TreatArrange/ConfirmArrange",t)}function l(t){return a["a"].post("/api/treatArrange/TreatArrange/RejectArrange",t)}function f(t){return a["a"].get("/api/hosp/Users/GetUsersByTreatMenuId",t)}function p(t){return a["a"].post("/api/treatArrange/TreatArrange/ReArrangeTreatToDoctor",t)}function h(t){return a["a"].get("/api/msg/Messages/GetTodayMyStopOrderMsg",t)}function m(t){return a["a"].post("/api/msg/Messages/SetReceivedMsgRead",t)}function I(t){return a["a"].get("/api/treatArrange/TreatArrange/GetUnarrangedCount",t)}function D(t){return a["a"].get("/api/treatArrange/treatArrange/getTreatArrangeMenuTypeCounts",t)}function y(){return a["a"].get("/api/hosp/Users/GetMyTreatMenuDistinctMenu")}function T(t){return a["a"].get("/api/treatArrange/TreatArrange/GetSingleMyTreatArrange",t)}function A(){return a["a"].get("/api/visit/TreatPlanExec/GetMyTodayTreatExecRecordByNone")}function v(t){return a["a"].post("/api/treatArrange/TreatArrange/AddArrangeTrim",t)}function M(){return a["a"].get("/api/treatArrange/TreatArrange/GetCurrDateToMeUntreatedArrangeTrimList")}function b(t){return a["a"].post("/api/treatArrange/TreatArrange/HandleArrangeTrim",t)}},c5f6:function(t,e,r){"use strict";var a=r("7726"),n=r("69a8"),o=r("2d95"),i=r("5dbc"),s=r("6a99"),c=r("79e5"),u=r("9093").f,d=r("11e9").f,g=r("86cc").f,l=r("aa77").trim,f="Number",p=a[f],h=p,m=p.prototype,I=o(r("2aeb")(m))==f,D="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=D?e.trim():l(e,3);var r,a,n,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var i,c=e.slice(2),u=0,d=c.length;u<d;u++)if(i=c.charCodeAt(u),i<48||i>n)return NaN;return parseInt(c,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(I?c(function(){m.valueOf.call(r)}):o(r)!=f)?i(new h(y(e)),r,p):y(e)};for(var T,A=r("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;A.length>v;v++)n(h,T=A[v])&&!n(p,T)&&g(p,T,d(h,T));p.prototype=m,m.constructor=p,r("2aba")(a,f,p)}},cd1c:function(t,e,r){var a=r("e853");t.exports=function(t,e){return new(a(t))(e)}},e853:function(t,e,r){var a=r("d3f4"),n=r("1169"),o=r("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),a(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);