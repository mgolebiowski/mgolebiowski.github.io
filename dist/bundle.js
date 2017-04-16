!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){},function(t,e){},function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(s,r,o,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function h(t,e,n){return!!Array.isArray(t)&&(c(t,n[e],n),!0)}function c(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=s.console&&(s.console.warn||s.console.log);return r&&r.call(s.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,s=e.prototype;i=t.prototype=Object.create(s),i.constructor=t,i._super=s,n&&dt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==gt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,n){c(E(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){c(E(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function T(t,e){return t.indexOf(e)>-1}function E(t){return t.trim().split(/\s+/g)}function x(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,n){for(var i=[],s=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];x(s,o)<0&&i.push(t[r]),s[r]=o,r++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function M(t,e){for(var n,i,s=e[0].toUpperCase()+e.slice(1),r=0;r<vt.length;){if(n=vt[r],(i=n?n+s:e)in t)return i;r++}return a}function C(){return wt++}function A(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}function S(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function I(t){var e=t.options.inputClass;return new(e||(At?W:St?V:Ct?U:F))(t,P)}function P(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,r=e&Pt&&i-s==0,o=e&(Dt|Ot)&&i-s==0;n.isFirst=!!r,n.isFinal=!!o,r&&(t.session={}),n.eventType=e,_(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function _(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=X(e)),s>1&&!n.firstMultiple?n.firstMultiple=X(e):1===s&&(n.firstMultiple=!1);var r=n.firstInput,o=n.firstMultiple,a=o?o.center:r.center,u=e.center=Y(i);e.timeStamp=Et(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=z(a,u),e.distance=R(a,u),D(n,e),e.offsetDirection=N(e.deltaX,e.deltaY);var h=L(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=Tt(h.x)>Tt(h.y)?h.x:h.y,e.scale=o?k(o.pointers,i):1,e.rotation=o?q(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,O(n,e);var c=t.element;y(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function D(t,e){var n=e.center,i=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};e.eventType!==Pt&&r.eventType!==Dt||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)}function O(t,e){var n,i,s,r,o=t.lastInterval||e,u=e.timeStamp-o.timeStamp;if(e.eventType!=Ot&&(u>It||o.velocity===a)){var h=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,l=L(u,h,c);i=l.x,s=l.y,n=Tt(l.x)>Tt(l.y)?l.x:l.y,r=N(h,c),t.lastInterval=e}else n=o.velocity,i=o.velocityX,s=o.velocityY,r=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=r}function X(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:yt(t.pointers[n].clientX),clientY:yt(t.pointers[n].clientY)},n++;return{timeStamp:Et(),pointers:e,center:Y(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Y(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var n=0,i=0,s=0;s<e;)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:yt(n/e),y:yt(i/e)}}function L(t,e,n){return{x:e/t||0,y:n/t||0}}function N(t,e){return t===e?Xt:Tt(t)>=Tt(e)?t<0?Yt:Lt:e<0?Nt:Rt}function R(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return Math.sqrt(i*i+s*s)}function z(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return 180*Math.atan2(s,i)/Math.PI}function q(t,e){return z(e[1],e[0],Wt)+z(t[1],t[0],Wt)}function k(t,e){return R(e[0],e[1],Wt)/R(t[0],t[1],Wt)}function F(){this.evEl=Ht,this.evWin=Vt,this.pressed=!1,S.apply(this,arguments)}function W(){this.evEl=Gt,this.evWin=Zt,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function B(){this.evTarget=$t,this.evWin=Kt,this.started=!1,S.apply(this,arguments)}function H(t,e){var n=b(t.touches),i=b(t.changedTouches);return e&(Dt|Ot)&&(n=w(n.concat(i),"identifier",!0)),[n,i]}function V(){this.evTarget=te,this.targetIds={},S.apply(this,arguments)}function j(t,e){var n=b(t.touches),i=this.targetIds;if(e&(Pt|_t)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,r,o=b(t.changedTouches),a=[],u=this.target;if(r=n.filter(function(t){return y(t.target,u)}),e===Pt)for(s=0;s<r.length;)i[r[s].identifier]=!0,s++;for(s=0;s<o.length;)i[o[s].identifier]&&a.push(o[s]),e&(Dt|Ot)&&delete i[o[s].identifier],s++;return a.length?[w(r.concat(a),"identifier",!0),a]:void 0}function U(){S.apply(this,arguments);var t=f(this.handler,this);this.touch=new V(this.manager,t),this.mouse=new F(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Pt?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(Dt|Ot)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,s=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(s,ee)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],r=Math.abs(e-s.x),o=Math.abs(n-s.y);if(r<=ne&&o<=ne)return!0}return!1}function $(t,e){this.manager=t,this.set(e)}function K(t){if(T(t,ae))return ae;var e=T(t,ue),n=T(t,he);return e&&n?ae:e||n?e?ue:he:T(t,oe)?oe:re}function Q(t){this.options=dt({},this.defaults,t||{}),this.id=C(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=le,this.simultaneous={},this.requireFail=[]}function tt(t){return t&me?"cancel":t&de?"end":t&fe?"move":t&pe?"start":""}function et(t){return t==Rt?"down":t==Nt?"up":t==Yt?"left":t==Lt?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function st(){it.apply(this,arguments),this.pX=null,this.pY=null}function rt(){it.apply(this,arguments)}function ot(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ut(){it.apply(this,arguments)}function ht(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ct(t,e){return e=e||{},e.recognizers=v(e.recognizers,ct.defaults.preset),new lt(t,e)}function lt(t,e){this.options=dt({},ct.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=I(this),this.touchAction=new $(this,this.options.touchAction),pt(this,!0),c(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function pt(t,e){var n=t.element;if(n.style){var i;c(t.options.cssProps,function(s,r){i=M(n.style,r),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var dt,vt=["","webkit","Moz","MS","ms","o"],mt=r.createElement("div"),gt="function",yt=Math.round,Tt=Math.abs,Et=Date.now;dt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var xt=l(function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)(!n||n&&t[i[s]]===a)&&(t[i[s]]=e[i[s]]),s++;return t},"extend","Use `assign`."),bt=l(function(t,e){return xt(t,e,!0)},"merge","Use `assign`."),wt=1,Mt=/mobile|tablet|ip(ad|hone|od)|android/i,Ct="ontouchstart"in s,At=M(s,"PointerEvent")!==a,St=Ct&&Mt.test(navigator.userAgent),It=25,Pt=1,_t=2,Dt=4,Ot=8,Xt=1,Yt=2,Lt=4,Nt=8,Rt=16,zt=Yt|Lt,qt=Nt|Rt,kt=zt|qt,Ft=["x","y"],Wt=["clientX","clientY"];S.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(A(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(A(this.element),this.evWin,this.domHandler)}};var Bt={mousedown:Pt,mousemove:_t,mouseup:Dt},Ht="mousedown",Vt="mousemove mouseup";p(F,S,{handler:function(t){var e=Bt[t.type];e&Pt&&0===t.button&&(this.pressed=!0),e&_t&&1!==t.which&&(e=Dt),this.pressed&&(e&Dt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var jt={pointerdown:Pt,pointermove:_t,pointerup:Dt,pointercancel:Ot,pointerout:Ot},Ut={2:"touch",3:"pen",4:"mouse",5:"kinect"},Gt="pointerdown",Zt="pointermove pointerup pointercancel";s.MSPointerEvent&&!s.PointerEvent&&(Gt="MSPointerDown",Zt="MSPointerMove MSPointerUp MSPointerCancel"),p(W,S,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=jt[i],r=Ut[t.pointerType]||t.pointerType,o="touch"==r,a=x(e,t.pointerId,"pointerId");s&Pt&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):s&(Dt|Ot)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var Jt={touchstart:Pt,touchmove:_t,touchend:Dt,touchcancel:Ot},$t="touchstart",Kt="touchstart touchmove touchend touchcancel";p(B,S,{handler:function(t){var e=Jt[t.type];if(e===Pt&&(this.started=!0),this.started){var n=H.call(this,t,e);e&(Dt|Ot)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:Pt,touchmove:_t,touchend:Dt,touchcancel:Ot},te="touchstart touchmove touchend touchcancel";p(V,S,{handler:function(t){var e=Qt[t.type],n=j.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;p(U,S,{handler:function(t,e,n){var i="touch"==n.pointerType,s="mouse"==n.pointerType;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(s&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=M(mt.style,"touchAction"),se=ie!==a,re="auto",oe="manipulation",ae="none",ue="pan-x",he="pan-y",ce=function(){if(!se)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||s.CSS.supports("touch-action",n)}),t}();$.prototype={set:function(t){"compute"==t&&(t=this.compute()),se&&this.manager.element.style&&ce[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return c(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),K(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,s=T(i,ae)&&!ce[ae],r=T(i,he)&&!ce[he],o=T(i,ue)&&!ce[ue];if(s){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return o&&r?void 0:s||r&&n&zt||o&&n&qt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var le=1,pe=2,fe=4,de=8,ve=de,me=16;Q.prototype={defaults:{},set:function(t){return dt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(h(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return h(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(h(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===x(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(h(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=x(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<de&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=de&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|le)))return!1;t++}return!0},recognize:function(t){var e=dt({},t);if(!d(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(ve|me|32)&&(this.state=le),this.state=this.process(e),this.state&(pe|fe|de|me)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},p(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(pe|fe),s=this.attrTest(t);return i&&(n&Ot||!s)?e|me:i||s?n&Dt?e|de:e&pe?e|fe:pe:32}}),p(st,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:kt},getTouchAction:function(){var t=this.options.direction,e=[];return t&zt&&e.push(he),t&qt&&e.push(ue),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&zt?(s=0===r?Xt:r<0?Yt:Lt,n=r!=this.pX,i=Math.abs(t.deltaX)):(s=0===o?Xt:o<0?Nt:Rt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&pe||!(this.state&pe)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(rt,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&pe)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(ot,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[re]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Dt|Ot)&&!s)this.reset();else if(t.eventType&Pt)this.reset(),this._timer=u(function(){this.state=ve,this.tryEmit()},e.time,this);else if(t.eventType&Dt)return ve;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ve&&(t&&t.eventType&Dt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Et(),this.manager.emit(this.options.event,this._input)))}}),p(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&pe)}}),p(ut,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:zt|qt,pointers:1},getTouchAction:function(){return st.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(zt|qt)?e=t.overallVelocity:n&zt?e=t.overallVelocityX:n&qt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Tt(e)>this.options.velocity&&t.eventType&Dt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ht,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&Pt&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=Dt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||R(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=u(function(){this.state=ve,this.tryEmit()},e.interval,this),pe):ve}return 32},failTimeout:function(){return this._timer=u(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ve&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ct.VERSION="2.0.7",ct.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[rt,{enable:!1},["rotate"]],[ut,{direction:zt}],[st,{direction:zt},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[ot]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};lt.prototype={set:function(t){return dt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&ve)&&(s=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===e.stopped||s&&n!=s&&!n.canRecognizeWith(s)?n.reset():n.recognize(t),!s&&n.state&(pe|fe|de)&&(s=e.curRecognizer=n),r++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(h(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(h(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=x(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return c(E(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return c(E(t),function(t){e?n[t]&&n[t].splice(x(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&pt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},dt(ct,{INPUT_START:Pt,INPUT_MOVE:_t,INPUT_END:Dt,INPUT_CANCEL:Ot,STATE_POSSIBLE:le,STATE_BEGAN:pe,STATE_CHANGED:fe,STATE_ENDED:de,STATE_RECOGNIZED:ve,STATE_CANCELLED:me,STATE_FAILED:32,DIRECTION_NONE:Xt,DIRECTION_LEFT:Yt,DIRECTION_RIGHT:Lt,DIRECTION_UP:Nt,DIRECTION_DOWN:Rt,DIRECTION_HORIZONTAL:zt,DIRECTION_VERTICAL:qt,DIRECTION_ALL:kt,Manager:lt,Input:S,TouchAction:$,TouchInput:V,MouseInput:F,PointerEventInput:W,TouchMouseInput:U,SingleTouchInput:B,Recognizer:Q,AttrRecognizer:it,Tap:ht,Pan:st,Swipe:ut,Pinch:rt,Rotate:at,Press:ot,on:m,off:g,each:c,merge:bt,extend:xt,assign:dt,inherit:p,bindFn:f,prefixed:M}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=ct,(i=function(){return ct}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)},function(t,e){!function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!(n instanceof Node))throw"Can't initialize VanillaTilt because "+n+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.element=n,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.addEventListeners()}return e.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind)},e.prototype.destroy=function(){this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},e.prototype.onMouseEnter=function(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},e.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},e.prototype.onMouseLeave=function(t){this.setTransition(),this.settings.reset&&this.reset()},e.prototype.reset=function(){var t=this;requestAnimationFrame(function(){t.event={pageX:t.left+t.width/2,pageY:t.top+t.height/2},t.element.style.transform="perspective("+t.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})},e.prototype.getValues=function(){var t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e}},e.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},e.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},e.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.transitionTimeout=setTimeout(function(){return t.element.style.transition=""},this.settings.speed)},e.prototype.extendSettings=function(t){var e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,reset:!0},n={};for(var i in e)if(i in t)n[i]=t[i];else if(this.element.hasAttribute("data-tilt-"+i)){var s=this.element.getAttribute("data-tilt-"+i);try{n[i]=JSON.parse(s)}catch(t){n[i]=s}}else n[i]=e[i];return n},e.init=function(t,n){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(function(t){"vanillaTilt"in t||(t.vanillaTilt=new e(t,n))})},e}();"undefined"!=typeof document&&(window.VanillaTilt=e,e.init(document.querySelectorAll("[data-tilt]")))}()},function(t,e,n){function i(){document.querySelector(".darkness").style.display="block"}n(1),n(3),n(2),n(0);var s=new Hammer(document.querySelector(".darkness"));document.querySelector(".darkness").onclick=function(t){t.target==this&&(this.style.display="none")};const r=["dist/metronic-main.png","dist/metronic-produkt.png","dist/metronic-mobile.png"];var o=0;const a=function(){--o,o<0&&(o=r.length-1),document.querySelector(".pic-main img").src=r[o]},u=function(){++o,o>r.length-1&&(o=0),document.querySelector(".pic-main img").src=r[o]};s.on("swipeleft",a),s.on("swiperight",u),document.onkeydown=function(t){t=t||window.event,"37"==t.keyCode?a():"39"==t.keyCode&&u()},document.querySelector(".prev").onclick=a,document.querySelector(".next").onclick=u,window.openBox=i}]);