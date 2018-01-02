webpackJsonp([0],[,,,,function(t,n,e){"use strict";var o=e(0);n.a={components:{QTabs:o.k,QTab:o.j,QBtn:o.a,QLayout:o.f,QToolbar:o.l,QToolbarTitle:o.m,QRouteTab:o.i,QList:o.g,QItemSide:o.e,QListHeader:o.h,QItem:o.c,QItemMain:o.d,QIcon:o.b},data:function(){return{}},methods:{selectThirdTab:function(){this.selectedTab="tab-3"},navigate:function(){}}}},function(t,n,e){"use strict";var o=e(0);n.a={components:{QTabs:o.k,QTab:o.j,QBtn:o.a,QLayout:o.f,QToolbar:o.l,QToolbarTitle:o.m,QRouteTab:o.i,QList:o.g,QItemSide:o.e,QListHeader:o.h,QItem:o.c,QItemMain:o.d,QIcon:o.b},data:function(){return{}}}},function(t,n,e){"use strict";var o=e(0);n.a={components:{QBtn:o.a},data:function(){return{mediaStream:null}},mounted:function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0}).then(function(n){t.mediaStream=n,t.$refs.video.srcObject=n,t.$refs.video.play()}).catch(function(t){return console.error("getUserMedia() error:",t)})},destroyed:function(){this.mediaStream.getTracks().map(function(t){return t.stop()})},methods:{capture:function(){var t=this.mediaStream.getVideoTracks()[0],n=new window.ImageCapture(t);console.log("Img",t,n)}}}},function(t,n,e){"use strict";var o=e(0);n.a={directives:{TouchSwipe:o.n},components:{QTabs:o.k,QTab:o.j,QBtn:o.a,QLayout:o.f,QToolbar:o.l,QToolbarTitle:o.m,QRouteTab:o.i,QList:o.g,QItemSide:o.e,QListHeader:o.h,QItem:o.c,QItemMain:o.d,QIcon:o.b},methods:{swipePage:function(t){console.log(t.direction),console.log(t.duration),console.log(t.distance.x),console.log(this.$router.currentRoute.name,this.$refs.layout)},changeTab:function(t){console.log("test",t),this.title=t}},data:function(){return{title:this.$router.currentRoute.name}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),s=e(0),i=e(14),a=e(28),c=(e.n(a),e(30)),u=(e.n(c),e(32)),r=(e.n(u),e(34));e.n(r);e(9),o.a.config.productionTip=!1,o.a.use(s.o),e(26),new o.a({el:"#q-app",router:i.a,render:function(t){return t(e(112).default)}})},function(t,n){},,,,,function(t,n,e){"use strict";var o=e(2),s=e(15),i=e(16),a=e(20),c=e(23);o.a.use(s.a),n.a=new s.a({routes:[{path:"/",component:i.a,name:"Fotos"},{path:"/about",component:a.a,name:"Notificações"},{path:"/camera",name:"Camera",component:c.a}]})},,function(t,n,e){"use strict";function o(t){e(17)}var s=e(4),i=e(18),a=e(1),c=o,u=a(s.a,i.a,!1,c,null,null);n.a=u.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"layout-page-container layout-padding page-showcase"},[o("div",{staticClass:"showcase-top text-center"},[o("img",{attrs:{src:e(19)}}),t._v(" "),o("p",{staticClass:"caption"},[t._v("\n      Use sidebar to browse through demos, which showcase only a few of the Quasar components and features.\n      "),o("br"),t._v("\n      For a full list, visit the documentation website.\n    ")])])])}],i={render:o,staticRenderFns:s};n.a=i},function(t,n,e){t.exports=e.p+"img/quasar-logo-full.c3e8865.svg"},function(t,n,e){"use strict";function o(t){e(21)}var s=e(5),i=e(22),a=e(1),c=o,u=a(s.a,i.a,!1,c,null,null);n.a=u.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-layout",{ref:"layout",attrs:{view:"hHr LpR lFf"}},[e("q-toolbar",{attrs:{slot:"header"},slot:"header"},[e("q-btn",{attrs:{flat:""},on:{click:function(n){t.$refs.layout.toggleLeft()}}},[e("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),e("q-toolbar-title",[t._v("\n        About\n        "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Optional subtitle")])])],1),t._v(" "),e("q-tabs",{attrs:{slot:"navigation",align:"justify"},slot:"navigation"},[e("q-route-tab",{attrs:{slot:"title",icon:"view_day",to:"/",replace:"",label:"Toolbar"},slot:"title"}),t._v(" "),e("q-route-tab",{attrs:{slot:"title",icon:"view_quilt",to:"/about",replace:"",label:"About"},slot:"title"}),t._v(" "),e("q-route-tab",{attrs:{slot:"title",icon:"view_day",to:"/layout/tabs",replace:"",label:"Tabs"},slot:"title"}),t._v(" "),e("q-route-tab",{attrs:{slot:"title",icon:"input",to:"/layout/drawer",replace:"",label:"Drawer"},slot:"title"})],1),t._v(" "),e("router-view")],1)},s=[],i={render:o,staticRenderFns:s};n.a=i},function(t,n,e){"use strict";function o(t){e(24)}var s=e(6),i=e(25),a=e(1),c=o,u=a(s.a,i.a,!1,c,"data-v-c27e6e04",null);n.a=u.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fullscreen-bg"},[e("video",{ref:"video",staticClass:"fullscreen-bg__video"}),t._v(" "),e("q-btn",{attrs:{outline:"",round:"",color:"primary"},on:{click:t.capture}},[e("i",{staticClass:"q-icon material-icons",attrs:{"aria-hidden":"true"}},[t._v("camera")])])],1)},s=[],i={render:o,staticRenderFns:s};n.a=i},,function(t,n){},,function(t,n){},,function(t,n){},,function(t,n){},,function(t,n,e){function o(t){return e(s(t))}function s(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var i={"./bounce.css":36,"./bounceIn.css":37,"./bounceInDown.css":38,"./bounceInLeft.css":39,"./bounceInRight.css":40,"./bounceInUp.css":41,"./bounceOut.css":42,"./bounceOutDown.css":43,"./bounceOutLeft.css":44,"./bounceOutRight.css":45,"./bounceOutUp.css":46,"./fadeIn.css":47,"./fadeInDown.css":48,"./fadeInDownBig.css":49,"./fadeInLeft.css":50,"./fadeInLeftBig.css":51,"./fadeInRight.css":52,"./fadeInRightBig.css":53,"./fadeInUp.css":54,"./fadeInUpBig.css":55,"./fadeOut.css":56,"./fadeOutDown.css":57,"./fadeOutDownBig.css":58,"./fadeOutLeft.css":59,"./fadeOutLeftBig.css":60,"./fadeOutRight.css":61,"./fadeOutRightBig.css":62,"./fadeOutUp.css":63,"./fadeOutUpBig.css":64,"./flash.css":65,"./flip.css":66,"./flipInX.css":67,"./flipInY.css":68,"./flipOutX.css":69,"./flipOutY.css":70,"./headShake.css":71,"./hinge.css":72,"./jello.css":73,"./lightSpeedIn.css":74,"./lightSpeedOut.css":75,"./pulse.css":76,"./rollIn.css":77,"./rollOut.css":78,"./rotateIn.css":79,"./rotateInDownLeft.css":80,"./rotateInDownRight.css":81,"./rotateInUpLeft.css":82,"./rotateInUpRight.css":83,"./rotateOut.css":84,"./rotateOutDownLeft.css":85,"./rotateOutDownRight.css":86,"./rotateOutUpLeft.css":87,"./rotateOutUpRight.css":88,"./rubberBand.css":89,"./shake.css":90,"./slideInDown.css":91,"./slideInLeft.css":92,"./slideInRight.css":93,"./slideInUp.css":94,"./slideOutDown.css":95,"./slideOutLeft.css":96,"./slideOutRight.css":97,"./slideOutUp.css":98,"./swing.css":99,"./tada.css":100,"./wobble.css":101,"./zoomIn.css":102,"./zoomInDown.css":103,"./zoomInLeft.css":104,"./zoomInRight.css":105,"./zoomInUp.css":106,"./zoomOut.css":107,"./zoomOutDown.css":108,"./zoomOutLeft.css":109,"./zoomOutRight.css":110,"./zoomOutUp.css":111};o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id=35},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";function o(t){e(113)}Object.defineProperty(n,"__esModule",{value:!0});var s=e(7),i=e(114),a=e(1),c=o,u=a(s.a,i.a,!1,c,null,null);n.default=u.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.horizontal.scroll",value:t.swipePage,expression:"swipePage",modifiers:{horizontal:!0,scroll:!0}}],attrs:{id:"q-app"}},[e("q-layout",{ref:"layout",attrs:{view:"hHr LpR lFf"}},[e("q-toolbar",{attrs:{slot:"header"},slot:"header"},[e("q-btn",{attrs:{flat:""},on:{click:function(n){t.$refs.layout.toggleLeft()}}},[e("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),e("q-toolbar-title",[t._v("\n        APPIER NEW YEAR\n        "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.title))])])],1),t._v(" "),e("div",{attrs:{slot:"left"},slot:"left"},[e("q-item",[e("q-item-side",{attrs:{icon:"rss feed"}}),t._v(" "),e("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1),t._v(" "),e("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[e("q-list-header",[t._v("Essential Links")]),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"school"}}),t._v(" "),e("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"record_voice_over"}}),t._v(" "),e("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"chat"}}),t._v(" "),e("q-item-main",{attrs:{label:"Gitter Channel",sublabel:"Quasar Lobby"}})],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"rss feed"}}),t._v(" "),e("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),t._v(" "),e("main",{staticClass:"transition-generic"},[e("router-view")],1),t._v(" "),e("q-tabs",{attrs:{slot:"footer",align:"justify",position:"bottom"},slot:"footer"},[e("q-route-tab",{attrs:{slot:"title",exact:"",icon:"view_day",to:"/",replace:"",label:"Fotos"},on:{click:function(n){t.changeTab("Fotos")}},slot:"title"}),t._v(" "),e("q-route-tab",{attrs:{slot:"title",exact:"",icon:"camera_alt",to:"/camera",replace:"",label:"Camara"},on:{click:function(n){t.changeTab("Camara")}},slot:"title"}),t._v(" "),e("q-route-tab",{attrs:{slot:"title",exact:"",icon:"view_day",to:"/about",replace:"",label:"Tabs"},on:{click:function(n){t.changeTab("Notificações")}},slot:"title"})],1)],1)],1)},s=[],i={render:o,staticRenderFns:s};n.a=i}],[8]);