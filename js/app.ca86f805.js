(function(t){function e(e){for(var n,r,s=e[0],d=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var d=a[s];0!==i[d]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/board-prototype/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1cd9":function(t,e,a){},2345:function(t,e,a){"use strict";var n=a("8b63"),i=a.n(n);i.a},3660:function(t,e,a){"use strict";var n=a("1cd9"),i=a.n(n);i.a},5033:function(t){t.exports=JSON.parse('{"nominated":[],"qualified":[],"notQualified":[],"interview":[],"notAssessed":[{"id":9482,"firstName":"Alexander","lastName":"Schmidt","title":"Webforms dev","age":26,"applicationDate":"$date(\'2019-08-12 14:51:06\')","email":"test@test.no","birthday":"01.01.2000","phone":"123456789"},{"id":10481,"firstName":"Morten","lastName":"André Lines","title":"Arbeidsledig","age":34,"applicationDate":"$date(\'2019-10-14 13:19:39\')","email":"test@test.no","birthday":"01.01.2000","phone":"123456789"},{"id":10482,"firstName":"Lars","lastName":"André Lines","title":"Arbeidsledig","age":34,"applicationDate":"$date(\'2019-10-14 13:19:39\')","email":"test@test.no","birthday":"01.01.2000","phone":"123456789"},{"id":10483,"firstName":"Vilje","lastName":"André Lines","title":"Arbeidsledig","age":34,"applicationDate":"$date(\'2019-10-14 13:19:39\')","email":"test@test.no","birthday":"01.01.2000","phone":"123456789"},{"id":10484,"firstName":"Emmy","lastName":"André Lines","title":"Arbeidsledig","age":34,"applicationDate":"$date(\'2019-10-14 13:19:39\')","email":"test@test.no","birthday":"01.01.2000","phone":"123456789"}],"hired":[],"icons":{"birthday":"calendar-alt","title":"briefcase","email":"envelope","phone":"phone"}}')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppBar"),a("Content",[a("SideBar"),a("BoardComponent")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board-view"},[a("div",{staticClass:"hired",class:{active:t.hasHiredCandidate()}},[a("div",{staticClass:"head"},[t._v("Ansatt")]),a("div",{staticClass:"candidates"},[0===t.globalState.candidates.hired.length?a("div",[t._v("Stillingen er ikke besatt")]):t._e(),t._l(t.globalState.candidates.hired,(function(e){return a("JnJobseekerMiniCard",t._b({key:e.key,staticClass:"candidate"},"JnJobseekerMiniCard",e,!1))}))],2)]),a("div",{staticClass:"sortButtons"},[a("p",[t._v("Sortering:")]),t._l(t.ordering.buttons,(function(e){return a("ToggleButton",t._b({key:e.orderProperty,staticClass:"toggleButton",attrs:{action:function(a){return t.setOrdering(e.orderProperty,a)}}},"ToggleButton",e,!1),[t._v(t._s(e.text))])}))],2),a("div",{staticClass:"board pointer"},[a("JnBoardList",t._b({attrs:{name:"Til vurdering",items:t.globalState.candidates.notAssessed,draggableGroup:t.boardGroup},on:{draggableChanged:function(e){return t.listChanged(e,"notAssessed")},draggableItemClicked:function(e){return t.openModal(e)}},scopedSlots:t._u([{key:"button",fn:function(){return[t.globalState.candidates.notAssessed.length>0?a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$router.push({name:"assessment"})}}},[t._v("Til vurdering")]):t._e()]},proxy:!0}])},"JnBoardList",t.ordering,!1)),a("JnBoardList",t._b({attrs:{name:"Kvalifisert",items:t.globalState.candidates.qualified,draggableGroup:t.boardGroup},on:{draggableChanged:function(e){return t.listChanged(e,"qualified")}},scopedSlots:t._u([{key:"button",fn:function(){return[t.globalState.candidates.qualified.length>0?a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$router.push({name:"interview"})}}},[t._v("Innkalle til intervju")]):t._e()]},proxy:!0}])},"JnBoardList",t.ordering,!1)),a("JnBoardList",t._b({staticClass:"notqualified",attrs:{name:"Ikke Kvalifisert",items:t.globalState.candidates.notQualified,draggableGroup:t.boardGroup},on:{draggableChanged:function(e){return t.listChanged(e,"notQualified")}}},"JnBoardList",t.ordering,!1)),a("JnBoardList",t._b({attrs:{name:"Intervju",items:t.globalState.candidates.interview,draggableGroup:t.boardGroup},on:{draggableChanged:function(e){return t.listChanged(e,"interview")}}},"JnBoardList",t.ordering,!1)),a("JnBoardList",t._b({attrs:{name:"Innstillinger",items:t.globalState.candidates.nominated,draggableGroup:t.boardGroup},on:{draggableChanged:function(e){return t.listChanged(e,"nominated")}}},"JnBoardList",t.ordering,!1))],1),a("CandidateModal",{attrs:{modalData:t.modalData},on:{ok:t.resolveModal},scopedSlots:t._u([{key:"modalHeader",fn:function(){return[a("p",[t._v("Header")]),a("p",[t._v(t._s(t.selectedCandidate))])]},proxy:!0},{key:"modalBody",fn:function(){return[a("p",[t._v("alt av detaljer inn her")])]},proxy:!0}])})],1)},s=[],d=(a("4160"),a("159b"),a("5738")),l=a("8885"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",class:{active:t.isActive},attrs:{type:"button"},on:{click:t.filter}},[t.activeIcon&&"left"===t.placement?a("fa-icon",{attrs:{size:"lg",icon:["fal",t.activeIcon]}}):t._e(),t._t("default"),t.activeIcon&&"right"===t.placement?a("fa-icon",{attrs:{size:"lg",icon:["fal",t.activeIcon]}}):t._e()],2)},u=[],p={name:"JnToggleButton",props:{ascIcon:{type:String,default:"sort-alpha-up"},descIcon:{type:String,default:"sort-alpha-down-alt"},placement:{type:String,default:"left"},action:Function,defaultDirection:{type:String,default:"asc"},isActive:Boolean},data:function(){return{activeIcon:"asc"===this.defaultDirection?this.ascIcon:this.descIcon,direction:void 0}},methods:{filter:function(){this.direction?"desc"===this.direction?this.direction="asc":this.direction="desc":this.direction=this.defaultDirection,this.activeIcon="asc"===this.direction?this.ascIcon:this.descIcon,this.action(this.direction)}}},f=p,h=(a("a1c5"),a("2877")),b=Object(h["a"])(f,c,u,!1,null,"5ad64bea",null),g=b.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("JnDialogComponent",t._b({on:{resolveModal:function(e){return t.$emit("ok",e)}},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("modalHeader")]},proxy:!0},{key:"body",fn:function(){return[t._t("modalBody")]},proxy:!0}],null,!0)},"JnDialogComponent",t.modalData,!1))},v=[],y=a("79d6"),C={name:"CandidateModal",components:{JnDialogComponent:y["a"]},props:{modalData:Object}},_=C,A=Object(h["a"])(_,m,v,!1,null,"78cd3953",null),x=A.exports,w=(a("c975"),a("a434"),a("d4ec")),O=a("bee2"),k=a("5033"),B=function(){function t(){Object(w["a"])(this,t),this.state={candidates:k}}return Object(O["a"])(t,[{key:"setCandidates",value:function(t){this.state.candidates=t}},{key:"addCandidate",value:function(t,e,a){this.state.candidates[t].splice(a,0,e),this.setNominationNumbers()}},{key:"removeCandidate",value:function(t,e){e.label=null;var a=this.state.candidates[t].indexOf(e);this.state.candidates[t].splice(a,1),this.setNominationNumbers()}},{key:"moveCandidate",value:function(t,e,a){this.state.candidates[t].splice(a,0,this.state.candidates[t].splice(e,1)[0]),this.setNominationNumbers()}},{key:"setNominationNumbers",value:function(){this.state.candidates["nominated"].forEach((function(t,e){return t.label="Nr.".concat(e+1)}))}}]),t}(),S=new B,I={name:"BoardComponent",components:{ToggleButton:g,JnBoardList:d["a"],JnJobseekerMiniCard:l["a"],CandidateModal:x},data:function(){return{boardGroup:"candidates",selectedCandidate:{},modalData:{modalId:"fluffModal",display:!1,modalTitle:"",modalBody:"",size:"",rejectButton:{visible:!1,text:""},resolveButton:{visible:!0,text:"Fluff OK"}},globalState:S.state,ordering:{direction:null,orderby:null,buttons:[{text:"Ingen",orderProperty:null,ascIcon:null,descIcon:null,isActive:!0},{text:"Alfabetisk",orderProperty:"firstName"},{text:"Alder",orderProperty:"age",ascIcon:"sort-numeric-up",descIcon:"sort-numeric-down-alt"},{text:"Screening score",orderProperty:"points",defaultDirection:"desc",descIcon:"sort-numeric-down-alt",ascIcon:"sort-numeric-up"},{text:"Mottatt søknad",orderProperty:"applicationDate",defaultDirection:"desc",descIcon:"long-arrow-down",ascIcon:"long-arrow-up"}]}}},methods:{hasHiredCandidate:function(){return this.globalState.candidates.hired&&this.globalState.candidates.hired.length>0},setOrdering:function(t,e){this.ordering.buttons.forEach((function(e){return e.isActive=e.orderProperty===t})),this.ordering.orderby=t,this.ordering.direction=e},setActive:function(){},listChanged:function(t,e){this.setOrdering(null,null),console.info(t),Object.prototype.hasOwnProperty.call(t,"added")?S.addCandidate(e,t.added.element,t.added.newIndex):Object.prototype.hasOwnProperty.call(t,"removed")?S.removeCandidate(e,t.removed.element):Object.prototype.hasOwnProperty.call(t,"moved")&&(this.setOrdering(null,null),S.moveCandidate(e,t.moved.oldIndex,t.moved.newIndex))},openModal:function(t){this.modalData.display=!0,this.selectedCandidate=t},resolveModal:function(){this.modalData.display=!1}}},M=I,j=(a("bae8"),Object(h["a"])(M,r,s,!1,null,"04d4f880",null)),J=j.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("Logo"),a("h1",{staticClass:"title"},[t._v("Demo")])],1)},N=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{width:"auto",height:"80%",fill:"#fff"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 162.15 65.77"}},[a("title",[t._v("Jobbnorge logo vit RGB")]),a("path",{staticClass:"cls-1",attrs:{d:"M8.14,59.63a.58.58,0,0,1-.4-.17.56.56,0,0,1,0-.79l8.83-8.83a.57.57,0,0,1,.8,0,.56.56,0,0,1,0,.79L8.54,59.46A.58.58,0,0,1,8.14,59.63Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M50.29,44.4A19.76,19.76,0,1,1,51.45,24h1.26A20.89,20.89,0,1,0,51.63,44.4Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M33.83,41.31a7.06,7.06,0,0,1-2.42-.4,4.81,4.81,0,0,1-2-1.35l1.35-2.22a5.27,5.27,0,0,0,1.2,1,3.2,3.2,0,0,0,1.65.41,2.79,2.79,0,0,0,2.13-.82,3,3,0,0,0,.79-2.2V24.34h2.93v11.4A6.61,6.61,0,0,1,39,38.21,4.69,4.69,0,0,1,37.86,40a4.89,4.89,0,0,1-1.79,1A7.35,7.35,0,0,1,33.83,41.31Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M48.38,41.31a6.24,6.24,0,0,1-2.57-.5,5.84,5.84,0,0,1-2-1.36,5.73,5.73,0,0,1-1.23-2,7.22,7.22,0,0,1,0-4.91,5.92,5.92,0,0,1,1.23-2,5.84,5.84,0,0,1,2-1.36,6.24,6.24,0,0,1,2.57-.5,6.35,6.35,0,0,1,2.6.5,5.7,5.7,0,0,1,2,1.36,5.79,5.79,0,0,1,1.24,2,7.22,7.22,0,0,1,0,4.91,5.61,5.61,0,0,1-1.24,2,5.7,5.7,0,0,1-2,1.36A6.35,6.35,0,0,1,48.38,41.31Zm0-2.32a3.25,3.25,0,0,0,1.5-.33,3.34,3.34,0,0,0,1.1-.87,3.79,3.79,0,0,0,.68-1.29A5.21,5.21,0,0,0,51.88,35a5.08,5.08,0,0,0-.22-1.52A3.74,3.74,0,0,0,51,32.16a3.34,3.34,0,0,0-1.1-.87,3.25,3.25,0,0,0-1.5-.33,3.18,3.18,0,0,0-1.47.33,3.24,3.24,0,0,0-1.1.87,3.74,3.74,0,0,0-.68,1.28A5.08,5.08,0,0,0,44.91,35a5.21,5.21,0,0,0,.22,1.54,3.79,3.79,0,0,0,.68,1.29,3.24,3.24,0,0,0,1.1.87A3.18,3.18,0,0,0,48.38,39Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M57.26,41V24.34h2.62v6.27a5.12,5.12,0,0,1,1.73-1.46,4.64,4.64,0,0,1,2.15-.51,5.13,5.13,0,0,1,2.14.45,5,5,0,0,1,1.7,1.27,6.13,6.13,0,0,1,1.11,2,9,9,0,0,1,0,5.3,5.88,5.88,0,0,1-1.11,2,4.94,4.94,0,0,1-1.7,1.24,5.45,5.45,0,0,1-2.14.42,4.6,4.6,0,0,1-2.19-.52,5.27,5.27,0,0,1-1.69-1.43V41Zm2.62-3.62a3.41,3.41,0,0,0,1.3,1.14A4,4,0,0,0,63,39a3.31,3.31,0,0,0,1.42-.3,3.26,3.26,0,0,0,1.08-.83,3.65,3.65,0,0,0,.69-1.26A5.18,5.18,0,0,0,66.41,35a5.24,5.24,0,0,0-.24-1.62,3.79,3.79,0,0,0-.69-1.27,3.16,3.16,0,0,0-1.08-.84A3.31,3.31,0,0,0,63,31a3.25,3.25,0,0,0-.91.14,4.52,4.52,0,0,0-.88.36,4,4,0,0,0-.74.53,3.61,3.61,0,0,0-.57.62Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M71.78,41V24.34h2.63v6.27a5.09,5.09,0,0,1,1.72-1.46,4.69,4.69,0,0,1,2.15-.51,5.1,5.1,0,0,1,2.14.45,4.84,4.84,0,0,1,1.7,1.27,5.79,5.79,0,0,1,1.11,2,9,9,0,0,1,0,5.3,5.57,5.57,0,0,1-1.11,2,4.76,4.76,0,0,1-1.7,1.24,5.41,5.41,0,0,1-2.14.42,4.53,4.53,0,0,1-2.18-.52,5.16,5.16,0,0,1-1.69-1.43V41Zm2.63-3.62a3.26,3.26,0,0,0,1.3,1.14,3.88,3.88,0,0,0,1.8.46,3.24,3.24,0,0,0,1.41-.3A3.2,3.2,0,0,0,80,37.86a3.65,3.65,0,0,0,.69-1.26A5.49,5.49,0,0,0,80.93,35a5.56,5.56,0,0,0-.23-1.62A3.79,3.79,0,0,0,80,32.1a3.1,3.1,0,0,0-1.09-.84,3.24,3.24,0,0,0-1.41-.3,3.19,3.19,0,0,0-.91.14,4.52,4.52,0,0,0-.88.36A4.41,4.41,0,0,0,75,32a4,4,0,0,0-.56.62Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M94.46,41V33.46a2.44,2.44,0,0,0-.66-1.95A2.71,2.71,0,0,0,92,31a3.44,3.44,0,0,0-1.83.5,4.42,4.42,0,0,0-1.27,1.13V41H86.31V28.94h2.62v1.65a5,5,0,0,1,.74-.7,5.67,5.67,0,0,1,1-.63,6.47,6.47,0,0,1,1.17-.45,5,5,0,0,1,1.36-.17,3.46,3.46,0,0,1,3.9,3.87V41Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M105.93,41.31a6.27,6.27,0,0,1-2.57-.5,5.7,5.7,0,0,1-2-1.36,5.61,5.61,0,0,1-1.24-2,7.22,7.22,0,0,1,0-4.91,5.79,5.79,0,0,1,1.24-2,5.7,5.7,0,0,1,2-1.36,6.93,6.93,0,0,1,5.17,0,5.74,5.74,0,0,1,2,1.36,5.92,5.92,0,0,1,1.23,2,7.22,7.22,0,0,1,0,4.91,5.69,5.69,0,0,1-3.2,3.39A6.32,6.32,0,0,1,105.93,41.31Zm0-2.32a3.27,3.27,0,0,0,2.6-1.2,3.79,3.79,0,0,0,.68-1.29,5.21,5.21,0,0,0,.22-1.54,5.08,5.08,0,0,0-.22-1.52,3.74,3.74,0,0,0-.68-1.28,3.27,3.27,0,0,0-2.6-1.2,3.18,3.18,0,0,0-1.47.33,3.34,3.34,0,0,0-1.1.87,3.74,3.74,0,0,0-.68,1.28,5.08,5.08,0,0,0-.22,1.52,5.21,5.21,0,0,0,.22,1.54,3.79,3.79,0,0,0,.68,1.29,3.34,3.34,0,0,0,1.1.87A3.18,3.18,0,0,0,105.93,39Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M114.81,41V28.94h2.63v1.77a5.62,5.62,0,0,1,1.7-1.46,4.39,4.39,0,0,1,2.22-.59v2.6a4,4,0,0,0-.82-.07,3.39,3.39,0,0,0-.88.12,5.13,5.13,0,0,0-.89.35,4.38,4.38,0,0,0-.78.51,2.41,2.41,0,0,0-.55.62V41Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M128.64,45.91a9.07,9.07,0,0,1-2.74-.38,6.38,6.38,0,0,1-2.31-1.42l1.22-1.9a3.91,3.91,0,0,0,1.68,1.2,6,6,0,0,0,2.15.35,5,5,0,0,0,1.28-.16,3.14,3.14,0,0,0,1.15-.55,2.84,2.84,0,0,0,.83-1,3.45,3.45,0,0,0,.31-1.55V39a5.6,5.6,0,0,1-1.69,1.45,4.44,4.44,0,0,1-2.18.55,5.59,5.59,0,0,1-2.14-.41,4.78,4.78,0,0,1-1.7-1.2,5.51,5.51,0,0,1-1.11-1.94,8,8,0,0,1-.4-2.65,7.86,7.86,0,0,1,.4-2.61,5.43,5.43,0,0,1,1.11-2,5,5,0,0,1,1.69-1.21,5.36,5.36,0,0,1,2.15-.42,4.69,4.69,0,0,1,2.15.51,5.09,5.09,0,0,1,1.72,1.46V28.94h2.63V40.39a6,6,0,0,1-.55,2.7,4.72,4.72,0,0,1-1.44,1.7,5.57,5.57,0,0,1-2,.87A9.75,9.75,0,0,1,128.64,45.91Zm.47-7.2a3.61,3.61,0,0,0,.91-.12,4.49,4.49,0,0,0,.88-.35,4.36,4.36,0,0,0,.75-.52,3,3,0,0,0,.56-.63v-4.5a3.62,3.62,0,0,0-.56-.63,4.36,4.36,0,0,0-.75-.52,3.94,3.94,0,0,0-.88-.35,3.23,3.23,0,0,0-.91-.13A3.14,3.14,0,0,0,126.62,32a4.18,4.18,0,0,0-.91,2.82,4.17,4.17,0,0,0,.91,2.81A3.11,3.11,0,0,0,129.11,38.71Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M143.56,41.31a6.87,6.87,0,0,1-2.51-.45,5.81,5.81,0,0,1-3.34-3.3,7.19,7.19,0,0,1,0-5.06,6,6,0,0,1,5.67-3.86,6.05,6.05,0,0,1,2.45.48,5.49,5.49,0,0,1,1.88,1.38,6.61,6.61,0,0,1,1.2,2.09,7.87,7.87,0,0,1,.42,2.62v.63H140a4.13,4.13,0,0,0,.36,1.29,3.52,3.52,0,0,0,.77,1.06,3.57,3.57,0,0,0,1.18.71,4.18,4.18,0,0,0,1.54.26,5.53,5.53,0,0,0,1.82-.33,4.34,4.34,0,0,0,1.6-1l1.2,1.72a5.76,5.76,0,0,1-2.17,1.32A8.4,8.4,0,0,1,143.56,41.31Zm3.2-7.32a4.13,4.13,0,0,0-.22-1.1,3.06,3.06,0,0,0-.62-1,3.21,3.21,0,0,0-1-.76,3.54,3.54,0,0,0-1.53-.3,3.25,3.25,0,0,0-2.49,1,3.57,3.57,0,0,0-.63,1A4.06,4.06,0,0,0,140,34Z"}})])},P=[],Z={name:"Logo"},$=Z,V=Object(h["a"])($,L,P,!1,null,"7e3238a2",null),G=V.exports,E={name:"AppBar",components:{Logo:G}},T=E,H=(a("3660"),Object(h["a"])(T,D,N,!1,null,"c7d1249a",null)),q=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[t._t("default")],2)},K=[],Q=(a("2345"),{}),F=Object(h["a"])(Q,z,K,!1,null,"6265fc3f",null),R=F.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"})},U=[],X=(a("e38c"),{}),Y=Object(h["a"])(X,W,U,!1,null,"14fbc2de",null),tt=Y.exports,et={name:"App",components:{BoardComponent:J,AppBar:q,SideBar:tt,Content:R}},at=et,nt=Object(h["a"])(at,i,o,!1,null,null,null),it=nt.exports,ot=(a("c4bc"),a("ad3d")),rt=a("e018"),st=a("584e"),dt=a("ecee");dt["c"].add(rt["a"],rt["c"],st["g"],st["f"],rt["b"],st["a"],st["e"],st["d"],st["c"],st["b"]),n["a"].component("fa-icon",ot["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(it)}}).$mount("#app")},7348:function(t,e,a){},"8b63":function(t,e,a){},9712:function(t,e,a){},a1c5:function(t,e,a){"use strict";var n=a("9712"),i=a.n(n);i.a},bae8:function(t,e,a){"use strict";var n=a("7348"),i=a.n(n);i.a},c4bc:function(t,e,a){},e38c:function(t,e,a){"use strict";var n=a("fa52"),i=a.n(n);i.a},fa52:function(t,e,a){}});
//# sourceMappingURL=app.ca86f805.js.map