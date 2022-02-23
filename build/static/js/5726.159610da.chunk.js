/*! For license information please see 5726.159610da.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[5726],{5147:function(e,r,t){t.d(r,{g:function(){return n}});var n=function(e,r,t,n,o){return s(e[1],r[1],t[1],n[1],o).map((function(s){return i(e[0],r[0],t[0],n[0],s)}))},i=function(e,r,t,n,i){return i*(3*r*Math.pow(i-1,2)+i*(-3*t*i+3*t+n*i))-e*Math.pow(i-1,3)},s=function(e,r,t,n,i){return o((n-=i)-3*(t-=i)+3*(r-=i)-(e-=i),3*t-6*r+3*e,3*r-3*e,e).filter((function(e){return e>=0&&e<=1}))},o=function(e,r,t,n){if(0===e)return function(e,r,t){var n=r*r-4*e*t;return n<0?[]:[(-r+Math.sqrt(n))/(2*e),(-r-Math.sqrt(n))/(2*e)]}(r,t,n);var i=(3*(t/=e)-(r/=e)*r)/3,s=(2*r*r*r-9*r*t+27*(n/=e))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];var o=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(s/2,.5)-r/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-r/3];var a=Math.sqrt(Math.pow(-i/3,3)),l=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),f=2*Math.pow(a,1/3);return[f*Math.cos(l/3)-r/3,f*Math.cos((l+2*Math.PI)/3)-r/3,f*Math.cos((l+4*Math.PI)/3)-r/3]}},7368:function(e,r,t){t.d(r,{a:function(){return s},b:function(){return o},c:function(){return i},d:function(){return l},h:function(){return a}});var n={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})}},notification:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=function(){n.selection()},s=function(){n.selectionStart()},o=function(){n.selectionChanged()},a=function(){n.selectionEnd()},l=function(e){n.impact(e)}},9:function(e,r,t){t.d(r,{a:function(){return n},b:function(){return p},c:function(){return l},d:function(){return g},e:function(){return b},f:function(){return s},g:function(){return i},h:function(){return y},i:function(){return f},j:function(){return c},k:function(){return d},l:function(){return h},m:function(){return a},n:function(){return o},o:function(){return u},p:function(){return m},q:function(){return v},r:function(){return w},s:function(){return x}});var n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5726:function(e,r,t){t.r(r),t.d(r,{ion_refresher:function(){return w},ion_refresher_content:function(){return y}});var n=t(9388),i=t(4039),s=t(323),o=t(5147),a=t(9069),l=t(7368),f=t(3562),h=t(9),c=t(9022),u=t(5716),p=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=(0,f.c)().duration(1e3).easing("ease-out"),a=(0,f.c)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,f.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),h=(0,f.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var c=(0,f.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=(0,f.c)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([c,u])}return o.addAnimation([a,l,h])},g=function(e,r){var t=r.clientHeight,n=(0,f.c)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-"+t+"px)"},{offset:1,transform:"scale(1) translateY(100px)"}]);return p(e).addAnimation([n])},d=function(e,r){var t=r.clientHeight,n=(0,f.c)().addElement(e).keyframes([{offset:0,transform:"translateY(-"+t+"px)"},{offset:1,transform:"translateY(100px)"}]);return p(e).addAnimation([n])},m=function(e,r,t){if(void 0===t&&(t=200),!e)return Promise.resolve();var n=(0,a.t)(e,t);return(0,i.c)((function(){e.style.setProperty("transition",t+"ms all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, "+r+", 0px)")})),n},v=function(e,r){return(0,n.mG)(void 0,void 0,void 0,(function(){var t,i,o;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return(t=e.querySelector("ion-refresher-content"))?[4,new Promise((function(e){return(0,a.c)(t,e)}))]:[2,Promise.resolve(!1)];case 1:return n.sent(),i=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),[2,null!==i&&null!==o&&("ios"===r&&(0,s.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)]}}))}))},w=function(){function e(e){(0,i.r)(this,e),this.ionRefresh=(0,i.e)(this,"ionRefresh",7),this.ionPull=(0,i.e)(this,"ionPull",7),this.ionStart=(0,i.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},e.prototype.checkNativeRefresher=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,r;return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return[4,v(this.el,(0,s.b)(this))];case 1:return(e=t.sent())&&!this.nativeRefresher?(r=this.el.closest("ion-content"),this.setupNativeRefresher(r)):e||this.destroyNativeRefresher(),[2]}}))}))},e.prototype.destroyNativeRefresher=function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1},e.prototype.resetNativeRefresher=function(e,r){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.state=r,"ios"!==(0,s.b)(this)?[3,2]:[4,m(e,void 0,300)];case 1:return t.sent(),[3,4];case 2:return[4,(0,a.t)(this.el.querySelector(".refresher-refreshing-icon"),200)];case 3:t.sent(),t.label=4;case 4:return this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1,[2]}}))}))},e.prototype.setupiOSNativeRefresher=function(e,r){return(0,n.mG)(this,void 0,void 0,(function(){var s,o,f,h,c=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.elementToTransform=this.scrollEl,s=e.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,f=s.length,(0,i.c)((function(){return s.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(c.pointerDown||1!==c.state)&&(0,i.f)((function(){var e=c.scrollEl.scrollTop,t=c.el.clientHeight;if(e>0){if(8===c.state){var n=(0,a.k)(0,e/(.5*t),1);return void(0,i.c)((function(){return function(e,r){e.style.setProperty("opacity",r.toString())}(r,1-n)}))}}else{c.pointerDown&&(c.didStart||(c.didStart=!0,c.ionStart.emit()),c.pointerDown&&c.ionPull.emit());var h=c.didStart?30:0,u=c.progress=(0,a.k)(0,(Math.abs(e)-h)/o,1);8===c.state||1===u?(c.pointerDown&&function(e,r){(0,i.c)((function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")}))}(r,c.lastVelocityY),c.didRefresh||(c.beginRefresh(),c.didRefresh=!0,(0,l.d)({style:"light"}),c.pointerDown||m(c.elementToTransform,t+"px"))):(c.state=2,function(e,r,t){(0,i.c)((function(){e.forEach((function(e,n){var i=n*(1/r),s=1-i,o=t-i,l=(0,a.k)(0,o/s,1);e.style.setProperty("opacity",l.toString())}))}))}(s,f,u))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),h=this,[4,Promise.resolve().then(t.bind(t,236))];case 1:return h.gesture=n.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){c.pointerDown=!0,c.didRefresh||m(c.elementToTransform,"0px"),0===o&&(o=.16*c.scrollEl.clientHeight)},onMove:function(e){c.lastVelocityY=e.velocityY},onEnd:function(){c.pointerDown=!1,c.didStart=!1,c.needsCompletion?(c.resetNativeRefresher(c.elementToTransform,32),c.needsCompletion=!1):c.didRefresh&&(0,i.f)((function(){return m(c.elementToTransform,c.el.clientHeight+"px")}))}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupMDNativeRefresher=function(e,r,s){return(0,n.mG)(this,void 0,void 0,(function(){var l,h,c,u,p=this;return(0,n.Jh)(this,(function(m){switch(m.label){case 0:return l=(0,a.g)(r).querySelector("circle"),h=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),c=(0,a.g)(s).querySelector("circle"),null!==l&&null!==c&&(0,i.c)((function(){l.style.setProperty("animation","none"),s.style.setProperty("animation-delay","-655ms"),c.style.setProperty("animation-delay","-655ms")})),u=this,[4,Promise.resolve().then(t.bind(t,236))];case 1:return u.gesture=m.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==p.state&&32!==p.state&&0===p.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(r){if(r.velocityY<0&&0===p.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,p.state=2,(0,i.c)((function(){return p.scrollEl.style.setProperty("--overflow","hidden")}));var t=function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(e),n=function(e,r,t){return"scale"===e?g(r,t):d(r,t)}(t,h,p.el);return r.data.animation=n,n.progressStart(!1,0),p.ionStart.emit(),void p.animations.push(n)}p.progress=(0,a.k)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(p.progress),p.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if((0,i.c)((function(){return p.scrollEl.style.removeProperty("--overflow")})),p.progress<=.4)return p.gesture.enable(!1),void e.data.animation.progressEnd(0,p.progress,500).onFinish((function(){p.animations.forEach((function(e){return e.destroy()})),p.animations=[],p.gesture.enable(!0),p.state=1}));var r=(0,o.g)([0,0],[0,0],[1,1],[1,1],p.progress)[0],t=function(e){return(0,f.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(h);p.animations.push(t),(0,i.c)((function(){return(0,n.mG)(p,void 0,void 0,(function(){return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return h.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),[4,t.play()];case 1:return n.sent(),this.beginRefresh(),e.data.animation.destroy(),[2]}}))}))}))}}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupNativeRefresher=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var r,t;return(0,n.Jh)(this,(function(n){return this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl||(this.setCss(0,"",!1,""),this.nativeRefresher=!0,r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===(0,s.b)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)),[2]}))}))},e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()},e.prototype.connectedCallback=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,r,i,o=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?[4,new Promise((function(r){return(0,a.c)(e,r)}))]:(console.error("<ion-refresher> must be used inside an <ion-content>"),[2]);case 1:return n.sent(),r=this,[4,e.getScrollElement()];case 2:return r.scrollEl=n.sent(),this.backgroundContentEl=(0,a.g)(e).querySelector("#background-content"),[4,v(this.el,(0,s.b)(this))];case 3:return n.sent()?(this.setupNativeRefresher(e),[3,6]):[3,4];case 4:return i=this,[4,Promise.resolve().then(t.bind(t,236))];case 5:i.gesture=n.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return o.canStart()},onStart:function(){return o.onStart()},onMove:function(e){return o.onMove(e)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),n.label=6;case 6:return[2]}}))}))},e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e=this;return(0,n.Jh)(this,(function(r){return this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,a.r)((function(){return(0,a.r)((function(){return e.resetNativeRefresher(e.elementToTransform,32)}))}))):this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e=this;return(0,n.Jh)(this,(function(r){return this.nativeRefresher?this.pointerDown||(0,a.r)((function(){return(0,a.r)((function(){return e.resetNativeRefresher(e.elementToTransform,16)}))})):this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0===(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var s=this;this.nativeRefresher||(this.appliedStyles=e>0,(0,i.c)((function(){if(s.scrollEl&&s.backgroundContentEl){var i=s.scrollEl.style,o=s.backgroundContentEl.style;i.transform=o.transform=e>0?"translateY("+e+"px) translateZ(0px)":"",i.transitionDuration=o.transitionDuration=r,i.transitionDelay=o.transitionDelay=n,i.overflow=t?"hidden":""}})))},e.prototype.render=function(){var e,r=(0,s.b)(this);return(0,i.h)(i.H,{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),e}();w.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var y=function(){function e(e){(0,i.r)(this,e)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon){var e=(0,s.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":h.g;this.pullingIcon=s.c.get("refreshingIcon","ios"===e&&(0,s.a)("mobile")?s.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){e=(0,s.b)(this);this.refreshingSpinner=s.c.get("refreshingSpinner",s.c.get("spinner","ios"===e?"lines":"circular"))}},e.prototype.render=function(){var e=this.pullingIcon,r=null!=e&&void 0!==u.S[e],t=(0,s.b)(this);return(0,i.h)(i.H,{class:t},(0,i.h)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&(0,i.h)("div",{class:"refresher-pulling-icon"},(0,i.h)("div",{class:"spinner-arrow-container"},(0,i.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,i.h)("div",{class:"arrow-container"},(0,i.h)("ion-icon",{icon:h.f})))),this.pullingIcon&&!r&&(0,i.h)("div",{class:"refresher-pulling-icon"},(0,i.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,i.h)("div",{class:"refresher-pulling-text",innerHTML:(0,c.s)(this.pullingText)})),(0,i.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,i.h)("div",{class:"refresher-refreshing-icon"},(0,i.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,i.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,c.s)(this.refreshingText)})))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),e}()},5716:function(e,r,t){t.d(r,{S:function(){return n}});var n={bubbles:{dur:1e3,circles:9,fn:function(e,r,t){var n=e*r/t-e+"ms",i=2*Math.PI*r/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,r,t){var n=r/t,i=e*n-e+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){return{r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}}}},lines:{dur:1e3,lines:8,fn:function(e,r,t){return{y1:14,y2:26,style:{transform:"rotate("+(360/t*r+(r<t/2?180:-180))+"deg)","animation-delay":e*r/t-e+"ms"}}}},"lines-small":{dur:1e3,lines:8,fn:function(e,r,t){return{y1:12,y2:20,style:{transform:"rotate("+(360/t*r+(r<t/2?180:-180))+"deg)","animation-delay":e*r/t-e+"ms"}}}},"lines-sharp":{dur:1e3,lines:12,fn:function(e,r,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*r+(r<6?180:-180))+"deg)","animation-delay":e*r/t-e+"ms"}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:function(e,r,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*r+(r<6?180:-180))+"deg)","animation-delay":e*r/t-e+"ms"}}}}}}}]);
//# sourceMappingURL=5726.159610da.chunk.js.map