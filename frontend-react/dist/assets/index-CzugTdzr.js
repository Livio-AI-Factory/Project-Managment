(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var zc={exports:{}},Di={},Lc={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),_f=Symbol.for("react.portal"),Rf=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),Uf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),Yf=Symbol.for("react.lazy"),ad=Symbol.iterator;function Qf(e){return e===null||typeof e!="object"?null:(e=ad&&e[ad]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Mc={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Mc,this.updater=n||Tc}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fc(){}Fc.prototype=mr.prototype;function Ls(e,t,n){this.props=e,this.context=t,this.refs=Mc,this.updater=n||Tc}var Ts=Ls.prototype=new Fc;Ts.constructor=Ls;Bc(Ts,mr.prototype);Ts.isPureReactComponent=!0;var sd=Array.isArray,_c=Object.prototype.hasOwnProperty,Bs={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)_c.call(t,r)&&!Rc.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:co,type:e,key:i,ref:a,props:o,_owner:Bs.current}}function Jf(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Kf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ld=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kf(""+e.key):t.toString(36)}function Ro(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case co:case _f:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ta(a,0):r,sd(o)?(n="",e!=null&&(n=e.replace(ld,"$&/")+"/"),Ro(o,t,n,"",function(d){return d})):o!=null&&(Ms(o)&&(o=Jf(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ld,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",sd(e))for(var c=0;c<e.length;c++){i=e[c];var l=r+ta(i,c);a+=Ro(i,t,n,l,o)}else if(l=Qf(e),typeof l=="function")for(e=l.call(e),c=0;!(i=e.next()).done;)i=i.value,l=r+ta(i,c++),a+=Ro(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wo(e,t,n){if(e==null)return e;var r=[],o=0;return Ro(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Xf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Oo={transition:null},Zf={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:Bs};function Vc(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=mr;ee.Fragment=Rf;ee.Profiler=Vf;ee.PureComponent=Ls;ee.StrictMode=Of;ee.Suspense=qf;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;ee.act=Vc;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Bs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)_c.call(t,l)&&!Rc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:co,type:e.type,key:o,ref:i,props:r,_owner:a}};ee.createContext=function(e){return e={$$typeof:Hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uf,_context:e},e.Consumer=e};ee.createElement=Oc;ee.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:Wf,render:e}};ee.isValidElement=Ms;ee.lazy=function(e){return{$$typeof:Yf,_payload:{_status:-1,_result:e},_init:Xf}};ee.memo=function(e,t){return{$$typeof:Gf,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};ee.unstable_act=Vc;ee.useCallback=function(e,t){return Oe.current.useCallback(e,t)};ee.useContext=function(e){return Oe.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Oe.current.useEffect(e,t)};ee.useId=function(){return Oe.current.useId()};ee.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Oe.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};ee.useRef=function(e){return Oe.current.useRef(e)};ee.useState=function(e){return Oe.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return Oe.current.useTransition()};ee.version="18.3.1";Lc.exports=ee;var Je=Lc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=Je,tm=Symbol.for("react.element"),nm=Symbol.for("react.fragment"),rm=Object.prototype.hasOwnProperty,om=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,im={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rm.call(t,r)&&!im.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:tm,type:e,key:i,ref:a,props:o,_owner:om.current}}Di.Fragment=nm;Di.jsx=Uc;Di.jsxs=Uc;zc.exports=Di;var s=zc.exports,Da={},Hc={exports:{}},tt={},Wc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,U){var q=I.length;I.push(U);e:for(;0<q;){var te=q-1>>>1,oe=I[te];if(0<o(oe,U))I[te]=U,I[q]=oe,q=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var U=I[0],q=I.pop();if(q!==U){I[0]=q;e:for(var te=0,oe=I.length,Pe=oe>>>1;te<Pe;){var De=2*(te+1)-1,ht=I[De],ge=De+1,Vt=I[ge];if(0>o(ht,q))ge<oe&&0>o(Vt,ht)?(I[te]=Vt,I[ge]=q,te=ge):(I[te]=ht,I[De]=q,te=De);else if(ge<oe&&0>o(Vt,q))I[te]=Vt,I[ge]=q,te=ge;else break e}}return U}function o(I,U){var q=I.sortIndex-U.sortIndex;return q!==0?q:I.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],d=[],u=1,m=null,p=3,g=!1,b=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var U=n(d);U!==null;){if(U.callback===null)r(d);else if(U.startTime<=I)r(d),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(d)}}function S(I){if(y=!1,x(I),!b)if(n(l)!==null)b=!0,F(C);else{var U=n(d);U!==null&&O(S,U.startTime-I)}}function C(I,U){b=!1,y&&(y=!1,f($),$=-1),g=!0;var q=p;try{for(x(U),m=n(l);m!==null&&(!(m.expirationTime>U)||I&&!D());){var te=m.callback;if(typeof te=="function"){m.callback=null,p=m.priorityLevel;var oe=te(m.expirationTime<=U);U=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(l)&&r(l),x(U)}else r(l);m=n(l)}if(m!==null)var Pe=!0;else{var De=n(d);De!==null&&O(S,De.startTime-U),Pe=!1}return Pe}finally{m=null,p=q,g=!1}}var E=!1,P=null,$=-1,A=5,k=-1;function D(){return!(e.unstable_now()-k<A)}function z(){if(P!==null){var I=e.unstable_now();k=I;var U=!0;try{U=P(!0,I)}finally{U?M():(E=!1,P=null)}}else E=!1}var M;if(typeof v=="function")M=function(){v(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,N=W.port2;W.port1.onmessage=z,M=function(){N.postMessage(null)}}else M=function(){w(z,0)};function F(I){P=I,E||(E=!0,M())}function O(I,U){$=w(function(){I(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,F(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var q=p;p=U;try{return I()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=p;p=I;try{return U()}finally{p=q}},e.unstable_scheduleCallback=function(I,U,q){var te=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,I={id:u++,callback:U,priorityLevel:I,startTime:q,expirationTime:oe,sortIndex:-1},q>te?(I.sortIndex=q,t(d,I),n(l)===null&&I===n(d)&&(y?(f($),$=-1):y=!0,O(S,q-te))):(I.sortIndex=oe,t(l,I),b||g||(b=!0,F(C))),I},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(I){var U=p;return function(){var q=p;p=U;try{return I.apply(this,arguments)}finally{p=q}}}})(qc);Wc.exports=qc;var am=Wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm=Je,et=am;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,Wr={};function An(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Na=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},cd={};function dm(e){return Na.call(cd,e)?!0:Na.call(dd,e)?!1:lm.test(e)?cd[e]=!0:(dd[e]=!0,!1)}function cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pm(e,t,n,r){if(t===null||typeof t>"u"||cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fs=/[\-:]([a-z])/g;function _s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fs,_s);Ae[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fs,_s);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fs,_s);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,r){var o=Ae.hasOwnProperty(t)?Ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pm(t,n,o,r)&&(n=null),r||o===null?dm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Vs=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Jc=Symbol.for("react.offscreen"),pd=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,na;function Ir(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function oa(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,c=i.length-1;1<=a&&0<=c&&o[a]!==i[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==i[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==i[c]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function um(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case Fn:return"Portal";case Ia:return"Profiler";case Os:return"StrictMode";case za:return"Suspense";case La:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qc:return(e.displayName||"Context")+".Consumer";case Yc:return(e._context.displayName||"Context")+".Provider";case Vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e){var t=Kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=mm(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ba(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ud(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zc(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function Ma(e,t){Zc(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fa(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fa(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function md(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(zr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function ep(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){vm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function op(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gm=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,t){if(t){if(gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Va(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Kn=null,Xn=null;function gd(e){if(e=fo(e)){if(typeof Ha!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ti(t),Ha(e.stateNode,e.type,t))}}function ip(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function ap(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,gd(e),t)for(e=0;e<t.length;e++)gd(t[e])}}function sp(e,t){return e(t)}function lp(){}var ia=!1;function dp(e,t,n){if(ia)return e(t,n);ia=!0;try{return sp(e,t,n)}finally{ia=!1,(Kn!==null||Xn!==null)&&(lp(),ap())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Wa=!1;if(zt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Wa=!1}function xm(e,t,n,r,o,i,a,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Mr=!1,ei=null,ti=!1,qa=null,hm={onError:function(e){Mr=!0,ei=e}};function ym(e,t,n,r,o,i,a,c,l){Mr=!1,ei=null,xm.apply(hm,arguments)}function bm(e,t,n,r,o,i,a,c,l){if(ym.apply(this,arguments),Mr){if(Mr){var d=ei;Mr=!1,ei=null}else throw Error(T(198));ti||(ti=!0,qa=d)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xd(e){if(Dn(e)!==e)throw Error(T(188))}function wm(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xd(o),e;if(i===r)return xd(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,r=i;break}if(c===r){a=!0,r=o,n=i;break}c=c.sibling}if(!a){for(c=i.child;c;){if(c===n){a=!0,n=i,r=o;break}if(c===r){a=!0,r=i,n=o;break}c=c.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function pp(e){return e=wm(e),e!==null?up(e):null}function up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=up(e);if(t!==null)return t;e=e.sibling}return null}var fp=et.unstable_scheduleCallback,hd=et.unstable_cancelCallback,Cm=et.unstable_shouldYield,Sm=et.unstable_requestPaint,ye=et.unstable_now,km=et.unstable_getCurrentPriorityLevel,Ws=et.unstable_ImmediatePriority,mp=et.unstable_UserBlockingPriority,ni=et.unstable_NormalPriority,Em=et.unstable_LowPriority,vp=et.unstable_IdlePriority,Ni=null,kt=null;function Pm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Am,jm=Math.log,$m=Math.LN2;function Am(e){return e>>>=0,e===0?32:31-(jm(e)/$m|0)|0}var Eo=64,Po=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?r=Lr(c):(i&=a,i!==0&&(r=Lr(i)))}else a=n&~o,a!==0?r=Lr(a):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function Dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-mt(i),c=1<<a,l=o[a];l===-1?(!(c&n)||c&r)&&(o[a]=Dm(c,t)):l<=t&&(e.expiredLanes|=c),i&=~c}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gp(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function xp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hp,Gs,yp,bp,wp,Ya=!1,jo=[],Jt=null,Kt=null,Xt=null,Yr=new Map,Qr=new Map,qt=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function Er(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fo(t),t!==null&&Gs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Lm(e,t,n,r,o){switch(t){case"focusin":return Jt=Er(Jt,e,t,n,r,o),!0;case"dragenter":return Kt=Er(Kt,e,t,n,r,o),!0;case"mouseover":return Xt=Er(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Yr.set(i,Er(Yr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,Er(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function Cp(e){var t=vn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=cp(n),t!==null){e.blockedOn=t,wp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=fo(n),t!==null&&Gs(t),e.blockedOn=n,!1;t.shift()}return!0}function bd(e,t,n){Vo(e)&&n.delete(t)}function Tm(){Ya=!1,Jt!==null&&Vo(Jt)&&(Jt=null),Kt!==null&&Vo(Kt)&&(Kt=null),Xt!==null&&Vo(Xt)&&(Xt=null),Yr.forEach(bd),Qr.forEach(bd)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ya||(Ya=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Tm)))}function Jr(e){function t(o){return Pr(o,e)}if(0<jo.length){Pr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Pr(Jt,e),Kt!==null&&Pr(Kt,e),Xt!==null&&Pr(Xt,e),Yr.forEach(t),Qr.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&qt.shift()}var Zn=Ft.ReactCurrentBatchConfig,oi=!0;function Bm(e,t,n,r){var o=ie,i=Zn.transition;Zn.transition=null;try{ie=1,Ys(e,t,n,r)}finally{ie=o,Zn.transition=i}}function Mm(e,t,n,r){var o=ie,i=Zn.transition;Zn.transition=null;try{ie=4,Ys(e,t,n,r)}finally{ie=o,Zn.transition=i}}function Ys(e,t,n,r){if(oi){var o=Qa(e,t,n,r);if(o===null)ga(e,t,r,ii,n),yd(e,r);else if(Lm(o,e,t,n,r))r.stopPropagation();else if(yd(e,r),t&4&&-1<zm.indexOf(e)){for(;o!==null;){var i=fo(o);if(i!==null&&hp(i),i=Qa(e,t,n,r),i===null&&ga(e,t,r,ii,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var ii=null;function Qa(e,t,n,r){if(ii=null,e=Hs(r),e=vn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case Ws:return 1;case mp:return 4;case ni:case Em:return 16;case vp:return 536870912;default:return 16}default:return 16}}var Yt=null,Qs=null,Uo=null;function kp(){if(Uo)return Uo;var e,t=Qs,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function wd(){return!1}function nt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$o:wd,this.isPropagationStopped=wd,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=nt(vr),uo=ve({},vr,{view:0,detail:0}),Fm=nt(uo),sa,la,jr,Ii=ve({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(sa=e.screenX-jr.screenX,la=e.screenY-jr.screenY):la=sa=0,jr=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Cd=nt(Ii),_m=ve({},Ii,{dataTransfer:0}),Rm=nt(_m),Om=ve({},uo,{relatedTarget:0}),da=nt(Om),Vm=ve({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=nt(Vm),Hm=ve({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=nt(Hm),qm=ve({},vr,{data:0}),Sd=nt(qm),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function Ks(){return Jm}var Km=ve({},uo,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=nt(Km),Zm=ve({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=nt(Zm),ev=ve({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),tv=nt(ev),nv=ve({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=nt(nv),ov=ve({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=nt(ov),av=[9,13,27,32],Xs=zt&&"CompositionEvent"in window,Fr=null;zt&&"documentMode"in document&&(Fr=document.documentMode);var sv=zt&&"TextEvent"in window&&!Fr,Ep=zt&&(!Xs||Fr&&8<Fr&&11>=Fr),Ed=" ",Pd=!1;function Pp(e,t){switch(e){case"keyup":return av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function lv(e,t){switch(e){case"compositionend":return jp(t);case"keypress":return t.which!==32?null:(Pd=!0,Ed);case"textInput":return e=t.data,e===Ed&&Pd?null:e;default:return null}}function dv(e,t){if(Rn)return e==="compositionend"||!Xs&&Pp(e,t)?(e=kp(),Uo=Qs=Yt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function $p(e,t,n,r){ip(r),t=ai(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Kr=null;function pv(e){_p(e,0)}function zi(e){var t=Un(e);if(Xc(t))return e}function uv(e,t){if(e==="change")return t}var Ap=!1;if(zt){var ca;if(zt){var pa="oninput"in document;if(!pa){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),pa=typeof $d.oninput=="function"}ca=pa}else ca=!1;Ap=ca&&(!document.documentMode||9<document.documentMode)}function Ad(){_r&&(_r.detachEvent("onpropertychange",Dp),Kr=_r=null)}function Dp(e){if(e.propertyName==="value"&&zi(Kr)){var t=[];$p(t,Kr,e,Hs(e)),dp(pv,t)}}function fv(e,t,n){e==="focusin"?(Ad(),_r=t,Kr=n,_r.attachEvent("onpropertychange",Dp)):e==="focusout"&&Ad()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(Kr)}function vv(e,t){if(e==="click")return zi(t)}function gv(e,t){if(e==="input"||e==="change")return zi(t)}function xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:xv;function Xr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Na.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ip(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hv(e){var t=Ip(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Np(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Nd(n,i);var a=Nd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yv=zt&&"documentMode"in document&&11>=document.documentMode,On=null,Ja=null,Rr=null,Ka=!1;function Id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||On==null||On!==Zo(r)||(r=On,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Xr(Rr,r)||(Rr=r,r=ai(Ja,"onSelect"),0<r.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},ua={},zp={};zt&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Li(e){if(ua[e])return ua[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zp)return ua[e]=t[n];return e}var Lp=Li("animationend"),Tp=Li("animationiteration"),Bp=Li("animationstart"),Mp=Li("transitionend"),Fp=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Fp.set(e,t),An(t,[e])}for(var fa=0;fa<zd.length;fa++){var ma=zd[fa],bv=ma.toLowerCase(),wv=ma[0].toUpperCase()+ma.slice(1);dn(bv,"on"+wv)}dn(Lp,"onAnimationEnd");dn(Tp,"onAnimationIteration");dn(Bp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Mp,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bm(r,t,void 0,e),e.currentTarget=null}function _p(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==i&&o.isPropagationStopped())break e;Ld(o,c,d),i=l}else for(a=0;a<r.length;a++){if(c=r[a],l=c.instance,d=c.currentTarget,c=c.listener,l!==i&&o.isPropagationStopped())break e;Ld(o,c,d),i=l}}}if(ti)throw e=qa,ti=!1,qa=null,e}function de(e,t){var n=t[ns];n===void 0&&(n=t[ns]=new Set);var r=e+"__bubble";n.has(r)||(Rp(t,e,2,!1),n.add(r))}function va(e,t,n){var r=0;t&&(r|=4),Rp(n,e,r,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Do]){e[Do]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(Cv.has(n)||va(n,!1,e),va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,va("selectionchange",!1,t))}}function Rp(e,t,n,r){switch(Sp(t)){case 1:var o=Bm;break;case 4:o=Mm;break;default:o=Ys}n=o.bind(null,t,n,e),o=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;c!==null;){if(a=vn(c),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}c=c.parentNode}}r=r.return}dp(function(){var d=i,u=Hs(n),m=[];e:{var p=Fp.get(e);if(p!==void 0){var g=Js,b=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=Xm;break;case"focusin":b="focus",g=da;break;case"focusout":b="blur",g=da;break;case"beforeblur":case"afterblur":g=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tv;break;case Lp:case Tp:case Bp:g=Um;break;case Mp:g=rv;break;case"scroll":g=Fm;break;case"wheel":g=iv;break;case"copy":case"cut":case"paste":g=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=kd}var y=(t&4)!==0,w=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var v=d,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Gr(v,f),S!=null&&y.push(eo(v,S,x)))),w)break;v=v.return}0<y.length&&(p=new g(p,b,null,n,u),m.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ua&&(b=n.relatedTarget||n.fromElement)&&(vn(b)||b[Lt]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=d,b=b?vn(b):null,b!==null&&(w=Dn(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=d),g!==b)){if(y=Cd,S="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=kd,S="onPointerLeave",f="onPointerEnter",v="pointer"),w=g==null?p:Un(g),x=b==null?p:Un(b),p=new y(S,v+"leave",g,n,u),p.target=w,p.relatedTarget=x,S=null,vn(u)===d&&(y=new y(f,v+"enter",b,n,u),y.target=x,y.relatedTarget=w,S=y),w=S,g&&b)t:{for(y=g,f=b,v=0,x=y;x;x=Mn(x))v++;for(x=0,S=f;S;S=Mn(S))x++;for(;0<v-x;)y=Mn(y),v--;for(;0<x-v;)f=Mn(f),x--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=Mn(y),f=Mn(f)}y=null}else y=null;g!==null&&Td(m,p,g,y,!1),b!==null&&w!==null&&Td(m,w,b,y,!0)}}e:{if(p=d?Un(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=uv;else if(jd(p))if(Ap)C=gv;else{C=mv;var E=fv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=vv);if(C&&(C=C(e,d))){$p(m,C,n,u);break e}E&&E(e,p,d),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Fa(p,"number",p.value)}switch(E=d?Un(d):window,e){case"focusin":(jd(E)||E.contentEditable==="true")&&(On=E,Ja=d,Rr=null);break;case"focusout":Rr=Ja=On=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Id(m,n,u);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":Id(m,n,u)}var P;if(Xs)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Rn?Pp(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Ep&&n.locale!=="ko"&&(Rn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Rn&&(P=kp()):(Yt=u,Qs="value"in Yt?Yt.value:Yt.textContent,Rn=!0)),E=ai(d,$),0<E.length&&($=new Sd($,e,null,n,u),m.push({event:$,listeners:E}),P?$.data=P:(P=jp(n),P!==null&&($.data=P)))),(P=sv?lv(e,n):dv(e,n))&&(d=ai(d,"onBeforeInput"),0<d.length&&(u=new Sd("onBeforeInput","beforeinput",null,n,u),m.push({event:u,listeners:d}),u.data=P))}_p(m,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gr(e,n),i!=null&&r.unshift(eo(e,i,o)),i=Gr(e,t),i!=null&&r.push(eo(e,i,o))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var c=n,l=c.alternate,d=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&d!==null&&(c=d,o?(l=Gr(n,i),l!=null&&a.unshift(eo(n,l,c))):o||(l=Gr(n,i),l!=null&&a.push(eo(n,l,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Sv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(Sv,`
`).replace(kv,"")}function No(e,t,n){if(t=Bd(t),Bd(e)!==t&&n)throw Error(T(425))}function si(){}var Xa=null,Za=null;function es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ts=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(jv)}:ts;function jv(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),St="__reactFiber$"+gr,to="__reactProps$"+gr,Lt="__reactContainer$"+gr,ns="__reactEvents$"+gr,$v="__reactListeners$"+gr,Av="__reactHandles$"+gr;function vn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fd(e);e!==null;){if(n=e[St])return n;e=Fd(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[St]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ti(e){return e[to]||null}var rs=[],Hn=-1;function cn(e){return{current:e}}function ce(e){0>Hn||(e.current=rs[Hn],rs[Hn]=null,Hn--)}function le(e,t){Hn++,rs[Hn]=e.current,e.current=t}var sn={},Te=cn(sn),We=cn(!1),Sn=sn;function ir(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qe(e){return e=e.childContextTypes,e!=null}function li(){ce(We),ce(Te)}function _d(e,t,n){if(Te.current!==sn)throw Error(T(168));le(Te,t),le(We,n)}function Op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,fm(e)||"Unknown",o));return ve({},n,r)}function di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=Te.current,le(Te,e),le(We,We.current),!0}function Rd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Op(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,ce(We),ce(Te),le(Te,e)):ce(We),le(We,n)}var $t=null,Bi=!1,ha=!1;function Vp(e){$t===null?$t=[e]:$t.push(e)}function Dv(e){Bi=!0,Vp(e)}function pn(){if(!ha&&$t!==null){ha=!0;var e=0,t=ie;try{var n=$t;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Bi=!1}catch(o){throw $t!==null&&($t=$t.slice(e+1)),fp(Ws,pn),o}finally{ie=t,ha=!1}}return null}var Wn=[],qn=0,ci=null,pi=0,rt=[],ot=0,kn=null,At=1,Dt="";function fn(e,t){Wn[qn++]=pi,Wn[qn++]=ci,ci=e,pi=t}function Up(e,t,n){rt[ot++]=At,rt[ot++]=Dt,rt[ot++]=kn,kn=e;var r=At;e=Dt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var i=32-mt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,At=1<<32-mt(t)+o|n<<o|r,Dt=i+e}else At=1<<i|n<<o|r,Dt=e}function el(e){e.return!==null&&(fn(e,1),Up(e,1,0))}function tl(e){for(;e===ci;)ci=Wn[--qn],Wn[qn]=null,pi=Wn[--qn],Wn[qn]=null;for(;e===kn;)kn=rt[--ot],rt[ot]=null,Dt=rt[--ot],rt[ot]=null,At=rt[--ot],rt[ot]=null}var Ze=null,Ke=null,ue=!1,ft=null;function Hp(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Ke=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Ke=null,!0):!1;default:return!1}}function os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(ue){var t=Ke;if(t){var n=t;if(!Od(e,t)){if(os(e))throw Error(T(418));t=Zt(n.nextSibling);var r=Ze;t&&Od(e,t)?Hp(r,n):(e.flags=e.flags&-4097|2,ue=!1,Ze=e)}}else{if(os(e))throw Error(T(418));e.flags=e.flags&-4097|2,ue=!1,Ze=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Io(e){if(e!==Ze)return!1;if(!ue)return Vd(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!es(e.type,e.memoizedProps)),t&&(t=Ke)){if(os(e))throw Wp(),Error(T(418));for(;t;)Hp(e,t),t=Zt(t.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Ze?Zt(e.stateNode.nextSibling):null;return!0}function Wp(){for(var e=Ke;e;)e=Zt(e.nextSibling)}function ar(){Ke=Ze=null,ue=!1}function nl(e){ft===null?ft=[e]:ft.push(e)}var Nv=Ft.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var c=o.refs;a===null?delete c[i]:c[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function qp(e){function t(f,v){if(e){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function r(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function o(f,v){return f=rn(f,v),f.index=0,f.sibling=null,f}function i(f,v,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,v,x,S){return v===null||v.tag!==6?(v=Ea(x,f.mode,S),v.return=f,v):(v=o(v,x),v.return=f,v)}function l(f,v,x,S){var C=x.type;return C===_n?u(f,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&Ud(C)===v.type)?(S=o(v,x.props),S.ref=$r(f,v,x),S.return=f,S):(S=Ko(x.type,x.key,x.props,null,f.mode,S),S.ref=$r(f,v,x),S.return=f,S)}function d(f,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Pa(x,f.mode,S),v.return=f,v):(v=o(v,x.children||[]),v.return=f,v)}function u(f,v,x,S,C){return v===null||v.tag!==7?(v=bn(x,f.mode,S,C),v.return=f,v):(v=o(v,x),v.return=f,v)}function m(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ea(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return x=Ko(v.type,v.key,v.props,null,f.mode,x),x.ref=$r(f,null,v),x.return=f,x;case Fn:return v=Pa(v,f.mode,x),v.return=f,v;case Ht:var S=v._init;return m(f,S(v._payload),x)}if(zr(v)||Sr(v))return v=bn(v,f.mode,x,null),v.return=f,v;zo(f,v)}return null}function p(f,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:c(f,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:return x.key===C?l(f,v,x,S):null;case Fn:return x.key===C?d(f,v,x,S):null;case Ht:return C=x._init,p(f,v,C(x._payload),S)}if(zr(x)||Sr(x))return C!==null?null:u(f,v,x,S,null);zo(f,x)}return null}function g(f,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,c(v,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return f=f.get(S.key===null?x:S.key)||null,l(v,f,S,C);case Fn:return f=f.get(S.key===null?x:S.key)||null,d(v,f,S,C);case Ht:var E=S._init;return g(f,v,x,E(S._payload),C)}if(zr(S)||Sr(S))return f=f.get(x)||null,u(v,f,S,C,null);zo(v,S)}return null}function b(f,v,x,S){for(var C=null,E=null,P=v,$=v=0,A=null;P!==null&&$<x.length;$++){P.index>$?(A=P,P=null):A=P.sibling;var k=p(f,P,x[$],S);if(k===null){P===null&&(P=A);break}e&&P&&k.alternate===null&&t(f,P),v=i(k,v,$),E===null?C=k:E.sibling=k,E=k,P=A}if($===x.length)return n(f,P),ue&&fn(f,$),C;if(P===null){for(;$<x.length;$++)P=m(f,x[$],S),P!==null&&(v=i(P,v,$),E===null?C=P:E.sibling=P,E=P);return ue&&fn(f,$),C}for(P=r(f,P);$<x.length;$++)A=g(P,f,$,x[$],S),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?$:A.key),v=i(A,v,$),E===null?C=A:E.sibling=A,E=A);return e&&P.forEach(function(D){return t(f,D)}),ue&&fn(f,$),C}function y(f,v,x,S){var C=Sr(x);if(typeof C!="function")throw Error(T(150));if(x=C.call(x),x==null)throw Error(T(151));for(var E=C=null,P=v,$=v=0,A=null,k=x.next();P!==null&&!k.done;$++,k=x.next()){P.index>$?(A=P,P=null):A=P.sibling;var D=p(f,P,k.value,S);if(D===null){P===null&&(P=A);break}e&&P&&D.alternate===null&&t(f,P),v=i(D,v,$),E===null?C=D:E.sibling=D,E=D,P=A}if(k.done)return n(f,P),ue&&fn(f,$),C;if(P===null){for(;!k.done;$++,k=x.next())k=m(f,k.value,S),k!==null&&(v=i(k,v,$),E===null?C=k:E.sibling=k,E=k);return ue&&fn(f,$),C}for(P=r(f,P);!k.done;$++,k=x.next())k=g(P,f,$,k.value,S),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?$:k.key),v=i(k,v,$),E===null?C=k:E.sibling=k,E=k);return e&&P.forEach(function(z){return t(f,z)}),ue&&fn(f,$),C}function w(f,v,x,S){if(typeof x=="object"&&x!==null&&x.type===_n&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:e:{for(var C=x.key,E=v;E!==null;){if(E.key===C){if(C=x.type,C===_n){if(E.tag===7){n(f,E.sibling),v=o(E,x.props.children),v.return=f,f=v;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&Ud(C)===E.type){n(f,E.sibling),v=o(E,x.props),v.ref=$r(f,E,x),v.return=f,f=v;break e}n(f,E);break}else t(f,E);E=E.sibling}x.type===_n?(v=bn(x.props.children,f.mode,S,x.key),v.return=f,f=v):(S=Ko(x.type,x.key,x.props,null,f.mode,S),S.ref=$r(f,v,x),S.return=f,f=S)}return a(f);case Fn:e:{for(E=x.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(f,v.sibling),v=o(v,x.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else t(f,v);v=v.sibling}v=Pa(x,f.mode,S),v.return=f,f=v}return a(f);case Ht:return E=x._init,w(f,v,E(x._payload),S)}if(zr(x))return b(f,v,x,S);if(Sr(x))return y(f,v,x,S);zo(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(f,v.sibling),v=o(v,x),v.return=f,f=v):(n(f,v),v=Ea(x,f.mode,S),v.return=f,f=v),a(f)):n(f,v)}return w}var sr=qp(!0),Gp=qp(!1),ui=cn(null),fi=null,Gn=null,rl=null;function ol(){rl=Gn=fi=null}function il(e){var t=ui.current;ce(ui),e._currentValue=t}function as(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){fi=e,rl=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(rl!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(fi===null)throw Error(T(308));Gn=e,fi.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var gn=null;function al(e){gn===null?gn=[e]:gn.push(e)}function Yp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,al(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,al(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function Hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var l=c,d=l.next;l.next=null,a===null?i=d:a.next=d,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==a&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(i!==null){var m=o.baseState;a=0,u=d=l=null,c=i;do{var p=c.lane,g=c.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,y=c;switch(p=t,g=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){m=b.call(g,m,p);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,p=typeof b=="function"?b.call(g,m,p):b,p==null)break e;m=ve({},m,p);break e;case 2:Wt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[c]:p.push(c))}else g={eventTime:g,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=g,l=m):u=u.next=g,a|=p;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;p=c,c=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(l=m),o.baseState=l,o.firstBaseUpdate=d,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=a,e.lanes=a,e.memoizedState=m}}function Wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var mo={},Et=cn(mo),no=cn(mo),ro=cn(mo);function xn(e){if(e===mo)throw Error(T(174));return e}function ll(e,t){switch(le(ro,t),le(no,e),le(Et,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}ce(Et),le(Et,t)}function lr(){ce(Et),ce(no),ce(ro)}function Jp(e){xn(ro.current);var t=xn(Et.current),n=Ra(t,e.type);t!==n&&(le(no,e),le(Et,n))}function dl(e){no.current===e&&(ce(Et),ce(no))}var fe=cn(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function cl(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var qo=Ft.ReactCurrentDispatcher,ba=Ft.ReactCurrentBatchConfig,En=0,me=null,Ce=null,ke=null,gi=!1,Or=!1,oo=0,Iv=0;function Ne(){throw Error(T(321))}function pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function ul(e,t,n,r,o,i){if(En=i,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Bv:Mv,e=n(r,o),Or){i=0;do{if(Or=!1,oo=0,25<=i)throw Error(T(301));i+=1,ke=Ce=null,t.updateQueue=null,qo.current=Fv,e=n(r,o)}while(Or)}if(qo.current=xi,t=Ce!==null&&Ce.next!==null,En=0,ke=Ce=me=null,gi=!1,t)throw Error(T(300));return e}function fl(){var e=oo!==0;return oo=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?me.memoizedState=ke=e:ke=ke.next=e,ke}function lt(){if(Ce===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=ke===null?me.memoizedState:ke.next;if(t!==null)ke=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},ke===null?me.memoizedState=ke=e:ke=ke.next=e}return ke}function io(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var c=a=null,l=null,d=i;do{var u=d.lane;if((En&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=m,a=r):l=l.next=m,me.lanes|=u,Pn|=u}d=d.next}while(d!==null&&d!==i);l===null?a=r:l.next=c,gt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,me.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);gt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Kp(){}function Xp(e,t){var n=me,r=lt(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,ml(tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ao(9,eu.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(T(349));En&30||Zp(n,t,o)}return o}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eu(e,t,n,r){t.value=n,t.getSnapshot=r,nu(t)&&ru(e)}function tu(e,t,n){return n(function(){nu(t)&&ru(e)})}function nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function ru(e){var t=Tt(e,1);t!==null&&vt(t,e,1,-1)}function qd(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=Tv.bind(null,me,e),[t.memoizedState,e]}function ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ou(){return lt().memoizedState}function Go(e,t,n,r){var o=Ct();me.flags|=e,o.memoizedState=ao(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var a=Ce.memoizedState;if(i=a.destroy,r!==null&&pl(r,a.deps)){o.memoizedState=ao(t,n,i,r);return}}me.flags|=e,o.memoizedState=ao(1|t,n,i,r)}function Gd(e,t){return Go(8390656,8,e,t)}function ml(e,t){return Mi(2048,8,e,t)}function iu(e,t){return Mi(4,2,e,t)}function au(e,t){return Mi(4,4,e,t)}function su(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lu(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,su.bind(null,t,e),n)}function vl(){}function du(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cu(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pu(e,t,n){return En&21?(gt(n,t)||(n=gp(),me.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function zv(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{ie=n,ba.transition=r}}function uu(){return lt().memoizedState}function Lv(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fu(e))mu(t,n);else if(n=Yp(e,t,n,r),n!==null){var o=Re();vt(n,e,r,o),vu(n,t,r)}}function Tv(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fu(e))mu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,c=i(a,n);if(o.hasEagerState=!0,o.eagerState=c,gt(c,a)){var l=t.interleaved;l===null?(o.next=o,al(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Yp(e,t,o,r),n!==null&&(o=Re(),vt(n,e,r,o),vu(n,t,r))}}function fu(e){var t=e.alternate;return e===me||t!==null&&t===me}function mu(e,t){Or=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var xi={readContext:st,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Bv={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lv.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:vl,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=zv.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=Ct();if(ue){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ee===null)throw Error(T(349));En&30||Zp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Gd(tu.bind(null,r,i,e),[e]),r.flags|=2048,ao(9,eu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ee.identifierPrefix;if(ue){var n=Dt,r=At;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Iv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mv={readContext:st,useCallback:du,useContext:st,useEffect:ml,useImperativeHandle:lu,useInsertionEffect:iu,useLayoutEffect:au,useMemo:cu,useReducer:wa,useRef:ou,useState:function(){return wa(io)},useDebugValue:vl,useDeferredValue:function(e){var t=lt();return pu(t,Ce.memoizedState,e)},useTransition:function(){var e=wa(io)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:Xp,useId:uu,unstable_isNewReconciler:!1},Fv={readContext:st,useCallback:du,useContext:st,useEffect:ml,useImperativeHandle:lu,useInsertionEffect:iu,useLayoutEffect:au,useMemo:cu,useReducer:Ca,useRef:ou,useState:function(){return Ca(io)},useDebugValue:vl,useDeferredValue:function(e){var t=lt();return Ce===null?t.memoizedState=e:pu(t,Ce.memoizedState,e)},useTransition:function(){var e=Ca(io)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:Xp,useId:uu,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fi={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),o=nn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(vt(t,e,o,r),Wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),o=nn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(vt(t,e,o,r),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=nn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(vt(t,e,r,n),Wo(t,e,r))}};function Yd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(o,i):!0}function gu(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=qe(t)?Sn:Te.current,r=t.contextTypes,i=(r=r!=null)?ir(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fi.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},sl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=qe(t)?Sn:Te.current,o.context=ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ss(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Fi.enqueueReplaceState(o,o.state,null),mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=um(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _v=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,ys=r),ds(e,t)},n}function hu(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ds(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Jd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _v;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zv.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Rv=Ft.ReactCurrentOwner,He=!1;function _e(e,t,n,r){t.child=e===null?Gp(t,null,n,r):sr(t,e.child,n,r)}function Zd(e,t,n,r,o){n=n.render;var i=t.ref;return er(t,o),r=ul(e,t,n,r,i,o),n=fl(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(ue&&n&&el(t),t.flags|=1,_e(e,t,r,o),t.child)}function ec(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Sl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yu(e,t,i,r,o)):(e=Ko(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(a,r)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function yu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Xr(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return cs(e,t,n,r,o)}function bu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Qn,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Qn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,le(Qn,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,le(Qn,Qe),Qe|=r;return _e(e,t,o,n),t.child}function wu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,n,r,o){var i=qe(n)?Sn:Te.current;return i=ir(t,i),er(t,o),n=ul(e,t,n,r,i,o),r=fl(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(ue&&r&&el(t),t.flags|=1,_e(e,t,n,o),t.child)}function tc(e,t,n,r,o){if(qe(n)){var i=!0;di(t)}else i=!1;if(er(t,o),t.stateNode===null)Yo(e,t),gu(t,n,r),ls(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=st(d):(d=qe(n)?Sn:Te.current,d=ir(t,d));var u=n.getDerivedStateFromProps,m=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||l!==d)&&Qd(t,a,r,d),Wt=!1;var p=t.memoizedState;a.state=p,mi(t,r,a,o),l=t.memoizedState,c!==r||p!==l||We.current||Wt?(typeof u=="function"&&(ss(t,n,u,r),l=t.memoizedState),(c=Wt||Yd(t,n,c,r,p,l,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=d,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qp(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:pt(t.type,c),a.props=d,m=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=qe(n)?Sn:Te.current,l=ir(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==m||p!==l)&&Qd(t,a,r,l),Wt=!1,p=t.memoizedState,a.state=p,mi(t,r,a,o);var b=t.memoizedState;c!==m||p!==b||We.current||Wt?(typeof g=="function"&&(ss(t,n,g,r),b=t.memoizedState),(d=Wt||Yd(t,n,d,r,p,b,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=l,r=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ps(e,t,n,r,i,o)}function ps(e,t,n,r,o,i){wu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Rd(t,n,!1),Bt(e,t,i);r=t.stateNode,Rv.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,c,i)):_e(e,t,c,i),t.memoizedState=r.state,o&&Rd(t,n,!0),t.child}function Cu(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),ll(e,t.containerInfo)}function nc(e,t,n,r,o){return ar(),nl(o),t.flags|=256,_e(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Su(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(fe,o&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Oi(a,r,0,null),e=bn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fs(n),t.memoizedState=us,e):gl(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return Ov(e,t,a,r,c,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,c=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=rn(c,i):(i=bn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?fs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=us,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gl(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&nl(r),sr(t,e.child,null,n),e=gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ov(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Sa(Error(T(422))),Lo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Oi({mode:"visible",children:r.children},o,0,null),i=bn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sr(t,e.child,null,a),t.child.memoizedState=fs(a),t.memoizedState=us,i);if(!(t.mode&1))return Lo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(T(419)),r=Sa(i,r,void 0),Lo(e,t,a,r)}if(c=(a&e.childLanes)!==0,He||c){if(r=Ee,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),vt(r,e,o,-1))}return Cl(),r=Sa(Error(T(421))),Lo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=eg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=Zt(o.nextSibling),Ze=t,ue=!0,ft=null,e!==null&&(rt[ot++]=At,rt[ot++]=Dt,rt[ot++]=kn,At=e.id,Dt=e.overflow,kn=t),t=gl(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),as(e.return,t,n)}function ka(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ku(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ka(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ka(t,!0,n,null,i);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vv(e,t,n){switch(t.tag){case 3:Cu(t),ar();break;case 5:Jp(t);break;case 1:qe(t.type)&&di(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(ui,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Su(e,t,n):(le(fe,fe.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);le(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ku(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,bu(e,t,n)}return Bt(e,t,n)}var Eu,ms,Pu,ju;Eu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ms=function(){};Pu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(Et.current);var i=null;switch(n){case"input":o=Ba(e,o),r=Ba(e,r),i=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":o=_a(e,o),r=_a(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}Oa(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var c=o[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(c=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&de("scroll",e),i||c===l||(i=[])):(i=i||[]).push(d,l))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uv(e,t,n){var r=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return qe(t.type)&&li(),Ie(t),null;case 3:return r=t.stateNode,lr(),ce(We),ce(Te),cl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Cs(ft),ft=null))),ms(e,t),Ie(t),null;case 5:dl(t);var o=xn(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)Pu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ie(t),null}if(e=xn(Et.current),Io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[to]=i,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<Tr.length;o++)de(Tr[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":ud(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":md(r,i),de("invalid",r)}Oa(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&No(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&No(r.textContent,c,e),o=["children",""+c]):Wr.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":So(r),fd(r,i,!0);break;case"textarea":So(r),vd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[St]=t,e[to]=r,Eu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Va(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tr.length;o++)de(Tr[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":ud(e,r),o=Ba(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),de("invalid",e);break;case"textarea":md(e,r),o=_a(e,r),de("invalid",e);break;default:o=r}Oa(n,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var l=c[i];i==="style"?op(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&np(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qr(e,l):typeof l=="number"&&qr(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wr.hasOwnProperty(i)?l!=null&&i==="onScroll"&&de("scroll",e):l!=null&&Rs(e,i,l,a))}switch(n){case"input":So(e),fd(e,r,!1);break;case"textarea":So(e),vd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=xn(ro.current),xn(Et.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ie(t),null;case 13:if(ce(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Ke!==null&&t.mode&1&&!(t.flags&128))Wp(),ar(),t.flags|=98560,i=!1;else if(i=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[St]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else ft!==null&&(Cs(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Se===0&&(Se=3):Cl())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return lr(),ms(e,t),e===null&&Zr(t.stateNode.containerInfo),Ie(t),null;case 10:return il(t.type._context),Ie(t),null;case 17:return qe(t.type)&&li(),Ie(t),null;case 19:if(ce(fe),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ar(i,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vi(e),a!==null){for(t.flags|=128,Ar(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>cr&&(t.flags|=128,r=!0,Ar(i,!1),t.lanes=4194304)}else{if(!r)if(e=vi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ue)return Ie(t),null}else 2*ye()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Ar(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=fe.current,le(fe,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Hv(e,t){switch(tl(t),t.tag){case 1:return qe(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),ce(We),ce(Te),cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dl(t),null;case 13:if(ce(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(fe),null;case 4:return lr(),null;case 10:return il(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var To=!1,Le=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function vs(e,t,n){try{n()}catch(r){xe(e,t,r)}}var oc=!1;function qv(e,t){if(Xa=oi,e=Ip(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,c=-1,l=-1,d=0,u=0,m=e,p=null;t:for(;;){for(var g;m!==n||o!==0&&m.nodeType!==3||(c=a+o),m!==i||r!==0&&m.nodeType!==3||(l=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break t;if(p===n&&++d===o&&(c=a),p===i&&++u===r&&(l=a),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:e,selectionRange:n},oi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,w=b.memoizedState,f=t.stateNode,v=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:pt(t.type,y),w);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){xe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return b=oc,oc=!1,b}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&vs(t,n,i)}o=o.next}while(o!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[to],delete t[ns],delete t[$v],delete t[Av])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Au(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var je=null,ut=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ni,n)}catch{}switch(n.tag){case 5:Le||Yn(n,t);case 6:var r=je,o=ut;je=null,Ut(e,t,n),je=r,ut=o,je!==null&&(ut?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(ut?(e=je,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),Jr(e)):xa(je,n.stateNode));break;case 4:r=je,o=ut,je=n.stateNode.containerInfo,ut=!0,Ut(e,t,n),je=r,ut=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&vs(n,t,a),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!Le&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){xe(n,t,c)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ut(e,t,n),Le=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wv),t.forEach(function(r){var o=tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:je=c.stateNode,ut=!1;break e;case 3:je=c.stateNode.containerInfo,ut=!0;break e;case 4:je=c.stateNode.containerInfo,ut=!0;break e}c=c.return}if(je===null)throw Error(T(160));Du(i,a,o),je=null,ut=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(d){xe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling}function Nu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Vr(3,e,e.return),_i(3,e)}catch(y){xe(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){xe(e,e.return,y)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(y){xe(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Zc(o,i),Va(c,a);var d=Va(c,i);for(a=0;a<l.length;a+=2){var u=l[a],m=l[a+1];u==="style"?op(o,m):u==="dangerouslySetInnerHTML"?np(o,m):u==="children"?qr(o,m):Rs(o,u,m,d)}switch(c){case"input":Ma(o,i);break;case"textarea":ep(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Jn(o,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Jn(o,!!i.multiple,i.defaultValue,!0):Jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[to]=i}catch(y){xe(e,e.return,y)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){xe(e,e.return,y)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(y){xe(e,e.return,y)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(yl=ye())),r&4&&ac(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(d=Le)||u,ct(t,e),Le=d):ct(t,e),wt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(V=e,u=e.child;u!==null;){for(m=V=u;V!==null;){switch(p=V,g=p.child,p.tag){case 0:case 11:case 14:case 15:Vr(4,p,p.return);break;case 1:Yn(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){xe(r,n,y)}}break;case 5:Yn(p,p.return);break;case 22:if(p.memoizedState!==null){lc(m);continue}}g!==null?(g.return=p,V=g):lc(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{o=m.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=rp("display",a))}catch(y){xe(e,e.return,y)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){xe(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ct(t,e),wt(e),r&4&&ac(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Au(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=ic(e);hs(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,c=ic(e);xs(e,c,a);break;default:throw Error(T(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gv(e,t,n){V=e,Iu(e)}function Iu(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var o=V,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||To;if(!a){var c=o.alternate,l=c!==null&&c.memoizedState!==null||Le;c=To;var d=Le;if(To=a,(Le=l)&&!d)for(V=o;V!==null;)a=V,l=a.child,a.tag===22&&a.memoizedState!==null?dc(o):l!==null?(l.return=a,V=l):dc(o);for(;i!==null;)V=i,Iu(i),i=i.sibling;V=o,To=c,Le=d}sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,V=i):sc(e)}}function sc(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wd(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Jr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Le||t.flags&512&&gs(t)}catch(p){xe(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function lc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function dc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){xe(t,o,l)}}var i=t.return;try{gs(t)}catch(l){xe(t,i,l)}break;case 5:var a=t.return;try{gs(t)}catch(l){xe(t,a,l)}}}catch(l){xe(t,t.return,l)}if(t===e){V=null;break}var c=t.sibling;if(c!==null){c.return=t.return,V=c;break}V=t.return}}var Yv=Math.ceil,hi=Ft.ReactCurrentDispatcher,xl=Ft.ReactCurrentOwner,at=Ft.ReactCurrentBatchConfig,re=0,Ee=null,we=null,$e=0,Qe=0,Qn=cn(0),Se=0,so=null,Pn=0,Ri=0,hl=0,Ur=null,Ue=null,yl=0,cr=1/0,jt=null,yi=!1,ys=null,tn=null,Bo=!1,Qt=null,bi=0,Hr=0,bs=null,Qo=-1,Jo=0;function Re(){return re&6?ye():Qo!==-1?Qo:Qo=ye()}function nn(e){return e.mode&1?re&2&&$e!==0?$e&-$e:Nv.transition!==null?(Jo===0&&(Jo=gp()),Jo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function vt(e,t,n,r){if(50<Hr)throw Hr=0,bs=null,Error(T(185));po(e,n,r),(!(re&2)||e!==Ee)&&(e===Ee&&(!(re&2)&&(Ri|=n),Se===4&&Gt(e,$e)),Ge(e,r),n===1&&re===0&&!(t.mode&1)&&(cr=ye()+500,Bi&&pn()))}function Ge(e,t){var n=e.callbackNode;Nm(e,t);var r=ri(e,e===Ee?$e:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?Dv(cc.bind(null,e)):Vp(cc.bind(null,e)),Pv(function(){!(re&6)&&pn()}),n=null;else{switch(xp(r)){case 1:n=Ws;break;case 4:n=mp;break;case 16:n=ni;break;case 536870912:n=vp;break;default:n=ni}n=Ru(n,zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zu(e,t){if(Qo=-1,Jo=0,re&6)throw Error(T(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=ri(e,e===Ee?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var o=re;re|=2;var i=Tu();(Ee!==e||$e!==t)&&(jt=null,cr=ye()+500,yn(e,t));do try{Kv();break}catch(c){Lu(e,c)}while(!0);ol(),hi.current=i,re=o,we!==null?t=0:(Ee=null,$e=0,t=Se)}if(t!==0){if(t===2&&(o=Ga(e),o!==0&&(r=o,t=ws(e,o))),t===1)throw n=so,yn(e,0),Gt(e,r),Ge(e,ye()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qv(o)&&(t=wi(e,r),t===2&&(i=Ga(e),i!==0&&(r=i,t=ws(e,i))),t===1))throw n=so,yn(e,0),Gt(e,r),Ge(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:mn(e,Ue,jt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=yl+500-ye(),10<t)){if(ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ts(mn.bind(null,e,Ue,jt),t);break}mn(e,Ue,jt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-mt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yv(r/1960))-r,10<r){e.timeoutHandle=ts(mn.bind(null,e,Ue,jt),r);break}mn(e,Ue,jt);break;case 5:mn(e,Ue,jt);break;default:throw Error(T(329))}}}return Ge(e,ye()),e.callbackNode===n?zu.bind(null,e):null}function ws(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Cs(t)),e}function Cs(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Qv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~hl,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(re&6)throw Error(T(327));tr();var t=ri(e,0);if(!(t&1))return Ge(e,ye()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=ws(e,r))}if(n===1)throw n=so,yn(e,0),Gt(e,t),Ge(e,ye()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Ue,jt),Ge(e,ye()),null}function bl(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(cr=ye()+500,Bi&&pn())}}function jn(e){Qt!==null&&Qt.tag===0&&!(re&6)&&tr();var t=re;re|=1;var n=at.transition,r=ie;try{if(at.transition=null,ie=1,e)return e()}finally{ie=r,at.transition=n,re=t,!(re&6)&&pn()}}function wl(){Qe=Qn.current,ce(Qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ev(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:lr(),ce(We),ce(Te),cl();break;case 5:dl(r);break;case 4:lr();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:il(r.type._context);break;case 22:case 23:wl()}n=n.return}if(Ee=e,we=e=rn(e.current,null),$e=Qe=t,Se=0,so=null,hl=Ri=Pn=0,Ue=Ur=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}gn=null}return e}function Lu(e,t){do{var n=we;try{if(ol(),qo.current=xi,gi){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gi=!1}if(En=0,ke=Ce=me=null,Or=!1,oo=0,xl.current=null,n===null||n.return===null){Se=1,so=t,we=null;break}e:{var i=e,a=n.return,c=n,l=t;if(t=$e,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Kd(a);if(g!==null){g.flags&=-257,Xd(g,a,c,i,t),g.mode&1&&Jd(i,d,t),t=g,l=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(l),t.updateQueue=y}else b.add(l);break e}else{if(!(t&1)){Jd(i,d,t),Cl();break e}l=Error(T(426))}}else if(ue&&c.mode&1){var w=Kd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xd(w,a,c,i,t),nl(dr(l,c));break e}}i=l=dr(l,c),Se!==4&&(Se=2),Ur===null?Ur=[i]:Ur.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=xu(i,l,t);Hd(i,f);break e;case 1:c=l;var v=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tn===null||!tn.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=hu(i,c,t);Hd(i,S);break e}}i=i.return}while(i!==null)}Mu(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Tu(){var e=hi.current;return hi.current=xi,e===null?xi:e}function Cl(){(Se===0||Se===3||Se===2)&&(Se=4),Ee===null||!(Pn&268435455)&&!(Ri&268435455)||Gt(Ee,$e)}function wi(e,t){var n=re;re|=2;var r=Tu();(Ee!==e||$e!==t)&&(jt=null,yn(e,t));do try{Jv();break}catch(o){Lu(e,o)}while(!0);if(ol(),re=n,hi.current=r,we!==null)throw Error(T(261));return Ee=null,$e=0,Se}function Jv(){for(;we!==null;)Bu(we)}function Kv(){for(;we!==null&&!Cm();)Bu(we)}function Bu(e){var t=_u(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Mu(e):we=t,xl.current=null}function Mu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hv(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=Uv(n,t,Qe),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function mn(e,t,n){var r=ie,o=at.transition;try{at.transition=null,ie=1,Xv(e,t,n,r)}finally{at.transition=o,ie=r}return null}function Xv(e,t,n,r){do tr();while(Qt!==null);if(re&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Im(e,i),e===Ee&&(we=Ee=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,Ru(ni,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var a=ie;ie=1;var c=re;re|=4,xl.current=null,qv(e,n),Nu(n,e),hv(Za),oi=!!Xa,Za=Xa=null,e.current=n,Gv(n),Sm(),re=c,ie=a,at.transition=i}else e.current=n;if(Bo&&(Bo=!1,Qt=e,bi=o),i=e.pendingLanes,i===0&&(tn=null),Pm(n.stateNode),Ge(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yi)throw yi=!1,e=ys,ys=null,e;return bi&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===bs?Hr++:(Hr=0,bs=e):Hr=0,pn(),null}function tr(){if(Qt!==null){var e=xp(bi),t=at.transition,n=ie;try{if(at.transition=null,ie=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,bi=0,re&6)throw Error(T(331));var o=re;for(re|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var c=i.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(V=d;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:Vr(8,u,i)}var m=u.child;if(m!==null)m.return=u,V=m;else for(;V!==null;){u=V;var p=u.sibling,g=u.return;if($u(u),u===d){V=null;break}if(p!==null){p.return=g,V=p;break}V=g}}}var b=i.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,V=f;break e}V=i.return}}var v=e.current;for(V=v;V!==null;){a=V;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,V=x;else e:for(a=v;V!==null;){if(c=V,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_i(9,c)}}catch(C){xe(c,c.return,C)}if(c===a){V=null;break e}var S=c.sibling;if(S!==null){S.return=c.return,V=S;break e}V=c.return}}if(re=o,pn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ni,e)}catch{}r=!0}return r}finally{ie=n,at.transition=t}}return!1}function pc(e,t,n){t=dr(n,t),t=xu(e,t,1),e=en(e,t,1),t=Re(),e!==null&&(po(e,1,t),Ge(e,t))}function xe(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=dr(n,e),e=hu(t,e,1),t=en(t,e,1),e=Re(),t!==null&&(po(t,1,e),Ge(t,e));break}}t=t.return}}function Zv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&($e&n)===n&&(Se===4||Se===3&&($e&130023424)===$e&&500>ye()-yl?yn(e,0):hl|=n),Ge(e,t)}function Fu(e,t){t===0&&(e.mode&1?(t=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):t=1);var n=Re();e=Tt(e,t),e!==null&&(po(e,t,n),Ge(e,n))}function eg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fu(e,n)}function tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Fu(e,n)}var _u;_u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Vv(e,t,n);He=!!(e.flags&131072)}else He=!1,ue&&t.flags&1048576&&Up(t,pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yo(e,t),e=t.pendingProps;var o=ir(t,Te.current);er(t,n),o=ul(null,t,r,e,o,n);var i=fl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(i=!0,di(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,sl(t),o.updater=Fi,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=ps(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&el(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rg(r),e=pt(r,e),o){case 0:t=cs(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=Zd(null,t,r,e,n);break e;case 14:t=ec(null,t,r,pt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),cs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),tc(e,t,r,o,n);case 3:e:{if(Cu(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Qp(e,t),mi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=dr(Error(T(423)),t),t=nc(e,t,r,n,o);break e}else if(r!==o){o=dr(Error(T(424)),t),t=nc(e,t,r,n,o);break e}else for(Ke=Zt(t.stateNode.containerInfo.firstChild),Ze=t,ue=!0,ft=null,n=Gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=Bt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Jp(t),e===null&&is(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,es(r,o)?a=null:i!==null&&es(r,i)&&(t.flags|=32),wu(e,t),_e(e,t,a,n),t.child;case 6:return e===null&&is(t),null;case 13:return Su(e,t,n);case 4:return ll(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Zd(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,le(ui,r._currentValue),r._currentValue=a,i!==null)if(gt(i.value,a)){if(i.children===o.children&&!We.current){t=Bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){a=i.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=It(-1,n&-n),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),as(i.return,n,t),c.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),as(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,er(t,n),o=st(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),ec(e,t,r,o,n);case 15:return yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Yo(e,t),t.tag=1,qe(r)?(e=!0,di(t)):e=!1,er(t,n),gu(t,r,o),ls(t,r,o,n),ps(null,t,r,!0,e,n);case 19:return ku(e,t,n);case 22:return bu(e,t,n)}throw Error(T(156,t.tag))};function Ru(e,t){return fp(e,t)}function ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new ng(e,t,n,r)}function Sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rg(e){if(typeof e=="function")return Sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vs)return 11;if(e===Us)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Sl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _n:return bn(n.children,o,i,t);case Os:a=8,o|=8;break;case Ia:return e=it(12,n,t,o|2),e.elementType=Ia,e.lanes=i,e;case za:return e=it(13,n,t,o),e.elementType=za,e.lanes=i,e;case La:return e=it(19,n,t,o),e.elementType=La,e.lanes=i,e;case Jc:return Oi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yc:a=10;break e;case Qc:a=9;break e;case Vs:a=11;break e;case Us:a=14;break e;case Ht:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=it(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Oi(e,t,n,r){return e=it(22,e,r,t),e.elementType=Jc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ea(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function og(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function kl(e,t,n,r,o,i,a,c,l){return e=new og(e,t,n,c,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(i),e}function ig(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ou(e){if(!e)return sn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(qe(n))return Op(e,n,t)}return t}function Vu(e,t,n,r,o,i,a,c,l){return e=kl(n,r,!0,e,o,i,a,c,l),e.context=Ou(null),n=e.current,r=Re(),o=nn(n),i=It(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,po(e,o,r),Ge(e,r),e}function Vi(e,t,n,r){var o=t.current,i=Re(),a=nn(o);return n=Ou(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,a),e!==null&&(vt(e,o,a,i),Wo(e,o,a)),a}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function El(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function ag(){return null}var Uu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pl(e){this._internalRoot=e}Ui.prototype.render=Pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Vi(e,t,null,null)};Ui.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Vi(null,e,null,null)}),t[Lt]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Cp(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function sg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Ci(a);i.call(d)}}var a=Vu(t,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=a,e[Lt]=a.current,Zr(e.nodeType===8?e.parentNode:e),jn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var d=Ci(l);c.call(d)}}var l=kl(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=l,e[Lt]=l.current,Zr(e.nodeType===8?e.parentNode:e),jn(function(){Vi(t,l,n,r)}),l}function Wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var c=o;o=function(){var l=Ci(a);c.call(l)}}Vi(t,a,e,o)}else a=sg(n,t,e,o,r);return Ci(a)}hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(qs(t,n|1),Ge(t,ye()),!(re&6)&&(cr=ye()+500,pn()))}break;case 13:jn(function(){var r=Tt(e,1);if(r!==null){var o=Re();vt(r,e,1,o)}}),El(e,1)}};Gs=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Re();vt(t,e,134217728,n)}El(e,134217728)}};yp=function(e){if(e.tag===13){var t=nn(e),n=Tt(e,t);if(n!==null){var r=Re();vt(n,e,t,r)}El(e,t)}};bp=function(){return ie};wp=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Ha=function(e,t,n){switch(t){case"input":if(Ma(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ti(r);if(!o)throw Error(T(90));Xc(r),Ma(r,o)}}}break;case"textarea":ep(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};sp=bl;lp=jn;var lg={usingClientEntryPoint:!1,Events:[fo,Un,Ti,ip,ap,bl]},Dr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dg={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pp(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ni=Mo.inject(dg),kt=Mo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(t))throw Error(T(200));return ig(e,t,null,n)};tt.createRoot=function(e,t){if(!jl(e))throw Error(T(299));var n=!1,r="",o=Uu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=kl(e,1,!1,null,null,n,!1,r,o),e[Lt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Pl(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=pp(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return jn(e)};tt.hydrate=function(e,t,n){if(!Hi(t))throw Error(T(200));return Wi(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!jl(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Uu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vu(t,null,e,1,n??null,o,!1,i,a),e[Lt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ui(t)};tt.render=function(e,t,n){if(!Hi(t))throw Error(T(200));return Wi(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(T(40));return e._reactRootContainer?(jn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};tt.unstable_batchedUpdates=bl;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hi(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Wi(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Hu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hu)}catch(e){console.error(e)}}Hu(),Hc.exports=tt;var cg=Hc.exports,mc=cg;Da.createRoot=mc.createRoot,Da.hydrateRoot=mc.hydrateRoot;function pg(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{id:"login-screen",style:{display:"flex",position:"fixed",inset:0,zIndex:9999,background:"linear-gradient(135deg,#0C1B2E 0%,#1A3050 60%,#0C1B2E 100%)",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"0 24px"},children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[s.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"48px",fontWeight:900,color:"#fff",letterSpacing:"-2px"},children:["LIVI",s.jsx("span",{style:{color:"#1A6BC4"},children:"O"})]}),s.jsx("div",{style:{fontSize:"11px",color:"#8AAAC8",letterSpacing:"3px",textTransform:"uppercase",marginTop:"2px"},children:"Building Systems"})]}),s.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"32px 28px",boxShadow:"0 24px 60px rgba(0,0,0,.5)"},children:[s.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Sign In"}),s.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"22px"},children:"Project Management Platform"}),s.jsx("div",{id:"login-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"9px 12px",borderRadius:"6px",marginBottom:"14px"}}),s.jsxs("div",{style:{marginBottom:"14px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"5px"},children:"Username"}),s.jsx("input",{id:"login-user",type:"text",placeholder:"Enter username",autoComplete:"username",style:{width:"100%",padding:"11px 13px",border:"1.5px solid #e0ddd5",borderRadius:"7px",fontSize:"13px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{e.key==="Enter"&&document.getElementById("login-pass").focus()}})]}),s.jsxs("div",{style:{marginBottom:"22px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"5px"},children:"Password"}),s.jsxs("div",{style:{position:"relative"},children:[s.jsx("input",{id:"login-pass",type:"password",placeholder:"Enter password",autoComplete:"current-password",style:{width:"100%",padding:"11px 40px 11px 13px",border:"1.5px solid #e0ddd5",borderRadius:"7px",fontSize:"13px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doLogin)==null||t.call(window))}}),s.jsx("button",{onClick:()=>{var e;return(e=window.toggleLoginPass)==null?void 0:e.call(window)},style:{position:"absolute",right:"11px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#aaa",fontSize:"15px"},children:"👁"})]})]}),s.jsx("button",{onClick:()=>{var e;return(e=window.doLogin)==null?void 0:e.call(window)},style:{width:"100%",padding:"13px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:700,cursor:"pointer",letterSpacing:".5px"},onMouseOver:e=>e.target.style.background="#1A3050",onMouseOut:e=>e.target.style.background="#0C1B2E",children:"Sign In →"}),s.jsxs("div",{style:{marginTop:"14px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("button",{onClick:()=>{var e;return(e=window.showForgotPass)==null?void 0:e.call(window)},style:{background:"none",border:"none",color:"#1A6BC4",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"Forgot Password?"}),s.jsx("button",{onClick:()=>{var e;return(e=window.showSetupPass)==null?void 0:e.call(window)},style:{background:"none",border:"none",color:"#6b6a64",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"Change Password"})]})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"16px",fontSize:"10px",color:"#8AAAC8"},children:"© Livio Building Systems · Secure Access"})]})}),s.jsx("div",{id:"setup-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"360px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[s.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"4px"},children:"Change Password"}),s.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Verify current credentials to set a new password"}),s.jsx("div",{id:"setup-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Current Username"}),s.jsx("input",{id:"setup-user",type:"text",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Current Password"}),s.jsx("input",{id:"setup-curr",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"New Password"}),s.jsx("input",{id:"setup-new",type:"password",placeholder:"Min 4 characters",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),s.jsxs("div",{style:{marginBottom:"18px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Confirm New Password"}),s.jsx("input",{id:"setup-conf",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doSetupPass)==null||t.call(window))}})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{onClick:()=>{var e;return(e=window.closeSetupPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),s.jsx("button",{onClick:()=>{var e;return(e=window.doSetupPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Update Password"})]})]})}),s.jsx("div",{id:"forgot-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"380px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[s.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Forgot Password?"}),s.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Enter your username and registered email — we'll send a reset link."}),s.jsx("div",{id:"forgot-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),s.jsx("div",{id:"forgot-success",style:{display:"none",background:"#EDF8E5",border:"1px solid #B8DCA0",color:"#2D6A0F",fontSize:"11px",padding:"10px 12px",borderRadius:"6px",marginBottom:"12px"}}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Username"}),s.jsx("input",{id:"forgot-user",type:"text",placeholder:"Enter your username",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5"})]}),s.jsxs("div",{style:{marginBottom:"18px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Registered Email Address"}),s.jsx("input",{id:"forgot-email",type:"email",placeholder:"Enter your registered email",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doForgotPass)==null||t.call(window))}})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{onClick:()=>{var e;return(e=window.closeForgotPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),s.jsx("button",{onClick:()=>{var e;return(e=window.doForgotPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Send Reset Link →"})]}),s.jsx("div",{style:{marginTop:"12px",textAlign:"center"},children:s.jsx("button",{id:"forgot-reset-btn",onClick:()=>{var e;return(e=window.showResetPass)==null?void 0:e.call(window)},style:{display:"none",background:"none",border:"none",color:"#1A6BC4",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"I have a reset code → Set New Password"})})]})}),s.jsx("div",{id:"reset-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"380px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[s.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Set New Password"}),s.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Enter the reset code from your email and choose a new password."}),s.jsx("div",{id:"reset-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Username"}),s.jsx("input",{id:"reset-user",type:"text",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Reset Code (from email)"}),s.jsx("input",{id:"reset-code",type:"text",placeholder:"6-digit code",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box",letterSpacing:"3px",fontWeight:700}})]}),s.jsxs("div",{style:{marginBottom:"11px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"New Password"}),s.jsx("input",{id:"reset-new",type:"password",placeholder:"Min 4 characters",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),s.jsxs("div",{style:{marginBottom:"18px"},children:[s.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Confirm New Password"}),s.jsx("input",{id:"reset-conf",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doResetPass)==null||t.call(window))}})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{onClick:()=>{var e;return(e=window.closeResetPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),s.jsx("button",{onClick:()=>{var e;return(e=window.doResetPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Reset Password"})]}),s.jsx("div",{style:{marginTop:"12px",textAlign:"center"},children:s.jsx("button",{onClick:()=>{var e,t;(e=window.closeForgotPass)==null||e.call(window),(t=window.closeResetPass)==null||t.call(window)},style:{background:"none",border:"none",color:"#1A6BC4",fontSize:"10px",cursor:"pointer",textDecoration:"underline"},children:"← Back to Sign In"})})]})})]})}function ug(){return s.jsxs("aside",{className:"sb",id:"sidebar",children:[s.jsxs("div",{className:"sb-top",children:[s.jsx("div",{className:"sb-logo",children:"Livio Building Systems"}),s.jsx("div",{className:"sb-sub",children:"Construction Management"})]}),s.jsxs("div",{className:"sb-proj-box",children:[s.jsx("div",{className:"sb-proj-lbl",children:"Active Project"}),s.jsxs("button",{className:"sb-proj-btn",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"projects")},children:[s.jsx("span",{className:"sb-proj-name",id:"sb-proj",children:"Select a project"}),s.jsx("span",{style:{color:"#8AAAC8",fontSize:"11px"},children:"⇄"})]})]}),s.jsx("div",{className:"sb-sec",children:"Pages"}),s.jsxs("div",{className:"sb-scroll",children:[s.jsxs("ul",{className:"sb-nav",children:[s.jsx("li",{"data-page":"projects",children:s.jsxs("a",{id:"n-projects",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"projects")},children:["  ",s.jsx("span",{className:"ic",children:"🏠"}),"All Projects     ",s.jsx("span",{className:"ct",id:"ct-projects",children:"0"})]})}),s.jsx("li",{"data-page":"dashboard",children:s.jsxs("a",{id:"n-dashboard",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"dashboard")},children:[" ",s.jsx("span",{className:"ic",children:"📊"}),"Dashboard"]})}),s.jsx("li",{"data-page":"works",children:s.jsxs("a",{id:"n-works",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"works")},children:["     ",s.jsx("span",{className:"ic",children:"🏗"}),"Works at Site    ",s.jsx("span",{className:"ct",id:"ct-works",children:"0"})]})}),s.jsx("li",{"data-page":"milestones",children:s.jsxs("a",{id:"n-milestones",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"milestones")},children:[s.jsx("span",{className:"ic",children:"🏆"}),"Milestones       ",s.jsx("span",{className:"ct",id:"ct-ms",children:"0"})]})}),s.jsx("li",{"data-page":"quotes",children:s.jsxs("a",{id:"n-quotes",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"quotes")},children:["    ",s.jsx("span",{className:"ic",children:"💰"}),"Quotes            ",s.jsx("span",{className:"ct",id:"ct-q",children:"0"})]})}),s.jsx("li",{"data-page":"plans",children:s.jsxs("a",{id:"n-plans",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"plans")},children:["     ",s.jsx("span",{className:"ic",children:"📐"}),"Plans & Docs      ",s.jsx("span",{className:"ct",id:"ct-plans",children:"0"})]})}),s.jsx("li",{"data-page":"inspections",children:s.jsxs("a",{id:"n-inspections",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"inspections")},children:[s.jsx("span",{className:"ic",children:"🔍"}),"Inspections      ",s.jsx("span",{className:"ct",id:"ct-ins",children:"0"})]})}),s.jsx("li",{"data-page":"vendor-directory",children:s.jsxs("a",{id:"n-vendor-directory",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"vendor-directory")},children:[s.jsx("span",{className:"ic",children:"📋"}),"Vendor Directory"]})}),s.jsx("li",{"data-page":"vendors",children:s.jsxs("a",{id:"n-vendors",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"vendors")},children:["   ",s.jsx("span",{className:"ic",children:"🤝"}),"Vendor Contracts   ",s.jsx("span",{className:"ct",id:"ct-ven",children:"0"})]})}),s.jsx("li",{"data-page":"invoices",children:s.jsxs("a",{id:"n-invoices",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"invoices")},children:["  ",s.jsx("span",{className:"ic",children:"🧾"}),"Invoices           ",s.jsx("span",{className:"ct",id:"ct-inv",children:"0"})]})}),s.jsx("li",{"data-page":"payments",children:s.jsxs("a",{id:"n-payments",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"payments")},children:["  ",s.jsx("span",{className:"ic",children:"💳"}),"Payments          ",s.jsx("span",{className:"ct",id:"ct-pay",children:"0"})]})}),s.jsx("li",{"data-page":"checklist",children:s.jsxs("a",{id:"n-checklist",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"checklist")},children:[" ",s.jsx("span",{className:"ic",children:"☑"}),"Checklist          ",s.jsx("span",{className:"ct",id:"ct-chk",children:"0"})]})}),s.jsx("li",{"data-page":"qaqc",children:s.jsxs("a",{id:"n-qaqc",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"qaqc")},children:["      ",s.jsx("span",{className:"ic",children:"🔍"}),"QA/QC              ",s.jsx("span",{className:"ct",id:"ct-qaqc",children:"0"})]})}),s.jsx("li",{"data-page":"compliance",children:s.jsxs("a",{id:"n-compliance",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"compliance")},children:[s.jsx("span",{className:"ic",children:"✅"}),"Compliance"]})}),s.jsx("li",{"data-page":"export",children:s.jsxs("a",{id:"n-export",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"export")},children:["    ",s.jsx("span",{className:"ic",children:"📥"}),"Export"]})}),s.jsx("li",{"data-page":"momentum",children:s.jsxs("a",{id:"n-momentum",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"momentum")},children:["  ",s.jsx("span",{className:"ic",children:"⚡"}),"Momentum"]})}),s.jsx("li",{"data-page":"daily-tracker",children:s.jsxs("a",{id:"n-daily-tracker",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"daily-tracker")},children:[s.jsx("span",{className:"ic",children:"📅"}),"Daily Tracker"]})}),s.jsx("li",{"data-page":"client-contract",children:s.jsxs("a",{id:"n-client-contract",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"client-contract")},children:[s.jsx("span",{className:"ic",children:"📄"}),"Client Contract"]})}),s.jsx("li",{"data-page":"client-invoice",children:s.jsxs("a",{id:"n-client-invoice",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"client-invoice")},children:[s.jsx("span",{className:"ic",children:"🧾"}),"Client Invoice"]})}),s.jsx("li",{"data-page":"settings",children:s.jsxs("a",{id:"n-settings",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"settings")},children:[s.jsx("span",{className:"ic",children:"⚙"}),"Settings"]})})]}),s.jsx("div",{className:"sb-sec",children:"CA Codes"}),s.jsxs("div",{className:"sb-codes",style:{display:"flex",flexWrap:"wrap",gap:"4px",padding:"0 14px 12px"},children:[s.jsx("span",{className:"badge2",style:{background:"var(--blue-l)",color:"var(--blue)"},children:"CBC 2022"}),s.jsx("span",{className:"badge2",style:{background:"var(--green-l)",color:"var(--green)"},children:"CALGreen"}),s.jsx("span",{className:"badge2",style:{background:"var(--amber-l)",color:"var(--amber)"},children:"Title 24"}),s.jsx("span",{className:"badge2",style:{background:"var(--purple-l)",color:"var(--purple)"},children:"CEQA"}),s.jsx("span",{className:"badge2",style:{background:"var(--red-l)",color:"var(--red)"},children:"CalOSHA"}),s.jsx("span",{className:"badge2",style:{background:"var(--teal-l)",color:"var(--teal)"},children:"Seismic D"})]}),s.jsx("div",{className:"sb-foot",id:"sb-foot",children:"No project selected"})]}),s.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255,255,255,.12)",flexShrink:0},children:[s.jsx("div",{id:"sb-user-label",style:{fontSize:"9px",color:"#8AAAC8",marginBottom:"7px",textAlign:"center",letterSpacing:".3px"}}),s.jsxs("div",{style:{display:"flex",gap:"6px"},children:[s.jsx("button",{onClick:()=>{var e;return(e=window.showManageUsers)==null?void 0:e.call(window)},title:"Manage Users",style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",padding:"8px 6px",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.12)",borderRadius:"7px",color:"#8AAAC8",fontSize:"10px",fontWeight:600,cursor:"pointer",transition:"all .2s"},onMouseOver:e=>{e.currentTarget.style.background="rgba(255,255,255,.14)",e.currentTarget.style.color="#fff"},onMouseOut:e=>{e.currentTarget.style.background="rgba(255,255,255,.07)",e.currentTarget.style.color="#8AAAC8"},children:"👥 Users"}),s.jsx("button",{onClick:()=>{var e;return(e=window.doLogout)==null?void 0:e.call(window)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px",background:"rgba(155,31,31,.18)",border:"1px solid rgba(155,31,31,.3)",borderRadius:"7px",color:"#F09595",fontSize:"11px",fontWeight:700,cursor:"pointer",transition:"all .2s"},onMouseOver:e=>e.currentTarget.style.background="rgba(155,31,31,.38)",onMouseOut:e=>e.currentTarget.style.background="rgba(155,31,31,.18)",children:"⏻ Sign Out"})]})]})]})}function fg(){return s.jsxs("div",{className:"topbar",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[s.jsx("button",{className:"mob-menu-btn",id:"mob-menu-btn",onClick:()=>{var e;return(e=window.toggleMobMenu)==null?void 0:e.call(window)},style:{display:"none",background:"none",border:"none",cursor:"pointer",padding:"6px",color:"var(--navy)",fontSize:"22px",lineHeight:1},children:"☰"}),s.jsx("div",{className:"tb-title",id:"page-title",children:"All Projects"})]}),s.jsxs("div",{className:"tb-right",children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>window.print(),children:"🖨 Print"}),s.jsx("button",{className:"btn btn-navy btn-sm",id:"add-btn",onClick:()=>{var e;return(e=window.handleAdd)==null?void 0:e.call(window)},children:"+ New Project"})]})]})}const Wu=Je.createContext();function mg({children:e}){const[t,n]=Je.useState("projects"),[r,o]=Je.useState(!1),[i,a]=Je.useState(0),c=Je.useCallback(()=>a(l=>l+1),[]);return s.jsx(Wu.Provider,{value:{curPage:t,setCurPage:n,loggedIn:r,setLoggedIn:o,triggerRender:c,renderTick:i},children:e})}const qu=()=>Je.useContext(Wu);function Fo({frameId:e,title:t,html:n,isActive:r,onActivate:o}){const i=Je.useRef(null),[a,c]=Je.useState(!1);return Je.useEffect(()=>{var l;!r||!a||!o||!((l=i.current)!=null&&l.contentWindow)||o(i.current.contentWindow)},[r,a,o]),s.jsx("iframe",{id:e,ref:i,title:t,srcDoc:n,style:{width:"100%",height:"100%",border:"none",display:"block",background:"#fff"},onLoad:()=>{var l;c(!0),r&&o&&((l=i.current)!=null&&l.contentWindow)&&o(i.current.contentWindow)}})}const vg=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>Daily Tracker</title>\r
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\r
<style>\r
:root{\r
  --bg:#0D1117;--bg2:#161B22;--bg3:#1F2937;--bg4:#243040;\r
  --border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.13);\r
  --text:#F0F6FC;--text2:#8B949E;--text3:#484F58;\r
  --orange:#FF6B2B;--og:rgba(255,107,43,0.18);--od:rgba(255,107,43,0.1);\r
  --lime:#39D353;--ld:rgba(57,211,83,0.1);\r
  --amber:#F0A824;--ad:rgba(240,168,36,0.12);\r
  --blue:#58A6FF;--bd:rgba(88,166,255,0.1);\r
  --purple:#BC8CFF;--pd:rgba(188,140,255,0.1);\r
  --red:#F85149;--rd:rgba(248,81,73,0.1);\r
  --r:10px;--r2:14px;\r
}\r
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--bg4);border-radius:10px}\r
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow:hidden}\r
\r
/* ── TOPBAR ── */\r
.topbar{height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;background:rgba(13,17,23,0.97);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}\r
.logo{display:flex;align-items:center;gap:10px}\r
.logo-icon{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#FF6B2B,#FF3D00);display:flex;align-items:center;justify-content:center;font-size:16px}\r
.logo-text{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;letter-spacing:-0.3px}\r
.logo-text em{color:var(--orange);font-style:normal}\r
.topbar-center{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);background:var(--bg2);border:1px solid var(--border);padding:5px 12px;border-radius:20px}\r
.topbar-right{display:flex;align-items:center;gap:8px}\r
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 15px;border-radius:8px;font-size:13px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;border:none;transition:all 0.15s}\r
.btn-ghost{background:transparent;color:var(--text2);border:1px solid var(--border2)}\r
.btn-ghost:hover{background:var(--bg3);color:var(--text)}\r
.btn-orange{background:linear-gradient(135deg,#FF6B2B,#E85520);color:#fff}\r
.btn-orange:hover{background:linear-gradient(135deg,#FF8C5A,#FF6B2B);transform:translateY(-1px)}\r
.btn-sm{padding:5px 12px;font-size:11px;border-radius:7px}\r
\r
/* ── LAYOUT ── */\r
.layout{display:flex;height:calc(100vh - 58px);overflow:hidden}\r
\r
/* ── SIDEBAR ── */\r
.sidebar{width:252px;flex-shrink:0;background:var(--bg2);border-right:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden}\r
.sidebar-nav{display:flex;gap:0;padding:10px 12px 0;border-bottom:1px solid var(--border)}\r
.snav-btn{flex:1;background:transparent;border:none;border-bottom:2px solid transparent;padding:7px 4px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:11px;color:var(--text3);cursor:pointer;transition:all 0.15s;text-align:center;margin-bottom:-1px}\r
.snav-btn:hover{color:var(--text2)}\r
.snav-btn.active{color:var(--orange);border-bottom-color:var(--orange)}\r
.sidebar-head{padding:12px 14px 10px;border-bottom:1px solid var(--border)}\r
.sidebar-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px}\r
.sidebar-search{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:7px 12px;color:var(--text);font-size:12px;font-family:'Plus Jakarta Sans',sans-serif;width:100%;outline:none;transition:border-color 0.15s}\r
.sidebar-search:focus{border-color:var(--orange)}\r
.sidebar-search::placeholder{color:var(--text3)}\r
.sidebar-scroll{flex:1;overflow-y:auto;padding:6px 0}\r
.sidebar-panel{display:none;flex:1;flex-direction:column;overflow:hidden}\r
.sidebar-panel.active{display:flex}\r
\r
/* Days list */\r
.day-item{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s}\r
.day-item:hover{background:var(--bg3);border-left-color:var(--border2)}\r
.day-item.active{background:var(--od);border-left-color:var(--orange)}\r
.day-avatar{width:36px;height:36px;border-radius:9px;background:var(--bg4);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--border);font-family:'Space Grotesk',sans-serif;font-weight:700;transition:all 0.15s}\r
.day-item.active .day-avatar{background:var(--og);border-color:rgba(255,107,43,0.35)}\r
.day-av-num{font-size:14px;line-height:1;color:var(--text)}\r
.day-item.active .day-av-num{color:var(--orange)}\r
.day-av-sub{font-family:'JetBrains Mono',monospace;font-size:7px;color:var(--text3);text-transform:uppercase;margin-top:1px}\r
.day-meta{flex:1;min-width:0}\r
.day-date{font-size:12px;font-weight:600;color:var(--text);line-height:1.3}\r
.day-loc{font-size:11px;color:var(--text2);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.day-prog{display:flex;align-items:center;gap:5px;margin-top:5px}\r
.mini-bar{flex:1;height:3px;background:var(--bg4);border-radius:2px;overflow:hidden}\r
.mini-fill{height:100%;border-radius:2px;transition:width 0.4s}\r
.mini-pct{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3);min-width:24px;text-align:right}\r
.sidebar-footer{padding:12px 14px;border-top:1px solid var(--border)}\r
.add-day-btn{width:100%;background:transparent;border:1.5px dashed var(--border2);color:var(--text2);padding:9px;border-radius:9px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:12px;cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:center;gap:6px}\r
.add-day-btn:hover{border-color:var(--orange);color:var(--orange);background:var(--od)}\r
\r
/* Discussion sidebar list */\r
.disc-sidebar-item{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s;border-bottom:1px solid rgba(255,255,255,0.03)}\r
.disc-sidebar-item:hover{background:var(--bg3);border-left-color:var(--border2)}\r
.disc-sidebar-item.active{background:var(--pd);border-left-color:var(--purple)}\r
.disc-si-header{display:flex;align-items:center;gap:8px;margin-bottom:4px}\r
.disc-si-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text3);background:var(--bg4);padding:1px 6px;border-radius:4px;flex-shrink:0}\r
.disc-item.active .disc-si-num{color:var(--purple)}\r
.disc-si-title{font-size:12px;font-weight:600;color:var(--text);line-height:1.4;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.disc-si-status{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:500;padding:2px 7px;border-radius:8px;flex-shrink:0}\r
.dss-done{background:var(--ld);color:var(--lime)}\r
.dss-prog{background:var(--ad);color:var(--amber)}\r
.dss-pend{background:rgba(72,79,88,0.3);color:var(--text3)}\r
.dss-disc{background:var(--bd);color:var(--blue)}\r
\r
/* ── MAIN ── */\r
.main{flex:1;overflow-y:auto;padding:24px 28px;background:var(--bg)}\r
\r
/* ── DAY HEADER ── */\r
.day-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}\r
.day-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;letter-spacing:-0.5px;line-height:1;display:flex;align-items:baseline;gap:8px}\r
.day-title-n{color:var(--orange)}\r
.day-meta-row{display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap}\r
.chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--text2);background:var(--bg2);border:1px solid var(--border);padding:3px 9px;border-radius:20px}\r
.chip svg{width:11px;height:11px;opacity:0.7;flex-shrink:0}\r
.score-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:14px 20px;text-align:center;min-width:130px;position:relative;overflow:hidden}\r
.score-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,var(--og),transparent 60%);pointer-events:none}\r
.score-big{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:34px;line-height:1;color:var(--lime)}\r
.score-denom{font-size:16px;color:var(--text3);font-weight:400}\r
.score-sub{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text2);margin-top:4px}\r
.score-pbar{height:3px;background:var(--bg3);border-radius:2px;margin-top:8px;overflow:hidden}\r
.score-pfill{height:100%;border-radius:2px;background:var(--lime);transition:width 0.5s}\r
\r
/* ── SUMMARY CARDS ── */\r
.sum-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}\r
.s-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;display:flex;align-items:center;gap:10px;transition:border-color 0.15s}\r
.s-card:hover{border-color:var(--border2)}\r
.s-ico{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}\r
.s-ico.g{background:var(--ld)}.s-ico.o{background:var(--od)}.s-ico.a{background:var(--ad)}.s-ico.b{background:var(--bd)}\r
.s-val{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px;line-height:1}\r
.s-val.g{color:var(--lime)}.s-val.o{color:var(--orange)}.s-val.a{color:var(--amber)}.s-val.b{color:var(--blue)}\r
.s-lbl{font-size:10px;color:var(--text2);margin-top:2px;font-weight:500}\r
\r
/* ── TABS ── */\r
.tabs{display:flex;gap:2px;margin-bottom:18px;background:var(--bg2);border:1px solid var(--border);padding:4px;border-radius:10px;width:fit-content}\r
.tab-btn{background:transparent;border:none;padding:7px 16px;border-radius:7px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:12px;color:var(--text2);cursor:pointer;transition:all 0.15s}\r
.tab-btn:hover{color:var(--text);background:var(--bg3)}\r
.tab-btn.active{background:var(--bg4);color:var(--text)}\r
.tab-content{display:none}.tab-content.active{display:block}\r
\r
/* ── CHECKLIST SECTION ── */\r
.cl-section{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);margin-bottom:12px;overflow:hidden;transition:border-color 0.15s}\r
.cl-section:hover{border-color:var(--border2)}\r
.cl-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer;user-select:none;transition:background 0.12s}\r
.cl-head:hover{background:rgba(255,255,255,0.02)}\r
.cl-head-l{display:flex;align-items:center;gap:10px}\r
.cl-ico{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}\r
.cl-ico.f{background:var(--od)}.cl-ico.r{background:var(--ld)}.cl-ico.fw{background:var(--ad)}\r
.cl-name{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px}\r
.cl-cnt{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2);background:var(--bg3);padding:2px 7px;border-radius:10px;border:1px solid var(--border)}\r
.cl-right{display:flex;align-items:center;gap:10px}\r
.cl-pbar{width:100px;height:5px;background:var(--bg3);border-radius:3px;overflow:hidden}\r
.cl-pfill{height:100%;border-radius:3px;transition:width 0.4s}\r
.cl-pfill.f{background:var(--orange)}.cl-pfill.r{background:var(--lime)}.cl-pfill.fw{background:var(--amber)}\r
.cl-pct{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text2);min-width:28px;text-align:right}\r
.cl-chev{color:var(--text3);font-size:11px;transition:transform 0.2s}.cl-chev.open{transform:rotate(90deg)}\r
.cl-body{border-top:1px solid var(--border)}\r
\r
/* ── CHECK ITEM ── */\r
.ci{display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.03);transition:background 0.12s}\r
.ci:last-child{border-bottom:none}\r
.ci:hover{background:rgba(255,255,255,0.02)}\r
.ci.ck{background:rgba(57,211,83,0.04)}.ci.na{opacity:0.42}\r
.checkbox{width:20px;height:20px;border-radius:5px;border:1.5px solid var(--bg4);cursor:pointer;flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;transition:all 0.18s;background:transparent}\r
.checkbox:hover{border-color:var(--lime);background:var(--ld)}\r
.checkbox.ck{background:var(--lime);border-color:var(--lime)}\r
.checkbox.ck::after{content:'';width:11px;height:7px;border-left:2px solid #0D1117;border-bottom:2px solid #0D1117;transform:rotate(-45deg) translateY(-1px);display:block}\r
.ci-body{flex:1;min-width:0}\r
.ci-top{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}\r
.ci-lbl{font-size:13px;font-weight:500;color:var(--text);line-height:1.5}\r
.ci.ck .ci-lbl{text-decoration:line-through;color:var(--text3)}\r
.pts{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--lime);background:var(--ld);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}\r
.ci-hist{font-size:10px;color:var(--text3);margin-top:3px;font-family:'JetBrains Mono',monospace}\r
.ci-bottom{display:flex;align-items:center;gap:7px;margin-top:8px}\r
.remark{flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:7px;padding:6px 11px;font-size:12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s}\r
.remark::placeholder{color:var(--text3)}.remark:focus{border-color:var(--orange)}\r
.na-btn{font-family:'JetBrains Mono',monospace;font-size:10px;background:transparent;border:1px solid var(--border2);color:var(--text2);padding:4px 9px;border-radius:5px;cursor:pointer;transition:all 0.15s;flex-shrink:0}\r
.na-btn:hover{border-color:var(--amber);color:var(--amber)}\r
.na-btn.on{background:var(--ad);border-color:var(--amber);color:var(--amber)}\r
\r
/* ── MEDIA ── */\r
.media-wrap{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:18px}\r
.media-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}\r
.media-ttl{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px}\r
.media-dot{width:6px;height:6px;background:var(--orange);border-radius:50%}\r
.media-grid{display:flex;gap:10px;flex-wrap:wrap}\r
.media-thumb{width:100px;height:80px;border-radius:9px;background:var(--bg3);border:1px solid var(--border);cursor:pointer;position:relative;overflow:hidden;transition:all 0.15s}\r
.media-thumb:hover{border-color:var(--border2);transform:scale(1.03)}\r
.media-thumb img{width:100%;height:100%;object-fit:cover}\r
.rm{position:absolute;top:5px;right:5px;background:rgba(0,0,0,0.75);border:none;color:white;width:20px;height:20px;border-radius:50%;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.15s}\r
.media-thumb:hover .rm{opacity:1}\r
.media-add{width:100px;height:80px;border-radius:9px;background:transparent;border:1.5px dashed var(--border2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;cursor:pointer;transition:all 0.15s;color:var(--text2);font-size:11px;font-weight:600}\r
.media-add:hover{border-color:var(--orange);color:var(--orange);background:var(--od)}\r
.media-add svg{width:18px;height:18px}\r
#fi{display:none}\r
\r
/* ── HISTORY TABLE ── */\r
.hist-wrap{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden}\r
.hist-hd{padding:14px 18px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}\r
.hist-ttl{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px}\r
.hist-cnt{font-family:'JetBrains Mono',monospace;font-size:10px;background:var(--bg3);border:1px solid var(--border);padding:2px 7px;border-radius:10px;color:var(--text2)}\r
.ht{width:100%;border-collapse:collapse}\r
.ht th{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);text-align:left;padding:10px 16px;border-bottom:1px solid var(--border);background:rgba(255,255,255,0.015)}\r
.ht td{font-size:12px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.03);color:var(--text);vertical-align:middle}\r
.ht tr:last-child td{border-bottom:none}\r
.ht tr:hover td{background:rgba(255,255,255,0.02)}\r
.pill{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.5px;text-transform:uppercase;padding:3px 9px;border-radius:20px}\r
.pill.done{background:var(--ld);color:var(--lime)}.pill.partial{background:var(--ad);color:var(--amber)}.pill.pending{background:rgba(72,79,88,0.3);color:var(--text3)}\r
\r
/* ── DISCUSSION VIEW ── */\r
.disc-page-header{margin-bottom:20px}\r
.disc-page-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:26px;letter-spacing:-0.5px;display:flex;align-items:center;gap:12px}\r
.disc-page-icon{width:36px;height:36px;border-radius:10px;background:var(--pd);display:flex;align-items:center;justify-content:center;font-size:18px}\r
.disc-page-sub{font-size:13px;color:var(--text2);margin-top:6px}\r
.disc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}\r
\r
.disc-filter-row{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex-wrap:wrap}\r
.filter-btn{background:transparent;border:1px solid var(--border2);color:var(--text2);padding:5px 12px;border-radius:20px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s;font-family:'Plus Jakarta Sans',sans-serif}\r
.filter-btn:hover{border-color:var(--purple);color:var(--purple)}\r
.filter-btn.active{background:var(--pd);border-color:var(--purple);color:var(--purple)}\r
\r
/* Discussion card */\r
.disc-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);margin-bottom:10px;overflow:hidden;transition:all 0.15s}\r
.disc-card:hover{border-color:var(--border2)}\r
.disc-card.expanded{border-color:var(--purple)}\r
.disc-card-head{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;cursor:pointer;transition:background 0.12s}\r
.disc-card-head:hover{background:rgba(255,255,255,0.02)}\r
.disc-num-badge{width:28px;height:28px;border-radius:7px;background:var(--bg3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;color:var(--text2);flex-shrink:0;margin-top:1px}\r
.disc-card.expanded .disc-num-badge{background:var(--pd);border-color:rgba(188,140,255,0.3);color:var(--purple)}\r
.disc-head-body{flex:1;min-width:0}\r
.disc-head-row{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}\r
.disc-title{font-size:14px;font-weight:600;color:var(--text);line-height:1.4;flex:1}\r
.disc-status-badge{flex-shrink:0;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 9px;border-radius:20px;cursor:pointer;transition:all 0.15s;border:none}\r
.disc-status-badge:hover{opacity:0.8}\r
.ds-done{background:var(--ld);color:var(--lime)}\r
.ds-prog{background:var(--ad);color:var(--amber)}\r
.ds-pend{background:rgba(72,79,88,0.3);color:var(--text3)}\r
.ds-disc{background:var(--bd);color:var(--blue)}\r
.disc-preview{font-size:12px;color:var(--text2);margin-top:4px;line-height:1.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.disc-meta{display:flex;align-items:center;gap:10px;margin-top:6px}\r
.disc-meta-chip{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3);display:flex;align-items:center;gap:4px}\r
.disc-chev{color:var(--text3);font-size:11px;transition:transform 0.2s;flex-shrink:0;margin-top:4px}\r
.disc-chev.open{transform:rotate(90deg)}\r
\r
.disc-body{border-top:1px solid var(--border);padding:16px;display:none;animation:fadeIn 0.15s ease}\r
.disc-body.open{display:block}\r
@keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}\r
\r
.disc-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}\r
.disc-detail-block{background:var(--bg3);border-radius:8px;padding:11px 13px}\r
.disc-detail-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:5px}\r
.disc-detail-val{font-size:13px;color:var(--text);line-height:1.5}\r
.disc-detail-val.full{grid-column:1/-1}\r
\r
.disc-action-row{display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap}\r
.status-select{background:var(--bg3);border:1px solid var(--border);border-radius:7px;padding:6px 10px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;outline:none;cursor:pointer}\r
.status-select:focus{border-color:var(--purple)}\r
\r
.disc-comments{margin-top:14px}\r
.disc-comments-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:10px}\r
.comment-item{display:flex;gap:10px;margin-bottom:10px}\r
.comment-avatar{width:28px;height:28px;border-radius:7px;background:var(--og);border:1px solid rgba(255,107,43,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;font-family:'Space Grotesk',sans-serif;font-weight:700;color:var(--orange)}\r
.comment-bubble{flex:1;background:var(--bg3);border-radius:8px;border:1px solid var(--border);padding:9px 12px}\r
.comment-bubble-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}\r
.comment-author{font-size:11px;font-weight:600;color:var(--text)}\r
.comment-time{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3)}\r
.comment-text{font-size:12px;color:var(--text2);line-height:1.5}\r
.comment-input-row{display:flex;gap:8px;margin-top:10px}\r
.comment-input{flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s}\r
.comment-input::placeholder{color:var(--text3)}.comment-input:focus{border-color:var(--purple)}\r
\r
/* subtasks within discussion */\r
.disc-subtasks{margin-top:14px}\r
.disc-subtask-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px}\r
.subtask-item{display:flex;align-items:center;gap:9px;padding:7px 10px;background:var(--bg3);border-radius:7px;margin-bottom:5px;border:1px solid var(--border)}\r
.subtask-cb{width:16px;height:16px;border-radius:4px;border:1.5px solid var(--bg4);cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.15s;background:transparent}\r
.subtask-cb:hover{border-color:var(--lime)}\r
.subtask-cb.ck{background:var(--lime);border-color:var(--lime)}\r
.subtask-cb.ck::after{content:'';width:8px;height:5px;border-left:1.5px solid #0D1117;border-bottom:1.5px solid #0D1117;transform:rotate(-45deg) translateY(-1px);display:block}\r
.subtask-text{font-size:12px;color:var(--text);flex:1;line-height:1.4}\r
.subtask-cb.ck ~ .subtask-text{text-decoration:line-through;color:var(--text3)}\r
\r
/* ── ADD DISCUSSION MODAL ── */\r
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;align-items:center;justify-content:center}\r
.modal-overlay.open{display:flex}\r
.modal{background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:24px;width:500px;max-width:95vw;max-height:90vh;overflow-y:auto}\r
.modal-ttl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;color:var(--text);margin-bottom:18px;display:flex;align-items:center;gap:10px}\r
.modal-ico{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}\r
.modal label{font-size:11px;font-weight:600;color:var(--text2);display:block;margin-bottom:5px;letter-spacing:0.5px;text-transform:uppercase}\r
.modal input,.modal select,.modal textarea{width:100%;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:9px 12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;margin-bottom:14px;outline:none;transition:border-color 0.15s}\r
.modal input:focus,.modal select:focus,.modal textarea:focus{border-color:var(--purple)}\r
.modal input::placeholder,.modal textarea::placeholder{color:var(--text3)}\r
.modal-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.modal-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:6px}\r
\r
/* ── ADD DAY MODAL uses orange ── */\r
#addDayModal .modal input:focus,#addDayModal .modal textarea:focus{border-color:var(--orange)}\r
#addDayModal .modal-ico{background:var(--od)}\r
\r
/* ── LIGHTBOX ── */\r
.lightbox{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:300;align-items:center;justify-content:center}\r
.lightbox.open{display:flex}\r
.lightbox img{max-width:90vw;max-height:90vh;border-radius:10px}\r
.lb-close{position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:38px;height:38px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.15s}\r
.lb-close:hover{background:rgba(255,255,255,0.2)}\r
\r
\r
/* ── CAMERA MODAL ── */\r
.cam-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:400;flex-direction:column;align-items:center;justify-content:center;gap:16px}\r
.cam-modal.open{display:flex}\r
.cam-viewfinder{position:relative;border-radius:14px;overflow:hidden;background:#000;box-shadow:0 0 0 2px var(--orange)}\r
.cam-viewfinder video{display:block;max-width:90vw;max-height:65vh;width:100%;height:auto}\r
.cam-viewfinder canvas{display:none}\r
.cam-controls{display:flex;align-items:center;gap:16px}\r
.cam-capture{width:64px;height:64px;border-radius:50%;background:var(--orange);border:4px solid rgba(255,255,255,0.3);cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:center;font-size:22px}\r
.cam-capture:hover{background:#FF8C5A;transform:scale(1.06)}\r
.cam-capture:active{transform:scale(0.95)}\r
.cam-flip{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:42px;height:42px;border-radius:50%;font-size:18px;cursor:pointer;transition:background 0.15s}\r
.cam-flip:hover{background:rgba(255,255,255,0.2)}\r
.cam-close{position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:38px;height:38px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center}\r
.cam-close:hover{background:rgba(255,255,255,0.2)}\r
.cam-preview-strip{display:flex;gap:8px;max-width:90vw;overflow-x:auto;padding:4px 0}\r
.cam-prev-thumb{width:56px;height:44px;border-radius:7px;object-fit:cover;border:2px solid var(--orange);cursor:pointer;flex-shrink:0}\r
.cam-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2);letter-spacing:1px}\r
\r
/* ── CLIENT LIST ── */\r
.client-item{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s;border-bottom:1px solid rgba(255,255,255,0.03)}\r
.client-item:hover{background:var(--bg3);border-left-color:var(--border2)}\r
.client-item.active{background:var(--bd);border-left-color:var(--blue)}\r
.client-av{width:34px;height:34px;border-radius:9px;background:var(--bg4);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;font-family:'Space Grotesk',sans-serif;color:var(--blue);flex-shrink:0}\r
.client-meta{flex:1;min-width:0}\r
.client-name{font-size:12px;font-weight:600;color:var(--text)}\r
.client-email{font-size:11px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
/* ── CLIENT MAIN ── */\r
.client-main{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px;margin-bottom:14px}\r
.client-main-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}\r
.client-main-ttl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px}\r
.client-doc-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.client-doc-card{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:16px;cursor:pointer;transition:all 0.15s}\r
.client-doc-card:hover{border-color:var(--orange);background:var(--od)}\r
.client-doc-ico{font-size:22px;margin-bottom:8px}\r
.client-doc-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px}\r
.client-doc-desc{font-size:11px;color:var(--text2);line-height:1.5}\r
/* ── DOC MODAL ── */\r
.doc-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:400;align-items:center;justify-content:center;padding:20px}\r
.doc-modal.open{display:flex}\r
.doc-box{background:var(--bg2);border:1px solid var(--border2);border-radius:16px;width:100%;max-width:680px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}\r
.doc-hd{padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}\r
.doc-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px}\r
.doc-close{background:transparent;border:1px solid var(--border2);color:var(--text2);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:14px}\r
.doc-close:hover{background:var(--bg3);color:var(--text)}\r
.doc-body{padding:20px 22px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}\r
.doc-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.doc-field{display:flex;flex-direction:column;gap:5px}\r
.doc-field label{font-size:11px;font-weight:600;color:var(--text2);font-family:'JetBrains Mono',monospace;letter-spacing:0.5px;text-transform:uppercase}\r
.doc-field input,.doc-field textarea,.doc-field select{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:8px 11px;color:var(--text);font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s;resize:vertical}\r
.doc-field input:focus,.doc-field textarea:focus{border-color:var(--orange)}\r
.doc-preview{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:16px;font-size:12px;color:var(--text2);line-height:1.7;font-family:'JetBrains Mono',monospace;white-space:pre-wrap;max-height:260px;overflow-y:auto}\r
.doc-ft{padding:14px 22px;border-top:1px solid var(--border);display:flex;align-items:center;gap:8px;justify-content:flex-end}\r
\r
/* ── EMPTY ── */\r
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:14px;text-align:center}\r
.empty-ico{width:64px;height:64px;border-radius:16px;background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:4px}\r
.empty h3{font-family:'Space Grotesk',sans-serif;font-size:16px;color:var(--text);font-weight:600}\r
.empty p{font-size:13px;color:var(--text2);max-width:260px;line-height:1.6}\r
\r
@media(max-width:700px){\r
  .sidebar{width:62px}\r
  .day-meta,.sidebar-label,.sidebar-search,.snav-btn span{display:none}\r
  .snav-btn{font-size:8px}\r
  .sidebar-head{padding:10px}\r
  .sum-row,.disc-stats{grid-template-columns:1fr 1fr}\r
  .main{padding:14px}\r
  .disc-detail-grid{grid-template-columns:1fr}\r
}\r
</style>\r
</head>\r
<body>\r
\r
<div class="topbar">\r
  <div class="logo">\r
    <div class="logo-icon">📋</div>\r
    <div class="logo-text">Daily<em>Tracker</em></div>\r
  </div>\r
  <div class="topbar-center" id="todayLabel"></div>\r
  <div class="topbar-right">\r
    <button class="btn btn-ghost" id="topAddBtn" onclick="handleTopAdd()">\r
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
      <span id="topAddLabel">New Day</span>\r
    </button>\r
    <button class="btn btn-orange" onclick="exportAll()">\r
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>\r
      Export\r
    </button>\r
  </div>\r
</div>\r
\r
<div class="layout">\r
  <!-- SIDEBAR -->\r
  <div class="sidebar">\r
    <div class="sidebar-nav">\r
      <button class="snav-btn active" onclick="switchSideView('days',this)" id="snav-days">📅 <span>Days</span></button>\r
      <button class="snav-btn" onclick="switchSideView('disc',this)" id="snav-disc">💬 <span>Discuss</span></button>\r
    </div>\r
\r
    <!-- Days Panel -->\r
    <div class="sidebar-panel active" id="panel-days">\r
      <div class="sidebar-head">\r
        <div class="sidebar-label">Inspection Log</div>\r
        <input class="sidebar-search" type="text" placeholder="🔍  Search days..." oninput="filterSidebar(this.value)">\r
      </div>\r
      <div class="sidebar-scroll" id="dayList"></div>\r
      <div class="sidebar-footer">\r
        <button class="add-day-btn" onclick="openAddDayModal()">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
          Add Inspection Day\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Discussions Panel -->\r
    <div class="sidebar-panel" id="panel-disc">\r
      <div class="sidebar-head">\r
        <div class="sidebar-label">Discussion Items</div>\r
        <input class="sidebar-search" type="text" placeholder="🔍  Search topics..." oninput="filterDiscSidebar(this.value)" id="discSideSearch">\r
      </div>\r
      <div class="sidebar-scroll" id="discList"></div>\r
      <div class="sidebar-footer">\r
        <button class="add-day-btn" onclick="openAddDiscModal()">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
          Add Discussion Item\r
        </button>\r
      </div>\r
    </div>\r
\r
\r
  </div>\r
\r
  <!-- MAIN -->\r
  <div class="main" id="mainContent">\r
    <div class="empty">\r
      <div class="empty-ico">🏗️</div>\r
      <h3>No day selected</h3>\r
      <p>Add your first inspection day to start tracking site progress.</p>\r
      <button class="btn btn-orange" onclick="openAddDayModal()" style="margin-top:4px">+ Add First Day</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD DAY MODAL -->\r
<div class="modal-overlay" id="addDayModal">\r
  <div class="modal">\r
    <div class="modal-ttl"><div class="modal-ico">📅</div>Add Inspection Day</div>\r
    <div class="modal-row">\r
      <div><label>Date</label><input type="date" id="nd-date"></div>\r
      <div><label>Inspector Name</label><input type="text" id="nd-insp" placeholder="e.g. Ravi Kumar"></div>\r
    </div>\r
    <label>Site / Location</label>\r
    <input type="text" id="nd-loc" placeholder="e.g. Block A – Grid 4-7">\r
    <label>Pre-inspection Notes</label>\r
    <textarea id="nd-notes" rows="2" placeholder="Any observations before starting..."></textarea>\r
    <div class="modal-actions">\r
      <button class="btn btn-ghost" onclick="closeModal('addDayModal')">Cancel</button>\r
      <button class="btn btn-orange" onclick="addDay()">Create Day →</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD DISCUSSION MODAL -->\r
<div class="modal-overlay" id="addDiscModal">\r
  <div class="modal">\r
    <div class="modal-ttl"><div class="modal-ico" style="background:var(--pd)">💬</div>Add Discussion Item</div>\r
    <label>Topic / Title</label>\r
    <input type="text" id="di-title" placeholder="e.g. Concrete patch work – Block B">\r
    <div class="modal-row">\r
      <div>\r
        <label>Status</label>\r
        <select id="di-status">\r
          <option value="pending">Pending</option>\r
          <option value="in-progress">In Progress</option>\r
          <option value="done">Done</option>\r
          <option value="discussion">For Discussion</option>\r
        </select>\r
      </div>\r
      <div>\r
        <label>Assigned To</label>\r
        <input type="text" id="di-assign" placeholder="e.g. GilGil, Lorenzo">\r
      </div>\r
    </div>\r
    <label>Notes / Details</label>\r
    <textarea id="di-notes" rows="3" placeholder="Describe the discussion item, decisions made, next steps..."></textarea>\r
    <label>Sub-tasks (one per line)</label>\r
    <textarea id="di-subtasks" rows="3" placeholder="e.g. Take sewer line photos&#10;Confirm gas line drawing&#10;Submit permit"></textarea>\r
    <div class="modal-actions">\r
      <button class="btn btn-ghost" onclick="closeModal('addDiscModal')">Cancel</button>\r
      <button class="btn btn-orange" style="background:linear-gradient(135deg,var(--purple),#9B6FD4)" onclick="addDiscItem()">Add Item →</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD CLIENT MODAL -->\r
<div class="modal-overlay" id="addClientModal">\r
  <div class="modal">\r
    <div class="modal-ttl"><div class="modal-ico" style="background:var(--bd)">👤</div>Add Client</div>\r
    <div class="modal-row">\r
      <div><label>Full Name / Company</label><input type="text" id="cl-name" placeholder="e.g. John Doe / ABC Corp"></div>\r
      <div><label>Phone</label><input type="text" id="cl-phone" placeholder="e.g. +1 555 000 1234"></div>\r
    </div>\r
    <label>Email</label>\r
    <input type="email" id="cl-email" placeholder="client@example.com">\r
    <label>Address</label>\r
    <input type="text" id="cl-addr" placeholder="e.g. 123 Main St, City, State">\r
    <label>Notes</label>\r
    <textarea id="cl-notes" rows="2" placeholder="Any notes about this client..."></textarea>\r
    <div class="modal-actions">\r
      <button class="btn btn-ghost" onclick="closeModal('addClientModal')">Cancel</button>\r
      <button class="btn btn-orange" onclick="saveClient()">Save Client →</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- CONTRACT MODAL -->\r
<div class="doc-modal" id="contractModal">\r
  <div class="doc-box">\r
    <div class="doc-hd"><div class="doc-title">📄 Generate Contract</div><button class="doc-close" onclick="closeDocModal('contractModal')">✕</button></div>\r
    <div class="doc-body">\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Client Name</label><input type="text" id="ct-client" placeholder="e.g. John Doe"></div>\r
        <div class="doc-field"><label>Client Address</label><input type="text" id="ct-addr" placeholder="e.g. 123 Main St"></div>\r
      </div>\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Project Name</label><input type="text" id="ct-project" placeholder="e.g. Residential Build – Phase 1"></div>\r
        <div class="doc-field"><label>Contract Date</label><input type="date" id="ct-date"></div>\r
      </div>\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Contract Amount ($)</label><input type="number" id="ct-amount" placeholder="50000"></div>\r
        <div class="doc-field"><label>Completion Date</label><input type="date" id="ct-end"></div>\r
      </div>\r
      <div class="doc-field"><label>Scope of Work</label><textarea id="ct-scope" rows="3" placeholder="Describe the work to be performed..."></textarea></div>\r
      <div class="doc-field"><label>Payment Terms</label><textarea id="ct-terms" rows="2" placeholder="e.g. 30% upfront, 40% at milestone, 30% on completion"></textarea></div>\r
      <div class="doc-field"><label>Preview</label><div class="doc-preview" id="ct-preview">Fill in fields above then click Preview.</div></div>\r
    </div>\r
    <div class="doc-ft">\r
      <button class="btn btn-ghost" onclick="previewContract()">Preview</button>\r
      <button class="btn btn-ghost" onclick="copyDocText('ct-preview')">📋 Copy</button>\r
      <button class="btn btn-orange" onclick="downloadDocText('ct-preview','contract')">⬇ Download</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- INVOICE MODAL -->\r
<div class="doc-modal" id="invoiceModal">\r
  <div class="doc-box">\r
    <div class="doc-hd"><div class="doc-title">🧾 Generate Invoice</div><button class="doc-close" onclick="closeDocModal('invoiceModal')">✕</button></div>\r
    <div class="doc-body">\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Client Name</label><input type="text" id="inv-client" placeholder="e.g. John Doe"></div>\r
        <div class="doc-field"><label>Invoice #</label><input type="text" id="inv-num" placeholder="INV-2026-001"></div>\r
      </div>\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Project Name</label><input type="text" id="inv-project" placeholder="e.g. Block A Construction"></div>\r
        <div class="doc-field"><label>Invoice Date</label><input type="date" id="inv-date"></div>\r
      </div>\r
      <div class="doc-field"><label>Line Items (one per line: Description | Qty | Unit Price)</label><textarea id="inv-items" rows="5" placeholder="Foundation work | 1 | 15000&#10;Rebar installation | 1 | 8000"></textarea></div>\r
      <div class="doc-row">\r
        <div class="doc-field"><label>Tax %</label><input type="number" id="inv-tax" value="0" min="0" max="100"></div>\r
        <div class="doc-field"><label>Due Date</label><input type="date" id="inv-due"></div>\r
      </div>\r
      <div class="doc-field"><label>Notes</label><textarea id="inv-notes" rows="2" placeholder="Payment via bank transfer..."></textarea></div>\r
      <div class="doc-field"><label>Preview</label><div class="doc-preview" id="inv-preview">Fill in fields above then click Preview.</div></div>\r
    </div>\r
    <div class="doc-ft">\r
      <button class="btn btn-ghost" onclick="previewInvoice()">Preview</button>\r
      <button class="btn btn-ghost" onclick="copyDocText('inv-preview')">📋 Copy</button>\r
      <button class="btn btn-orange" onclick="downloadDocText('inv-preview','invoice')">⬇ Download</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- CAMERA MODAL -->\r
<div class="cam-modal" id="camModal">\r
  <button class="cam-close" onclick="closeCamera()">✕</button>\r
  <div class="cam-label" id="camLabel">LIVE CAMERA</div>\r
  <div class="cam-viewfinder">\r
    <video id="camVideo" autoplay playsinline muted></video>\r
    <canvas id="camCanvas"></canvas>\r
  </div>\r
  <div class="cam-controls">\r
    <button class="cam-flip" onclick="flipCamera()" title="Flip camera">🔄</button>\r
    <button class="cam-capture" onclick="snapPhoto()" title="Take photo">📷</button>\r
    <button class="cam-flip" onclick="closeCamera()" title="Done" style="font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;width:auto;padding:0 14px;border-radius:20px">Done</button>\r
  </div>\r
  <div class="cam-preview-strip" id="camStrip"></div>\r
</div>\r
\r
<!-- LIGHTBOX -->\r
<div class="lightbox" id="lightbox" onclick="closeLightbox()">\r
  <button class="lb-close" onclick="closeLightbox()">✕</button>\r
  <img id="lbImg" src="" alt="">\r
</div>\r
<input type="file" id="fi" accept="image/*,video/*" multiple onchange="handleUpload(event)">\r
<input type="file" id="fc" accept="image/*" capture="environment" onchange="handleUpload(event)">\r
\r
<script>\r
// ── CHECKLIST DATA ──\r
const CL={\r
  foundation:{label:"Foundation Work",icon:"🏛️",cls:"f",items:[\r
    {id:"f1",text:"Excavation depth & dimensions verified per drawing",pts:10},\r
    {id:"f2",text:"Soil bearing capacity assessed / documented",pts:8},\r
    {id:"f3",text:"Bottom of excavation leveled and compacted",pts:8},\r
    {id:"f4",text:"Dewatering measures in place (if required)",pts:6},\r
    {id:"f5",text:"Anti-termite / waterproofing treatment applied",pts:6},\r
    {id:"f6",text:"PCC (Plain Cement Concrete) mix ratio correct",pts:10},\r
    {id:"f7",text:"PCC thickness meets spec (min 75mm)",pts:8},\r
    {id:"f8",text:"Foundation width & depth as per structural drawing",pts:10},\r
    {id:"f9",text:"No debris / loose material in excavation",pts:5},\r
    {id:"f10",text:"Safety / shoring in place for deep excavation",pts:7},\r
  ]},\r
  rebar:{label:"Rebar Work",icon:"🔩",cls:"r",items:[\r
    {id:"r1",text:"Rebar diameter matches structural drawing spec",pts:10},\r
    {id:"r2",text:"Rebar spacing correct (both ways)",pts:10},\r
    {id:"r3",text:"Cover blocks / spacers installed (min 40mm cover)",pts:8},\r
    {id:"r4",text:"Lap length per code (40D min for tension bars)",pts:8},\r
    {id:"r5",text:"Starter bars aligned and secured",pts:8},\r
    {id:"r6",text:"No rusted / damaged bars without approval",pts:7},\r
    {id:"r7",text:"Hooks / bends at correct angle (135° for stirrups)",pts:7},\r
    {id:"r8",text:"Stirrup spacing matches drawing",pts:8},\r
    {id:"r9",text:"All bar intersections tied with binding wire",pts:6},\r
    {id:"r10",text:"No unauthorized substitutions of bar grade/size",pts:8},\r
  ]},\r
  formwork:{label:"Form Work",icon:"🪵",cls:"fw",items:[\r
    {id:"fw1",text:"Formwork plumb and level (checked with spirit level)",pts:10},\r
    {id:"fw2",text:"Formwork dimensions match drawing (width/height)",pts:10},\r
    {id:"fw3",text:"Form panels properly oiled / release agent applied",pts:6},\r
    {id:"fw4",text:"Joints sealed to prevent cement slurry leakage",pts:7},\r
    {id:"fw5",text:"Adequate lateral bracing & props installed",pts:8},\r
    {id:"fw6",text:"Prop spacing & load-bearing capacity verified",pts:8},\r
    {id:"fw7",text:"Openings / cutouts correctly positioned",pts:7},\r
    {id:"fw8",text:"Access holes for concrete vibrator provided",pts:5},\r
    {id:"fw9",text:"No cracks or damaged panels used",pts:7},\r
    {id:"fw10",text:"Pre-pour checklist signed off by site engineer",pts:10},\r
  ]}\r
};\r
Object.keys(CL).forEach(key => delete CL[key]);\r
const getChecklistGroups = () => Object.entries(checklistTemplate||{}).filter(([,section]) => Array.isArray(section?.items) && section.items.length);\r
\r
// ── DISCUSSION DEFAULTS ──
const DISC_SEED = [];

// ── STATE ──\r
const DT_STATE_KEY = 'dt_state';\r
const DT_PROJECT_STATE_KEY = 'dt_project_state_map';\r
const cloneData = (value, fallback) => {\r
  if (value == null) return fallback;\r
  try { return JSON.parse(JSON.stringify(value)); } catch { return fallback; }\r
};\r
const createEmptyTrackerState = () => ({
  days: [],
  discItems: [],
  clients: [],
  checklistTemplate: {},
  curDay: null,
  curDiscId: null,\r
  curClient: null,\r
});\r
function getHostApp(){\r
  try{\r
    if(window.parent && window.parent !== window && window.parent.DB && typeof window.parent.saveDB === 'function'){\r
      return window.parent;\r
    }\r
  }catch{}\r
  return null;\r
}\r
function getHostProject(host=getHostApp()){\r
  try{\r
    const db = host?.DB;\r
    const projects = db?.projects;\r
    if(!Array.isArray(projects) || !projects.length) return null;\r
    const activeId = db.activeId ?? db.activeProjectId ?? projects[0]?.id ?? null;\r
    return projects.find(p=>p.id===activeId) || projects[0] || null;\r
  }catch{}\r
  return null;\r
}\r
function readFallbackState(){\r
  let daysState = [];\r
  let discState = null;\r
  let clientsState = [];\r
  let meta = {};\r
  try{ daysState = JSON.parse(localStorage.getItem('dt_days')||'[]'); }catch{}\r
  try{ discState = JSON.parse(localStorage.getItem('dt_disc')||'null'); }catch{}\r
  try{ clientsState = JSON.parse(localStorage.getItem('dt_clients')||'[]'); }catch{}\r
  try{ meta = JSON.parse(localStorage.getItem(DT_STATE_KEY)||'{}') || {}; }catch{}\r
  return {\r
    days: Array.isArray(daysState) ? daysState : [],\r
    discItems: Array.isArray(discState) ? discState : [],
    clients: Array.isArray(clientsState) ? clientsState : [],\r
    checklistTemplate: (meta.checklistTemplate && typeof meta.checklistTemplate === 'object' && !Array.isArray(meta.checklistTemplate)) ? cloneData(meta.checklistTemplate, {}) : {},\r
    curDay: meta.curDay ?? null,\r
    curDiscId: meta.curDiscId ?? null,\r
    curClient: meta.curClient ?? null,\r
  };\r
}\r
function readProjectStateMap(){\r
  try{\r
    const raw = JSON.parse(localStorage.getItem(DT_PROJECT_STATE_KEY) || '{}');\r
    return raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};\r
  }catch{}\r
  return {};\r
}\r
function readProjectScopedFallback(projectId){\r
  if(!projectId) return null;\r
  const map = readProjectStateMap();\r
  const state = map[projectId];\r
  return state && typeof state === 'object' ? state : null;\r
}\r
function writeProjectScopedFallback(projectId, state){\r
  if(!projectId) return;\r
  const map = readProjectStateMap();\r
  map[projectId] = cloneData(state, createEmptyTrackerState());\r
  localStorage.setItem(DT_PROJECT_STATE_KEY, JSON.stringify(map));\r
}\r
function buildTrackerState(){\r
  return {\r
    days: cloneData(days, []),\r
    discItems: cloneData(discItems, []),\r
    clients: cloneData(clients, []),\r
    checklistTemplate: cloneData(checklistTemplate, {}),\r
    curDay,\r
    curDiscId,\r
    curClient,\r
  };\r
}\r
function applyTrackerState(raw){
  const state = clearLegacyChecklistStateIfNeeded(raw && typeof raw === 'object' ? raw : {});
  days = Array.isArray(state.days) ? cloneData(state.days, []) : [];\r
  discItems = Array.isArray(state.discItems) ? cloneData(state.discItems, []) : [];
  clients = Array.isArray(state.clients) ? cloneData(state.clients, []) : [];\r
  checklistTemplate = (state.checklistTemplate && typeof state.checklistTemplate === 'object' && !Array.isArray(state.checklistTemplate)) ? cloneData(state.checklistTemplate, {}) : {};\r
  curDay = state.curDay && days.some(d=>d.id===state.curDay) ? state.curDay : (days.length ? days[days.length-1].id : null);\r
  curDiscId = state.curDiscId && discItems.some(d=>d.id===state.curDiscId) ? state.curDiscId : null;\r
  curClient = state.curClient && clients.some(c=>c.id===state.curClient) ? state.curClient : null;\r
}\r
function writeFallbackState(state){\r
  localStorage.setItem('dt_days', JSON.stringify(state.days));\r
  localStorage.setItem('dt_disc', JSON.stringify(state.discItems));\r
  localStorage.setItem('dt_clients', JSON.stringify(state.clients));\r
  localStorage.setItem(DT_STATE_KEY, JSON.stringify({\r
    checklistTemplate: (state.checklistTemplate && typeof state.checklistTemplate === 'object' && !Array.isArray(state.checklistTemplate)) ? state.checklistTemplate : {},\r
    curDay: state.curDay ?? null,\r
    curDiscId: state.curDiscId ?? null,\r
    curClient: state.curClient ?? null,\r
  }));\r
}\r
function readTrackerState(){\r
  const project = getHostProject();\r
  if(project){\r
    const projectState = project.dailyTracker;\r
    if(projectState && typeof projectState === 'object' && !Array.isArray(projectState)){\r
      return projectState;\r
    }\r
    const scopedFallback = readProjectScopedFallback(project.id);\r
    if(scopedFallback){\r
      return scopedFallback;\r
    }\r
    return createEmptyTrackerState();\r
  }\r
  return readFallbackState();\r
}\r
function saveTrackerState(){\r
  const state = buildTrackerState();\r
  const host = getHostApp();\r
  const project = getHostProject(host);\r
  if(project){\r
    writeProjectScopedFallback(project.id, state);\r
    project.dailyTracker = cloneData(state, {});\r
    try{\r
      host.saveDB();\r
      return;\r
    }catch(err){\r
      console.error('daily tracker shared save failed:', err);\r
    }\r
  }\r
  writeFallbackState(state);\r
}\r
let days = [];\r
let discItems = [];\r
let curDay = null;\r
let curDiscId = null;\r
let sideView = 'days';\r
let discFilter = 'all';\r
let expandedDisc = {};
let clients = [];
let curClient = null;
let checklistTemplate = {};
let syncedProjectId = null;
let pendingLegacyChecklistCleanup = false;

function isLegacyPrefilledChecklistTemplate(template){
  if(!template || typeof template !== 'object' || Array.isArray(template)) return false;
  const required = {
    foundation: { label:'Foundation Work', prefix:'f', count:10 },
    rebar: { label:'Rebar Work', prefix:'r', count:10 },
    formwork: { label:'Form Work', prefix:'fw', count:10 },
  };
  const keys = Object.keys(template);
  if(keys.length !== Object.keys(required).length) return false;
  return Object.entries(required).every(([key, config]) => {
    const section = template[key];
    if(!section || section.label !== config.label || !Array.isArray(section.items) || section.items.length !== config.count) return false;
    return section.items.every((item, idx) => item && item.id === \`\${config.prefix}\${idx+1}\`);
  });
}
function clearLegacyChecklistStateIfNeeded(state){
  const next = state && typeof state === 'object' ? state : {};
  if(!isLegacyPrefilledChecklistTemplate(next.checklistTemplate)) return next;
  pendingLegacyChecklistCleanup = true;
  return {
    ...next,
    checklistTemplate: {},
    days: Array.isArray(next.days) ? next.days.map(day => ({...day, checks:{}, comments:{}})) : [],
  };
}

applyTrackerState(readTrackerState());
\r
const save = () => { saveTrackerState(); };
const getDay = id => days.find(d=>d.id===id);
const getDisc = id => discItems.find(d=>d.id===id);
const esc = s => (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const slugifyChecklistKey = value => String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || ('section-'+Date.now());
const checklistStyles = ['f','r','fw'];
const checklistIcons = ['🗂️','📋','🛠️','✅','🧱','🔎'];
function getNextChecklistStyle(index=0){
  return checklistStyles[index % checklistStyles.length];
}
function getNextChecklistIcon(index=0){
  return checklistIcons[index % checklistIcons.length];
}
function createChecklistSection(label){
  const count = Object.keys(checklistTemplate||{}).length;
  return {label, icon:getNextChecklistIcon(count), cls:getNextChecklistStyle(count), items:[]};
}
function ensureChecklistTemplate(){
  if(!checklistTemplate || typeof checklistTemplate!=='object' || Array.isArray(checklistTemplate)) checklistTemplate={};
  return checklistTemplate;
}
\r
// ── SIDEBAR VIEW SWITCHING ──\r
function switchSideView(view, btn) {\r
  sideView = view;\r
  document.querySelectorAll('.snav-btn').forEach(b=>b.classList.remove('active'));\r
  btn.classList.add('active');\r
  document.querySelectorAll('.sidebar-panel').forEach(p=>p.classList.remove('active'));\r
  document.getElementById('panel-'+view).classList.add('active');\r
  const labelMap={days:'New Day',disc:'New Item'};\r
  document.getElementById('topAddBtn').style.display='';\r
  document.getElementById('topAddLabel').textContent=labelMap[view]||'';\r
  if(view==='disc') renderDiscMain();\r
  else if(view==='days') renderMain();\r
}\r
\r
function handleTopAdd(){\r
  if(sideView==='days') openAddDayModal();\r
  else if(sideView==='disc') openAddDiscModal();\r
}\r
\r
\r
// ── SCORE ──\r
function sc(day){\r
  let e=0,t=0,c=0,ti=0;\r
  getChecklistGroups().forEach(([,section])=>{section.items.forEach(i=>{ti++;t+=i.pts;if(day.checks?.[i.id]==='checked'){e+=i.pts;c++}})});\r
  return{e,t,c,ti};\r
}\r
\r
// ── DAYS SIDEBAR ──\r
function renderSidebar(f=''){\r
  const list = document.getElementById('dayList');\r
  const fd = days.slice().reverse().filter(d=>!f||d.date.includes(f)||(d.location||'').toLowerCase().includes(f.toLowerCase())||(d.inspector||'').toLowerCase().includes(f.toLowerCase()));\r
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">\${days.length?'No matches':'No days yet'}</div>\`;return}\r
  list.innerHTML = fd.map(day=>{\r
    const s=sc(day),pct=s.ti?Math.round((s.c/s.ti)*100):0;\r
    const fc=pct===100?'var(--lime)':pct>0?'var(--amber)':'var(--text3)';\r
    const d=new Date(day.date+'T12:00:00');\r
    return \`<div class="day-item\${day.id===curDay?' active':''}" onclick="selectDay('\${day.id}')">\r
      <div class="day-avatar"><div class="day-av-num">\${day.dayNum}</div><div class="day-av-sub">Day</div></div>\r
      <div class="day-meta">\r
        <div class="day-date">\${d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}</div>\r
        <div class="day-loc">\${day.location||'Site'}</div>\r
        <div class="day-prog">\r
          <div class="mini-bar"><div class="mini-fill" style="width:\${pct}%;background:\${fc}"></div></div>\r
          <div class="mini-pct">\${pct}%</div>\r
        </div>\r
      </div>\r
    </div>\`;\r
  }).join('');\r
}\r
function filterSidebar(v){renderSidebar(v)}\r
function selectDay(id){curDay=id;renderSidebar();renderMain();}\r
\r
// ── DISCUSSION SIDEBAR ──\r
function statusCls(s){return s==='done'?'dss-done':s==='in-progress'?'dss-prog':s==='discussion'?'dss-disc':'dss-pend'}\r
function statusLabel(s){return s==='done'?'Done':s==='in-progress'?'In Progress':s==='discussion'?'Discussion':'Pending'}\r
\r
function renderDiscSidebar(f=''){\r
  const list = document.getElementById('discList');\r
  const fd = discItems.filter(d=>!f||(d.title||'').toLowerCase().includes(f.toLowerCase())||(d.notes||'').toLowerCase().includes(f.toLowerCase()));\r
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">No matches</div>\`;return}\r
  list.innerHTML = fd.map(d=>\`\r
    <div class="disc-sidebar-item\${d.id===curDiscId?' active':''}" onclick="selectDisc('\${d.id}')">\r
      <div class="disc-si-header">\r
        <span class="disc-si-num">#\${d.num}</span>\r
        <span class="disc-si-title">\${esc(d.title)}</span>\r
        <span class="disc-si-status \${statusCls(d.status)}">\${statusLabel(d.status)}</span>\r
      </div>\r
    </div>\`).join('');\r
}\r
function filterDiscSidebar(v){renderDiscSidebar(v)}\r
function selectDisc(id){curDiscId=id;renderDiscSidebar();renderDiscMain();}\r
\r
// ── MAIN: DAYS ──\r
function renderMain(){\r
  const main = document.getElementById('mainContent');\r
  if(!curDay){\r
    main.innerHTML=\`<div class="empty"><div class="empty-ico">🏗️</div><h3>No day selected</h3><p>Add or select an inspection day to begin.</p><button class="btn btn-orange" onclick="openAddDayModal()" style="margin-top:4px">+ Add First Day</button></div>\`;\r
    return;\r
  }\r
  const day=getDay(curDay); if(!day)return;\r
  const hasChecklist = getChecklistGroups().length > 0;\r
  const s=sc(day),pct=s.ti?Math.round((s.c/s.ti)*100):0;\r
  const d=new Date(day.date+'T12:00:00');\r
  const ds=d.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});\r
  const nas=hasChecklist?Object.values(day.checks||{}).filter(v=>v==='na').length:0;\r
  main.innerHTML=\`\r
  <div class="day-header">\r
    <div>\r
      <div class="day-title">Day <span class="day-title-n">\${day.dayNum}</span>\r
        <span style="font-size:13px;color:var(--text3);font-weight:400;font-family:'Plus Jakarta Sans',sans-serif">— Inspection Report</span>\r
      </div>\r
      <div class="day-meta-row">\r
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>\${ds}</div>\r
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>\${day.location||'Site not set'}</div>\r
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>\${day.inspector||'Inspector N/A'}</div>\r
      </div>\r
    </div>\r
    <div class="score-card">\r
      <div class="score-big">\${s.e}<span class="score-denom">/\${s.t}</span></div>\r
      <div class="score-sub">Score · \${pct}% done</div>\r
      <div class="score-pbar"><div class="score-pfill" style="width:\${pct}%"></div></div>\r
    </div>\r
  </div>\r
  <div class="sum-row">\r
    <div class="s-card"><div class="s-ico g">✅</div><div><div class="s-val g">\${s.c}</div><div class="s-lbl">Checked</div></div></div>\r
    <div class="s-card"><div class="s-ico o">⏳</div><div><div class="s-val o">\${Math.max(s.ti-s.c-nas,0)}</div><div class="s-lbl">Remaining</div></div></div>\r
    <div class="s-card"><div class="s-ico a">⚠️</div><div><div class="s-val a">\${nas}</div><div class="s-lbl">N/A Items</div></div></div>\r
    <div class="s-card"><div class="s-ico b">📷</div><div><div class="s-val b">\${(day.media||[]).length}</div><div class="s-lbl">Media</div></div></div>\r
  </div>\r
  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab(event,'tCL')">Checklist</button>
    <button class="tab-btn" onclick="addChecklistSection()">+ Add Section</button>
    <button class="tab-btn" onclick="addChecklistItem()">+ Add Item</button>
    <button class="tab-btn" onclick="switchTab(event,'tMD')">Media</button>
    <button class="tab-btn" onclick="switchTab(event,'tHI')">History</button>\r
    <button class="tab-btn" style="color:var(--amber)" onclick="deleteChecklist()">Delete Checklist</button>\r
    <button class="tab-btn" style="margin-left:auto;color:var(--red);border-color:rgba(248,81,73,0.25)" onclick="deleteDay('\${curDay}')">🗑 Delete Day</button>\r
  </div>\r
  <div class="tab-content active" id="tCL">\${buildCL(day)}</div>\r
  <div class="tab-content" id="tMD">\${buildMD(day)}</div>\r
  <div class="tab-content" id="tHI">\${buildHI()}</div>\`;\r
}\r
\r
// ── MAIN: DISCUSSIONS ──\r
function renderDiscMain(){\r
  const main = document.getElementById('mainContent');\r
  const total = discItems.length;\r
  const doneCount = discItems.filter(d=>d.status==='done').length;\r
  const inProg = discItems.filter(d=>d.status==='in-progress').length;\r
  const pending = discItems.filter(d=>d.status==='pending').length;\r
  const filtered = discFilter==='all' ? discItems : discItems.filter(d=>d.status===discFilter);\r
  const cards = filtered.map(d => {\r
    const isExpanded = expandedDisc[d.id];\r
    const subtasksDone = (d.subtasks||[]).filter(s=>s.done).length;\r
    const subtasksTotal = (d.subtasks||[]).length;\r
    const bodyHtml = isExpanded ? buildDiscBody(d) : '';\r
    return \`\r
    <div class="disc-card\${isExpanded?' expanded':''}" id="dc_\${d.id}">\r
      <div class="disc-card-head" onclick="toggleDiscExpand('\${d.id}')">\r
        <div class="disc-num-badge">\${d.num}</div>\r
        <div class="disc-head-body">\r
          <div class="disc-head-row">\r
            <div class="disc-title">\${esc(d.title)}</div>\r
            <span class="disc-status-badge ds-\${d.status==='in-progress'?'prog':d.status==='done'?'done':d.status==='discussion'?'disc':'pend'}" onclick="event.stopPropagation();cycleStatus('\${d.id}')" title="Click to change status">\${statusLabel(d.status)}</span>\r
          </div>\r
          \${d.notes?\`<div class="disc-preview">\${esc(d.notes)}</div>\`:''}\r
          <div class="disc-meta">\r
            <span class="disc-meta-chip">📅 \${d.date||'—'}</span>\r
            \${d.assignedTo?\`<span class="disc-meta-chip">👤 \${esc(d.assignedTo)}</span>\`:''}\r
            \${subtasksTotal?\`<span class="disc-meta-chip">☑️ \${subtasksDone}/\${subtasksTotal} tasks</span>\`:''}\r
            \${(d.comments||[]).length?\`<span class="disc-meta-chip">💬 \${d.comments.length}</span>\`:''}\r
          </div>\r
        </div>\r
        <div class="disc-chev\${isExpanded?' open':''}">▶</div>\r
      </div>\r
      <div class="disc-body\${isExpanded?' open':''}" id="db_\${d.id}">\${bodyHtml}</div>\r
    </div>\`;\r
  }).join('');\r
\r
  main.innerHTML = \`\r
  <div class="disc-page-header">\r
    <div class="disc-page-title">\r
      <div class="disc-page-icon">💬</div>\r
      Discussion Log\r
    </div>\r
    <div class="disc-page-sub">Meeting notes, action items, and project decisions for this project.</div>
  </div>\r
  <div class="disc-stats">\r
    <div class="s-card"><div class="s-ico" style="background:var(--pd)">💬</div><div><div class="s-val" style="color:var(--purple)">\${total}</div><div class="s-lbl">Total Items</div></div></div>\r
    <div class="s-card"><div class="s-ico g">✅</div><div><div class="s-val g">\${doneCount}</div><div class="s-lbl">Done</div></div></div>\r
    <div class="s-card"><div class="s-ico a">⚡</div><div><div class="s-val a">\${inProg}</div><div class="s-lbl">In Progress</div></div></div>\r
    <div class="s-card"><div class="s-ico" style="background:rgba(72,79,88,0.2)">⏸️</div><div><div class="s-val" style="color:var(--text3)">\${pending}</div><div class="s-lbl">Pending</div></div></div>\r
  </div>\r
  <div class="disc-filter-row">\r
    <span style="font-size:11px;color:var(--text3);font-family:'JetBrains Mono',monospace">Filter:</span>\r
    <button class="filter-btn\${discFilter==='all'?' active':''}" onclick="setDiscFilter('all')">All</button>\r
    <button class="filter-btn\${discFilter==='done'?' active':''}" onclick="setDiscFilter('done')">Done</button>\r
    <button class="filter-btn\${discFilter==='in-progress'?' active':''}" onclick="setDiscFilter('in-progress')">In Progress</button>\r
    <button class="filter-btn\${discFilter==='pending'?' active':''}" onclick="setDiscFilter('pending')">Pending</button>\r
    <button class="filter-btn\${discFilter==='discussion'?' active':''}" onclick="setDiscFilter('discussion')">For Discussion</button>\r
    <button class="btn btn-ghost btn-sm" onclick="openAddDiscModal()" style="margin-left:auto">+ Add Item</button>\r
  </div>\r
  \${cards||'<div class="empty"><div class="empty-ico">💬</div><h3>No items</h3><p>No discussion items match this filter.</p></div>'}\`;\r
}\r
\r
function buildDiscBody(d){\r
  const subtasksHtml = (d.subtasks||[]).length ? \`\r
    <div class="disc-subtasks">\r
      <div class="disc-subtask-label">Sub-tasks & Milestones</div>\r
      \${d.subtasks.map((st,i)=>\`\r
        <div class="subtask-item">\r
          <div class="subtask-cb\${st.done?' ck':''}" onclick="toggleSubtask('\${d.id}',\${i})"></div>\r
          <span class="subtask-text">\${esc(st.text)}</span>\r
        </div>\`).join('')}\r
    </div>\` : '';\r
  const commentsHtml = (d.comments||[]).map(c=>\`\r
    <div class="comment-item">\r
      <div class="comment-avatar">\${(c.author||'U').charAt(0).toUpperCase()}</div>\r
      <div class="comment-bubble">\r
        <div class="comment-bubble-top">\r
          <span class="comment-author">\${esc(c.author||'User')}</span>\r
          <span class="comment-time">\${c.time||''}</span>\r
        </div>\r
        <div class="comment-text">\${esc(c.text)}</div>\r
      </div>\r
    </div>\`).join('');\r
  return \`\r
    <div class="disc-action-row">\r
      <span style="font-size:11px;color:var(--text3);font-family:'JetBrains Mono',monospace">STATUS:</span>\r
      <select class="status-select" onchange="updateDiscStatus('\${d.id}',this.value)">\r
        <option value="pending"\${d.status==='pending'?' selected':''}>Pending</option>\r
        <option value="in-progress"\${d.status==='in-progress'?' selected':''}>In Progress</option>\r
        <option value="done"\${d.status==='done'?' selected':''}>Done</option>\r
        <option value="discussion"\${d.status==='discussion'?' selected':''}>For Discussion</option>\r
      </select>\r
      \${d.assignedTo?\`<span class="chip">👤 \${esc(d.assignedTo)}</span>\`:''}
      <button class="btn btn-ghost btn-sm" style="margin-left:auto;color:var(--red)" onclick="deleteDiscItem('\${d.id}')">Delete</button>
    </div>\r
    <div class="disc-detail-grid">\r
      <div class="disc-detail-block" style="grid-column:1/-1">\r
        <div class="disc-detail-label">Notes & Details</div>\r
        <div class="disc-detail-val">\${esc(d.notes)||'<span style="color:var(--text3)">No notes added.</span>'}</div>\r
      </div>\r
    </div>\r
    \${subtasksHtml}\r
    <div class="disc-comments">\r
      <div class="disc-comments-label">Comments (\${(d.comments||[]).length})</div>\r
      \${commentsHtml}\r
      <div class="comment-input-row">\r
        <input class="comment-input" type="text" placeholder="Add a comment..." id="ci_\${d.id}" onkeydown="if(event.key==='Enter')addComment('\${d.id}')">\r
        <button class="btn btn-ghost btn-sm" onclick="addComment('\${d.id}')">Post</button>\r
      </div>\r
    </div>\`;\r
}\r
\r
function toggleDiscExpand(id){ expandedDisc[id]=!expandedDisc[id]; if(sideView==='disc')renderDiscMain(); }\r
function cycleStatus(id){ const d=getDisc(id);if(!d)return;const order=['pending','in-progress','done','discussion'];const idx=order.indexOf(d.status);d.status=order[(idx+1)%order.length];save();renderDiscSidebar();renderDiscMain(); }\r
function updateDiscStatus(id,val){ const d=getDisc(id);if(!d)return;d.status=val;save();renderDiscSidebar();renderDiscMain(); }\r
function toggleSubtask(discId,idx){ const d=getDisc(discId);if(!d||!d.subtasks)return;d.subtasks[idx].done=!d.subtasks[idx].done;save();renderDiscMain(); }
function addComment(discId){ const inp=document.getElementById('ci_'+discId);if(!inp)return;const text=inp.value.trim();if(!text)return;const d=getDisc(discId);if(!d)return;if(!d.comments)d.comments=[];const now=new Date();d.comments.push({author:'Me',text,time:now.toLocaleString('en-IN',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'short'})});save();renderDiscMain(); }
function deleteDiscItem(id){ if(!confirm('Delete this discussion item?'))return; discItems=discItems.filter(d=>d.id!==id); discItems.forEach((d,i)=>d.num=i+1); if(curDiscId===id)curDiscId=null; delete expandedDisc[id]; save(); renderDiscSidebar(); renderDiscMain(); }
function setDiscFilter(f){discFilter=f;renderDiscMain()}
\r
// ── CHECKLIST BUILDERS ──\r
function buildCL(day){\r
  const groups=getChecklistGroups();\r
  if(!groups.length){
    return \`<div class="cl-section">
      <div style="padding:28px 24px;text-align:center">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">No checklist for this project</div>
        <div style="font-size:13px;color:var(--text2);line-height:1.7;max-width:520px;margin:0 auto">This Daily Tracker checklist is now project-specific, and the old prewritten checklist has been removed from Days.</div>
        <div style="margin-top:14px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap">
          <button class="btn btn-ghost btn-sm" onclick="addChecklistSection()">+ Add Section</button>
          <button class="btn btn-orange btn-sm" onclick="addChecklistItem()">+ Add First Item</button>
        </div>
      </div>
    </div>\`;
  }
  return groups.map(([k,cl])=>{\r
    const tot=cl.items.length;\r
    const chk=cl.items.filter(i=>day.checks?.[i.id]==='checked').length;\r
    const pct=Math.round((chk/tot)*100);\r
    const items=cl.items.map(item=>{\r
      const st=day.checks?.[item.id]||'none',cm=day.comments?.[item.id]||'',h=getHist(item.id,curDay);\r
      return \`<div class="ci \${st==='checked'?'ck':''} \${st==='na'?'na':''}" id="ci_\${item.id}">\r
        <div class="checkbox \${st==='checked'?'ck':''}" onclick="toggleCk('\${item.id}')"></div>\r
        <div class="ci-body">\r
          <div class="ci-top"><span class="ci-lbl">\${item.text}</span><span class="pts">+\${item.pts}pts</span></div>\r
          \${h?\`<div class="ci-hist">↩ \${h}</div>\`:''}\r
          <div class="ci-bottom">
            <input class="remark" type="text" placeholder="Add site remark..." value="\${esc(cm)}" onchange="saveCm('\${item.id}',this.value)">
            <button class="na-btn \${st==='na'?'on':''}" onclick="toggleNA('\${item.id}')">N/A</button>
            <button class="na-btn" style="color:var(--red);border-color:rgba(248,81,73,0.35)" onclick="deleteChecklistItem('\${k}','\${item.id}')">Delete</button>
          </div>
        </div>\r
      </div>\`;\r
    }).join('');\r
    return \`<div class="cl-section">\r
      <div class="cl-head" onclick="toggleSect('\${k}')">\r
        <div class="cl-head-l">\r
          <div class="cl-ico \${cl.cls}">\${cl.icon}</div>\r
          <span class="cl-name">\${cl.label}</span>\r
          <span class="cl-cnt">\${chk}/\${tot}</span>\r
        </div>
        <div class="cl-right">
          <button class="na-btn" style="color:var(--red);border-color:rgba(248,81,73,0.35)" onclick="event.stopPropagation();deleteChecklistSection('\${k}')">Delete</button>
          <div class="cl-pbar"><div class="cl-pfill \${cl.cls}" style="width:\${pct}%"></div></div>
          <span class="cl-pct">\${pct}%</span>\r
          <span class="cl-chev open" id="cv_\${k}">▶</span>\r
        </div>\r
      </div>\r
      <div class="cl-body" id="cb_\${k}">\${items}</div>\r
    </div>\`;\r
  }).join('');\r
}\r
\r
const MEDIA_CATS=['General','Foundation','Rebar','Formwork','Site Safety','Progress','Issue','Other'];\r
function buildMD(day){\r
  const m=day.media||[];\r
  const cats=[...new Set(['All',...MEDIA_CATS,...m.map(x=>x.cat||'General')])];\r
  const activeCat=day._mediaCat||'All';\r
  const filtered=activeCat==='All'?m:m.filter(x=>(x.cat||'General')===activeCat);\r
  const thumbs=filtered.map((x,fi)=>{\r
    const i=m.indexOf(x);\r
    const isVid=x.type&&x.type.startsWith('video');\r
    const preview=isVid\r
      ?\`<video src="\${x.data}" style="width:100%;height:100%;object-fit:cover"></video><div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);border-radius:4px;padding:1px 5px;font-size:9px;color:#fff">▶ VID</div>\`\r
      :\`<img src="\${x.data}" alt="">\`;\r
    const catBadge=\`<div style="position:absolute;bottom:4px;left:4px;right:18px;background:rgba(0,0,0,0.75);border-radius:4px;padding:1px 5px;font-size:8px;color:var(--orange);font-family:'JetBrains Mono',monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">\${x.cat||'General'}</div>\`;\r
    return \`<div style="display:flex;flex-direction:column;gap:4px;width:100px">\r
      <div class="media-thumb" onclick="openLB('\${x.data}','\${isVid?'video':'img'}')">\${preview}\${catBadge}<button class="rm" onclick="event.stopPropagation();rmMedia(\${i})">✕</button></div>\r
      <select onchange="setMediaCat(\${i},this.value)" onclick="event.stopPropagation()" style="font-size:10px;background:var(--bg3);border:1px solid var(--border);color:var(--text2);border-radius:5px;padding:2px 4px;width:100%;font-family:'Plus Jakarta Sans',sans-serif">\r
        \${MEDIA_CATS.map(c=>\`<option value="\${c}"\${(x.cat||'General')===c?' selected':''}>\${c}</option>\`).join('')}\r
      </select>\r
    </div>\`;\r
  }).join('');\r
  const catTabs=cats.map(c=>\`<button onclick="setMediaFilter('\${c}')" style="padding:3px 10px;border-radius:6px;border:1px solid \${activeCat===c?'var(--orange)':'var(--border)'};background:\${activeCat===c?'var(--og)':'transparent'};color:\${activeCat===c?'var(--orange)':'var(--text2)'};font-size:11px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer">\${c}</button>\`).join('');\r
  return \`<div class="media-wrap">\r
    <div class="media-hd">\r
      <div class="media-ttl"><div class="media-dot"></div>Site Photos & Videos</div>\r
      <div style="display:flex;gap:6px">\r
        <button class="btn btn-ghost btn-sm" onclick="openCamera()" title="Take photo with camera">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>Camera\r
        </button>\r
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('fi').click()">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>Upload\r
        </button>\r
      </div>\r
    </div>\r
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">\${catTabs}</div>\r
    <div class="media-grid">\${thumbs}</div>\r
    \${!filtered.length?\`<div style="text-align:center;padding:24px;color:var(--text3);font-size:12px">\${m.length?'No photos in this category':'No photos yet — use Camera or Upload'}</div>\`:''}\r
  </div>\`;\r
}\r
function setMediaCat(i,cat){const day=getDay(curDay);if(!day||!day.media)return;day.media[i].cat=cat;save();renderMain();}\r
function setMediaFilter(cat){const day=getDay(curDay);if(!day)return;day._mediaCat=cat;renderMain();}\r
\r
function buildHI(){\r
  const rows=days.slice().reverse().map(day=>{\r
    const s=sc(day),pct=s.ti?Math.round((s.c/s.ti)*100):0;\r
    const status=pct===100?'done':pct>0?'partial':'pending',label=pct===100?'Complete':pct>0?'In Progress':'Pending';\r
    const d=new Date(day.date+'T12:00:00');\r
    const fc=pct===100?'var(--lime)':pct>0?'var(--amber)':'var(--text3)';\r
    return \`<tr \${day.id===curDay?'style="background:rgba(255,107,43,0.04)"':''}>\r
      <td><strong style="color:var(--orange)">D\${day.dayNum}</strong></td>\r
      <td>\${d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>\r
      <td style="color:var(--text2)">\${day.location||'—'}</td>\r
      <td style="color:var(--text2)">\${day.inspector||'—'}</td>\r
      <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px">\${s.e}/\${s.t}</span></td>\r
      <td><div style="display:flex;align-items:center;gap:7px"><div style="width:60px;height:4px;background:var(--bg3);border-radius:2px;overflow:hidden"><div style="width:\${pct}%;height:100%;border-radius:2px;background:\${fc}"></div></div><span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2)">\${pct}%</span></div></td>\r
      <td><span class="pill \${status}">\${label}</span></td>\r
      <td><button class="btn btn-ghost btn-sm" onclick="selectDay('\${day.id}')">View →</button></td>\r
    </tr>\`;\r
  }).join('');\r
  return \`<div class="hist-wrap">\r
    <div class="hist-hd"><div class="hist-ttl">All Inspection Days</div><div class="hist-cnt">\${days.length} days</div></div>\r
    <div style="overflow-x:auto"><table class="ht">\r
      <thead><tr><th>Day</th><th>Date</th><th>Site</th><th>Inspector</th><th>Score</th><th>Progress</th><th>Status</th><th></th></tr></thead>\r
      <tbody>\${rows||'<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:2rem;font-size:12px">No inspection days added yet</td></tr>'}</tbody>\r
    </table></div>\r
  </div>\`;\r
}\r
\r
function getHist(id,cid){ return days.filter(d=>d.id!==cid).slice(-3).reverse().map(d=>{const s=d.checks?.[id];return s==='checked'?\`D\${d.dayNum}✓\`:s==='na'?\`D\${d.dayNum}N/A\`:null;}).filter(Boolean).join(' · '); }\r
\r
// ── INSPECTION INTERACTIONS ──\r
function toggleSect(k){const b=document.getElementById('cb_'+k),c=document.getElementById('cv_'+k);if(!b)return;if(b.style.display==='none'){b.style.display='';c.classList.add('open')}else{b.style.display='none';c.classList.remove('open')}}\r
function toggleCk(id){const day=getDay(curDay);if(!day)return;if(!day.checks)day.checks={};if(day.checks[id]==='checked')delete day.checks[id];else day.checks[id]='checked';save();renderMain();renderSidebar()}\r
function toggleNA(id){const day=getDay(curDay);if(!day)return;if(!day.checks)day.checks={};if(day.checks[id]==='na')delete day.checks[id];else day.checks[id]='na';save();renderMain()}\r
function saveCm(id,v){const day=getDay(curDay);if(!day)return;if(!day.comments)day.comments={};day.comments[id]=v;save()}\r
function handleUpload(e){\r
  const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];\r
  const isCam=e.target.id==='fc';\r
  const files=Array.from(e.target.files);let n=0;\r
  files.forEach(f=>{const r=new FileReader();r.onload=ev=>{day.media.push({name:f.name,type:f.type,data:ev.target.result,src:isCam?'CAM':'FILE'});if(++n===files.length){save();renderMain()}};r.readAsDataURL(f)});\r
  e.target.value='';\r
}\r
function rmMedia(i){const day=getDay(curDay);if(!day||!day.media)return;day.media.splice(i,1);save();renderMain()}\r
\r
// ── CAMERA ──\r
let camStream=null,camFacing='environment',camCount=0;\r
async function openCamera(){\r
  camCount=0;\r
  document.getElementById('camStrip').innerHTML='';\r
  document.getElementById('camLabel').textContent='LIVE CAMERA';\r
  document.getElementById('camModal').classList.add('open');\r
  await startCamStream();\r
}\r
async function startCamStream(){\r
  if(camStream){camStream.getTracks().forEach(t=>t.stop());}\r
  try{\r
    camStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:camFacing,width:{ideal:1920},height:{ideal:1080}},audio:false});\r
    const vid=document.getElementById('camVideo');\r
    vid.srcObject=camStream;\r
    document.getElementById('camLabel').textContent=camFacing==='environment'?'REAR CAMERA':'FRONT CAMERA';\r
  }catch(err){\r
    alert('Camera access denied or not available.\\n'+err.message);\r
    closeCamera();\r
  }\r
}\r
function flipCamera(){camFacing=camFacing==='environment'?'user':'environment';startCamStream();}\r
function snapPhoto(){\r
  const vid=document.getElementById('camVideo');\r
  const cv=document.getElementById('camCanvas');\r
  cv.width=vid.videoWidth;cv.height=vid.videoHeight;\r
  cv.getContext('2d').drawImage(vid,0,0);\r
  const dataUrl=cv.toDataURL('image/jpeg',0.92);\r
  // save immediately to day media\r
  const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];\r
  day.media.push({name:'cam_'+Date.now()+'.jpg',type:'image/jpeg',data:dataUrl,src:'CAM',cat:'General'});\r
  save();\r
  camCount++;\r
  // flash effect\r
  const vf=document.querySelector('.cam-viewfinder');\r
  vf.style.outline='4px solid #fff';setTimeout(()=>vf.style.outline='',150);\r
  // add to strip\r
  const strip=document.getElementById('camStrip');\r
  const img=document.createElement('img');\r
  img.className='cam-prev-thumb';img.src=dataUrl;\r
  img.onclick=()=>openLB(dataUrl,'img');\r
  strip.appendChild(img);\r
  strip.scrollLeft=strip.scrollWidth;\r
  document.getElementById('camLabel').textContent=\`✅ Saved — \${camCount} photo\${camCount>1?'s':''}\`;\r
  setTimeout(()=>{ if(document.getElementById('camModal').classList.contains('open')) document.getElementById('camLabel').textContent=camFacing==='environment'?'REAR CAMERA':'FRONT CAMERA'; },1500);\r
}\r
function closeCamera(){\r
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}\r
  document.getElementById('camModal').classList.remove('open');\r
  if(camCount>0) renderMain();\r
  camCount=0;\r
}\r
\r
function deleteChecklist(){
  if(!confirm('Delete the checklist for this project? This will clear all checklist entries saved in Daily Tracker for this project.'))return;
  checklistTemplate={};
  days.forEach(day=>{
    day.checks={};
    day.comments={};\r
  });\r
  save();\r
  renderSidebar();
  renderMain();
}

function deleteChecklistSection(key){
  if(!checklistTemplate?.[key])return;
  if(!confirm('Delete this checklist section and all its items?'))return;
  const itemIds=new Set((checklistTemplate[key].items||[]).map(item=>item.id));
  delete checklistTemplate[key];
  days.forEach(day=>{
    itemIds.forEach(id=>{
      if(day.checks)delete day.checks[id];
      if(day.comments)delete day.comments[id];
    });
  });
  save();
  renderSidebar();
  renderMain();
}

function deleteChecklistItem(sectionKey,itemId){
  const section=checklistTemplate?.[sectionKey];
  if(!section||!Array.isArray(section.items))return;
  if(!confirm('Delete this checklist item?'))return;
  section.items=section.items.filter(item=>item.id!==itemId);
  days.forEach(day=>{
    if(day.checks)delete day.checks[itemId];
    if(day.comments)delete day.comments[itemId];
  });
  save();
  renderSidebar();
  renderMain();
}

function addChecklistSection(){
  ensureChecklistTemplate();
  const label=(prompt('Section name for this project checklist:', '')||'').trim();
  if(!label)return;
  const keyBase=slugifyChecklistKey(label);
  let key=keyBase, idx=2;
  while(checklistTemplate[key]){ key=\`\${keyBase}-\${idx++}\`; }
  checklistTemplate[key]=createChecklistSection(label);
  save();
  renderMain();
}

function addChecklistItem(){
  ensureChecklistTemplate();
  let groups=getChecklistGroups();
  if(!groups.length){
    const createFirst=confirm('This project has no checklist sections yet. Create one now?');
    if(!createFirst)return;
    addChecklistSection();
    groups=getChecklistGroups();
    if(!groups.length)return;
  }
  const sectionPrompt='Add item to which section?\\n' + groups.map(([key,section],i)=>\`\${i+1}. \${section.label}\`).join('\\n');
  const sectionInput=(prompt(sectionPrompt,'1')||'').trim();
  if(!sectionInput)return;
  let targetKey=null;
  const numericIndex=Number(sectionInput);
  if(Number.isFinite(numericIndex) && numericIndex>=1 && numericIndex<=groups.length){
    targetKey=groups[numericIndex-1][0];
  }else{
    const lowered=sectionInput.toLowerCase();
    targetKey=groups.find(([key,section])=>key.toLowerCase()===lowered || String(section.label||'').toLowerCase()===lowered)?.[0] || null;
  }
  if(!targetKey){
    alert('Section not found.');
    return;
  }
  const text=(prompt('Checklist item text:', '')||'').trim();
  if(!text)return;
  const ptsRaw=(prompt('Points for this item:', '5')||'').trim();
  const pts=Math.max(parseInt(ptsRaw,10)||0,0);
  const section=checklistTemplate[targetKey];
  if(!section.items)section.items=[];
  section.items.push({id:\`cli_\${Date.now()}_\${section.items.length+1}\`,text,pts});
  save();
  renderMain();
}

function deleteDay(id){
  if(!confirm('Delete this inspection day? This cannot be undone.'))return;
  days=days.filter(d=>d.id!==id);
  days.forEach((d,i)=>d.dayNum=i+1);\r
  curDay=days.length?days[days.length-1].id:null;\r
  save();renderSidebar();renderMain();\r
}\r
async function captureScreen(){\r
  try{\r
    const stream=await navigator.mediaDevices.getDisplayMedia({video:{cursor:'always'},audio:false});\r
    const track=stream.getVideoTracks()[0];\r
    const ic=new ImageCapture(track);\r
    const bmp=await ic.grabFrame();\r
    track.stop();\r
    const cv=document.createElement('canvas');cv.width=bmp.width;cv.height=bmp.height;\r
    const ctx=cv.getContext('2d');ctx.drawImage(bmp,0,0);\r
    const dataUrl=cv.toDataURL('image/png');\r
    const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];\r
    day.media.push({name:'screenshot_'+Date.now()+'.png',type:'image/png',data:dataUrl,src:'SCRN'});\r
    save();renderMain();\r
  }catch(err){if(err.name!=='AbortError')alert('Screenshot cancelled or not supported in this browser.');}\r
}\r
function openLB(src,kind){\r
  const lb=document.getElementById('lightbox');\r
  if(kind==='video'){\r
    document.getElementById('lbImg').style.display='none';\r
    let vid=document.getElementById('lbVid');\r
    if(!vid){vid=document.createElement('video');vid.id='lbVid';vid.controls=true;vid.style='max-width:90vw;max-height:85vh;border-radius:8px';lb.appendChild(vid);}\r
    vid.src=src;vid.style.display='block';\r
  }else{\r
    const vid=document.getElementById('lbVid');if(vid){vid.style.display='none';vid.src='';}\r
    document.getElementById('lbImg').style.display='block';\r
    document.getElementById('lbImg').src=src;\r
  }\r
  lb.classList.add('open');\r
}\r
function closeLightbox(){\r
  document.getElementById('lightbox').classList.remove('open');\r
  const vid=document.getElementById('lbVid');if(vid){vid.pause();vid.src='';}\r
}\r
function switchTab(e,id){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));e.target.classList.add('active');document.getElementById(id).classList.add('active')}\r
\r
// ── CLIENTS ──\r
const saveClients = () => save();\r
\r
function renderClientSidebar(f=''){\r
  const list=document.getElementById('clientList');\r
  if(!list)return;\r
  const fd=f?clients.filter(c=>(c.name||'').toLowerCase().includes(f.toLowerCase())||(c.email||'').toLowerCase().includes(f.toLowerCase())):clients;\r
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">\${clients.length?'No matches':'No clients yet'}</div>\`;return;}\r
  list.innerHTML=fd.map(c=>\`\r
    <div class="client-item\${c.id===curClient?' active':''}" onclick="selectClient('\${c.id}')">\r
      <div class="client-av">\${(c.name||'?')[0].toUpperCase()}</div>\r
      <div class="client-meta">\r
        <div class="client-name">\${esc(c.name||'Unnamed')}</div>\r
        <div class="client-email">\${esc(c.email||c.phone||'—')}</div>\r
      </div>\r
    </div>\`).join('');\r
}\r
function filterClients(v){renderClientSidebar(v);}\r
function selectClient(id){\r
  curClient=id;\r
  renderClientSidebar();\r
  renderClientMain();\r
}\r
function renderClientMain(){\r
  const main=document.getElementById('mainContent');\r
  const c=clients.find(x=>x.id===curClient);\r
  if(!c){main.innerHTML=\`<div class="empty"><div class="empty-ico">👤</div><h3>No client selected</h3><p>Select or add a client to generate contracts and invoices.</p><button class="btn btn-orange" onclick="openAddClientModal()" style="margin-top:4px">+ Add Client</button></div>\`;return;}\r
  main.innerHTML=\`\r
  <div class="client-main">\r
    <div class="client-main-hd">\r
      <div>\r
        <div class="client-main-ttl">\${esc(c.name)}</div>\r
        <div style="font-size:12px;color:var(--text2);margin-top:4px;display:flex;flex-wrap:wrap;gap:10px">\r
          \${c.email?\`<span>✉️ \${esc(c.email)}</span>\`:''}\r
          \${c.phone?\`<span>📞 \${esc(c.phone)}</span>\`:''}\r
          \${c.addr?\`<span>📍 \${esc(c.addr)}</span>\`:''}\r
        </div>\r
      </div>\r
      <div style="display:flex;gap:6px">\r
        <button class="btn btn-ghost btn-sm" onclick="editClient('\${c.id}')">Edit</button>\r
        <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteClient('\${c.id}')">Delete</button>\r
      </div>\r
    </div>\r
    \${c.notes?\`<div style="font-size:12px;color:var(--text2);margin-bottom:16px;padding:10px;background:var(--bg3);border-radius:8px">\${esc(c.notes)}</div>\`:''}\r
    <div class="client-doc-grid">\r
      <div class="client-doc-card" onclick="openContractFor('\${c.id}')">\r
        <div class="client-doc-ico">📄</div>\r
        <div class="client-doc-lbl">Contract</div>\r
        <div class="client-doc-desc">Generate a construction contract with scope, payment terms and signature lines.</div>\r
      </div>\r
      <div class="client-doc-card" onclick="openInvoiceFor('\${c.id}')">\r
        <div class="client-doc-ico">🧾</div>\r
        <div class="client-doc-lbl">Invoice</div>\r
        <div class="client-doc-desc">Create a detailed invoice with line items, tax, and due date.</div>\r
      </div>\r
    </div>\r
  </div>\`;\r
}\r
function openAddClientModal(){\r
  curClient=null;\r
  ['cl-name','cl-phone','cl-email','cl-addr','cl-notes'].forEach(id=>document.getElementById(id).value='');\r
  document.getElementById('addClientModal').classList.add('open');\r
}\r
function editClient(id){\r
  const c=clients.find(x=>x.id===id);if(!c)return;\r
  document.getElementById('cl-name').value=c.name||'';\r
  document.getElementById('cl-phone').value=c.phone||'';\r
  document.getElementById('cl-email').value=c.email||'';\r
  document.getElementById('cl-addr').value=c.addr||'';\r
  document.getElementById('cl-notes').value=c.notes||'';\r
  curClient=id;\r
  document.getElementById('addClientModal').classList.add('open');\r
}\r
function saveClient(){\r
  const name=document.getElementById('cl-name').value.trim();\r
  if(!name){alert('Please enter a client name.');return;}\r
  if(curClient&&clients.find(x=>x.id===curClient)){\r
    const c=clients.find(x=>x.id===curClient);\r
    c.name=name;c.phone=document.getElementById('cl-phone').value.trim();\r
    c.email=document.getElementById('cl-email').value.trim();\r
    c.addr=document.getElementById('cl-addr').value.trim();\r
    c.notes=document.getElementById('cl-notes').value.trim();\r
  }else{\r
    const id='cl_'+Date.now();\r
    clients.push({id,name,phone:document.getElementById('cl-phone').value.trim(),email:document.getElementById('cl-email').value.trim(),addr:document.getElementById('cl-addr').value.trim(),notes:document.getElementById('cl-notes').value.trim()});\r
    curClient=id;\r
  }\r
  saveClients();closeModal('addClientModal');renderClientSidebar();renderClientMain();\r
}\r
function deleteClient(id){\r
  if(!confirm('Delete this client?'))return;\r
  clients=clients.filter(c=>c.id!==id);\r
  curClient=null;saveClients();renderClientSidebar();renderClientMain();\r
}\r
function openContractFor(id){\r
  const c=clients.find(x=>x.id===id);if(!c)return;\r
  document.getElementById('ct-client').value=c.name||'';\r
  document.getElementById('ct-addr').value=c.addr||'';\r
  document.getElementById('ct-date').value=new Date().toISOString().split('T')[0];\r
  document.getElementById('ct-preview').textContent='Fill in fields above then click Preview.';\r
  document.getElementById('contractModal').classList.add('open');\r
}\r
function openInvoiceFor(id){\r
  const c=clients.find(x=>x.id===id);if(!c)return;\r
  document.getElementById('inv-client').value=c.name||'';\r
  document.getElementById('inv-date').value=new Date().toISOString().split('T')[0];\r
  document.getElementById('inv-num').value='INV-'+Date.now().toString().slice(-6);\r
  document.getElementById('inv-preview').textContent='Fill in fields above then click Preview.';\r
  document.getElementById('invoiceModal').classList.add('open');\r
}\r
function closeDocModal(id){document.getElementById(id).classList.remove('open');}\r
function previewContract(){\r
  const v=id=>document.getElementById(id).value;\r
  document.getElementById('ct-preview').textContent=\r
\`══════════════════════════════════════\r
        CONSTRUCTION CONTRACT\r
══════════════════════════════════════\r
Date:       \${v('ct-date')||'—'}\r
Client:     \${v('ct-client')||'—'}\r
Address:    \${v('ct-addr')||'—'}\r
Project:    \${v('ct-project')||'—'}\r
Amount:     $\${v('ct-amount')||'0'}\r
Completion: \${v('ct-end')||'—'}\r
\r
SCOPE OF WORK\r
─────────────\r
\${v('ct-scope')||'—'}\r
\r
PAYMENT TERMS\r
─────────────\r
\${v('ct-terms')||'—'}\r
\r
SIGNATURES\r
─────────────\r
Client: _______________________ Date: ________\r
Contractor: ___________________ Date: ________\r
══════════════════════════════════════\`;\r
}\r
function previewInvoice(){\r
  const v=id=>document.getElementById(id).value;\r
  const lines=v('inv-items').split('\\n').filter(l=>l.trim());\r
  let sub=0;\r
  const rows=lines.map(l=>{const[d,q,p]=(l+'||').split('|').map(s=>s.trim());const t=(parseFloat(q)||1)*(parseFloat(p)||0);sub+=t;return \`  \${(d||'Item').padEnd(26)} \${String(q||1).padStart(4)}  $\${(parseFloat(p)||0).toFixed(2).padStart(10)}  $\${t.toFixed(2).padStart(10)}\`;}).join('\\n');\r
  const tax=parseFloat(v('inv-tax'))||0,taxAmt=sub*(tax/100),total=sub+taxAmt;\r
  document.getElementById('inv-preview').textContent=\r
\`══════════════════════════════════════\r
             INVOICE\r
══════════════════════════════════════\r
Invoice #:  \${v('inv-num')||'—'}\r
Date:       \${v('inv-date')||'—'}\r
Due:        \${v('inv-due')||'—'}\r
Client:     \${v('inv-client')||'—'}\r
Project:    \${v('inv-project')||'—'}\r
\r
  DESCRIPTION                  QTY   UNIT PRICE        TOTAL\r
  ────────────────────────────────────────────────────────────\r
\${rows||'  No items added'}\r
  ────────────────────────────────────────────────────────────\r
  Subtotal:                                     $\${sub.toFixed(2).padStart(10)}\r
\${tax?\`  Tax (\${tax}%):                                  $\${taxAmt.toFixed(2).padStart(10)}\\n\`:''}  TOTAL DUE:                                    $\${total.toFixed(2).padStart(10)}\r
\r
NOTES: \${v('inv-notes')||'—'}\r
══════════════════════════════════════\`;\r
}\r
function copyDocText(previewId){const el=document.getElementById(previewId);navigator.clipboard.writeText(el.textContent||el.value).then(()=>alert('Copied!'));}\r
function downloadDocText(previewId,type){const el=document.getElementById(previewId);const text=el.textContent||el.value;if(!text||text.includes('Fill in'))return alert('Please click Preview first.');const a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(text);a.download=type+'_'+Date.now()+'.txt';a.click();}\r
\r
// ── MODALS ──\r
function openAddDayModal(){document.getElementById('nd-date').value=new Date().toISOString().split('T')[0];['nd-loc','nd-insp','nd-notes'].forEach(id=>document.getElementById(id).value='');document.getElementById('addDayModal').classList.add('open')}\r
function openAddDiscModal(){['di-title','di-assign','di-notes','di-subtasks'].forEach(id=>document.getElementById(id).value='');document.getElementById('di-status').value='pending';document.getElementById('addDiscModal').classList.add('open')}\r
function closeModal(id){document.getElementById(id).classList.remove('open')}\r
\r
function addDay(){\r
  const date=document.getElementById('nd-date').value;\r
  if(!date){alert('Please select a date.');return}\r
  const id='day_'+Date.now();\r
  days.push({id,dayNum:days.length+1,date,location:document.getElementById('nd-loc').value,inspector:document.getElementById('nd-insp').value,notes:document.getElementById('nd-notes').value,checks:{},comments:{},media:[]});\r
  save();closeModal('addDayModal');renderSidebar();selectDay(id);\r
}\r
\r
function addDiscItem(){\r
  const title=document.getElementById('di-title').value.trim();\r
  if(!title){alert('Please enter a title.');return}\r
  const subtasksRaw=document.getElementById('di-subtasks').value.trim();\r
  const subtasks=subtasksRaw?subtasksRaw.split('\\n').filter(Boolean).map((t,i)=>({id:'st_new_'+Date.now()+'_'+i,text:t.trim(),done:false})):[];\r
  const id='disc_'+Date.now();\r
  discItems.push({id,num:discItems.length+1,title,status:document.getElementById('di-status').value,assignedTo:document.getElementById('di-assign').value,notes:document.getElementById('di-notes').value,subtasks,comments:[],date:new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'2-digit'}).replace(/\\//g,'/')});\r
  save();closeModal('addDiscModal');renderDiscSidebar();renderDiscMain();\r
}\r
\r
// ── EXPORT ──\r
function exportAll(){\r
  const lines=['DAILY TRACKER — EXPORT','='.repeat(52),''];\r
  lines.push('INSPECTION DAYS','─'.repeat(40),'');\r
  days.forEach(day=>{\r
    const s=sc(day),pct=Math.round((s.c/s.ti)*100);\r
    lines.push(\`Day \${day.dayNum} | \${day.date} | \${day.location||'N/A'} | \${day.inspector||'N/A'}\`);\r
    lines.push(\`Score: \${s.e}/\${s.t} pts (\${pct}%)\`);\r
    if(day.notes)lines.push(\`Notes: \${day.notes}\`);\r
    Object.keys(CL).forEach(k=>{\r
      lines.push(\`\\n  [ \${CL[k].label.toUpperCase()} ]\`);\r
      CL[k].items.forEach(i=>{const st=day.checks?.[i.id],cm=day.comments?.[i.id]?\` → \${day.comments[i.id]}\`:'';lines.push(\`  \${st==='checked'?'[✓]':st==='na'?'[N/A]':'[ ]'} \${i.text}\${cm}\`)});\r
    });\r
    lines.push('\\n'+'-'.repeat(52)+'\\n');\r
  });\r
  lines.push('','DISCUSSION LOG','─'.repeat(40),'');\r
  discItems.forEach(d=>{\r
    lines.push(\`#\${d.num} [\${statusLabel(d.status).toUpperCase()}] \${d.title}\`);\r
    if(d.assignedTo)lines.push(\`  Assigned: \${d.assignedTo}\`);\r
    if(d.notes)lines.push(\`  Notes: \${d.notes}\`);\r
    if(d.subtasks?.length){lines.push('  Tasks:');d.subtasks.forEach(st=>lines.push(\`    \${st.done?'[✓]':'[ ]'} \${st.text}\`))}\r
    if(d.comments?.length){lines.push('  Comments:');d.comments.forEach(c=>lines.push(\`    \${c.author}: \${c.text}\`))}\r
    lines.push('');\r
  });\r
  const a=document.createElement('a');\r
  a.href=URL.createObjectURL(new Blob([lines.join('\\n')],{type:'text/plain'}));\r
  a.download=\`daily-tracker-\${new Date().toISOString().slice(0,10)}.txt\`;a.click();\r
}\r
\r
// ── INIT ──\r
function syncActiveProject(force=false){
  const nextProjectId = getHostProject()?.id ?? null;
  if(!force && nextProjectId === syncedProjectId) return;
  syncedProjectId = nextProjectId;
  applyTrackerState(readTrackerState());
  if(pendingLegacyChecklistCleanup){
    pendingLegacyChecklistCleanup = false;
    saveTrackerState();
  }
  renderSidebar();
  renderDiscSidebar();
  renderClientSidebar();
  renderMain();\r
}\r
window.syncActiveProject = syncActiveProject;\r
\r
document.getElementById('todayLabel').textContent=new Date().toLocaleDateString('en-IN',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});\r
syncActiveProject(true);\r
setInterval(()=>syncActiveProject(),1500);\r
<\/script>\r
</body>\r
</html>\r
`,gg=`\uFEFF<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8"/>\r
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>\r
<title>Client Contracts</title>\r
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet"/>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"><\/script>\r
<style>\r
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --navy:#0C1B2E;--navy2:#162438;--navy3:#1E3350;\r
  --blue:#1A6BC4;--blue-l:#E8F2FC;\r
  --green:#2D6A0F;--green-l:#ECF5E3;\r
  --amber:#A86200;--amber-l:#FEF3E2;\r
  --red:#9B1F1F;--red-l:#FDEAEA;\r
  --gray-l:#F4F3EF;\r
  --border:#E0DDD5;--muted:#777672;--text:#1A1917;--bg:#F7F6F2;\r
  --sh:0 1px 8px rgba(0,0,0,.07);--sh2:0 4px 20px rgba(0,0,0,.13);\r
}\r
body{font-family:'Barlow',sans-serif;background:var(--bg);color:var(--text);font-size:14px;min-height:100vh}\r
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:10px}\r
.topbar{background:#fff;border-bottom:1px solid var(--border);padding:0 24px;height:54px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:var(--sh)}\r
.tb-title{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;letter-spacing:.3px}\r
.tb-right{display:flex;gap:8px;align-items:center}\r
.main{overflow-y:auto;padding:22px 24px;min-height:calc(100vh - 54px)}\r
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}\r
.sh-title{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:700;letter-spacing:.2px}\r
.sh-sub{font-size:12px;color:var(--muted);margin-top:2px}\r
.panel{background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:var(--sh);margin-bottom:14px;overflow:hidden}\r
.ph{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--navy)}\r
.ph-title{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff;letter-spacing:.4px}\r
.ph-sub{font-size:11px;color:#8AAAC8;margin-top:1px}\r
.detail-grid{padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}\r
.dc-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}\r
.dc-val{font-size:13px;font-weight:600;color:var(--text)}\r
.dc-val.money{font-family:'Barlow Condensed',sans-serif;font-size:16px;color:var(--navy)}\r
.badge{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.2px}\r
.b-active{background:var(--green-l);color:var(--green)}\r
.b-signed{background:var(--blue-l);color:var(--blue)}\r
.b-draft{background:var(--gray-l);color:var(--muted)}\r
.b-expired{background:var(--red-l);color:var(--red)}\r
.ct-actions{padding:12px 16px;border-top:1px solid var(--border);background:#fff;display:flex;gap:8px;flex-wrap:wrap;align-items:center}\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:7px 14px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;font-family:'Barlow',sans-serif;transition:.13s;white-space:nowrap}\r
.btn-navy{background:var(--navy);color:#fff}.btn-navy:hover{background:var(--navy3)}\r
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border)}.btn-ghost:hover{background:var(--gray-l)}\r
.btn-green{background:var(--green-l);color:var(--green);border:1px solid #B8DCA0}.btn-green:hover{background:#DDF2C8}\r
.btn-blue{background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0}.btn-blue:hover{background:#cce0f7}\r
.btn-amber{background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0}.btn-amber:hover{background:#FEEAD0}\r
.btn-red{background:var(--red-l);color:var(--red);border:1px solid #F5C0C0}.btn-red:hover{background:#FBD5D5}\r
.btn-sm{padding:5px 10px;font-size:11px;border-radius:5px}\r
.btn-xs{padding:3px 8px;font-size:10px;border-radius:4px}\r
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;text-align:center}\r
.empty-ic{font-family:'Barlow Condensed',sans-serif;font-size:48px;font-weight:700;color:#D8D5CE;margin-bottom:12px;letter-spacing:2px}\r
.empty p{font-size:13px;color:var(--muted);max-width:300px;line-height:1.6}\r
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:300;align-items:center;justify-content:center;padding:20px}\r
.modal-overlay.open{display:flex}\r
.modal{background:#fff;border-radius:12px;width:100%;max-width:540px;box-shadow:var(--sh2);overflow:hidden;max-height:94vh;display:flex;flex-direction:column}\r
.modal-hd{padding:16px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-hd h3{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700}\r
.modal-close{background:none;border:1px solid var(--border);border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:14px;color:var(--muted);display:flex;align-items:center;justify-content:center}\r
.modal-body{padding:18px 22px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:12px}\r
.modal-ft{padding:12px 22px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;align-items:center}\r
.fi-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);display:block;margin-bottom:4px}\r
.fi{width:100%;border:1px solid var(--border);border-radius:6px;padding:8px 11px;font-size:13px;font-family:'Barlow',sans-serif;background:#fff;outline:none;transition:border-color .15s;color:var(--text)}\r
.fi:focus{border-color:var(--blue)}\r
.fi-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.fi-info{background:var(--blue-l);border:1px solid #B0D0F0;border-radius:6px;padding:8px 12px;font-size:12px;color:var(--blue);font-weight:600}\r
/* Toast */\r
#toast-container{position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px}\r
.toast{padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;color:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2);animation:toastIn .2s ease;max-width:320px}\r
.toast.success{background:#2D6A0F}\r
.toast.error{background:#9B1F1F}\r
.toast.info{background:#1A6BC4}\r
@keyframes toastIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\r
.spinner{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite}\r
@keyframes spin{to{transform:rotate(360deg)}}\r
</style>\r
</head>\r
<body>\r
<div class="topbar">\r
  <div class="tb-title">ðŸ“„ Client Contracts</div>\r
  <div class="tb-right">\r
    <button class="btn btn-ghost btn-sm" onclick="openAddContract()">+ Add Contract</button>\r
  </div>\r
</div>\r
\r
<div class="main" id="mainArea">\r
  <div class="empty"><div class="empty-ic">CC</div><p>Loading projectâ€¦</p></div>\r
</div>\r
\r
<div id="toast-container"></div>\r
\r
<!-- EDIT CLIENT INFO MODAL -->\r
<div class="modal-overlay" id="editClientModal">\r
  <div class="modal">\r
    <div class="modal-hd"><h3>ðŸ‘¤ Edit Client Info</h3><button class="modal-close" onclick="closeModal('editClientModal')">âœ•</button></div>\r
    <div class="modal-body">\r
      <div><label class="fi-lbl">Full Name / Company *</label><input class="fi" type="text" id="ec-name" placeholder="e.g. John Doe / ABC Corp"></div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Phone</label><input class="fi" type="text" id="ec-phone" placeholder="+1 555 000 1234"></div>\r
        <div><label class="fi-lbl">Email</label><input class="fi" type="email" id="ec-email" placeholder="client@example.com"></div>\r
      </div>\r
      <div><label class="fi-lbl">Address</label><input class="fi" type="text" id="ec-addr" placeholder="123 Main St, City, State"></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('editClientModal')">Cancel</button>\r
      <button class="btn btn-navy" onclick="saveClientInfo()">Save â†’</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD / EDIT CONTRACT MODAL -->\r
<div class="modal-overlay" id="contractModal">\r
  <div class="modal">\r
    <div class="modal-hd"><h3 id="ct-modal-title">ðŸ“„ Add Contract</h3><button class="modal-close" onclick="closeModal('contractModal')">âœ•</button></div>\r
    <div class="modal-body">\r
      <input type="hidden" id="ct-id">\r
      <div class="fi-info" id="ct-project-info">â€”</div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Project Name</label><input class="fi" type="text" id="ct-project" readonly style="background:var(--bg)"></div>\r
        <div><label class="fi-lbl">Contract #</label><input class="fi" type="text" id="ct-num" placeholder="CC-2026-001"></div>\r
      </div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Contract Amount ($)</label><input class="fi" type="number" id="ct-amount" placeholder="50000"></div>\r
        <div><label class="fi-lbl">Contract Type</label>\r
          <select class="fi" id="ct-type">\r
            <option>Fixed Price</option><option>Cost Plus</option><option>Time & Materials</option><option>Unit Price</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Contract Date</label><input class="fi" type="date" id="ct-date"></div>\r
        <div><label class="fi-lbl">Completion Date</label><input class="fi" type="date" id="ct-end"></div>\r
      </div>\r
      <div><label class="fi-lbl">Status</label>\r
        <select class="fi" id="ct-status">\r
          <option value="draft">Draft</option><option value="active">Active</option><option value="signed">Signed</option><option value="expired">Expired</option>\r
        </select>\r
      </div>\r
      <div><label class="fi-lbl">Scope of Work</label><textarea class="fi" id="ct-scope" rows="3" placeholder="Describe the work to be performedâ€¦"></textarea></div>\r
      <div><label class="fi-lbl">Payment Terms</label><textarea class="fi" id="ct-terms" rows="2" placeholder="e.g. 30% upfront, 40% at milestone, 30% on completion"></textarea></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('contractModal')">Cancel</button>\r
      <button class="btn btn-navy" onclick="saveContract()">Save Contract â†’</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- SEND FOR SIGNING MODAL -->\r
<div class="modal-overlay" id="signModal">\r
  <div class="modal" style="max-width:520px">\r
    <div class="modal-hd"><h3>âœ Send Contract for Signing</h3><button class="modal-close" onclick="closeModal('signModal')">âœ•</button></div>\r
    <div class="modal-body">\r
      <div><label class="fi-lbl">Recipient Email</label><input class="fi" type="email" id="sg-to" placeholder="client@example.com"></div>\r
      <div><label class="fi-lbl">Subject</label><input class="fi" type="text" id="sg-subject"></div>\r
      <div><label class="fi-lbl">Email Message</label><textarea class="fi" id="sg-body" rows="14" style="font-size:11px;font-family:monospace"></textarea></div>\r
      <div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:6px;padding:10px 12px;font-size:11px;color:var(--amber)">\r
        <strong>How it works:</strong> The full contract email is sent through your backend mail service. Your client replies with <strong>"I AGREE â€“ [their name] â€“ [date]"</strong> to confirm acceptance. Then update the status to <strong>Signed</strong>.\r
      </div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('signModal')">Cancel</button>\r
      <button class="btn btn-amber" id="signSendBtn" onclick="sendForSigning()">âœ Send for Signing</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- SEND EMAIL MODAL -->\r
<div class="modal-overlay" id="emailModal">\r
  <div class="modal" style="max-width:480px">\r
    <div class="modal-hd"><h3>âœ‰ Send Contract by Email</h3><button class="modal-close" onclick="closeModal('emailModal')">âœ•</button></div>\r
    <div class="modal-body">\r
      <div><label class="fi-lbl">Recipient Email</label><input class="fi" type="email" id="em-to" placeholder="client@example.com"></div>\r
      <div><label class="fi-lbl">Subject</label><input class="fi" type="text" id="em-subject"></div>\r
      <div><label class="fi-lbl">Message</label><textarea class="fi" id="em-body" rows="10" style="font-size:11px;font-family:monospace"></textarea></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('emailModal')">Cancel</button>\r
      <button class="btn btn-navy" id="emailSendBtn" onclick="sendEmailJS()">âœ‰ Send Email</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
const LIVIO_KEY='livio_v1';\r
function getHostApp(){\r
  try{\r
    if(window.parent && window.parent!==window && window.parent.DB && typeof window.parent.saveDB==='function'){\r
      return window.parent;\r
    }\r
  }catch{}\r
  return null;\r
}\r
function readLocalLivioProjects(){\r
  try{\r
    const s=localStorage.getItem(LIVIO_KEY);\r
    if(!s)return{projects:[],activeId:null};\r
    return JSON.parse(s);\r
  }catch(e){\r
    return{projects:[],activeId:null};\r
  }\r
}\r
function getLivioProjects(){\r
  const host=getHostApp();\r
  return host?.DB || readLocalLivioProjects();\r
}\r
function persistLivioProjects(db){\r
  const host=getHostApp();\r
  if(host?.DB){\r
    try{\r
      host.saveDB();\r
      return;\r
    }catch(err){\r
      console.error('client contract shared save failed:',err);\r
    }\r
  }\r
  localStorage.setItem(LIVIO_KEY,JSON.stringify(db));\r
}\r
function readContracts(){\r
  const projects=(getLivioProjects().projects)||[];\r
  const hasProjectContracts=projects.some(p=>Array.isArray(p.clientContracts));\r
  if(hasProjectContracts){\r
    return projects.flatMap(p=>(p.clientContracts||[]).map(ct=>({\r
      ...ct,\r
      projectId:ct.projectId||p.id,\r
      project:ct.project||p.name||''\r
    })));\r
  }\r
  try{\r
    return JSON.parse(localStorage.getItem('dt_contracts')||'[]');\r
  }catch{\r
    return [];\r
  }\r
}\r
let contracts=readContracts();\r
let curProjectId=null;\r
let signCtId=null;\r
let emailCtId=null;\r
let lastContractSig='';\r
\r
/* â”€â”€ HELPERS â”€â”€ */\r
function getAllProjects(){return getLivioProjects().projects||[];}\r
function getProj(){return getAllProjects().find(x=>x.id===curProjectId)||null;}\r
function saveContracts(){\r
  const db=getLivioProjects();\r
  const projects=db.projects||[];\r
  if(projects.length){\r
    projects.forEach(p=>{\r
      p.clientContracts=contracts\r
        .filter(c=>c.projectId===p.id)\r
        .map(c=>({...c,projectId:p.id,project:c.project||p.name||''}));\r
    });\r
    persistLivioProjects(db);\r
    lastContractSig=JSON.stringify(contracts);\r
    return;\r
  }\r
  localStorage.setItem('dt_contracts',JSON.stringify(contracts));\r
  lastContractSig=JSON.stringify(contracts);\r
}\r
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');\r
const fmtD=s=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'â€”';\r
const fmtM=n=>n!=null&&n!==''&&n!==0?'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'â€”';\r
const LIVIO_COMPANY_NAME='Livio Building Systems';\r
const LIVIO_OFFICE_ADDRESS='121 Main St #563, Los Altos, California (CA) 94022';\r
const LIVIO_REPLY_EMAIL='ap@golivio.com';\r
function getProjectAddress(p){return p?.address||p?.clientAddr||'â€”';}\r
function getLivioSignature(){return \`\${LIVIO_COMPANY_NAME}\\n\${LIVIO_OFFICE_ADDRESS}\\nReply Email: \${LIVIO_REPLY_EMAIL}\`;}\r
function loadActiveProject(){const db=getLivioProjects();curProjectId=db.activeId||(db.projects&&db.projects[0]?.id)||null;}\r
\r
/* â”€â”€ TOAST â”€â”€ */\r
function showToast(msg,type='info',dur=3500){\r
  const c=document.getElementById('toast-container');\r
  const t=document.createElement('div');\r
  t.className='toast '+type;t.textContent=msg;c.appendChild(t);\r
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},dur);\r
}\r
\r
/* â”€â”€ EMAIL DELIVERY â”€â”€ */\r
function getEmailApiBase(){\r
  const host=getHostApp();\r
  try{\r
    const hostApi=(host&&typeof host.getApiBase==='function')?host.getApiBase():(host&&host.__LIVIO_API_BASE)||'';\r
    if(hostApi) return String(hostApi).replace(/\\/+$/,'');\r
  }catch{}\r
  const isLocal=location.hostname==='127.0.0.1'||location.hostname==='localhost';\r
  const fallback=isLocal
    ? 'http://127.0.0.1:3001/api'
    : 'https://pms.golivio.com/api';
  return fallback.replace(/\\/+$/,'');
}
async function sendEmailThroughBackend(to,subject,message){\r
  const payload={to,subject,message,fromName:'Livio Building Systems',replyTo:LIVIO_REPLY_EMAIL};\r
  const res=await fetch(getEmailApiBase()+'/email/send',{\r
    method:'POST',\r
    headers:{'Content-Type':'application/json'},\r
    body:JSON.stringify(payload)\r
  });\r
  const data=await res.json().catch(()=>({}));\r
  if(!res.ok) throw new Error(data.error||data.message||('Email send failed ('+res.status+')'));\r
  return data;\r
}\r
\r
/* â”€â”€ MAIN RENDER â”€â”€ */\r
function renderMain(){\r
  const main=document.getElementById('mainArea');\r
  const p=getProj();\r
  if(!p){main.innerHTML=\`<div class="empty"><div class="empty-ic">CC</div><p>No active project found. Select a project in Livio first.</p></div>\`;return;}\r
  const ctracts=contracts.filter(x=>x.projectId===p.id);\r
\r
  main.innerHTML=\`\r
  <div class="sh">\r
    <div><div class="sh-title">Client Contracts</div><div class="sh-sub">Owner agreements â€“ Prime contracts â€“ Signed documents</div></div>\r
    <button class="btn btn-navy" onclick="openAddContract()">+ Add Contract</button>\r
  </div>\r
\r
  <div class="panel" style="margin-bottom:18px">\r
    <div class="ph">\r
      <div>\r
        <div class="ph-title">ðŸ“ \${esc(p.name)}</div>\r
        <div class="ph-sub">\${esc(p.address||p.city||'')}</div>\r
      </div>\r
      <span style="background:rgba(255,255,255,.12);color:#8AAAC8;font-size:10px;padding:3px 10px;border-radius:4px;font-weight:700">\${ctracts.length} CONTRACT\${ctracts.length!==1?'S':''}</span>\r
    </div>\r
    <div class="detail-grid">\r
      <div><div class="dc-lbl">Client / Owner</div><div class="dc-val">\${esc(p.client||'â€”')}</div></div>\r
      \${p.clientEmail?\`<div><div class="dc-lbl">Email</div><div class="dc-val">\${esc(p.clientEmail)}</div></div>\`:''}\r
      \${p.clientPhone?\`<div><div class="dc-lbl">Phone</div><div class="dc-val">\${esc(p.clientPhone)}</div></div>\`:''}\r
      \${p.clientAddr?\`<div><div class="dc-lbl">Address</div><div class="dc-val">\${esc(p.clientAddr)}</div></div>\`:''}\r
      \${p.permit?\`<div><div class="dc-lbl">Permit #</div><div class="dc-val">\${esc(p.permit)}</div></div>\`:''}\r
      \${p.type?\`<div><div class="dc-lbl">Type</div><div class="dc-val">\${esc(p.type)}</div></div>\`:''}\r
    </div>\r
    <div style="padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:var(--bg)">\r
      \${!p.client?\`<span style="font-size:11px;color:var(--amber);font-weight:600">âš  No client info added yet</span>\`:\`<span style="font-size:11px;color:var(--green);font-weight:600">âœ“ \${esc(p.client)}</span>\`}\r
      <button class="btn btn-ghost btn-sm" onclick="openEditClientInfo()">âœ Edit Client Info</button>\r
    </div>\r
  </div>\r
\r
  \${!ctracts.length\r
    ?\`<div class="empty"><div class="empty-ic">CC</div><p>No contracts yet. Click <strong>+ Add Contract</strong> to create one.</p></div>\`\r
    :ctracts.map(ct=>renderContractCard(ct,p)).join('')}\`;\r
}\r
\r
function renderContractCard(ct,p){\r
  const sCls={draft:'b-draft',active:'b-active',signed:'b-signed',expired:'b-expired'}[ct.status]||'b-draft';\r
  const sLbl=(ct.status||'draft').charAt(0).toUpperCase()+(ct.status||'draft').slice(1);\r
  return \`<div class="panel">\r
    <div class="ph">\r
      <div>\r
        <div class="ph-title">\${esc(ct.project||p.name||'Contract')}</div>\r
        <div class="ph-sub">\${ct.num?'# '+esc(ct.num):''}</div>\r
      </div>\r
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">\r
        <span class="badge \${sCls}">\${sLbl}</span>\r
        <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="openEditContract('\${ct.id}')">âœ Edit</button>\r
        <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4)" onclick="deleteContract('\${ct.id}')">ðŸ—‘</button>\r
      </div>\r
    </div>\r
    <div class="detail-grid">\r
      <div><div class="dc-lbl">Contract Value</div><div class="dc-val money">\${fmtM(ct.amount)}</div></div>\r
      <div><div class="dc-lbl">Type</div><div class="dc-val">\${esc(ct.type||'â€”')}</div></div>\r
      <div><div class="dc-lbl">Contract Date</div><div class="dc-val">\${fmtD(ct.date)}</div></div>\r
      <div><div class="dc-lbl">Completion</div><div class="dc-val">\${fmtD(ct.end)}</div></div>\r
    </div>\r
    \${ct.scope?\`<div style="padding:0 16px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Scope of Work</div><div style="font-size:12px;color:var(--text);line-height:1.6">\${esc(ct.scope)}</div></div>\`:''}\r
    \${ct.terms?\`<div style="padding:0 16px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Payment Terms</div><div style="font-size:12px;color:var(--text)">\${esc(ct.terms)}</div></div>\`:''}\r
    <div class="ct-actions">\r
      <button class="btn btn-green" onclick="downloadContractPDF('\${ct.id}')">â¬‡ Download PDF</button>\r
      <button class="btn btn-amber" onclick="openSendForSigning('\${ct.id}')">âœ Send for Signing</button>\r
      <button class="btn btn-blue" onclick="openSendContractEmail('\${ct.id}')">âœ‰ Send Email</button>\r
    </div>\r
  </div>\`;\r
}\r
\r
/* â”€â”€ jsPDF CONTRACT DOWNLOAD â”€â”€ */\r
function downloadContractPDF(id){\r
  const ct=contracts.find(x=>x.id===id);if(!ct)return;\r
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};\r
  const {jsPDF}=window.jspdf;\r
  const doc=new jsPDF({unit:'mm',format:'a4'});\r
  const W=210,navy=[12,27,46],white=[255,255,255],gray=[247,246,242],muted=[119,118,114],blue=[26,107,196],green=[45,106,15];\r
\r
  // Navy header\r
  doc.setFillColor(...navy);doc.rect(0,0,W,40,'F');\r
  doc.setFont('helvetica','bold');doc.setFontSize(18);doc.setTextColor(...white);\r
  doc.text('Livio Building Systems',14,15);\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(138,170,200);\r
  doc.text(\`Construction Management Â· \${LIVIO_OFFICE_ADDRESS}\`,14,21);\r
  // CONTRACT title\r
  doc.setFont('helvetica','bold');doc.setFontSize(24);doc.setTextColor(...white);\r
  doc.text('CONTRACT',W-14,17,{align:'right'});\r
  doc.setFontSize(10);doc.setTextColor(138,170,200);\r
  doc.text(ct.num||'â€”',W-14,24,{align:'right'});\r
  // Status\r
  const sBgMap={draft:[119,118,114],active:[45,106,15],signed:[26,107,196],expired:[155,31,31]};\r
  const sBg=sBgMap[ct.status]||sBgMap.draft;\r
  const sLbl=(ct.status||'draft').toUpperCase();\r
  doc.setFillColor(...sBg);doc.roundedRect(W-14-32,30,34,8,2,2,'F');\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...white);\r
  doc.text(sLbl,W-14,36,{align:'right'});\r
\r
  // Client / Contractor section\r
  let y=50;\r
  doc.setFillColor(...gray);doc.rect(0,y-4,W,42,'F');\r
  // Left: Client\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);\r
  doc.text('CLIENT / OWNER',14,y);y+=4;\r
  doc.setFont('helvetica','bold');doc.setFontSize(12);doc.setTextColor(...navy);\r
  doc.text(p.client||'â€”',14,y);y+=5;\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
  if(p.clientAddr||p.address)doc.text(p.clientAddr||p.address||'',14,y),y+=4;\r
  if(p.clientEmail)doc.text(p.clientEmail,14,y),y+=4;\r
  if(p.clientPhone)doc.text(p.clientPhone,14,y),y+=4;\r
\r
  // Right: Contract details\r
  let yr=54;\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);\r
  doc.text('CONTRACT DETAILS',W/2+10,yr);yr+=5;\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
  const details=[['Contract Date:',fmtD(ct.date)],['Completion Date:',fmtD(ct.end)],['Contract Type:',ct.type||'â€”'],['Contract Value:',ct.amount?'$'+Number(ct.amount).toLocaleString('en-US',{minimumFractionDigits:2}):'â€”']];\r
  details.forEach(([lbl,val])=>{\r
    doc.setFont('helvetica','bold');doc.text(lbl,W/2+10,yr);\r
    doc.setFont('helvetica','normal');doc.text(val,W/2+46,yr);yr+=5;\r
  });\r
\r
  // Project / Contractor section\r
  let y2=Math.max(y,yr)+8;\r
  doc.setFillColor(232,242,252);doc.rect(0,y2-4,W,26,'F');\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);\r
  doc.text('PROJECT',14,y2);y2+=4;\r
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(...navy);\r
  doc.text(ct.project||p.name||'â€”',14,y2);y2+=5;\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
  doc.text(getProjectAddress(p),14,y2),y2+=4;\r
  if(p.permit)doc.text('Permit #: '+p.permit,14,y2),y2+=4;\r
\r
  let yr2=y2-13;\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);\r
  doc.text('CONTRACTOR',W/2+10,yr2);yr2+=5;\r
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(...navy);\r
  doc.text('Livio Building Systems',W/2+10,yr2);yr2+=5;\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
  doc.text('Licensed General Contractor',W/2+10,yr2);yr2+=4;\r
  doc.text(LIVIO_OFFICE_ADDRESS,W/2+10,yr2);yr2+=4;\r
  doc.text('California License #: ___________',W/2+10,yr2);yr2+=4;\r
  doc.text('Insurance: General Liability',W/2+10,yr2);\r
\r
  // Scope of Work\r
  let fy=Math.max(y2,yr2)+8;\r
  if(ct.scope){\r
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);\r
    doc.text('SCOPE OF WORK',14,fy);fy+=2;\r
    doc.setDrawColor(...blue);doc.setLineWidth(0.8);doc.line(14,fy+1,W-14,fy+1);fy+=5;\r
    doc.setFillColor(232,242,252);\r
    const scopeLines=doc.splitTextToSize(ct.scope,W-32);\r
    const scopeH=scopeLines.length*5+6;\r
    doc.rect(14,fy-2,W-28,scopeH,'F');\r
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
    doc.text(scopeLines,18,fy+2);fy+=scopeH+6;\r
  }\r
\r
  // Payment Terms\r
  if(ct.terms){\r
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);\r
    doc.text('PAYMENT TERMS',14,fy);fy+=2;\r
    doc.setDrawColor(...green);doc.setLineWidth(0.8);doc.line(14,fy+1,W-14,fy+1);fy+=5;\r
    doc.setFillColor(236,245,227);\r
    const termLines=doc.splitTextToSize(ct.terms,W-32);\r
    const termH=termLines.length*5+6;\r
    doc.rect(14,fy-2,W-28,termH,'F');\r
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);\r
    doc.text(termLines,18,fy+2);fy+=termH+6;\r
  }\r
\r
  // Check page space â€” add new page if needed\r
  if(fy>220){doc.addPage();fy=20;}\r
\r
  // Terms & Conditions\r
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);\r
  doc.text('TERMS & CONDITIONS',14,fy);fy+=2;\r
  doc.setDrawColor(...navy);doc.setLineWidth(0.5);doc.line(14,fy+1,W-14,fy+1);fy+=6;\r
  const tc=[\r
    'Contractor shall complete all work in a professional and workmanlike manner in accordance with applicable codes.',\r
    'Any changes to scope of work must be agreed to in writing by both parties prior to execution.',\r
    'Client is responsible for providing adequate site access, utilities, and permits unless otherwise specified.',\r
    'Contractor maintains general liability insurance. Certificates available upon request.',\r
    'Disputes shall be resolved through mediation before pursuing litigation.',\r
    'This contract is governed by the laws of the State of California.',\r
    'Neither party may assign this contract without prior written consent of the other party.',\r
    'All work is subject to final inspection and acceptance by the Client before final payment is released.'\r
  ];\r
  doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(51,51,51);\r
  tc.forEach((item,i)=>{\r
    if(fy>265){doc.addPage();fy=20;}\r
    const lines=doc.splitTextToSize(\`\${i+1}. \${item}\`,W-30);\r
    doc.text(lines,18,fy);fy+=lines.length*4.5+1.5;\r
  });\r
\r
  // Signature section\r
  if(fy>240){doc.addPage();fy=20;}\r
  fy+=8;\r
  doc.setDrawColor(...navy);doc.setLineWidth(0.5);doc.line(14,fy,W-14,fy);fy+=5;\r
  // Left sig\r
  doc.setFillColor(...navy);doc.rect(14,fy,0.8,1,'F');\r
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);\r
  doc.text('CLIENT / OWNER SIGNATURE',14,fy);\r
  // Right sig\r
  doc.text('CONTRACTOR SIGNATURE',W/2+10,fy);fy+=10;\r
  doc.setDrawColor(180,180,180);doc.setLineWidth(0.4);\r
  doc.line(14,fy,W/2-10,fy);\r
  doc.line(W/2+10,fy,W-14,fy);\r
  fy+=6;\r
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(100,100,100);\r
  doc.text('Name: '+(p.client||'________________________________'),14,fy);\r
  doc.text('Name: Livio Building Systems',W/2+10,fy);fy+=6;\r
  doc.text('Date: ___________________________',14,fy);\r
  doc.text('Date: ___________________________',W/2+10,fy);\r
\r
  // Footer\r
  const fY=288;\r
  doc.setDrawColor(...navy);doc.setLineWidth(0.3);doc.line(14,fY-4,W-14,fY-4);\r
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...muted);\r
  doc.text(\`\${LIVIO_COMPANY_NAME} Â· \${LIVIO_OFFICE_ADDRESS} Â· Contract \${(ct.num||'')} Â· Generated \${new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}\`,W/2,fY,{align:'center'});\r
\r
  doc.save('Contract-'+(ct.num||'export')+'.pdf');\r
  showToast('â¬‡ Contract PDF downloaded!','success');\r
}\r
\r
/* â”€â”€ SEND FOR SIGNING â”€â”€ */\r
function buildSigningBody(ct,p){\r
  return \`Dear \${p.client||'Client'},\r
\r
I hope this message finds you well. Please find the details of your Construction Contract below for your review and signature.\r
\r
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\r
  CONTRACT: \${ct.num||'â€”'}   STATUS: \${(ct.status||'DRAFT').toUpperCase()}\r
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\r
Client:          \${p.client||'â€”'}\r
Project:         \${ct.project||p.name||'â€”'}\r
Project Address: \${getProjectAddress(p)}\r
Livio Address:   \${LIVIO_OFFICE_ADDRESS}\r
Contract Date:   \${fmtD(ct.date)}\r
Completion Date: \${fmtD(ct.end)}\r
Contract Type:   \${ct.type||'â€”'}\r
Contract Value:  \${fmtM(ct.amount)}\r
\r
SCOPE OF WORK:\r
\${ct.scope||'As discussed and agreed upon.'}\r
\r
PAYMENT TERMS:\r
\${ct.terms||'As per agreement.'}\r
\r
TERMS & CONDITIONS:\r
1. Contractor shall complete all work in a professional and workmanlike manner in accordance with applicable codes.\r
2. Any changes to scope of work must be agreed to in writing by both parties prior to execution.\r
3. Client is responsible for providing adequate site access, utilities, and permits unless otherwise specified.\r
4. Contractor maintains general liability insurance. Certificates available upon request.\r
5. Disputes shall be resolved through mediation before pursuing litigation.\r
6. This contract is governed by the laws of the State of California.\r
7. Neither party may assign this contract without prior written consent of the other party.\r
8. All work is subject to final inspection and acceptance by the Client before final payment is released.\r
\r
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\r
\r
TO SIGN THIS CONTRACT:\r
Please reply to this email with the following confirmation:\r
\r
  "I AGREE â€“ \${p.client||'[Your Full Name]'} â€“ \${new Date().toLocaleDateString()}"\r
\r
By replying with the above, you confirm your acceptance of all terms and conditions stated in this contract. Your email reply will serve as your digital signature.\r
\r
If you have any questions or require amendments, please don't hesitate to contact us before signing.\r
\r
Reply Email:   \${LIVIO_REPLY_EMAIL}\r
\r
Thank you for choosing Livio Building Systems. We look forward to working with you!\r
\r
Best regards,\r
\${LIVIO_COMPANY_NAME}\r
\${LIVIO_OFFICE_ADDRESS}\r
Licensed General Contractor\`;\r
}\r
\r
function openSendForSigning(id){\r
  const ct=contracts.find(x=>x.id===id);if(!ct)return;\r
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};\r
  signCtId=id;\r
  document.getElementById('sg-to').value=p.clientEmail||'';\r
  document.getElementById('sg-subject').value=\`Construction Contract \${ct.num||''} â€“ \${p.name||''} â€“ Signature Required\`;\r
  document.getElementById('sg-body').value=buildSigningBody(ct,p);\r
  document.getElementById('signModal').classList.add('open');\r
}\r
\r
function sendForSigning(){\r
  const to=document.getElementById('sg-to').value.trim();\r
  const subject=document.getElementById('sg-subject').value.trim();\r
  const message=document.getElementById('sg-body').value.trim();\r
  if(!to){showToast('Please enter a recipient email address.','error');return;}\r
  const btn=document.getElementById('signSendBtn');\r
  btn.innerHTML='<span class="spinner"></span> Sendingâ€¦';btn.disabled=true;\r
  sendEmailThroughBackend(to,subject,message)\r
    .then(()=>{btn.innerHTML='âœ Send for Signing';btn.disabled=false;closeModal('signModal');showToast('âœ… Contract sent for signing!','success');})\r
    .catch(err=>{btn.innerHTML='âœ Send for Signing';btn.disabled=false;showToast('âŒ Failed: '+(err.message||JSON.stringify(err)),'error');});\r
}\r
\r
/* â”€â”€ SEND CONTRACT EMAIL â”€â”€ */\r
function openSendContractEmail(id){\r
  const ct=contracts.find(x=>x.id===id);if(!ct)return;\r
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};\r
  emailCtId=id;\r
  const body=\`Dear \${p.client||'Client'},\r
\r
Please find your contract summary below.\r
\r
Contract #: \${ct.num||'â€”'}\r
Project: \${ct.project||p.name||'â€”'}\r
Project Address: \${getProjectAddress(p)}\r
Livio Address: \${LIVIO_OFFICE_ADDRESS}\r
Contract Value: \${fmtM(ct.amount)}\r
Contract Date: \${fmtD(ct.date)}\r
Completion Date: \${fmtD(ct.end)}\r
Type: \${ct.type||'â€”'}\r
Status: \${(ct.status||'draft').toUpperCase()}\r
\r
\${ct.scope?'Scope of Work:\\n'+ct.scope+'\\n\\n':''}\${ct.terms?'Payment Terms:\\n'+ct.terms+'\\n\\n':''}Please review and contact us with any questions.\r
\r
Reply Email: \${LIVIO_REPLY_EMAIL}\r
\r
Best regards,\r
\${getLivioSignature()}\`;\r
\r
  document.getElementById('em-to').value=p.clientEmail||'';\r
  document.getElementById('em-subject').value='Contract '+(ct.num||'')+'  â€“ '+(p.name||'');\r
  document.getElementById('em-body').value=body;\r
  document.getElementById('emailModal').classList.add('open');\r
}\r
\r
function sendEmailJS(){\r
  const to=document.getElementById('em-to').value.trim();\r
  const subject=document.getElementById('em-subject').value.trim();\r
  const message=document.getElementById('em-body').value.trim();\r
  if(!to){showToast('Please enter a recipient email address.','error');return;}\r
  const btn=document.getElementById('emailSendBtn');\r
  btn.innerHTML='<span class="spinner"></span> Sendingâ€¦';btn.disabled=true;\r
  sendEmailThroughBackend(to,subject,message)\r
    .then(()=>{btn.innerHTML='âœ‰ Send Email';btn.disabled=false;closeModal('emailModal');showToast('âœ… Email sent successfully!','success');})\r
    .catch(err=>{btn.innerHTML='âœ‰ Send Email';btn.disabled=false;showToast('âŒ Failed: '+(err.message||JSON.stringify(err)),'error');});\r
}\r
\r
/* â”€â”€ CONTRACT CRUD â”€â”€ */\r
function openAddContract(){\r
  const p=getProj();if(!p){alert('No active project found.');return;}\r
  document.getElementById('ct-modal-title').textContent='ðŸ“„ Add Contract';\r
  document.getElementById('ct-id').value='';\r
  document.getElementById('ct-project').value=p.name||'';\r
  document.getElementById('ct-project-info').textContent='ðŸ‘¤ '+(p.client||'No client set')+' Â· '+p.name;\r
  document.getElementById('ct-num').value='CC-'+new Date().getFullYear()+'-'+String(contracts.length+1).padStart(3,'0');\r
  document.getElementById('ct-amount').value='';\r
  document.getElementById('ct-date').value=new Date().toISOString().split('T')[0];\r
  document.getElementById('ct-end').value='';\r
  document.getElementById('ct-status').value='draft';\r
  document.getElementById('ct-type').value='Fixed Price';\r
  document.getElementById('ct-scope').value='';\r
  document.getElementById('ct-terms').value='';\r
  document.getElementById('contractModal').classList.add('open');\r
}\r
function openEditContract(id){\r
  const ct=contracts.find(x=>x.id===id);if(!ct)return;\r
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};\r
  document.getElementById('ct-modal-title').textContent='âœ Edit Contract';\r
  document.getElementById('ct-id').value=ct.id;\r
  document.getElementById('ct-project').value=ct.project||p.name||'';\r
  document.getElementById('ct-project-info').textContent='ðŸ‘¤ '+(p.client||'No client set')+' Â· '+(p.name||'');\r
  document.getElementById('ct-num').value=ct.num||'';\r
  document.getElementById('ct-amount').value=ct.amount||'';\r
  document.getElementById('ct-date').value=ct.date||'';\r
  document.getElementById('ct-end').value=ct.end||'';\r
  document.getElementById('ct-status').value=ct.status||'draft';\r
  document.getElementById('ct-type').value=ct.type||'Fixed Price';\r
  document.getElementById('ct-scope').value=ct.scope||'';\r
  document.getElementById('ct-terms').value=ct.terms||'';\r
  document.getElementById('contractModal').classList.add('open');\r
}\r
function saveContract(){\r
  const p=getProj();if(!p){alert('No active project.');return;}\r
  const eid=document.getElementById('ct-id').value;\r
  const data={projectId:curProjectId,project:p.name||'',num:document.getElementById('ct-num').value.trim(),amount:document.getElementById('ct-amount').value,type:document.getElementById('ct-type').value,date:document.getElementById('ct-date').value,end:document.getElementById('ct-end').value,status:document.getElementById('ct-status').value,scope:document.getElementById('ct-scope').value.trim(),terms:document.getElementById('ct-terms').value.trim()};\r
  if(eid&&contracts.find(x=>x.id===eid)){Object.assign(contracts.find(x=>x.id===eid),data);}\r
  else{contracts.push({id:'ctr_'+Date.now(),...data});}\r
  saveContracts();closeModal('contractModal');renderMain();\r
}\r
function deleteContract(id){\r
  if(!confirm('Delete this contract?'))return;\r
  contracts=contracts.filter(c=>c.id!==id);\r
  saveContracts();renderMain();\r
}\r
\r
/* â”€â”€ EDIT CLIENT INFO â”€â”€ */\r
function openEditClientInfo(){\r
  const p=getProj();if(!p)return;\r
  document.getElementById('ec-name').value=p.client||'';\r
  document.getElementById('ec-phone').value=p.clientPhone||'';\r
  document.getElementById('ec-email').value=p.clientEmail||'';\r
  document.getElementById('ec-addr').value=p.clientAddr||'';\r
  document.getElementById('editClientModal').classList.add('open');\r
}\r
function saveClientInfo(){\r
  const db=getLivioProjects();\r
  const p=db.projects.find(x=>x.id===curProjectId);\r
  if(!p){alert('Project not found.');return;}\r
  p.client=document.getElementById('ec-name').value.trim();\r
  p.clientPhone=document.getElementById('ec-phone').value.trim();\r
  p.clientEmail=document.getElementById('ec-email').value.trim();\r
  p.clientAddr=document.getElementById('ec-addr').value.trim();\r
  persistLivioProjects(db);\r
  closeModal('editClientModal');renderMain();showToast('âœ… Client info saved!','success');\r
}\r
function closeModal(id){document.getElementById(id).classList.remove('open');}\r
\r
function syncActiveProject(force=false){\r
  const db=getLivioProjects();\r
  const nextId=db.activeId||(db.projects&&db.projects[0]?.id)||null;\r
  const nextContracts=readContracts();\r
  const nextSig=JSON.stringify(nextContracts);\r
  if(!force && nextId===curProjectId && nextSig===lastContractSig)return;\r
  curProjectId=nextId;\r
  contracts=nextContracts;\r
  lastContractSig=nextSig;\r
  renderMain();\r
}\r
window.syncActiveProject=syncActiveProject;\r
\r
(function init(){syncActiveProject(true);})();\r
setInterval(()=>syncActiveProject(),2000);\r
<\/script>\r
</body>\r
</html>\r
\r
`,xg=`\uFEFF<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8"/>\r
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>\r
<title>Client Invoices – Livio Building Systems</title>\r
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet"/>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"><\/script>\r
<script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"><\/script>\r
<style>\r
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  --navy:#0C1B2E;--navy2:#162438;--navy3:#1E3350;\r
  --blue:#1A6BC4;--blue-l:#E8F2FC;\r
  --green:#2D6A0F;--green-l:#ECF5E3;\r
  --amber:#A86200;--amber-l:#FEF3E2;\r
  --red:#9B1F1F;--red-l:#FDEAEA;\r
  --gray-l:#F4F3EF;\r
  --border:#E0DDD5;--muted:#777672;--text:#1A1917;--bg:#F7F6F2;\r
  --sh:0 1px 8px rgba(0,0,0,.07);--sh2:0 4px 20px rgba(0,0,0,.13);\r
}\r
body{font-family:'Barlow',sans-serif;background:var(--bg);color:var(--text);font-size:14px;min-height:100vh}\r
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:10px}\r
\r
/* TOPBAR */\r
.topbar{background:#fff;border-bottom:1px solid var(--border);padding:0 20px;height:52px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:var(--sh)}\r
.tb-title{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:.3px}\r
.tb-right{display:flex;gap:7px;align-items:center}\r
\r
/* LEDGER STRIP */\r
.ledger-strip{background:var(--navy);padding:16px 20px;display:flex;align-items:center;gap:0;flex-wrap:wrap;position:sticky;top:52px;z-index:90;box-shadow:0 3px 12px rgba(0,0,0,.25)}\r
.ls-stat{flex:1;min-width:140px;padding:0 16px;border-right:1px solid rgba(255,255,255,.12)}\r
.ls-stat:first-child{padding-left:0}\r
.ls-stat:last-of-type{border-right:none}\r
.ls-lbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#8AAAC8;margin-bottom:4px}\r
.ls-val{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:700;color:#fff;line-height:1}\r
.ls-val.green{color:#74E84A}\r
.ls-val.amber{color:#FFB74D}\r
.ls-val.red{color:#FF6B6B}\r
.ls-actions{display:flex;gap:7px;align-items:center;margin-left:auto;flex-wrap:wrap;padding-left:16px}\r
\r
/* MAIN */\r
.main{padding:18px 20px;padding-bottom:60px}\r
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}\r
.sh-title{font-family:'Barlow Condensed',sans-serif;font-size:19px;font-weight:700;letter-spacing:.2px}\r
.sh-sub{font-size:11px;color:var(--muted);margin-top:2px}\r
\r
/* PROJECT INFO PANEL */\r
.proj-panel{background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:var(--sh);margin-bottom:16px;overflow:hidden}\r
.proj-hd{background:var(--navy);padding:11px 16px;display:flex;align-items:center;justify-content:space-between}\r
.proj-hd-title{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff;letter-spacing:.3px}\r
.proj-hd-sub{font-size:11px;color:#8AAAC8;margin-top:1px}\r
.proj-grid{padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px 20px}\r
.dc-item{min-width:0}\r
.dc-item-wide{grid-column:1/-1}\r
.dc-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px}\r
.dc-val{font-size:13px;font-weight:600;color:var(--text);line-height:1.45;overflow-wrap:anywhere}\r
.proj-ft{padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;background:var(--bg)}\r
.proj-status{font-size:11px;font-weight:600;display:flex;align-items:center;gap:6px}\r
.proj-status.ok{color:var(--green)}\r
.proj-status.warn{color:var(--amber)}\r
\r
/* INVOICE CARD */\r
.inv-card{background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:var(--sh);margin-bottom:14px;overflow:hidden}\r
.inv-hd{background:var(--navy);padding:11px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px}\r
.inv-num{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:#fff;letter-spacing:.3px}\r
.inv-hd-right{display:flex;align-items:center;gap:8px}\r
.inv-hd-date{font-size:11px;color:#8AAAC8}\r
\r
/* INFO BOX (2 columns) */\r
.inv-info-grid{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--border)}\r
.inv-info-col{padding:12px 16px}\r
.inv-info-col:first-child{border-right:1px solid var(--border)}\r
.iic-lbl{font-size:9px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:6px;font-weight:700}\r
.iic-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px}\r
.iic-key{font-size:11px;color:var(--muted)}\r
.iic-val{font-size:12px;font-weight:600;color:var(--text)}\r
.iic-name{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--navy);margin-bottom:3px}\r
.iic-detail{font-size:11px;color:var(--muted);line-height:1.5}\r
\r
/* LINE ITEMS TABLE */\r
.li-wrap{padding:0;overflow-x:auto}\r
.li-table{width:100%;border-collapse:collapse;font-size:12px}\r
.li-table thead tr{background:var(--blue)}\r
.li-table thead th{color:#fff;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;padding:8px 14px;text-align:left}\r
.li-table thead th:last-child{text-align:right}\r
.li-table td{padding:9px 14px;border-bottom:1px solid #F0EDE6;vertical-align:middle}\r
.li-table tr:last-child td{border-bottom:none}\r
.li-table tr:nth-child(even){background:#FAFAF8}\r
.li-table td:last-child{text-align:right;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy)}\r
.li-table td:nth-child(2){text-align:center;color:var(--muted)}\r
\r
/* TOTALS */\r
.inv-totals{padding:10px 16px;border-top:1px solid var(--border);display:flex;flex-direction:column;align-items:flex-end;gap:3px;background:var(--bg)}\r
.tot-row{display:flex;gap:24px;font-size:12px}\r
.tot-lbl{color:var(--muted);min-width:90px;text-align:right}\r
.tot-val{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--text);min-width:90px;text-align:right}\r
.tot-row.grand .tot-lbl{font-weight:700;font-size:13px;color:var(--text)}\r
.tot-row.grand .tot-val{color:var(--navy);font-size:16px}\r
.tot-row.paid-row .tot-val{color:var(--green)}\r
.tot-row.balance-row .tot-val{color:var(--amber)}\r
.tot-row.balance-row.overdue .tot-val{color:var(--red)}\r
\r
/* BILLING DETAIL / PAYMENT TERMS */\r
.inv-section{padding:12px 16px;border-top:1px solid var(--border)}\r
.inv-section-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--blue);margin-bottom:6px;padding-bottom:4px;border-bottom:2px solid var(--blue);display:inline-block}\r
.inv-section p{font-size:12px;color:var(--muted);line-height:1.6;white-space:pre-wrap}\r
\r
/* PAYMENT HISTORY */\r
.pay-hist{padding:12px 16px;border-top:1px solid var(--border);background:#FCFBF8}\r
.pay-hist-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);margin-bottom:8px}\r
.pay-table{width:100%;border-collapse:collapse;font-size:11px}\r
.pay-table th{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);padding:5px 10px;border-bottom:1px solid var(--border);text-align:left;background:#F4F3EF}\r
.pay-table td{padding:7px 10px;border-bottom:1px solid #F0EDE6;vertical-align:middle}\r
.pay-table tr:last-child td{border-bottom:none}\r
.pay-table td:nth-child(2){font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--green)}\r
\r
/* THANK YOU FOOTER */\r
.inv-footer{padding:12px 16px;border-top:2px solid var(--blue);background:var(--blue-l);text-align:center}\r
.inv-footer-msg{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--blue);letter-spacing:.3px}\r
.inv-footer-sub{font-size:10px;color:var(--muted);margin-top:3px}\r
\r
/* INVOICE ACTIONS */\r
.inv-actions{padding:10px 16px;border-top:1px solid var(--border);background:#fff;display:flex;gap:7px;flex-wrap:wrap;align-items:center}\r
\r
/* BUTTONS */\r
.btn{display:inline-flex;align-items:center;gap:5px;padding:7px 13px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;font-family:'Barlow',sans-serif;transition:.13s;white-space:nowrap}\r
.btn-navy{background:var(--navy);color:#fff}.btn-navy:hover{background:var(--navy3)}\r
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border)}.btn-ghost:hover{background:var(--gray-l)}\r
.btn-green{background:var(--green-l);color:var(--green);border:1px solid #B8DCA0}.btn-green:hover{background:#DDF2C8}\r
.btn-blue{background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0}.btn-blue:hover{background:#cce0f7}\r
.btn-amber{background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0}.btn-amber:hover{background:#FEEAD0}\r
.btn-red{background:var(--red-l);color:var(--red);border:1px solid #F5C0C0}.btn-red:hover{background:#FBD5D5}\r
.btn-sm{padding:5px 10px;font-size:11px;border-radius:5px}\r
.btn-xs{padding:3px 8px;font-size:10px;border-radius:4px}\r
.btn-white{background:#fff;color:var(--navy);border:1px solid rgba(255,255,255,.3)}.btn-white:hover{background:rgba(255,255,255,.9)}\r
\r
/* BADGE */\r
.badge{display:inline-block;font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.2px;text-transform:uppercase}\r
.b-paid{background:var(--green-l);color:var(--green)}\r
.b-pending{background:var(--amber-l);color:var(--amber)}\r
.b-overdue{background:var(--red-l);color:var(--red)}\r
.b-draft{background:var(--gray-l);color:var(--muted)}\r
\r
/* EMPTY */\r
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;text-align:center}\r
.empty-ic{font-family:'Barlow Condensed',sans-serif;font-size:48px;font-weight:700;color:#D8D5CE;margin-bottom:12px;letter-spacing:2px}\r
.empty p{font-size:13px;color:var(--muted);max-width:300px;line-height:1.6}\r
\r
/* MODALS */\r
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:300;align-items:center;justify-content:center;padding:20px}\r
.modal-overlay.open{display:flex}\r
.modal{background:#fff;border-radius:12px;width:100%;max-width:600px;box-shadow:var(--sh2);overflow:hidden;max-height:94vh;display:flex;flex-direction:column}\r
.modal-hd{padding:15px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\r
.modal-hd h3{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700}\r
.modal-close{background:none;border:1px solid var(--border);border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:14px;color:var(--muted);display:flex;align-items:center;justify-content:center}\r
.modal-body{padding:16px 20px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:11px}\r
.modal-ft{padding:11px 20px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;align-items:center}\r
.fi-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);display:block;margin-bottom:4px}\r
.fi{width:100%;border:1px solid var(--border);border-radius:6px;padding:8px 11px;font-size:13px;font-family:'Barlow',sans-serif;background:#fff;outline:none;transition:border-color .15s;color:var(--text)}\r
.fi:focus{border-color:var(--blue)}\r
.fi-row{display:grid;grid-template-columns:1fr 1fr;gap:11px}\r
.fi-info{background:var(--blue-l);border:1px solid #B0D0F0;border-radius:6px;padding:8px 12px;font-size:12px;color:var(--blue);font-weight:600}\r
.fi-warn{background:var(--amber-l);border:1px solid #F5D9A0;border-radius:6px;padding:10px 12px;font-size:12px;color:var(--amber)}\r
\r
/* LINE ITEMS IN MODAL */\r
.line-tbl{width:100%;border-collapse:collapse;font-size:12px}\r
.line-tbl th{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);padding:5px 6px;border-bottom:1px solid var(--border);text-align:left;background:var(--bg)}\r
.line-tbl td{padding:3px 4px;border-bottom:1px solid #F0EDE6}\r
.line-tbl input{border:1px solid var(--border);border-radius:5px;padding:5px 8px;font-size:12px;font-family:'Barlow',sans-serif;background:#fff;outline:none;width:100%;color:var(--text)}\r
.line-tbl input:focus{border-color:var(--blue)}\r
.line-total{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);padding:5px 8px;white-space:nowrap}\r
.rm-row{background:none;border:none;color:var(--muted);cursor:pointer;font-size:14px;padding:2px 5px}\r
.rm-row:hover{color:var(--red)}\r
\r
/* TOAST */\r
#toast-container{position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px}\r
.toast{padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;color:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2);animation:toastIn .2s ease;max-width:340px}\r
.toast.success{background:#2D6A0F}\r
.toast.error{background:#9B1F1F}\r
.toast.info{background:#1A6BC4}\r
@keyframes toastIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\r
.spinner{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite}\r
@keyframes spin{to{transform:rotate(360deg)}}\r
\r
/* PROOF PREVIEW */\r
.proof-chip{display:inline-flex;align-items:center;gap:5px;background:var(--green-l);color:var(--green);border:1px solid #B8DCA0;border-radius:5px;padding:3px 8px;font-size:10px;font-weight:700;cursor:pointer;text-decoration:none}\r
.proof-chip:hover{background:#DDF2C8}\r
\r
@media print{.topbar,.ledger-strip,.btn,.modal-overlay,.inv-actions,.proj-ft{display:none!important}.main{padding:0!important}}\r
</style>\r
</head>\r
<body>\r
\r
<div class="topbar">\r
  <div class="tb-title">🧾 Client Invoices</div>\r
  <div class="tb-right">\r
    <button class="btn btn-navy btn-sm" onclick="openAddInvoice()">+ Add Invoice</button>\r
  </div>\r
</div>\r
\r
<!-- LEDGER STRIP (rendered dynamically) -->\r
<div id="ledgerStrip" style="display:none"></div>\r
\r
<div class="main" id="mainArea">\r
  <div class="empty"><div class="empty-ic">INV</div><p>Loading project…</p></div>\r
</div>\r
\r
<div id="toast-container"></div>\r
\r
<!-- ---------------------------------- MODALS ---------------------------------- -->\r
\r
<!-- EDIT CLIENT INFO MODAL -->\r
<div class="modal-overlay" id="editClientModal">\r
  <div class="modal" style="max-width:480px">\r
    <div class="modal-hd"><h3>👤 Edit Client Info</h3><button class="modal-close" onclick="closeModal('editClientModal')">✕</button></div>\r
    <div class="modal-body">\r
      <div><label class="fi-lbl">Full Name / Company *</label><input class="fi" type="text" id="ec-name" placeholder="e.g. John Doe / ABC Corp"></div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Phone</label><input class="fi" type="tel" id="ec-phone" placeholder="+1 555 000 1234"></div>\r
        <div><label class="fi-lbl">Email</label><input class="fi" type="email" id="ec-email" placeholder="client@example.com"></div>\r
      </div>\r
      <div><label class="fi-lbl">Address</label><input class="fi" type="text" id="ec-addr" placeholder="123 Main St, City, State"></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('editClientModal')">Cancel</button>\r
      <button class="btn btn-navy" onclick="saveClientInfo()">Save →</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD / EDIT INVOICE MODAL -->\r
<div class="modal-overlay" id="invoiceModal">\r
  <div class="modal" style="max-width:640px">\r
    <div class="modal-hd"><h3 id="inv-modal-title">🧾 New Invoice</h3><button class="modal-close" onclick="closeModal('invoiceModal')">✕</button></div>\r
    <div class="modal-body">\r
      <input type="hidden" id="inv-id">\r
      <div class="fi-info" id="inv-project-info">—</div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Invoice #</label><input class="fi" type="text" id="inv-num" placeholder="INV-2026-001"></div>\r
        <div><label class="fi-lbl">Project</label><input class="fi" type="text" id="inv-project" readonly style="background:var(--bg)"></div>\r
      </div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Invoice Date</label><input class="fi" type="date" id="inv-date"></div>\r
        <div><label class="fi-lbl">Due Date</label><input class="fi" type="date" id="inv-due"></div>\r
      </div>\r
      <div class="fi-row">\r
        <div>\r
          <label class="fi-lbl">Status</label>\r
          <select class="fi" id="inv-status">\r
            <option value="draft">Draft</option>\r
            <option value="pending">Pending</option>\r
            <option value="paid">Paid</option>\r
            <option value="overdue">Overdue</option>\r
          </select>\r
        </div>\r
        <div><label class="fi-lbl">Tax (%)</label><input class="fi" type="number" id="inv-tax" value="0" min="0" max="100" step="0.1" oninput="updateModalTotals()"></div>\r
      </div>\r
      <div>\r
        <label class="fi-lbl">Line Items</label>\r
        <table class="line-tbl" style="margin-bottom:4px">\r
          <thead><tr><th style="width:42%">Description</th><th style="width:10%">Qty</th><th style="width:19%">Unit Price ($)</th><th style="width:17%">Total</th><th style="width:12%"></th></tr></thead>\r
          <tbody id="lineBody"></tbody>\r
        </table>\r
        <button type="button" onclick="addLine()" style="margin-top:4px;background:transparent;border:1.5px dashed var(--border);color:var(--muted);padding:5px 14px;border-radius:6px;font-family:'Barlow',sans-serif;font-size:11px;font-weight:600;cursor:pointer" onmouseover="this.style.borderColor='#1A6BC4';this.style.color='#1A6BC4'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">+ Add Row</button>\r
        <div id="modalTotals" style="margin-top:8px;display:flex;flex-direction:column;align-items:flex-end;gap:3px;font-size:12px"></div>\r
      </div>\r
      <div><label class="fi-lbl">Billing Detail / Notes</label><textarea class="fi" id="inv-notes" rows="2" placeholder="Bank name, account, routing, or any billing notes…"></textarea></div>\r
      <div><label class="fi-lbl">Payment Terms</label><textarea class="fi" id="inv-terms" rows="2" placeholder="e.g. Net 30, due on receipt, 50% upfront…"></textarea></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('invoiceModal')">Cancel</button>\r
      <button class="btn btn-navy" onclick="saveInvoice()">Save Invoice &rarr;</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD PAYMENT MODAL -->\r
<div class="modal-overlay" id="paymentModal">\r
  <div class="modal" style="max-width:480px">\r
    <div class="modal-hd"><h3>💵 Record Payment</h3><button class="modal-close" onclick="closeModal('paymentModal')">✕</button></div>\r
    <div class="modal-body">\r
      <input type="hidden" id="pay-inv-id">\r
      <div class="fi-info" id="pay-inv-info">—</div>\r
      <div class="fi-row">\r
        <div><label class="fi-lbl">Payment Date *</label><input class="fi" type="date" id="pay-date"></div>\r
        <div><label class="fi-lbl">Amount Received ($) *</label><input class="fi" type="number" id="pay-amount" placeholder="0.00" min="0.01" step="0.01"></div>\r
      </div>\r
      <div><label class="fi-lbl">Reference / Note</label><input class="fi" type="text" id="pay-note" placeholder="Check #1234, Wire Ref, Cash, etc."></div>\r
      <div>\r
        <label class="fi-lbl">Payment Proof / Attachment <span style="color:var(--muted);font-weight:400;text-transform:none">(image or PDF)</span></label>\r
        <input type="file" class="fi" id="pay-proof" accept="image/*,.pdf" onchange="handleProofFile(this)">\r
        <div id="pay-proof-preview" style="margin-top:6px"></div>\r
      </div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('paymentModal')">Cancel</button>\r
      <button class="btn btn-green" onclick="savePayment()">💾 Save Payment</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- SEND INVOICE EMAIL MODAL -->\r
<div class="modal-overlay" id="emailModal">\r
  <div class="modal" style="max-width:500px">\r
    <div class="modal-hd"><h3 id="em-modal-title">✉ Send Invoice by Email</h3><button class="modal-close" onclick="closeModal('emailModal')">✕</button></div>\r
    <div class="modal-body">\r
      <input type="hidden" id="em-type">\r
      <input type="hidden" id="em-ref-id">\r
      <div><label class="fi-lbl">Recipient Email</label><input class="fi" type="email" id="em-to" placeholder="client@example.com"></div>\r
      <div><label class="fi-lbl">Subject</label><input class="fi" type="text" id="em-subject"></div>\r
      <div><label class="fi-lbl">Message</label><textarea class="fi" id="em-body" rows="12" style="font-size:11px;font-family:monospace;line-height:1.5"></textarea></div>\r
      <div id="em-status" style="font-size:11px;color:var(--muted)"></div>\r
    </div>\r
    <div class="modal-ft">\r
      <button class="btn btn-ghost" onclick="closeModal('emailModal')">Cancel</button>\r
      <button class="btn btn-navy" id="emailSendBtn" onclick="sendEmailJS()">✉ Send</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ---------------------------------- SCRIPT ---------------------------------- -->\r
<script>\r
const LIVIO_KEY='livio_v1';\r
function getHostApp(){\r
  try{\r
    if(window.parent && window.parent!==window && window.parent.DB && typeof window.parent.saveDB==='function'){\r
      return window.parent;\r
    }\r
  }catch{}\r
  return null;\r
}\r
function readLocalLivioDB(){\r
  try{return JSON.parse(localStorage.getItem(LIVIO_KEY)||'{}')}catch{return{}}\r
}\r
function getLivioDB(){\r
  const host=getHostApp();\r
  return host?.DB || readLocalLivioDB();\r
}\r
function persistLivioDB(db){\r
  const host=getHostApp();\r
  if(host?.DB){\r
    try{\r
      host.saveDB();\r
      return;\r
    }catch(err){\r
      console.error('client invoice shared save failed:',err);\r
    }\r
  }\r
  localStorage.setItem(LIVIO_KEY,JSON.stringify(db));\r
}\r
function readInvoices(){\r
  const projects=(getLivioDB().projects)||[];\r
  const hasProjectInvoices=projects.some(p=>Array.isArray(p.clientInvoices));\r
  if(hasProjectInvoices){\r
    return projects.flatMap(p=>(p.clientInvoices||[]).map(inv=>({\r
      ...inv,\r
      projectId:inv.projectId||p.id,\r
      project:inv.project||p.name||''\r
    })));\r
  }\r
  try{\r
    return JSON.parse(localStorage.getItem('dt_invoices')||'[]');\r
  }catch{\r
    return [];\r
  }\r
}\r
let invoices=readInvoices();\r
let curProjectId=null;\r
let lineItems=[];\r
let editInvId=null;\r
let payProofName='';\r
let payProofData='';\r
let lastInvoiceSig='';\r
\r
/* -- HELPERS ----------------------------------------------- */\r
function getAllProjects(){return getLivioDB().projects||[]}\r
function getProj(){return getAllProjects().find(x=>x.id===curProjectId)||null}\r
function saveInvoices(){\r
  const db=getLivioDB();\r
  const projects=db.projects||[];\r
  if(projects.length){\r
    projects.forEach(p=>{\r
      p.clientInvoices=invoices\r
        .filter(inv=>inv.projectId===p.id)\r
        .map(inv=>({...inv,projectId:p.id,project:inv.project||p.name||''}));\r
    });\r
    persistLivioDB(db);\r
    lastInvoiceSig=JSON.stringify(invoices);\r
    return;\r
  }\r
  localStorage.setItem('dt_invoices',JSON.stringify(invoices));\r
  lastInvoiceSig=JSON.stringify(invoices);\r
}\r
function uid(){return Math.random().toString(36).slice(2,10)}\r
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')\r
const fmtD=s=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—'\r
const fmtM=n=>(n!=null&&n!=='')?'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'$0.00'\r
const LIVIO_COMPANY_NAME='Livio Building Systems'\r
const LIVIO_OFFICE_ADDRESS='121 Main St #563, Los Altos, California (CA) 94022'\r
const LIVIO_REPLY_EMAIL='ap@golivio.com'\r
function getProjectAddress(p){return p?.address||p?.clientAddr||'—'}\r
function getLivioSignature(){return \`\${LIVIO_COMPANY_NAME}\\n\${LIVIO_OFFICE_ADDRESS}\\nReply Email: \${LIVIO_REPLY_EMAIL}\`}\r
function invPaid(inv){return(inv.payments||[]).reduce((s,p)=>s+(parseFloat(p.amount)||0),0)}\r
function invBalance(inv){return(inv.total||0)-invPaid(inv)}\r
function statusBadge(s){const m={paid:'b-paid',pending:'b-pending',overdue:'b-overdue',draft:'b-draft'};return\`<span class="badge \${m[s]||'b-draft'}">\${s}</span>\`}\r
function loadActiveProject(){const db=getLivioDB();curProjectId=db.activeId||(db.projects&&db.projects[0]?.id)||null}\r
\r
/* -- TOAST ------------------------------------------------- */\r
function showToast(msg,type='info',dur=3500){\r
  const c=document.getElementById('toast-container');\r
  const t=document.createElement('div');\r
  t.className='toast '+type;t.textContent=msg;c.appendChild(t);\r
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},dur);\r
}\r
\r
/* -- EMAIL DELIVERY ---------------------------------------- */\r
function getEmailConfig(){return {}}\r
function getEmailApiBase(){\r
  const host=getHostApp();\r
  try{\r
    const hostApi=(host&&typeof host.getApiBase==='function')?host.getApiBase():(host&&host.__LIVIO_API_BASE)||'';\r
    if(hostApi) return String(hostApi).replace(/\\/+$/,'');\r
  }catch{}\r
  const isLocal=location.hostname==='127.0.0.1'||location.hostname==='localhost';\r
  const fallback=isLocal
    ? 'http://127.0.0.1:3001/api'
    : 'https://pms.golivio.com/api';
  return fallback.replace(/\\/+$/,'');
}
function getEmailStatusHtml(){\r
  const apiBase=getEmailApiBase();\r
  return \`<span style="color:var(--green)">✓ Using backend email service</span><br><span style="font-size:10px;color:var(--muted)">API: \${apiBase}</span>\`;\r
}\r
function renderEmailSendStatus(){\r
  const el=document.getElementById('em-status');\r
  if(el)el.innerHTML=getEmailStatusHtml();\r
}\r
async function sendEmailThroughBackend(to,subject,message,attachments){\r
  const payload={\r
    to,\r
    subject,\r
    message,\r
    fromName:'Livio Building Systems',\r
    replyTo:LIVIO_REPLY_EMAIL\r
  };\r
  if(Array.isArray(attachments)&&attachments.length) payload.attachments=attachments;\r
  const res=await fetch(getEmailApiBase()+'/email/send',{\r
    method:'POST',\r
    headers:{'Content-Type':'application/json'},\r
    body:JSON.stringify(payload)\r
  });\r
  const data=await res.json().catch(()=>({}));\r
  if(!res.ok) throw new Error(data.error||data.message||('Email send failed ('+res.status+')'));\r
  return data;\r
}\r
/* -- MODAL HELPERS ----------------------------------------- */\r
function closeModal(id){document.getElementById(id).classList.remove('open')}\r
\r
/* -- RENDER LEDGER STRIP ----------------------------------- */\r
function renderLedgerStrip(invs){\r
  const strip=document.getElementById('ledgerStrip');\r
  const totalInvoiced=invs.reduce((s,x)=>s+(x.total||0),0);\r
  const totalReceived=invs.reduce((s,x)=>s+invPaid(x),0);\r
  const balanceDue=totalInvoiced-totalReceived;\r
  strip.style.display='flex';\r
  strip.className='ledger-strip';\r
  strip.innerHTML=\`\r
    <div class="ls-stat">\r
      <div class="ls-lbl">Total Invoiced</div>\r
      <div class="ls-val">\${fmtM(totalInvoiced)}</div>\r
    </div>\r
    <div class="ls-stat">\r
      <div class="ls-lbl">Total Received</div>\r
      <div class="ls-val green">\${fmtM(totalReceived)}</div>\r
    </div>\r
    <div class="ls-stat">\r
      <div class="ls-lbl">Balance Due</div>\r
      <div class="ls-val \${balanceDue>0.001?'amber':''}">\${fmtM(balanceDue)}</div>\r
    </div>\r
    <div class="ls-actions">\r
      <button class="btn btn-white btn-sm" onclick="downloadLedgerPDF()">⬇ PDF Ledger</button>\r
      <button class="btn btn-white btn-sm" onclick="downloadLedgerExcel()">📊 Excel Ledger</button>\r
      <button class="btn btn-white btn-sm" onclick="openSendLedgerEmail()">✉ Send Ledger</button>\r
    </div>\`;\r
}\r
\r
/* -- MAIN RENDER ------------------------------------------- */\r
function renderMain(){\r
  const main=document.getElementById('mainArea');\r
  const p=getProj();\r
  if(!p){\r
    document.getElementById('ledgerStrip').style.display='none';\r
    main.innerHTML=\`<div class="empty"><div class="empty-ic">INV</div><p>No active project found.<br>Select a project in Livio first.</p></div>\`;\r
    return;\r
  }\r
  const invs=invoices.filter(x=>x.projectId===p.id);\r
  renderLedgerStrip(invs);\r
\r
  let cardsHtml='';\r
  if(!invs.length){\r
    cardsHtml=\`<div class="empty"><div class="empty-ic">INV</div><p>No invoices yet for this project.<br>Click <strong>+ Add Invoice</strong> to get started.</p></div>\`;\r
  } else {\r
    invs.slice().reverse().forEach(inv=>{cardsHtml+=renderInvoiceCard(inv,p);});\r
  }\r
\r
  main.innerHTML=\`\r
  <div class="sh">\r
    <div>\r
      <div class="sh-title">Client Invoices</div>\r
      <div class="sh-sub">Billing history · Partial payments · Payment tracking</div>\r
    </div>\r
    <button class="btn btn-navy" onclick="openAddInvoice()">+ Add Invoice</button>\r
  </div>\r
\r
  <div class="proj-panel">\r
    <div class="proj-hd">\r
      <div>\r
        <div class="proj-hd-title">📁 \${esc(p.name)}</div>\r
        <div class="proj-hd-sub">\${esc(p.address||p.city||'')}</div>\r
      </div>\r
      <span style="background:rgba(255,255,255,.12);color:#8AAAC8;font-size:10px;padding:3px 10px;border-radius:4px;font-weight:700">\${invs.length} INVOICE\${invs.length!==1?'S':''}</span>\r
    </div>\r
    <div class="proj-grid">\r
      <div class="dc-item dc-item-wide"><div class="dc-lbl">Client / Owner</div><div class="dc-val">\${esc(p.client||'—')}</div></div>\r
      \${p.clientEmail?\`<div class="dc-item"><div class="dc-lbl">Email</div><div class="dc-val" style="font-size:11px">\${esc(p.clientEmail)}</div></div>\`:''}\r
      \${p.clientPhone?\`<div class="dc-item"><div class="dc-lbl">Phone</div><div class="dc-val" style="font-size:12px">\${esc(p.clientPhone)}</div></div>\`:''}\r
      \${p.clientAddr?\`<div class="dc-item dc-item-wide"><div class="dc-lbl">Address</div><div class="dc-val" style="font-size:12px">\${esc(p.clientAddr)}</div></div>\`:''}\r
    </div>\r
    <div class="proj-ft">\r
      \${!p.client?\`<span class="proj-status warn">&#9888; No client info. Add it below.</span>\`:\`<span class="proj-status ok">&#10003; Client details ready for invoices</span>\`}\r
      <button class="btn btn-ghost btn-sm" onclick="openEditClientInfo()">&#9998; Edit Client Info</button>\r
    </div>\r
  </div>\r
\r
  \${cardsHtml}\`;\r
}\r
\r
/* -- RENDER INVOICE CARD ----------------------------------- */\r
function renderInvoiceCard(inv,p){\r
  const paid=invPaid(inv);\r
  const balance=invBalance(inv);\r
  const pays=inv.payments||[];\r
  const tax=(inv.subtotal||0)*(inv.tax||0)/100;\r
\r
  // Payment history rows\r
  let payRows='';\r
  pays.forEach(pay=>{\r
    const proofHtml=pay.proofName\r
      ?\`<a class="proof-chip" href="#" onclick="viewProof('\${esc(inv.id)}','\${esc(pay.id)}');return false">📎 \${esc(pay.proofName)}</a>\`\r
      :\`<span style="color:var(--muted);font-size:10px">—</span>\`;\r
    payRows+=\`<tr>\r
      <td>\${fmtD(pay.date)}</td>\r
      <td>\${fmtM(pay.amount)}</td>\r
      <td style="color:var(--muted)">\${esc(pay.note||'—')}</td>\r
      <td>\${proofHtml}</td>\r
      <td><button class="btn btn-xs btn-red" onclick="deletePayment('\${esc(inv.id)}','\${esc(pay.id)}')">🗑</button></td>\r
    </tr>\`;\r
  });\r
\r
  const paySection=pays.length?\`\r
  <div class="pay-hist">\r
    <div class="pay-hist-title">💵 Payment History (\${pays.length} record\${pays.length!==1?'s':''})</div>\r
    <table class="pay-table">\r
      <thead><tr><th>Date</th><th>Amount</th><th>Reference</th><th>Proof</th><th></th></tr></thead>\r
      <tbody>\${payRows}</tbody>\r
    </table>\r
  </div>\`:'';\r
\r
  const notesSection=inv.notes?\`<div class="inv-section"><div class="inv-section-title">Billing Detail</div><p>\${esc(inv.notes)}</p></div>\`:'';\r
  const termsSection=inv.paymentTerms?\`<div class="inv-section"><div class="inv-section-title">Payment Terms</div><p>\${esc(inv.paymentTerms)}</p></div>\`:'';\r
\r
  return \`\r
  <div class="inv-card" id="card-\${inv.id}">\r
    <div class="inv-hd">\r
      <div style="display:flex;align-items:center;gap:10px">\r
        <div class="inv-num">\${esc(inv.num)}</div>\r
        \${statusBadge(inv.status)}\r
      </div>\r
      <div class="inv-hd-right">\r
        <span class="inv-hd-date">Issued \${fmtD(inv.date)} · Due \${fmtD(inv.due)}</span>\r
      </div>\r
    </div>\r
\r
    <div class="inv-info-grid">\r
      <div class="inv-info-col">\r
        <div class="iic-lbl">Invoice Details</div>\r
        <div class="iic-row"><span class="iic-key">Invoice #</span><span class="iic-val">\${esc(inv.num)}</span></div>\r
        <div class="iic-row"><span class="iic-key">Date</span><span class="iic-val">\${fmtD(inv.date)}</span></div>\r
        <div class="iic-row"><span class="iic-key">Due Date</span><span class="iic-val">\${fmtD(inv.due)}</span></div>\r
        <div class="iic-row"><span class="iic-key">Project</span><span class="iic-val" style="font-size:11px">\${esc(inv.project||p?.name||'')}</span></div>\r
      </div>\r
      <div class="inv-info-col">\r
        <div class="iic-lbl">Bill To</div>\r
        <div class="iic-name">\${esc(p?.client||'—')}</div>\r
        <div class="iic-detail">\${esc(p?.clientAddr||'')}\${p?.clientPhone?'\\n'+p.clientPhone:''}\${p?.clientEmail?'\\n'+p.clientEmail:''}</div>\r
      </div>\r
    </div>\r
\r
    <div class="li-wrap">\r
      <table class="li-table">\r
        <thead><tr><th>Description</th><th style="text-align:center">Qty</th><th style="text-align:right">Unit Price</th><th style="text-align:right">Amount</th></tr></thead>\r
        <tbody>\r
          \${(inv.lines||[]).map(l=>\`<tr>\r
            <td>\${esc(l.desc)}</td>\r
            <td style="text-align:center;color:var(--muted)">\${l.qty}</td>\r
            <td style="text-align:right;color:var(--muted)">\${fmtM(l.price)}</td>\r
            <td>\${fmtM((l.qty||1)*(l.price||0))}</td>\r
          </tr>\`).join('')}\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="inv-totals">\r
      <div class="tot-row"><span class="tot-lbl">Subtotal</span><span class="tot-val">\${fmtM(inv.subtotal)}</span></div>\r
      \${inv.tax?\`<div class="tot-row"><span class="tot-lbl">Tax (\${inv.tax}%)</span><span class="tot-val">\${fmtM(tax)}</span></div>\`:''}\r
      <div class="tot-row grand"><span class="tot-lbl">Total</span><span class="tot-val">\${fmtM(inv.total)}</span></div>\r
      \${pays.length?\`<div class="tot-row paid-row"><span class="tot-lbl">Amount Paid</span><span class="tot-val">\${fmtM(paid)}</span></div>\`:''}\r
      \${pays.length?\`<div class="tot-row balance-row\${balance>0.001?' overdue':''}"><span class="tot-lbl" style="font-weight:700;color:var(--text)">Balance Due</span><span class="tot-val" style="font-size:16px">\${fmtM(balance)}</span></div>\`:''}\r
    </div>\r
\r
    \${notesSection}\r
    \${termsSection}\r
    \${paySection}\r
\r
    <div class="inv-footer">\r
      <div class="inv-footer-msg">Thank you for your business!</div>\r
      <div class="inv-footer-sub">Livio Building Systems · Licensed Contractor</div>\r
    </div>\r
\r
    <div class="inv-actions">\r
      <button class="btn btn-blue btn-sm" onclick="generateInvoicePDF('\${inv.id}')">&#128196; PDF</button>\r
      <button class="btn btn-green btn-sm" onclick="openSendInvoiceEmail('\${inv.id}')">✉ Send Email</button>\r
      <button class="btn btn-amber btn-sm" onclick="openAddPayment('\${inv.id}')">💰 Add Payment</button>\r
      <button class="btn btn-ghost btn-sm" onclick="openEditInvoice('\${inv.id}')">&#9998; Edit</button>\r
      <button class="btn btn-red btn-sm" style="margin-left:auto" onclick="deleteInvoice('\${inv.id}')">🗑 Delete</button>\r
    </div>\r
  </div>\`;\r
}\r
\r
/* -- INVOICE MODAL ----------------------------------------- */\r
function openAddInvoice(){\r
  editInvId=null;\r
  lineItems=[{desc:'',qty:1,price:0}];\r
  document.getElementById('inv-modal-title').textContent='🧾 New Invoice';\r
  document.getElementById('inv-id').value='';\r
  const p=getProj();\r
  const today=new Date().toISOString().slice(0,10);\r
  const due=new Date(Date.now()+30*864e5).toISOString().slice(0,10);\r
  // Generate next invoice number\r
  const invs=invoices.filter(x=>x.projectId===curProjectId);\r
  const nextN=(invs.length+1).toString().padStart(3,'0');\r
  document.getElementById('inv-num').value=\`INV-\${new Date().getFullYear()}-\${nextN}\`;\r
  document.getElementById('inv-project').value=p?.name||'';\r
  document.getElementById('inv-project-info').textContent=p?\`Project: \${p.name} · Client: \${p.client||'(no client)'}\` : 'No active project';\r
  document.getElementById('inv-date').value=today;\r
  document.getElementById('inv-due').value=due;\r
  document.getElementById('inv-status').value='pending';\r
  document.getElementById('inv-tax').value='0';\r
  document.getElementById('inv-notes').value='';\r
  document.getElementById('inv-terms').value='';\r
  renderLineItems();\r
  document.getElementById('invoiceModal').classList.add('open');\r
}\r
\r
function openEditInvoice(id){\r
  const inv=invoices.find(x=>x.id===id);\r
  if(!inv)return;\r
  editInvId=id;\r
  lineItems=(inv.lines||[]).map(l=>({...l}));\r
  if(!lineItems.length)lineItems=[{desc:'',qty:1,price:0}];\r
  document.getElementById('inv-modal-title').textContent='? Edit Invoice';\r
  document.getElementById('inv-id').value=inv.id;\r
  const p=getProj();\r
  document.getElementById('inv-num').value=inv.num||'';\r
  document.getElementById('inv-project').value=inv.project||p?.name||'';\r
  document.getElementById('inv-project-info').textContent=p?\`Project: \${p.name} · Client: \${p.client||'(no client)'}\` : '';\r
  document.getElementById('inv-date').value=inv.date||'';\r
  document.getElementById('inv-due').value=inv.due||'';\r
  document.getElementById('inv-status').value=inv.status||'draft';\r
  document.getElementById('inv-tax').value=inv.tax||0;\r
  document.getElementById('inv-notes').value=inv.notes||'';\r
  document.getElementById('inv-terms').value=inv.paymentTerms||'';\r
  renderLineItems();\r
  document.getElementById('invoiceModal').classList.add('open');\r
}\r
\r
function addLine(){lineItems.push({desc:'',qty:1,price:0});renderLineItems()}\r
function removeLine(i){lineItems.splice(i,1);if(!lineItems.length)lineItems=[{desc:'',qty:1,price:0}];renderLineItems()}\r
function renderLineItems(){\r
  const tb=document.getElementById('lineBody');\r
  tb.innerHTML=lineItems.map((l,i)=>\`<tr>\r
    <td><input value="\${esc(l.desc)}" placeholder="Description" oninput="lineItems[\${i}].desc=this.value"></td>\r
    <td><input type="number" value="\${l.qty||1}" min="1" style="width:60px" oninput="lineItems[\${i}].qty=parseFloat(this.value)||1;updateModalTotals()"></td>\r
    <td><input type="number" value="\${l.price||0}" min="0" step="0.01" oninput="lineItems[\${i}].price=parseFloat(this.value)||0;updateModalTotals()"></td>\r
    <td class="line-total">\${fmtM((l.qty||1)*(l.price||0))}</td>\r
    <td><button type="button" class="rm-row" onclick="removeLine(\${i})">✕</button></td>\r
  </tr>\`).join('');\r
  updateModalTotals();\r
}\r
function updateModalTotals(){\r
  // Update line totals in DOM\r
  const rows=document.getElementById('lineBody').rows;\r
  let sub=0;\r
  lineItems.forEach((l,i)=>{\r
    const t=(l.qty||1)*(l.price||0);\r
    if(rows[i])rows[i].cells[3].textContent=fmtM(t);\r
    sub+=t;\r
  });\r
  const tax=parseFloat(document.getElementById('inv-tax').value)||0;\r
  const taxAmt=sub*tax/100;\r
  const total=sub+taxAmt;\r
  const el=document.getElementById('modalTotals');\r
  el.innerHTML=\`\r
    <div style="display:flex;gap:20px;font-size:12px"><span style="color:var(--muted)">Subtotal:</span><strong>\${fmtM(sub)}</strong></div>\r
    \${tax?\`<div style="display:flex;gap:20px;font-size:12px"><span style="color:var(--muted)">Tax (\${tax}%):</span><strong>\${fmtM(taxAmt)}</strong></div>\`:''}\r
    <div style="display:flex;gap:20px;font-size:13px;margin-top:4px"><span style="font-weight:700">Total:</span><strong style="color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:16px">\${fmtM(total)}</strong></div>\`;\r
}\r
\r
function saveInvoice(){\r
  const p=getProj();\r
  if(!p){showToast('No active project.','error');return;}\r
  const num=document.getElementById('inv-num').value.trim();\r
  if(!num){showToast('Invoice # is required.','error');return;}\r
  // Validate line items\r
  if(!lineItems.length||!lineItems.some(l=>l.desc.trim())){showToast('Add at least one line item with a description.','error');return;}\r
  const sub=lineItems.reduce((s,l)=>s+(l.qty||1)*(l.price||0),0);\r
  const tax=parseFloat(document.getElementById('inv-tax').value)||0;\r
  const taxAmt=sub*tax/100;\r
  const total=sub+taxAmt;\r
  const data={\r
    id:editInvId||('inv_'+uid()),\r
    projectId:p.id,\r
    num,\r
    project:p.name,\r
    date:document.getElementById('inv-date').value,\r
    due:document.getElementById('inv-due').value,\r
    status:document.getElementById('inv-status').value,\r
    tax,\r
    lines:lineItems.map(l=>({desc:l.desc,qty:l.qty||1,price:l.price||0})),\r
    subtotal:sub,\r
    total,\r
    notes:document.getElementById('inv-notes').value.trim(),\r
    paymentTerms:document.getElementById('inv-terms').value.trim(),\r
    payments:[]\r
  };\r
  if(editInvId){\r
    const idx=invoices.findIndex(x=>x.id===editInvId);\r
    if(idx>=0){data.payments=invoices[idx].payments||[];invoices[idx]=data;}\r
    showToast('? Invoice updated.','success');\r
  } else {\r
    invoices.push(data);\r
    showToast('? Invoice created!','success');\r
  }\r
  saveInvoices();\r
  closeModal('invoiceModal');\r
  renderMain();\r
}\r
\r
function deleteInvoice(id){\r
  if(!confirm('Delete this invoice and all its payment records?'))return;\r
  invoices=invoices.filter(x=>x.id!==id);\r
  saveInvoices();\r
  showToast('Invoice deleted.','info');\r
  renderMain();\r
}\r
\r
/* -- PAYMENT MODAL ----------------------------------------- */\r
function openAddPayment(invId){\r
  const inv=invoices.find(x=>x.id===invId);\r
  if(!inv)return;\r
  payProofName='';payProofData='';\r
  document.getElementById('pay-inv-id').value=invId;\r
  document.getElementById('pay-inv-info').textContent=\`\${inv.num} · Total: \${fmtM(inv.total)} · Paid: \${fmtM(invPaid(inv))} · Balance: \${fmtM(invBalance(inv))}\`;\r
  document.getElementById('pay-date').value=new Date().toISOString().slice(0,10);\r
  document.getElementById('pay-amount').value='';\r
  document.getElementById('pay-note').value='';\r
  document.getElementById('pay-proof').value='';\r
  document.getElementById('pay-proof-preview').innerHTML='';\r
  document.getElementById('paymentModal').classList.add('open');\r
}\r
\r
function handleProofFile(input){\r
  payProofName='';payProofData='';\r
  document.getElementById('pay-proof-preview').innerHTML='';\r
  const file=input.files[0];\r
  if(!file)return;\r
  if(file.size>5*1024*1024){showToast('File too large (max 5 MB).','error');input.value='';return;}\r
  payProofName=file.name;\r
  const reader=new FileReader();\r
  reader.onload=e=>{\r
    payProofData=e.target.result;\r
    document.getElementById('pay-proof-preview').innerHTML=\`<span style="font-size:11px;color:var(--green);font-weight:600">? \${esc(file.name)} (\${(file.size/1024).toFixed(1)} KB)</span>\`;\r
  };\r
  reader.readAsDataURL(file);\r
}\r
\r
function savePayment(){\r
  const invId=document.getElementById('pay-inv-id').value;\r
  const date=document.getElementById('pay-date').value;\r
  const amount=parseFloat(document.getElementById('pay-amount').value);\r
  const note=document.getElementById('pay-note').value.trim();\r
  if(!date){showToast('Payment date is required.','error');return;}\r
  if(!amount||amount<=0){showToast('Enter a valid payment amount.','error');return;}\r
  const idx=invoices.findIndex(x=>x.id===invId);\r
  if(idx<0){showToast('Invoice not found.','error');return;}\r
  if(!invoices[idx].payments)invoices[idx].payments=[];\r
  const pay={id:'pay_'+uid(),date,amount,note,proofName:payProofName,proofData:payProofData};\r
  invoices[idx].payments.push(pay);\r
  // Auto-update status if fully paid\r
  const paid=invPaid(invoices[idx]);\r
  if(paid>=invoices[idx].total-0.01&&invoices[idx].status!=='paid'){\r
    invoices[idx].status='paid';\r
    showToast('? Payment recorded. Invoice marked as PAID!','success',4500);\r
  } else {\r
    showToast('? Payment of '+fmtM(amount)+' recorded!','success');\r
  }\r
  saveInvoices();\r
  closeModal('paymentModal');\r
  renderMain();\r
}\r
\r
function deletePayment(invId,payId){\r
  if(!confirm('Delete this payment record?'))return;\r
  const idx=invoices.findIndex(x=>x.id===invId);\r
  if(idx<0)return;\r
  invoices[idx].payments=(invoices[idx].payments||[]).filter(p=>p.id!==payId);\r
  saveInvoices();\r
  showToast('Payment record deleted.','info');\r
  renderMain();\r
}\r
\r
function viewProof(invId,payId){\r
  const inv=invoices.find(x=>x.id===invId);\r
  if(!inv)return;\r
  const pay=(inv.payments||[]).find(p=>p.id===payId);\r
  if(!pay||!pay.proofData){showToast('No proof file attached.','error');return;}\r
  const win=window.open();\r
  win.document.write(\`<html><head><title>\${pay.proofName||'Proof'}</title></head><body style="margin:0;background:#222;display:flex;justify-content:center">\r
    \${pay.proofData.startsWith('data:image')?\`<img src="\${pay.proofData}" style="max-width:100%;height:auto">\`:\`<iframe src="\${pay.proofData}" style="width:100vw;height:100vh;border:none"></iframe>\`}\r
  </body></html>\`);\r
}\r
\r
/* -- EDIT CLIENT INFO -------------------------------------- */\r
function openEditClientInfo(){\r
  const p=getProj();\r
  if(!p)return;\r
  document.getElementById('ec-name').value=p.client||'';\r
  document.getElementById('ec-phone').value=p.clientPhone||'';\r
  document.getElementById('ec-email').value=p.clientEmail||'';\r
  document.getElementById('ec-addr').value=p.clientAddr||'';\r
  document.getElementById('editClientModal').classList.add('open');\r
}\r
function saveClientInfo(){\r
  const name=document.getElementById('ec-name').value.trim();\r
  if(!name){showToast('Client name is required.','error');return;}\r
  const db=getLivioDB();\r
  const idx=(db.projects||[]).findIndex(x=>x.id===curProjectId);\r
  if(idx<0){showToast('Project not found.','error');return;}\r
  db.projects[idx].client=name;\r
  db.projects[idx].clientPhone=document.getElementById('ec-phone').value.trim();\r
  db.projects[idx].clientEmail=document.getElementById('ec-email').value.trim();\r
  db.projects[idx].clientAddr=document.getElementById('ec-addr').value.trim();\r
  localStorage.setItem(LIVIO_KEY,JSON.stringify(db));\r
  closeModal('editClientModal');\r
  showToast('? Client info saved!','success');\r
  renderMain();\r
}\r
\r
/* -- GENERATE INVOICE PDF ---------------------------------- */\r
function buildInvoicePDFDoc(invId){\r
  const inv=invoices.find(x=>x.id===invId);\r
  if(!inv) throw new Error('Invoice not found.');\r
  const p=getProj();\r
  if(!window.jspdf) throw new Error('PDF library not loaded yet. Try again.');\r
  const {jsPDF}=window.jspdf;\r
  const doc=new jsPDF({unit:'pt',format:'letter'});\r
  const W=doc.internal.pageSize.getWidth();\r
  const H=doc.internal.pageSize.getHeight();\r
  const ML=40,MR=40;\r
  const CW=W-ML-MR;\r
\r
  // -- Blue header bar\r
  doc.setFillColor(26,107,196);\r
  doc.rect(0,0,W,72,'F');\r
\r
  // Company name\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(20);\r
  doc.setTextColor(255,255,255);\r
  doc.text('LIVIO BUILDING SYSTEMS',ML,36);\r
\r
  // Company tagline / address\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(8);\r
  doc.setTextColor(200,225,255);\r
  doc.text(\`Licensed General Contractor  ·  \${LIVIO_OFFICE_ADDRESS}\`,ML,52);\r
\r
  // "INVOICE" right-aligned\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(26);\r
  doc.setTextColor(255,255,255);\r
  doc.text('INVOICE',W-MR,46,{align:'right'});\r
\r
  let y=90;\r
\r
  // -- Two-column info box\r
  const boxH=88;\r
  const boxMid=ML+CW/2;\r
  doc.setDrawColor(210,210,210);\r
  doc.setLineWidth(0.5);\r
  doc.rect(ML,y,CW,boxH,'S');\r
  doc.line(boxMid,y,boxMid,y+boxH);\r
\r
  // Left column: Invoice details\r
  const lx=ML+12;\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(8);\r
  doc.setTextColor(130,130,130);\r
  doc.text('INVOICE #',lx,y+18);\r
  doc.text('ISSUE DATE',lx,y+36);\r
  doc.text('DUE DATE',lx,y+54);\r
  doc.text('STATUS',lx,y+72);\r
\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(9.5);\r
  doc.setTextColor(25,25,25);\r
  const valX=boxMid-16;\r
  doc.text(inv.num||'—',valX,y+18,{align:'right'});\r
  doc.text(fmtD(inv.date),valX,y+36,{align:'right'});\r
  doc.text(fmtD(inv.due),valX,y+54,{align:'right'});\r
  doc.setFont('helvetica','bold');\r
  doc.text((inv.status||'pending').toUpperCase(),valX,y+72,{align:'right'});\r
\r
  // Right column: Bill To\r
  const rx=boxMid+12;\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(8);\r
  doc.setTextColor(130,130,130);\r
  doc.text('BILL TO',rx,y+18);\r
\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(11);\r
  doc.setTextColor(12,27,46);\r
  doc.text(p?.client||'Client Name',rx,y+33);\r
\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(8.5);\r
  doc.setTextColor(80,80,80);\r
  let billY=y+46;\r
  if(p?.clientAddr){doc.text(p.clientAddr,rx,billY);billY+=13;}\r
  if(p?.clientPhone){doc.text(p.clientPhone,rx,billY);billY+=13;}\r
  if(p?.clientEmail){doc.text(p.clientEmail,rx,billY);}\r
\r
  y+=boxH+16;\r
\r
  // -- Line items table\r
  const heads=[['Description','Qty','Unit Price','Amount']];\r
  const rows=(inv.lines||[]).map(l=>[\r
    l.desc||'',\r
    String(l.qty||1),\r
    fmtM(l.price),\r
    fmtM((l.qty||1)*(l.price||0))\r
  ]);\r
\r
  doc.autoTable({\r
    startY:y,\r
    head:heads,\r
    body:rows,\r
    margin:{left:ML,right:MR},\r
    headStyles:{fillColor:[26,107,196],textColor:[255,255,255],fontStyle:'bold',fontSize:9,cellPadding:8},\r
    bodyStyles:{fontSize:9,textColor:[40,40,40],cellPadding:7},\r
    columnStyles:{\r
      0:{cellWidth:'auto'},\r
      1:{cellWidth:50,halign:'center'},\r
      2:{cellWidth:80,halign:'right'},\r
      3:{cellWidth:80,halign:'right',fontStyle:'bold'}\r
    },\r
    alternateRowStyles:{fillColor:[248,247,244]},\r
    tableLineColor:[220,217,213],tableLineWidth:0.3\r
  });\r
\r
  y=doc.lastAutoTable.finalY+8;\r
\r
  // -- Totals\r
  const rightEdge=W-MR;\r
  const lblStart=W-MR-160;\r
\r
  function totRow(lbl,val,bold,color){\r
    doc.setFont('helvetica',bold?'bold':'normal');\r
    doc.setFontSize(bold?10:9);\r
    doc.setTextColor(...(color||[100,100,100]));\r
    doc.text(lbl,lblStart,y);\r
    doc.setTextColor(...(color||[40,40,40]));\r
    doc.text(val,rightEdge,y,{align:'right'});\r
    y+=bold?18:14;\r
  }\r
\r
  y+=6;\r
  totRow('Subtotal:',fmtM(inv.subtotal));\r
  if(inv.tax){totRow(\`Tax (\${inv.tax}%):\`,fmtM((inv.subtotal||0)*(inv.tax||0)/100));}\r
\r
  // Total divider line\r
  doc.setDrawColor(26,107,196);\r
  doc.setLineWidth(1);\r
  doc.line(lblStart,y,rightEdge,y);\r
  y+=8;\r
  totRow('TOTAL:',fmtM(inv.total),true,[26,107,196]);\r
\r
  // Payment summary\r
  const pays=inv.payments||[];\r
  if(pays.length){\r
    const totalPaid=pays.reduce((s,p)=>s+(parseFloat(p.amount)||0),0);\r
    const bal=(inv.total||0)-totalPaid;\r
    totRow('Amount Paid:',fmtM(totalPaid),false,[45,106,15]);\r
    doc.setDrawColor(200,200,200);\r
    doc.setLineWidth(0.5);\r
    doc.line(lblStart,y,rightEdge,y);\r
    y+=8;\r
    totRow('BALANCE DUE:',fmtM(bal),true,bal>0.01?[168,98,0]:[45,106,15]);\r
  }\r
\r
  y+=10;\r
\r
  // -- Billing Detail\r
  if(inv.notes){\r
    doc.setFont('helvetica','bold');\r
    doc.setFontSize(10);\r
    doc.setTextColor(26,107,196);\r
    doc.text('Billing Detail',ML,y);\r
    doc.setDrawColor(26,107,196);\r
    doc.setLineWidth(1.2);\r
    doc.line(ML,y+4,W-MR,y+4);\r
    y+=18;\r
    doc.setFont('helvetica','normal');\r
    doc.setFontSize(8.5);\r
    doc.setTextColor(70,70,70);\r
    const noteLines=doc.splitTextToSize(inv.notes,CW);\r
    doc.text(noteLines,ML,y);\r
    y+=noteLines.length*13+12;\r
  }\r
\r
  // -- Payment Terms\r
  if(inv.paymentTerms){\r
    doc.setFont('helvetica','bold');\r
    doc.setFontSize(10);\r
    doc.setTextColor(26,107,196);\r
    doc.text('Payment Terms',ML,y);\r
    doc.setDrawColor(26,107,196);\r
    doc.setLineWidth(1.2);\r
    doc.line(ML,y+4,W-MR,y+4);\r
    y+=18;\r
    doc.setFont('helvetica','normal');\r
    doc.setFontSize(8.5);\r
    doc.setTextColor(70,70,70);\r
    const ptLines=doc.splitTextToSize(inv.paymentTerms,CW);\r
    doc.text(ptLines,ML,y);\r
    y+=ptLines.length*13+12;\r
  }\r
\r
  // -- Payment History (if any)\r
  if(pays.length){\r
    doc.setFont('helvetica','bold');\r
    doc.setFontSize(10);\r
    doc.setTextColor(26,107,196);\r
    doc.text('Payment History',ML,y);\r
    doc.setDrawColor(26,107,196);\r
    doc.setLineWidth(1.2);\r
    doc.line(ML,y+4,W-MR,y+4);\r
    y+=6;\r
    doc.autoTable({\r
      startY:y,\r
      head:[['Date','Amount','Reference / Note']],\r
      body:pays.map(pay=>[fmtD(pay.date),fmtM(pay.amount),pay.note||'—']),\r
      margin:{left:ML,right:MR},\r
      headStyles:{fillColor:[45,106,15],textColor:[255,255,255],fontSize:8,cellPadding:6},\r
      bodyStyles:{fontSize:8,textColor:[50,50,50],cellPadding:6},\r
      columnStyles:{1:{halign:'right',fontStyle:'bold'}},\r
      alternateRowStyles:{fillColor:[242,248,238]}\r
    });\r
    y=doc.lastAutoTable.finalY+16;\r
  }\r
\r
  // -- Footer\r
  const ftY=Math.max(y+20,H-60);\r
  doc.setDrawColor(26,107,196);\r
  doc.setLineWidth(1.5);\r
  doc.line(ML,ftY,W-MR,ftY);\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(13);\r
  doc.setTextColor(26,107,196);\r
  doc.text('Thank you for your business!',W/2,ftY+20,{align:'center'});\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(8);\r
  doc.setTextColor(160,160,160);\r
  doc.text(\`\${LIVIO_COMPANY_NAME} · \${LIVIO_OFFICE_ADDRESS}\`,W/2,ftY+35,{align:'center'});\r
\r
  return { doc, inv };\r
}\r
\r
function generateInvoicePDF(invId){\r
  const { doc, inv } = buildInvoicePDFDoc(invId);\r
  doc.save(\`\${inv.num||'Invoice'}.pdf\`);\r
  showToast(\`? \${inv.num}.pdf downloaded!\`,'success');\r
}\r
\r
function buildInvoicePdfAttachment(invId){\r
  const { doc, inv } = buildInvoicePDFDoc(invId);\r
  const dataUri=doc.output('datauristring');\r
  const content=String(dataUri).split(',')[1]||'';\r
  return {\r
    filename:\`\${inv.num||'Invoice'}.pdf\`,\r
    content,\r
    contentType:'application/pdf'\r
  };\r
}\r
\r
/* -- DOWNLOAD LEDGER PDF ----------------------------------- */\r
function downloadLedgerPDF(){\r
  const p=getProj();\r
  if(!p){showToast('No active project.','error');return;}\r
  const invs=invoices.filter(x=>x.projectId===p.id);\r
  const totalInvoiced=invs.reduce((s,x)=>s+(x.total||0),0);\r
  const totalReceived=invs.reduce((s,x)=>s+invPaid(x),0);\r
  const balanceDue=totalInvoiced-totalReceived;\r
\r
  const {jsPDF}=window.jspdf;\r
  const doc=new jsPDF({unit:'pt',format:'letter'});\r
  const W=doc.internal.pageSize.getWidth();\r
  const ML=40,MR=40;\r
\r
  // Header\r
  doc.setFillColor(26,107,196);\r
  doc.rect(0,0,W,65,'F');\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(18);\r
  doc.setTextColor(255,255,255);\r
  doc.text('LIVIO BUILDING SYSTEMS',ML,32);\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(8);\r
  doc.setTextColor(200,225,255);\r
  doc.text(\`Payment Ledger Report · \${LIVIO_OFFICE_ADDRESS}\`,ML,48);\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(14);\r
  doc.setTextColor(255,255,255);\r
  doc.text('PAYMENT LEDGER',W-MR,38,{align:'right'});\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(8);\r
  doc.text(\`Generated: \${fmtD(new Date().toISOString().slice(0,10))}\`,W-MR,52,{align:'right'});\r
\r
  let y=80;\r
\r
  // Project info\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(11);\r
  doc.setTextColor(12,27,46);\r
  doc.text(\`Project: \${p.name}\`,ML,y);\r
  y+=14;\r
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(80,80,80);doc.text(\`Project Address: \${getProjectAddress(p)}\`,ML,y);y+=12;\r
  doc.text(\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\`,ML,y);y+=12;\r
  if(p.client){doc.text(\`Client: \${p.client}\${p.clientPhone?' · '+p.clientPhone:''}\${p.clientEmail?' · '+p.clientEmail:''}\`,ML,y);y+=12;}\r
  if(p.clientAddr){doc.setFont('helvetica','normal');doc.setFontSize(9);doc.text(\`Address: \${p.clientAddr}\`,ML,y);y+=12;}\r
  y+=8;\r
\r
  // Summary boxes\r
  const boxW=(W-ML-MR-20)/3;\r
  function summBox(x,lbl,val,color){\r
    doc.setFillColor(...color);\r
    doc.rect(x,y,boxW,48,'F');\r
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(255,255,255);\r
    doc.text(lbl,x+10,y+16);\r
    doc.setFont('helvetica','bold');doc.setFontSize(14);\r
    doc.text(val,x+10,y+36);\r
  }\r
  summBox(ML,'TOTAL INVOICED',fmtM(totalInvoiced),[12,27,46]);\r
  summBox(ML+boxW+10,'TOTAL RECEIVED',fmtM(totalReceived),[45,106,15]);\r
  summBox(ML+2*(boxW+10),'BALANCE DUE',fmtM(balanceDue),balanceDue>0.01?[168,98,0]:[45,106,15]);\r
  y+=62;\r
\r
  // Invoices table\r
  doc.autoTable({\r
    startY:y,\r
    head:[['Invoice #','Date','Due Date','Status','Invoice Total','Paid','Balance']],\r
    body:invs.map(inv=>{\r
      const pd=invPaid(inv);\r
      const bl=(inv.total||0)-pd;\r
      return[inv.num,fmtD(inv.date),fmtD(inv.due),(inv.status||'').toUpperCase(),fmtM(inv.total),fmtM(pd),fmtM(bl)];\r
    }),\r
    foot:[['','','','TOTALS',fmtM(totalInvoiced),fmtM(totalReceived),fmtM(balanceDue)]],\r
    margin:{left:ML,right:MR},\r
    headStyles:{fillColor:[26,107,196],textColor:[255,255,255],fontStyle:'bold',fontSize:8,cellPadding:7},\r
    bodyStyles:{fontSize:8,cellPadding:6},\r
    footStyles:{fillColor:[12,27,46],textColor:[255,255,255],fontStyle:'bold',fontSize:9,cellPadding:7},\r
    columnStyles:{4:{halign:'right'},5:{halign:'right'},6:{halign:'right'}},\r
    alternateRowStyles:{fillColor:[248,247,244]}\r
  });\r
\r
  y=doc.lastAutoTable.finalY+20;\r
\r
  // Payment details per invoice\r
  invs.forEach(inv=>{\r
    const pays=inv.payments||[];\r
    if(!pays.length)return;\r
    doc.setFont('helvetica','bold');\r
    doc.setFontSize(9);\r
    doc.setTextColor(26,107,196);\r
    doc.text(\`\${inv.num} — Payment Records\`,ML,y);\r
    doc.autoTable({\r
      startY:y+4,\r
      head:[['Date','Amount','Reference / Note']],\r
      body:pays.map(pay=>[fmtD(pay.date),fmtM(pay.amount),pay.note||'—']),\r
      margin:{left:ML,right:MR},\r
      headStyles:{fillColor:[45,106,15],textColor:[255,255,255],fontSize:7.5,cellPadding:5},\r
      bodyStyles:{fontSize:7.5,cellPadding:5},\r
      columnStyles:{1:{halign:'right',fontStyle:'bold'}}\r
    });\r
    y=doc.lastAutoTable.finalY+14;\r
  });\r
\r
  // Footer\r
  const pageH=doc.internal.pageSize.getHeight();\r
  doc.setDrawColor(26,107,196);\r
  doc.setLineWidth(1.5);\r
  doc.line(ML,pageH-40,W-MR,pageH-40);\r
  doc.setFont('helvetica','bold');\r
  doc.setFontSize(10);\r
  doc.setTextColor(26,107,196);\r
  doc.text('Thank you for your business!',W/2,pageH-24,{align:'center'});\r
  doc.setFont('helvetica','normal');\r
  doc.setFontSize(7);\r
  doc.setTextColor(160,160,160);\r
  doc.text(\`\${LIVIO_COMPANY_NAME} · \${LIVIO_OFFICE_ADDRESS}\`,W/2,pageH-12,{align:'center'});\r
\r
  doc.save(\`Payment-Ledger-\${p.name.replace(/\\s+/g,'_')}.pdf\`);\r
  showToast('? Ledger PDF downloaded!','success');\r
}\r
\r
/* -- DOWNLOAD LEDGER EXCEL --------------------------------- */\r
function downloadLedgerExcel(){\r
  if(!window.XLSX){showToast('Excel library not loaded.','error');return;}\r
  const p=getProj();\r
  if(!p){showToast('No active project.','error');return;}\r
  const invs=invoices.filter(x=>x.projectId===p.id);\r
  const totalInvoiced=invs.reduce((s,x)=>s+(x.total||0),0);\r
  const totalReceived=invs.reduce((s,x)=>s+invPaid(x),0);\r
  const balanceDue=totalInvoiced-totalReceived;\r
\r
  const wb=XLSX.utils.book_new();\r
\r
  // Sheet 1: Summary\r
  const summData=[\r
    ['LIVIO BUILDING SYSTEMS – Payment Ledger'],\r
    [\`Project: \${p.name}\`],\r
    [\`Project Address: \${getProjectAddress(p)}\`],\r
    [\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\`],\r
    [\`Client: \${p.client||'—'}\`],\r
    [p.clientAddr?\`Address: \${p.clientAddr}\`:''],\r
    ['Generated:',new Date().toLocaleDateString()],\r
    [],\r
    ['SUMMARY'],\r
    ['Total Invoiced','Total Received','Balance Due'],\r
    [totalInvoiced,totalReceived,balanceDue],\r
    [],\r
    ['INVOICE DETAILS'],\r
    ['Invoice #','Issue Date','Due Date','Status','Subtotal','Tax','Invoice Total','Amount Paid','Balance'],\r
    ...invs.map(inv=>[\r
      inv.num,\r
      inv.date?new Date(inv.date+'T12:00:00'):null,\r
      inv.due?new Date(inv.due+'T12:00:00'):null,\r
      (inv.status||'').toUpperCase(),\r
      inv.subtotal||0,\r
      (inv.subtotal||0)*(inv.tax||0)/100,\r
      inv.total||0,\r
      invPaid(inv),\r
      invBalance(inv)\r
    ]),\r
    ['','','','TOTAL','','',totalInvoiced,totalReceived,balanceDue]\r
  ];\r
  const ws1=XLSX.utils.aoa_to_sheet(summData);\r
  ws1['!cols']=[{wch:20},{wch:14},{wch:14},{wch:12},{wch:14},{wch:12},{wch:16},{wch:14},{wch:14}];\r
  XLSX.utils.book_append_sheet(wb,ws1,'Ledger Summary');\r
\r
  // Sheet 2: All payments\r
  const allPays=[];\r
  invs.forEach(inv=>{\r
    (inv.payments||[]).forEach(pay=>{\r
      allPays.push([inv.num,pay.date?new Date(pay.date+'T12:00:00'):null,pay.amount,pay.note||'',pay.proofName||'']);\r
    });\r
  });\r
  const payData=[\r
    ['PAYMENT RECORDS'],\r
    ['Invoice #','Payment Date','Amount','Reference / Note','Proof File'],\r
    ...allPays,\r
    [],\r
    ['','TOTAL',totalReceived,'','']\r
  ];\r
  const ws2=XLSX.utils.aoa_to_sheet(payData);\r
  ws2['!cols']=[{wch:16},{wch:14},{wch:14},{wch:30},{wch:30}];\r
  XLSX.utils.book_append_sheet(wb,ws2,'Payment Records');\r
\r
  XLSX.writeFile(wb,\`Payment-Ledger-\${p.name.replace(/\\s+/g,'_')}.xlsx\`);\r
  showToast('? Ledger Excel downloaded!','success');\r
}\r
\r
/* -- SEND LEDGER EMAIL ------------------------------------- */\r
function openSendLedgerEmail(){\r
  const p=getProj();\r
  if(!p){showToast('No active project.','error');return;}\r
  const invs=invoices.filter(x=>x.projectId===p.id);\r
  const totalInvoiced=invs.reduce((s,x)=>s+(x.total||0),0);\r
  const totalReceived=invs.reduce((s,x)=>s+invPaid(x),0);\r
  const balanceDue=totalInvoiced-totalReceived;\r
\r
  let body=\`PAYMENT LEDGER — \${p.name}\\n\${'-'.repeat(50)}\\n\`;\r
  body+=\`Client: \${p.client||'—'}\\n\`;\r
  body+=\`Project Address: \${getProjectAddress(p)}\\n\`;\r
  body+=\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\\n\`;\r
  if(p.clientAddr)body+=\`Client Address: \${p.clientAddr}\\n\`;\r
  body+=\`\\nSUMMARY\\n\`;\r
  body+=\`Total Invoiced:  \${fmtM(totalInvoiced)}\\n\`;\r
  body+=\`Total Received:  \${fmtM(totalReceived)}\\n\`;\r
  body+=\`Balance Due:     \${fmtM(balanceDue)}\\n\`;\r
  body+=\`\\nINVOICE DETAILS\\n\${'-'.repeat(50)}\\n\`;\r
  invs.forEach(inv=>{\r
    const pd=invPaid(inv);\r
    const bl=invBalance(inv);\r
    body+=\`\\n\${inv.num}  |  \${(inv.status||'').toUpperCase()}  |  Due: \${fmtD(inv.due)}\\n\`;\r
    body+=\`  Invoice Total: \${fmtM(inv.total)}  |  Paid: \${fmtM(pd)}  |  Balance: \${fmtM(bl)}\\n\`;\r
    (inv.payments||[]).forEach(pay=>{\r
      body+=\`    ? \${fmtD(pay.date)}: \${fmtM(pay.amount)}\${pay.note?' ('+pay.note+')':''}\\n\`;\r
    });\r
  });\r
  body+=\`\\nReply Email: \${LIVIO_REPLY_EMAIL}\\n\`;\r
  body+=\`\\n\${'-'.repeat(50)}\\nThank you for your business!\\n\${getLivioSignature()}\`;\r
\r
  document.getElementById('em-modal-title').textContent='✉ Send Payment Ledger';\r
  document.getElementById('em-type').value='ledger';\r
  document.getElementById('em-ref-id').value='';\r
  document.getElementById('em-to').value=p.clientEmail||'';\r
  document.getElementById('em-subject').value=\`Payment Ledger – \${p.name}\`;\r
  document.getElementById('em-body').value=body;\r
  renderEmailSendStatus();\r
  document.getElementById('emailModal').classList.add('open');\r
}\r
\r
/* -- SEND INVOICE EMAIL ------------------------------------ */\r
function openSendInvoiceEmail(invId){\r
  const inv=invoices.find(x=>x.id===invId);\r
  if(!inv){showToast('Invoice not found.','error');return;}\r
  const p=getProj();\r
  const paid=invPaid(inv);\r
  const bal=invBalance(inv);\r
  let body=\`Dear \${p?.client||'Client'},\\n\\nPlease find below your invoice details from Livio Building Systems.\\n\\n\`;\r
  body+=\`INVOICE: \${inv.num}\\n\${'-'.repeat(40)}\\n\`;\r
  body+=\`Project:    \${inv.project||p?.name||'—'}\\n\`;\r
  body+=\`Project Address: \${getProjectAddress(p)}\\n\`;\r
  body+=\`Livio Address:   \${LIVIO_OFFICE_ADDRESS}\\n\`;\r
  body+=\`Issue Date: \${fmtD(inv.date)}\\n\`;\r
  body+=\`Due Date:   \${fmtD(inv.due)}\\n\`;\r
  body+=\`Status:     \${(inv.status||'pending').toUpperCase()}\\n\\n\`;\r
  body+=\`LINE ITEMS\\n\${'-'.repeat(40)}\\n\`;\r
  (inv.lines||[]).forEach(l=>{body+=\`\${l.desc} × \${l.qty}  —  \${fmtM(l.price)} ea.  =  \${fmtM(l.qty*l.price)}\\n\`;});\r
  body+=\`\\nSubtotal:   \${fmtM(inv.subtotal)}\\n\`;\r
  if(inv.tax)body+=\`Tax (\${inv.tax}%): \${fmtM((inv.subtotal||0)*(inv.tax||0)/100)}\\n\`;\r
  body+=\`TOTAL:      \${fmtM(inv.total)}\\n\`;\r
  if((inv.payments||[]).length){\r
    body+=\`Amount Paid:\${fmtM(paid)}\\nBalance Due:\${fmtM(bal)}\\n\`;\r
  }\r
  if(inv.notes)body+=\`\\nBilling Detail:\\n\${inv.notes}\\n\`;\r
  if(inv.paymentTerms)body+=\`\\nPayment Terms:\\n\${inv.paymentTerms}\\n\`;\r
  body+=\`\\nReply Email: \${LIVIO_REPLY_EMAIL}\\n\`;\r
  body+=\`\\nThank you for your business!\\n\${getLivioSignature()}\`;\r
\r
  document.getElementById('em-modal-title').textContent=\`✉ Send Invoice \${inv.num}\`;\r
  document.getElementById('em-type').value='invoice';\r
  document.getElementById('em-ref-id').value=invId;\r
  document.getElementById('em-to').value=p?.clientEmail||'';\r
  document.getElementById('em-subject').value=\`Invoice \${inv.num} – \${p?.name||inv.project}\`;\r
  document.getElementById('em-body').value=body;\r
  renderEmailSendStatus();\r
  document.getElementById('emailModal').classList.add('open');\r
}\r
\r
/* -- SEND VIA BACKEND EMAIL SERVICE ------------------------ */\r
function sendEmailJS(){\r
  const to=document.getElementById('em-to').value.trim();\r
  const subject=document.getElementById('em-subject').value.trim();\r
  const body=document.getElementById('em-body').value.trim();\r
  const type=document.getElementById('em-type').value;\r
  const refId=document.getElementById('em-ref-id').value;\r
  if(!to||!subject||!body){showToast('Fill all fields.','error');return;}\r
  const btn=document.getElementById('emailSendBtn');\r
  btn.innerHTML='<span class="spinner"></span> Sending…';\r
  btn.disabled=true;\r
  let attachments=[];\r
  try{\r
    if(type==='invoice'&&refId){\r
      attachments=[buildInvoicePdfAttachment(refId)];\r
    }\r
  }catch(err){\r
    btn.innerHTML='✉ Send';\r
    btn.disabled=false;\r
    showToast('? Unable to attach invoice PDF: '+(err.message||err),'error',6000);\r
    return;\r
  }\r
  sendEmailThroughBackend(to,subject,body,attachments)\r
    .then(()=>{\r
      const message=(type==='invoice'&&refId)?'? Email sent with invoice PDF attached!':'? Email sent successfully!';\r
      showToast(message,'success',4500);\r
      closeModal('emailModal');\r
    })\r
    .catch(err=>{\r
      showToast('? Email send failed: '+(err.message||JSON.stringify(err)),'error',6000);\r
    })\r
    .finally(()=>{btn.innerHTML='✉ Send';btn.disabled=false;});\r
}\r
\r
/* -- SYNC FROM PARENT (iframe) ----------------------------- */\r
const originalGenerateInvoicePDF = generateInvoicePDF;\r
generateInvoicePDF = function(invId){\r
  if(!window.jspdf||!window.jspdf.jsPDF){\r
    showToast('PDF library not loaded yet. Try again.','error');\r
    return;\r
  }\r
  const probe = new window.jspdf.jsPDF({unit:'pt',format:'letter'});\r
  if(typeof probe.autoTable !== 'function'){\r
    showToast('PDF tools are still loading. Please try again in a moment.','error');\r
    return;\r
  }\r
  try{\r
    originalGenerateInvoicePDF(invId);\r
  }catch(err){\r
    console.error('Invoice PDF generation failed:',err);\r
    showToast('Unable to generate invoice PDF right now.','error');\r
  }\r
}\r
\r
function syncActiveProject(){\r
  loadActiveProject();\r
  invoices=readInvoices();\r
  lastInvoiceSig=JSON.stringify(invoices);\r
  renderMain();\r
}\r
window.syncActiveProject=syncActiveProject;\r
\r
/* -- INIT -------------------------------------------------- */\r
syncActiveProject();\r
\r
// Polling fallback\r
setInterval(()=>{\r
  const db=getLivioDB();\r
  const newId=db.activeId||(db.projects&&db.projects[0]?.id)||null;\r
  const nextInvoices=readInvoices();\r
  const nextSig=JSON.stringify(nextInvoices);\r
  if(newId!==curProjectId || nextSig!==lastInvoiceSig){\r
    curProjectId=newId;\r
    invoices=nextInvoices;\r
    lastInvoiceSig=nextSig;\r
    renderMain();\r
  }\r
},2000);\r
<\/script>\r
</body>\r
</html>\r
\r
\r
\r
`,hg=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Momentum — Project Management</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0e0f11;--bg2:#16181c;--bg3:#1e2126;--bg4:#252930;--bg5:#2e333b;
  --border:#2e333b;--border2:#3a4049;
  --text:#e8eaed;--text2:#9aa0ab;--text3:#636b77;
  --accent:#2dd4a0;--accent2:#1aab7c;--accent-dim:#0d2e22;
  --blue:#4da6f5;--blue-dim:#0d2040;
  --amber:#f5a623;--amber-dim:#2e1e05;
  --red:#f56565;--red-dim:#2e0f0f;
  --purple:#a78bfa;--purple-dim:#1a1430;
  --green:#68d391;
  --r:8px;--rl:12px;--rxl:16px;
  --font:'DM Sans',sans-serif;--mono:'DM Mono',monospace;
  --sw:220px;--hh:52px;
}
html,body{height:100%;font-family:var(--font);background:var(--bg);color:var(--text);font-size:14px;line-height:1.5;overflow:hidden}
#app{display:flex;height:100vh}
#sb{width:var(--sw);background:var(--bg2);border-right:1px solid var(--border);display:flex;flex-direction:column;flex-shrink:0}
#main{flex:1;display:flex;flex-direction:column;min-width:0}
#hdr{height:var(--hh);background:var(--bg2);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 20px;gap:10px;flex-shrink:0}
#content{flex:1;overflow:hidden;position:relative}

/* sidebar */
.sb-logo{padding:14px 16px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--border)}
.sb-mark{width:28px;height:28px;background:var(--accent);border-radius:6px;display:flex;align-items:center;justify-content:center}
.sb-name{font-size:15px;font-weight:600;letter-spacing:-.3px}
.sb-sec{padding:12px 8px 4px;font-size:10px;font-weight:600;letter-spacing:.08em;color:var(--text3);text-transform:uppercase}
.sb-list{padding:0 8px;display:flex;flex-direction:column;gap:2px}
.sb-projects{padding:0 8px;display:flex;flex-direction:column;gap:2px;flex:1;overflow-y:auto}
.sb-projects::-webkit-scrollbar{width:3px}
.sb-projects::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px}
.sb-row{display:flex;align-items:center;border-radius:var(--r)}
.sb-row:hover .sb-more{opacity:1}
.sb-item{display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:var(--r);cursor:pointer;color:var(--text2);font-size:13px;transition:all .12s;user-select:none;flex:1;min-width:0}
.sb-item:hover{background:var(--bg3);color:var(--text)}
.sb-item.act{background:var(--accent-dim);color:var(--accent)}
.sb-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.sb-lbl{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sb-more{opacity:0;width:22px;height:22px;border-radius:4px;border:none;background:transparent;color:var(--text3);cursor:pointer;font-size:16px;line-height:1;transition:all .12s;flex-shrink:0;margin-right:4px;display:flex;align-items:center;justify-content:center}
.sb-more:hover{background:var(--bg5);color:var(--text)}
.sb-footer{padding:10px 8px;border-top:1px solid var(--border)}
.sb-user{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:var(--r);cursor:pointer}
.sb-user:hover{background:var(--bg3)}
.av{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;flex-shrink:0}

/* header */
.hdr-ttl{font-size:14px;font-weight:600;flex:1}
.vtabs{display:flex;gap:2px;background:var(--bg3);border-radius:var(--r);padding:3px}
.vtab{padding:4px 12px;border-radius:6px;border:none;background:transparent;color:var(--text2);font-size:12px;font-weight:500;cursor:pointer;font-family:var(--font);transition:all .12s;display:flex;align-items:center;gap:5px}
.vtab svg{width:12px;height:12px}
.vtab:hover{color:var(--text)}
.vtab.act{background:var(--bg5);color:var(--text)}
.hbtn{display:flex;align-items:center;gap:5px;padding:6px 12px;border-radius:var(--r);border:1px solid var(--border2);background:transparent;color:var(--text2);font-size:12px;font-weight:500;cursor:pointer;font-family:var(--font);transition:all .12s}
.hbtn:hover{border-color:var(--accent);color:var(--accent)}
.hbtn.pri{background:var(--accent);border-color:var(--accent);color:#0a1a11;font-weight:600}
.hbtn.pri:hover{background:var(--accent2)}

/* stats */
#statsbar{padding:7px 20px;border-bottom:1px solid var(--border);display:flex;gap:18px;background:var(--bg2);flex-shrink:0;overflow-x:auto}
.st{display:flex;flex-direction:column;flex-shrink:0}
.st-v{font-size:17px;font-weight:600;font-family:var(--mono);letter-spacing:-.5px}
.st-l{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.04em}
.st-sep{width:1px;background:var(--border);margin:3px 0;align-self:stretch}

/* views */
.view{position:absolute;inset:0;overflow:hidden;display:none}
.view.act{display:flex;flex-direction:column}

/* kanban */
#kb-view{padding:16px;gap:12px;overflow-x:auto;flex-direction:row;align-items:flex-start}
#kb-view::-webkit-scrollbar{height:5px}
#kb-view::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}
.kb-col{min-width:255px;width:255px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--rl);display:flex;flex-direction:column;max-height:calc(100vh - var(--hh) - 80px)}
.kb-col-hd{padding:11px 13px 9px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);flex-shrink:0}
.kb-col-ttl{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600}
.kb-cnt{background:var(--bg4);color:var(--text3);font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}
.kb-cards{padding:7px;display:flex;flex-direction:column;gap:5px;overflow-y:auto;flex:1}
.kb-cards::-webkit-scrollbar{width:3px}
.kb-cards::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px}
.kcard{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:10px 11px;cursor:pointer;transition:all .15s;position:relative;overflow:hidden}
.kcard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2.5px;background:var(--cc,transparent)}
.kcard:hover{border-color:var(--border2);background:var(--bg4);transform:translateY(-1px)}
.kcard.drag{opacity:.4}
.kcard-ttl{font-size:12px;font-weight:500;line-height:1.4;margin-bottom:7px}
.kcard-ft{display:flex;align-items:center;gap:5px;flex-wrap:wrap}
.tag{font-size:10px;font-weight:500;padding:2px 6px;border-radius:8px;white-space:nowrap}
.t-high{background:var(--red-dim);color:var(--red)}
.t-med{background:var(--amber-dim);color:var(--amber)}
.t-low{background:var(--accent-dim);color:var(--accent)}
.t-feature{background:#1a2040;color:var(--blue)}
.t-bug{background:var(--red-dim);color:var(--red)}
.t-design{background:var(--purple-dim);color:var(--purple)}
.t-infra{background:#1c2210;color:var(--green)}
.drop-over{border:2px dashed var(--accent)!important;background:var(--accent-dim)!important}
.kb-add{margin:5px 7px 7px;padding:6px 8px;border-radius:var(--r);border:1px dashed var(--border);background:transparent;color:var(--text3);font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px;font-family:var(--font);width:calc(100% - 14px);transition:all .12s}
.kb-add:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-dim)}
.kb-newcol{min-width:190px;border:1.5px dashed var(--border);border-radius:var(--rl);display:flex;align-items:center;justify-content:center;cursor:pointer;height:68px;transition:all .12s}
.kb-newcol:hover{border-color:var(--accent);background:var(--accent-dim)}
.kb-newcol span{font-size:12px;color:var(--text3)}
.kb-newcol:hover span{color:var(--accent)}

/* gantt */
#gt-view{flex-direction:column}
.gt-bar-row{padding:10px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-shrink:0}
.zoom-grp{display:flex;gap:2px;background:var(--bg3);border-radius:var(--r);padding:3px}
.zbtn{padding:3px 10px;border-radius:5px;border:none;background:transparent;color:var(--text2);font-size:11px;cursor:pointer;font-family:var(--font);transition:all .12s}
.zbtn:hover{color:var(--text)}
.zbtn.act{background:var(--bg5);color:var(--text)}
.gt-scroll{flex:1;overflow:auto}
.gt-scroll::-webkit-scrollbar{width:5px;height:5px}
.gt-scroll::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}
.gt-grid{min-width:860px}
.gt-thead{display:flex;border-bottom:1px solid var(--border);background:var(--bg2);position:sticky;top:0;z-index:10}
.gt-lc{width:270px;min-width:270px;padding:8px 14px;font-size:10px;font-weight:600;letter-spacing:.06em;color:var(--text3);text-transform:uppercase;border-right:1px solid var(--border)}
.gt-months{flex:1;display:flex}
.gt-month{flex:1;padding:8px;font-size:10px;font-weight:600;color:var(--text3);letter-spacing:.05em;text-transform:uppercase;border-right:1px solid var(--border)}
.gt-row{display:flex;border-bottom:1px solid var(--border);min-height:42px;cursor:pointer;transition:background .1s}
.gt-row:hover{background:var(--bg3)}
.gt-row.grp{background:var(--bg2);cursor:default}
.gt-row.grp:hover{background:var(--bg3)}
.gt-info{width:270px;min-width:270px;padding:0 14px;display:flex;align-items:center;gap:8px;border-right:1px solid var(--border)}
.gt-tname{font-size:12px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.gt-tsub{font-size:10px;color:var(--text3)}
.gt-tl{flex:1;position:relative;overflow:hidden}
.gt-bar{position:absolute;top:50%;transform:translateY(-50%);height:18px;border-radius:3px;display:flex;align-items:center;padding:0 6px;min-width:3px;transition:filter .12s}
.gt-bar:hover{filter:brightness(1.2)}
.gt-bar-prog{position:absolute;left:0;top:0;bottom:0;border-radius:3px;background:rgba(255,255,255,.18)}
.gt-bar-txt{font-size:10px;font-weight:500;color:rgba(255,255,255,.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:1}
.gt-today{position:absolute;top:0;bottom:0;width:1.5px;background:var(--red);opacity:.5;pointer-events:none;z-index:5}
.gt-toggle{font-size:10px;color:var(--text3);cursor:pointer;user-select:none;flex-shrink:0}
.gt-grp-name{font-size:11px;font-weight:600;color:var(--text2);flex:1}
.gt-ind{padding-left:10px}

/* overlays & modals */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .16s}
.overlay.open{opacity:1;pointer-events:all}
.modal{background:var(--bg2);border:1px solid var(--border2);border-radius:var(--rxl);width:440px;max-width:95vw;max-height:88vh;overflow-y:auto;transform:translateY(10px);transition:transform .16s}
.overlay.open .modal{transform:translateY(0)}
.modal.sm{width:360px}
.mhd{padding:18px 18px 0;display:flex;align-items:center;justify-content:space-between}
.mttl{font-size:15px;font-weight:600}
.mx{width:26px;height:26px;border-radius:5px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .12s}
.mx:hover{color:var(--text);border-color:var(--border2)}
.mbody{padding:18px}
.fg{margin-bottom:14px}
.fl{font-size:11px;font-weight:600;color:var(--text2);margin-bottom:5px;display:block;letter-spacing:.04em;text-transform:uppercase}
.fi{width:100%;background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:8px 10px;color:var(--text);font-size:13px;font-family:var(--font);outline:none;transition:border-color .12s}
.fi:focus{border-color:var(--accent)}
.fi::placeholder{color:var(--text3)}
select.fi{cursor:pointer}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.fact{display:flex;gap:8px;justify-content:flex-end;margin-top:18px;align-items:center}
.btn{padding:7px 14px;border-radius:var(--r);border:1px solid var(--border2);background:transparent;color:var(--text2);font-size:13px;font-weight:500;cursor:pointer;font-family:var(--font);transition:all .12s}
.btn:hover{color:var(--text)}
.btn.pri{background:var(--accent);border-color:var(--accent);color:#0a1a11;font-weight:600}
.btn.pri:hover{background:var(--accent2)}
.btn.danger{color:var(--red);border-color:var(--red-dim)}
.btn.danger:hover{background:var(--red-dim)}
.swatches{display:flex;gap:7px;flex-wrap:wrap;margin-top:4px}
.sw{width:18px;height:18px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:transform .1s,border-color .1s}
.sw:hover{transform:scale(1.2)}
.sw.sel{border-color:var(--text)}
.pst-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:4px}
.pst{background:var(--bg3);border-radius:var(--r);padding:10px;text-align:center}
.pst-n{font-size:20px;font-weight:600;font-family:var(--mono)}
.pst-l{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-top:2px}

/* context menu */
#ctx{position:fixed;background:var(--bg3);border:1px solid var(--border2);border-radius:var(--rl);min-width:186px;z-index:500;overflow:hidden;display:none;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.ci{display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--text2);cursor:pointer;transition:background .1s;user-select:none;white-space:nowrap}
.ci svg{width:13px;height:13px;flex-shrink:0;opacity:.6}
.ci:hover{background:var(--bg4);color:var(--text)}
.ci:hover svg{opacity:1}
.ci.danger:hover{background:var(--red-dim);color:var(--red)}
.ctx-sep{height:1px;background:var(--border);margin:3px 0}
.ctx-clrs{padding:8px 12px 10px}
.ctx-clrs-lbl{font-size:10px;color:var(--text3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:7px}
.ctx-clrs-row{display:flex;gap:6px;flex-wrap:wrap}

/* confirm */
#conf-ov{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:600;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .14s}
#conf-ov.open{opacity:1;pointer-events:all}
#conf-box{background:var(--bg2);border:1px solid var(--border2);border-radius:var(--rxl);width:340px;max-width:94vw;padding:22px;transform:translateY(8px);transition:transform .14s}
#conf-ov.open #conf-box{transform:translateY(0)}
#conf-ttl{font-size:15px;font-weight:600;margin-bottom:8px}
#conf-msg{font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:20px}
.conf-acts{display:flex;gap:8px;justify-content:flex-end}

/* inline rename */
.sb-rename{flex:1;background:var(--bg4);border:1px solid var(--accent);border-radius:4px;color:var(--text);font-size:13px;font-family:var(--font);outline:none;padding:1px 5px;min-width:0}

/* toast */
#toast{position:fixed;bottom:20px;right:20px;background:var(--bg4);border:1px solid var(--border2);border-radius:var(--r);padding:10px 15px;font-size:13px;display:flex;align-items:center;gap:8px;transform:translateY(60px);opacity:0;transition:all .22s;z-index:700}
#toast.show{transform:translateY(0);opacity:1}
.toast-dot{width:7px;height:7px;border-radius:50%;background:var(--accent);flex-shrink:0}

@keyframes fu{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.kcard,.gt-row{animation:fu .18s ease both}
</style>
</head>
<body>
<div id="app">

<!-- SIDEBAR -->
<div id="sb">
  <div class="sb-logo">
    <div class="sb-mark">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="4" height="12" rx="1.5" fill="#0a1a11"/>
        <rect x="6.5" y="5" width="4" height="9" rx="1.5" fill="#0a1a11"/>
        <rect x="12" y="1" width="3" height="14" rx="1.5" fill="#0a1a11"/>
      </svg>
    </div>
    <span class="sb-name">Momentum</span>
  </div>
  <div class="sb-sec">Workspace</div>
  <div class="sb-list">
    <div class="sb-row">
      <div class="sb-item act" id="nav-all" onclick="selProj(null)">
        <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor" opacity=".5"><circle cx="3.5" cy="3.5" r="3.5"/></svg>
        <span class="sb-lbl">All Projects</span>
      </div>
    </div>
    <div class="sb-row">
      <div class="sb-item" id="nav-mine" onclick="selMine()">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1 3h11M1 6.5h7M1 10h5"/></svg>
        <span class="sb-lbl">My Tasks</span>
      </div>
    </div>
  </div>
  <div class="sb-sec" style="margin-top:10px">Projects</div>
  <div class="sb-projects" id="proj-list"></div>
  <div class="sb-footer">
    <div class="sb-user">
      <div class="av" style="width:26px;height:26px;font-size:10px;background:#0d2e22;color:var(--accent)">PV</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Pranav V.</div>
        <div style="font-size:10px;color:var(--text3)">Delivery Manager</div>
      </div>
    </div>
  </div>
</div>

<!-- MAIN -->
<div id="main">
  <div id="hdr">
    <div class="hdr-ttl" id="hdr-ttl">All Projects</div>
    <div class="vtabs">
      <button class="vtab act" id="vtab-kb" onclick="switchView('kb',this)">
        <svg viewBox="0 0 12 12" fill="currentColor"><rect x="0" y="0" width="3.5" height="12" rx="1"/><rect x="4.5" y="3" width="3.5" height="9" rx="1"/><rect x="9" y="1" width="3" height="11" rx="1"/></svg>Board
      </button>
      <button class="vtab" id="vtab-gt" onclick="switchView('gt',this)">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="0" y="0.5" width="7" height="3" rx="1"/><rect x="3" y="4.5" width="7" height="3" rx="1"/><rect x="1" y="8.5" width="9" height="3" rx="1"/></svg>Timeline
      </button>
    </div>
    <button class="hbtn pri" onclick="openTaskModal()">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor"><path d="M5.5 0v11M0 5.5h11"/></svg>
      Add Task
    </button>
  </div>
  <div id="statsbar"></div>
  <div id="content">
    <div class="view act" id="kb-view"></div>
    <div class="view" id="gt-view">
      <div class="gt-bar-row">
        <span style="font-size:12px;color:var(--text2)">Zoom</span>
        <div class="zoom-grp">
          <button class="zbtn" onclick="setZoom('weeks',this)">Weeks</button>
          <button class="zbtn act" onclick="setZoom('months',this)">Months</button>
          <button class="zbtn" onclick="setZoom('quarters',this)">Quarters</button>
        </div>
        <span style="font-size:11px;color:var(--text3);margin-left:auto">Today: <span id="today-lbl" style="color:var(--text2)"></span></span>
      </div>
      <div class="gt-scroll" id="gt-scroll"></div>
    </div>
  </div>
</div>

</div>

<!-- CONTEXT MENU -->
<div id="ctx"></div>

<!-- CONFIRM -->
<div id="conf-ov">
  <div id="conf-box">
    <div id="conf-ttl"></div>
    <div id="conf-msg"></div>
    <div class="conf-acts">
      <button class="btn" onclick="confResolve(false)">Cancel</button>
      <button class="btn danger" id="conf-ok" onclick="confResolve(true)">Delete</button>
    </div>
  </div>
</div>

<!-- TASK MODAL -->
<div class="overlay" id="task-ov" onclick="if(event.target===this)closeTaskModal()">
  <div class="modal">
    <div class="mhd">
      <div class="mttl" id="task-mttl">Add Task</div>
      <button class="mx" onclick="closeTaskModal()">×</button>
    </div>
    <div class="mbody">
      <input type="hidden" id="f-tid">
      <div class="fg">
        <label class="fl">Task name</label>
        <input class="fi" id="f-name" placeholder="What needs to be done?" autocomplete="off">
      </div>
      <div class="fr">
        <div class="fg"><label class="fl">Project</label><select class="fi" id="f-proj"></select></div>
        <div class="fg"><label class="fl">Status</label>
          <select class="fi" id="f-status">
            <option value="backlog">Backlog</option><option value="todo">To Do</option>
            <option value="inprogress">In Progress</option><option value="review">Review</option><option value="done">Done</option>
          </select>
        </div>
      </div>
      <div class="fr">
        <div class="fg"><label class="fl">Priority</label>
          <select class="fi" id="f-pri"><option value="low">Low</option><option value="med">Medium</option><option value="high">High</option></select>
        </div>
        <div class="fg"><label class="fl">Type</label>
          <select class="fi" id="f-type"><option value="feature">Feature</option><option value="bug">Bug</option><option value="design">Design</option><option value="infra">Infra</option></select>
        </div>
      </div>
      <div class="fr">
        <div class="fg"><label class="fl">Assignee</label>
          <select class="fi" id="f-assignee">
            <option value="">Unassigned</option><option value="PV">Pranav V.</option>
            <option value="JL">Justin L.</option><option value="KP">KP</option><option value="KF">Kevin F.</option>
          </select>
        </div>
        <div class="fg"><label class="fl">Progress %</label><input class="fi" type="number" id="f-pct" min="0" max="100" value="0"></div>
      </div>
      <div class="fr">
        <div class="fg"><label class="fl">Start date</label><input class="fi" type="date" id="f-start"></div>
        <div class="fg"><label class="fl">End date</label><input class="fi" type="date" id="f-end"></div>
      </div>
      <div class="fact">
        <button class="btn danger" id="task-del-btn" style="margin-right:auto;display:none" onclick="deleteTask()">Delete task</button>
        <button class="btn" onclick="closeTaskModal()">Cancel</button>
        <button class="btn pri" onclick="saveTask()">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- PROJECT MODAL -->
<div class="overlay" id="proj-ov" onclick="if(event.target===this)closeProjModal()">
  <div class="modal sm">
    <div class="mhd">
      <div class="mttl" id="proj-mttl">Project Settings</div>
      <button class="mx" onclick="closeProjModal()">×</button>
    </div>
    <div class="mbody">
      <input type="hidden" id="pm-id">
      <div class="fg"><label class="fl">Name</label><input class="fi" id="pm-name" placeholder="Project name" autocomplete="off"></div>
      <div class="fg"><label class="fl">Color</label><div class="swatches" id="pm-clrs"></div></div>
      <div class="fg"><label class="fl">Description</label><input class="fi" id="pm-desc" placeholder="Optional description"></div>
      <div class="fg"><label class="fl">Overview</label><div class="pst-grid" id="pm-stats"></div></div>
      <div class="fact">
        <button class="btn danger" style="margin-right:auto" onclick="deleteProj(g('pm-id').value)">Delete</button>
        <button class="btn" onclick="closeProjModal()">Cancel</button>
        <button class="btn pri" onclick="saveProjModal()">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"><div class="toast-dot"></div><span id="toast-txt"></span></div>

<script>
// ── helpers ──
const g = id => document.getElementById(id);
const esc = s => { const d=document.createElement('div');d.textContent=s;return d.innerHTML; };
const uid = () => '_'+Math.random().toString(36).slice(2,9);

// ── constants ──
const COLORS = ['#2dd4a0','#4da6f5','#a78bfa','#f5a623','#f56565','#68d391','#f472b6','#fb923c','#60a5fa','#34d399','#fbbf24'];
const AV = {PV:{bg:'#0d2e22',fg:'#2dd4a0'},JL:{bg:'#0d2040',fg:'#4da6f5'},KP:{bg:'#2e1e05',fg:'#f5a623'},KF:{bg:'#2e0f0f',fg:'#f56565'}};
const COLS = [
  {id:'backlog',label:'Backlog',c:'#636b77'},
  {id:'todo',label:'To Do',c:'#4da6f5'},
  {id:'inprogress',label:'In Progress',c:'#2dd4a0'},
  {id:'review',label:'Review',c:'#a78bfa'},
  {id:'done',label:'Done',c:'#68d391'},
];
const BARC = {backlog:'#636b77',todo:'#4da6f5',inprogress:'#2dd4a0',review:'#a78bfa',done:'#3a4049'};
const LIVIO_KEY='livio_v1';
function cloneData(v,fallback){
  try{return JSON.parse(JSON.stringify(v ?? fallback));}catch{return fallback;}
}
function getHostApp(){
  try{
    if(window.parent && window.parent!==window && window.parent.DB && typeof window.parent.saveDB==='function'){
      return window.parent;
    }
  }catch{}
  return null;
}
function getHostProject(host=getHostApp()){
  try{
    const db=host?.DB;
    const projects=db?.projects;
    if(!Array.isArray(projects) || !projects.length) return null;
    const activeId=db.activeId ?? db.activeProjectId ?? projects[0]?.id ?? null;
    return projects.find(p=>p.id===activeId) || projects[0] || null;
  }catch{}
  return null;
}
function readLocalLivioDB(){
  try{return JSON.parse(localStorage.getItem(LIVIO_KEY)||'{}')}catch{return{}}
}
function getLivioDB(){
  const host=getHostApp();
  return host?.DB || readLocalLivioDB();
}
function persistLivioDB(db){
  const host=getHostApp();
  if(host?.DB){
    try{
      host.saveDB();
      return;
    }catch(err){
      console.error('momentum shared save failed:',err);
    }
  }
  localStorage.setItem(LIVIO_KEY,JSON.stringify(db));
}
function deriveMomentumState(db, hostProject=null){
  const safeDb=db||{};
  const sourceProjects=hostProject ? [hostProject] : (safeDb.projects||[]);
  const projects=sourceProjects.map(p=>({id:p.id,name:p.name,color:p.color||'#2dd4a0',desc:p.address||''}));
  const tasks=[];
  const statusMap={active:'inprogress',inprogress:'inprogress',starting:'inprogress',hold:'review',caloshahold:'review',complete:'done'};
  sourceProjects.forEach(p=>{
    (p.works||[]).forEach(w=>{
      tasks.push({id:w.id,title:w.name,project:p.id,status:statusMap[w.status]||'todo',priority:'med',type:'infra',assignee:'',progress:w.pct||0,start:'',end:''});
    });
    (p.milestones||[]).forEach(m=>{
      tasks.push({id:m.id,title:m.name,project:p.id,status:m.status==='passed'?'done':m.status==='failed'?'review':'todo',priority:'high',type:'feature',assignee:'',progress:m.status==='passed'?100:0,start:m.date||'',end:m.date||''});
    });
  });
  return {projects,tasks,proj:hostProject?.id ?? null,view:'kb',zoom:'months',drag:null,gtOpen:{}};
}
function readMomentumState(){
  const db=getLivioDB();
  const host=getHostApp();
  const hostProject=getHostProject(host);
  const base=deriveMomentumState(db,hostProject);
  const raw=hostProject ? hostProject.momentumState : db.momentumState;
  if(!raw || !Array.isArray(raw.projects) || !Array.isArray(raw.tasks)) return base;
  const mergedProjects=[...raw.projects.map(p=>({...p}))];
  base.projects.forEach(bp=>{
    const idx=mergedProjects.findIndex(p=>p.id===bp.id);
    if(idx>=0) mergedProjects[idx]={...mergedProjects[idx],name:bp.name,color:bp.color,desc:bp.desc};
    else mergedProjects.push(bp);
  });
  return {...base,...cloneData(raw,{}),projects:mergedProjects,tasks:cloneData(raw.tasks,[]),drag:null};
}
function saveMomentumState(){
  const db=getLivioDB();
  const host=getHostApp();
  const hostProject=getHostProject(host);
  const nextState={projects:cloneData(S.projects,[]),tasks:cloneData(S.tasks,[]),proj:S.proj ?? null,view:S.view ?? 'kb',zoom:S.zoom ?? 'months',gtOpen:cloneData(S.gtOpen,{})};
  if(hostProject){
    hostProject.momentumState=nextState;
    if(db.momentumState) delete db.momentumState;
  }else{
    db.momentumState=nextState;
  }
  persistLivioDB(db);
}

// ── state ──
let S = {
  projects:[
    {id:'p1',name:'Workday Pipeline',color:'#2dd4a0',desc:''},
    {id:'p2',name:'ReactHealth ETL',color:'#4da6f5',desc:''},
    {id:'p3',name:'Lavina CT Build',color:'#a78bfa',desc:''},
    {id:'p4',name:'FieldBoard App',color:'#f5a623',desc:''},
  ],
  tasks:[
    {id:'t1',title:'Supplier Invoice Extract fix',project:'p1',status:'done',priority:'high',type:'feature',assignee:'PV',progress:100,start:'2026-02-01',end:'2026-02-14'},
    {id:'t2',title:'Expense Report Lines HCP tags',project:'p1',status:'done',priority:'high',type:'bug',assignee:'PV',progress:100,start:'2026-02-10',end:'2026-02-20'},
    {id:'t3',title:'Payment & Settlement pipeline',project:'p1',status:'inprogress',priority:'high',type:'feature',assignee:'KF',progress:65,start:'2026-03-01',end:'2026-04-15'},
    {id:'t4',title:'XML tag namespace mapping',project:'p1',status:'inprogress',priority:'med',type:'infra',assignee:'PV',progress:40,start:'2026-03-10',end:'2026-04-05'},
    {id:'t5',title:'Kevin validation sign-off',project:'p1',status:'review',priority:'high',type:'feature',assignee:'KF',progress:80,start:'2026-04-01',end:'2026-04-10'},
    {id:'t6',title:'Snowflake Openflow setup',project:'p1',status:'todo',priority:'med',type:'infra',assignee:'PV',progress:0,start:'2026-04-15',end:'2026-05-10'},
    {id:'t7',title:'Incremental patient usage loader',project:'p2',status:'done',priority:'high',type:'feature',assignee:'PV',progress:100,start:'2026-01-05',end:'2026-02-01'},
    {id:'t8',title:'MERGE logic & deduplication',project:'p2',status:'done',priority:'high',type:'feature',assignee:'JL',progress:100,start:'2026-01-20',end:'2026-02-10'},
    {id:'t9',title:'PATIENT_DETAILS VARIANT cols',project:'p2',status:'inprogress',priority:'med',type:'feature',assignee:'JL',progress:55,start:'2026-03-05',end:'2026-04-20'},
    {id:'t10',title:'Compliance-met pipeline',project:'p2',status:'review',priority:'high',type:'feature',assignee:'KF',progress:75,start:'2026-03-15',end:'2026-04-08'},
    {id:'t11',title:'Snowflake task scheduling',project:'p2',status:'todo',priority:'med',type:'infra',assignee:'PV',progress:0,start:'2026-04-20',end:'2026-05-05'},
    {id:'t12',title:'Foundation pour',project:'p3',status:'done',priority:'high',type:'feature',assignee:'PV',progress:100,start:'2026-02-01',end:'2026-02-28'},
    {id:'t13',title:'Framing & rough-in',project:'p3',status:'inprogress',priority:'high',type:'feature',assignee:'PV',progress:70,start:'2026-03-01',end:'2026-04-30'},
    {id:'t14',title:'Pool excavation',project:'p3',status:'todo',priority:'med',type:'feature',assignee:'KP',progress:0,start:'2026-04-15',end:'2026-05-31'},
    {id:'t15',title:'Electrical & plumbing',project:'p3',status:'todo',priority:'high',type:'infra',assignee:'JL',progress:0,start:'2026-05-01',end:'2026-06-15'},
    {id:'t16',title:'FieldBoard Kanban view',project:'p4',status:'done',priority:'high',type:'feature',assignee:'PV',progress:100,start:'2026-02-15',end:'2026-03-05'},
    {id:'t17',title:'FieldBoard Gantt chart',project:'p4',status:'done',priority:'high',type:'feature',assignee:'PV',progress:100,start:'2026-03-01',end:'2026-03-20'},
    {id:'t18',title:'ClickUp SDLC migration',project:'p4',status:'inprogress',priority:'med',type:'infra',assignee:'KP',progress:45,start:'2026-03-20',end:'2026-04-15'},
    {id:'t19',title:'PMP certification study',project:'p4',status:'backlog',priority:'low',type:'design',assignee:'PV',progress:20,start:'2026-04-01',end:'2026-06-30'},
  ],
  proj: null,
  view: 'kb',
  zoom: 'months',
  drag: null,
  gtOpen: {},
};
S = readMomentumState();

const vis = () => S.proj ? S.tasks.filter(t=>t.project===S.proj) : S.tasks;

// ── RENDER SIDEBAR ──
function renderSidebar(){
  let html='';
  S.projects.forEach(p=>{
    const act = S.proj===p.id;
    html+=\`
      <div class="sb-row">
        <div class="sb-item\${act?' act':''}" onclick="selProj('\${p.id}')">
          <span class="sb-dot" style="background:\${p.color}"></span>
          <span class="sb-lbl">\${esc(p.name)}</span>
        </div>
        <button class="sb-more" onclick="openCtx(event,'\${p.id}')" title="Options">···</button>
      </div>\`;
  });
  html+=\`
    <div class="sb-row">
      <div class="sb-item" onclick="newProj()" style="color:var(--text3);font-size:12px">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 1v10M1 6h10"/></svg>
        <span class="sb-lbl">New project</span>
      </div>
    </div>\`;
  g('proj-list').innerHTML=html;
  const p=S.proj?S.projects.find(x=>x.id===S.proj):null;
  g('hdr-ttl').textContent=p?p.name:'All Projects';
  g('nav-all').classList.toggle('act',!S.proj);
}

// ── NAV ──
function selProj(pid){
  S.proj=pid;
  g('nav-mine').classList.remove('act');
  renderSidebar(); renderStats(); renderKanban(); renderGantt();
}
function selMine(){
  S.proj=null;
  g('nav-all').classList.remove('act');
  g('nav-mine').classList.add('act');
  g('hdr-ttl').textContent='My Tasks';
  S.tasks_filter='PV';
  renderStats(); renderKanban(); renderGantt();
  S.tasks_filter=null;
}

// ── STATS ──
function renderStats(){
  const tasks=vis();
  const done=tasks.filter(t=>t.status==='done').length;
  const act=tasks.filter(t=>t.status==='inprogress').length;
  const today=new Date();
  const od=tasks.filter(t=>t.end&&new Date(t.end)<today&&t.status!=='done').length;
  const pct=tasks.length?Math.round(done/tasks.length*100):0;
  g('statsbar').innerHTML=\`
    <div class="st"><div class="st-v">\${tasks.length}</div><div class="st-l">Tasks</div></div>
    <div class="st-sep"></div>
    <div class="st"><div class="st-v" style="color:var(--accent)">\${done}</div><div class="st-l">Done</div></div>
    <div class="st-sep"></div>
    <div class="st"><div class="st-v" style="color:var(--blue)">\${act}</div><div class="st-l">Active</div></div>
    <div class="st-sep"></div>
    <div class="st"><div class="st-v" style="color:var(--red)">\${od}</div><div class="st-l">Overdue</div></div>
    <div class="st-sep"></div>
    <div class="st"><div class="st-v" style="color:var(--amber)">\${pct}%</div><div class="st-l">Complete</div></div>\`;
}

// ── KANBAN ──
function renderKanban(){
  const tasks=vis();
  let html=COLS.map(col=>{
    const cards=tasks.filter(t=>t.status===col.id);
    return \`
      <div class="kb-col" id="col-\${col.id}"
        ondragover="kbOver(event,'\${col.id}')"
        ondragleave="kbLeave(event)"
        ondrop="kbDrop(event,'\${col.id}')">
        <div class="kb-col-hd">
          <div class="kb-col-ttl">
            <svg width="7" height="7" viewBox="0 0 7 7"><circle cx="3.5" cy="3.5" r="3.5" fill="\${col.c}"/></svg>
            \${col.label}
          </div>
          <span class="kb-cnt">\${cards.length}</span>
        </div>
        <div class="kb-cards" id="cards-\${col.id}">
          \${cards.map(t=>cardHTML(t)).join('')}
        </div>
        <button class="kb-add" onclick="openTaskModal('\${col.id}')">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 1v8M1 5h8"/></svg>
          Add task
        </button>
      </div>\`;
  }).join('');
  html+=\`<div class="kb-newcol" onclick="newProj()"><span>+ New project</span></div>\`;
  g('kb-view').innerHTML=html;
}

function cardHTML(t){
  const proj=S.projects.find(p=>p.id===t.project);
  const cc=proj?proj.color:'#636b77';
  const av=AV[t.assignee];
  const od=t.end&&new Date(t.end)<new Date()&&t.status!=='done';
  return \`
    <div class="kcard" id="card-\${t.id}" style="--cc:\${cc}\${od?';border-color:var(--red)':''}"
      draggable="true"
      ondragstart="kbStart(event,'\${t.id}')"
      ondragend="kbEnd(event)"
      onclick="openTaskModal(null,'\${t.id}')">
      <div class="kcard-ttl">\${esc(t.title)}</div>
      <div class="kcard-ft">
        <span class="tag t-\${t.priority}">\${t.priority==='med'?'Medium':t.priority==='high'?'High':'Low'}</span>
        <span class="tag t-\${t.type}">\${t.type.charAt(0).toUpperCase()+t.type.slice(1)}</span>
        \${av?\`<div style="margin-left:auto"><div class="av" style="width:18px;height:18px;font-size:8px;background:\${av.bg};color:\${av.fg}">\${t.assignee}</div></div>\`:''}
      </div>
      \${t.progress>0&&t.progress<100?\`<div style="margin-top:7px;background:var(--bg5);border-radius:2px;height:2.5px"><div style="width:\${t.progress}%;height:100%;background:\${cc};border-radius:2px"></div></div>\`:''}
    </div>\`;
}

// ── DRAG DROP ──
function kbStart(e,tid){ S.drag=tid; setTimeout(()=>g('card-'+tid)?.classList.add('drag'),0); e.dataTransfer.effectAllowed='move'; }
function kbEnd(){ document.querySelectorAll('.kcard').forEach(c=>c.classList.remove('drag')); document.querySelectorAll('.kb-col').forEach(c=>c.classList.remove('drop-over')); }
function kbOver(e,col){ e.preventDefault(); g('col-'+col)?.classList.add('drop-over'); }
function kbLeave(e){ if(!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.classList.remove('drop-over'); }
function kbDrop(e,col){
  e.preventDefault();
  document.querySelectorAll('.kb-col').forEach(c=>c.classList.remove('drop-over'));
  if(!S.drag)return;
  const t=S.tasks.find(t=>t.id===S.drag);
  if(t&&t.status!==col){ t.status=col; saveMomentumState(); renderKanban(); renderGantt(); renderStats(); toast('Moved to '+COLS.find(c=>c.id===col).label); }
  S.drag=null;
}

// ── GANTT ──
function renderGantt(){
  const tasks=vis();
  const today=new Date();
  g('today-lbl').textContent=today.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  let minD=new Date(today.getFullYear(),today.getMonth()-1,1);
  let maxD=new Date(today.getFullYear(),today.getMonth()+5,1);
  tasks.forEach(t=>{
    if(t.start&&new Date(t.start)<minD) minD=new Date(t.start);
    if(t.end&&new Date(t.end)>maxD) maxD=new Date(t.end);
  });
  maxD=new Date(maxD.getFullYear(),maxD.getMonth()+1,1);
  const months=[]; let d=new Date(minD.getFullYear(),minD.getMonth(),1);
  while(d<=maxD){ months.push(new Date(d)); d=new Date(d.getFullYear(),d.getMonth()+1,1); }
  const span=maxD-minD;
  const pct=dt=>Math.max(0,Math.min(100,(new Date(dt)-minD)/span*100));
  const tp=pct(today);
  const projs=S.proj?S.projects.filter(p=>p.id===S.proj):S.projects;
  let rows='';
  projs.forEach((proj,pi)=>{
    const pt=tasks.filter(t=>t.project===proj.id);
    if(!pt.length)return;
    if(S.gtOpen[proj.id]===undefined) S.gtOpen[proj.id]=true;
    const open=S.gtOpen[proj.id];
    rows+=\`
      <div class="gt-row grp" style="animation-delay:\${pi*.03}s">
        <div class="gt-info">
          <span class="gt-toggle" onclick="toggleGt('\${proj.id}')">\${open?'▾':'▸'}</span>
          <span class="sb-dot" style="background:\${proj.color}"></span>
          <span class="gt-grp-name">\${esc(proj.name)}</span>
        </div>
        <div class="gt-tl"><div class="gt-today" style="left:\${tp}%"></div></div>
      </div>\`;
    if(open) pt.forEach((t,ti)=>{
      const av=AV[t.assignee];
      const sl=t.start?pct(t.start):5;
      const el=t.end?pct(t.end):sl+12;
      const bw=Math.max(el-sl,1.5);
      const c=BARC[t.status]||'#4da6f5';
      rows+=\`
        <div class="gt-row" style="animation-delay:\${(pi*5+ti)*.025}s" onclick="openTaskModal(null,'\${t.id}')">
          <div class="gt-info gt-ind">
            \${av?\`<div class="av" style="width:18px;height:18px;font-size:8px;background:\${av.bg};color:\${av.fg};flex-shrink:0">\${t.assignee}</div>\`:'<div style="width:18px;flex-shrink:0"></div>'}
            <div style="flex:1;min-width:0">
              <div class="gt-tname">\${esc(t.title)}</div>
              <div class="gt-tsub">\${t.progress}% · \${t.status}</div>
            </div>
          </div>
          <div class="gt-tl">
            <div class="gt-today" style="left:\${tp}%"></div>
            <div class="gt-bar" style="left:\${sl}%;width:\${bw}%;background:\${c};opacity:\${t.status==='done'?.45:1}">
              <div class="gt-bar-prog" style="width:\${t.progress}%"></div>
              <span class="gt-bar-txt">\${esc(t.title)}</span>
            </div>
          </div>
        </div>\`;
    });
  });
  g('gt-scroll').innerHTML=\`
    <div class="gt-grid">
      <div class="gt-thead">
        <div class="gt-lc">Task</div>
        <div class="gt-months">\${months.map(m=>\`<div class="gt-month">\${m.toLocaleDateString('en-US',{month:'short',year:'2-digit'})}</div>\`).join('')}</div>
      </div>
      \${rows}
    </div>\`;
}

function toggleGt(pid){ S.gtOpen[pid]=!S.gtOpen[pid]; renderGantt(); }
function setZoom(z,btn){ S.zoom=z; document.querySelectorAll('.zbtn').forEach(b=>b.classList.remove('act')); btn.classList.add('act'); renderGantt(); }

// ── VIEW SWITCH ──
function switchView(v,btn){
  S.view=v;
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('act'));
  document.querySelectorAll('.vtab').forEach(b=>b.classList.remove('act'));
  g(v+'-view').classList.add('act');
  btn.classList.add('act');
  if(v==='gt') renderGantt();
}

// ── TASK MODAL ──
function fillProjSelect(){
  g('f-proj').innerHTML=S.projects.map(p=>\`<option value="\${p.id}">\${esc(p.name)}</option>\`).join('');
}
function openTaskModal(defStatus, editId){
  fillProjSelect();
  if(editId){
    const t=S.tasks.find(t=>t.id===editId);
    if(!t)return;
    g('task-mttl').textContent='Edit Task';
    g('f-tid').value=editId;
    g('f-name').value=t.title;
    g('f-proj').value=t.project;
    g('f-status').value=t.status;
    g('f-pri').value=t.priority;
    g('f-type').value=t.type;
    g('f-assignee').value=t.assignee||'';
    g('f-pct').value=t.progress||0;
    g('f-start').value=t.start||'';
    g('f-end').value=t.end||'';
    g('task-del-btn').style.display='block';
  } else {
    g('task-mttl').textContent='Add Task';
    g('f-tid').value='';
    g('f-name').value='';
    g('f-status').value=defStatus||'todo';
    g('f-pri').value='med';
    g('f-type').value='feature';
    g('f-assignee').value='';
    g('f-pct').value='0';
    const now=new Date().toISOString().slice(0,10);
    g('f-start').value=now;
    const e2=new Date(); e2.setDate(e2.getDate()+14);
    g('f-end').value=e2.toISOString().slice(0,10);
    if(S.proj) g('f-proj').value=S.proj;
    g('task-del-btn').style.display='none';
  }
  g('task-ov').classList.add('open');
  setTimeout(()=>g('f-name').focus(),160);
}
function closeTaskModal(){ g('task-ov').classList.remove('open'); }
function saveTask(){
  const title=g('f-name').value.trim();
  if(!title){ g('f-name').focus(); return; }
  const eid=g('f-tid').value;
  const data={title,project:g('f-proj').value,status:g('f-status').value,priority:g('f-pri').value,type:g('f-type').value,assignee:g('f-assignee').value,progress:parseInt(g('f-pct').value)||0,start:g('f-start').value,end:g('f-end').value};
  if(eid){
    const i=S.tasks.findIndex(t=>t.id===eid);
    if(i>-1) S.tasks[i]={...S.tasks[i],...data};
    toast('Task updated');
  } else {
    data.id=uid(); S.tasks.push(data); toast('Task created');
  }
  saveMomentumState();
  closeTaskModal(); renderKanban(); renderGantt(); renderStats();
}
function deleteTask(){
  const eid=g('f-tid').value;
  if(!eid)return;
  const t=S.tasks.find(t=>t.id===eid);
  if(!t)return;
  closeTaskModal();
  confirm2('Delete task',\`Delete "\${t.title}"?\\nThis cannot be undone.\`,'Delete task',()=>{
    S.tasks=S.tasks.filter(t=>t.id!==eid);
    saveMomentumState();
    renderKanban(); renderGantt(); renderStats(); toast('Task deleted');
  });
}

// ── CONTEXT MENU ──
let _ctxPid=null;
function openCtx(e,pid){
  e.stopPropagation(); e.preventDefault();
  _ctxPid=pid;
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  const menu=g('ctx');
  menu.innerHTML=\`
    <div class="ci" data-a="settings"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="7" cy="7" r="2.5"/><path d="M7 1v2M7 11v2M1 7h2M11 7h2M3.1 3.1l1.4 1.4M9.5 9.5l1.4 1.4M9.5 3.1l-1.4 1.4M4.5 9.5l-1.4 1.4"/></svg>Settings</div>
    <div class="ci" data-a="rename"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M9.5 2l2.5 2.5-7 7H2.5V9l7-7z"/></svg>Rename</div>
    <div class="ctx-clrs">
      <div class="ctx-clrs-lbl">Color</div>
      <div class="ctx-clrs-row">\${COLORS.map(c=>\`<div class="sw\${proj.color===c?' sel':''}" style="background:\${c}" data-a="color" data-c="\${c}"></div>\`).join('')}</div>
    </div>
    <div class="ctx-sep"></div>
    <div class="ci" data-a="dup"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="4" y="4" width="8" height="8" rx="1"/><path d="M2 10V2h8"/></svg>Duplicate</div>
    <div class="ci" data-a="export"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M7 1v8M4.5 6l2.5 3 2.5-3M1 11v2h12v-2"/></svg>Export CSV</div>
    <div class="ctx-sep"></div>
    <div class="ci danger" data-a="del"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1.5 4h11M4.5 4V2.5h5V4M5.5 6.5v4M8.5 6.5v4M2.5 4l1 8h7l1-8"/></svg>Delete project</div>\`;
  const r=e.currentTarget.getBoundingClientRect();
  menu.style.display='block';
  const mw=192, mh=310;
  let left=r.right+4, top=r.top;
  if(left+mw>window.innerWidth) left=r.left-mw-4;
  if(top+mh>window.innerHeight) top=Math.max(8,window.innerHeight-mh-8);
  menu.style.left=left+'px'; menu.style.top=top+'px';
}

function closeCtx(){ g('ctx').style.display='none'; _ctxPid=null; }

g('ctx').addEventListener('click',e=>{
  e.stopPropagation();
  const el=e.target.closest('[data-a]');
  if(!el)return;
  const a=el.dataset.a, pid=_ctxPid;
  closeCtx();
  if(a==='settings') openProjModal(pid);
  else if(a==='rename') inlineRename(pid);
  else if(a==='color') setProjColor(pid,el.dataset.c);
  else if(a==='dup') dupProj(pid);
  else if(a==='export') exportProj(pid);
  else if(a==='del') deleteProj(pid);
});

document.addEventListener('click',e=>{
  if(!g('ctx').contains(e.target)) closeCtx();
});

// ── PROJECT ACTIONS ──
function newProj(){
  const name=prompt('New project name:');
  if(!name?.trim())return;
  const color=COLORS[S.projects.length%COLORS.length];
  S.projects.push({id:uid(),name:name.trim(),color,desc:''});
  saveMomentumState();
  renderSidebar(); toast('Project "'+name.trim()+'" created');
}

function inlineRename(pid){
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj){renamePrompt(pid);return;}
  const rows=g('proj-list').querySelectorAll('.sb-row');
  let targetLbl=null;
  rows.forEach(row=>{
    const more=row.querySelector('.sb-more');
    if(more&&more.getAttribute('onclick')&&more.getAttribute('onclick').includes(\`'\${pid}'\`)){
      targetLbl=row.querySelector('.sb-lbl');
    }
  });
  if(!targetLbl){renamePrompt(pid);return;}
  const inp=document.createElement('input');
  inp.className='sb-rename';
  inp.value=proj.name;
  targetLbl.replaceWith(inp);
  inp.focus(); inp.select();
  const commit=()=>{
    const v=inp.value.trim();
    if(v&&v!==proj.name){proj.name=v;saveMomentumState();toast('Renamed to "'+v+'"');}
    renderSidebar(); renderKanban(); renderGantt();
  };
  inp.addEventListener('blur',commit,{once:true});
  inp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){e.preventDefault();inp.blur();}
    if(e.key==='Escape'){inp.value=proj.name;inp.removeEventListener('blur',commit);inp.blur();renderSidebar();}
  });
}

function renamePrompt(pid){
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  const n=prompt('Rename project:',proj.name);
  if(n?.trim()&&n.trim()!==proj.name){
    proj.name=n.trim(); saveMomentumState(); renderSidebar(); renderKanban(); renderGantt(); toast('Renamed to "'+proj.name+'"');
  }
}

function setProjColor(pid,color){
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  proj.color=color;
  saveMomentumState();
  renderSidebar(); renderKanban(); renderGantt(); toast('Color updated');
}

function dupProj(pid){
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  const nid=uid();
  S.projects.push({...proj,id:nid,name:proj.name+' (copy)'});
  const nt=S.tasks.filter(t=>t.project===pid).map(t=>({...t,id:uid(),project:nid}));
  S.tasks.push(...nt);
  saveMomentumState();
  renderSidebar(); renderStats(); renderKanban(); renderGantt();
  toast(\`Duplicated with \${nt.length} task\${nt.length!==1?'s':''}\`);
}

function exportProj(pid){
  const proj=S.projects.find(p=>p.id===pid);
  const tasks=S.tasks.filter(t=>t.project===pid);
  const rows=[['Title','Status','Priority','Type','Assignee','Progress %','Start','End']];
  tasks.forEach(t=>rows.push([t.title,t.status,t.priority,t.type,t.assignee||'',t.progress,t.start||'',t.end||'']));
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);
  a.download=(proj?.name||'project').replace(/\\s+/g,'-').toLowerCase()+'.csv';
  a.click(); toast('CSV exported');
}

function deleteProj(pid){
  closeProjModal();
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  const tc=S.tasks.filter(t=>t.project===pid).length;
  const msg=tc>0
    ?\`Permanently delete "\${proj.name}" and its \${tc} task\${tc!==1?'s':''}? This cannot be undone.\`
    :\`Delete "\${proj.name}"? This cannot be undone.\`;
  confirm2('Delete project',msg,'Delete',()=>{
    S.projects=S.projects.filter(p=>p.id!==pid);
    S.tasks=S.tasks.filter(t=>t.project!==pid);
    if(S.proj===pid) S.proj=null;
    saveMomentumState();
    renderSidebar(); renderStats(); renderKanban(); renderGantt();
    toast(\`"\${proj.name}" deleted\`);
  });
}

// ── PROJECT MODAL ──
function openProjModal(pid){
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  g('pm-id').value=pid;
  g('proj-mttl').textContent=proj.name;
  g('pm-name').value=proj.name;
  g('pm-desc').value=proj.desc||'';
  g('pm-clrs').innerHTML=COLORS.map(c=>
    \`<div class="sw\${proj.color===c?' sel':''}" style="background:\${c}" data-c="\${c}" onclick="pmPickClr('\${c}')"></div>\`
  ).join('');
  const tasks=S.tasks.filter(t=>t.project===pid);
  const done=tasks.filter(t=>t.status==='done').length;
  const active=tasks.filter(t=>t.status==='inprogress').length;
  g('pm-stats').innerHTML=\`
    <div class="pst"><div class="pst-n">\${tasks.length}</div><div class="pst-l">Total</div></div>
    <div class="pst"><div class="pst-n" style="color:var(--accent)">\${done}</div><div class="pst-l">Done</div></div>
    <div class="pst"><div class="pst-n" style="color:var(--blue)">\${active}</div><div class="pst-l">Active</div></div>\`;
  g('proj-ov').classList.add('open');
  setTimeout(()=>g('pm-name').focus(),160);
}
function pmPickClr(c){ g('pm-clrs').querySelectorAll('.sw').forEach(s=>s.classList.toggle('sel',s.dataset.c===c)); }
function saveProjModal(){
  const pid=g('pm-id').value;
  const proj=S.projects.find(p=>p.id===pid);
  if(!proj)return;
  const name=g('pm-name').value.trim();
  if(!name)return;
  proj.name=name; proj.desc=g('pm-desc').value.trim();
  const sel=g('pm-clrs').querySelector('.sw.sel');
  if(sel) proj.color=sel.dataset.c;
  saveMomentumState();
  closeProjModal(); renderSidebar(); renderKanban(); renderGantt(); toast('Project saved');
}
function closeProjModal(){ g('proj-ov').classList.remove('open'); }

// ── CONFIRM DIALOG ──
let _confCb=null;
function confirm2(title,msg,okLabel,cb){
  _confCb=cb;
  g('conf-ttl').textContent=title;
  g('conf-msg').textContent=msg;
  g('conf-ok').textContent=okLabel;
  g('conf-ov').classList.add('open');
}
function confResolve(yes){
  g('conf-ov').classList.remove('open');
  if(yes&&_confCb) _confCb();
  _confCb=null;
}

// ── TOAST ──
let _tt;
function toast(msg){ g('toast-txt').textContent=msg; g('toast').classList.add('show'); clearTimeout(_tt); _tt=setTimeout(()=>g('toast').classList.remove('show'),2600); }

// ── KEYBOARD ──
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ closeTaskModal(); closeProjModal(); closeCtx(); confResolve(false); }
  if(e.key==='Enter'&&g('conf-ov').classList.contains('open')){ confResolve(true); }
  if((e.key==='n'||e.key==='N')&&!document.querySelector('.overlay.open')&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){ openTaskModal(); }
});

// ── BOOT ──
function syncActiveProject(force=false){
  const next=readMomentumState();
  const nextSig=JSON.stringify({projects:next.projects,tasks:next.tasks,proj:next.proj,view:next.view,zoom:next.zoom,gtOpen:next.gtOpen});
  const curSig=JSON.stringify({projects:S.projects,tasks:S.tasks,proj:S.proj,view:S.view,zoom:S.zoom,gtOpen:S.gtOpen});
  if(!force && nextSig===curSig) return;
  S={...next,drag:null};
  renderSidebar(); renderStats(); renderKanban(); renderGantt();
}
window.syncActiveProject=syncActiveProject;
syncActiveProject(true);
g('today-lbl').textContent=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
setInterval(()=>syncActiveProject(),2000);
<\/script>
</body>
</html>
`;function yg(){const{curPage:e,renderTick:t}=qu();return Je.useEffect(()=>{window.renderAll&&window.renderAll()},[e,t]),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"page on",id:"pg-projects",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"All Projects"}),s.jsx("div",{className:"sh-sub",children:"Manage multiple construction sites"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"project")},children:"+ New Project"})]}),s.jsx("div",{className:"proj-grid",id:"proj-grid"})]}),s.jsxs("div",{className:"page",id:"pg-dashboard",children:[s.jsxs("div",{className:"ceqa",id:"ceqa-banner",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[s.jsx("div",{style:{width:"9px",height:"9px",borderRadius:"50%",background:"var(--purple)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"12px",fontWeight:700,color:"var(--purple)"},children:"CEQA — Mitigated Negative Declaration · PRC §21080"}),s.jsx("div",{style:{fontSize:"10px",color:"var(--purple)",opacity:.75},id:"ceqa-sub",children:"Public Review closed 14 Jan 2026 · No unmitigated impacts"})]})]}),s.jsxs("div",{className:"ceqa-pills",children:[s.jsx("span",{className:"ceqa-pill",children:"✓ NOD Filed"}),s.jsx("span",{className:"ceqa-pill",children:"✓ City Cleared"})]})]}),s.jsx("div",{className:"metrics",id:"dash-metrics"}),s.jsxs("div",{className:"two-col",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"🏗 Works"}),s.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"works")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),s.jsx("div",{id:"d-works"})]}),s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"💰 Quotes"}),s.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"quotes")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),s.jsx("div",{id:"d-quotes"})]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"🏆 Milestones"}),s.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"milestones")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),s.jsx("div",{id:"d-ms"})]}),s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"🔍 Inspections"}),s.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"inspections")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),s.jsx("div",{id:"d-ins"})]})]})]})]}),s.jsxs("div",{className:"page",id:"pg-works",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Works at Site"}),s.jsx("div",{className:"sh-sub",children:"CBC 2022 · CalOSHA · ACI 318"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"work")},children:"+ Add Work"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsxs("span",{className:"ph-title",children:["🏗 Work Items ",s.jsx("span",{className:"ph-ct",id:"wc",children:"0"})]})}),s.jsx("div",{className:"tw",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"28%"},children:"Work Item"}),s.jsx("th",{children:"CBC Ref."}),s.jsx("th",{children:"Contractor"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Progress"}),s.jsx("th",{children:"Actions"})]})}),s.jsx("tbody",{id:"w-tbody"})]})})]})]}),s.jsxs("div",{className:"page",id:"pg-milestones",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Project Milestones"}),s.jsx("div",{className:"sh-sub",children:"CBC §105 · §110 · §111"})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportMilestonePDF)==null?void 0:n.call(window)},title:"Print / Save as PDF",children:"🖨 PDF"}),s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportMilestoneExcel)==null?void 0:n.call(window)},title:"Download Excel",children:"📊 Excel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"milestone")},children:"+ Add Milestone"})]})]}),s.jsxs("div",{className:"sum-grid",children:[s.jsxs("div",{className:"sum-card",children:[s.jsx("div",{className:"sum-v",id:"ms-done",style:{color:"var(--green)"},children:"0"}),s.jsx("div",{className:"sum-l",children:"Achieved"})]}),s.jsxs("div",{className:"sum-card",children:[s.jsx("div",{className:"sum-v",id:"ms-prog",style:{color:"var(--amber)"},children:"0"}),s.jsx("div",{className:"sum-l",children:"In Progress"})]}),s.jsxs("div",{className:"sum-card",children:[s.jsx("div",{className:"sum-v",id:"ms-up",style:{color:"var(--gray)"},children:"0"}),s.jsx("div",{className:"sum-l",children:"Upcoming"})]}),s.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--green)"},children:[s.jsx("div",{className:"sum-v",id:"ms-paid",style:{color:"var(--green)",fontSize:"18px"},children:"$0"}),s.jsx("div",{className:"sum-l",children:"✓ Paid"})]}),s.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--red)"},children:[s.jsx("div",{className:"sum-v",id:"ms-bal",style:{color:"var(--red)",fontSize:"18px"},children:"$0"}),s.jsx("div",{className:"sum-l",children:"Balance Due"})]}),s.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--navy)"},children:[s.jsx("div",{className:"sum-v",id:"ms-total",style:{color:"var(--navy)",fontSize:"18px"},children:"$0"}),s.jsx("div",{className:"sum-l",children:"Total Contract"})]})]}),s.jsxs("div",{className:"panel",style:{marginBottom:"18px"},children:[s.jsxs("div",{className:"ph",style:{background:"var(--navy)"},children:[s.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📒 Payment Ledger — All Milestones"}),s.jsx("span",{style:{fontSize:"11px",color:"#8AAAC8"},children:"Full breakdown of contract amounts, payments received & balance"})]}),s.jsx("div",{id:"ms-ledger"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsxs("span",{className:"ph-title",children:["🏆 Milestones ",s.jsx("span",{className:"ph-ct",id:"msc",children:"0"})]})}),s.jsx("div",{className:"tw",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"24%"},children:"Milestone"}),s.jsx("th",{children:"CBC Ref."}),s.jsx("th",{children:"Date"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Contract Amt."}),s.jsx("th",{children:"Progress Payments"}),s.jsx("th",{children:"Actions"})]})}),s.jsx("tbody",{id:"ms-tbody"})]})})]})]}),s.jsxs("div",{className:"page",id:"pg-quotes",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Quotes Received"}),s.jsx("div",{className:"sh-sub",children:"CSI Divisions · California Codes · Attachments"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"quote")},children:"+ Add Quote"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsxs("span",{className:"ph-title",children:["💰 Quotes ",s.jsx("span",{className:"ph-ct",id:"qc",children:"0"})]})}),s.jsx("div",{className:"tw",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{style:{width:"24%"},children:"Vendor / Scope"}),s.jsx("th",{children:"Code Ref."}),s.jsx("th",{children:"CSI"}),s.jsx("th",{children:"Amount"}),s.jsx("th",{children:"Date"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Files"}),s.jsx("th",{children:"Actions"})]})}),s.jsx("tbody",{id:"q-tbody"})]})}),s.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:s.jsxs("div",{style:{display:"flex",gap:"22px",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"10px",color:"var(--muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px"},children:"All Quotes"}),s.jsx("span",{className:"sum-v",id:"q-total",style:{fontSize:"15px",color:"var(--muted)"},children:"$0"})]}),s.jsx("div",{style:{width:"1px",height:"28px",background:"var(--border)"}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"10px",color:"var(--green)",fontWeight:700,textTransform:"uppercase",letterSpacing:".5px"},children:"✓ Approved Total"}),s.jsx("span",{className:"sum-v",id:"q-approved",style:{fontSize:"20px",color:"var(--green)"},children:"$0"})]})]})})]})]}),s.jsxs("div",{className:"page",id:"pg-plans",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Plans & Documents"}),s.jsx("div",{className:"sh-sub",children:"Drawings, permits, reports, and project files"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"plan")},children:"+ Upload Document"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsxs("span",{className:"ph-title",children:["📐 Documents ",s.jsx("span",{className:"ph-ct",id:"plc",children:"0"})]})}),s.jsx("div",{style:{padding:"16px"},id:"plans-wrap"})]})]}),s.jsxs("div",{className:"page",id:"pg-inspections",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Inspections Scheduled"}),s.jsx("div",{className:"sh-sub",children:"City of Cupertino Building Division · CalOSHA · CBC §110"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"inspection")},children:"+ Add Inspection"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsxs("span",{className:"ph-title",children:["🔍 Inspections ",s.jsx("span",{className:"ph-ct",id:"ic",children:"0"})]})}),s.jsx("div",{id:"ins-list"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsx("span",{className:"ph-title",children:"👤 Key Contacts"})}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Role"}),s.jsx("th",{children:"Name"}),s.jsx("th",{children:"Contact"}),s.jsx("th",{children:"AHJ"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"Building Division"}),s.jsx("td",{children:"John Park"}),s.jsx("td",{children:"(408) 777-3228"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Cupertino"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"Project EOR"}),s.jsx("td",{children:"Sarah Kim, SE"}),s.jsx("td",{children:"Bay Structural Group"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-teal",children:"Structural"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CalOSHA District"}),s.jsx("td",{children:"District Office"}),s.jsx("td",{children:"San Jose, CA"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-red",children:"CalOSHA"})})]})]})]})]})]}),s.jsxs("div",{className:"page",id:"pg-payments",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Payments"}),s.jsx("div",{className:"sh-sub",children:"Vendor contracts · Invoice milestones · Lien waivers"})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportPaymentLedgerPDF)==null?void 0:n.call(window)},title:"Print / Save as PDF",children:"🖨 Ledger PDF"}),s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportPaymentLedgerExcel)==null?void 0:n.call(window)},title:"Download Excel spreadsheet",children:"📊 Ledger Excel"})]})]}),s.jsxs("div",{id:"pay-export-bar",style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"9px",padding:"10px 16px",marginBottom:"14px",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:"Export per subcontractor:"}),s.jsx("div",{id:"sub-export-btns",style:{display:"flex",gap:"6px",flexWrap:"wrap"}})]}),s.jsx("div",{id:"pay-smart-search-bar",style:{display:"none",marginBottom:"16px"},children:s.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--border)",borderRadius:"10px",boxShadow:"var(--sh)",overflow:"hidden"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("span",{style:{fontSize:"18px",color:"var(--blue)"},children:"🔍"}),s.jsx("input",{id:"pay-smart-search",type:"text",placeholder:"Search vendor by name or trade…",onInput:()=>{var n;return(n=window.runPaySmartSearch)==null?void 0:n.call(window)},autoComplete:"off",style:{border:"none",outline:"none",fontSize:"14px",fontWeight:500,flex:1,background:"transparent",fontFamily:"'Barlow',sans-serif",color:"var(--text)"}}),s.jsx("button",{id:"pay-smart-clear",onClick:()=>{var n;return(n=window.clearPaySmartSearch)==null?void 0:n.call(window)},style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"5px",color:"var(--muted)",cursor:"pointer",fontSize:"12px",padding:"3px 9px"},children:"✕ Clear"})]}),s.jsx("div",{id:"pay-smart-results",style:{display:"none"}})]})}),s.jsx("div",{id:"pay-filter-bar",style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"9px",padding:"12px 16px",marginBottom:"14px"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"7px",flex:1,minWidth:"200px",background:"#fff",border:"1px solid var(--border)",borderRadius:"7px",padding:"5px 10px"},children:[s.jsx("span",{style:{color:"var(--muted)",fontSize:"14px"},children:"🔍"}),s.jsx("input",{id:"pay-search",type:"text",placeholder:"Search vendor name…",onInput:()=>{var n;return(n=window.filterPayVendors)==null?void 0:n.call(window)},style:{border:"none",outline:"none",fontSize:"12px",flex:1,background:"transparent"}}),s.jsx("button",{onClick:()=>{var n;return(n=window.clearPaySearch)==null?void 0:n.call(window)},style:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:"14px",padding:0},title:"Clear",children:"×"})]}),s.jsx("div",{id:"pay-vendor-checks",style:{display:"flex",flexWrap:"wrap",gap:"6px"}}),s.jsx("button",{onClick:()=>{var n;return(n=window.showAllPayVendors)==null?void 0:n.call(window)},className:"btn btn-ghost btn-xs",style:{fontSize:"10px"},children:"Show All"})]})}),s.jsx("div",{id:"pay-pie-panel",style:{display:"none",marginBottom:"18px"},children:s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsx("span",{className:"ph-title",children:"📊 Vendor Payment Status Overview"})}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"24px",padding:"16px 20px",flexWrap:"wrap"},children:[s.jsx("div",{id:"pay-pie-svg-wrap",style:{flexShrink:0,width:"180px",height:"180px",position:"relative"}}),s.jsx("div",{id:"pay-pie-legend",style:{flex:1,minWidth:"200px"}})]})]})}),s.jsxs("div",{className:"panel",id:"pay-ledger-panel",style:{display:"none",marginBottom:"18px"},children:[s.jsxs("div",{className:"ph",style:{background:"var(--navy)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[s.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📒 VENDOR PAYMENT LEDGER"}),s.jsx("span",{style:{fontSize:"10px",color:"#8AAAC8"},children:"Contract · Paid · Balance by vendor"})]}),s.jsxs("div",{style:{display:"flex",gap:"6px"},children:[s.jsx("button",{onClick:()=>{var n;return(n=window.exportVCPaymentLedgerPDF)==null?void 0:n.call(window)},className:"btn btn-xs",style:{background:"rgba(255,255,255,.13)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",fontSize:"10px"},children:"🖨 PDF"}),s.jsx("button",{onClick:()=>{var n;return(n=window.exportVCPaymentLedgerExcel)==null?void 0:n.call(window)},className:"btn btn-xs",style:{background:"rgba(255,255,255,.13)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",fontSize:"10px"},children:"📊 Excel"})]})]}),s.jsx("div",{id:"pay-ledger"})]}),s.jsx("div",{id:"pay-list"}),s.jsx("div",{id:"pay-trade-panel",style:{display:"none",marginTop:"4px"}}),s.jsxs("div",{id:"pay-empty",style:{display:"none"},className:"empty",children:[s.jsx("div",{className:"empty-ic",children:"💳"}),"No approved quotes yet. Mark a quote as Approved to start tracking payments."]})]}),s.jsxs("div",{className:"page",id:"pg-vendors",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Vendor Contracts"}),s.jsx("div",{className:"sh-sub",children:"Subcontractor agreements · Signed contracts · SOW documents"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"vendor")},children:"+ Add Vendor Contract"})]}),s.jsx("div",{id:"ven-content"})]}),s.jsxs("div",{className:"page",id:"pg-invoices",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Invoice Tracker"}),s.jsx("div",{className:"sh-sub",children:"Track invoices against contract · Due & paid amounts per subcontractor"})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportInvoicePDF)==null?void 0:n.call(window)},children:"🖨 PDF"}),s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportInvoiceExcel)==null?void 0:n.call(window)},children:"📊 Excel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"invoice")},children:"+ Add Invoice"})]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginBottom:"18px"},children:[s.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[s.jsx("div",{className:"mc-lbl",children:"Total Contract Value"}),s.jsx("div",{className:"mc-val",id:"inv-contract",style:{fontSize:"22px"},children:"$0"}),s.jsx("div",{className:"mc-sub",children:"All signed vendor contracts"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--blue)"},children:[s.jsx("div",{className:"mc-lbl",children:"Total Invoiced"}),s.jsx("div",{className:"mc-val",id:"inv-invoiced",style:{fontSize:"22px",color:"var(--blue)"},children:"$0"}),s.jsx("div",{className:"mc-sub",children:"Sum of all invoices"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[s.jsx("div",{className:"mc-lbl",children:"✓ Total Paid"}),s.jsx("div",{className:"mc-val",id:"inv-paid",style:{fontSize:"22px",color:"var(--green)"},children:"$0"}),s.jsx("div",{className:"mc-sub",children:"Invoices marked paid"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[s.jsx("div",{className:"mc-lbl",children:"Due / Outstanding"}),s.jsx("div",{className:"mc-val",id:"inv-due",style:{fontSize:"22px",color:"var(--red)"},children:"$0"}),s.jsx("div",{className:"mc-sub",children:"Invoiced but unpaid"})]})]}),s.jsx("div",{id:"inv-content"})]}),s.jsxs("div",{className:"page",id:"pg-checklist",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Project Checklist"}),s.jsx("div",{className:"sh-sub",children:"Tasks, punch lists, and pre-construction checklists"})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"chklist-cat")},children:"+ Add Category"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"chklist-item")},children:"+ Add Item"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap"},children:[s.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[s.jsx("div",{className:"mc-lbl",children:"Total Items"}),s.jsx("div",{className:"mc-val",id:"chk-total",style:{fontSize:"22px"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[s.jsx("div",{className:"mc-lbl",children:"✓ Complete"}),s.jsx("div",{className:"mc-val",id:"chk-done",style:{fontSize:"22px",color:"var(--green)"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--amber)"},children:[s.jsx("div",{className:"mc-lbl",children:"In Progress"}),s.jsx("div",{className:"mc-val",id:"chk-prog",style:{fontSize:"22px",color:"var(--amber)"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[s.jsx("div",{className:"mc-lbl",children:"Not Started"}),s.jsx("div",{className:"mc-val",id:"chk-open",style:{fontSize:"22px",color:"var(--red)"},children:"0"})]})]}),s.jsx("div",{id:"chk-content"})]}),s.jsxs("div",{className:"page",id:"pg-qaqc",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"QA/QC Log"}),s.jsx("div",{className:"sh-sub",children:"Quality assurance · Non-conformance reports · Observations"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"qaqc-item")},children:"+ Add QA/QC Entry"})]}),s.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap"},children:[s.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[s.jsx("div",{className:"mc-lbl",children:"Total Entries"}),s.jsx("div",{className:"mc-val",id:"qa-total",style:{fontSize:"22px"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[s.jsx("div",{className:"mc-lbl",children:"Open NCR"}),s.jsx("div",{className:"mc-val",id:"qa-ncr",style:{fontSize:"22px",color:"var(--red)"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[s.jsx("div",{className:"mc-lbl",children:"Closed"}),s.jsx("div",{className:"mc-val",id:"qa-closed",style:{fontSize:"22px",color:"var(--green)"},children:"0"})]}),s.jsxs("div",{className:"mc",style:{"--ac":"var(--amber)"},children:[s.jsx("div",{className:"mc-lbl",children:"Observations"}),s.jsx("div",{className:"mc-val",id:"qa-obs",style:{fontSize:"22px",color:"var(--amber)"},children:"0"})]})]}),s.jsx("div",{id:"qa-content"})]}),s.jsxs("div",{className:"page",id:"pg-compliance",children:[s.jsx("div",{className:"sh",children:s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Compliance Tracker"}),s.jsx("div",{className:"sh-sub",children:"Title 24 · CALGreen · CBC 2022"})]})}),s.jsxs("div",{className:"two-col",children:[s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"⚡ Title 24 Energy (Part 6)"}),s.jsx("span",{className:"ph-ct",children:"2025"})]}),s.jsx("div",{style:{padding:"10px 16px"},id:"t24-list"})]}),s.jsxs("div",{className:"panel",children:[s.jsxs("div",{className:"ph",children:[s.jsx("span",{className:"ph-title",children:"🌿 CALGreen Div 4 Mandatory"}),s.jsx("span",{className:"ph-ct",children:"2022"})]}),s.jsx("div",{style:{padding:"10px 16px"},id:"cg-list"})]})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsx("span",{className:"ph-title",children:"📋 Regulatory Summary"})}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Code"}),s.jsx("th",{children:"Description"}),s.jsx("th",{children:"Section"}),s.jsx("th",{children:"Status"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CBC 2022"}),s.jsx("td",{children:"California Building Code"}),s.jsx("td",{children:"All applicable"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Active"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CPC 2022"}),s.jsx("td",{children:"California Plumbing Code"}),s.jsx("td",{children:"§903 DWV"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Active"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CMC 2022"}),s.jsx("td",{children:"California Mechanical Code"}),s.jsx("td",{children:"Mechanical systems"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Active"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CEC 2022"}),s.jsx("td",{children:"California Electrical Code"}),s.jsx("td",{children:"All electrical"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Active"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CALGreen 2022"}),s.jsx("td",{children:"Green Building Standards"}),s.jsx("td",{children:"Div 4 Mandatory"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-amber",children:"In Progress"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"Title 24 Part 6"}),s.jsx("td",{children:"Energy Efficiency — 2025"}),s.jsx("td",{children:"Envelope/Mech/Lighting"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-amber",children:"In Progress"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CEQA"}),s.jsx("td",{children:"Environmental Quality Act"}),s.jsx("td",{children:"PRC §21080"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-green",children:"MND Approved"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"CalOSHA"}),s.jsx("td",{children:"Worker Safety — Title 8"}),s.jsx("td",{children:"§1735"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-blue",children:"Enforced"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"tn",children:"ASCE 7-22"}),s.jsx("td",{children:"Structural Loads — SDC D"}),s.jsx("td",{children:"Ch.11/12"}),s.jsx("td",{children:s.jsx("span",{className:"badge b-green",children:"Compliant"})})]})]})]})]})]}),s.jsxs("div",{className:"page",id:"pg-export",children:[s.jsx("div",{className:"sh",children:s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Export & Download"}),s.jsx("div",{className:"sh-sub",children:"Reports, backups, and attached files"})]})}),s.jsxs("div",{style:{marginBottom:"18px"},children:[s.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"15px",fontWeight:700,letterSpacing:".5px",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"📄 Export Document"}),s.jsxs("div",{className:"exp-grid",children:[s.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportPDF)==null?void 0:n.call(window)},style:{position:"relative"},children:[s.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📕"}),s.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"PDF Report"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".pdf — direct download"}),s.jsx("div",{style:{marginTop:"10px"},children:s.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--red-l)",color:"var(--red)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #F5C0C0"},children:"🖨 Print / Save as PDF"})})]}),s.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportWord)==null?void 0:n.call(window)},children:[s.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📘"}),s.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Word Document"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".doc — editable report"}),s.jsx("div",{style:{marginTop:"10px"},children:s.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--blue-l)",color:"var(--blue)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #B0D0F0"},children:"⬇ Download Word"})})]}),s.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportPPTX)==null?void 0:n.call(window)},children:[s.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📙"}),s.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"PowerPoint"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".pptx — presentation deck"}),s.jsx("div",{style:{marginTop:"10px"},children:s.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--amber-l)",color:"var(--amber)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #F5D9A0"},children:"⬇ Download PPTX"})})]})]})]}),s.jsxs("div",{style:{marginBottom:"18px"},children:[s.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"15px",fontWeight:700,letterSpacing:".5px",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"💾 Data & Files"}),s.jsxs("div",{className:"exp-grid",children:[s.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportJSON)==null?void 0:n.call(window)},children:[s.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:"📦"}),s.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Export Project Data"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:"JSON backup — re-importable"})]}),s.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportAllFiles)==null?void 0:n.call(window)},children:[s.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:"🗂"}),s.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Download All Files"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:"All attachments in this project"})]})]})]}),s.jsxs("div",{className:"panel",children:[s.jsx("div",{className:"ph",children:s.jsx("span",{className:"ph-title",children:"📂 Project Files"})}),s.jsx("div",{style:{padding:"16px"},id:"exp-files"})]}),s.jsxs("div",{className:"panel",style:{marginTop:0},children:[s.jsx("div",{className:"ph",children:s.jsx("span",{className:"ph-title",children:"📥 Import Project"})}),s.jsxs("div",{style:{padding:"16px"},children:[s.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginBottom:"10px"},children:"Restore a previously exported JSON backup."}),s.jsxs("label",{className:"btn btn-ghost",style:{cursor:"pointer"},children:["📂 Choose JSON File",s.jsx("input",{type:"file",accept:".json",onChange:n=>{var r;return(r=window.importJSON)==null?void 0:r.call(window,n.target)},style:{display:"none"}})]})]})]})]}),s.jsx("div",{className:"page",id:"pg-daily-tracker",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:s.jsx(Fo,{frameId:"daily-tracker-frame",title:"Daily Tracker",html:vg,isActive:e==="daily-tracker",onActivate:n=>{var r;return(r=n.syncActiveProject)==null?void 0:r.call(n)}})}),s.jsx("div",{className:"page",id:"pg-client-contract",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:s.jsx(Fo,{frameId:"client-contract-frame",title:"Client Contract",html:gg,isActive:e==="client-contract",onActivate:n=>{var r;return(r=n.syncActiveProject)==null?void 0:r.call(n)}})}),s.jsx("div",{className:"page",id:"pg-client-invoice",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:s.jsx(Fo,{frameId:"client-invoice-frame",title:"Client Invoice",html:xg,isActive:e==="client-invoice",onActivate:n=>{var r;return(r=n.syncActiveProject)==null?void 0:r.call(n)}})}),s.jsxs("div",{className:"page",id:"pg-settings",children:[s.jsx("div",{className:"sh",children:s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"⚙ Settings"}),s.jsx("div",{className:"sh-sub",children:"Email configuration · App preferences"})]})}),s.jsxs("div",{className:"panel",style:{maxWidth:"760px",marginBottom:"20px"},children:[s.jsx("div",{className:"ph",style:{background:"var(--navy)"},children:s.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📧 Email Setup — Direct Send via SMTP"})}),s.jsxs("div",{style:{padding:"20px 24px"},children:[s.jsxs("div",{style:{background:"var(--blue-l)",border:"1px solid #B0D0F0",borderRadius:"8px",padding:"12px 16px",marginBottom:"20px",fontSize:"12px",lineHeight:"1.8",color:"var(--navy)"},children:[s.jsx("strong",{children:"How to enable SMTP sending:"}),s.jsx("br",{}),"1. Start the Livio backend on ",s.jsx("code",{style:{background:"#e8f2fc",padding:"1px 4px",borderRadius:"3px"},children:"http://127.0.0.1:3001"}),s.jsx("br",{}),"2. Enter your SMTP server details below, or keep them blank if the backend already has them in ",s.jsx("code",{style:{background:"#e8f2fc",padding:"1px 4px",borderRadius:"3px"},children:"backend/.env"}),s.jsx("br",{}),"3. Use an app password for Gmail / Outlook when required by your mail provider",s.jsx("br",{}),"4. Save, then click ",s.jsx("strong",{children:"Send Test Email"})," to verify everything before emailing vendors or clients"]}),s.jsx("div",{id:"email-cfg-status",style:{marginBottom:"16px"}}),s.jsxs("div",{className:"fr",children:[s.jsx("label",{className:"fl",children:"Backend API Base"}),s.jsx("input",{className:"fi",id:"cfg-api-base",placeholder:"http://127.0.0.1:3001/api",autoComplete:"off"}),s.jsx("div",{style:{fontSize:"10px",color:"var(--muted)",marginTop:"3px"},children:"Leave as default unless your backend runs on a different URL"})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"SMTP Host"}),s.jsx("input",{className:"fi",id:"cfg-smtp-host",placeholder:"smtp.gmail.com",autoComplete:"off"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"SMTP Port"}),s.jsx("input",{className:"fi",id:"cfg-smtp-port",type:"number",placeholder:"587",autoComplete:"off"})]})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"SMTP Username"}),s.jsx("input",{className:"fi",id:"cfg-smtp-user",placeholder:"yourname@company.com",autoComplete:"off"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"SMTP Password"}),s.jsx("input",{className:"fi",id:"cfg-smtp-pass",type:"password",placeholder:"App password or SMTP password",autoComplete:"off"})]})]}),s.jsxs("div",{className:"fr",style:{display:"flex",alignItems:"center",gap:"10px"},children:[s.jsx("input",{id:"cfg-smtp-secure",type:"checkbox",style:{width:"16px",height:"16px",accentColor:"var(--blue)"}}),s.jsx("label",{className:"fl",htmlFor:"cfg-smtp-secure",style:{margin:0,cursor:"pointer"},children:"Use secure SMTP / SSL"})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"From Name"}),s.jsx("input",{className:"fi",id:"cfg-from-name",placeholder:"Livio Building Systems",autoComplete:"off"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Reply-To Email"}),s.jsx("input",{className:"fi",id:"cfg-from-email",type:"email",placeholder:"billing@company.com"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[s.jsx("button",{onClick:()=>{var n;return(n=window.saveEmailConfig)==null?void 0:n.call(window)},className:"btn btn-navy",style:{padding:"9px 22px"},children:"💾 Save Email Settings"}),s.jsx("button",{onClick:()=>{var n;return(n=window.testEmailConfig)==null?void 0:n.call(window)},className:"btn btn-ghost",style:{padding:"9px 22px"},children:"🧪 Send Test Email"}),s.jsx("button",{onClick:()=>{var n;return(n=window.clearEmailConfig)==null?void 0:n.call(window)},className:"btn",style:{padding:"9px 16px",background:"var(--red-l)",color:"var(--red)",border:"1px solid #F5B8B8",marginLeft:"auto"},children:"🗑 Clear"})]})]})]})]}),s.jsx("div",{className:"page",id:"pg-momentum",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:s.jsx(Fo,{frameId:"momentum-frame",title:"Momentum",html:hg,isActive:e==="momentum",onActivate:n=>{var r;return(r=n.syncActiveProject)==null?void 0:r.call(n)}})}),s.jsxs("div",{className:"page",id:"pg-vendor-directory",children:[s.jsxs("div",{className:"sh",children:[s.jsxs("div",{children:[s.jsx("div",{className:"sh-title",children:"Vendor Directory"}),s.jsx("div",{className:"sh-sub",children:"Subcontractor profiles · Payment details · License & banking info"})]}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openVDirModal)==null?void 0:n.call(window)},children:"+ Add Vendor"})]}),s.jsx("div",{id:"vdir-content"})]})]})}const bg={},$l="livio_v1",vc="livio_v1_browser_backup",Ss=["#1A6BC4","#2D6A0F","#A86200","#9B1F1F","#0D6E58","#4A3FB0","#555451","#7A3535"];function Al(e){const t=String(e||"").trim().toLowerCase();return t==="127.0.0.1"||t==="localhost"}function wg(){return typeof window>"u"||!window.location?!1:Al(window.location.hostname)}function ln(){return wg()}function pr(){return!ln()}function Gu(){return{projects:[],activeId:null,activeProjectId:null,vendorDirectory:[],users:[],roles:[],perms:{},passwordResets:{},deletedProjectIds:[]}}function Cg(){return{...Gu(),projects:[JSON.parse(JSON.stringify(Qu))],activeId:"proj_madera",activeProjectId:"proj_madera"}}function Yu(){if(!(typeof localStorage>"u"))try{const e=localStorage.getItem($l);e&&!localStorage.getItem(vc)&&localStorage.setItem(vc,e)}catch{}}const Sg={cupertino:{county:"Santa Clara County",state:"CA",zip:"95014",prefix:"CUPR"},"san jose":{county:"Santa Clara County",state:"CA",zip:"95101",prefix:"SJBP"},"santa clara":{county:"Santa Clara County",state:"CA",zip:"95050",prefix:"SCLR"},sunnyvale:{county:"Santa Clara County",state:"CA",zip:"94086",prefix:"SVBP"},"mountain view":{county:"Santa Clara County",state:"CA",zip:"94040",prefix:"MVBP"},"palo alto":{county:"Santa Clara County",state:"CA",zip:"94301",prefix:"PABP"},"los altos":{county:"Santa Clara County",state:"CA",zip:"94022",prefix:"LABP"},"los altos hills":{county:"Santa Clara County",state:"CA",zip:"94022",prefix:"LAHB"},campbell:{county:"Santa Clara County",state:"CA",zip:"95008",prefix:"CMPB"},"los gatos":{county:"Santa Clara County",state:"CA",zip:"95030",prefix:"LGBP"},saratoga:{county:"Santa Clara County",state:"CA",zip:"95070",prefix:"SRBP"},milpitas:{county:"Santa Clara County",state:"CA",zip:"95035",prefix:"MLBP"},gilroy:{county:"Santa Clara County",state:"CA",zip:"95020",prefix:"GLBP"},"morgan hill":{county:"Santa Clara County",state:"CA",zip:"95037",prefix:"MHBP"},"monte sereno":{county:"Santa Clara County",state:"CA",zip:"95030",prefix:"MSBP"},"san mateo":{county:"San Mateo County",state:"CA",zip:"94401",prefix:"SMTB"},"redwood city":{county:"San Mateo County",state:"CA",zip:"94061",prefix:"RWBP"},"menlo park":{county:"San Mateo County",state:"CA",zip:"94025",prefix:"MPBP"},"foster city":{county:"San Mateo County",state:"CA",zip:"94404",prefix:"FCBP"},burlingame:{county:"San Mateo County",state:"CA",zip:"94010",prefix:"BLBP"},"daly city":{county:"San Mateo County",state:"CA",zip:"94014",prefix:"DCBP"},"south san francisco":{county:"San Mateo County",state:"CA",zip:"94080",prefix:"SSFB"},"san carlos":{county:"San Mateo County",state:"CA",zip:"94070",prefix:"SCBP"},belmont:{county:"San Mateo County",state:"CA",zip:"94002",prefix:"BLMB"},"half moon bay":{county:"San Mateo County",state:"CA",zip:"94019",prefix:"HMBB"},millbrae:{county:"San Mateo County",state:"CA",zip:"94030",prefix:"MLRB"},"san bruno":{county:"San Mateo County",state:"CA",zip:"94066",prefix:"SBRB"},pacifica:{county:"San Mateo County",state:"CA",zip:"94044",prefix:"PCFB"},"east palo alto":{county:"San Mateo County",state:"CA",zip:"94303",prefix:"EPAB"},atherton:{county:"San Mateo County",state:"CA",zip:"94027",prefix:"ATHN"},woodside:{county:"San Mateo County",state:"CA",zip:"94062",prefix:"WDSB"},"portola valley":{county:"San Mateo County",state:"CA",zip:"94028",prefix:"PVBP"},oakland:{county:"Alameda County",state:"CA",zip:"94601",prefix:"OAKB"},fremont:{county:"Alameda County",state:"CA",zip:"94536",prefix:"FRBP"},hayward:{county:"Alameda County",state:"CA",zip:"94541",prefix:"HWBP"},berkeley:{county:"Alameda County",state:"CA",zip:"94710",prefix:"BKBP"},"san leandro":{county:"Alameda County",state:"CA",zip:"94577",prefix:"SLBP"},newark:{county:"Alameda County",state:"CA",zip:"94560",prefix:"NWKB"},"union city":{county:"Alameda County",state:"CA",zip:"94587",prefix:"UCBP"},livermore:{county:"Alameda County",state:"CA",zip:"94550",prefix:"LVRB"},pleasanton:{county:"Alameda County",state:"CA",zip:"94566",prefix:"PLSB"},dublin:{county:"Alameda County",state:"CA",zip:"94568",prefix:"DBLB"},alameda:{county:"Alameda County",state:"CA",zip:"94501",prefix:"ALMB"},emeryville:{county:"Alameda County",state:"CA",zip:"94608",prefix:"EMRB"},albany:{county:"Alameda County",state:"CA",zip:"94706",prefix:"ALBX"},piedmont:{county:"Alameda County",state:"CA",zip:"94611",prefix:"PDMB"},"san francisco":{county:"San Francisco County",state:"CA",zip:"94103",prefix:"SFDB"},"walnut creek":{county:"Contra Costa County",state:"CA",zip:"94596",prefix:"WCBP"},concord:{county:"Contra Costa County",state:"CA",zip:"94520",prefix:"CNBP"},richmond:{county:"Contra Costa County",state:"CA",zip:"94801",prefix:"RCBP"},antioch:{county:"Contra Costa County",state:"CA",zip:"94509",prefix:"ATCB"},pittsburg:{county:"Contra Costa County",state:"CA",zip:"94565",prefix:"PTBP"},"san ramon":{county:"Contra Costa County",state:"CA",zip:"94582",prefix:"SRNB"},danville:{county:"Contra Costa County",state:"CA",zip:"94526",prefix:"DNVB"},martinez:{county:"Contra Costa County",state:"CA",zip:"94553",prefix:"MRTZ"},"el cerrito":{county:"Contra Costa County",state:"CA",zip:"94530",prefix:"ELCB"},hercules:{county:"Contra Costa County",state:"CA",zip:"94547",prefix:"HRCB"},brentwood:{county:"Contra Costa County",state:"CA",zip:"94513",prefix:"BTWB"},oakley:{county:"Contra Costa County",state:"CA",zip:"94561",prefix:"OKLY"},orinda:{county:"Contra Costa County",state:"CA",zip:"94563",prefix:"ORNB"},moraga:{county:"Contra Costa County",state:"CA",zip:"94556",prefix:"MRGB"},"san rafael":{county:"Marin County",state:"CA",zip:"94901",prefix:"SRFB"},novato:{county:"Marin County",state:"CA",zip:"94945",prefix:"NVTB"},"mill valley":{county:"Marin County",state:"CA",zip:"94941",prefix:"MVLB"},"san anselmo":{county:"Marin County",state:"CA",zip:"94960",prefix:"SANB"},fairfax:{county:"Marin County",state:"CA",zip:"94930",prefix:"FFXB"},"corte madera":{county:"Marin County",state:"CA",zip:"94925",prefix:"CMBP"},tiburon:{county:"Marin County",state:"CA",zip:"94920",prefix:"TBRN"},sausalito:{county:"Marin County",state:"CA",zip:"94965",prefix:"SLTB"},"santa rosa":{county:"Sonoma County",state:"CA",zip:"95401",prefix:"SNRB"},petaluma:{county:"Sonoma County",state:"CA",zip:"94952",prefix:"PTLB"},"rohnert park":{county:"Sonoma County",state:"CA",zip:"94928",prefix:"RPKB"},windsor:{county:"Sonoma County",state:"CA",zip:"95492",prefix:"WDSB"},healdsburg:{county:"Sonoma County",state:"CA",zip:"95448",prefix:"HLDB"},napa:{county:"Napa County",state:"CA",zip:"94559",prefix:"NAPB"},"american canyon":{county:"Napa County",state:"CA",zip:"94503",prefix:"ACNB"},vallejo:{county:"Solano County",state:"CA",zip:"94590",prefix:"VLJB"},fairfield:{county:"Solano County",state:"CA",zip:"94533",prefix:"FFLB"},vacaville:{county:"Solano County",state:"CA",zip:"95688",prefix:"VCVB"},benicia:{county:"Solano County",state:"CA",zip:"94510",prefix:"BNCB"},dixon:{county:"Solano County",state:"CA",zip:"95620",prefix:"DIXB"},"los angeles":{county:"Los Angeles County",state:"CA",zip:"90001",prefix:"LABC"},"long beach":{county:"Los Angeles County",state:"CA",zip:"90801",prefix:"LBBP"},glendale:{county:"Los Angeles County",state:"CA",zip:"91201",prefix:"GLDB"},pasadena:{county:"Los Angeles County",state:"CA",zip:"91101",prefix:"PSDB"},torrance:{county:"Los Angeles County",state:"CA",zip:"90501",prefix:"TRRB"},burbank:{county:"Los Angeles County",state:"CA",zip:"91501",prefix:"BRBP"},"santa monica":{county:"Los Angeles County",state:"CA",zip:"90401",prefix:"STMB"},inglewood:{county:"Los Angeles County",state:"CA",zip:"90301",prefix:"INGLB"},hawthorne:{county:"Los Angeles County",state:"CA",zip:"90250",prefix:"HWTH"},"el monte":{county:"Los Angeles County",state:"CA",zip:"91731",prefix:"ELMB"},pomona:{county:"Los Angeles County",state:"CA",zip:"91766",prefix:"PMNB"},carson:{county:"Los Angeles County",state:"CA",zip:"90745",prefix:"CRSNB"},compton:{county:"Los Angeles County",state:"CA",zip:"90220",prefix:"CMPB"},downey:{county:"Los Angeles County",state:"CA",zip:"90240",prefix:"DWNB"},norwalk:{county:"Los Angeles County",state:"CA",zip:"90650",prefix:"NWKB"},"west covina":{county:"Los Angeles County",state:"CA",zip:"91790",prefix:"WCVB"},alhambra:{county:"Los Angeles County",state:"CA",zip:"91801",prefix:"ALHB"},whittier:{county:"Los Angeles County",state:"CA",zip:"90601",prefix:"WHTB"},"beverly hills":{county:"Los Angeles County",state:"CA",zip:"90210",prefix:"BVHB"},"culver city":{county:"Los Angeles County",state:"CA",zip:"90230",prefix:"CCIB"},"west hollywood":{county:"Los Angeles County",state:"CA",zip:"90046",prefix:"WHWB"},calabasas:{county:"Los Angeles County",state:"CA",zip:"91302",prefix:"CLBB"},"santa clarita":{county:"Los Angeles County",state:"CA",zip:"91350",prefix:"SCLB"},lancaster:{county:"Los Angeles County",state:"CA",zip:"93534",prefix:"LNCB"},palmdale:{county:"Los Angeles County",state:"CA",zip:"93550",prefix:"PLMB"},"el segundo":{county:"Los Angeles County",state:"CA",zip:"90245",prefix:"ELGB"},"manhattan beach":{county:"Los Angeles County",state:"CA",zip:"90266",prefix:"MNHB"},"hermosa beach":{county:"Los Angeles County",state:"CA",zip:"90254",prefix:"HRMB"},"redondo beach":{county:"Los Angeles County",state:"CA",zip:"90277",prefix:"RDBB"},anaheim:{county:"Orange County",state:"CA",zip:"92801",prefix:"ANHB"},irvine:{county:"Orange County",state:"CA",zip:"92602",prefix:"IRVB"},"santa ana":{county:"Orange County",state:"CA",zip:"92701",prefix:"SNAB"},"huntington beach":{county:"Orange County",state:"CA",zip:"92647",prefix:"HNBB"},"garden grove":{county:"Orange County",state:"CA",zip:"92840",prefix:"GDGB"},fullerton:{county:"Orange County",state:"CA",zip:"92831",prefix:"FLTB"},orange:{county:"Orange County",state:"CA",zip:"92856",prefix:"ORGB"},"newport beach":{county:"Orange County",state:"CA",zip:"92660",prefix:"NPBB"},"costa mesa":{county:"Orange County",state:"CA",zip:"92626",prefix:"CSMB"},"mission viejo":{county:"Orange County",state:"CA",zip:"92691",prefix:"MVJB"},"lake forest":{county:"Orange County",state:"CA",zip:"92630",prefix:"LFSTB"},"yorba linda":{county:"Orange County",state:"CA",zip:"92886",prefix:"YRLB"},tustin:{county:"Orange County",state:"CA",zip:"92780",prefix:"TSTB"},"laguna niguel":{county:"Orange County",state:"CA",zip:"92677",prefix:"LGNB"},"aliso viejo":{county:"Orange County",state:"CA",zip:"92656",prefix:"ALVB"},"rancho santa margarita":{county:"Orange County",state:"CA",zip:"92688",prefix:"RSMB"},"laguna hills":{county:"Orange County",state:"CA",zip:"92653",prefix:"LGHB"},brea:{county:"Orange County",state:"CA",zip:"92821",prefix:"BREB"},"buena park":{county:"Orange County",state:"CA",zip:"90620",prefix:"BNPB"},placentia:{county:"Orange County",state:"CA",zip:"92870",prefix:"PLCB"},"san diego":{county:"San Diego County",state:"CA",zip:"92101",prefix:"SDBP"},"chula vista":{county:"San Diego County",state:"CA",zip:"91910",prefix:"CVBP"},oceanside:{county:"San Diego County",state:"CA",zip:"92054",prefix:"OCNB"},escondido:{county:"San Diego County",state:"CA",zip:"92025",prefix:"ESBB"},"el cajon":{county:"San Diego County",state:"CA",zip:"92020",prefix:"ELCB"},carlsbad:{county:"San Diego County",state:"CA",zip:"92008",prefix:"CLSB"},vista:{county:"San Diego County",state:"CA",zip:"92083",prefix:"VSTB"},"san marcos":{county:"San Diego County",state:"CA",zip:"92069",prefix:"SNMB"},encinitas:{county:"San Diego County",state:"CA",zip:"92024",prefix:"ENCB"},"national city":{county:"San Diego County",state:"CA",zip:"91950",prefix:"NCIB"},poway:{county:"San Diego County",state:"CA",zip:"92064",prefix:"POWB"},santee:{county:"San Diego County",state:"CA",zip:"92071",prefix:"SNTB"},"la mesa":{county:"San Diego County",state:"CA",zip:"91941",prefix:"LMSB"},"lemon grove":{county:"San Diego County",state:"CA",zip:"91945",prefix:"LGRB"},coronado:{county:"San Diego County",state:"CA",zip:"92118",prefix:"CRNB"},"solana beach":{county:"San Diego County",state:"CA",zip:"92075",prefix:"SLBB"},"del mar":{county:"San Diego County",state:"CA",zip:"92014",prefix:"DLMB"},sacramento:{county:"Sacramento County",state:"CA",zip:"95814",prefix:"SACB"},"elk grove":{county:"Sacramento County",state:"CA",zip:"95757",prefix:"EGVB"},folsom:{county:"Sacramento County",state:"CA",zip:"95630",prefix:"FLSB"},"rancho cordova":{county:"Sacramento County",state:"CA",zip:"95670",prefix:"RCDB"},"citrus heights":{county:"Sacramento County",state:"CA",zip:"95610",prefix:"CTHB"},galt:{county:"Sacramento County",state:"CA",zip:"95632",prefix:"GLTB"},fresno:{county:"Fresno County",state:"CA",zip:"93701",prefix:"FRSB"},clovis:{county:"Fresno County",state:"CA",zip:"93612",prefix:"CLVB"},sanger:{county:"Fresno County",state:"CA",zip:"93657",prefix:"SNGB"},riverside:{county:"Riverside County",state:"CA",zip:"92501",prefix:"RVSB"},"moreno valley":{county:"Riverside County",state:"CA",zip:"92553",prefix:"MVLB"},corona:{county:"Riverside County",state:"CA",zip:"92879",prefix:"CRNB"},temecula:{county:"Riverside County",state:"CA",zip:"92590",prefix:"TMCB"},"palm springs":{county:"Riverside County",state:"CA",zip:"92262",prefix:"PSPB"},"cathedral city":{county:"Riverside County",state:"CA",zip:"92234",prefix:"CTCB"},"palm desert":{county:"Riverside County",state:"CA",zip:"92260",prefix:"PLDB"},indio:{county:"Riverside County",state:"CA",zip:"92201",prefix:"INDB"},murrieta:{county:"Riverside County",state:"CA",zip:"92562",prefix:"MRRB"},"lake elsinore":{county:"Riverside County",state:"CA",zip:"92530",prefix:"LEBP"},"san bernardino":{county:"San Bernardino County",state:"CA",zip:"92401",prefix:"SNBB"},fontana:{county:"San Bernardino County",state:"CA",zip:"92335",prefix:"FNTB"},"rancho cucamonga":{county:"San Bernardino County",state:"CA",zip:"91730",prefix:"RCBP"},ontario:{county:"San Bernardino County",state:"CA",zip:"91761",prefix:"ONTB"},victorville:{county:"San Bernardino County",state:"CA",zip:"92392",prefix:"VCVB"},rialto:{county:"San Bernardino County",state:"CA",zip:"92376",prefix:"RLTB"},colton:{county:"San Bernardino County",state:"CA",zip:"92324",prefix:"CLTB"},chino:{county:"San Bernardino County",state:"CA",zip:"91710",prefix:"CHNB"},upland:{county:"San Bernardino County",state:"CA",zip:"91784",prefix:"UPLB"},redlands:{county:"San Bernardino County",state:"CA",zip:"92373",prefix:"RDLB"},highland:{county:"San Bernardino County",state:"CA",zip:"92346",prefix:"HLDB"},"chino hills":{county:"San Bernardino County",state:"CA",zip:"91709",prefix:"CHHB"},montclair:{county:"San Bernardino County",state:"CA",zip:"91763",prefix:"MTCB"},oxnard:{county:"Ventura County",state:"CA",zip:"93030",prefix:"OXNB"},ventura:{county:"Ventura County",state:"CA",zip:"93001",prefix:"VNTB"},"thousand oaks":{county:"Ventura County",state:"CA",zip:"91360",prefix:"TOKB"},"simi valley":{county:"Ventura County",state:"CA",zip:"93063",prefix:"SMVB"},camarillo:{county:"Ventura County",state:"CA",zip:"93010",prefix:"CMLB"},moorpark:{county:"Ventura County",state:"CA",zip:"93021",prefix:"MPKB"},"santa barbara":{county:"Santa Barbara County",state:"CA",zip:"93101",prefix:"SBRB"},phoenix:{county:"Maricopa County",state:"AZ",zip:"85001",prefix:"PHXB"},scottsdale:{county:"Maricopa County",state:"AZ",zip:"85251",prefix:"SCTB"},tempe:{county:"Maricopa County",state:"AZ",zip:"85281",prefix:"TMPB"},mesa:{county:"Maricopa County",state:"AZ",zip:"85201",prefix:"MESB"},chandler:{county:"Maricopa County",state:"AZ",zip:"85224",prefix:"CHNB"},tucson:{county:"Pima County",state:"AZ",zip:"85701",prefix:"TCSB"},"las vegas":{county:"Clark County",state:"NV",zip:"89101",prefix:"LVBP"},henderson:{county:"Clark County",state:"NV",zip:"89002",prefix:"HNDB"},reno:{county:"Washoe County",state:"NV",zip:"89501",prefix:"RNOB"},seattle:{county:"King County",state:"WA",zip:"98101",prefix:"SETB"},bellevue:{county:"King County",state:"WA",zip:"98004",prefix:"BLVB"},tacoma:{county:"Pierce County",state:"WA",zip:"98401",prefix:"TACB"},portland:{county:"Multnomah County",state:"OR",zip:"97201",prefix:"PRTB"},beaverton:{county:"Washington County",state:"OR",zip:"97005",prefix:"BVTB"},houston:{county:"Harris County",state:"TX",zip:"77001",prefix:"HSTB"},austin:{county:"Travis County",state:"TX",zip:"78701",prefix:"AUSBP"},dallas:{county:"Dallas County",state:"TX",zip:"75201",prefix:"DLSB"},"san antonio":{county:"Bexar County",state:"TX",zip:"78201",prefix:"SATB"},miami:{county:"Miami-Dade County",state:"FL",zip:"33101",prefix:"MIAB"},orlando:{county:"Orange County",state:"FL",zip:"32801",prefix:"ORLB"},tampa:{county:"Hillsborough County",state:"FL",zip:"33601",prefix:"TMPB"},"new york":{county:"New York County",state:"NY",zip:"10001",prefix:"NYCB"},brooklyn:{county:"Kings County",state:"NY",zip:"11201",prefix:"BRKB"},bronx:{county:"Bronx County",state:"NY",zip:"10451",prefix:"BRNB"},queens:{county:"Queens County",state:"NY",zip:"11354",prefix:"QNSB"},"staten island":{county:"Richmond County",state:"NY",zip:"10301",prefix:"STIB"}},Mt={},R=e=>"$"+Number(e||0).toLocaleString(),J=e=>{if(!e)return"—";try{return new Date(e+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return e}},vo=e=>{if(!e)return"—";const[t,n]=e.split(":").map(Number);return`${t%12||12}:${String(n).padStart(2,"0")} ${t>=12?"PM":"AM"}`},ze=()=>"x"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),se="Livio Building Systems",K="121 Main St #563, Los Altos, California (CA) 94022",Nn="ap@golivio.com",ae=e=>(e==null?void 0:e.address)||(e==null?void 0:e.clientAddr)||"—",qi=()=>`${se}
${K}
Reply Email: ${Nn}`;function nr(e){const t=String(e||"").trim().toLowerCase();if(!t)return"";try{const o=(typeof xt=="function"?xt():[]).find(i=>{const a=String((i==null?void 0:i.company)||"").trim().toLowerCase(),c=String((i==null?void 0:i.name)||"").trim().toLowerCase();return!!(i!=null&&i.email)&&(a===t||c===t)});if(o!=null&&o.email)return String(o.email).trim()}catch{}const n=Array.isArray(L==null?void 0:L.projects)?L.projects:[];for(const r of n)for(const o of(r==null?void 0:r.vendors)||[])if(String((o==null?void 0:o.vendor)||"").trim().toLowerCase()===t&&(o!=null&&o.vendorEmail))return String(o.vendorEmail).trim();return""}const Nt=(e=new Date)=>{const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`},Dl=e=>e<1024?e+"B":e<1048576?(e/1024).toFixed(1)+"KB":(e/1048576).toFixed(1)+"MB",dt=e=>({pdf:"📄",dwg:"📐",dxf:"📐",png:"🖼",jpg:"🖼",jpeg:"🖼",xlsx:"📊",xls:"📊",docx:"📝",doc:"📝",zip:"🗜",rvt:"🏗",ifc:"🏗"})[e.split(".").pop().toLowerCase()]||"📎",h=e=>document.getElementById(e),_=e=>{const t=h(e);return t?t.value.trim():""},j=(e,t=2600)=>{const n=h("toast");n.textContent=e,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),t)};function wn(e){const n={active:{cls:"b-blue",lbl:"Active"},inprogress:{cls:"b-amber",lbl:"In Progress"},starting:{cls:"b-teal",lbl:"Starting"},hold:{cls:"b-gray",lbl:"On Hold"},caloshahold:{cls:"b-red",lbl:"CalOSHA Hold"},complete:{cls:"b-green",lbl:"Complete"},done:{cls:"b-green",lbl:"Done"},upcoming:{cls:"b-gray",lbl:"Upcoming"},approved:{cls:"b-green",lbl:"Approved"},review:{cls:"b-blue",lbl:"Under Review"},new:{cls:"b-teal",lbl:"New"},negotiating:{cls:"b-amber",lbl:"Negotiating"}}[e]||{cls:"b-gray",lbl:e};return`<span class="badge ${n.cls}">${n.lbl}</span>`}function Si(e,t){return e==="complete"||e==="done"?"var(--green-m)":e==="caloshahold"?"var(--red-m)":e==="starting"?"var(--teal-m)":t>=70?"var(--blue-m)":"var(--amber-m)"}const Qu={id:"proj_madera",name:"1510 Madera Drive",street:"1510 Madera Drive",city:"Cupertino",county:"Santa Clara County",state:"CA",zip:"95014",address:"1510 Madera Drive, Cupertino, CA 95014",permit:"CUPR-2025-00891",apn:"326-10-044",type:"R-3 Single-Family Residential",color:"#1A6BC4",createdAt:"2025-11-01",works:[{id:"w1",name:"Shoring & Excavation",ref:"CBC §1804",contractor:"GeoDigit Inc.",status:"caloshahold",pct:40,notes:"Zone B · Soils report on file per CBC 1803.6"},{id:"w2",name:"Concrete Foundation Walls",ref:"CBC §1901",contractor:"ConcretePro LLC",status:"active",pct:78,notes:"ACI 318-19 mix design · Seismic Zone D"},{id:"w3",name:"Structural Steel Erection",ref:"CBC §2205",contractor:"Apex Steel",status:"active",pct:61,notes:"AISC 341 seismic provisions · SMRF system"},{id:"w4",name:"Rough Framing — Level 3",ref:"CBC §2308",contractor:"Bay Builders",status:"inprogress",pct:55,notes:"Hold-down connectors per SDPWS 2021"},{id:"w5",name:"MEP Rough-In Levels 1–2",ref:"CPC · CMC · CEC",contractor:"Voltline MEP",status:"inprogress",pct:44,notes:"CALGreen 4.303.1 fixture requirements"},{id:"w6",name:"Exterior Waterproofing",ref:"CBC §1805",contractor:"Shreeji Waterproofing",status:"complete",pct:100,notes:"Below-grade dampproofing · Basement walls"},{id:"w7",name:"Fire Sprinkler Rough-In",ref:"CBC §903/NFPA 13",contractor:"CalFire Suppression",status:"starting",pct:12,notes:"High-rise provisions · CFC §903.3.1.1"}],milestones:[{id:"m1",name:"Grading Permit Issued",ref:"CBC Ch.18",date:"2025-11-08",status:"done",notes:"Cupertino Building Division",payAmt:5e3,payPaid:!0,payDate:"2025-11-10",payFiles:[],progressPayments:[]},{id:"m2",name:"Geotechnical Report Approved",ref:"CBC §1803",date:"2025-12-02",status:"done",notes:"Soils EOR sign-off",payAmt:8500,payPaid:!0,payDate:"2025-12-05",payFiles:[],progressPayments:[]},{id:"m3",name:"Building Permit Issued",ref:"CBC §105",date:"2025-12-15",status:"done",notes:"Cupertino Permit #00891",payAmt:12e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m4",name:"Footing Inspection Passed",ref:"CBC §110.3.1",date:"2026-01-18",status:"done",notes:"Cupertino Inspector #C-221",payAmt:45e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m5",name:"Concrete Framing Level 2",ref:"CBC §110.3.2",date:"2026-04-10",status:"inprogress",notes:"EOR inspection required",payAmt:85e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m6",name:"Title 24 Energy CF1R",ref:"T-24 Part 6",date:"2026-04-20",status:"inprogress",notes:"HERS rater required",payAmt:3500,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m7",name:"Frame Inspection",ref:"CBC §110.3.4",date:"2026-06-15",status:"upcoming",notes:"All trades rough-in complete",payAmt:12e4,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m8",name:"Certificate of Occupancy",ref:"CBC §111",date:"2027-02-01",status:"upcoming",notes:"Final Cupertino sign-off",payAmt:25e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]}],quotes:[{id:"q1",vendor:"Pacific Coast HVAC Inc.",scope:"Central mechanical — all floors",ref:"CMC 2022 · T-24 Part 6",csi:"Div 23",amount:484e3,date:"2026-03-10",status:"review",files:[],payMilestones:[]},{id:"q2",vendor:"CalFire Suppression Systems",scope:"High-rise sprinkler — NFPA 13",ref:"CFC §903 · CBC §903.3.1.1",csi:"Div 21",amount:212500,date:"2026-03-08",status:"approved",files:[],payMilestones:[{id:"pm1",name:"Mobilization (20%)",amount:42500,dueDate:"2026-03-20",paid:!0,paidDate:"2026-03-22",files:[],lienFiles:[]},{id:"pm2",name:"Progress Payment (50%)",amount:106250,dueDate:"2026-05-01",paid:!1,paidDate:"",files:[],lienFiles:[]},{id:"pm3",name:"Final Payment (30%)",amount:63750,dueDate:"2026-07-01",paid:!1,paidDate:"",files:[],lienFiles:[]}]},{id:"q3",vendor:"SunPath Solar + Electrical",scope:"PV system + EV charging rough-in",ref:"CALGreen §4.106.4 · CEC 2022",csi:"Div 26/48",amount:318e3,date:"2026-03-14",status:"negotiating",files:[],payMilestones:[]},{id:"q4",vendor:"BayArea Glass & Facade",scope:"Curtainwall + glazing system",ref:"CBC §2404 · T-24 fenestration",csi:"Div 08",amount:92e4,date:"2026-03-12",status:"review",files:[],payMilestones:[]},{id:"q5",vendor:"LA Seismic Retrofit Group",scope:"SMRF connection inspection & testing",ref:"CBC §1705.12 · AISC 341",csi:"Div 05",amount:98400,date:"2026-03-15",status:"new",files:[],payMilestones:[]}],plans:[],invoices:[],vendors:[],checklist:[{id:"chk01",name:"Verify copper Type L piping for all water supply lines",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"All piping to be non-combustible metallic material per CPC §609",status:"open"},{id:"chk02",name:"Confirm min 15 PSI at each fixture",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per water supply notes, water supply shall be no less than 15 PSI",status:"open"},{id:"chk03",name:"Backflow prevention device installed upstream of all fixtures",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Required per water supply note 7",status:"open"},{id:"chk04",name:"Vacuum breakers provided at all hose bibbs",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Permanent vacuum breakers at hose bibbs per water supply note 9",status:"open"},{id:"chk05",name:"Water heater (AO Smith HPTU-66N) anchored/strapped in garage",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"66 gal, 4.5 kW, 208V — strap to resist seismic displacement per CPC §508.2",status:"open"},{id:"chk06",name:"Expansion tank installed per CPC §608.3",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Or other approved pressure relief method",status:"open"},{id:"chk07",name:"All hot water piping insulated per CPC §609.11.2",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:'Insulation wall thickness ≥ pipe diameter for pipes up to 2"; ≥ 2" for larger',status:"open"},{id:"chk08",name:"Mixing valves installed on all showers and tub-shower combos",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §408.3",status:"open"},{id:"chk09",name:"Potable water system disinfected prior to use",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §609.9 — document disinfection method and results",status:"open"},{id:"chk10",name:"Fixture flow rates verified: lavatory ≤1.2 GPM, kitchen ≤1.8 GPM, shower ≤2.0 GPM, WC ≤1.28 GPF",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per CALGreen and CPC §402.0",status:"open"},{id:"chk11",name:"All sanitary drain and vent piping — Schedule 40 ABS installed",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per DWV note 12 — CPC §701.0 and §903.0",status:"open"},{id:"chk12",name:'Vent pipes extend through roof min 6" above roof deck',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:'Vent pipe through roof flashing, terminate vertically ≥6" above roof per DWV note 4',status:"open"},{id:"chk13",name:'4" main drain pipe connected to drainage system',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per DWV note 2 — comply with Table 7-5 of 2022 CPC",status:"open"},{id:"chk14",name:"Horizontal drain slope min 1/4 inch per foot (2% slope)",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per CPC §708.0",status:"open"},{id:"chk15",name:"Floors sloped to all floor drains",category:"Drain Waste Vent",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §411.4",status:"open"},{id:"chk16",name:"Backwater valve installed on basement/floor-level fixtures",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §710.1 — see sanitary drainage table for manhole elevations",status:"open"},{id:"chk17",name:'Roof drain risers installed: 4" RD and 4" ORD at all drain locations',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Sheet P3.2 — multiple 699SF, 509SF, 388SF, 222SF, 215SF drainage areas",status:"open"},{id:"chk18",name:'3/4" gas piping installed — total developed length 69 ft verified',category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Sheet P4.0 — 22 ft + 44 ft + 15-3 ft segments, new gas meter location",status:"open"},{id:"chk19",name:"Gas piping pressure test performed and documented",category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"All gas connections tested before cover-up",status:"open"},{id:"chk20",name:"Gas meter (N) installed at approved location",category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Utility / Plumbing",notes:"New gas meter per P4.0 plan",status:"open"},{id:"chk21",name:"Contractor verified all equipment model numbers, capacities and voltages with manufacturer",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general note 1 — coordinate with all applicable trades",status:"open"},{id:"chk22",name:"No structural members cut/drilled/notched without written EOR approval",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Project Manager",notes:"Per general note 7 — written authorization from Structural Engineer of Record required",status:"open"},{id:"chk23",name:"All utility invert elevations coordinated prior to installation",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general note 8 — verify locations, sizes, point of connections",status:"open"},{id:"chk24",name:"All plumbing materials listed/certified by approved listing agency",category:"Pre-Construction",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general plumbing note 5 — 2022 CPC referenced standards",status:"open"},{id:"chk25",name:"Compliance certificates provided with equipment submittals (Title 24 / CALGreen)",category:"Pre-Construction",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general plumbing note 4 — EES §110.3",status:"open"}],qaqcLog:[{id:"qa01",refNo:"QA-PLUMB-001",type:"observation",description:"Verify pipe sizing matches fixture schedule — total 47.0 CW FU, 31.8 HW FU, 33 DFU as shown on Sheet P1.0",location:"Throughout building",raisedBy:"Engineer of Record",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa02",refNo:"QA-PLUMB-002",type:"observation",description:"Water heater flue/condensate: AO Smith HPTU-66N in garage requires condensate drain — verify drain availability or condensate pump provided",location:"Garage",raisedBy:"Engineer",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa03",refNo:"QA-PLUMB-003",type:"observation",description:"Roof drain shop drawings must be coordinated with Structural Engineer before installation — water/sewer/storm lines must not run along grade beams",location:"Roof / Foundation",raisedBy:"Engineer of Record",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"Per P3.2 note 1",files:[]},{id:"qa04",refNo:"QA-PLUMB-004",type:"observation",description:"CPVC piping not permitted above grade — verify all above-grade piping is copper Type L as specified",location:"All floors",raisedBy:"Inspector",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa05",refNo:"QA-PLUMB-005",type:"punch",description:"Lead content compliance required for all pipes/fittings conveying potable water — submit documentation per Health & Safety Code §116875",location:"Entire plumbing system",raisedBy:"Building Dept",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]}],inspections:[{id:"i1",name:"Concrete Pour — Level 2 Slab",inspDate:"2026-03-25",inspTime:"09:00",location:"1510 Madera Dr · Level 2",refs:"CBC §110.3.2 · §1905",ahj:"cupertino",notes:"EOR required on site",files:[]},{id:"i2",name:"Rough Electrical (CEC) Inspection",inspDate:"2026-04-02",inspTime:"10:30",location:"All Floors · Cupertino Electrical Insp.",refs:"CEC 2022",ahj:"cupertino",notes:"",files:[]},{id:"i3",name:"Rough Plumbing + Mechanical",inspDate:"2026-04-08",inspTime:"11:00",location:"Zone 2–3 · Cupertino Plumbing Insp.",refs:"CPC 2022 · CMC 2022",ahj:"cupertino",notes:"",files:[]},{id:"i4",name:"CalOSHA Fall Protection Audit",inspDate:"2026-04-22",inspTime:"08:00",location:"Cal/OSHA District Office · Floors 3–6",refs:"CalOSHA §1735",ahj:"calosha",notes:"Mandatory",files:[]},{id:"i5",name:"Special Inspection — Welding",inspDate:"2026-05-10",inspTime:"09:00",location:"SMRF Joints · CBC §1705.12",refs:"CBC §1705.12 · AISC 341",ahj:"icc",notes:"ICC-Certified inspector required",files:[]}]};function kg(){try{if(ln()&&typeof localStorage<"u"){const e=localStorage.getItem($l);if(e){const t=JSON.parse(e);if(t&&typeof t=="object")return t}}}catch(e){console.warn("Local DB load failed:",(e==null?void 0:e.message)||e)}return ln()?Cg():Gu()}function Z(){try{L.activeProjectId=L.activeId??L.activeProjectId??null}catch(e){const t=e.name==="QuotaExceededError"||e.code===22?"⚠ Browser storage full — files are too large for local storage. Export your project to save data.":"⚠ Save failed: "+e.message;j(t,5e3),console.error("saveDB error:",e)}In()}function Ju(e,t=[]){const n=e&&typeof e=="object"?e:{},r=(t||[]).find(d=>d.id===n.vdirId)||null,o=String(n.bank||n.bankName||(r==null?void 0:r.bank)||"").trim(),i=String(n.acctType||n.bankAcctType||(r==null?void 0:r.acctType)||"").trim(),a=String(n.acct||n.bankAccount||(r==null?void 0:r.acct)||"").trim(),c=String(n.routing||n.routingNo||(r==null?void 0:r.routing)||"").trim(),l=String(n.zelle||n.zelleId||(r==null?void 0:r.zelle)||"").trim();return{...n,vendor:String(n.vendor||(r==null?void 0:r.company)||(r==null?void 0:r.name)||"").trim(),vendorEmail:String(n.vendorEmail||(r==null?void 0:r.email)||"").trim(),trade:String(n.trade||(r==null?void 0:r.trade)||"").trim(),address:String(n.address||(r==null?void 0:r.address)||"").trim(),license:String(n.license||(r==null?void 0:r.license)||"").trim(),bank:o,bankName:o,acctType:i,bankAcctType:i,acct:a,bankAccount:a,routing:c,routingNo:c,zelle:l,zelleId:l,files:Array.isArray(n.files)?n.files:[],milestones:Array.isArray(n.milestones)?n.milestones:[]}}function In(){(L.projects||[]).forEach(e=>{(e.plans||[]).forEach(t=>G([t])),(e.quotes||[]).forEach(t=>{G(t.files||[]),(t.payMilestones||[]).forEach(n=>{G(n.files||[]),G(n.invoiceFiles||[]),G(n.lienFiles||[])})}),(e.milestones||[]).forEach(t=>{G(t.payFiles||[]),(t.progressPayments||[]).forEach(n=>G(n.files||[]))}),(e.inspections||[]).forEach(t=>G(t.files||[])),(e.vendors||[]).forEach(t=>G(t.files||[])),(e.invoices||[]).forEach(t=>{G(t.files||[]),G(t.proofFiles||[]),G(t.lienFiles||[]),(t.partialPayments||[]).forEach(n=>G(n.files||[])),(t.payments||[]).forEach(n=>G(n.proofFiles||[]))}),(e.checklist||[]).forEach(t=>{G(t.files||[]),(t.comments||[]).forEach(n=>G(n.files||[]))}),(e.qaqcLog||[]).forEach(t=>G(t.files||[]))})}let L=kg();In();const B=()=>L.projects.find(e=>e.id===L.activeId)||L.projects[0]||null;function Ku(e=!0){var t,n,r,o,i,a,c,l,d;try{(r=(n=(t=document.getElementById("daily-tracker-frame"))==null?void 0:t.contentWindow)==null?void 0:n.syncActiveProject)==null||r.call(n,e)}catch{}try{(a=(i=(o=document.getElementById("client-contract-frame"))==null?void 0:o.contentWindow)==null?void 0:i.syncActiveProject)==null||a.call(i,e)}catch{}try{(d=(l=(c=document.getElementById("client-invoice-frame"))==null?void 0:c.contentWindow)==null?void 0:l.syncActiveProject)==null||d.call(l,e)}catch{}}const Eg=e=>{L.activeId=e,Z(),Ku(!0)};function G(e){(e||[]).forEach(t=>{t&&t.id&&Fe(t)&&(Mt[t.id]=t)})}let Cn="projects";const Pg={projects:"All Projects",dashboard:"Dashboard Overview",works:"Works at Site",milestones:"Project Milestones",quotes:"Quotes Received",plans:"Plans & Documents",inspections:"Inspections Scheduled",payments:"Payments",invoices:"Invoice Tracker",vendors:"Vendor Contracts",checklist:"Project Checklist",qaqc:"QA/QC Log",compliance:"Compliance Tracker",export:"Export & Download",momentum:"Momentum","daily-tracker":"Daily Tracker","client-contract":"Client Contract","client-invoice":"Client Invoice","vendor-directory":"Vendor Directory"},jg=["dashboard","works","milestones","quotes","plans","inspections","payments","invoices","vendors","checklist","qaqc","compliance","export"];function Gi(){const e=Ot(),t=fh(e);document.querySelectorAll(".sb-nav li[data-page]").forEach(n=>{const r=n.dataset.page;n.style.display=t.includes(r)||r==="projects"?"":"none"})}function xr(e){var i,a;if(!mh(e)){j("⚠ You do not have access to this page"),e="projects";return}jg.includes(e)&&!B()&&(j("⚠ Select or create a project first"),e="projects"),document.querySelectorAll(".page").forEach(c=>c.classList.remove("on")),(i=h("pg-"+e))==null||i.classList.add("on"),document.querySelectorAll(".sb-nav a").forEach(c=>c.classList.remove("on")),(a=h("n-"+e))==null||a.classList.add("on"),h("page-title").textContent=Pg[e]||e;const t={projects:"+ New Project",works:"+ Add Work",milestones:"+ Add Milestone",quotes:"+ Add Quote",plans:"+ Upload Doc",inspections:"+ Add Inspection",payments:"",invoices:"",vendors:"",checklist:"",qaqc:"",compliance:"",export:"",momentum:"","daily-tracker":"","client-contract":"","client-invoice":"","vendor-directory":""},n={projects:"project",works:"work",milestones:"milestone",quotes:"quote",plans:"plan",inspections:"inspection"},r=h("add-btn");if(t[e]?(r.style.display="",r.textContent=t[e],r.onclick=()=>Qi(n[e])):r.style.display="none",h("bal-strip").classList.toggle("show",e==="payments"),e==="client-contract"){const c=h("client-contract-frame");if(c&&c.contentWindow)try{c.contentWindow.syncActiveProject&&c.contentWindow.syncActiveProject()}catch{}}if(e==="client-invoice"){const c=h("client-invoice-frame");if(c&&c.contentWindow)try{c.contentWindow.syncActiveProject&&c.contentWindow.syncActiveProject()}catch{}}e==="vendor-directory"&&br(),e==="settings"&&vf(),Cn=e,ne()}function $g(){xr(Cn)}function ne(){Gi();const e=ef();Ot(),setTimeout(()=>{document.querySelectorAll(".btn-navy,.btn-green,.btn-red,.btn-blue,.btn-ghost").forEach(n=>{if(n.closest("#mo"))return;const r=Cn;e||r&&zs(r)?n.setAttribute("data-viewer-disabled","1"):n.removeAttribute("data-viewer-disabled")});const t=document.getElementById("view-only-banner");if(t&&t.remove(),Cn&&zs(Cn)){const n=document.createElement("div");n.id="view-only-banner",n.style.cssText="position:fixed;bottom:16px;right:16px;background:#A86200;color:#fff;padding:8px 14px;border-radius:7px;font-size:11px;font-weight:700;z-index:500;box-shadow:0 4px 16px rgba(0,0,0,.3)",n.textContent="👁 View Only — editing disabled on this page",document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}},50),Xu(),Nl(),Il(),zl(),Ll(),Tl(),Bl(),Ml(),Yi(),Vl(),ql(),Jl(),Kl(),Fl(),_l(),br()}function Xu(){const e=B();h("ct-projects").textContent=L.projects.length,h("sb-proj").textContent=e?e.name:"No project",h("sb-foot").innerHTML=e?`${e.city||""}${e.county?" · "+e.county:""}<br>Permit: ${e.permit||"—"}<br>APN: ${e.apn||"—"}`:"No project selected",e&&(h("ct-works").textContent=(e.works||[]).length,h("ct-ms").textContent=(e.milestones||[]).length,h("ct-q").textContent=(e.quotes||[]).length,h("ct-plans").textContent=(e.plans||[]).length,h("ct-ins").textContent=(e.inspections||[]).length,h("ct-pay").textContent=(e.quotes||[]).filter(t=>t.status==="approved").length,h("ct-inv").textContent=(e.invoices||[]).length,h("ct-ven").textContent=(e.vendors||[]).length,h("ct-chk").textContent=(e.checklist||[]).length,h("ct-qaqc").textContent=(e.qaqcLog||[]).length)}function Nl(){const e=h("proj-grid");if(!e)return;if(!(L.projects||[]).length){if(rr){e.innerHTML=`
        <div class="panel" style="grid-column:1/-1;padding:28px;text-align:center">
          <div style="font-size:26px;margin-bottom:8px">☁</div>
          <div style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px">Loading Railway Data</div>
          <div style="font-size:12px;color:var(--muted)">Your projects are still loading from Railway. This screen is not treated as empty data.</div>
        </div>`;return}if(ur){e.innerHTML=`
        <div class="panel" style="grid-column:1/-1;padding:28px;text-align:center">
          <div style="font-size:26px;margin-bottom:8px">⚠</div>
          <div style="font-size:16px;font-weight:700;color:var(--red);margin-bottom:6px">Could Not Load Railway Data</div>
          <div style="font-size:12px;color:var(--muted);margin-bottom:14px">${ur}</div>
          <button class="btn btn-navy" onclick="retryRemoteHydration()">Retry Railway Sync</button>
        </div>`;return}if(pr()){e.innerHTML=`
        <div class="panel" style="grid-column:1/-1;padding:28px;text-align:center">
          <div style="font-size:26px;margin-bottom:8px">📁</div>
          <div style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px">No Projects In Railway Yet</div>
          <div style="font-size:12px;color:var(--muted)">Railway responded successfully, but there are no saved projects in the shared database yet.</div>
        </div>
        <div class="add-card" onclick="openModal('project')"><div style="font-size:28px;opacity:.35;margin-bottom:8px">➕</div><div style="font-size:13px;color:var(--muted);font-weight:500">Add New Project</div></div>`;return}}let t=L.projects.map(n=>{const r=(n.works||[]).filter(c=>["active","inprogress","starting"].includes(c.status)).length,o=(n.milestones||[]).filter(c=>c.status==="done").length,i=(n.quotes||[]).reduce((c,l)=>c+Number(l.amount||0),0),a=n.id===L.activeId;return`<div class="proj-card" onclick="switchProj('${n.id}')" style="${a?"border:2px solid "+n.color:""}">
      <div class="proj-card-bar" style="background:${n.color||"#1A6BC4"}"></div>
      <div class="proj-card-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div class="proj-card-name">${n.name}</div>
            <div class="proj-card-addr">${n.city||n.address||""}</div>
            ${n.client?`<div style="font-size:10px;color:var(--blue);margin-top:2px;font-weight:600">👤 ${n.client}</div>`:""}
            <div style="font-size:10px;color:var(--muted);margin-top:2px">${n.county?n.county+" · ":""} ${n.permit||"—"}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('project','${n.id}')">✏</button>
            <button class="btn btn-red btn-xs" onclick="event.stopPropagation();delProj('${n.id}')">🗑</button>
          </div>
        </div>
      </div>
      <div class="proj-card-foot">
        <div class="text-center"><div class="ps-val" style="color:var(--amber)">${r}</div><div class="ps-lbl">Active</div></div>
        <div><div class="ps-val" style="color:var(--green)">${o}/${(n.milestones||[]).length}</div><div class="ps-lbl">Milestones</div></div>
        <div><div class="ps-val" style="color:var(--blue);font-size:14px">${R(i)}</div><div class="ps-lbl">Quoted</div></div>
        ${a?'<span class="badge b-blue">Active</span>':'<span class="badge b-gray" style="font-size:9px">Click to open</span>'}
      </div>
    </div>`}).join("");t+=`<div class="add-card" onclick="openModal('project')"><div style="font-size:28px;opacity:.35;margin-bottom:8px">➕</div><div style="font-size:13px;color:var(--muted);font-weight:500">Add New Project</div></div>`,e.innerHTML=t}function Ag(e){Eg(e),xr("dashboard")}function Il(){const e=B();if(!e)return;h("ceqa-sub").textContent=`${e.name} · ${e.address||""} · Public Review closed 14 Jan 2026`;const t=(e.works||[]).filter(a=>["active","inprogress","starting"].includes(a.status)).length,n=(e.milestones||[]).filter(a=>a.status==="done").length,r=(e.quotes||[]).reduce((a,c)=>a+Number(c.amount||0),0),o=(e.inspections||[]).sort((a,c)=>(a.inspDate||"")>(c.inspDate||"")?1:-1)[0];h("dash-metrics").innerHTML=`
    <div class="mc" style="--ac:var(--amber)"><div class="mc-lbl">Works Active</div><div class="mc-val">${t}</div><div class="mc-sub">${(e.works||[]).length} total</div></div>
    <div class="mc" style="--ac:var(--teal)"><div class="mc-lbl">Milestones</div><div class="mc-val">${n}/${(e.milestones||[]).length}</div><div class="mc-sub">${(e.milestones||[]).length?Math.round(n/(e.milestones||[]).length*100):0}% done</div></div>
    <div class="mc" style="--ac:var(--blue)"><div class="mc-lbl">Quotes</div><div class="mc-val">${R(r)}</div><div class="mc-sub">${(e.quotes||[]).length} quotes</div></div>
    <div class="mc" style="--ac:var(--red)"><div class="mc-lbl">Inspections</div><div class="mc-val">${(e.inspections||[]).length}</div><div class="mc-sub">Next: ${o&&o.inspDate?new Date(o.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}):"—"}</div></div>`;const i=a=>`<div style="padding:24px;text-align:center;color:var(--muted);font-size:12px">${a}</div>`;h("d-works").innerHTML=(e.works||[]).length?(e.works||[]).slice(0,5).map(a=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:10px">
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${a.name}</div><div style="font-size:10px;color:var(--muted)">${a.ref}</div></div>
      <div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${a.pct}%;background:${Si(a.status,a.pct)}"></div></div><span class="prog-pct" style="color:${Si(a.status,a.pct)}">${a.pct}%</span>${wn(a.status)}</div>
    </div>`).join(""):i("No works added yet"),h("d-ms").innerHTML=(e.milestones||[]).length?(e.milestones||[]).slice(0,5).map(a=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:9px">
      <div style="width:9px;height:9px;border-radius:50%;background:${a.status==="done"?"var(--green-m)":a.status==="inprogress"?"var(--amber-m)":"var(--border)"};flex-shrink:0"></div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${a.name}</div><div style="font-size:10px;color:var(--muted)">${J(a.date)}</div></div>
      ${wn(a.status)}
    </div>`).join(""):i("No milestones yet"),h("d-quotes").innerHTML=(e.quotes||[]).length?(e.quotes||[]).slice(0,4).map(a=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-size:13px;font-weight:600">${a.vendor}</div><div style="font-size:10px;color:var(--muted)">${a.scope}</div></div>
      <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${R(a.amount)}</div>${wn(a.status)}</div>
    </div>`).join(""):i("No quotes yet"),h("d-ins").innerHTML=(e.inspections||[]).length?(e.inspections||[]).slice(0,4).map(a=>{const c=a.inspDate?new Date(a.inspDate+"T12:00:00"):null,l=c?c.getDate():"—",d=c?c.toLocaleString("en-US",{month:"short"}).toUpperCase():"—";return`<div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:11px">
      <div class="datebox" style="background:var(--amber-l)"><div class="db-d" style="color:var(--amber)">${l}</div><div class="db-m" style="color:var(--amber)">${d}</div></div>
      <div><div style="font-size:13px;font-weight:600">${a.name}</div><div style="font-size:10px;color:var(--muted)">${vo(a.inspTime)} · ${a.location||""}</div></div>
    </div>`}).join(""):i("No inspections yet")}function zl(){const e=B();if(!e)return;h("wc").textContent=(e.works||[]).length;const t=h("w-tbody");if(!(e.works||[]).length){t.innerHTML='<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏗</div>No works yet.</div></td></tr>';return}t.innerHTML=(e.works||[]).map(n=>`
    <tr>
      <td><div class="tn">${n.name}</div><div class="tm">${n.notes||""}</div></td>
      <td><span class="cbc">${n.ref}</span></td>
      <td>${n.contractor||"—"}</td>
      <td>${wn(n.status)}</td>
      <td><div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${n.pct}%;background:${Si(n.status,n.pct)}"></div></div><span class="prog-pct" style="color:${Si(n.status,n.pct)}">${n.pct}%</span></div></td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('work','${n.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('works','${n.id}')">Del</button></div></td>
    </tr>`).join("")}function Dg(e){const t=h("ms-ledger");if(!t)return;if(!e.length){t.innerHTML='<div class="empty" style="padding:24px"><div class="empty-ic">📒</div>No milestones yet.</div>';return}let n=0,r=0,o=0;const i=e.map((l,d)=>{const u=l.progressPayments||[],m=u.reduce((x,S)=>x+Number(S.amount||0),0),p=u.filter(x=>x.paid).reduce((x,S)=>x+Number(S.amount||0),0),g=m-p,b=l.payAmt||0;n+=b,r+=p,o+=m-p;const y=l.status==="done"?"var(--green-m)":l.status==="inprogress"?"var(--amber-m)":"var(--border)",w=d%2===0?"#fff":"var(--bg)",f=u.length?u.map(x=>`
      <tr style="background:${x.paid?"#F3FCF0":"#FFFDF7"}">
        <td style="padding:5px 14px 5px 36px;font-size:11px;color:var(--muted);border-bottom:1px solid #F5F2EA" colspan="2">
          <span style="margin-right:8px">${x.paid?"●":"○"}</span>${x.name}
          ${x.dueDate?`<span style="margin-left:8px;font-size:10px;color:var(--muted)">Due: ${J(x.dueDate)}</span>`:""}
        </td>
        <td style="padding:5px 14px;font-size:12px;font-weight:600;color:var(--text);border-bottom:1px solid #F5F2EA">${R(x.amount||0)}</td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${x.paid?`<span style="color:var(--green);font-weight:600">✓ ${R(x.amount||0)}</span><span style="font-size:10px;color:var(--muted);margin-left:5px">${J(x.receivedDate)}</span>`:'<span style="color:var(--muted)">—</span>'}
        </td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${x.paid?'<span style="color:var(--green)">$0</span>':`<span style="color:var(--red);font-weight:600">${R(x.amount||0)}</span>`}
        </td>
        <td style="padding:5px 14px;border-bottom:1px solid #F5F2EA"></td>
      </tr>`).join(""):"",v=u.length>0;return`<tr style="background:${w}">
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:9px;height:9px;border-radius:50%;background:${y};flex-shrink:0"></div>
          <div>
            <div style="font-size:13px;font-weight:600">${l.name}</div>
            <div style="font-size:10px;color:var(--muted)">${l.ref} · ${J(l.date)||"—"}</div>
          </div>
        </div>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">${wn(l.status)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${b?R(b):"—"}</span>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${R(p)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${g>0?"var(--red)":"var(--green)"}">${R(g)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${m?Math.min(100,Math.round(p/m*100)):0}%;background:${p>=m?"var(--green-m)":"var(--blue-m)"};border-radius:3px"></div></div><span style="font-size:10px;color:var(--muted)">${m?Math.min(100,Math.round(p/m*100)):0}%</span>`:'<span style="font-size:10px;color:var(--muted)">No payments scheduled</span>'}
      </td>
    </tr>${f}`}).join(""),a=n?Math.min(100,Math.round(r/n*100)):0,c=`<tr style="background:var(--navy)">
    <td style="padding:11px 14px" colspan="2"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">${R(n)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">${R(r)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${o>0?"#F09595":"#9FE1CB"}">${R(o)}</span></td>
    <td style="padding:11px 14px">
      <div style="height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${a}%;background:${a===100?"#9FE1CB":"#85B7EB"};border-radius:3px;transition:.5s"></div></div>
      <span style="font-size:10px;color:#8AAAC8">${a}% received</span>
    </td>
  </tr>`;t.innerHTML=`<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
    <thead>
      <tr style="background:var(--bg)">
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:28%">Milestone</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Status</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Contract Amt.</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);text-align:left;border-bottom:1px solid var(--border)">✓ Paid</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);text-align:left;border-bottom:1px solid var(--border)">Balance Due</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Progress</th>
      </tr>
    </thead>
    <tbody>${i}${c}</tbody>
  </table></div>`}function Ll(){const e=B();if(!e)return;const t=e.milestones||[];h("msc").textContent=t.length,h("ms-done").textContent=t.filter(a=>a.status==="done").length,h("ms-prog").textContent=t.filter(a=>a.status==="inprogress").length,h("ms-up").textContent=t.filter(a=>a.status==="upcoming").length;const n=t.reduce((a,c)=>a+Number(c.payAmt||0),0),r=t.reduce((a,c)=>a+(c.progressPayments||[]).filter(l=>l.paid).reduce((l,d)=>l+Number(d.amount||0),0),0),o=t.reduce((a,c)=>a+(c.progressPayments||[]).reduce((l,d)=>l+Number(d.amount||0),0),0);h("ms-total").textContent=R(n),h("ms-paid").textContent=R(r),h("ms-bal").textContent=R(o-r);const i=h("ms-tbody");if(!t.length){i.innerHTML='<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏆</div>No milestones yet.</div></td></tr>';return}Dg(t),t.forEach(a=>{G(a.payFiles||[]),(a.progressPayments||[]).forEach(c=>G(c.files||[]))}),i.innerHTML=t.map(a=>{const c=a.status==="done"?"var(--green-m)":a.status==="inprogress"?"var(--amber-m)":"var(--border)",l=a.progressPayments||[],d=l.filter(g=>g.paid).reduce((g,b)=>g+Number(b.amount||0),0),u=l.reduce((g,b)=>g+Number(b.amount||0),0);l.forEach(g=>G(g.files||[]));const m=a.payAmt?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">${R(a.payAmt)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>',p=l.length?`<div style="display:flex;flex-direction:column;gap:4px">
          ${l.map(g=>`
          <div style="background:${g.paid?"var(--green-l)":"var(--bg)"};border:1px solid ${g.paid?"#B8DCA0":"var(--border)"};border-radius:6px;padding:5px 8px">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text)">${g.name} — ${R(g.amount||0)}</div>
                ${g.paid?`<div style="font-size:10px;color:var(--green);margin-top:1px">✓ Received ${g.receivedDate?"· "+J(g.receivedDate):""}</div>`:`<div style="font-size:10px;color:var(--muted);margin-top:1px">Due: ${J(g.dueDate)||"—"}</div>`}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                ${(g.files||[]).length?`<div style="display:flex;flex-direction:column;gap:2px">
                      ${(g.files||[]).map(b=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 6px;max-width:150px">
                        <span style="font-size:10px">${dt(b.name)}</span>
                        <span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${b.name}</span>
                        <button class="a-dl" onclick="dlFile('${b.id}')" style="font-size:9px;padding:1px 5px">⬇</button>
                      </div>`).join("")}
                      <button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${a.id}|${g.id}')" style="font-size:9px;padding:2px 6px">+ Add</button>
                    </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${a.id}|${g.id}')" style="font-size:9px;padding:2px 6px">📎 Attach Proof</button>`}
                ${g.paid?`<button class="btn btn-ghost btn-xs" onclick="unmarkPP('${a.id}','${g.id}')" title="Undo">↩</button>`:`<button class="btn btn-green btn-xs" onclick="openMarkPP('${a.id}','${g.id}')">Mark Received</button>`}
              </div>
            </div>
          </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 2px;border-top:1px solid var(--border);margin-top:1px">
            <span style="color:var(--muted)">Received: <strong style="color:var(--green)">${R(d)}</strong></span>
            <span style="color:var(--muted)">Balance: <strong style="color:${u-d>0?"var(--red)":"var(--green)"}">${R(u-d)}</strong></span>
          </div>
          <button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${a.id}')">+ Add Payment</button>
        </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${a.id}')">+ Add Progress Payment</button>`;return`<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:9px;height:9px;border-radius:50%;background:${c};flex-shrink:0"></div><div><div class="tn">${a.name}</div><div class="tm">${a.notes||""}</div></div></div></td>
      <td><span class="cbc">${a.ref}</span></td>
      <td>${J(a.date)}</td>
      <td>${wn(a.status)}</td>
      <td>${m}</td>
      <td style="min-width:240px">${p}</td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('milestone','${a.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('milestones','${a.id}')">Del</button></div></td>
    </tr>`}).join("")}function Tl(){const e=B();if(!e)return;const t=e.quotes||[];h("qc").textContent=t.length,h("q-total").textContent=R(t.reduce((r,o)=>r+Number(o.amount||0),0)),h("q-approved").textContent=R(t.filter(r=>r.status==="approved").reduce((r,o)=>r+Number(o.amount||0),0));const n=h("q-tbody");if(!t.length){n.innerHTML='<tr><td colspan="8"><div class="empty"><div class="empty-ic">💰</div>No quotes yet.</div></td></tr>';return}t.forEach(r=>G(r.files||[])),n.innerHTML=t.map(r=>`
    <tr>
      <td><div class="tn">${r.vendor}</div><div class="tm">${r.scope}</div></td>
      <td style="font-size:11px;color:var(--purple)">${r.ref}</td>
      <td><span class="badge b-teal">${r.csi}</span></td>
      <td><span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${R(r.amount)}</span></td>
      <td>${J(r.date)}</td>
      <td>${wn(r.status)}</td>
      <td>
        ${(r.files||[]).length?`<div style="display:flex;flex-direction:column;gap:3px">
              ${(r.files||[]).map(o=>`<div style="display:flex;align-items:center;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:2px 7px;max-width:160px">
                <span style="font-size:11px">${dt(o.name)}</span>
                <span style="font-size:10px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${o.name}</span>
                <button class="a-dl" onclick="dlFile('${o.id}')" title="Download">⬇</button>
              </div>`).join("")}
              <button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${r.id}')" style="margin-top:1px">+ Add / Edit</button>
            </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${r.id}')">📎 Attach</button>`}
      </td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('quote','${r.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('quotes','${r.id}')">Del</button></div></td>
    </tr>`).join("")}function Bl(){const e=B();if(!e)return;const t=e.plans||[];h("plc").textContent=t.length;const n=h("plans-wrap");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">📐</div>No documents uploaded yet.</div>';return}t.forEach(r=>G([r])),n.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">${t.map(r=>`
    <div style="background:#fff;border:1px solid var(--border);border-radius:9px;overflow:hidden;box-shadow:var(--sh)">
      <div style="padding:16px;text-align:center;border-bottom:1px solid var(--border)">
        <div style="font-size:32px;margin-bottom:6px">${dt(r.name)}</div>
        <div style="font-size:12px;font-weight:600;word-break:break-all">${r.name}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${r.type||"Document"}</div>
      </div>
      <div style="padding:9px 12px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:10px;color:var(--muted)">${Dl(r.size||0)}</span>
        <div style="display:flex;gap:5px">
          <button class="a-dl" onclick="dlFile('${r.id}')">⬇</button>
          <button class="a-rm" onclick="delPlan('${r.id}')">✕</button>
        </div>
      </div>
    </div>`).join("")}</div>`}function Ml(){const e=B();if(!e)return;const t=e.inspections||[];h("ic").textContent=t.length;const n=h("ins-list");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🔍</div>No inspections scheduled yet.</div>';return}t.forEach(i=>G(i.files||[]));const r={cupertino:"b-blue",calosha:"b-red",icc:"b-teal"},o={cupertino:"Cupertino",calosha:"CalOSHA",icc:"ICC-Cert."};n.innerHTML=t.map(i=>{const a=i.inspDate?new Date(i.inspDate+"T12:00:00"):null,c=a?String(a.getDate()).padStart(2,"0"):"—",l=a?a.toLocaleString("en-US",{month:"short"}).toUpperCase():"—",d=vo(i.inspTime),u=(i.files||[]).length?`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${i.id}')">📎 ${i.files.length} file${i.files.length>1?"s":""}</button>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${i.id}')">📎 Attach Report</button>`;return`<div style="padding:13px 16px;border-bottom:1px solid #F0EDE6">
      <div style="display:flex;align-items:flex-start;gap:13px">
        <div class="datebox" style="background:var(--amber-l)">
          <div class="db-d" style="color:var(--amber)">${c}</div>
          <div class="db-m" style="color:var(--amber)">${l}</div>
          <div class="db-t">${d}</div>
        </div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;margin-bottom:4px">${i.name}</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:5px">
            <span style="font-size:11px;color:var(--muted)">📅 ${i.inspDate?new Date(i.inspDate+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",year:"numeric"}):"Not set"}</span>
            <span style="font-size:11px;color:var(--muted)">🕐 ${d}</span>
            ${i.location?`<span style="font-size:11px;color:var(--muted)">📍 ${i.location}</span>`:""}
          </div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:${(i.files||[]).length?"7px":"0"}">
            ${(i.refs||"").split("·").filter(m=>m.trim()).map(m=>`<span class="cbc">${m.trim()}</span>`).join("")}
            <span class="badge ${r[i.ahj]||"b-blue"}">${o[i.ahj]||i.ahj}</span>
            ${i.notes?`<span style="font-size:10px;color:var(--muted)">${i.notes}</span>`:""}
          </div>
          ${(i.files||[]).length?`<div style="display:flex;gap:5px;flex-wrap:wrap">${(i.files||[]).map(m=>`<div style="display:flex;align-items:center;gap:5px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:3px 8px"><span style="font-size:13px">${dt(m.name)}</span><span style="font-size:11px;font-weight:500;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.name}</span><button class="a-dl" onclick="dlFile('${m.id}')">⬇</button></div>`).join("")}</div>`:""}
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="openModal('inspection','${i.id}')">✏ Edit</button>
          ${u}
          <button class="btn btn-red btn-xs" onclick="delItem('inspections','${i.id}')">🗑 Del</button>
        </div>
      </div>
    </div>`}).join("")}function Yi(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(k=>(e.invoices||[]).some(D=>D.vcId===k.id&&D.approvalStatus==="approved")),n=(e.invoices||[]).filter(k=>k.isManual&&k.approvalStatus==="approved"),r=(e.invoices||[]).filter(k=>!k.isManual&&k.quoteId&&!k.vcId&&k.approvalStatus==="approved"),o={};n.forEach(k=>{const D=k.vendor||"Unknown";o[D]||(o[D]=[]),o[D].push(k)});const i=Object.entries(o).map(([k,D])=>({id:"__manual__"+k,vendor:k,amount:D.reduce((z,M)=>z+Number(M.amount||0),0),trade:"",contractNo:"",isManualGroup:!0,milestones:[],_manualInvs:D})),a={};r.forEach(k=>{const D=k.quoteId;a[D]||(a[D]=[]),a[D].push(k)});const c=Object.entries(a).map(([k,D])=>{var M;const z=(e.quotes||[]).find(W=>W.id===k);return{id:"__quote__"+k,sourceQuoteId:k,vendor:(z==null?void 0:z.vendor)||((M=D[0])==null?void 0:M.vendor)||"Unknown",amount:Number((z==null?void 0:z.amount)||D.reduce((W,N)=>W+Number(N.amount||0),0)),trade:(z==null?void 0:z.csi)||"",contractNo:"",scope:(z==null?void 0:z.scope)||"",isQuoteGroup:!0,milestones:[],_quoteInvs:D}});h("ct-pay").textContent=t.length+i.length+c.length;const l=h("pay-list"),d=h("pay-empty"),u=h("pay-ledger-panel"),m=h("pay-ledger"),p=[...t,...c,...i];if(ox(p,e),!p.length){l.innerHTML="",d.style.display="",u&&(u.style.display="none"),h("bs-c").textContent=R(0),h("bs-p").textContent=R(0),h("bs-b").textContent=R(0),h("bs-pct").textContent="0%",h("bs-bar").style.width="0%";return}d.style.display="none";let g=0,b=0;t.forEach(k=>{g+=Number(k.amount||0),(e.invoices||[]).filter(D=>D.vcId===k.id&&D.approvalStatus==="approved").forEach(D=>{D.paid?b+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>b+=Number(z.amount||0))})}),i.forEach(k=>{g+=k.amount,k._manualInvs.forEach(D=>{D.paid?b+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>b+=Number(z.amount||0))})}),c.forEach(k=>{g+=k.amount,k._quoteInvs.forEach(D=>{D.paid?b+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>b+=Number(z.amount||0))})});const y=g?Math.min(100,Math.round(b/g*100)):0;h("bs-c").textContent=R(g),h("bs-p").textContent=R(b),h("bs-b").textContent=R(g-b),h("bs-b").style.color=g-b>0?"#F09595":"#9FE1CB",h("bs-pct").textContent=y+"%",h("bs-bar").style.width=y+"%",h("bs-bar").style.background=y===100?"#9FE1CB":y>60?"#85B7EB":"#FAC775",u&&(u.style.display="",m&&(m.innerHTML=ix(p,g,b,e)));const w=h("pay-export-bar");w&&(w.style.display="none");const f=h("pay-smart-search-bar");f&&(f.style.display=""),t.forEach(k=>{(e.invoices||[]).filter(D=>D.vcId===k.id).forEach(D=>G(D.files||[]))}),c.forEach(k=>{k._quoteInvs.forEach(D=>G(D.files||[]))}),i.forEach(k=>{k._manualInvs.forEach(D=>G(D.files||[]))});function v(k,D,z,M){const W=D.reduce((I,U)=>U.paid?I+Number(U.amount||0):I+(U.partialPayments||[]).reduce((q,te)=>q+Number(te.amount||0),0),0),N=Number(z||0)-W,F=z?Math.min(100,Math.round(W/Number(z)*100)):0;return{invRows:D.length?D.map((I,U)=>{var xo;const q=U%2===0?"#fff":"var(--bg)",te=I.partialPayments||[],oe=te.reduce((Q,be)=>Q+Number(be.amount||0),0),Pe=Number(I.amount||0)-oe,De=k&&((xo=(k.milestones||[]).find(Q=>Q.id===I.milestoneId))==null?void 0:xo.name)||"",ht=te.length?te.map(Q=>{const be=Q.files||[];return`<div style="background:#FAFFFE;border:1px solid var(--border);border-radius:5px;padding:6px 8px;margin-bottom:5px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px"><span style="color:var(--green);font-weight:700;font-size:11px">✓ $${Number(Q.amount||0).toLocaleString()}</span><span style="color:var(--muted);font-size:9px">${J(Q.date)||""}</span>${I.paid?"":`<button onclick="removePartialPayment('${I.id}','${Q.id}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:12px;padding:0 2px" title="Remove">×</button>`}</div><div style="display:flex;align-items:center;gap:5px;margin-bottom:5px"><span style="font-size:9px;color:var(--muted);white-space:nowrap;flex-shrink:0">🔖 Txn #:</span><input type="text" value="${Q.txnNo||""}" placeholder="Transaction / Reference #" onchange="updatePartialTxn('${I.id}','${Q.id}',this.value)" style="flex:1;font-size:9px;border:1px solid var(--border);border-radius:3px;padding:2px 5px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${I.id}','Conditional Progress','${Q.id}')">📧 Cond. Progress</button><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${I.id}','Unconditional Progress','${Q.id}')">📧 Uncond. Progress</button></div>${be.length?`<div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:4px">${be.map(pe=>`<div style="display:flex;align-items:center;gap:2px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:3px;padding:2px 5px;max-width:120px"><span style="font-size:9px">${dt(pe.name)}</span><span style="font-size:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${pe.name}</span><button class="a-dl" onclick="dlFile('${pe.id}')" style="font-size:8px;padding:0 3px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">⬇</button></div>`).join("")}</div>`:""}${I.paid?"":`<button onclick="openModal('ppfiles','${I.id}|${Q.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px;width:100%">📎 ${be.length?be.length+" file(s) · + Add":"Attach Supporting File"}</button>`}</div>`}).join(""):"",ge=Pe>0?Pe:0,Vt=I.paid?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:6px;padding:7px 9px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px"><span style="font-size:11px;font-weight:700;color:var(--green)">✓ Fully Paid</span><button onclick="unmarkInv('${I.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button></div>${ht}<div style="font-size:10px;font-weight:700;color:var(--green);margin-top:4px;padding-top:4px;border-top:1px solid #B8DCA0">Total: $${Number(I.amount||0).toLocaleString()}</div></div>`:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:7px 9px">${De?`<div style="font-size:9px;font-weight:700;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:3px 8px;margin-bottom:6px">📍 Milestone: ${De}</div>`:""}<div style="font-size:9px;color:var(--muted);margin-bottom:5px">Invoice: <strong style="color:var(--text)">$${Number(I.amount||0).toLocaleString()}</strong> · Max payable: <strong style="color:${ge>0?"var(--amber)":"var(--green)"}">$${ge.toLocaleString()}</strong></div>${ht}${Pe<Number(I.amount||0)?`<div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:5px;padding-bottom:4px;border-bottom:1px solid var(--border)">Remaining: $${Pe.toLocaleString()}</div>`:""}<div style="display:flex;gap:4px;margin-bottom:4px"><input type="number" id="invpamt_${I.id}" min="0.01" max="${ge}" step="0.01" oninput="const v=parseFloat(this.value)||0;this.style.border=v>${ge}?'2px solid var(--red)':'1px solid var(--border)'" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none" placeholder="Amount (max $${ge.toLocaleString()})"/><input type="date" id="invpdate_${I.id}" value="${Nt()}" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button onclick="addPartialPayment('${I.id}')" class="btn btn-ghost btn-xs" style="flex:1;justify-content:center;font-size:10px">+ Partial Pay</button><button onclick="markInvPaid('${I.id}')" class="btn btn-green btn-xs" style="flex:1;justify-content:center;font-size:10px">✓ Full Pay</button></div></div>`,ea=`<div style="display:flex;flex-direction:column;gap:3px">${(I.lienSent||[]).map(Q=>`<div style="display:flex;align-items:center;gap:4px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:4px;padding:3px 7px;margin-bottom:1px"><span style="font-size:8px;color:#166534;font-weight:700">✉ Sent</span><span style="font-size:8px;color:#166534;flex:1">${Q.type}</span><span style="font-size:8px;color:#166534;opacity:.7;white-space:nowrap">${J(Q.date)}</span></div>`).join("")}<button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${I.id}','Unconditional Final')">📧 Uncond. Final</button><button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${I.id}','Conditional Final')">📧 Cond. Final</button>${(I.lienFiles||[]).length?`<div style="display:flex;flex-direction:column;gap:2px;margin-top:2px">${(I.lienFiles||[]).map(Q=>`<div style="display:flex;align-items:center;gap:4px;background:var(--teal-l);border:1px solid #9FE0CB;border-radius:4px;padding:2px 6px;max-width:170px"><span style="font-size:10px">${dt(Q.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Q.name}</span><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:1px 4px;flex-shrink:0" onclick="viewFile('${Q.id}')">View</button><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:9px;padding:1px 4px;flex-shrink:0" onclick="dlFile('${Q.id}')">⬇</button></div>`).join("")}</div>`:""}<button class="btn btn-xs" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:2px 6px" onclick="openModal('invlien','${I.id}')">📎 ${(I.lienFiles||[]).length?"+ Add Signed":"Upload Signed Waiver"}</button></div>`;return`<tr style="background:${q}"><td style="padding:8px 10px"><div style="font-size:12px;font-weight:600;color:var(--navy)">${I.invoiceNo||"—"}</div>${De?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${De}</div>`:""}<div style="font-size:10px;color:var(--muted)">${I.description||""}</div></td><td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${I.invoiceDate?J(I.invoiceDate):"—"}</td><td style="padding:8px 10px;font-size:10px;color:${I.dueDate&&new Date(I.dueDate+"T12:00:00")<new Date&&!I.paid?"var(--red)":"var(--muted)"};white-space:nowrap">${I.dueDate?J(I.dueDate):"—"}</td><td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${I.paid?"var(--green)":"var(--text)"}">${R(I.amount||0)}</span></td><td style="padding:6px 8px;min-width:150px">${Vt}</td><td style="padding:6px 8px">${ea}</td><td style="padding:8px 10px;white-space:nowrap"><button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 6px" onclick="nav('invoices')">View</button></td></tr>`}).join(""):'<tr><td colspan="7" style="padding:14px;text-align:center;color:var(--muted);font-size:12px">No approved invoices yet.</td></tr>',qPaid:W,qBal:N,qPct:F}}function x(k){return k.isManualGroup?k._manualInvs||[]:k.isQuoteGroup?k._quoteInvs||[]:(e.invoices||[]).filter(D=>D.vcId===k.id&&D.approvalStatus==="approved")}function S(k){if(k.isManualGroup)return[];if(k.milestones&&k.milestones.length)return k.milestones;if(k.isQuoteGroup){const D=(e.vendors||[]).find(z=>z.quoteId===k.sourceQuoteId||z.vendor===k.vendor);return(D==null?void 0:D.milestones)||[]}return[]}function C(k){const D=x(k),z=S(k);if(k.isManualGroup)return'<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">Manual invoices are tracked directly per invoice, so there is no contract milestone breakup for this vendor.</div>';const M=[];z.forEach(N=>{const F=D.filter(oe=>oe.milestoneId===N.id),O=F.reduce((oe,Pe)=>oe+Number(Pe.amount||0),0),I=F.reduce((oe,Pe)=>oe+(Pe.paid?Number(Pe.amount||0):(Pe.partialPayments||[]).reduce((De,ht)=>De+Number(ht.amount||0),0)),0),U=Number(N.amount||0)||O,q=Math.max(U-I,0),te=U?Math.min(100,Math.round(I/U*100)):0;M.push({name:N.name||"Milestone",scheduled:U,invoiced:O,paid:I,balance:q,pct:te})});const W=D.filter(N=>!N.milestoneId||!z.some(F=>F.id===N.milestoneId));if(W.length){const N=W.reduce((O,I)=>O+Number(I.amount||0),0),F=W.reduce((O,I)=>O+(I.paid?Number(I.amount||0):(I.partialPayments||[]).reduce((U,q)=>U+Number(q.amount||0),0)),0);M.push({name:"Unassigned",scheduled:N,invoiced:N,paid:F,balance:Math.max(N-F,0),pct:N?Math.min(100,Math.round(F/N*100)):0})}return M.length?`<div style="padding:10px 16px;border-bottom:1px solid var(--border);background:#FFFDF8">
      <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Milestone Payment Breakup</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        ${M.map(N=>`<div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:9px 10px">
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:5px">
            <span style="font-size:11px;font-weight:700;color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.name}</span>
            <span style="font-size:10px;font-weight:700;color:${N.pct===100?"var(--green)":N.pct>0?"var(--amber)":"var(--muted)"}">${N.pct}%</span>
          </div>
          <div style="height:5px;background:var(--border);border-radius:999px;overflow:hidden;margin-bottom:7px"><div style="height:100%;width:${N.pct}%;background:${N.pct===100?"var(--green-m)":N.pct>0?"var(--amber-m)":"#D7D3CB"}"></div></div>
          <div style="font-size:10px;color:var(--muted)">Scheduled: <strong style="color:var(--text)">${R(N.scheduled)}</strong></div>
          <div style="font-size:10px;color:var(--muted)">Invoiced: <strong style="color:var(--text)">${R(N.invoiced)}</strong></div>
          <div style="font-size:10px;color:var(--green)">Paid: <strong>${R(N.paid)}</strong></div>
          <div style="font-size:10px;color:${N.balance>0?"var(--red)":"var(--green)"}">Balance: <strong>${R(N.balance)}</strong></div>
        </div>`).join("")}
      </div>
    </div>`:'<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">No milestone breakup available yet for this vendor.</div>'}const E='<table style="width:100%;border-collapse:collapse;table-layout:fixed"><thead><tr style="background:var(--bg)"><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Invoice #</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Date</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--red);text-align:left;border-bottom:1px solid var(--border);width:8%">Due</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Amount</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:18%">Payment</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--teal);text-align:left;border-bottom:1px solid var(--border);width:14%">🔏 Lien Waiver</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:6%"></th></tr></thead><tbody>';Sx(t,e);const P=t.map(k=>{const D=v(k,(e.invoices||[]).filter(z=>z.vcId===k.id&&z.approvalStatus==="approved"),k.amount);return`<div class="panel pay-vendor-card" data-vendor="${k.id}" style="margin-bottom:16px">
      <div style="background:var(--navy);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${k.vendor}</span>
          <span class="badge" style="background:rgba(26,107,196,.3);color:#8AAAC8;border:1px solid rgba(26,107,196,.4);font-size:9px">Vendor Contract</span>
          ${k.trade?`<span style="font-size:11px;color:#8AAAC8">${k.trade}</span>`:""}
          ${k.contractNo?`<span style="font-size:10px;color:#8AAAC8;opacity:.8">#${k.contractNo}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${R(k.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.15);padding-left:10px">
            <button onclick="exportVCPaymentLedgerPDF('${k.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF ledger">🖨 PDF</button>
            <button onclick="exportVCPaymentLedgerExcel('${k.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel ledger">📊 Excel</button>
            <button onclick="openLedgerEmail('vendor','${k.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(26,107,196,.35);border:1px solid rgba(26,107,196,.5);color:#7CC4F8;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger to vendor">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${D.qPct===100?"var(--green)":"var(--text)"}">${D.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${D.qPct}%;background:${D.qPct===100?"var(--green-m)":D.qPct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${R(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--red)":"var(--green)"}">${R(D.qBal)}</div></div>
        </div>
      </div>
      ${C(k)}${E}${D.invRows}</tbody></table>
    </div>`}),$=c.map(k=>{const D=v(null,k._quoteInvs,k.amount);return`<div class="panel pay-vendor-card" data-vendor="${k.id}" style="margin-bottom:16px">
      <div style="background:var(--blue);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${k.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">Approved Quote</span>
          ${k.scope?`<span style="font-size:10px;color:rgba(255,255,255,.78)">${k.scope}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${R(k.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.25);padding-left:10px">
            <button onclick="exportPaymentLedgerPDF('${k.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF">🖨 PDF</button>
            <button onclick="exportPaymentLedgerExcel('${k.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel">📊 Excel</button>
            <button onclick="openLedgerEmail('quote','${k.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${D.qPct===100?"var(--green)":"var(--text)"}">${D.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${D.qPct}%;background:${D.qPct===100?"var(--green-m)":D.qPct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${R(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--red)":"var(--green)"}">${R(D.qBal)}</div></div>
        </div>
      </div>
      ${C(k)}${E}${D.invRows}</tbody></table>
    </div>`}),A=i.map(k=>{const D=v(null,k._manualInvs,k.amount),z=encodeURIComponent(k.vendor);return`<div class="panel pay-vendor-card" data-vendor="${k.id}" style="margin-bottom:16px">
      <div style="background:var(--teal);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${k.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">✏ Manual Invoices</span>
          <span style="font-size:10px;color:rgba(255,255,255,.7)">${k._manualInvs.length} invoice${k._manualInvs.length!==1?"s":""}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${R(k.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.25);padding-left:10px">
            <button onclick="exportVendorNameLedgerPDF(decodeURIComponent('${z}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF">🖨 PDF</button>
            <button onclick="exportVendorNameLedgerExcel(decodeURIComponent('${z}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel">📊 Excel</button>
            <button onclick="openLedgerEmail('vendorname',decodeURIComponent('${z}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${D.qPct===100?"var(--green)":"var(--text)"}">${D.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${D.qPct}%;background:${D.qPct===100?"var(--green-m)":D.qPct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${R(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Total Invoiced</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--amber)":"var(--green)"}">${R(k.amount)}</div></div>
        </div>
      </div>
      ${C(k)}${E}${D.invRows}</tbody></table>
    </div>`});l.innerHTML=[...P,...$,...A].join(""),l.querySelectorAll(`button[onclick*="openModal('invlien',"]`).forEach(k=>{var O;const z=(k.getAttribute("onclick")||"").match(/openModal\('invlien','([^']+)'\)/);if(!z)return;const M=z[1],W=(e.invoices||[]).find(I=>I.id===M);if(!W||(W.lienFiles||[]).length===0||(O=k.parentElement)!=null&&O.querySelector(`[data-waiver-dl="${M}"]`))return;const N=document.createElement("button");N.className="btn btn-xs",N.setAttribute("data-waiver-view",M),N.style.background="#EEF9F5",N.style.color="var(--teal)",N.style.border="1px solid #9FE0CB",N.style.fontSize="8px",N.style.padding="2px 6px",N.textContent="View Waivers",N.onclick=()=>yf(M);const F=document.createElement("button");F.className="btn btn-xs",F.setAttribute("data-waiver-dl",M),F.style.background="#E8F2FC",F.style.color="var(--blue)",F.style.border="1px solid #B0D0F0",F.style.fontSize="8px",F.style.padding="2px 6px",F.textContent="⬇ All Waivers",F.onclick=()=>hf(M),k.parentElement.insertBefore(N,k),k.parentElement.insertBefore(F,k)})}function Ng(e,t){const n=B();if(!n)return;const r=(n.quotes||[]).find(a=>a.id===e);if(!r)return;const o=(r.payMilestones||[]).find(a=>a.id===t);if(!o)return;const i=h("pd_"+t);o.paid=!0,o.paidDate=(i==null?void 0:i.value)||Nt(),Z(),ne(),j("✓ Payment marked as paid")}function Ig(e,t){Qi("markpp",e+"|"+t)}function zg(e,t){const n=B();if(!n)return;const r=(n.milestones||[]).find(i=>i.id===e);if(!r)return;const o=(r.progressPayments||[]).find(i=>i.id===t);o&&(o.paid=!1,o.receivedDate="",Z(),ne(),j("Payment unmarked"))}function Lg(e,t){const n=B();if(!n||!confirm("Delete this progress payment?"))return;const r=(n.milestones||[]).find(o=>o.id===e);r&&(r.progressPayments=(r.progressPayments||[]).filter(o=>o.id!==t),Z(),ne(),j("🗑 Deleted"))}function Tg(e,t){const n=B();if(!n)return;const r=(n.quotes||[]).find(i=>i.id===e);if(!r)return;const o=(r.payMilestones||[]).find(i=>i.id===t);o&&(o.paid=!1,o.paidDate="",Z(),ne(),j("Payment unmarked"))}function Bg(e,t,n){const r=B();if(!r)return;const o=(r.quotes||[]).find(a=>a.id===e);if(!o)return;const i=(o.payMilestones||[]).find(a=>a.id===t);i&&(i.paidDate=n,Z(),j("📅 Date updated"))}function Mg(e,t){const n=B();if(!n||!confirm("Delete this payment milestone?"))return;const r=(n.quotes||[]).find(o=>o.id===e);r&&(r.payMilestones=(r.payMilestones||[]).filter(o=>o.id!==t),Z(),ne(),j("🗑 Deleted"))}function Fl(){const e=[{l:"Envelope / Insulation",p:90,s:"Verified",c:"var(--green-m)"},{l:"HVAC Efficiency",p:75,s:"In Progress",c:"var(--amber-m)"},{l:"Lighting (Indoor)",p:85,s:"In Progress",c:"var(--amber-m)"},{l:"Solar Ready (PV)",p:100,s:"Compliant",c:"var(--green-m)"},{l:"HERS Verification",p:30,s:"Pending",c:"var(--gray)"}],t=[{l:"Water Efficiency §4.303",p:100,s:"Compliant",c:"var(--green-m)"},{l:"Constr. Waste §4.408",p:65,s:"65% Diverted",c:"var(--amber-m)"},{l:"VOC Limits §4.504",p:100,s:"Verified",c:"var(--green-m)"},{l:"EV Charging §4.106.4",p:50,s:"Roughed-in",c:"var(--amber-m)"},{l:"Stormwater §4.106.3",p:80,s:"In Review",c:"var(--amber-m)"}],n=r=>r.map(o=>`<div class="comp-row"><span class="comp-lbl">${o.l}</span><div class="comp-bar"><div class="comp-fill" style="width:${o.p}%;background:${o.c}"></div></div><span class="comp-st" style="color:${o.c}">${o.s}</span></div>`).join("");h("t24-list").innerHTML=n(e),h("cg-list").innerHTML=n(t)}function _l(){const e=B();if(!e)return;const t=[];(e.quotes||[]).forEach(r=>{(r.files||[]).forEach(o=>t.push({...o,src:"Quote: "+r.vendor})),(r.payMilestones||[]).forEach(o=>{(o.files||[]).forEach(i=>t.push({...i,src:"Payment Proof: "+o.name})),(o.lienFiles||[]).forEach(i=>t.push({...i,src:"Lien Waiver: "+o.name}))})}),(e.plans||[]).forEach(r=>t.push({...r,src:"Plans & Docs"})),(e.inspections||[]).forEach(r=>(r.files||[]).forEach(o=>t.push({...o,src:"Inspection: "+r.name}))),(e.milestones||[]).forEach(r=>(r.payFiles||[]).forEach(o=>t.push({...o,src:"Milestone: "+r.name}))),t.forEach(r=>{Fe(r)&&(Mt[r.id]=r)});const n=h("exp-files");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">📂</div>No files attached to this project yet.</div>';return}n.innerHTML=`<div class="attach-list">${t.map(r=>`<div class="a-item"><span class="a-icon">${dt(r.name)}</span><div style="flex:1;min-width:0"><div class="a-name">${r.name}</div><div style="font-size:10px;color:var(--muted)">${r.src} · ${Dl(r.size||0)}</div></div><button class="a-dl" onclick="dlFile('${r.id}')">⬇ Download</button></div>`).join("")}</div>`}let X=null,H=null,Y=[],on=0;function Qi(e,t=null){var i,a,c;X=e,H=t,Y=[];const n=B(),r={project:"Project",work:"Work Item",milestone:"Milestone",quote:"Quote",plan:"Upload Document",inspection:"Inspection",qfiles:"Attach Files",insfiles:"Attach Reports",paymilestone:"Payment Milestone",payproof:"Proof of Payment",payinvoice:"Invoice",lienwvr:"Lien Waiver",msprogpay:"Progress Payment",msppfiles:"Proof of Payment",markpp:"Mark as Received",invoice:"Invoice",invfiles:"Invoice Files",invproof:"Proof of Payment",ppfiles:"Payment Supporting Files",vendor:"Vendor Contract",venfiles:"Contract Files","chklist-cat":"Manage Categories","chklist-item":"Checklist Item","qaqc-item":"QA/QC Entry",qafiles:"QA/QC Files"};h("modal-title").textContent=(t&&!t.includes("|")?"Edit ":"Add ")+r[e];let o="";if(e==="project"){const l=t?L.projects.find(m=>m.id===t):{},d=["CA","AZ","NV","OR","WA","TX","FL","NY","Other"].map(m=>`<option value="${m}"${(l.state||"CA")===m?" selected":""}>${m}</option>`).join(""),u=["R-3 Single-Family Residential","R-2 Multi-Family Residential","B Office / Mixed-Use","A Assembly","E Educational","F Factory / Industrial","I Institutional","M Mercantile","S Storage","U Utility"].map(m=>`<option value="${m}"${(l.type||"")===m?" selected":""}>${m}</option>`).join("");o=`
      <div class="fr"><label class="fl">Project Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. 1510 Madera Drive"/></div>
      <div class="fr"><label class="fl">Street Address</label><input class="fi" id="f-street" value="${l.street||l.address||""}" placeholder="e.g. 1510 Madera Drive" oninput="cityLookup()"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">City <span id="city-ok" style="font-size:9px;color:var(--green);font-weight:700;margin-left:4px"></span></label><input class="fi" id="f-city" value="${l.city||""}" placeholder="e.g. Cupertino" oninput="cityLookup()"/></div>
        <div class="fr"><label class="fl">State</label><select class="fs" id="f-state" onchange="cityLookup()">${d}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">County <span id="county-ok" style="font-size:9px;color:var(--green);font-weight:700;margin-left:4px"></span></label><input class="fi" id="f-county" value="${l.county||""}" placeholder="e.g. Santa Clara County"/></div>
        <div class="fr"><label class="fl">ZIP Code</label><input class="fi" id="f-zip" value="${l.zip||""}" placeholder="e.g. 95014" maxlength="5" oninput="cityLookup()"/></div>
      </div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Permit Number</label>
          <input class="fi" id="f-permit" value="${l.permit||""}" placeholder="e.g. CUPR-2025-00891"/>
        </div>
        <div class="fr"><label class="fl">APN</label><input class="fi" id="f-apn" value="${l.apn||""}" placeholder="e.g. 326-10-044"/></div>
      </div>
      <div class="fr"><label class="fl">Occupancy / Type</label><select class="fs" id="f-type">${u}</select></div>
      <div class="fr"><label class="fl">Project Color</label><div class="color-row">${Ss.map(m=>`<div class="cswatch${(l.color||Ss[0])===m?" sel":""}" style="background:${m}" onclick="pickColor('${m}',this)" data-color="${m}"></div>`).join("")}</div></div>
      <div style="margin:10px 0 6px;border-top:1px solid var(--border);padding-top:10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted)">👤 Client / Owner Information</div>
      <div class="fr"><label class="fl">Client / Owner Name</label><input class="fi" id="f-client" value="${l.client||""}" placeholder="e.g. John Doe / ABC Corp"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Client Phone</label><input class="fi" id="f-clientPhone" value="${l.clientPhone||""}" placeholder="+1 555 000 1234"/></div>
        <div class="fr"><label class="fl">Client Email</label><input class="fi" id="f-clientEmail" value="${l.clientEmail||""}" placeholder="client@example.com"/></div>
      </div>
      <div class="fr"><label class="fl">Client Address</label><input class="fi" id="f-clientAddr" value="${l.clientAddr||""}" placeholder="123 Main St, City, State"/></div>`,setTimeout(()=>{kf()},50)}else if(e==="work"){const l=t?(n&&n.works||[]).find(d=>d.id===t):{};o=`
      <div class="fr"><label class="fl">Work Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. Concrete Foundation Walls"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">CBC Reference</label><input class="fi" id="f-ref" value="${l.ref||""}" placeholder="e.g. CBC §1901"/></div>
        <div class="fr"><label class="fl">Contractor</label><input class="fi" id="f-contractor" value="${l.contractor||""}" placeholder="Contractor name"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-status">${[["active","Active"],["inprogress","In Progress"],["starting","Starting"],["hold","On Hold"],["caloshahold","CalOSHA Hold"],["complete","Complete"]].map(([d,u])=>`<option value="${d}"${l.status===d?" selected":""}>${u}</option>`).join("")}</select></div>
        <div class="fr"><label class="fl">Progress %</label><input class="fi" id="f-pct" type="number" min="0" max="100" value="${l.pct??0}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${l.notes||""}</textarea></div>`}else if(e==="milestone"){const l=t?(n&&n.milestones||[]).find(d=>d.id===t):{};o=`
      <div class="fr"><label class="fl">Milestone Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. Footing Inspection Passed"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">CBC Reference</label><input class="fi" id="f-ref" value="${l.ref||""}" placeholder="e.g. CBC §110.3.1"/></div>
        <div class="fr"><label class="fl">Target Date</label><input class="fi" id="f-date" type="date" value="${l.date||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Status</label><select class="fs" id="f-status">${[["upcoming","Upcoming"],["inprogress","In Progress"],["done","Done / Achieved"]].map(([d,u])=>`<option value="${d}"${l.status===d?" selected":""}>${u}</option>`).join("")}</select></div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${l.notes||""}</textarea></div>
      <div class="divider"></div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:10px">💳 Payment</div>
      <div class="fg">
        <div class="fr"><label class="fl">Payment Amount ($)</label><input class="fi" id="f-payamt" type="number" value="${l.payAmt||""}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Payment Date</label><input class="fi" id="f-paydate" type="date" value="${l.payDate||""}"/></div>
      </div>`}else if(e==="quote"){const l=t?(n&&n.quotes||[]).find(p=>p.id===t):{};l.files&&(Y=[...l.files],G(Y));const d=["Div 01 — General Requirements","Div 02 — Existing Conditions","Div 03 — Concrete","Div 04 — Masonry","Div 05 — Metals / Structural Steel","Div 06 — Wood & Plastics","Div 07 — Thermal & Moisture Protection","Div 08 — Openings / Doors & Windows","Div 09 — Finishes","Div 10 — Specialties","Div 11 — Equipment","Div 12 — Furnishings","Div 13 — Special Construction","Div 14 — Conveying Equipment","Div 21 — Fire Suppression","Div 22 — Plumbing","Div 23 — HVAC","Div 25 — Integrated Automation","Div 26 — Electrical","Div 27 — Communications","Div 28 — Electronic Safety","Div 31 — Earthwork","Div 32 — Exterior Improvements","Div 33 — Utilities","Div 48 — Electrical Power Generation"].map(p=>`<option value="${p}"${(l.csi||"")===p?" selected":""}>${p}</option>`).join(""),u=["CBC 2022","CPC 2022","CMC 2022","CEC 2022","CALGreen 2022","Title 24 Part 6","CFC 2022","NFPA 13","NFPA 72","NFPA 101","AISC 341","ACI 318","ASCE 7-22","CalOSHA Title 8","Other"].map(p=>`<option value="${p}"${(l.ref||"")===p?" selected":""}>${p}</option>`).join(""),m=[["new","New"],["review","Under Review"],["approved","Approved"],["negotiating","Negotiating"]];o=`
      <div class="fr"><label class="fl">Vendor / Subcontractor Name *</label><input class="fi" id="f-vendor" value="${l.vendor||""}" placeholder="e.g. Pacific Coast HVAC Inc."/></div>
      <div class="fr"><label class="fl">Scope of Work</label><input class="fi" id="f-scope" value="${l.scope||""}" placeholder="e.g. Central mechanical system — all floors"/></div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Code Reference</label>
          <select class="fs" id="f-ref" onchange="if(this.value==='Other')this.style.display='none',document.getElementById('f-ref-custom').style.display=''">
            <option value="">-- Select Code --</option>
            ${u}
          </select>
          <input class="fi" id="f-ref-custom" placeholder="Enter code reference…" value="${["CBC 2022","CPC 2022","CMC 2022","CEC 2022","CALGreen 2022","Title 24 Part 6","CFC 2022","NFPA 13","NFPA 72","NFPA 101","AISC 341","ACI 318","ASCE 7-22","CalOSHA Title 8","Other",""].includes(l.ref||"")?"":l.ref}" style="display:${["CBC 2022","CPC 2022","CMC 2022","CEC 2022","CALGreen 2022","Title 24 Part 6","CFC 2022","NFPA 13","NFPA 72","NFPA 101","AISC 341","ACI 318","ASCE 7-22","CalOSHA Title 8","Other",""].includes(l.ref||"")?"none":"block"};margin-top:5px"/>
        </div>
        <div class="fr">
          <label class="fl">CSI Division</label>
          <select class="fs" id="f-csi">
            <option value="">-- Select CSI Division --</option>
            ${d}
          </select>
        </div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-amount" type="number" value="${l.amount||""}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Date Received</label><input class="fi" id="f-date" type="date" value="${l.date||""}"/></div>
      </div>
      <div class="fr">
        <label class="fl">Status</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">
          ${m.map(([p,g])=>`
            <label style="display:flex;align-items:center;gap:7px;padding:8px 14px;border:2px solid ${l.status===p?"var(--blue-m)":"var(--border)"};border-radius:8px;cursor:pointer;background:${l.status===p?"var(--blue-l)":"#fff"};font-size:13px;font-weight:500;flex:1;min-width:100px;transition:.13s" onclick="selectQuoteStatus('${p}',this)">
              <input type="radio" name="q-status" value="${p}" ${l.status===p?"checked":""} style="width:15px;height:15px;accent-color:var(--blue-m)"/>
              ${g}
            </label>`).join("")}
        </div>
        <input type="hidden" id="f-status" value="${l.status||"new"}"/>
      </div>`}else if(e==="plan")o=`
      <div class="fr"><label class="fl">Document Type</label><select class="fs" id="f-plan-type">${["Architectural Plans","Structural Plans","Electrical Plans","Plumbing Plans","Mechanical Plans","Site Plan","Permit","Geotechnical Report","Soils Report","Title 24 Compliance","CALGreen Checklist","Inspection Report","Contract","Other"].map(l=>`<option>${l}</option>`).join("")}</select></div>
      ${Me("plan-files","Drop plans, drawings, PDFs, DWG, or any document here…")}
      <div style="font-size:10px;color:var(--muted);margin-top:6px;padding:0 2px">
        Max file size: 500MB per file &nbsp;·&nbsp; Files upload to your backend and sync with the project across browsers
      </div>`;else if(e==="inspection"){const l=t?(n&&n.inspections||[]).find(u=>u.id===t):{},d=(()=>{let u='<option value="">-- Select Time --</option>';for(let m=6;m<=19;m++)for(let p=0;p<60;p+=30){const g=String(m).padStart(2,"0")+":"+String(p).padStart(2,"0"),b=m>=12?"PM":"AM",y=m%12||12;u+=`<option value="${g}"${l.inspTime===g?" selected":""}>${y}:${String(p).padStart(2,"0")} ${b}</option>`}return u})();o=`
      <div class="fr"><label class="fl">Inspection Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. Concrete Pour — Level 2 Slab"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Inspection Date *</label><input class="fi" id="f-inspdate" type="date" value="${l.inspDate||""}"/></div>
        <div class="fr"><label class="fl">Inspection Time *</label><select class="fs" id="f-insptime">${d}</select></div>
      </div>
      <div class="fr"><label class="fl">Location / Inspector</label><input class="fi" id="f-location" value="${l.location||""}" placeholder="e.g. 1510 Madera Dr · Cupertino Inspector"/></div>
      <div class="fr"><label class="fl">Code References</label><input class="fi" id="f-refs" value="${l.refs||""}" placeholder="e.g. CBC §110.3.2 · CEC 2022"/></div>
      <div class="fr"><label class="fl">AHJ</label><select class="fs" id="f-ahj">${[["cupertino","City of Cupertino"],["calosha","CalOSHA"],["icc","ICC-Certified Inspector"]].map(([u,m])=>`<option value="${u}"${l.ahj===u?" selected":""}>${m}</option>`).join("")}</select></div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${l.notes||""}</textarea></div>`}else if(e==="qfiles"){const l=(n&&n.quotes||[]).find(d=>d.id===t);if(!l){he();return}Y=[...l.files||[]],G(Y),h("modal-title").textContent="Attach Files — "+l.vendor,o=`${Me("qfiles","Drop quote files, PDFs, drawings…")}${Ye()}`}else if(e==="insfiles"){const l=(n&&n.inspections||[]).find(d=>d.id===t);if(!l){he();return}Y=[...l.files||[]],G(Y),h("modal-title").textContent="Attach Reports — "+l.name,o=`${Me("insfiles","Drop inspection reports, photos, PDFs…")}${Ye()}`}else if(e==="paymilestone"){const l=(t||"").split("|"),d=l[0],u=l[1]||"",m=(n&&n.quotes||[]).find(g=>g.id===d);if(!m){he();return}m.payMilestones=m.payMilestones||[];const p=u?m.payMilestones.find(g=>g.id===u):{};h("modal-title").textContent=(u?"Edit":"Add")+" Payment Milestone",o=`
      <div style="background:var(--navy);border-radius:7px;padding:10px 13px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:12px;font-weight:700;color:#fff">${m.vendor}</div><div style="font-size:10px;color:#8AAAC8">${m.scope}</div></div>
        <div style="text-align:right"><div style="font-size:10px;color:#8AAAC8">Quote Total</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${R(m.amount)}</div></div>
      </div>
      <div class="fr"><label class="fl">Milestone Name *</label><input class="fi" id="f-pmname" value="${p&&p.name||""}" placeholder="e.g. 30% Progress Payment"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-pmamt" type="number" value="${p&&p.amount||""}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-pmdue" type="date" value="${p&&p.dueDate||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-pmnotes" style="min-height:50px">${p&&p.notes||""}</textarea></div>`}else if(e==="payproof"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(m=>m.id===l[0]),u=d?(d.payMilestones||[]).find(m=>m.id===l[1]):null;if(!u){he();return}Y=[...u.files||[]],G(Y),h("modal-title").textContent="Proof of Payment — "+u.name,o=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:11px 13px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:13px;font-weight:600">${u.name}</div><div style="font-size:11px;color:var(--muted)">${d.vendor}</div></div>
        <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700">${R(u.amount||0)}</div>${u.paid?`<span class="badge b-green">✓ Paid ${u.paidDate?"· "+J(u.paidDate):""}</span>`:'<span class="badge b-gray">Unpaid</span>'}</div>
      </div>
      ${Me("payproof","Drop receipts, bank slips, payment confirmations…")}${Ye()}`}else if(e==="msprogpay"){const l=(t||"").split("|"),d=l[0],u=l[1]||"",m=(n&&n.milestones||[]).find(b=>b.id===d);if(!m){he();return}m.progressPayments=m.progressPayments||[];const p=u?m.progressPayments.find(b=>b.id===u):{};h("modal-title").textContent=(u?"Edit":"Add")+" Progress Payment — "+m.name;const g=["10% Mobilization","20% Foundation Complete","30% Progress Payment","40% Progress Payment","50% Progress Payment","60% Progress Payment","Final Payment","Retention Release","Other"].map(b=>`<option value="${b}"${(p&&p.name)===b?" selected":""}>${b}</option>`).join("");o=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:13px;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:13px;font-weight:600">${m.name}</div>
        ${m.payAmt?`<div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy)">Contract: ${R(m.payAmt)}</div>`:""}
      </div>
      <div class="fr">
        <label class="fl">Payment Name / Type</label>
        <select class="fs" id="f-ppname" onchange="if(this.value!='Other'){}">
          <option value="">-- Select Payment Type --</option>
          ${g}
        </select>
        <input class="fi" id="f-ppname-custom" placeholder="Or type custom name…" style="margin-top:6px;display:none"/>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-ppamt" type="number" value="${p&&p.amount||""}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-ppdue" type="date" value="${p&&p.dueDate||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-ppnotes" style="min-height:44px">${p&&p.notes||""}</textarea></div>`,H=t.includes("|")?t:d+"|",(i=document.getElementById("f-ppname"))==null||i.addEventListener("change",function(){const b=document.getElementById("f-ppname-custom");b&&(b.style.display=this.value==="Other"?"block":"none")})}else if(e==="msppfiles"){const l=(t||"").split("|"),d=l[0],u=l[1],m=(n&&n.milestones||[]).find(g=>g.id===d);if(!m){he();return}m.progressPayments=m.progressPayments||[];const p=m.progressPayments.find(g=>g.id===u);if(!p){he();return}Y=[...p.files||[]],G(Y),h("modal-title").textContent="Proof of Payment — "+p.name,o=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><div style="font-size:13px;font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--muted)">${m.name}</div></div>
          <div style="text-align:right">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700">${R(p.amount||0)}</div>
            ${p.paid?`<span class="badge b-green">✓ Received ${p.receivedDate?"· "+J(p.receivedDate):""}</span>`:'<span class="badge b-gray">Not yet received</span>'}
          </div>
        </div>
      </div>
      ${Me("msppfiles","Drop receipts, bank transfer slips, cheques, payment confirmations…")}${Ye()}`}else if(e==="markpp"){const l=(t||"").split("|"),d=l[0],u=l[1],m=(n&&n.milestones||[]).find(g=>g.id===d);if(!m){he();return}const p=(m.progressPayments||[]).find(g=>g.id===u);if(!p){he();return}h("modal-title").textContent="Mark as Received — "+p.name,o=`
      <div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:12px 14px;margin-bottom:14px">
        <div style="font-size:14px;font-weight:700;color:var(--green)">${p.name}</div>
        <div style="font-size:13px;color:var(--text);margin-top:2px">${m.name} · <strong>${R(p.amount||0)}</strong></div>
      </div>
      <div class="fr"><label class="fl">Date Money Received *</label><input class="fi" id="f-pprecdate" type="date" value="${p.receivedDate||Nt()}"/></div>
      <div class="fr"><label class="fl">Notes (optional)</label><textarea class="ft" id="f-pprechnotes" style="min-height:44px">${p.notes||""}</textarea></div>`}else if(e==="payinvoice"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(m=>m.id===l[0]),u=d?(d.payMilestones||[]).find(m=>m.id===l[1]):null;if(!u){he();return}Y=[...u.invoiceFiles||[]],G(Y),h("modal-title").textContent="Invoice — "+u.name,o=`
      <div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div><div style="font-size:12px;font-weight:700;color:var(--amber)">🧾 Invoice</div><div style="font-size:10px;color:var(--amber);opacity:.8">${u.name} — ${d.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--amber)">${R(u.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--amber);border-top:1px solid rgba(168,98,0,.2);padding-top:6px"><strong>Tip:</strong> Upload the contractor invoice, billing statement, or draw request for this payment.</div>
      </div>
      ${Me("payinvoice","Drop invoice PDF, billing statement, or draw request…")}${Ye()}`}else if(e==="lienwvr"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(m=>m.id===l[0]),u=d?(d.payMilestones||[]).find(m=>m.id===l[1]):null;if(!u){he();return}Y=[...u.lienFiles||[]],G(Y),h("modal-title").textContent="Lien Waiver — "+u.name,o=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
          <div><div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div><div style="font-size:10px;color:var(--teal);opacity:.8">${u.name} — ${d.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--teal)">${R(u.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--teal);border-top:1px solid rgba(13,110,88,.2);padding-top:7px"><strong>Tip:</strong> Upload the signed conditional or unconditional lien waiver from the contractor or subcontractor.</div>
      </div>
      ${Me("lienwvr","Drop lien waiver PDF, scan, or image…")}${Ye()}`}if(e==="invoice"){const l=B(),d=t?(l&&l.invoices||[]).find(v=>v.id===t):{},u=(l&&l.quotes||[]).filter(v=>v.status==="approved"),m=l&&l.vendors||[],p=u.map(v=>`<option value="${v.id}" data-name="${v.vendor}" ${(d.quoteId||"")===v.id?" selected":""}>${v.vendor} — Contract (${R(v.amount)})</option>`).join(""),b=m.filter(v=>!u.find(x=>x.id===v.quoteId)).map(v=>`<option value="vc_${v.id}" data-name="${v.vendor}" ${d.vcId===v.id?" selected":""}>${v.vendor} — Contract (${R(v.amount)})</option>`).join(""),y=(l&&l.vendors||[]).find(v=>v.quoteId===d.quoteId||d.vcId&&v.id===d.vcId),f=(y?y.milestones||[]:[]).map(v=>`<option value="${v.id}" ${d.milestoneId===v.id?"selected":""}>${v.name} — $${Number(v.amount||0).toLocaleString()}</option>`).join("");h("modal-title").textContent=(t?"Edit":"Add")+" Invoice",o=`
      <!-- Source toggle -->
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <button type="button" id="inv-src-contract" onclick="invSwitchSource('contract')"
          style="flex:1;padding:8px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;border:2px solid var(--navy);background:var(--navy);color:#fff">
          📋 From Contract
        </button>
        <button type="button" id="inv-src-manual" onclick="invSwitchSource('manual')"
          style="flex:1;padding:8px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;border:2px solid var(--border);background:#fff;color:var(--muted)">
          ✏ Manual / No Contract
        </button>
      </div>

      <!-- From Contract section -->
      <div id="inv-contract-section">
        <div class="fr">
          <label class="fl">Subcontractor / Vendor</label>
          <select class="fs" id="f-inv-vendor" onchange="invUpdateMilestones(this.value)">
            <option value="">-- Select from contracts --</option>
            ${p}
            ${b}
            <option value="__other__">Other / Manual Name</option>
          </select>
          <input class="fi" id="f-inv-vname" placeholder="Or type vendor name" value="${u.find(v=>v.id===d.quoteId)?"":d.vendor||""}" style="margin-top:5px"/>
        </div>
        <div class="fr">
          <label class="fl">Against Milestone <span style="font-size:9px;color:var(--muted)">(from Vendor Contract)</span></label>
          <select class="fs" id="f-inv-milestone" onchange="invMilestoneSelected(this.value,document.getElementById('f-inv-vendor')?.value||'')">
            <option value="">-- Select milestone (optional) --</option>
            ${f}
          </select>
          <div id="f-inv-ms-info" style="margin-top:5px;font-size:10px;color:var(--blue);display:none"></div>
        </div>
      </div>

      <!-- Manual / No Contract section -->
      <div id="inv-manual-section" style="display:none">
        <div class="fr"><label class="fl">Vendor / Company Name *</label>
          <select class="fs" id="f-inv-manual-vendor" onchange="invManualVendorChange(this)">
            <option value="">— Select vendor from directory —</option>
            ${[...new Set((n.vendors||[]).map(v=>v.vendor).filter(Boolean))].sort().map(v=>`<option value="${v}"${(d.vendor||"")==v?" selected":""}>${v}</option>`).join("")}
            <option value="__other__"${!(n.vendors||[]).some(v=>v.vendor===d.vendor)&&d.vendor?" selected":""}>✏ Other / Type manually…</option>
          </select>
        </div>
        <div class="fr" id="f-inv-manual-vendor-other-row" style="display:${!(n.vendors||[]).some(v=>v.vendor===(d.vendor||""))&&d.vendor?"":"none"}">
          <label class="fl">Custom Vendor Name *</label>
          <input class="fi" id="f-inv-manual-vendor-other" value="${!(n.vendors||[]).some(v=>v.vendor===(d.vendor||""))&&d.vendor?d.vendor:""}" placeholder="Type vendor / company name…"/>
        </div>
        <div class="fr"><label class="fl">Work / Service Description</label>
          <input class="fi" id="f-inv-manual-scope" value="${d.manualScope||""}" placeholder="e.g. Rough-in plumbing, Electrical fixtures…"/>
        </div>
      </div>

      <div class="fg" style="margin-top:6px">
        <div class="fr"><label class="fl">Invoice Number *</label><input class="fi" id="f-inv-no" value="${d.invoiceNo||""}" placeholder="e.g. INV-2026-001"/></div>
        <div class="fr"><label class="fl">Invoice Amount ($) *</label><input class="fi" id="f-inv-amt" type="number" value="${d.amount||""}" placeholder="0"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Invoice Date</label><input class="fi" id="f-inv-date" type="date" value="${d.invoiceDate||Nt()}"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-inv-due" type="date" value="${d.dueDate||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Description / Notes</label>
        <textarea class="ft" id="f-inv-desc" style="min-height:50px" placeholder="Describe work completed for this invoice…">${d.description||""}</textarea>
      </div>`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),d.isManual?ks("manual"):ks("contract"),setTimeout(()=>{const v=h("f-inv-vendor");v&&v.value&&rf(v.value)},0);return}if(e==="ppfiles"){const l=(t||"").split("|"),d=B(),u=(d&&d.invoices||[]).find(p=>p.id===l[0]),m=u?(u.partialPayments||[]).find(p=>p.id===l[1]):null;if(!m){he();return}Y=[...m.files||[]],G(Y),h("modal-title").textContent="Supporting Files — Txn "+(m.txnNo||m.id.slice(0,8)),o=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:10px 12px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Payment Evidence</div>
        <div style="display:flex;gap:12px;margin-top:6px;font-size:10px;color:var(--text)">
          <span>Amount: <strong>$${Number(m.amount||0).toLocaleString()}</strong></span>
          <span>Date: <strong>${J(m.date)}</strong></span>
          ${m.txnNo?`<span>Txn: <strong style="color:var(--blue)">${m.txnNo}</strong></span>`:""}
        </div>
      </div>
      <div class="fr"><label class="fl">Transaction / Reference # (if not set)</label>
        <input class="fi" id="f-pp-txn" value="${m.txnNo||""}" placeholder="e.g. WIRE-2026-001, TXN#123456…"/>
      </div>
      ${Me("ppfiles","Drop bank receipt, wire confirmation, cheque scan, or payment advice…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="ppfiles";return}if(e==="invproof"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){he();return}Y=[...d.proofFiles||[]],G(Y),h("modal-title").textContent="Proof of Payment — "+(d.invoiceNo||d.vendor||"Invoice"),o=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Proof of Payment</div>
        <div style="font-size:10px;color:var(--blue);margin-top:3px">Attach bank receipt, transfer confirmation, cheque scan, or payment advice for invoice ${d.invoiceNo||""}.</div>
      </div>
      ${Me("invproof","Drop bank receipt, transfer confirmation, or payment advice…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="invproof";return}if(e==="invlien"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){he();return}Y=[...d.lienFiles||[]],G(Y),h("modal-title").textContent="Lien Waiver — "+(d.invoiceNo||d.vendor||"Invoice"),o=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div>
        <div style="font-size:10px;color:var(--teal);margin-top:3px">Attach conditional or unconditional lien waiver for invoice ${d.invoiceNo||""}.</div>
      </div>
      ${Me("invlien","Drop lien waiver PDF or scan…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="invlien";return}if(e==="invfiles"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){he();return}Y=[...d.files||[]],G(Y),h("modal-title").textContent="Invoice Files — "+(d.invoiceNo||d.vendor||"Invoice"),o=`${Me("invfiles","Drop invoice PDFs, scans, or documents…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="invfiles";return}if(e==="vendor"){const l=B(),d=t?(l&&l.vendors||[]).find(y=>y.id===t):{};(l&&l.quotes||[]).filter(y=>y.status==="approved");const u=["Lump Sum","Unit Price","Cost Plus","GMP","Time & Materials","Design-Build","Other"],m=[["draft","Draft"],["signed","Signed"],["active","Active"],["on-hold","On Hold"],["expired","Expired"],["terminated","Terminated"]],p=xt(),g=p.map(y=>`<option value="${y.id}" data-email="${y.email||""}" data-company="${y.company||y.name}" ${d.vdirId===y.id?"selected":""}>${y.company||y.name}${y.name&&y.company?" ("+y.name+")":""}</option>`).join("");Xe=[...(d.milestones||[]).map(y=>({...y}))];const b=Xe.map((y,w)=>`<div id="venms_${w}" style="display:flex;gap:6px;align-items:flex-end;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px">
        <div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Milestone Name</label><input class="fi" style="font-size:11px;padding:4px 7px" value="${y.name||""}" oninput="venMsChange(${w},'name',this.value)" placeholder="e.g. Mobilization"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Amount ($)</label><input class="fi" style="font-size:11px;padding:4px 7px" type="number" value="${y.amount||""}" oninput="venMsChange(${w},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">% of Contract</label><input class="fi" style="font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${w}" value="${d.amount&&y.amount?Math.round(Number(y.amount)/Number(d.amount)*100)+"%":"—"}" readonly/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Due Date</label><input class="fi" style="font-size:11px;padding:4px 7px" type="date" value="${y.dueDate||""}" oninput="venMsChange(${w},'dueDate',this.value)"/></div>
        <button type="button" onclick="venRemoveMilestone(${w})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;padding:0 4px;flex-shrink:0;margin-bottom:2px">&#215;</button>
      </div>`).join("");h("modal-title").textContent=(t?"Edit":"Add")+" Vendor Contract",o=`
      <!-- ── Vendor & Contract Info ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">1. Contract Parties</div>
      <div class="fr"><label class="fl">Vendor / Subcontractor * <span style="font-weight:400;text-transform:none;color:var(--blue)">(from Vendor Directory)</span></label>
        ${p.length?`<select class="fs" id="f-ven-vdir" onchange="venDirSelect(this)">
              <option value="">-- Select vendor from directory --</option>
              ${g}
            </select>
            ${p.find(y=>y.id===d.vdirId)?"":`<div style="margin-top:6px;font-size:10px;color:var(--amber)">⚠ Vendor not linked — <a onclick="nav('vendor-directory')" style="color:var(--blue);cursor:pointer;text-decoration:underline">Add vendors to directory first</a></div>`}`:`<div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:6px;padding:9px 12px;font-size:12px;color:var(--amber)">⚠ No vendors in directory yet. <a onclick="closeModal();nav('vendor-directory')" style="color:var(--blue);cursor:pointer;text-decoration:underline;font-weight:700">Go to Vendor Directory →</a></div>`}
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Vendor Email Address</label>
          <input class="fi" id="f-ven-email" type="email" value="${d.vendorEmail||""}" placeholder="Auto-filled from directory"/>
        </div>
        <div class="fr"><label class="fl">Trade / Specialty</label>
          <input class="fi" id="f-ven-trade" value="${d.trade||((a=p.find(y=>y.id===d.vdirId))==null?void 0:a.trade)||""}" placeholder="Auto-filled from directory"/>
        </div>
      </div>

      <!-- ── Contract Details ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">2. Contract Details</div>
      <div class="fg">
        <div class="fr"><label class="fl">Contract Number</label><input class="fi" id="f-ven-no" value="${d.contractNo||""}" placeholder="e.g. SC-2026-001"/></div>
        <div class="fr"><label class="fl">Contract Value ($)</label><input class="fi" id="f-ven-amt" type="number" value="${d.amount||""}" placeholder="0" oninput="venUpdateMilestonePct()"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Contract Type</label><select class="fs" id="f-ven-type">${u.map(y=>`<option ${d.contractType===y?"selected":""}>${y}</option>`).join("")}</select></div>
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-ven-status">${m.map(([y,w])=>`<option value="${y}" ${d.status===y?"selected":""}>${w}</option>`).join("")}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Start Date</label><input class="fi" id="f-ven-start" type="date" value="${d.startDate||""}"/></div>
        <div class="fr"><label class="fl">End Date</label><input class="fi" id="f-ven-end" type="date" value="${d.endDate||""}"/></div>
      </div>

      <!-- ── Scope & Exclusions ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">3. Scope of Work</div>
      <div class="fr"><label class="fl">Scope of Work <span style="font-size:9px;color:var(--muted)">(all work to be performed)</span></label>
        <textarea class="ft" id="f-ven-scope" style="min-height:110px" placeholder="Describe the complete scope of work, deliverables, specifications, and all work included…">${d.scope||""}</textarea>
      </div>
      <div class="fr"><label class="fl">Exclusions <span style="font-size:9px;color:var(--red)">(what is NOT included)</span></label>
        <textarea class="ft" id="f-ven-exclusions" style="min-height:70px;border-color:#F5C0C0;background:#FFF8F8" placeholder="e.g. Permits by Owner, Engineering by others, Temporary power by GC, Clean-up by others…">${d.exclusions||""}</textarea>
      </div>
      <div class="fr"><label class="fl">Special Conditions / Notes</label>
        <textarea class="ft" id="f-ven-notes" style="min-height:44px">${d.notes||""}</textarea>
      </div>

      <!-- ── Payment Milestones ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">4. Payment Milestones</div>
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
        <div id="ven-ms-list" style="min-height:10px">${b}</div>
        <button type="button" id="ven-add-ms-btn" onclick="venAddMilestone()" class="btn btn-ghost btn-sm" style="font-size:11px;margin-top:4px">+ Add Milestone</button>
        <div id="ven-ms-total" style="font-size:11px;color:var(--muted);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">${Xe.length?"Total scheduled: $"+Xe.reduce((y,w)=>y+Number(w.amount||0),0).toLocaleString():"No milestones added yet — click + Add Milestone above"}</div>
      </div>`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),setTimeout(()=>{const y=h("ven-add-ms-btn");y&&(y.onclick=()=>wf());const w=h("f-ven-vdir");w&&(w.onchange=f=>bf(f.target)),Cf(),yr()},0),H=t||null,X="vendor";return}if(e==="venfiles"){const l=B(),d=(l&&l.vendors||[]).find(u=>u.id===t);if(!d){he();return}Y=[...d.files||[]],G(Y),h("modal-title").textContent="Contract Files — "+d.vendor,o=`${Me("venfiles","Drop signed contract, SOW, amendments, or exhibits…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="venfiles";return}if(e==="chklist-cat"){const l=B(),d=[...new Set((l&&l.checklist||[]).map(u=>u.category).filter(Boolean))];h("modal-title").textContent="Manage Categories",o=`
      <div class="fr">
        <label class="fl">New Category Name *</label>
        <input class="fi" id="f-cat-new" placeholder="e.g. Waterproofing, Roofing, MEP Rough-In…" autofocus/>
      </div>
      ${d.length?`
      <div style="margin-top:12px">
        <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Existing Categories</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${d.map(u=>`
            <div style="display:flex;align-items:center;gap:0;border:1px solid var(--border);border-radius:6px;overflow:hidden">
              <span style="padding:5px 10px;font-size:11px;font-weight:500;background:var(--bg)">${u}</span>
              <button onclick="renameChkCat('${u}')" style="padding:5px 8px;background:none;border:none;border-left:1px solid var(--border);color:var(--blue);cursor:pointer;font-size:11px" title="Rename">✏</button>
            </div>`).join("")}
        </div>
      </div>`:""}
      <div style="margin-top:12px;font-size:10px;color:var(--muted)">💡 You can also type a new category directly in any checklist item form.</div>`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),X="chklist-cat";return}if(e==="chklist-item"){const l=B(),d=t?(l&&l.checklist||[]).find(p=>p.id===t):{},u=l&&l.chkCategories||[],m=[...new Set([...(l&&l.checklist||[]).map(p=>p.category).filter(Boolean),...u,"Pre-Construction","Structural","MEP","Finishes","Closeout","Punch List","Water Supply","Drain Waste Vent","Fuel Gas","Other"])];h("modal-title").textContent=(t?"Edit":"Add")+" Checklist Item",o=`
      <div class="fr"><label class="fl">Item Name *</label><input class="fi" id="f-chk-name" value="${d.name||""}" placeholder="e.g. Footing rebar inspection complete"/></div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Category <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-chk-cat" list="chk-cat-list" value="${d.category||""}" placeholder="e.g. Pre-Construction, MEP, Finishes…"/>
          <datalist id="chk-cat-list">
            ${m.map(p=>`<option value="${p}"/>`).join("")}
          </datalist>
        </div>
        <div class="fr"><label class="fl">Priority</label><select class="fs" id="f-chk-pri">${[["low","Low"],["medium","Medium"],["high","High"]].map(([p,g])=>`<option value="${p}" ${d.priority===p?"selected":""}>${g}</option>`).join("")}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-chk-due" type="date" value="${d.dueDate||""}"/></div>
        <div class="fr"><label class="fl">Assignee</label><input class="fi" id="f-chk-who" value="${d.assignee||""}" placeholder="Name or company"/></div>
      </div>
      <div class="fr"><label class="fl">Notes / Specification Reference</label><textarea class="ft" id="f-chk-notes" style="min-height:50px">${d.notes||""}</textarea></div>
      <!-- Comments Section -->
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:6px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:11px;font-weight:700;color:var(--navy)">📝 Field Comments & Photos <span style="font-size:9px;font-weight:400;color:var(--muted)">(${(d.comments||[]).length} entries)</span></div>
          <button type="button" onclick="chkAddCommentRow()" class="btn btn-navy btn-xs" style="font-size:10px">+ Add Comment</button>
        </div>
        <!-- Existing comments (newest first) -->
        <div id="chk-comments-list" style="max-height:300px;overflow-y:auto;margin-bottom:10px">
          ${(d.comments||[]).slice().reverse().map((p,g)=>`
            <div data-cid="${p.id||g}" style="background:#fff;border:1px solid var(--border);border-radius:7px;padding:9px 11px;margin-bottom:7px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
                <div style="display:flex;align-items:center;gap:6px">
                  <span style="width:26px;height:26px;background:var(--navy);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${(p.author||"?").charAt(0).toUpperCase()}</span>
                  <span style="font-size:11px;font-weight:600;color:var(--navy)">${p.author||"Inspector"}</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px">
                  <span style="font-size:10px;color:var(--muted)">${p.date?J(p.date):""}</span>
                  <button onclick="chkDeleteComment('${t}','${p.id||g}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:13px;padding:0" title="Delete">×</button>
                </div>
              </div>
              <div style="font-size:11px;color:var(--text);line-height:1.5;white-space:pre-wrap">${p.text}</div>
              ${(p.files||[]).length?`
                <div style="display:flex;gap:4px;margin-top:7px;flex-wrap:wrap">
                  ${(p.files||[]).map(b=>`
                    <div style="display:flex;align-items:center;gap:3px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:2px 7px;cursor:pointer" onclick="dlFile('${b.id}')">
                      <span style="font-size:11px">${dt(b.name)}</span>
                      <span style="font-size:9px;color:var(--blue);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name}</span>
                    </div>`).join("")}
                </div>`:""}
            </div>`).join("")}
        </div>
        <!-- New comment entry -->
        <div id="chk-new-comment-area" style="border:2px dashed var(--border);border-radius:7px;padding:10px 12px;background:#fff">
          <div style="font-size:10px;font-weight:700;color:var(--navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">✏ New Comment</div>
          <div class="fg" style="margin-bottom:7px">
            <div class="fr"><label class="fl">Inspector / Author</label><input class="fi" id="f-chk-comment-author" value="${((c=Ot())==null?void 0:c.username)||""}" placeholder="Your name"/></div>
            <div class="fr"><label class="fl">Date</label><input class="fi" id="f-chk-comment-date" type="date" value="${Nt()}"/></div>
          </div>
          <div class="fr" style="margin-bottom:7px"><label class="fl">Comment / Observation</label><textarea class="ft" id="f-chk-comment-text" style="min-height:60px" placeholder="Field observation, pass/fail, deviation, corrective action…"></textarea></div>
          <div style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:5px">📸 Attach Photos / Documents</div>
          ${Me("chkfiles","Drop photos, inspection reports, or supporting documents…")}
          <button type="button" onclick="chkSaveNewComment('${t}')" class="btn btn-navy btn-sm" style="width:100%;margin-top:8px;justify-content:center">💬 Save This Comment</button>
        </div>
      </div>`,h("modal-body").innerHTML=o,h("mo").classList.add("open");return}if(e==="qaqc-item"){const l=B(),d=t?(l&&l.qaqcLog||[]).find(m=>m.id===t):{},u=[["ncr","Non-Conformance (NCR)"],["observation","Observation"],["rfi","RFI"],["punch","Punch List Item"],["other","Other"]];h("modal-title").textContent=(t?"Edit":"Add")+" QA/QC Entry",o=`
      <div class="fg">
        <div class="fr"><label class="fl">Reference # *</label><input class="fi" id="f-qa-ref" value="${d.refNo||""}" placeholder="e.g. NCR-2026-001"/></div>
        <div class="fr">
          <label class="fl">Type * <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-qa-type" list="qa-type-list" value="${d.type||""}" placeholder="e.g. NCR, Observation, RFI…"/>
          <datalist id="qa-type-list">
            ${u.map(([m,p])=>`<option value="${m}">${p}</option>`).join("")}
          </datalist>
        </div>
      </div>
      <div class="fr"><label class="fl">Description *</label><textarea class="ft" id="f-qa-desc" style="min-height:60px" placeholder="Describe the issue or observation…">${d.description||""}</textarea></div>
      <div class="fr">
        <label class="fl">Category / Trade <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
        <input class="fi" id="f-qa-cat" list="qa-cat-list" value="${d.category||""}" placeholder="e.g. Plumbing, Structural, MEP, Finishes…"/>
        <datalist id="qa-cat-list">
          ${["Plumbing","Structural","Electrical","HVAC","Finishes","Waterproofing","Roofing","Site Work","Fire Protection","Glazing","Other"].map(m=>`<option value="${m}"/>`).join("")}
        </datalist>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Location</label><input class="fi" id="f-qa-loc" value="${d.location||""}" placeholder="e.g. Level 2, Grid C-4"/></div>
        <div class="fr"><label class="fl">Date</label><input class="fi" id="f-qa-date" type="date" value="${d.date||Nt()}"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Raised By</label><input class="fi" id="f-qa-by" value="${d.raisedBy||""}" placeholder="Inspector / Engineer"/></div>
        <div class="fr"><label class="fl">Assigned To</label><input class="fi" id="f-qa-to" value="${d.assignedTo||""}" placeholder="Contractor / Team"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-qa-due" type="date" value="${d.dueDate||""}"/></div>
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-qa-status">${[["open","Open"],["inprogress","In Progress"],["resolved","Resolved"],["closed","Closed"]].map(([m,p])=>`<option value="${m}" ${(d.status||"open")===m?"selected":""}>${p}</option>`).join("")}</select></div>
      </div>
      <div class="fr"><label class="fl">Corrective Action / Resolution</label><textarea class="ft" id="f-qa-action" style="min-height:50px">${d.correctiveAction||""}</textarea></div>`,h("modal-body").innerHTML=o,h("mo").classList.add("open");return}if(e==="qafiles"){const l=B(),d=(l&&l.qaqcLog||[]).find(u=>u.id===t);if(!d){he();return}Y=[...d.files||[]],G(Y),h("modal-title").textContent="QA/QC Files — "+(d.refNo||"Entry"),o=`${Me("qafiles","Drop photos, reports, or supporting documents…")}${Ye()}`,h("modal-body").innerHTML=o,h("mo").classList.add("open"),H=t,X="qafiles";return}h("modal-body").innerHTML=o,h("mo").classList.add("open")}function Me(e,t){return`<label class="drop-zone" ondragover="event.preventDefault();this.classList.add('drag')" ondragleave="this.classList.remove('drag')" ondrop="handleDrop(event,'${e}',this)">
    <div style="font-size:24px;margin-bottom:4px">📎</div>
    <div class="drop-zone-txt">${t}</div>
    <div style="font-size:11px;color:var(--blue);font-weight:600;margin-top:6px">Click to choose files or drag them here</div>
    <input type="file" multiple style="display:none" onchange="handleFileInput(this,'${e}')">
  </label>
  <div id="upload-status-${e}" style="font-size:11px;color:var(--muted);margin-top:8px;min-height:16px"></div>
  <div class="attach-list" id="al-${e}"></div>`}function Ye(){return'<div id="__pending_render" style="display:none"></div>'}function ja(){["qfiles","insfiles","payproof","payinvoice","lienwvr","invfiles","invlien","invproof","ppfiles","venfiles","qafiles","chkfiles","plan-files"].forEach(e=>{const t=h("al-"+e);t&&(t.innerHTML=Y.map(r=>Zu(r)).join(""));const n=h("upload-status-"+e);n&&(on>0?n.textContent="Uploading "+on+" file"+(on>1?"s":"")+"...":Y.length?n.textContent=Y.length+" file"+(Y.length>1?"s":"")+" ready to save":n.textContent="")})}function Zu(e){return`<div class="a-item" id="ai_${e.id}">
    <span class="a-icon">${dt(e.name)}</span>
    <span class="a-name">${e.name}</span>
    <span class="a-size">${Dl(e.size||0)}</span>
    <button class="a-dl" onclick="dlFile('${e.id}')">⬇</button>
    <button class="a-rm" onclick="removePending('${e.id}')">✕</button>
  </div>`}function Rl(e,t){Array.from(e.files).forEach(n=>{if(n.size>500*1024*1024){j("⚠ Max 500MB: "+n.name);return}const r=new FileReader;r.onload=o=>{const i={id:ze(),name:n.name,size:n.size,data:o.target.result,at:new Date().toISOString()};Mt[i.id]=i,Y.push(i);const a=h("al-"+t);if(a){const c=document.createElement("div");c.innerHTML=Zu(i),a.appendChild(c.firstElementChild)}},r.onerror=()=>j("⚠ Failed to read file: "+n.name),r.readAsDataURL(n)})}function Fg(e,t,n){e.preventDefault(),n.classList.remove("drag"),Rl({files:e.dataTransfer.files},t)}function _g(e){Y=Y.filter(n=>n.id!==e);const t=h("ai_"+e);t&&t.remove()}function he(){const e=document.querySelector(".modal-foot");e&&(e.style.display=""),h("mo").classList.remove("open"),Y=[],on=0}function ef(){const e=Ot();return e&&e.role==="Viewer"}function Rg(){var t,n,r,o,i,a,c,l,d,u,m,p,g,b,y,w,f,v,x,S;if(on>0){j("⏳ Please wait for file upload to finish");return}if(ef()){j("⚠ Viewers have read-only access");return}if(Cn&&zs(Cn)){j("⚠ You have View Only access to this page");return}const e=B();if(X==="project"){const C=_("f-name");if(!C){j("⚠ Project name required");return}const E=((t=document.querySelector(".cswatch.sel"))==null?void 0:t.dataset.color)||Ss[0],P=_("f-street"),$=_("f-city"),A=_("f-state"),k=_("f-zip"),D=_("f-county"),z=[P,$,A,k].filter(Boolean).join(", "),M={id:H||"proj_"+ze(),name:C,street:P,city:$,county:D,state:A,zip:k,address:z,permit:_("f-permit"),apn:_("f-apn"),type:_("f-type"),color:E,client:_("f-client"),clientPhone:_("f-clientPhone"),clientEmail:_("f-clientEmail"),clientAddr:_("f-clientAddr"),works:[],milestones:[],quotes:[],plans:[],inspections:[],invoices:[],vendors:[],checklist:[],qaqcLog:[],dailyTracker:{days:[],discItems:[],clients:[],checklistTemplate:{},curDay:null,curDiscId:null,curClient:null}};if(H){const W=L.projects.findIndex(N=>N.id===H);W>-1&&(["works","milestones","quotes","plans","inspections","invoices","vendors","checklist","qaqcLog","dailyTracker"].forEach(N=>{L.projects[W][N]!==void 0&&(M[N]=L.projects[W][N])}),L.projects[W]=M)}else L.projects.push(M),L.activeId=M.id}else if(X==="work"&&e){const C=_("f-name");if(!C){j("⚠ Name required");return}const E={id:H||ze(),name:C,ref:_("f-ref"),contractor:_("f-contractor"),status:_("f-status"),pct:parseInt(_("f-pct"))||0,notes:_("f-notes")};if(e.works||(e.works=[]),H){const P=e.works.findIndex($=>$.id===H);P>-1&&(e.works[P]=E)}else e.works.push(E)}else if(X==="milestone"&&e){const C=_("f-name");if(!C){j("⚠ Name required");return}const E=H?(e.milestones||[]).find($=>$.id===H):null,P={id:H||ze(),name:C,ref:_("f-ref"),date:_("f-date"),status:_("f-status"),notes:_("f-notes"),payAmt:parseFloat(_("f-payamt"))||0,payPaid:E?E.payPaid:!1,payDate:E?E.payDate:"",payFiles:E?E.payFiles||[]:[],progressPayments:E?E.progressPayments||[]:[]};if(e.milestones||(e.milestones=[]),H){const $=e.milestones.findIndex(A=>A.id===H);$>-1&&(e.milestones[$]=P)}else e.milestones.push(P)}else if(X==="quote"&&e){const C=_("f-vendor");if(!C){j("⚠ Vendor name required");return}const E=H?(e.quotes||[]).find(A=>A.id===H):null,P=((n=h("f-ref-custom"))==null?void 0:n.style.display)!=="none"?_("f-ref-custom"):_("f-ref"),$={id:H||ze(),vendor:C,scope:_("f-scope"),ref:P,csi:_("f-csi"),amount:parseFloat(_("f-amount"))||0,date:_("f-date"),status:_("f-status"),files:[...Y],payMilestones:E?E.payMilestones||[]:[]};if(e.quotes||(e.quotes=[]),H){const A=e.quotes.findIndex(k=>k.id===H);A>-1&&(e.quotes[A]=$)}else e.quotes.push($)}else if(X==="plan"&&e){if(!Y.length){j("⚠ Please select at least one file");return}const C=_("f-plan-type");e.plans||(e.plans=[]),Y.forEach(E=>e.plans.push({...E,type:C}))}else if(X==="inspection"&&e){const C=_("f-name");if(!C){j("⚠ Name required");return}const E=_("f-inspdate");if(!E){j("⚠ Please select a date");return}const P=_("f-insptime");if(!P){j("⚠ Please select a time");return}const $=H?(e.inspections||[]).find(k=>k.id===H):null,A={id:H||ze(),name:C,inspDate:E,inspTime:P,location:_("f-location"),refs:_("f-refs"),ahj:_("f-ahj"),notes:_("f-notes"),files:$?$.files||[]:[]};if(e.inspections||(e.inspections=[]),H){const k=e.inspections.findIndex(D=>D.id===H);k>-1&&(e.inspections[k]=A)}else e.inspections.push(A)}else if(X==="msprogpay"&&e){const C=(H||"|").split("|"),E=C[0],P=C[1]||"",$=(e.milestones||[]).find(N=>N.id===E);if(!$){j("⚠ Milestone not found");return}$.progressPayments=$.progressPayments||[];const A=h("f-ppname"),k=h("f-ppname-custom");let D=((A==null?void 0:A.value)==="Other"?k==null?void 0:k.value.trim():A==null?void 0:A.value)||"";if(!D){j("⚠ Please select or enter a payment name");return}const z=parseFloat((r=h("f-ppamt"))==null?void 0:r.value)||0;if(!z){j("⚠ Amount required");return}const M=P?$.progressPayments.find(N=>N.id===P):null,W={id:P||ze(),name:D,amount:z,dueDate:((o=h("f-ppdue"))==null?void 0:o.value)||"",paid:M?M.paid:!1,receivedDate:M?M.receivedDate:"",notes:((i=h("f-ppnotes"))==null?void 0:i.value.trim())||"",files:M?M.files||[]:[]};if(P){const N=$.progressPayments.findIndex(F=>F.id===P);N>-1&&($.progressPayments[N]=W)}else $.progressPayments.push(W)}else if(X==="msppfiles"&&e){const C=(H||"").split("|"),E=C[0],P=C[1],$=(e.milestones||[]).find(k=>k.id===E),A=$?($.progressPayments||[]).find(k=>k.id===P):null;A&&(A.files=[...Y])}else if(X==="markpp"&&e){const C=(H||"").split("|"),E=C[0],P=C[1],$=(e.milestones||[]).find(D=>D.id===E),A=$?($.progressPayments||[]).find(D=>D.id===P):null;if(!A){j("⚠ Not found");return}const k=(a=h("f-pprecdate"))==null?void 0:a.value;if(!k){j("⚠ Please select a date");return}A.paid=!0,A.receivedDate=k,(c=h("f-pprechnotes"))!=null&&c.value.trim()&&(A.notes=h("f-pprechnotes").value.trim())}else if(X==="qfiles"&&e){const C=(e.quotes||[]).find(E=>E.id===H);C&&(C.files=[...Y])}else if(X==="insfiles"&&e){const C=(e.inspections||[]).find(E=>E.id===H);C&&(C.files=[...Y])}else if(X==="paymilestone"&&e){const C=(H||"").split("|"),E=C[0],P=C[1]||"",$=(e.quotes||[]).find(z=>z.id===E);if(!$){j("⚠ Quote not found");return}$.payMilestones=$.payMilestones||[];const A=(l=h("f-pmname"))==null?void 0:l.value.trim();if(!A){j("⚠ Name required");return}const k=P?$.payMilestones.find(z=>z.id===P):null,D={id:P||ze(),name:A,amount:parseFloat((d=h("f-pmamt"))==null?void 0:d.value)||0,dueDate:((u=h("f-pmdue"))==null?void 0:u.value)||"",paid:k?k.paid:!1,paidDate:k?k.paidDate:"",notes:((m=h("f-pmnotes"))==null?void 0:m.value.trim())||"",files:k?k.files||[]:[],invoiceFiles:k?k.invoiceFiles||[]:[],lienFiles:k?k.lienFiles||[]:[]};if(P){const z=$.payMilestones.findIndex(M=>M.id===P);z>-1&&($.payMilestones[z]=D)}else $.payMilestones.push(D)}else if(X==="payproof"&&e){const C=(H||"").split("|"),E=(e.quotes||[]).find($=>$.id===C[0]),P=E?(E.payMilestones||[]).find($=>$.id===C[1]):null;P&&(P.files=[...Y])}else if(X==="payinvoice"&&e){const C=(H||"").split("|"),E=(e.quotes||[]).find($=>$.id===C[0]),P=E?(E.payMilestones||[]).find($=>$.id===C[1]):null;P&&(P.invoiceFiles=[...Y])}else if(X==="invoice"&&e){const C=document.getElementById("inv-manual-section"),E=C&&C.style.display!=="none";let P="",$="",A="",k="";if(E){const O=((p=h("f-inv-manual-vendor"))==null?void 0:p.value)||"";if(O==="__other__"?A=(((g=h("f-inv-manual-vendor-other"))==null?void 0:g.value)||"").trim():A=O.trim(),k=(((b=h("f-inv-manual-scope"))==null?void 0:b.value)||"").trim(),!A){j("⚠ Please select or enter a vendor name");return}}else{const O=h("f-inv-vendor"),I=(O==null?void 0:O.value)||"";if(I.startsWith("vc_")){$=I.replace("vc_","");const U=(e.vendors||[]).find(q=>q.id===$);A=U?U.vendor:((y=h("f-inv-vname"))==null?void 0:y.value.trim())||""}else P=I!=="__other__"?I:"",A=P?((w=(e.quotes||[]).find(U=>U.id===P))==null?void 0:w.vendor)||((f=h("f-inv-vname"))==null?void 0:f.value.trim())||"":((v=h("f-inv-vname"))==null?void 0:v.value.trim())||"";if(!A){j("⚠ Please select or enter a subcontractor name");return}}const D=_("f-inv-no");if(!D){j("⚠ Invoice number required");return}const z=parseFloat(_("f-inv-amt"))||0;if(!z){j("⚠ Amount required");return}const M=H?(e.invoices||[]).find(O=>O.id===H):null,W=E?"":_("f-inv-milestone")||"",N=E?"":$||P&&((x=(e.vendors||[]).find(O=>O.quoteId===P))==null?void 0:x.id)||"",F={id:H||ze(),vendor:A,quoteId:E?"":P,vcId:N,isManual:E||!1,manualScope:k||"",milestoneId:W,invoiceNo:D,amount:z,invoiceDate:_("f-inv-date"),dueDate:_("f-inv-due"),description:_("f-inv-desc"),approvalStatus:M?M.approvalStatus:"pending",paid:M?M.paid:!1,paidDate:M?M.paidDate:"",partialPayments:M?M.partialPayments||[]:[],files:M?M.files||[]:[],lienFiles:M?M.lienFiles||[]:[]};if(e.invoices||(e.invoices=[]),e.vendors||(e.vendors=[]),e.checklist||(e.checklist=[]),e.qaqcLog||(e.qaqcLog=[]),e.chkCategories||(e.chkCategories=[]),(e.checklist||[]).forEach(O=>{(O.comments||[]).forEach(I=>G(I.files||[]))}),(e.qaqcLog||[]).forEach(O=>G(O.files||[])),(e.checklist||[]).forEach(O=>{O.comments||(O.comments=[])}),H){const O=e.invoices.findIndex(I=>I.id===H);O>-1&&(e.invoices[O]=F)}else e.invoices.push(F)}else if(X==="vendor"&&e){const C=h("f-ven-vdir"),E=(C==null?void 0:C.value)||"";if(!E){j("⚠ Please select a vendor from the directory");return}const P=xt().find(O=>O.id===E),$=P?P.company||P.name:"";if(!$){j("⚠ Vendor name required");return}const A=H?(e.vendors||[]).find(O=>O.id===H):null,k=Ju(A,xt()),D=String((P==null?void 0:P.bank)||k.bankName||k.bank||"").trim(),z=String((P==null?void 0:P.acctType)||k.bankAcctType||k.acctType||"").trim(),M=String((P==null?void 0:P.acct)||k.bankAccount||k.acct||"").trim(),W=String((P==null?void 0:P.routing)||k.routingNo||k.routing||"").trim(),N=String((P==null?void 0:P.zelle)||k.zelleId||k.zelle||"").trim(),F={...k,id:H||ze(),vendor:$,vdirId:E,vendorEmail:_("f-ven-email")||(P==null?void 0:P.email)||k.vendorEmail||"",trade:_("f-ven-trade")||(P==null?void 0:P.trade)||k.trade||"",address:String((P==null?void 0:P.address)||k.address||"").trim(),license:String((P==null?void 0:P.license)||k.license||"").trim(),bank:D,bankName:D,acctType:z,bankAcctType:z,acct:M,bankAccount:M,routing:W,routingNo:W,zelle:N,zelleId:N,contractNo:_("f-ven-no"),amount:parseFloat(_("f-ven-amt"))||0,contractType:_("f-ven-type"),status:_("f-ven-status"),startDate:_("f-ven-start"),endDate:_("f-ven-end"),scope:_("f-ven-scope"),exclusions:_("f-ven-exclusions"),notes:_("f-ven-notes"),milestones:Xe.filter(O=>!O._deleted&&O.name),files:A?A.files||[]:[]};if(e.vendors||(e.vendors=[]),H){const O=e.vendors.findIndex(I=>I.id===H);O>-1&&(e.vendors[O]=F)}else e.vendors.push(F)}else if(X==="venfiles"&&e){const C=(e.vendors||[]).find(E=>E.id===H);C&&(C.files=[...Y])}else if(X==="ppfiles"&&e){const C=(H||"").split("|"),E=(e.invoices||[]).find($=>$.id===C[0]),P=E?(E.partialPayments||[]).find($=>$.id===C[1]):null;if(P){P.files=[...Y];const $=h("f-pp-txn");$&&$.value.trim()&&(P.txnNo=$.value.trim())}}else if(X==="invproof"&&e){const C=(e.invoices||[]).find(E=>E.id===H);C&&(C.proofFiles=[...Y])}else if(X==="invlien"&&e){const C=(e.invoices||[]).find(E=>E.id===H);C&&(C.lienFiles=[...Y])}else if(X==="invfiles"&&e){const C=(e.invoices||[]).find(E=>E.id===H);C&&(C.files=[...Y])}else if(X==="chklist-cat"&&e){const C=(((S=h("f-cat-new"))==null?void 0:S.value)||"").trim();if(!C){j("⚠ Please enter a category name");return}j('✓ Category "'+C+'" ready — use it when adding checklist items'),e.chkCategories||(e.chkCategories=[]),e.chkCategories.includes(C)||e.chkCategories.push(C),Z(),he(),Qi("chklist-cat");return}else if(X==="chklist-item"&&e){const C=_("f-chk-name");if(!C){j("⚠ Item name required");return}const E=H?(e.checklist||[]).find(A=>A.id===H):null,P=E?E.comments||[]:[],$={id:H||ze(),name:C,category:_("f-chk-cat")||"General",priority:_("f-chk-pri")||"low",dueDate:_("f-chk-due"),assignee:_("f-chk-who"),notes:_("f-chk-notes"),status:E?E.status:"open",comments:P};if(e.checklist||(e.checklist=[]),H){const A=e.checklist.findIndex(k=>k.id===H);A>-1&&(e.checklist[A]=$)}else e.checklist.push($)}else if(X==="qaqc-item"&&e){const C=_("f-qa-ref");if(!C){j("⚠ Reference # required");return}const E=H?(e.qaqcLog||[]).find($=>$.id===H):null,P={id:H||ze(),refNo:C,type:_("f-qa-type"),category:_("f-qa-cat"),description:_("f-qa-desc"),location:_("f-qa-loc"),date:_("f-qa-date"),raisedBy:_("f-qa-by"),assignedTo:_("f-qa-to"),dueDate:_("f-qa-due"),status:_("f-qa-status"),correctiveAction:_("f-qa-action"),files:E?E.files||[]:[]};if(e.qaqcLog||(e.qaqcLog=[]),H){const $=e.qaqcLog.findIndex(A=>A.id===H);$>-1&&(e.qaqcLog[$]=P)}else e.qaqcLog.push(P)}else if(X==="qafiles"&&e){const C=(e.qaqcLog||[]).find(E=>E.id===H);C&&(C.files=[...Y])}else if(X==="lienwvr"&&e){const C=(H||"").split("|"),E=(e.quotes||[]).find($=>$.id===C[0]),P=E?(E.payMilestones||[]).find($=>$.id===C[1]):null;P&&(P.lienFiles=[...Y])}Z(),Ku(!0),he(),ne(),j("✓ Saved")}function Og(e,t){const n=B();!n||!confirm("Delete this item?")||n[e]&&(n[e]=n[e].filter(r=>r.id!==t),Z(),ne(),j("🗑 Deleted"))}function Vg(e){const t=B();!t||!confirm("Remove document?")||(t.plans=(t.plans||[]).filter(n=>n.id!==e),Z(),ne(),j("🗑 Removed"))}function Ug(e){var t;confirm("Delete this project and ALL its data?")&&(L.deletedProjectIds=cf([...L.deletedProjectIds||[],e]),L.projects=L.projects.filter(n=>n.id!==e),L.activeId===e&&(L.activeId=((t=L.projects[0])==null?void 0:t.id)||null),Z(),ne(),j("🗑 Project deleted"),vx(e),L.activeId||xr("projects"))}function go(e){let t=Mt[e];return t||(In(),t=Mt[e]),t&&t.data?t:null}function zn(e){const t=go(e);if(!t){j("⚠ File not found — it may not have been saved yet");return}const n=document.createElement("a");n.href=t.data,n.download=t.name,document.body.appendChild(n),n.click(),document.body.removeChild(n),j("⬇ Downloading "+t.name)}function Ol(e){const t=go(e);if(!t){j("⚠ File not found — it may not have been saved yet");return}if(!window.open(t.data,"_blank","noopener,noreferrer")){zn(e),j("⚠ Preview blocked — downloading instead");return}j("Opening "+t.name)}function Hg(){const e=B();if(!e){j("⚠ No project selected");return}const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e.name.replace(/\s+/g,"_")+"_export.json",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),j("📦 Exported")}function tf(){const e=B();if(!e){j("⚠ No project selected");return}const t=[];if((e.quotes||[]).forEach(n=>{(n.files||[]).forEach(r=>{r.data&&t.push(r)}),(n.payMilestones||[]).forEach(r=>{(r.files||[]).forEach(o=>{o.data&&t.push(o)}),(r.lienFiles||[]).forEach(o=>{o.data&&t.push(o)})})}),(e.plans||[]).forEach(n=>{n.data&&t.push(n)}),(e.inspections||[]).forEach(n=>(n.files||[]).forEach(r=>{r.data&&t.push(r)})),!t.length){j("⚠ No files in this project");return}t.forEach((n,r)=>setTimeout(()=>zn(n.id),r*350)),j(`⬇ Downloading ${t.length} file(s)…`)}function Wg(){const e=B();if(!e){j("⚠ No project selected");return}const t=(e.milestones||[]).filter(l=>l.status==="done").length,n=(e.quotes||[]).reduce((l,d)=>l+Number(d.amount||0),0),r=(e.quotes||[]).filter(l=>l.status==="approved").reduce((l,d)=>l+Number(d.amount||0),0),o=(e.milestones||[]).reduce((l,d)=>l+(d.progressPayments||[]).filter(u=>u.paid).reduce((u,m)=>u+Number(m.amount||0),0),0),i=(e.milestones||[]).reduce((l,d)=>l+(d.progressPayments||[]).reduce((u,m)=>u+Number(m.amount||0),0),0),a=`<!DOCTYPE html><html><head><meta charset="UTF-8"/>
<title>${e.name} — Project Report</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;color:#1a1917;padding:24px;max-width:1050px;margin:0 auto;font-size:12px}
h1{font-size:20px;margin-bottom:4px;color:#0C1B2E}
.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}
.sumrow{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.sum{background:#f4f3ef;border-radius:6px;padding:8px 12px;text-align:center;flex:1;min-width:90px;border-top:3px solid #1A6BC4}
.sum-v{font-size:18px;font-weight:700}.sum-l{font-size:9px;color:#6b6a64;margin-top:2px}
h2{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#1A6BC4;border-bottom:2px solid #1A6BC4;padding-bottom:3px;margin:18px 0 8px}
table{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:10px}
th{background:#0C1B2E;color:#fff;padding:5px 8px;text-align:left;font-size:9px;text-transform:uppercase;letter-spacing:.5px}
td{padding:5px 8px;border-bottom:1px solid #e8e4dc;vertical-align:top}
tr:nth-child(even)td{background:#f7f6f2}
.g{color:#2D6A0F;font-weight:700}.a{color:#A86200;font-weight:700}.r{color:#9B1F1F;font-weight:700}.b{color:#1A6BC4}
.tot td{background:#0C1B2E!important;color:#fff;font-weight:700}
.appr td{background:#2D6A0F!important;color:#fff;font-weight:700}
.footer{margin-top:20px;font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e8e4dc;padding-top:8px}
@media print{body{padding:12px}@page{margin:14mm}}
</style></head><body>
<h1>${e.name}</h1>
<div class="meta">
  ${e.address||""}<br>
  Permit: ${e.permit||"—"} &nbsp;·&nbsp; APN: ${e.apn||"—"} &nbsp;·&nbsp; ${e.type||""}<br>
  ${e.county||""} &nbsp;·&nbsp; Livio Building Systems &nbsp;·&nbsp; ${new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}
</div>
<div class="sumrow">
  <div class="sum" style="border-color:#A86200"><div class="sum-v">${(e.works||[]).filter(l=>["active","inprogress","starting"].includes(l.status)).length}</div><div class="sum-l">Works Active</div></div>
  <div class="sum" style="border-color:#0D6E58"><div class="sum-v">${t}/${(e.milestones||[]).length}</div><div class="sum-l">Milestones</div></div>
  <div class="sum" style="border-color:#1A6BC4"><div class="sum-v b">$${n.toLocaleString()}</div><div class="sum-l">Total Quoted</div></div>
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${r.toLocaleString()}</div><div class="sum-l">✓ Approved</div></div>
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${o.toLocaleString()}</div><div class="sum-l">Received</div></div>
  <div class="sum" style="border-color:${i>o?"#9B1F1F":"#2D6A0F"}"><div class="sum-v ${i>o?"r":"g"}">$${(i-o).toLocaleString()}</div><div class="sum-l">Balance Due</div></div>
</div>
<h2>Works at Site (${(e.works||[]).length})</h2>
<table><thead><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr></thead><tbody>
${(e.works||[]).map(l=>`<tr><td><b>${l.name}</b><br><span style="font-size:9px;color:#6b6a64">${l.notes||""}</span></td><td style="color:#4A3FB0">${l.ref}</td><td>${l.contractor||"—"}</td><td class="${l.status==="complete"?"g":l.status==="caloshahold"?"r":"a"}">${l.status}</td><td><b>${l.pct}%</b></td></tr>`).join("")}
</tbody></table>
<h2>Project Milestones (${t}/${(e.milestones||[]).length} Achieved)</h2>
<table><thead><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th><th>Received</th><th>Balance</th></tr></thead><tbody>
${(e.milestones||[]).map(l=>{const d=l.progressPayments||[],u=d.filter(p=>p.paid).reduce((p,g)=>p+Number(g.amount||0),0),m=d.reduce((p,g)=>p+Number(g.amount||0),0);return`<tr><td><b>${l.name}</b></td><td style="color:#4A3FB0">${l.ref}</td><td>${J(l.date)}</td><td class="${l.status==="done"?"g":l.status==="inprogress"?"a":""}">${l.status}</td><td><b>${l.payAmt?"$"+Number(l.payAmt).toLocaleString():"—"}</b></td><td class="g">${m?"$"+u.toLocaleString():"—"}</td><td class="${m-u>0?"r":"g"}">${m?"$"+(m-u).toLocaleString():"—"}</td></tr>`}).join("")}
<tr class="tot"><td>TOTAL</td><td></td><td></td><td></td><td>$${(e.milestones||[]).reduce((l,d)=>l+Number(d.payAmt||0),0).toLocaleString()}</td><td>$${o.toLocaleString()}</td><td>$${(i-o).toLocaleString()}</td></tr>
</tbody></table>
<h2>Quotes (Total: $${n.toLocaleString()} · Approved: $${r.toLocaleString()})</h2>
<table><thead><tr><th>Vendor</th><th>Scope</th><th>Code Ref</th><th>Amount</th><th>Status</th></tr></thead><tbody>
${(e.quotes||[]).map(l=>`<tr><td><b>${l.vendor}</b></td><td>${l.scope}</td><td style="color:#4A3FB0;font-size:9px">${l.ref}</td><td><b>$${Number(l.amount).toLocaleString()}</b></td><td class="${l.status==="approved"?"g":l.status==="new"?"b":"a"}">${l.status}</td></tr>`).join("")}
<tr class="tot"><td>TOTAL QUOTED</td><td></td><td></td><td>$${n.toLocaleString()}</td><td></td></tr>
<tr class="appr"><td>✓ APPROVED TOTAL</td><td></td><td></td><td>$${r.toLocaleString()}</td><td></td></tr>
</tbody></table>
<h2>Inspections (${(e.inspections||[]).length})</h2>
<table><thead><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th><th>Code Refs</th><th>AHJ</th></tr></thead><tbody>
${(e.inspections||[]).map(l=>`<tr><td><b>${l.inspDate?new Date(l.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—"}</b></td><td>${l.name}</td><td>${vo(l.inspTime)}</td><td>${l.location||"—"}</td><td style="color:#4A3FB0;font-size:9px">${l.refs||"—"}</td><td>${l.ahj||"—"}</td></tr>`).join("")}
</tbody></table>
<div class="footer">Livio Building Systems &nbsp;·&nbsp; ${e.name} &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString()}</div>
</body></html>`,c=window.open("","_blank");if(!c){j("⚠ Pop-up blocked — allow pop-ups for this site");return}c.document.write(a),c.document.close(),setTimeout(()=>{c.focus(),c.print()},600),j("📕 Report opened — use Print → Save as PDF")}function qg(){const e=B();if(!e){j("⚠ No project selected");return}j("📘 Generating Word document…");const t=(e.milestones||[]).filter(c=>c.status==="done").length,n=(e.quotes||[]).reduce((c,l)=>c+Number(l.amount||0),0),r='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;margin:40px}h1{font-size:18pt}h2{font-size:12pt;border-bottom:1pt solid #1A6BC4;color:#1A6BC4;margin-top:18pt}table{border-collapse:collapse;width:100%;font-size:9pt}th{background:#0C1B2E;color:white;padding:5pt 8pt;text-align:left}td{border:0.5pt solid #e0ddd5;padding:4pt 8pt}</style></head><body><h1>'+e.name+'</h1><p style="color:#6b6a64;font-size:9pt">'+(e.address||"")+" | Permit: "+(e.permit||"—")+" | APN: "+(e.apn||"—")+" | Livio Building Systems</p><h2>Works at Site</h2><table><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr>"+(e.works||[]).map(c=>"<tr><td><b>"+c.name+"</b><br><small>"+(c.notes||"")+"</small></td><td>"+c.ref+"</td><td>"+(c.contractor||"—")+"</td><td>"+c.status+"</td><td>"+c.pct+"%</td></tr>").join("")+"</table><h2>Milestones ("+t+"/"+(e.milestones||[]).length+" Achieved)</h2><table><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th></tr>"+(e.milestones||[]).map(c=>"<tr><td><b>"+c.name+"</b></td><td>"+c.ref+"</td><td>"+J(c.date)+"</td><td>"+c.status+"</td><td>"+(c.payAmt?"$"+Number(c.payAmt).toLocaleString():"—")+"</td></tr>").join("")+"</table><h2>Quotes (Total: $"+n.toLocaleString()+")</h2><table><tr><th>Vendor</th><th>Scope</th><th>Amount</th><th>Status</th></tr>"+(e.quotes||[]).map(c=>"<tr><td><b>"+c.vendor+"</b></td><td>"+c.scope+"</td><td>$"+Number(c.amount).toLocaleString()+"</td><td>"+c.status+"</td></tr>").join("")+"</table><h2>Inspections</h2><table><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th></tr>"+(e.inspections||[]).map(c=>"<tr><td>"+(c.inspDate?new Date(c.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—")+"</td><td>"+c.name+"</td><td>"+vo(c.inspTime)+"</td><td>"+(c.location||"—")+"</td></tr>").join("")+"</table></body></html>",o=new Blob(["\uFEFF"+r],{type:"application/msword"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.download=e.name.replace(/\s+/g,"_")+".doc",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),j("📘 Word document downloaded")}function Gg(){const e=B();if(!e){j("⚠ No project selected");return}if(j("📊 Building PowerPoint… please wait",5e3),window.PptxGenJS)gc(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js",t.onload=()=>{typeof PptxGenJS<"u"?gc(e):j("⚠ PowerPoint library failed to load")},t.onerror=()=>j("⚠ Could not load PowerPoint library — check internet connection"),document.head.appendChild(t)}}function gc(e){try{const t=new PptxGenJS;t.layout="LAYOUT_WIDE",t.title=e.name+" — Livio Building Systems",t.author="Livio Building Systems";const n="0C1B2E",r="1A6BC4",o="2D6A0F",i="A86200",a="9B1F1F",c="FFFFFF",l="6B6A64",d="F4F3EF",u="162438",m=(e.milestones||[]).filter(N=>N.status==="done").length,p=(e.quotes||[]).reduce((N,F)=>N+Number(F.amount||0),0),g=(e.quotes||[]).filter(N=>N.status==="approved").reduce((N,F)=>N+Number(F.amount||0),0),b=(e.milestones||[]).reduce((N,F)=>N+(F.progressPayments||[]).filter(O=>O.paid).reduce((O,I)=>O+Number(I.amount||0),0),0),y=(e.milestones||[]).reduce((N,F)=>N+(F.progressPayments||[]).reduce((O,I)=>O+Number(I.amount||0),0),0),w=(N,F,O)=>{N.addShape(t.shapes.RECTANGLE,{x:0,y:0,w:13.3,h:.68,fill:{color:n},line:{color:n}}),N.addText(F,{x:.3,y:0,w:10,h:.68,fontSize:13,bold:!0,color:c,charSpacing:1.5,valign:"middle",margin:0}),O&&N.addText(O,{x:9.5,y:0,w:3.6,h:.68,fontSize:10,color:"8AAAC8",align:"right",valign:"middle",margin:0})};let f=t.addSlide();f.background={color:n},f.addShape(t.shapes.RECTANGLE,{x:0,y:0,w:.18,h:7.5,fill:{color:r},line:{color:r}}),f.addText("LIVIO BUILDING SYSTEMS",{x:.5,y:1.4,w:11,h:.4,fontSize:10,bold:!0,color:"8AAAC8",charSpacing:3,margin:0}),f.addText(e.name,{x:.5,y:1.88,w:11,h:1.3,fontSize:42,bold:!0,color:c,fontFace:"Arial Black",margin:0}),f.addText(e.type||"Construction Project",{x:.5,y:3.25,w:11,h:.55,fontSize:18,color:"8AAAC8",italic:!0,margin:0}),f.addShape(t.shapes.RECTANGLE,{x:.5,y:3.95,w:4.5,h:.05,fill:{color:r},line:{color:r}}),f.addText(e.address||"",{x:.5,y:4.12,w:11,h:.35,fontSize:13,color:"8AAAC8",margin:0}),f.addText("Permit: "+(e.permit||"—")+"   ·   APN: "+(e.apn||"—"),{x:.5,y:4.5,w:11,h:.35,fontSize:12,color:"8AAAC8",margin:0}),f.addShape(t.shapes.RECTANGLE,{x:0,y:6.9,w:13.3,h:.6,fill:{color:u},line:{color:u}}),f.addText("CONSTRUCTION MANAGEMENT  ·  CALIFORNIA BUILDING CODE COMPLIANT  ·  "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),{x:.3,y:6.9,w:12.7,h:.6,fontSize:9,color:"8AAAC8",valign:"middle",charSpacing:1,margin:0}),f=t.addSlide(),f.background={color:d},w(f,"PROJECT OVERVIEW & KEY METRICS"),[{l:"WORKS ACTIVE",v:String((e.works||[]).filter(N=>["active","inprogress","starting"].includes(N.status)).length),c:i,bg:"FEF3E2"},{l:"MILESTONES",v:m+"/"+(e.milestones||[]).length,c:"0D6E58",bg:"E2F5EF"},{l:"TOTAL QUOTED",v:"$"+p.toLocaleString(),c:r,bg:"E8F2FC"},{l:"APPROVED",v:"$"+g.toLocaleString(),c:o,bg:"ECF5E3"},{l:"RECEIVED",v:"$"+b.toLocaleString(),c:o,bg:"ECF5E3"},{l:"BALANCE DUE",v:"$"+(y-b).toLocaleString(),c:y>b?a:o,bg:y>b?"FDEAEA":"ECF5E3"}].forEach((N,F)=>{const O=.3+F%3*4.25,I=.88+Math.floor(F/3)*1.7;f.addShape(t.shapes.RECTANGLE,{x:O,y:I,w:4,h:1.5,fill:{color:N.bg},line:{color:"E0DDD5",width:.5}}),f.addShape(t.shapes.RECTANGLE,{x:O,y:I,w:4,h:.07,fill:{color:N.c},line:{color:N.c}}),f.addText(N.l,{x:O+.14,y:I+.12,w:3.72,h:.3,fontSize:9,bold:!0,color:l,charSpacing:.5,margin:0}),f.addText(N.v,{x:O+.1,y:I+.38,w:3.8,h:.85,fontSize:32,bold:!0,color:n,fontFace:"Arial Black",margin:0})}),f=t.addSlide(),f.background={color:d},w(f,"WORKS AT SITE","CBC 2022 · CalOSHA · ACI 318");const x=[{text:"Work Item",options:{bold:!0,color:c,fill:{color:n}}},{text:"CBC Ref.",options:{bold:!0,color:c,fill:{color:n}}},{text:"Contractor",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}},{text:"Progress",options:{bold:!0,color:c,fill:{color:n}}}],S=(e.works||[]).map(N=>{const F={complete:o,caloshahold:a,active:r,inprogress:i,starting:"0D6E58"};return[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.ref,options:{color:"4A3FB0",fontSize:9}},{text:N.contractor||"—",options:{fontSize:9}},{text:N.status,options:{color:F[N.status]||l,fontSize:9}},{text:N.pct+"%",options:{bold:!0,color:F[N.status]||l,fontSize:10}}]});f.addTable([x,...S],{x:.3,y:.82,w:12.7,colW:[4.2,2,3,2.2,1.3],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.42}),f=t.addSlide(),f.background={color:d},w(f,"PROJECT MILESTONES","CBC §105 · §110 · §111");const C=[{text:"Milestone",options:{bold:!0,color:c,fill:{color:n}}},{text:"CBC Ref.",options:{bold:!0,color:c,fill:{color:n}}},{text:"Date",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}},{text:"Contract",options:{bold:!0,color:c,fill:{color:n}}},{text:"Received",options:{bold:!0,color:c,fill:{color:o}}},{text:"Balance",options:{bold:!0,color:c,fill:{color:a}}}],E=(e.milestones||[]).map(N=>{const F=N.progressPayments||[],O=F.filter(q=>q.paid).reduce((q,te)=>q+Number(te.amount||0),0),I=F.reduce((q,te)=>q+Number(te.amount||0),0),U={done:o,inprogress:i,upcoming:"888780"};return[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.ref,options:{color:"4A3FB0",fontSize:9}},{text:J(N.date),options:{fontSize:9}},{text:N.status,options:{color:U[N.status]||l,fontSize:9}},{text:N.payAmt?"$"+Number(N.payAmt).toLocaleString():"—",options:{bold:!0,fontSize:10}},{text:I?"$"+O.toLocaleString():"—",options:{color:o,bold:!0,fontSize:10}},{text:I?"$"+(I-O).toLocaleString():"—",options:{color:I-O>0?a:o,bold:!0,fontSize:10}}]});f.addTable([C,...E],{x:.3,y:.82,w:12.7,colW:[3.2,1.7,1.4,1.5,1.8,1.8,1.3],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.4}),f=t.addSlide(),f.background={color:d},w(f,"QUOTES RECEIVED","CSI Divisions · California Codes");const P=[{text:"Vendor",options:{bold:!0,color:c,fill:{color:n}}},{text:"Scope",options:{bold:!0,color:c,fill:{color:n}}},{text:"CSI",options:{bold:!0,color:c,fill:{color:n}}},{text:"Amount",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}}],$=(e.quotes||[]).map(N=>{const F={approved:o,review:r,new:"0D6E58",negotiating:i};return[{text:N.vendor,options:{bold:!0,fontSize:10}},{text:N.scope,options:{fontSize:9}},{text:N.csi,options:{fontSize:9}},{text:"$"+Number(N.amount).toLocaleString(),options:{bold:!0,fontSize:11}},{text:N.status,options:{color:F[N.status]||l,bold:N.status==="approved",fontSize:9}}]}),A=[{text:"TOTAL QUOTED",options:{bold:!0,color:c,fill:{color:n}}},{text:"",options:{fill:{color:n}}},{text:"",options:{fill:{color:n}}},{text:"$"+p.toLocaleString(),options:{bold:!0,color:c,fill:{color:n}}},{text:"",options:{fill:{color:n}}}],k=[{text:"APPROVED TOTAL",options:{bold:!0,color:c,fill:{color:o}}},{text:"",options:{fill:{color:o}}},{text:"",options:{fill:{color:o}}},{text:"$"+g.toLocaleString(),options:{bold:!0,color:c,fill:{color:o}}},{text:"",options:{fill:{color:o}}}];f.addTable([P,...$,A,k],{x:.3,y:.82,w:12.7,colW:[3,4.6,1.4,2,1.7],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.44}),f=t.addSlide(),f.background={color:d},w(f,"INSPECTIONS SCHEDULED","CBC §110 · CalOSHA");const D=[{text:"Inspection",options:{bold:!0,color:c,fill:{color:n}}},{text:"Date",options:{bold:!0,color:c,fill:{color:n}}},{text:"Time",options:{bold:!0,color:c,fill:{color:n}}},{text:"Location",options:{bold:!0,color:c,fill:{color:n}}},{text:"Code Refs",options:{bold:!0,color:c,fill:{color:n}}},{text:"AHJ",options:{bold:!0,color:c,fill:{color:n}}}],z={cupertino:"Cupertino",calosha:"CalOSHA",icc:"ICC-Cert."},M=(e.inspections||[]).map(N=>[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.inspDate?new Date(N.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",options:{fontSize:9}},{text:vo(N.inspTime),options:{fontSize:9}},{text:N.location||"—",options:{fontSize:9}},{text:N.refs||"—",options:{fontSize:8,color:"4A3FB0"}},{text:z[N.ahj]||N.ahj||"—",options:{fontSize:9}}]);f.addTable([D,...M],{x:.3,y:.82,w:12.7,colW:[3.8,1.6,1.2,2.8,2.1,1.2],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.44});const W=e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_Dashboard.pptx";t.writeFile({fileName:W}).then(()=>j("📊 PowerPoint downloaded successfully!")).catch(N=>{console.error(N),j("⚠ Download failed — "+N.message)})}catch(t){console.error("PPTX error:",t),j("⚠ PowerPoint error: "+t.message)}}function Yg(e){const t=B();if(!t){j("⚠ No project selected");return}const n=(t.quotes||[]).filter(d=>d.status==="approved"),r=e?n.filter(d=>d.id===e):n;if(!r.length){j("⚠ No approved quotes to export");return}let o=0,i=0;n.forEach(d=>{o+=Number(d.amount||0),(t.invoices||[]).filter(u=>u.quoteId===d.id&&u.approvalStatus==="approved").forEach(u=>{u.paid?i+=Number(u.amount||0):i+=(u.partialPayments||[]).reduce((m,p)=>m+Number(p.amount||0),0)})});const a=r.map(function(d){const u=(t.invoices||[]).filter(C=>C.quoteId===d.id&&C.approvalStatus==="approved"),m=(t.vendors||[]).find(C=>C.quoteId===d.id),p=m?m.milestones||[]:[],g=u.reduce(function(C,E){return E.paid?C+Number(E.amount||0):C+(E.partialPayments||[]).reduce(function(P,$){return P+Number($.amount||0)},0)},0),b=Number(d.amount||0)-g,y=d.amount?Math.min(100,Math.round(g/Number(d.amount)*100)):0,w=u.reduce(function(C,E){return C+(E.files||[]).length},0),f=u.reduce(function(C,E){return C+(E.lienFiles||[]).length},0);let v="";u.length?u.forEach(function(C,E){const P=C.paid?"#EDF8E5":E%2===0?"#fff":"#fafaf8",$=p.find(function(M){return M.id===C.milestoneId}),A=C.partialPayments||[],k=C.paid?Number(C.amount||0):A.reduce(function(M,W){return M+Number(W.amount||0)},0),D=Number(C.amount||0)-k,z=A.length?A.map(function(M){return'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(M.amount||0).toLocaleString()+(M.date?" &middot; "+J(M.date):"")+"</div>"+(M.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+M.txnNo+"</strong></div>":"")+((M.files||[]).length?'<div style="font-size:8px;color:#555;margin-top:1px">&#128206; '+(M.files||[]).length+" supporting file(s)</div>":"")+"</div>"}).join(""):C.paid?'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; Full payment'+(C.paidDate?" &middot; "+J(C.paidDate):"")+"</div>"+(C.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+C.txnNo+"</strong></div>":"")+"</div>":"";v+='<tr style="background:'+P+'"><td style="padding:5px 10px 5px 14px;font-size:10px;color:#333;border-bottom:1px solid #eee"><strong>'+(C.invoiceNo||"Invoice")+"</strong>"+($?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128205; '+$.name+"</div>":"")+(C.description?'<div style="font-size:9px;color:#999">'+C.description+"</div>":"")+z+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(C.amount||0).toLocaleString()+'</td><td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(C.invoiceDate?J(C.invoiceDate):"&mdash;")+'</td><td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(C.dueDate?J(C.dueDate):"&mdash;")+'</td><td style="padding:5px 10px;border-bottom:1px solid #eee">'+(C.paid?'<span style="color:#2D6A0F;font-weight:700;font-size:10px">&#10003; Paid</span>':k>0?'<span style="color:#A86200;font-size:10px">Partial</span>':'<span style="color:#9B1F1F;font-size:10px">Pending</span>')+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:#2D6A0F">$'+k.toLocaleString()+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:'+(D>0?"#9B1F1F":"#2D6A0F")+'">$'+D.toLocaleString()+"</td></tr>"}):v='<tr><td colspan="7" style="padding:10px 14px;font-size:11px;color:#999">No approved invoices yet for this subcontractor.</td></tr>';const x=y===100?"#4E9A1A":y>60?"#1A6BC4":"#D98E00",S=b>0?"#9B1F1F":"#2D6A0F";return'<div style="margin-bottom:28px;page-break-inside:avoid"><div style="background:#0C1B2E;color:#fff;padding:10px 14px;border-radius:6px 6px 0 0;display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:13px;font-weight:700">'+d.vendor+'</div><div style="font-size:10px;color:#8AAAC8">'+d.scope+(d.csi?" &nbsp;&middot;&nbsp; "+d.csi:"")+'</div></div><div style="text-align:right"><div style="font-size:16px;font-weight:700">$'+Number(d.amount).toLocaleString()+'</div><div style="font-size:10px;color:#8AAAC8">'+y+'% paid</div></div></div><table style="width:100%;border-collapse:collapse;border:1px solid #e0ddd5;border-top:none"><thead><tr style="background:#162438"><th style="padding:6px 10px 6px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice / Milestone</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Amount</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice Date</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Due Date</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Status</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#2D6A0F;text-align:left">Paid</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#F09595;text-align:left">Balance</th></tr></thead><tbody>'+v+'</tbody></table><div style="border:1px solid #e0ddd5;border-top:none;background:#f4f3ef;padding:12px 16px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b6a64;margin-bottom:10px">Payment Summary &mdash; '+d.vendor+'</div><div style="display:flex;border:1px solid #e0ddd5;border-radius:6px;overflow:hidden;background:#fff"><div style="flex:1;padding:10px 12px;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Contract Value</div><div style="font-size:18px;font-weight:700;color:#0C1B2E">$'+Number(d.amount).toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;background:#ECF5E3;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#2D6A0F;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">&#10003; Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$'+g.toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;background:'+(b>0?"#FDEAEA":"#ECF5E3")+';border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:'+S+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Balance Due</div><div style="font-size:18px;font-weight:700;color:'+S+'">$'+b.toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Progress</div><div style="font-size:18px;font-weight:700;color:'+(y===100?"#2D6A0F":"#0C1B2E")+'">'+y+'%</div><div style="height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-top:5px"><div style="height:100%;width:'+y+"%;background:"+x+';border-radius:3px"></div></div></div></div><div style="margin-top:8px;font-size:9px;color:#999;display:flex;gap:16px;flex-wrap:wrap;padding:0 2px"><span>Invoices: '+u.length+"</span><span>Proof documents: "+w+" file(s)</span><span>Lien waivers: "+f+" file(s)</span>"+(d.date?'<span style="margin-left:auto">Quote date: '+d.date+"</span>":"")+"</div></div></div>"}).join(""),c='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Payment Ledger &mdash; '+t.name+"</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>"+(e?r[0].vendor+" &mdash; Payment Statement":"Payment Ledger &mdash; All Subcontractors")+'</h1><div class="meta">'+t.name+" &nbsp;&middot;&nbsp; "+ae(t)+"<br>Livio Address: "+K+"<br>Permit: "+(t.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+se+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</div>"+a+'<div style="margin-top:20px;font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+se+" &nbsp;&middot;&nbsp; "+K+" &nbsp;&middot;&nbsp; "+t.name+" &nbsp;&middot;&nbsp; Generated "+new Date().toLocaleDateString()+"</div></body></html>",l=window.open("","_blank");if(!l){j("&#9888; Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(function(){l.focus(),l.print()},600),j("&#128424; Ledger report opened &mdash; Print &#8594; Save as PDF")}function Qg(e){const t=B();if(!t){j("⚠ No project selected");return}if(j("📊 Building Excel ledger…",4e3),window.XLSX)xc(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>xc(t,e),n.onerror=()=>j("⚠ Could not load Excel library — check internet connection"),document.head.appendChild(n)}}function xc(e,t){try{const n=window.XLSX,r=n.utils.book_new(),o=(e.quotes||[]).filter(g=>g.status==="approved"),i=t?o.filter(g=>g.id===t):o;let a=0,c=0;o.forEach(g=>{a+=Number(g.amount||0),(g.payMilestones||[]).forEach(b=>{b.paid&&(c+=Number(b.amount||0))})});const l=[["PAYMENT LEDGER"],["Project:",e.name],["Project Address:",ae(e)],["Livio Address:",K],["Permit:",e.permit||""],["Date:",new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})]],d=n.utils.aoa_to_sheet(l);d["!cols"]=[{wch:28},{wch:20}],n.utils.book_append_sheet(r,d,"Summary");const u=[["Subcontractor","Scope","CSI","Contract Amount","Payment Milestone","Milestone Amount","Due Date","Status","Date Paid","Balance","Proof Files","Lien Waiver"]];i.forEach(g=>{const b=g.payMilestones||[];if(!b.length)u.push([g.vendor,g.scope,g.csi||"",Number(g.amount||0),"(no milestones)","","","","",Number(g.amount||0),"",""]);else{b.forEach((w,f)=>{u.push([g.vendor,g.scope,g.csi||"",Number(g.amount||0),w.name,Number(w.amount||0),w.dueDate||"",w.paid?"Paid":"Pending",w.paidDate||"",w.paid?0:Number(w.amount||0),(w.files||[]).length,(w.lienFiles||[]).length])});const y=b.filter(w=>w.paid).reduce((w,f)=>w+Number(f.amount||0),0);u.push(["","","","","SUBTOTAL — "+g.vendor,"","","","",Number(g.amount||0)-y,"",""]),u.push([])}}),u.push(["TOTAL","","","","","","","","",a-c,"",""]);const m=n.utils.aoa_to_sheet(u);m["!cols"]=[{wch:28},{wch:30},{wch:8},{wch:18},{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}],n.utils.book_append_sheet(r,m,"Full Ledger"),i.forEach(g=>{const b=g.payMilestones||[],y=b.filter(x=>x.paid).reduce((x,S)=>x+Number(S.amount||0),0),w=[[g.vendor],["Scope:",g.scope],["CSI Division:",g.csi||""],["Contract Amount:",Number(g.amount||0)],["Total Paid:",y],["Balance Due:",Number(g.amount||0)-y],[],["Payment Milestone","Amount","Due Date","Status","Date Paid","Balance Due","Proof Files","Lien Waiver"]];b.forEach(x=>{w.push([x.name,Number(x.amount||0),x.dueDate||"",x.paid?"Paid":"Pending",x.paidDate||"",x.paid?0:Number(x.amount||0),(x.files||[]).length,(x.lienFiles||[]).length])}),b.length||w.push(["No payment milestones added yet."]),w.push([]),w.push(["TOTAL",Number(g.amount||0),"","","",Number(g.amount||0)-y,"",""]);const f=n.utils.aoa_to_sheet(w);f["!cols"]=[{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}];const v=g.vendor.replace(/[:\\\/\?\*\[\]]/g,"").slice(0,28);n.utils.book_append_sheet(r,f,v)});const p=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_PaymentLedger.xlsx";n.writeFile(r,p),j("📊 Excel ledger downloaded: "+p)}catch(n){console.error("Excel error:",n),j("⚠ Excel error: "+n.message)}}function Jg(){const e=B();if(!e){j("⚠ No project selected");return}const t=e.milestones||[];if(!t.length){j("⚠ No milestones to export");return}const n=t.reduce((u,m)=>u+Number(m.payAmt||0),0),r=t.reduce((u,m)=>u+(m.progressPayments||[]).filter(p=>p.paid).reduce((p,g)=>p+Number(g.amount||0),0),0),i=t.reduce((u,m)=>u+(m.progressPayments||[]).reduce((p,g)=>p+Number(g.amount||0),0),0)-r,a=t.map(function(u,m){const p=u.progressPayments||[],g=p.filter(E=>E.paid).reduce((E,P)=>E+Number(P.amount||0),0),b=p.reduce((E,P)=>E+Number(P.amount||0),0),y=b-g,w=b?Math.min(100,Math.round(g/b*100)):0,f=m%2===0?"#fff":"#fafaf8",v={done:"#2D6A0F",inprogress:"#A86200",upcoming:"#6B6A64"},x={done:"Done",inprogress:"In Progress",upcoming:"Upcoming"},S=p.map(function(E,P){return'<tr style="background:'+(E.paid?"#F3FCF0":"#FEFDF9")+'"><td style="padding:4px 10px 4px 32px;font-size:10px;color:#555;border-bottom:1px solid #f0ede6" colspan="2"><span style="color:'+(E.paid?"#2D6A0F":"#ccc")+';margin-right:5px">'+(E.paid?"&#10003;":"&#9675;")+"</span>"+E.name+(E.dueDate?' <span style="color:#999;font-size:9px">Due: '+E.dueDate+"</span>":"")+'</td><td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">$'+Number(E.amount||0).toLocaleString()+'</td><td style="padding:4px 10px;font-size:10px;border-bottom:1px solid #f0ede6">'+(E.paid?'<span style="color:#2D6A0F;font-weight:600">&#10003; Paid</span>':'<span style="color:#A86200">Pending</span>')+'</td><td style="padding:4px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+(E.paidDate||"&mdash;")+'</td><td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">'+(E.paid?'<span style="color:#2D6A0F">$0</span>':'<span style="color:#9B1F1F">$'+Number(E.amount||0).toLocaleString()+"</span>")+'</td><td style="padding:4px 10px;font-size:9px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+((E.files||[]).length?"&#128206; "+(E.files||[]).length:"&mdash;")+"</td></tr>"}).join(""),C=w===100?"#4E9A1A":w>60?"#1A6BC4":"#D98E00";return'<tr style="background:'+f+';border-top:2px solid #e0ddd5"><td style="padding:9px 10px 9px 14px;border-bottom:1px solid #e0ddd5"><div style="display:flex;align-items:center;gap:7px"><div style="width:9px;height:9px;border-radius:50%;background:'+(u.status==="done"?"#4E9A1A":u.status==="inprogress"?"#D98E00":"#aaa")+';flex-shrink:0"></div><div><div style="font-size:12px;font-weight:700;color:#0C1B2E">'+u.name+"</div>"+(u.notes?'<div style="font-size:9px;color:#999">'+u.notes+"</div>":"")+'</div></div></td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="background:#EEEDFD;color:#4A3FB0;font-size:9px;font-weight:700;padding:2px 6px;border-radius:3px">'+u.ref+'</span></td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(u.payAmt?"$"+Number(u.payAmt).toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="color:'+(v[u.status]||"#555")+';font-size:10px;font-weight:700">'+(x[u.status]||u.status)+'</span></td><td style="padding:9px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(u.date||"&mdash;")+'</td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(b?"$"+g.toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:'+(y>0?"#9B1F1F":"#2D6A0F")+';border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(b?"$"+y.toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5">'+(b?'<div style="width:70px;height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-bottom:2px"><div style="height:100%;width:'+w+"%;background:"+C+';border-radius:3px"></div></div><span style="font-size:9px;color:'+C+';font-weight:700">'+w+"%</span>":"&mdash;")+"</td></tr>"+S}).join(""),c='<tr style="background:#0C1B2E"><td style="padding:10px 14px;font-size:11px;font-weight:700;color:#fff" colspan="2">TOTAL</td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:#fff;white-space:nowrap">$'+n.toLocaleString()+'</td><td colspan="2"></td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:#9FE1CB;white-space:nowrap">$'+r.toLocaleString()+'</td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:'+(i>0?"#F09595":"#9FE1CB")+';white-space:nowrap">$'+i.toLocaleString()+"</td><td></td></tr>",l='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Milestone Payment Report &mdash; '+e.name+'</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>Milestone Payment Report</h1><div class="meta">'+e.name+" &nbsp;&middot;&nbsp; "+ae(e)+"<br>Livio Address: "+K+"<br>Permit: "+(e.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+(e.type||"")+" &nbsp;&middot;&nbsp; "+se+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+'</div><table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:18px"><thead><tr style="background:#0C1B2E"><th style="padding:8px 10px 8px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left;width:24%">Milestone</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">CBC Ref.</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Contract Amt.</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Status</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Target Date</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#2D6A0F;text-align:left">&#10003; Received</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#F09595;text-align:left">Balance</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Progress</th></tr></thead><tbody>'+a+c+'</tbody></table><div style="font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+se+" &nbsp;&middot;&nbsp; "+K+" &nbsp;&middot;&nbsp; "+e.name+" &nbsp;&middot;&nbsp; Generated "+new Date().toLocaleDateString()+"</div></body></html>",d=window.open("","_blank");if(!d){j("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(function(){d.focus(),d.print()},600),j("🖨 Milestone report opened — Print → Save as PDF")}function Kg(){const e=B();if(!e){j("⚠ No project selected");return}if(j("📊 Building Excel…",3500),window.XLSX)hc(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>hc(e),t.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(t)}}function hc(e){try{const t=window.XLSX,n=t.utils.book_new(),r=e.milestones||[],o=[["MILESTONE PAYMENT LEDGER — "+e.name],["Project:",e.name,"","Project Address:",ae(e)],["Livio Address:",K,"","Type:",e.type||""],["Permit:",e.permit||""],["Generated:",new Date().toLocaleDateString()],[],["Milestone","CBC Ref.","Target Date","Status","Contract Amount","Progress Payment","Amount","Due Date","Status","Date Received","Balance","Proof Files"]];let i=0,a=0,c=0;r.forEach(p=>{i+=Number(p.payAmt||0);const g=p.progressPayments||[],b=g.filter(w=>w.paid).reduce((w,f)=>w+Number(f.amount||0),0),y=g.reduce((w,f)=>w+Number(f.amount||0),0);a+=b,c+=y,g.length?(g.forEach((w,f)=>{o.push([f===0?p.name:"",f===0?p.ref:"",f===0&&p.date||"",f===0?p.status:"",f===0?Number(p.payAmt||0):"",w.name,Number(w.amount||0),w.dueDate||"",w.paid?"Paid":"Pending",w.receivedDate||"",w.paid?0:Number(w.amount||0),(w.files||[]).length])}),o.push(["","","","","SUBTOTAL — "+p.name,"","","","","",y-b,""]),o.push([])):o.push([p.name,p.ref,p.date||"",p.status,Number(p.payAmt||0),"(no progress payments)","","","","",Number(p.payAmt||0),""])}),o.push(["TOTAL","","","",i,"","","","","",c-a,""]);const l=t.utils.aoa_to_sheet(o);l["!cols"]=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:28},{wch:14},{wch:12},{wch:10},{wch:14},{wch:14},{wch:12}],t.utils.book_append_sheet(n,l,"Milestone Ledger");const d=[["MILESTONE PAYMENT SUMMARY"],[],["Milestone","CBC Ref.","Date","Status","Contract Amt.","Total Scheduled","Total Received","Balance Due","Progress %"]];r.forEach(p=>{const g=p.progressPayments||[],b=g.filter(f=>f.paid).reduce((f,v)=>f+Number(v.amount||0),0),y=g.reduce((f,v)=>f+Number(v.amount||0),0),w=y?Math.round(b/y*100):0;d.push([p.name,p.ref,p.date||"",p.status,Number(p.payAmt||0),y,b,y-b,w+"%"])}),d.push([]),d.push(["TOTAL","","","",i,c,a,c-a,c?Math.round(a/c*100)+"%":"0%"]);const u=t.utils.aoa_to_sheet(d);u["!cols"]=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:18},{wch:16},{wch:14},{wch:12}],t.utils.book_append_sheet(n,u,"Summary");const m=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_MilestoneLedger.xlsx";t.writeFile(n,m),j("📊 Milestone Excel downloaded: "+m)}catch(t){console.error(t),j("⚠ Excel error: "+t.message)}}function Vl(){const e=B();if(!e)return;const t=e.invoices||[],n=(e.quotes||[]).filter(m=>m.status==="approved");h("ct-inv").textContent=t.length;const r=(e.vendors||[]).reduce((m,p)=>m+Number(p.amount||0),0),o=t.reduce((m,p)=>m+Number(p.amount||0),0),i=t.filter(m=>m.paid).reduce((m,p)=>m+Number(p.amount||0),0),a=t.filter(m=>!m.paid).reduce((m,p)=>m+Number(p.amount||0),0);h("inv-contract").textContent=R(r),h("inv-invoiced").textContent=R(o),h("inv-paid").textContent=R(i),h("inv-due").textContent=R(a);const c=h("inv-content");if(!c)return;if(!t.length){c.innerHTML='<div class="empty"><div class="empty-ic">🧾</div>No invoices yet. Click + Add Invoice to start tracking.</div>';const m=h("inv-chart-row");m&&(m.style.display="none");return}const l=h("inv-chart-row");l&&(l.style.display="grid"),t.forEach(m=>G(m.files||[]));const d={};t.forEach(m=>{const p=m.vendor||"Unassigned";d[p]||(d[p]={vendor:p,quoteId:m.quoteId,invs:[]}),d[p].invs.push(m)});const u=Object.values(d);c.innerHTML=u.map(m=>{const p=n.find(x=>x.id===m.quoteId)||null,g=p?Number(p.amount||0):0,b=m.invs.reduce((x,S)=>x+Number(S.amount||0),0),y=m.invs.filter(x=>x.paid).reduce((x,S)=>x+Number(S.amount||0),0),w=m.invs.filter(x=>!x.paid).reduce((x,S)=>x+Number(S.amount||0),0),f=g?Math.min(100,Math.round(b/g*100)):0,v=m.invs.map((x,S)=>{const C=S%2===0?"#fff":"var(--bg)",E=`<div style="display:flex;flex-direction:column;gap:4px">
        ${(x.files||[]).length?(x.files||[]).map(D=>`<div style="display:flex;align-items:center;gap:5px;background:var(--amber-l);border:1px solid #F5D9A0;border-radius:5px;padding:3px 8px;cursor:pointer" onclick="viewFile('${D.id}')" title="Open ${D.name}">
              <span style="font-size:12px">${dt(D.name)}</span>
              <span style="font-size:10px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px" title="${D.name}">${D.name}</span>
              <button class="a-dl" style="background:#fff7e8;color:var(--amber);border:1px solid #F5D9A0;font-size:9px;padding:1px 6px;flex-shrink:0" onclick="event.stopPropagation();viewFile('${D.id}')" title="Open">Open</button>
              <button class="a-dl" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0;flex-shrink:0" onclick="event.stopPropagation();dlFile('${D.id}')" title="Download">⬇</button>
            </div>`).join(""):'<span style="font-size:10px;color:var(--muted);font-style:italic">No files yet</span>'}
        <button class="btn btn-xs" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0;font-size:10px;padding:3px 8px;margin-top:2px;text-align:left" onclick="openModal('invfiles','${x.id}')">
          📎 ${(x.files||[]).length?"Add / Edit Files":"Attach Invoice"}
        </button>
      </div>`,P=x.approvalStatus||"pending",$=P==="approved"?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:7px;padding:7px 10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:11px;font-weight:700;color:var(--green)">✓ Approved</span>
              <button onclick="rejectInvoice('${x.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button>
            </div>
            <span style="font-size:9px;color:var(--green);opacity:.8">Visible in Payments tab</span>
          </div>`:P==="rejected"?`<div style="background:var(--red-l);border:1px solid #F5C0C0;border-radius:7px;padding:7px 10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:11px;font-weight:700;color:var(--red)">✗ Rejected</span>
              <button onclick="approveInvoice('${x.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Approve</button>
            </div>
            <span style="font-size:9px;color:var(--red);opacity:.8">Not in Payments tab</span>
          </div>`:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:7px 10px">
            <div style="font-size:10px;color:var(--muted);margin-bottom:6px">Awaiting approval</div>
            <div style="display:flex;gap:5px">
              <button onclick="approveInvoice('${x.id}')" class="btn btn-green btn-xs" style="flex:1;justify-content:center;font-size:10px">✓ Approve</button>
              <button onclick="rejectInvoice('${x.id}')" class="btn btn-red btn-xs" style="flex:1;justify-content:center;font-size:10px">✗ Reject</button>
            </div>
          </div>`,A=(e.vendors||[]).find(D=>D.quoteId===x.quoteId),k=A?(A.milestones||[]).find(D=>D.id===x.milestoneId):null;return`<tr style="background:${C};border-left:3px solid ${P==="approved"?"var(--green-m)":P==="rejected"?"var(--red-m)":"var(--border)"}">
        <td style="padding:8px 10px">
          <div style="font-size:12px;font-weight:600;color:var(--navy)">${x.invoiceNo||"—"}</div>
          ${k?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${k.name}</div>`:""}
        </td>
        <td style="padding:8px 10px;font-size:11px;color:var(--text)">${x.description||"—"}</td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${x.invoiceDate?J(x.invoiceDate):"—"}</td>
        <td style="padding:8px 10px;font-size:10px;color:${x.dueDate&&new Date(x.dueDate+"T12:00:00")<new Date&&!x.paid?"var(--red)":"var(--muted)"};white-space:nowrap">${x.dueDate?J(x.dueDate):"—"}</td>
        <td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--text)">${R(x.amount||0)}</span></td>
        <td style="padding:6px 8px">${$}</td>
        <td style="padding:6px 8px">${E}</td>
        <td style="padding:8px 10px;white-space:nowrap">
          <div style="display:flex;flex-direction:column;gap:3px">
            <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 6px" onclick="openModal('invoice','${x.id}')">✏ Edit</button>
            <button class="btn btn-teal btn-xs" style="font-size:9px;padding:2px 6px" onclick="openInvPayment('${x.id}')">💵 Payment</button>
            <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 6px" onclick="delInvoice('${x.id}')">🗑 Del</button>
          </div>
        </td>
      </tr>
      ${(x.payments||[]).length?`<tr style="background:#F0F8FF"><td colspan="8" style="padding:6px 12px">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--blue);margin-bottom:4px">💵 Partial Payments</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${(x.payments||[]).map(D=>`<div style="display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #B0D0F0;border-radius:5px;padding:4px 8px;font-size:10px">
            <span style="font-weight:700;color:var(--blue)">${R(D.amount)}</span>
            <span style="color:var(--muted)">${D.date?J(D.date):""}</span>
            ${D.note?`<span style="color:var(--text)">${D.note}</span>`:""}
            <button onclick="deleteInvPayment('${x.id}','${D.id}')" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:11px;padding:0 2px" title="Remove">×</button>
          </div>`).join("")}
        </div>
        <div style="margin-top:4px;font-size:10px;color:var(--muted)">Total paid: <strong style="color:var(--green)">${R((x.payments||[]).reduce((D,z)=>D+Number(z.amount||0),0))}</strong></div>
      </td></tr>`:""}
      `}).join("");return`<div class="panel pay-vendor-card" data-vendor="${(p==null?void 0:p.id)||m.quoteId||""}" style="margin-bottom:16px">
      <!-- Vendor header -->
      <div style="background:var(--navy);padding:11px 16px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span style="font-size:14px;font-weight:700;color:#fff">${m.vendor}</span>
          ${p?`<span style="font-size:11px;color:#8AAAC8;margin-left:8px">${p.scope||""}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          ${g?`<span style="font-size:11px;color:#8AAAC8">Contract: <strong style="color:#fff">${R(g)}</strong></span>`:""}
          <span style="font-size:11px;color:#8AAAC8">Invoiced: <strong style="color:#fff">${R(b)}</strong></span>
        </div>
      </div>
      <!-- Progress bar -->
      <div style="padding:10px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.4px">vs Contract</span>
            <span style="font-size:11px;font-weight:700;color:${f>100?"var(--red)":"var(--text)"}">${f}%</span>
          </div>
          <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${Math.min(f,100)}%;background:${f>100?"var(--red-m)":f>80?"var(--amber-m)":"var(--blue-m)"};border-radius:3px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:16px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">✓ Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${R(y)}</div></div>
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Due</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${w>0?"var(--red)":"var(--green)"}">${R(w)}</div></div>
        </div>
      </div>
      <!-- Invoice table -->
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <thead><tr style="background:var(--bg)">
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:10%">Invoice #</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:16%">Description</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:9%">Invoice Date</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--red);text-align:left;border-bottom:1px solid var(--border);width:9%">Due Date</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Amount</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--green);text-align:left;border-bottom:1px solid var(--border);width:16%">✓ Approval</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--amber);text-align:left;border-bottom:1px solid var(--border);width:18%">🧾 Invoice File</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:7%">Act.</th>
        </tr></thead>
        <tbody>${v}</tbody>
        <!-- Sub-total row -->
        <tr style="background:var(--navy)">
          <td colspan="4" style="padding:8px 10px;font-size:11px;font-weight:700;color:#fff">TOTAL — ${m.invs.length} invoice(s)</td>
          <td style="padding:8px 10px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff">${R(b)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:#9FE1CB">✓ ${R(y)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${w>0?"#F09595":"#9FE1CB"}">Due: ${R(w)}</td>
          <td></td>
        </tr>
      </table>
    </div>`}).join("")}function Xg(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(r=>r.id===e);if(n){if(!n.vcId&&n.quoteId){const r=(t.vendors||[]).find(o=>o.quoteId===n.quoteId);r&&(n.vcId=r.id)}n.approvalStatus="approved",Z(),ne(),j("✓ Invoice approved — now visible in Payments")}}function Zg(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(r=>r.id===e);n&&(n.approvalStatus="rejected",Z(),ne(),j("✗ Invoice rejected"))}function ex(e){h("invpay-inv-id").value=e,h("invpay-date").value=new Date().toISOString().slice(0,10),h("invpay-amount").value="",h("invpay-note").value="";const t=h("invpay-proof");t&&(t.value=""),h("mo-inv-payment").classList.add("open")}function ki(){h("mo-inv-payment").classList.remove("open")}function nf(){const e=h("invpay-inv-id").value,t=h("invpay-date").value,n=parseFloat(h("invpay-amount").value||"0"),r=h("invpay-note").value.trim();if(!t||!n){j("⚠ Date and amount are required");return}const o=B();if(!o)return;const i=(o.invoices||[]).find(c=>c.id===e);if(!i)return;i.payments||(i.payments=[]);const a=h("invpay-proof");if(a&&a.files&&a.files[0]){const c=a.files[0],l=new FileReader;l.onload=function(d){const u="pp_"+Math.random().toString(36).slice(2,10);i.payments.push({id:u,date:t,amount:n,note:r,proofName:c.name,proofData:d.target.result}),Z(),ki(),ne(),j("💵 Payment recorded: "+R(n))},l.readAsDataURL(c)}else{const c="pp_"+Math.random().toString(36).slice(2,10);i.payments.push({id:c,date:t,amount:n,note:r}),Z(),ki(),ne(),j("💵 Payment recorded: "+R(n))}}function tx(e,t){if(!confirm("Remove this payment record?"))return;const n=B();if(!n)return;const r=(n.invoices||[]).find(o=>o.id===e);r&&(r.payments=(r.payments||[]).filter(o=>o.id!==t),Z(),ne(),j("🗑 Payment record removed"))}function nx(e){const t=h("f-inv-manual-vendor-other-row");t&&(t.style.display=e.value==="__other__"?"":"none")}function ks(e){const t=document.getElementById("inv-src-contract"),n=document.getElementById("inv-src-manual"),r=document.getElementById("inv-contract-section"),o=document.getElementById("inv-manual-section");!t||!n||(e==="contract"?(t.style.background="var(--navy)",t.style.color="#fff",t.style.borderColor="var(--navy)",n.style.background="#fff",n.style.color="var(--muted)",n.style.borderColor="var(--border)",r&&(r.style.display=""),o&&(o.style.display="none")):(n.style.background="var(--navy)",n.style.color="#fff",n.style.borderColor="var(--navy)",t.style.background="#fff",t.style.color="var(--muted)",t.style.borderColor="var(--border)",r&&(r.style.display="none"),o&&(o.style.display="")))}function rf(e){const t=B();if(!t)return;const n=h("f-inv-milestone");if(!n)return;let r;if(e&&e.startsWith("vc_")){const a=e.replace("vc_","");r=(t.vendors||[]).find(c=>c.id===a)}else if(e&&e!=="__other__"&&(r=(t.vendors||[]).find(a=>a.quoteId===e),!r)){const a=(t.quotes||[]).find(c=>c.id===e);a&&(r=(t.vendors||[]).find(c=>c.vendor===a.vendor||a.vendor&&c.vendor&&c.vendor.toLowerCase()===a.vendor.toLowerCase()))}const o=r&&r.milestones||[];n.innerHTML='<option value="">-- Select milestone --</option>'+o.map(a=>`<option value="${a.id}">${a.name}${a.amount?" — $"+Number(a.amount||0).toLocaleString():""}</option>`).join("");const i=h("f-inv-ms-info");i&&(i.style.display="none"),!o.length&&e&&e!=="__other__"&&(n.innerHTML='<option value="">-- No milestones on this contract --</option>')}function rx(e,t){const n=B();if(!n)return;let r;if(t&&t.startsWith("vc_")){const a=t.replace("vc_","");r=(n.vendors||[]).find(c=>c.id===a)}else r=(n.vendors||[]).find(a=>a.quoteId===t);const o=r?(r.milestones||[]).find(a=>a.id===e):null,i=h("f-inv-ms-info");if(i&&o){i.style.display="",i.textContent="Milestone value: $"+Number(o.amount||0).toLocaleString()+(o.dueDate?" · Due: "+o.dueDate:"");const a=h("f-inv-amt");a&&!a.value&&(a.value=o.amount||"")}else i&&(i.style.display="none")}function ox(e,t){const n=h("pay-pie-panel"),r=h("pay-pie-svg-wrap"),o=h("pay-pie-legend"),i=h("pay-filter-bar"),a=h("pay-vendor-checks");if(!n||!r||!o)return;if(!e.length){n.style.display="none",i&&(i.style.display="none");return}n.style.display="",i&&(i.style.display="none");const c=e.map(f=>{const x=(f.isManualGroup?f._manualInvs||[]:f.isQuoteGroup?f._quoteInvs||[]:(t.invoices||[]).filter($=>$.vcId===f.id&&$.approvalStatus==="approved")).reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((k,D)=>k+Number(D.amount||0),0),0),S=Number(f.amount||0),C=S?Math.min(100,Math.round(x/S*100)):0,E=C===100?"#2D6A0F":C>0?"#D98E00":"#9B1F1F",P=f.isQuoteGroup?"Approved Quote":f.isManualGroup?"Manual Invoices":"Vendor Contract";return{id:f.id,label:f.vendor.length>22?f.vendor.slice(0,20)+"…":f.vendor,value:S||1,paid:x,total:S,pct:C,color:E,badge:P}}),l=c.reduce((f,v)=>f+v.value,0),d=c.filter(f=>f.pct===100).length,u=90,m=90,p=76,g=38;let b="",y=-Math.PI/2;const w=Math.PI*2;c.forEach(f=>{const v=f.value/l*w,x=u+p*Math.cos(y),S=m+p*Math.sin(y),C=u+p*Math.cos(y+v),E=m+p*Math.sin(y+v),P=u+g*Math.cos(y+v),$=m+g*Math.sin(y+v),A=u+g*Math.cos(y),k=m+g*Math.sin(y),D=v>Math.PI?1:0,z="M "+x+" "+S+" A "+p+" "+p+" 0 "+D+" 1 "+C+" "+E+" L "+P+" "+$+" A "+g+" "+g+" 0 "+D+" 0 "+A+" "+k+" Z";b+='<path d="'+z+'" fill="'+f.color+'" stroke="#fff" stroke-width="2"/>',y+=v}),r.innerHTML='<svg viewBox="0 0 180 180" width="180" height="180" xmlns="http://www.w3.org/2000/svg">'+b+'<circle cx="'+u+'" cy="'+m+'" r="'+g+'" fill="#fff"/><text x="'+u+'" y="'+(m-9)+'" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#0C1B2E">'+d+"/"+c.length+'</text><text x="'+u+'" y="'+(m+8)+'" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b6a64">Fully Paid</text></svg>',o.innerHTML='<div style="display:flex;flex-direction:column;gap:4px">'+c.map(f=>'<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)"><div style="width:12px;height:12px;border-radius:50%;background:'+f.color+';flex-shrink:0"></div><div style="flex:1;min-width:0"><div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+f.label+'</div><div style="font-size:9px;color:var(--muted)">'+f.badge+" · $"+f.paid.toLocaleString()+" paid / $"+f.total.toLocaleString()+' total</div><div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:2px;width:120px"><div style="height:100%;width:'+f.pct+"%;background:"+f.color+';border-radius:2px"></div></div></div><span style="font-size:9px;font-weight:700;color:'+f.color+';flex-shrink:0">'+f.pct+"%</span></div>").join("")+"</div>",a&&(a.innerHTML="")}function ix(e,t,n,r){const o=t-n,i=t?Math.min(100,Math.round(n/t*100)):0,a=e.map((l,d)=>{var E;const u=l.isManualGroup?l._manualInvs||[]:l.isQuoteGroup?l._quoteInvs||[]:(r.invoices||[]).filter(P=>P.vcId===l.id&&P.approvalStatus==="approved"),m=u.reduce((P,$)=>$.paid?P+Number($.amount||0):P+($.partialPayments||[]).reduce((A,k)=>A+Number(k.amount||0),0),0),p=Number(l.amount||0),g=p-m,b=p?Math.min(100,Math.round(m/p*100)):0,y=d%2===0?"#fff":"var(--bg)",w=l.isQuoteGroup?((E=(r.vendors||[]).find(P=>P.quoteId===l.sourceQuoteId||P.vendor===l.vendor))==null?void 0:E.milestones)||[]:l.milestones||[],f=l.isManualGroup?`<button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerPDF('${String(l.vendor||"").replace(/'/g,"\\'")}')" title="PDF">🖨</button>
          <button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerExcel('${String(l.vendor||"").replace(/'/g,"\\'")}')" title="Excel">📊</button>`:l.isQuoteGroup?`<button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerPDF('${l.sourceQuoteId}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerExcel('${l.sourceQuoteId}')" title="Excel">📊</button>`:`<button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerPDF('${l.id}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerExcel('${l.id}')" title="Excel">📊</button>`,v=u.map(P=>{var M;const $=P.paid?Number(P.amount||0):(P.partialPayments||[]).reduce((W,N)=>W+Number(N.amount||0),0),A=Number(P.amount||0)-$,k=((M=w.find(W=>W.id===P.milestoneId))==null?void 0:M.name)||(l.isManualGroup?"Manual / No Contract":"—"),D=[...P.partialPayments||[]];P.paid&&!D.length&&D.push({amount:P.amount,date:P.paidDate,full:!0});const z=D.map(W=>'<div style="display:flex;align-items:center;gap:6px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:4px;padding:3px 8px;margin-top:3px;flex-wrap:wrap"><span style="font-size:9px;font-weight:700;color:var(--green)">&#10003; $'+Number(W.amount||0).toLocaleString()+"</span>"+(W.date?'<span style="font-size:9px;color:var(--muted)">'+J(W.date)+"</span>":"")+'<span style="font-size:9px;color:var(--blue);background:var(--blue-l);padding:1px 6px;border-radius:3px">📍 '+k+"</span>"+(W.txnNo?'<span style="font-size:9px;color:var(--blue)">🔖 Txn: <strong>'+W.txnNo+"</strong></span>":"")+"</div>").join("");return`<tr style="background:${P.paid?"#F3FCF0":"#FFFBF0"}">
        <td style="padding:6px 14px 6px 28px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:9px;background:${P.paid?"var(--green)":"var(--amber)"};color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">${P.paid?"✓ PAID":"PARTIAL"}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${P.invoiceNo||"Invoice"}</span>
          </div>
          ${z}
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <span style="font-size:10px;font-weight:600;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:2px 8px;border-radius:4px;display:inline-block">📍 ${k}</span>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)"></td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;border-bottom:1px solid var(--border)">$${Number(P.amount||0).toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">$${$.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:${A>0?"var(--red)":"var(--green)"};border-bottom:1px solid var(--border)">$${A.toLocaleString()}</td>
        <td colspan="2" style="border-bottom:1px solid var(--border)"></td>
      </tr>`}).join(""),x=(r.quotes||[]).find(P=>u.some($=>$.quoteId===P.id)),S=l.csi||l.trade||(x==null?void 0:x.csi)||"—",C=u.length?`<div style="display:flex;flex-direction:column;gap:3px">${u.map(P=>{const $=w.find(k=>k.id===P.milestoneId),A=($==null?void 0:$.name)||(l.isManualGroup?"Manual":"");return A?`<span style="font-size:9px;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:1px 6px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px;display:block" title="${A}">📍 ${A}</span>`:""}).filter(Boolean).join("")}</div>`:'<span style="font-size:10px;color:var(--muted)">—</span>';return`<tr style="background:${y};border-left:3px solid var(--navy)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${l.vendor}</div>
        <div style="font-size:9px;color:var(--muted);margin-top:2px">${u.length} invoice${u.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px">
        ${C}
      </td>
      <td style="padding:10px 14px"><span class="badge ${S!=="—"?"b-teal":"b-gray"}">${S}</span></td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${p.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${m.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${g>0?"var(--red)":"var(--green)"}">$${g.toLocaleString()}</span></td>
      <td style="padding:10px 14px">
        <div style="display:flex;align-items:center;gap:7px">
          <div style="width:80px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
            <div style="height:100%;width:${b}%;background:${b===100?"var(--green-m)":b>60?"var(--blue-m)":"var(--amber-m)"};border-radius:3px;transition:.5s"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:${b===100?"var(--green)":"var(--text)"}">${b}%</span>
        </div>
      </td>
      <td style="padding:10px 14px">
        <div style="display:flex;gap:4px">${f}</div>
      </td>
    </tr>${v}`}).join(""),c=`<div style="display:flex;align-items:center;gap:7px"><div style="width:80px;height:6px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden;flex-shrink:0"><div style="height:100%;width:${i}%;background:${i===100?"#9FE1CB":"#85B7EB"};border-radius:3px"></div></div><span style="font-size:11px;font-weight:700;color:#fff">${i}%</span></div>`;return`<div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse">
      <thead><tr style="background:var(--bg)">
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:22%">Vendor / Invoice</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--blue);text-align:left;border-bottom:1px solid var(--border);width:16%">📍 Milestone</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">CSI</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Contract / Amount</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);text-align:left;border-bottom:1px solid var(--border)">✓ Paid</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);text-align:left;border-bottom:1px solid var(--border)">Balance Due</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Status</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Export</th>
      </tr></thead>
      <tbody>
        ${a}
        <tr style="background:var(--navy)">
          <td style="padding:11px 14px" colspan="3"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL — ${e.length} Vendor${e.length!==1?"s":""}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">$${t.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">$${n.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${o>0?"#F09595":"#9FE1CB"}">$${o.toLocaleString()}</span></td>
          <td style="padding:11px 14px">${c}</td>
          <td style="padding:11px 14px">
            <div style="display:flex;gap:4px">
              <span style="font-size:10px;color:#fff;opacity:.85">Use the row actions for each vendor ledger</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`}function ax(e){const t=B();if(!t){j("⚠ No project");return}let n=(t.vendors||[]).filter(d=>(t.invoices||[]).some(u=>u.vcId===d.id&&u.approvalStatus==="approved"));if(e&&(n=n.filter(d=>d.id===e)),!n.length){j("⚠ No vendor payment data");return}let r=0,o=0;n.forEach(d=>{r+=Number(d.amount||0),(t.invoices||[]).filter(u=>u.vcId===d.id&&u.approvalStatus==="approved").forEach(u=>{u.paid?o+=Number(u.amount||0):o+=(u.partialPayments||[]).reduce((m,p)=>m+Number(p.amount||0),0)})});const i=r-o,a=n.map((d,u)=>{const m=(t.invoices||[]).filter(w=>w.vcId===d.id&&w.approvalStatus==="approved"),p=m.reduce((w,f)=>f.paid?w+Number(f.amount||0):w+(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0),g=Number(d.amount||0)-p,b=d.amount?Math.min(100,Math.round(p/Number(d.amount)*100)):0;let y="";return m.forEach((w,f)=>{var $;const v=w.paid?"#EDF8E5":f%2===0?"#fff":"#fafaf8",x=(($=(d.milestones||[]).find(A=>A.id===w.milestoneId))==null?void 0:$.name)||"—",S=w.partialPayments||[],C=w.paid?Number(w.amount||0):S.reduce((A,k)=>A+Number(k.amount||0),0),E=Number(w.amount||0)-C,P=S.length?S.map(A=>'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(A.amount||0).toLocaleString()+(A.date?" &middot; "+J(A.date):"")+(A.txnNo?'<span style="color:#1A6BC4"> &middot; Txn: '+A.txnNo+"</span>":"")+"</div></div>").join(""):"";y+=`<tr style="background:${v}">
        <td style="padding:5px 8px 5px 24px;border-bottom:1px solid #eee;font-size:10px" colspan="2">
          <span style="background:${w.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;font-weight:700;margin-right:6px">${w.paid?"✓ PAID":"PARTIAL"}</span>
          <strong>${w.invoiceNo||"Invoice"}</strong> &nbsp;📍 ${x}
          ${P}
        </td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700">$${Number(w.amount||0).toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:#2D6A0F">$${C.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:${E>0?"#9B1F1F":"#2D6A0F"}">$${E.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:10px;color:#555">${b}%</td>
      </tr>`}),`<tr style="background:${u%2===0?"#fff":"#fafaf8"}">
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">${d.vendor}</td>
      <td style="padding:8px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${d.trade||d.csi||"—"}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">$${Number(d.amount||0).toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${p.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:${g>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${g.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:11px;font-weight:700;color:${b===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${b}%</td>
    </tr>${y}`}).join(""),c=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Payment Ledger — ${t.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1>
  <div class="meta">${t.name} &nbsp;·&nbsp; ${ae(t)}<br>Livio Address: ${K}<br>Permit: ${t.permit||"—"} &nbsp;·&nbsp; ${se} &nbsp;·&nbsp; ${new Date().toLocaleDateString()}</div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade / CSI</th><th>Contract / Amount</th><th>✓ Paid</th><th>Balance Due</th><th>Status</th></tr></thead>
  <tbody>${a}
  <tr class="tot"><td colspan="2">TOTAL — ${n.length} Vendor${n.length>1?"s":""}</td><td>$${r.toLocaleString()}</td><td style="color:#9FE1CB">$${o.toLocaleString()}</td><td style="color:${i>0?"#F09595":"#9FE1CB"}">$${i.toLocaleString()}</td><td></td></tr>
  </tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${se} · ${K} · ${t.name} · Generated ${new Date().toLocaleDateString()}</div>
  </body></html>`,l=window.open("","_blank");if(!l){j("⚠ Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(()=>{l.focus(),l.print()},600),j("🖨 Vendor Payment Ledger PDF")}function sx(e){const t=B();if(!t){j("⚠ No project");return}if(j("📊 Building Excel…",3e3),window.XLSX)yc(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>yc(t,e),n.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(n)}}function yc(e,t){try{const n=window.XLSX;let r=(e.vendors||[]).filter(u=>(e.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(t&&(r=r.filter(u=>u.id===t)),!r.length){j("⚠ No vendor payment data");return}const o=n.utils.book_new(),i=[["VENDOR PAYMENT LEDGER — "+e.name],["Project:",e.name,"","Project Address:",ae(e)],["Livio Address:",K,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],[],["Vendor","Trade / CSI","Contract Amount","Paid","Balance Due","Status %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Inv. Status"]];let a=0,c=0;r.forEach(u=>{const m=(e.invoices||[]).filter(y=>y.vcId===u.id&&y.approvalStatus==="approved"),p=m.reduce((y,w)=>w.paid?y+Number(w.amount||0):y+(w.partialPayments||[]).reduce((f,v)=>f+Number(v.amount||0),0),0),g=Number(u.amount||0)-p,b=u.amount?Math.min(100,Math.round(p/Number(u.amount)*100)):0;a+=Number(u.amount||0),c+=p,m.length?m.forEach((y,w)=>{var S;const f=((S=(u.milestones||[]).find(C=>C.id===y.milestoneId))==null?void 0:S.name)||"",v=y.paid?Number(y.amount||0):(y.partialPayments||[]).reduce((C,E)=>C+Number(E.amount||0),0),x=Number(y.amount||0)-v;i.push([w===0?u.vendor:"",w===0&&(u.trade||u.csi)||"",w===0?Number(u.amount||0):"",w===0?p:"",w===0?g:"",w===0?b+"%":"",y.invoiceNo||"",f,Number(y.amount||0),v,x,y.paid?"Paid":"Partial"]),(y.partialPayments||[]).forEach(C=>{i.push(["","","","","","","  ↳ Partial","",Number(C.amount||0),Number(C.amount||0),0,C.date||""])})}):i.push([u.vendor,u.trade||u.csi||"",Number(u.amount||0),p,g,b+"%","","","","","",""]),i.push([])}),i.push(["TOTAL","","",a,c,a-c,"","","","","",""]);const l=n.utils.aoa_to_sheet(i);l["!cols"]=[{wch:26},{wch:16},{wch:16},{wch:14},{wch:14},{wch:10},{wch:14},{wch:20},{wch:14},{wch:12},{wch:14},{wch:10}],n.utils.book_append_sheet(o,l,"Payment Ledger");const d=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+(t?"_VendorLedger":"_AllVendorLedger")+".xlsx";n.writeFile(o,d),j("📊 Vendor Payment Ledger Excel downloaded")}catch(n){console.error(n),j("⚠ Excel error: "+n.message)}}function Es(){var r;const e=(((r=h("pay-search"))==null?void 0:r.value)||"").toLowerCase().trim(),t=document.querySelectorAll("#pay-vendor-checks input[type=checkbox]"),n=new Set([...t].filter(o=>o.checked).map(o=>o.dataset.vid));document.querySelectorAll(".pay-vendor-card").forEach(o=>{var d,u,m;const i=o.dataset.vendor,a=((u=(d=o.querySelector(".pay-vendor-name"))==null?void 0:d.textContent)==null?void 0:u.toLowerCase())||((m=o.innerText)==null?void 0:m.toLowerCase())||"",c=!e||a.includes(e),l=!t.length||n.has(i);o.style.display=c&&l?"":"none"})}function bc(){document.querySelectorAll("#pay-vendor-checks input[type=checkbox]").forEach(n=>n.checked=!0);const t=h("pay-search");t&&(t.value=""),document.querySelectorAll(".pay-vendor-card").forEach(n=>n.style.display="")}function wc(){const e=h("pay-search");e&&(e.value="",Es())}function _t(){try{localStorage.removeItem("livio_email_config")}catch{}return{}}const Ps="https://pms.golivio.com/api";function lx(){const e=typeof import.meta<"u"&&bg?"https://pms.golivio.com/api".trim():"";if(e)return e;if(typeof window<"u"&&window.location){const{hostname:t,origin:n,port:r}=window.location,o=Al(t),i=["3000","4173","5173","5500"].includes(String(r||""));return o&&i?"http://127.0.0.1:3001/api":o?n.replace(/\/+$/,"")+"/api":t.endsWith("railway.app")?n.replace(/\/+$/,"")+"/api":Ps}return Ps}const lo=lx();function dx(e){if(!e||typeof window>"u"||!window.location)return!1;const t=String(e).trim().toLowerCase(),n=t.startsWith("http://127.0.0.1:3001")||t.startsWith("http://localhost:3001"),{hostname:r}=window.location,o=Al(r);return n&&!o}function $n(){return lo.replace(/\/+$/,"")}function of(){return $n().replace(/\/api$/,"")}function Fe(e){return!!(e&&(e.data||e.path||e.url))}function cx(){return typeof window>"u"||!window.location||!window.location.origin?"":window.location.origin.replace(/\/+$/,"")}function Cc(e,t){const n=String(e||"").trim(),r=String(t||"").trim().replace(/\/+$/,"");return n?/^https?:\/\//i.test(n)||n.startsWith("data:")||n.startsWith("blob:")||!r?n:n.startsWith("/")?r+n:r+"/"+n.replace(/^\/+/,""):""}function px(e){const t=String(e||"").trim();return t?t.startsWith("/uploads/")?t.replace("/uploads/","/api/files/"):t.startsWith("/api/files/")?t.replace("/api/files/","/uploads/"):"":""}function ux(){const e=new Set,t=[],n=r=>{const o=String(r||"").trim().replace(/\/+$/,"");!o||e.has(o)||(e.add(o),t.push(o))};return n(cx()),n(of()),n(Ps.replace(/\/api$/,"")),n("http://127.0.0.1:3001"),n("http://localhost:3001"),t}function fx(e){if(!e)return[];if(e.data)return[e.data];const t=[],n=new Set,r=ux(),o=a=>{const c=String(a||"").trim();!c||n.has(c)||(n.add(c),t.push(c))},i=String(e.path||e.url||"").trim();if(i){r.forEach(c=>o(Cc(i,c)));const a=px(i);a&&r.forEach(c=>o(Cc(a,c)))}return t}function af(){var e;return((e=B())==null?void 0:e.id)||(L==null?void 0:L.activeId)||(L==null?void 0:L.activeProjectId)||"general"}async function sf(e){if(!e)throw new Error("File not found");const t=fx(e);if(!t.length)throw new Error("File not found");let n=null;for(const r of t)try{const o=await fetch(r);if(!o.ok){n=new Error("File download failed ("+o.status+")");continue}return await o.blob()}catch(o){n=o}throw n||new Error("File download failed")}async function lf(e,t){const n=Array.from(e||[]);if(!n.length)return[];const r=new FormData;r.append("projectId",t||af()),n.forEach(a=>r.append("files",a));const o=await fetch($n()+"/files/upload",{method:"POST",body:r});if(!o.ok){let a="Upload failed";try{const c=await o.json();a=(c==null?void 0:c.error)||a}catch{}throw new Error(a)}const i=await o.json();return Array.isArray(i==null?void 0:i.files)?i.files:[]}let Sc=null,$a=!1,js=!1,Ul=!1,Xo=0,Aa=!1,rr=pr(),ur="";function df(e,t=0){const n=e&&typeof e=="object"?e:{};return{...n,id:String(n.id||"u_"+t+"_"+Math.random().toString(36).slice(2,8)).trim(),username:String(n.username||n.user||"").trim(),password:String(n.password||"").trim(),role:String(n.role||"Manager").trim()||"Manager",email:String(n.email||"").trim()}}function cf(e){const t=Array.isArray(e)?e:e&&typeof e=="object"&&!Array.isArray(e)?Object.keys(e):[];return[...new Set(t.map(n=>String(n||"").trim()).filter(Boolean))]}function pf(e){var a;const t=e&&typeof e=="object"?e:{},r=Array.isArray(t.projects)?t.projects:ln()?[JSON.parse(JSON.stringify(Qu))]:[],o=t.activeId??t.activeProjectId??((a=r==null?void 0:r[0])==null?void 0:a.id)??null,i={...t,projects:r,vendorDirectory:Array.isArray(t.vendorDirectory)?t.vendorDirectory.map((c,l)=>Zi(c,l)):[],users:Array.isArray(t.users)?t.users.map((c,l)=>df(c,l)).filter(c=>c.username):[],roles:Array.isArray(t.roles)?t.roles.map(c=>String(c||"").trim()).filter(Boolean):[],perms:t.perms&&typeof t.perms=="object"&&!Array.isArray(t.perms)?t.perms:{},passwordResets:t.passwordResets&&typeof t.passwordResets=="object"&&!Array.isArray(t.passwordResets)?t.passwordResets:{},deletedProjectIds:cf(t.deletedProjectIds||t.deletedProjects),activeId:o,activeProjectId:o};return(i.projects||[]).forEach(c=>{c.works||(c.works=[]),c.milestones||(c.milestones=[]),c.quotes||(c.quotes=[]),c.plans||(c.plans=[]),c.inspections||(c.inspections=[]),c.milestones.forEach(l=>{l.payFiles||(l.payFiles=[]),l.progressPayments||(l.progressPayments=[]),l.progressPayments.forEach(d=>{d.files||(d.files=[])})}),c.quotes.forEach(l=>{l.files||(l.files=[]),l.payMilestones||(l.payMilestones=l.paymilestones||l.paymentMilestones||[],delete l.paymilestones,delete l.paymentMilestones),l.payMilestones.forEach(d=>{d.files||(d.files=[]),d.lienFiles||(d.lienFiles=[]),d.paid===void 0&&(d.paid=!1),d.paidDate||(d.paidDate="")})}),c.inspections.forEach(l=>{l.files||(l.files=[])}),c.invoices||(c.invoices=[]),c.vendors||(c.vendors=[]),c.checklist||(c.checklist=[]),c.qaqcLog||(c.qaqcLog=[]),c.chkCategories||(c.chkCategories=[]),(c.checklist||[]).forEach(l=>{(l.comments||[]).forEach(d=>G(d.files||[]))}),(c.qaqcLog||[]).forEach(l=>G(l.files||[])),(c.checklist||[]).forEach(l=>{l.comments||(l.comments=[])}),c.vendors=(c.vendors||[]).map(l=>Ju(l,i.vendorDirectory||[])),c.vendors.forEach(l=>G(l.files||[])),c.invoices.forEach(l=>{l.files||(l.files=[]),l.proofFiles||(l.proofFiles=[]),l.lienFiles||(l.lienFiles=[]),l.partialPayments||(l.partialPayments=[]),l.partialPayments.forEach(d=>{d.files||(d.files=[]),G(d.files||[])}),l.payments||(l.payments=[]),l.payments.forEach(d=>{if(d.proofFiles||(d.proofFiles=d.proofFile?[d.proofFile]:[]),(!d.proofFiles||!d.proofFiles.length)&&d.proofData){const u={id:d.proofId||`${d.id}_proof`,name:d.proofName||"Payment Proof",size:d.proofSize||0,data:d.proofData,at:d.date||new Date().toISOString()};d.proofFiles=[u],d.proofFile=u}G(d.proofFiles||[])}),G(l.files||[]),G(l.proofFiles||[]),G(l.lienFiles||[])})}),i}function uf(e){L=pf(e),typeof window<"u"&&(window.DB=L)}function ff(){if(!ln()||typeof localStorage>"u")return;const e=(L==null?void 0:L.activeId)??(L==null?void 0:L.activeProjectId)??null;localStorage.setItem($l,JSON.stringify({...L,activeId:e,activeProjectId:e}))}async function mx(){if($a){Aa=!0;return}$a=!0,Aa=!1;const e=Xo;try{const t={...L,deletedProjectIds:[]},n=await fetch($n()+"/projects/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok){let r="Failed to sync data";try{const o=await n.json();r=(o==null?void 0:o.error)||r}catch{}throw new Error(r)}Xo===e&&(Ul=!1)}catch(t){console.warn("Remote sync failed:",(t==null?void 0:t.message)||t)}finally{$a=!1,(Aa||Xo>e)&&Ei(50)}}function Ei(e=150){clearTimeout(Sc),Sc=setTimeout(()=>{mx()},e)}async function vx(e){if(!(!e||ln()))try{const t=await fetch($n()+"/projects/"+encodeURIComponent(e),{method:"DELETE"});if(!t.ok){let n="Failed to delete project on server";try{const r=await t.json();n=(r==null?void 0:r.error)||n}catch{}throw new Error(n)}}catch(t){console.warn("Remote project delete failed:",(t==null?void 0:t.message)||t),j("⚠ Project removed locally, but server delete failed. Refresh before continuing.",5e3)}}async function mf(){if(!js){js=!0,rr=pr(),ur="";try{const e=await fetch($n()+"/projects/all");if(!e.ok)throw new Error("Failed to load shared data");const t=pf(await e.json());if(rr=!1,Ul){Ei(50);return}if((t.projects||[]).length){uf(t);try{ff()}catch{}ln()||Yu(),In(),typeof ne=="function"&&ne()}else(L.projects||[]).length?Ei(50):typeof ne=="function"&&ne()}catch(e){rr=!1,ur=String((e==null?void 0:e.message)||e||"Failed to reach Railway"),console.warn("Shared data load skipped:",(e==null?void 0:e.message)||e),typeof ne=="function"&&ne()}}}function gx(){js=!1,rr=pr(),ur="",mf(),typeof ne=="function"&&ne()}uf(L);ln()||Yu();In();Z=function(){if(pr()&&rr){j("⚠ Waiting for Railway data to finish loading");return}if(pr()&&ur&&!(L.projects||[]).length){j("⚠ Railway data is unavailable. Retry sync before making changes.");return}try{L.activeProjectId=L.activeId??L.activeProjectId??null,ff(),Ul=!0,Xo+=1}catch(e){const t=e.name==="QuotaExceededError"||e.code===22?"âš  Browser storage full â€” files are too large for local storage. Export your project to save data.":"âš  Save failed: "+e.message;j(t,5e3),console.error("saveDB error:",e)}In(),Ei()};Rl=async function(e,t){const n=Array.from((e==null?void 0:e.files)||[]);if(!n.length)return;const r=n.filter(o=>o.size>500*1024*1024?(j("âš  Max 500MB: "+o.name),!1):!0);if(r.length){on+=r.length,ja();try{const o=await lf(r,af());o.forEach(i=>{Mt[i.id]=i,Y.push(i)}),ja(),j("âœ“ Uploaded "+o.length+" file(s)")}catch(o){j("âš  Upload failed: "+((o==null?void 0:o.message)||"Please try again")),console.error("File upload failed:",o)}finally{on=Math.max(0,on-r.length),ja(),e&&typeof e.value=="string"&&(e.value="")}}};go=function(e){let t=Mt[e];return t||(In(),t=Mt[e]),Fe(t)?t:null};zn=async function(e){const t=go(e);if(!t){j("âš  File not found â€” it may not have been saved yet");return}try{const n=await sf(t),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t.name||t.filename||"download",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(r),3e4),j("â¬‡ Downloading "+(t.name||"file"))}catch(n){j("âš  Failed to download "+(t.name||"file")),console.error("Download failed:",n)}};Ol=async function(e){const t=go(e);if(!t){j("âš  File not found â€” it may not have been saved yet");return}try{const n=await sf(t),r=URL.createObjectURL(n);if(!window.open(r,"_blank","noopener,noreferrer")){URL.revokeObjectURL(r),await zn(e),j("âš  Preview blocked â€” downloading instead");return}setTimeout(()=>URL.revokeObjectURL(r),6e4),j("Opening "+(t.name||"file"))}catch(n){j("âš  Failed to open "+(t.name||"file")),console.error("Preview failed:",n)}};tf=function(){const e=B();if(!e){j("âš  No project selected");return}const t=[];if((e.quotes||[]).forEach(n=>{(n.files||[]).forEach(r=>{Fe(r)&&t.push(r)}),(n.payMilestones||[]).forEach(r=>{(r.files||[]).forEach(o=>{Fe(o)&&t.push(o)}),(r.lienFiles||[]).forEach(o=>{Fe(o)&&t.push(o)}),(r.invoiceFiles||[]).forEach(o=>{Fe(o)&&t.push(o)})})}),(e.plans||[]).forEach(n=>{Fe(n)&&t.push(n)}),(e.inspections||[]).forEach(n=>(n.files||[]).forEach(r=>{Fe(r)&&t.push(r)})),(e.vendors||[]).forEach(n=>(n.files||[]).forEach(r=>{Fe(r)&&t.push(r)})),(e.invoices||[]).forEach(n=>{(n.files||[]).forEach(r=>{Fe(r)&&t.push(r)}),(n.proofFiles||[]).forEach(r=>{Fe(r)&&t.push(r)}),(n.lienFiles||[]).forEach(r=>{Fe(r)&&t.push(r)}),(n.partialPayments||[]).forEach(r=>(r.files||[]).forEach(o=>{Fe(o)&&t.push(o)})),(n.payments||[]).forEach(r=>(r.proofFiles||[]).forEach(o=>{Fe(o)&&t.push(o)}))}),!t.length){j("âš  No files in this project");return}t.forEach((n,r)=>setTimeout(()=>zn(n.id),r*350)),j(`â¬‡ Downloading ${t.length} file(s)â€¦`)};nf=async function(){const e=h("invpay-inv-id").value,t=h("invpay-date").value,n=parseFloat(h("invpay-amount").value||"0"),r=h("invpay-note").value.trim();if(!t||!n){j("âš  Date and amount are required");return}const o=B();if(!o)return;const i=(o.invoices||[]).find(l=>l.id===e);if(!i)return;i.payments||(i.payments=[]);const a="pp_"+Math.random().toString(36).slice(2,10),c=h("invpay-proof");try{let l=[];c&&c.files&&c.files[0]&&(l=await lf([c.files[0]],o.id),G(l)),i.payments.push({id:a,date:t,amount:n,note:r,proofFile:l[0]||null,proofFiles:l}),Z(),ki(),ne(),j("ðŸ’µ Payment recorded: "+R(n))}catch(l){j("âš  Payment proof upload failed: "+((l==null?void 0:l.message)||"Please try again")),console.error("Payment proof upload failed:",l)}};function Ji(){return lo.replace(/\/+$/,"")}function xx(){return"Livio Building Systems"}function hx(){return Nn}function Ln(e){return`<div style="display:flex;align-items:center;gap:10px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:11px 16px">
    <span style="font-size:20px">⚠️</span>
    <div>
      <div style="font-size:13px;font-weight:700;color:var(--green)">Email is managed by the backend</div>
      <div style="font-size:11px;color:var(--muted);margin-top:2px">This app sends mail using the backend email service.</div>
      <div style="font-size:10px;color:var(--muted);margin-top:3px">API: <strong>${Ji()}</strong></div>
    </div>
  </div>`}async function hr(e){const t=Ji(),n={to:e.to,cc:e.cc||"",subject:e.subject,message:e.message,fromName:e.fromName||xx()};n.replyTo=e.replyTo||hx(),Array.isArray(e.attachments)&&e.attachments.length&&(n.attachments=e.attachments),e.generatedPdf&&(n.generatedPdf=e.generatedPdf);const r=await fetch(t+"/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),o=await r.json().catch(()=>({}));if(!r.ok)throw new Error(o.error||o.message||"SMTP send failed ("+r.status+")");return o}async function yx(e){const t=Ji(),n=await fetch(t+"/email/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}),r=await n.json().catch(()=>({}));if(!n.ok||r.ok===!1)throw new Error(r.error||r.message||"SMTP verify failed ("+n.status+")");return r}function vf(){const e=_t(),t=h("cfg-api-base");t&&(t.value=Ji());const n=h("cfg-smtp-host");n&&(n.value=e.host||"");const r=h("cfg-smtp-port");r&&(r.value=e.port||"587");const o=h("cfg-smtp-user");o&&(o.value=e.user||"");const i=h("cfg-smtp-pass");i&&(i.value=e.pass||"");const a=h("cfg-smtp-secure");a&&(a.checked=!!e.secure);const c=h("cfg-from-name");c&&(c.value=e.fromName||"Livio Building Systems");const l=h("cfg-from-email");l&&(l.value=e.fromEmail||""),Hl()}function Hl(){const e=h("email-cfg-status");e&&(e.innerHTML=Ln(_t()))}function bx(){var n,r,o,i,a,c,l,d;const e=(((n=h("cfg-api-base"))==null?void 0:n.value)||"").trim(),t={apiBase:(dx(e)?lo:e)||lo,host:(((r=h("cfg-smtp-host"))==null?void 0:r.value)||"").trim(),port:(((o=h("cfg-smtp-port"))==null?void 0:o.value)||"").trim()||"587",user:(((i=h("cfg-smtp-user"))==null?void 0:i.value)||"").trim(),pass:(((a=h("cfg-smtp-pass"))==null?void 0:a.value)||"").trim(),secure:!!((c=h("cfg-smtp-secure"))!=null&&c.checked),fromName:(((l=h("cfg-from-name"))==null?void 0:l.value)||"").trim()||"Livio Building Systems",fromEmail:(((d=h("cfg-from-email"))==null?void 0:d.value)||"").trim()};if((t.host||t.user||t.pass)&&(!t.host||!t.port||!t.user||!t.pass)){j("⚠ Fill all SMTP fields or leave them all blank to use backend defaults");return}localStorage.setItem("livio_email_config",JSON.stringify(t)),Hl(),j("✅ SMTP settings saved")}function wx(){confirm("Clear saved SMTP settings? The app will then rely on backend/.env only.")&&(localStorage.removeItem("livio_email_config"),h("cfg-api-base")&&(h("cfg-api-base").value=lo),h("cfg-smtp-host")&&(h("cfg-smtp-host").value=""),h("cfg-smtp-port")&&(h("cfg-smtp-port").value="587"),h("cfg-smtp-user")&&(h("cfg-smtp-user").value=""),h("cfg-smtp-pass")&&(h("cfg-smtp-pass").value=""),h("cfg-smtp-secure")&&(h("cfg-smtp-secure").checked=!1),h("cfg-from-name")&&(h("cfg-from-name").value="Livio Building Systems"),h("cfg-from-email")&&(h("cfg-from-email").value=""),Hl(),j("🗑 SMTP settings cleared"))}async function Cx(){const e=prompt("Enter your email address to receive a test email:","");if(!e||!e.includes("@")){j("⚠ Please enter a valid email");return}const t=_t();j("📧 Verifying email service…",3e3);try{await yx(t),await hr({to:e,subject:"Test Email — Livio Building Systems",message:`This is a test email from Livio Building Systems.

Reply Email: `+Nn+`

If you received this, your SMTP email integration is working correctly.

— Livio Building Systems`}),j("✅ Test email sent to "+e)}catch(n){console.error("Email test error:",n),j("⚠ Email test failed: "+n.message,"error")}}function kc(){var l;const e=(((l=h("pay-smart-search"))==null?void 0:l.value)||"").toLowerCase().trim(),t=h("pay-smart-clear"),n=h("pay-smart-results");if(t&&(t.style.display=e?"":"none"),document.querySelectorAll(".pay-vendor-card").forEach(d=>{var m;const u=(((m=d.querySelector(".pay-vendor-name"))==null?void 0:m.textContent)||d.innerText||"").toLowerCase();d.style.display=!e||u.includes(e)?"":"none"}),!e){n&&(n.style.display="none",n.innerHTML="");return}const r=B();if(!r){n&&(n.style.display="none");return}const i=(r.vendors||[]).filter(d=>(r.invoices||[]).some(u=>u.vcId===d.id&&u.approvalStatus==="approved")).filter(d=>(d.vendor||"").toLowerCase().includes(e)||(d.trade||"").toLowerCase().includes(e)||(d.csi||"").toLowerCase().includes(e));if(!n)return;if(!i.length){n.style.display="",n.innerHTML=`<div style="padding:16px 20px;color:var(--muted);font-size:13px;text-align:center">No vendor or trade matches "<strong>${e}</strong>"</div>`;return}const a={};i.forEach(d=>{const u=d.vendor||"—";a[u]||(a[u]=[]),a[u].push(d)});const c=Object.entries(a).map(([d,u])=>{let m=0,p=0;u.forEach(f=>{m+=Number(f.amount||0),(r.invoices||[]).filter(v=>v.vcId===f.id&&v.approvalStatus==="approved").forEach(v=>{v.paid?p+=Number(v.amount||0):p+=(v.partialPayments||[]).reduce((x,S)=>x+Number(S.amount||0),0)})});const g=m-p,b=m?Math.min(100,Math.round(p/m*100)):0,y=[...new Set(u.map(f=>f.trade||f.csi||"General"))].join(", "),w=u.map((f,v)=>{const x=(r.invoices||[]).filter($=>$.vcId===f.id&&$.approvalStatus==="approved"),S=x.reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((k,D)=>k+Number(D.amount||0),0),0),C=Number(f.amount||0),E=C-S,P=C?Math.min(100,Math.round(S/C*100)):0;return`<div style="display:flex;align-items:center;gap:10px;padding:7px 20px 7px 30px;background:${v%2===0?"#F7F9FF":"#fff"};border-bottom:1px solid var(--border)">
        <div style="flex:1">
          <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700;margin-right:6px">CONTRACT ${v+1}</span>
          <span style="font-size:12px;font-weight:600;color:var(--navy)">${f.trade||f.csi||"General"}</span>
          ${f.csi&&f.csi!==f.trade?`<span style="font-size:9px;color:var(--muted);margin-left:5px">${f.csi}</span>`:""}
          <span style="font-size:10px;color:var(--muted);margin-left:8px">${x.length} invoice${x.length!==1?"s":""}</span>
        </div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Contract</div><div style="font-size:12px;font-weight:700">$${C.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">✓ Paid</div><div style="font-size:12px;font-weight:700;color:var(--green)">$${S.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Balance</div><div style="font-size:12px;font-weight:700;color:${E>0?"var(--red)":"var(--green)"}">$${E.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:50px"><div style="font-size:9px;color:var(--muted)">%</div><div style="font-size:12px;font-weight:700;color:${P===100?"var(--green)":"var(--amber)"}">${P}%</div></div>
      </div>`}).join("");return`<div style="border-bottom:2px solid var(--border)">
      <!-- Vendor header row -->
      <div style="display:flex;align-items:center;gap:14px;padding:12px 20px;background:var(--navy2)">
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:#fff">${d}</div>
          <div style="font-size:10px;color:#8AAAC8;margin-top:2px">${y} · ${u.length} contract${u.length!==1?"s":""}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Contract</div>
          <div style="font-size:16px;font-weight:700;color:#fff;font-family:'Barlow Condensed',sans-serif">$${m.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">✓ Paid</div>
          <div style="font-size:16px;font-weight:700;color:#7FE0B8;font-family:'Barlow Condensed',sans-serif">$${p.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Balance Due</div>
          <div style="font-size:16px;font-weight:700;color:${g>0?"#F8A4A4":"#7FE0B8"};font-family:'Barlow Condensed',sans-serif">$${g.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Progress</div>
          <div style="font-size:16px;font-weight:700;color:${b===100?"#7FE0B8":"#FAC775"};font-family:'Barlow Condensed',sans-serif">${b}%</div>
          <div style="height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin-top:3px;overflow:hidden">
            <div style="height:100%;width:${b}%;background:${b===100?"#7FE0B8":b>60?"#85B7EB":"#FAC775"};border-radius:2px"></div>
          </div>
        </div>
        <div style="display:flex;gap:5px;border-left:1px solid rgba(255,255,255,.15);padding-left:14px">
          <button onclick="exportVendorNameLedgerPDF('${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download PDF" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">🖨 PDF</button>
          <button onclick="exportVendorNameLedgerExcel('${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download Excel" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📊 Excel</button>
          <button onclick="openLedgerEmail('vendorname','${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Email ledger" style="background:rgba(26,107,196,.4);border:1px solid rgba(26,107,196,.6);color:#7CC4F8;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📧 Email</button>
        </div>
      </div>
      <!-- Per-contract breakdown -->
      ${u.length>1?w:""}
    </div>`}).join("");n.style.display="",n.innerHTML=`
    <div style="padding:8px 16px;background:var(--bg);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
      <span style="font-size:11px;font-weight:600;color:var(--muted)">🔎 ${i.length} contract${i.length!==1?"s":""} found across ${Object.keys(a).length} vendor${Object.keys(a).length!==1?"s":""} for "<strong style="color:var(--text)">${e}</strong>"</span>
      <button onclick="clearPaySmartSearch()" style="font-size:10px;background:none;border:none;color:var(--blue);cursor:pointer;font-weight:600">Clear search</button>
    </div>
    ${c}`}function Ec(){const e=h("pay-smart-search");e&&(e.value="");const t=h("pay-smart-clear");t&&(t.style.display="none");const n=h("pay-smart-results");n&&(n.style.display="none",n.innerHTML=""),document.querySelectorAll(".pay-vendor-card").forEach(r=>r.style.display="")}function Sx(e,t){const n=h("pay-trade-panel");if(!n)return;if(!e.length){n.style.display="none",n.innerHTML="";return}n.style.display="";function r(b){let y=0,w=0;return b.forEach(f=>{y+=Number(f.amount||0),(t.invoices||[]).filter(v=>v.vcId===f.id&&v.approvalStatus==="approved").forEach(v=>{v.paid?w+=Number(v.amount||0):w+=(v.partialPayments||[]).reduce((x,S)=>x+Number(S.amount||0),0)})}),{contract:y,paid:w,bal:y-w,pct:y?Math.min(100,Math.round(w/y*100)):0}}function o(b){return`<div style="display:flex;align-items:center;gap:7px">
      <div style="width:70px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
        <div style="height:100%;width:${b}%;background:${b===100?"var(--green-m)":b>60?"var(--blue-m)":"var(--amber-m)"};border-radius:3px"></div>
      </div>
      <span style="font-size:11px;font-weight:700;color:${b===100?"var(--green)":"var(--text)"}">${b}%</span>
    </div>`}const i="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;text-align:left;border-bottom:1px solid var(--border)",a=(b,y)=>{const w=encodeURIComponent(y);return b==="vendor"?`<div style="display:flex;gap:5px;flex-wrap:wrap">
        <button onclick="exportVendorNameLedgerPDF(decodeURIComponent('${w}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
        <button onclick="exportVendorNameLedgerExcel(decodeURIComponent('${w}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
        <button onclick="openLedgerEmail('vendorname',decodeURIComponent('${w}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
      </div>`:`<div style="display:flex;gap:5px;flex-wrap:wrap">
      <button onclick="exportTradeLedgerPDF(decodeURIComponent('${w}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
      <button onclick="exportTradeLedgerExcel(decodeURIComponent('${w}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
      <button onclick="openLedgerEmail('trade',decodeURIComponent('${w}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
    </div>`},c={};e.forEach(b=>{const y=b.vendor||"Unknown";c[y]||(c[y]=[]),c[y].push(b)});const d=Object.keys(c).sort().map((b,y)=>{const w=c[b],f=r(w),v=y%2===0?"#fff":"var(--bg)",x=w.map((S,C)=>{const E=r([S]),P=S.trade||S.csi||"—";return`<tr style="background:#F0F5FF;border-left:3px solid #B0D0F0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">CONTRACT ${C+1}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${P}</span>
            ${S.csi&&S.csi!==S.trade?`<span class="badge b-teal" style="font-size:9px">${S.csi}</span>`:""}
            ${S.contractNo?`<span style="font-size:9px;color:var(--muted)">#${S.contractNo}</span>`:""}
          </div>
        </td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${E.contract.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${E.paid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:${E.bal>0?"var(--red)":"var(--green)"};border-bottom:1px solid var(--border)">$${E.bal.toLocaleString()}</td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:5px">
            <div style="width:50px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${E.pct}%;background:${E.pct===100?"var(--green-m)":E.pct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:2px"></div>
            </div>
            <span style="font-size:10px;color:var(--muted)">${E.pct}%</span>
          </div>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;gap:3px">
            <button onclick="exportVCPaymentLedgerPDF('${S.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${S.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${S.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`}).join("");return`<tr style="background:${v};border-left:4px solid var(--blue)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${b}</div>
        <div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px">
          ${w.map(S=>`<span style="font-size:9px;background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:1px 7px;color:var(--muted)">${S.trade||S.csi||"General"}</span>`).join("")}
        </div>
        <div style="font-size:9px;color:var(--blue);margin-top:3px">${w.length} contract${w.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${f.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${f.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${f.bal>0?"var(--red)":"var(--green)"}">$${f.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${o(f.pct)}</td>
      <td style="padding:10px 14px">${a("vendor",b)}</td>
    </tr>${x}`}).join(""),u={};e.forEach(b=>{const y=b.trade||b.csi||"General";u[y]||(u[y]=[]),u[y].push(b)});const p=Object.keys(u).sort().map((b,y)=>{const w=u[b],f=r(w),v=y%2===0?"#fff":"var(--bg)",x=w.map(S=>{const C=r([S]);return`<tr style="background:#F4FFF8;border-left:3px solid #B8DCA0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--green);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">VENDOR</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${S.vendor}</span>
            ${S.contractNo?`<span style="font-size:9px;color:var(--muted)">#${S.contractNo}</span>`:""}
          </div>
        </td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${C.contract.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${C.paid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:${C.bal>0?"var(--red)":"var(--green)"};border-bottom:1px solid var(--border)">$${C.bal.toLocaleString()}</td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:5px">
            <div style="width:50px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${C.pct}%;background:${C.pct===100?"var(--green-m)":C.pct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:2px"></div>
            </div>
            <span style="font-size:10px;color:var(--muted)">${C.pct}%</span>
          </div>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;gap:3px">
            <button onclick="exportVCPaymentLedgerPDF('${S.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${S.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${S.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`}).join("");return`<tr style="background:${v};border-left:4px solid var(--teal)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${b}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${w.map(S=>S.vendor).join(" · ")}</div>
        <div style="font-size:9px;color:var(--teal);margin-top:3px">${w.length} vendor${w.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${f.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${f.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${f.bal>0?"var(--red)":"var(--green)"}">$${f.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${o(f.pct)}</td>
      <td style="padding:10px 14px">${a("trade",b)}</td>
    </tr>${x}`}).join(""),g=b=>`<thead><tr style="background:var(--bg)">${b.map(([y,w])=>`<th style="${i};color:${w||"var(--muted)"}">${y}</th>`).join("")}</tr></thead>`;n.innerHTML=`
    <!-- ── BY VENDOR ── -->
    <div class="panel" style="margin-bottom:16px">
      <div class="ph" style="background:var(--navy2);display:flex;justify-content:space-between;align-items:center">
        <div><span class="ph-title" style="color:#fff">👤 LEDGER BY VENDOR</span><span style="font-size:10px;color:#8AAAC8;margin-left:10px">All contracts per vendor · Consolidated totals</span></div>
        <div style="display:flex;gap:5px">
          <button onclick="exportAllVendorNameLedgerPDF()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">🖨 All PDF</button>
          <button onclick="exportAllVendorNameLedgerExcel()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">📊 All Excel</button>
        </div>
      </div>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
        ${g([["Vendor Name",""],["Contract Total",""],["✓ Paid","var(--green)"],["Balance Due","var(--red)"],["Status",""],["Download / Email",""]])}
        <tbody>${d}</tbody>
      </table></div>
    </div>
    <!-- ── BY TRADE ── -->
    <div class="panel" style="margin-bottom:16px">
      <div class="ph" style="background:var(--navy2);display:flex;justify-content:space-between;align-items:center">
        <div><span class="ph-title" style="color:#fff">🏗 LEDGER BY TRADE</span><span style="font-size:10px;color:#8AAAC8;margin-left:10px">Group totals · Download or email per trade</span></div>
        <div style="display:flex;gap:5px">
          <button onclick="exportAllTradeLedgerPDF()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">🖨 All PDF</button>
          <button onclick="exportAllTradeLedgerExcel()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">📊 All Excel</button>
        </div>
      </div>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
        ${g([["Trade / Specialty",""],["Contract Total",""],["✓ Paid","var(--green)"],["Balance Due","var(--red)"],["Status",""],["Download / Email",""]])}
        <tbody>${p}</tbody>
      </table></div>
    </div>`}function Wl(e,t,n){const r=[],o=new Date().toLocaleDateString(),i=a=>{r.push(a),r.push("=".repeat(a.length))};if(e==="vendor"){const a=(n.vendors||[]).find(p=>p.id===t);if(!a)return"";const c=(n.invoices||[]).filter(p=>p.vcId===t&&p.approvalStatus==="approved"),l=c.reduce((p,g)=>g.paid?p+Number(g.amount||0):p+(g.partialPayments||[]).reduce((b,y)=>b+Number(y.amount||0),0),0),d=Number(a.amount||0),u=d-l,m=d?Math.min(100,Math.round(l/d*100)):0;i("VENDOR PAYMENT LEDGER"),r.push("Project   : "+n.name),r.push("Project Address : "+ae(n)),r.push("Livio Address   : "+K),r.push("Permit    : "+(n.permit||"—")),r.push("Generated : "+o),r.push(""),r.push("Vendor    : "+a.vendor),r.push("Trade     : "+(a.trade||"—")),r.push("CSI       : "+(a.csi||"—")),r.push(""),r.push("Contract  : $"+d.toLocaleString()),r.push("Paid      : $"+l.toLocaleString()),r.push("Balance   : $"+u.toLocaleString()),r.push("Progress  : "+m+"%"),r.push(""),i("INVOICE DETAIL"),c.forEach(p=>{var y;const g=((y=(a.milestones||[]).find(w=>w.id===p.milestoneId))==null?void 0:y.name)||"—",b=p.paid?Number(p.amount||0):(p.partialPayments||[]).reduce((w,f)=>w+Number(f.amount||0),0);r.push(""),r.push("  Invoice   : "+(p.invoiceNo||"—")+" | Milestone: "+g),r.push("  Amount    : $"+Number(p.amount||0).toLocaleString()),r.push("  Paid      : $"+b.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-b).toLocaleString()),r.push("  Status    : "+(p.paid?"✓ Fully Paid":"Partial / Outstanding")),(p.partialPayments||[]).forEach((w,f)=>{r.push("    Pmt "+(f+1)+" : $"+Number(w.amount||0).toLocaleString()+(w.date?" · "+J(w.date):"")+(w.txnNo?" | Txn: "+w.txnNo:""))})})}else if(e==="quote"){const a=(n.quotes||[]).find(p=>p.id===t);if(!a)return"";const c=(n.invoices||[]).filter(p=>p.quoteId===t&&p.approvalStatus==="approved"),l=c.reduce((p,g)=>g.paid?p+Number(g.amount||0):p+(g.partialPayments||[]).reduce((b,y)=>b+Number(y.amount||0),0),0),d=Number(a.amount||0),u=d-l,m=d?Math.min(100,Math.round(l/d*100)):0;i("APPROVED QUOTE LEDGER"),r.push("Project   : "+n.name),r.push("Project Address : "+ae(n)),r.push("Livio Address   : "+K),r.push("Permit    : "+(n.permit||"—")),r.push("Generated : "+o),r.push(""),r.push("Vendor    : "+(a.vendor||"—")),r.push("Scope     : "+(a.scope||"—")),r.push("CSI       : "+(a.csi||"—")),r.push(""),r.push("Quote     : $"+d.toLocaleString()),r.push("Paid      : $"+l.toLocaleString()),r.push("Balance   : $"+u.toLocaleString()),r.push("Progress  : "+m+"%"),r.push(""),i("INVOICE DETAIL"),c.forEach(p=>{const g=p.paid?Number(p.amount||0):(p.partialPayments||[]).reduce((b,y)=>b+Number(y.amount||0),0);r.push(""),r.push("  Invoice   : "+(p.invoiceNo||"—")),r.push("  Amount    : $"+Number(p.amount||0).toLocaleString()),r.push("  Paid      : $"+g.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-g).toLocaleString()),r.push("  Status    : "+(p.paid?"✓ Fully Paid":"Partial / Outstanding")),(p.partialPayments||[]).forEach((b,y)=>{r.push("    Pmt "+(y+1)+" : $"+Number(b.amount||0).toLocaleString()+(b.date?" · "+J(b.date):"")+(b.txnNo?" | Txn: "+b.txnNo:""))})})}else if(e==="vendorname"){const a=t,c=(n.vendors||[]).filter(p=>p.vendor===a&&(n.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved"));let l=0,d=0;c.forEach(p=>{l+=Number(p.amount||0),(n.invoices||[]).filter(g=>g.vcId===p.id&&g.approvalStatus==="approved").forEach(g=>{g.paid?d+=Number(g.amount||0):d+=(g.partialPayments||[]).reduce((b,y)=>b+Number(y.amount||0),0)})});const u=l-d,m=l?Math.min(100,Math.round(d/l*100)):0;i("VENDOR PAYMENT LEDGER — "+a.toUpperCase()),r.push("Project   : "+n.name),r.push("Project Address : "+ae(n)),r.push("Livio Address   : "+K),r.push("Permit    : "+(n.permit||"—")),r.push("Generated : "+o),r.push(""),r.push("Vendor    : "+a),r.push("Contracts : "+c.length),r.push(""),r.push("Contract  : $"+l.toLocaleString()),r.push("Paid      : $"+d.toLocaleString()),r.push("Balance   : $"+u.toLocaleString()),r.push("Progress  : "+m+"%"),c.forEach((p,g)=>{r.push(""),r.push("─── CONTRACT "+(g+1)+" — "+(p.trade||p.csi||"General")+(p.csi?" · "+p.csi:"")),r.push("  Contract  : $"+Number(p.amount||0).toLocaleString());const b=(n.invoices||[]).filter(w=>w.vcId===p.id&&w.approvalStatus==="approved"),y=b.reduce((w,f)=>f.paid?w+Number(f.amount||0):w+(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0);r.push("  Paid      : $"+y.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-y).toLocaleString()),b.forEach(w=>{var x;const f=((x=(p.milestones||[]).find(S=>S.id===w.milestoneId))==null?void 0:x.name)||"—",v=w.paid?Number(w.amount||0):(w.partialPayments||[]).reduce((S,C)=>S+Number(C.amount||0),0);r.push("    Invoice : "+(w.invoiceNo||"—")+" | 📍 "+f+" | $"+Number(w.amount||0).toLocaleString()+" | Paid: $"+v.toLocaleString()+" | "+(w.paid?"✓ Paid":"Outstanding")),(w.partialPayments||[]).forEach((S,C)=>{r.push("      Pmt "+(C+1)+" : $"+Number(S.amount||0).toLocaleString()+(S.date?" · "+J(S.date):"")+(S.txnNo?" | Txn: "+S.txnNo:""))})})})}else{const a=t,c=(n.vendors||[]).filter(p=>(p.trade||p.csi||"General")===a&&(n.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved"));let l=0,d=0;c.forEach(p=>{l+=Number(p.amount||0),(n.invoices||[]).filter(g=>g.vcId===p.id&&g.approvalStatus==="approved").forEach(g=>{g.paid?d+=Number(g.amount||0):d+=(g.partialPayments||[]).reduce((b,y)=>b+Number(y.amount||0),0)})});const u=l-d,m=l?Math.min(100,Math.round(d/l*100)):0;i("TRADE PAYMENT LEDGER — "+a.toUpperCase()),r.push("Project   : "+n.name),r.push("Project Address : "+ae(n)),r.push("Livio Address   : "+K),r.push("Permit    : "+(n.permit||"—")),r.push("Generated : "+o),r.push(""),r.push("Trade     : "+a),r.push("Vendors   : "+c.length),r.push(""),r.push("Contract  : $"+l.toLocaleString()),r.push("Paid      : $"+d.toLocaleString()),r.push("Balance   : $"+u.toLocaleString()),r.push("Progress  : "+m+"%"),r.push(""),i("VENDOR DETAIL"),c.forEach(p=>{const g=(n.invoices||[]).filter(w=>w.vcId===p.id&&w.approvalStatus==="approved"),b=g.reduce((w,f)=>f.paid?w+Number(f.amount||0):w+(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0),y=Number(p.amount||0)-b;r.push(""),r.push("  Vendor   : "+p.vendor+"  (Contract: $"+Number(p.amount||0).toLocaleString()+")"),r.push("  Paid     : $"+b.toLocaleString()+"  |  Balance: $"+y.toLocaleString()),g.forEach(w=>{var x;const f=((x=(p.milestones||[]).find(S=>S.id===w.milestoneId))==null?void 0:x.name)||"—",v=w.paid?Number(w.amount||0):(w.partialPayments||[]).reduce((S,C)=>S+Number(C.amount||0),0);r.push("    Invoice : "+(w.invoiceNo||"—")+" | "+f+" | $"+Number(w.amount||0).toLocaleString()+" | Paid: $"+v.toLocaleString()+" | "+(w.paid?"✓ Paid":"Outstanding"))})})}return r.push(""),r.push("— "+se+" · "+K+" · "+o+" —"),r.join(`
`)}function gf(e,t,n,r){let o=Wl(e,t,n);o=o.replace(/(?:Project\s+)?Address\s*:\s*[^\n]*/i,`Project Address : ${ae(n)}
Livio Address   : ${K}`);const i="Dear "+r+`,

Please find attached the current payment ledger in PDF format for your reference.

For convenience, the ledger details are also included below.

`,a=`

Reply Email: `+Nn+`

Please review and contact us if you have any questions.

Best regards,
`+qi();return i+o+a}function $s(e){return String(e||"").replace(/—/g,"-").replace(/–/g,"-").replace(/•/g,"*").replace(/·/g,"-").replace(/✓/g,"[Paid]").replace(/📍/g,"Milestone").replace(/[^\x09\x0A\x0D\x20-\x7E]/g,"")}function As(e,t,n){var c,l;let r=t||"ledger";e==="vendor"?r=((c=(n.vendors||[]).find(d=>d.id===t))==null?void 0:c.vendor)||r:e==="quote"&&(r=((l=(n.quotes||[]).find(d=>d.id===t))==null?void 0:l.vendor)||r);const o=String(r||"ledger").replace(/[^a-z0-9-_]+/gi,"_"),i=String((n==null?void 0:n.name)||"Project").replace(/[^a-z0-9-_]+/gi,"_"),a=String(e||"ledger").replace(/[^a-z0-9-_]+/gi,"_");return`${o}-${i}-${a}-ledger.pdf`}let Nr=null;function kx(){return window.jspdf&&window.jspdf.jsPDF?Promise.resolve():Nr||(Nr=new Promise((e,t)=>{const n=document.querySelector('script[data-livio-jspdf="true"]');if(n){n.addEventListener("load",()=>e(),{once:!0}),n.addEventListener("error",()=>t(new Error("Could not load PDF library.")),{once:!0});return}const r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",r.async=!0,r.dataset.livioJspdf="true",r.onload=()=>e(),r.onerror=()=>t(new Error("Could not load PDF library.")),document.head.appendChild(r)}).finally(()=>{Nr=null}),Nr)}async function Ex(e,t){const n=B();if(!n)throw new Error("No active project selected.");const r=$s(Wl(e,t,n));if(!r.trim())throw new Error("Ledger data not found.");if(!window.jspdf||!window.jspdf.jsPDF)throw new Error("PDF library not loaded yet. Try again.");const{jsPDF:o}=window.jspdf,i=new o({unit:"pt",format:"letter"}),a=i.internal.pageSize.getWidth(),c=i.internal.pageSize.getHeight(),l=40,d=40,u=44,m=40,p=a-l-d,g=12;let b=u;const y=(v=g)=>{b+v>c-m&&(i.addPage(),b=u)};i.setProperties({title:As(e,t,n),subject:"Payment Ledger",author:se,creator:se}),i.setFont("helvetica","bold"),i.setFontSize(16),i.text("Payment Ledger",l,b),b+=20,i.setFont("helvetica","normal"),i.setFontSize(10),[n.name||"Project","Project Address: "+ae(n),"Livio Address: "+K,"Generated: "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})].forEach(v=>{y(),i.text($s(v),l,b),b+=g}),b+=8,i.setFont("courier","normal"),i.setFontSize(9),r.split(`
`).forEach(v=>{const x=v||"";if(!x){y(),b+=g;return}const S=i.splitTextToSize(x,p);y(S.length*g),i.text(S,l,b),b+=S.length*g});const w=i.output("arraybuffer"),f=Kx(w);return{filename:As(e,t,n),content:f,contentType:"application/pdf"}}function Ds(e,t){const n=B();if(!n)return;let r="",o="",i="";if(e==="vendor"){const l=(n.vendors||[]).find(d=>d.id===t);if(!l){j("⚠ Vendor not found");return}r=l.vendorEmail||"",o=l.vendor,i="Payment Ledger — "+l.vendor+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+l.vendor}else if(e==="vendorname"){const l=(n.vendors||[]).find(d=>d.vendor===t&&d.vendorEmail);r=(l==null?void 0:l.vendorEmail)||"",o=t,i="Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+t}else if(e==="quote"){const l=(n.quotes||[]).find(u=>u.id===t);if(!l){j("⚠ Quote not found");return}const d=(n.vendors||[]).find(u=>(u.quoteId===t||u.vendor===l.vendor)&&u.vendorEmail);r=(d==null?void 0:d.vendorEmail)||"",o=l.vendor||"Vendor",i="Approved Quote Ledger — "+o+" — "+n.name,h("ledger-email-title").textContent="📧 Email Approved Quote Ledger — "+o}else o=t+" Trade",i="Trade Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Trade Ledger — "+t;const a=gf(e,t,n,o);h("ledger-email-type").value=e,h("ledger-email-ref").value=t,h("ledger-email-to").value=r,h("ledger-email-cc").value="",h("ledger-email-subject").value=i,h("ledger-email-body").value=a;const c=h("ledger-email-status");c&&(c.innerHTML=Ln(_t())),h("mo-ledger-email").classList.add("open")}function xf(){h("mo-ledger-email").classList.remove("open")}function Px(){var t,n;const e=((t=h("ledger-email-body"))==null?void 0:t.value)||"";(n=navigator.clipboard)==null||n.writeText(e).then(()=>j("📋 Ledger copied to clipboard")).catch(()=>j("⚠ Copy failed"))}async function jx(){var c,l;const e=h("ledger-email-to").value.trim(),t=h("ledger-email-cc").value.trim(),n=h("ledger-email-subject").value.trim(),r=h("ledger-email-body").value.trim(),o=((c=h("ledger-email-type"))==null?void 0:c.value)||"",i=((l=h("ledger-email-ref"))==null?void 0:l.value)||"";let a=[];try{o&&i&&(await kx(),a=[await Ex(o,i)])}catch(d){console.error("Ledger PDF build error:",d),j("Could not attach ledger PDF: "+(d.message||d),"error");return}if(!e){j("⚠ Recipient email is required");return}if(!n){j("⚠ Subject is required");return}j("📧 Sending…",3e3),hr({to:e,cc:t,subject:n,message:r,attachments:a,generatedPdf:(()=>{const d=B();return d&&o&&i?{filename:As(o,i,d),text:$s(Wl(o,i,d))}:null})()}).then(()=>{j("✅ Ledger emailed to "+e),xf()}).catch(d=>{console.error("Ledger email send error:",d),j("⚠ Email send failed: "+d.message,"error")})}Ds=function(e,t){const n=B();if(!n)return;let r="",o="",i="";if(e==="vendor"){const l=(n.vendors||[]).find(d=>d.id===t);if(!l){j("⚠ Vendor not found");return}r=(l.vendorEmail||nr(l.vendor)||"").trim(),o=l.vendor,i="Payment Ledger — "+l.vendor+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+l.vendor}else if(e==="vendorname")r=nr(t),o=t,i="Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+t;else if(e==="quote"){const l=(n.quotes||[]).find(d=>d.id===t);if(!l){j("⚠ Quote not found");return}r=nr(l.vendor),o=l.vendor||"Vendor",i="Approved Quote Ledger — "+o+" — "+n.name,h("ledger-email-title").textContent="📧 Email Approved Quote Ledger — "+o}else o=t+" Trade",i="Trade Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Trade Ledger — "+t;const a=gf(e,t,n,o);h("ledger-email-type").value=e,h("ledger-email-ref").value=t,h("ledger-email-to").value=r,h("ledger-email-cc").value="",h("ledger-email-subject").value=i,h("ledger-email-body").value=a;const c=h("ledger-email-status");c&&(c.innerHTML=Ln(_t())),h("mo-ledger-email").classList.add("open")};function $x(e){const t=B();if(!t)return;const n=(t.vendors||[]).filter(u=>(u.trade||u.csi||"General")===e&&(t.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(!n.length){j("⚠ No vendors in trade: "+e);return}let r=0,o=0;const i=n.map((u,m)=>{const p=(t.invoices||[]).filter(v=>v.vcId===u.id&&v.approvalStatus==="approved"),g=p.reduce((v,x)=>x.paid?v+Number(x.amount||0):v+(x.partialPayments||[]).reduce((S,C)=>S+Number(C.amount||0),0),0),b=Number(u.amount||0),y=b-g,w=b?Math.min(100,Math.round(g/b*100)):0;r+=b,o+=g;const f=p.map((v,x)=>{var A;const S=v.paid?"#EDF8E5":x%2===0?"#fff":"#fafaf8",C=((A=(u.milestones||[]).find(k=>k.id===v.milestoneId))==null?void 0:A.name)||"—",E=v.paid?Number(v.amount||0):(v.partialPayments||[]).reduce((k,D)=>k+Number(D.amount||0),0),P=Number(v.amount||0)-E,$=(v.partialPayments||[]).map(k=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(k.amount||0).toLocaleString()+(k.date?" · "+J(k.date):"")+(k.txnNo?" | Txn: "+k.txnNo:"")+"</div>").join("");return`<tr style="background:${S}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${v.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${v.paid?"✓ PAID":"PARTIAL"}</span><strong>${v.invoiceNo||"—"}</strong> — 📍 ${C}${$}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(v.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${E.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${P>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${P.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${w}%</td></tr>`}).join("");return`<tr style="background:${m%2===0?"#f0f4f9":"#fff"}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${u.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${u.trade||"—"}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${b.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${g.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${y>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${y.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${w===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${w}%</td></tr>${f}`}).join(""),a=r-o,c=r?Math.min(100,Math.round(o/r*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Trade Ledger — ${e}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Trade Payment Ledger</h1><h2>Trade: ${e}</h2>
  <div class="meta">${t.name} · ${ae(t)}<br>Livio Address: ${K}<br>Permit: ${t.permit||"—"} · ${se} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${r.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${a>0?"#9B1F1F":"#2D6A0F"}">$${a.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${i}<tr class="tot"><td colspan="2">TOTAL — ${n.length} vendor(s)</td><td>$${r.toLocaleString()}</td><td>$${o.toLocaleString()}</td><td>$${a.toLocaleString()}</td><td>${c}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${se} · ${K} · ${t.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){j("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),j("🖨 Trade PDF — "+e)}function Ax(e){const t=B();if(t)if(j("📊 Building Excel…",3e3),window.XLSX)Pc(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>Pc(t,e),n.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(n)}}function Pc(e,t){try{const n=window.XLSX,r=(e.vendors||[]).filter(m=>(m.trade||m.csi||"General")===t&&(e.invoices||[]).some(p=>p.vcId===m.id&&p.approvalStatus==="approved"));if(!r.length){j("⚠ No vendors in trade: "+t);return}const o=n.utils.book_new();let i=0,a=0;const c=[["TRADE PAYMENT LEDGER — "+t.toUpperCase()],["Project:",e.name,"","Project Address:",ae(e)],["Livio Address:",K,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],["Trade:",t],[],["Vendor","Trade","Contract Amount","Paid","Balance Due","Progress %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Status"]];r.forEach(m=>{const p=(e.invoices||[]).filter(f=>f.vcId===m.id&&f.approvalStatus==="approved"),g=p.reduce((f,v)=>v.paid?f+Number(v.amount||0):f+(v.partialPayments||[]).reduce((x,S)=>x+Number(S.amount||0),0),0),b=Number(m.amount||0),y=b-g,w=b?Math.min(100,Math.round(g/b*100)):0;i+=b,a+=g,p.length?p.forEach((f,v)=>{var E;const x=((E=(m.milestones||[]).find(P=>P.id===f.milestoneId))==null?void 0:E.name)||"",S=f.paid?Number(f.amount||0):(f.partialPayments||[]).reduce((P,$)=>P+Number($.amount||0),0),C=Number(f.amount||0)-S;c.push([v===0?m.vendor:"",v===0&&m.trade||"",v===0?b:"",v===0?g:"",v===0?y:"",v===0?w+"%":"",f.invoiceNo||"",x,Number(f.amount||0),S,C,f.paid?"Paid":"Partial"]),(f.partialPayments||[]).forEach(P=>c.push(["","","","","","","  ↳ Partial","",Number(P.amount||0),Number(P.amount||0),0,P.date||""]))}):c.push([m.vendor,m.trade||"",b,g,y,w+"%","","","","","",""]),c.push([])});const l=i-a;c.push(["TOTAL","",i,a,l,(i?Math.min(100,Math.round(a/i*100)):0)+"%","","","","","",""]);const d=n.utils.aoa_to_sheet(c);d["!cols"]=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}],n.utils.book_append_sheet(o,d,"Trade Ledger");const u=t.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_TradeLedger_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";n.writeFile(o,u),j("📊 Trade Excel downloaded — "+t)}catch(n){console.error(n),j("⚠ Excel error: "+n.message)}}function Dx(e){const t=B();if(!t)return;const n=(t.vendors||[]).filter(w=>w.vendor===e&&(t.invoices||[]).some(f=>f.vcId===w.id&&f.approvalStatus==="approved")),r=(t.invoices||[]).filter(w=>w.isManual&&w.vendor===e&&w.approvalStatus==="approved");if(!n.length&&!r.length){j("⚠ No approved invoices for vendor: "+e);return}let o=0,i=0;const a=n.map((w,f)=>{const v=(t.invoices||[]).filter($=>$.vcId===w.id&&$.approvalStatus==="approved"),x=v.reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((k,D)=>k+Number(D.amount||0),0),0),S=Number(w.amount||0),C=S-x,E=S?Math.min(100,Math.round(x/S*100)):0;o+=S,i+=x;const P=v.map(($,A)=>{var N;const k=$.paid?"#EDF8E5":A%2===0?"#fff":"#fafaf8",D=((N=(w.milestones||[]).find(F=>F.id===$.milestoneId))==null?void 0:N.name)||"—",z=$.paid?Number($.amount||0):($.partialPayments||[]).reduce((F,O)=>F+Number(O.amount||0),0),M=Number($.amount||0)-z,W=($.partialPayments||[]).map(F=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(F.amount||0).toLocaleString()+(F.date?" · "+J(F.date):"")+(F.txnNo?" | Txn: "+F.txnNo:"")+"</div>").join("");return`<tr style="background:${k}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${$.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${$.paid?"✓ PAID":"PARTIAL"}</span><strong>${$.invoiceNo||"—"}</strong> — 📍 ${D}${W}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number($.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${M>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${M.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${E}%</td></tr>`}).join("");return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">CONTRACT ${f+1} — <span style="color:#1A6BC4">${w.trade||w.csi||"General"}</span>${w.csi?" · "+w.csi:""}</td></tr><tr style="background:${f%2===0?"#f0f4f9":"#fff"}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${w.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${w.trade||"—"}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${S.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${x.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${C>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${C.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${E===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${E}%</td></tr>${P}`}).join(""),c=r.reduce((w,f)=>w+Number(f.amount||0),0),l=r.reduce((w,f)=>w+(f.paid?Number(f.amount||0):(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)),0),d=c-l,u=c?Math.min(100,Math.round(l/c*100)):0,m=r.length?`<tr style="background:#e8f7f5"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">MANUAL INVOICES</td></tr>
    <tr style="background:#f6fcfb"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${e}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">Manual / No Contract</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${c.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${l.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${d>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${d.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${u===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${u}%</td></tr>
    ${r.map((w,f)=>{const v=w.paid?"#EDF8E5":f%2===0?"#fff":"#fafaf8",x=w.paid?Number(w.amount||0):(w.partialPayments||[]).reduce((E,P)=>E+Number(P.amount||0),0),S=Number(w.amount||0)-x,C=(w.partialPayments||[]).map(E=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(E.amount||0).toLocaleString()+(E.date?" · "+J(E.date):"")+(E.txnNo?" | Txn: "+E.txnNo:"")+"</div>").join("");return`<tr style="background:${v}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${w.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${w.paid?"✓ PAID":"PARTIAL"}</span><strong>${w.invoiceNo||"—"}</strong> — 📍 Manual / No Contract${C}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(w.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${x.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${S>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${S.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${u}%</td></tr>`}).join("")}`:"";o+=c,i+=l;const p=o-i,g=o?Math.min(100,Math.round(i/o*100)):0,b=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Ledger — ${e}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1><h2>Vendor: ${e} · ${n.length} Contract(s)</h2>
  <div class="meta">${t.name} · ${ae(t)}<br>Livio Address: ${K}<br>Permit: ${t.permit||"—"} · ${se} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${i.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${p>0?"#9B1F1F":"#2D6A0F"}">$${p.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${g===100?"#2D6A0F":"#A86200"}">${g}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${a}${m}<tr class="tot"><td colspan="2">TOTAL — ${n.length} contract(s)${r.length?" + manual invoices":""}</td><td>$${o.toLocaleString()}</td><td>$${i.toLocaleString()}</td><td>$${p.toLocaleString()}</td><td>${g}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${se} · ${K} · ${t.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,y=window.open("","_blank");if(!y){j("⚠ Pop-up blocked");return}y.document.write(b),y.document.close(),setTimeout(()=>{y.focus(),y.print()},600),j("🖨 Vendor PDF — "+e)}function Nx(e){const t=B();if(t)if(j("📊 Building Excel…",3e3),window.XLSX)jc(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>jc(t,e),n.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(n)}}function jc(e,t){try{const n=window.XLSX,r=(e.vendors||[]).filter(p=>p.vendor===t&&(e.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved")),o=(e.invoices||[]).filter(p=>p.isManual&&p.vendor===t&&p.approvalStatus==="approved");if(!r.length&&!o.length){j("⚠ No approved invoices for vendor: "+t);return}const i=n.utils.book_new();let a=0,c=0;const l=[["VENDOR PAYMENT LEDGER — "+t.toUpperCase()],["Project:",e.name,"","Project Address:",ae(e)],["Livio Address:",K,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||"","","Contracts:",r.length],["Vendor:",t],[],["Contract #","Trade","Contract Amount","Paid","Balance Due","Progress %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Status"]];if(r.forEach((p,g)=>{const b=(e.invoices||[]).filter(x=>x.vcId===p.id&&x.approvalStatus==="approved"),y=b.reduce((x,S)=>S.paid?x+Number(S.amount||0):x+(S.partialPayments||[]).reduce((C,E)=>C+Number(E.amount||0),0),0),w=Number(p.amount||0),f=w-y,v=w?Math.min(100,Math.round(y/w*100)):0;a+=w,c+=y,b.length?b.forEach((x,S)=>{var $;const C=(($=(p.milestones||[]).find(A=>A.id===x.milestoneId))==null?void 0:$.name)||"",E=x.paid?Number(x.amount||0):(x.partialPayments||[]).reduce((A,k)=>A+Number(k.amount||0),0),P=Number(x.amount||0)-E;l.push([S===0?"Contract "+(g+1):"",S===0&&p.trade||"",S===0?w:"",S===0?y:"",S===0?f:"",S===0?v+"%":"",x.invoiceNo||"",C,Number(x.amount||0),E,P,x.paid?"Paid":"Partial"]),(x.partialPayments||[]).forEach(A=>l.push(["","","","","","","  ↳ Partial","",Number(A.amount||0),Number(A.amount||0),0,(A.date||"")+(A.txnNo?" | Txn:"+A.txnNo:"")]))}):l.push(["Contract "+(g+1),p.trade||"",w,y,f,v+"%","","","","","",""]),l.push([])}),o.length){const p=o.reduce((w,f)=>w+Number(f.amount||0),0),g=o.reduce((w,f)=>w+(f.paid?Number(f.amount||0):(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)),0),b=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;a+=p,c+=g,o.forEach((w,f)=>{const v=w.paid?Number(w.amount||0):(w.partialPayments||[]).reduce((S,C)=>S+Number(C.amount||0),0),x=Number(w.amount||0)-v;l.push([f===0?"Manual Invoices":"","Manual / No Contract",f===0?p:"",f===0?g:"",f===0?b:"",f===0?y+"%":"",w.invoiceNo||"","Manual / No Contract",Number(w.amount||0),v,x,w.paid?"Paid":"Partial"]),(w.partialPayments||[]).forEach(S=>l.push(["","","","","","","  ↳ Partial","",Number(S.amount||0),Number(S.amount||0),0,S.date||""]))}),l.push([])}const d=a-c;l.push(["TOTAL","",a,c,d,(a?Math.min(100,Math.round(c/a*100)):0)+"%","","","","","",""]);const u=n.utils.aoa_to_sheet(l);u["!cols"]=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}],n.utils.book_append_sheet(i,u,"Vendor Ledger");const m=t.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_VendorLedger_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";n.writeFile(i,m),j("📊 Vendor Excel downloaded — "+t)}catch(n){console.error(n),j("⚠ Excel error: "+n.message)}}function Ix(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(u=>(e.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(!t.length){j("⚠ No approved invoices");return}const n=new Map;t.forEach(u=>{n.has(u.vendor)||n.set(u.vendor,[]),n.get(u.vendor).push(u)});let r=0,o=0;const i=[...n.entries()].map(([u,m])=>{let p=0,g=0;const b=m.map((f,v)=>{const x=(e.invoices||[]).filter(A=>A.vcId===f.id&&A.approvalStatus==="approved"),S=x.reduce((A,k)=>k.paid?A+Number(k.amount||0):A+(k.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),C=Number(f.amount||0),E=C-S,P=C?Math.min(100,Math.round(S/C*100)):0;p+=C,g+=S;const $=x.map(A=>{var W;const k=((W=(f.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:W.name)||"—",D=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,F)=>N+Number(F.amount||0),0),z=Number(A.amount||0)-D,M=(A.partialPayments||[]).map(N=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(N.amount||0).toLocaleString()+(N.txnNo?" | Txn:"+N.txnNo:"")+"</div>").join("");return`<tr style="background:${A.paid?"#EDF8E5":"#fff"}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${A.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${A.paid?"PAID":"PARTIAL"}</span> ${A.invoiceNo||"—"} — 📍 ${k}${M}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(A.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${D.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${z>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${P}%</td></tr>`}).join("");return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:5px 8px;font-size:10px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #bcd">CONTRACT ${v+1} · ${f.trade||f.csi||"General"}${f.csi?" · "+f.csi:""}</td></tr><tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${f.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${f.trade||"—"}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${C.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${S.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${E>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${E.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${P===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${P}%</td></tr>${$}`}).join(""),y=p-g,w=p?Math.min(100,Math.round(g/p*100)):0;return r+=p,o+=g,`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">👤 ${u} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${m.length} contract(s)</span><span style="float:right;font-size:11px">Contract $${p.toLocaleString()} · Paid $${g.toLocaleString()} · Bal $${y.toLocaleString()} · ${w}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor/Invoice</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Trade</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${b}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${p.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${g.toLocaleString()}</td><td style="padding:6px 8px;color:${y>0?"#F8A4A4":"#7CC4F8"};font-weight:700">$${y.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${w}%</td></tr></tbody></table></div>`}).join(""),a=r-o,c=r?Math.min(100,Math.round(o/r*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Vendor Ledgers — ${e.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Vendor Payment Ledgers</h1>
  <div class="meta">${e.name} · ${ae(e)}<br>Livio Address: ${K}<br>Permit: ${e.permit||"—"} · ${se} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${r.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${a>0?"#9B1F1F":"#2D6A0F"}">$${a.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  ${i}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${se} · ${K} · ${e.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){j("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),j("🖨 All Vendor Ledgers PDF")}function zx(){const e=B();if(e)if(j("📊 Building All-Vendor Excel…",3e3),window.XLSX)$c(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>$c(e),t.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(t)}}function $c(e){try{const t=window.XLSX,n=(e.vendors||[]).filter(u=>(e.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(!n.length){j("⚠ No approved invoices");return}const r=new Map;n.forEach(u=>{r.has(u.vendor)||r.set(u.vendor,[]),r.get(u.vendor).push(u)});const o=t.utils.book_new(),i=[["ALL VENDOR PAYMENT LEDGER"],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Project Address:",ae(e),"","Permit:",e.permit||""],["Livio Address:",K],[],["Vendor","Contracts","Contract Amount","Total Paid","Total Balance","Progress %"]];let a=0,c=0;[...r.entries()].forEach(([u,m])=>{let p=0,g=0;m.forEach(w=>{p+=Number(w.amount||0),(e.invoices||[]).filter(f=>f.vcId===w.id&&f.approvalStatus==="approved").forEach(f=>{f.paid?g+=Number(f.amount||0):g+=(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)})});const b=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;i.push([u,m.length,p,g,b,y+"%"]),a+=p,c+=g}),i.push([]),i.push(["GRAND TOTAL","",a,c,a-c,(a?Math.min(100,Math.round(c/a*100)):0)+"%"]);const l=t.utils.aoa_to_sheet(i);l["!cols"]=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}],t.utils.book_append_sheet(o,l,"Summary"),[...r.entries()].forEach(([u,m])=>{const p=[["VENDOR: "+u.toUpperCase()],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Contracts:",m.length],[],["Contract #","Trade","Contract Amt","Paid","Balance","%","Invoice #","Milestone","Inv. Amt","Inv. Paid","Inv. Bal","Status"]];m.forEach((y,w)=>{const f=(e.invoices||[]).filter(E=>E.vcId===y.id&&E.approvalStatus==="approved"),v=f.reduce((E,P)=>P.paid?E+Number(P.amount||0):E+(P.partialPayments||[]).reduce(($,A)=>$+Number(A.amount||0),0),0),x=Number(y.amount||0),S=x-v,C=x?Math.min(100,Math.round(v/x*100)):0;f.length?f.forEach((E,P)=>{var D;const $=((D=(y.milestones||[]).find(z=>z.id===E.milestoneId))==null?void 0:D.name)||"",A=E.paid?Number(E.amount||0):(E.partialPayments||[]).reduce((z,M)=>z+Number(M.amount||0),0),k=Number(E.amount||0)-A;p.push([P===0?"Contract "+(w+1):"",P===0&&y.trade||"",P===0?x:"",P===0?v:"",P===0?S:"",P===0?C+"%":"",E.invoiceNo||"",$,Number(E.amount||0),A,k,E.paid?"Paid":"Partial"]),(E.partialPayments||[]).forEach(z=>p.push(["","","","","","","  ↳ Partial","",Number(z.amount||0),Number(z.amount||0),0,(z.date||"")+(z.txnNo?" | Txn:"+z.txnNo:"")]))}):p.push(["Contract "+(w+1),y.trade||"",x,v,S,C+"%","","","","","",""]),p.push([])});const g=t.utils.aoa_to_sheet(p);g["!cols"]=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];const b=u.replace(/[^a-zA-Z0-9 ]/g,"").substring(0,31);t.utils.book_append_sheet(o,g,b)});const d="AllVendorLedgers_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";t.writeFile(o,d),j("📊 All Vendor Excel downloaded")}catch(t){console.error(t),j("⚠ Excel error: "+t.message)}}function Lx(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(u=>(e.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(!t.length){j("⚠ No approved invoices");return}const n=new Map;t.forEach(u=>{const m=u.trade||u.csi||"General";n.has(m)||n.set(m,[]),n.get(m).push(u)});let r=0,o=0;const i=[...n.entries()].map(([u,m])=>{let p=0,g=0;const b=m.map((f,v)=>{const x=(e.invoices||[]).filter(A=>A.vcId===f.id&&A.approvalStatus==="approved"),S=x.reduce((A,k)=>k.paid?A+Number(k.amount||0):A+(k.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),C=Number(f.amount||0),E=C-S,P=C?Math.min(100,Math.round(S/C*100)):0;p+=C,g+=S;const $=x.map(A=>{var W;const k=((W=(f.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:W.name)||"—",D=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,F)=>N+Number(F.amount||0),0),z=Number(A.amount||0)-D,M=(A.partialPayments||[]).map(N=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(N.amount||0).toLocaleString()+(N.txnNo?" | Txn:"+N.txnNo:"")+"</div>").join("");return`<tr style="background:${A.paid?"#EDF8E5":"#fff"}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${A.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${A.paid?"PAID":"PARTIAL"}</span> ${A.invoiceNo||"—"} — 📍 ${k}${M}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(A.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${D.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${z>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${P}%</td></tr>`}).join("");return`<tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${f.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${f.csi||"—"}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${C.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${S.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${E>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${E.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${P===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${P}%</td></tr>${$}`}).join(""),y=p-g,w=p?Math.min(100,Math.round(g/p*100)):0;return r+=p,o+=g,`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">🏗 ${u} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${m.length} vendor(s)</span><span style="float:right;font-size:11px">Contract $${p.toLocaleString()} · Paid $${g.toLocaleString()} · Bal $${y.toLocaleString()} · ${w}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">CSI</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${b}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL — ${m.length} vendor(s)</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${p.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${g.toLocaleString()}</td><td style="padding:6px 8px;color:${y>0?"#F8A4A4":"#7CC4F8"};font-weight:700">$${y.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${w}%</td></tr></tbody></table></div>`}).join(""),a=r-o,c=r?Math.min(100,Math.round(o/r*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Trade Ledgers — ${e.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Trade Payment Ledgers</h1>
  <div class="meta">${e.name} · ${ae(e)}<br>Livio Address: ${K}<br>Permit: ${e.permit||"—"} · ${se} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${r.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${a>0?"#9B1F1F":"#2D6A0F"}">$${a.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  ${i}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${se} · ${K} · ${e.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){j("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),j("🖨 All Trade Ledgers PDF")}function Tx(){const e=B();if(e)if(j("📊 Building All-Trade Excel…",3e3),window.XLSX)Ac(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>Ac(e),t.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(t)}}function Ac(e){try{const t=window.XLSX,n=(e.vendors||[]).filter(u=>(e.invoices||[]).some(m=>m.vcId===u.id&&m.approvalStatus==="approved"));if(!n.length){j("⚠ No approved invoices");return}const r=new Map;n.forEach(u=>{const m=u.trade||u.csi||"General";r.has(m)||r.set(m,[]),r.get(m).push(u)});const o=t.utils.book_new(),i=[["ALL TRADE PAYMENT LEDGER"],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Project Address:",ae(e),"","Permit:",e.permit||""],["Livio Address:",K],[],["Trade","Vendors","Contract Amount","Total Paid","Total Balance","Progress %"]];let a=0,c=0;[...r.entries()].forEach(([u,m])=>{let p=0,g=0;m.forEach(w=>{p+=Number(w.amount||0),(e.invoices||[]).filter(f=>f.vcId===w.id&&f.approvalStatus==="approved").forEach(f=>{f.paid?g+=Number(f.amount||0):g+=(f.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)})});const b=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;i.push([u,m.length,p,g,b,y+"%"]),a+=p,c+=g}),i.push([]),i.push(["GRAND TOTAL","",a,c,a-c,(a?Math.min(100,Math.round(c/a*100)):0)+"%"]);const l=t.utils.aoa_to_sheet(i);l["!cols"]=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}],t.utils.book_append_sheet(o,l,"Summary"),[...r.entries()].forEach(([u,m])=>{const p=[["TRADE: "+u.toUpperCase()],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],[],["Vendor","Trade","Contract Amt","Paid","Balance","%","Invoice #","Milestone","Inv. Amt","Inv. Paid","Inv. Bal","Status"]];let g=0,b=0;m.forEach((v,x)=>{const S=(e.invoices||[]).filter(A=>A.vcId===v.id&&A.approvalStatus==="approved"),C=S.reduce((A,k)=>k.paid?A+Number(k.amount||0):A+(k.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),E=Number(v.amount||0),P=E-C,$=E?Math.min(100,Math.round(C/E*100)):0;g+=E,b+=C,S.length?S.forEach((A,k)=>{var W;const D=((W=(v.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:W.name)||"",z=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,F)=>N+Number(F.amount||0),0),M=Number(A.amount||0)-z;p.push([k===0?v.vendor:"",k===0&&v.trade||"",k===0?E:"",k===0?C:"",k===0?P:"",k===0?$+"%":"",A.invoiceNo||"",D,Number(A.amount||0),z,M,A.paid?"Paid":"Partial"]),(A.partialPayments||[]).forEach(N=>p.push(["","","","","","","  ↳ Partial","",Number(N.amount||0),Number(N.amount||0),0,(N.date||"")+(N.txnNo?" | Txn:"+N.txnNo:"")]))}):p.push([v.vendor,v.trade||"",E,C,P,$+"%","","","","","",""]),p.push([])});const y=g-b;p.push(["TOTAL","",g,b,y,(g?Math.min(100,Math.round(b/g*100)):0)+"%","","","","","",""]);const w=t.utils.aoa_to_sheet(p);w["!cols"]=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];const f=u.replace(/[^a-zA-Z0-9 ]/g,"").substring(0,31);t.utils.book_append_sheet(o,w,f)});const d="AllTradeLedgers_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";t.writeFile(o,d),j("📊 All Trade Excel downloaded")}catch(t){console.error(t),j("⚠ Excel error: "+t.message)}}function Bx(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);if(!n)return;const r=h("invd_"+e);n.paid=!0,n.paidDate=(r==null?void 0:r.value)||Nt(),Z(),ne(),j("✓ Invoice marked as paid")}function Mx(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(g=>g.id===e);if(!n)return;const r=h("invpamt_"+e),o=h("invpdate_"+e),i=parseFloat(r==null?void 0:r.value)||0;if(!i){j("⚠ Enter partial payment amount");return}const a=Number(n.amount||0),c=(n.partialPayments||[]).reduce((g,b)=>g+Number(b.amount||0),0),l=a-c;if(i>l){j("⚠ Payment $"+i.toLocaleString()+" exceeds remaining balance $"+l.toLocaleString()),r&&(r.style.border="2px solid var(--red)",r.focus(),setTimeout(()=>r.style.border="",2e3));return}const d=(o==null?void 0:o.value)||Nt();n.partialPayments||(n.partialPayments=[]);const u=h("invptxn_"+e),m=(u==null?void 0:u.value.trim())||"",p=c+i;n.partialPayments.push({id:ze(),amount:i,date:d,txnNo:m,note:""}),p>=a?(n.paid=!0,n.paidDate=d,j("✓ Invoice fully paid — full amount reached")):j("✓ Partial $"+i.toLocaleString()+" recorded · Remaining: $"+(l-i).toLocaleString()),Z(),ne()}function Fx(e,t,n){const r=B();if(!r)return;const o=(r.invoices||[]).find(a=>a.id===e);if(!o)return;const i=(o.partialPayments||[]).find(a=>a.id===t);i&&(i.txnNo=n,Z(),j("✓ Transaction # saved"))}function _x(e,t){const n=B();if(!n)return;const r=(n.invoices||[]).find(o=>o.id===e);r&&(r.partialPayments=(r.partialPayments||[]).filter(o=>o.id!==t),Z(),ne(),j("Payment removed"))}function hf(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);if(!n)return;const r=n.lienFiles||[];if(!r.length){j("⚠ No signed waivers uploaded for this invoice");return}r.forEach((o,i)=>setTimeout(()=>zn(o.id),i*200)),j("⬇ Downloading "+r.length+" waiver file"+(r.length!==1?"s":""))}function yf(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);if(!n)return;const r=n.lienFiles||[];if(!r.length){j("⚠ No signed waivers uploaded for this invoice");return}r.forEach((o,i)=>setTimeout(()=>Ol(o.id),i*200)),j("Opening "+r.length+" waiver file"+(r.length!==1?"s":""))}function Rx(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(r=>r.id===e);n&&(n.paid=!1,n.paidDate="",Z(),ne(),j("Invoice unmarked"))}function Ox(e){const t=B();!t||!confirm("Delete this invoice?")||(t.invoices=(t.invoices||[]).filter(n=>n.id!==e),Z(),ne(),j("🗑 Deleted"))}function Vx(){const e=B();if(!e){j("⚠ No project");return}const t=e.invoices||[];if(!t.length){j("⚠ No invoices to export");return}(e.quotes||[]).filter(d=>d.status==="approved").reduce((d,u)=>d+Number(u.amount||0),0);const r=t.reduce((d,u)=>d+Number(u.amount||0),0),o=t.filter(d=>d.paid).reduce((d,u)=>d+Number(u.amount||0),0),i=t.filter(d=>!d.paid).reduce((d,u)=>d+Number(u.amount||0),0),a=t.map(function(d,u){return'<tr style="background:'+(u%2===0?"#fff":"#fafaf8")+'"><td style="padding:5px 8px;font-size:10px;font-weight:600;border-bottom:1px solid #eee">'+(d.vendor||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(d.invoiceNo||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(d.description||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee;white-space:nowrap">'+(d.invoiceDate?d.invoiceDate:"—")+'</td><td style="padding:5px 8px;font-size:10px;color:'+(d.dueDate&&new Date(d.dueDate+"T12:00:00")<new Date&&!d.paid?"#9B1F1F":"#555")+';border-bottom:1px solid #eee;white-space:nowrap">'+(d.dueDate?d.dueDate:"—")+'</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(d.amount||0).toLocaleString()+'</td><td style="padding:5px 8px;border-bottom:1px solid #eee">'+(d.paid?'<span style="color:#2D6A0F;font-weight:700">&#10003; Paid</span>'+(d.paidDate?' <span style="font-size:9px;color:#999">'+d.paidDate+"</span>":""):'<span style="color:#9B1F1F">Due</span>')+'</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap;color:'+(d.paid?"#2D6A0F":"#9B1F1F")+'">$'+(d.paid?0:Number(d.amount||0)).toLocaleString()+"</td></tr>"}).join(""),c='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Invoice Report &mdash; '+e.name+'</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:18px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.7}table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:6px 8px;font-size:9px;text-transform:uppercase;text-align:left}.tot td{background:#0C1B2E;color:#fff;font-weight:700}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>Invoice Tracker Report</h1><div class="meta">'+e.name+" &nbsp;&middot;&nbsp; "+ae(e)+"<br>Livio Address: "+K+"<br>Permit: "+(e.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+se+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString()+"</div><table><thead><tr><th>Subcontractor</th><th>Invoice #</th><th>Description</th><th>Invoice Date</th><th>Due Date</th><th>Amount</th><th>Status</th><th>Outstanding</th></tr></thead><tbody>"+a+'<tr class="tot"><td colspan="5">TOTAL</td><td>$'+r.toLocaleString()+'</td><td style="color:#9FE1CB">&#10003; $'+o.toLocaleString()+'</td><td style="color:'+(i>0?"#F09595":"#9FE1CB")+'">$'+i.toLocaleString()+'</td></tr></tbody></table><div style="margin-top:12px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">'+se+" &middot; "+K+" &middot; "+e.name+" &middot; Generated "+new Date().toLocaleDateString()+"</div></body></html>",l=window.open("","_blank");if(!l){j("⚠ Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(function(){l.focus(),l.print()},600),j("🖨 Invoice report opened")}function Ux(){const e=B();if(!e){j("⚠ No project");return}if(j("📊 Building Excel…",3e3),window.XLSX)Dc(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>Dc(e),t.onerror=()=>j("⚠ Could not load Excel library"),document.head.appendChild(t)}}function Dc(e){try{const t=window.XLSX,n=t.utils.book_new(),r=e.invoices||[],o=(e.quotes||[]).filter(m=>m.status==="approved"),i=[["INVOICE TRACKER — "+e.name],["Project:",e.name,"","Project Address:",ae(e)],["Livio Address:",K,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],[],["Subcontractor","Invoice #","Description","Invoice Date","Due Date","Amount","Status","Date Paid","Outstanding"]];r.forEach(m=>{i.push([m.vendor||"",m.invoiceNo||"",m.description||"",m.invoiceDate||"",m.dueDate||"",Number(m.amount||0),m.paid?"Paid":"Outstanding",m.paidDate||"",m.paid?0:Number(m.amount||0)])}),i.push([]);const a=r.reduce((m,p)=>m+Number(p.amount||0),0),c=r.filter(m=>m.paid).reduce((m,p)=>m+Number(p.amount||0),0),l=r.filter(m=>!m.paid).reduce((m,p)=>m+Number(p.amount||0),0);i.push(["TOTAL","","","","",a,"","",l]),i.push(["Contract Total (Approved):","","","","",o.reduce((m,p)=>m+Number(p.amount||0),0)]);const d=t.utils.aoa_to_sheet(i);d["!cols"]=[{wch:28},{wch:14},{wch:28},{wch:14},{wch:12},{wch:14},{wch:12},{wch:12},{wch:14}],t.utils.book_append_sheet(n,d,"Invoice Tracker");const u=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_InvoiceTracker.xlsx";t.writeFile(n,u),j("📊 Invoice Excel downloaded")}catch(t){console.error(t),j("⚠ Excel error: "+t.message)}}function ql(){const e=B();if(!e)return;const t=e.vendors||[];h("ct-ven").textContent=t.length;const n=h("ven-content");if(!n)return;if(t.forEach(o=>G(o.files||[])),!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🤝</div>No vendors added yet. Click + Add Vendor to start.</div>';return}const r=(e.quotes||[]).filter(o=>o.status==="approved");n.innerHTML=t.map((o,i)=>{const a=r.find(l=>l.id===o.quoteId)||null,c=(o.files||[]).length?'<div style="display:flex;flex-direction:column;gap:4px;margin-top:6px">'+(o.files||[]).map(l=>`<div style="display:flex;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:4px 10px">
            <span style="font-size:13px">${dt(l.name)}</span>
            <span style="font-size:11px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</span>
            <button class="a-dl" onclick="dlFile('${l.id}')" title="Download">⬇</button>
          </div>`).join("")+"</div>":'<div style="font-size:11px;color:var(--muted);font-style:italic;margin-top:6px">No contract files attached</div>';return`<div class="panel" style="margin-bottom:14px">
      <div class="ph" style="background:var(--navy)">
        <div>
          <span class="ph-title" style="color:#fff;font-size:14px">${o.vendor}</span>
          ${a?`<span style="font-size:11px;color:#8AAAC8;margin-left:10px">${a.scope||""}</span>`:""}
          ${o.contractNo?`<span style="background:rgba(255,255,255,.1);color:#8AAAC8;font-size:10px;padding:2px 8px;border-radius:4px;margin-left:8px">Contract # ${o.contractNo}</span>`:""}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="generateVendorContract('${o.id}')">🖨 View Contract PDF</button>
          <button class="btn btn-xs" style="background:rgba(45,106,15,.3);color:#9FE1CB;border:1px solid rgba(45,106,15,.5);font-size:10px" onclick="sendContractEmail('${o.id}')">✉ Send for Signing</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('venfiles','${o.id}')">📎 Attach</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('vendor','${o.id}')">✏ Edit</button>
          <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4);font-size:10px" onclick="delVendor('${o.id}')">🗑</button>
        </div>
      </div>
      <div style="padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px">
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Type</div><div style="font-size:12px;font-weight:600">${o.contractType||"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Value</div><div style="font-size:14px;font-weight:700;font-family:'Barlow Condensed',sans-serif;color:var(--navy)">${o.amount?"$"+Number(o.amount).toLocaleString():"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Start Date</div><div style="font-size:12px">${o.startDate?J(o.startDate):"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">End Date</div><div style="font-size:12px">${o.endDate?J(o.endDate):"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Status</div>
          <span style="display:inline-block;padding:2px 9px;border-radius:4px;font-size:10px;font-weight:700;background:${o.status==="active"?"var(--green-l)":o.status==="signed"?"var(--blue-l)":o.status==="expired"?"var(--red-l)":"var(--bg)"};color:${o.status==="active"?"var(--green)":o.status==="signed"?"var(--blue)":o.status==="expired"?"var(--red)":"var(--muted)"}">
            ${o.status?o.status.charAt(0).toUpperCase()+o.status.slice(1):"—"}
          </span>
        </div>
        ${o.notes?`<div style="grid-column:1/-1"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Notes</div><div style="font-size:11px;color:var(--text)">${o.notes}</div></div>`:""}
      </div>
      <!-- Contract files -->
      <div style="padding:10px 16px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:4px">📄 Contract Documents (${(o.files||[]).length})</div>
        ${c}
        <button class="btn btn-ghost btn-xs" style="margin-top:8px;font-size:10px" onclick="openModal('venfiles','${o.id}')">+ Add / Manage Files</button>
      </div>
      ${(()=>{const l=(e.invoices||[]).filter(d=>o.quoteId&&d.quoteId&&d.quoteId===o.quoteId||d.vcId&&d.vcId===o.id?!0:!d.quoteId&&!d.vcId&&d.vendor&&d.vendor===o.vendor?(e.vendors||[]).filter(m=>m.vendor===d.vendor).length===1:!1);return l.length?`<div style="padding:10px 16px;border-top:1px solid var(--border)">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--blue);margin-bottom:6px">🧾 Linked Invoices (${l.length})</div>
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <thead><tr style="background:var(--bg)">
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Invoice #</th>
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Date</th>
              <th style="padding:4px 8px;text-align:right;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Amount</th>
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Status</th>
            </tr></thead>
            <tbody>${l.map((d,u)=>`<tr style="background:${u%2===0?"#fff":"var(--bg)"}">
              <td style="padding:4px 8px;font-weight:600;color:var(--navy)">${d.invoiceNo||"—"}</td>
              <td style="padding:4px 8px;color:var(--muted)">${d.invoiceDate?J(d.invoiceDate):"—"}</td>
              <td style="padding:4px 8px;text-align:right;font-family:'Barlow Condensed',sans-serif;font-weight:700">${R(d.amount||0)}</td>
              <td style="padding:4px 8px"><span style="padding:2px 6px;border-radius:3px;font-size:9px;font-weight:700;background:${d.paid?"var(--green-l)":d.approvalStatus==="approved"?"var(--blue-l)":d.approvalStatus==="rejected"?"var(--red-l)":"var(--amber-l)"};color:${d.paid?"var(--green)":d.approvalStatus==="approved"?"var(--blue)":d.approvalStatus==="rejected"?"var(--red)":"var(--amber)"}">${d.paid?"Paid":d.approvalStatus==="approved"?"Approved":d.approvalStatus==="rejected"?"Rejected":"Pending"}</span></td>
            </tr>`).join("")}</tbody>
          </table>
        </div>`:""})()}
    </div>`}).join("")}function bf(e){const n=e.options[e.selectedIndex].value,r=xt().find(a=>a.id===n);if(!r)return;const o=document.getElementById("f-ven-email"),i=document.getElementById("f-ven-trade");o&&r.email&&(o.value=r.email),i&&r.trade&&(i.value=r.trade)}let Xe=[];function wf(){const e=h("ven-ms-list");if(!e)return;const t=Xe.length;Xe.push({id:ze(),name:"",amount:"",dueDate:""});const n=document.createElement("div");n.id="venms_"+t,n.style.cssText="display:flex;gap:6px;align-items:flex-start;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px",n.innerHTML=[`<div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Milestone</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" value="" oninput="venMsChange(${t},'name',this.value)" placeholder="e.g. Final Payment"/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Amount ($)</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="number" value="" oninput="venMsChange(${t},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">%</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${t}" value="—" readonly/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Due Date</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="date" value="" oninput="venMsChange(${t},'dueDate',this.value)"/></div>`,`<button type="button" onclick="venRemoveMilestone(${t})" style="margin-top:18px;background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;padding:0 3px">×</button>`].join(""),e.appendChild(n),yr()}function Hx(e,t,n){Xe[e]&&(Xe[e][t]=n),yr()}function Wx(e){if(!Xe[e])return;Xe[e]._deleted=!0;const t=h("venms_"+e);t&&(t.style.opacity=".3",t.style.pointerEvents="none"),yr()}function Cf(){var t;const e=parseFloat((t=h("f-ven-amt"))==null?void 0:t.value)||0;Xe.forEach((n,r)=>{const o=e&&n.amount?Math.round(Number(n.amount)/e*100)+"%":"—",i=h("venms_pct_"+r);i&&(i.value=o)}),yr()}function yr(){const e=Xe.filter(n=>!n._deleted).reduce((n,r)=>n+Number(r.amount||0),0),t=h("ven-ms-total");t&&(t.textContent=e>0?"Total: $"+e.toLocaleString():"No milestones yet")}function qx(e){const t=B();if(!t){j("⚠ No project selected");return}const n=(t.vendors||[]).find(c=>c.id===e);if(!n){j("⚠ Vendor not found");return}const r=t,o=(n.milestones||[]).length?'<table style="width:100%;border-collapse:collapse;margin:10px 0"><thead><tr style="background:#0C1B2E"><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Payment Milestone</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Amount</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">% of Contract</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Due Date</th></tr></thead><tbody>'+n.milestones.map(function(c,l){return'<tr style="background:'+(l%2===0?"#fff":"#f7f6f2")+'"><td style="padding:6px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee">'+c.name+'</td><td style="padding:6px 10px;font-size:12px;font-weight:700;border-bottom:1px solid #eee">$'+Number(c.amount||0).toLocaleString()+'</td><td style="padding:6px 10px;font-size:11px;color:#1A6BC4;border-bottom:1px solid #eee">'+(n.amount?Math.round(Number(c.amount||0)/Number(n.amount)*100)+"%":"—")+'</td><td style="padding:6px 10px;font-size:11px;color:#6b6a64;border-bottom:1px solid #eee">'+(c.dueDate||"—")+"</td></tr>"}).join("")+'<tr style="background:#0C1B2E"><td style="padding:7px 10px;font-size:11px;font-weight:700;color:#fff">TOTAL</td><td style="padding:7px 10px;font-size:13px;font-weight:700;color:#fff">$'+n.milestones.reduce(function(c,l){return c+Number(l.amount||0)},0).toLocaleString()+"</td><td></td><td></td></tr></tbody></table>":'<p style="color:#999;font-style:italic;font-size:11px">No payment milestones specified.</p>',i='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Subcontract Agreement — '+n.vendor+'</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:32px;font-size:11px;line-height:1.6}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #0C1B2E}.logo{font-size:22px;font-weight:900;color:#0C1B2E;letter-spacing:-1px}.logo span{color:#1A6BC4}.contract-title{font-size:18px;font-weight:700;color:#0C1B2E;text-align:center;margin:16px 0 8px}.contract-no{text-align:center;font-size:11px;color:#6b6a64;margin-bottom:20px}.parties{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}.party-box{border:1px solid #e0ddd5;border-radius:6px;padding:12px 14px;background:#f9f8f5}.party-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b6a64;margin-bottom:6px}.party-name{font-size:14px;font-weight:700;color:#0C1B2E}.section{margin-bottom:18px}.section-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#0C1B2E;border-bottom:2px solid #0C1B2E;padding-bottom:3px;margin-bottom:8px}.section-body{font-size:11px;color:#333;line-height:1.7;white-space:pre-wrap}.exclusion-box{background:#FFF5F5;border:1px solid #F5C0C0;border-radius:6px;padding:10px 12px}.sig-row{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:40px}.sig-box{border-top:1px solid #333;padding-top:8px}.sig-label{font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.6px}.sig-name{font-size:11px;font-weight:600;margin-top:12px}@media print{body{padding:20px}@page{margin:15mm}}</style></head><body><div class="header"><div><div class="logo">LIVI<span>O</span></div><div style="font-size:10px;color:#6b6a64;margin-top:3px">Building Systems</div></div><div style="text-align:right"><div style="font-size:10px;color:#6b6a64">Project</div><div style="font-size:13px;font-weight:700">'+r.name+'</div><div style="font-size:10px;color:#6b6a64;margin-top:2px">'+ae(r)+'</div><div style="font-size:10px;color:#6b6a64">Permit: '+(r.permit||"—")+'</div></div></div><div class="contract-title">SUBCONTRACT AGREEMENT</div><div class="contract-no">Contract No: '+(n.contractNo||"—")+" &nbsp;&bull;&nbsp; Date: "+new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+'</div><div class="parties"><div class="party-box"><div class="party-label">Owner / General Contractor</div><div class="party-name">'+se+'</div><div style="font-size:10px;color:#6b6a64;margin-top:4px">'+K+'</div><div style="font-size:10px;color:#6b6a64;margin-top:4px">Project: '+r.name+'</div><div style="font-size:10px;color:#6b6a64">'+ae(r)+'</div></div><div class="party-box"><div class="party-label">Subcontractor</div><div class="party-name">'+n.vendor+"</div>"+(n.vendorEmail?'<div style="font-size:10px;color:#1A6BC4;margin-top:4px">'+n.vendorEmail+"</div>":"")+'</div></div><div class="section"><div class="section-title">1. Contract Details</div><table style="width:100%;border-collapse:collapse"><tbody><tr><td style="padding:4px 0;width:40%;font-weight:600;font-size:11px">Contract Type</td><td style="padding:4px 0;font-size:11px">'+(n.contractType||"—")+'</td></tr><tr><td style="padding:4px 0;font-weight:600;font-size:11px">Contract Value</td><td style="padding:4px 0;font-size:13px;font-weight:700;color:#0C1B2E">$'+Number(n.amount||0).toLocaleString()+'</td></tr><tr><td style="padding:4px 0;font-weight:600;font-size:11px">Start Date</td><td style="padding:4px 0;font-size:11px">'+(n.startDate||"—")+'</td></tr><tr><td style="padding:4px 0;font-weight:600;font-size:11px">End Date</td><td style="padding:4px 0;font-size:11px">'+(n.endDate||"—")+'</td></tr><tr><td style="padding:4px 0;font-weight:600;font-size:11px">CBC / Code Reference</td><td style="padding:4px 0;font-size:11px">CBC 2022 · CALGreen 2022 · Title 24</td></tr></tbody></table></div>'+(n.scope?'<div class="section"><div class="section-title">2. Scope of Work</div><div class="section-body">'+n.scope+"</div></div>":"")+(n.exclusions?'<div class="section"><div class="section-title">3. Exclusions</div><div class="exclusion-box section-body">'+n.exclusions+"</div></div>":"")+'<div class="section"><div class="section-title">'+(n.exclusions?"4":"3")+". Payment Schedule</div>"+o+"</div>"+(n.notes?'<div class="section"><div class="section-title">Special Conditions</div><div class="section-body">'+n.notes+"</div></div>":"")+(n.bankAccount||n.zelleId?'<div class="section" style="background:#F3F8FF;border:1px solid #B0D0F0;border-radius:6px;padding:10px 14px"><div class="section-title" style="border-color:#B0D0F0">Payment Instructions</div><div class="section-body">'+(n.bankName?"Bank: "+n.bankName+" | ":"")+(n.bankAcctType?"Type: "+n.bankAcctType+" | ":"")+(n.bankAccount?"Account: ****"+n.bankAccount.slice(-4)+" | ":"")+(n.routingNo?"Routing: "+n.routingNo.slice(0,3)+"****"+n.routingNo.slice(-2)+" | ":"")+(n.zelleId?"Zelle: "+n.zelleId:"")+"</div></div>":"")+'<div class="section"><div class="section-title">General Terms</div><div class="section-body" style="font-size:10px;color:#555">1. All work shall comply with applicable codes including CBC 2022, CPC 2022, CEC 2022, CALGreen 2022, and Title 24. 2. Subcontractor shall carry all required insurance including general liability (min $2M) and workers compensation. 3. Subcontractor shall obtain all required permits unless otherwise noted in scope. 4. Changes to scope require written change order approval before proceeding. 5. Subcontractor warrants all work for one (1) year from substantial completion. 6. Payment subject to receipt of lien waiver for each milestone payment. 7. California law governs this agreement.</div></div><div class="sig-row"><div class="sig-box"><div style="height:50px"></div><div class="sig-label">Owner / GC Signature</div><div class="sig-name">'+se+'</div><div style="font-size:9px;color:#6b6a64;margin-top:3px">'+K+'</div><div style="font-size:9px;color:#999;margin-top:3px">Date: ___________________</div></div><div class="sig-box"><div style="height:50px"></div><div class="sig-label">Subcontractor Signature</div><div class="sig-name">'+n.vendor+'</div><div style="font-size:9px;color:#999;margin-top:3px">Date: ___________________</div></div></div><div style="margin-top:24px;font-size:9px;color:#999;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">Generated by '+se+" &nbsp;&bull;&nbsp; "+K+" &nbsp;&bull;&nbsp; "+new Date().toLocaleDateString()+" &nbsp;&bull;&nbsp; "+r.name+"</div></body></html>",a=window.open("","_blank");if(!a){j("⚠ Pop-up blocked");return}a.document.write(i),a.document.close(),setTimeout(function(){a.focus(),a.print()},600),j("🖨 Contract opened — Print → Save as PDF")}function Sf(e){const t=B();if(!t)return null;const n=(t.vendors||[]).find(l=>l.id===e);if(!n)return null;const r=n.vdirId?xt().find(l=>l.id===n.vdirId):null,o=(n.vendorEmail||(r==null?void 0:r.email)||nr(n.vendor)||"").trim(),i="Subcontract Agreement â€” "+n.vendor+" / "+t.name,a=(n.milestones||[]).length?`

Payment Milestones:
`+n.milestones.map(function(l){return"  â€¢ "+l.name+" ($"+Number(l.amount||0).toLocaleString()+")"}).join(`
`):"",c="Dear "+n.vendor+`,

Please find attached the Subcontract Agreement for:

Project: `+t.name+`
Project Address: `+ae(t)+`
Livio Address: `+K+`
Contract #: `+(n.contractNo||"N/A")+`
Contract Value: $`+Number(n.amount||0).toLocaleString()+a+`

Reply Email: `+Nn+`

Please review, sign, and return at your earliest convenience.

Best regards,
`+qi();return{p:t,v:n,vdir:r,email:o,subject:i,body:c}}function Gl(e){const t=Sf(e);if(!t)throw new Error("Vendor contract not found.");if(!window.jspdf||!window.jspdf.jsPDF)throw new Error("PDF library not loaded yet. Try again.");const{p:n,v:r,vdir:o}=t,{jsPDF:i}=window.jspdf,a=new i({unit:"pt",format:"legal"}),c=a.internal.pageSize.getWidth(),l=a.internal.pageSize.getHeight(),d=40,u=40,m=c-d-u;let p=44;const g=(C=24)=>{p+C>l-46&&(a.addPage(),p=44)},b=(C,E=10,P=[60,60,60],$=14,A="normal")=>{if(!C)return;a.setFont("helvetica",A),a.setFontSize(E),a.setTextColor(P[0],P[1],P[2]);const k=a.splitTextToSize(String(C),m);g(k.length*$+6),a.text(k,d,p),p+=k.length*$},y=(C,E)=>{if(!E&&E!==0)return;g(18),a.setFont("helvetica","bold"),a.setFontSize(10),a.setTextColor(12,27,46),a.text(C,d,p),a.setFont("helvetica","normal"),a.setTextColor(55,55,55);const P=a.getTextWidth(C)+8,$=a.splitTextToSize(String(E),Math.max(120,m-P));a.text($,d+P,p),p+=Math.max(16,$.length*14)},w=(C,E)=>{E&&(g(28),a.setDrawColor(12,27,46),a.setLineWidth(1),a.line(d,p,c-u,p),p+=14,a.setFont("helvetica","bold"),a.setFontSize(11),a.setTextColor(12,27,46),a.text(C,d,p),p+=12,b(E,10,[60,60,60],14,"normal"),p+=6)};a.setFont("helvetica","bold"),a.setFontSize(20),a.setTextColor(12,27,46),a.text("SUBCONTRACT AGREEMENT",d,p),p+=18,a.setFontSize(11),a.setTextColor(26,107,196),a.text(se,d,p),p+=16,b(K,10,[107,106,100],13),p+=6,y("Project:",n.name||""),y("Project Address:",ae(n)),y("Subcontractor:",r.vendor||""),o!=null&&o.address&&y("Vendor Address:",o.address),(r.vendorEmail||o!=null&&o.email)&&y("Vendor Email:",r.vendorEmail||(o==null?void 0:o.email)),y("Contract #:",r.contractNo||"â€”"),y("Contract Type:",r.contractType||"â€”"),y("Contract Value:",R(r.amount||0)),y("Start Date:",r.startDate?J(r.startDate):"â€”"),y("End Date:",r.endDate?J(r.endDate):"â€”"),y("Generated:",new Date().toLocaleDateString()),p+=6,w("Scope of Work",r.scope||"No scope provided."),r.exclusions&&w("Exclusions",r.exclusions),g(30),a.setDrawColor(12,27,46),a.setLineWidth(1),a.line(d,p,c-u,p),p+=14,a.setFont("helvetica","bold"),a.setFontSize(11),a.setTextColor(12,27,46),a.text("Payment Schedule",d,p),p+=14,(r.milestones||[]).length?(r.milestones||[]).forEach((C,E)=>{b(E+1+". "+(C.name||"Milestone"),10,[12,27,46],14,"bold"),b("Amount: "+R(C.amount||0)+(C.dueDate?"   Due: "+J(C.dueDate):""),9.5,[70,70,70],13,"normal"),p+=4}):b("No payment milestones specified.",10,[120,120,120],14,"italic"),p+=8,r.notes&&w("Special Conditions",r.notes),g(90),a.setFont("helvetica","bold"),a.setFontSize(11),a.setTextColor(12,27,46),a.text("Signatures",d,p),p+=28,a.setDrawColor(120,120,120),a.line(d,p,d+220,p),a.line(c-u-220,p,c-u,p),p+=16,a.setFont("helvetica","normal"),a.setFontSize(9),a.setTextColor(95,95,95),a.text(se,d,p),a.text(r.vendor||"Subcontractor",c-u-220,p),p+=14,a.text("Owner / General Contractor",d,p),a.text("Subcontractor Signature",c-u-220,p),a.setFont("helvetica","italic"),a.setFontSize(8),a.setTextColor(120,120,120),a.text("Generated from Livio vendor contracts",d,l-24);const f=a.output("datauristring"),v=String(f).split(",")[1]||"",x=String(r.vendor||"vendor-contract").replace(/[^a-z0-9-_]+/gi,"_"),S=String(n.name||"project").replace(/[^a-z0-9-_]+/gi,"_");return{filename:`${x}-${S}-contract.pdf`,content:v,contentType:"application/pdf"}}function Gx(e,t,n){const r=Array.isArray(e==null?void 0:e.partialPayments)?e.partialPayments:[],o=n?r.find(d=>d.id===n):null,i=!o&&r.length?r[r.length-1]:null,a=(t||"").includes("Progress")?o||i:null,c=Number(a?a.amount||0:(e==null?void 0:e.amount)||0),l=(a==null?void 0:a.date)||(e==null?void 0:e.invoiceDate)||"";return{partialPaymentId:(a==null?void 0:a.id)||"",paymentAmount:Number.isFinite(c)?c:0,paymentDate:l,isPartialPayment:!!a}}function Yl(e,t,n){const r=B();if(!r)return null;const o=(r.invoices||[]).find(S=>S.id===e);if(!o)return null;const i=(r.quotes||[]).find(S=>S.id===o.quoteId),a=o.vendor||(i?i.vendor:"")||"Vendor",c=o.vendorEmail||(()=>{const S=(r.vendors||[]).find(C=>C.vendor===a||C.vdirId===o.vdirId);return S?S.vendorEmail:""})(),l=r.name||"Project",d=r.address||"",u=o.invoiceNo||e,m=Gx(o,t,n),p=m.paymentAmount,g=m.paymentDate,b=R(p),y=g?J(g):"",f={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Unconditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Conditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",v=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,x=`Dear ${a},

Please find enclosed the ${f} for the following:

Project: ${l}
Address: ${d}
Invoice #: ${u}
Invoice Date: ${y}
Payment Amount: ${b}${v}

Please sign and return this waiver at your earliest convenience.

Best regards,
Livio Building Systems`;return{p:r,inv:o,q:i,vendorName:a,vendorEmail:c,projName:l,projAddr:d,invNo:u,invAmt:b,invDate:y,waiverDesc:f,body:x,partialPaymentId:m.partialPaymentId,isPartialPayment:m.isPartialPayment}}function Yx(e,t,n){var C;const r=Yl(e,t,n);if(!r)throw new Error("Lien waiver data not found.");if(!window.jspdf||!window.jspdf.jsPDF)throw new Error("PDF library not loaded yet. Try again.");const{jsPDF:o}=window.jspdf,i=new o({unit:"pt",format:"letter"}),a=i.internal.pageSize.getWidth(),c=40,l=40,d=a-c-l;let u=44;const m={"Conditional Progress":{section:"Civil Code § 8132",title:"CONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT",notice:"NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.",throughDateLabel:"Through Date:",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant's receipt of payment from the financial institution on which the following check is drawn:",paymentFields:[["Maker of Check:","Livio Building Systems"],["Amount of Check:",r.invAmt],["Check Payable to:",r.vendorName]],exceptions:["(1) Retentions.","(2) Extras for which the claimant has not received payment.","(3) The following progress payments for which the claimant has previously given a conditional waiver and release but has not received payment:","Date(s) of waiver and release: _______________________________","Amount(s) of unpaid progress payment(s): $_____________________","(4) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment."]},"Unconditional Progress":{section:"Civil Code § 8134",title:"UNCONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT",notice:"NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.",throughDateLabel:"Through Date:",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has received the following progress payment:",paymentFields:[["Amount of Progress Payment:",r.invAmt]],exceptions:["(1) Retentions.","(2) Extras for which the claimant has not received payment.","(3) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment."]},"Conditional Final":{section:"Civil Code § 8136",title:"CONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT",notice:"NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.",throughDateLabel:"",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant's receipt of payment from the financial institution on which the following check is drawn:",paymentFields:[["Maker of Check:","Livio Building Systems"],["Amount of Check:",r.invAmt],["Check Payable to:",r.vendorName]],exceptions:["Disputed claims for extras in the amount of: $_____________________"]},"Unconditional Final":{section:"Civil Code § 8138",title:"UNCONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT",notice:"NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.",throughDateLabel:"",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for all labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has been paid in full.",paymentFields:[],exceptions:["Disputed claims for extras in the amount of: $_____________________"]}},p=m[t]||m["Conditional Progress"],g="Livio Building Systems",b=((C=r.p)==null?void 0:C.client)||r.projName||"",y=r.invDate||new Date().toLocaleDateString("en-US"),w=(E,P=10,$=[65,65,65],A=14,k="normal")=>{i.setFont("helvetica","normal"),k!=="normal"&&i.setFont("helvetica",k),i.setFontSize(P),i.setTextColor(...$);const D=i.splitTextToSize(String(E||""),d);i.text(D,c,u),u+=Math.max(A,D.length*A)};i.setFillColor(26,107,196),i.rect(0,0,a,78,"F"),i.setFont("helvetica","bold"),i.setFontSize(18),i.setTextColor(255,255,255),i.text("LIVIO BUILDING SYSTEMS",c,36),i.setFontSize(9),i.text("California Statutory Lien Waiver",c,56),u=100,i.setFont("helvetica","bold"),i.setFontSize(15),i.setTextColor(12,27,46),w(p.title,15,[12,27,46],20,"bold"),w(p.section,9,[110,110,110],14),w(p.notice,9,[135,35,35],13,"bold"),u+=4,w("Identifying Information",11,[26,107,196],16,"bold"),w(`Name of Claimant: ${r.vendorName}`,10,[70,70,70],13),w(`Name of Customer: ${g}`,10,[70,70,70],13),w(`Job Location: ${r.projAddr||r.projName||"-"}`,10,[70,70,70],13),w(`Owner: ${b||"-"}`,10,[70,70,70],13),p.throughDateLabel&&w(`${p.throughDateLabel} ${y}`,10,[70,70,70],13),u+=6,i.setDrawColor(26,107,196),i.setLineWidth(1),i.line(c,u,a-l,u),u+=18,w(p.title.includes("UNCONDITIONAL")?"Unconditional Waiver and Release":"Conditional Waiver and Release",11,[26,107,196],16,"bold"),w(p.body,9.5,[55,55,55],14),p.paymentFields.forEach(([E,P])=>{w(`${E} ${P||""}`,10,[70,70,70],13)}),u+=18,w("Exceptions",11,[26,107,196],16,"bold"),p.exceptions.forEach(E=>{w(E,9.5,[55,55,55],14)}),u+=16,i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor(26,107,196),i.text("Signature",c,u),u+=30,i.setDrawColor(140,140,140),i.setLineWidth(.8),i.line(c,u,a-l,u),u+=32,i.text("Claimant's Signature",c,u),i.text("Date of Signature",a-l-110,u),u+=30,i.line(c,u,a-180,u),i.line(a-150,u,a-l,u),u+=28,i.text("Claimant's Title",c,u),u+=30,i.line(c,u,a-240,u),i.setFont("helvetica","italic"),i.setFontSize(8),i.setTextColor(120,120,120),i.text(`Prefilled from project ${r.projName} / invoice ${r.invNo}`,c,i.internal.pageSize.getHeight()-24);const f=i.output("datauristring"),v=String(f).split(",")[1]||"",x=(r.invNo||"Lien-Waiver").replace(/[^a-z0-9-_]+/gi,"_"),S=String(t||"waiver").replace(/[^a-z0-9-_]+/gi,"_");return{filename:`${x}-${S}.pdf`,content:v,contentType:"application/pdf"}}function Ns(e,t,n){const r=Yl(e,t,n);if(!r)return;const{vendorName:o,projName:i,projAddr:a,invNo:c,invAmt:l,invDate:d,isPartialPayment:u}=r,p={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Unconditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Unconditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",g=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,y=`Dear ${o},

Please find enclosed the ${p} for the following:

Project: ${i}
Address: ${a}
Invoice #: ${c}
Invoice Date: ${d}
${u?"Partial Payment Amount":"Payment Amount"}: ${l}${g}

Please sign and return this waiver at your earliest convenience.

Best regards,
Livio Building Systems`;h("lien-email-invid").value=e,h("lien-email-type").value=t,h("mo-lien-email").dataset.partialPaymentId=n||r.partialPaymentId||"",h("lien-email-title").textContent=t+" Lien Waiver",h("lien-email-to").value=r.vendorEmail,h("lien-email-subject").value=p+" — "+i+" / Inv #"+c,h("lien-email-body").value=y;const w=h("lien-email-status");w&&(w.innerHTML=Ln(_t())),h("mo-lien-email").classList.add("open")}function Is(){h("mo-lien-email").classList.remove("open")}function Qx(e){var a,c,l,d;const t=(a=h("lien-email-invid"))==null?void 0:a.value,n=(c=h("lien-email-type"))==null?void 0:c.value,r=((d=(l=h("mo-lien-email"))==null?void 0:l.dataset)==null?void 0:d.partialPaymentId)||"";if(!t||!n)return;const o=B();if(!o)return;const i=(o.invoices||[]).find(u=>u.id===t);i&&(i.lienSent||(i.lienSent=[]),i.lienSent.push({id:ze(),type:n,date:Nt(),sentTo:e,partialPaymentId:r}),Z(),Yi())}function Nc(){var c,l,d,u;const e=h("lien-email-to").value.trim(),t=h("lien-email-subject").value.trim(),n=h("lien-email-body").value.trim(),r=(c=h("lien-email-invid"))==null?void 0:c.value,o=(l=h("lien-email-type"))==null?void 0:l.value,i=((u=(d=h("mo-lien-email"))==null?void 0:d.dataset)==null?void 0:u.partialPaymentId)||"";if(!e){j("⚠ Recipient email is required");return}let a=[];try{r&&o&&(a=[Yx(r,o,i)])}catch(m){j("âš  Unable to attach lien waiver PDF: "+(m.message||m),"error");return}hr({to:e,subject:t,message:n,attachments:a}).then(function(){Qx(e),Is(),j("✉ Lien waiver email sent")}).catch(function(m){console.error("Email error:",m),j("⚠ Email send failed: "+m.message,"error")})}function Jx(e){Pi(e)}function Pi(e){const t=B();if(!t)return;const n=(t.vendors||[]).find(l=>l.id===e);if(!n)return;const r=n.vendorEmail||"",o="Subcontract Agreement — "+n.vendor+" / "+t.name,i=(n.milestones||[]).length?`

Payment Milestones:
`+n.milestones.map(function(l){return"  • "+l.name+" ($"+Number(l.amount||0).toLocaleString()+")"}).join(`
`):"",a="Dear "+n.vendor+`,

Please find attached the Subcontract Agreement for:

Project: `+t.name+`
Address: `+(t.address||"")+`
Contract #: `+(n.contractNo||"N/A")+`
Contract Value: $`+Number(n.amount||0).toLocaleString()+i+`

Please review, sign, and return at your earliest convenience.

Best regards,
Livio Building Systems`;h("cemail-vid").value=e,h("cemail-to").value=r,h("cemail-subject").value=o,h("cemail-body").value=a;const c=h("cemail-status");c&&(c.innerHTML=Ln(_t())),h("mo-contract-email").classList.add("open")}function Ki(){h("mo-contract-email").classList.remove("open")}function Ql(){const e=h("cemail-to").value.trim(),t=h("cemail-subject").value.trim(),n=h("cemail-body").value.trim();if(!e){j("⚠ Recipient email is required");return}hr({to:e,subject:t,message:n}).then(function(){Ki(),j("✉ Contract email sent")}).catch(function(r){console.error("Email error:",r),j("⚠ Email send failed: "+r.message,"error")})}Ns=function(e,t,n){const r=Yl(e,t,n);if(!r)return;const{vendorName:o,projName:i,projAddr:a,invNo:c,invAmt:l,invDate:d,isPartialPayment:u}=r,p={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Unconditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Unconditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",g=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,y=`Dear ${o},

Please find enclosed the ${p} for the following:

Project: ${i}
Project Address: ${a}
Livio Address: ${K}
Invoice #: ${c}
Invoice Date: ${d}
${u?"Partial Payment Amount":"Payment Amount"}: ${l}${g}

Reply Email: ${Nn}

Please sign and return this waiver at your earliest convenience.

Best regards,
${qi()}`;h("lien-email-invid").value=e,h("lien-email-type").value=t,h("mo-lien-email").dataset.partialPaymentId=n||r.partialPaymentId||"",h("lien-email-title").textContent=t+" Lien Waiver",h("lien-email-to").value=r.vendorEmail||nr(o),h("lien-email-subject").value=p+" — "+i+" / Inv #"+c,h("lien-email-body").value=y;const w=h("lien-email-status");w&&(w.innerHTML=Ln(_t())),h("mo-lien-email").classList.add("open")};Pi=function(e){const t=B();if(!t)return;const n=(t.vendors||[]).find(l=>l.id===e);if(!n)return;const r=(n.vendorEmail||nr(n.vendor)||"").trim(),o="Subcontract Agreement — "+n.vendor+" / "+t.name,i=(n.milestones||[]).length?`

Payment Milestones:
`+n.milestones.map(function(l){return"  • "+l.name+" ($"+Number(l.amount||0).toLocaleString()+")"}).join(`
`):"",a="Dear "+n.vendor+`,

Please find attached the Subcontract Agreement for:

Project: `+t.name+`
Project Address: `+ae(t)+`
Livio Address: `+K+`
Contract #: `+(n.contractNo||"N/A")+`
Contract Value: $`+Number(n.amount||0).toLocaleString()+i+`

Reply Email: `+Nn+`

Please review, sign, and return at your earliest convenience.

Best regards,
`+qi();h("cemail-vid").value=e,h("cemail-to").value=r,h("cemail-subject").value=o,h("cemail-body").value=a;const c=h("cemail-status");c&&(c.innerHTML=Ln(_t())),h("mo-contract-email").classList.add("open")};Ql=function(){const e=h("cemail-to").value.trim(),t=h("cemail-subject").value.trim(),n=h("cemail-body").value.trim(),r=h("cemail-vid").value.trim();if(!e){j("âš  Recipient email is required");return}let o=[];try{r&&(o=[Gl(r)])}catch(i){j("âš  Could not build contract PDF: "+i.message,"error");return}hr({to:e,subject:t,message:n,attachments:o}).then(function(){Ki(),j("âœ‰ Contract email sent with PDF attachment")}).catch(function(i){console.error("Email error:",i),j("âš  Email send failed: "+i.message,"error")})};function Kx(e){const t=new Uint8Array(e),n=32768;let r="";for(let o=0;o<t.length;o+=n){const i=t.subarray(o,o+n);r+=String.fromCharCode.apply(null,i)}return btoa(r)}Gl=function(e){const t=Sf(e);if(!t)throw new Error("Vendor contract not found.");if(!window.jspdf||!window.jspdf.jsPDF)throw new Error("PDF library not loaded yet. Try again.");const{p:n,v:r,vdir:o}=t,{jsPDF:i}=window.jspdf,a=new i({unit:"pt",format:"tabloid"}),c=a.internal.pageSize.getWidth(),l=a.internal.pageSize.getHeight(),d=30,u=30,m=c-d-u,p=[12,27,46],g=[26,107,196],b=[107,106,100],y=[26,25,23],w=[224,221,213];let f=44;const v=function(){a.addPage(),f=44},x=function(Q){f+(Q||24)>l-42&&v()},S=function(Q,be,pe){const Be=pe||y;a.setFont("helvetica",be||"normal"),a.setFontSize(Q),a.setTextColor(Be[0],Be[1],Be[2])},C=function(Q,be,pe,Be,Pt,od,ho){const wr=String(Q||"").trim();if(!wr)return 0;S(Be||10,Pt||"normal",od||y);const Bn=ho||13,un=wr.split(`
`);let yt=0;return un.forEach(function(bt,Cr){const yo=bt.trim();(yo?a.splitTextToSize(yo,pe):[""]).forEach(function(bo){x(Bn+4),a.text(String(bo||""),be,f),f+=Bn,yt+=Bn}),Cr<un.length-1&&(f+=3,yt+=3)}),yt},E=function(Q,be){f+=0,x(8),a.setDrawColor(p[0],p[1],p[2]),a.setLineWidth(1.2),a.line(d,f,c-u,f),f+=be},P=function(Q){x(26),S(12,"bold",p),a.text(String(Q||"").toUpperCase(),d,f),f+=12,a.setDrawColor(p[0],p[1],p[2]),a.setLineWidth(1),a.line(d,f,c-u,f),f+=20},$=function(Q,be){x(22);const pe=d,Be=d+210;S(11,"bold",y),a.text(Q,pe,f);const Pt=Q==="Contract Value";S(Pt?18:11.5,Pt?"bold":"normal",Pt?p:y),a.text(String(be||"-"),Be,f),f+=24},A=function(Q,be,pe,Be,Pt){const ho=(Pt||[]).filter(Boolean).map(function(yt){return String(yt)});let wr=44;ho.forEach(function(yt,bt){const Cr=a.splitTextToSize(yt,pe-36);wr+=Cr.length*(bt===0?15:13)+(bt===0?4:2)});const Bn=Math.max(92,wr);a.setDrawColor(w[0],w[1],w[2]),a.roundedRect(Q,be,pe,Bn,6,6,"S");let un=be+22;return S(9,"bold",b),a.text(String(Be||"").toUpperCase(),Q+18,un),un+=22,ho.forEach(function(yt,bt){const Cr=bt===0?16:11,yo=bt===0?"bold":"normal",id=String(yt).includes("@")?g:bt===0?p:b;S(Cr,yo,id);const bo=a.splitTextToSize(yt,pe-18*2);a.text(bo,Q+18,un),un+=bo.length*(bt===0?17:15)+(bt===0?6:3)}),Bn},k=ae(n),D=n.permit||"-",z=r.address||(o==null?void 0:o.address)||"",M=r.vendorEmail||(o==null?void 0:o.email)||"",W=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});x(100),S(34,"bold",p),a.text("LIVI",d,f);const N=a.getTextWidth("LIVI");S(34,"bold",g),a.text("O",d+N,f),S(12,"normal",b),a.text("Building Systems",d,f+28);const F=c-u;S(11,"normal",b),a.text("Project",F,f,{align:"right"}),S(18,"bold",y),a.text(n.name||"Project",F,f+22,{align:"right"}),S(11,"normal",b);const O=a.splitTextToSize(k,260);a.text(O,F,f+40,{align:"right"}),a.text("Permit: "+D,F,f+62+(O.length-1)*13,{align:"right"}),f+=84,E(0,34),S(24,"bold",p),a.text("SUBCONTRACT AGREEMENT",c/2,f,{align:"center"}),f+=26,S(12,"normal",b),a.text("Contract No: "+(r.contractNo||"-")+"  •  Date: "+W,c/2,f,{align:"center"}),f+=38;const I=18,U=(m-I)/2,q=[se,K,"Project: "+(n.name||""),k],te=[r.vendor||"Subcontractor",z,M],oe=f,Pe=A(d,oe,U,"Owner / General Contractor",q),De=A(d+U+I,oe,U,"Subcontractor",te);f=oe+Math.max(Pe,De)+32,P("1. Contract Details"),$("Contract Type",r.contractType||"-"),$("Contract Value",R(r.amount||0)),$("Start Date",r.startDate||"-"),$("End Date",r.endDate||"-"),$("CBC / Code Reference","CBC 2022 · CALGreen 2022 · Title 24"),f+=10,P("2. Scope of Work"),C(r.scope||"No scope provided.",d,m,11.5,"normal",y,18),f+=16,r.exclusions&&(P("3. Exclusions"),C(r.exclusions,d,m,11.5,"normal",y,18),f+=16);const ht=r.exclusions?"4":"3";if(P(ht+". Payment Schedule"),(r.milestones||[]).length){const Q=d,be=m,pe=[Q,Q+320,Q+455,Q+590];x(26),a.setFillColor(p[0],p[1],p[2]),a.rect(Q,f-12,be,22,"F"),S(10,"bold",[255,255,255]),a.text("PAYMENT MILESTONE",pe[0]+8,f+2),a.text("AMOUNT",pe[1]+8,f+2),a.text("% OF CONTRACT",pe[2]+8,f+2),a.text("DUE DATE",pe[3]+8,f+2),f+=22,(r.milestones||[]).forEach(function(Be,Pt){x(24),Pt%2===1&&(a.setFillColor(247,246,242),a.rect(Q,f-12,be,24,"F")),S(10.5,"normal",y),a.text(a.splitTextToSize(String(Be.name||"Milestone"),pe[1]-pe[0]-16),pe[0]+8,f+2),a.text(R(Be.amount||0),pe[1]+8,f+2),a.text(r.amount?Math.round(Number(Be.amount||0)/Number(r.amount)*100)+"%":"-",pe[2]+8,f+2),a.text(Be.dueDate?J(Be.dueDate):"-",pe[3]+8,f+2),f+=24})}else C("No payment milestones specified.",d,m,11,"italic",b,18),f+=8;r.notes&&(P("Special Conditions"),C(r.notes,d,m,11.5,"normal",y,18),f+=12),P("General Terms"),C(`1. All work shall comply with applicable codes including CBC 2022, CPC 2022, CEC 2022, CALGreen 2022, and Title 24.
2. Subcontractor shall carry all required insurance including general liability and workers compensation.
3. Changes to scope require written change order approval before proceeding.
4. Payment is subject to receipt of lien waivers for milestone payments.
5. California law governs this agreement.`,d,m,11,"normal",b,17),f+=16,x(82);const ge=f+24;a.setDrawColor(120,120,120),a.setLineWidth(.8),a.line(d,ge,d+220,ge),a.line(c-u-220,ge,c-u,ge),S(9,"normal",b),a.text("Owner / General Contractor",d,ge+14),a.text("Subcontractor Signature",c-u-220,ge+14),S(11,"bold",y),a.text(se,d,ge+32),a.text(r.vendor||"Subcontractor",c-u-220,ge+32);const Vt=a.output("datauristring"),rd=String(Vt).split(",")[1]||"",ea=String(r.vendor||"vendor-contract").replace(/[^a-z0-9-_]+/gi,"_"),xo=String(n.name||"project").replace(/[^a-z0-9-_]+/gi,"_");return{filename:`${ea}-${xo}-contract.pdf`,content:rd,contentType:"application/pdf"}};async function Xx(e){return[Gl(e)]}Ql=async function(){const e=h("cemail-to").value.trim(),t=h("cemail-subject").value.trim(),n=h("cemail-body").value.trim(),r=h("cemail-vid").value.trim();if(!e){j("Recipient email is required");return}let o=[];try{r&&(o=await Xx(r))}catch(i){j("Could not attach contract PDF: "+i.message,"error");return}hr({to:e,subject:t,message:n,attachments:o}).then(function(){Ki(),j("Contract email sent with PDF attachment")}).catch(function(i){console.error("Email error:",i),j("Email send failed: "+i.message,"error")})};function Zx(e){const t=B();!t||!confirm("Delete this vendor contract?")||(t.vendors=(t.vendors||[]).filter(n=>n.id!==e),Z(),ne(),j("🗑 Deleted"))}function Jl(){const e=B();if(!e)return;const t=e.checklist||[];h("ct-chk").textContent=t.length,h("chk-total").textContent=t.length,h("chk-done").textContent=t.filter(o=>o.status==="done").length,h("chk-prog").textContent=t.filter(o=>o.status==="inprogress").length,h("chk-open").textContent=t.filter(o=>!o.status||o.status==="open").length;const n=h("chk-content");if(!n)return;if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">☑</div>No checklist items yet. Click + Add Item to start.</div>';return}const r={};t.forEach(o=>{const i=o.category||"General";r[i]||(r[i]=[]),r[i].push(o)}),n.innerHTML=Object.entries(r).map(([o,i])=>{const a=i.filter(d=>d.status==="done").length,c=i.length?Math.round(a/i.length*100):0,l=i.map((d,u)=>{const m=u%2===0?"#fff":"var(--bg)",p=[["open","Open","var(--red)"],["inprogress","In Progress","var(--amber)"],["done","Done","var(--green)"]],g=(d.comments||[]).slice(-1)[0],b=(d.comments||[]).length;return`<tr style="background:${m}">
        <td style="padding:8px 12px">
          <div style="display:flex;align-items:flex-start;gap:8px">
            <input type="checkbox" ${d.status==="done"?"checked":""} onchange="chkToggle('${d.id}',this.checked)" style="margin-top:2px;width:15px;height:15px;cursor:pointer;accent-color:var(--green)"/>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:${d.status==="done"?"400":"600"};color:${d.status==="done"?"var(--muted)":"var(--text)"};text-decoration:${d.status==="done"?"line-through":"none"}">${d.name}</div>
              ${d.notes?`<div style="font-size:10px;color:var(--muted);margin-top:2px;font-style:italic">${d.notes}</div>`:""}
              ${g?`<div style="margin-top:5px;background:var(--blue-l);border-left:3px solid var(--blue-m);border-radius:0 4px 4px 0;padding:4px 8px">
                <div style="display:flex;justify-content:space-between;margin-bottom:2px"><span style="font-size:9px;font-weight:600;color:var(--blue)">${g.author}</span><span style="font-size:9px;color:var(--muted)">${g.date}</span></div>
                <div style="font-size:10px;color:var(--text)">${g.text}</div>
                ${(g.files||[]).length?`<div style="margin-top:3px;display:flex;gap:3px;flex-wrap:wrap">${(g.files||[]).map(y=>`<span style="background:#fff;border:1px solid #B0D0F0;border-radius:3px;padding:1px 6px;font-size:9px;color:var(--blue)">📎 ${y.name}</span>`).join("")}</div>`:""}
              </div>`:""}
              ${b>1?`<button onclick="chkShowComments('${d.id}')" style="margin-top:4px;background:none;border:none;font-size:9px;color:var(--blue);cursor:pointer;padding:0;text-decoration:underline">View all ${b} comments ▾</button>`:""}
            </div>
          </div>
        </td>
        <td style="padding:8px 10px">
          <select onchange="chkSetStatus('${d.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;color:var(--text);cursor:pointer">
            ${p.map(([y,w])=>`<option value="${y}" ${d.status===y||!d.status&&y==="open"?"selected":""}>${w}</option>`).join("")}
          </select>
        </td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${d.dueDate?J(d.dueDate):"—"}</td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${d.assignee||"—"}</td>
        <td style="padding:8px 10px;font-size:9px">
          <span style="background:${d.priority==="high"?"var(--red-l)":d.priority==="medium"?"var(--amber-l)":"var(--bg)"};color:${d.priority==="high"?"var(--red)":d.priority==="medium"?"var(--amber)":"var(--muted)"};padding:2px 7px;border-radius:4px;font-weight:700">${d.priority?d.priority.charAt(0).toUpperCase()+d.priority.slice(1):"Low"}</span>
        </td>
        <td style="padding:8px 10px">
          <div style="display:flex;flex-direction:column;gap:3px">
            <button class="btn btn-blue btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('chklist-item','${d.id}')">💬 Comment</button>
            <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('chklist-item','${d.id}')">✏ Edit</button>
            <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 5px" onclick="delChkItem('${d.id}')">🗑 Del</button>
          </div>
        </td>
      </tr>`}).join("");return`<div class="panel" style="margin-bottom:14px">
      <div class="ph" style="background:var(--navy)">
        <span class="ph-title" style="color:#fff">${o}</span>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:80px;height:5px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${c}%;background:${c===100?"#9FE1CB":"#85B7EB"};border-radius:3px"></div>
            </div>
            <span style="font-size:10px;color:#8AAAC8">${a}/${i.length} · ${c}%</span>
          </div>
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <thead><tr style="background:var(--bg)">
          <th style="padding:6px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:38%">Item</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:14%">Status</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Due Date</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:14%">Assignee</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Priority</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:10%">Act.</th>
        </tr></thead>
        <tbody>${l}</tbody>
      </table>
    </div>`}).join("")}function eh(e){const t=B();!t||!confirm("Delete this item?")||(t.checklist=(t.checklist||[]).filter(n=>n.id!==e),Z(),ne(),j("🗑 Deleted"))}function Kl(){const e=B();if(!e)return;const t=e.qaqcLog||[];h("ct-qaqc").textContent=t.length,h("qa-total").textContent=t.length,h("qa-ncr").textContent=t.filter(r=>r.type==="ncr"&&r.status!=="closed").length,h("qa-closed").textContent=t.filter(r=>r.status==="closed").length,h("qa-obs").textContent=t.filter(r=>r.type==="observation").length,t.forEach(r=>G(r.files||[]));const n=h("qa-content");if(n){if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🔍</div>No QA/QC entries yet. Click + Add QA/QC Entry to start.</div>';return}n.innerHTML=`<div class="panel">
    <table style="width:100%;border-collapse:collapse;table-layout:fixed">
      <thead><tr style="background:var(--navy)">
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:8%">Ref #</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Type</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:22%">Description</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:12%">Location</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Raised By</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Date</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8AAAC8;text-align:left;width:10%">Status</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8AAAC8;text-align:left;width:10%">Attachments</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:8%">Act.</th>
      </tr></thead>
      <tbody>
        ${t.map((r,o)=>{const i=o%2===0?"#fff":"var(--bg)",a={ncr:"var(--red)",observation:"var(--amber)",rfi:"var(--blue)",punch:"var(--purple)",other:"var(--muted)"},c=r.type==="ncr"?"NCR":r.type==="rfi"?"RFI":r.type?r.type.charAt(0).toUpperCase()+r.type.slice(1):"Other",l=(r.files||[]).length?`<div style="display:flex;flex-direction:column;gap:2px">${(r.files||[]).map(d=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 5px"><span style="font-size:9px">${dt(d.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60px">${d.name}</span><button class="a-dl" style="font-size:8px;padding:1px 3px" onclick="dlFile('${d.id}')">⬇</button></div>`).join("")}<button class="btn btn-ghost btn-xs" style="font-size:8px;padding:1px 5px;margin-top:1px" onclick="openModal('qafiles','${r.id}')">+</button></div>`:`<button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qafiles','${r.id}')">📎 Attach</button>`;return`<tr style="background:${i}">
            <td style="padding:8px 12px;font-size:11px;font-weight:700;color:var(--navy)">${r.refNo||"—"}</td>
            <td style="padding:8px 10px">
              <span style="background:${a[r.type]||"#666"};color:#fff;padding:2px 7px;border-radius:4px;font-size:9px;font-weight:700">${c}</span>
              ${r.category?`<div style="font-size:9px;color:var(--muted);margin-top:3px">${r.category}</div>`:""}
            </td>
            <td style="padding:8px 10px;font-size:11px">${r.description||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${r.location||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${r.raisedBy||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${r.date?J(r.date):"—"}</td>
            <td style="padding:8px 10px">
              <select onchange="qaSetStatus('${r.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;cursor:pointer">
                ${[["open","Open"],["inprogress","In Progress"],["resolved","Resolved"],["closed","Closed"]].map(([d,u])=>`<option value="${d}" ${r.status===d?"selected":""}>${u}</option>`).join("")}
              </select>
            </td>
            <td style="padding:6px 8px">${l}</td>
            <td style="padding:8px 10px">
              <div style="display:flex;flex-direction:column;gap:3px">
                <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qaqc-item','${r.id}')">✏</button>
                <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 5px" onclick="delQAItem('${r.id}')">🗑</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`}}function th(e){const t=B();!t||!confirm("Delete this entry?")||(t.qaqcLog=(t.qaqcLog||[]).filter(n=>n.id!==e),Z(),ne(),j("🗑 Deleted"))}function nh(e){const t=e.files[0];if(!t)return;const n=new FileReader;n.onload=r=>{try{const o=JSON.parse(r.target.result);if(!o.name)throw new Error("Invalid");o.id="proj_"+ze(),["works","milestones","quotes","plans","inspections"].forEach(i=>{o[i]||(o[i]=[])}),L.projects.push(o),L.activeId=o.id,Z(),ne(),j("✓ Imported: "+o.name),xr("dashboard")}catch{j("⚠ Invalid JSON file")}},n.readAsText(t)}function kf(){var i;const e=(((i=h("f-city"))==null?void 0:i.value)||"").trim().toLowerCase(),t=Sg[e],n=h("f-county"),r=h("county-ok"),o=h("city-ok");if(t){n&&(n.value=t.county),r&&(r.textContent="✓ Auto-filled"),o&&(o.textContent="✓ Recognized");const a=h("f-state");a&&t.state&&(a.value=t.state);const c=h("f-zip");c&&!c.value&&t.zip&&(c.value=t.zip)}else r&&(r.textContent=e?"⚠ Not in database — enter county manually":""),o&&(o.textContent="")}function rh(e,t){t.closest(".fr").querySelectorAll("label").forEach(r=>{r.style.borderColor="var(--border)",r.style.background="#fff"}),t.style.borderColor="var(--blue-m)",t.style.background="var(--blue-l)";const n=document.getElementById("f-status");n&&(n.value=e)}function oh(e,t){document.querySelectorAll(".cswatch").forEach(n=>n.classList.remove("sel")),t.classList.add("sel")}const ih="livio_users_v1",Xl="livio_session_v2",ah=[{id:"u1",username:"admin",password:"livio2026",role:"Admin",email:"admin@liviobuilding.com"},{id:"u2",username:"manager",password:"manager123",role:"Manager",email:"manager@liviobuilding.com"}],sh=["Admin","Manager","Viewer","Contractor","Site Supervisor","Project Engineer","Owner"],lh="livio_roles_v1",dh="livio_perms_v1",hn=[{id:"projects",label:"All Projects"},{id:"dashboard",label:"Dashboard"},{id:"works",label:"Works at Site"},{id:"milestones",label:"Milestones"},{id:"quotes",label:"Quotes"},{id:"plans",label:"Plans & Docs"},{id:"inspections",label:"Inspections"},{id:"vendors",label:"Vendor Contracts"},{id:"invoices",label:"Invoices"},{id:"payments",label:"Payments"},{id:"checklist",label:"Checklist"},{id:"qaqc",label:"QA/QC"},{id:"compliance",label:"Compliance"},{id:"export",label:"Export"},{id:"momentum",label:"Momentum"},{id:"daily-tracker",label:"Daily Tracker"},{id:"client-contract",label:"Client Contract"},{id:"client-invoice",label:"Client Invoice"},{id:"vendor-directory",label:"Vendor Directory"}];function ch(){return JSON.parse(JSON.stringify(ah))}function ph(){return[...sh]}function _o(e,t){try{if(typeof localStorage>"u")return t;const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function ji(e){const t=(Array.isArray(e)?e:[]).map(n=>String(n||"").trim()).filter(Boolean);return t.length?t:ph()}function $i(e){const t=(Array.isArray(e)?e:[]).map((n,r)=>df(n,r)).filter(n=>n.username);return t.length?t:ch()}function Zl(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function ed(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function Rt(){if(!L||typeof L!="object")return;let e=!1;if(!Array.isArray(L.users)||!L.users.length?(L.users=$i(_o(ih,[])),e=!0):L.users=$i(L.users),!Array.isArray(L.roles)||!L.roles.length?(L.roles=ji(_o(lh,[])),e=!0):L.roles=ji(L.roles),(!L.perms||typeof L.perms!="object"||Array.isArray(L.perms))&&(L.perms=Zl(_o(dh,{})),e=!0),(!L.passwordResets||typeof L.passwordResets!="object"||Array.isArray(L.passwordResets))&&(L.passwordResets=ed(_o(Eh,{})),e=!0),e)try{Z()}catch(t){console.warn("Shared admin state migration failed:",(t==null?void 0:t.message)||t)}}function Xi(){return Rt(),Zl(L==null?void 0:L.perms)}function uh(e){Rt(),L.perms=Zl(e),Z()}function fh(e){if(!e||e.role==="Admin")return hn.map(o=>o.id);const n=Xi()[e.id];if(!n)return hn.map(o=>o.id);if(Array.isArray(n))return n.length?n:hn.map(o=>o.id);const r=Object.entries(n).filter(([o,i])=>i==="full"||i==="view").map(([o])=>o);return r.length?r:hn.map(o=>o.id)}function Ef(e,t){if(!e||e.role==="Admin")return"full";const r=Xi()[e.id];if(!r)return"full";if(Array.isArray(r))return r.includes(t)?"full":"none";const o=r[t];return o||"full"}function mh(e){const t=Ot();return!t||t.role==="Admin"?!0:Ef(t,e)!=="none"}function zs(e){const t=Ot();return!t||t.role==="Admin"?!1:t.role==="Viewer"?!0:Ef(t,e)==="view"}function vh(e){const t=Ot();if(!t||t.role!=="Admin"){j("⚠ Admin only");return}const r=Tn().find(l=>l.id===e);if(!r||r.role==="Admin"){j("Admin users always have full access");return}const i=Xi()[e]||{},a=Array.isArray(i)?i.reduce((l,d)=>(l[d]="full",l),{}):i;h("modal-title").textContent="Page Access — "+r.username+" ("+r.role+")",h("modal-body").innerHTML=`
    <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:var(--blue)">
      Set access level for each page. <strong>Full</strong> = edit &amp; view. <strong>View Only</strong> = read-only. <strong>No Access</strong> = page hidden.
    </div>
    <div style="display:flex;gap:6px;margin-bottom:10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">
      <div style="flex:2;color:var(--muted)">Page</div>
      <div style="flex:1;text-align:center;color:var(--green)">Full</div>
      <div style="flex:1;text-align:center;color:var(--amber)">View Only</div>
      <div style="flex:1;text-align:center;color:var(--red)">No Access</div>
    </div>
    ${hn.map(l=>{const d=a[l.id]||"none";return`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border:1px solid var(--border);border-radius:6px;margin-bottom:5px;background:${d==="full"?"var(--green-l)":d==="view"?"var(--amber-l)":"#fff"}">
        <div style="flex:2;font-size:11px;font-weight:500">${l.label}</div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${l.id}" value="full" ${d==="full"?"checked":""}
            onchange="acUpdate('${l.id}','full',this)" style="accent-color:var(--green);cursor:pointer"/>
        </div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${l.id}" value="view" ${d==="view"?"checked":""}
            onchange="acUpdate('${l.id}','view',this)" style="accent-color:var(--amber);cursor:pointer"/>
        </div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${l.id}" value="none" ${d==="none"?"checked":""}
            onchange="acUpdate('${l.id}','none',this)" style="accent-color:var(--red);cursor:pointer"/>
        </div>
      </div>`}).join("")}
    <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap">
      <button onclick="acSetAll('full')" class="btn btn-ghost btn-sm" style="font-size:10px">✓ All Full</button>
      <button onclick="acSetAll('view')" class="btn btn-ghost btn-sm" style="font-size:10px">👁 All View</button>
      <button onclick="acSetAll('none')" class="btn btn-ghost btn-sm" style="font-size:10px">☐ None</button>
      <button onclick="saveAccessControl('${e}')" class="btn btn-navy btn-sm" style="font-size:11px;margin-left:auto">💾 Save Access</button>
      <button onclick="closeModal();showManageUsers();" class="btn btn-ghost btn-sm" style="font-size:11px">← Back</button>
    </div>`,h("mo").classList.add("open"),X="access-ctrl-"+e;const c=document.querySelector(".modal-foot");c&&(c.style.display="none")}let Ai={};function gh(e,t,n){Ai[e]=t;const r=n.closest('div[style*="border:1px solid"]');r&&(r.style.background=t==="full"?"var(--green-l)":t==="view"?"var(--amber-l)":"#fff")}function xh(e){hn.forEach(t=>{Ai[t.id]=e,document.querySelectorAll(`input[name="pg_${t.id}"]`).forEach(n=>{n.checked=n.value===e})}),document.querySelectorAll('#modal-body div[style*="border:1px solid"]').forEach(t=>{t.style.background=e==="full"?"var(--green-l)":e==="view"?"var(--amber-l)":"#fff"})}function hh(e){const t={};hn.forEach(r=>{const o=document.querySelector(`input[name="pg_${r.id}"]:checked`);t[r.id]=o?o.value:"none"}),Object.assign(t,Ai);const n=Xi();n[e]=t,uh(n),Ai={},Gi(),he(),j("✓ Page access saved for "+e),Df()}function fr(){return Rt(),ji(L==null?void 0:L.roles)}function Pf(e){Rt(),L.roles=ji(e),Z()}function td(){const e=document.getElementById("nu-role");if(!e)return;const t=fr(),n=e.value||"Manager";e.innerHTML=t.map(r=>`<option value="${r}"${r===n?" selected":""}>${r}</option>`).join("")}function nd(){const e=fr();h("modal-title").textContent="Manage Roles",h("modal-body").innerHTML=`
    <div style="margin-bottom:12px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Current Roles</div>
      <div id="roles-chips" style="display:flex;flex-wrap:wrap;gap:6px">
        ${e.map(n=>`
          <div style="display:flex;align-items:center;gap:0;border:1px solid var(--border);border-radius:20px;overflow:hidden;background:#fff">
            <span style="padding:4px 12px;font-size:11px;font-weight:500">${n}</span>
            ${n!=="Admin"?`<button onclick="deleteRole('${n}')" style="padding:4px 8px;background:none;border:none;border-left:1px solid var(--border);color:var(--muted);cursor:pointer;font-size:13px" title="Remove role">×</button>`:'<span style="padding:4px 8px;font-size:10px;color:var(--muted)">🔒</span>'}
          </div>`).join("")}
      </div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:12px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Add New Role</div>
      <div style="display:flex;gap:8px">
        <input class="fi" id="new-role-input" placeholder="e.g. Inspector, Foreman, Owner…" style="flex:1"
          onkeydown="if(event.key==='Enter')addRole()"/>
        <button onclick="addRole()" class="btn btn-navy" style="font-size:12px">+ Add</button>
      </div>
    </div>`,h("mo").classList.add("open"),X="manage-roles";const t=document.querySelector(".modal-foot");t&&(t.style.display="none"),setTimeout(()=>{var n;return(n=document.getElementById("new-role-input"))==null?void 0:n.focus()},100)}function yh(){const e=document.getElementById("new-role-input"),t=((e==null?void 0:e.value)||"").trim();if(!t){j("⚠ Enter a role name");return}const n=fr();if(n.find(r=>r.toLowerCase()===t.toLowerCase())){j("⚠ Role already exists");return}n.push(t),Pf(n),td(),j('✓ Role "'+t+'" added'),nd()}function bh(e){if(!confirm('Remove role "'+e+'"?'))return;const n=Tn().find(o=>o.role===e);if(n){j('⚠ Cannot delete — role is assigned to user "'+n.username+'"');return}const r=fr().filter(o=>o!==e);Pf(r),td(),j('🗑 Role "'+e+'" removed'),nd()}function Tn(){return Rt(),$i(L==null?void 0:L.users)}function jf(e){Rt(),L.users=$i(e),Z()}function wh(){const e=document.getElementById("sidebar"),t=document.getElementById("sb-overlay");e.classList.toggle("mob-open"),t.classList.toggle("show")}function $f(){var e,t;(e=document.getElementById("sidebar"))==null||e.classList.remove("mob-open"),(t=document.getElementById("sb-overlay"))==null||t.classList.remove("show")}document.querySelectorAll(".sb-nav a").forEach(e=>e.addEventListener("click",()=>{window.innerWidth<=768&&$f()}));function Af(){const e=document.getElementById("mob-menu-btn");e&&(e.style.display=window.innerWidth<=768?"flex":"none")}window.addEventListener("resize",Af);Af();function Ch(){var a,c;const e=(((a=document.getElementById("login-user"))==null?void 0:a.value)||"").trim(),t=(((c=document.getElementById("login-pass"))==null?void 0:c.value)||"").trim(),n=document.getElementById("login-error"),r=document.querySelector('#login-screen button[onclick="doLogin()"]');if(!e||!t){n&&(n.style.display="",n.textContent="Please enter username and password.");return}r&&(r.textContent="Signing in…",r.disabled=!0);const i=Tn().find(l=>l.username===e&&l.password===t);if(i){sessionStorage.setItem(Xl,JSON.stringify({id:i.id,username:i.username,role:i.role}));const l=document.getElementById("login-screen");l&&(l.style.display="none"),n&&(n.style.display="none");const d=document.getElementById("sb-user-label");d&&(d.textContent=i.username+" ("+i.role+")"),document.body.classList.add("logged-in"),Gi(),Nl(),xr("projects"),setTimeout(()=>{Il(),zl(),Ll(),Tl(),Bl(),Ml(),Yi(),Vl(),ql(),Jl(),Kl(),Fl(),_l(),br()},300)}else{r&&(r.textContent="Sign In →",r.disabled=!1),n&&(n.style.display="",n.textContent="Incorrect username or password.");const l=document.getElementById("login-pass");l&&(l.value="",l.focus())}}function Ot(){try{const e=sessionStorage.getItem(Xl);return e?JSON.parse(e):null}catch{return null}}function Sh(){sessionStorage.removeItem(Xl),document.body.classList.remove("logged-in");const e=document.getElementById("login-screen");e&&(e.style.display="flex");const t=document.getElementById("login-user"),n=document.getElementById("login-pass"),r=document.getElementById("sb-user-label");t&&(t.value="",setTimeout(()=>t.focus(),100)),n&&(n.value=""),r&&(r.textContent="");const o=document.getElementById("login-error");o&&(o.style.display="none")}function kh(){const e=document.getElementById("login-pass");e&&(e.type=e.type==="password"?"text":"password")}function Df(){const e=Ot();if(!e||e.role!=="Admin"){j("⚠ Only Admin can manage users");return}const n=Tn().map(o=>{const i=fr().map(a=>`<option value="${a}"${o.role===a?" selected":""}>${a}</option>`).join("");return`<tr style="background:#fff;border-bottom:1px solid var(--border)">
      <td style="padding:7px 10px">
        <input value="${o.username}" onchange="quickEditUser('${o.id}','username',this.value)"
          style="font-size:12px;font-weight:600;border:1px solid transparent;border-radius:4px;padding:3px 6px;width:100%;background:transparent;outline:none"
          onfocus="this.style.borderColor='var(--blue)';this.style.background='#fff'" onblur="this.style.borderColor='transparent';this.style.background='transparent'"/>
      </td>
      <td style="padding:7px 10px">
        <select onchange="quickEditUser('${o.id}','role',this.value)"
          style="font-size:11px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;background:#fff;color:var(--text);cursor:pointer;width:100%">
          ${i}
        </select>
      </td>
      <td style="padding:7px 10px">
        <button onclick="editUser('${o.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;white-space:nowrap">🔑 Password</button>
      </td>
      <td style="padding:7px 10px">
        ${o.role!=="Admin"?`<button onclick="showAccessControl('${o.id}')" class="btn btn-blue btn-xs" style="font-size:9px">🔐 Pages</button>`:'<span style="font-size:9px;color:var(--blue);font-weight:700">Full</span>'}
      </td>
      <td style="padding:7px 10px">
        ${o.username!==e.username?`<button onclick="deleteUser('${o.id}')" class="btn btn-red btn-xs" style="font-size:9px">🗑</button>`:'<span style="font-size:10px;color:var(--muted)">You</span>'}
      </td>
    </tr>`}).join("");h("modal-title").textContent="Manage Users",h("modal-body").innerHTML=`
    <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
      <thead><tr style="background:var(--navy)">
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Username</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Role</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Password</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Pages</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Del</th>
      </tr></thead>
      <tbody>${n}</tbody>
    </table>
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:10px">+ Add New User</div>
      <div class="fg">
        <div class="fr"><label class="fl">Username *</label><input class="fi" id="nu-user" placeholder="e.g. john.smith"/></div>
        <div class="fr"><label class="fl">Password *</label><input class="fi" id="nu-pass" type="password" placeholder="Min 4 characters"/></div>
      </div>
      <div class="fr" style="margin-top:6px"><label class="fl">Email Address (for password reset)</label><input class="fi" id="nu-email" type="email" placeholder="user@company.com"/></div>
      <div class="fg" style="margin-top:6px">
        <div class="fr"><label class="fl">Role</label>
          <div style="display:flex;gap:6px">
            <select class="fs" id="nu-role" style="flex:1">
              ${fr().map(o=>`<option value="${o}"${o==="Manager"?" selected":""}>${o}</option>`).join("")}
            </select>
            <button type="button" onclick="showManageRoles()" class="btn btn-ghost btn-xs" style="flex-shrink:0;font-size:10px" title="Add/edit roles">⚙ Roles</button>
          </div>
        </div>
        <div class="fr" style="align-items:flex-end">
          <button onclick="addNewUser()" class="btn btn-navy" style="width:100%">+ Add User</button>
        </div>
      </div>
    </div>`,h("mo").classList.add("open"),X="manage-users",td();const r=document.querySelector(".modal-foot");r&&(r.style.display="none")}const Eh="livio_reset_v1";function Nf(){return Rt(),ed(L==null?void 0:L.passwordResets)}function If(e){Rt(),L.passwordResets=ed(e),Z()}Rt();function Ph(){const e=document.getElementById("forgot-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("forgot-user");t&&t.focus()}function zf(){const e=document.getElementById("forgot-pass-screen");e&&(e.style.display="none"),["forgot-user","forgot-email"].forEach(r=>{const o=document.getElementById(r);o&&(o.value="")});const t=document.getElementById("forgot-error");t&&(t.style.display="none");const n=document.getElementById("forgot-success");n&&(n.style.display="none")}function jh(){var g,b;const e=(((g=document.getElementById("forgot-user"))==null?void 0:g.value)||"").trim(),t=(((b=document.getElementById("forgot-email"))==null?void 0:b.value)||"").trim(),n=document.getElementById("forgot-error"),r=document.getElementById("forgot-success");if(!e||!t){n&&(n.style.display="",n.textContent="Please enter both username and email.");return}if(!Tn().find(y=>y.username===e&&(y.email||"").toLowerCase()===t.toLowerCase())){n&&(n.style.display="",n.textContent="No account found with that username and email combination.");return}const a=String(Math.floor(1e5+Math.random()*9e5)),c=Date.now()+30*60*1e3,l=Nf();l[e]={code:a,expiry:c},If(l);const d=encodeURIComponent("Livio Building Systems — Password Reset"),u=["Hello "+e+",","","You requested a password reset for your Livio Building Systems account.","","Your reset code is: "+a,"","This code is valid for 30 minutes.","","Steps to reset: 1. Open the Livio Building Systems app  2. Click Forgot Password?  3. Click I have a reset code  4. Enter the code and your new password","","If you did not request this, please ignore this email.","","— Livio Building Systems"],m=encodeURIComponent(u.join(`
`));window.open("mailto:"+t+"?subject="+d+"&body="+m,"_self"),n&&(n.style.display="none"),r&&(r.style.display="",r.innerHTML="✓ Email client opened! Send the email to <strong>"+t+'</strong>. <br><span style="font-size:10px">Then come back and click <em>"I have a reset code"</em> below.</span>');const p=document.getElementById("forgot-reset-btn");p&&(p.style.display="")}function $h(){var n;zf();const e=document.getElementById("reset-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("reset-user");t&&(t.value=((n=document.getElementById("forgot-user"))==null?void 0:n.value)||"",t.focus())}function Lf(){const e=document.getElementById("reset-pass-screen");e&&(e.style.display="none"),["reset-user","reset-code","reset-new","reset-conf"].forEach(n=>{const r=document.getElementById(n);r&&(r.value="")});const t=document.getElementById("reset-error");t&&(t.style.display="none")}function Ah(){var u,m,p,g;const e=(((u=document.getElementById("reset-user"))==null?void 0:u.value)||"").trim(),t=(((m=document.getElementById("reset-code"))==null?void 0:m.value)||"").trim(),n=(((p=document.getElementById("reset-new"))==null?void 0:p.value)||"").trim(),r=(((g=document.getElementById("reset-conf"))==null?void 0:g.value)||"").trim(),o=document.getElementById("reset-error");if(!e||!t||!n||!r){o&&(o.style.display="",o.textContent="All fields are required.");return}const i=Nf(),a=i[e];if(!a||a.code!==t){o&&(o.style.display="",o.textContent="Invalid reset code.");return}if(Date.now()>a.expiry){o&&(o.style.display="",o.textContent="Reset code has expired. Please request a new one.");return}if(n.length<4){o&&(o.style.display="",o.textContent="New password must be at least 4 characters.");return}if(n!==r){o&&(o.style.display="",o.textContent="Passwords do not match.");return}const c=Tn(),l=c.find(b=>b.username===e);if(!l){o&&(o.style.display="",o.textContent="User not found.");return}l.password=n,jf(c),delete i[e],If(i),Lf();const d=document.getElementById("login-screen");d&&(d.style.display="flex"),setTimeout(()=>{const b=document.getElementById("login-user");b&&(b.value=e);const y=document.getElementById("login-error");y&&(y.style.display="",y.style.background="#EDF8E5",y.style.borderColor="#B8DCA0",y.style.color="#2D6A0F",y.textContent="✓ Password reset successfully. Please sign in with your new password.")},100)}function Dh(){const e=document.getElementById("setup-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("setup-user");t&&t.focus()}function Tf(){const e=document.getElementById("setup-pass-screen");e&&(e.style.display="none"),["setup-user","setup-curr","setup-new","setup-conf"].forEach(n=>{const r=document.getElementById(n);r&&(r.value="")});const t=document.getElementById("setup-error");t&&(t.style.display="none")}function Nh(){var c,l,d,u;const e=(((c=document.getElementById("setup-user"))==null?void 0:c.value)||"").trim(),t=(((l=document.getElementById("setup-curr"))==null?void 0:l.value)||"").trim(),n=(((d=document.getElementById("setup-new"))==null?void 0:d.value)||"").trim(),r=(((u=document.getElementById("setup-conf"))==null?void 0:u.value)||"").trim(),o=document.getElementById("setup-error");if(!e||!t||!n||!r){o&&(o.style.display="",o.textContent="All fields are required.");return}const i=Tn(),a=i.find(m=>m.username===e&&m.password===t);if(!a){o&&(o.style.display="",o.textContent="Current username or password is incorrect.");return}if(n.length<4){o&&(o.style.display="",o.textContent="New password must be at least 4 characters.");return}if(n!==r){o&&(o.style.display="",o.textContent="New passwords do not match.");return}a.password=n,jf(i),Tf(),j("✓ Password updated successfully")}const Bf="dt_vendor_directory";let Ic=!1;function Zi(e,t=0){const n=e&&typeof e=="object"?e:{};return{...n,id:n.id||"vdir_"+Math.random().toString(36).slice(2,10)+"_"+t,name:String(n.name||n.contactName||n.contact||"").trim(),company:String(n.company||n.companyName||n.businessName||"").trim(),phone:String(n.phone||n.phoneNumber||n.mobile||"").trim(),email:String(n.email||n.emailAddress||"").trim(),address:String(n.address||n.addr||n.streetAddress||n.location||"").trim(),trade:String(n.trade||n.specialty||n.category||"").trim(),license:String(n.license||n.licenseNo||n.licenseNumber||"").trim(),bank:String(n.bank||n.bankName||"").trim(),acctType:String(n.acctType||n.bankAcctType||n.accountType||"").trim(),acct:String(n.acct||n.bankAccount||n.accountNumber||"").trim(),routing:String(n.routing||n.routingNo||n.routingNumber||"").trim(),zelle:String(n.zelle||n.zelleId||n.zelleEmail||"").trim(),notes:String(n.notes||n.description||"").trim()}}function Ih(){try{const e=JSON.parse(localStorage.getItem(Bf)||"[]");return Array.isArray(e)?e.map((t,n)=>Zi(t,n)):[]}catch{return[]}}function xt(){const e=Array.isArray(L==null?void 0:L.vendorDirectory)?L.vendorDirectory.map((n,r)=>Zi(n,r)):[];if(e.length)return L.vendorDirectory=e,e;const t=Ih();if(!Ic&&t.length&&L){Ic=!0,L.vendorDirectory=t;try{Z()}catch(n){console.warn("Vendor directory migration save failed:",(n==null?void 0:n.message)||n)}return L.vendorDirectory}return t}function Mf(e){const t=(Array.isArray(e)?e:[]).map((n,r)=>Zi(n,r));L&&(L.vendorDirectory=t,Z());try{localStorage.setItem(Bf,JSON.stringify(t))}catch(n){console.warn("Vendor directory local save failed:",(n==null?void 0:n.message)||n)}}function br(){const e=h("vdir-content");if(!e)return;const t=xt();if(!t.length){e.innerHTML='<div class="empty"><div class="empty-ic">📋</div><p>No vendors in directory yet.<br>Click <strong>+ Add Vendor</strong> to start building your subcontractor database.</p></div>';return}e.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px">'+t.map(n=>`<div class="panel" style="overflow:hidden">
      <div class="ph" style="background:var(--navy)">
        <div>
          <div class="ph-title" style="color:#fff;font-size:13px">${n.company||n.name}</div>
          <div style="font-size:10px;color:#8AAAC8;margin-top:2px">${n.name}${n.trade?" · "+n.trade:""}</div>
        </div>
        <div style="display:flex;gap:5px">
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="openVDirModal('${n.id}')">✏</button>
          <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4)" onclick="deleteVDir('${n.id}')">🗑</button>
        </div>
      </div>
      <div style="padding:12px 16px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px">
        ${n.phone?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Phone</div><div style="font-weight:600">${n.phone}</div></div>`:""}
        ${n.email?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Email</div><div style="font-weight:600;color:var(--blue);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n.email}</div></div>`:""}
        ${n.license?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">License #</div><div style="font-weight:600">${n.license}</div></div>`:""}
        ${n.trade?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Trade</div><div style="font-weight:600">${n.trade}</div></div>`:""}
      </div>
      ${n.address?`<div style="padding:0 16px 12px;font-size:11px">
        <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:2px">Address</div>
        <div style="font-weight:600;line-height:1.5;color:var(--text)">${n.address}</div>
      </div>`:""}
      ${n.bank||n.acct||n.routing||n.zelle?`
      <div style="padding:10px 16px;border-top:1px solid var(--border);background:var(--bg)">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:6px">🏦 Payment Info</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px">
          ${n.bank?`<div><div style="font-size:9px;color:var(--muted)">Bank</div><div style="font-weight:600">${n.bank}</div></div>`:""}
          ${n.acctType?`<div><div style="font-size:9px;color:var(--muted)">Type</div><div style="font-weight:600">${n.acctType}</div></div>`:""}
          ${n.acct?`<div><div style="font-size:9px;color:var(--muted)">Account</div><div style="font-weight:600;font-family:monospace">****${n.acct.slice(-4)}</div></div>`:""}
          ${n.routing?`<div><div style="font-size:9px;color:var(--muted)">Routing</div><div style="font-weight:600;font-family:monospace">${n.routing.slice(0,3)}****${n.routing.slice(-2)}</div></div>`:""}
          ${n.zelle?`<div style="grid-column:1/-1"><div style="font-size:9px;color:var(--muted)">Zelle</div><div style="font-weight:600;color:var(--green)">${n.zelle}</div></div>`:""}
        </div>
      </div>`:""}
      ${n.notes?`<div style="padding:8px 16px;border-top:1px solid var(--border);font-size:11px;color:var(--muted)">${n.notes}</div>`:""}
    </div>`).join("")+"</div>"}function zh(e){const t=xt(),n=e?t.find(r=>r.id===e):{};document.getElementById("vdir-modal-title").textContent=e?"Edit Vendor":"Add Vendor to Directory",document.getElementById("vdir-id").value=e||"",document.getElementById("vdir-name").value=n.name||"",document.getElementById("vdir-company").value=n.company||"",document.getElementById("vdir-phone").value=n.phone||"",document.getElementById("vdir-email").value=n.email||"",document.getElementById("vdir-address").value=n.address||"",document.getElementById("vdir-trade").value=n.trade||"",document.getElementById("vdir-license").value=n.license||"",document.getElementById("vdir-bank").value=n.bank||"",document.getElementById("vdir-acct-type").value=n.acctType||"",document.getElementById("vdir-acct").value=n.acct||"",document.getElementById("vdir-routing").value=n.routing||"",document.getElementById("vdir-zelle").value=n.zelle||"",document.getElementById("vdir-notes").value=n.notes||"",document.getElementById("mo-vdir").classList.add("open")}function Ff(){document.getElementById("mo-vdir").classList.remove("open")}function Lh(){const e=document.getElementById("vdir-name").value.trim(),t=document.getElementById("vdir-company").value.trim();if(!e&&!t){j("⚠ Name or Company is required");return}const n=document.getElementById("vdir-id").value||"vdir_"+Math.random().toString(36).slice(2,10),r={id:n,name:e,company:t,phone:document.getElementById("vdir-phone").value.trim(),email:document.getElementById("vdir-email").value.trim(),address:document.getElementById("vdir-address").value.trim(),trade:document.getElementById("vdir-trade").value.trim(),license:document.getElementById("vdir-license").value.trim(),bank:document.getElementById("vdir-bank").value.trim(),acctType:document.getElementById("vdir-acct-type").value,acct:document.getElementById("vdir-acct").value.trim(),routing:document.getElementById("vdir-routing").value.trim(),zelle:document.getElementById("vdir-zelle").value.trim(),notes:document.getElementById("vdir-notes").value.trim()},o=xt(),i=o.findIndex(a=>a.id===n);i>=0?o[i]=r:o.push(r),Mf(o),Ff(),br(),j("✅ Vendor saved to directory!")}function Th(e){if(!confirm("Remove this vendor from directory?"))return;const t=xt().filter(n=>n.id!==e);Mf(t),br(),j("🗑 Vendor removed")}function Bh(){window.nav=xr,window.handleAdd=$g,window.renderAll=ne,window.renderProjects=Nl,window.renderDashboard=Il,window.renderWorks=zl,window.renderMilestones=Ll,window.renderQuotes=Tl,window.renderPlans=Bl,window.renderInspections=Ml,window.renderPayments=Yi,window.renderInvoices=Vl,window.renderVendors=ql,window.renderChecklist=Jl,window.renderQAQC=Kl,window.renderCompliance=Fl,window.renderExport=_l,window.renderVendorDirectory=br,window.renderSettingsPage=vf,window.updateSidebar=Xu,window.buildSidebarNav=Gi,window.saveDB=Z,window.proj=B,window.DB=L,window.switchProj=Ag,window.delProj=Ug,window.openModal=Qi,window.closeModal=he,window.saveModal=Rg,window.cityLookup=kf,window.pickColor=oh,window.selectQuoteStatus=rh,window.delItem=Og,window.dlFile=zn,window.delPlan=Vg,window.openMarkPP=Ig,window.unmarkPP=zg,window.delProgressPayment=Lg,window.unmarkPaid=Tg,window.updatePaidDate=Bg,window.delPayMs=Mg,window.runPaySmartSearch=typeof kc<"u"?kc:()=>{},window.clearPaySmartSearch=typeof Ec<"u"?Ec:()=>{},window.filterPayVendors=typeof Es<"u"?Es:()=>{},window.clearPaySearch=typeof wc<"u"?wc:()=>{},window.showAllPayVendors=typeof bc<"u"?bc:()=>{},window.exportPaymentLedgerPDF=Yg,window.exportPaymentLedgerExcel=Qg,window.exportVCPaymentLedgerPDF=ax,window.exportVCPaymentLedgerExcel=sx,window.exportVendorNameLedgerPDF=Dx,window.exportVendorNameLedgerExcel=Nx,window.exportTradeLedgerPDF=$x,window.exportTradeLedgerExcel=Ax,window.exportAllVendorNameLedgerPDF=Ix,window.exportAllVendorNameLedgerExcel=zx,window.exportAllTradeLedgerPDF=Lx,window.exportAllTradeLedgerExcel=Tx,window.markPaid=Ng,window.openPayInvoice=()=>{},window.openLienWvr=()=>{},window.exportInvoicePDF=Vx,window.exportInvoiceExcel=Ux,window.invSwitchSource=ks,window.invManualVendorChange=nx,window.invUpdateMilestones=rf,window.invMilestoneSelected=rx,window.openInvPayment=ex,window.closeInvPayment=ki,window.saveInvPayment=nf,window.viewFile=Ol,window.addPartialPayment=Mx,window.updatePartialTxn=Fx,window.removePartialPayment=_x,window.viewAllLienFiles=yf,window.downloadAllLienFiles=hf,window.approveInvoice=Xg,window.rejectInvoice=Zg,window.deleteInvPayment=tx,window.unmarkInv=Rx,window.markInvPaid=Bx,window.delInvoice=Ox,window.openLienEmail=typeof Ns<"u"?Ns:()=>{},window.closeLienEmail=typeof Is<"u"?Is:()=>{},window.sendLienEmail=typeof Nc<"u"?Nc:()=>{},window.openLedgerEmail=typeof Ds<"u"?Ds:()=>{},window.closeLedgerEmail=xf,window.sendLedgerEmail=jx,window.copyLedgerToClipboard=Px,window.closeContractEmailModal=Ki,window.sendContractEmailModal=Ql,window.openContractEmailModal=typeof Pi<"u"?Pi:()=>{},window.exportMilestonePDF=Jg,window.exportMilestoneExcel=Kg,window.exportPDF=Wg,window.exportWord=qg,window.exportPPTX=Gg,window.exportJSON=Hg,window.exportAllFiles=tf,window.importJSON=nh,window.openVDirModal=zh,window.closeVDirModal=Ff,window.saveVDir=Lh,window.deleteVDir=Th,window.generateVendorContract=qx,window.sendContractEmail=Jx,window.venDirSelect=bf,window.venAddMilestone=wf,window.venMsChange=Hx,window.venRemoveMilestone=Wx,window.venUpdateMilestonePct=Cf,window.venUpdateTotal=yr,window.delVendor=Zx,window.delChkItem=eh,window.delQAItem=th,window.doLogin=Ch,window.doLogout=Sh,window.toggleLoginPass=kh,window.showForgotPass=Ph,window.closeForgotPass=zf,window.doForgotPass=jh,window.showResetPass=$h,window.closeResetPass=Lf,window.doResetPass=Ah,window.showSetupPass=Dh,window.closeSetupPass=Tf,window.doSetupPass=Nh,window.showManageUsers=Df,window.currentUser=Ot,window.showManageRoles=nd,window.addRole=yh,window.deleteRole=bh,window.showAccessControl=vh,window.acUpdate=gh,window.acSetAll=xh,window.saveAccessControl=hh,window.toggleMobMenu=wh,window.closeMobMenu=$f,window.saveEmailConfig=bx,window.testEmailConfig=Cx,window.clearEmailConfig=wx,window.getApiBase=$n,window.getBackendBase=of,window.__LIVIO_API_BASE=$n(),window.handleFileInput=Rl,window.handleDrop=Fg,window.removePending=_g,window.dropZoneHTML=Me,window.attachListHTML=Ye,window.regFiles=G,window.FA=Mt,window.print=window.print,window.retryRemoteHydration=gx,mf()}function Mh(){Bh()}function Fh(){const{loggedIn:e}=qu();return Je.useEffect(()=>{Mh()},[]),s.jsxs(s.Fragment,{children:[s.jsx(pg,{}),s.jsx("div",{className:"sb-overlay",id:"sb-overlay",onClick:()=>{var t;return(t=window.closeMobMenu)==null?void 0:t.call(window)}}),s.jsx(ug,{}),s.jsxs("div",{className:"main",id:"app-main",children:[s.jsx(fg,{}),s.jsxs("div",{className:"bal-strip",id:"bal-strip",children:[s.jsxs("div",{className:"bal-item",children:[s.jsx("div",{className:"bal-lbl",children:"Contract"}),s.jsx("div",{className:"bal-val",id:"bs-c",style:{color:"#fff"},children:"$0"})]}),s.jsx("div",{className:"bal-div"}),s.jsxs("div",{className:"bal-item",children:[s.jsx("div",{className:"bal-lbl",style:{color:"#9FE1CB"},children:"✓ Paid"}),s.jsx("div",{className:"bal-val",id:"bs-p",style:{color:"#9FE1CB"},children:"$0"})]}),s.jsx("div",{className:"bal-div"}),s.jsxs("div",{className:"bal-item",children:[s.jsx("div",{className:"bal-lbl",style:{color:"#F09595"},children:"Balance Due"}),s.jsx("div",{className:"bal-val",id:"bs-b",style:{color:"#F09595"},children:"$0"})]}),s.jsx("div",{className:"bal-div"}),s.jsxs("div",{className:"bal-prog-wrap",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"9px",color:"#546882",textTransform:"uppercase",letterSpacing:".5px"},children:"Progress"}),s.jsx("span",{style:{fontSize:"10px",fontWeight:700,color:"#fff"},id:"bs-pct",children:"0%"})]}),s.jsx("div",{style:{height:"5px",background:"rgba(255,255,255,.1)",borderRadius:"3px",overflow:"hidden",width:"130px"},children:s.jsx("div",{id:"bs-bar",style:{height:"100%",width:"0%",background:"#9FE1CB",borderRadius:"3px",transition:".5s"}})})]})]}),s.jsx(yg,{})]}),s.jsx("div",{className:"mo",id:"mo",onClick:t=>{var n;t.target===t.currentTarget&&((n=window.closeModal)==null||n.call(window))},children:s.jsxs("div",{className:"modal",children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",id:"modal-title",children:"Add"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeModal)==null?void 0:t.call(window)},children:"✕"})]}),s.jsx("div",{className:"modal-body",id:"modal-body"}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var t;return(t=window.closeModal)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-navy btn-sm",onClick:()=>{var t;return(t=window.saveModal)==null?void 0:t.call(window)},children:"Save"})]})]})}),s.jsx("div",{className:"toast",id:"toast"}),s.jsx("div",{className:"mo",id:"mo-vdir",children:s.jsxs("div",{className:"modal",style:{maxWidth:"580px"},children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",id:"vdir-modal-title",children:"Add Vendor to Directory"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeVDirModal)==null?void 0:t.call(window)},children:"✕"})]}),s.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx("input",{type:"hidden",id:"vdir-id"}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Contact Name *"}),s.jsx("input",{className:"fi",id:"vdir-name",placeholder:"John Smith"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Company Name *"}),s.jsx("input",{className:"fi",id:"vdir-company",placeholder:"ABC Plumbing Co."})]})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Phone"}),s.jsx("input",{className:"fi",id:"vdir-phone",placeholder:"+1 555 000 1234"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Email"}),s.jsx("input",{className:"fi",id:"vdir-email",placeholder:"vendor@company.com"})]})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Trade / Specialty"}),s.jsx("input",{className:"fi",id:"vdir-trade",placeholder:"Plumbing, HVAC, Electrical…"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"License Number"}),s.jsx("input",{className:"fi",id:"vdir-license",placeholder:"LIC-1234567"})]})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Address"}),s.jsx("input",{className:"fi",id:"vdir-address",placeholder:"121 Main St #563, Los Altos, CA 94022"})]}),s.jsx("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"10px",fontSize:"10px",fontWeight:700,textTransform:"uppercase",letterSpacing:".6px",color:"var(--muted)"},children:"🏦 Payment / Banking Info"}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Bank Name"}),s.jsx("input",{className:"fi",id:"vdir-bank",placeholder:"Chase Bank"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Account Type"}),s.jsxs("select",{className:"fs",id:"vdir-acct-type",children:[s.jsx("option",{value:"",children:"Select…"}),s.jsx("option",{children:"Checking"}),s.jsx("option",{children:"Savings"}),s.jsx("option",{children:"Business Checking"})]})]})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Account Number"}),s.jsx("input",{className:"fi",id:"vdir-acct",placeholder:"Account number",type:"text"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Routing Number"}),s.jsx("input",{className:"fi",id:"vdir-routing",placeholder:"9-digit routing number",type:"text"})]})]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Zelle (email / phone)"}),s.jsx("input",{className:"fi",id:"vdir-zelle",placeholder:"Zelle email or phone"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Notes"}),s.jsx("input",{className:"fi",id:"vdir-notes",placeholder:"Additional notes"})]})]})]}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeVDirModal)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.saveVDir)==null?void 0:t.call(window)},children:"Save →"})]})]})}),s.jsx("div",{className:"mo",id:"mo-inv-payment",children:s.jsxs("div",{className:"modal",style:{maxWidth:"480px"},children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",children:"Record Partial Payment"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeInvPayment)==null?void 0:t.call(window)},children:"✕"})]}),s.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx("input",{type:"hidden",id:"invpay-inv-id"}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Payment Date *"}),s.jsx("input",{className:"fi",id:"invpay-date",type:"date"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Amount *"}),s.jsx("input",{className:"fi",id:"invpay-amount",type:"number",placeholder:"0.00",min:"0",step:"0.01"})]})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Note"}),s.jsx("input",{className:"fi",id:"invpay-note",placeholder:"e.g. Wire transfer, Check #1234"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Proof of Payment (optional)"}),s.jsx("input",{className:"fi",id:"invpay-proof",type:"file",accept:"image/*,.pdf",style:{padding:"4px"}})]})]}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeInvPayment)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.saveInvPayment)==null?void 0:t.call(window)},children:"Record Payment →"})]})]})}),s.jsx("div",{className:"mo",id:"mo-lien-email",children:s.jsxs("div",{className:"modal",style:{maxWidth:"560px"},children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",id:"lien-email-title",children:"Send Lien Waiver"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeLienEmail)==null?void 0:t.call(window)},children:"✕"})]}),s.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx("input",{type:"hidden",id:"lien-email-invid"}),s.jsx("input",{type:"hidden",id:"lien-email-type"}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"To (Vendor Email) *"}),s.jsx("input",{className:"fi",id:"lien-email-to",placeholder:"vendor@company.com"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Subject"}),s.jsx("input",{className:"fi",id:"lien-email-subject"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Message Body"}),s.jsx("textarea",{className:"fi",id:"lien-email-body",rows:"8",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.5"}})]}),s.jsx("div",{id:"lien-email-status",style:{fontSize:"11px",color:"var(--muted)"}})]}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeLienEmail)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendLienEmail)==null?void 0:t.call(window)},children:"✉ Send Lien Waiver →"})]})]})}),s.jsx("div",{className:"mo",id:"mo-ledger-email",children:s.jsxs("div",{className:"modal",style:{maxWidth:"600px"},children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",id:"ledger-email-title",children:"Send Payment Ledger"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeLedgerEmail)==null?void 0:t.call(window)},children:"✕"})]}),s.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx("input",{type:"hidden",id:"ledger-email-type"}),s.jsx("input",{type:"hidden",id:"ledger-email-ref"}),s.jsxs("div",{style:{background:"var(--blue-l)",border:"1px solid #B0D0F0",borderRadius:"7px",padding:"9px 12px",fontSize:"11px",color:"var(--blue)"},children:[s.jsx("strong",{children:"📒 Payment Ledger Email"})," — Review and send the full ledger directly to the vendor."]}),s.jsxs("div",{className:"fg",children:[s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"To (Email) *"}),s.jsx("input",{className:"fi",id:"ledger-email-to",placeholder:"vendor@company.com",type:"email"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"CC"}),s.jsx("input",{className:"fi",id:"ledger-email-cc",placeholder:"cc@company.com (optional)",type:"email"})]})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Subject"}),s.jsx("input",{className:"fi",id:"ledger-email-subject"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Message Body"}),s.jsx("textarea",{className:"fi",id:"ledger-email-body",rows:"10",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.6",fontFamily:"monospace"}})]}),s.jsx("div",{id:"ledger-email-status",style:{fontSize:"11px"}})]}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeLedgerEmail)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var t;return(t=window.copyLedgerToClipboard)==null?void 0:t.call(window)},style:{marginRight:"auto"},children:"📋 Copy Text"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendLedgerEmail)==null?void 0:t.call(window)},children:"📧 Send Ledger →"})]})]})}),s.jsx("div",{className:"mo",id:"mo-contract-email",children:s.jsxs("div",{className:"modal",style:{maxWidth:"560px"},children:[s.jsxs("div",{className:"modal-head",children:[s.jsx("span",{className:"modal-title",children:"Send Contract for Signing"}),s.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeContractEmailModal)==null?void 0:t.call(window)},children:"✕"})]}),s.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx("input",{type:"hidden",id:"cemail-vid"}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"To (Recipient Email) *"}),s.jsx("input",{className:"fi",id:"cemail-to",placeholder:"vendor@company.com"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Subject"}),s.jsx("input",{className:"fi",id:"cemail-subject",placeholder:"Subject line"})]}),s.jsxs("div",{className:"fr",style:{margin:0},children:[s.jsx("label",{className:"fl",children:"Message Body"}),s.jsx("textarea",{className:"fi",id:"cemail-body",rows:"6",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.5"}})]}),s.jsx("div",{id:"cemail-status",style:{fontSize:"11px",color:"var(--muted)"}})]}),s.jsxs("div",{className:"modal-foot",children:[s.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeContractEmailModal)==null?void 0:t.call(window)},children:"Cancel"}),s.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendContractEmailModal)==null?void 0:t.call(window)},children:"✉ Send →"})]})]})})]})}Da.createRoot(document.getElementById("root")).render(s.jsx(mg,{children:s.jsx(Fh,{})}));
