(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Jd={exports:{}},or={},Qd={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),Yu=Symbol.for("react.portal"),Ju=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Zu=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),kl=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=kl&&e[kl]||e["@@iterator"],typeof e=="function"?e:null)}var Kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xd=Object.assign,Zd={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Kd}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ec(){}ec.prototype=Zn.prototype;function as(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Kd}var ss=as.prototype=new ec;ss.constructor=as;Xd(ss,Zn.prototype);ss.isPureReactComponent=!0;var El=Array.isArray,tc=Object.prototype.hasOwnProperty,ls={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var o,i={},r=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(r=""+t.key),t)tc.call(t,o)&&!nc.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)i[o]===void 0&&(i[o]=c[o]);return{$$typeof:qo,type:e,key:r,ref:s,props:i,_owner:ls.current}}function af(e,t){return{$$typeof:qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===qo}function sf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $l=/\/+/g;function $r(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sf(""+e.key):t.toString(36)}function xi(e,t,n,o,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qo:case Yu:s=!0}}if(s)return s=e,i=i(s),e=o===""?"."+$r(s,0):o,El(i)?(n="",e!=null&&(n=e.replace($l,"$&/")+"/"),xi(i,t,n,"",function(d){return d})):i!=null&&(ds(i)&&(i=af(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($l,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=o===""?".":o+":",El(e))for(var c=0;c<e.length;c++){r=e[c];var l=o+$r(r,c);s+=xi(r,t,n,l,i)}else if(l=rf(e),typeof l=="function")for(e=l.call(e),c=0;!(r=e.next()).done;)r=r.value,l=o+$r(r,c++),s+=xi(r,t,n,l,i);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Zo(e,t,n){if(e==null)return e;var o=[],i=0;return xi(e,o,"","",function(r){return t.call(n,r,i++)}),o}function lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},hi={transition:null},df={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:hi,ReactCurrentOwner:ls};function ic(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Zn;K.Fragment=Ju;K.Profiler=Ku;K.PureComponent=as;K.StrictMode=Qu;K.Suspense=tf;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=df;K.act=ic;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Xd({},e.props),i=e.key,r=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,s=ls.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)tc.call(t,l)&&!nc.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:qo,type:e.type,key:i,ref:r,props:o,_owner:s}};K.createContext=function(e){return e={$$typeof:Zu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xu,_context:e},e.Consumer=e};K.createElement=oc;K.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:ef,render:e}};K.isValidElement=ds;K.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:lf}};K.memo=function(e,t){return{$$typeof:nf,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};K.unstable_act=ic;K.useCallback=function(e,t){return Be.current.useCallback(e,t)};K.useContext=function(e){return Be.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};K.useEffect=function(e,t){return Be.current.useEffect(e,t)};K.useId=function(){return Be.current.useId()};K.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Be.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};K.useRef=function(e){return Be.current.useRef(e)};K.useState=function(e){return Be.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Be.current.useTransition()};K.version="18.3.1";Qd.exports=K;var qe=Qd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=qe,pf=Symbol.for("react.element"),uf=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,mf=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function rc(e,t,n){var o,i={},r=null,s=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)ff.call(t,o)&&!vf.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:pf,type:e,key:r,ref:s,props:i,_owner:mf.current}}or.Fragment=uf;or.jsx=rc;or.jsxs=rc;Jd.exports=or;var a=Jd.exports,na={},ac={exports:{}},Ke={},sc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,V){var H=I.length;I.push(V);e:for(;0<H;){var X=H-1>>>1,ie=I[X];if(0<i(ie,V))I[X]=V,I[H]=ie,H=X;else break e}}function n(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var V=I[0],H=I.pop();if(H!==V){I[0]=H;e:for(var X=0,ie=I.length,Ne=ie>>>1;X<Ne;){var Me=2*(X+1)-1,zt=I[Me],Ue=Me+1,Sn=I[Ue];if(0>i(zt,H))Ue<ie&&0>i(Sn,zt)?(I[X]=Sn,I[Ue]=H,X=Ue):(I[X]=zt,I[Me]=H,X=Me);else if(Ue<ie&&0>i(Sn,H))I[X]=Sn,I[Ue]=H,X=Ue;else break e}}return V}function i(I,V){var H=I.sortIndex-V.sortIndex;return H!==0?H:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],d=[],u=1,f=null,p=3,g=!1,w=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var V=n(d);V!==null;){if(V.callback===null)o(d);else if(V.startTime<=I)o(d),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(d)}}function E(I){if(y=!1,x(I),!w)if(n(l)!==null)w=!0,_(C);else{var V=n(d);V!==null&&U(E,V.startTime-I)}}function C(I,V){w=!1,y&&(y=!1,m($),$=-1),g=!0;var H=p;try{for(x(V),f=n(l);f!==null&&(!(f.expirationTime>V)||I&&!D());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var ie=X(f.expirationTime<=V);V=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&o(l),x(V)}else o(l);f=n(l)}if(f!==null)var Ne=!0;else{var Me=n(d);Me!==null&&U(E,Me.startTime-V),Ne=!1}return Ne}finally{f=null,p=H,g=!1}}var k=!1,j=null,$=-1,A=5,S=-1;function D(){return!(e.unstable_now()-S<A)}function z(){if(j!==null){var I=e.unstable_now();S=I;var V=!0;try{V=j(!0,I)}finally{V?T():(k=!1,j=null)}}else k=!1}var T;if(typeof v=="function")T=function(){v(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,N=Y.port2;Y.port1.onmessage=z,T=function(){N.postMessage(null)}}else T=function(){b(z,0)};function _(I){j=I,k||(k=!0,T())}function U(I,V){$=b(function(){I(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,_(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var H=p;p=V;try{return I()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=p;p=I;try{return V()}finally{p=H}},e.unstable_scheduleCallback=function(I,V,H){var X=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,I={id:u++,callback:V,priorityLevel:I,startTime:H,expirationTime:ie,sortIndex:-1},H>X?(I.sortIndex=H,t(d,I),n(l)===null&&I===n(d)&&(y?(m($),$=-1):y=!0,U(E,H-X))):(I.sortIndex=ie,t(l,I),w||g||(w=!0,_(C))),I},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(I){var V=p;return function(){var H=p;p=V;try{return I.apply(this,arguments)}finally{p=H}}}})(lc);sc.exports=lc;var gf=sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=qe,Qe=gf;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,jo={};function xn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(jo[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oa=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pl={},jl={};function yf(e){return oa.call(jl,e)?!0:oa.call(Pl,e)?!1:hf.test(e)?jl[e]=!0:(Pl[e]=!0,!1)}function bf(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,o){if(t===null||typeof t>"u"||bf(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,o,i,r,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cs,ps);Ee[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cs,ps);Ee[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cs,ps);Ee[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,o){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,i,o)&&(n=null),o||i===null?yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Dt=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),ms=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),uc=Symbol.for("react.offscreen"),Al=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Pr;function mo(e){if(Pr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pr=t&&t[1]||""}return`
`+Pr+e}var jr=!1;function Ar(e,t){if(!e||jr)return"";jr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),r=o.stack.split(`
`),s=i.length-1,c=r.length-1;1<=s&&0<=c&&i[s]!==r[c];)c--;for(;1<=s&&0<=c;s--,c--)if(i[s]!==r[c]){if(s!==1||c!==1)do if(s--,c--,0>c||i[s]!==r[c]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{jr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mo(e):""}function Cf(e){switch(e.tag){case 5:return mo(e.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return e=Ar(e.type,!1),e;case 11:return e=Ar(e.type.render,!1),e;case 1:return e=Ar(e.type,!0),e;default:return""}}function sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case $n:return"Portal";case ia:return"Profiler";case fs:return"StrictMode";case ra:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case cc:return(e._context.displayName||"Context")+".Provider";case ms:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return t=e.displayName||null,t!==null?t:sa(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return sa(e(t))}catch{}}return null}function Sf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(t);case 8:return t===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kf(e){var t=fc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){o=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=kf(e))}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=fc(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dl(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function da(e,t){vc(e,t);var n=Qt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||Ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vo=Array.isArray;function Fn(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Il(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(vo(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function gc(e,t){var n=Qt(t.value),o=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function zl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ef=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){Ef.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function yc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=yc(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var $f=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if($f[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,_n=null,Rn=null;function Ll(e){if(e=Jo(e)){if(typeof ga!="function")throw Error(L(280));var t=e.stateNode;t&&(t=lr(t),ga(e.stateNode,e.type,t))}}function wc(e){_n?Rn?Rn.push(e):Rn=[e]:_n=e}function Cc(){if(_n){var e=_n,t=Rn;if(Rn=_n=null,Ll(e),t)for(e=0;e<t.length;e++)Ll(t[e])}}function Sc(e,t){return e(t)}function kc(){}var Dr=!1;function Ec(e,t,n){if(Dr)return e(t,n);Dr=!0;try{return Sc(e,t,n)}finally{Dr=!1,(_n!==null||Rn!==null)&&(kc(),Cc())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var o=lr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var xa=!1;if(kt)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){xa=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{xa=!1}function Pf(e,t,n,o,i,r,s,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var yo=!1,Di=null,Ni=!1,ha=null,jf={onError:function(e){yo=!0,Di=e}};function Af(e,t,n,o,i,r,s,c,l){yo=!1,Di=null,Pf.apply(jf,arguments)}function Df(e,t,n,o,i,r,s,c,l){if(Af.apply(this,arguments),yo){if(yo){var d=Di;yo=!1,Di=null}else throw Error(L(198));Ni||(Ni=!0,ha=d)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bl(e){if(hn(e)!==e)throw Error(L(188))}function Nf(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return Bl(i),e;if(r===o)return Bl(i),t;r=r.sibling}throw Error(L(188))}if(n.return!==o.return)n=i,o=r;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,o=r;break}if(c===o){s=!0,o=i,n=r;break}c=c.sibling}if(!s){for(c=r.child;c;){if(c===n){s=!0,n=r,o=i;break}if(c===o){s=!0,o=r,n=i;break}c=c.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==o)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Pc(e){return e=Nf(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var Ac=Qe.unstable_scheduleCallback,Tl=Qe.unstable_cancelCallback,If=Qe.unstable_shouldYield,zf=Qe.unstable_requestPaint,ve=Qe.unstable_now,Lf=Qe.unstable_getCurrentPriorityLevel,xs=Qe.unstable_ImmediatePriority,Dc=Qe.unstable_UserBlockingPriority,Ii=Qe.unstable_NormalPriority,Bf=Qe.unstable_LowPriority,Nc=Qe.unstable_IdlePriority,ir=null,gt=null;function Tf(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ir,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:_f,Mf=Math.log,Ff=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(Mf(e)/Ff|0)|0}var oi=64,ii=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,r=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~i;c!==0?o=go(c):(r&=s,r!==0&&(o=go(r)))}else s=n&~i,s!==0?o=go(s):r!==0&&(o=go(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,r=t&-t,i>=r||i===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-ct(t),i=1<<n,o|=e[n],t&=~i;return o}function Rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Of(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var s=31-ct(r),c=1<<s,l=i[s];l===-1?(!(c&n)||c&o)&&(i[s]=Rf(c,t)):l<=t&&(e.expiredLanes|=c),r&=~c}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ic(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function Nr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),r=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~r}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ct(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var ne=0;function zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lc,ys,Bc,Tc,Mc,ba=!1,ri=[],Ot=null,Vt=null,Ut=null,No=new Map,Io=new Map,Mt=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function so(e,t,n,o,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Jo(t),t!==null&&ys(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hf(e,t,n,o,i){switch(t){case"focusin":return Ot=so(Ot,e,t,n,o,i),!0;case"dragenter":return Vt=so(Vt,e,t,n,o,i),!0;case"mouseover":return Ut=so(Ut,e,t,n,o,i),!0;case"pointerover":var r=i.pointerId;return No.set(r,so(No.get(r)||null,e,t,n,o,i)),!0;case"gotpointercapture":return r=i.pointerId,Io.set(r,so(Io.get(r)||null,e,t,n,o,i)),!0}return!1}function Fc(e){var t=on(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=$c(n),t!==null){e.blockedOn=t,Mc(e.priority,function(){Bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);va=o,n.target.dispatchEvent(o),va=null}else return t=Jo(n),t!==null&&ys(t),e.blockedOn=n,!1;t.shift()}return!0}function Fl(e,t,n){yi(e)&&n.delete(t)}function Wf(){ba=!1,Ot!==null&&yi(Ot)&&(Ot=null),Vt!==null&&yi(Vt)&&(Vt=null),Ut!==null&&yi(Ut)&&(Ut=null),No.forEach(Fl),Io.forEach(Fl)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Wf)))}function zo(e){function t(i){return lo(i,e)}if(0<ri.length){lo(ri[0],e);for(var n=1;n<ri.length;n++){var o=ri[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Ot!==null&&lo(Ot,e),Vt!==null&&lo(Vt,e),Ut!==null&&lo(Ut,e),No.forEach(t),Io.forEach(t),n=0;n<Mt.length;n++)o=Mt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Fc(n),n.blockedOn===null&&Mt.shift()}var On=Dt.ReactCurrentBatchConfig,Li=!0;function qf(e,t,n,o){var i=ne,r=On.transition;On.transition=null;try{ne=1,bs(e,t,n,o)}finally{ne=i,On.transition=r}}function Gf(e,t,n,o){var i=ne,r=On.transition;On.transition=null;try{ne=4,bs(e,t,n,o)}finally{ne=i,On.transition=r}}function bs(e,t,n,o){if(Li){var i=wa(e,t,n,o);if(i===null)Or(e,t,o,Bi,n),Ml(e,o);else if(Hf(i,e,t,n,o))o.stopPropagation();else if(Ml(e,o),t&4&&-1<Uf.indexOf(e)){for(;i!==null;){var r=Jo(i);if(r!==null&&Lc(r),r=wa(e,t,n,o),r===null&&Or(e,t,o,Bi,n),r===i)break;i=r}i!==null&&o.stopPropagation()}else Or(e,t,o,null,n)}}var Bi=null;function wa(e,t,n,o){if(Bi=null,e=gs(o),e=on(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case xs:return 1;case Dc:return 4;case Ii:case Bf:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var _t=null,ws=null,bi=null;function Rc(){if(bi)return bi;var e,t=ws,n=t.length,o,i="value"in _t?_t.value:_t.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===i[r-o];o++);return bi=i.slice(e,1<o?1-o:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function _l(){return!1}function Xe(e){function t(n,o,i,r,s){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ai:_l,this.isPropagationStopped=_l,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Xe(eo),Yo=pe({},eo,{view:0,detail:0}),Yf=Xe(Yo),Ir,zr,co,rr=pe({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Ir=e.screenX-co.screenX,zr=e.screenY-co.screenY):zr=Ir=0,co=e),Ir)},movementY:function(e){return"movementY"in e?e.movementY:zr}}),Rl=Xe(rr),Jf=pe({},rr,{dataTransfer:0}),Qf=Xe(Jf),Kf=pe({},Yo,{relatedTarget:0}),Lr=Xe(Kf),Xf=pe({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=Xe(Xf),em=pe({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Xe(em),nm=pe({},eo,{data:0}),Ol=Xe(nm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function Ss(){return am}var sm=pe({},Yo,{key:function(e){if(e.key){var t=om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=Xe(sm),dm=pe({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=Xe(dm),cm=pe({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),pm=Xe(cm),um=pe({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=Xe(um),mm=pe({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Xe(mm),gm=[9,13,27,32],ks=kt&&"CompositionEvent"in window,bo=null;kt&&"documentMode"in document&&(bo=document.documentMode);var xm=kt&&"TextEvent"in window&&!bo,Oc=kt&&(!ks||bo&&8<bo&&11>=bo),Ul=" ",Hl=!1;function Vc(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function hm(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Hl=!0,Ul);case"textInput":return e=t.data,e===Ul&&Hl?null:e;default:return null}}function ym(e,t){if(jn)return e==="compositionend"||!ks&&Vc(e,t)?(e=Rc(),bi=ws=_t=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Hc(e,t,n,o){wc(o),t=Ti(t,"onChange"),0<t.length&&(n=new Cs("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var wo=null,Lo=null;function wm(e){tp(e,0)}function ar(e){var t=Nn(e);if(mc(t))return e}function Cm(e,t){if(e==="change")return t}var Wc=!1;if(kt){var Br;if(kt){var Tr="oninput"in document;if(!Tr){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),Tr=typeof ql.oninput=="function"}Br=Tr}else Br=!1;Wc=Br&&(!document.documentMode||9<document.documentMode)}function Gl(){wo&&(wo.detachEvent("onpropertychange",qc),Lo=wo=null)}function qc(e){if(e.propertyName==="value"&&ar(Lo)){var t=[];Hc(t,Lo,e,gs(e)),Ec(wm,t)}}function Sm(e,t,n){e==="focusin"?(Gl(),wo=t,Lo=n,wo.attachEvent("onpropertychange",qc)):e==="focusout"&&Gl()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(Lo)}function Em(e,t){if(e==="click")return ar(t)}function $m(e,t){if(e==="input"||e==="change")return ar(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Pm;function Bo(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!oa.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jl(e,t){var n=Yl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yl(n)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(){for(var e=window,t=Ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ai(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=Yc(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gc(n.ownerDocument.documentElement,n)){if(o!==null&&Es(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,r=Math.min(o.start,i);o=o.end===void 0?r:Math.min(o.end,i),!e.extend&&r>o&&(i=o,o=r,r=i),i=Jl(n,r);var s=Jl(n,o);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Am=kt&&"documentMode"in document&&11>=document.documentMode,An=null,Ca=null,Co=null,Sa=!1;function Ql(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||An==null||An!==Ai(o)||(o=An,"selectionStart"in o&&Es(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Co&&Bo(Co,o)||(Co=o,o=Ti(Ca,"onSelect"),0<o.length&&(t=new Cs("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=An)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Mr={},Jc={};kt&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function sr(e){if(Mr[e])return Mr[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return Mr[e]=t[n];return e}var Qc=sr("animationend"),Kc=sr("animationiteration"),Xc=sr("animationstart"),Zc=sr("transitionend"),ep=new Map,Kl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){ep.set(e,t),xn(t,[e])}for(var Fr=0;Fr<Kl.length;Fr++){var _r=Kl[Fr],Dm=_r.toLowerCase(),Nm=_r[0].toUpperCase()+_r.slice(1);Xt(Dm,"on"+Nm)}Xt(Qc,"onAnimationEnd");Xt(Kc,"onAnimationIteration");Xt(Xc,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Zc,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Im=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Xl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Df(o,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var s=o.length-1;0<=s;s--){var c=o[s],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==r&&i.isPropagationStopped())break e;Xl(i,c,d),r=l}else for(s=0;s<o.length;s++){if(c=o[s],l=c.instance,d=c.currentTarget,c=c.listener,l!==r&&i.isPropagationStopped())break e;Xl(i,c,d),r=l}}}if(Ni)throw e=ha,Ni=!1,ha=null,e}function ae(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var o=e+"__bubble";n.has(o)||(np(t,e,2,!1),n.add(o))}function Rr(e,t,n){var o=0;t&&(o|=4),np(n,e,o,t)}var li="_reactListening"+Math.random().toString(36).slice(2);function To(e){if(!e[li]){e[li]=!0,dc.forEach(function(n){n!=="selectionchange"&&(Im.has(n)||Rr(n,!1,e),Rr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,Rr("selectionchange",!1,t))}}function np(e,t,n,o){switch(_c(t)){case 1:var i=qf;break;case 4:i=Gf;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Or(e,t,n,o,i){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var c=o.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;c!==null;){if(s=on(c),s===null)return;if(l=s.tag,l===5||l===6){o=r=s;continue e}c=c.parentNode}}o=o.return}Ec(function(){var d=r,u=gs(n),f=[];e:{var p=ep.get(e);if(p!==void 0){var g=Cs,w=e;switch(e){case"keypress":if(wi(n)===0)break e;case"keydown":case"keyup":g=lm;break;case"focusin":w="focus",g=Lr;break;case"focusout":w="blur",g=Lr;break;case"beforeblur":case"afterblur":g=Lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pm;break;case Qc:case Kc:case Xc:g=Zf;break;case Zc:g=fm;break;case"scroll":g=Yf;break;case"wheel":g=vm;break;case"copy":case"cut":case"paste":g=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vl}var y=(t&4)!==0,b=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var v=d,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,m!==null&&(E=Do(v,m),E!=null&&y.push(Mo(v,E,x)))),b)break;v=v.return}0<y.length&&(p=new g(p,w,null,n,u),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==va&&(w=n.relatedTarget||n.fromElement)&&(on(w)||w[Et]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=d,w=w?on(w):null,w!==null&&(b=hn(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=d),g!==w)){if(y=Rl,E="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Vl,E="onPointerLeave",m="onPointerEnter",v="pointer"),b=g==null?p:Nn(g),x=w==null?p:Nn(w),p=new y(E,v+"leave",g,n,u),p.target=b,p.relatedTarget=x,E=null,on(u)===d&&(y=new y(m,v+"enter",w,n,u),y.target=x,y.relatedTarget=b,E=y),b=E,g&&w)t:{for(y=g,m=w,v=0,x=y;x;x=En(x))v++;for(x=0,E=m;E;E=En(E))x++;for(;0<v-x;)y=En(y),v--;for(;0<x-v;)m=En(m),x--;for(;v--;){if(y===m||m!==null&&y===m.alternate)break t;y=En(y),m=En(m)}y=null}else y=null;g!==null&&Zl(f,p,g,y,!1),w!==null&&b!==null&&Zl(f,b,w,y,!0)}}e:{if(p=d?Nn(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Cm;else if(Wl(p))if(Wc)C=$m;else{C=km;var k=Sm}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Em);if(C&&(C=C(e,d))){Hc(f,C,n,u);break e}k&&k(e,p,d),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&ca(p,"number",p.value)}switch(k=d?Nn(d):window,e){case"focusin":(Wl(k)||k.contentEditable==="true")&&(An=k,Ca=d,Co=null);break;case"focusout":Co=Ca=An=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Ql(f,n,u);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":Ql(f,n,u)}var j;if(ks)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else jn?Vc(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Oc&&n.locale!=="ko"&&(jn||$!=="onCompositionStart"?$==="onCompositionEnd"&&jn&&(j=Rc()):(_t=u,ws="value"in _t?_t.value:_t.textContent,jn=!0)),k=Ti(d,$),0<k.length&&($=new Ol($,e,null,n,u),f.push({event:$,listeners:k}),j?$.data=j:(j=Uc(n),j!==null&&($.data=j)))),(j=xm?hm(e,n):ym(e,n))&&(d=Ti(d,"onBeforeInput"),0<d.length&&(u=new Ol("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=j))}tp(f,t)})}function Mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Do(e,n),r!=null&&o.unshift(Mo(e,r,i)),r=Do(e,t),r!=null&&o.push(Mo(e,r,i))),e=e.return}return o}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zl(e,t,n,o,i){for(var r=t._reactName,s=[];n!==null&&n!==o;){var c=n,l=c.alternate,d=c.stateNode;if(l!==null&&l===o)break;c.tag===5&&d!==null&&(c=d,i?(l=Do(n,r),l!=null&&s.unshift(Mo(n,l,c))):i||(l=Do(n,r),l!=null&&s.push(Mo(n,l,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var zm=/\r\n?/g,Lm=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(Lm,"")}function di(e,t,n){if(t=ed(t),ed(e)!==t&&n)throw Error(L(425))}function Mi(){}var ka=null,Ea=null;function $a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(Mm)}:Pa;function Mm(e){setTimeout(function(){throw e})}function Vr(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),zo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);zo(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),vt="__reactFiber$"+to,Fo="__reactProps$"+to,Et="__reactContainer$"+to,ja="__reactEvents$"+to,Fm="__reactListeners$"+to,_m="__reactHandles$"+to;function on(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nd(e);e!==null;){if(n=e[vt])return n;e=nd(e)}return t}e=n,n=e.parentNode}return null}function Jo(e){return e=e[vt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function lr(e){return e[Fo]||null}var Aa=[],In=-1;function Zt(e){return{current:e}}function se(e){0>In||(e.current=Aa[In],Aa[In]=null,In--)}function re(e,t){In++,Aa[In]=e.current,e.current=t}var Kt={},De=Zt(Kt),Re=Zt(!1),un=Kt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in n)i[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function Fi(){se(Re),se(De)}function od(e,t,n){if(De.current!==Kt)throw Error(L(168));re(De,t),re(Re,n)}function op(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(L(108,Sf(e)||"Unknown",i));return pe({},n,o)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,un=De.current,re(De,e),re(Re,Re.current),!0}function id(e,t,n){var o=e.stateNode;if(!o)throw Error(L(169));n?(e=op(e,t,un),o.__reactInternalMemoizedMergedChildContext=e,se(Re),se(De),re(De,e)):se(Re),re(Re,n)}var yt=null,dr=!1,Ur=!1;function ip(e){yt===null?yt=[e]:yt.push(e)}function Rm(e){dr=!0,ip(e)}function en(){if(!Ur&&yt!==null){Ur=!0;var e=0,t=ne;try{var n=yt;for(ne=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}yt=null,dr=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),Ac(xs,en),i}finally{ne=t,Ur=!1}}return null}var zn=[],Ln=0,Ri=null,Oi=0,Ze=[],et=0,fn=null,bt=1,wt="";function tn(e,t){zn[Ln++]=Oi,zn[Ln++]=Ri,Ri=e,Oi=t}function rp(e,t,n){Ze[et++]=bt,Ze[et++]=wt,Ze[et++]=fn,fn=e;var o=bt;e=wt;var i=32-ct(o)-1;o&=~(1<<i),n+=1;var r=32-ct(t)+i;if(30<r){var s=i-i%5;r=(o&(1<<s)-1).toString(32),o>>=s,i-=s,bt=1<<32-ct(t)+i|n<<i|o,wt=r+e}else bt=1<<r|n<<i|o,wt=e}function $s(e){e.return!==null&&(tn(e,1),rp(e,1,0))}function Ps(e){for(;e===Ri;)Ri=zn[--Ln],zn[Ln]=null,Oi=zn[--Ln],zn[Ln]=null;for(;e===fn;)fn=Ze[--et],Ze[et]=null,wt=Ze[--et],Ze[et]=null,bt=Ze[--et],Ze[et]=null}var Je=null,Ge=null,le=!1,dt=null;function ap(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ge=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:bt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ge=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(le){var t=Ge;if(t){var n=t;if(!rd(e,t)){if(Da(e))throw Error(L(418));t=Ht(n.nextSibling);var o=Je;t&&rd(e,t)?ap(o,n):(e.flags=e.flags&-4097|2,le=!1,Je=e)}}else{if(Da(e))throw Error(L(418));e.flags=e.flags&-4097|2,le=!1,Je=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ci(e){if(e!==Je)return!1;if(!le)return ad(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$a(e.type,e.memoizedProps)),t&&(t=Ge)){if(Da(e))throw sp(),Error(L(418));for(;t;)ap(e,t),t=Ht(t.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Je?Ht(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=Ge;e;)e=Ht(e.nextSibling)}function qn(){Ge=Je=null,le=!1}function js(e){dt===null?dt=[e]:dt.push(e)}var Om=Dt.ReactCurrentBatchConfig;function po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var o=n.stateNode}if(!o)throw Error(L(147,e));var i=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(s){var c=i.refs;s===null?delete c[r]:c[r]=s},t._stringRef=r,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function lp(e){function t(m,v){if(e){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function o(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function i(m,v){return m=Yt(m,v),m.index=0,m.sibling=null,m}function r(m,v,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,v,x,E){return v===null||v.tag!==6?(v=Qr(x,m.mode,E),v.return=m,v):(v=i(v,x),v.return=m,v)}function l(m,v,x,E){var C=x.type;return C===Pn?u(m,v,x.props.children,E,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&sd(C)===v.type)?(E=i(v,x.props),E.ref=po(m,v,x),E.return=m,E):(E=ji(x.type,x.key,x.props,null,m.mode,E),E.ref=po(m,v,x),E.return=m,E)}function d(m,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Kr(x,m.mode,E),v.return=m,v):(v=i(v,x.children||[]),v.return=m,v)}function u(m,v,x,E,C){return v===null||v.tag!==7?(v=dn(x,m.mode,E,C),v.return=m,v):(v=i(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qr(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ei:return x=ji(v.type,v.key,v.props,null,m.mode,x),x.ref=po(m,null,v),x.return=m,x;case $n:return v=Kr(v,m.mode,x),v.return=m,v;case Bt:var E=v._init;return f(m,E(v._payload),x)}if(vo(v)||ro(v))return v=dn(v,m.mode,x,null),v.return=m,v;pi(m,v)}return null}function p(m,v,x,E){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:c(m,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ei:return x.key===C?l(m,v,x,E):null;case $n:return x.key===C?d(m,v,x,E):null;case Bt:return C=x._init,p(m,v,C(x._payload),E)}if(vo(x)||ro(x))return C!==null?null:u(m,v,x,E,null);pi(m,x)}return null}function g(m,v,x,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(x)||null,c(v,m,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ei:return m=m.get(E.key===null?x:E.key)||null,l(v,m,E,C);case $n:return m=m.get(E.key===null?x:E.key)||null,d(v,m,E,C);case Bt:var k=E._init;return g(m,v,x,k(E._payload),C)}if(vo(E)||ro(E))return m=m.get(x)||null,u(v,m,E,C,null);pi(v,E)}return null}function w(m,v,x,E){for(var C=null,k=null,j=v,$=v=0,A=null;j!==null&&$<x.length;$++){j.index>$?(A=j,j=null):A=j.sibling;var S=p(m,j,x[$],E);if(S===null){j===null&&(j=A);break}e&&j&&S.alternate===null&&t(m,j),v=r(S,v,$),k===null?C=S:k.sibling=S,k=S,j=A}if($===x.length)return n(m,j),le&&tn(m,$),C;if(j===null){for(;$<x.length;$++)j=f(m,x[$],E),j!==null&&(v=r(j,v,$),k===null?C=j:k.sibling=j,k=j);return le&&tn(m,$),C}for(j=o(m,j);$<x.length;$++)A=g(j,m,$,x[$],E),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?$:A.key),v=r(A,v,$),k===null?C=A:k.sibling=A,k=A);return e&&j.forEach(function(D){return t(m,D)}),le&&tn(m,$),C}function y(m,v,x,E){var C=ro(x);if(typeof C!="function")throw Error(L(150));if(x=C.call(x),x==null)throw Error(L(151));for(var k=C=null,j=v,$=v=0,A=null,S=x.next();j!==null&&!S.done;$++,S=x.next()){j.index>$?(A=j,j=null):A=j.sibling;var D=p(m,j,S.value,E);if(D===null){j===null&&(j=A);break}e&&j&&D.alternate===null&&t(m,j),v=r(D,v,$),k===null?C=D:k.sibling=D,k=D,j=A}if(S.done)return n(m,j),le&&tn(m,$),C;if(j===null){for(;!S.done;$++,S=x.next())S=f(m,S.value,E),S!==null&&(v=r(S,v,$),k===null?C=S:k.sibling=S,k=S);return le&&tn(m,$),C}for(j=o(m,j);!S.done;$++,S=x.next())S=g(j,m,$,S.value,E),S!==null&&(e&&S.alternate!==null&&j.delete(S.key===null?$:S.key),v=r(S,v,$),k===null?C=S:k.sibling=S,k=S);return e&&j.forEach(function(z){return t(m,z)}),le&&tn(m,$),C}function b(m,v,x,E){if(typeof x=="object"&&x!==null&&x.type===Pn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ei:e:{for(var C=x.key,k=v;k!==null;){if(k.key===C){if(C=x.type,C===Pn){if(k.tag===7){n(m,k.sibling),v=i(k,x.props.children),v.return=m,m=v;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&sd(C)===k.type){n(m,k.sibling),v=i(k,x.props),v.ref=po(m,k,x),v.return=m,m=v;break e}n(m,k);break}else t(m,k);k=k.sibling}x.type===Pn?(v=dn(x.props.children,m.mode,E,x.key),v.return=m,m=v):(E=ji(x.type,x.key,x.props,null,m.mode,E),E.ref=po(m,v,x),E.return=m,m=E)}return s(m);case $n:e:{for(k=x.key;v!==null;){if(v.key===k)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(m,v.sibling),v=i(v,x.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=Kr(x,m.mode,E),v.return=m,m=v}return s(m);case Bt:return k=x._init,b(m,v,k(x._payload),E)}if(vo(x))return w(m,v,x,E);if(ro(x))return y(m,v,x,E);pi(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(m,v.sibling),v=i(v,x),v.return=m,m=v):(n(m,v),v=Qr(x,m.mode,E),v.return=m,m=v),s(m)):n(m,v)}return b}var Gn=lp(!0),dp=lp(!1),Vi=Zt(null),Ui=null,Bn=null,As=null;function Ds(){As=Bn=Ui=null}function Ns(e){var t=Vi.current;se(Vi),e._currentValue=t}function Ia(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){Ui=e,As=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Ui===null)throw Error(L(308));Bn=e,Ui.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var rn=null;function Is(e){rn===null?rn=[e]:rn.push(e)}function cp(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,Is(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,o)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Z&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,$t(e,n)}return i=o.interleaved,i===null?(t.next=t,Is(o)):(t.next=i.next,i.next=t),o.interleaved=t,$t(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,hs(e,n)}}function ld(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?i=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,o){var i=e.updateQueue;Tt=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,d=l.next;l.next=null,s===null?r=d:s.next=d,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==s&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(r!==null){var f=i.baseState;s=0,u=d=l=null,c=r;do{var p=c.lane,g=c.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,y=c;switch(p=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=pe({},f,p);break e;case 2:Tt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else g={eventTime:g,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=g,l=f):u=u.next=g,s|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else r===null&&(i.shared.lanes=0);vn|=s,e.lanes=s,e.memoizedState=f}}function dd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(L(191,i));i.call(o)}}}var Qo={},xt=Zt(Qo),_o=Zt(Qo),Ro=Zt(Qo);function an(e){if(e===Qo)throw Error(L(174));return e}function Ls(e,t){switch(re(Ro,t),re(_o,e),re(xt,Qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}se(xt),re(xt,t)}function Yn(){se(xt),se(_o),se(Ro)}function up(e){an(Ro.current);var t=an(xt.current),n=ua(t,e.type);t!==n&&(re(_o,e),re(xt,n))}function Bs(e){_o.current===e&&(se(xt),se(_o))}var de=Zt(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hr=[];function Ts(){for(var e=0;e<Hr.length;e++)Hr[e]._workInProgressVersionPrimary=null;Hr.length=0}var Si=Dt.ReactCurrentDispatcher,Wr=Dt.ReactCurrentBatchConfig,mn=0,ce=null,he=null,be=null,qi=!1,So=!1,Oo=0,Vm=0;function $e(){throw Error(L(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Fs(e,t,n,o,i,r){if(mn=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?qm:Gm,e=n(o,i),So){r=0;do{if(So=!1,Oo=0,25<=r)throw Error(L(301));r+=1,be=he=null,t.updateQueue=null,Si.current=Ym,e=n(o,i)}while(So)}if(Si.current=Gi,t=he!==null&&he.next!==null,mn=0,be=he=ce=null,qi=!1,t)throw Error(L(300));return e}function _s(){var e=Oo!==0;return Oo=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function it(){if(he===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,he=e;else{if(e===null)throw Error(L(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function Vo(e,t){return typeof t=="function"?t(e):t}function qr(e){var t=it(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var o=he,i=o.baseQueue,r=n.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}o.baseQueue=i=r,n.pending=null}if(i!==null){r=i.next,o=o.baseState;var c=s=null,l=null,d=r;do{var u=d.lane;if((mn&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=f,s=o):l=l.next=f,ce.lanes|=u,vn|=u}d=d.next}while(d!==null&&d!==r);l===null?s=o:l.next=c,ut(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do r=i.lane,ce.lanes|=r,vn|=r,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gr(e){var t=it(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do r=e(r,s.action),s=s.next;while(s!==i);ut(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function fp(){}function mp(e,t){var n=ce,o=it(),i=t(),r=!ut(o.memoizedState,i);if(r&&(o.memoizedState=i,_e=!0),o=o.queue,Rs(xp.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Uo(9,gp.bind(null,n,o,i,t),void 0,null),we===null)throw Error(L(349));mn&30||vp(n,t,i)}return i}function vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,o){t.value=n,t.getSnapshot=o,hp(t)&&yp(e)}function xp(e,t,n){return n(function(){hp(t)&&yp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function yp(e){var t=$t(e,1);t!==null&&pt(t,e,1,-1)}function cd(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,ce,e),[t.memoizedState,e]}function Uo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function bp(){return it().memoizedState}function ki(e,t,n,o){var i=mt();ce.flags|=e,i.memoizedState=Uo(1|t,n,void 0,o===void 0?null:o)}function cr(e,t,n,o){var i=it();o=o===void 0?null:o;var r=void 0;if(he!==null){var s=he.memoizedState;if(r=s.destroy,o!==null&&Ms(o,s.deps)){i.memoizedState=Uo(t,n,r,o);return}}ce.flags|=e,i.memoizedState=Uo(1|t,n,r,o)}function pd(e,t){return ki(8390656,8,e,t)}function Rs(e,t){return cr(2048,8,e,t)}function wp(e,t){return cr(4,2,e,t)}function Cp(e,t){return cr(4,4,e,t)}function Sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,cr(4,4,Sp.bind(null,t,e),n)}function Os(){}function Ep(e,t){var n=it();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ms(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function $p(e,t){var n=it();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ms(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Pp(e,t,n){return mn&21?(ut(n,t)||(n=Ic(),ce.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Um(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var o=Wr.transition;Wr.transition={};try{e(!1),t()}finally{ne=n,Wr.transition=o}}function jp(){return it().memoizedState}function Hm(e,t,n){var o=Gt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ap(e))Dp(t,n);else if(n=cp(e,t,n,o),n!==null){var i=Le();pt(n,e,o,i),Np(n,t,o)}}function Wm(e,t,n){var o=Gt(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))Dp(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,c=r(s,n);if(i.hasEagerState=!0,i.eagerState=c,ut(c,s)){var l=t.interleaved;l===null?(i.next=i,Is(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=cp(e,t,i,o),n!==null&&(i=Le(),pt(n,e,o,i),Np(n,t,o))}}function Ap(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Dp(e,t){So=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,hs(e,n)}}var Gi={readContext:ot,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},qm={readContext:ot,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=mt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Hm.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:cd,useDebugValue:Os,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=cd(!1),t=e[0];return e=Um.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ce,i=mt();if(le){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),we===null)throw Error(L(349));mn&30||vp(o,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,pd(xp.bind(null,o,r,e),[e]),o.flags|=2048,Uo(9,gp.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=mt(),t=we.identifierPrefix;if(le){var n=wt,o=bt;n=(o&~(1<<32-ct(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:ot,useCallback:Ep,useContext:ot,useEffect:Rs,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:$p,useReducer:qr,useRef:bp,useState:function(){return qr(Vo)},useDebugValue:Os,useDeferredValue:function(e){var t=it();return Pp(t,he.memoizedState,e)},useTransition:function(){var e=qr(Vo)[0],t=it().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:mp,useId:jp,unstable_isNewReconciler:!1},Ym={readContext:ot,useCallback:Ep,useContext:ot,useEffect:Rs,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:$p,useReducer:Gr,useRef:bp,useState:function(){return Gr(Vo)},useDebugValue:Os,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:Pp(t,he.memoizedState,e)},useTransition:function(){var e=Gr(Vo)[0],t=it().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:mp,useId:jp,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pr={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Le(),i=Gt(e),r=St(o,i);r.payload=t,n!=null&&(r.callback=n),t=Wt(e,r,i),t!==null&&(pt(t,e,i,o),Ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Le(),i=Gt(e),r=St(o,i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Wt(e,r,i),t!==null&&(pt(t,e,i,o),Ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),o=Gt(e),i=St(n,o);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,o),t!==null&&(pt(t,e,o,n),Ci(t,e,o))}};function ud(e,t,n,o,i,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,s):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,o)||!Bo(i,r):!0}function Ip(e,t,n){var o=!1,i=Kt,r=t.contextType;return typeof r=="object"&&r!==null?r=ot(r):(i=Oe(t)?un:De.current,o=t.contextTypes,r=(o=o!=null)?Wn(e,i):Kt),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),t}function fd(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&pr.enqueueReplaceState(t,t.state,null)}function La(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zs(e);var r=t.contextType;typeof r=="object"&&r!==null?i.context=ot(r):(r=Oe(t)?un:De.current,i.context=Wn(e,r)),i.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(za(e,t,r,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pr.enqueueReplaceState(i,i.state,null),Hi(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",o=t;do n+=Cf(o),o=o.return;while(o);var i=n}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:i,digest:null}}function Yr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ji||(Ji=!0,Wa=o),Ba(e,t)},n}function Lp(e,t,n){n=St(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){Ba(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Ba(e,t),typeof o!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function md(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Jm;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=dv.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var Qm=Dt.ReactCurrentOwner,_e=!1;function ze(e,t,n,o){t.child=e===null?dp(t,null,n,o):Gn(t,e.child,n,o)}function xd(e,t,n,o,i){n=n.render;var r=t.ref;return Vn(t,i),o=Fs(e,t,n,o,r,i),n=_s(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(le&&n&&$s(t),t.flags|=1,ze(e,t,o,i),t.child)}function hd(e,t,n,o,i){if(e===null){var r=n.type;return typeof r=="function"&&!Js(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,Bp(e,t,r,o,i)):(e=ji(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&i)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(s,o)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Yt(r,o),e.ref=t.ref,e.return=t,t.child=e}function Bp(e,t,n,o,i){if(e!==null){var r=e.memoizedProps;if(Bo(r,o)&&e.ref===t.ref)if(_e=!1,t.pendingProps=o=r,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return Ta(e,t,n,o,i)}function Tp(e,t,n){var o=t.pendingProps,i=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Mn,We),We|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Mn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,re(Mn,We),We|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,re(Mn,We),We|=o;return ze(e,t,i,n),t.child}function Mp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,o,i){var r=Oe(n)?un:De.current;return r=Wn(t,r),Vn(t,i),n=Fs(e,t,n,o,r,i),o=_s(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(le&&o&&$s(t),t.flags|=1,ze(e,t,n,i),t.child)}function yd(e,t,n,o,i){if(Oe(n)){var r=!0;_i(t)}else r=!1;if(Vn(t,i),t.stateNode===null)Ei(e,t),Ip(t,n,o),La(t,n,o,i),o=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=ot(d):(d=Oe(n)?un:De.current,d=Wn(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==o||l!==d)&&fd(t,s,o,d),Tt=!1;var p=t.memoizedState;s.state=p,Hi(t,o,s,i),l=t.memoizedState,c!==o||p!==l||Re.current||Tt?(typeof u=="function"&&(za(t,n,u,o),l=t.memoizedState),(c=Tt||ud(t,n,c,o,p,l,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=d,o=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,pp(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:st(t.type,c),s.props=d,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Oe(n)?un:De.current,l=Wn(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==f||p!==l)&&fd(t,s,o,l),Tt=!1,p=t.memoizedState,s.state=p,Hi(t,o,s,i);var w=t.memoizedState;c!==f||p!==w||Re.current||Tt?(typeof g=="function"&&(za(t,n,g,o),w=t.memoizedState),(d=Tt||ud(t,n,d,o,p,w,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),s.props=o,s.state=w,s.context=l,o=d):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Ma(e,t,n,o,r,i)}function Ma(e,t,n,o,i,r){Mp(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return i&&id(t,n,!1),Pt(e,t,r);o=t.stateNode,Qm.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,r),t.child=Gn(t,null,c,r)):ze(e,t,c,r),t.memoizedState=o.state,i&&id(t,n,!0),t.child}function Fp(e){var t=e.stateNode;t.pendingContext?od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&od(e,t.context,!1),Ls(e,t.containerInfo)}function bd(e,t,n,o,i){return qn(),js(i),t.flags|=256,ze(e,t,n,o),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,t,n){var o=t.pendingProps,i=de.current,r=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(de,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,r?(o=t.mode,r=t.child,s={mode:"hidden",children:s},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=s):r=mr(s,o,0,null),e=dn(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=_a(n),t.memoizedState=Fa,e):Vs(t,s));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Km(e,t,s,o,c,i,n);if(r){r=o.fallback,s=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:o.children};return!(s&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Yt(i,l),o.subtreeFlags=i.subtreeFlags&14680064),c!==null?r=Yt(c,r):(r=dn(r,s,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,s=e.child.memoizedState,s=s===null?_a(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},r.memoizedState=s,r.childLanes=e.childLanes&~n,t.memoizedState=Fa,o}return r=e.child,e=r.sibling,o=Yt(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Vs(e,t){return t=mr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,o){return o!==null&&js(o),Gn(t,e.child,null,n),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,n,o,i,r,s){if(n)return t.flags&256?(t.flags&=-257,o=Yr(Error(L(422))),ui(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,i=t.mode,o=mr({mode:"visible",children:o.children},i,0,null),r=dn(r,i,s,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=_a(s),t.memoizedState=Fa,r);if(!(t.mode&1))return ui(e,t,s,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var c=o.dgst;return o=c,r=Error(L(419)),o=Yr(r,o,void 0),ui(e,t,s,o)}if(c=(s&e.childLanes)!==0,_e||c){if(o=we,o!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|s)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,$t(e,i),pt(o,e,i,-1))}return Ys(),o=Yr(Error(L(421))),ui(e,t,s,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cv.bind(null,e),i._reactRetry=t,null):(e=r.treeContext,Ge=Ht(i.nextSibling),Je=t,le=!0,dt=null,e!==null&&(Ze[et++]=bt,Ze[et++]=wt,Ze[et++]=fn,bt=e.id,wt=e.overflow,fn=t),t=Vs(t,o.children),t.flags|=4096,t)}function wd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ia(e.return,t,n)}function Jr(e,t,n,o,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=i)}function Rp(e,t,n){var o=t.pendingProps,i=o.revealOrder,r=o.tail;if(ze(e,t,o.children,n),o=de.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,t);else if(e.tag===19)wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(re(de,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jr(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jr(t,!0,n,null,r);break;case"together":Jr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xm(e,t,n){switch(t.tag){case 3:Fp(t),qn();break;case 5:up(t);break;case 1:Oe(t.type)&&_i(t);break;case 4:Ls(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;re(Vi,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(re(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?_p(e,t,n):(re(de,de.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);re(de,de.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),o)break;return null;case 22:case 23:return t.lanes=0,Tp(e,t,n)}return Pt(e,t,n)}var Op,Ra,Vp,Up;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};Vp=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,an(xt.current);var r=null;switch(n){case"input":i=la(e,i),o=la(e,o),r=[];break;case"select":i=pe({},i,{value:void 0}),o=pe({},o,{value:void 0}),r=[];break;case"textarea":i=pa(e,i),o=pa(e,o),r=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Mi)}fa(n,o);var s;n=null;for(d in i)if(!o.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jo.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in o){var l=o[d];if(c=i!=null?i[d]:void 0,o.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(r||(r=[]),r.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(r=r||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jo.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ae("scroll",e),r||c===l||(r=[])):(r=r||[]).push(d,l))}n&&(r=r||[]).push("style",n);var d=r;(t.updateQueue=d)&&(t.flags|=4)}};Up=function(e,t,n,o){n!==o&&(t.flags|=4)};function uo(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Zm(e,t,n){var o=t.pendingProps;switch(Ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Oe(t.type)&&Fi(),Pe(t),null;case 3:return o=t.stateNode,Yn(),se(Re),se(De),Ts(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Ya(dt),dt=null))),Ra(e,t),Pe(t),null;case 5:Bs(t);var i=an(Ro.current);if(n=t.type,e!==null&&t.stateNode!=null)Vp(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(L(166));return Pe(t),null}if(e=an(xt.current),ci(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[vt]=t,o[Fo]=r,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",o),ae("close",o);break;case"iframe":case"object":case"embed":ae("load",o);break;case"video":case"audio":for(i=0;i<xo.length;i++)ae(xo[i],o);break;case"source":ae("error",o);break;case"img":case"image":case"link":ae("error",o),ae("load",o);break;case"details":ae("toggle",o);break;case"input":Dl(o,r),ae("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},ae("invalid",o);break;case"textarea":Il(o,r),ae("invalid",o)}fa(n,r),i=null;for(var s in r)if(r.hasOwnProperty(s)){var c=r[s];s==="children"?typeof c=="string"?o.textContent!==c&&(r.suppressHydrationWarning!==!0&&di(o.textContent,c,e),i=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&di(o.textContent,c,e),i=["children",""+c]):jo.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ae("scroll",o)}switch(n){case"input":ti(o),Nl(o,r,!0);break;case"textarea":ti(o),zl(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=Mi)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(n,{is:o.is}):(e=s.createElement(n),n==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,n),e[vt]=t,e[Fo]=o,Op(e,t,!1,!1),t.stateNode=e;e:{switch(s=ma(n,o),n){case"dialog":ae("cancel",e),ae("close",e),i=o;break;case"iframe":case"object":case"embed":ae("load",e),i=o;break;case"video":case"audio":for(i=0;i<xo.length;i++)ae(xo[i],e);i=o;break;case"source":ae("error",e),i=o;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=o;break;case"details":ae("toggle",e),i=o;break;case"input":Dl(e,o),i=la(e,o),ae("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=pe({},o,{value:void 0}),ae("invalid",e);break;case"textarea":Il(e,o),i=pa(e,o),ae("invalid",e);break;default:i=o}fa(n,i),c=i;for(r in c)if(c.hasOwnProperty(r)){var l=c[r];r==="style"?bc(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hc(e,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(e,l):typeof l=="number"&&Ao(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(jo.hasOwnProperty(r)?l!=null&&r==="onScroll"&&ae("scroll",e):l!=null&&us(e,r,l,s))}switch(n){case"input":ti(e),Nl(e,o,!1);break;case"textarea":ti(e),zl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Qt(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?Fn(e,!!o.multiple,r,!1):o.defaultValue!=null&&Fn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Up(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(L(166));if(n=an(Ro.current),an(xt.current),ci(t)){if(o=t.stateNode,n=t.memoizedProps,o[vt]=t,(r=o.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:di(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[vt]=t,t.stateNode=o}return Pe(t),null;case 13:if(se(de),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ge!==null&&t.mode&1&&!(t.flags&128))sp(),qn(),t.flags|=98560,r=!1;else if(r=ci(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(L(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(L(317));r[vt]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),r=!1}else dt!==null&&(Ya(dt),dt=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?ye===0&&(ye=3):Ys())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Yn(),Ra(e,t),e===null&&To(t.stateNode.containerInfo),Pe(t),null;case 10:return Ns(t.type._context),Pe(t),null;case 17:return Oe(t.type)&&Fi(),Pe(t),null;case 19:if(se(de),r=t.memoizedState,r===null)return Pe(t),null;if(o=(t.flags&128)!==0,s=r.rendering,s===null)if(o)uo(r,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Wi(e),s!==null){for(t.flags|=128,uo(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,s=r.alternate,s===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,e=s.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(de,de.current&1|2),t.child}e=e.sibling}r.tail!==null&&ve()>Qn&&(t.flags|=128,o=!0,uo(r,!1),t.lanes=4194304)}else{if(!o)if(e=Wi(s),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!le)return Pe(t),null}else 2*ve()-r.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,o=!0,uo(r,!1),t.lanes=4194304);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ve(),t.sibling=null,n=de.current,re(de,o?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Gs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?We&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function ev(e,t){switch(Ps(t),t.tag){case 1:return Oe(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),se(Re),se(De),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bs(t),null;case 13:if(se(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(de),null;case 4:return Yn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var fi=!1,Ae=!1,tv=typeof WeakSet=="function"?WeakSet:Set,R=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ue(e,t,o)}else n.current=null}function Oa(e,t,n){try{n()}catch(o){ue(e,t,o)}}var Cd=!1;function nv(e,t){if(ka=Li,e=Yc(),Es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,c=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==r||o!==0&&f.nodeType!==3||(l=s+o),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++d===i&&(c=s),p===r&&++u===o&&(l=s),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Li=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,b=w.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),b);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){ue(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=Cd,Cd=!1,w}function ko(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&Oa(t,n,r)}i=i.next}while(i!==o)}}function ur(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Fo],delete t[ja],delete t[Fm],delete t[_m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mi));else if(o!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function Ha(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var Se=null,lt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)qp(e,t,n),n=n.sibling}function qp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ir,n)}catch{}switch(n.tag){case 5:Ae||Tn(n,t);case 6:var o=Se,i=lt;Se=null,Lt(e,t,n),Se=o,lt=i,Se!==null&&(lt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(lt?(e=Se,n=n.stateNode,e.nodeType===8?Vr(e.parentNode,n):e.nodeType===1&&Vr(e,n),zo(e)):Vr(Se,n.stateNode));break;case 4:o=Se,i=lt,Se=n.stateNode.containerInfo,lt=!0,Lt(e,t,n),Se=o,lt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var r=i,s=r.destroy;r=r.tag,s!==void 0&&(r&2||r&4)&&Oa(n,t,s),i=i.next}while(i!==o)}Lt(e,t,n);break;case 1:if(!Ae&&(Tn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){ue(n,t,c)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Ae=(o=Ae)||n.memoizedState!==null,Lt(e,t,n),Ae=o):Lt(e,t,n);break;default:Lt(e,t,n)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tv),t.forEach(function(o){var i=pv.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var r=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,lt=!1;break e;case 3:Se=c.stateNode.containerInfo,lt=!0;break e;case 4:Se=c.stateNode.containerInfo,lt=!0;break e}c=c.return}if(Se===null)throw Error(L(160));qp(r,s,i),Se=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){ue(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ft(e),o&4){try{ko(3,e,e.return),ur(3,e)}catch(y){ue(e,e.return,y)}try{ko(5,e,e.return)}catch(y){ue(e,e.return,y)}}break;case 1:at(t,e),ft(e),o&512&&n!==null&&Tn(n,n.return);break;case 5:if(at(t,e),ft(e),o&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{Ao(i,"")}catch(y){ue(e,e.return,y)}}if(o&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,s=n!==null?n.memoizedProps:r,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&vc(i,r),ma(c,s);var d=ma(c,r);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?bc(i,f):u==="dangerouslySetInnerHTML"?hc(i,f):u==="children"?Ao(i,f):us(i,u,f,d)}switch(c){case"input":da(i,r);break;case"textarea":gc(i,r);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?Fn(i,!!r.multiple,g,!1):p!==!!r.multiple&&(r.defaultValue!=null?Fn(i,!!r.multiple,r.defaultValue,!0):Fn(i,!!r.multiple,r.multiple?[]:"",!1))}i[Fo]=r}catch(y){ue(e,e.return,y)}}break;case 6:if(at(t,e),ft(e),o&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(y){ue(e,e.return,y)}}break;case 3:if(at(t,e),ft(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(y){ue(e,e.return,y)}break;case 4:at(t,e),ft(e);break;case 13:at(t,e),ft(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(Ws=ve())),o&4&&kd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(d=Ae)||u,at(t,e),Ae=d):at(t,e),ft(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(R=e,u=e.child;u!==null;){for(f=R=u;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:ko(4,p,p.return);break;case 1:Tn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ue(o,n,y)}}break;case 5:Tn(p,p.return);break;case 22:if(p.memoizedState!==null){$d(f);continue}}g!==null?(g.return=p,R=g):$d(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=yc("display",s))}catch(y){ue(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){ue(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),ft(e),o&4&&kd(e);break;case 21:break;default:at(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var o=n;break e}n=n.return}throw Error(L(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Ao(i,""),o.flags&=-33);var r=Sd(e);Ha(e,r,i);break;case 3:case 4:var s=o.stateNode.containerInfo,c=Sd(e);Ua(e,c,s);break;default:throw Error(L(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ov(e,t,n){R=e,Yp(e)}function Yp(e,t,n){for(var o=(e.mode&1)!==0;R!==null;){var i=R,r=i.child;if(i.tag===22&&o){var s=i.memoizedState!==null||fi;if(!s){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Ae;c=fi;var d=Ae;if(fi=s,(Ae=l)&&!d)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Pd(i):l!==null?(l.return=s,R=l):Pd(i);for(;r!==null;)R=r,Yp(r),r=r.sibling;R=i,fi=c,Ae=d}Ed(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,R=r):Ed(e)}}function Ed(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||ur(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ae)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&dd(t,r,o);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dd(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ae||t.flags&512&&Va(t)}catch(p){ue(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function $d(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Pd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ur(4,t)}catch(l){ue(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(l){ue(t,i,l)}}var r=t.return;try{Va(t)}catch(l){ue(t,r,l)}break;case 5:var s=t.return;try{Va(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){R=null;break}var c=t.sibling;if(c!==null){c.return=t.return,R=c;break}R=t.return}}var iv=Math.ceil,Yi=Dt.ReactCurrentDispatcher,Us=Dt.ReactCurrentOwner,nt=Dt.ReactCurrentBatchConfig,Z=0,we=null,ge=null,ke=0,We=0,Mn=Zt(0),ye=0,Ho=null,vn=0,fr=0,Hs=0,Eo=null,Fe=null,Ws=0,Qn=1/0,ht=null,Ji=!1,Wa=null,qt=null,mi=!1,Rt=null,Qi=0,$o=0,qa=null,$i=-1,Pi=0;function Le(){return Z&6?ve():$i!==-1?$i:$i=ve()}function Gt(e){return e.mode&1?Z&2&&ke!==0?ke&-ke:Om.transition!==null?(Pi===0&&(Pi=Ic()),Pi):(e=ne,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e):1}function pt(e,t,n,o){if(50<$o)throw $o=0,qa=null,Error(L(185));Go(e,n,o),(!(Z&2)||e!==we)&&(e===we&&(!(Z&2)&&(fr|=n),ye===4&&Ft(e,ke)),Ve(e,o),n===1&&Z===0&&!(t.mode&1)&&(Qn=ve()+500,dr&&en()))}function Ve(e,t){var n=e.callbackNode;Of(e,t);var o=zi(e,e===we?ke:0);if(o===0)n!==null&&Tl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Tl(n),t===1)e.tag===0?Rm(jd.bind(null,e)):ip(jd.bind(null,e)),Tm(function(){!(Z&6)&&en()}),n=null;else{switch(zc(o)){case 1:n=xs;break;case 4:n=Dc;break;case 16:n=Ii;break;case 536870912:n=Nc;break;default:n=Ii}n=nu(n,Jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jp(e,t){if($i=-1,Pi=0,Z&6)throw Error(L(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var o=zi(e,e===we?ke:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ki(e,o);else{t=o;var i=Z;Z|=2;var r=Kp();(we!==e||ke!==t)&&(ht=null,Qn=ve()+500,ln(e,t));do try{sv();break}catch(c){Qp(e,c)}while(!0);Ds(),Yi.current=r,Z=i,ge!==null?t=0:(we=null,ke=0,t=ye)}if(t!==0){if(t===2&&(i=ya(e),i!==0&&(o=i,t=Ga(e,i))),t===1)throw n=Ho,ln(e,0),Ft(e,o),Ve(e,ve()),n;if(t===6)Ft(e,o);else{if(i=e.current.alternate,!(o&30)&&!rv(i)&&(t=Ki(e,o),t===2&&(r=ya(e),r!==0&&(o=r,t=Ga(e,r))),t===1))throw n=Ho,ln(e,0),Ft(e,o),Ve(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(L(345));case 2:nn(e,Fe,ht);break;case 3:if(Ft(e,o),(o&130023424)===o&&(t=Ws+500-ve(),10<t)){if(zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pa(nn.bind(null,e,Fe,ht),t);break}nn(e,Fe,ht);break;case 4:if(Ft(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var s=31-ct(o);r=1<<s,s=t[s],s>i&&(i=s),o&=~r}if(o=i,o=ve()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*iv(o/1960))-o,10<o){e.timeoutHandle=Pa(nn.bind(null,e,Fe,ht),o);break}nn(e,Fe,ht);break;case 5:nn(e,Fe,ht);break;default:throw Error(L(329))}}}return Ve(e,ve()),e.callbackNode===n?Jp.bind(null,e):null}function Ga(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Ki(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Ya(t)),e}function Ya(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function rv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],r=i.getSnapshot;i=i.value;try{if(!ut(r(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Hs,t&=~fr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),o=1<<n;e[n]=-1,t&=~o}}function jd(e){if(Z&6)throw Error(L(327));Un();var t=zi(e,0);if(!(t&1))return Ve(e,ve()),null;var n=Ki(e,t);if(e.tag!==0&&n===2){var o=ya(e);o!==0&&(t=o,n=Ga(e,o))}if(n===1)throw n=Ho,ln(e,0),Ft(e,t),Ve(e,ve()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Fe,ht),Ve(e,ve()),null}function qs(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Qn=ve()+500,dr&&en())}}function gn(e){Rt!==null&&Rt.tag===0&&!(Z&6)&&Un();var t=Z;Z|=1;var n=nt.transition,o=ne;try{if(nt.transition=null,ne=1,e)return e()}finally{ne=o,nt.transition=n,Z=t,!(Z&6)&&en()}}function Gs(){We=Mn.current,se(Mn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bm(n)),ge!==null)for(n=ge.return;n!==null;){var o=n;switch(Ps(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fi();break;case 3:Yn(),se(Re),se(De),Ts();break;case 5:Bs(o);break;case 4:Yn();break;case 13:se(de);break;case 19:se(de);break;case 10:Ns(o.type._context);break;case 22:case 23:Gs()}n=n.return}if(we=e,ge=e=Yt(e.current,null),ke=We=t,ye=0,Ho=null,Hs=fr=vn=0,Fe=Eo=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,r=n.pending;if(r!==null){var s=r.next;r.next=i,o.next=s}n.pending=o}rn=null}return e}function Qp(e,t){do{var n=ge;try{if(Ds(),Si.current=Gi,qi){for(var o=ce.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}qi=!1}if(mn=0,be=he=ce=null,So=!1,Oo=0,Us.current=null,n===null||n.return===null){ye=1,Ho=t,ge=null;break}e:{var r=e,s=n.return,c=n,l=t;if(t=ke,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=vd(s);if(g!==null){g.flags&=-257,gd(g,s,c,r,t),g.mode&1&&md(r,d,t),t=g,l=d;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){md(r,d,t),Ys();break e}l=Error(L(426))}}else if(le&&c.mode&1){var b=vd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),gd(b,s,c,r,t),js(Jn(l,c));break e}}r=l=Jn(l,c),ye!==4&&(ye=2),Eo===null?Eo=[r]:Eo.push(r),r=s;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=zp(r,l,t);ld(r,m);break e;case 1:c=l;var v=r.type,x=r.stateNode;if(!(r.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qt===null||!qt.has(x)))){r.flags|=65536,t&=-t,r.lanes|=t;var E=Lp(r,c,t);ld(r,E);break e}}r=r.return}while(r!==null)}Zp(n)}catch(C){t=C,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Kp(){var e=Yi.current;return Yi.current=Gi,e===null?Gi:e}function Ys(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(vn&268435455)&&!(fr&268435455)||Ft(we,ke)}function Ki(e,t){var n=Z;Z|=2;var o=Kp();(we!==e||ke!==t)&&(ht=null,ln(e,t));do try{av();break}catch(i){Qp(e,i)}while(!0);if(Ds(),Z=n,Yi.current=o,ge!==null)throw Error(L(261));return we=null,ke=0,ye}function av(){for(;ge!==null;)Xp(ge)}function sv(){for(;ge!==null&&!If();)Xp(ge)}function Xp(e){var t=tu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Zp(e):ge=t,Us.current=null}function Zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ev(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ge=null;return}}else if(n=Zm(n,t,We),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ye===0&&(ye=5)}function nn(e,t,n){var o=ne,i=nt.transition;try{nt.transition=null,ne=1,lv(e,t,n,o)}finally{nt.transition=i,ne=o}return null}function lv(e,t,n,o){do Un();while(Rt!==null);if(Z&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(Vf(e,r),e===we&&(ge=we=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mi||(mi=!0,nu(Ii,function(){return Un(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=nt.transition,nt.transition=null;var s=ne;ne=1;var c=Z;Z|=4,Us.current=null,nv(e,n),Gp(n,e),jm(Ea),Li=!!ka,Ea=ka=null,e.current=n,ov(n),zf(),Z=c,ne=s,nt.transition=r}else e.current=n;if(mi&&(mi=!1,Rt=e,Qi=i),r=e.pendingLanes,r===0&&(qt=null),Tf(n.stateNode),Ve(e,ve()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ji)throw Ji=!1,e=Wa,Wa=null,e;return Qi&1&&e.tag!==0&&Un(),r=e.pendingLanes,r&1?e===qa?$o++:($o=0,qa=e):$o=0,en(),null}function Un(){if(Rt!==null){var e=zc(Qi),t=nt.transition,n=ne;try{if(nt.transition=null,ne=16>e?16:e,Rt===null)var o=!1;else{if(e=Rt,Rt=null,Qi=0,Z&6)throw Error(L(331));var i=Z;for(Z|=4,R=e.current;R!==null;){var r=R,s=r.child;if(R.flags&16){var c=r.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(R=d;R!==null;){var u=R;switch(u.tag){case 0:case 11:case 15:ko(8,u,r)}var f=u.child;if(f!==null)f.return=u,R=f;else for(;R!==null;){u=R;var p=u.sibling,g=u.return;if(Hp(u),u===d){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var w=r.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}R=r}}if(r.subtreeFlags&2064&&s!==null)s.return=r,R=s;else e:for(;R!==null;){if(r=R,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ko(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,R=m;break e}R=r.return}}var v=e.current;for(R=v;R!==null;){s=R;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,R=x;else e:for(s=v;R!==null;){if(c=R,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ur(9,c)}}catch(C){ue(c,c.return,C)}if(c===s){R=null;break e}var E=c.sibling;if(E!==null){E.return=c.return,R=E;break e}R=c.return}}if(Z=i,en(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ir,e)}catch{}o=!0}return o}finally{ne=n,nt.transition=t}}return!1}function Ad(e,t,n){t=Jn(n,t),t=zp(e,t,1),e=Wt(e,t,1),t=Le(),e!==null&&(Go(e,1,t),Ve(e,t))}function ue(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qt===null||!qt.has(o))){e=Jn(n,e),e=Lp(t,e,1),t=Wt(t,e,1),e=Le(),t!==null&&(Go(t,1,e),Ve(t,e));break}}t=t.return}}function dv(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>ve()-Ws?ln(e,0):Hs|=n),Ve(e,t)}function eu(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=Le();e=$t(e,t),e!==null&&(Go(e,t,n),Ve(e,n))}function cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eu(e,n)}function pv(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(L(314))}o!==null&&o.delete(t),eu(e,n)}var tu;tu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Xm(e,t,n);_e=!!(e.flags&131072)}else _e=!1,le&&t.flags&1048576&&rp(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ei(e,t),e=t.pendingProps;var i=Wn(t,De.current);Vn(t,n),i=Fs(null,t,o,e,i,n);var r=_s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(o)?(r=!0,_i(t)):r=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zs(t),i.updater=pr,t.stateNode=i,i._reactInternals=t,La(t,o,e,n),t=Ma(null,t,o,!0,r,n)):(t.tag=0,le&&r&&$s(t),ze(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ei(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=fv(o),e=st(o,e),i){case 0:t=Ta(null,t,o,e,n);break e;case 1:t=yd(null,t,o,e,n);break e;case 11:t=xd(null,t,o,e,n);break e;case 14:t=hd(null,t,o,st(o.type,e),n);break e}throw Error(L(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:st(o,i),Ta(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:st(o,i),yd(e,t,o,i,n);case 3:e:{if(Fp(t),e===null)throw Error(L(387));o=t.pendingProps,r=t.memoizedState,i=r.element,pp(e,t),Hi(t,o,null,n);var s=t.memoizedState;if(o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){i=Jn(Error(L(423)),t),t=bd(e,t,o,n,i);break e}else if(o!==i){i=Jn(Error(L(424)),t),t=bd(e,t,o,n,i);break e}else for(Ge=Ht(t.stateNode.containerInfo.firstChild),Je=t,le=!0,dt=null,n=dp(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),o===i){t=Pt(e,t,n);break e}ze(e,t,o,n)}t=t.child}return t;case 5:return up(t),e===null&&Na(t),o=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,s=i.children,$a(o,i)?s=null:r!==null&&$a(o,r)&&(t.flags|=32),Mp(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return _p(e,t,n);case 4:return Ls(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Gn(t,null,o,n):ze(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:st(o,i),xd(e,t,o,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,r=t.memoizedProps,s=i.value,re(Vi,o._currentValue),o._currentValue=s,r!==null)if(ut(r.value,s)){if(r.children===i.children&&!Re.current){t=Pt(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){s=r.child;for(var l=c.firstContext;l!==null;){if(l.context===o){if(r.tag===1){l=St(-1,n&-n),l.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Ia(r.return,n,t),c.lanes|=n;break}l=l.next}}else if(r.tag===10)s=r.type===t.type?null:r.child;else if(r.tag===18){if(s=r.return,s===null)throw Error(L(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ia(s,n,t),s=r.sibling}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===t){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Vn(t,n),i=ot(i),o=o(i),t.flags|=1,ze(e,t,o,n),t.child;case 14:return o=t.type,i=st(o,t.pendingProps),i=st(o.type,i),hd(e,t,o,i,n);case 15:return Bp(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:st(o,i),Ei(e,t),t.tag=1,Oe(o)?(e=!0,_i(t)):e=!1,Vn(t,n),Ip(t,o,i),La(t,o,i,n),Ma(null,t,o,!0,e,n);case 19:return Rp(e,t,n);case 22:return Tp(e,t,n)}throw Error(L(156,t.tag))};function nu(e,t){return Ac(e,t)}function uv(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,o){return new uv(e,t,n,o)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fv(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ms)return 11;if(e===vs)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,o,i,r){var s=2;if(o=e,typeof e=="function")Js(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Pn:return dn(n.children,i,r,t);case fs:s=8,i|=8;break;case ia:return e=tt(12,n,t,i|2),e.elementType=ia,e.lanes=r,e;case ra:return e=tt(13,n,t,i),e.elementType=ra,e.lanes=r,e;case aa:return e=tt(19,n,t,i),e.elementType=aa,e.lanes=r,e;case uc:return mr(n,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cc:s=10;break e;case pc:s=9;break e;case ms:s=11;break e;case vs:s=14;break e;case Bt:s=16,o=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=tt(s,n,t,i),t.elementType=e,t.type=o,t.lanes=r,t}function dn(e,t,n,o){return e=tt(7,e,o,t),e.lanes=n,e}function mr(e,t,n,o){return e=tt(22,e,o,t),e.elementType=uc,e.lanes=n,e.stateNode={isHidden:!1},e}function Qr(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Kr(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mv(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nr(0),this.expirationTimes=Nr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,o,i,r,s,c,l){return e=new mv(e,t,n,c,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=tt(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(r),e}function vv(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return Kt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Oe(n))return op(e,n,t)}return t}function iu(e,t,n,o,i,r,s,c,l){return e=Qs(n,o,!0,e,i,r,s,c,l),e.context=ou(null),n=e.current,o=Le(),i=Gt(n),r=St(o,i),r.callback=t??null,Wt(n,r,i),e.current.lanes=i,Go(e,i,o),Ve(e,o),e}function vr(e,t,n,o){var i=t.current,r=Le(),s=Gt(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=St(r,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Wt(i,t,s),e!==null&&(pt(e,i,s,r),Ci(e,i,s)),s}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){Dd(e,t),(e=e.alternate)&&Dd(e,t)}function gv(){return null}var ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}gr.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));vr(e,t,null,null)};gr.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){vr(null,e,null,null)}),t[Et]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Fc(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function xv(e,t,n,o,i){if(i){if(typeof o=="function"){var r=o;o=function(){var d=Xi(s);r.call(d)}}var s=iu(t,o,e,0,null,!1,!1,"",Nd);return e._reactRootContainer=s,e[Et]=s.current,To(e.nodeType===8?e.parentNode:e),gn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var c=o;o=function(){var d=Xi(l);c.call(d)}}var l=Qs(e,0,!1,null,null,!1,!1,"",Nd);return e._reactRootContainer=l,e[Et]=l.current,To(e.nodeType===8?e.parentNode:e),gn(function(){vr(t,l,n,o)}),l}function hr(e,t,n,o,i){var r=n._reactRootContainer;if(r){var s=r;if(typeof i=="function"){var c=i;i=function(){var l=Xi(s);c.call(l)}}vr(t,s,e,i)}else s=xv(n,t,e,i,o);return Xi(s)}Lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=go(t.pendingLanes);n!==0&&(hs(t,n|1),Ve(t,ve()),!(Z&6)&&(Qn=ve()+500,en()))}break;case 13:gn(function(){var o=$t(e,1);if(o!==null){var i=Le();pt(o,e,1,i)}}),Ks(e,1)}};ys=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Le();pt(t,e,134217728,n)}Ks(e,134217728)}};Bc=function(e){if(e.tag===13){var t=Gt(e),n=$t(e,t);if(n!==null){var o=Le();pt(n,e,t,o)}Ks(e,t)}};Tc=function(){return ne};Mc=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};ga=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=lr(o);if(!i)throw Error(L(90));mc(o),da(o,i)}}}break;case"textarea":gc(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Sc=qs;kc=gn;var hv={usingClientEntryPoint:!1,Events:[Jo,Nn,lr,wc,Cc,qs]},fo={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pc(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{ir=vi.inject(yv),gt=vi}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(t))throw Error(L(200));return vv(e,t,null,n)};Ke.createRoot=function(e,t){if(!Zs(e))throw Error(L(299));var n=!1,o="",i=ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,o,i),e[Et]=t.current,To(e.nodeType===8?e.parentNode:e),new Xs(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Pc(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return gn(e)};Ke.hydrate=function(e,t,n){if(!xr(t))throw Error(L(200));return hr(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Zs(e))throw Error(L(405));var o=n!=null&&n.hydratedSources||null,i=!1,r="",s=ru;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=iu(t,null,e,1,n??null,i,!1,r,s),e[Et]=t.current,To(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gr(t)};Ke.render=function(e,t,n){if(!xr(t))throw Error(L(200));return hr(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!xr(e))throw Error(L(40));return e._reactRootContainer?(gn(function(){hr(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ke.unstable_batchedUpdates=qs;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!xr(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return hr(e,t,n,!1,o)};Ke.version="18.3.1-next-f1338f8080-20240426";function au(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(au)}catch(e){console.error(e)}}au(),ac.exports=Ke;var bv=ac.exports,Id=bv;na.createRoot=Id.createRoot,na.hydrateRoot=Id.hydrateRoot;function wv(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{id:"login-screen",style:{display:"flex",position:"fixed",inset:0,zIndex:9999,background:"linear-gradient(135deg,#0C1B2E 0%,#1A3050 60%,#0C1B2E 100%)",alignItems:"center",justifyContent:"center"},children:a.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[a.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"48px",fontWeight:900,color:"#fff",letterSpacing:"-2px"},children:["LIVI",a.jsx("span",{style:{color:"#1A6BC4"},children:"O"})]}),a.jsx("div",{style:{fontSize:"11px",color:"#8AAAC8",letterSpacing:"3px",textTransform:"uppercase",marginTop:"2px"},children:"Building Systems"})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"32px 28px",boxShadow:"0 24px 60px rgba(0,0,0,.5)"},children:[a.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Sign In"}),a.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"22px"},children:"Project Management Platform"}),a.jsx("div",{id:"login-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"9px 12px",borderRadius:"6px",marginBottom:"14px"}}),a.jsxs("div",{style:{marginBottom:"14px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"5px"},children:"Username"}),a.jsx("input",{id:"login-user",type:"text",placeholder:"Enter username",autoComplete:"username",style:{width:"100%",padding:"11px 13px",border:"1.5px solid #e0ddd5",borderRadius:"7px",fontSize:"13px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{e.key==="Enter"&&document.getElementById("login-pass").focus()}})]}),a.jsxs("div",{style:{marginBottom:"22px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"5px"},children:"Password"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{id:"login-pass",type:"password",placeholder:"Enter password",autoComplete:"current-password",style:{width:"100%",padding:"11px 40px 11px 13px",border:"1.5px solid #e0ddd5",borderRadius:"7px",fontSize:"13px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doLogin)==null||t.call(window))}}),a.jsx("button",{onClick:()=>{var e;return(e=window.toggleLoginPass)==null?void 0:e.call(window)},style:{position:"absolute",right:"11px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#aaa",fontSize:"15px"},children:"👁"})]})]}),a.jsx("button",{onClick:()=>{var e;return(e=window.doLogin)==null?void 0:e.call(window)},style:{width:"100%",padding:"13px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:700,cursor:"pointer",letterSpacing:".5px"},onMouseOver:e=>e.target.style.background="#1A3050",onMouseOut:e=>e.target.style.background="#0C1B2E",children:"Sign In →"}),a.jsxs("div",{style:{marginTop:"14px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("button",{onClick:()=>{var e;return(e=window.showForgotPass)==null?void 0:e.call(window)},style:{background:"none",border:"none",color:"#1A6BC4",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"Forgot Password?"}),a.jsx("button",{onClick:()=>{var e;return(e=window.showSetupPass)==null?void 0:e.call(window)},style:{background:"none",border:"none",color:"#6b6a64",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"Change Password"})]})]}),a.jsx("div",{style:{textAlign:"center",marginTop:"16px",fontSize:"10px",color:"#8AAAC8"},children:"© Livio Building Systems · Secure Access"})]})}),a.jsx("div",{id:"setup-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"360px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[a.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"4px"},children:"Change Password"}),a.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Verify current credentials to set a new password"}),a.jsx("div",{id:"setup-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Current Username"}),a.jsx("input",{id:"setup-user",type:"text",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Current Password"}),a.jsx("input",{id:"setup-curr",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"New Password"}),a.jsx("input",{id:"setup-new",type:"password",placeholder:"Min 4 characters",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{marginBottom:"18px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Confirm New Password"}),a.jsx("input",{id:"setup-conf",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doSetupPass)==null||t.call(window))}})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{onClick:()=>{var e;return(e=window.closeSetupPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:()=>{var e;return(e=window.doSetupPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Update Password"})]})]})}),a.jsx("div",{id:"forgot-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"380px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[a.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Forgot Password?"}),a.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Enter your username and registered email — we'll send a reset link."}),a.jsx("div",{id:"forgot-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),a.jsx("div",{id:"forgot-success",style:{display:"none",background:"#EDF8E5",border:"1px solid #B8DCA0",color:"#2D6A0F",fontSize:"11px",padding:"10px 12px",borderRadius:"6px",marginBottom:"12px"}}),a.jsxs("div",{style:{marginBottom:"12px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Username"}),a.jsx("input",{id:"forgot-user",type:"text",placeholder:"Enter your username",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5"})]}),a.jsxs("div",{style:{marginBottom:"18px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Registered Email Address"}),a.jsx("input",{id:"forgot-email",type:"email",placeholder:"Enter your registered email",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onFocus:e=>e.target.style.borderColor="#1A6BC4",onBlur:e=>e.target.style.borderColor="#e0ddd5",onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doForgotPass)==null||t.call(window))}})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{onClick:()=>{var e;return(e=window.closeForgotPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:()=>{var e;return(e=window.doForgotPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Send Reset Link →"})]}),a.jsx("div",{style:{marginTop:"12px",textAlign:"center"},children:a.jsx("button",{id:"forgot-reset-btn",onClick:()=>{var e;return(e=window.showResetPass)==null?void 0:e.call(window)},style:{display:"none",background:"none",border:"none",color:"#1A6BC4",fontSize:"11px",cursor:"pointer",textDecoration:"underline"},children:"I have a reset code → Set New Password"})})]})}),a.jsx("div",{id:"reset-pass-screen",style:{display:"none",position:"fixed",inset:0,zIndex:1e4,background:"rgba(0,0,0,.75)",alignItems:"center",justifyContent:"center"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"28px",width:"100%",maxWidth:"380px",margin:"20px",boxShadow:"0 20px 60px rgba(0,0,0,.5)"},children:[a.jsx("div",{style:{fontSize:"17px",fontWeight:700,color:"#0C1B2E",marginBottom:"3px"},children:"Set New Password"}),a.jsx("div",{style:{fontSize:"11px",color:"#6b6a64",marginBottom:"18px"},children:"Enter the reset code from your email and choose a new password."}),a.jsx("div",{id:"reset-error",style:{display:"none",background:"#FFF0F0",border:"1px solid #F5C0C0",color:"#9B1F1F",fontSize:"11px",padding:"8px 12px",borderRadius:"6px",marginBottom:"12px"}}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Username"}),a.jsx("input",{id:"reset-user",type:"text",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Reset Code (from email)"}),a.jsx("input",{id:"reset-code",type:"text",placeholder:"6-digit code",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box",letterSpacing:"3px",fontWeight:700}})]}),a.jsxs("div",{style:{marginBottom:"11px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"New Password"}),a.jsx("input",{id:"reset-new",type:"password",placeholder:"Min 4 characters",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{marginBottom:"18px"},children:[a.jsx("label",{style:{fontSize:"11px",fontWeight:600,color:"#333",display:"block",marginBottom:"4px"},children:"Confirm New Password"}),a.jsx("input",{id:"reset-conf",type:"password",style:{width:"100%",padding:"9px 12px",border:"1px solid #e0ddd5",borderRadius:"6px",fontSize:"12px",outline:"none",boxSizing:"border-box"},onKeyDown:e=>{var t;e.key==="Enter"&&((t=window.doResetPass)==null||t.call(window))}})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{onClick:()=>{var e;return(e=window.closeResetPass)==null?void 0:e.call(window)},style:{flex:1,padding:"10px",background:"#f5f4f0",border:"1px solid #e0ddd5",borderRadius:"7px",fontSize:"12px",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:()=>{var e;return(e=window.doResetPass)==null?void 0:e.call(window)},style:{flex:2,padding:"10px",background:"#0C1B2E",color:"#fff",border:"none",borderRadius:"7px",fontSize:"13px",fontWeight:700,cursor:"pointer"},children:"Reset Password"})]}),a.jsx("div",{style:{marginTop:"12px",textAlign:"center"},children:a.jsx("button",{onClick:()=>{var e,t;(e=window.closeForgotPass)==null||e.call(window),(t=window.closeResetPass)==null||t.call(window)},style:{background:"none",border:"none",color:"#1A6BC4",fontSize:"10px",cursor:"pointer",textDecoration:"underline"},children:"← Back to Sign In"})})]})})]})}function Cv(){return a.jsxs("aside",{className:"sb",id:"sidebar",children:[a.jsxs("div",{className:"sb-top",children:[a.jsx("div",{className:"sb-logo",children:"Livio Building Systems"}),a.jsx("div",{className:"sb-sub",children:"Construction Management"})]}),a.jsxs("div",{className:"sb-proj-box",children:[a.jsx("div",{className:"sb-proj-lbl",children:"Active Project"}),a.jsxs("button",{className:"sb-proj-btn",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"projects")},children:[a.jsx("span",{className:"sb-proj-name",id:"sb-proj",children:"Select a project"}),a.jsx("span",{style:{color:"#8AAAC8",fontSize:"11px"},children:"⇄"})]})]}),a.jsx("div",{className:"sb-sec",children:"Pages"}),a.jsxs("div",{className:"sb-scroll",children:[a.jsxs("ul",{className:"sb-nav",children:[a.jsx("li",{"data-page":"projects",children:a.jsxs("a",{id:"n-projects",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"projects")},children:["  ",a.jsx("span",{className:"ic",children:"🏠"}),"All Projects     ",a.jsx("span",{className:"ct",id:"ct-projects",children:"0"})]})}),a.jsx("li",{"data-page":"dashboard",children:a.jsxs("a",{id:"n-dashboard",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"dashboard")},children:[" ",a.jsx("span",{className:"ic",children:"📊"}),"Dashboard"]})}),a.jsx("li",{"data-page":"works",children:a.jsxs("a",{id:"n-works",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"works")},children:["     ",a.jsx("span",{className:"ic",children:"🏗"}),"Works at Site    ",a.jsx("span",{className:"ct",id:"ct-works",children:"0"})]})}),a.jsx("li",{"data-page":"milestones",children:a.jsxs("a",{id:"n-milestones",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"milestones")},children:[a.jsx("span",{className:"ic",children:"🏆"}),"Milestones       ",a.jsx("span",{className:"ct",id:"ct-ms",children:"0"})]})}),a.jsx("li",{"data-page":"quotes",children:a.jsxs("a",{id:"n-quotes",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"quotes")},children:["    ",a.jsx("span",{className:"ic",children:"💰"}),"Quotes            ",a.jsx("span",{className:"ct",id:"ct-q",children:"0"})]})}),a.jsx("li",{"data-page":"plans",children:a.jsxs("a",{id:"n-plans",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"plans")},children:["     ",a.jsx("span",{className:"ic",children:"📐"}),"Plans & Docs      ",a.jsx("span",{className:"ct",id:"ct-plans",children:"0"})]})}),a.jsx("li",{"data-page":"inspections",children:a.jsxs("a",{id:"n-inspections",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"inspections")},children:[a.jsx("span",{className:"ic",children:"🔍"}),"Inspections      ",a.jsx("span",{className:"ct",id:"ct-ins",children:"0"})]})}),a.jsx("li",{"data-page":"vendor-directory",children:a.jsxs("a",{id:"n-vendor-directory",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"vendor-directory")},children:[a.jsx("span",{className:"ic",children:"📋"}),"Vendor Directory"]})}),a.jsx("li",{"data-page":"vendors",children:a.jsxs("a",{id:"n-vendors",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"vendors")},children:["   ",a.jsx("span",{className:"ic",children:"🤝"}),"Vendor Contracts   ",a.jsx("span",{className:"ct",id:"ct-ven",children:"0"})]})}),a.jsx("li",{"data-page":"invoices",children:a.jsxs("a",{id:"n-invoices",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"invoices")},children:["  ",a.jsx("span",{className:"ic",children:"🧾"}),"Invoices           ",a.jsx("span",{className:"ct",id:"ct-inv",children:"0"})]})}),a.jsx("li",{"data-page":"payments",children:a.jsxs("a",{id:"n-payments",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"payments")},children:["  ",a.jsx("span",{className:"ic",children:"💳"}),"Payments          ",a.jsx("span",{className:"ct",id:"ct-pay",children:"0"})]})}),a.jsx("li",{"data-page":"checklist",children:a.jsxs("a",{id:"n-checklist",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"checklist")},children:[" ",a.jsx("span",{className:"ic",children:"☑"}),"Checklist          ",a.jsx("span",{className:"ct",id:"ct-chk",children:"0"})]})}),a.jsx("li",{"data-page":"qaqc",children:a.jsxs("a",{id:"n-qaqc",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"qaqc")},children:["      ",a.jsx("span",{className:"ic",children:"🔍"}),"QA/QC              ",a.jsx("span",{className:"ct",id:"ct-qaqc",children:"0"})]})}),a.jsx("li",{"data-page":"compliance",children:a.jsxs("a",{id:"n-compliance",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"compliance")},children:[a.jsx("span",{className:"ic",children:"✅"}),"Compliance"]})}),a.jsx("li",{"data-page":"export",children:a.jsxs("a",{id:"n-export",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"export")},children:["    ",a.jsx("span",{className:"ic",children:"📥"}),"Export"]})}),a.jsx("li",{"data-page":"momentum",children:a.jsxs("a",{id:"n-momentum",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"momentum")},children:["  ",a.jsx("span",{className:"ic",children:"⚡"}),"Momentum"]})}),a.jsx("li",{"data-page":"daily-tracker",children:a.jsxs("a",{id:"n-daily-tracker",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"daily-tracker")},children:[a.jsx("span",{className:"ic",children:"📅"}),"Daily Tracker"]})}),a.jsx("li",{"data-page":"client-contract",children:a.jsxs("a",{id:"n-client-contract",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"client-contract")},children:[a.jsx("span",{className:"ic",children:"📄"}),"Client Contract"]})}),a.jsx("li",{"data-page":"client-invoice",children:a.jsxs("a",{id:"n-client-invoice",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"client-invoice")},children:[a.jsx("span",{className:"ic",children:"🧾"}),"Client Invoice"]})}),a.jsx("li",{"data-page":"settings",children:a.jsxs("a",{id:"n-settings",onClick:()=>{var e;return(e=window.nav)==null?void 0:e.call(window,"settings")},children:[a.jsx("span",{className:"ic",children:"⚙"}),"Settings"]})})]}),a.jsx("div",{className:"sb-sec",children:"CA Codes"}),a.jsxs("div",{className:"sb-codes",style:{display:"flex",flexWrap:"wrap",gap:"4px",padding:"0 14px 12px"},children:[a.jsx("span",{className:"badge2",style:{background:"var(--blue-l)",color:"var(--blue)"},children:"CBC 2022"}),a.jsx("span",{className:"badge2",style:{background:"var(--green-l)",color:"var(--green)"},children:"CALGreen"}),a.jsx("span",{className:"badge2",style:{background:"var(--amber-l)",color:"var(--amber)"},children:"Title 24"}),a.jsx("span",{className:"badge2",style:{background:"var(--purple-l)",color:"var(--purple)"},children:"CEQA"}),a.jsx("span",{className:"badge2",style:{background:"var(--red-l)",color:"var(--red)"},children:"CalOSHA"}),a.jsx("span",{className:"badge2",style:{background:"var(--teal-l)",color:"var(--teal)"},children:"Seismic D"})]}),a.jsx("div",{className:"sb-foot",id:"sb-foot",children:"No project selected"})]}),a.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255,255,255,.12)",flexShrink:0},children:[a.jsx("div",{id:"sb-user-label",style:{fontSize:"9px",color:"#8AAAC8",marginBottom:"7px",textAlign:"center",letterSpacing:".3px"}}),a.jsxs("div",{style:{display:"flex",gap:"6px"},children:[a.jsx("button",{onClick:()=>{var e;return(e=window.showManageUsers)==null?void 0:e.call(window)},title:"Manage Users",style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",padding:"8px 6px",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.12)",borderRadius:"7px",color:"#8AAAC8",fontSize:"10px",fontWeight:600,cursor:"pointer",transition:"all .2s"},onMouseOver:e=>{e.currentTarget.style.background="rgba(255,255,255,.14)",e.currentTarget.style.color="#fff"},onMouseOut:e=>{e.currentTarget.style.background="rgba(255,255,255,.07)",e.currentTarget.style.color="#8AAAC8"},children:"👥 Users"}),a.jsx("button",{onClick:()=>{var e;return(e=window.doLogout)==null?void 0:e.call(window)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px",background:"rgba(155,31,31,.18)",border:"1px solid rgba(155,31,31,.3)",borderRadius:"7px",color:"#F09595",fontSize:"11px",fontWeight:700,cursor:"pointer",transition:"all .2s"},onMouseOver:e=>e.currentTarget.style.background="rgba(155,31,31,.38)",onMouseOut:e=>e.currentTarget.style.background="rgba(155,31,31,.18)",children:"⏻ Sign Out"})]})]})]})}function Sv(){return a.jsxs("div",{className:"topbar",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("button",{className:"mob-menu-btn",id:"mob-menu-btn",onClick:()=>{var e;return(e=window.toggleMobMenu)==null?void 0:e.call(window)},style:{display:"none",background:"none",border:"none",cursor:"pointer",padding:"6px",color:"var(--navy)",fontSize:"22px",lineHeight:1},children:"☰"}),a.jsx("div",{className:"tb-title",id:"page-title",children:"All Projects"})]}),a.jsxs("div",{className:"tb-right",children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>window.print(),children:"🖨 Print"}),a.jsx("button",{className:"btn btn-navy btn-sm",id:"add-btn",onClick:()=>{var e;return(e=window.handleAdd)==null?void 0:e.call(window)},children:"+ New Project"})]})]})}const su=qe.createContext();function kv({children:e}){const[t,n]=qe.useState("projects"),[o,i]=qe.useState(!1),[r,s]=qe.useState(0),c=qe.useCallback(()=>s(l=>l+1),[]);return a.jsx(su.Provider,{value:{curPage:t,setCurPage:n,loggedIn:o,setLoggedIn:i,triggerRender:c,renderTick:r},children:e})}const lu=()=>qe.useContext(su);function gi({frameId:e,title:t,html:n,isActive:o,onActivate:i}){const r=qe.useRef(null),[s,c]=qe.useState(!1);return qe.useEffect(()=>{var l;!o||!s||!i||!((l=r.current)!=null&&l.contentWindow)||i(r.current.contentWindow)},[o,s,i]),a.jsx("iframe",{id:e,ref:r,title:t,srcDoc:n,style:{width:"100%",height:"100%",border:"none",display:"block",background:"#fff"},onLoad:()=>{var l;c(!0),o&&i&&((l=r.current)!=null&&l.contentWindow)&&i(r.current.contentWindow)}})}const Ev=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Tracker</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0D1117;--bg2:#161B22;--bg3:#1F2937;--bg4:#243040;
  --border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.13);
  --text:#F0F6FC;--text2:#8B949E;--text3:#484F58;
  --orange:#FF6B2B;--og:rgba(255,107,43,0.18);--od:rgba(255,107,43,0.1);
  --lime:#39D353;--ld:rgba(57,211,83,0.1);
  --amber:#F0A824;--ad:rgba(240,168,36,0.12);
  --blue:#58A6FF;--bd:rgba(88,166,255,0.1);
  --purple:#BC8CFF;--pd:rgba(188,140,255,0.1);
  --red:#F85149;--rd:rgba(248,81,73,0.1);
  --r:10px;--r2:14px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--bg4);border-radius:10px}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow:hidden}

/* ── TOPBAR ── */
.topbar{height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;background:rgba(13,17,23,0.97);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:10px}
.logo-icon{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#FF6B2B,#FF3D00);display:flex;align-items:center;justify-content:center;font-size:16px}
.logo-text{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;letter-spacing:-0.3px}
.logo-text em{color:var(--orange);font-style:normal}
.topbar-center{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);background:var(--bg2);border:1px solid var(--border);padding:5px 12px;border-radius:20px}
.topbar-right{display:flex;align-items:center;gap:8px}
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 15px;border-radius:8px;font-size:13px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;border:none;transition:all 0.15s}
.btn-ghost{background:transparent;color:var(--text2);border:1px solid var(--border2)}
.btn-ghost:hover{background:var(--bg3);color:var(--text)}
.btn-orange{background:linear-gradient(135deg,#FF6B2B,#E85520);color:#fff}
.btn-orange:hover{background:linear-gradient(135deg,#FF8C5A,#FF6B2B);transform:translateY(-1px)}
.btn-sm{padding:5px 12px;font-size:11px;border-radius:7px}

/* ── LAYOUT ── */
.layout{display:flex;height:calc(100vh - 58px);overflow:hidden}

/* ── SIDEBAR ── */
.sidebar{width:252px;flex-shrink:0;background:var(--bg2);border-right:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden}
.sidebar-nav{display:flex;gap:0;padding:10px 12px 0;border-bottom:1px solid var(--border)}
.snav-btn{flex:1;background:transparent;border:none;border-bottom:2px solid transparent;padding:7px 4px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:11px;color:var(--text3);cursor:pointer;transition:all 0.15s;text-align:center;margin-bottom:-1px}
.snav-btn:hover{color:var(--text2)}
.snav-btn.active{color:var(--orange);border-bottom-color:var(--orange)}
.sidebar-head{padding:12px 14px 10px;border-bottom:1px solid var(--border)}
.sidebar-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px}
.sidebar-search{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:7px 12px;color:var(--text);font-size:12px;font-family:'Plus Jakarta Sans',sans-serif;width:100%;outline:none;transition:border-color 0.15s}
.sidebar-search:focus{border-color:var(--orange)}
.sidebar-search::placeholder{color:var(--text3)}
.sidebar-scroll{flex:1;overflow-y:auto;padding:6px 0}
.sidebar-panel{display:none;flex:1;flex-direction:column;overflow:hidden}
.sidebar-panel.active{display:flex}

/* Days list */
.day-item{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s}
.day-item:hover{background:var(--bg3);border-left-color:var(--border2)}
.day-item.active{background:var(--od);border-left-color:var(--orange)}
.day-avatar{width:36px;height:36px;border-radius:9px;background:var(--bg4);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--border);font-family:'Space Grotesk',sans-serif;font-weight:700;transition:all 0.15s}
.day-item.active .day-avatar{background:var(--og);border-color:rgba(255,107,43,0.35)}
.day-av-num{font-size:14px;line-height:1;color:var(--text)}
.day-item.active .day-av-num{color:var(--orange)}
.day-av-sub{font-family:'JetBrains Mono',monospace;font-size:7px;color:var(--text3);text-transform:uppercase;margin-top:1px}
.day-meta{flex:1;min-width:0}
.day-date{font-size:12px;font-weight:600;color:var(--text);line-height:1.3}
.day-loc{font-size:11px;color:var(--text2);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.day-prog{display:flex;align-items:center;gap:5px;margin-top:5px}
.mini-bar{flex:1;height:3px;background:var(--bg4);border-radius:2px;overflow:hidden}
.mini-fill{height:100%;border-radius:2px;transition:width 0.4s}
.mini-pct{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3);min-width:24px;text-align:right}
.sidebar-footer{padding:12px 14px;border-top:1px solid var(--border)}
.add-day-btn{width:100%;background:transparent;border:1.5px dashed var(--border2);color:var(--text2);padding:9px;border-radius:9px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:12px;cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:center;gap:6px}
.add-day-btn:hover{border-color:var(--orange);color:var(--orange);background:var(--od)}

/* Discussion sidebar list */
.disc-sidebar-item{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s;border-bottom:1px solid rgba(255,255,255,0.03)}
.disc-sidebar-item:hover{background:var(--bg3);border-left-color:var(--border2)}
.disc-sidebar-item.active{background:var(--pd);border-left-color:var(--purple)}
.disc-si-header{display:flex;align-items:center;gap:8px;margin-bottom:4px}
.disc-si-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text3);background:var(--bg4);padding:1px 6px;border-radius:4px;flex-shrink:0}
.disc-item.active .disc-si-num{color:var(--purple)}
.disc-si-title{font-size:12px;font-weight:600;color:var(--text);line-height:1.4;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.disc-si-status{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:500;padding:2px 7px;border-radius:8px;flex-shrink:0}
.dss-done{background:var(--ld);color:var(--lime)}
.dss-prog{background:var(--ad);color:var(--amber)}
.dss-pend{background:rgba(72,79,88,0.3);color:var(--text3)}
.dss-disc{background:var(--bd);color:var(--blue)}

/* ── MAIN ── */
.main{flex:1;overflow-y:auto;padding:24px 28px;background:var(--bg)}

/* ── DAY HEADER ── */
.day-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}
.day-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;letter-spacing:-0.5px;line-height:1;display:flex;align-items:baseline;gap:8px}
.day-title-n{color:var(--orange)}
.day-meta-row{display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap}
.chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--text2);background:var(--bg2);border:1px solid var(--border);padding:3px 9px;border-radius:20px}
.chip svg{width:11px;height:11px;opacity:0.7;flex-shrink:0}
.score-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:14px 20px;text-align:center;min-width:130px;position:relative;overflow:hidden}
.score-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,var(--og),transparent 60%);pointer-events:none}
.score-big{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:34px;line-height:1;color:var(--lime)}
.score-denom{font-size:16px;color:var(--text3);font-weight:400}
.score-sub{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text2);margin-top:4px}
.score-pbar{height:3px;background:var(--bg3);border-radius:2px;margin-top:8px;overflow:hidden}
.score-pfill{height:100%;border-radius:2px;background:var(--lime);transition:width 0.5s}

/* ── SUMMARY CARDS ── */
.sum-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}
.s-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;display:flex;align-items:center;gap:10px;transition:border-color 0.15s}
.s-card:hover{border-color:var(--border2)}
.s-ico{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.s-ico.g{background:var(--ld)}.s-ico.o{background:var(--od)}.s-ico.a{background:var(--ad)}.s-ico.b{background:var(--bd)}
.s-val{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px;line-height:1}
.s-val.g{color:var(--lime)}.s-val.o{color:var(--orange)}.s-val.a{color:var(--amber)}.s-val.b{color:var(--blue)}
.s-lbl{font-size:10px;color:var(--text2);margin-top:2px;font-weight:500}

/* ── TABS ── */
.tabs{display:flex;gap:2px;margin-bottom:18px;background:var(--bg2);border:1px solid var(--border);padding:4px;border-radius:10px;width:fit-content}
.tab-btn{background:transparent;border:none;padding:7px 16px;border-radius:7px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:12px;color:var(--text2);cursor:pointer;transition:all 0.15s}
.tab-btn:hover{color:var(--text);background:var(--bg3)}
.tab-btn.active{background:var(--bg4);color:var(--text)}
.tab-content{display:none}.tab-content.active{display:block}

/* ── CHECKLIST SECTION ── */
.cl-section{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);margin-bottom:12px;overflow:hidden;transition:border-color 0.15s}
.cl-section:hover{border-color:var(--border2)}
.cl-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer;user-select:none;transition:background 0.12s}
.cl-head:hover{background:rgba(255,255,255,0.02)}
.cl-head-l{display:flex;align-items:center;gap:10px}
.cl-ico{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.cl-ico.f{background:var(--od)}.cl-ico.r{background:var(--ld)}.cl-ico.fw{background:var(--ad)}
.cl-name{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px}
.cl-cnt{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2);background:var(--bg3);padding:2px 7px;border-radius:10px;border:1px solid var(--border)}
.cl-right{display:flex;align-items:center;gap:10px}
.cl-pbar{width:100px;height:5px;background:var(--bg3);border-radius:3px;overflow:hidden}
.cl-pfill{height:100%;border-radius:3px;transition:width 0.4s}
.cl-pfill.f{background:var(--orange)}.cl-pfill.r{background:var(--lime)}.cl-pfill.fw{background:var(--amber)}
.cl-pct{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text2);min-width:28px;text-align:right}
.cl-chev{color:var(--text3);font-size:11px;transition:transform 0.2s}.cl-chev.open{transform:rotate(90deg)}
.cl-body{border-top:1px solid var(--border)}

/* ── CHECK ITEM ── */
.ci{display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.03);transition:background 0.12s}
.ci:last-child{border-bottom:none}
.ci:hover{background:rgba(255,255,255,0.02)}
.ci.ck{background:rgba(57,211,83,0.04)}.ci.na{opacity:0.42}
.checkbox{width:20px;height:20px;border-radius:5px;border:1.5px solid var(--bg4);cursor:pointer;flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;transition:all 0.18s;background:transparent}
.checkbox:hover{border-color:var(--lime);background:var(--ld)}
.checkbox.ck{background:var(--lime);border-color:var(--lime)}
.checkbox.ck::after{content:'';width:11px;height:7px;border-left:2px solid #0D1117;border-bottom:2px solid #0D1117;transform:rotate(-45deg) translateY(-1px);display:block}
.ci-body{flex:1;min-width:0}
.ci-top{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.ci-lbl{font-size:13px;font-weight:500;color:var(--text);line-height:1.5}
.ci.ck .ci-lbl{text-decoration:line-through;color:var(--text3)}
.pts{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--lime);background:var(--ld);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}
.ci-hist{font-size:10px;color:var(--text3);margin-top:3px;font-family:'JetBrains Mono',monospace}
.ci-bottom{display:flex;align-items:center;gap:7px;margin-top:8px}
.remark{flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:7px;padding:6px 11px;font-size:12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s}
.remark::placeholder{color:var(--text3)}.remark:focus{border-color:var(--orange)}
.na-btn{font-family:'JetBrains Mono',monospace;font-size:10px;background:transparent;border:1px solid var(--border2);color:var(--text2);padding:4px 9px;border-radius:5px;cursor:pointer;transition:all 0.15s;flex-shrink:0}
.na-btn:hover{border-color:var(--amber);color:var(--amber)}
.na-btn.on{background:var(--ad);border-color:var(--amber);color:var(--amber)}

/* ── MEDIA ── */
.media-wrap{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:18px}
.media-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.media-ttl{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px}
.media-dot{width:6px;height:6px;background:var(--orange);border-radius:50%}
.media-grid{display:flex;gap:10px;flex-wrap:wrap}
.media-thumb{width:100px;height:80px;border-radius:9px;background:var(--bg3);border:1px solid var(--border);cursor:pointer;position:relative;overflow:hidden;transition:all 0.15s}
.media-thumb:hover{border-color:var(--border2);transform:scale(1.03)}
.media-thumb img{width:100%;height:100%;object-fit:cover}
.rm{position:absolute;top:5px;right:5px;background:rgba(0,0,0,0.75);border:none;color:white;width:20px;height:20px;border-radius:50%;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.15s}
.media-thumb:hover .rm{opacity:1}
.media-add{width:100px;height:80px;border-radius:9px;background:transparent;border:1.5px dashed var(--border2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;cursor:pointer;transition:all 0.15s;color:var(--text2);font-size:11px;font-weight:600}
.media-add:hover{border-color:var(--orange);color:var(--orange);background:var(--od)}
.media-add svg{width:18px;height:18px}
#fi{display:none}

/* ── HISTORY TABLE ── */
.hist-wrap{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden}
.hist-hd{padding:14px 18px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}
.hist-ttl{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px}
.hist-cnt{font-family:'JetBrains Mono',monospace;font-size:10px;background:var(--bg3);border:1px solid var(--border);padding:2px 7px;border-radius:10px;color:var(--text2)}
.ht{width:100%;border-collapse:collapse}
.ht th{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);text-align:left;padding:10px 16px;border-bottom:1px solid var(--border);background:rgba(255,255,255,0.015)}
.ht td{font-size:12px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.03);color:var(--text);vertical-align:middle}
.ht tr:last-child td{border-bottom:none}
.ht tr:hover td{background:rgba(255,255,255,0.02)}
.pill{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.5px;text-transform:uppercase;padding:3px 9px;border-radius:20px}
.pill.done{background:var(--ld);color:var(--lime)}.pill.partial{background:var(--ad);color:var(--amber)}.pill.pending{background:rgba(72,79,88,0.3);color:var(--text3)}

/* ── DISCUSSION VIEW ── */
.disc-page-header{margin-bottom:20px}
.disc-page-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:26px;letter-spacing:-0.5px;display:flex;align-items:center;gap:12px}
.disc-page-icon{width:36px;height:36px;border-radius:10px;background:var(--pd);display:flex;align-items:center;justify-content:center;font-size:18px}
.disc-page-sub{font-size:13px;color:var(--text2);margin-top:6px}
.disc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}

.disc-filter-row{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.filter-btn{background:transparent;border:1px solid var(--border2);color:var(--text2);padding:5px 12px;border-radius:20px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s;font-family:'Plus Jakarta Sans',sans-serif}
.filter-btn:hover{border-color:var(--purple);color:var(--purple)}
.filter-btn.active{background:var(--pd);border-color:var(--purple);color:var(--purple)}

/* Discussion card */
.disc-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);margin-bottom:10px;overflow:hidden;transition:all 0.15s}
.disc-card:hover{border-color:var(--border2)}
.disc-card.expanded{border-color:var(--purple)}
.disc-card-head{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;cursor:pointer;transition:background 0.12s}
.disc-card-head:hover{background:rgba(255,255,255,0.02)}
.disc-num-badge{width:28px;height:28px;border-radius:7px;background:var(--bg3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;color:var(--text2);flex-shrink:0;margin-top:1px}
.disc-card.expanded .disc-num-badge{background:var(--pd);border-color:rgba(188,140,255,0.3);color:var(--purple)}
.disc-head-body{flex:1;min-width:0}
.disc-head-row{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.disc-title{font-size:14px;font-weight:600;color:var(--text);line-height:1.4;flex:1}
.disc-status-badge{flex-shrink:0;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 9px;border-radius:20px;cursor:pointer;transition:all 0.15s;border:none}
.disc-status-badge:hover{opacity:0.8}
.ds-done{background:var(--ld);color:var(--lime)}
.ds-prog{background:var(--ad);color:var(--amber)}
.ds-pend{background:rgba(72,79,88,0.3);color:var(--text3)}
.ds-disc{background:var(--bd);color:var(--blue)}
.disc-preview{font-size:12px;color:var(--text2);margin-top:4px;line-height:1.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.disc-meta{display:flex;align-items:center;gap:10px;margin-top:6px}
.disc-meta-chip{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3);display:flex;align-items:center;gap:4px}
.disc-chev{color:var(--text3);font-size:11px;transition:transform 0.2s;flex-shrink:0;margin-top:4px}
.disc-chev.open{transform:rotate(90deg)}

.disc-body{border-top:1px solid var(--border);padding:16px;display:none;animation:fadeIn 0.15s ease}
.disc-body.open{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}

.disc-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.disc-detail-block{background:var(--bg3);border-radius:8px;padding:11px 13px}
.disc-detail-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:5px}
.disc-detail-val{font-size:13px;color:var(--text);line-height:1.5}
.disc-detail-val.full{grid-column:1/-1}

.disc-action-row{display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.status-select{background:var(--bg3);border:1px solid var(--border);border-radius:7px;padding:6px 10px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;outline:none;cursor:pointer}
.status-select:focus{border-color:var(--purple)}

.disc-comments{margin-top:14px}
.disc-comments-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:10px}
.comment-item{display:flex;gap:10px;margin-bottom:10px}
.comment-avatar{width:28px;height:28px;border-radius:7px;background:var(--og);border:1px solid rgba(255,107,43,0.3);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;font-family:'Space Grotesk',sans-serif;font-weight:700;color:var(--orange)}
.comment-bubble{flex:1;background:var(--bg3);border-radius:8px;border:1px solid var(--border);padding:9px 12px}
.comment-bubble-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.comment-author{font-size:11px;font-weight:600;color:var(--text)}
.comment-time{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text3)}
.comment-text{font-size:12px;color:var(--text2);line-height:1.5}
.comment-input-row{display:flex;gap:8px;margin-top:10px}
.comment-input{flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s}
.comment-input::placeholder{color:var(--text3)}.comment-input:focus{border-color:var(--purple)}

/* subtasks within discussion */
.disc-subtasks{margin-top:14px}
.disc-subtask-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px}
.subtask-item{display:flex;align-items:center;gap:9px;padding:7px 10px;background:var(--bg3);border-radius:7px;margin-bottom:5px;border:1px solid var(--border)}
.subtask-cb{width:16px;height:16px;border-radius:4px;border:1.5px solid var(--bg4);cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.15s;background:transparent}
.subtask-cb:hover{border-color:var(--lime)}
.subtask-cb.ck{background:var(--lime);border-color:var(--lime)}
.subtask-cb.ck::after{content:'';width:8px;height:5px;border-left:1.5px solid #0D1117;border-bottom:1.5px solid #0D1117;transform:rotate(-45deg) translateY(-1px);display:block}
.subtask-text{font-size:12px;color:var(--text);flex:1;line-height:1.4}
.subtask-cb.ck ~ .subtask-text{text-decoration:line-through;color:var(--text3)}

/* ── ADD DISCUSSION MODAL ── */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;align-items:center;justify-content:center}
.modal-overlay.open{display:flex}
.modal{background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:24px;width:500px;max-width:95vw;max-height:90vh;overflow-y:auto}
.modal-ttl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;color:var(--text);margin-bottom:18px;display:flex;align-items:center;gap:10px}
.modal-ico{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.modal label{font-size:11px;font-weight:600;color:var(--text2);display:block;margin-bottom:5px;letter-spacing:0.5px;text-transform:uppercase}
.modal input,.modal select,.modal textarea{width:100%;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:9px 12px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;margin-bottom:14px;outline:none;transition:border-color 0.15s}
.modal input:focus,.modal select:focus,.modal textarea:focus{border-color:var(--purple)}
.modal input::placeholder,.modal textarea::placeholder{color:var(--text3)}
.modal-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.modal-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:6px}

/* ── ADD DAY MODAL uses orange ── */
#addDayModal .modal input:focus,#addDayModal .modal textarea:focus{border-color:var(--orange)}
#addDayModal .modal-ico{background:var(--od)}

/* ── LIGHTBOX ── */
.lightbox{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:300;align-items:center;justify-content:center}
.lightbox.open{display:flex}
.lightbox img{max-width:90vw;max-height:90vh;border-radius:10px}
.lb-close{position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:38px;height:38px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.15s}
.lb-close:hover{background:rgba(255,255,255,0.2)}


/* ── CAMERA MODAL ── */
.cam-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:400;flex-direction:column;align-items:center;justify-content:center;gap:16px}
.cam-modal.open{display:flex}
.cam-viewfinder{position:relative;border-radius:14px;overflow:hidden;background:#000;box-shadow:0 0 0 2px var(--orange)}
.cam-viewfinder video{display:block;max-width:90vw;max-height:65vh;width:100%;height:auto}
.cam-viewfinder canvas{display:none}
.cam-controls{display:flex;align-items:center;gap:16px}
.cam-capture{width:64px;height:64px;border-radius:50%;background:var(--orange);border:4px solid rgba(255,255,255,0.3);cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:center;font-size:22px}
.cam-capture:hover{background:#FF8C5A;transform:scale(1.06)}
.cam-capture:active{transform:scale(0.95)}
.cam-flip{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:42px;height:42px;border-radius:50%;font-size:18px;cursor:pointer;transition:background 0.15s}
.cam-flip:hover{background:rgba(255,255,255,0.2)}
.cam-close{position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:38px;height:38px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.cam-close:hover{background:rgba(255,255,255,0.2)}
.cam-preview-strip{display:flex;gap:8px;max-width:90vw;overflow-x:auto;padding:4px 0}
.cam-prev-thumb{width:56px;height:44px;border-radius:7px;object-fit:cover;border:2px solid var(--orange);cursor:pointer;flex-shrink:0}
.cam-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2);letter-spacing:1px}

/* ── CLIENT LIST ── */
.client-item{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-left:3px solid transparent;transition:all 0.15s;border-bottom:1px solid rgba(255,255,255,0.03)}
.client-item:hover{background:var(--bg3);border-left-color:var(--border2)}
.client-item.active{background:var(--bd);border-left-color:var(--blue)}
.client-av{width:34px;height:34px;border-radius:9px;background:var(--bg4);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;font-family:'Space Grotesk',sans-serif;color:var(--blue);flex-shrink:0}
.client-meta{flex:1;min-width:0}
.client-name{font-size:12px;font-weight:600;color:var(--text)}
.client-email{font-size:11px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
/* ── CLIENT MAIN ── */
.client-main{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px;margin-bottom:14px}
.client-main-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.client-main-ttl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px}
.client-doc-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.client-doc-card{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:16px;cursor:pointer;transition:all 0.15s}
.client-doc-card:hover{border-color:var(--orange);background:var(--od)}
.client-doc-ico{font-size:22px;margin-bottom:8px}
.client-doc-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px}
.client-doc-desc{font-size:11px;color:var(--text2);line-height:1.5}
/* ── DOC MODAL ── */
.doc-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:400;align-items:center;justify-content:center;padding:20px}
.doc-modal.open{display:flex}
.doc-box{background:var(--bg2);border:1px solid var(--border2);border-radius:16px;width:100%;max-width:680px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}
.doc-hd{padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.doc-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px}
.doc-close{background:transparent;border:1px solid var(--border2);color:var(--text2);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:14px}
.doc-close:hover{background:var(--bg3);color:var(--text)}
.doc-body{padding:20px 22px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}
.doc-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.doc-field{display:flex;flex-direction:column;gap:5px}
.doc-field label{font-size:11px;font-weight:600;color:var(--text2);font-family:'JetBrains Mono',monospace;letter-spacing:0.5px;text-transform:uppercase}
.doc-field input,.doc-field textarea,.doc-field select{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:8px 11px;color:var(--text);font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color 0.15s;resize:vertical}
.doc-field input:focus,.doc-field textarea:focus{border-color:var(--orange)}
.doc-preview{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:16px;font-size:12px;color:var(--text2);line-height:1.7;font-family:'JetBrains Mono',monospace;white-space:pre-wrap;max-height:260px;overflow-y:auto}
.doc-ft{padding:14px 22px;border-top:1px solid var(--border);display:flex;align-items:center;gap:8px;justify-content:flex-end}

/* ── EMPTY ── */
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:14px;text-align:center}
.empty-ico{width:64px;height:64px;border-radius:16px;background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:4px}
.empty h3{font-family:'Space Grotesk',sans-serif;font-size:16px;color:var(--text);font-weight:600}
.empty p{font-size:13px;color:var(--text2);max-width:260px;line-height:1.6}

@media(max-width:700px){
  .sidebar{width:62px}
  .day-meta,.sidebar-label,.sidebar-search,.snav-btn span{display:none}
  .snav-btn{font-size:8px}
  .sidebar-head{padding:10px}
  .sum-row,.disc-stats{grid-template-columns:1fr 1fr}
  .main{padding:14px}
  .disc-detail-grid{grid-template-columns:1fr}
}
</style>
</head>
<body>

<div class="topbar">
  <div class="logo">
    <div class="logo-icon">📋</div>
    <div class="logo-text">Daily<em>Tracker</em></div>
  </div>
  <div class="topbar-center" id="todayLabel"></div>
  <div class="topbar-right">
    <button class="btn btn-ghost" id="topAddBtn" onclick="handleTopAdd()">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      <span id="topAddLabel">New Day</span>
    </button>
    <button class="btn btn-orange" onclick="exportAll()">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Export
    </button>
  </div>
</div>

<div class="layout">
  <!-- SIDEBAR -->
  <div class="sidebar">
    <div class="sidebar-nav">
      <button class="snav-btn active" onclick="switchSideView('days',this)" id="snav-days">📅 <span>Days</span></button>
      <button class="snav-btn" onclick="switchSideView('disc',this)" id="snav-disc">💬 <span>Discuss</span></button>
    </div>

    <!-- Days Panel -->
    <div class="sidebar-panel active" id="panel-days">
      <div class="sidebar-head">
        <div class="sidebar-label">Inspection Log</div>
        <input class="sidebar-search" type="text" placeholder="🔍  Search days..." oninput="filterSidebar(this.value)">
      </div>
      <div class="sidebar-scroll" id="dayList"></div>
      <div class="sidebar-footer">
        <button class="add-day-btn" onclick="openAddDayModal()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Inspection Day
        </button>
      </div>
    </div>

    <!-- Discussions Panel -->
    <div class="sidebar-panel" id="panel-disc">
      <div class="sidebar-head">
        <div class="sidebar-label">Discussion Items</div>
        <input class="sidebar-search" type="text" placeholder="🔍  Search topics..." oninput="filterDiscSidebar(this.value)" id="discSideSearch">
      </div>
      <div class="sidebar-scroll" id="discList"></div>
      <div class="sidebar-footer">
        <button class="add-day-btn" onclick="openAddDiscModal()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Discussion Item
        </button>
      </div>
    </div>


  </div>

  <!-- MAIN -->
  <div class="main" id="mainContent">
    <div class="empty">
      <div class="empty-ico">🏗️</div>
      <h3>No day selected</h3>
      <p>Add your first inspection day to start tracking site progress.</p>
      <button class="btn btn-orange" onclick="openAddDayModal()" style="margin-top:4px">+ Add First Day</button>
    </div>
  </div>
</div>

<!-- ADD DAY MODAL -->
<div class="modal-overlay" id="addDayModal">
  <div class="modal">
    <div class="modal-ttl"><div class="modal-ico">📅</div>Add Inspection Day</div>
    <div class="modal-row">
      <div><label>Date</label><input type="date" id="nd-date"></div>
      <div><label>Inspector Name</label><input type="text" id="nd-insp" placeholder="e.g. Ravi Kumar"></div>
    </div>
    <label>Site / Location</label>
    <input type="text" id="nd-loc" placeholder="e.g. Block A – Grid 4-7">
    <label>Pre-inspection Notes</label>
    <textarea id="nd-notes" rows="2" placeholder="Any observations before starting..."></textarea>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal('addDayModal')">Cancel</button>
      <button class="btn btn-orange" onclick="addDay()">Create Day →</button>
    </div>
  </div>
</div>

<!-- ADD DISCUSSION MODAL -->
<div class="modal-overlay" id="addDiscModal">
  <div class="modal">
    <div class="modal-ttl"><div class="modal-ico" style="background:var(--pd)">💬</div>Add Discussion Item</div>
    <label>Topic / Title</label>
    <input type="text" id="di-title" placeholder="e.g. Concrete patch work – Block B">
    <div class="modal-row">
      <div>
        <label>Status</label>
        <select id="di-status">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
          <option value="discussion">For Discussion</option>
        </select>
      </div>
      <div>
        <label>Assigned To</label>
        <input type="text" id="di-assign" placeholder="e.g. GilGil, Lorenzo">
      </div>
    </div>
    <label>Notes / Details</label>
    <textarea id="di-notes" rows="3" placeholder="Describe the discussion item, decisions made, next steps..."></textarea>
    <label>Sub-tasks (one per line)</label>
    <textarea id="di-subtasks" rows="3" placeholder="e.g. Take sewer line photos&#10;Confirm gas line drawing&#10;Submit permit"></textarea>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal('addDiscModal')">Cancel</button>
      <button class="btn btn-orange" style="background:linear-gradient(135deg,var(--purple),#9B6FD4)" onclick="addDiscItem()">Add Item →</button>
    </div>
  </div>
</div>

<!-- ADD CLIENT MODAL -->
<div class="modal-overlay" id="addClientModal">
  <div class="modal">
    <div class="modal-ttl"><div class="modal-ico" style="background:var(--bd)">👤</div>Add Client</div>
    <div class="modal-row">
      <div><label>Full Name / Company</label><input type="text" id="cl-name" placeholder="e.g. John Doe / ABC Corp"></div>
      <div><label>Phone</label><input type="text" id="cl-phone" placeholder="e.g. +1 555 000 1234"></div>
    </div>
    <label>Email</label>
    <input type="email" id="cl-email" placeholder="client@example.com">
    <label>Address</label>
    <input type="text" id="cl-addr" placeholder="e.g. 123 Main St, City, State">
    <label>Notes</label>
    <textarea id="cl-notes" rows="2" placeholder="Any notes about this client..."></textarea>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal('addClientModal')">Cancel</button>
      <button class="btn btn-orange" onclick="saveClient()">Save Client →</button>
    </div>
  </div>
</div>

<!-- CONTRACT MODAL -->
<div class="doc-modal" id="contractModal">
  <div class="doc-box">
    <div class="doc-hd"><div class="doc-title">📄 Generate Contract</div><button class="doc-close" onclick="closeDocModal('contractModal')">✕</button></div>
    <div class="doc-body">
      <div class="doc-row">
        <div class="doc-field"><label>Client Name</label><input type="text" id="ct-client" placeholder="e.g. John Doe"></div>
        <div class="doc-field"><label>Client Address</label><input type="text" id="ct-addr" placeholder="e.g. 123 Main St"></div>
      </div>
      <div class="doc-row">
        <div class="doc-field"><label>Project Name</label><input type="text" id="ct-project" placeholder="e.g. Residential Build – Phase 1"></div>
        <div class="doc-field"><label>Contract Date</label><input type="date" id="ct-date"></div>
      </div>
      <div class="doc-row">
        <div class="doc-field"><label>Contract Amount ($)</label><input type="number" id="ct-amount" placeholder="50000"></div>
        <div class="doc-field"><label>Completion Date</label><input type="date" id="ct-end"></div>
      </div>
      <div class="doc-field"><label>Scope of Work</label><textarea id="ct-scope" rows="3" placeholder="Describe the work to be performed..."></textarea></div>
      <div class="doc-field"><label>Payment Terms</label><textarea id="ct-terms" rows="2" placeholder="e.g. 30% upfront, 40% at milestone, 30% on completion"></textarea></div>
      <div class="doc-field"><label>Preview</label><div class="doc-preview" id="ct-preview">Fill in fields above then click Preview.</div></div>
    </div>
    <div class="doc-ft">
      <button class="btn btn-ghost" onclick="previewContract()">Preview</button>
      <button class="btn btn-ghost" onclick="copyDocText('ct-preview')">📋 Copy</button>
      <button class="btn btn-orange" onclick="downloadDocText('ct-preview','contract')">⬇ Download</button>
    </div>
  </div>
</div>

<!-- INVOICE MODAL -->
<div class="doc-modal" id="invoiceModal">
  <div class="doc-box">
    <div class="doc-hd"><div class="doc-title">🧾 Generate Invoice</div><button class="doc-close" onclick="closeDocModal('invoiceModal')">✕</button></div>
    <div class="doc-body">
      <div class="doc-row">
        <div class="doc-field"><label>Client Name</label><input type="text" id="inv-client" placeholder="e.g. John Doe"></div>
        <div class="doc-field"><label>Invoice #</label><input type="text" id="inv-num" placeholder="INV-2026-001"></div>
      </div>
      <div class="doc-row">
        <div class="doc-field"><label>Project Name</label><input type="text" id="inv-project" placeholder="e.g. Block A Construction"></div>
        <div class="doc-field"><label>Invoice Date</label><input type="date" id="inv-date"></div>
      </div>
      <div class="doc-field"><label>Line Items (one per line: Description | Qty | Unit Price)</label><textarea id="inv-items" rows="5" placeholder="Foundation work | 1 | 15000&#10;Rebar installation | 1 | 8000"></textarea></div>
      <div class="doc-row">
        <div class="doc-field"><label>Tax %</label><input type="number" id="inv-tax" value="0" min="0" max="100"></div>
        <div class="doc-field"><label>Due Date</label><input type="date" id="inv-due"></div>
      </div>
      <div class="doc-field"><label>Notes</label><textarea id="inv-notes" rows="2" placeholder="Payment via bank transfer..."></textarea></div>
      <div class="doc-field"><label>Preview</label><div class="doc-preview" id="inv-preview">Fill in fields above then click Preview.</div></div>
    </div>
    <div class="doc-ft">
      <button class="btn btn-ghost" onclick="previewInvoice()">Preview</button>
      <button class="btn btn-ghost" onclick="copyDocText('inv-preview')">📋 Copy</button>
      <button class="btn btn-orange" onclick="downloadDocText('inv-preview','invoice')">⬇ Download</button>
    </div>
  </div>
</div>

<!-- CAMERA MODAL -->
<div class="cam-modal" id="camModal">
  <button class="cam-close" onclick="closeCamera()">✕</button>
  <div class="cam-label" id="camLabel">LIVE CAMERA</div>
  <div class="cam-viewfinder">
    <video id="camVideo" autoplay playsinline muted></video>
    <canvas id="camCanvas"></canvas>
  </div>
  <div class="cam-controls">
    <button class="cam-flip" onclick="flipCamera()" title="Flip camera">🔄</button>
    <button class="cam-capture" onclick="snapPhoto()" title="Take photo">📷</button>
    <button class="cam-flip" onclick="closeCamera()" title="Done" style="font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;width:auto;padding:0 14px;border-radius:20px">Done</button>
  </div>
  <div class="cam-preview-strip" id="camStrip"></div>
</div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <button class="lb-close" onclick="closeLightbox()">✕</button>
  <img id="lbImg" src="" alt="">
</div>
<input type="file" id="fi" accept="image/*,video/*" multiple onchange="handleUpload(event)">
<input type="file" id="fc" accept="image/*" capture="environment" onchange="handleUpload(event)">

<script>
// ── CHECKLIST DATA ──
const CL={
  foundation:{label:"Foundation Work",icon:"🏛️",cls:"f",items:[
    {id:"f1",text:"Excavation depth & dimensions verified per drawing",pts:10},
    {id:"f2",text:"Soil bearing capacity assessed / documented",pts:8},
    {id:"f3",text:"Bottom of excavation leveled and compacted",pts:8},
    {id:"f4",text:"Dewatering measures in place (if required)",pts:6},
    {id:"f5",text:"Anti-termite / waterproofing treatment applied",pts:6},
    {id:"f6",text:"PCC (Plain Cement Concrete) mix ratio correct",pts:10},
    {id:"f7",text:"PCC thickness meets spec (min 75mm)",pts:8},
    {id:"f8",text:"Foundation width & depth as per structural drawing",pts:10},
    {id:"f9",text:"No debris / loose material in excavation",pts:5},
    {id:"f10",text:"Safety / shoring in place for deep excavation",pts:7},
  ]},
  rebar:{label:"Rebar Work",icon:"🔩",cls:"r",items:[
    {id:"r1",text:"Rebar diameter matches structural drawing spec",pts:10},
    {id:"r2",text:"Rebar spacing correct (both ways)",pts:10},
    {id:"r3",text:"Cover blocks / spacers installed (min 40mm cover)",pts:8},
    {id:"r4",text:"Lap length per code (40D min for tension bars)",pts:8},
    {id:"r5",text:"Starter bars aligned and secured",pts:8},
    {id:"r6",text:"No rusted / damaged bars without approval",pts:7},
    {id:"r7",text:"Hooks / bends at correct angle (135° for stirrups)",pts:7},
    {id:"r8",text:"Stirrup spacing matches drawing",pts:8},
    {id:"r9",text:"All bar intersections tied with binding wire",pts:6},
    {id:"r10",text:"No unauthorized substitutions of bar grade/size",pts:8},
  ]},
  formwork:{label:"Form Work",icon:"🪵",cls:"fw",items:[
    {id:"fw1",text:"Formwork plumb and level (checked with spirit level)",pts:10},
    {id:"fw2",text:"Formwork dimensions match drawing (width/height)",pts:10},
    {id:"fw3",text:"Form panels properly oiled / release agent applied",pts:6},
    {id:"fw4",text:"Joints sealed to prevent cement slurry leakage",pts:7},
    {id:"fw5",text:"Adequate lateral bracing & props installed",pts:8},
    {id:"fw6",text:"Prop spacing & load-bearing capacity verified",pts:8},
    {id:"fw7",text:"Openings / cutouts correctly positioned",pts:7},
    {id:"fw8",text:"Access holes for concrete vibrator provided",pts:5},
    {id:"fw9",text:"No cracks or damaged panels used",pts:7},
    {id:"fw10",text:"Pre-pour checklist signed off by site engineer",pts:10},
  ]}
};

// ── DISCUSSION SEED DATA ──
const DISC_SEED = [
  {id:"d1",num:1,title:"Concrete – 4 inch x 2 inch patch",status:"in-progress",assignedTo:"GilGil",notes:"GilGil said he will do gas line work as per drawing. This includes sewer line and water line.",subtasks:[{id:"st1",text:"Gas line work as per drawing",done:false},{id:"st2",text:"Sewer line coordination",done:false},{id:"st3",text:"Water line coordination",done:false}],comments:[],date:"03/25"},
  {id:"d2",num:2,title:"Sewer line photos",status:"done",assignedTo:"",notes:"Sewer line photos taken and documented.",subtasks:[],comments:[],date:"03/25"},
  {id:"d3",num:3,title:"Sewer line, water line, and gas line",status:"done",assignedTo:"",notes:"All three utility lines coordinated and confirmed.",subtasks:[],comments:[],date:"03/25"},
  {id:"d4",num:4,title:"HVAC end-to-end work schedule",status:"done",assignedTo:"",notes:"Ducts are installed. Copper piping done. Wiring done. Machine payment: 10k + 10k for installation. Ready for inspection.",subtasks:[{id:"st4",text:"Ducts installed",done:true},{id:"st5",text:"Copper piping done",done:true},{id:"st6",text:"Wiring done",done:true},{id:"st7",text:"Machine payment – 10k + 10k for installation",done:true},{id:"st8",text:"Schedule inspection",done:false}],comments:[],date:"03/25"},
  {id:"d5",num:5,title:"T24 – QII Confirmation",status:"done",assignedTo:"",notes:"T24 QII confirmed.",subtasks:[],comments:[],date:"03/25"},
  {id:"d6",num:6,title:"Bill – time for submission",status:"in-progress",assignedTo:"",notes:"Two to three weeks lead time for bill submission.",subtasks:[],comments:[],date:"03/25"},
  {id:"d7",num:7,title:"Swimming pool project (track separately)",status:"done",assignedTo:"",notes:"Confirmed for Monday. To be tracked as a separate project.",subtasks:[],comments:[],date:"03/25"},
  {id:"d8",num:8,title:"Swimming pool – create separate checklist / project milestones",status:"in-progress",assignedTo:"",notes:"Full milestone breakdown created for the swimming pool project.",subtasks:[
    {id:"st10",text:"Initial Deposit – Contract signing",done:false},
    {id:"st11",text:"Design, Engineering & Permit Submission",done:false},
    {id:"st12",text:"Excavation Completed",done:false},
    {id:"st13",text:"Pool Layout, Leveling & Formwork Preparation",done:false},
    {id:"st14",text:"Rebar Installation (floor, walls, steps, benches, bond beam)",done:false},
    {id:"st15",text:"Plumbing Completed",done:false},
    {id:"st16",text:"Gunite Applied (entire pool shell)",done:false},
    {id:"st17",text:"Tile Installation (pool perimeter)",done:false},
    {id:"st18",text:"Coping Installation (travertine around pool)",done:false},
    {id:"st19",text:"Equipment Installation",done:false},
    {id:"st20",text:"Pool Cover Ordered",done:false},
    {id:"st21",text:"Pebble Finish Applied",done:false},
    {id:"st22",text:"Pool Cover Installed",done:false},
    {id:"st23",text:"Project Completion & Final Balance",done:false},
  ],comments:[],date:"03/25"},
  {id:"d9",num:9,title:"PGE Scope for excavation – Gas and Electric",status:"done",assignedTo:"",notes:"PGE scope confirmed for gas and electric excavation.",subtasks:[],comments:[],date:"03/25"},
  {id:"d10",num:10,title:"Densglass installation",status:"done",assignedTo:"Flavio",notes:"Confirmation received from Flavio.",subtasks:[],comments:[],date:"03/25"},
  {id:"d11",num:11,title:"Create web app for Dan – daily progress and checklist",status:"in-progress",assignedTo:"",notes:"Web app to store daily progress and maintain checklist. Currently in progress.",subtasks:[],comments:[],date:"03/25"},
  {id:"d12",num:12,title:"Schedule Inspection – Densglass – Underlayment",status:"done",assignedTo:"",notes:"Scheduled for Tuesday (latest available).",subtasks:[],comments:[],date:"03/25"},
  {id:"d13",num:13,title:"Utility Dashboard",status:"done",assignedTo:"",notes:"Utility dashboard completed.",subtasks:[],comments:[],date:"03/25"},
  {id:"d14",num:14,title:"Roofing work timeline",status:"done",assignedTo:"Lorenzo",notes:"Lorenzo agreed to complete underlayment by Tuesday.",subtasks:[],comments:[],date:"03/25"},
  {id:"d15",num:15,title:"Washing Machine in ADU (Refrigerator)",status:"pending",assignedTo:"",notes:"For discussion.",subtasks:[],comments:[],date:"03/25"},
];

// ── STATE ──
const DT_STATE_KEY = 'dt_state';
const cloneData = (value, fallback) => {
  if (value == null) return fallback;
  try { return JSON.parse(JSON.stringify(value)); } catch { return fallback; }
};
function getHostApp(){
  try{
    if(window.parent && window.parent !== window && window.parent.DB && typeof window.parent.saveDB === 'function'){
      return window.parent;
    }
  }catch{}
  return null;
}
function getHostProject(host=getHostApp()){
  try{
    const db = host?.DB;
    const projects = db?.projects;
    if(!Array.isArray(projects) || !projects.length) return null;
    const activeId = db.activeId ?? db.activeProjectId ?? projects[0]?.id ?? null;
    return projects.find(p=>p.id===activeId) || projects[0] || null;
  }catch{}
  return null;
}
function readFallbackState(){
  let daysState = [];
  let discState = null;
  let clientsState = [];
  let meta = {};
  try{ daysState = JSON.parse(localStorage.getItem('dt_days')||'[]'); }catch{}
  try{ discState = JSON.parse(localStorage.getItem('dt_disc')||'null'); }catch{}
  try{ clientsState = JSON.parse(localStorage.getItem('dt_clients')||'[]'); }catch{}
  try{ meta = JSON.parse(localStorage.getItem(DT_STATE_KEY)||'{}') || {}; }catch{}
  return {
    days: Array.isArray(daysState) ? daysState : [],
    discItems: Array.isArray(discState) ? discState : cloneData(DISC_SEED, []),
    clients: Array.isArray(clientsState) ? clientsState : [],
    curDay: meta.curDay ?? null,
    curDiscId: meta.curDiscId ?? null,
    curClient: meta.curClient ?? null,
  };
}
function buildTrackerState(){
  return {
    days: cloneData(days, []),
    discItems: cloneData(discItems, []),
    clients: cloneData(clients, []),
    curDay,
    curDiscId,
    curClient,
  };
}
function applyTrackerState(raw){
  const state = raw && typeof raw === 'object' ? raw : {};
  days = Array.isArray(state.days) ? cloneData(state.days, []) : [];
  discItems = Array.isArray(state.discItems) ? cloneData(state.discItems, []) : cloneData(DISC_SEED, []);
  clients = Array.isArray(state.clients) ? cloneData(state.clients, []) : [];
  curDay = state.curDay && days.some(d=>d.id===state.curDay) ? state.curDay : (days.length ? days[days.length-1].id : null);
  curDiscId = state.curDiscId && discItems.some(d=>d.id===state.curDiscId) ? state.curDiscId : null;
  curClient = state.curClient && clients.some(c=>c.id===state.curClient) ? state.curClient : null;
}
function writeFallbackState(state){
  localStorage.setItem('dt_days', JSON.stringify(state.days));
  localStorage.setItem('dt_disc', JSON.stringify(state.discItems));
  localStorage.setItem('dt_clients', JSON.stringify(state.clients));
  localStorage.setItem(DT_STATE_KEY, JSON.stringify({
    curDay: state.curDay ?? null,
    curDiscId: state.curDiscId ?? null,
    curClient: state.curClient ?? null,
  }));
}
function readTrackerState(){
  const project = getHostProject();
  if(project){
    return project.dailyTracker || {};
  }
  return readFallbackState();
}
function saveTrackerState(){
  const state = buildTrackerState();
  const host = getHostApp();
  const project = getHostProject(host);
  if(project){
    project.dailyTracker = cloneData(state, {});
    try{
      host.saveDB();
      return;
    }catch(err){
      console.error('daily tracker shared save failed:', err);
    }
  }
  writeFallbackState(state);
}
let days = [];
let discItems = [];
let curDay = null;
let curDiscId = null;
let sideView = 'days';
let discFilter = 'all';
let expandedDisc = {};
let clients = [];
let curClient = null;
let syncedProjectId = null;

applyTrackerState(readTrackerState());

const save = () => { saveTrackerState(); };
const getDay = id => days.find(d=>d.id===id);
const getDisc = id => discItems.find(d=>d.id===id);
const esc = s => (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

// ── SIDEBAR VIEW SWITCHING ──
function switchSideView(view, btn) {
  sideView = view;
  document.querySelectorAll('.snav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.sidebar-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+view).classList.add('active');
  const labelMap={days:'New Day',disc:'New Item'};
  document.getElementById('topAddBtn').style.display='';
  document.getElementById('topAddLabel').textContent=labelMap[view]||'';
  if(view==='disc') renderDiscMain();
  else if(view==='days') renderMain();
}

function handleTopAdd(){
  if(sideView==='days') openAddDayModal();
  else if(sideView==='disc') openAddDiscModal();
}


// ── SCORE ──
function sc(day){
  let e=0,t=0,c=0,ti=0;
  Object.keys(CL).forEach(k=>{CL[k].items.forEach(i=>{ti++;t+=i.pts;if(day.checks?.[i.id]==='checked'){e+=i.pts;c++}})});
  return{e,t,c,ti};
}

// ── DAYS SIDEBAR ──
function renderSidebar(f=''){
  const list = document.getElementById('dayList');
  const fd = days.slice().reverse().filter(d=>!f||d.date.includes(f)||(d.location||'').toLowerCase().includes(f.toLowerCase())||(d.inspector||'').toLowerCase().includes(f.toLowerCase()));
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">\${days.length?'No matches':'No days yet'}</div>\`;return}
  list.innerHTML = fd.map(day=>{
    const s=sc(day),pct=Math.round((s.c/s.ti)*100);
    const fc=pct===100?'var(--lime)':pct>0?'var(--amber)':'var(--text3)';
    const d=new Date(day.date+'T12:00:00');
    return \`<div class="day-item\${day.id===curDay?' active':''}" onclick="selectDay('\${day.id}')">
      <div class="day-avatar"><div class="day-av-num">\${day.dayNum}</div><div class="day-av-sub">Day</div></div>
      <div class="day-meta">
        <div class="day-date">\${d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}</div>
        <div class="day-loc">\${day.location||'Site'}</div>
        <div class="day-prog">
          <div class="mini-bar"><div class="mini-fill" style="width:\${pct}%;background:\${fc}"></div></div>
          <div class="mini-pct">\${pct}%</div>
        </div>
      </div>
    </div>\`;
  }).join('');
}
function filterSidebar(v){renderSidebar(v)}
function selectDay(id){curDay=id;renderSidebar();renderMain();}

// ── DISCUSSION SIDEBAR ──
function statusCls(s){return s==='done'?'dss-done':s==='in-progress'?'dss-prog':s==='discussion'?'dss-disc':'dss-pend'}
function statusLabel(s){return s==='done'?'Done':s==='in-progress'?'In Progress':s==='discussion'?'Discussion':'Pending'}

function renderDiscSidebar(f=''){
  const list = document.getElementById('discList');
  const fd = discItems.filter(d=>!f||(d.title||'').toLowerCase().includes(f.toLowerCase())||(d.notes||'').toLowerCase().includes(f.toLowerCase()));
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">No matches</div>\`;return}
  list.innerHTML = fd.map(d=>\`
    <div class="disc-sidebar-item\${d.id===curDiscId?' active':''}" onclick="selectDisc('\${d.id}')">
      <div class="disc-si-header">
        <span class="disc-si-num">#\${d.num}</span>
        <span class="disc-si-title">\${esc(d.title)}</span>
        <span class="disc-si-status \${statusCls(d.status)}">\${statusLabel(d.status)}</span>
      </div>
    </div>\`).join('');
}
function filterDiscSidebar(v){renderDiscSidebar(v)}
function selectDisc(id){curDiscId=id;renderDiscSidebar();renderDiscMain();}

// ── MAIN: DAYS ──
function renderMain(){
  const main = document.getElementById('mainContent');
  if(!curDay){
    main.innerHTML=\`<div class="empty"><div class="empty-ico">🏗️</div><h3>No day selected</h3><p>Add or select an inspection day to begin.</p><button class="btn btn-orange" onclick="openAddDayModal()" style="margin-top:4px">+ Add First Day</button></div>\`;
    return;
  }
  const day=getDay(curDay); if(!day)return;
  const s=sc(day),pct=Math.round((s.c/s.ti)*100);
  const d=new Date(day.date+'T12:00:00');
  const ds=d.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  const nas=Object.values(day.checks||{}).filter(v=>v==='na').length;
  main.innerHTML=\`
  <div class="day-header">
    <div>
      <div class="day-title">Day <span class="day-title-n">\${day.dayNum}</span>
        <span style="font-size:13px;color:var(--text3);font-weight:400;font-family:'Plus Jakarta Sans',sans-serif">— Inspection Report</span>
      </div>
      <div class="day-meta-row">
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>\${ds}</div>
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>\${day.location||'Site not set'}</div>
        <div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>\${day.inspector||'Inspector N/A'}</div>
      </div>
    </div>
    <div class="score-card">
      <div class="score-big">\${s.e}<span class="score-denom">/\${s.t}</span></div>
      <div class="score-sub">Score · \${pct}% done</div>
      <div class="score-pbar"><div class="score-pfill" style="width:\${pct}%"></div></div>
    </div>
  </div>
  <div class="sum-row">
    <div class="s-card"><div class="s-ico g">✅</div><div><div class="s-val g">\${s.c}</div><div class="s-lbl">Checked</div></div></div>
    <div class="s-card"><div class="s-ico o">⏳</div><div><div class="s-val o">\${s.ti-s.c-nas}</div><div class="s-lbl">Remaining</div></div></div>
    <div class="s-card"><div class="s-ico a">⚠️</div><div><div class="s-val a">\${nas}</div><div class="s-lbl">N/A Items</div></div></div>
    <div class="s-card"><div class="s-ico b">📷</div><div><div class="s-val b">\${(day.media||[]).length}</div><div class="s-lbl">Media</div></div></div>
  </div>
  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab(event,'tCL')">Checklist</button>
    <button class="tab-btn" onclick="switchTab(event,'tMD')">Media</button>
    <button class="tab-btn" onclick="switchTab(event,'tHI')">History</button>
    <button class="tab-btn" style="margin-left:auto;color:var(--red);border-color:rgba(248,81,73,0.25)" onclick="deleteDay('\${curDay}')">🗑 Delete Day</button>
  </div>
  <div class="tab-content active" id="tCL">\${buildCL(day)}</div>
  <div class="tab-content" id="tMD">\${buildMD(day)}</div>
  <div class="tab-content" id="tHI">\${buildHI()}</div>\`;
}

// ── MAIN: DISCUSSIONS ──
function renderDiscMain(){
  const main = document.getElementById('mainContent');
  const total = discItems.length;
  const doneCount = discItems.filter(d=>d.status==='done').length;
  const inProg = discItems.filter(d=>d.status==='in-progress').length;
  const pending = discItems.filter(d=>d.status==='pending').length;
  const filtered = discFilter==='all' ? discItems : discItems.filter(d=>d.status===discFilter);
  const cards = filtered.map(d => {
    const isExpanded = expandedDisc[d.id];
    const subtasksDone = (d.subtasks||[]).filter(s=>s.done).length;
    const subtasksTotal = (d.subtasks||[]).length;
    const bodyHtml = isExpanded ? buildDiscBody(d) : '';
    return \`
    <div class="disc-card\${isExpanded?' expanded':''}" id="dc_\${d.id}">
      <div class="disc-card-head" onclick="toggleDiscExpand('\${d.id}')">
        <div class="disc-num-badge">\${d.num}</div>
        <div class="disc-head-body">
          <div class="disc-head-row">
            <div class="disc-title">\${esc(d.title)}</div>
            <span class="disc-status-badge ds-\${d.status==='in-progress'?'prog':d.status==='done'?'done':d.status==='discussion'?'disc':'pend'}" onclick="event.stopPropagation();cycleStatus('\${d.id}')" title="Click to change status">\${statusLabel(d.status)}</span>
          </div>
          \${d.notes?\`<div class="disc-preview">\${esc(d.notes)}</div>\`:''}
          <div class="disc-meta">
            <span class="disc-meta-chip">📅 \${d.date||'—'}</span>
            \${d.assignedTo?\`<span class="disc-meta-chip">👤 \${esc(d.assignedTo)}</span>\`:''}
            \${subtasksTotal?\`<span class="disc-meta-chip">☑️ \${subtasksDone}/\${subtasksTotal} tasks</span>\`:''}
            \${(d.comments||[]).length?\`<span class="disc-meta-chip">💬 \${d.comments.length}</span>\`:''}
          </div>
        </div>
        <div class="disc-chev\${isExpanded?' open':''}">▶</div>
      </div>
      <div class="disc-body\${isExpanded?' open':''}" id="db_\${d.id}">\${bodyHtml}</div>
    </div>\`;
  }).join('');

  main.innerHTML = \`
  <div class="disc-page-header">
    <div class="disc-page-title">
      <div class="disc-page-icon">💬</div>
      Discussion Log
    </div>
    <div class="disc-page-sub">Meeting notes, action items, and project decisions — Discussion 03/25</div>
  </div>
  <div class="disc-stats">
    <div class="s-card"><div class="s-ico" style="background:var(--pd)">💬</div><div><div class="s-val" style="color:var(--purple)">\${total}</div><div class="s-lbl">Total Items</div></div></div>
    <div class="s-card"><div class="s-ico g">✅</div><div><div class="s-val g">\${doneCount}</div><div class="s-lbl">Done</div></div></div>
    <div class="s-card"><div class="s-ico a">⚡</div><div><div class="s-val a">\${inProg}</div><div class="s-lbl">In Progress</div></div></div>
    <div class="s-card"><div class="s-ico" style="background:rgba(72,79,88,0.2)">⏸️</div><div><div class="s-val" style="color:var(--text3)">\${pending}</div><div class="s-lbl">Pending</div></div></div>
  </div>
  <div class="disc-filter-row">
    <span style="font-size:11px;color:var(--text3);font-family:'JetBrains Mono',monospace">Filter:</span>
    <button class="filter-btn\${discFilter==='all'?' active':''}" onclick="setDiscFilter('all')">All</button>
    <button class="filter-btn\${discFilter==='done'?' active':''}" onclick="setDiscFilter('done')">Done</button>
    <button class="filter-btn\${discFilter==='in-progress'?' active':''}" onclick="setDiscFilter('in-progress')">In Progress</button>
    <button class="filter-btn\${discFilter==='pending'?' active':''}" onclick="setDiscFilter('pending')">Pending</button>
    <button class="filter-btn\${discFilter==='discussion'?' active':''}" onclick="setDiscFilter('discussion')">For Discussion</button>
    <button class="btn btn-ghost btn-sm" onclick="openAddDiscModal()" style="margin-left:auto">+ Add Item</button>
  </div>
  \${cards||'<div class="empty"><div class="empty-ico">💬</div><h3>No items</h3><p>No discussion items match this filter.</p></div>'}\`;
}

function buildDiscBody(d){
  const subtasksHtml = (d.subtasks||[]).length ? \`
    <div class="disc-subtasks">
      <div class="disc-subtask-label">Sub-tasks & Milestones</div>
      \${d.subtasks.map((st,i)=>\`
        <div class="subtask-item">
          <div class="subtask-cb\${st.done?' ck':''}" onclick="toggleSubtask('\${d.id}',\${i})"></div>
          <span class="subtask-text">\${esc(st.text)}</span>
        </div>\`).join('')}
    </div>\` : '';
  const commentsHtml = (d.comments||[]).map(c=>\`
    <div class="comment-item">
      <div class="comment-avatar">\${(c.author||'U').charAt(0).toUpperCase()}</div>
      <div class="comment-bubble">
        <div class="comment-bubble-top">
          <span class="comment-author">\${esc(c.author||'User')}</span>
          <span class="comment-time">\${c.time||''}</span>
        </div>
        <div class="comment-text">\${esc(c.text)}</div>
      </div>
    </div>\`).join('');
  return \`
    <div class="disc-action-row">
      <span style="font-size:11px;color:var(--text3);font-family:'JetBrains Mono',monospace">STATUS:</span>
      <select class="status-select" onchange="updateDiscStatus('\${d.id}',this.value)">
        <option value="pending"\${d.status==='pending'?' selected':''}>Pending</option>
        <option value="in-progress"\${d.status==='in-progress'?' selected':''}>In Progress</option>
        <option value="done"\${d.status==='done'?' selected':''}>Done</option>
        <option value="discussion"\${d.status==='discussion'?' selected':''}>For Discussion</option>
      </select>
      \${d.assignedTo?\`<span class="chip">👤 \${esc(d.assignedTo)}</span>\`:''}
    </div>
    <div class="disc-detail-grid">
      <div class="disc-detail-block" style="grid-column:1/-1">
        <div class="disc-detail-label">Notes & Details</div>
        <div class="disc-detail-val">\${esc(d.notes)||'<span style="color:var(--text3)">No notes added.</span>'}</div>
      </div>
    </div>
    \${subtasksHtml}
    <div class="disc-comments">
      <div class="disc-comments-label">Comments (\${(d.comments||[]).length})</div>
      \${commentsHtml}
      <div class="comment-input-row">
        <input class="comment-input" type="text" placeholder="Add a comment..." id="ci_\${d.id}" onkeydown="if(event.key==='Enter')addComment('\${d.id}')">
        <button class="btn btn-ghost btn-sm" onclick="addComment('\${d.id}')">Post</button>
      </div>
    </div>\`;
}

function toggleDiscExpand(id){ expandedDisc[id]=!expandedDisc[id]; if(sideView==='disc')renderDiscMain(); }
function cycleStatus(id){ const d=getDisc(id);if(!d)return;const order=['pending','in-progress','done','discussion'];const idx=order.indexOf(d.status);d.status=order[(idx+1)%order.length];save();renderDiscSidebar();renderDiscMain(); }
function updateDiscStatus(id,val){ const d=getDisc(id);if(!d)return;d.status=val;save();renderDiscSidebar();renderDiscMain(); }
function toggleSubtask(discId,idx){ const d=getDisc(discId);if(!d||!d.subtasks)return;d.subtasks[idx].done=!d.subtasks[idx].done;save();renderDiscMain(); }
function addComment(discId){ const inp=document.getElementById('ci_'+discId);if(!inp)return;const text=inp.value.trim();if(!text)return;const d=getDisc(discId);if(!d)return;if(!d.comments)d.comments=[];const now=new Date();d.comments.push({author:'Me',text,time:now.toLocaleString('en-IN',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'short'})});save();renderDiscMain(); }
function setDiscFilter(f){discFilter=f;renderDiscMain()}

// ── CHECKLIST BUILDERS ──
function buildCL(day){
  return Object.keys(CL).map(k=>{
    const cl=CL[k],tot=cl.items.length;
    const chk=cl.items.filter(i=>day.checks?.[i.id]==='checked').length;
    const pct=Math.round((chk/tot)*100);
    const items=cl.items.map(item=>{
      const st=day.checks?.[item.id]||'none',cm=day.comments?.[item.id]||'',h=getHist(item.id,curDay);
      return \`<div class="ci \${st==='checked'?'ck':''} \${st==='na'?'na':''}" id="ci_\${item.id}">
        <div class="checkbox \${st==='checked'?'ck':''}" onclick="toggleCk('\${item.id}')"></div>
        <div class="ci-body">
          <div class="ci-top"><span class="ci-lbl">\${item.text}</span><span class="pts">+\${item.pts}pts</span></div>
          \${h?\`<div class="ci-hist">↩ \${h}</div>\`:''}
          <div class="ci-bottom">
            <input class="remark" type="text" placeholder="Add site remark..." value="\${esc(cm)}" onchange="saveCm('\${item.id}',this.value)">
            <button class="na-btn \${st==='na'?'on':''}" onclick="toggleNA('\${item.id}')">N/A</button>
          </div>
        </div>
      </div>\`;
    }).join('');
    return \`<div class="cl-section">
      <div class="cl-head" onclick="toggleSect('\${k}')">
        <div class="cl-head-l">
          <div class="cl-ico \${cl.cls}">\${cl.icon}</div>
          <span class="cl-name">\${cl.label}</span>
          <span class="cl-cnt">\${chk}/\${tot}</span>
        </div>
        <div class="cl-right">
          <div class="cl-pbar"><div class="cl-pfill \${cl.cls}" style="width:\${pct}%"></div></div>
          <span class="cl-pct">\${pct}%</span>
          <span class="cl-chev open" id="cv_\${k}">▶</span>
        </div>
      </div>
      <div class="cl-body" id="cb_\${k}">\${items}</div>
    </div>\`;
  }).join('');
}

const MEDIA_CATS=['General','Foundation','Rebar','Formwork','Site Safety','Progress','Issue','Other'];
function buildMD(day){
  const m=day.media||[];
  const cats=[...new Set(['All',...MEDIA_CATS,...m.map(x=>x.cat||'General')])];
  const activeCat=day._mediaCat||'All';
  const filtered=activeCat==='All'?m:m.filter(x=>(x.cat||'General')===activeCat);
  const thumbs=filtered.map((x,fi)=>{
    const i=m.indexOf(x);
    const isVid=x.type&&x.type.startsWith('video');
    const preview=isVid
      ?\`<video src="\${x.data}" style="width:100%;height:100%;object-fit:cover"></video><div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);border-radius:4px;padding:1px 5px;font-size:9px;color:#fff">▶ VID</div>\`
      :\`<img src="\${x.data}" alt="">\`;
    const catBadge=\`<div style="position:absolute;bottom:4px;left:4px;right:18px;background:rgba(0,0,0,0.75);border-radius:4px;padding:1px 5px;font-size:8px;color:var(--orange);font-family:'JetBrains Mono',monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">\${x.cat||'General'}</div>\`;
    return \`<div style="display:flex;flex-direction:column;gap:4px;width:100px">
      <div class="media-thumb" onclick="openLB('\${x.data}','\${isVid?'video':'img'}')">\${preview}\${catBadge}<button class="rm" onclick="event.stopPropagation();rmMedia(\${i})">✕</button></div>
      <select onchange="setMediaCat(\${i},this.value)" onclick="event.stopPropagation()" style="font-size:10px;background:var(--bg3);border:1px solid var(--border);color:var(--text2);border-radius:5px;padding:2px 4px;width:100%;font-family:'Plus Jakarta Sans',sans-serif">
        \${MEDIA_CATS.map(c=>\`<option value="\${c}"\${(x.cat||'General')===c?' selected':''}>\${c}</option>\`).join('')}
      </select>
    </div>\`;
  }).join('');
  const catTabs=cats.map(c=>\`<button onclick="setMediaFilter('\${c}')" style="padding:3px 10px;border-radius:6px;border:1px solid \${activeCat===c?'var(--orange)':'var(--border)'};background:\${activeCat===c?'var(--og)':'transparent'};color:\${activeCat===c?'var(--orange)':'var(--text2)'};font-size:11px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer">\${c}</button>\`).join('');
  return \`<div class="media-wrap">
    <div class="media-hd">
      <div class="media-ttl"><div class="media-dot"></div>Site Photos & Videos</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" onclick="openCamera()" title="Take photo with camera">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>Camera
        </button>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('fi').click()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>Upload
        </button>
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">\${catTabs}</div>
    <div class="media-grid">\${thumbs}</div>
    \${!filtered.length?\`<div style="text-align:center;padding:24px;color:var(--text3);font-size:12px">\${m.length?'No photos in this category':'No photos yet — use Camera or Upload'}</div>\`:''}
  </div>\`;
}
function setMediaCat(i,cat){const day=getDay(curDay);if(!day||!day.media)return;day.media[i].cat=cat;save();renderMain();}
function setMediaFilter(cat){const day=getDay(curDay);if(!day)return;day._mediaCat=cat;renderMain();}

function buildHI(){
  const rows=days.slice().reverse().map(day=>{
    const s=sc(day),pct=Math.round((s.c/s.ti)*100);
    const status=pct===100?'done':pct>0?'partial':'pending',label=pct===100?'Complete':pct>0?'In Progress':'Pending';
    const d=new Date(day.date+'T12:00:00');
    const fc=pct===100?'var(--lime)':pct>0?'var(--amber)':'var(--text3)';
    return \`<tr \${day.id===curDay?'style="background:rgba(255,107,43,0.04)"':''}>
      <td><strong style="color:var(--orange)">D\${day.dayNum}</strong></td>
      <td>\${d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>
      <td style="color:var(--text2)">\${day.location||'—'}</td>
      <td style="color:var(--text2)">\${day.inspector||'—'}</td>
      <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px">\${s.e}/\${s.t}</span></td>
      <td><div style="display:flex;align-items:center;gap:7px"><div style="width:60px;height:4px;background:var(--bg3);border-radius:2px;overflow:hidden"><div style="width:\${pct}%;height:100%;border-radius:2px;background:\${fc}"></div></div><span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text2)">\${pct}%</span></div></td>
      <td><span class="pill \${status}">\${label}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="selectDay('\${day.id}')">View →</button></td>
    </tr>\`;
  }).join('');
  return \`<div class="hist-wrap">
    <div class="hist-hd"><div class="hist-ttl">All Inspection Days</div><div class="hist-cnt">\${days.length} days</div></div>
    <div style="overflow-x:auto"><table class="ht">
      <thead><tr><th>Day</th><th>Date</th><th>Site</th><th>Inspector</th><th>Score</th><th>Progress</th><th>Status</th><th></th></tr></thead>
      <tbody>\${rows||'<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:2rem;font-size:12px">No inspection days added yet</td></tr>'}</tbody>
    </table></div>
  </div>\`;
}

function getHist(id,cid){ return days.filter(d=>d.id!==cid).slice(-3).reverse().map(d=>{const s=d.checks?.[id];return s==='checked'?\`D\${d.dayNum}✓\`:s==='na'?\`D\${d.dayNum}N/A\`:null;}).filter(Boolean).join(' · '); }

// ── INSPECTION INTERACTIONS ──
function toggleSect(k){const b=document.getElementById('cb_'+k),c=document.getElementById('cv_'+k);if(!b)return;if(b.style.display==='none'){b.style.display='';c.classList.add('open')}else{b.style.display='none';c.classList.remove('open')}}
function toggleCk(id){const day=getDay(curDay);if(!day)return;if(!day.checks)day.checks={};if(day.checks[id]==='checked')delete day.checks[id];else day.checks[id]='checked';save();renderMain();renderSidebar()}
function toggleNA(id){const day=getDay(curDay);if(!day)return;if(!day.checks)day.checks={};if(day.checks[id]==='na')delete day.checks[id];else day.checks[id]='na';save();renderMain()}
function saveCm(id,v){const day=getDay(curDay);if(!day)return;if(!day.comments)day.comments={};day.comments[id]=v;save()}
function handleUpload(e){
  const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];
  const isCam=e.target.id==='fc';
  const files=Array.from(e.target.files);let n=0;
  files.forEach(f=>{const r=new FileReader();r.onload=ev=>{day.media.push({name:f.name,type:f.type,data:ev.target.result,src:isCam?'CAM':'FILE'});if(++n===files.length){save();renderMain()}};r.readAsDataURL(f)});
  e.target.value='';
}
function rmMedia(i){const day=getDay(curDay);if(!day||!day.media)return;day.media.splice(i,1);save();renderMain()}

// ── CAMERA ──
let camStream=null,camFacing='environment',camCount=0;
async function openCamera(){
  camCount=0;
  document.getElementById('camStrip').innerHTML='';
  document.getElementById('camLabel').textContent='LIVE CAMERA';
  document.getElementById('camModal').classList.add('open');
  await startCamStream();
}
async function startCamStream(){
  if(camStream){camStream.getTracks().forEach(t=>t.stop());}
  try{
    camStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:camFacing,width:{ideal:1920},height:{ideal:1080}},audio:false});
    const vid=document.getElementById('camVideo');
    vid.srcObject=camStream;
    document.getElementById('camLabel').textContent=camFacing==='environment'?'REAR CAMERA':'FRONT CAMERA';
  }catch(err){
    alert('Camera access denied or not available.\\n'+err.message);
    closeCamera();
  }
}
function flipCamera(){camFacing=camFacing==='environment'?'user':'environment';startCamStream();}
function snapPhoto(){
  const vid=document.getElementById('camVideo');
  const cv=document.getElementById('camCanvas');
  cv.width=vid.videoWidth;cv.height=vid.videoHeight;
  cv.getContext('2d').drawImage(vid,0,0);
  const dataUrl=cv.toDataURL('image/jpeg',0.92);
  // save immediately to day media
  const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];
  day.media.push({name:'cam_'+Date.now()+'.jpg',type:'image/jpeg',data:dataUrl,src:'CAM',cat:'General'});
  save();
  camCount++;
  // flash effect
  const vf=document.querySelector('.cam-viewfinder');
  vf.style.outline='4px solid #fff';setTimeout(()=>vf.style.outline='',150);
  // add to strip
  const strip=document.getElementById('camStrip');
  const img=document.createElement('img');
  img.className='cam-prev-thumb';img.src=dataUrl;
  img.onclick=()=>openLB(dataUrl,'img');
  strip.appendChild(img);
  strip.scrollLeft=strip.scrollWidth;
  document.getElementById('camLabel').textContent=\`✅ Saved — \${camCount} photo\${camCount>1?'s':''}\`;
  setTimeout(()=>{ if(document.getElementById('camModal').classList.contains('open')) document.getElementById('camLabel').textContent=camFacing==='environment'?'REAR CAMERA':'FRONT CAMERA'; },1500);
}
function closeCamera(){
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
  document.getElementById('camModal').classList.remove('open');
  if(camCount>0) renderMain();
  camCount=0;
}

function deleteDay(id){
  if(!confirm('Delete this inspection day? This cannot be undone.'))return;
  days=days.filter(d=>d.id!==id);
  days.forEach((d,i)=>d.dayNum=i+1);
  curDay=days.length?days[days.length-1].id:null;
  save();renderSidebar();renderMain();
}
async function captureScreen(){
  try{
    const stream=await navigator.mediaDevices.getDisplayMedia({video:{cursor:'always'},audio:false});
    const track=stream.getVideoTracks()[0];
    const ic=new ImageCapture(track);
    const bmp=await ic.grabFrame();
    track.stop();
    const cv=document.createElement('canvas');cv.width=bmp.width;cv.height=bmp.height;
    const ctx=cv.getContext('2d');ctx.drawImage(bmp,0,0);
    const dataUrl=cv.toDataURL('image/png');
    const day=getDay(curDay);if(!day)return;if(!day.media)day.media=[];
    day.media.push({name:'screenshot_'+Date.now()+'.png',type:'image/png',data:dataUrl,src:'SCRN'});
    save();renderMain();
  }catch(err){if(err.name!=='AbortError')alert('Screenshot cancelled or not supported in this browser.');}
}
function openLB(src,kind){
  const lb=document.getElementById('lightbox');
  if(kind==='video'){
    document.getElementById('lbImg').style.display='none';
    let vid=document.getElementById('lbVid');
    if(!vid){vid=document.createElement('video');vid.id='lbVid';vid.controls=true;vid.style='max-width:90vw;max-height:85vh;border-radius:8px';lb.appendChild(vid);}
    vid.src=src;vid.style.display='block';
  }else{
    const vid=document.getElementById('lbVid');if(vid){vid.style.display='none';vid.src='';}
    document.getElementById('lbImg').style.display='block';
    document.getElementById('lbImg').src=src;
  }
  lb.classList.add('open');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  const vid=document.getElementById('lbVid');if(vid){vid.pause();vid.src='';}
}
function switchTab(e,id){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));e.target.classList.add('active');document.getElementById(id).classList.add('active')}

// ── CLIENTS ──
const saveClients = () => save();

function renderClientSidebar(f=''){
  const list=document.getElementById('clientList');
  if(!list)return;
  const fd=f?clients.filter(c=>(c.name||'').toLowerCase().includes(f.toLowerCase())||(c.email||'').toLowerCase().includes(f.toLowerCase())):clients;
  if(!fd.length){list.innerHTML=\`<div style="padding:20px;text-align:center;font-size:11px;color:var(--text3)">\${clients.length?'No matches':'No clients yet'}</div>\`;return;}
  list.innerHTML=fd.map(c=>\`
    <div class="client-item\${c.id===curClient?' active':''}" onclick="selectClient('\${c.id}')">
      <div class="client-av">\${(c.name||'?')[0].toUpperCase()}</div>
      <div class="client-meta">
        <div class="client-name">\${esc(c.name||'Unnamed')}</div>
        <div class="client-email">\${esc(c.email||c.phone||'—')}</div>
      </div>
    </div>\`).join('');
}
function filterClients(v){renderClientSidebar(v);}
function selectClient(id){
  curClient=id;
  renderClientSidebar();
  renderClientMain();
}
function renderClientMain(){
  const main=document.getElementById('mainContent');
  const c=clients.find(x=>x.id===curClient);
  if(!c){main.innerHTML=\`<div class="empty"><div class="empty-ico">👤</div><h3>No client selected</h3><p>Select or add a client to generate contracts and invoices.</p><button class="btn btn-orange" onclick="openAddClientModal()" style="margin-top:4px">+ Add Client</button></div>\`;return;}
  main.innerHTML=\`
  <div class="client-main">
    <div class="client-main-hd">
      <div>
        <div class="client-main-ttl">\${esc(c.name)}</div>
        <div style="font-size:12px;color:var(--text2);margin-top:4px;display:flex;flex-wrap:wrap;gap:10px">
          \${c.email?\`<span>✉️ \${esc(c.email)}</span>\`:''}
          \${c.phone?\`<span>📞 \${esc(c.phone)}</span>\`:''}
          \${c.addr?\`<span>📍 \${esc(c.addr)}</span>\`:''}
        </div>
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" onclick="editClient('\${c.id}')">Edit</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteClient('\${c.id}')">Delete</button>
      </div>
    </div>
    \${c.notes?\`<div style="font-size:12px;color:var(--text2);margin-bottom:16px;padding:10px;background:var(--bg3);border-radius:8px">\${esc(c.notes)}</div>\`:''}
    <div class="client-doc-grid">
      <div class="client-doc-card" onclick="openContractFor('\${c.id}')">
        <div class="client-doc-ico">📄</div>
        <div class="client-doc-lbl">Contract</div>
        <div class="client-doc-desc">Generate a construction contract with scope, payment terms and signature lines.</div>
      </div>
      <div class="client-doc-card" onclick="openInvoiceFor('\${c.id}')">
        <div class="client-doc-ico">🧾</div>
        <div class="client-doc-lbl">Invoice</div>
        <div class="client-doc-desc">Create a detailed invoice with line items, tax, and due date.</div>
      </div>
    </div>
  </div>\`;
}
function openAddClientModal(){
  curClient=null;
  ['cl-name','cl-phone','cl-email','cl-addr','cl-notes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('addClientModal').classList.add('open');
}
function editClient(id){
  const c=clients.find(x=>x.id===id);if(!c)return;
  document.getElementById('cl-name').value=c.name||'';
  document.getElementById('cl-phone').value=c.phone||'';
  document.getElementById('cl-email').value=c.email||'';
  document.getElementById('cl-addr').value=c.addr||'';
  document.getElementById('cl-notes').value=c.notes||'';
  curClient=id;
  document.getElementById('addClientModal').classList.add('open');
}
function saveClient(){
  const name=document.getElementById('cl-name').value.trim();
  if(!name){alert('Please enter a client name.');return;}
  if(curClient&&clients.find(x=>x.id===curClient)){
    const c=clients.find(x=>x.id===curClient);
    c.name=name;c.phone=document.getElementById('cl-phone').value.trim();
    c.email=document.getElementById('cl-email').value.trim();
    c.addr=document.getElementById('cl-addr').value.trim();
    c.notes=document.getElementById('cl-notes').value.trim();
  }else{
    const id='cl_'+Date.now();
    clients.push({id,name,phone:document.getElementById('cl-phone').value.trim(),email:document.getElementById('cl-email').value.trim(),addr:document.getElementById('cl-addr').value.trim(),notes:document.getElementById('cl-notes').value.trim()});
    curClient=id;
  }
  saveClients();closeModal('addClientModal');renderClientSidebar();renderClientMain();
}
function deleteClient(id){
  if(!confirm('Delete this client?'))return;
  clients=clients.filter(c=>c.id!==id);
  curClient=null;saveClients();renderClientSidebar();renderClientMain();
}
function openContractFor(id){
  const c=clients.find(x=>x.id===id);if(!c)return;
  document.getElementById('ct-client').value=c.name||'';
  document.getElementById('ct-addr').value=c.addr||'';
  document.getElementById('ct-date').value=new Date().toISOString().split('T')[0];
  document.getElementById('ct-preview').textContent='Fill in fields above then click Preview.';
  document.getElementById('contractModal').classList.add('open');
}
function openInvoiceFor(id){
  const c=clients.find(x=>x.id===id);if(!c)return;
  document.getElementById('inv-client').value=c.name||'';
  document.getElementById('inv-date').value=new Date().toISOString().split('T')[0];
  document.getElementById('inv-num').value='INV-'+Date.now().toString().slice(-6);
  document.getElementById('inv-preview').textContent='Fill in fields above then click Preview.';
  document.getElementById('invoiceModal').classList.add('open');
}
function closeDocModal(id){document.getElementById(id).classList.remove('open');}
function previewContract(){
  const v=id=>document.getElementById(id).value;
  document.getElementById('ct-preview').textContent=
\`══════════════════════════════════════
        CONSTRUCTION CONTRACT
══════════════════════════════════════
Date:       \${v('ct-date')||'—'}
Client:     \${v('ct-client')||'—'}
Address:    \${v('ct-addr')||'—'}
Project:    \${v('ct-project')||'—'}
Amount:     $\${v('ct-amount')||'0'}
Completion: \${v('ct-end')||'—'}

SCOPE OF WORK
─────────────
\${v('ct-scope')||'—'}

PAYMENT TERMS
─────────────
\${v('ct-terms')||'—'}

SIGNATURES
─────────────
Client: _______________________ Date: ________
Contractor: ___________________ Date: ________
══════════════════════════════════════\`;
}
function previewInvoice(){
  const v=id=>document.getElementById(id).value;
  const lines=v('inv-items').split('\\n').filter(l=>l.trim());
  let sub=0;
  const rows=lines.map(l=>{const[d,q,p]=(l+'||').split('|').map(s=>s.trim());const t=(parseFloat(q)||1)*(parseFloat(p)||0);sub+=t;return \`  \${(d||'Item').padEnd(26)} \${String(q||1).padStart(4)}  $\${(parseFloat(p)||0).toFixed(2).padStart(10)}  $\${t.toFixed(2).padStart(10)}\`;}).join('\\n');
  const tax=parseFloat(v('inv-tax'))||0,taxAmt=sub*(tax/100),total=sub+taxAmt;
  document.getElementById('inv-preview').textContent=
\`══════════════════════════════════════
             INVOICE
══════════════════════════════════════
Invoice #:  \${v('inv-num')||'—'}
Date:       \${v('inv-date')||'—'}
Due:        \${v('inv-due')||'—'}
Client:     \${v('inv-client')||'—'}
Project:    \${v('inv-project')||'—'}

  DESCRIPTION                  QTY   UNIT PRICE        TOTAL
  ────────────────────────────────────────────────────────────
\${rows||'  No items added'}
  ────────────────────────────────────────────────────────────
  Subtotal:                                     $\${sub.toFixed(2).padStart(10)}
\${tax?\`  Tax (\${tax}%):                                  $\${taxAmt.toFixed(2).padStart(10)}\\n\`:''}  TOTAL DUE:                                    $\${total.toFixed(2).padStart(10)}

NOTES: \${v('inv-notes')||'—'}
══════════════════════════════════════\`;
}
function copyDocText(previewId){const el=document.getElementById(previewId);navigator.clipboard.writeText(el.textContent||el.value).then(()=>alert('Copied!'));}
function downloadDocText(previewId,type){const el=document.getElementById(previewId);const text=el.textContent||el.value;if(!text||text.includes('Fill in'))return alert('Please click Preview first.');const a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(text);a.download=type+'_'+Date.now()+'.txt';a.click();}

// ── MODALS ──
function openAddDayModal(){document.getElementById('nd-date').value=new Date().toISOString().split('T')[0];['nd-loc','nd-insp','nd-notes'].forEach(id=>document.getElementById(id).value='');document.getElementById('addDayModal').classList.add('open')}
function openAddDiscModal(){['di-title','di-assign','di-notes','di-subtasks'].forEach(id=>document.getElementById(id).value='');document.getElementById('di-status').value='pending';document.getElementById('addDiscModal').classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}

function addDay(){
  const date=document.getElementById('nd-date').value;
  if(!date){alert('Please select a date.');return}
  const id='day_'+Date.now();
  days.push({id,dayNum:days.length+1,date,location:document.getElementById('nd-loc').value,inspector:document.getElementById('nd-insp').value,notes:document.getElementById('nd-notes').value,checks:{},comments:{},media:[]});
  save();closeModal('addDayModal');renderSidebar();selectDay(id);
}

function addDiscItem(){
  const title=document.getElementById('di-title').value.trim();
  if(!title){alert('Please enter a title.');return}
  const subtasksRaw=document.getElementById('di-subtasks').value.trim();
  const subtasks=subtasksRaw?subtasksRaw.split('\\n').filter(Boolean).map((t,i)=>({id:'st_new_'+Date.now()+'_'+i,text:t.trim(),done:false})):[];
  const id='disc_'+Date.now();
  discItems.push({id,num:discItems.length+1,title,status:document.getElementById('di-status').value,assignedTo:document.getElementById('di-assign').value,notes:document.getElementById('di-notes').value,subtasks,comments:[],date:new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'2-digit'}).replace(/\\//g,'/')});
  save();closeModal('addDiscModal');renderDiscSidebar();renderDiscMain();
}

// ── EXPORT ──
function exportAll(){
  const lines=['DAILY TRACKER — EXPORT','='.repeat(52),''];
  lines.push('INSPECTION DAYS','─'.repeat(40),'');
  days.forEach(day=>{
    const s=sc(day),pct=Math.round((s.c/s.ti)*100);
    lines.push(\`Day \${day.dayNum} | \${day.date} | \${day.location||'N/A'} | \${day.inspector||'N/A'}\`);
    lines.push(\`Score: \${s.e}/\${s.t} pts (\${pct}%)\`);
    if(day.notes)lines.push(\`Notes: \${day.notes}\`);
    Object.keys(CL).forEach(k=>{
      lines.push(\`\\n  [ \${CL[k].label.toUpperCase()} ]\`);
      CL[k].items.forEach(i=>{const st=day.checks?.[i.id],cm=day.comments?.[i.id]?\` → \${day.comments[i.id]}\`:'';lines.push(\`  \${st==='checked'?'[✓]':st==='na'?'[N/A]':'[ ]'} \${i.text}\${cm}\`)});
    });
    lines.push('\\n'+'-'.repeat(52)+'\\n');
  });
  lines.push('','DISCUSSION LOG','─'.repeat(40),'');
  discItems.forEach(d=>{
    lines.push(\`#\${d.num} [\${statusLabel(d.status).toUpperCase()}] \${d.title}\`);
    if(d.assignedTo)lines.push(\`  Assigned: \${d.assignedTo}\`);
    if(d.notes)lines.push(\`  Notes: \${d.notes}\`);
    if(d.subtasks?.length){lines.push('  Tasks:');d.subtasks.forEach(st=>lines.push(\`    \${st.done?'[✓]':'[ ]'} \${st.text}\`))}
    if(d.comments?.length){lines.push('  Comments:');d.comments.forEach(c=>lines.push(\`    \${c.author}: \${c.text}\`))}
    lines.push('');
  });
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([lines.join('\\n')],{type:'text/plain'}));
  a.download=\`daily-tracker-\${new Date().toISOString().slice(0,10)}.txt\`;a.click();
}

// ── INIT ──
function syncActiveProject(force=false){
  const nextProjectId = getHostProject()?.id ?? null;
  if(!force && nextProjectId === syncedProjectId) return;
  syncedProjectId = nextProjectId;
  applyTrackerState(readTrackerState());
  renderSidebar();
  renderDiscSidebar();
  renderClientSidebar();
  renderMain();
}
window.syncActiveProject = syncActiveProject;

document.getElementById('todayLabel').textContent=new Date().toLocaleDateString('en-IN',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
syncActiveProject(true);
setInterval(()=>syncActiveProject(),1500);
<\/script>
</body>
</html>
`,$v=`\uFEFF<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Client Contracts</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"><\/script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0C1B2E;--navy2:#162438;--navy3:#1E3350;
  --blue:#1A6BC4;--blue-l:#E8F2FC;
  --green:#2D6A0F;--green-l:#ECF5E3;
  --amber:#A86200;--amber-l:#FEF3E2;
  --red:#9B1F1F;--red-l:#FDEAEA;
  --gray-l:#F4F3EF;
  --border:#E0DDD5;--muted:#777672;--text:#1A1917;--bg:#F7F6F2;
  --sh:0 1px 8px rgba(0,0,0,.07);--sh2:0 4px 20px rgba(0,0,0,.13);
}
body{font-family:'Barlow',sans-serif;background:var(--bg);color:var(--text);font-size:14px;min-height:100vh}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:10px}
.topbar{background:#fff;border-bottom:1px solid var(--border);padding:0 24px;height:54px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:var(--sh)}
.tb-title{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;letter-spacing:.3px}
.tb-right{display:flex;gap:8px;align-items:center}
.main{overflow-y:auto;padding:22px 24px;min-height:calc(100vh - 54px)}
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.sh-title{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:700;letter-spacing:.2px}
.sh-sub{font-size:12px;color:var(--muted);margin-top:2px}
.panel{background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:var(--sh);margin-bottom:14px;overflow:hidden}
.ph{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--navy)}
.ph-title{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff;letter-spacing:.4px}
.ph-sub{font-size:11px;color:#8AAAC8;margin-top:1px}
.detail-grid{padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}
.dc-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}
.dc-val{font-size:13px;font-weight:600;color:var(--text)}
.dc-val.money{font-family:'Barlow Condensed',sans-serif;font-size:16px;color:var(--navy)}
.badge{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.2px}
.b-active{background:var(--green-l);color:var(--green)}
.b-signed{background:var(--blue-l);color:var(--blue)}
.b-draft{background:var(--gray-l);color:var(--muted)}
.b-expired{background:var(--red-l);color:var(--red)}
.ct-actions{padding:12px 16px;border-top:1px solid var(--border);background:#fff;display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.btn{display:inline-flex;align-items:center;gap:5px;padding:7px 14px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;font-family:'Barlow',sans-serif;transition:.13s;white-space:nowrap}
.btn-navy{background:var(--navy);color:#fff}.btn-navy:hover{background:var(--navy3)}
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border)}.btn-ghost:hover{background:var(--gray-l)}
.btn-green{background:var(--green-l);color:var(--green);border:1px solid #B8DCA0}.btn-green:hover{background:#DDF2C8}
.btn-blue{background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0}.btn-blue:hover{background:#cce0f7}
.btn-amber{background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0}.btn-amber:hover{background:#FEEAD0}
.btn-red{background:var(--red-l);color:var(--red);border:1px solid #F5C0C0}.btn-red:hover{background:#FBD5D5}
.btn-sm{padding:5px 10px;font-size:11px;border-radius:5px}
.btn-xs{padding:3px 8px;font-size:10px;border-radius:4px}
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;text-align:center}
.empty-ic{font-family:'Barlow Condensed',sans-serif;font-size:48px;font-weight:700;color:#D8D5CE;margin-bottom:12px;letter-spacing:2px}
.empty p{font-size:13px;color:var(--muted);max-width:300px;line-height:1.6}
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:300;align-items:center;justify-content:center;padding:20px}
.modal-overlay.open{display:flex}
.modal{background:#fff;border-radius:12px;width:100%;max-width:540px;box-shadow:var(--sh2);overflow:hidden;max-height:94vh;display:flex;flex-direction:column}
.modal-hd{padding:16px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-hd h3{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700}
.modal-close{background:none;border:1px solid var(--border);border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:14px;color:var(--muted);display:flex;align-items:center;justify-content:center}
.modal-body{padding:18px 22px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:12px}
.modal-ft{padding:12px 22px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;align-items:center}
.fi-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);display:block;margin-bottom:4px}
.fi{width:100%;border:1px solid var(--border);border-radius:6px;padding:8px 11px;font-size:13px;font-family:'Barlow',sans-serif;background:#fff;outline:none;transition:border-color .15s;color:var(--text)}
.fi:focus{border-color:var(--blue)}
.fi-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.fi-info{background:var(--blue-l);border:1px solid #B0D0F0;border-radius:6px;padding:8px 12px;font-size:12px;color:var(--blue);font-weight:600}
/* Toast */
#toast-container{position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px}
.toast{padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;color:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2);animation:toastIn .2s ease;max-width:320px}
.toast.success{background:#2D6A0F}
.toast.error{background:#9B1F1F}
.toast.info{background:#1A6BC4}
@keyframes toastIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.spinner{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
</head>
<body>
<div class="topbar">
  <div class="tb-title">ðŸ“„ Client Contracts</div>
  <div class="tb-right">
    <button class="btn btn-ghost btn-sm" onclick="openAddContract()">+ Add Contract</button>
  </div>
</div>

<div class="main" id="mainArea">
  <div class="empty"><div class="empty-ic">CC</div><p>Loading projectâ€¦</p></div>
</div>

<div id="toast-container"></div>

<!-- EDIT CLIENT INFO MODAL -->
<div class="modal-overlay" id="editClientModal">
  <div class="modal">
    <div class="modal-hd"><h3>ðŸ‘¤ Edit Client Info</h3><button class="modal-close" onclick="closeModal('editClientModal')">âœ•</button></div>
    <div class="modal-body">
      <div><label class="fi-lbl">Full Name / Company *</label><input class="fi" type="text" id="ec-name" placeholder="e.g. John Doe / ABC Corp"></div>
      <div class="fi-row">
        <div><label class="fi-lbl">Phone</label><input class="fi" type="text" id="ec-phone" placeholder="+1 555 000 1234"></div>
        <div><label class="fi-lbl">Email</label><input class="fi" type="email" id="ec-email" placeholder="client@example.com"></div>
      </div>
      <div><label class="fi-lbl">Address</label><input class="fi" type="text" id="ec-addr" placeholder="123 Main St, City, State"></div>
    </div>
    <div class="modal-ft">
      <button class="btn btn-ghost" onclick="closeModal('editClientModal')">Cancel</button>
      <button class="btn btn-navy" onclick="saveClientInfo()">Save â†’</button>
    </div>
  </div>
</div>

<!-- ADD / EDIT CONTRACT MODAL -->
<div class="modal-overlay" id="contractModal">
  <div class="modal">
    <div class="modal-hd"><h3 id="ct-modal-title">ðŸ“„ Add Contract</h3><button class="modal-close" onclick="closeModal('contractModal')">âœ•</button></div>
    <div class="modal-body">
      <input type="hidden" id="ct-id">
      <div class="fi-info" id="ct-project-info">â€”</div>
      <div class="fi-row">
        <div><label class="fi-lbl">Project Name</label><input class="fi" type="text" id="ct-project" readonly style="background:var(--bg)"></div>
        <div><label class="fi-lbl">Contract #</label><input class="fi" type="text" id="ct-num" placeholder="CC-2026-001"></div>
      </div>
      <div class="fi-row">
        <div><label class="fi-lbl">Contract Amount ($)</label><input class="fi" type="number" id="ct-amount" placeholder="50000"></div>
        <div><label class="fi-lbl">Contract Type</label>
          <select class="fi" id="ct-type">
            <option>Fixed Price</option><option>Cost Plus</option><option>Time & Materials</option><option>Unit Price</option>
          </select>
        </div>
      </div>
      <div class="fi-row">
        <div><label class="fi-lbl">Contract Date</label><input class="fi" type="date" id="ct-date"></div>
        <div><label class="fi-lbl">Completion Date</label><input class="fi" type="date" id="ct-end"></div>
      </div>
      <div><label class="fi-lbl">Status</label>
        <select class="fi" id="ct-status">
          <option value="draft">Draft</option><option value="active">Active</option><option value="signed">Signed</option><option value="expired">Expired</option>
        </select>
      </div>
      <div><label class="fi-lbl">Scope of Work</label><textarea class="fi" id="ct-scope" rows="3" placeholder="Describe the work to be performedâ€¦"></textarea></div>
      <div><label class="fi-lbl">Payment Terms</label><textarea class="fi" id="ct-terms" rows="2" placeholder="e.g. 30% upfront, 40% at milestone, 30% on completion"></textarea></div>
    </div>
    <div class="modal-ft">
      <button class="btn btn-ghost" onclick="closeModal('contractModal')">Cancel</button>
      <button class="btn btn-navy" onclick="saveContract()">Save Contract â†’</button>
    </div>
  </div>
</div>

<!-- SEND FOR SIGNING MODAL -->
<div class="modal-overlay" id="signModal">
  <div class="modal" style="max-width:520px">
    <div class="modal-hd"><h3>âœ Send Contract for Signing</h3><button class="modal-close" onclick="closeModal('signModal')">âœ•</button></div>
    <div class="modal-body">
      <div><label class="fi-lbl">Recipient Email</label><input class="fi" type="email" id="sg-to" placeholder="client@example.com"></div>
      <div><label class="fi-lbl">Subject</label><input class="fi" type="text" id="sg-subject"></div>
      <div><label class="fi-lbl">Email Message</label><textarea class="fi" id="sg-body" rows="14" style="font-size:11px;font-family:monospace"></textarea></div>
      <div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:6px;padding:10px 12px;font-size:11px;color:var(--amber)">
        <strong>How it works:</strong> The full contract email is sent through your backend mail service. Your client replies with <strong>"I AGREE â€“ [their name] â€“ [date]"</strong> to confirm acceptance. Then update the status to <strong>Signed</strong>.
      </div>
    </div>
    <div class="modal-ft">
      <button class="btn btn-ghost" onclick="closeModal('signModal')">Cancel</button>
      <button class="btn btn-amber" id="signSendBtn" onclick="sendForSigning()">âœ Send for Signing</button>
    </div>
  </div>
</div>

<!-- SEND EMAIL MODAL -->
<div class="modal-overlay" id="emailModal">
  <div class="modal" style="max-width:480px">
    <div class="modal-hd"><h3>âœ‰ Send Contract by Email</h3><button class="modal-close" onclick="closeModal('emailModal')">âœ•</button></div>
    <div class="modal-body">
      <div><label class="fi-lbl">Recipient Email</label><input class="fi" type="email" id="em-to" placeholder="client@example.com"></div>
      <div><label class="fi-lbl">Subject</label><input class="fi" type="text" id="em-subject"></div>
      <div><label class="fi-lbl">Message</label><textarea class="fi" id="em-body" rows="10" style="font-size:11px;font-family:monospace"></textarea></div>
    </div>
    <div class="modal-ft">
      <button class="btn btn-ghost" onclick="closeModal('emailModal')">Cancel</button>
      <button class="btn btn-navy" id="emailSendBtn" onclick="sendEmailJS()">âœ‰ Send Email</button>
    </div>
  </div>
</div>

<script>
const LIVIO_KEY='livio_v1';
function getHostApp(){
  try{
    if(window.parent && window.parent!==window && window.parent.DB && typeof window.parent.saveDB==='function'){
      return window.parent;
    }
  }catch{}
  return null;
}
function readLocalLivioProjects(){
  try{
    const s=localStorage.getItem(LIVIO_KEY);
    if(!s)return{projects:[],activeId:null};
    return JSON.parse(s);
  }catch(e){
    return{projects:[],activeId:null};
  }
}
function getLivioProjects(){
  const host=getHostApp();
  return host?.DB || readLocalLivioProjects();
}
function persistLivioProjects(db){
  const host=getHostApp();
  if(host?.DB){
    try{
      host.saveDB();
      return;
    }catch(err){
      console.error('client contract shared save failed:',err);
    }
  }
  localStorage.setItem(LIVIO_KEY,JSON.stringify(db));
}
function readContracts(){
  const projects=(getLivioProjects().projects)||[];
  const hasProjectContracts=projects.some(p=>Array.isArray(p.clientContracts));
  if(hasProjectContracts){
    return projects.flatMap(p=>(p.clientContracts||[]).map(ct=>({
      ...ct,
      projectId:ct.projectId||p.id,
      project:ct.project||p.name||''
    })));
  }
  try{
    return JSON.parse(localStorage.getItem('dt_contracts')||'[]');
  }catch{
    return [];
  }
}
let contracts=readContracts();
let curProjectId=null;
let signCtId=null;
let emailCtId=null;
let lastContractSig='';

/* â”€â”€ HELPERS â”€â”€ */
function getAllProjects(){return getLivioProjects().projects||[];}
function getProj(){return getAllProjects().find(x=>x.id===curProjectId)||null;}
function saveContracts(){
  const db=getLivioProjects();
  const projects=db.projects||[];
  if(projects.length){
    projects.forEach(p=>{
      p.clientContracts=contracts
        .filter(c=>c.projectId===p.id)
        .map(c=>({...c,projectId:p.id,project:c.project||p.name||''}));
    });
    persistLivioProjects(db);
    lastContractSig=JSON.stringify(contracts);
    return;
  }
  localStorage.setItem('dt_contracts',JSON.stringify(contracts));
  lastContractSig=JSON.stringify(contracts);
}
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const fmtD=s=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'â€”';
const fmtM=n=>n!=null&&n!==''&&n!==0?'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'â€”';
const LIVIO_COMPANY_NAME='Livio Building Systems';
const LIVIO_OFFICE_ADDRESS='121 Main St #563, Los Altos, California (CA) 94022';
function getProjectAddress(p){return p?.address||p?.clientAddr||'â€”';}
function getLivioSignature(){return \`\${LIVIO_COMPANY_NAME}\\n\${LIVIO_OFFICE_ADDRESS}\`;}
function loadActiveProject(){const db=getLivioProjects();curProjectId=db.activeId||(db.projects&&db.projects[0]?.id)||null;}

/* â”€â”€ TOAST â”€â”€ */
function showToast(msg,type='info',dur=3500){
  const c=document.getElementById('toast-container');
  const t=document.createElement('div');
  t.className='toast '+type;t.textContent=msg;c.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},dur);
}

/* â”€â”€ EMAIL DELIVERY â”€â”€ */
function getEmailApiBase(){
  const host=getHostApp();
  try{
    const hostApi=(host&&typeof host.getApiBase==='function')?host.getApiBase():(host&&host.__LIVIO_API_BASE)||'';
    if(hostApi) return String(hostApi).replace(/\\/+$/,'');
  }catch{}
  const isLocal=location.hostname==='127.0.0.1'||location.hostname==='localhost';
  const fallback=isLocal
    ? 'http://127.0.0.1:3001/api'
    : 'https://project-managment-production-7373.up.railway.app/api';
  return fallback.replace(/\\/+$/,'');
}
async function sendEmailThroughBackend(to,subject,message){
  const payload={to,subject,message,fromName:'Livio Building Systems'};
  const res=await fetch(getEmailApiBase()+'/email/send',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.error||data.message||('Email send failed ('+res.status+')'));
  return data;
}

/* â”€â”€ MAIN RENDER â”€â”€ */
function renderMain(){
  const main=document.getElementById('mainArea');
  const p=getProj();
  if(!p){main.innerHTML=\`<div class="empty"><div class="empty-ic">CC</div><p>No active project found. Select a project in Livio first.</p></div>\`;return;}
  const ctracts=contracts.filter(x=>x.projectId===p.id);

  main.innerHTML=\`
  <div class="sh">
    <div><div class="sh-title">Client Contracts</div><div class="sh-sub">Owner agreements â€“ Prime contracts â€“ Signed documents</div></div>
    <button class="btn btn-navy" onclick="openAddContract()">+ Add Contract</button>
  </div>

  <div class="panel" style="margin-bottom:18px">
    <div class="ph">
      <div>
        <div class="ph-title">ðŸ“ \${esc(p.name)}</div>
        <div class="ph-sub">\${esc(p.address||p.city||'')}</div>
      </div>
      <span style="background:rgba(255,255,255,.12);color:#8AAAC8;font-size:10px;padding:3px 10px;border-radius:4px;font-weight:700">\${ctracts.length} CONTRACT\${ctracts.length!==1?'S':''}</span>
    </div>
    <div class="detail-grid">
      <div><div class="dc-lbl">Client / Owner</div><div class="dc-val">\${esc(p.client||'â€”')}</div></div>
      \${p.clientEmail?\`<div><div class="dc-lbl">Email</div><div class="dc-val">\${esc(p.clientEmail)}</div></div>\`:''}
      \${p.clientPhone?\`<div><div class="dc-lbl">Phone</div><div class="dc-val">\${esc(p.clientPhone)}</div></div>\`:''}
      \${p.clientAddr?\`<div><div class="dc-lbl">Address</div><div class="dc-val">\${esc(p.clientAddr)}</div></div>\`:''}
      \${p.permit?\`<div><div class="dc-lbl">Permit #</div><div class="dc-val">\${esc(p.permit)}</div></div>\`:''}
      \${p.type?\`<div><div class="dc-lbl">Type</div><div class="dc-val">\${esc(p.type)}</div></div>\`:''}
    </div>
    <div style="padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:var(--bg)">
      \${!p.client?\`<span style="font-size:11px;color:var(--amber);font-weight:600">âš  No client info added yet</span>\`:\`<span style="font-size:11px;color:var(--green);font-weight:600">âœ“ \${esc(p.client)}</span>\`}
      <button class="btn btn-ghost btn-sm" onclick="openEditClientInfo()">âœ Edit Client Info</button>
    </div>
  </div>

  \${!ctracts.length
    ?\`<div class="empty"><div class="empty-ic">CC</div><p>No contracts yet. Click <strong>+ Add Contract</strong> to create one.</p></div>\`
    :ctracts.map(ct=>renderContractCard(ct,p)).join('')}\`;
}

function renderContractCard(ct,p){
  const sCls={draft:'b-draft',active:'b-active',signed:'b-signed',expired:'b-expired'}[ct.status]||'b-draft';
  const sLbl=(ct.status||'draft').charAt(0).toUpperCase()+(ct.status||'draft').slice(1);
  return \`<div class="panel">
    <div class="ph">
      <div>
        <div class="ph-title">\${esc(ct.project||p.name||'Contract')}</div>
        <div class="ph-sub">\${ct.num?'# '+esc(ct.num):''}</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <span class="badge \${sCls}">\${sLbl}</span>
        <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="openEditContract('\${ct.id}')">âœ Edit</button>
        <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4)" onclick="deleteContract('\${ct.id}')">ðŸ—‘</button>
      </div>
    </div>
    <div class="detail-grid">
      <div><div class="dc-lbl">Contract Value</div><div class="dc-val money">\${fmtM(ct.amount)}</div></div>
      <div><div class="dc-lbl">Type</div><div class="dc-val">\${esc(ct.type||'â€”')}</div></div>
      <div><div class="dc-lbl">Contract Date</div><div class="dc-val">\${fmtD(ct.date)}</div></div>
      <div><div class="dc-lbl">Completion</div><div class="dc-val">\${fmtD(ct.end)}</div></div>
    </div>
    \${ct.scope?\`<div style="padding:0 16px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Scope of Work</div><div style="font-size:12px;color:var(--text);line-height:1.6">\${esc(ct.scope)}</div></div>\`:''}
    \${ct.terms?\`<div style="padding:0 16px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Payment Terms</div><div style="font-size:12px;color:var(--text)">\${esc(ct.terms)}</div></div>\`:''}
    <div class="ct-actions">
      <button class="btn btn-green" onclick="downloadContractPDF('\${ct.id}')">â¬‡ Download PDF</button>
      <button class="btn btn-amber" onclick="openSendForSigning('\${ct.id}')">âœ Send for Signing</button>
      <button class="btn btn-blue" onclick="openSendContractEmail('\${ct.id}')">âœ‰ Send Email</button>
    </div>
  </div>\`;
}

/* â”€â”€ jsPDF CONTRACT DOWNLOAD â”€â”€ */
function downloadContractPDF(id){
  const ct=contracts.find(x=>x.id===id);if(!ct)return;
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:'mm',format:'a4'});
  const W=210,navy=[12,27,46],white=[255,255,255],gray=[247,246,242],muted=[119,118,114],blue=[26,107,196],green=[45,106,15];

  // Navy header
  doc.setFillColor(...navy);doc.rect(0,0,W,40,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(18);doc.setTextColor(...white);
  doc.text('Livio Building Systems',14,15);
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(138,170,200);
  doc.text(\`Construction Management Â· \${LIVIO_OFFICE_ADDRESS}\`,14,21);
  // CONTRACT title
  doc.setFont('helvetica','bold');doc.setFontSize(24);doc.setTextColor(...white);
  doc.text('CONTRACT',W-14,17,{align:'right'});
  doc.setFontSize(10);doc.setTextColor(138,170,200);
  doc.text(ct.num||'â€”',W-14,24,{align:'right'});
  // Status
  const sBgMap={draft:[119,118,114],active:[45,106,15],signed:[26,107,196],expired:[155,31,31]};
  const sBg=sBgMap[ct.status]||sBgMap.draft;
  const sLbl=(ct.status||'draft').toUpperCase();
  doc.setFillColor(...sBg);doc.roundedRect(W-14-32,30,34,8,2,2,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...white);
  doc.text(sLbl,W-14,36,{align:'right'});

  // Client / Contractor section
  let y=50;
  doc.setFillColor(...gray);doc.rect(0,y-4,W,42,'F');
  // Left: Client
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);
  doc.text('CLIENT / OWNER',14,y);y+=4;
  doc.setFont('helvetica','bold');doc.setFontSize(12);doc.setTextColor(...navy);
  doc.text(p.client||'â€”',14,y);y+=5;
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
  if(p.clientAddr||p.address)doc.text(p.clientAddr||p.address||'',14,y),y+=4;
  if(p.clientEmail)doc.text(p.clientEmail,14,y),y+=4;
  if(p.clientPhone)doc.text(p.clientPhone,14,y),y+=4;

  // Right: Contract details
  let yr=54;
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);
  doc.text('CONTRACT DETAILS',W/2+10,yr);yr+=5;
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
  const details=[['Contract Date:',fmtD(ct.date)],['Completion Date:',fmtD(ct.end)],['Contract Type:',ct.type||'â€”'],['Contract Value:',ct.amount?'$'+Number(ct.amount).toLocaleString('en-US',{minimumFractionDigits:2}):'â€”']];
  details.forEach(([lbl,val])=>{
    doc.setFont('helvetica','bold');doc.text(lbl,W/2+10,yr);
    doc.setFont('helvetica','normal');doc.text(val,W/2+46,yr);yr+=5;
  });

  // Project / Contractor section
  let y2=Math.max(y,yr)+8;
  doc.setFillColor(232,242,252);doc.rect(0,y2-4,W,26,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);
  doc.text('PROJECT',14,y2);y2+=4;
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(...navy);
  doc.text(ct.project||p.name||'â€”',14,y2);y2+=5;
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
  doc.text(getProjectAddress(p),14,y2),y2+=4;
  if(p.permit)doc.text('Permit #: '+p.permit,14,y2),y2+=4;

  let yr2=y2-13;
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...muted);
  doc.text('CONTRACTOR',W/2+10,yr2);yr2+=5;
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(...navy);
  doc.text('Livio Building Systems',W/2+10,yr2);yr2+=5;
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
  doc.text('Licensed General Contractor',W/2+10,yr2);yr2+=4;
  doc.text(LIVIO_OFFICE_ADDRESS,W/2+10,yr2);yr2+=4;
  doc.text('California License #: ___________',W/2+10,yr2);yr2+=4;
  doc.text('Insurance: General Liability',W/2+10,yr2);

  // Scope of Work
  let fy=Math.max(y2,yr2)+8;
  if(ct.scope){
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);
    doc.text('SCOPE OF WORK',14,fy);fy+=2;
    doc.setDrawColor(...blue);doc.setLineWidth(0.8);doc.line(14,fy+1,W-14,fy+1);fy+=5;
    doc.setFillColor(232,242,252);
    const scopeLines=doc.splitTextToSize(ct.scope,W-32);
    const scopeH=scopeLines.length*5+6;
    doc.rect(14,fy-2,W-28,scopeH,'F');
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
    doc.text(scopeLines,18,fy+2);fy+=scopeH+6;
  }

  // Payment Terms
  if(ct.terms){
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);
    doc.text('PAYMENT TERMS',14,fy);fy+=2;
    doc.setDrawColor(...green);doc.setLineWidth(0.8);doc.line(14,fy+1,W-14,fy+1);fy+=5;
    doc.setFillColor(236,245,227);
    const termLines=doc.splitTextToSize(ct.terms,W-32);
    const termH=termLines.length*5+6;
    doc.rect(14,fy-2,W-28,termH,'F');
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(51,51,51);
    doc.text(termLines,18,fy+2);fy+=termH+6;
  }

  // Check page space â€” add new page if needed
  if(fy>220){doc.addPage();fy=20;}

  // Terms & Conditions
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);
  doc.text('TERMS & CONDITIONS',14,fy);fy+=2;
  doc.setDrawColor(...navy);doc.setLineWidth(0.5);doc.line(14,fy+1,W-14,fy+1);fy+=6;
  const tc=[
    'Contractor shall complete all work in a professional and workmanlike manner in accordance with applicable codes.',
    'Any changes to scope of work must be agreed to in writing by both parties prior to execution.',
    'Client is responsible for providing adequate site access, utilities, and permits unless otherwise specified.',
    'Contractor maintains general liability insurance. Certificates available upon request.',
    'Disputes shall be resolved through mediation before pursuing litigation.',
    'This contract is governed by the laws of the State of California.',
    'Neither party may assign this contract without prior written consent of the other party.',
    'All work is subject to final inspection and acceptance by the Client before final payment is released.'
  ];
  doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(51,51,51);
  tc.forEach((item,i)=>{
    if(fy>265){doc.addPage();fy=20;}
    const lines=doc.splitTextToSize(\`\${i+1}. \${item}\`,W-30);
    doc.text(lines,18,fy);fy+=lines.length*4.5+1.5;
  });

  // Signature section
  if(fy>240){doc.addPage();fy=20;}
  fy+=8;
  doc.setDrawColor(...navy);doc.setLineWidth(0.5);doc.line(14,fy,W-14,fy);fy+=5;
  // Left sig
  doc.setFillColor(...navy);doc.rect(14,fy,0.8,1,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...navy);
  doc.text('CLIENT / OWNER SIGNATURE',14,fy);
  // Right sig
  doc.text('CONTRACTOR SIGNATURE',W/2+10,fy);fy+=10;
  doc.setDrawColor(180,180,180);doc.setLineWidth(0.4);
  doc.line(14,fy,W/2-10,fy);
  doc.line(W/2+10,fy,W-14,fy);
  fy+=6;
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(100,100,100);
  doc.text('Name: '+(p.client||'________________________________'),14,fy);
  doc.text('Name: Livio Building Systems',W/2+10,fy);fy+=6;
  doc.text('Date: ___________________________',14,fy);
  doc.text('Date: ___________________________',W/2+10,fy);

  // Footer
  const fY=288;
  doc.setDrawColor(...navy);doc.setLineWidth(0.3);doc.line(14,fY-4,W-14,fY-4);
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...muted);
  doc.text(\`\${LIVIO_COMPANY_NAME} Â· \${LIVIO_OFFICE_ADDRESS} Â· Contract \${(ct.num||'')} Â· Generated \${new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}\`,W/2,fY,{align:'center'});

  doc.save('Contract-'+(ct.num||'export')+'.pdf');
  showToast('â¬‡ Contract PDF downloaded!','success');
}

/* â”€â”€ SEND FOR SIGNING â”€â”€ */
function buildSigningBody(ct,p){
  return \`Dear \${p.client||'Client'},

I hope this message finds you well. Please find the details of your Construction Contract below for your review and signature.

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
  CONTRACT: \${ct.num||'â€”'}   STATUS: \${(ct.status||'DRAFT').toUpperCase()}
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
Client:          \${p.client||'â€”'}
Project:         \${ct.project||p.name||'â€”'}
Project Address: \${getProjectAddress(p)}
Livio Address:   \${LIVIO_OFFICE_ADDRESS}
Contract Date:   \${fmtD(ct.date)}
Completion Date: \${fmtD(ct.end)}
Contract Type:   \${ct.type||'â€”'}
Contract Value:  \${fmtM(ct.amount)}

SCOPE OF WORK:
\${ct.scope||'As discussed and agreed upon.'}

PAYMENT TERMS:
\${ct.terms||'As per agreement.'}

TERMS & CONDITIONS:
1. Contractor shall complete all work in a professional and workmanlike manner in accordance with applicable codes.
2. Any changes to scope of work must be agreed to in writing by both parties prior to execution.
3. Client is responsible for providing adequate site access, utilities, and permits unless otherwise specified.
4. Contractor maintains general liability insurance. Certificates available upon request.
5. Disputes shall be resolved through mediation before pursuing litigation.
6. This contract is governed by the laws of the State of California.
7. Neither party may assign this contract without prior written consent of the other party.
8. All work is subject to final inspection and acceptance by the Client before final payment is released.

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

TO SIGN THIS CONTRACT:
Please reply to this email with the following confirmation:

  "I AGREE â€“ \${p.client||'[Your Full Name]'} â€“ \${new Date().toLocaleDateString()}"

By replying with the above, you confirm your acceptance of all terms and conditions stated in this contract. Your email reply will serve as your digital signature.

If you have any questions or require amendments, please don't hesitate to contact us before signing.

Thank you for choosing Livio Building Systems. We look forward to working with you!

Best regards,
\${LIVIO_COMPANY_NAME}
\${LIVIO_OFFICE_ADDRESS}
Licensed General Contractor\`;
}

function openSendForSigning(id){
  const ct=contracts.find(x=>x.id===id);if(!ct)return;
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};
  signCtId=id;
  document.getElementById('sg-to').value=p.clientEmail||'';
  document.getElementById('sg-subject').value=\`Construction Contract \${ct.num||''} â€“ \${p.name||''} â€“ Signature Required\`;
  document.getElementById('sg-body').value=buildSigningBody(ct,p);
  document.getElementById('signModal').classList.add('open');
}

function sendForSigning(){
  const to=document.getElementById('sg-to').value.trim();
  const subject=document.getElementById('sg-subject').value.trim();
  const message=document.getElementById('sg-body').value.trim();
  if(!to){showToast('Please enter a recipient email address.','error');return;}
  const btn=document.getElementById('signSendBtn');
  btn.innerHTML='<span class="spinner"></span> Sendingâ€¦';btn.disabled=true;
  sendEmailThroughBackend(to,subject,message)
    .then(()=>{btn.innerHTML='âœ Send for Signing';btn.disabled=false;closeModal('signModal');showToast('âœ… Contract sent for signing!','success');})
    .catch(err=>{btn.innerHTML='âœ Send for Signing';btn.disabled=false;showToast('âŒ Failed: '+(err.message||JSON.stringify(err)),'error');});
}

/* â”€â”€ SEND CONTRACT EMAIL â”€â”€ */
function openSendContractEmail(id){
  const ct=contracts.find(x=>x.id===id);if(!ct)return;
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};
  emailCtId=id;
  const body=\`Dear \${p.client||'Client'},

Please find your contract summary below.

Contract #: \${ct.num||'â€”'}
Project: \${ct.project||p.name||'â€”'}
Project Address: \${getProjectAddress(p)}
Livio Address: \${LIVIO_OFFICE_ADDRESS}
Contract Value: \${fmtM(ct.amount)}
Contract Date: \${fmtD(ct.date)}
Completion Date: \${fmtD(ct.end)}
Type: \${ct.type||'â€”'}
Status: \${(ct.status||'draft').toUpperCase()}

\${ct.scope?'Scope of Work:\\n'+ct.scope+'\\n\\n':''}\${ct.terms?'Payment Terms:\\n'+ct.terms+'\\n\\n':''}Please review and contact us with any questions.

Best regards,
\${getLivioSignature()}\`;

  document.getElementById('em-to').value=p.clientEmail||'';
  document.getElementById('em-subject').value='Contract '+(ct.num||'')+'  â€“ '+(p.name||'');
  document.getElementById('em-body').value=body;
  document.getElementById('emailModal').classList.add('open');
}

function sendEmailJS(){
  const to=document.getElementById('em-to').value.trim();
  const subject=document.getElementById('em-subject').value.trim();
  const message=document.getElementById('em-body').value.trim();
  if(!to){showToast('Please enter a recipient email address.','error');return;}
  const btn=document.getElementById('emailSendBtn');
  btn.innerHTML='<span class="spinner"></span> Sendingâ€¦';btn.disabled=true;
  sendEmailThroughBackend(to,subject,message)
    .then(()=>{btn.innerHTML='âœ‰ Send Email';btn.disabled=false;closeModal('emailModal');showToast('âœ… Email sent successfully!','success');})
    .catch(err=>{btn.innerHTML='âœ‰ Send Email';btn.disabled=false;showToast('âŒ Failed: '+(err.message||JSON.stringify(err)),'error');});
}

/* â”€â”€ CONTRACT CRUD â”€â”€ */
function openAddContract(){
  const p=getProj();if(!p){alert('No active project found.');return;}
  document.getElementById('ct-modal-title').textContent='ðŸ“„ Add Contract';
  document.getElementById('ct-id').value='';
  document.getElementById('ct-project').value=p.name||'';
  document.getElementById('ct-project-info').textContent='ðŸ‘¤ '+(p.client||'No client set')+' Â· '+p.name;
  document.getElementById('ct-num').value='CC-'+new Date().getFullYear()+'-'+String(contracts.length+1).padStart(3,'0');
  document.getElementById('ct-amount').value='';
  document.getElementById('ct-date').value=new Date().toISOString().split('T')[0];
  document.getElementById('ct-end').value='';
  document.getElementById('ct-status').value='draft';
  document.getElementById('ct-type').value='Fixed Price';
  document.getElementById('ct-scope').value='';
  document.getElementById('ct-terms').value='';
  document.getElementById('contractModal').classList.add('open');
}
function openEditContract(id){
  const ct=contracts.find(x=>x.id===id);if(!ct)return;
  const p=getAllProjects().find(x=>x.id===ct.projectId)||{};
  document.getElementById('ct-modal-title').textContent='âœ Edit Contract';
  document.getElementById('ct-id').value=ct.id;
  document.getElementById('ct-project').value=ct.project||p.name||'';
  document.getElementById('ct-project-info').textContent='ðŸ‘¤ '+(p.client||'No client set')+' Â· '+(p.name||'');
  document.getElementById('ct-num').value=ct.num||'';
  document.getElementById('ct-amount').value=ct.amount||'';
  document.getElementById('ct-date').value=ct.date||'';
  document.getElementById('ct-end').value=ct.end||'';
  document.getElementById('ct-status').value=ct.status||'draft';
  document.getElementById('ct-type').value=ct.type||'Fixed Price';
  document.getElementById('ct-scope').value=ct.scope||'';
  document.getElementById('ct-terms').value=ct.terms||'';
  document.getElementById('contractModal').classList.add('open');
}
function saveContract(){
  const p=getProj();if(!p){alert('No active project.');return;}
  const eid=document.getElementById('ct-id').value;
  const data={projectId:curProjectId,project:p.name||'',num:document.getElementById('ct-num').value.trim(),amount:document.getElementById('ct-amount').value,type:document.getElementById('ct-type').value,date:document.getElementById('ct-date').value,end:document.getElementById('ct-end').value,status:document.getElementById('ct-status').value,scope:document.getElementById('ct-scope').value.trim(),terms:document.getElementById('ct-terms').value.trim()};
  if(eid&&contracts.find(x=>x.id===eid)){Object.assign(contracts.find(x=>x.id===eid),data);}
  else{contracts.push({id:'ctr_'+Date.now(),...data});}
  saveContracts();closeModal('contractModal');renderMain();
}
function deleteContract(id){
  if(!confirm('Delete this contract?'))return;
  contracts=contracts.filter(c=>c.id!==id);
  saveContracts();renderMain();
}

/* â”€â”€ EDIT CLIENT INFO â”€â”€ */
function openEditClientInfo(){
  const p=getProj();if(!p)return;
  document.getElementById('ec-name').value=p.client||'';
  document.getElementById('ec-phone').value=p.clientPhone||'';
  document.getElementById('ec-email').value=p.clientEmail||'';
  document.getElementById('ec-addr').value=p.clientAddr||'';
  document.getElementById('editClientModal').classList.add('open');
}
function saveClientInfo(){
  const db=getLivioProjects();
  const p=db.projects.find(x=>x.id===curProjectId);
  if(!p){alert('Project not found.');return;}
  p.client=document.getElementById('ec-name').value.trim();
  p.clientPhone=document.getElementById('ec-phone').value.trim();
  p.clientEmail=document.getElementById('ec-email').value.trim();
  p.clientAddr=document.getElementById('ec-addr').value.trim();
  persistLivioProjects(db);
  closeModal('editClientModal');renderMain();showToast('âœ… Client info saved!','success');
}
function closeModal(id){document.getElementById(id).classList.remove('open');}

function syncActiveProject(force=false){
  const db=getLivioProjects();
  const nextId=db.activeId||(db.projects&&db.projects[0]?.id)||null;
  const nextContracts=readContracts();
  const nextSig=JSON.stringify(nextContracts);
  if(!force && nextId===curProjectId && nextSig===lastContractSig)return;
  curProjectId=nextId;
  contracts=nextContracts;
  lastContractSig=nextSig;
  renderMain();
}
window.syncActiveProject=syncActiveProject;

(function init(){syncActiveProject(true);})();
setInterval(()=>syncActiveProject(),2000);
<\/script>
</body>
</html>
\r
`,Pv=`\uFEFF<!DOCTYPE html>\r
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
.proj-grid{padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px 20px}
.dc-item{min-width:0}
.dc-item-wide{grid-column:1/-1}
.dc-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px}
.dc-val{font-size:13px;font-weight:600;color:var(--text);line-height:1.45;overflow-wrap:anywhere}
.proj-ft{padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;background:var(--bg)}
.proj-status{font-size:11px;font-weight:600;display:flex;align-items:center;gap:6px}
.proj-status.ok{color:var(--green)}
.proj-status.warn{color:var(--amber)}
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
  <div class="tb-title">🧾 Client Invoices</div>
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
    <div class="modal-hd"><h3>👤 Edit Client Info</h3><button class="modal-close" onclick="closeModal('editClientModal')">✕</button></div>
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
      <button class="btn btn-navy" onclick="saveClientInfo()">Save →</button>
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD / EDIT INVOICE MODAL -->\r
<div class="modal-overlay" id="invoiceModal">\r
  <div class="modal" style="max-width:640px">\r
    <div class="modal-hd"><h3 id="inv-modal-title">🧾 New Invoice</h3><button class="modal-close" onclick="closeModal('invoiceModal')">✕</button></div>
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
      <button class="btn btn-navy" onclick="saveInvoice()">Save Invoice &rarr;</button>
    </div>\r
  </div>\r
</div>\r
\r
<!-- ADD PAYMENT MODAL -->\r
<div class="modal-overlay" id="paymentModal">\r
  <div class="modal" style="max-width:480px">\r
    <div class="modal-hd"><h3>💵 Record Payment</h3><button class="modal-close" onclick="closeModal('paymentModal')">✕</button></div>
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
      <button class="btn btn-green" onclick="savePayment()">💾 Save Payment</button>
    </div>\r
  </div>\r
</div>\r
\r
<!-- SEND INVOICE EMAIL MODAL -->\r
<div class="modal-overlay" id="emailModal">\r
  <div class="modal" style="max-width:500px">\r
    <div class="modal-hd"><h3 id="em-modal-title">✉ Send Invoice by Email</h3><button class="modal-close" onclick="closeModal('emailModal')">✕</button></div>
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
      <button class="btn btn-navy" id="emailSendBtn" onclick="sendEmailJS()">✉ Send</button>
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
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
const fmtD=s=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—'
const fmtM=n=>(n!=null&&n!=='')?'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'$0.00'
const LIVIO_COMPANY_NAME='Livio Building Systems'
const LIVIO_OFFICE_ADDRESS='121 Main St #563, Los Altos, California (CA) 94022'
function getProjectAddress(p){return p?.address||p?.clientAddr||'—'}
function getLivioSignature(){return \`\${LIVIO_COMPANY_NAME}\\n\${LIVIO_OFFICE_ADDRESS}\`}
function invPaid(inv){return(inv.payments||[]).reduce((s,p)=>s+(parseFloat(p.amount)||0),0)}
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
/* -- EMAIL DELIVERY ---------------------------------------- */
function getEmailConfig(){return {}}
function getEmailApiBase(){
  const host=getHostApp();
  try{
    const hostApi=(host&&typeof host.getApiBase==='function')?host.getApiBase():(host&&host.__LIVIO_API_BASE)||'';
    if(hostApi) return String(hostApi).replace(/\\/+$/,'');
  }catch{}
  const isLocal=location.hostname==='127.0.0.1'||location.hostname==='localhost';
  const fallback=isLocal
    ? 'http://127.0.0.1:3001/api'
    : 'https://project-managment-production-7373.up.railway.app/api';
  return fallback.replace(/\\/+$/,'');
}
function getEmailStatusHtml(){
  const apiBase=getEmailApiBase();
  return \`<span style="color:var(--green)">✓ Using backend email service</span><br><span style="font-size:10px;color:var(--muted)">API: \${apiBase}</span>\`;
}
function renderEmailSendStatus(){
  const el=document.getElementById('em-status');
  if(el)el.innerHTML=getEmailStatusHtml();
}
async function sendEmailThroughBackend(to,subject,message,attachments){
  const payload={
    to,
    subject,
    message,
    fromName:'Livio Building Systems'
  };
  if(Array.isArray(attachments)&&attachments.length) payload.attachments=attachments;
  const res=await fetch(getEmailApiBase()+'/email/send',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.error||data.message||('Email send failed ('+res.status+')'));
  return data;
}
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
      <button class="btn btn-white btn-sm" onclick="downloadLedgerPDF()">⬇ PDF Ledger</button>
      <button class="btn btn-white btn-sm" onclick="downloadLedgerExcel()">📊 Excel Ledger</button>
      <button class="btn btn-white btn-sm" onclick="openSendLedgerEmail()">✉ Send Ledger</button>
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
        <div class="proj-hd-title">📁 \${esc(p.name)}</div>
        <div class="proj-hd-sub">\${esc(p.address||p.city||'')}</div>\r
      </div>\r
      <span style="background:rgba(255,255,255,.12);color:#8AAAC8;font-size:10px;padding:3px 10px;border-radius:4px;font-weight:700">\${invs.length} INVOICE\${invs.length!==1?'S':''}</span>\r
    </div>\r
    <div class="proj-grid">\r
      <div class="dc-item dc-item-wide"><div class="dc-lbl">Client / Owner</div><div class="dc-val">\${esc(p.client||'—')}</div></div>
      \${p.clientEmail?\`<div class="dc-item"><div class="dc-lbl">Email</div><div class="dc-val" style="font-size:11px">\${esc(p.clientEmail)}</div></div>\`:''}
      \${p.clientPhone?\`<div class="dc-item"><div class="dc-lbl">Phone</div><div class="dc-val" style="font-size:12px">\${esc(p.clientPhone)}</div></div>\`:''}
      \${p.clientAddr?\`<div class="dc-item dc-item-wide"><div class="dc-lbl">Address</div><div class="dc-val" style="font-size:12px">\${esc(p.clientAddr)}</div></div>\`:''}
    </div>
    <div class="proj-ft">
      \${!p.client?\`<span class="proj-status warn">&#9888; No client info. Add it below.</span>\`:\`<span class="proj-status ok">&#10003; Client details ready for invoices</span>\`}
      <button class="btn btn-ghost btn-sm" onclick="openEditClientInfo()">&#9998; Edit Client Info</button>
    </div>
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
      ?\`<a class="proof-chip" href="#" onclick="viewProof('\${esc(inv.id)}','\${esc(pay.id)}');return false">📎 \${esc(pay.proofName)}</a>\`
      :\`<span style="color:var(--muted);font-size:10px">—</span>\`;\r
    payRows+=\`<tr>\r
      <td>\${fmtD(pay.date)}</td>\r
      <td>\${fmtM(pay.amount)}</td>\r
      <td style="color:var(--muted)">\${esc(pay.note||'—')}</td>\r
      <td>\${proofHtml}</td>\r
      <td><button class="btn btn-xs btn-red" onclick="deletePayment('\${esc(inv.id)}','\${esc(pay.id)}')">🗑</button></td>
    </tr>\`;\r
  });\r
\r
  const paySection=pays.length?\`\r
  <div class="pay-hist">\r
    <div class="pay-hist-title">💵 Payment History (\${pays.length} record\${pays.length!==1?'s':''})</div>
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
      <button class="btn btn-blue btn-sm" onclick="generateInvoicePDF('\${inv.id}')">&#128196; PDF</button>
      <button class="btn btn-green btn-sm" onclick="openSendInvoiceEmail('\${inv.id}')">✉ Send Email</button>
      <button class="btn btn-amber btn-sm" onclick="openAddPayment('\${inv.id}')">💰 Add Payment</button>
      <button class="btn btn-ghost btn-sm" onclick="openEditInvoice('\${inv.id}')">&#9998; Edit</button>
      <button class="btn btn-red btn-sm" style="margin-left:auto" onclick="deleteInvoice('\${inv.id}')">🗑 Delete</button>
    </div>\r
  </div>\`;\r
}\r
\r
/* -- INVOICE MODAL ----------------------------------------- */\r
function openAddInvoice(){\r
  editInvId=null;\r
  lineItems=[{desc:'',qty:1,price:0}];\r
  document.getElementById('inv-modal-title').textContent='🧾 New Invoice';
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
    <td><button type="button" class="rm-row" onclick="removeLine(\${i})">✕</button></td>
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
function buildInvoicePDFDoc(invId){
  const inv=invoices.find(x=>x.id===invId);
  if(!inv) throw new Error('Invoice not found.');
  const p=getProj();
  if(!window.jspdf) throw new Error('PDF library not loaded yet. Try again.');
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:'pt',format:'letter'});
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
  doc.text(\`Licensed General Contractor  ·  \${LIVIO_OFFICE_ADDRESS}\`,ML,52);
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
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(160,160,160);
  doc.text(\`\${LIVIO_COMPANY_NAME} · \${LIVIO_OFFICE_ADDRESS}\`,W/2,ftY+35,{align:'center'});

  return { doc, inv };
}

function generateInvoicePDF(invId){
  const { doc, inv } = buildInvoicePDFDoc(invId);
  doc.save(\`\${inv.num||'Invoice'}.pdf\`);
  showToast(\`? \${inv.num}.pdf downloaded!\`,'success');
}

function buildInvoicePdfAttachment(invId){
  const { doc, inv } = buildInvoicePDFDoc(invId);
  const dataUri=doc.output('datauristring');
  const content=String(dataUri).split(',')[1]||'';
  return {
    filename:\`\${inv.num||'Invoice'}.pdf\`,
    content,
    contentType:'application/pdf'
  };
}
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
  doc.text(\`Payment Ledger Report · \${LIVIO_OFFICE_ADDRESS}\`,ML,48);
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
  doc.text(\`Project: \${p.name}\`,ML,y);
  y+=14;
  doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(80,80,80);doc.text(\`Project Address: \${getProjectAddress(p)}\`,ML,y);y+=12;
  doc.text(\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\`,ML,y);y+=12;
  if(p.client){doc.text(\`Client: \${p.client}\${p.clientPhone?' · '+p.clientPhone:''}\${p.clientEmail?' · '+p.clientEmail:''}\`,ML,y);y+=12;}
  if(p.clientAddr){doc.setFont('helvetica','normal');doc.setFontSize(9);doc.text(\`Address: \${p.clientAddr}\`,ML,y);y+=12;}
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
  doc.text(\`\${LIVIO_COMPANY_NAME} · \${LIVIO_OFFICE_ADDRESS}\`,W/2,pageH-12,{align:'center'});
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
  const summData=[
    ['LIVIO BUILDING SYSTEMS – Payment Ledger'],
    [\`Project: \${p.name}\`],
    [\`Project Address: \${getProjectAddress(p)}\`],
    [\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\`],
    [\`Client: \${p.client||'—'}\`],
    [p.clientAddr?\`Address: \${p.clientAddr}\`:''],
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
  let body=\`PAYMENT LEDGER — \${p.name}\\n\${'-'.repeat(50)}\\n\`;
  body+=\`Client: \${p.client||'—'}\\n\`;
  body+=\`Project Address: \${getProjectAddress(p)}\\n\`;
  body+=\`Livio Address: \${LIVIO_OFFICE_ADDRESS}\\n\`;
  if(p.clientAddr)body+=\`Client Address: \${p.clientAddr}\\n\`;
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
  body+=\`\\n\${'-'.repeat(50)}\\nThank you for your business!\\n\${getLivioSignature()}\`;
\r
  document.getElementById('em-modal-title').textContent='✉ Send Payment Ledger';
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
  let body=\`Dear \${p?.client||'Client'},\\n\\nPlease find below your invoice details from Livio Building Systems.\\n\\n\`;
  body+=\`INVOICE: \${inv.num}\\n\${'-'.repeat(40)}\\n\`;
  body+=\`Project:    \${inv.project||p?.name||'—'}\\n\`;
  body+=\`Project Address: \${getProjectAddress(p)}\\n\`;
  body+=\`Livio Address:   \${LIVIO_OFFICE_ADDRESS}\\n\`;
  body+=\`Issue Date: \${fmtD(inv.date)}\\n\`;
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
  body+=\`\\nThank you for your business!\\n\${getLivioSignature()}\`;
\r
  document.getElementById('em-modal-title').textContent=\`✉ Send Invoice \${inv.num}\`;
  document.getElementById('em-type').value='invoice';\r
  document.getElementById('em-ref-id').value=invId;\r
  document.getElementById('em-to').value=p?.clientEmail||'';\r
  document.getElementById('em-subject').value=\`Invoice \${inv.num} – \${p?.name||inv.project}\`;\r
  document.getElementById('em-body').value=body;\r
  renderEmailSendStatus();\r
  document.getElementById('emailModal').classList.add('open');\r
}\r
\r
/* -- SEND VIA BACKEND EMAIL SERVICE ------------------------ */
function sendEmailJS(){
  const to=document.getElementById('em-to').value.trim();
  const subject=document.getElementById('em-subject').value.trim();
  const body=document.getElementById('em-body').value.trim();
  const type=document.getElementById('em-type').value;
  const refId=document.getElementById('em-ref-id').value;
  if(!to||!subject||!body){showToast('Fill all fields.','error');return;}
  const btn=document.getElementById('emailSendBtn');
  btn.innerHTML='<span class="spinner"></span> Sending…';
  btn.disabled=true;
  let attachments=[];
  try{
    if(type==='invoice'&&refId){
      attachments=[buildInvoicePdfAttachment(refId)];
    }
  }catch(err){
    btn.innerHTML='✉ Send';
    btn.disabled=false;
    showToast('? Unable to attach invoice PDF: '+(err.message||err),'error',6000);
    return;
  }
  sendEmailThroughBackend(to,subject,body,attachments)
    .then(()=>{
      const message=(type==='invoice'&&refId)?'? Email sent with invoice PDF attached!':'? Email sent successfully!';
      showToast(message,'success',4500);
      closeModal('emailModal');
    })
    .catch(err=>{\r
      showToast('? Email send failed: '+(err.message||JSON.stringify(err)),'error',6000);
    })\r
    .finally(()=>{btn.innerHTML='✉ Send';btn.disabled=false;});
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
`,jv=`<!DOCTYPE html>
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
function deriveMomentumState(db){
  const safeDb=db||{};
  const projects=(safeDb.projects||[]).map(p=>({id:p.id,name:p.name,color:p.color||'#2dd4a0',desc:p.address||''}));
  const tasks=[];
  const statusMap={active:'inprogress',inprogress:'inprogress',starting:'inprogress',hold:'review',caloshahold:'review',complete:'done'};
  (safeDb.projects||[]).forEach(p=>{
    (p.works||[]).forEach(w=>{
      tasks.push({id:w.id,title:w.name,project:p.id,status:statusMap[w.status]||'todo',priority:'med',type:'infra',assignee:'',progress:w.pct||0,start:'',end:''});
    });
    (p.milestones||[]).forEach(m=>{
      tasks.push({id:m.id,title:m.name,project:p.id,status:m.status==='passed'?'done':m.status==='failed'?'review':'todo',priority:'high',type:'feature',assignee:'',progress:m.status==='passed'?100:0,start:m.date||'',end:m.date||''});
    });
  });
  return {projects,tasks,proj:null,view:'kb',zoom:'months',drag:null,gtOpen:{}};
}
function readMomentumState(){
  const db=getLivioDB();
  const base=deriveMomentumState(db);
  const raw=db.momentumState;
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
  db.momentumState={projects:cloneData(S.projects,[]),tasks:cloneData(S.tasks,[]),proj:S.proj ?? null,view:S.view ?? 'kb',zoom:S.zoom ?? 'months',gtOpen:cloneData(S.gtOpen,{})};
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
`;function Av(){const{curPage:e,renderTick:t}=lu();return qe.useEffect(()=>{window.renderAll&&window.renderAll()},[e,t]),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"page on",id:"pg-projects",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"All Projects"}),a.jsx("div",{className:"sh-sub",children:"Manage multiple construction sites"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"project")},children:"+ New Project"})]}),a.jsx("div",{className:"proj-grid",id:"proj-grid"})]}),a.jsxs("div",{className:"page",id:"pg-dashboard",children:[a.jsxs("div",{className:"ceqa",id:"ceqa-banner",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{style:{width:"9px",height:"9px",borderRadius:"50%",background:"var(--purple)",flexShrink:0}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"12px",fontWeight:700,color:"var(--purple)"},children:"CEQA — Mitigated Negative Declaration · PRC §21080"}),a.jsx("div",{style:{fontSize:"10px",color:"var(--purple)",opacity:.75},id:"ceqa-sub",children:"Public Review closed 14 Jan 2026 · No unmitigated impacts"})]})]}),a.jsxs("div",{className:"ceqa-pills",children:[a.jsx("span",{className:"ceqa-pill",children:"✓ NOD Filed"}),a.jsx("span",{className:"ceqa-pill",children:"✓ City Cleared"})]})]}),a.jsx("div",{className:"metrics",id:"dash-metrics"}),a.jsxs("div",{className:"two-col",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"🏗 Works"}),a.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"works")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),a.jsx("div",{id:"d-works"})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"💰 Quotes"}),a.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"quotes")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),a.jsx("div",{id:"d-quotes"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"🏆 Milestones"}),a.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"milestones")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),a.jsx("div",{id:"d-ms"})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"🔍 Inspections"}),a.jsx("a",{onClick:()=>{var n;return(n=window.nav)==null?void 0:n.call(window,"inspections")},style:{fontSize:"11px",color:"var(--blue)",cursor:"pointer",fontWeight:600},children:"All →"})]}),a.jsx("div",{id:"d-ins"})]})]})]})]}),a.jsxs("div",{className:"page",id:"pg-works",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Works at Site"}),a.jsx("div",{className:"sh-sub",children:"CBC 2022 · CalOSHA · ACI 318"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"work")},children:"+ Add Work"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsxs("span",{className:"ph-title",children:["🏗 Work Items ",a.jsx("span",{className:"ph-ct",id:"wc",children:"0"})]})}),a.jsx("div",{className:"tw",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"28%"},children:"Work Item"}),a.jsx("th",{children:"CBC Ref."}),a.jsx("th",{children:"Contractor"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Progress"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{id:"w-tbody"})]})})]})]}),a.jsxs("div",{className:"page",id:"pg-milestones",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Project Milestones"}),a.jsx("div",{className:"sh-sub",children:"CBC §105 · §110 · §111"})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportMilestonePDF)==null?void 0:n.call(window)},title:"Print / Save as PDF",children:"🖨 PDF"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportMilestoneExcel)==null?void 0:n.call(window)},title:"Download Excel",children:"📊 Excel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"milestone")},children:"+ Add Milestone"})]})]}),a.jsxs("div",{className:"sum-grid",children:[a.jsxs("div",{className:"sum-card",children:[a.jsx("div",{className:"sum-v",id:"ms-done",style:{color:"var(--green)"},children:"0"}),a.jsx("div",{className:"sum-l",children:"Achieved"})]}),a.jsxs("div",{className:"sum-card",children:[a.jsx("div",{className:"sum-v",id:"ms-prog",style:{color:"var(--amber)"},children:"0"}),a.jsx("div",{className:"sum-l",children:"In Progress"})]}),a.jsxs("div",{className:"sum-card",children:[a.jsx("div",{className:"sum-v",id:"ms-up",style:{color:"var(--gray)"},children:"0"}),a.jsx("div",{className:"sum-l",children:"Upcoming"})]}),a.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--green)"},children:[a.jsx("div",{className:"sum-v",id:"ms-paid",style:{color:"var(--green)",fontSize:"18px"},children:"$0"}),a.jsx("div",{className:"sum-l",children:"✓ Paid"})]}),a.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--red)"},children:[a.jsx("div",{className:"sum-v",id:"ms-bal",style:{color:"var(--red)",fontSize:"18px"},children:"$0"}),a.jsx("div",{className:"sum-l",children:"Balance Due"})]}),a.jsxs("div",{className:"sum-card",style:{borderTop:"3px solid var(--navy)"},children:[a.jsx("div",{className:"sum-v",id:"ms-total",style:{color:"var(--navy)",fontSize:"18px"},children:"$0"}),a.jsx("div",{className:"sum-l",children:"Total Contract"})]})]}),a.jsxs("div",{className:"panel",style:{marginBottom:"18px"},children:[a.jsxs("div",{className:"ph",style:{background:"var(--navy)"},children:[a.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📒 Payment Ledger — All Milestones"}),a.jsx("span",{style:{fontSize:"11px",color:"#8AAAC8"},children:"Full breakdown of contract amounts, payments received & balance"})]}),a.jsx("div",{id:"ms-ledger"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsxs("span",{className:"ph-title",children:["🏆 Milestones ",a.jsx("span",{className:"ph-ct",id:"msc",children:"0"})]})}),a.jsx("div",{className:"tw",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"24%"},children:"Milestone"}),a.jsx("th",{children:"CBC Ref."}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Contract Amt."}),a.jsx("th",{children:"Progress Payments"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{id:"ms-tbody"})]})})]})]}),a.jsxs("div",{className:"page",id:"pg-quotes",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Quotes Received"}),a.jsx("div",{className:"sh-sub",children:"CSI Divisions · California Codes · Attachments"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"quote")},children:"+ Add Quote"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsxs("span",{className:"ph-title",children:["💰 Quotes ",a.jsx("span",{className:"ph-ct",id:"qc",children:"0"})]})}),a.jsx("div",{className:"tw",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"24%"},children:"Vendor / Scope"}),a.jsx("th",{children:"Code Ref."}),a.jsx("th",{children:"CSI"}),a.jsx("th",{children:"Amount"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Files"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{id:"q-tbody"})]})}),a.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:a.jsxs("div",{style:{display:"flex",gap:"22px",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"10px",color:"var(--muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px"},children:"All Quotes"}),a.jsx("span",{className:"sum-v",id:"q-total",style:{fontSize:"15px",color:"var(--muted)"},children:"$0"})]}),a.jsx("div",{style:{width:"1px",height:"28px",background:"var(--border)"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"10px",color:"var(--green)",fontWeight:700,textTransform:"uppercase",letterSpacing:".5px"},children:"✓ Approved Total"}),a.jsx("span",{className:"sum-v",id:"q-approved",style:{fontSize:"20px",color:"var(--green)"},children:"$0"})]})]})})]})]}),a.jsxs("div",{className:"page",id:"pg-plans",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Plans & Documents"}),a.jsx("div",{className:"sh-sub",children:"Drawings, permits, reports, and project files"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"plan")},children:"+ Upload Document"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsxs("span",{className:"ph-title",children:["📐 Documents ",a.jsx("span",{className:"ph-ct",id:"plc",children:"0"})]})}),a.jsx("div",{style:{padding:"16px"},id:"plans-wrap"})]})]}),a.jsxs("div",{className:"page",id:"pg-inspections",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Inspections Scheduled"}),a.jsx("div",{className:"sh-sub",children:"City of Cupertino Building Division · CalOSHA · CBC §110"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"inspection")},children:"+ Add Inspection"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsxs("span",{className:"ph-title",children:["🔍 Inspections ",a.jsx("span",{className:"ph-ct",id:"ic",children:"0"})]})}),a.jsx("div",{id:"ins-list"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsx("span",{className:"ph-title",children:"👤 Key Contacts"})}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Contact"}),a.jsx("th",{children:"AHJ"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"Building Division"}),a.jsx("td",{children:"John Park"}),a.jsx("td",{children:"(408) 777-3228"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Cupertino"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"Project EOR"}),a.jsx("td",{children:"Sarah Kim, SE"}),a.jsx("td",{children:"Bay Structural Group"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-teal",children:"Structural"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CalOSHA District"}),a.jsx("td",{children:"District Office"}),a.jsx("td",{children:"San Jose, CA"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-red",children:"CalOSHA"})})]})]})]})]})]}),a.jsxs("div",{className:"page",id:"pg-payments",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Payments"}),a.jsx("div",{className:"sh-sub",children:"Vendor contracts · Invoice milestones · Lien waivers"})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportPaymentLedgerPDF)==null?void 0:n.call(window)},title:"Print / Save as PDF",children:"🖨 Ledger PDF"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportPaymentLedgerExcel)==null?void 0:n.call(window)},title:"Download Excel spreadsheet",children:"📊 Ledger Excel"})]})]}),a.jsxs("div",{id:"pay-export-bar",style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"9px",padding:"10px 16px",marginBottom:"14px",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:"Export per subcontractor:"}),a.jsx("div",{id:"sub-export-btns",style:{display:"flex",gap:"6px",flexWrap:"wrap"}})]}),a.jsx("div",{id:"pay-smart-search-bar",style:{display:"none",marginBottom:"16px"},children:a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--border)",borderRadius:"10px",boxShadow:"var(--sh)",overflow:"hidden"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",borderBottom:"1px solid var(--border)"},children:[a.jsx("span",{style:{fontSize:"18px",color:"var(--blue)"},children:"🔍"}),a.jsx("input",{id:"pay-smart-search",type:"text",placeholder:"Search vendor by name or trade…",onInput:()=>{var n;return(n=window.runPaySmartSearch)==null?void 0:n.call(window)},autoComplete:"off",style:{border:"none",outline:"none",fontSize:"14px",fontWeight:500,flex:1,background:"transparent",fontFamily:"'Barlow',sans-serif",color:"var(--text)"}}),a.jsx("button",{id:"pay-smart-clear",onClick:()=>{var n;return(n=window.clearPaySmartSearch)==null?void 0:n.call(window)},style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"5px",color:"var(--muted)",cursor:"pointer",fontSize:"12px",padding:"3px 9px"},children:"✕ Clear"})]}),a.jsx("div",{id:"pay-smart-results",style:{display:"none"}})]})}),a.jsx("div",{id:"pay-filter-bar",style:{display:"none",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"9px",padding:"12px 16px",marginBottom:"14px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"7px",flex:1,minWidth:"200px",background:"#fff",border:"1px solid var(--border)",borderRadius:"7px",padding:"5px 10px"},children:[a.jsx("span",{style:{color:"var(--muted)",fontSize:"14px"},children:"🔍"}),a.jsx("input",{id:"pay-search",type:"text",placeholder:"Search vendor name…",onInput:()=>{var n;return(n=window.filterPayVendors)==null?void 0:n.call(window)},style:{border:"none",outline:"none",fontSize:"12px",flex:1,background:"transparent"}}),a.jsx("button",{onClick:()=>{var n;return(n=window.clearPaySearch)==null?void 0:n.call(window)},style:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:"14px",padding:0},title:"Clear",children:"×"})]}),a.jsx("div",{id:"pay-vendor-checks",style:{display:"flex",flexWrap:"wrap",gap:"6px"}}),a.jsx("button",{onClick:()=>{var n;return(n=window.showAllPayVendors)==null?void 0:n.call(window)},className:"btn btn-ghost btn-xs",style:{fontSize:"10px"},children:"Show All"})]})}),a.jsx("div",{id:"pay-pie-panel",style:{display:"none",marginBottom:"18px"},children:a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsx("span",{className:"ph-title",children:"📊 Vendor Payment Status Overview"})}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"24px",padding:"16px 20px",flexWrap:"wrap"},children:[a.jsx("div",{id:"pay-pie-svg-wrap",style:{flexShrink:0,width:"180px",height:"180px",position:"relative"}}),a.jsx("div",{id:"pay-pie-legend",style:{flex:1,minWidth:"200px"}})]})]})}),a.jsxs("div",{className:"panel",id:"pay-ledger-panel",style:{display:"none",marginBottom:"18px"},children:[a.jsxs("div",{className:"ph",style:{background:"var(--navy)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📒 VENDOR PAYMENT LEDGER"}),a.jsx("span",{style:{fontSize:"10px",color:"#8AAAC8"},children:"Contract · Paid · Balance by vendor"})]}),a.jsxs("div",{style:{display:"flex",gap:"6px"},children:[a.jsx("button",{onClick:()=>{var n;return(n=window.exportVCPaymentLedgerPDF)==null?void 0:n.call(window)},className:"btn btn-xs",style:{background:"rgba(255,255,255,.13)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",fontSize:"10px"},children:"🖨 PDF"}),a.jsx("button",{onClick:()=>{var n;return(n=window.exportVCPaymentLedgerExcel)==null?void 0:n.call(window)},className:"btn btn-xs",style:{background:"rgba(255,255,255,.13)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",fontSize:"10px"},children:"📊 Excel"})]})]}),a.jsx("div",{id:"pay-ledger"})]}),a.jsx("div",{id:"pay-list"}),a.jsx("div",{id:"pay-trade-panel",style:{display:"none",marginTop:"4px"}}),a.jsxs("div",{id:"pay-empty",style:{display:"none"},className:"empty",children:[a.jsx("div",{className:"empty-ic",children:"💳"}),"No approved quotes yet. Mark a quote as Approved to start tracking payments."]})]}),a.jsxs("div",{className:"page",id:"pg-vendors",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Vendor Contracts"}),a.jsx("div",{className:"sh-sub",children:"Subcontractor agreements · Signed contracts · SOW documents"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"vendor")},children:"+ Add Vendor Contract"})]}),a.jsx("div",{id:"ven-content"})]}),a.jsxs("div",{className:"page",id:"pg-invoices",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Invoice Tracker"}),a.jsx("div",{className:"sh-sub",children:"Track invoices against contract · Due & paid amounts per subcontractor"})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportInvoicePDF)==null?void 0:n.call(window)},children:"🖨 PDF"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.exportInvoiceExcel)==null?void 0:n.call(window)},children:"📊 Excel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"invoice")},children:"+ Add Invoice"})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginBottom:"18px"},children:[a.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[a.jsx("div",{className:"mc-lbl",children:"Total Contract Value"}),a.jsx("div",{className:"mc-val",id:"inv-contract",style:{fontSize:"22px"},children:"$0"}),a.jsx("div",{className:"mc-sub",children:"All signed vendor contracts"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--blue)"},children:[a.jsx("div",{className:"mc-lbl",children:"Total Invoiced"}),a.jsx("div",{className:"mc-val",id:"inv-invoiced",style:{fontSize:"22px",color:"var(--blue)"},children:"$0"}),a.jsx("div",{className:"mc-sub",children:"Sum of all invoices"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[a.jsx("div",{className:"mc-lbl",children:"✓ Total Paid"}),a.jsx("div",{className:"mc-val",id:"inv-paid",style:{fontSize:"22px",color:"var(--green)"},children:"$0"}),a.jsx("div",{className:"mc-sub",children:"Invoices marked paid"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[a.jsx("div",{className:"mc-lbl",children:"Due / Outstanding"}),a.jsx("div",{className:"mc-val",id:"inv-due",style:{fontSize:"22px",color:"var(--red)"},children:"$0"}),a.jsx("div",{className:"mc-sub",children:"Invoiced but unpaid"})]})]}),a.jsx("div",{id:"inv-content"})]}),a.jsxs("div",{className:"page",id:"pg-checklist",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Project Checklist"}),a.jsx("div",{className:"sh-sub",children:"Tasks, punch lists, and pre-construction checklists"})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"chklist-cat")},children:"+ Add Category"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"chklist-item")},children:"+ Add Item"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap"},children:[a.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[a.jsx("div",{className:"mc-lbl",children:"Total Items"}),a.jsx("div",{className:"mc-val",id:"chk-total",style:{fontSize:"22px"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[a.jsx("div",{className:"mc-lbl",children:"✓ Complete"}),a.jsx("div",{className:"mc-val",id:"chk-done",style:{fontSize:"22px",color:"var(--green)"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--amber)"},children:[a.jsx("div",{className:"mc-lbl",children:"In Progress"}),a.jsx("div",{className:"mc-val",id:"chk-prog",style:{fontSize:"22px",color:"var(--amber)"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[a.jsx("div",{className:"mc-lbl",children:"Not Started"}),a.jsx("div",{className:"mc-val",id:"chk-open",style:{fontSize:"22px",color:"var(--red)"},children:"0"})]})]}),a.jsx("div",{id:"chk-content"})]}),a.jsxs("div",{className:"page",id:"pg-qaqc",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"QA/QC Log"}),a.jsx("div",{className:"sh-sub",children:"Quality assurance · Non-conformance reports · Observations"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openModal)==null?void 0:n.call(window,"qaqc-item")},children:"+ Add QA/QC Entry"})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap"},children:[a.jsxs("div",{className:"mc",style:{"--ac":"var(--navy)"},children:[a.jsx("div",{className:"mc-lbl",children:"Total Entries"}),a.jsx("div",{className:"mc-val",id:"qa-total",style:{fontSize:"22px"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--red)"},children:[a.jsx("div",{className:"mc-lbl",children:"Open NCR"}),a.jsx("div",{className:"mc-val",id:"qa-ncr",style:{fontSize:"22px",color:"var(--red)"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--green)"},children:[a.jsx("div",{className:"mc-lbl",children:"Closed"}),a.jsx("div",{className:"mc-val",id:"qa-closed",style:{fontSize:"22px",color:"var(--green)"},children:"0"})]}),a.jsxs("div",{className:"mc",style:{"--ac":"var(--amber)"},children:[a.jsx("div",{className:"mc-lbl",children:"Observations"}),a.jsx("div",{className:"mc-val",id:"qa-obs",style:{fontSize:"22px",color:"var(--amber)"},children:"0"})]})]}),a.jsx("div",{id:"qa-content"})]}),a.jsxs("div",{className:"page",id:"pg-compliance",children:[a.jsx("div",{className:"sh",children:a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Compliance Tracker"}),a.jsx("div",{className:"sh-sub",children:"Title 24 · CALGreen · CBC 2022"})]})}),a.jsxs("div",{className:"two-col",children:[a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"⚡ Title 24 Energy (Part 6)"}),a.jsx("span",{className:"ph-ct",children:"2025"})]}),a.jsx("div",{style:{padding:"10px 16px"},id:"t24-list"})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"ph",children:[a.jsx("span",{className:"ph-title",children:"🌿 CALGreen Div 4 Mandatory"}),a.jsx("span",{className:"ph-ct",children:"2022"})]}),a.jsx("div",{style:{padding:"10px 16px"},id:"cg-list"})]})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsx("span",{className:"ph-title",children:"📋 Regulatory Summary"})}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Code"}),a.jsx("th",{children:"Description"}),a.jsx("th",{children:"Section"}),a.jsx("th",{children:"Status"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CBC 2022"}),a.jsx("td",{children:"California Building Code"}),a.jsx("td",{children:"All applicable"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Active"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CPC 2022"}),a.jsx("td",{children:"California Plumbing Code"}),a.jsx("td",{children:"§903 DWV"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Active"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CMC 2022"}),a.jsx("td",{children:"California Mechanical Code"}),a.jsx("td",{children:"Mechanical systems"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Active"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CEC 2022"}),a.jsx("td",{children:"California Electrical Code"}),a.jsx("td",{children:"All electrical"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Active"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CALGreen 2022"}),a.jsx("td",{children:"Green Building Standards"}),a.jsx("td",{children:"Div 4 Mandatory"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-amber",children:"In Progress"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"Title 24 Part 6"}),a.jsx("td",{children:"Energy Efficiency — 2025"}),a.jsx("td",{children:"Envelope/Mech/Lighting"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-amber",children:"In Progress"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CEQA"}),a.jsx("td",{children:"Environmental Quality Act"}),a.jsx("td",{children:"PRC §21080"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-green",children:"MND Approved"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"CalOSHA"}),a.jsx("td",{children:"Worker Safety — Title 8"}),a.jsx("td",{children:"§1735"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-blue",children:"Enforced"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"tn",children:"ASCE 7-22"}),a.jsx("td",{children:"Structural Loads — SDC D"}),a.jsx("td",{children:"Ch.11/12"}),a.jsx("td",{children:a.jsx("span",{className:"badge b-green",children:"Compliant"})})]})]})]})]})]}),a.jsxs("div",{className:"page",id:"pg-export",children:[a.jsx("div",{className:"sh",children:a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Export & Download"}),a.jsx("div",{className:"sh-sub",children:"Reports, backups, and attached files"})]})}),a.jsxs("div",{style:{marginBottom:"18px"},children:[a.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"15px",fontWeight:700,letterSpacing:".5px",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"📄 Export Document"}),a.jsxs("div",{className:"exp-grid",children:[a.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportPDF)==null?void 0:n.call(window)},style:{position:"relative"},children:[a.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📕"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"PDF Report"}),a.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".pdf — direct download"}),a.jsx("div",{style:{marginTop:"10px"},children:a.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--red-l)",color:"var(--red)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #F5C0C0"},children:"🖨 Print / Save as PDF"})})]}),a.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportWord)==null?void 0:n.call(window)},children:[a.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📘"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Word Document"}),a.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".doc — editable report"}),a.jsx("div",{style:{marginTop:"10px"},children:a.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--blue-l)",color:"var(--blue)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #B0D0F0"},children:"⬇ Download Word"})})]}),a.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportPPTX)==null?void 0:n.call(window)},children:[a.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📙"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"PowerPoint"}),a.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:".pptx — presentation deck"}),a.jsx("div",{style:{marginTop:"10px"},children:a.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"var(--amber-l)",color:"var(--amber)",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"5px",border:"1px solid #F5D9A0"},children:"⬇ Download PPTX"})})]})]})]}),a.jsxs("div",{style:{marginBottom:"18px"},children:[a.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"15px",fontWeight:700,letterSpacing:".5px",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"💾 Data & Files"}),a.jsxs("div",{className:"exp-grid",children:[a.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportJSON)==null?void 0:n.call(window)},children:[a.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:"📦"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Export Project Data"}),a.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:"JSON backup — re-importable"})]}),a.jsxs("div",{className:"exp-card",onClick:()=>{var n;return(n=window.exportAllFiles)==null?void 0:n.call(window)},children:[a.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:"🗂"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:700},children:"Download All Files"}),a.jsx("div",{style:{fontSize:"11px",color:"var(--muted)",marginTop:"4px"},children:"All attachments in this project"})]})]})]}),a.jsxs("div",{className:"panel",children:[a.jsx("div",{className:"ph",children:a.jsx("span",{className:"ph-title",children:"📂 Project Files"})}),a.jsx("div",{style:{padding:"16px"},id:"exp-files"})]}),a.jsxs("div",{className:"panel",style:{marginTop:0},children:[a.jsx("div",{className:"ph",children:a.jsx("span",{className:"ph-title",children:"📥 Import Project"})}),a.jsxs("div",{style:{padding:"16px"},children:[a.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginBottom:"10px"},children:"Restore a previously exported JSON backup."}),a.jsxs("label",{className:"btn btn-ghost",style:{cursor:"pointer"},children:["📂 Choose JSON File",a.jsx("input",{type:"file",accept:".json",onChange:n=>{var o;return(o=window.importJSON)==null?void 0:o.call(window,n.target)},style:{display:"none"}})]})]})]})]}),a.jsx("div",{className:"page",id:"pg-daily-tracker",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:a.jsx(gi,{frameId:"daily-tracker-frame",title:"Daily Tracker",html:Ev,isActive:e==="daily-tracker",onActivate:n=>{var o;return(o=n.syncActiveProject)==null?void 0:o.call(n)}})}),a.jsx("div",{className:"page",id:"pg-client-contract",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:a.jsx(gi,{frameId:"client-contract-frame",title:"Client Contract",html:$v,isActive:e==="client-contract",onActivate:n=>{var o;return(o=n.syncActiveProject)==null?void 0:o.call(n)}})}),a.jsx("div",{className:"page",id:"pg-client-invoice",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:a.jsx(gi,{frameId:"client-invoice-frame",title:"Client Invoice",html:Pv,isActive:e==="client-invoice",onActivate:n=>{var o;return(o=n.syncActiveProject)==null?void 0:o.call(n)}})}),a.jsxs("div",{className:"page",id:"pg-settings",children:[a.jsx("div",{className:"sh",children:a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"⚙ Settings"}),a.jsx("div",{className:"sh-sub",children:"Email configuration · App preferences"})]})}),a.jsxs("div",{className:"panel",style:{maxWidth:"760px",marginBottom:"20px"},children:[a.jsx("div",{className:"ph",style:{background:"var(--navy)"},children:a.jsx("span",{className:"ph-title",style:{color:"#fff"},children:"📧 Email Setup — Direct Send via SMTP"})}),a.jsxs("div",{style:{padding:"20px 24px"},children:[a.jsxs("div",{style:{background:"var(--blue-l)",border:"1px solid #B0D0F0",borderRadius:"8px",padding:"12px 16px",marginBottom:"20px",fontSize:"12px",lineHeight:"1.8",color:"var(--navy)"},children:[a.jsx("strong",{children:"How to enable SMTP sending:"}),a.jsx("br",{}),"1. Start the Livio backend on ",a.jsx("code",{style:{background:"#e8f2fc",padding:"1px 4px",borderRadius:"3px"},children:"http://127.0.0.1:3001"}),a.jsx("br",{}),"2. Enter your SMTP server details below, or keep them blank if the backend already has them in ",a.jsx("code",{style:{background:"#e8f2fc",padding:"1px 4px",borderRadius:"3px"},children:"backend/.env"}),a.jsx("br",{}),"3. Use an app password for Gmail / Outlook when required by your mail provider",a.jsx("br",{}),"4. Save, then click ",a.jsx("strong",{children:"Send Test Email"})," to verify everything before emailing vendors or clients"]}),a.jsx("div",{id:"email-cfg-status",style:{marginBottom:"16px"}}),a.jsxs("div",{className:"fr",children:[a.jsx("label",{className:"fl",children:"Backend API Base"}),a.jsx("input",{className:"fi",id:"cfg-api-base",placeholder:"http://127.0.0.1:3001/api",autoComplete:"off"}),a.jsx("div",{style:{fontSize:"10px",color:"var(--muted)",marginTop:"3px"},children:"Leave as default unless your backend runs on a different URL"})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"SMTP Host"}),a.jsx("input",{className:"fi",id:"cfg-smtp-host",placeholder:"smtp.gmail.com",autoComplete:"off"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"SMTP Port"}),a.jsx("input",{className:"fi",id:"cfg-smtp-port",type:"number",placeholder:"587",autoComplete:"off"})]})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"SMTP Username"}),a.jsx("input",{className:"fi",id:"cfg-smtp-user",placeholder:"yourname@company.com",autoComplete:"off"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"SMTP Password"}),a.jsx("input",{className:"fi",id:"cfg-smtp-pass",type:"password",placeholder:"App password or SMTP password",autoComplete:"off"})]})]}),a.jsxs("div",{className:"fr",style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("input",{id:"cfg-smtp-secure",type:"checkbox",style:{width:"16px",height:"16px",accentColor:"var(--blue)"}}),a.jsx("label",{className:"fl",htmlFor:"cfg-smtp-secure",style:{margin:0,cursor:"pointer"},children:"Use secure SMTP / SSL"})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"From Name"}),a.jsx("input",{className:"fi",id:"cfg-from-name",placeholder:"Livio Building Systems",autoComplete:"off"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Reply-To Email"}),a.jsx("input",{className:"fi",id:"cfg-from-email",type:"email",placeholder:"billing@company.com"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[a.jsx("button",{onClick:()=>{var n;return(n=window.saveEmailConfig)==null?void 0:n.call(window)},className:"btn btn-navy",style:{padding:"9px 22px"},children:"💾 Save Email Settings"}),a.jsx("button",{onClick:()=>{var n;return(n=window.testEmailConfig)==null?void 0:n.call(window)},className:"btn btn-ghost",style:{padding:"9px 22px"},children:"🧪 Send Test Email"}),a.jsx("button",{onClick:()=>{var n;return(n=window.clearEmailConfig)==null?void 0:n.call(window)},className:"btn",style:{padding:"9px 16px",background:"var(--red-l)",color:"var(--red)",border:"1px solid #F5B8B8",marginLeft:"auto"},children:"🗑 Clear"})]})]})]})]}),a.jsx("div",{className:"page",id:"pg-momentum",style:{padding:0,overflow:"hidden",height:"calc(100vh - 54px)"},children:a.jsx(gi,{frameId:"momentum-frame",title:"Momentum",html:jv,isActive:e==="momentum",onActivate:n=>{var o;return(o=n.syncActiveProject)==null?void 0:o.call(n)}})}),a.jsxs("div",{className:"page",id:"pg-vendor-directory",children:[a.jsxs("div",{className:"sh",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sh-title",children:"Vendor Directory"}),a.jsx("div",{className:"sh-sub",children:"Subcontractor profiles · Payment details · License & banking info"})]}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var n;return(n=window.openVDirModal)==null?void 0:n.call(window)},children:"+ Add Vendor"})]}),a.jsx("div",{id:"vdir-content"})]})]})}const Dv={},du="livio_v1",Ja=["#1A6BC4","#2D6A0F","#A86200","#9B1F1F","#0D6E58","#4A3FB0","#555451","#7A3535"],Nv={cupertino:{county:"Santa Clara County",state:"CA",zip:"95014",prefix:"CUPR"},"san jose":{county:"Santa Clara County",state:"CA",zip:"95101",prefix:"SJBP"},"santa clara":{county:"Santa Clara County",state:"CA",zip:"95050",prefix:"SCLR"},sunnyvale:{county:"Santa Clara County",state:"CA",zip:"94086",prefix:"SVBP"},"mountain view":{county:"Santa Clara County",state:"CA",zip:"94040",prefix:"MVBP"},"palo alto":{county:"Santa Clara County",state:"CA",zip:"94301",prefix:"PABP"},"los altos":{county:"Santa Clara County",state:"CA",zip:"94022",prefix:"LABP"},"los altos hills":{county:"Santa Clara County",state:"CA",zip:"94022",prefix:"LAHB"},campbell:{county:"Santa Clara County",state:"CA",zip:"95008",prefix:"CMPB"},"los gatos":{county:"Santa Clara County",state:"CA",zip:"95030",prefix:"LGBP"},saratoga:{county:"Santa Clara County",state:"CA",zip:"95070",prefix:"SRBP"},milpitas:{county:"Santa Clara County",state:"CA",zip:"95035",prefix:"MLBP"},gilroy:{county:"Santa Clara County",state:"CA",zip:"95020",prefix:"GLBP"},"morgan hill":{county:"Santa Clara County",state:"CA",zip:"95037",prefix:"MHBP"},"monte sereno":{county:"Santa Clara County",state:"CA",zip:"95030",prefix:"MSBP"},"san mateo":{county:"San Mateo County",state:"CA",zip:"94401",prefix:"SMTB"},"redwood city":{county:"San Mateo County",state:"CA",zip:"94061",prefix:"RWBP"},"menlo park":{county:"San Mateo County",state:"CA",zip:"94025",prefix:"MPBP"},"foster city":{county:"San Mateo County",state:"CA",zip:"94404",prefix:"FCBP"},burlingame:{county:"San Mateo County",state:"CA",zip:"94010",prefix:"BLBP"},"daly city":{county:"San Mateo County",state:"CA",zip:"94014",prefix:"DCBP"},"south san francisco":{county:"San Mateo County",state:"CA",zip:"94080",prefix:"SSFB"},"san carlos":{county:"San Mateo County",state:"CA",zip:"94070",prefix:"SCBP"},belmont:{county:"San Mateo County",state:"CA",zip:"94002",prefix:"BLMB"},"half moon bay":{county:"San Mateo County",state:"CA",zip:"94019",prefix:"HMBB"},millbrae:{county:"San Mateo County",state:"CA",zip:"94030",prefix:"MLRB"},"san bruno":{county:"San Mateo County",state:"CA",zip:"94066",prefix:"SBRB"},pacifica:{county:"San Mateo County",state:"CA",zip:"94044",prefix:"PCFB"},"east palo alto":{county:"San Mateo County",state:"CA",zip:"94303",prefix:"EPAB"},atherton:{county:"San Mateo County",state:"CA",zip:"94027",prefix:"ATHN"},woodside:{county:"San Mateo County",state:"CA",zip:"94062",prefix:"WDSB"},"portola valley":{county:"San Mateo County",state:"CA",zip:"94028",prefix:"PVBP"},oakland:{county:"Alameda County",state:"CA",zip:"94601",prefix:"OAKB"},fremont:{county:"Alameda County",state:"CA",zip:"94536",prefix:"FRBP"},hayward:{county:"Alameda County",state:"CA",zip:"94541",prefix:"HWBP"},berkeley:{county:"Alameda County",state:"CA",zip:"94710",prefix:"BKBP"},"san leandro":{county:"Alameda County",state:"CA",zip:"94577",prefix:"SLBP"},newark:{county:"Alameda County",state:"CA",zip:"94560",prefix:"NWKB"},"union city":{county:"Alameda County",state:"CA",zip:"94587",prefix:"UCBP"},livermore:{county:"Alameda County",state:"CA",zip:"94550",prefix:"LVRB"},pleasanton:{county:"Alameda County",state:"CA",zip:"94566",prefix:"PLSB"},dublin:{county:"Alameda County",state:"CA",zip:"94568",prefix:"DBLB"},alameda:{county:"Alameda County",state:"CA",zip:"94501",prefix:"ALMB"},emeryville:{county:"Alameda County",state:"CA",zip:"94608",prefix:"EMRB"},albany:{county:"Alameda County",state:"CA",zip:"94706",prefix:"ALBX"},piedmont:{county:"Alameda County",state:"CA",zip:"94611",prefix:"PDMB"},"san francisco":{county:"San Francisco County",state:"CA",zip:"94103",prefix:"SFDB"},"walnut creek":{county:"Contra Costa County",state:"CA",zip:"94596",prefix:"WCBP"},concord:{county:"Contra Costa County",state:"CA",zip:"94520",prefix:"CNBP"},richmond:{county:"Contra Costa County",state:"CA",zip:"94801",prefix:"RCBP"},antioch:{county:"Contra Costa County",state:"CA",zip:"94509",prefix:"ATCB"},pittsburg:{county:"Contra Costa County",state:"CA",zip:"94565",prefix:"PTBP"},"san ramon":{county:"Contra Costa County",state:"CA",zip:"94582",prefix:"SRNB"},danville:{county:"Contra Costa County",state:"CA",zip:"94526",prefix:"DNVB"},martinez:{county:"Contra Costa County",state:"CA",zip:"94553",prefix:"MRTZ"},"el cerrito":{county:"Contra Costa County",state:"CA",zip:"94530",prefix:"ELCB"},hercules:{county:"Contra Costa County",state:"CA",zip:"94547",prefix:"HRCB"},brentwood:{county:"Contra Costa County",state:"CA",zip:"94513",prefix:"BTWB"},oakley:{county:"Contra Costa County",state:"CA",zip:"94561",prefix:"OKLY"},orinda:{county:"Contra Costa County",state:"CA",zip:"94563",prefix:"ORNB"},moraga:{county:"Contra Costa County",state:"CA",zip:"94556",prefix:"MRGB"},"san rafael":{county:"Marin County",state:"CA",zip:"94901",prefix:"SRFB"},novato:{county:"Marin County",state:"CA",zip:"94945",prefix:"NVTB"},"mill valley":{county:"Marin County",state:"CA",zip:"94941",prefix:"MVLB"},"san anselmo":{county:"Marin County",state:"CA",zip:"94960",prefix:"SANB"},fairfax:{county:"Marin County",state:"CA",zip:"94930",prefix:"FFXB"},"corte madera":{county:"Marin County",state:"CA",zip:"94925",prefix:"CMBP"},tiburon:{county:"Marin County",state:"CA",zip:"94920",prefix:"TBRN"},sausalito:{county:"Marin County",state:"CA",zip:"94965",prefix:"SLTB"},"santa rosa":{county:"Sonoma County",state:"CA",zip:"95401",prefix:"SNRB"},petaluma:{county:"Sonoma County",state:"CA",zip:"94952",prefix:"PTLB"},"rohnert park":{county:"Sonoma County",state:"CA",zip:"94928",prefix:"RPKB"},windsor:{county:"Sonoma County",state:"CA",zip:"95492",prefix:"WDSB"},healdsburg:{county:"Sonoma County",state:"CA",zip:"95448",prefix:"HLDB"},napa:{county:"Napa County",state:"CA",zip:"94559",prefix:"NAPB"},"american canyon":{county:"Napa County",state:"CA",zip:"94503",prefix:"ACNB"},vallejo:{county:"Solano County",state:"CA",zip:"94590",prefix:"VLJB"},fairfield:{county:"Solano County",state:"CA",zip:"94533",prefix:"FFLB"},vacaville:{county:"Solano County",state:"CA",zip:"95688",prefix:"VCVB"},benicia:{county:"Solano County",state:"CA",zip:"94510",prefix:"BNCB"},dixon:{county:"Solano County",state:"CA",zip:"95620",prefix:"DIXB"},"los angeles":{county:"Los Angeles County",state:"CA",zip:"90001",prefix:"LABC"},"long beach":{county:"Los Angeles County",state:"CA",zip:"90801",prefix:"LBBP"},glendale:{county:"Los Angeles County",state:"CA",zip:"91201",prefix:"GLDB"},pasadena:{county:"Los Angeles County",state:"CA",zip:"91101",prefix:"PSDB"},torrance:{county:"Los Angeles County",state:"CA",zip:"90501",prefix:"TRRB"},burbank:{county:"Los Angeles County",state:"CA",zip:"91501",prefix:"BRBP"},"santa monica":{county:"Los Angeles County",state:"CA",zip:"90401",prefix:"STMB"},inglewood:{county:"Los Angeles County",state:"CA",zip:"90301",prefix:"INGLB"},hawthorne:{county:"Los Angeles County",state:"CA",zip:"90250",prefix:"HWTH"},"el monte":{county:"Los Angeles County",state:"CA",zip:"91731",prefix:"ELMB"},pomona:{county:"Los Angeles County",state:"CA",zip:"91766",prefix:"PMNB"},carson:{county:"Los Angeles County",state:"CA",zip:"90745",prefix:"CRSNB"},compton:{county:"Los Angeles County",state:"CA",zip:"90220",prefix:"CMPB"},downey:{county:"Los Angeles County",state:"CA",zip:"90240",prefix:"DWNB"},norwalk:{county:"Los Angeles County",state:"CA",zip:"90650",prefix:"NWKB"},"west covina":{county:"Los Angeles County",state:"CA",zip:"91790",prefix:"WCVB"},alhambra:{county:"Los Angeles County",state:"CA",zip:"91801",prefix:"ALHB"},whittier:{county:"Los Angeles County",state:"CA",zip:"90601",prefix:"WHTB"},"beverly hills":{county:"Los Angeles County",state:"CA",zip:"90210",prefix:"BVHB"},"culver city":{county:"Los Angeles County",state:"CA",zip:"90230",prefix:"CCIB"},"west hollywood":{county:"Los Angeles County",state:"CA",zip:"90046",prefix:"WHWB"},calabasas:{county:"Los Angeles County",state:"CA",zip:"91302",prefix:"CLBB"},"santa clarita":{county:"Los Angeles County",state:"CA",zip:"91350",prefix:"SCLB"},lancaster:{county:"Los Angeles County",state:"CA",zip:"93534",prefix:"LNCB"},palmdale:{county:"Los Angeles County",state:"CA",zip:"93550",prefix:"PLMB"},"el segundo":{county:"Los Angeles County",state:"CA",zip:"90245",prefix:"ELGB"},"manhattan beach":{county:"Los Angeles County",state:"CA",zip:"90266",prefix:"MNHB"},"hermosa beach":{county:"Los Angeles County",state:"CA",zip:"90254",prefix:"HRMB"},"redondo beach":{county:"Los Angeles County",state:"CA",zip:"90277",prefix:"RDBB"},anaheim:{county:"Orange County",state:"CA",zip:"92801",prefix:"ANHB"},irvine:{county:"Orange County",state:"CA",zip:"92602",prefix:"IRVB"},"santa ana":{county:"Orange County",state:"CA",zip:"92701",prefix:"SNAB"},"huntington beach":{county:"Orange County",state:"CA",zip:"92647",prefix:"HNBB"},"garden grove":{county:"Orange County",state:"CA",zip:"92840",prefix:"GDGB"},fullerton:{county:"Orange County",state:"CA",zip:"92831",prefix:"FLTB"},orange:{county:"Orange County",state:"CA",zip:"92856",prefix:"ORGB"},"newport beach":{county:"Orange County",state:"CA",zip:"92660",prefix:"NPBB"},"costa mesa":{county:"Orange County",state:"CA",zip:"92626",prefix:"CSMB"},"mission viejo":{county:"Orange County",state:"CA",zip:"92691",prefix:"MVJB"},"lake forest":{county:"Orange County",state:"CA",zip:"92630",prefix:"LFSTB"},"yorba linda":{county:"Orange County",state:"CA",zip:"92886",prefix:"YRLB"},tustin:{county:"Orange County",state:"CA",zip:"92780",prefix:"TSTB"},"laguna niguel":{county:"Orange County",state:"CA",zip:"92677",prefix:"LGNB"},"aliso viejo":{county:"Orange County",state:"CA",zip:"92656",prefix:"ALVB"},"rancho santa margarita":{county:"Orange County",state:"CA",zip:"92688",prefix:"RSMB"},"laguna hills":{county:"Orange County",state:"CA",zip:"92653",prefix:"LGHB"},brea:{county:"Orange County",state:"CA",zip:"92821",prefix:"BREB"},"buena park":{county:"Orange County",state:"CA",zip:"90620",prefix:"BNPB"},placentia:{county:"Orange County",state:"CA",zip:"92870",prefix:"PLCB"},"san diego":{county:"San Diego County",state:"CA",zip:"92101",prefix:"SDBP"},"chula vista":{county:"San Diego County",state:"CA",zip:"91910",prefix:"CVBP"},oceanside:{county:"San Diego County",state:"CA",zip:"92054",prefix:"OCNB"},escondido:{county:"San Diego County",state:"CA",zip:"92025",prefix:"ESBB"},"el cajon":{county:"San Diego County",state:"CA",zip:"92020",prefix:"ELCB"},carlsbad:{county:"San Diego County",state:"CA",zip:"92008",prefix:"CLSB"},vista:{county:"San Diego County",state:"CA",zip:"92083",prefix:"VSTB"},"san marcos":{county:"San Diego County",state:"CA",zip:"92069",prefix:"SNMB"},encinitas:{county:"San Diego County",state:"CA",zip:"92024",prefix:"ENCB"},"national city":{county:"San Diego County",state:"CA",zip:"91950",prefix:"NCIB"},poway:{county:"San Diego County",state:"CA",zip:"92064",prefix:"POWB"},santee:{county:"San Diego County",state:"CA",zip:"92071",prefix:"SNTB"},"la mesa":{county:"San Diego County",state:"CA",zip:"91941",prefix:"LMSB"},"lemon grove":{county:"San Diego County",state:"CA",zip:"91945",prefix:"LGRB"},coronado:{county:"San Diego County",state:"CA",zip:"92118",prefix:"CRNB"},"solana beach":{county:"San Diego County",state:"CA",zip:"92075",prefix:"SLBB"},"del mar":{county:"San Diego County",state:"CA",zip:"92014",prefix:"DLMB"},sacramento:{county:"Sacramento County",state:"CA",zip:"95814",prefix:"SACB"},"elk grove":{county:"Sacramento County",state:"CA",zip:"95757",prefix:"EGVB"},folsom:{county:"Sacramento County",state:"CA",zip:"95630",prefix:"FLSB"},"rancho cordova":{county:"Sacramento County",state:"CA",zip:"95670",prefix:"RCDB"},"citrus heights":{county:"Sacramento County",state:"CA",zip:"95610",prefix:"CTHB"},galt:{county:"Sacramento County",state:"CA",zip:"95632",prefix:"GLTB"},fresno:{county:"Fresno County",state:"CA",zip:"93701",prefix:"FRSB"},clovis:{county:"Fresno County",state:"CA",zip:"93612",prefix:"CLVB"},sanger:{county:"Fresno County",state:"CA",zip:"93657",prefix:"SNGB"},riverside:{county:"Riverside County",state:"CA",zip:"92501",prefix:"RVSB"},"moreno valley":{county:"Riverside County",state:"CA",zip:"92553",prefix:"MVLB"},corona:{county:"Riverside County",state:"CA",zip:"92879",prefix:"CRNB"},temecula:{county:"Riverside County",state:"CA",zip:"92590",prefix:"TMCB"},"palm springs":{county:"Riverside County",state:"CA",zip:"92262",prefix:"PSPB"},"cathedral city":{county:"Riverside County",state:"CA",zip:"92234",prefix:"CTCB"},"palm desert":{county:"Riverside County",state:"CA",zip:"92260",prefix:"PLDB"},indio:{county:"Riverside County",state:"CA",zip:"92201",prefix:"INDB"},murrieta:{county:"Riverside County",state:"CA",zip:"92562",prefix:"MRRB"},"lake elsinore":{county:"Riverside County",state:"CA",zip:"92530",prefix:"LEBP"},"san bernardino":{county:"San Bernardino County",state:"CA",zip:"92401",prefix:"SNBB"},fontana:{county:"San Bernardino County",state:"CA",zip:"92335",prefix:"FNTB"},"rancho cucamonga":{county:"San Bernardino County",state:"CA",zip:"91730",prefix:"RCBP"},ontario:{county:"San Bernardino County",state:"CA",zip:"91761",prefix:"ONTB"},victorville:{county:"San Bernardino County",state:"CA",zip:"92392",prefix:"VCVB"},rialto:{county:"San Bernardino County",state:"CA",zip:"92376",prefix:"RLTB"},colton:{county:"San Bernardino County",state:"CA",zip:"92324",prefix:"CLTB"},chino:{county:"San Bernardino County",state:"CA",zip:"91710",prefix:"CHNB"},upland:{county:"San Bernardino County",state:"CA",zip:"91784",prefix:"UPLB"},redlands:{county:"San Bernardino County",state:"CA",zip:"92373",prefix:"RDLB"},highland:{county:"San Bernardino County",state:"CA",zip:"92346",prefix:"HLDB"},"chino hills":{county:"San Bernardino County",state:"CA",zip:"91709",prefix:"CHHB"},montclair:{county:"San Bernardino County",state:"CA",zip:"91763",prefix:"MTCB"},oxnard:{county:"Ventura County",state:"CA",zip:"93030",prefix:"OXNB"},ventura:{county:"Ventura County",state:"CA",zip:"93001",prefix:"VNTB"},"thousand oaks":{county:"Ventura County",state:"CA",zip:"91360",prefix:"TOKB"},"simi valley":{county:"Ventura County",state:"CA",zip:"93063",prefix:"SMVB"},camarillo:{county:"Ventura County",state:"CA",zip:"93010",prefix:"CMLB"},moorpark:{county:"Ventura County",state:"CA",zip:"93021",prefix:"MPKB"},"santa barbara":{county:"Santa Barbara County",state:"CA",zip:"93101",prefix:"SBRB"},phoenix:{county:"Maricopa County",state:"AZ",zip:"85001",prefix:"PHXB"},scottsdale:{county:"Maricopa County",state:"AZ",zip:"85251",prefix:"SCTB"},tempe:{county:"Maricopa County",state:"AZ",zip:"85281",prefix:"TMPB"},mesa:{county:"Maricopa County",state:"AZ",zip:"85201",prefix:"MESB"},chandler:{county:"Maricopa County",state:"AZ",zip:"85224",prefix:"CHNB"},tucson:{county:"Pima County",state:"AZ",zip:"85701",prefix:"TCSB"},"las vegas":{county:"Clark County",state:"NV",zip:"89101",prefix:"LVBP"},henderson:{county:"Clark County",state:"NV",zip:"89002",prefix:"HNDB"},reno:{county:"Washoe County",state:"NV",zip:"89501",prefix:"RNOB"},seattle:{county:"King County",state:"WA",zip:"98101",prefix:"SETB"},bellevue:{county:"King County",state:"WA",zip:"98004",prefix:"BLVB"},tacoma:{county:"Pierce County",state:"WA",zip:"98401",prefix:"TACB"},portland:{county:"Multnomah County",state:"OR",zip:"97201",prefix:"PRTB"},beaverton:{county:"Washington County",state:"OR",zip:"97005",prefix:"BVTB"},houston:{county:"Harris County",state:"TX",zip:"77001",prefix:"HSTB"},austin:{county:"Travis County",state:"TX",zip:"78701",prefix:"AUSBP"},dallas:{county:"Dallas County",state:"TX",zip:"75201",prefix:"DLSB"},"san antonio":{county:"Bexar County",state:"TX",zip:"78201",prefix:"SATB"},miami:{county:"Miami-Dade County",state:"FL",zip:"33101",prefix:"MIAB"},orlando:{county:"Orange County",state:"FL",zip:"32801",prefix:"ORLB"},tampa:{county:"Hillsborough County",state:"FL",zip:"33601",prefix:"TMPB"},"new york":{county:"New York County",state:"NY",zip:"10001",prefix:"NYCB"},brooklyn:{county:"Kings County",state:"NY",zip:"11201",prefix:"BRKB"},bronx:{county:"Bronx County",state:"NY",zip:"10451",prefix:"BRNB"},queens:{county:"Queens County",state:"NY",zip:"11354",prefix:"QNSB"},"staten island":{county:"Richmond County",state:"NY",zip:"10301",prefix:"STIB"}},jt={},F=e=>"$"+Number(e||0).toLocaleString(),J=e=>{if(!e)return"—";try{return new Date(e+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return e}},Ko=e=>{if(!e)return"—";const[t,n]=e.split(":").map(Number);return`${t%12||12}:${String(n).padStart(2,"0")} ${t>=12?"PM":"AM"}`},je=()=>"x"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),Ce="Livio Building Systems",ee="121 Main St #563, Los Altos, California (CA) 94022",fe=e=>(e==null?void 0:e.address)||(e==null?void 0:e.clientAddr)||"—",el=()=>`${Ce}
${ee}`;function Po(e){const t=String(e||"").trim().toLowerCase();if(!t)return"";try{const i=(typeof At=="function"?At():[]).find(r=>{const s=String((r==null?void 0:r.company)||"").trim().toLowerCase(),c=String((r==null?void 0:r.name)||"").trim().toLowerCase();return!!(r!=null&&r.email)&&(s===t||c===t)});if(i!=null&&i.email)return String(i.email).trim()}catch{}const n=Array.isArray(q==null?void 0:q.projects)?q.projects:[];for(const o of n)for(const i of(o==null?void 0:o.vendors)||[])if(String((i==null?void 0:i.vendor)||"").trim().toLowerCase()===t&&(i!=null&&i.vendorEmail))return String(i.vendorEmail).trim();return""}const Ct=(e=new Date)=>{const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${o}`},tl=e=>e<1024?e+"B":e<1048576?(e/1024).toFixed(1)+"KB":(e/1048576).toFixed(1)+"MB",rt=e=>({pdf:"📄",dwg:"📐",dxf:"📐",png:"🖼",jpg:"🖼",jpeg:"🖼",xlsx:"📊",xls:"📊",docx:"📝",doc:"📝",zip:"🗜",rvt:"🏗",ifc:"🏗"})[e.split(".").pop().toLowerCase()]||"📎",h=e=>document.getElementById(e),M=e=>{const t=h(e);return t?t.value.trim():""},P=(e,t=2600)=>{const n=h("toast");n.textContent=e,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),t)};function cn(e){const n={active:{cls:"b-blue",lbl:"Active"},inprogress:{cls:"b-amber",lbl:"In Progress"},starting:{cls:"b-teal",lbl:"Starting"},hold:{cls:"b-gray",lbl:"On Hold"},caloshahold:{cls:"b-red",lbl:"CalOSHA Hold"},complete:{cls:"b-green",lbl:"Complete"},done:{cls:"b-green",lbl:"Done"},upcoming:{cls:"b-gray",lbl:"Upcoming"},approved:{cls:"b-green",lbl:"Approved"},review:{cls:"b-blue",lbl:"Under Review"},new:{cls:"b-teal",lbl:"New"},negotiating:{cls:"b-amber",lbl:"Negotiating"}}[e]||{cls:"b-gray",lbl:e};return`<span class="badge ${n.cls}">${n.lbl}</span>`}function Zi(e,t){return e==="complete"||e==="done"?"var(--green-m)":e==="caloshahold"?"var(--red-m)":e==="starting"?"var(--teal-m)":t>=70?"var(--blue-m)":"var(--amber-m)"}const cu={id:"proj_madera",name:"1510 Madera Drive",street:"1510 Madera Drive",city:"Cupertino",county:"Santa Clara County",state:"CA",zip:"95014",address:"1510 Madera Drive, Cupertino, CA 95014",permit:"CUPR-2025-00891",apn:"326-10-044",type:"R-3 Single-Family Residential",color:"#1A6BC4",createdAt:"2025-11-01",works:[{id:"w1",name:"Shoring & Excavation",ref:"CBC §1804",contractor:"GeoDigit Inc.",status:"caloshahold",pct:40,notes:"Zone B · Soils report on file per CBC 1803.6"},{id:"w2",name:"Concrete Foundation Walls",ref:"CBC §1901",contractor:"ConcretePro LLC",status:"active",pct:78,notes:"ACI 318-19 mix design · Seismic Zone D"},{id:"w3",name:"Structural Steel Erection",ref:"CBC §2205",contractor:"Apex Steel",status:"active",pct:61,notes:"AISC 341 seismic provisions · SMRF system"},{id:"w4",name:"Rough Framing — Level 3",ref:"CBC §2308",contractor:"Bay Builders",status:"inprogress",pct:55,notes:"Hold-down connectors per SDPWS 2021"},{id:"w5",name:"MEP Rough-In Levels 1–2",ref:"CPC · CMC · CEC",contractor:"Voltline MEP",status:"inprogress",pct:44,notes:"CALGreen 4.303.1 fixture requirements"},{id:"w6",name:"Exterior Waterproofing",ref:"CBC §1805",contractor:"Shreeji Waterproofing",status:"complete",pct:100,notes:"Below-grade dampproofing · Basement walls"},{id:"w7",name:"Fire Sprinkler Rough-In",ref:"CBC §903/NFPA 13",contractor:"CalFire Suppression",status:"starting",pct:12,notes:"High-rise provisions · CFC §903.3.1.1"}],milestones:[{id:"m1",name:"Grading Permit Issued",ref:"CBC Ch.18",date:"2025-11-08",status:"done",notes:"Cupertino Building Division",payAmt:5e3,payPaid:!0,payDate:"2025-11-10",payFiles:[],progressPayments:[]},{id:"m2",name:"Geotechnical Report Approved",ref:"CBC §1803",date:"2025-12-02",status:"done",notes:"Soils EOR sign-off",payAmt:8500,payPaid:!0,payDate:"2025-12-05",payFiles:[],progressPayments:[]},{id:"m3",name:"Building Permit Issued",ref:"CBC §105",date:"2025-12-15",status:"done",notes:"Cupertino Permit #00891",payAmt:12e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m4",name:"Footing Inspection Passed",ref:"CBC §110.3.1",date:"2026-01-18",status:"done",notes:"Cupertino Inspector #C-221",payAmt:45e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m5",name:"Concrete Framing Level 2",ref:"CBC §110.3.2",date:"2026-04-10",status:"inprogress",notes:"EOR inspection required",payAmt:85e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m6",name:"Title 24 Energy CF1R",ref:"T-24 Part 6",date:"2026-04-20",status:"inprogress",notes:"HERS rater required",payAmt:3500,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m7",name:"Frame Inspection",ref:"CBC §110.3.4",date:"2026-06-15",status:"upcoming",notes:"All trades rough-in complete",payAmt:12e4,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]},{id:"m8",name:"Certificate of Occupancy",ref:"CBC §111",date:"2027-02-01",status:"upcoming",notes:"Final Cupertino sign-off",payAmt:25e3,payPaid:!1,payDate:"",payFiles:[],progressPayments:[]}],quotes:[{id:"q1",vendor:"Pacific Coast HVAC Inc.",scope:"Central mechanical — all floors",ref:"CMC 2022 · T-24 Part 6",csi:"Div 23",amount:484e3,date:"2026-03-10",status:"review",files:[],payMilestones:[]},{id:"q2",vendor:"CalFire Suppression Systems",scope:"High-rise sprinkler — NFPA 13",ref:"CFC §903 · CBC §903.3.1.1",csi:"Div 21",amount:212500,date:"2026-03-08",status:"approved",files:[],payMilestones:[{id:"pm1",name:"Mobilization (20%)",amount:42500,dueDate:"2026-03-20",paid:!0,paidDate:"2026-03-22",files:[],lienFiles:[]},{id:"pm2",name:"Progress Payment (50%)",amount:106250,dueDate:"2026-05-01",paid:!1,paidDate:"",files:[],lienFiles:[]},{id:"pm3",name:"Final Payment (30%)",amount:63750,dueDate:"2026-07-01",paid:!1,paidDate:"",files:[],lienFiles:[]}]},{id:"q3",vendor:"SunPath Solar + Electrical",scope:"PV system + EV charging rough-in",ref:"CALGreen §4.106.4 · CEC 2022",csi:"Div 26/48",amount:318e3,date:"2026-03-14",status:"negotiating",files:[],payMilestones:[]},{id:"q4",vendor:"BayArea Glass & Facade",scope:"Curtainwall + glazing system",ref:"CBC §2404 · T-24 fenestration",csi:"Div 08",amount:92e4,date:"2026-03-12",status:"review",files:[],payMilestones:[]},{id:"q5",vendor:"LA Seismic Retrofit Group",scope:"SMRF connection inspection & testing",ref:"CBC §1705.12 · AISC 341",csi:"Div 05",amount:98400,date:"2026-03-15",status:"new",files:[],payMilestones:[]}],plans:[],invoices:[],vendors:[],checklist:[{id:"chk01",name:"Verify copper Type L piping for all water supply lines",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"All piping to be non-combustible metallic material per CPC §609",status:"open"},{id:"chk02",name:"Confirm min 15 PSI at each fixture",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per water supply notes, water supply shall be no less than 15 PSI",status:"open"},{id:"chk03",name:"Backflow prevention device installed upstream of all fixtures",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Required per water supply note 7",status:"open"},{id:"chk04",name:"Vacuum breakers provided at all hose bibbs",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Permanent vacuum breakers at hose bibbs per water supply note 9",status:"open"},{id:"chk05",name:"Water heater (AO Smith HPTU-66N) anchored/strapped in garage",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"66 gal, 4.5 kW, 208V — strap to resist seismic displacement per CPC §508.2",status:"open"},{id:"chk06",name:"Expansion tank installed per CPC §608.3",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Or other approved pressure relief method",status:"open"},{id:"chk07",name:"All hot water piping insulated per CPC §609.11.2",category:"Water Supply",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:'Insulation wall thickness ≥ pipe diameter for pipes up to 2"; ≥ 2" for larger',status:"open"},{id:"chk08",name:"Mixing valves installed on all showers and tub-shower combos",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §408.3",status:"open"},{id:"chk09",name:"Potable water system disinfected prior to use",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §609.9 — document disinfection method and results",status:"open"},{id:"chk10",name:"Fixture flow rates verified: lavatory ≤1.2 GPM, kitchen ≤1.8 GPM, shower ≤2.0 GPM, WC ≤1.28 GPF",category:"Water Supply",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per CALGreen and CPC §402.0",status:"open"},{id:"chk11",name:"All sanitary drain and vent piping — Schedule 40 ABS installed",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per DWV note 12 — CPC §701.0 and §903.0",status:"open"},{id:"chk12",name:'Vent pipes extend through roof min 6" above roof deck',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:'Vent pipe through roof flashing, terminate vertically ≥6" above roof per DWV note 4',status:"open"},{id:"chk13",name:'4" main drain pipe connected to drainage system',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per DWV note 2 — comply with Table 7-5 of 2022 CPC",status:"open"},{id:"chk14",name:"Horizontal drain slope min 1/4 inch per foot (2% slope)",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"Per CPC §708.0",status:"open"},{id:"chk15",name:"Floors sloped to all floor drains",category:"Drain Waste Vent",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §411.4",status:"open"},{id:"chk16",name:"Backwater valve installed on basement/floor-level fixtures",category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per CPC §710.1 — see sanitary drainage table for manhole elevations",status:"open"},{id:"chk17",name:'Roof drain risers installed: 4" RD and 4" ORD at all drain locations',category:"Drain Waste Vent",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Sheet P3.2 — multiple 699SF, 509SF, 388SF, 222SF, 215SF drainage areas",status:"open"},{id:"chk18",name:'3/4" gas piping installed — total developed length 69 ft verified',category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Sheet P4.0 — 22 ft + 44 ft + 15-3 ft segments, new gas meter location",status:"open"},{id:"chk19",name:"Gas piping pressure test performed and documented",category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Plumbing Inspector",notes:"All gas connections tested before cover-up",status:"open"},{id:"chk20",name:"Gas meter (N) installed at approved location",category:"Fuel Gas",priority:"high",dueDate:"",assignee:"Utility / Plumbing",notes:"New gas meter per P4.0 plan",status:"open"},{id:"chk21",name:"Contractor verified all equipment model numbers, capacities and voltages with manufacturer",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general note 1 — coordinate with all applicable trades",status:"open"},{id:"chk22",name:"No structural members cut/drilled/notched without written EOR approval",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Project Manager",notes:"Per general note 7 — written authorization from Structural Engineer of Record required",status:"open"},{id:"chk23",name:"All utility invert elevations coordinated prior to installation",category:"Pre-Construction",priority:"high",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general note 8 — verify locations, sizes, point of connections",status:"open"},{id:"chk24",name:"All plumbing materials listed/certified by approved listing agency",category:"Pre-Construction",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general plumbing note 5 — 2022 CPC referenced standards",status:"open"},{id:"chk25",name:"Compliance certificates provided with equipment submittals (Title 24 / CALGreen)",category:"Pre-Construction",priority:"medium",dueDate:"",assignee:"Plumbing Contractor",notes:"Per general plumbing note 4 — EES §110.3",status:"open"}],qaqcLog:[{id:"qa01",refNo:"QA-PLUMB-001",type:"observation",description:"Verify pipe sizing matches fixture schedule — total 47.0 CW FU, 31.8 HW FU, 33 DFU as shown on Sheet P1.0",location:"Throughout building",raisedBy:"Engineer of Record",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa02",refNo:"QA-PLUMB-002",type:"observation",description:"Water heater flue/condensate: AO Smith HPTU-66N in garage requires condensate drain — verify drain availability or condensate pump provided",location:"Garage",raisedBy:"Engineer",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa03",refNo:"QA-PLUMB-003",type:"observation",description:"Roof drain shop drawings must be coordinated with Structural Engineer before installation — water/sewer/storm lines must not run along grade beams",location:"Roof / Foundation",raisedBy:"Engineer of Record",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"Per P3.2 note 1",files:[]},{id:"qa04",refNo:"QA-PLUMB-004",type:"observation",description:"CPVC piping not permitted above grade — verify all above-grade piping is copper Type L as specified",location:"All floors",raisedBy:"Inspector",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]},{id:"qa05",refNo:"QA-PLUMB-005",type:"punch",description:"Lead content compliance required for all pipes/fittings conveying potable water — submit documentation per Health & Safety Code §116875",location:"Entire plumbing system",raisedBy:"Building Dept",assignedTo:"Plumbing Contractor",date:"2026-03-25",dueDate:"",status:"open",correctiveAction:"",files:[]}],inspections:[{id:"i1",name:"Concrete Pour — Level 2 Slab",inspDate:"2026-03-25",inspTime:"09:00",location:"1510 Madera Dr · Level 2",refs:"CBC §110.3.2 · §1905",ahj:"cupertino",notes:"EOR required on site",files:[]},{id:"i2",name:"Rough Electrical (CEC) Inspection",inspDate:"2026-04-02",inspTime:"10:30",location:"All Floors · Cupertino Electrical Insp.",refs:"CEC 2022",ahj:"cupertino",notes:"",files:[]},{id:"i3",name:"Rough Plumbing + Mechanical",inspDate:"2026-04-08",inspTime:"11:00",location:"Zone 2–3 · Cupertino Plumbing Insp.",refs:"CPC 2022 · CMC 2022",ahj:"cupertino",notes:"",files:[]},{id:"i4",name:"CalOSHA Fall Protection Audit",inspDate:"2026-04-22",inspTime:"08:00",location:"Cal/OSHA District Office · Floors 3–6",refs:"CalOSHA §1735",ahj:"calosha",notes:"Mandatory",files:[]},{id:"i5",name:"Special Inspection — Welding",inspDate:"2026-05-10",inspTime:"09:00",location:"SMRF Joints · CBC §1705.12",refs:"CBC §1705.12 · AISC 341",ahj:"icc",notes:"ICC-Certified inspector required",files:[]}]};function Iv(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(du);if(e){const t=JSON.parse(e);if(t&&typeof t=="object")return t}}}catch(e){console.warn("Local DB load failed:",(e==null?void 0:e.message)||e)}return{projects:[JSON.parse(JSON.stringify(cu))],activeId:"proj_madera",activeProjectId:"proj_madera"}}function te(){try{q.activeProjectId=q.activeId??q.activeProjectId??null}catch(e){const t=e.name==="QuotaExceededError"||e.code===22?"⚠ Browser storage full — files are too large for local storage. Export your project to save data.":"⚠ Save failed: "+e.message;P(t,5e3),console.error("saveDB error:",e)}yn()}function yn(){(q.projects||[]).forEach(e=>{(e.plans||[]).forEach(t=>W([t])),(e.quotes||[]).forEach(t=>{W(t.files||[]),(t.payMilestones||[]).forEach(n=>{W(n.files||[]),W(n.invoiceFiles||[]),W(n.lienFiles||[])})}),(e.milestones||[]).forEach(t=>{W(t.payFiles||[]),(t.progressPayments||[]).forEach(n=>W(n.files||[]))}),(e.inspections||[]).forEach(t=>W(t.files||[])),(e.vendors||[]).forEach(t=>W(t.files||[])),(e.invoices||[]).forEach(t=>{W(t.files||[]),W(t.proofFiles||[]),W(t.lienFiles||[]),(t.partialPayments||[]).forEach(n=>W(n.files||[])),(t.payments||[]).forEach(n=>W(n.proofFiles||[]))}),(e.checklist||[]).forEach(t=>{W(t.files||[]),(t.comments||[]).forEach(n=>W(n.files||[]))}),(e.qaqcLog||[]).forEach(t=>W(t.files||[]))})}let q=Iv();yn();const B=()=>q.projects.find(e=>e.id===q.activeId)||q.projects[0]||null,zv=e=>{q.activeId=e,te()};function W(e){(e||[]).forEach(t=>{t&&t.id&&(t.data||t.path)&&(jt[t.id]=t)})}let pn="projects";const Lv={projects:"All Projects",dashboard:"Dashboard Overview",works:"Works at Site",milestones:"Project Milestones",quotes:"Quotes Received",plans:"Plans & Documents",inspections:"Inspections Scheduled",payments:"Payments",invoices:"Invoice Tracker",vendors:"Vendor Contracts",checklist:"Project Checklist",qaqc:"QA/QC Log",compliance:"Compliance Tracker",export:"Export & Download",momentum:"Momentum","daily-tracker":"Daily Tracker","client-contract":"Client Contract","client-invoice":"Client Invoice","vendor-directory":"Vendor Directory"},Bv=["dashboard","works","milestones","quotes","plans","inspections","payments","invoices","vendors","checklist","qaqc","compliance","export"];function yr(){const e=It(),t=ox(e);document.querySelectorAll(".sb-nav li[data-page]").forEach(n=>{const o=n.dataset.page;n.style.display=t.includes(o)||o==="projects"?"":"none"})}function no(e){var r,s;if(!ix(e)){P("⚠ You do not have access to this page"),e="projects";return}Bv.includes(e)&&!B()&&(P("⚠ Select or create a project first"),e="projects"),document.querySelectorAll(".page").forEach(c=>c.classList.remove("on")),(r=h("pg-"+e))==null||r.classList.add("on"),document.querySelectorAll(".sb-nav a").forEach(c=>c.classList.remove("on")),(s=h("n-"+e))==null||s.classList.add("on"),h("page-title").textContent=Lv[e]||e;const t={projects:"+ New Project",works:"+ Add Work",milestones:"+ Add Milestone",quotes:"+ Add Quote",plans:"+ Upload Doc",inspections:"+ Add Inspection",payments:"",invoices:"",vendors:"",checklist:"",qaqc:"",compliance:"",export:"",momentum:"","daily-tracker":"","client-contract":"","client-invoice":"","vendor-directory":""},n={projects:"project",works:"work",milestones:"milestone",quotes:"quote",plans:"plan",inspections:"inspection"},o=h("add-btn");if(t[e]?(o.style.display="",o.textContent=t[e],o.onclick=()=>wr(n[e])):o.style.display="none",h("bal-strip").classList.toggle("show",e==="payments"),e==="client-contract"){const c=h("client-contract-frame");if(c&&c.contentWindow)try{c.contentWindow.syncActiveProject&&c.contentWindow.syncActiveProject()}catch{}}if(e==="client-invoice"){const c=h("client-invoice-frame");if(c&&c.contentWindow)try{c.contentWindow.syncActiveProject&&c.contentWindow.syncActiveProject()}catch{}}e==="vendor-directory"&&io(),e==="settings"&&ku(),pn=e,oe()}function Tv(){no(pn)}function oe(){yr();const e=fu();It(),setTimeout(()=>{document.querySelectorAll(".btn-navy,.btn-green,.btn-red,.btn-blue,.btn-ghost").forEach(n=>{if(n.closest("#mo"))return;const o=pn;e||o&&rs(o)?n.setAttribute("data-viewer-disabled","1"):n.removeAttribute("data-viewer-disabled")});const t=document.getElementById("view-only-banner");if(t&&t.remove(),pn&&rs(pn)){const n=document.createElement("div");n.id="view-only-banner",n.style.cssText="position:fixed;bottom:16px;right:16px;background:#A86200;color:#fff;padding:8px 14px;border-radius:7px;font-size:11px;font-weight:700;z-index:500;box-shadow:0 4px 16px rgba(0,0,0,.3)",n.textContent="👁 View Only — editing disabled on this page",document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}},50),pu(),nl(),ol(),il(),rl(),al(),sl(),ll(),br(),fl(),gl(),hl(),yl(),dl(),cl(),io()}function pu(){const e=B();h("ct-projects").textContent=q.projects.length,h("sb-proj").textContent=e?e.name:"No project",h("sb-foot").innerHTML=e?`${e.city||""}${e.county?" · "+e.county:""}<br>Permit: ${e.permit||"—"}<br>APN: ${e.apn||"—"}`:"No project selected",e&&(h("ct-works").textContent=(e.works||[]).length,h("ct-ms").textContent=(e.milestones||[]).length,h("ct-q").textContent=(e.quotes||[]).length,h("ct-plans").textContent=(e.plans||[]).length,h("ct-ins").textContent=(e.inspections||[]).length,h("ct-pay").textContent=(e.quotes||[]).filter(t=>t.status==="approved").length,h("ct-inv").textContent=(e.invoices||[]).length,h("ct-ven").textContent=(e.vendors||[]).length,h("ct-chk").textContent=(e.checklist||[]).length,h("ct-qaqc").textContent=(e.qaqcLog||[]).length)}function nl(){const e=h("proj-grid");let t=q.projects.map(n=>{const o=(n.works||[]).filter(c=>["active","inprogress","starting"].includes(c.status)).length,i=(n.milestones||[]).filter(c=>c.status==="done").length,r=(n.quotes||[]).reduce((c,l)=>c+Number(l.amount||0),0),s=n.id===q.activeId;return`<div class="proj-card" onclick="switchProj('${n.id}')" style="${s?"border:2px solid "+n.color:""}">
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
        <div class="text-center"><div class="ps-val" style="color:var(--amber)">${o}</div><div class="ps-lbl">Active</div></div>
        <div><div class="ps-val" style="color:var(--green)">${i}/${(n.milestones||[]).length}</div><div class="ps-lbl">Milestones</div></div>
        <div><div class="ps-val" style="color:var(--blue);font-size:14px">${F(r)}</div><div class="ps-lbl">Quoted</div></div>
        ${s?'<span class="badge b-blue">Active</span>':'<span class="badge b-gray" style="font-size:9px">Click to open</span>'}
      </div>
    </div>`}).join("");t+=`<div class="add-card" onclick="openModal('project')"><div style="font-size:28px;opacity:.35;margin-bottom:8px">➕</div><div style="font-size:13px;color:var(--muted);font-weight:500">Add New Project</div></div>`,e.innerHTML=t}function Mv(e){zv(e),no("dashboard")}function ol(){const e=B();if(!e)return;h("ceqa-sub").textContent=`${e.name} · ${e.address||""} · Public Review closed 14 Jan 2026`;const t=(e.works||[]).filter(s=>["active","inprogress","starting"].includes(s.status)).length,n=(e.milestones||[]).filter(s=>s.status==="done").length,o=(e.quotes||[]).reduce((s,c)=>s+Number(c.amount||0),0),i=(e.inspections||[]).sort((s,c)=>(s.inspDate||"")>(c.inspDate||"")?1:-1)[0];h("dash-metrics").innerHTML=`
    <div class="mc" style="--ac:var(--amber)"><div class="mc-lbl">Works Active</div><div class="mc-val">${t}</div><div class="mc-sub">${(e.works||[]).length} total</div></div>
    <div class="mc" style="--ac:var(--teal)"><div class="mc-lbl">Milestones</div><div class="mc-val">${n}/${(e.milestones||[]).length}</div><div class="mc-sub">${(e.milestones||[]).length?Math.round(n/(e.milestones||[]).length*100):0}% done</div></div>
    <div class="mc" style="--ac:var(--blue)"><div class="mc-lbl">Quotes</div><div class="mc-val">${F(o)}</div><div class="mc-sub">${(e.quotes||[]).length} quotes</div></div>
    <div class="mc" style="--ac:var(--red)"><div class="mc-lbl">Inspections</div><div class="mc-val">${(e.inspections||[]).length}</div><div class="mc-sub">Next: ${i&&i.inspDate?new Date(i.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}):"—"}</div></div>`;const r=s=>`<div style="padding:24px;text-align:center;color:var(--muted);font-size:12px">${s}</div>`;h("d-works").innerHTML=(e.works||[]).length?(e.works||[]).slice(0,5).map(s=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:10px">
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:10px;color:var(--muted)">${s.ref}</div></div>
      <div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${s.pct}%;background:${Zi(s.status,s.pct)}"></div></div><span class="prog-pct" style="color:${Zi(s.status,s.pct)}">${s.pct}%</span>${cn(s.status)}</div>
    </div>`).join(""):r("No works added yet"),h("d-ms").innerHTML=(e.milestones||[]).length?(e.milestones||[]).slice(0,5).map(s=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:9px">
      <div style="width:9px;height:9px;border-radius:50%;background:${s.status==="done"?"var(--green-m)":s.status==="inprogress"?"var(--amber-m)":"var(--border)"};flex-shrink:0"></div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:10px;color:var(--muted)">${J(s.date)}</div></div>
      ${cn(s.status)}
    </div>`).join(""):r("No milestones yet"),h("d-quotes").innerHTML=(e.quotes||[]).length?(e.quotes||[]).slice(0,4).map(s=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-size:13px;font-weight:600">${s.vendor}</div><div style="font-size:10px;color:var(--muted)">${s.scope}</div></div>
      <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${F(s.amount)}</div>${cn(s.status)}</div>
    </div>`).join(""):r("No quotes yet"),h("d-ins").innerHTML=(e.inspections||[]).length?(e.inspections||[]).slice(0,4).map(s=>{const c=s.inspDate?new Date(s.inspDate+"T12:00:00"):null,l=c?c.getDate():"—",d=c?c.toLocaleString("en-US",{month:"short"}).toUpperCase():"—";return`<div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:11px">
      <div class="datebox" style="background:var(--amber-l)"><div class="db-d" style="color:var(--amber)">${l}</div><div class="db-m" style="color:var(--amber)">${d}</div></div>
      <div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:10px;color:var(--muted)">${Ko(s.inspTime)} · ${s.location||""}</div></div>
    </div>`}).join(""):r("No inspections yet")}function il(){const e=B();if(!e)return;h("wc").textContent=(e.works||[]).length;const t=h("w-tbody");if(!(e.works||[]).length){t.innerHTML='<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏗</div>No works yet.</div></td></tr>';return}t.innerHTML=(e.works||[]).map(n=>`
    <tr>
      <td><div class="tn">${n.name}</div><div class="tm">${n.notes||""}</div></td>
      <td><span class="cbc">${n.ref}</span></td>
      <td>${n.contractor||"—"}</td>
      <td>${cn(n.status)}</td>
      <td><div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${n.pct}%;background:${Zi(n.status,n.pct)}"></div></div><span class="prog-pct" style="color:${Zi(n.status,n.pct)}">${n.pct}%</span></div></td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('work','${n.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('works','${n.id}')">Del</button></div></td>
    </tr>`).join("")}function Fv(e){const t=h("ms-ledger");if(!t)return;if(!e.length){t.innerHTML='<div class="empty" style="padding:24px"><div class="empty-ic">📒</div>No milestones yet.</div>';return}let n=0,o=0,i=0;const r=e.map((l,d)=>{const u=l.progressPayments||[],f=u.reduce((x,E)=>x+Number(E.amount||0),0),p=u.filter(x=>x.paid).reduce((x,E)=>x+Number(E.amount||0),0),g=f-p,w=l.payAmt||0;n+=w,o+=p,i+=f-p;const y=l.status==="done"?"var(--green-m)":l.status==="inprogress"?"var(--amber-m)":"var(--border)",b=d%2===0?"#fff":"var(--bg)",m=u.length?u.map(x=>`
      <tr style="background:${x.paid?"#F3FCF0":"#FFFDF7"}">
        <td style="padding:5px 14px 5px 36px;font-size:11px;color:var(--muted);border-bottom:1px solid #F5F2EA" colspan="2">
          <span style="margin-right:8px">${x.paid?"●":"○"}</span>${x.name}
          ${x.dueDate?`<span style="margin-left:8px;font-size:10px;color:var(--muted)">Due: ${J(x.dueDate)}</span>`:""}
        </td>
        <td style="padding:5px 14px;font-size:12px;font-weight:600;color:var(--text);border-bottom:1px solid #F5F2EA">${F(x.amount||0)}</td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${x.paid?`<span style="color:var(--green);font-weight:600">✓ ${F(x.amount||0)}</span><span style="font-size:10px;color:var(--muted);margin-left:5px">${J(x.receivedDate)}</span>`:'<span style="color:var(--muted)">—</span>'}
        </td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${x.paid?'<span style="color:var(--green)">$0</span>':`<span style="color:var(--red);font-weight:600">${F(x.amount||0)}</span>`}
        </td>
        <td style="padding:5px 14px;border-bottom:1px solid #F5F2EA"></td>
      </tr>`).join(""):"",v=u.length>0;return`<tr style="background:${b}">
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:9px;height:9px;border-radius:50%;background:${y};flex-shrink:0"></div>
          <div>
            <div style="font-size:13px;font-weight:600">${l.name}</div>
            <div style="font-size:10px;color:var(--muted)">${l.ref} · ${J(l.date)||"—"}</div>
          </div>
        </div>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">${cn(l.status)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${w?F(w):"—"}</span>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${F(p)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${g>0?"var(--red)":"var(--green)"}">${F(g)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${v?`<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${f?Math.min(100,Math.round(p/f*100)):0}%;background:${p>=f?"var(--green-m)":"var(--blue-m)"};border-radius:3px"></div></div><span style="font-size:10px;color:var(--muted)">${f?Math.min(100,Math.round(p/f*100)):0}%</span>`:'<span style="font-size:10px;color:var(--muted)">No payments scheduled</span>'}
      </td>
    </tr>${m}`}).join(""),s=n?Math.min(100,Math.round(o/n*100)):0,c=`<tr style="background:var(--navy)">
    <td style="padding:11px 14px" colspan="2"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">${F(n)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">${F(o)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${i>0?"#F09595":"#9FE1CB"}">${F(i)}</span></td>
    <td style="padding:11px 14px">
      <div style="height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${s}%;background:${s===100?"#9FE1CB":"#85B7EB"};border-radius:3px;transition:.5s"></div></div>
      <span style="font-size:10px;color:#8AAAC8">${s}% received</span>
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
    <tbody>${r}${c}</tbody>
  </table></div>`}function rl(){const e=B();if(!e)return;const t=e.milestones||[];h("msc").textContent=t.length,h("ms-done").textContent=t.filter(s=>s.status==="done").length,h("ms-prog").textContent=t.filter(s=>s.status==="inprogress").length,h("ms-up").textContent=t.filter(s=>s.status==="upcoming").length;const n=t.reduce((s,c)=>s+Number(c.payAmt||0),0),o=t.reduce((s,c)=>s+(c.progressPayments||[]).filter(l=>l.paid).reduce((l,d)=>l+Number(d.amount||0),0),0),i=t.reduce((s,c)=>s+(c.progressPayments||[]).reduce((l,d)=>l+Number(d.amount||0),0),0);h("ms-total").textContent=F(n),h("ms-paid").textContent=F(o),h("ms-bal").textContent=F(i-o);const r=h("ms-tbody");if(!t.length){r.innerHTML='<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏆</div>No milestones yet.</div></td></tr>';return}Fv(t),t.forEach(s=>{W(s.payFiles||[]),(s.progressPayments||[]).forEach(c=>W(c.files||[]))}),r.innerHTML=t.map(s=>{const c=s.status==="done"?"var(--green-m)":s.status==="inprogress"?"var(--amber-m)":"var(--border)",l=s.progressPayments||[],d=l.filter(g=>g.paid).reduce((g,w)=>g+Number(w.amount||0),0),u=l.reduce((g,w)=>g+Number(w.amount||0),0);l.forEach(g=>W(g.files||[]));const f=s.payAmt?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">${F(s.payAmt)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>',p=l.length?`<div style="display:flex;flex-direction:column;gap:4px">
          ${l.map(g=>`
          <div style="background:${g.paid?"var(--green-l)":"var(--bg)"};border:1px solid ${g.paid?"#B8DCA0":"var(--border)"};border-radius:6px;padding:5px 8px">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text)">${g.name} — ${F(g.amount||0)}</div>
                ${g.paid?`<div style="font-size:10px;color:var(--green);margin-top:1px">✓ Received ${g.receivedDate?"· "+J(g.receivedDate):""}</div>`:`<div style="font-size:10px;color:var(--muted);margin-top:1px">Due: ${J(g.dueDate)||"—"}</div>`}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                ${(g.files||[]).length?`<div style="display:flex;flex-direction:column;gap:2px">
                      ${(g.files||[]).map(w=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 6px;max-width:150px">
                        <span style="font-size:10px">${rt(w.name)}</span>
                        <span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${w.name}</span>
                        <button class="a-dl" onclick="dlFile('${w.id}')" style="font-size:9px;padding:1px 5px">⬇</button>
                      </div>`).join("")}
                      <button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${s.id}|${g.id}')" style="font-size:9px;padding:2px 6px">+ Add</button>
                    </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${s.id}|${g.id}')" style="font-size:9px;padding:2px 6px">📎 Attach Proof</button>`}
                ${g.paid?`<button class="btn btn-ghost btn-xs" onclick="unmarkPP('${s.id}','${g.id}')" title="Undo">↩</button>`:`<button class="btn btn-green btn-xs" onclick="openMarkPP('${s.id}','${g.id}')">Mark Received</button>`}
              </div>
            </div>
          </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 2px;border-top:1px solid var(--border);margin-top:1px">
            <span style="color:var(--muted)">Received: <strong style="color:var(--green)">${F(d)}</strong></span>
            <span style="color:var(--muted)">Balance: <strong style="color:${u-d>0?"var(--red)":"var(--green)"}">${F(u-d)}</strong></span>
          </div>
          <button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${s.id}')">+ Add Payment</button>
        </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${s.id}')">+ Add Progress Payment</button>`;return`<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:9px;height:9px;border-radius:50%;background:${c};flex-shrink:0"></div><div><div class="tn">${s.name}</div><div class="tm">${s.notes||""}</div></div></div></td>
      <td><span class="cbc">${s.ref}</span></td>
      <td>${J(s.date)}</td>
      <td>${cn(s.status)}</td>
      <td>${f}</td>
      <td style="min-width:240px">${p}</td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('milestone','${s.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('milestones','${s.id}')">Del</button></div></td>
    </tr>`}).join("")}function al(){const e=B();if(!e)return;const t=e.quotes||[];h("qc").textContent=t.length,h("q-total").textContent=F(t.reduce((o,i)=>o+Number(i.amount||0),0)),h("q-approved").textContent=F(t.filter(o=>o.status==="approved").reduce((o,i)=>o+Number(i.amount||0),0));const n=h("q-tbody");if(!t.length){n.innerHTML='<tr><td colspan="8"><div class="empty"><div class="empty-ic">💰</div>No quotes yet.</div></td></tr>';return}t.forEach(o=>W(o.files||[])),n.innerHTML=t.map(o=>`
    <tr>
      <td><div class="tn">${o.vendor}</div><div class="tm">${o.scope}</div></td>
      <td style="font-size:11px;color:var(--purple)">${o.ref}</td>
      <td><span class="badge b-teal">${o.csi}</span></td>
      <td><span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${F(o.amount)}</span></td>
      <td>${J(o.date)}</td>
      <td>${cn(o.status)}</td>
      <td>
        ${(o.files||[]).length?`<div style="display:flex;flex-direction:column;gap:3px">
              ${(o.files||[]).map(i=>`<div style="display:flex;align-items:center;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:2px 7px;max-width:160px">
                <span style="font-size:11px">${rt(i.name)}</span>
                <span style="font-size:10px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${i.name}</span>
                <button class="a-dl" onclick="dlFile('${i.id}')" title="Download">⬇</button>
              </div>`).join("")}
              <button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${o.id}')" style="margin-top:1px">+ Add / Edit</button>
            </div>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${o.id}')">📎 Attach</button>`}
      </td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('quote','${o.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('quotes','${o.id}')">Del</button></div></td>
    </tr>`).join("")}function sl(){const e=B();if(!e)return;const t=e.plans||[];h("plc").textContent=t.length;const n=h("plans-wrap");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">📐</div>No documents uploaded yet.</div>';return}t.forEach(o=>W([o])),n.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">${t.map(o=>`
    <div style="background:#fff;border:1px solid var(--border);border-radius:9px;overflow:hidden;box-shadow:var(--sh)">
      <div style="padding:16px;text-align:center;border-bottom:1px solid var(--border)">
        <div style="font-size:32px;margin-bottom:6px">${rt(o.name)}</div>
        <div style="font-size:12px;font-weight:600;word-break:break-all">${o.name}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${o.type||"Document"}</div>
      </div>
      <div style="padding:9px 12px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:10px;color:var(--muted)">${tl(o.size||0)}</span>
        <div style="display:flex;gap:5px">
          <button class="a-dl" onclick="dlFile('${o.id}')">⬇</button>
          <button class="a-rm" onclick="delPlan('${o.id}')">✕</button>
        </div>
      </div>
    </div>`).join("")}</div>`}function ll(){const e=B();if(!e)return;const t=e.inspections||[];h("ic").textContent=t.length;const n=h("ins-list");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🔍</div>No inspections scheduled yet.</div>';return}t.forEach(r=>W(r.files||[]));const o={cupertino:"b-blue",calosha:"b-red",icc:"b-teal"},i={cupertino:"Cupertino",calosha:"CalOSHA",icc:"ICC-Cert."};n.innerHTML=t.map(r=>{const s=r.inspDate?new Date(r.inspDate+"T12:00:00"):null,c=s?String(s.getDate()).padStart(2,"0"):"—",l=s?s.toLocaleString("en-US",{month:"short"}).toUpperCase():"—",d=Ko(r.inspTime),u=(r.files||[]).length?`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${r.id}')">📎 ${r.files.length} file${r.files.length>1?"s":""}</button>`:`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${r.id}')">📎 Attach Report</button>`;return`<div style="padding:13px 16px;border-bottom:1px solid #F0EDE6">
      <div style="display:flex;align-items:flex-start;gap:13px">
        <div class="datebox" style="background:var(--amber-l)">
          <div class="db-d" style="color:var(--amber)">${c}</div>
          <div class="db-m" style="color:var(--amber)">${l}</div>
          <div class="db-t">${d}</div>
        </div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;margin-bottom:4px">${r.name}</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:5px">
            <span style="font-size:11px;color:var(--muted)">📅 ${r.inspDate?new Date(r.inspDate+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",year:"numeric"}):"Not set"}</span>
            <span style="font-size:11px;color:var(--muted)">🕐 ${d}</span>
            ${r.location?`<span style="font-size:11px;color:var(--muted)">📍 ${r.location}</span>`:""}
          </div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:${(r.files||[]).length?"7px":"0"}">
            ${(r.refs||"").split("·").filter(f=>f.trim()).map(f=>`<span class="cbc">${f.trim()}</span>`).join("")}
            <span class="badge ${o[r.ahj]||"b-blue"}">${i[r.ahj]||r.ahj}</span>
            ${r.notes?`<span style="font-size:10px;color:var(--muted)">${r.notes}</span>`:""}
          </div>
          ${(r.files||[]).length?`<div style="display:flex;gap:5px;flex-wrap:wrap">${(r.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:5px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:3px 8px"><span style="font-size:13px">${rt(f.name)}</span><span style="font-size:11px;font-weight:500;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name}</span><button class="a-dl" onclick="dlFile('${f.id}')">⬇</button></div>`).join("")}</div>`:""}
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="openModal('inspection','${r.id}')">✏ Edit</button>
          ${u}
          <button class="btn btn-red btn-xs" onclick="delItem('inspections','${r.id}')">🗑 Del</button>
        </div>
      </div>
    </div>`}).join("")}function br(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(S=>(e.invoices||[]).some(D=>D.vcId===S.id&&D.approvalStatus==="approved")),n=(e.invoices||[]).filter(S=>S.isManual&&S.approvalStatus==="approved"),o=(e.invoices||[]).filter(S=>!S.isManual&&S.quoteId&&!S.vcId&&S.approvalStatus==="approved"),i={};n.forEach(S=>{const D=S.vendor||"Unknown";i[D]||(i[D]=[]),i[D].push(S)});const r=Object.entries(i).map(([S,D])=>({id:"__manual__"+S,vendor:S,amount:D.reduce((z,T)=>z+Number(T.amount||0),0),trade:"",contractNo:"",isManualGroup:!0,milestones:[],_manualInvs:D})),s={};o.forEach(S=>{const D=S.quoteId;s[D]||(s[D]=[]),s[D].push(S)});const c=Object.entries(s).map(([S,D])=>{var T;const z=(e.quotes||[]).find(Y=>Y.id===S);return{id:"__quote__"+S,sourceQuoteId:S,vendor:(z==null?void 0:z.vendor)||((T=D[0])==null?void 0:T.vendor)||"Unknown",amount:Number((z==null?void 0:z.amount)||D.reduce((Y,N)=>Y+Number(N.amount||0),0)),trade:(z==null?void 0:z.csi)||"",contractNo:"",scope:(z==null?void 0:z.scope)||"",isQuoteGroup:!0,milestones:[],_quoteInvs:D}});h("ct-pay").textContent=t.length+r.length+c.length;const l=h("pay-list"),d=h("pay-empty"),u=h("pay-ledger-panel"),f=h("pay-ledger"),p=[...t,...c,...r];if(ug(p,e),!p.length){l.innerHTML="",d.style.display="",u&&(u.style.display="none"),h("bs-c").textContent=F(0),h("bs-p").textContent=F(0),h("bs-b").textContent=F(0),h("bs-pct").textContent="0%",h("bs-bar").style.width="0%";return}d.style.display="none";let g=0,w=0;t.forEach(S=>{g+=Number(S.amount||0),(e.invoices||[]).filter(D=>D.vcId===S.id&&D.approvalStatus==="approved").forEach(D=>{D.paid?w+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>w+=Number(z.amount||0))})}),r.forEach(S=>{g+=S.amount,S._manualInvs.forEach(D=>{D.paid?w+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>w+=Number(z.amount||0))})}),c.forEach(S=>{g+=S.amount,S._quoteInvs.forEach(D=>{D.paid?w+=Number(D.amount||0):(D.partialPayments||[]).forEach(z=>w+=Number(z.amount||0))})});const y=g?Math.min(100,Math.round(w/g*100)):0;h("bs-c").textContent=F(g),h("bs-p").textContent=F(w),h("bs-b").textContent=F(g-w),h("bs-b").style.color=g-w>0?"#F09595":"#9FE1CB",h("bs-pct").textContent=y+"%",h("bs-bar").style.width=y+"%",h("bs-bar").style.background=y===100?"#9FE1CB":y>60?"#85B7EB":"#FAC775",u&&(u.style.display="",f&&(f.innerHTML=fg(p,g,w,e)));const b=h("pay-export-bar");b&&(b.style.display="none");const m=h("pay-smart-search-bar");m&&(m.style.display=""),t.forEach(S=>{(e.invoices||[]).filter(D=>D.vcId===S.id).forEach(D=>W(D.files||[]))}),c.forEach(S=>{S._quoteInvs.forEach(D=>W(D.files||[]))}),r.forEach(S=>{S._manualInvs.forEach(D=>W(D.files||[]))});function v(S,D,z,T){const Y=D.reduce((I,V)=>V.paid?I+Number(V.amount||0):I+(V.partialPayments||[]).reduce((H,X)=>H+Number(X.amount||0),0),0),N=Number(z||0)-Y,_=z?Math.min(100,Math.round(Y/Number(z)*100)):0;return{invRows:D.length?D.map((I,V)=>{var Sl;const H=V%2===0?"#fff":"var(--bg)",X=I.partialPayments||[],ie=X.reduce((xe,kn)=>xe+Number(kn.amount||0),0),Ne=Number(I.amount||0)-ie,Me=S&&((Sl=(S.milestones||[]).find(xe=>xe.id===I.milestoneId))==null?void 0:Sl.name)||"",zt=X.length?X.map(xe=>{const kn=xe.files||[];return`<div style="background:#FAFFFE;border:1px solid var(--border);border-radius:5px;padding:6px 8px;margin-bottom:5px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px"><span style="color:var(--green);font-weight:700;font-size:11px">✓ $${Number(xe.amount||0).toLocaleString()}</span><span style="color:var(--muted);font-size:9px">${J(xe.date)||""}</span>${I.paid?"":`<button onclick="removePartialPayment('${I.id}','${xe.id}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:12px;padding:0 2px" title="Remove">×</button>`}</div><div style="display:flex;align-items:center;gap:5px;margin-bottom:5px"><span style="font-size:9px;color:var(--muted);white-space:nowrap;flex-shrink:0">🔖 Txn #:</span><input type="text" value="${xe.txnNo||""}" placeholder="Transaction / Reference #" onchange="updatePartialTxn('${I.id}','${xe.id}',this.value)" style="flex:1;font-size:9px;border:1px solid var(--border);border-radius:3px;padding:2px 5px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${I.id}','Conditional Progress')">📧 Cond. Progress</button><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${I.id}','Conditional Final')">📧 Cond. Final</button></div>${kn.length?`<div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:4px">${kn.map(Er=>`<div style="display:flex;align-items:center;gap:2px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:3px;padding:2px 5px;max-width:120px"><span style="font-size:9px">${rt(Er.name)}</span><span style="font-size:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${Er.name}</span><button class="a-dl" onclick="dlFile('${Er.id}')" style="font-size:8px;padding:0 3px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">⬇</button></div>`).join("")}</div>`:""}${I.paid?"":`<button onclick="openModal('ppfiles','${I.id}|${xe.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px;width:100%">📎 ${kn.length?kn.length+" file(s) · + Add":"Attach Supporting File"}</button>`}</div>`}).join(""):"",Ue=Ne>0?Ne:0,Sn=I.paid?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:6px;padding:7px 9px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px"><span style="font-size:11px;font-weight:700;color:var(--green)">✓ Fully Paid</span><button onclick="unmarkInv('${I.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button></div>${zt}<div style="font-size:10px;font-weight:700;color:var(--green);margin-top:4px;padding-top:4px;border-top:1px solid #B8DCA0">Total: $${Number(I.amount||0).toLocaleString()}</div></div>`:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:7px 9px">${Me?`<div style="font-size:9px;font-weight:700;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:3px 8px;margin-bottom:6px">📍 Milestone: ${Me}</div>`:""}<div style="font-size:9px;color:var(--muted);margin-bottom:5px">Invoice: <strong style="color:var(--text)">$${Number(I.amount||0).toLocaleString()}</strong> · Max payable: <strong style="color:${Ue>0?"var(--amber)":"var(--green)"}">$${Ue.toLocaleString()}</strong></div>${zt}${Ne<Number(I.amount||0)?`<div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:5px;padding-bottom:4px;border-bottom:1px solid var(--border)">Remaining: $${Ne.toLocaleString()}</div>`:""}<div style="display:flex;gap:4px;margin-bottom:4px"><input type="number" id="invpamt_${I.id}" min="0.01" max="${Ue}" step="0.01" oninput="const v=parseFloat(this.value)||0;this.style.border=v>${Ue}?'2px solid var(--red)':'1px solid var(--border)'" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none" placeholder="Amount (max $${Ue.toLocaleString()})"/><input type="date" id="invpdate_${I.id}" value="${Ct()}" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button onclick="addPartialPayment('${I.id}')" class="btn btn-ghost btn-xs" style="flex:1;justify-content:center;font-size:10px">+ Partial Pay</button><button onclick="markInvPaid('${I.id}')" class="btn btn-green btn-xs" style="flex:1;justify-content:center;font-size:10px">✓ Full Pay</button></div><div style="border-top:1px solid var(--border);padding-top:5px;display:flex;gap:4px"><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px" onclick="openLienEmail('${I.id}','Conditional Progress')">📧 Cond. Progress</button><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px" onclick="openLienEmail('${I.id}','Conditional Final')">📧 Cond. Final</button></div></div>`,Gu=`<div style="display:flex;flex-direction:column;gap:3px">${(I.lienSent||[]).map(xe=>`<div style="display:flex;align-items:center;gap:4px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:4px;padding:3px 7px;margin-bottom:1px"><span style="font-size:8px;color:#166534;font-weight:700">✉ Sent</span><span style="font-size:8px;color:#166534;flex:1">${xe.type}</span><span style="font-size:8px;color:#166534;opacity:.7;white-space:nowrap">${J(xe.date)}</span></div>`).join("")}<button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${I.id}','Unconditional Progress')">📧 Uncond. Progress</button><button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${I.id}','Unconditional Final')">📧 Uncond. Final</button>${(I.lienFiles||[]).length?`<div style="display:flex;flex-direction:column;gap:2px;margin-top:2px">${(I.lienFiles||[]).map(xe=>`<div style="display:flex;align-items:center;gap:4px;background:var(--teal-l);border:1px solid #9FE0CB;border-radius:4px;padding:2px 6px;max-width:170px"><span style="font-size:10px">${rt(xe.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${xe.name}</span><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:1px 4px;flex-shrink:0" onclick="viewFile('${xe.id}')">View</button><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:9px;padding:1px 4px;flex-shrink:0" onclick="dlFile('${xe.id}')">⬇</button></div>`).join("")}</div>`:""}<button class="btn btn-xs" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:2px 6px" onclick="openModal('invlien','${I.id}')">📎 ${(I.lienFiles||[]).length?"+ Add Signed":"Upload Signed Waiver"}</button></div>`;return`<tr style="background:${H}"><td style="padding:8px 10px"><div style="font-size:12px;font-weight:600;color:var(--navy)">${I.invoiceNo||"—"}</div>${Me?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${Me}</div>`:""}<div style="font-size:10px;color:var(--muted)">${I.description||""}</div></td><td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${I.invoiceDate?J(I.invoiceDate):"—"}</td><td style="padding:8px 10px;font-size:10px;color:${I.dueDate&&new Date(I.dueDate+"T12:00:00")<new Date&&!I.paid?"var(--red)":"var(--muted)"};white-space:nowrap">${I.dueDate?J(I.dueDate):"—"}</td><td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${I.paid?"var(--green)":"var(--text)"}">${F(I.amount||0)}</span></td><td style="padding:6px 8px;min-width:150px">${Sn}</td><td style="padding:6px 8px">${Gu}</td><td style="padding:8px 10px;white-space:nowrap"><button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 6px" onclick="nav('invoices')">View</button></td></tr>`}).join(""):'<tr><td colspan="7" style="padding:14px;text-align:center;color:var(--muted);font-size:12px">No approved invoices yet.</td></tr>',qPaid:Y,qBal:N,qPct:_}}function x(S){return S.isManualGroup?S._manualInvs||[]:S.isQuoteGroup?S._quoteInvs||[]:(e.invoices||[]).filter(D=>D.vcId===S.id&&D.approvalStatus==="approved")}function E(S){if(S.isManualGroup)return[];if(S.milestones&&S.milestones.length)return S.milestones;if(S.isQuoteGroup){const D=(e.vendors||[]).find(z=>z.quoteId===S.sourceQuoteId||z.vendor===S.vendor);return(D==null?void 0:D.milestones)||[]}return[]}function C(S){const D=x(S),z=E(S);if(S.isManualGroup)return'<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">Manual invoices are tracked directly per invoice, so there is no contract milestone breakup for this vendor.</div>';const T=[];z.forEach(N=>{const _=D.filter(ie=>ie.milestoneId===N.id),U=_.reduce((ie,Ne)=>ie+Number(Ne.amount||0),0),I=_.reduce((ie,Ne)=>ie+(Ne.paid?Number(Ne.amount||0):(Ne.partialPayments||[]).reduce((Me,zt)=>Me+Number(zt.amount||0),0)),0),V=Number(N.amount||0)||U,H=Math.max(V-I,0),X=V?Math.min(100,Math.round(I/V*100)):0;T.push({name:N.name||"Milestone",scheduled:V,invoiced:U,paid:I,balance:H,pct:X})});const Y=D.filter(N=>!N.milestoneId||!z.some(_=>_.id===N.milestoneId));if(Y.length){const N=Y.reduce((U,I)=>U+Number(I.amount||0),0),_=Y.reduce((U,I)=>U+(I.paid?Number(I.amount||0):(I.partialPayments||[]).reduce((V,H)=>V+Number(H.amount||0),0)),0);T.push({name:"Unassigned",scheduled:N,invoiced:N,paid:_,balance:Math.max(N-_,0),pct:N?Math.min(100,Math.round(_/N*100)):0})}return T.length?`<div style="padding:10px 16px;border-bottom:1px solid var(--border);background:#FFFDF8">
      <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Milestone Payment Breakup</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        ${T.map(N=>`<div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:9px 10px">
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:5px">
            <span style="font-size:11px;font-weight:700;color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.name}</span>
            <span style="font-size:10px;font-weight:700;color:${N.pct===100?"var(--green)":N.pct>0?"var(--amber)":"var(--muted)"}">${N.pct}%</span>
          </div>
          <div style="height:5px;background:var(--border);border-radius:999px;overflow:hidden;margin-bottom:7px"><div style="height:100%;width:${N.pct}%;background:${N.pct===100?"var(--green-m)":N.pct>0?"var(--amber-m)":"#D7D3CB"}"></div></div>
          <div style="font-size:10px;color:var(--muted)">Scheduled: <strong style="color:var(--text)">${F(N.scheduled)}</strong></div>
          <div style="font-size:10px;color:var(--muted)">Invoiced: <strong style="color:var(--text)">${F(N.invoiced)}</strong></div>
          <div style="font-size:10px;color:var(--green)">Paid: <strong>${F(N.paid)}</strong></div>
          <div style="font-size:10px;color:${N.balance>0?"var(--red)":"var(--green)"}">Balance: <strong>${F(N.balance)}</strong></div>
        </div>`).join("")}
      </div>
    </div>`:'<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">No milestone breakup available yet for this vendor.</div>'}const k='<table style="width:100%;border-collapse:collapse;table-layout:fixed"><thead><tr style="background:var(--bg)"><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Invoice #</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Date</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--red);text-align:left;border-bottom:1px solid var(--border);width:8%">Due</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Amount</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:18%">Payment</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--teal);text-align:left;border-bottom:1px solid var(--border);width:14%">🔏 Lien Waiver</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:6%"></th></tr></thead><tbody>';$g(t,e);const j=t.map(S=>{const D=v(S,(e.invoices||[]).filter(z=>z.vcId===S.id&&z.approvalStatus==="approved"),S.amount);return`<div class="panel pay-vendor-card" data-vendor="${S.id}" style="margin-bottom:16px">
      <div style="background:var(--navy);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${S.vendor}</span>
          <span class="badge" style="background:rgba(26,107,196,.3);color:#8AAAC8;border:1px solid rgba(26,107,196,.4);font-size:9px">Vendor Contract</span>
          ${S.trade?`<span style="font-size:11px;color:#8AAAC8">${S.trade}</span>`:""}
          ${S.contractNo?`<span style="font-size:10px;color:#8AAAC8;opacity:.8">#${S.contractNo}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${F(S.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.15);padding-left:10px">
            <button onclick="exportVCPaymentLedgerPDF('${S.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF ledger">🖨 PDF</button>
            <button onclick="exportVCPaymentLedgerExcel('${S.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel ledger">📊 Excel</button>
            <button onclick="openLedgerEmail('vendor','${S.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(26,107,196,.35);border:1px solid rgba(26,107,196,.5);color:#7CC4F8;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger to vendor">📧 Email</button>
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
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${F(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--red)":"var(--green)"}">${F(D.qBal)}</div></div>
        </div>
      </div>
      ${C(S)}${k}${D.invRows}</tbody></table>
    </div>`}),$=c.map(S=>{const D=v(null,S._quoteInvs,S.amount);return`<div class="panel pay-vendor-card" data-vendor="${S.id}" style="margin-bottom:16px">
      <div style="background:var(--blue);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${S.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">Approved Quote</span>
          ${S.scope?`<span style="font-size:10px;color:rgba(255,255,255,.78)">${S.scope}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${F(S.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.25);padding-left:10px">
            <button onclick="exportPaymentLedgerPDF('${S.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF">🖨 PDF</button>
            <button onclick="exportPaymentLedgerExcel('${S.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel">📊 Excel</button>
            <button onclick="openLedgerEmail('quote','${S.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger">📧 Email</button>
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
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${F(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--red)":"var(--green)"}">${F(D.qBal)}</div></div>
        </div>
      </div>
      ${C(S)}${k}${D.invRows}</tbody></table>
    </div>`}),A=r.map(S=>{const D=v(null,S._manualInvs,S.amount),z=encodeURIComponent(S.vendor);return`<div class="panel pay-vendor-card" data-vendor="${S.id}" style="margin-bottom:16px">
      <div style="background:var(--teal);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${S.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">✏ Manual Invoices</span>
          <span style="font-size:10px;color:rgba(255,255,255,.7)">${S._manualInvs.length} invoice${S._manualInvs.length!==1?"s":""}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${F(S.amount)}</span>
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
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${F(D.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Total Invoiced</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${D.qBal>0?"var(--amber)":"var(--green)"}">${F(S.amount)}</div></div>
        </div>
      </div>
      ${C(S)}${k}${D.invRows}</tbody></table>
    </div>`});l.innerHTML=[...j,...$,...A].join(""),l.querySelectorAll(`button[onclick*="openModal('invlien',"]`).forEach(S=>{var U;const z=(S.getAttribute("onclick")||"").match(/openModal\('invlien','([^']+)'\)/);if(!z)return;const T=z[1],Y=(e.invoices||[]).find(I=>I.id===T);if(!Y||(Y.lienFiles||[]).length===0||(U=S.parentElement)!=null&&U.querySelector(`[data-waiver-dl="${T}"]`))return;const N=document.createElement("button");N.className="btn btn-xs",N.setAttribute("data-waiver-view",T),N.style.background="#EEF9F5",N.style.color="var(--teal)",N.style.border="1px solid #9FE0CB",N.style.fontSize="8px",N.style.padding="2px 6px",N.textContent="View Waivers",N.onclick=()=>ju(T);const _=document.createElement("button");_.className="btn btn-xs",_.setAttribute("data-waiver-dl",T),_.style.background="#E8F2FC",_.style.color="var(--blue)",_.style.border="1px solid #B0D0F0",_.style.fontSize="8px",_.style.padding="2px 6px",_.textContent="⬇ All Waivers",_.onclick=()=>Pu(T),S.parentElement.insertBefore(N,S),S.parentElement.insertBefore(_,S)})}function _v(e,t){const n=B();if(!n)return;const o=(n.quotes||[]).find(s=>s.id===e);if(!o)return;const i=(o.payMilestones||[]).find(s=>s.id===t);if(!i)return;const r=h("pd_"+t);i.paid=!0,i.paidDate=(r==null?void 0:r.value)||Ct(),te(),oe(),P("✓ Payment marked as paid")}function Rv(e,t){wr("markpp",e+"|"+t)}function Ov(e,t){const n=B();if(!n)return;const o=(n.milestones||[]).find(r=>r.id===e);if(!o)return;const i=(o.progressPayments||[]).find(r=>r.id===t);i&&(i.paid=!1,i.receivedDate="",te(),oe(),P("Payment unmarked"))}function Vv(e,t){const n=B();if(!n||!confirm("Delete this progress payment?"))return;const o=(n.milestones||[]).find(i=>i.id===e);o&&(o.progressPayments=(o.progressPayments||[]).filter(i=>i.id!==t),te(),oe(),P("🗑 Deleted"))}function Uv(e,t){const n=B();if(!n)return;const o=(n.quotes||[]).find(r=>r.id===e);if(!o)return;const i=(o.payMilestones||[]).find(r=>r.id===t);i&&(i.paid=!1,i.paidDate="",te(),oe(),P("Payment unmarked"))}function Hv(e,t,n){const o=B();if(!o)return;const i=(o.quotes||[]).find(s=>s.id===e);if(!i)return;const r=(i.payMilestones||[]).find(s=>s.id===t);r&&(r.paidDate=n,te(),P("📅 Date updated"))}function Wv(e,t){const n=B();if(!n||!confirm("Delete this payment milestone?"))return;const o=(n.quotes||[]).find(i=>i.id===e);o&&(o.payMilestones=(o.payMilestones||[]).filter(i=>i.id!==t),te(),oe(),P("🗑 Deleted"))}function dl(){const e=[{l:"Envelope / Insulation",p:90,s:"Verified",c:"var(--green-m)"},{l:"HVAC Efficiency",p:75,s:"In Progress",c:"var(--amber-m)"},{l:"Lighting (Indoor)",p:85,s:"In Progress",c:"var(--amber-m)"},{l:"Solar Ready (PV)",p:100,s:"Compliant",c:"var(--green-m)"},{l:"HERS Verification",p:30,s:"Pending",c:"var(--gray)"}],t=[{l:"Water Efficiency §4.303",p:100,s:"Compliant",c:"var(--green-m)"},{l:"Constr. Waste §4.408",p:65,s:"65% Diverted",c:"var(--amber-m)"},{l:"VOC Limits §4.504",p:100,s:"Verified",c:"var(--green-m)"},{l:"EV Charging §4.106.4",p:50,s:"Roughed-in",c:"var(--amber-m)"},{l:"Stormwater §4.106.3",p:80,s:"In Review",c:"var(--amber-m)"}],n=o=>o.map(i=>`<div class="comp-row"><span class="comp-lbl">${i.l}</span><div class="comp-bar"><div class="comp-fill" style="width:${i.p}%;background:${i.c}"></div></div><span class="comp-st" style="color:${i.c}">${i.s}</span></div>`).join("");h("t24-list").innerHTML=n(e),h("cg-list").innerHTML=n(t)}function cl(){const e=B();if(!e)return;const t=[];(e.quotes||[]).forEach(o=>{(o.files||[]).forEach(i=>t.push({...i,src:"Quote: "+o.vendor})),(o.payMilestones||[]).forEach(i=>{(i.files||[]).forEach(r=>t.push({...r,src:"Payment Proof: "+i.name})),(i.lienFiles||[]).forEach(r=>t.push({...r,src:"Lien Waiver: "+i.name}))})}),(e.plans||[]).forEach(o=>t.push({...o,src:"Plans & Docs"})),(e.inspections||[]).forEach(o=>(o.files||[]).forEach(i=>t.push({...i,src:"Inspection: "+o.name}))),(e.milestones||[]).forEach(o=>(o.payFiles||[]).forEach(i=>t.push({...i,src:"Milestone: "+o.name}))),t.forEach(o=>{o.data&&(jt[o.id]=o)});const n=h("exp-files");if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">📂</div>No files attached to this project yet.</div>';return}n.innerHTML=`<div class="attach-list">${t.map(o=>`<div class="a-item"><span class="a-icon">${rt(o.name)}</span><div style="flex:1;min-width:0"><div class="a-name">${o.name}</div><div style="font-size:10px;color:var(--muted)">${o.src} · ${tl(o.size||0)}</div></div><button class="a-dl" onclick="dlFile('${o.id}')">⬇ Download</button></div>`).join("")}</div>`}let Q=null,O=null,G=[],Jt=0;function wr(e,t=null){var r,s,c;Q=e,O=t,G=[];const n=B(),o={project:"Project",work:"Work Item",milestone:"Milestone",quote:"Quote",plan:"Upload Document",inspection:"Inspection",qfiles:"Attach Files",insfiles:"Attach Reports",paymilestone:"Payment Milestone",payproof:"Proof of Payment",payinvoice:"Invoice",lienwvr:"Lien Waiver",msprogpay:"Progress Payment",msppfiles:"Proof of Payment",markpp:"Mark as Received",invoice:"Invoice",invfiles:"Invoice Files",invproof:"Proof of Payment",ppfiles:"Payment Supporting Files",vendor:"Vendor Contract",venfiles:"Contract Files","chklist-cat":"Manage Categories","chklist-item":"Checklist Item","qaqc-item":"QA/QC Entry",qafiles:"QA/QC Files"};h("modal-title").textContent=(t&&!t.includes("|")?"Edit ":"Add ")+o[e];let i="";if(e==="project"){const l=t?q.projects.find(f=>f.id===t):{},d=["CA","AZ","NV","OR","WA","TX","FL","NY","Other"].map(f=>`<option value="${f}"${(l.state||"CA")===f?" selected":""}>${f}</option>`).join(""),u=["R-3 Single-Family Residential","R-2 Multi-Family Residential","B Office / Mixed-Use","A Assembly","E Educational","F Factory / Industrial","I Institutional","M Mercantile","S Storage","U Utility"].map(f=>`<option value="${f}"${(l.type||"")===f?" selected":""}>${f}</option>`).join("");i=`
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
      <div class="fr"><label class="fl">Project Color</label><div class="color-row">${Ja.map(f=>`<div class="cswatch${(l.color||Ja[0])===f?" sel":""}" style="background:${f}" onclick="pickColor('${f}',this)" data-color="${f}"></div>`).join("")}</div></div>
      <div style="margin:10px 0 6px;border-top:1px solid var(--border);padding-top:10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted)">👤 Client / Owner Information</div>
      <div class="fr"><label class="fl">Client / Owner Name</label><input class="fi" id="f-client" value="${l.client||""}" placeholder="e.g. John Doe / ABC Corp"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Client Phone</label><input class="fi" id="f-clientPhone" value="${l.clientPhone||""}" placeholder="+1 555 000 1234"/></div>
        <div class="fr"><label class="fl">Client Email</label><input class="fi" id="f-clientEmail" value="${l.clientEmail||""}" placeholder="client@example.com"/></div>
      </div>
      <div class="fr"><label class="fl">Client Address</label><input class="fi" id="f-clientAddr" value="${l.clientAddr||""}" placeholder="123 Main St, City, State"/></div>`,setTimeout(()=>{zu()},50)}else if(e==="work"){const l=t?(n&&n.works||[]).find(d=>d.id===t):{};i=`
      <div class="fr"><label class="fl">Work Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. Concrete Foundation Walls"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">CBC Reference</label><input class="fi" id="f-ref" value="${l.ref||""}" placeholder="e.g. CBC §1901"/></div>
        <div class="fr"><label class="fl">Contractor</label><input class="fi" id="f-contractor" value="${l.contractor||""}" placeholder="Contractor name"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-status">${[["active","Active"],["inprogress","In Progress"],["starting","Starting"],["hold","On Hold"],["caloshahold","CalOSHA Hold"],["complete","Complete"]].map(([d,u])=>`<option value="${d}"${l.status===d?" selected":""}>${u}</option>`).join("")}</select></div>
        <div class="fr"><label class="fl">Progress %</label><input class="fi" id="f-pct" type="number" min="0" max="100" value="${l.pct??0}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${l.notes||""}</textarea></div>`}else if(e==="milestone"){const l=t?(n&&n.milestones||[]).find(d=>d.id===t):{};i=`
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
      </div>`}else if(e==="quote"){const l=t?(n&&n.quotes||[]).find(p=>p.id===t):{};l.files&&(G=[...l.files],W(G));const d=["Div 01 — General Requirements","Div 02 — Existing Conditions","Div 03 — Concrete","Div 04 — Masonry","Div 05 — Metals / Structural Steel","Div 06 — Wood & Plastics","Div 07 — Thermal & Moisture Protection","Div 08 — Openings / Doors & Windows","Div 09 — Finishes","Div 10 — Specialties","Div 11 — Equipment","Div 12 — Furnishings","Div 13 — Special Construction","Div 14 — Conveying Equipment","Div 21 — Fire Suppression","Div 22 — Plumbing","Div 23 — HVAC","Div 25 — Integrated Automation","Div 26 — Electrical","Div 27 — Communications","Div 28 — Electronic Safety","Div 31 — Earthwork","Div 32 — Exterior Improvements","Div 33 — Utilities","Div 48 — Electrical Power Generation"].map(p=>`<option value="${p}"${(l.csi||"")===p?" selected":""}>${p}</option>`).join(""),u=["CBC 2022","CPC 2022","CMC 2022","CEC 2022","CALGreen 2022","Title 24 Part 6","CFC 2022","NFPA 13","NFPA 72","NFPA 101","AISC 341","ACI 318","ASCE 7-22","CalOSHA Title 8","Other"].map(p=>`<option value="${p}"${(l.ref||"")===p?" selected":""}>${p}</option>`).join(""),f=[["new","New"],["review","Under Review"],["approved","Approved"],["negotiating","Negotiating"]];i=`
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
          ${f.map(([p,g])=>`
            <label style="display:flex;align-items:center;gap:7px;padding:8px 14px;border:2px solid ${l.status===p?"var(--blue-m)":"var(--border)"};border-radius:8px;cursor:pointer;background:${l.status===p?"var(--blue-l)":"#fff"};font-size:13px;font-weight:500;flex:1;min-width:100px;transition:.13s" onclick="selectQuoteStatus('${p}',this)">
              <input type="radio" name="q-status" value="${p}" ${l.status===p?"checked":""} style="width:15px;height:15px;accent-color:var(--blue-m)"/>
              ${g}
            </label>`).join("")}
        </div>
        <input type="hidden" id="f-status" value="${l.status||"new"}"/>
      </div>`}else if(e==="plan")i=`
      <div class="fr"><label class="fl">Document Type</label><select class="fs" id="f-plan-type">${["Architectural Plans","Structural Plans","Electrical Plans","Plumbing Plans","Mechanical Plans","Site Plan","Permit","Geotechnical Report","Soils Report","Title 24 Compliance","CALGreen Checklist","Inspection Report","Contract","Other"].map(l=>`<option>${l}</option>`).join("")}</select></div>
      ${Ie("plan-files","Drop plans, drawings, PDFs, DWG, or any document here…")}
      <div style="font-size:10px;color:var(--muted);margin-top:6px;padding:0 2px">
        Max file size: 500MB per file &nbsp;·&nbsp; Files upload to your backend and sync with the project across browsers
      </div>`;else if(e==="inspection"){const l=t?(n&&n.inspections||[]).find(u=>u.id===t):{},d=(()=>{let u='<option value="">-- Select Time --</option>';for(let f=6;f<=19;f++)for(let p=0;p<60;p+=30){const g=String(f).padStart(2,"0")+":"+String(p).padStart(2,"0"),w=f>=12?"PM":"AM",y=f%12||12;u+=`<option value="${g}"${l.inspTime===g?" selected":""}>${y}:${String(p).padStart(2,"0")} ${w}</option>`}return u})();i=`
      <div class="fr"><label class="fl">Inspection Name *</label><input class="fi" id="f-name" value="${l.name||""}" placeholder="e.g. Concrete Pour — Level 2 Slab"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Inspection Date *</label><input class="fi" id="f-inspdate" type="date" value="${l.inspDate||""}"/></div>
        <div class="fr"><label class="fl">Inspection Time *</label><select class="fs" id="f-insptime">${d}</select></div>
      </div>
      <div class="fr"><label class="fl">Location / Inspector</label><input class="fi" id="f-location" value="${l.location||""}" placeholder="e.g. 1510 Madera Dr · Cupertino Inspector"/></div>
      <div class="fr"><label class="fl">Code References</label><input class="fi" id="f-refs" value="${l.refs||""}" placeholder="e.g. CBC §110.3.2 · CEC 2022"/></div>
      <div class="fr"><label class="fl">AHJ</label><select class="fs" id="f-ahj">${[["cupertino","City of Cupertino"],["calosha","CalOSHA"],["icc","ICC-Certified Inspector"]].map(([u,f])=>`<option value="${u}"${l.ahj===u?" selected":""}>${f}</option>`).join("")}</select></div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${l.notes||""}</textarea></div>`}else if(e==="qfiles"){const l=(n&&n.quotes||[]).find(d=>d.id===t);if(!l){me();return}G=[...l.files||[]],W(G),h("modal-title").textContent="Attach Files — "+l.vendor,i=`${Ie("qfiles","Drop quote files, PDFs, drawings…")}${He()}`}else if(e==="insfiles"){const l=(n&&n.inspections||[]).find(d=>d.id===t);if(!l){me();return}G=[...l.files||[]],W(G),h("modal-title").textContent="Attach Reports — "+l.name,i=`${Ie("insfiles","Drop inspection reports, photos, PDFs…")}${He()}`}else if(e==="paymilestone"){const l=(t||"").split("|"),d=l[0],u=l[1]||"",f=(n&&n.quotes||[]).find(g=>g.id===d);if(!f){me();return}f.payMilestones=f.payMilestones||[];const p=u?f.payMilestones.find(g=>g.id===u):{};h("modal-title").textContent=(u?"Edit":"Add")+" Payment Milestone",i=`
      <div style="background:var(--navy);border-radius:7px;padding:10px 13px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:12px;font-weight:700;color:#fff">${f.vendor}</div><div style="font-size:10px;color:#8AAAC8">${f.scope}</div></div>
        <div style="text-align:right"><div style="font-size:10px;color:#8AAAC8">Quote Total</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${F(f.amount)}</div></div>
      </div>
      <div class="fr"><label class="fl">Milestone Name *</label><input class="fi" id="f-pmname" value="${p&&p.name||""}" placeholder="e.g. 30% Progress Payment"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-pmamt" type="number" value="${p&&p.amount||""}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-pmdue" type="date" value="${p&&p.dueDate||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-pmnotes" style="min-height:50px">${p&&p.notes||""}</textarea></div>`}else if(e==="payproof"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(f=>f.id===l[0]),u=d?(d.payMilestones||[]).find(f=>f.id===l[1]):null;if(!u){me();return}G=[...u.files||[]],W(G),h("modal-title").textContent="Proof of Payment — "+u.name,i=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:11px 13px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:13px;font-weight:600">${u.name}</div><div style="font-size:11px;color:var(--muted)">${d.vendor}</div></div>
        <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700">${F(u.amount||0)}</div>${u.paid?`<span class="badge b-green">✓ Paid ${u.paidDate?"· "+J(u.paidDate):""}</span>`:'<span class="badge b-gray">Unpaid</span>'}</div>
      </div>
      ${Ie("payproof","Drop receipts, bank slips, payment confirmations…")}${He()}`}else if(e==="msprogpay"){const l=(t||"").split("|"),d=l[0],u=l[1]||"",f=(n&&n.milestones||[]).find(w=>w.id===d);if(!f){me();return}f.progressPayments=f.progressPayments||[];const p=u?f.progressPayments.find(w=>w.id===u):{};h("modal-title").textContent=(u?"Edit":"Add")+" Progress Payment — "+f.name;const g=["10% Mobilization","20% Foundation Complete","30% Progress Payment","40% Progress Payment","50% Progress Payment","60% Progress Payment","Final Payment","Retention Release","Other"].map(w=>`<option value="${w}"${(p&&p.name)===w?" selected":""}>${w}</option>`).join("");i=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:13px;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:13px;font-weight:600">${f.name}</div>
        ${f.payAmt?`<div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy)">Contract: ${F(f.payAmt)}</div>`:""}
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
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-ppnotes" style="min-height:44px">${p&&p.notes||""}</textarea></div>`,O=t.includes("|")?t:d+"|",(r=document.getElementById("f-ppname"))==null||r.addEventListener("change",function(){const w=document.getElementById("f-ppname-custom");w&&(w.style.display=this.value==="Other"?"block":"none")})}else if(e==="msppfiles"){const l=(t||"").split("|"),d=l[0],u=l[1],f=(n&&n.milestones||[]).find(g=>g.id===d);if(!f){me();return}f.progressPayments=f.progressPayments||[];const p=f.progressPayments.find(g=>g.id===u);if(!p){me();return}G=[...p.files||[]],W(G),h("modal-title").textContent="Proof of Payment — "+p.name,i=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><div style="font-size:13px;font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--muted)">${f.name}</div></div>
          <div style="text-align:right">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700">${F(p.amount||0)}</div>
            ${p.paid?`<span class="badge b-green">✓ Received ${p.receivedDate?"· "+J(p.receivedDate):""}</span>`:'<span class="badge b-gray">Not yet received</span>'}
          </div>
        </div>
      </div>
      ${Ie("msppfiles","Drop receipts, bank transfer slips, cheques, payment confirmations…")}${He()}`}else if(e==="markpp"){const l=(t||"").split("|"),d=l[0],u=l[1],f=(n&&n.milestones||[]).find(g=>g.id===d);if(!f){me();return}const p=(f.progressPayments||[]).find(g=>g.id===u);if(!p){me();return}h("modal-title").textContent="Mark as Received — "+p.name,i=`
      <div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:12px 14px;margin-bottom:14px">
        <div style="font-size:14px;font-weight:700;color:var(--green)">${p.name}</div>
        <div style="font-size:13px;color:var(--text);margin-top:2px">${f.name} · <strong>${F(p.amount||0)}</strong></div>
      </div>
      <div class="fr"><label class="fl">Date Money Received *</label><input class="fi" id="f-pprecdate" type="date" value="${p.receivedDate||Ct()}"/></div>
      <div class="fr"><label class="fl">Notes (optional)</label><textarea class="ft" id="f-pprechnotes" style="min-height:44px">${p.notes||""}</textarea></div>`}else if(e==="payinvoice"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(f=>f.id===l[0]),u=d?(d.payMilestones||[]).find(f=>f.id===l[1]):null;if(!u){me();return}G=[...u.invoiceFiles||[]],W(G),h("modal-title").textContent="Invoice — "+u.name,i=`
      <div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div><div style="font-size:12px;font-weight:700;color:var(--amber)">🧾 Invoice</div><div style="font-size:10px;color:var(--amber);opacity:.8">${u.name} — ${d.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--amber)">${F(u.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--amber);border-top:1px solid rgba(168,98,0,.2);padding-top:6px"><strong>Tip:</strong> Upload the contractor invoice, billing statement, or draw request for this payment.</div>
      </div>
      ${Ie("payinvoice","Drop invoice PDF, billing statement, or draw request…")}${He()}`}else if(e==="lienwvr"){const l=(t||"").split("|"),d=(n&&n.quotes||[]).find(f=>f.id===l[0]),u=d?(d.payMilestones||[]).find(f=>f.id===l[1]):null;if(!u){me();return}G=[...u.lienFiles||[]],W(G),h("modal-title").textContent="Lien Waiver — "+u.name,i=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
          <div><div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div><div style="font-size:10px;color:var(--teal);opacity:.8">${u.name} — ${d.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--teal)">${F(u.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--teal);border-top:1px solid rgba(13,110,88,.2);padding-top:7px"><strong>Tip:</strong> Upload the signed conditional or unconditional lien waiver from the contractor or subcontractor.</div>
      </div>
      ${Ie("lienwvr","Drop lien waiver PDF, scan, or image…")}${He()}`}if(e==="invoice"){const l=B(),d=t?(l&&l.invoices||[]).find(v=>v.id===t):{},u=(l&&l.quotes||[]).filter(v=>v.status==="approved"),f=l&&l.vendors||[],p=u.map(v=>`<option value="${v.id}" data-name="${v.vendor}" ${(d.quoteId||"")===v.id?" selected":""}>${v.vendor} — Contract (${F(v.amount)})</option>`).join(""),w=f.filter(v=>!u.find(x=>x.id===v.quoteId)).map(v=>`<option value="vc_${v.id}" data-name="${v.vendor}" ${d.vcId===v.id?" selected":""}>${v.vendor} — Contract (${F(v.amount)})</option>`).join(""),y=(l&&l.vendors||[]).find(v=>v.quoteId===d.quoteId||d.vcId&&v.id===d.vcId),m=(y?y.milestones||[]:[]).map(v=>`<option value="${v.id}" ${d.milestoneId===v.id?"selected":""}>${v.name} — $${Number(v.amount||0).toLocaleString()}</option>`).join("");h("modal-title").textContent=(t?"Edit":"Add")+" Invoice",i=`
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
            ${w}
            <option value="__other__">Other / Manual Name</option>
          </select>
          <input class="fi" id="f-inv-vname" placeholder="Or type vendor name" value="${u.find(v=>v.id===d.quoteId)?"":d.vendor||""}" style="margin-top:5px"/>
        </div>
        <div class="fr">
          <label class="fl">Against Milestone <span style="font-size:9px;color:var(--muted)">(from Vendor Contract)</span></label>
          <select class="fs" id="f-inv-milestone" onchange="invMilestoneSelected(this.value,document.getElementById('f-inv-vendor')?.value||'')">
            <option value="">-- Select milestone (optional) --</option>
            ${m}
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
        <div class="fr"><label class="fl">Invoice Date</label><input class="fi" id="f-inv-date" type="date" value="${d.invoiceDate||Ct()}"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-inv-due" type="date" value="${d.dueDate||""}"/></div>
      </div>
      <div class="fr"><label class="fl">Description / Notes</label>
        <textarea class="ft" id="f-inv-desc" style="min-height:50px" placeholder="Describe work completed for this invoice…">${d.description||""}</textarea>
      </div>`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),d.isManual?Qa("manual"):Qa("contract"),setTimeout(()=>{const v=h("f-inv-vendor");v&&v.value&&gu(v.value)},0);return}if(e==="ppfiles"){const l=(t||"").split("|"),d=B(),u=(d&&d.invoices||[]).find(p=>p.id===l[0]),f=u?(u.partialPayments||[]).find(p=>p.id===l[1]):null;if(!f){me();return}G=[...f.files||[]],W(G),h("modal-title").textContent="Supporting Files — Txn "+(f.txnNo||f.id.slice(0,8)),i=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:10px 12px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Payment Evidence</div>
        <div style="display:flex;gap:12px;margin-top:6px;font-size:10px;color:var(--text)">
          <span>Amount: <strong>$${Number(f.amount||0).toLocaleString()}</strong></span>
          <span>Date: <strong>${J(f.date)}</strong></span>
          ${f.txnNo?`<span>Txn: <strong style="color:var(--blue)">${f.txnNo}</strong></span>`:""}
        </div>
      </div>
      <div class="fr"><label class="fl">Transaction / Reference # (if not set)</label>
        <input class="fi" id="f-pp-txn" value="${f.txnNo||""}" placeholder="e.g. WIRE-2026-001, TXN#123456…"/>
      </div>
      ${Ie("ppfiles","Drop bank receipt, wire confirmation, cheque scan, or payment advice…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="ppfiles";return}if(e==="invproof"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){me();return}G=[...d.proofFiles||[]],W(G),h("modal-title").textContent="Proof of Payment — "+(d.invoiceNo||d.vendor||"Invoice"),i=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Proof of Payment</div>
        <div style="font-size:10px;color:var(--blue);margin-top:3px">Attach bank receipt, transfer confirmation, cheque scan, or payment advice for invoice ${d.invoiceNo||""}.</div>
      </div>
      ${Ie("invproof","Drop bank receipt, transfer confirmation, or payment advice…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="invproof";return}if(e==="invlien"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){me();return}G=[...d.lienFiles||[]],W(G),h("modal-title").textContent="Lien Waiver — "+(d.invoiceNo||d.vendor||"Invoice"),i=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div>
        <div style="font-size:10px;color:var(--teal);margin-top:3px">Attach conditional or unconditional lien waiver for invoice ${d.invoiceNo||""}.</div>
      </div>
      ${Ie("invlien","Drop lien waiver PDF or scan…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="invlien";return}if(e==="invfiles"){const l=B(),d=(l&&l.invoices||[]).find(u=>u.id===t);if(!d){me();return}G=[...d.files||[]],W(G),h("modal-title").textContent="Invoice Files — "+(d.invoiceNo||d.vendor||"Invoice"),i=`${Ie("invfiles","Drop invoice PDFs, scans, or documents…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="invfiles";return}if(e==="vendor"){const l=B(),d=t?(l&&l.vendors||[]).find(y=>y.id===t):{};(l&&l.quotes||[]).filter(y=>y.status==="approved");const u=["Lump Sum","Unit Price","Cost Plus","GMP","Time & Materials","Design-Build","Other"],f=[["draft","Draft"],["signed","Signed"],["active","Active"],["on-hold","On Hold"],["expired","Expired"],["terminated","Terminated"]],p=At(),g=p.map(y=>`<option value="${y.id}" data-email="${y.email||""}" data-company="${y.company||y.name}" ${d.vdirId===y.id?"selected":""}>${y.company||y.name}${y.name&&y.company?" ("+y.name+")":""}</option>`).join("");Ye=[...(d.milestones||[]).map(y=>({...y}))];const w=Ye.map((y,b)=>`<div id="venms_${b}" style="display:flex;gap:6px;align-items:flex-end;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px">
        <div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Milestone Name</label><input class="fi" style="font-size:11px;padding:4px 7px" value="${y.name||""}" oninput="venMsChange(${b},'name',this.value)" placeholder="e.g. Mobilization"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Amount ($)</label><input class="fi" style="font-size:11px;padding:4px 7px" type="number" value="${y.amount||""}" oninput="venMsChange(${b},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">% of Contract</label><input class="fi" style="font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${b}" value="${d.amount&&y.amount?Math.round(Number(y.amount)/Number(d.amount)*100)+"%":"—"}" readonly/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Due Date</label><input class="fi" style="font-size:11px;padding:4px 7px" type="date" value="${y.dueDate||""}" oninput="venMsChange(${b},'dueDate',this.value)"/></div>
        <button type="button" onclick="venRemoveMilestone(${b})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;padding:0 4px;flex-shrink:0;margin-bottom:2px">&#215;</button>
      </div>`).join("");h("modal-title").textContent=(t?"Edit":"Add")+" Vendor Contract",i=`
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
          <input class="fi" id="f-ven-trade" value="${d.trade||((s=p.find(y=>y.id===d.vdirId))==null?void 0:s.trade)||""}" placeholder="Auto-filled from directory"/>
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
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-ven-status">${f.map(([y,b])=>`<option value="${y}" ${d.status===y?"selected":""}>${b}</option>`).join("")}</select></div>
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
        <div id="ven-ms-list" style="min-height:10px">${w}</div>
        <button type="button" id="ven-add-ms-btn" onclick="venAddMilestone()" class="btn btn-ghost btn-sm" style="font-size:11px;margin-top:4px">+ Add Milestone</button>
        <div id="ven-ms-total" style="font-size:11px;color:var(--muted);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">${Ye.length?"Total scheduled: $"+Ye.reduce((y,b)=>y+Number(b.amount||0),0).toLocaleString():"No milestones added yet — click + Add Milestone above"}</div>
      </div>`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),setTimeout(()=>{const y=h("ven-add-ms-btn");y&&(y.onclick=()=>Du());const b=h("f-ven-vdir");b&&(b.onchange=m=>Au(m.target)),Nu(),oo()},0),O=t||null,Q="vendor";return}if(e==="venfiles"){const l=B(),d=(l&&l.vendors||[]).find(u=>u.id===t);if(!d){me();return}G=[...d.files||[]],W(G),h("modal-title").textContent="Contract Files — "+d.vendor,i=`${Ie("venfiles","Drop signed contract, SOW, amendments, or exhibits…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="venfiles";return}if(e==="chklist-cat"){const l=B(),d=[...new Set((l&&l.checklist||[]).map(u=>u.category).filter(Boolean))];h("modal-title").textContent="Manage Categories",i=`
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
      <div style="margin-top:12px;font-size:10px;color:var(--muted)">💡 You can also type a new category directly in any checklist item form.</div>`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),Q="chklist-cat";return}if(e==="chklist-item"){const l=B(),d=t?(l&&l.checklist||[]).find(p=>p.id===t):{},u=l&&l.chkCategories||[],f=[...new Set([...(l&&l.checklist||[]).map(p=>p.category).filter(Boolean),...u,"Pre-Construction","Structural","MEP","Finishes","Closeout","Punch List","Water Supply","Drain Waste Vent","Fuel Gas","Other"])];h("modal-title").textContent=(t?"Edit":"Add")+" Checklist Item",i=`
      <div class="fr"><label class="fl">Item Name *</label><input class="fi" id="f-chk-name" value="${d.name||""}" placeholder="e.g. Footing rebar inspection complete"/></div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Category <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-chk-cat" list="chk-cat-list" value="${d.category||""}" placeholder="e.g. Pre-Construction, MEP, Finishes…"/>
          <datalist id="chk-cat-list">
            ${f.map(p=>`<option value="${p}"/>`).join("")}
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
                  ${(p.files||[]).map(w=>`
                    <div style="display:flex;align-items:center;gap:3px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:2px 7px;cursor:pointer" onclick="dlFile('${w.id}')">
                      <span style="font-size:11px">${rt(w.name)}</span>
                      <span style="font-size:9px;color:var(--blue);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name}</span>
                    </div>`).join("")}
                </div>`:""}
            </div>`).join("")}
        </div>
        <!-- New comment entry -->
        <div id="chk-new-comment-area" style="border:2px dashed var(--border);border-radius:7px;padding:10px 12px;background:#fff">
          <div style="font-size:10px;font-weight:700;color:var(--navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">✏ New Comment</div>
          <div class="fg" style="margin-bottom:7px">
            <div class="fr"><label class="fl">Inspector / Author</label><input class="fi" id="f-chk-comment-author" value="${((c=It())==null?void 0:c.username)||""}" placeholder="Your name"/></div>
            <div class="fr"><label class="fl">Date</label><input class="fi" id="f-chk-comment-date" type="date" value="${Ct()}"/></div>
          </div>
          <div class="fr" style="margin-bottom:7px"><label class="fl">Comment / Observation</label><textarea class="ft" id="f-chk-comment-text" style="min-height:60px" placeholder="Field observation, pass/fail, deviation, corrective action…"></textarea></div>
          <div style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:5px">📸 Attach Photos / Documents</div>
          ${Ie("chkfiles","Drop photos, inspection reports, or supporting documents…")}
          <button type="button" onclick="chkSaveNewComment('${t}')" class="btn btn-navy btn-sm" style="width:100%;margin-top:8px;justify-content:center">💬 Save This Comment</button>
        </div>
      </div>`,h("modal-body").innerHTML=i,h("mo").classList.add("open");return}if(e==="qaqc-item"){const l=B(),d=t?(l&&l.qaqcLog||[]).find(f=>f.id===t):{},u=[["ncr","Non-Conformance (NCR)"],["observation","Observation"],["rfi","RFI"],["punch","Punch List Item"],["other","Other"]];h("modal-title").textContent=(t?"Edit":"Add")+" QA/QC Entry",i=`
      <div class="fg">
        <div class="fr"><label class="fl">Reference # *</label><input class="fi" id="f-qa-ref" value="${d.refNo||""}" placeholder="e.g. NCR-2026-001"/></div>
        <div class="fr">
          <label class="fl">Type * <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-qa-type" list="qa-type-list" value="${d.type||""}" placeholder="e.g. NCR, Observation, RFI…"/>
          <datalist id="qa-type-list">
            ${u.map(([f,p])=>`<option value="${f}">${p}</option>`).join("")}
          </datalist>
        </div>
      </div>
      <div class="fr"><label class="fl">Description *</label><textarea class="ft" id="f-qa-desc" style="min-height:60px" placeholder="Describe the issue or observation…">${d.description||""}</textarea></div>
      <div class="fr">
        <label class="fl">Category / Trade <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
        <input class="fi" id="f-qa-cat" list="qa-cat-list" value="${d.category||""}" placeholder="e.g. Plumbing, Structural, MEP, Finishes…"/>
        <datalist id="qa-cat-list">
          ${["Plumbing","Structural","Electrical","HVAC","Finishes","Waterproofing","Roofing","Site Work","Fire Protection","Glazing","Other"].map(f=>`<option value="${f}"/>`).join("")}
        </datalist>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Location</label><input class="fi" id="f-qa-loc" value="${d.location||""}" placeholder="e.g. Level 2, Grid C-4"/></div>
        <div class="fr"><label class="fl">Date</label><input class="fi" id="f-qa-date" type="date" value="${d.date||Ct()}"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Raised By</label><input class="fi" id="f-qa-by" value="${d.raisedBy||""}" placeholder="Inspector / Engineer"/></div>
        <div class="fr"><label class="fl">Assigned To</label><input class="fi" id="f-qa-to" value="${d.assignedTo||""}" placeholder="Contractor / Team"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-qa-due" type="date" value="${d.dueDate||""}"/></div>
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-qa-status">${[["open","Open"],["inprogress","In Progress"],["resolved","Resolved"],["closed","Closed"]].map(([f,p])=>`<option value="${f}" ${(d.status||"open")===f?"selected":""}>${p}</option>`).join("")}</select></div>
      </div>
      <div class="fr"><label class="fl">Corrective Action / Resolution</label><textarea class="ft" id="f-qa-action" style="min-height:50px">${d.correctiveAction||""}</textarea></div>`,h("modal-body").innerHTML=i,h("mo").classList.add("open");return}if(e==="qafiles"){const l=B(),d=(l&&l.qaqcLog||[]).find(u=>u.id===t);if(!d){me();return}G=[...d.files||[]],W(G),h("modal-title").textContent="QA/QC Files — "+(d.refNo||"Entry"),i=`${Ie("qafiles","Drop photos, reports, or supporting documents…")}${He()}`,h("modal-body").innerHTML=i,h("mo").classList.add("open"),O=t,Q="qafiles";return}h("modal-body").innerHTML=i,h("mo").classList.add("open")}function Ie(e,t){return`<label class="drop-zone" ondragover="event.preventDefault();this.classList.add('drag')" ondragleave="this.classList.remove('drag')" ondrop="handleDrop(event,'${e}',this)">
    <div style="font-size:24px;margin-bottom:4px">📎</div>
    <div class="drop-zone-txt">${t}</div>
    <div style="font-size:11px;color:var(--blue);font-weight:600;margin-top:6px">Click to choose files or drag them here</div>
    <input type="file" multiple style="display:none" onchange="handleFileInput(this,'${e}')">
  </label>
  <div id="upload-status-${e}" style="font-size:11px;color:var(--muted);margin-top:8px;min-height:16px"></div>
  <div class="attach-list" id="al-${e}"></div>`}function He(){return'<div id="__pending_render" style="display:none"></div>'}function Xr(){["qfiles","insfiles","payproof","payinvoice","lienwvr","invfiles","invlien","invproof","ppfiles","venfiles","qafiles","chkfiles","plan-files"].forEach(e=>{const t=h("al-"+e);t&&(t.innerHTML=G.map(o=>uu(o)).join(""));const n=h("upload-status-"+e);n&&(Jt>0?n.textContent="Uploading "+Jt+" file"+(Jt>1?"s":"")+"...":G.length?n.textContent=G.length+" file"+(G.length>1?"s":"")+" ready to save":n.textContent="")})}function uu(e){return`<div class="a-item" id="ai_${e.id}">
    <span class="a-icon">${rt(e.name)}</span>
    <span class="a-name">${e.name}</span>
    <span class="a-size">${tl(e.size||0)}</span>
    <button class="a-dl" onclick="dlFile('${e.id}')">⬇</button>
    <button class="a-rm" onclick="removePending('${e.id}')">✕</button>
  </div>`}function pl(e,t){Array.from(e.files).forEach(n=>{if(n.size>500*1024*1024){P("⚠ Max 500MB: "+n.name);return}const o=new FileReader;o.onload=i=>{const r={id:je(),name:n.name,size:n.size,data:i.target.result,at:new Date().toISOString()};jt[r.id]=r,G.push(r);const s=h("al-"+t);if(s){const c=document.createElement("div");c.innerHTML=uu(r),s.appendChild(c.firstElementChild)}},o.onerror=()=>P("⚠ Failed to read file: "+n.name),o.readAsDataURL(n)})}function qv(e,t,n){e.preventDefault(),n.classList.remove("drag"),pl({files:e.dataTransfer.files},t)}function Gv(e){G=G.filter(n=>n.id!==e);const t=h("ai_"+e);t&&t.remove()}function me(){const e=document.querySelector(".modal-foot");e&&(e.style.display=""),h("mo").classList.remove("open"),G=[],Jt=0}function fu(){const e=It();return e&&e.role==="Viewer"}function Yv(){var t,n,o,i,r,s,c,l,d,u,f,p,g,w,y,b,m,v,x,E;if(Jt>0){P("⏳ Please wait for file upload to finish");return}if(fu()){P("⚠ Viewers have read-only access");return}if(pn&&rs(pn)){P("⚠ You have View Only access to this page");return}const e=B();if(Q==="project"){const C=M("f-name");if(!C){P("⚠ Project name required");return}const k=((t=document.querySelector(".cswatch.sel"))==null?void 0:t.dataset.color)||Ja[0],j=M("f-street"),$=M("f-city"),A=M("f-state"),S=M("f-zip"),D=M("f-county"),z=[j,$,A,S].filter(Boolean).join(", "),T={id:O||"proj_"+je(),name:C,street:j,city:$,county:D,state:A,zip:S,address:z,permit:M("f-permit"),apn:M("f-apn"),type:M("f-type"),color:k,client:M("f-client"),clientPhone:M("f-clientPhone"),clientEmail:M("f-clientEmail"),clientAddr:M("f-clientAddr"),works:[],milestones:[],quotes:[],plans:[],inspections:[],invoices:[],vendors:[],checklist:[],qaqcLog:[]};if(O){const Y=q.projects.findIndex(N=>N.id===O);Y>-1&&(["works","milestones","quotes","plans","inspections","invoices","vendors","checklist","qaqcLog"].forEach(N=>{q.projects[Y][N]!==void 0&&(T[N]=q.projects[Y][N])}),q.projects[Y]=T)}else q.projects.push(T),q.activeId=T.id}else if(Q==="work"&&e){const C=M("f-name");if(!C){P("⚠ Name required");return}const k={id:O||je(),name:C,ref:M("f-ref"),contractor:M("f-contractor"),status:M("f-status"),pct:parseInt(M("f-pct"))||0,notes:M("f-notes")};if(e.works||(e.works=[]),O){const j=e.works.findIndex($=>$.id===O);j>-1&&(e.works[j]=k)}else e.works.push(k)}else if(Q==="milestone"&&e){const C=M("f-name");if(!C){P("⚠ Name required");return}const k=O?(e.milestones||[]).find($=>$.id===O):null,j={id:O||je(),name:C,ref:M("f-ref"),date:M("f-date"),status:M("f-status"),notes:M("f-notes"),payAmt:parseFloat(M("f-payamt"))||0,payPaid:k?k.payPaid:!1,payDate:k?k.payDate:"",payFiles:k?k.payFiles||[]:[],progressPayments:k?k.progressPayments||[]:[]};if(e.milestones||(e.milestones=[]),O){const $=e.milestones.findIndex(A=>A.id===O);$>-1&&(e.milestones[$]=j)}else e.milestones.push(j)}else if(Q==="quote"&&e){const C=M("f-vendor");if(!C){P("⚠ Vendor name required");return}const k=O?(e.quotes||[]).find(A=>A.id===O):null,j=((n=h("f-ref-custom"))==null?void 0:n.style.display)!=="none"?M("f-ref-custom"):M("f-ref"),$={id:O||je(),vendor:C,scope:M("f-scope"),ref:j,csi:M("f-csi"),amount:parseFloat(M("f-amount"))||0,date:M("f-date"),status:M("f-status"),files:[...G],payMilestones:k?k.payMilestones||[]:[]};if(e.quotes||(e.quotes=[]),O){const A=e.quotes.findIndex(S=>S.id===O);A>-1&&(e.quotes[A]=$)}else e.quotes.push($)}else if(Q==="plan"&&e){if(!G.length){P("⚠ Please select at least one file");return}const C=M("f-plan-type");e.plans||(e.plans=[]),G.forEach(k=>e.plans.push({...k,type:C}))}else if(Q==="inspection"&&e){const C=M("f-name");if(!C){P("⚠ Name required");return}const k=M("f-inspdate");if(!k){P("⚠ Please select a date");return}const j=M("f-insptime");if(!j){P("⚠ Please select a time");return}const $=O?(e.inspections||[]).find(S=>S.id===O):null,A={id:O||je(),name:C,inspDate:k,inspTime:j,location:M("f-location"),refs:M("f-refs"),ahj:M("f-ahj"),notes:M("f-notes"),files:$?$.files||[]:[]};if(e.inspections||(e.inspections=[]),O){const S=e.inspections.findIndex(D=>D.id===O);S>-1&&(e.inspections[S]=A)}else e.inspections.push(A)}else if(Q==="msprogpay"&&e){const C=(O||"|").split("|"),k=C[0],j=C[1]||"",$=(e.milestones||[]).find(N=>N.id===k);if(!$){P("⚠ Milestone not found");return}$.progressPayments=$.progressPayments||[];const A=h("f-ppname"),S=h("f-ppname-custom");let D=((A==null?void 0:A.value)==="Other"?S==null?void 0:S.value.trim():A==null?void 0:A.value)||"";if(!D){P("⚠ Please select or enter a payment name");return}const z=parseFloat((o=h("f-ppamt"))==null?void 0:o.value)||0;if(!z){P("⚠ Amount required");return}const T=j?$.progressPayments.find(N=>N.id===j):null,Y={id:j||je(),name:D,amount:z,dueDate:((i=h("f-ppdue"))==null?void 0:i.value)||"",paid:T?T.paid:!1,receivedDate:T?T.receivedDate:"",notes:((r=h("f-ppnotes"))==null?void 0:r.value.trim())||"",files:T?T.files||[]:[]};if(j){const N=$.progressPayments.findIndex(_=>_.id===j);N>-1&&($.progressPayments[N]=Y)}else $.progressPayments.push(Y)}else if(Q==="msppfiles"&&e){const C=(O||"").split("|"),k=C[0],j=C[1],$=(e.milestones||[]).find(S=>S.id===k),A=$?($.progressPayments||[]).find(S=>S.id===j):null;A&&(A.files=[...G])}else if(Q==="markpp"&&e){const C=(O||"").split("|"),k=C[0],j=C[1],$=(e.milestones||[]).find(D=>D.id===k),A=$?($.progressPayments||[]).find(D=>D.id===j):null;if(!A){P("⚠ Not found");return}const S=(s=h("f-pprecdate"))==null?void 0:s.value;if(!S){P("⚠ Please select a date");return}A.paid=!0,A.receivedDate=S,(c=h("f-pprechnotes"))!=null&&c.value.trim()&&(A.notes=h("f-pprechnotes").value.trim())}else if(Q==="qfiles"&&e){const C=(e.quotes||[]).find(k=>k.id===O);C&&(C.files=[...G])}else if(Q==="insfiles"&&e){const C=(e.inspections||[]).find(k=>k.id===O);C&&(C.files=[...G])}else if(Q==="paymilestone"&&e){const C=(O||"").split("|"),k=C[0],j=C[1]||"",$=(e.quotes||[]).find(z=>z.id===k);if(!$){P("⚠ Quote not found");return}$.payMilestones=$.payMilestones||[];const A=(l=h("f-pmname"))==null?void 0:l.value.trim();if(!A){P("⚠ Name required");return}const S=j?$.payMilestones.find(z=>z.id===j):null,D={id:j||je(),name:A,amount:parseFloat((d=h("f-pmamt"))==null?void 0:d.value)||0,dueDate:((u=h("f-pmdue"))==null?void 0:u.value)||"",paid:S?S.paid:!1,paidDate:S?S.paidDate:"",notes:((f=h("f-pmnotes"))==null?void 0:f.value.trim())||"",files:S?S.files||[]:[],invoiceFiles:S?S.invoiceFiles||[]:[],lienFiles:S?S.lienFiles||[]:[]};if(j){const z=$.payMilestones.findIndex(T=>T.id===j);z>-1&&($.payMilestones[z]=D)}else $.payMilestones.push(D)}else if(Q==="payproof"&&e){const C=(O||"").split("|"),k=(e.quotes||[]).find($=>$.id===C[0]),j=k?(k.payMilestones||[]).find($=>$.id===C[1]):null;j&&(j.files=[...G])}else if(Q==="payinvoice"&&e){const C=(O||"").split("|"),k=(e.quotes||[]).find($=>$.id===C[0]),j=k?(k.payMilestones||[]).find($=>$.id===C[1]):null;j&&(j.invoiceFiles=[...G])}else if(Q==="invoice"&&e){const C=document.getElementById("inv-manual-section"),k=C&&C.style.display!=="none";let j="",$="",A="",S="";if(k){const U=((p=h("f-inv-manual-vendor"))==null?void 0:p.value)||"";if(U==="__other__"?A=(((g=h("f-inv-manual-vendor-other"))==null?void 0:g.value)||"").trim():A=U.trim(),S=(((w=h("f-inv-manual-scope"))==null?void 0:w.value)||"").trim(),!A){P("⚠ Please select or enter a vendor name");return}}else{const U=h("f-inv-vendor"),I=(U==null?void 0:U.value)||"";if(I.startsWith("vc_")){$=I.replace("vc_","");const V=(e.vendors||[]).find(H=>H.id===$);A=V?V.vendor:((y=h("f-inv-vname"))==null?void 0:y.value.trim())||""}else j=I!=="__other__"?I:"",A=j?((b=(e.quotes||[]).find(V=>V.id===j))==null?void 0:b.vendor)||((m=h("f-inv-vname"))==null?void 0:m.value.trim())||"":((v=h("f-inv-vname"))==null?void 0:v.value.trim())||"";if(!A){P("⚠ Please select or enter a subcontractor name");return}}const D=M("f-inv-no");if(!D){P("⚠ Invoice number required");return}const z=parseFloat(M("f-inv-amt"))||0;if(!z){P("⚠ Amount required");return}const T=O?(e.invoices||[]).find(U=>U.id===O):null,Y=k?"":M("f-inv-milestone")||"",N=k?"":$||j&&((x=(e.vendors||[]).find(U=>U.quoteId===j))==null?void 0:x.id)||"",_={id:O||je(),vendor:A,quoteId:k?"":j,vcId:N,isManual:k||!1,manualScope:S||"",milestoneId:Y,invoiceNo:D,amount:z,invoiceDate:M("f-inv-date"),dueDate:M("f-inv-due"),description:M("f-inv-desc"),approvalStatus:T?T.approvalStatus:"pending",paid:T?T.paid:!1,paidDate:T?T.paidDate:"",partialPayments:T?T.partialPayments||[]:[],files:T?T.files||[]:[],lienFiles:T?T.lienFiles||[]:[]};if(e.invoices||(e.invoices=[]),e.vendors||(e.vendors=[]),e.checklist||(e.checklist=[]),e.qaqcLog||(e.qaqcLog=[]),e.chkCategories||(e.chkCategories=[]),(e.checklist||[]).forEach(U=>{(U.comments||[]).forEach(I=>W(I.files||[]))}),(e.qaqcLog||[]).forEach(U=>W(U.files||[])),(e.checklist||[]).forEach(U=>{U.comments||(U.comments=[])}),O){const U=e.invoices.findIndex(I=>I.id===O);U>-1&&(e.invoices[U]=_)}else e.invoices.push(_)}else if(Q==="vendor"&&e){const C=h("f-ven-vdir"),k=(C==null?void 0:C.value)||"";if(!k){P("⚠ Please select a vendor from the directory");return}const j=At().find(D=>D.id===k),$=j?j.company||j.name:"";if(!$){P("⚠ Vendor name required");return}const A=O?(e.vendors||[]).find(D=>D.id===O):null,S={id:O||je(),vendor:$,vdirId:k,vendorEmail:M("f-ven-email")||(j==null?void 0:j.email)||"",trade:M("f-ven-trade")||(j==null?void 0:j.trade)||"",contractNo:M("f-ven-no"),amount:parseFloat(M("f-ven-amt"))||0,contractType:M("f-ven-type"),status:M("f-ven-status"),startDate:M("f-ven-start"),endDate:M("f-ven-end"),scope:M("f-ven-scope"),exclusions:M("f-ven-exclusions"),notes:M("f-ven-notes"),milestones:Ye.filter(D=>!D._deleted&&D.name),files:A?A.files||[]:[]};if(e.vendors||(e.vendors=[]),O){const D=e.vendors.findIndex(z=>z.id===O);D>-1&&(e.vendors[D]=S)}else e.vendors.push(S)}else if(Q==="venfiles"&&e){const C=(e.vendors||[]).find(k=>k.id===O);C&&(C.files=[...G])}else if(Q==="ppfiles"&&e){const C=(O||"").split("|"),k=(e.invoices||[]).find($=>$.id===C[0]),j=k?(k.partialPayments||[]).find($=>$.id===C[1]):null;if(j){j.files=[...G];const $=h("f-pp-txn");$&&$.value.trim()&&(j.txnNo=$.value.trim())}}else if(Q==="invproof"&&e){const C=(e.invoices||[]).find(k=>k.id===O);C&&(C.proofFiles=[...G])}else if(Q==="invlien"&&e){const C=(e.invoices||[]).find(k=>k.id===O);C&&(C.lienFiles=[...G])}else if(Q==="invfiles"&&e){const C=(e.invoices||[]).find(k=>k.id===O);C&&(C.files=[...G])}else if(Q==="chklist-cat"&&e){const C=(((E=h("f-cat-new"))==null?void 0:E.value)||"").trim();if(!C){P("⚠ Please enter a category name");return}P('✓ Category "'+C+'" ready — use it when adding checklist items'),e.chkCategories||(e.chkCategories=[]),e.chkCategories.includes(C)||e.chkCategories.push(C),te(),me(),wr("chklist-cat");return}else if(Q==="chklist-item"&&e){const C=M("f-chk-name");if(!C){P("⚠ Item name required");return}const k=O?(e.checklist||[]).find(A=>A.id===O):null,j=k?k.comments||[]:[],$={id:O||je(),name:C,category:M("f-chk-cat")||"General",priority:M("f-chk-pri")||"low",dueDate:M("f-chk-due"),assignee:M("f-chk-who"),notes:M("f-chk-notes"),status:k?k.status:"open",comments:j};if(e.checklist||(e.checklist=[]),O){const A=e.checklist.findIndex(S=>S.id===O);A>-1&&(e.checklist[A]=$)}else e.checklist.push($)}else if(Q==="qaqc-item"&&e){const C=M("f-qa-ref");if(!C){P("⚠ Reference # required");return}const k=O?(e.qaqcLog||[]).find($=>$.id===O):null,j={id:O||je(),refNo:C,type:M("f-qa-type"),category:M("f-qa-cat"),description:M("f-qa-desc"),location:M("f-qa-loc"),date:M("f-qa-date"),raisedBy:M("f-qa-by"),assignedTo:M("f-qa-to"),dueDate:M("f-qa-due"),status:M("f-qa-status"),correctiveAction:M("f-qa-action"),files:k?k.files||[]:[]};if(e.qaqcLog||(e.qaqcLog=[]),O){const $=e.qaqcLog.findIndex(A=>A.id===O);$>-1&&(e.qaqcLog[$]=j)}else e.qaqcLog.push(j)}else if(Q==="qafiles"&&e){const C=(e.qaqcLog||[]).find(k=>k.id===O);C&&(C.files=[...G])}else if(Q==="lienwvr"&&e){const C=(O||"").split("|"),k=(e.quotes||[]).find($=>$.id===C[0]),j=k?(k.payMilestones||[]).find($=>$.id===C[1]):null;j&&(j.lienFiles=[...G])}te(),me(),oe(),P("✓ Saved")}function Jv(e,t){const n=B();!n||!confirm("Delete this item?")||n[e]&&(n[e]=n[e].filter(o=>o.id!==t),te(),oe(),P("🗑 Deleted"))}function Qv(e){const t=B();!t||!confirm("Remove document?")||(t.plans=(t.plans||[]).filter(n=>n.id!==e),te(),oe(),P("🗑 Removed"))}function Kv(e){var t;confirm("Delete this project and ALL its data?")&&(q.projects=q.projects.filter(n=>n.id!==e),q.activeId===e&&(q.activeId=((t=q.projects[0])==null?void 0:t.id)||null),te(),oe(),P("🗑 Project deleted"),q.activeId||no("projects"))}function Xo(e){let t=jt[e];return t||(yn(),t=jt[e]),t&&t.data?t:null}function bn(e){const t=Xo(e);if(!t){P("⚠ File not found — it may not have been saved yet");return}const n=document.createElement("a");n.href=t.data,n.download=t.name,document.body.appendChild(n),n.click(),document.body.removeChild(n),P("⬇ Downloading "+t.name)}function ul(e){const t=Xo(e);if(!t){P("⚠ File not found — it may not have been saved yet");return}if(!window.open(t.data,"_blank","noopener,noreferrer")){bn(e),P("⚠ Preview blocked — downloading instead");return}P("Opening "+t.name)}function Xv(){const e=B();if(!e){P("⚠ No project selected");return}const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=e.name.replace(/\s+/g,"_")+"_export.json",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n),P("📦 Exported")}function mu(){const e=B();if(!e){P("⚠ No project selected");return}const t=[];if((e.quotes||[]).forEach(n=>{(n.files||[]).forEach(o=>{o.data&&t.push(o)}),(n.payMilestones||[]).forEach(o=>{(o.files||[]).forEach(i=>{i.data&&t.push(i)}),(o.lienFiles||[]).forEach(i=>{i.data&&t.push(i)})})}),(e.plans||[]).forEach(n=>{n.data&&t.push(n)}),(e.inspections||[]).forEach(n=>(n.files||[]).forEach(o=>{o.data&&t.push(o)})),!t.length){P("⚠ No files in this project");return}t.forEach((n,o)=>setTimeout(()=>bn(n.id),o*350)),P(`⬇ Downloading ${t.length} file(s)…`)}function Zv(){const e=B();if(!e){P("⚠ No project selected");return}const t=(e.milestones||[]).filter(l=>l.status==="done").length,n=(e.quotes||[]).reduce((l,d)=>l+Number(d.amount||0),0),o=(e.quotes||[]).filter(l=>l.status==="approved").reduce((l,d)=>l+Number(d.amount||0),0),i=(e.milestones||[]).reduce((l,d)=>l+(d.progressPayments||[]).filter(u=>u.paid).reduce((u,f)=>u+Number(f.amount||0),0),0),r=(e.milestones||[]).reduce((l,d)=>l+(d.progressPayments||[]).reduce((u,f)=>u+Number(f.amount||0),0),0),s=`<!DOCTYPE html><html><head><meta charset="UTF-8"/>
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
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${o.toLocaleString()}</div><div class="sum-l">✓ Approved</div></div>
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${i.toLocaleString()}</div><div class="sum-l">Received</div></div>
  <div class="sum" style="border-color:${r>i?"#9B1F1F":"#2D6A0F"}"><div class="sum-v ${r>i?"r":"g"}">$${(r-i).toLocaleString()}</div><div class="sum-l">Balance Due</div></div>
</div>
<h2>Works at Site (${(e.works||[]).length})</h2>
<table><thead><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr></thead><tbody>
${(e.works||[]).map(l=>`<tr><td><b>${l.name}</b><br><span style="font-size:9px;color:#6b6a64">${l.notes||""}</span></td><td style="color:#4A3FB0">${l.ref}</td><td>${l.contractor||"—"}</td><td class="${l.status==="complete"?"g":l.status==="caloshahold"?"r":"a"}">${l.status}</td><td><b>${l.pct}%</b></td></tr>`).join("")}
</tbody></table>
<h2>Project Milestones (${t}/${(e.milestones||[]).length} Achieved)</h2>
<table><thead><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th><th>Received</th><th>Balance</th></tr></thead><tbody>
${(e.milestones||[]).map(l=>{const d=l.progressPayments||[],u=d.filter(p=>p.paid).reduce((p,g)=>p+Number(g.amount||0),0),f=d.reduce((p,g)=>p+Number(g.amount||0),0);return`<tr><td><b>${l.name}</b></td><td style="color:#4A3FB0">${l.ref}</td><td>${J(l.date)}</td><td class="${l.status==="done"?"g":l.status==="inprogress"?"a":""}">${l.status}</td><td><b>${l.payAmt?"$"+Number(l.payAmt).toLocaleString():"—"}</b></td><td class="g">${f?"$"+u.toLocaleString():"—"}</td><td class="${f-u>0?"r":"g"}">${f?"$"+(f-u).toLocaleString():"—"}</td></tr>`}).join("")}
<tr class="tot"><td>TOTAL</td><td></td><td></td><td></td><td>$${(e.milestones||[]).reduce((l,d)=>l+Number(d.payAmt||0),0).toLocaleString()}</td><td>$${i.toLocaleString()}</td><td>$${(r-i).toLocaleString()}</td></tr>
</tbody></table>
<h2>Quotes (Total: $${n.toLocaleString()} · Approved: $${o.toLocaleString()})</h2>
<table><thead><tr><th>Vendor</th><th>Scope</th><th>Code Ref</th><th>Amount</th><th>Status</th></tr></thead><tbody>
${(e.quotes||[]).map(l=>`<tr><td><b>${l.vendor}</b></td><td>${l.scope}</td><td style="color:#4A3FB0;font-size:9px">${l.ref}</td><td><b>$${Number(l.amount).toLocaleString()}</b></td><td class="${l.status==="approved"?"g":l.status==="new"?"b":"a"}">${l.status}</td></tr>`).join("")}
<tr class="tot"><td>TOTAL QUOTED</td><td></td><td></td><td>$${n.toLocaleString()}</td><td></td></tr>
<tr class="appr"><td>✓ APPROVED TOTAL</td><td></td><td></td><td>$${o.toLocaleString()}</td><td></td></tr>
</tbody></table>
<h2>Inspections (${(e.inspections||[]).length})</h2>
<table><thead><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th><th>Code Refs</th><th>AHJ</th></tr></thead><tbody>
${(e.inspections||[]).map(l=>`<tr><td><b>${l.inspDate?new Date(l.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—"}</b></td><td>${l.name}</td><td>${Ko(l.inspTime)}</td><td>${l.location||"—"}</td><td style="color:#4A3FB0;font-size:9px">${l.refs||"—"}</td><td>${l.ahj||"—"}</td></tr>`).join("")}
</tbody></table>
<div class="footer">Livio Building Systems &nbsp;·&nbsp; ${e.name} &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString()}</div>
</body></html>`,c=window.open("","_blank");if(!c){P("⚠ Pop-up blocked — allow pop-ups for this site");return}c.document.write(s),c.document.close(),setTimeout(()=>{c.focus(),c.print()},600),P("📕 Report opened — use Print → Save as PDF")}function eg(){const e=B();if(!e){P("⚠ No project selected");return}P("📘 Generating Word document…");const t=(e.milestones||[]).filter(c=>c.status==="done").length,n=(e.quotes||[]).reduce((c,l)=>c+Number(l.amount||0),0),o='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;margin:40px}h1{font-size:18pt}h2{font-size:12pt;border-bottom:1pt solid #1A6BC4;color:#1A6BC4;margin-top:18pt}table{border-collapse:collapse;width:100%;font-size:9pt}th{background:#0C1B2E;color:white;padding:5pt 8pt;text-align:left}td{border:0.5pt solid #e0ddd5;padding:4pt 8pt}</style></head><body><h1>'+e.name+'</h1><p style="color:#6b6a64;font-size:9pt">'+(e.address||"")+" | Permit: "+(e.permit||"—")+" | APN: "+(e.apn||"—")+" | Livio Building Systems</p><h2>Works at Site</h2><table><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr>"+(e.works||[]).map(c=>"<tr><td><b>"+c.name+"</b><br><small>"+(c.notes||"")+"</small></td><td>"+c.ref+"</td><td>"+(c.contractor||"—")+"</td><td>"+c.status+"</td><td>"+c.pct+"%</td></tr>").join("")+"</table><h2>Milestones ("+t+"/"+(e.milestones||[]).length+" Achieved)</h2><table><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th></tr>"+(e.milestones||[]).map(c=>"<tr><td><b>"+c.name+"</b></td><td>"+c.ref+"</td><td>"+J(c.date)+"</td><td>"+c.status+"</td><td>"+(c.payAmt?"$"+Number(c.payAmt).toLocaleString():"—")+"</td></tr>").join("")+"</table><h2>Quotes (Total: $"+n.toLocaleString()+")</h2><table><tr><th>Vendor</th><th>Scope</th><th>Amount</th><th>Status</th></tr>"+(e.quotes||[]).map(c=>"<tr><td><b>"+c.vendor+"</b></td><td>"+c.scope+"</td><td>$"+Number(c.amount).toLocaleString()+"</td><td>"+c.status+"</td></tr>").join("")+"</table><h2>Inspections</h2><table><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th></tr>"+(e.inspections||[]).map(c=>"<tr><td>"+(c.inspDate?new Date(c.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—")+"</td><td>"+c.name+"</td><td>"+Ko(c.inspTime)+"</td><td>"+(c.location||"—")+"</td></tr>").join("")+"</table></body></html>",i=new Blob(["\uFEFF"+o],{type:"application/msword"}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=e.name.replace(/\s+/g,"_")+".doc",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r),P("📘 Word document downloaded")}function tg(){const e=B();if(!e){P("⚠ No project selected");return}if(P("📊 Building PowerPoint… please wait",5e3),window.PptxGenJS)zd(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js",t.onload=()=>{typeof PptxGenJS<"u"?zd(e):P("⚠ PowerPoint library failed to load")},t.onerror=()=>P("⚠ Could not load PowerPoint library — check internet connection"),document.head.appendChild(t)}}function zd(e){try{const t=new PptxGenJS;t.layout="LAYOUT_WIDE",t.title=e.name+" — Livio Building Systems",t.author="Livio Building Systems";const n="0C1B2E",o="1A6BC4",i="2D6A0F",r="A86200",s="9B1F1F",c="FFFFFF",l="6B6A64",d="F4F3EF",u="162438",f=(e.milestones||[]).filter(N=>N.status==="done").length,p=(e.quotes||[]).reduce((N,_)=>N+Number(_.amount||0),0),g=(e.quotes||[]).filter(N=>N.status==="approved").reduce((N,_)=>N+Number(_.amount||0),0),w=(e.milestones||[]).reduce((N,_)=>N+(_.progressPayments||[]).filter(U=>U.paid).reduce((U,I)=>U+Number(I.amount||0),0),0),y=(e.milestones||[]).reduce((N,_)=>N+(_.progressPayments||[]).reduce((U,I)=>U+Number(I.amount||0),0),0),b=(N,_,U)=>{N.addShape(t.shapes.RECTANGLE,{x:0,y:0,w:13.3,h:.68,fill:{color:n},line:{color:n}}),N.addText(_,{x:.3,y:0,w:10,h:.68,fontSize:13,bold:!0,color:c,charSpacing:1.5,valign:"middle",margin:0}),U&&N.addText(U,{x:9.5,y:0,w:3.6,h:.68,fontSize:10,color:"8AAAC8",align:"right",valign:"middle",margin:0})};let m=t.addSlide();m.background={color:n},m.addShape(t.shapes.RECTANGLE,{x:0,y:0,w:.18,h:7.5,fill:{color:o},line:{color:o}}),m.addText("LIVIO BUILDING SYSTEMS",{x:.5,y:1.4,w:11,h:.4,fontSize:10,bold:!0,color:"8AAAC8",charSpacing:3,margin:0}),m.addText(e.name,{x:.5,y:1.88,w:11,h:1.3,fontSize:42,bold:!0,color:c,fontFace:"Arial Black",margin:0}),m.addText(e.type||"Construction Project",{x:.5,y:3.25,w:11,h:.55,fontSize:18,color:"8AAAC8",italic:!0,margin:0}),m.addShape(t.shapes.RECTANGLE,{x:.5,y:3.95,w:4.5,h:.05,fill:{color:o},line:{color:o}}),m.addText(e.address||"",{x:.5,y:4.12,w:11,h:.35,fontSize:13,color:"8AAAC8",margin:0}),m.addText("Permit: "+(e.permit||"—")+"   ·   APN: "+(e.apn||"—"),{x:.5,y:4.5,w:11,h:.35,fontSize:12,color:"8AAAC8",margin:0}),m.addShape(t.shapes.RECTANGLE,{x:0,y:6.9,w:13.3,h:.6,fill:{color:u},line:{color:u}}),m.addText("CONSTRUCTION MANAGEMENT  ·  CALIFORNIA BUILDING CODE COMPLIANT  ·  "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),{x:.3,y:6.9,w:12.7,h:.6,fontSize:9,color:"8AAAC8",valign:"middle",charSpacing:1,margin:0}),m=t.addSlide(),m.background={color:d},b(m,"PROJECT OVERVIEW & KEY METRICS"),[{l:"WORKS ACTIVE",v:String((e.works||[]).filter(N=>["active","inprogress","starting"].includes(N.status)).length),c:r,bg:"FEF3E2"},{l:"MILESTONES",v:f+"/"+(e.milestones||[]).length,c:"0D6E58",bg:"E2F5EF"},{l:"TOTAL QUOTED",v:"$"+p.toLocaleString(),c:o,bg:"E8F2FC"},{l:"APPROVED",v:"$"+g.toLocaleString(),c:i,bg:"ECF5E3"},{l:"RECEIVED",v:"$"+w.toLocaleString(),c:i,bg:"ECF5E3"},{l:"BALANCE DUE",v:"$"+(y-w).toLocaleString(),c:y>w?s:i,bg:y>w?"FDEAEA":"ECF5E3"}].forEach((N,_)=>{const U=.3+_%3*4.25,I=.88+Math.floor(_/3)*1.7;m.addShape(t.shapes.RECTANGLE,{x:U,y:I,w:4,h:1.5,fill:{color:N.bg},line:{color:"E0DDD5",width:.5}}),m.addShape(t.shapes.RECTANGLE,{x:U,y:I,w:4,h:.07,fill:{color:N.c},line:{color:N.c}}),m.addText(N.l,{x:U+.14,y:I+.12,w:3.72,h:.3,fontSize:9,bold:!0,color:l,charSpacing:.5,margin:0}),m.addText(N.v,{x:U+.1,y:I+.38,w:3.8,h:.85,fontSize:32,bold:!0,color:n,fontFace:"Arial Black",margin:0})}),m=t.addSlide(),m.background={color:d},b(m,"WORKS AT SITE","CBC 2022 · CalOSHA · ACI 318");const x=[{text:"Work Item",options:{bold:!0,color:c,fill:{color:n}}},{text:"CBC Ref.",options:{bold:!0,color:c,fill:{color:n}}},{text:"Contractor",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}},{text:"Progress",options:{bold:!0,color:c,fill:{color:n}}}],E=(e.works||[]).map(N=>{const _={complete:i,caloshahold:s,active:o,inprogress:r,starting:"0D6E58"};return[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.ref,options:{color:"4A3FB0",fontSize:9}},{text:N.contractor||"—",options:{fontSize:9}},{text:N.status,options:{color:_[N.status]||l,fontSize:9}},{text:N.pct+"%",options:{bold:!0,color:_[N.status]||l,fontSize:10}}]});m.addTable([x,...E],{x:.3,y:.82,w:12.7,colW:[4.2,2,3,2.2,1.3],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.42}),m=t.addSlide(),m.background={color:d},b(m,"PROJECT MILESTONES","CBC §105 · §110 · §111");const C=[{text:"Milestone",options:{bold:!0,color:c,fill:{color:n}}},{text:"CBC Ref.",options:{bold:!0,color:c,fill:{color:n}}},{text:"Date",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}},{text:"Contract",options:{bold:!0,color:c,fill:{color:n}}},{text:"Received",options:{bold:!0,color:c,fill:{color:i}}},{text:"Balance",options:{bold:!0,color:c,fill:{color:s}}}],k=(e.milestones||[]).map(N=>{const _=N.progressPayments||[],U=_.filter(H=>H.paid).reduce((H,X)=>H+Number(X.amount||0),0),I=_.reduce((H,X)=>H+Number(X.amount||0),0),V={done:i,inprogress:r,upcoming:"888780"};return[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.ref,options:{color:"4A3FB0",fontSize:9}},{text:J(N.date),options:{fontSize:9}},{text:N.status,options:{color:V[N.status]||l,fontSize:9}},{text:N.payAmt?"$"+Number(N.payAmt).toLocaleString():"—",options:{bold:!0,fontSize:10}},{text:I?"$"+U.toLocaleString():"—",options:{color:i,bold:!0,fontSize:10}},{text:I?"$"+(I-U).toLocaleString():"—",options:{color:I-U>0?s:i,bold:!0,fontSize:10}}]});m.addTable([C,...k],{x:.3,y:.82,w:12.7,colW:[3.2,1.7,1.4,1.5,1.8,1.8,1.3],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.4}),m=t.addSlide(),m.background={color:d},b(m,"QUOTES RECEIVED","CSI Divisions · California Codes");const j=[{text:"Vendor",options:{bold:!0,color:c,fill:{color:n}}},{text:"Scope",options:{bold:!0,color:c,fill:{color:n}}},{text:"CSI",options:{bold:!0,color:c,fill:{color:n}}},{text:"Amount",options:{bold:!0,color:c,fill:{color:n}}},{text:"Status",options:{bold:!0,color:c,fill:{color:n}}}],$=(e.quotes||[]).map(N=>{const _={approved:i,review:o,new:"0D6E58",negotiating:r};return[{text:N.vendor,options:{bold:!0,fontSize:10}},{text:N.scope,options:{fontSize:9}},{text:N.csi,options:{fontSize:9}},{text:"$"+Number(N.amount).toLocaleString(),options:{bold:!0,fontSize:11}},{text:N.status,options:{color:_[N.status]||l,bold:N.status==="approved",fontSize:9}}]}),A=[{text:"TOTAL QUOTED",options:{bold:!0,color:c,fill:{color:n}}},{text:"",options:{fill:{color:n}}},{text:"",options:{fill:{color:n}}},{text:"$"+p.toLocaleString(),options:{bold:!0,color:c,fill:{color:n}}},{text:"",options:{fill:{color:n}}}],S=[{text:"APPROVED TOTAL",options:{bold:!0,color:c,fill:{color:i}}},{text:"",options:{fill:{color:i}}},{text:"",options:{fill:{color:i}}},{text:"$"+g.toLocaleString(),options:{bold:!0,color:c,fill:{color:i}}},{text:"",options:{fill:{color:i}}}];m.addTable([j,...$,A,S],{x:.3,y:.82,w:12.7,colW:[3,4.6,1.4,2,1.7],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.44}),m=t.addSlide(),m.background={color:d},b(m,"INSPECTIONS SCHEDULED","CBC §110 · CalOSHA");const D=[{text:"Inspection",options:{bold:!0,color:c,fill:{color:n}}},{text:"Date",options:{bold:!0,color:c,fill:{color:n}}},{text:"Time",options:{bold:!0,color:c,fill:{color:n}}},{text:"Location",options:{bold:!0,color:c,fill:{color:n}}},{text:"Code Refs",options:{bold:!0,color:c,fill:{color:n}}},{text:"AHJ",options:{bold:!0,color:c,fill:{color:n}}}],z={cupertino:"Cupertino",calosha:"CalOSHA",icc:"ICC-Cert."},T=(e.inspections||[]).map(N=>[{text:N.name,options:{bold:!0,fontSize:10}},{text:N.inspDate?new Date(N.inspDate+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",options:{fontSize:9}},{text:Ko(N.inspTime),options:{fontSize:9}},{text:N.location||"—",options:{fontSize:9}},{text:N.refs||"—",options:{fontSize:8,color:"4A3FB0"}},{text:z[N.ahj]||N.ahj||"—",options:{fontSize:9}}]);m.addTable([D,...T],{x:.3,y:.82,w:12.7,colW:[3.8,1.6,1.2,2.8,2.1,1.2],border:{pt:.5,color:"E0DDD5"},fill:{color:c},fontFace:"Arial",fontSize:10,rowH:.44});const Y=e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_Dashboard.pptx";t.writeFile({fileName:Y}).then(()=>P("📊 PowerPoint downloaded successfully!")).catch(N=>{console.error(N),P("⚠ Download failed — "+N.message)})}catch(t){console.error("PPTX error:",t),P("⚠ PowerPoint error: "+t.message)}}function ng(e){const t=B();if(!t){P("⚠ No project selected");return}const n=(t.quotes||[]).filter(d=>d.status==="approved"),o=e?n.filter(d=>d.id===e):n;if(!o.length){P("⚠ No approved quotes to export");return}let i=0,r=0;n.forEach(d=>{i+=Number(d.amount||0),(t.invoices||[]).filter(u=>u.quoteId===d.id&&u.approvalStatus==="approved").forEach(u=>{u.paid?r+=Number(u.amount||0):r+=(u.partialPayments||[]).reduce((f,p)=>f+Number(p.amount||0),0)})});const s=o.map(function(d){const u=(t.invoices||[]).filter(C=>C.quoteId===d.id&&C.approvalStatus==="approved"),f=(t.vendors||[]).find(C=>C.quoteId===d.id),p=f?f.milestones||[]:[],g=u.reduce(function(C,k){return k.paid?C+Number(k.amount||0):C+(k.partialPayments||[]).reduce(function(j,$){return j+Number($.amount||0)},0)},0),w=Number(d.amount||0)-g,y=d.amount?Math.min(100,Math.round(g/Number(d.amount)*100)):0,b=u.reduce(function(C,k){return C+(k.files||[]).length},0),m=u.reduce(function(C,k){return C+(k.lienFiles||[]).length},0);let v="";u.length?u.forEach(function(C,k){const j=C.paid?"#EDF8E5":k%2===0?"#fff":"#fafaf8",$=p.find(function(T){return T.id===C.milestoneId}),A=C.partialPayments||[],S=C.paid?Number(C.amount||0):A.reduce(function(T,Y){return T+Number(Y.amount||0)},0),D=Number(C.amount||0)-S,z=A.length?A.map(function(T){return'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(T.amount||0).toLocaleString()+(T.date?" &middot; "+J(T.date):"")+"</div>"+(T.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+T.txnNo+"</strong></div>":"")+((T.files||[]).length?'<div style="font-size:8px;color:#555;margin-top:1px">&#128206; '+(T.files||[]).length+" supporting file(s)</div>":"")+"</div>"}).join(""):C.paid?'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; Full payment'+(C.paidDate?" &middot; "+J(C.paidDate):"")+"</div>"+(C.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+C.txnNo+"</strong></div>":"")+"</div>":"";v+='<tr style="background:'+j+'"><td style="padding:5px 10px 5px 14px;font-size:10px;color:#333;border-bottom:1px solid #eee"><strong>'+(C.invoiceNo||"Invoice")+"</strong>"+($?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128205; '+$.name+"</div>":"")+(C.description?'<div style="font-size:9px;color:#999">'+C.description+"</div>":"")+z+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(C.amount||0).toLocaleString()+'</td><td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(C.invoiceDate?J(C.invoiceDate):"&mdash;")+'</td><td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(C.dueDate?J(C.dueDate):"&mdash;")+'</td><td style="padding:5px 10px;border-bottom:1px solid #eee">'+(C.paid?'<span style="color:#2D6A0F;font-weight:700;font-size:10px">&#10003; Paid</span>':S>0?'<span style="color:#A86200;font-size:10px">Partial</span>':'<span style="color:#9B1F1F;font-size:10px">Pending</span>')+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:#2D6A0F">$'+S.toLocaleString()+'</td><td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:'+(D>0?"#9B1F1F":"#2D6A0F")+'">$'+D.toLocaleString()+"</td></tr>"}):v='<tr><td colspan="7" style="padding:10px 14px;font-size:11px;color:#999">No approved invoices yet for this subcontractor.</td></tr>';const x=y===100?"#4E9A1A":y>60?"#1A6BC4":"#D98E00",E=w>0?"#9B1F1F":"#2D6A0F";return'<div style="margin-bottom:28px;page-break-inside:avoid"><div style="background:#0C1B2E;color:#fff;padding:10px 14px;border-radius:6px 6px 0 0;display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:13px;font-weight:700">'+d.vendor+'</div><div style="font-size:10px;color:#8AAAC8">'+d.scope+(d.csi?" &nbsp;&middot;&nbsp; "+d.csi:"")+'</div></div><div style="text-align:right"><div style="font-size:16px;font-weight:700">$'+Number(d.amount).toLocaleString()+'</div><div style="font-size:10px;color:#8AAAC8">'+y+'% paid</div></div></div><table style="width:100%;border-collapse:collapse;border:1px solid #e0ddd5;border-top:none"><thead><tr style="background:#162438"><th style="padding:6px 10px 6px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice / Milestone</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Amount</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice Date</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Due Date</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Status</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#2D6A0F;text-align:left">Paid</th><th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#F09595;text-align:left">Balance</th></tr></thead><tbody>'+v+'</tbody></table><div style="border:1px solid #e0ddd5;border-top:none;background:#f4f3ef;padding:12px 16px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b6a64;margin-bottom:10px">Payment Summary &mdash; '+d.vendor+'</div><div style="display:flex;border:1px solid #e0ddd5;border-radius:6px;overflow:hidden;background:#fff"><div style="flex:1;padding:10px 12px;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Contract Value</div><div style="font-size:18px;font-weight:700;color:#0C1B2E">$'+Number(d.amount).toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;background:#ECF5E3;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#2D6A0F;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">&#10003; Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$'+g.toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;background:'+(w>0?"#FDEAEA":"#ECF5E3")+';border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:'+E+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Balance Due</div><div style="font-size:18px;font-weight:700;color:'+E+'">$'+w.toLocaleString()+'</div></div><div style="flex:1;padding:10px 12px;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Progress</div><div style="font-size:18px;font-weight:700;color:'+(y===100?"#2D6A0F":"#0C1B2E")+'">'+y+'%</div><div style="height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-top:5px"><div style="height:100%;width:'+y+"%;background:"+x+';border-radius:3px"></div></div></div></div><div style="margin-top:8px;font-size:9px;color:#999;display:flex;gap:16px;flex-wrap:wrap;padding:0 2px"><span>Invoices: '+u.length+"</span><span>Proof documents: "+b+" file(s)</span><span>Lien waivers: "+m+" file(s)</span>"+(d.date?'<span style="margin-left:auto">Quote date: '+d.date+"</span>":"")+"</div></div></div>"}).join(""),c='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Payment Ledger &mdash; '+t.name+"</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>"+(e?o[0].vendor+" &mdash; Payment Statement":"Payment Ledger &mdash; All Subcontractors")+'</h1><div class="meta">'+t.name+" &nbsp;&middot;&nbsp; "+fe(t)+"<br>Livio Address: "+ee+"<br>Permit: "+(t.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+Ce+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</div>"+s+'<div style="margin-top:20px;font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+Ce+" &nbsp;&middot;&nbsp; "+ee+" &nbsp;&middot;&nbsp; "+t.name+" &nbsp;&middot;&nbsp; Generated "+new Date().toLocaleDateString()+"</div></body></html>",l=window.open("","_blank");if(!l){P("&#9888; Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(function(){l.focus(),l.print()},600),P("&#128424; Ledger report opened &mdash; Print &#8594; Save as PDF")}function og(e){const t=B();if(!t){P("⚠ No project selected");return}if(P("📊 Building Excel ledger…",4e3),window.XLSX)Ld(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>Ld(t,e),n.onerror=()=>P("⚠ Could not load Excel library — check internet connection"),document.head.appendChild(n)}}function Ld(e,t){try{const n=window.XLSX,o=n.utils.book_new(),i=(e.quotes||[]).filter(g=>g.status==="approved"),r=t?i.filter(g=>g.id===t):i;let s=0,c=0;i.forEach(g=>{s+=Number(g.amount||0),(g.payMilestones||[]).forEach(w=>{w.paid&&(c+=Number(w.amount||0))})});const l=[["PAYMENT LEDGER"],["Project:",e.name],["Project Address:",fe(e)],["Livio Address:",ee],["Permit:",e.permit||""],["Date:",new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})]],d=n.utils.aoa_to_sheet(l);d["!cols"]=[{wch:28},{wch:20}],n.utils.book_append_sheet(o,d,"Summary");const u=[["Subcontractor","Scope","CSI","Contract Amount","Payment Milestone","Milestone Amount","Due Date","Status","Date Paid","Balance","Proof Files","Lien Waiver"]];r.forEach(g=>{const w=g.payMilestones||[];if(!w.length)u.push([g.vendor,g.scope,g.csi||"",Number(g.amount||0),"(no milestones)","","","","",Number(g.amount||0),"",""]);else{w.forEach((b,m)=>{u.push([g.vendor,g.scope,g.csi||"",Number(g.amount||0),b.name,Number(b.amount||0),b.dueDate||"",b.paid?"Paid":"Pending",b.paidDate||"",b.paid?0:Number(b.amount||0),(b.files||[]).length,(b.lienFiles||[]).length])});const y=w.filter(b=>b.paid).reduce((b,m)=>b+Number(m.amount||0),0);u.push(["","","","","SUBTOTAL — "+g.vendor,"","","","",Number(g.amount||0)-y,"",""]),u.push([])}}),u.push(["TOTAL","","","","","","","","",s-c,"",""]);const f=n.utils.aoa_to_sheet(u);f["!cols"]=[{wch:28},{wch:30},{wch:8},{wch:18},{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}],n.utils.book_append_sheet(o,f,"Full Ledger"),r.forEach(g=>{const w=g.payMilestones||[],y=w.filter(x=>x.paid).reduce((x,E)=>x+Number(E.amount||0),0),b=[[g.vendor],["Scope:",g.scope],["CSI Division:",g.csi||""],["Contract Amount:",Number(g.amount||0)],["Total Paid:",y],["Balance Due:",Number(g.amount||0)-y],[],["Payment Milestone","Amount","Due Date","Status","Date Paid","Balance Due","Proof Files","Lien Waiver"]];w.forEach(x=>{b.push([x.name,Number(x.amount||0),x.dueDate||"",x.paid?"Paid":"Pending",x.paidDate||"",x.paid?0:Number(x.amount||0),(x.files||[]).length,(x.lienFiles||[]).length])}),w.length||b.push(["No payment milestones added yet."]),b.push([]),b.push(["TOTAL",Number(g.amount||0),"","","",Number(g.amount||0)-y,"",""]);const m=n.utils.aoa_to_sheet(b);m["!cols"]=[{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}];const v=g.vendor.replace(/[:\\\/\?\*\[\]]/g,"").slice(0,28);n.utils.book_append_sheet(o,m,v)});const p=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_PaymentLedger.xlsx";n.writeFile(o,p),P("📊 Excel ledger downloaded: "+p)}catch(n){console.error("Excel error:",n),P("⚠ Excel error: "+n.message)}}function ig(){const e=B();if(!e){P("⚠ No project selected");return}const t=e.milestones||[];if(!t.length){P("⚠ No milestones to export");return}const n=t.reduce((u,f)=>u+Number(f.payAmt||0),0),o=t.reduce((u,f)=>u+(f.progressPayments||[]).filter(p=>p.paid).reduce((p,g)=>p+Number(g.amount||0),0),0),r=t.reduce((u,f)=>u+(f.progressPayments||[]).reduce((p,g)=>p+Number(g.amount||0),0),0)-o,s=t.map(function(u,f){const p=u.progressPayments||[],g=p.filter(k=>k.paid).reduce((k,j)=>k+Number(j.amount||0),0),w=p.reduce((k,j)=>k+Number(j.amount||0),0),y=w-g,b=w?Math.min(100,Math.round(g/w*100)):0,m=f%2===0?"#fff":"#fafaf8",v={done:"#2D6A0F",inprogress:"#A86200",upcoming:"#6B6A64"},x={done:"Done",inprogress:"In Progress",upcoming:"Upcoming"},E=p.map(function(k,j){return'<tr style="background:'+(k.paid?"#F3FCF0":"#FEFDF9")+'"><td style="padding:4px 10px 4px 32px;font-size:10px;color:#555;border-bottom:1px solid #f0ede6" colspan="2"><span style="color:'+(k.paid?"#2D6A0F":"#ccc")+';margin-right:5px">'+(k.paid?"&#10003;":"&#9675;")+"</span>"+k.name+(k.dueDate?' <span style="color:#999;font-size:9px">Due: '+k.dueDate+"</span>":"")+'</td><td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">$'+Number(k.amount||0).toLocaleString()+'</td><td style="padding:4px 10px;font-size:10px;border-bottom:1px solid #f0ede6">'+(k.paid?'<span style="color:#2D6A0F;font-weight:600">&#10003; Paid</span>':'<span style="color:#A86200">Pending</span>')+'</td><td style="padding:4px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+(k.paidDate||"&mdash;")+'</td><td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">'+(k.paid?'<span style="color:#2D6A0F">$0</span>':'<span style="color:#9B1F1F">$'+Number(k.amount||0).toLocaleString()+"</span>")+'</td><td style="padding:4px 10px;font-size:9px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+((k.files||[]).length?"&#128206; "+(k.files||[]).length:"&mdash;")+"</td></tr>"}).join(""),C=b===100?"#4E9A1A":b>60?"#1A6BC4":"#D98E00";return'<tr style="background:'+m+';border-top:2px solid #e0ddd5"><td style="padding:9px 10px 9px 14px;border-bottom:1px solid #e0ddd5"><div style="display:flex;align-items:center;gap:7px"><div style="width:9px;height:9px;border-radius:50%;background:'+(u.status==="done"?"#4E9A1A":u.status==="inprogress"?"#D98E00":"#aaa")+';flex-shrink:0"></div><div><div style="font-size:12px;font-weight:700;color:#0C1B2E">'+u.name+"</div>"+(u.notes?'<div style="font-size:9px;color:#999">'+u.notes+"</div>":"")+'</div></div></td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="background:#EEEDFD;color:#4A3FB0;font-size:9px;font-weight:700;padding:2px 6px;border-radius:3px">'+u.ref+'</span></td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(u.payAmt?"$"+Number(u.payAmt).toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="color:'+(v[u.status]||"#555")+';font-size:10px;font-weight:700">'+(x[u.status]||u.status)+'</span></td><td style="padding:9px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(u.date||"&mdash;")+'</td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(w?"$"+g.toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;font-size:11px;font-weight:700;color:'+(y>0?"#9B1F1F":"#2D6A0F")+';border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(w?"$"+y.toLocaleString():"&mdash;")+'</td><td style="padding:9px 10px;border-bottom:1px solid #e0ddd5">'+(w?'<div style="width:70px;height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-bottom:2px"><div style="height:100%;width:'+b+"%;background:"+C+';border-radius:3px"></div></div><span style="font-size:9px;color:'+C+';font-weight:700">'+b+"%</span>":"&mdash;")+"</td></tr>"+E}).join(""),c='<tr style="background:#0C1B2E"><td style="padding:10px 14px;font-size:11px;font-weight:700;color:#fff" colspan="2">TOTAL</td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:#fff;white-space:nowrap">$'+n.toLocaleString()+'</td><td colspan="2"></td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:#9FE1CB;white-space:nowrap">$'+o.toLocaleString()+'</td><td style="padding:10px 10px;font-size:13px;font-weight:700;color:'+(r>0?"#F09595":"#9FE1CB")+';white-space:nowrap">$'+r.toLocaleString()+"</td><td></td></tr>",l='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Milestone Payment Report &mdash; '+e.name+'</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>Milestone Payment Report</h1><div class="meta">'+e.name+" &nbsp;&middot;&nbsp; "+fe(e)+"<br>Livio Address: "+ee+"<br>Permit: "+(e.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+(e.type||"")+" &nbsp;&middot;&nbsp; "+Ce+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+'</div><table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:18px"><thead><tr style="background:#0C1B2E"><th style="padding:8px 10px 8px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left;width:24%">Milestone</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">CBC Ref.</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Contract Amt.</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Status</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Target Date</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#2D6A0F;text-align:left">&#10003; Received</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#F09595;text-align:left">Balance</th><th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Progress</th></tr></thead><tbody>'+s+c+'</tbody></table><div style="font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+Ce+" &nbsp;&middot;&nbsp; "+ee+" &nbsp;&middot;&nbsp; "+e.name+" &nbsp;&middot;&nbsp; Generated "+new Date().toLocaleDateString()+"</div></body></html>",d=window.open("","_blank");if(!d){P("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(function(){d.focus(),d.print()},600),P("🖨 Milestone report opened — Print → Save as PDF")}function rg(){const e=B();if(!e){P("⚠ No project selected");return}if(P("📊 Building Excel…",3500),window.XLSX)Bd(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>Bd(e),t.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(t)}}function Bd(e){try{const t=window.XLSX,n=t.utils.book_new(),o=e.milestones||[],i=[["MILESTONE PAYMENT LEDGER — "+e.name],["Project:",e.name,"","Project Address:",fe(e)],["Livio Address:",ee,"","Type:",e.type||""],["Permit:",e.permit||""],["Generated:",new Date().toLocaleDateString()],[],["Milestone","CBC Ref.","Target Date","Status","Contract Amount","Progress Payment","Amount","Due Date","Status","Date Received","Balance","Proof Files"]];let r=0,s=0,c=0;o.forEach(p=>{r+=Number(p.payAmt||0);const g=p.progressPayments||[],w=g.filter(b=>b.paid).reduce((b,m)=>b+Number(m.amount||0),0),y=g.reduce((b,m)=>b+Number(m.amount||0),0);s+=w,c+=y,g.length?(g.forEach((b,m)=>{i.push([m===0?p.name:"",m===0?p.ref:"",m===0&&p.date||"",m===0?p.status:"",m===0?Number(p.payAmt||0):"",b.name,Number(b.amount||0),b.dueDate||"",b.paid?"Paid":"Pending",b.receivedDate||"",b.paid?0:Number(b.amount||0),(b.files||[]).length])}),i.push(["","","","","SUBTOTAL — "+p.name,"","","","","",y-w,""]),i.push([])):i.push([p.name,p.ref,p.date||"",p.status,Number(p.payAmt||0),"(no progress payments)","","","","",Number(p.payAmt||0),""])}),i.push(["TOTAL","","","",r,"","","","","",c-s,""]);const l=t.utils.aoa_to_sheet(i);l["!cols"]=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:28},{wch:14},{wch:12},{wch:10},{wch:14},{wch:14},{wch:12}],t.utils.book_append_sheet(n,l,"Milestone Ledger");const d=[["MILESTONE PAYMENT SUMMARY"],[],["Milestone","CBC Ref.","Date","Status","Contract Amt.","Total Scheduled","Total Received","Balance Due","Progress %"]];o.forEach(p=>{const g=p.progressPayments||[],w=g.filter(m=>m.paid).reduce((m,v)=>m+Number(v.amount||0),0),y=g.reduce((m,v)=>m+Number(v.amount||0),0),b=y?Math.round(w/y*100):0;d.push([p.name,p.ref,p.date||"",p.status,Number(p.payAmt||0),y,w,y-w,b+"%"])}),d.push([]),d.push(["TOTAL","","","",r,c,s,c-s,c?Math.round(s/c*100)+"%":"0%"]);const u=t.utils.aoa_to_sheet(d);u["!cols"]=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:18},{wch:16},{wch:14},{wch:12}],t.utils.book_append_sheet(n,u,"Summary");const f=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_MilestoneLedger.xlsx";t.writeFile(n,f),P("📊 Milestone Excel downloaded: "+f)}catch(t){console.error(t),P("⚠ Excel error: "+t.message)}}function fl(){const e=B();if(!e)return;const t=e.invoices||[],n=(e.quotes||[]).filter(f=>f.status==="approved");h("ct-inv").textContent=t.length;const o=(e.vendors||[]).reduce((f,p)=>f+Number(p.amount||0),0),i=t.reduce((f,p)=>f+Number(p.amount||0),0),r=t.filter(f=>f.paid).reduce((f,p)=>f+Number(p.amount||0),0),s=t.filter(f=>!f.paid).reduce((f,p)=>f+Number(p.amount||0),0);h("inv-contract").textContent=F(o),h("inv-invoiced").textContent=F(i),h("inv-paid").textContent=F(r),h("inv-due").textContent=F(s);const c=h("inv-content");if(!c)return;if(!t.length){c.innerHTML='<div class="empty"><div class="empty-ic">🧾</div>No invoices yet. Click + Add Invoice to start tracking.</div>';const f=h("inv-chart-row");f&&(f.style.display="none");return}const l=h("inv-chart-row");l&&(l.style.display="grid"),t.forEach(f=>W(f.files||[]));const d={};t.forEach(f=>{const p=f.vendor||"Unassigned";d[p]||(d[p]={vendor:p,quoteId:f.quoteId,invs:[]}),d[p].invs.push(f)});const u=Object.values(d);c.innerHTML=u.map(f=>{const p=n.find(x=>x.id===f.quoteId)||null,g=p?Number(p.amount||0):0,w=f.invs.reduce((x,E)=>x+Number(E.amount||0),0),y=f.invs.filter(x=>x.paid).reduce((x,E)=>x+Number(E.amount||0),0),b=f.invs.filter(x=>!x.paid).reduce((x,E)=>x+Number(E.amount||0),0),m=g?Math.min(100,Math.round(w/g*100)):0,v=f.invs.map((x,E)=>{const C=E%2===0?"#fff":"var(--bg)",k=`<div style="display:flex;flex-direction:column;gap:4px">
        ${(x.files||[]).length?(x.files||[]).map(D=>`<div style="display:flex;align-items:center;gap:5px;background:var(--amber-l);border:1px solid #F5D9A0;border-radius:5px;padding:3px 8px">
              <span style="font-size:12px">${rt(D.name)}</span>
              <span style="font-size:10px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px" title="${D.name}">${D.name}</span>
              <button class="a-dl" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0" onclick="dlFile('${D.id}')" title="Download">⬇</button>
            </div>`).join(""):'<span style="font-size:10px;color:var(--muted);font-style:italic">No files yet</span>'}
        <button class="btn btn-xs" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0;font-size:10px;padding:3px 8px;margin-top:2px;text-align:left" onclick="openModal('invfiles','${x.id}')">
          📎 ${(x.files||[]).length?"Add / Edit Files":"Attach Invoice"}
        </button>
      </div>`,j=x.approvalStatus||"pending",$=j==="approved"?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:7px;padding:7px 10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:11px;font-weight:700;color:var(--green)">✓ Approved</span>
              <button onclick="rejectInvoice('${x.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button>
            </div>
            <span style="font-size:9px;color:var(--green);opacity:.8">Visible in Payments tab</span>
          </div>`:j==="rejected"?`<div style="background:var(--red-l);border:1px solid #F5C0C0;border-radius:7px;padding:7px 10px">
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
          </div>`,A=(e.vendors||[]).find(D=>D.quoteId===x.quoteId),S=A?(A.milestones||[]).find(D=>D.id===x.milestoneId):null;return`<tr style="background:${C};border-left:3px solid ${j==="approved"?"var(--green-m)":j==="rejected"?"var(--red-m)":"var(--border)"}">
        <td style="padding:8px 10px">
          <div style="font-size:12px;font-weight:600;color:var(--navy)">${x.invoiceNo||"—"}</div>
          ${S?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${S.name}</div>`:""}
        </td>
        <td style="padding:8px 10px;font-size:11px;color:var(--text)">${x.description||"—"}</td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${x.invoiceDate?J(x.invoiceDate):"—"}</td>
        <td style="padding:8px 10px;font-size:10px;color:${x.dueDate&&new Date(x.dueDate+"T12:00:00")<new Date&&!x.paid?"var(--red)":"var(--muted)"};white-space:nowrap">${x.dueDate?J(x.dueDate):"—"}</td>
        <td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--text)">${F(x.amount||0)}</span></td>
        <td style="padding:6px 8px">${$}</td>
        <td style="padding:6px 8px">${k}</td>
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
            <span style="font-weight:700;color:var(--blue)">${F(D.amount)}</span>
            <span style="color:var(--muted)">${D.date?J(D.date):""}</span>
            ${D.note?`<span style="color:var(--text)">${D.note}</span>`:""}
            <button onclick="deleteInvPayment('${x.id}','${D.id}')" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:11px;padding:0 2px" title="Remove">×</button>
          </div>`).join("")}
        </div>
        <div style="margin-top:4px;font-size:10px;color:var(--muted)">Total paid: <strong style="color:var(--green)">${F((x.payments||[]).reduce((D,z)=>D+Number(z.amount||0),0))}</strong></div>
      </td></tr>`:""}
      `}).join("");return`<div class="panel pay-vendor-card" data-vendor="${(p==null?void 0:p.id)||f.quoteId||""}" style="margin-bottom:16px">
      <!-- Vendor header -->
      <div style="background:var(--navy);padding:11px 16px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span style="font-size:14px;font-weight:700;color:#fff">${f.vendor}</span>
          ${p?`<span style="font-size:11px;color:#8AAAC8;margin-left:8px">${p.scope||""}</span>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          ${g?`<span style="font-size:11px;color:#8AAAC8">Contract: <strong style="color:#fff">${F(g)}</strong></span>`:""}
          <span style="font-size:11px;color:#8AAAC8">Invoiced: <strong style="color:#fff">${F(w)}</strong></span>
        </div>
      </div>
      <!-- Progress bar -->
      <div style="padding:10px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.4px">vs Contract</span>
            <span style="font-size:11px;font-weight:700;color:${m>100?"var(--red)":"var(--text)"}">${m}%</span>
          </div>
          <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${Math.min(m,100)}%;background:${m>100?"var(--red-m)":m>80?"var(--amber-m)":"var(--blue-m)"};border-radius:3px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:16px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">✓ Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${F(y)}</div></div>
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Due</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${b>0?"var(--red)":"var(--green)"}">${F(b)}</div></div>
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
          <td colspan="4" style="padding:8px 10px;font-size:11px;font-weight:700;color:#fff">TOTAL — ${f.invs.length} invoice(s)</td>
          <td style="padding:8px 10px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff">${F(w)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:#9FE1CB">✓ ${F(y)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${b>0?"#F09595":"#9FE1CB"}">Due: ${F(b)}</td>
          <td></td>
        </tr>
      </table>
    </div>`}).join("")}function ag(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);if(n){if(!n.vcId&&n.quoteId){const o=(t.vendors||[]).find(i=>i.quoteId===n.quoteId);o&&(n.vcId=o.id)}n.approvalStatus="approved",te(),oe(),P("✓ Invoice approved — now visible in Payments")}}function sg(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);n&&(n.approvalStatus="rejected",te(),oe(),P("✗ Invoice rejected"))}function lg(e){h("invpay-inv-id").value=e,h("invpay-date").value=new Date().toISOString().slice(0,10),h("invpay-amount").value="",h("invpay-note").value="";const t=h("invpay-proof");t&&(t.value=""),h("mo-inv-payment").classList.add("open")}function er(){h("mo-inv-payment").classList.remove("open")}function vu(){const e=h("invpay-inv-id").value,t=h("invpay-date").value,n=parseFloat(h("invpay-amount").value||"0"),o=h("invpay-note").value.trim();if(!t||!n){P("⚠ Date and amount are required");return}const i=B();if(!i)return;const r=(i.invoices||[]).find(c=>c.id===e);if(!r)return;r.payments||(r.payments=[]);const s=h("invpay-proof");if(s&&s.files&&s.files[0]){const c=s.files[0],l=new FileReader;l.onload=function(d){const u="pp_"+Math.random().toString(36).slice(2,10);r.payments.push({id:u,date:t,amount:n,note:o,proofName:c.name,proofData:d.target.result}),te(),er(),oe(),P("💵 Payment recorded: "+F(n))},l.readAsDataURL(c)}else{const c="pp_"+Math.random().toString(36).slice(2,10);r.payments.push({id:c,date:t,amount:n,note:o}),te(),er(),oe(),P("💵 Payment recorded: "+F(n))}}function dg(e,t){if(!confirm("Remove this payment record?"))return;const n=B();if(!n)return;const o=(n.invoices||[]).find(i=>i.id===e);o&&(o.payments=(o.payments||[]).filter(i=>i.id!==t),te(),oe(),P("🗑 Payment record removed"))}function cg(e){const t=h("f-inv-manual-vendor-other-row");t&&(t.style.display=e.value==="__other__"?"":"none")}function Qa(e){const t=document.getElementById("inv-src-contract"),n=document.getElementById("inv-src-manual"),o=document.getElementById("inv-contract-section"),i=document.getElementById("inv-manual-section");!t||!n||(e==="contract"?(t.style.background="var(--navy)",t.style.color="#fff",t.style.borderColor="var(--navy)",n.style.background="#fff",n.style.color="var(--muted)",n.style.borderColor="var(--border)",o&&(o.style.display=""),i&&(i.style.display="none")):(n.style.background="var(--navy)",n.style.color="#fff",n.style.borderColor="var(--navy)",t.style.background="#fff",t.style.color="var(--muted)",t.style.borderColor="var(--border)",o&&(o.style.display="none"),i&&(i.style.display="")))}function gu(e){const t=B();if(!t)return;const n=h("f-inv-milestone");if(!n)return;let o;if(e&&e.startsWith("vc_")){const s=e.replace("vc_","");o=(t.vendors||[]).find(c=>c.id===s)}else if(e&&e!=="__other__"&&(o=(t.vendors||[]).find(s=>s.quoteId===e),!o)){const s=(t.quotes||[]).find(c=>c.id===e);s&&(o=(t.vendors||[]).find(c=>c.vendor===s.vendor||s.vendor&&c.vendor&&c.vendor.toLowerCase()===s.vendor.toLowerCase()))}const i=o&&o.milestones||[];n.innerHTML='<option value="">-- Select milestone --</option>'+i.map(s=>`<option value="${s.id}">${s.name}${s.amount?" — $"+Number(s.amount||0).toLocaleString():""}</option>`).join("");const r=h("f-inv-ms-info");r&&(r.style.display="none"),!i.length&&e&&e!=="__other__"&&(n.innerHTML='<option value="">-- No milestones on this contract --</option>')}function pg(e,t){const n=B();if(!n)return;let o;if(t&&t.startsWith("vc_")){const s=t.replace("vc_","");o=(n.vendors||[]).find(c=>c.id===s)}else o=(n.vendors||[]).find(s=>s.quoteId===t);const i=o?(o.milestones||[]).find(s=>s.id===e):null,r=h("f-inv-ms-info");if(r&&i){r.style.display="",r.textContent="Milestone value: $"+Number(i.amount||0).toLocaleString()+(i.dueDate?" · Due: "+i.dueDate:"");const s=h("f-inv-amt");s&&!s.value&&(s.value=i.amount||"")}else r&&(r.style.display="none")}function ug(e,t){const n=h("pay-pie-panel"),o=h("pay-pie-svg-wrap"),i=h("pay-pie-legend"),r=h("pay-filter-bar"),s=h("pay-vendor-checks");if(!n||!o||!i)return;if(!e.length){n.style.display="none",r&&(r.style.display="none");return}n.style.display="",r&&(r.style.display="none");const c=e.map(m=>{const x=(m.isManualGroup?m._manualInvs||[]:m.isQuoteGroup?m._quoteInvs||[]:(t.invoices||[]).filter($=>$.vcId===m.id&&$.approvalStatus==="approved")).reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((S,D)=>S+Number(D.amount||0),0),0),E=Number(m.amount||0),C=E?Math.min(100,Math.round(x/E*100)):0,k=C===100?"#2D6A0F":C>0?"#D98E00":"#9B1F1F",j=m.isQuoteGroup?"Approved Quote":m.isManualGroup?"Manual Invoices":"Vendor Contract";return{id:m.id,label:m.vendor.length>22?m.vendor.slice(0,20)+"…":m.vendor,value:E||1,paid:x,total:E,pct:C,color:k,badge:j}}),l=c.reduce((m,v)=>m+v.value,0),d=c.filter(m=>m.pct===100).length,u=90,f=90,p=76,g=38;let w="",y=-Math.PI/2;const b=Math.PI*2;c.forEach(m=>{const v=m.value/l*b,x=u+p*Math.cos(y),E=f+p*Math.sin(y),C=u+p*Math.cos(y+v),k=f+p*Math.sin(y+v),j=u+g*Math.cos(y+v),$=f+g*Math.sin(y+v),A=u+g*Math.cos(y),S=f+g*Math.sin(y),D=v>Math.PI?1:0,z="M "+x+" "+E+" A "+p+" "+p+" 0 "+D+" 1 "+C+" "+k+" L "+j+" "+$+" A "+g+" "+g+" 0 "+D+" 0 "+A+" "+S+" Z";w+='<path d="'+z+'" fill="'+m.color+'" stroke="#fff" stroke-width="2"/>',y+=v}),o.innerHTML='<svg viewBox="0 0 180 180" width="180" height="180" xmlns="http://www.w3.org/2000/svg">'+w+'<circle cx="'+u+'" cy="'+f+'" r="'+g+'" fill="#fff"/><text x="'+u+'" y="'+(f-9)+'" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#0C1B2E">'+d+"/"+c.length+'</text><text x="'+u+'" y="'+(f+8)+'" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b6a64">Fully Paid</text></svg>',i.innerHTML='<div style="display:flex;flex-direction:column;gap:4px">'+c.map(m=>'<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)"><div style="width:12px;height:12px;border-radius:50%;background:'+m.color+';flex-shrink:0"></div><div style="flex:1;min-width:0"><div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+m.label+'</div><div style="font-size:9px;color:var(--muted)">'+m.badge+" · $"+m.paid.toLocaleString()+" paid / $"+m.total.toLocaleString()+' total</div><div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:2px;width:120px"><div style="height:100%;width:'+m.pct+"%;background:"+m.color+';border-radius:2px"></div></div></div><span style="font-size:9px;font-weight:700;color:'+m.color+';flex-shrink:0">'+m.pct+"%</span></div>").join("")+"</div>",s&&(s.innerHTML="")}function fg(e,t,n,o){const i=t-n,r=t?Math.min(100,Math.round(n/t*100)):0,s=e.map((l,d)=>{var j;const u=l.isManualGroup?l._manualInvs||[]:l.isQuoteGroup?l._quoteInvs||[]:(o.invoices||[]).filter($=>$.vcId===l.id&&$.approvalStatus==="approved"),f=u.reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((S,D)=>S+Number(D.amount||0),0),0),p=Number(l.amount||0),g=p-f,w=p?Math.min(100,Math.round(f/p*100)):0,y=d%2===0?"#fff":"var(--bg)",b=l.isQuoteGroup?((j=(o.vendors||[]).find($=>$.quoteId===l.sourceQuoteId||$.vendor===l.vendor))==null?void 0:j.milestones)||[]:l.milestones||[],m=l.isManualGroup?`<button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerPDF('${String(l.vendor||"").replace(/'/g,"\\'")}')" title="PDF">🖨</button>
          <button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerExcel('${String(l.vendor||"").replace(/'/g,"\\'")}')" title="Excel">📊</button>`:l.isQuoteGroup?`<button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerPDF('${l.sourceQuoteId}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerExcel('${l.sourceQuoteId}')" title="Excel">📊</button>`:`<button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerPDF('${l.id}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerExcel('${l.id}')" title="Excel">📊</button>`,v=u.map($=>{var Y;const A=$.paid?Number($.amount||0):($.partialPayments||[]).reduce((N,_)=>N+Number(_.amount||0),0),S=Number($.amount||0)-A,D=((Y=b.find(N=>N.id===$.milestoneId))==null?void 0:Y.name)||(l.isManualGroup?"Manual / No Contract":"—"),z=[...$.partialPayments||[]];$.paid&&!z.length&&z.push({amount:$.amount,date:$.paidDate,full:!0});const T=z.map(N=>'<div style="display:flex;align-items:center;gap:6px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:4px;padding:3px 8px;margin-top:3px;flex-wrap:wrap"><span style="font-size:9px;font-weight:700;color:var(--green)">&#10003; $'+Number(N.amount||0).toLocaleString()+"</span>"+(N.date?'<span style="font-size:9px;color:var(--muted)">'+J(N.date)+"</span>":"")+'<span style="font-size:9px;color:var(--blue);background:var(--blue-l);padding:1px 6px;border-radius:3px">📍 '+D+"</span>"+(N.txnNo?'<span style="font-size:9px;color:var(--blue)">🔖 Txn: <strong>'+N.txnNo+"</strong></span>":"")+"</div>").join("");return`<tr style="background:${$.paid?"#F3FCF0":"#FFFBF0"}">
        <td style="padding:6px 14px 6px 28px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:9px;background:${$.paid?"var(--green)":"var(--amber)"};color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">${$.paid?"✓ PAID":"PARTIAL"}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${$.invoiceNo||"Invoice"}</span>
          </div>
          ${T}
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <span style="font-size:10px;font-weight:600;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:2px 8px;border-radius:4px;display:inline-block">📍 ${D}</span>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)"></td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;border-bottom:1px solid var(--border)">$${Number($.amount||0).toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">$${A.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:${S>0?"var(--red)":"var(--green)"};border-bottom:1px solid var(--border)">$${S.toLocaleString()}</td>
        <td colspan="2" style="border-bottom:1px solid var(--border)"></td>
      </tr>`}).join(""),x=(o.quotes||[]).find($=>u.some(A=>A.quoteId===$.id)),E=l.csi||l.trade||(x==null?void 0:x.csi)||"—",C=l.scope||l.trade||(x==null?void 0:x.scope)||"",k=u.length?`<div style="display:flex;flex-direction:column;gap:3px">${u.map($=>{const A=b.find(D=>D.id===$.milestoneId),S=(A==null?void 0:A.name)||(l.isManualGroup?"Manual":"");return S?`<span style="font-size:9px;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:1px 6px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px;display:block" title="${S}">📍 ${S}</span>`:""}).filter(Boolean).join("")}</div>`:'<span style="font-size:10px;color:var(--muted)">—</span>';return`<tr style="background:${y};border-left:3px solid var(--navy)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${l.vendor}</div>
        ${C?`<div style="font-size:10px;color:var(--muted);margin-top:1px">${C}</div>`:""}
        <div style="font-size:9px;color:var(--muted);margin-top:2px">${u.length} invoice${u.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px">
        ${k}
      </td>
      <td style="padding:10px 14px"><span class="badge ${E!=="—"?"b-teal":"b-gray"}">${E}</span></td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${p.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${f.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${g>0?"var(--red)":"var(--green)"}">$${g.toLocaleString()}</span></td>
      <td style="padding:10px 14px">
        <div style="display:flex;align-items:center;gap:7px">
          <div style="width:80px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
            <div style="height:100%;width:${w}%;background:${w===100?"var(--green-m)":w>60?"var(--blue-m)":"var(--amber-m)"};border-radius:3px;transition:.5s"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:${w===100?"var(--green)":"var(--text)"}">${w}%</span>
        </div>
      </td>
      <td style="padding:10px 14px">
        <div style="display:flex;gap:4px">${m}</div>
      </td>
    </tr>${v}`}).join(""),c=`<div style="display:flex;align-items:center;gap:7px"><div style="width:80px;height:6px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden;flex-shrink:0"><div style="height:100%;width:${r}%;background:${r===100?"#9FE1CB":"#85B7EB"};border-radius:3px"></div></div><span style="font-size:11px;font-weight:700;color:#fff">${r}%</span></div>`;return`<div style="overflow-x:auto">
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
        ${s}
        <tr style="background:var(--navy)">
          <td style="padding:11px 14px" colspan="3"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL — ${e.length} Vendor${e.length!==1?"s":""}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">$${t.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">$${n.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${i>0?"#F09595":"#9FE1CB"}">$${i.toLocaleString()}</span></td>
          <td style="padding:11px 14px">${c}</td>
          <td style="padding:11px 14px">
            <div style="display:flex;gap:4px">
              <span style="font-size:10px;color:#fff;opacity:.85">Use the row actions for each vendor ledger</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`}function mg(e){const t=B();if(!t){P("⚠ No project");return}let n=(t.vendors||[]).filter(d=>(t.invoices||[]).some(u=>u.vcId===d.id&&u.approvalStatus==="approved"));if(e&&(n=n.filter(d=>d.id===e)),!n.length){P("⚠ No vendor payment data");return}let o=0,i=0;n.forEach(d=>{o+=Number(d.amount||0),(t.invoices||[]).filter(u=>u.vcId===d.id&&u.approvalStatus==="approved").forEach(u=>{u.paid?i+=Number(u.amount||0):i+=(u.partialPayments||[]).reduce((f,p)=>f+Number(p.amount||0),0)})});const r=o-i,s=n.map((d,u)=>{const f=(t.invoices||[]).filter(b=>b.vcId===d.id&&b.approvalStatus==="approved"),p=f.reduce((b,m)=>m.paid?b+Number(m.amount||0):b+(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0),g=Number(d.amount||0)-p,w=d.amount?Math.min(100,Math.round(p/Number(d.amount)*100)):0;let y="";return f.forEach((b,m)=>{var $;const v=b.paid?"#EDF8E5":m%2===0?"#fff":"#fafaf8",x=(($=(d.milestones||[]).find(A=>A.id===b.milestoneId))==null?void 0:$.name)||"—",E=b.partialPayments||[],C=b.paid?Number(b.amount||0):E.reduce((A,S)=>A+Number(S.amount||0),0),k=Number(b.amount||0)-C,j=E.length?E.map(A=>'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(A.amount||0).toLocaleString()+(A.date?" &middot; "+J(A.date):"")+(A.txnNo?'<span style="color:#1A6BC4"> &middot; Txn: '+A.txnNo+"</span>":"")+"</div></div>").join(""):"";y+=`<tr style="background:${v}">
        <td style="padding:5px 8px 5px 24px;border-bottom:1px solid #eee;font-size:10px" colspan="2">
          <span style="background:${b.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;font-weight:700;margin-right:6px">${b.paid?"✓ PAID":"PARTIAL"}</span>
          <strong>${b.invoiceNo||"Invoice"}</strong> &nbsp;📍 ${x}
          ${j}
        </td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700">$${Number(b.amount||0).toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:#2D6A0F">$${C.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:${k>0?"#9B1F1F":"#2D6A0F"}">$${k.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:10px;color:#555">${w}%</td>
      </tr>`}),`<tr style="background:${u%2===0?"#fff":"#fafaf8"}">
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">${d.vendor}</td>
      <td style="padding:8px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${d.trade||d.csi||"—"}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">$${Number(d.amount||0).toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${p.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:${g>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${g.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:11px;font-weight:700;color:${w===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${w}%</td>
    </tr>${y}`}).join(""),c=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Payment Ledger — ${t.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1>
  <div class="meta">${t.name} &nbsp;·&nbsp; ${fe(t)}<br>Livio Address: ${ee}<br>Permit: ${t.permit||"—"} &nbsp;·&nbsp; ${Ce} &nbsp;·&nbsp; ${new Date().toLocaleDateString()}</div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade / CSI</th><th>Contract / Amount</th><th>✓ Paid</th><th>Balance Due</th><th>Status</th></tr></thead>
  <tbody>${s}
  <tr class="tot"><td colspan="2">TOTAL — ${n.length} Vendor${n.length>1?"s":""}</td><td>$${o.toLocaleString()}</td><td style="color:#9FE1CB">$${i.toLocaleString()}</td><td style="color:${r>0?"#F09595":"#9FE1CB"}">$${r.toLocaleString()}</td><td></td></tr>
  </tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${Ce} · ${ee} · ${t.name} · Generated ${new Date().toLocaleDateString()}</div>
  </body></html>`,l=window.open("","_blank");if(!l){P("⚠ Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(()=>{l.focus(),l.print()},600),P("🖨 Vendor Payment Ledger PDF")}function vg(e){const t=B();if(!t){P("⚠ No project");return}if(P("📊 Building Excel…",3e3),window.XLSX)Td(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>Td(t,e),n.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(n)}}function Td(e,t){try{const n=window.XLSX;let o=(e.vendors||[]).filter(u=>(e.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(t&&(o=o.filter(u=>u.id===t)),!o.length){P("⚠ No vendor payment data");return}const i=n.utils.book_new(),r=[["VENDOR PAYMENT LEDGER — "+e.name],["Project:",e.name,"","Project Address:",fe(e)],["Livio Address:",ee,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],[],["Vendor","Trade / CSI","Contract Amount","Paid","Balance Due","Status %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Inv. Status"]];let s=0,c=0;o.forEach(u=>{const f=(e.invoices||[]).filter(y=>y.vcId===u.id&&y.approvalStatus==="approved"),p=f.reduce((y,b)=>b.paid?y+Number(b.amount||0):y+(b.partialPayments||[]).reduce((m,v)=>m+Number(v.amount||0),0),0),g=Number(u.amount||0)-p,w=u.amount?Math.min(100,Math.round(p/Number(u.amount)*100)):0;s+=Number(u.amount||0),c+=p,f.length?f.forEach((y,b)=>{var E;const m=((E=(u.milestones||[]).find(C=>C.id===y.milestoneId))==null?void 0:E.name)||"",v=y.paid?Number(y.amount||0):(y.partialPayments||[]).reduce((C,k)=>C+Number(k.amount||0),0),x=Number(y.amount||0)-v;r.push([b===0?u.vendor:"",b===0&&(u.trade||u.csi)||"",b===0?Number(u.amount||0):"",b===0?p:"",b===0?g:"",b===0?w+"%":"",y.invoiceNo||"",m,Number(y.amount||0),v,x,y.paid?"Paid":"Partial"]),(y.partialPayments||[]).forEach(C=>{r.push(["","","","","","","  ↳ Partial","",Number(C.amount||0),Number(C.amount||0),0,C.date||""])})}):r.push([u.vendor,u.trade||u.csi||"",Number(u.amount||0),p,g,w+"%","","","","","",""]),r.push([])}),r.push(["TOTAL","","",s,c,s-c,"","","","","",""]);const l=n.utils.aoa_to_sheet(r);l["!cols"]=[{wch:26},{wch:16},{wch:16},{wch:14},{wch:14},{wch:10},{wch:14},{wch:20},{wch:14},{wch:12},{wch:14},{wch:10}],n.utils.book_append_sheet(i,l,"Payment Ledger");const d=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+(t?"_VendorLedger":"_AllVendorLedger")+".xlsx";n.writeFile(i,d),P("📊 Vendor Payment Ledger Excel downloaded")}catch(n){console.error(n),P("⚠ Excel error: "+n.message)}}function Ka(){var o;const e=(((o=h("pay-search"))==null?void 0:o.value)||"").toLowerCase().trim(),t=document.querySelectorAll("#pay-vendor-checks input[type=checkbox]"),n=new Set([...t].filter(i=>i.checked).map(i=>i.dataset.vid));document.querySelectorAll(".pay-vendor-card").forEach(i=>{var d,u,f;const r=i.dataset.vendor,s=((u=(d=i.querySelector(".pay-vendor-name"))==null?void 0:d.textContent)==null?void 0:u.toLowerCase())||((f=i.innerText)==null?void 0:f.toLowerCase())||"",c=!e||s.includes(e),l=!t.length||n.has(r);i.style.display=c&&l?"":"none"})}function Md(){document.querySelectorAll("#pay-vendor-checks input[type=checkbox]").forEach(n=>n.checked=!0);const t=h("pay-search");t&&(t.value=""),document.querySelectorAll(".pay-vendor-card").forEach(n=>n.style.display="")}function Fd(){const e=h("pay-search");e&&(e.value="",Ka())}function Nt(){try{localStorage.removeItem("livio_email_config")}catch{}return{}}function gg(){const e=typeof import.meta<"u"&&Dv?"https://project-managment-production-7373.up.railway.app/api".trim():"";if(e)return e;if(typeof window<"u"&&window.location){const{hostname:t,port:n}=window.location,o=t==="127.0.0.1"||t==="localhost",i=["3000","4173","5173","5500"].includes(String(n||""));return o&&i?"http://127.0.0.1:3001/api":"https://project-managment-production-7373.up.railway.app/api"}return"http://127.0.0.1:3001/api"}const Wo=gg();function xg(e){if(!e||typeof window>"u"||!window.location)return!1;const t=String(e).trim().toLowerCase(),n=t.startsWith("http://127.0.0.1:3001")||t.startsWith("http://localhost:3001"),{hostname:o}=window.location;return n&&!(o==="127.0.0.1"||o==="localhost")}function Kn(){return Wo.replace(/\/+$/,"")}function xu(){return Kn().replace(/\/api$/,"")}function hu(){var e;return((e=B())==null?void 0:e.id)||(q==null?void 0:q.activeId)||(q==null?void 0:q.activeProjectId)||"general"}function hg(e){return e?e.path?xu()+e.path:e.data||"":""}async function yu(e){if(!e)throw new Error("File not found");const t=hg(e);if(!t)throw new Error("File not found");const n=await fetch(t);if(!n.ok)throw new Error("File download failed");return await n.blob()}async function bu(e,t){const n=Array.from(e||[]);if(!n.length)return[];const o=new FormData;o.append("projectId",t||hu()),n.forEach(s=>o.append("files",s));const i=await fetch(Kn()+"/files/upload",{method:"POST",body:o});if(!i.ok){let s="Upload failed";try{const c=await i.json();s=(c==null?void 0:c.error)||s}catch{}throw new Error(s)}const r=await i.json();return Array.isArray(r==null?void 0:r.files)?r.files:[]}let _d=null,Zr=!1,Rd=!1,ml=!1;function wu(e){var s;const t=e&&typeof e=="object"?e:{},o=Array.isArray(t.projects)?t.projects:[JSON.parse(JSON.stringify(cu))],i=t.activeId??t.activeProjectId??((s=o==null?void 0:o[0])==null?void 0:s.id)??"proj_madera",r={...t,projects:o,activeId:i,activeProjectId:i};return(r.projects||[]).forEach(c=>{c.works||(c.works=[]),c.milestones||(c.milestones=[]),c.quotes||(c.quotes=[]),c.plans||(c.plans=[]),c.inspections||(c.inspections=[]),c.milestones.forEach(l=>{l.payFiles||(l.payFiles=[]),l.progressPayments||(l.progressPayments=[]),l.progressPayments.forEach(d=>{d.files||(d.files=[])})}),c.quotes.forEach(l=>{l.files||(l.files=[]),l.payMilestones||(l.payMilestones=l.paymilestones||l.paymentMilestones||[],delete l.paymilestones,delete l.paymentMilestones),l.payMilestones.forEach(d=>{d.files||(d.files=[]),d.lienFiles||(d.lienFiles=[]),d.paid===void 0&&(d.paid=!1),d.paidDate||(d.paidDate="")})}),c.inspections.forEach(l=>{l.files||(l.files=[])}),c.invoices||(c.invoices=[]),c.vendors||(c.vendors=[]),c.checklist||(c.checklist=[]),c.qaqcLog||(c.qaqcLog=[]),c.chkCategories||(c.chkCategories=[]),(c.checklist||[]).forEach(l=>{(l.comments||[]).forEach(d=>W(d.files||[]))}),(c.qaqcLog||[]).forEach(l=>W(l.files||[])),(c.checklist||[]).forEach(l=>{l.comments||(l.comments=[])}),c.vendors.forEach(l=>W(l.files||[])),c.invoices.forEach(l=>{l.files||(l.files=[]),l.proofFiles||(l.proofFiles=[]),l.lienFiles||(l.lienFiles=[]),l.partialPayments||(l.partialPayments=[]),l.partialPayments.forEach(d=>{d.files||(d.files=[]),W(d.files||[])}),l.payments||(l.payments=[]),l.payments.forEach(d=>{if(d.proofFiles||(d.proofFiles=d.proofFile?[d.proofFile]:[]),(!d.proofFiles||!d.proofFiles.length)&&d.proofData){const u={id:d.proofId||`${d.id}_proof`,name:d.proofName||"Payment Proof",size:d.proofSize||0,data:d.proofData,at:d.date||new Date().toISOString()};d.proofFiles=[u],d.proofFile=u}W(d.proofFiles||[])}),W(l.files||[]),W(l.proofFiles||[]),W(l.lienFiles||[])})}),r}function Cu(e){q=wu(e),typeof window<"u"&&(window.DB=q)}function Su(){if(typeof localStorage>"u")return;const e=(q==null?void 0:q.activeId)??(q==null?void 0:q.activeProjectId)??null;localStorage.setItem(du,JSON.stringify({...q,activeId:e,activeProjectId:e}))}async function yg(){if(!Zr){Zr=!0;try{const e=await fetch(Kn()+"/projects/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)});if(!e.ok){let t="Failed to sync data";try{const n=await e.json();t=(n==null?void 0:n.error)||t}catch{}throw new Error(t)}ml=!1}catch(e){console.warn("Remote sync failed:",(e==null?void 0:e.message)||e)}finally{Zr=!1}}}function Xa(e=150){clearTimeout(_d),_d=setTimeout(()=>{yg()},e)}async function bg(){if(!Rd){Rd=!0;try{const e=await fetch(Kn()+"/projects/all");if(!e.ok)throw new Error("Failed to load shared data");const t=wu(await e.json());if(ml){Xa(50);return}if((t.projects||[]).length){Cu(t);try{Su()}catch{}yn(),typeof oe=="function"&&oe()}else(q.projects||[]).length&&Xa(50)}catch(e){console.warn("Shared data load skipped:",(e==null?void 0:e.message)||e)}}}Cu(q);yn();te=function(){try{q.activeProjectId=q.activeId??q.activeProjectId??null,Su(),ml=!0}catch(e){const t=e.name==="QuotaExceededError"||e.code===22?"âš  Browser storage full â€” files are too large for local storage. Export your project to save data.":"âš  Save failed: "+e.message;P(t,5e3),console.error("saveDB error:",e)}yn(),Xa()};pl=async function(e,t){const n=Array.from((e==null?void 0:e.files)||[]);if(!n.length)return;const o=n.filter(i=>i.size>500*1024*1024?(P("âš  Max 500MB: "+i.name),!1):!0);if(o.length){Jt+=o.length,Xr();try{const i=await bu(o,hu());i.forEach(r=>{jt[r.id]=r,G.push(r)}),Xr(),P("âœ“ Uploaded "+i.length+" file(s)")}catch(i){P("âš  Upload failed: "+((i==null?void 0:i.message)||"Please try again")),console.error("File upload failed:",i)}finally{Jt=Math.max(0,Jt-o.length),Xr(),e&&typeof e.value=="string"&&(e.value="")}}};Xo=function(e){let t=jt[e];return t||(yn(),t=jt[e]),t&&(t.data||t.path)?t:null};bn=async function(e){const t=Xo(e);if(!t){P("âš  File not found â€” it may not have been saved yet");return}try{const n=await yu(t),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=t.name||t.filename||"download",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(o),3e4),P("â¬‡ Downloading "+(t.name||"file"))}catch(n){P("âš  Failed to download "+(t.name||"file")),console.error("Download failed:",n)}};ul=async function(e){const t=Xo(e);if(!t){P("âš  File not found â€” it may not have been saved yet");return}try{const n=await yu(t),o=URL.createObjectURL(n);if(!window.open(o,"_blank","noopener,noreferrer")){URL.revokeObjectURL(o),await bn(e),P("âš  Preview blocked â€” downloading instead");return}setTimeout(()=>URL.revokeObjectURL(o),6e4),P("Opening "+(t.name||"file"))}catch(n){P("âš  Failed to open "+(t.name||"file")),console.error("Preview failed:",n)}};mu=function(){const e=B();if(!e){P("âš  No project selected");return}const t=[];if((e.quotes||[]).forEach(n=>{(n.files||[]).forEach(o=>{(o.data||o.path)&&t.push(o)}),(n.payMilestones||[]).forEach(o=>{(o.files||[]).forEach(i=>{(i.data||i.path)&&t.push(i)}),(o.lienFiles||[]).forEach(i=>{(i.data||i.path)&&t.push(i)}),(o.invoiceFiles||[]).forEach(i=>{(i.data||i.path)&&t.push(i)})})}),(e.plans||[]).forEach(n=>{(n.data||n.path)&&t.push(n)}),(e.inspections||[]).forEach(n=>(n.files||[]).forEach(o=>{(o.data||o.path)&&t.push(o)})),(e.vendors||[]).forEach(n=>(n.files||[]).forEach(o=>{(o.data||o.path)&&t.push(o)})),(e.invoices||[]).forEach(n=>{(n.files||[]).forEach(o=>{(o.data||o.path)&&t.push(o)}),(n.proofFiles||[]).forEach(o=>{(o.data||o.path)&&t.push(o)}),(n.lienFiles||[]).forEach(o=>{(o.data||o.path)&&t.push(o)}),(n.partialPayments||[]).forEach(o=>(o.files||[]).forEach(i=>{(i.data||i.path)&&t.push(i)})),(n.payments||[]).forEach(o=>(o.proofFiles||[]).forEach(i=>{(i.data||i.path)&&t.push(i)}))}),!t.length){P("âš  No files in this project");return}t.forEach((n,o)=>setTimeout(()=>bn(n.id),o*350)),P(`â¬‡ Downloading ${t.length} file(s)â€¦`)};vu=async function(){const e=h("invpay-inv-id").value,t=h("invpay-date").value,n=parseFloat(h("invpay-amount").value||"0"),o=h("invpay-note").value.trim();if(!t||!n){P("âš  Date and amount are required");return}const i=B();if(!i)return;const r=(i.invoices||[]).find(l=>l.id===e);if(!r)return;r.payments||(r.payments=[]);const s="pp_"+Math.random().toString(36).slice(2,10),c=h("invpay-proof");try{let l=[];c&&c.files&&c.files[0]&&(l=await bu([c.files[0]],i.id),W(l)),r.payments.push({id:s,date:t,amount:n,note:o,proofFile:l[0]||null,proofFiles:l}),te(),er(),oe(),P("ðŸ’µ Payment recorded: "+F(n))}catch(l){P("âš  Payment proof upload failed: "+((l==null?void 0:l.message)||"Please try again")),console.error("Payment proof upload failed:",l)}};function Cr(){return Wo.replace(/\/+$/,"")}function wg(){return"Livio Building Systems"}function wn(e){return`<div style="display:flex;align-items:center;gap:10px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:11px 16px">
    <span style="font-size:20px">⚠️</span>
    <div>
      <div style="font-size:13px;font-weight:700;color:var(--green)">Email is managed by the backend</div>
      <div style="font-size:11px;color:var(--muted);margin-top:2px">This app sends mail using the backend email service.</div>
      <div style="font-size:10px;color:var(--muted);margin-top:3px">API: <strong>${Cr()}</strong></div>
    </div>
  </div>`}async function Sr(e){const t=Cr(),n={to:e.to,cc:e.cc||"",subject:e.subject,message:e.message,fromName:e.fromName||wg()};e.replyTo&&(n.replyTo=e.replyTo),Array.isArray(e.attachments)&&e.attachments.length&&(n.attachments=e.attachments);const o=await fetch(t+"/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),i=await o.json().catch(()=>({}));if(!o.ok)throw new Error(i.error||i.message||"SMTP send failed ("+o.status+")");return i}async function Cg(e){const t=Cr(),n=await fetch(t+"/email/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}),o=await n.json().catch(()=>({}));if(!n.ok||o.ok===!1)throw new Error(o.error||o.message||"SMTP verify failed ("+n.status+")");return o}function ku(){const e=Nt(),t=h("cfg-api-base");t&&(t.value=Cr());const n=h("cfg-smtp-host");n&&(n.value=e.host||"");const o=h("cfg-smtp-port");o&&(o.value=e.port||"587");const i=h("cfg-smtp-user");i&&(i.value=e.user||"");const r=h("cfg-smtp-pass");r&&(r.value=e.pass||"");const s=h("cfg-smtp-secure");s&&(s.checked=!!e.secure);const c=h("cfg-from-name");c&&(c.value=e.fromName||"Livio Building Systems");const l=h("cfg-from-email");l&&(l.value=e.fromEmail||""),vl()}function vl(){const e=h("email-cfg-status");e&&(e.innerHTML=wn(Nt()))}function Sg(){var n,o,i,r,s,c,l,d;const e=(((n=h("cfg-api-base"))==null?void 0:n.value)||"").trim(),t={apiBase:(xg(e)?Wo:e)||Wo,host:(((o=h("cfg-smtp-host"))==null?void 0:o.value)||"").trim(),port:(((i=h("cfg-smtp-port"))==null?void 0:i.value)||"").trim()||"587",user:(((r=h("cfg-smtp-user"))==null?void 0:r.value)||"").trim(),pass:(((s=h("cfg-smtp-pass"))==null?void 0:s.value)||"").trim(),secure:!!((c=h("cfg-smtp-secure"))!=null&&c.checked),fromName:(((l=h("cfg-from-name"))==null?void 0:l.value)||"").trim()||"Livio Building Systems",fromEmail:(((d=h("cfg-from-email"))==null?void 0:d.value)||"").trim()};if((t.host||t.user||t.pass)&&(!t.host||!t.port||!t.user||!t.pass)){P("⚠ Fill all SMTP fields or leave them all blank to use backend defaults");return}localStorage.setItem("livio_email_config",JSON.stringify(t)),vl(),P("✅ SMTP settings saved")}function kg(){confirm("Clear saved SMTP settings? The app will then rely on backend/.env only.")&&(localStorage.removeItem("livio_email_config"),h("cfg-api-base")&&(h("cfg-api-base").value=Wo),h("cfg-smtp-host")&&(h("cfg-smtp-host").value=""),h("cfg-smtp-port")&&(h("cfg-smtp-port").value="587"),h("cfg-smtp-user")&&(h("cfg-smtp-user").value=""),h("cfg-smtp-pass")&&(h("cfg-smtp-pass").value=""),h("cfg-smtp-secure")&&(h("cfg-smtp-secure").checked=!1),h("cfg-from-name")&&(h("cfg-from-name").value="Livio Building Systems"),h("cfg-from-email")&&(h("cfg-from-email").value=""),vl(),P("🗑 SMTP settings cleared"))}async function Eg(){const e=prompt("Enter your email address to receive a test email:","");if(!e||!e.includes("@")){P("⚠ Please enter a valid email");return}const t=Nt();P("📧 Verifying email service…",3e3);try{await Cg(t),await Sr({to:e,subject:"Test Email — Livio Building Systems",message:`This is a test email from Livio Building Systems.

If you received this, your SMTP email integration is working correctly.

— Livio Building Systems`}),P("✅ Test email sent to "+e)}catch(n){console.error("Email test error:",n),P("⚠ Email test failed: "+n.message,"error")}}function Od(){var l;const e=(((l=h("pay-smart-search"))==null?void 0:l.value)||"").toLowerCase().trim(),t=h("pay-smart-clear"),n=h("pay-smart-results");if(t&&(t.style.display=e?"":"none"),document.querySelectorAll(".pay-vendor-card").forEach(d=>{var f;const u=(((f=d.querySelector(".pay-vendor-name"))==null?void 0:f.textContent)||d.innerText||"").toLowerCase();d.style.display=!e||u.includes(e)?"":"none"}),!e){n&&(n.style.display="none",n.innerHTML="");return}const o=B();if(!o){n&&(n.style.display="none");return}const r=(o.vendors||[]).filter(d=>(o.invoices||[]).some(u=>u.vcId===d.id&&u.approvalStatus==="approved")).filter(d=>(d.vendor||"").toLowerCase().includes(e)||(d.trade||"").toLowerCase().includes(e)||(d.csi||"").toLowerCase().includes(e));if(!n)return;if(!r.length){n.style.display="",n.innerHTML=`<div style="padding:16px 20px;color:var(--muted);font-size:13px;text-align:center">No vendor or trade matches "<strong>${e}</strong>"</div>`;return}const s={};r.forEach(d=>{const u=d.vendor||"—";s[u]||(s[u]=[]),s[u].push(d)});const c=Object.entries(s).map(([d,u])=>{let f=0,p=0;u.forEach(m=>{f+=Number(m.amount||0),(o.invoices||[]).filter(v=>v.vcId===m.id&&v.approvalStatus==="approved").forEach(v=>{v.paid?p+=Number(v.amount||0):p+=(v.partialPayments||[]).reduce((x,E)=>x+Number(E.amount||0),0)})});const g=f-p,w=f?Math.min(100,Math.round(p/f*100)):0,y=[...new Set(u.map(m=>m.trade||m.csi||"General"))].join(", "),b=u.map((m,v)=>{const x=(o.invoices||[]).filter($=>$.vcId===m.id&&$.approvalStatus==="approved"),E=x.reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((S,D)=>S+Number(D.amount||0),0),0),C=Number(m.amount||0),k=C-E,j=C?Math.min(100,Math.round(E/C*100)):0;return`<div style="display:flex;align-items:center;gap:10px;padding:7px 20px 7px 30px;background:${v%2===0?"#F7F9FF":"#fff"};border-bottom:1px solid var(--border)">
        <div style="flex:1">
          <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700;margin-right:6px">CONTRACT ${v+1}</span>
          <span style="font-size:12px;font-weight:600;color:var(--navy)">${m.trade||m.csi||"General"}</span>
          ${m.csi&&m.csi!==m.trade?`<span style="font-size:9px;color:var(--muted);margin-left:5px">${m.csi}</span>`:""}
          <span style="font-size:10px;color:var(--muted);margin-left:8px">${x.length} invoice${x.length!==1?"s":""}</span>
        </div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Contract</div><div style="font-size:12px;font-weight:700">$${C.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">✓ Paid</div><div style="font-size:12px;font-weight:700;color:var(--green)">$${E.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Balance</div><div style="font-size:12px;font-weight:700;color:${k>0?"var(--red)":"var(--green)"}">$${k.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:50px"><div style="font-size:9px;color:var(--muted)">%</div><div style="font-size:12px;font-weight:700;color:${j===100?"var(--green)":"var(--amber)"}">${j}%</div></div>
      </div>`}).join("");return`<div style="border-bottom:2px solid var(--border)">
      <!-- Vendor header row -->
      <div style="display:flex;align-items:center;gap:14px;padding:12px 20px;background:var(--navy2)">
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:#fff">${d}</div>
          <div style="font-size:10px;color:#8AAAC8;margin-top:2px">${y} · ${u.length} contract${u.length!==1?"s":""}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Contract</div>
          <div style="font-size:16px;font-weight:700;color:#fff;font-family:'Barlow Condensed',sans-serif">$${f.toLocaleString()}</div>
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
          <div style="font-size:16px;font-weight:700;color:${w===100?"#7FE0B8":"#FAC775"};font-family:'Barlow Condensed',sans-serif">${w}%</div>
          <div style="height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin-top:3px;overflow:hidden">
            <div style="height:100%;width:${w}%;background:${w===100?"#7FE0B8":w>60?"#85B7EB":"#FAC775"};border-radius:2px"></div>
          </div>
        </div>
        <div style="display:flex;gap:5px;border-left:1px solid rgba(255,255,255,.15);padding-left:14px">
          <button onclick="exportVendorNameLedgerPDF('${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download PDF" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">🖨 PDF</button>
          <button onclick="exportVendorNameLedgerExcel('${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download Excel" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📊 Excel</button>
          <button onclick="openLedgerEmail('vendorname','${d.replace(/'/g,"\\'")}');event.stopPropagation()" title="Email ledger" style="background:rgba(26,107,196,.4);border:1px solid rgba(26,107,196,.6);color:#7CC4F8;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📧 Email</button>
        </div>
      </div>
      <!-- Per-contract breakdown -->
      ${u.length>1?b:""}
    </div>`}).join("");n.style.display="",n.innerHTML=`
    <div style="padding:8px 16px;background:var(--bg);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
      <span style="font-size:11px;font-weight:600;color:var(--muted)">🔎 ${r.length} contract${r.length!==1?"s":""} found across ${Object.keys(s).length} vendor${Object.keys(s).length!==1?"s":""} for "<strong style="color:var(--text)">${e}</strong>"</span>
      <button onclick="clearPaySmartSearch()" style="font-size:10px;background:none;border:none;color:var(--blue);cursor:pointer;font-weight:600">Clear search</button>
    </div>
    ${c}`}function Vd(){const e=h("pay-smart-search");e&&(e.value="");const t=h("pay-smart-clear");t&&(t.style.display="none");const n=h("pay-smart-results");n&&(n.style.display="none",n.innerHTML=""),document.querySelectorAll(".pay-vendor-card").forEach(o=>o.style.display="")}function $g(e,t){const n=h("pay-trade-panel");if(!n)return;if(!e.length){n.style.display="none",n.innerHTML="";return}n.style.display="";function o(w){let y=0,b=0;return w.forEach(m=>{y+=Number(m.amount||0),(t.invoices||[]).filter(v=>v.vcId===m.id&&v.approvalStatus==="approved").forEach(v=>{v.paid?b+=Number(v.amount||0):b+=(v.partialPayments||[]).reduce((x,E)=>x+Number(E.amount||0),0)})}),{contract:y,paid:b,bal:y-b,pct:y?Math.min(100,Math.round(b/y*100)):0}}function i(w){return`<div style="display:flex;align-items:center;gap:7px">
      <div style="width:70px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
        <div style="height:100%;width:${w}%;background:${w===100?"var(--green-m)":w>60?"var(--blue-m)":"var(--amber-m)"};border-radius:3px"></div>
      </div>
      <span style="font-size:11px;font-weight:700;color:${w===100?"var(--green)":"var(--text)"}">${w}%</span>
    </div>`}const r="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;text-align:left;border-bottom:1px solid var(--border)",s=(w,y)=>{const b=encodeURIComponent(y);return w==="vendor"?`<div style="display:flex;gap:5px;flex-wrap:wrap">
        <button onclick="exportVendorNameLedgerPDF(decodeURIComponent('${b}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
        <button onclick="exportVendorNameLedgerExcel(decodeURIComponent('${b}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
        <button onclick="openLedgerEmail('vendorname',decodeURIComponent('${b}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
      </div>`:`<div style="display:flex;gap:5px;flex-wrap:wrap">
      <button onclick="exportTradeLedgerPDF(decodeURIComponent('${b}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
      <button onclick="exportTradeLedgerExcel(decodeURIComponent('${b}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
      <button onclick="openLedgerEmail('trade',decodeURIComponent('${b}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
    </div>`},c={};e.forEach(w=>{const y=w.vendor||"Unknown";c[y]||(c[y]=[]),c[y].push(w)});const d=Object.keys(c).sort().map((w,y)=>{const b=c[w],m=o(b),v=y%2===0?"#fff":"var(--bg)",x=b.map((E,C)=>{const k=o([E]),j=E.trade||E.csi||"—";return`<tr style="background:#F0F5FF;border-left:3px solid #B0D0F0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">CONTRACT ${C+1}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${j}</span>
            ${E.csi&&E.csi!==E.trade?`<span class="badge b-teal" style="font-size:9px">${E.csi}</span>`:""}
            ${E.contractNo?`<span style="font-size:9px;color:var(--muted)">#${E.contractNo}</span>`:""}
          </div>
        </td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${k.contract.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${k.paid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:${k.bal>0?"var(--red)":"var(--green)"};border-bottom:1px solid var(--border)">$${k.bal.toLocaleString()}</td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:5px">
            <div style="width:50px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${k.pct}%;background:${k.pct===100?"var(--green-m)":k.pct>60?"var(--blue-m)":"var(--amber-m)"};border-radius:2px"></div>
            </div>
            <span style="font-size:10px;color:var(--muted)">${k.pct}%</span>
          </div>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;gap:3px">
            <button onclick="exportVCPaymentLedgerPDF('${E.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${E.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${E.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`}).join("");return`<tr style="background:${v};border-left:4px solid var(--blue)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${w}</div>
        <div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px">
          ${b.map(E=>`<span style="font-size:9px;background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:1px 7px;color:var(--muted)">${E.trade||E.csi||"General"}</span>`).join("")}
        </div>
        <div style="font-size:9px;color:var(--blue);margin-top:3px">${b.length} contract${b.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${m.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${m.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${m.bal>0?"var(--red)":"var(--green)"}">$${m.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${i(m.pct)}</td>
      <td style="padding:10px 14px">${s("vendor",w)}</td>
    </tr>${x}`}).join(""),u={};e.forEach(w=>{const y=w.trade||w.csi||"General";u[y]||(u[y]=[]),u[y].push(w)});const p=Object.keys(u).sort().map((w,y)=>{const b=u[w],m=o(b),v=y%2===0?"#fff":"var(--bg)",x=b.map(E=>{const C=o([E]);return`<tr style="background:#F4FFF8;border-left:3px solid #B8DCA0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--green);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">VENDOR</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${E.vendor}</span>
            ${E.contractNo?`<span style="font-size:9px;color:var(--muted)">#${E.contractNo}</span>`:""}
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
            <button onclick="exportVCPaymentLedgerPDF('${E.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${E.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${E.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`}).join("");return`<tr style="background:${v};border-left:4px solid var(--teal)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${w}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${b.map(E=>E.vendor).join(" · ")}</div>
        <div style="font-size:9px;color:var(--teal);margin-top:3px">${b.length} vendor${b.length!==1?"s":""}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${m.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${m.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${m.bal>0?"var(--red)":"var(--green)"}">$${m.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${i(m.pct)}</td>
      <td style="padding:10px 14px">${s("trade",w)}</td>
    </tr>${x}`}).join(""),g=w=>`<thead><tr style="background:var(--bg)">${w.map(([y,b])=>`<th style="${r};color:${b||"var(--muted)"}">${y}</th>`).join("")}</tr></thead>`;n.innerHTML=`
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
    </div>`}function Eu(e,t,n){const o=[],i=new Date().toLocaleDateString(),r=s=>{o.push(s),o.push("=".repeat(s.length))};if(e==="vendor"){const s=(n.vendors||[]).find(p=>p.id===t);if(!s)return"";const c=(n.invoices||[]).filter(p=>p.vcId===t&&p.approvalStatus==="approved"),l=c.reduce((p,g)=>g.paid?p+Number(g.amount||0):p+(g.partialPayments||[]).reduce((w,y)=>w+Number(y.amount||0),0),0),d=Number(s.amount||0),u=d-l,f=d?Math.min(100,Math.round(l/d*100)):0;r("VENDOR PAYMENT LEDGER"),o.push("Project   : "+n.name),o.push("Project Address : "+fe(n)),o.push("Livio Address   : "+ee),o.push("Permit    : "+(n.permit||"—")),o.push("Generated : "+i),o.push(""),o.push("Vendor    : "+s.vendor),o.push("Trade     : "+(s.trade||"—")),o.push("CSI       : "+(s.csi||"—")),o.push(""),o.push("Contract  : $"+d.toLocaleString()),o.push("Paid      : $"+l.toLocaleString()),o.push("Balance   : $"+u.toLocaleString()),o.push("Progress  : "+f+"%"),o.push(""),r("INVOICE DETAIL"),c.forEach(p=>{var y;const g=((y=(s.milestones||[]).find(b=>b.id===p.milestoneId))==null?void 0:y.name)||"—",w=p.paid?Number(p.amount||0):(p.partialPayments||[]).reduce((b,m)=>b+Number(m.amount||0),0);o.push(""),o.push("  Invoice   : "+(p.invoiceNo||"—")+" | Milestone: "+g),o.push("  Amount    : $"+Number(p.amount||0).toLocaleString()),o.push("  Paid      : $"+w.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-w).toLocaleString()),o.push("  Status    : "+(p.paid?"✓ Fully Paid":"Partial / Outstanding")),(p.partialPayments||[]).forEach((b,m)=>{o.push("    Pmt "+(m+1)+" : $"+Number(b.amount||0).toLocaleString()+(b.date?" · "+J(b.date):"")+(b.txnNo?" | Txn: "+b.txnNo:""))})})}else if(e==="quote"){const s=(n.quotes||[]).find(p=>p.id===t);if(!s)return"";const c=(n.invoices||[]).filter(p=>p.quoteId===t&&p.approvalStatus==="approved"),l=c.reduce((p,g)=>g.paid?p+Number(g.amount||0):p+(g.partialPayments||[]).reduce((w,y)=>w+Number(y.amount||0),0),0),d=Number(s.amount||0),u=d-l,f=d?Math.min(100,Math.round(l/d*100)):0;r("APPROVED QUOTE LEDGER"),o.push("Project   : "+n.name),o.push("Project Address : "+fe(n)),o.push("Livio Address   : "+ee),o.push("Permit    : "+(n.permit||"—")),o.push("Generated : "+i),o.push(""),o.push("Vendor    : "+(s.vendor||"—")),o.push("Scope     : "+(s.scope||"—")),o.push("CSI       : "+(s.csi||"—")),o.push(""),o.push("Quote     : $"+d.toLocaleString()),o.push("Paid      : $"+l.toLocaleString()),o.push("Balance   : $"+u.toLocaleString()),o.push("Progress  : "+f+"%"),o.push(""),r("INVOICE DETAIL"),c.forEach(p=>{const g=p.paid?Number(p.amount||0):(p.partialPayments||[]).reduce((w,y)=>w+Number(y.amount||0),0);o.push(""),o.push("  Invoice   : "+(p.invoiceNo||"—")),o.push("  Amount    : $"+Number(p.amount||0).toLocaleString()),o.push("  Paid      : $"+g.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-g).toLocaleString()),o.push("  Status    : "+(p.paid?"✓ Fully Paid":"Partial / Outstanding")),(p.partialPayments||[]).forEach((w,y)=>{o.push("    Pmt "+(y+1)+" : $"+Number(w.amount||0).toLocaleString()+(w.date?" · "+J(w.date):"")+(w.txnNo?" | Txn: "+w.txnNo:""))})})}else if(e==="vendorname"){const s=t,c=(n.vendors||[]).filter(p=>p.vendor===s&&(n.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved"));let l=0,d=0;c.forEach(p=>{l+=Number(p.amount||0),(n.invoices||[]).filter(g=>g.vcId===p.id&&g.approvalStatus==="approved").forEach(g=>{g.paid?d+=Number(g.amount||0):d+=(g.partialPayments||[]).reduce((w,y)=>w+Number(y.amount||0),0)})});const u=l-d,f=l?Math.min(100,Math.round(d/l*100)):0;r("VENDOR PAYMENT LEDGER — "+s.toUpperCase()),o.push("Project   : "+n.name),o.push("Project Address : "+fe(n)),o.push("Livio Address   : "+ee),o.push("Permit    : "+(n.permit||"—")),o.push("Generated : "+i),o.push(""),o.push("Vendor    : "+s),o.push("Contracts : "+c.length),o.push(""),o.push("Contract  : $"+l.toLocaleString()),o.push("Paid      : $"+d.toLocaleString()),o.push("Balance   : $"+u.toLocaleString()),o.push("Progress  : "+f+"%"),c.forEach((p,g)=>{o.push(""),o.push("─── CONTRACT "+(g+1)+" — "+(p.trade||p.csi||"General")+(p.csi?" · "+p.csi:"")),o.push("  Contract  : $"+Number(p.amount||0).toLocaleString());const w=(n.invoices||[]).filter(b=>b.vcId===p.id&&b.approvalStatus==="approved"),y=w.reduce((b,m)=>m.paid?b+Number(m.amount||0):b+(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0);o.push("  Paid      : $"+y.toLocaleString()+"  |  Balance: $"+(Number(p.amount||0)-y).toLocaleString()),w.forEach(b=>{var x;const m=((x=(p.milestones||[]).find(E=>E.id===b.milestoneId))==null?void 0:x.name)||"—",v=b.paid?Number(b.amount||0):(b.partialPayments||[]).reduce((E,C)=>E+Number(C.amount||0),0);o.push("    Invoice : "+(b.invoiceNo||"—")+" | 📍 "+m+" | $"+Number(b.amount||0).toLocaleString()+" | Paid: $"+v.toLocaleString()+" | "+(b.paid?"✓ Paid":"Outstanding")),(b.partialPayments||[]).forEach((E,C)=>{o.push("      Pmt "+(C+1)+" : $"+Number(E.amount||0).toLocaleString()+(E.date?" · "+J(E.date):"")+(E.txnNo?" | Txn: "+E.txnNo:""))})})})}else{const s=t,c=(n.vendors||[]).filter(p=>(p.trade||p.csi||"General")===s&&(n.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved"));let l=0,d=0;c.forEach(p=>{l+=Number(p.amount||0),(n.invoices||[]).filter(g=>g.vcId===p.id&&g.approvalStatus==="approved").forEach(g=>{g.paid?d+=Number(g.amount||0):d+=(g.partialPayments||[]).reduce((w,y)=>w+Number(y.amount||0),0)})});const u=l-d,f=l?Math.min(100,Math.round(d/l*100)):0;r("TRADE PAYMENT LEDGER — "+s.toUpperCase()),o.push("Project   : "+n.name),o.push("Project Address : "+fe(n)),o.push("Livio Address   : "+ee),o.push("Permit    : "+(n.permit||"—")),o.push("Generated : "+i),o.push(""),o.push("Trade     : "+s),o.push("Vendors   : "+c.length),o.push(""),o.push("Contract  : $"+l.toLocaleString()),o.push("Paid      : $"+d.toLocaleString()),o.push("Balance   : $"+u.toLocaleString()),o.push("Progress  : "+f+"%"),o.push(""),r("VENDOR DETAIL"),c.forEach(p=>{const g=(n.invoices||[]).filter(b=>b.vcId===p.id&&b.approvalStatus==="approved"),w=g.reduce((b,m)=>m.paid?b+Number(m.amount||0):b+(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0),0),y=Number(p.amount||0)-w;o.push(""),o.push("  Vendor   : "+p.vendor+"  (Contract: $"+Number(p.amount||0).toLocaleString()+")"),o.push("  Paid     : $"+w.toLocaleString()+"  |  Balance: $"+y.toLocaleString()),g.forEach(b=>{var x;const m=((x=(p.milestones||[]).find(E=>E.id===b.milestoneId))==null?void 0:x.name)||"—",v=b.paid?Number(b.amount||0):(b.partialPayments||[]).reduce((E,C)=>E+Number(C.amount||0),0);o.push("    Invoice : "+(b.invoiceNo||"—")+" | "+m+" | $"+Number(b.amount||0).toLocaleString()+" | Paid: $"+v.toLocaleString()+" | "+(b.paid?"✓ Paid":"Outstanding"))})})}return o.push(""),o.push("— "+Ce+" · "+ee+" · "+i+" —"),o.join(`
`)}function Za(e,t){const n=B();if(!n)return;let o="",i="",r="";if(e==="vendor"){const u=(n.vendors||[]).find(f=>f.id===t);if(!u){P("⚠ Vendor not found");return}o=u.vendorEmail||"",i=u.vendor,r="Payment Ledger — "+u.vendor+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+u.vendor}else if(e==="vendorname"){const u=(n.vendors||[]).find(f=>f.vendor===t&&f.vendorEmail);o=(u==null?void 0:u.vendorEmail)||"",i=t,r="Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+t}else if(e==="quote"){const u=(n.quotes||[]).find(p=>p.id===t);if(!u){P("⚠ Quote not found");return}const f=(n.vendors||[]).find(p=>(p.quoteId===t||p.vendor===u.vendor)&&p.vendorEmail);o=(f==null?void 0:f.vendorEmail)||"",i=u.vendor||"Vendor",r="Approved Quote Ledger — "+i+" — "+n.name,h("ledger-email-title").textContent="📧 Email Approved Quote Ledger — "+i}else i=t+" Trade",r="Trade Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Trade Ledger — "+t;const s=Eu(e,t,n),c="Dear "+i+`,

Please find below the current payment ledger for your reference.

`,l=`

Please review and contact us if you have any questions.

Best regards,
Livio Building Systems`;h("ledger-email-type").value=e,h("ledger-email-ref").value=t,h("ledger-email-to").value=o,h("ledger-email-cc").value="",h("ledger-email-subject").value=r,h("ledger-email-body").value=c+s+l;const d=h("ledger-email-status");d&&(d.innerHTML=wn(Nt())),h("mo-ledger-email").classList.add("open")}function $u(){h("mo-ledger-email").classList.remove("open")}function Pg(){var t,n;const e=((t=h("ledger-email-body"))==null?void 0:t.value)||"";(n=navigator.clipboard)==null||n.writeText(e).then(()=>P("📋 Ledger copied to clipboard")).catch(()=>P("⚠ Copy failed"))}function jg(){const e=h("ledger-email-to").value.trim(),t=h("ledger-email-cc").value.trim(),n=h("ledger-email-subject").value.trim(),o=h("ledger-email-body").value.trim();if(!e){P("⚠ Recipient email is required");return}if(!n){P("⚠ Subject is required");return}P("📧 Sending…",3e3),Sr({to:e,cc:t,subject:n,message:o}).then(()=>{P("✅ Ledger emailed to "+e),$u()}).catch(i=>{console.error("Ledger email send error:",i),P("⚠ Email send failed: "+i.message,"error")})}Za=function(e,t){const n=B();if(!n)return;let o="",i="",r="";if(e==="vendor"){const u=(n.vendors||[]).find(f=>f.id===t);if(!u){P("⚠ Vendor not found");return}o=(u.vendorEmail||Po(u.vendor)||"").trim(),i=u.vendor,r="Payment Ledger — "+u.vendor+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+u.vendor}else if(e==="vendorname")o=Po(t),i=t,r="Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Ledger — "+t;else if(e==="quote"){const u=(n.quotes||[]).find(f=>f.id===t);if(!u){P("⚠ Quote not found");return}o=Po(u.vendor),i=u.vendor||"Vendor",r="Approved Quote Ledger — "+i+" — "+n.name,h("ledger-email-title").textContent="📧 Email Approved Quote Ledger — "+i}else i=t+" Trade",r="Trade Payment Ledger — "+t+" — "+n.name,h("ledger-email-title").textContent="📧 Email Trade Ledger — "+t;let s=Eu(e,t,n);s=s.replace(/Address\s*:\s*[^\n]*/i,`Project Address : ${fe(n)}
Livio Address   : ${ee}`);const c="Dear "+i+`,

Please find below the current payment ledger for your reference.

`,l=`

Please review and contact us if you have any questions.

Best regards,
`+el();h("ledger-email-type").value=e,h("ledger-email-ref").value=t,h("ledger-email-to").value=o,h("ledger-email-cc").value="",h("ledger-email-subject").value=r,h("ledger-email-body").value=c+s+l;const d=h("ledger-email-status");d&&(d.innerHTML=wn(Nt())),h("mo-ledger-email").classList.add("open")};function Ag(e){const t=B();if(!t)return;const n=(t.vendors||[]).filter(u=>(u.trade||u.csi||"General")===e&&(t.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(!n.length){P("⚠ No vendors in trade: "+e);return}let o=0,i=0;const r=n.map((u,f)=>{const p=(t.invoices||[]).filter(v=>v.vcId===u.id&&v.approvalStatus==="approved"),g=p.reduce((v,x)=>x.paid?v+Number(x.amount||0):v+(x.partialPayments||[]).reduce((E,C)=>E+Number(C.amount||0),0),0),w=Number(u.amount||0),y=w-g,b=w?Math.min(100,Math.round(g/w*100)):0;o+=w,i+=g;const m=p.map((v,x)=>{var A;const E=v.paid?"#EDF8E5":x%2===0?"#fff":"#fafaf8",C=((A=(u.milestones||[]).find(S=>S.id===v.milestoneId))==null?void 0:A.name)||"—",k=v.paid?Number(v.amount||0):(v.partialPayments||[]).reduce((S,D)=>S+Number(D.amount||0),0),j=Number(v.amount||0)-k,$=(v.partialPayments||[]).map(S=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(S.amount||0).toLocaleString()+(S.date?" · "+J(S.date):"")+(S.txnNo?" | Txn: "+S.txnNo:"")+"</div>").join("");return`<tr style="background:${E}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${v.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${v.paid?"✓ PAID":"PARTIAL"}</span><strong>${v.invoiceNo||"—"}</strong> — 📍 ${C}${$}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(v.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${k.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${j>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${j.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${b}%</td></tr>`}).join("");return`<tr style="background:${f%2===0?"#f0f4f9":"#fff"}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${u.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${u.trade||"—"}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${w.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${g.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${y>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${y.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${b===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${b}%</td></tr>${m}`}).join(""),s=o-i,c=o?Math.min(100,Math.round(i/o*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Trade Ledger — ${e}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Trade Payment Ledger</h1><h2>Trade: ${e}</h2>
  <div class="meta">${t.name} · ${fe(t)}<br>Livio Address: ${ee}<br>Permit: ${t.permit||"—"} · ${Ce} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${i.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${s>0?"#9B1F1F":"#2D6A0F"}">$${s.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${r}<tr class="tot"><td colspan="2">TOTAL — ${n.length} vendor(s)</td><td>$${o.toLocaleString()}</td><td>$${i.toLocaleString()}</td><td>$${s.toLocaleString()}</td><td>${c}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${Ce} · ${ee} · ${t.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){P("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),P("🖨 Trade PDF — "+e)}function Dg(e){const t=B();if(t)if(P("📊 Building Excel…",3e3),window.XLSX)Ud(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>Ud(t,e),n.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(n)}}function Ud(e,t){try{const n=window.XLSX,o=(e.vendors||[]).filter(f=>(f.trade||f.csi||"General")===t&&(e.invoices||[]).some(p=>p.vcId===f.id&&p.approvalStatus==="approved"));if(!o.length){P("⚠ No vendors in trade: "+t);return}const i=n.utils.book_new();let r=0,s=0;const c=[["TRADE PAYMENT LEDGER — "+t.toUpperCase()],["Project:",e.name,"","Project Address:",fe(e)],["Livio Address:",ee,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],["Trade:",t],[],["Vendor","Trade","Contract Amount","Paid","Balance Due","Progress %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Status"]];o.forEach(f=>{const p=(e.invoices||[]).filter(m=>m.vcId===f.id&&m.approvalStatus==="approved"),g=p.reduce((m,v)=>v.paid?m+Number(v.amount||0):m+(v.partialPayments||[]).reduce((x,E)=>x+Number(E.amount||0),0),0),w=Number(f.amount||0),y=w-g,b=w?Math.min(100,Math.round(g/w*100)):0;r+=w,s+=g,p.length?p.forEach((m,v)=>{var k;const x=((k=(f.milestones||[]).find(j=>j.id===m.milestoneId))==null?void 0:k.name)||"",E=m.paid?Number(m.amount||0):(m.partialPayments||[]).reduce((j,$)=>j+Number($.amount||0),0),C=Number(m.amount||0)-E;c.push([v===0?f.vendor:"",v===0&&f.trade||"",v===0?w:"",v===0?g:"",v===0?y:"",v===0?b+"%":"",m.invoiceNo||"",x,Number(m.amount||0),E,C,m.paid?"Paid":"Partial"]),(m.partialPayments||[]).forEach(j=>c.push(["","","","","","","  ↳ Partial","",Number(j.amount||0),Number(j.amount||0),0,j.date||""]))}):c.push([f.vendor,f.trade||"",w,g,y,b+"%","","","","","",""]),c.push([])});const l=r-s;c.push(["TOTAL","",r,s,l,(r?Math.min(100,Math.round(s/r*100)):0)+"%","","","","","",""]);const d=n.utils.aoa_to_sheet(c);d["!cols"]=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}],n.utils.book_append_sheet(i,d,"Trade Ledger");const u=t.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_TradeLedger_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";n.writeFile(i,u),P("📊 Trade Excel downloaded — "+t)}catch(n){console.error(n),P("⚠ Excel error: "+n.message)}}function Ng(e){const t=B();if(!t)return;const n=(t.vendors||[]).filter(b=>b.vendor===e&&(t.invoices||[]).some(m=>m.vcId===b.id&&m.approvalStatus==="approved")),o=(t.invoices||[]).filter(b=>b.isManual&&b.vendor===e&&b.approvalStatus==="approved");if(!n.length&&!o.length){P("⚠ No approved invoices for vendor: "+e);return}let i=0,r=0;const s=n.map((b,m)=>{const v=(t.invoices||[]).filter($=>$.vcId===b.id&&$.approvalStatus==="approved"),x=v.reduce(($,A)=>A.paid?$+Number(A.amount||0):$+(A.partialPayments||[]).reduce((S,D)=>S+Number(D.amount||0),0),0),E=Number(b.amount||0),C=E-x,k=E?Math.min(100,Math.round(x/E*100)):0;i+=E,r+=x;const j=v.map(($,A)=>{var N;const S=$.paid?"#EDF8E5":A%2===0?"#fff":"#fafaf8",D=((N=(b.milestones||[]).find(_=>_.id===$.milestoneId))==null?void 0:N.name)||"—",z=$.paid?Number($.amount||0):($.partialPayments||[]).reduce((_,U)=>_+Number(U.amount||0),0),T=Number($.amount||0)-z,Y=($.partialPayments||[]).map(_=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(_.amount||0).toLocaleString()+(_.date?" · "+J(_.date):"")+(_.txnNo?" | Txn: "+_.txnNo:"")+"</div>").join("");return`<tr style="background:${S}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${$.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${$.paid?"✓ PAID":"PARTIAL"}</span><strong>${$.invoiceNo||"—"}</strong> — 📍 ${D}${Y}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number($.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${T>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${T.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${k}%</td></tr>`}).join("");return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">CONTRACT ${m+1} — <span style="color:#1A6BC4">${b.trade||b.csi||"General"}</span>${b.csi?" · "+b.csi:""}</td></tr><tr style="background:${m%2===0?"#f0f4f9":"#fff"}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${b.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${b.trade||"—"}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${E.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${x.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${C>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${C.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${k===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${k}%</td></tr>${j}`}).join(""),c=o.reduce((b,m)=>b+Number(m.amount||0),0),l=o.reduce((b,m)=>b+(m.paid?Number(m.amount||0):(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)),0),d=c-l,u=c?Math.min(100,Math.round(l/c*100)):0,f=o.length?`<tr style="background:#e8f7f5"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">MANUAL INVOICES</td></tr>
    <tr style="background:#f6fcfb"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${e}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">Manual / No Contract</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${c.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${l.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${d>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ccc">$${d.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${u===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ccc">${u}%</td></tr>
    ${o.map((b,m)=>{const v=b.paid?"#EDF8E5":m%2===0?"#fff":"#fafaf8",x=b.paid?Number(b.amount||0):(b.partialPayments||[]).reduce((k,j)=>k+Number(j.amount||0),0),E=Number(b.amount||0)-x,C=(b.partialPayments||[]).map(k=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(k.amount||0).toLocaleString()+(k.date?" · "+J(k.date):"")+(k.txnNo?" | Txn: "+k.txnNo:"")+"</div>").join("");return`<tr style="background:${v}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${b.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${b.paid?"✓ PAID":"PARTIAL"}</span><strong>${b.invoiceNo||"—"}</strong> — 📍 Manual / No Contract${C}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(b.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${x.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${E>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${E.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${u}%</td></tr>`}).join("")}`:"";i+=c,r+=l;const p=i-r,g=i?Math.min(100,Math.round(r/i*100)):0,w=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Ledger — ${e}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1><h2>Vendor: ${e} · ${n.length} Contract(s)</h2>
  <div class="meta">${t.name} · ${fe(t)}<br>Livio Address: ${ee}<br>Permit: ${t.permit||"—"} · ${Ce} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${i.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${r.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${p>0?"#9B1F1F":"#2D6A0F"}">$${p.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${g===100?"#2D6A0F":"#A86200"}">${g}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${s}${f}<tr class="tot"><td colspan="2">TOTAL — ${n.length} contract(s)${o.length?" + manual invoices":""}</td><td>$${i.toLocaleString()}</td><td>$${r.toLocaleString()}</td><td>$${p.toLocaleString()}</td><td>${g}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${Ce} · ${ee} · ${t.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,y=window.open("","_blank");if(!y){P("⚠ Pop-up blocked");return}y.document.write(w),y.document.close(),setTimeout(()=>{y.focus(),y.print()},600),P("🖨 Vendor PDF — "+e)}function Ig(e){const t=B();if(t)if(P("📊 Building Excel…",3e3),window.XLSX)Hd(t,e);else{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",n.onload=()=>Hd(t,e),n.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(n)}}function Hd(e,t){try{const n=window.XLSX,o=(e.vendors||[]).filter(p=>p.vendor===t&&(e.invoices||[]).some(g=>g.vcId===p.id&&g.approvalStatus==="approved")),i=(e.invoices||[]).filter(p=>p.isManual&&p.vendor===t&&p.approvalStatus==="approved");if(!o.length&&!i.length){P("⚠ No approved invoices for vendor: "+t);return}const r=n.utils.book_new();let s=0,c=0;const l=[["VENDOR PAYMENT LEDGER — "+t.toUpperCase()],["Project:",e.name,"","Project Address:",fe(e)],["Livio Address:",ee,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||"","","Contracts:",o.length],["Vendor:",t],[],["Contract #","Trade","Contract Amount","Paid","Balance Due","Progress %","Invoice #","Milestone","Inv. Amount","Inv. Paid","Inv. Balance","Status"]];if(o.forEach((p,g)=>{const w=(e.invoices||[]).filter(x=>x.vcId===p.id&&x.approvalStatus==="approved"),y=w.reduce((x,E)=>E.paid?x+Number(E.amount||0):x+(E.partialPayments||[]).reduce((C,k)=>C+Number(k.amount||0),0),0),b=Number(p.amount||0),m=b-y,v=b?Math.min(100,Math.round(y/b*100)):0;s+=b,c+=y,w.length?w.forEach((x,E)=>{var $;const C=(($=(p.milestones||[]).find(A=>A.id===x.milestoneId))==null?void 0:$.name)||"",k=x.paid?Number(x.amount||0):(x.partialPayments||[]).reduce((A,S)=>A+Number(S.amount||0),0),j=Number(x.amount||0)-k;l.push([E===0?"Contract "+(g+1):"",E===0&&p.trade||"",E===0?b:"",E===0?y:"",E===0?m:"",E===0?v+"%":"",x.invoiceNo||"",C,Number(x.amount||0),k,j,x.paid?"Paid":"Partial"]),(x.partialPayments||[]).forEach(A=>l.push(["","","","","","","  ↳ Partial","",Number(A.amount||0),Number(A.amount||0),0,(A.date||"")+(A.txnNo?" | Txn:"+A.txnNo:"")]))}):l.push(["Contract "+(g+1),p.trade||"",b,y,m,v+"%","","","","","",""]),l.push([])}),i.length){const p=i.reduce((b,m)=>b+Number(m.amount||0),0),g=i.reduce((b,m)=>b+(m.paid?Number(m.amount||0):(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)),0),w=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;s+=p,c+=g,i.forEach((b,m)=>{const v=b.paid?Number(b.amount||0):(b.partialPayments||[]).reduce((E,C)=>E+Number(C.amount||0),0),x=Number(b.amount||0)-v;l.push([m===0?"Manual Invoices":"","Manual / No Contract",m===0?p:"",m===0?g:"",m===0?w:"",m===0?y+"%":"",b.invoiceNo||"","Manual / No Contract",Number(b.amount||0),v,x,b.paid?"Paid":"Partial"]),(b.partialPayments||[]).forEach(E=>l.push(["","","","","","","  ↳ Partial","",Number(E.amount||0),Number(E.amount||0),0,E.date||""]))}),l.push([])}const d=s-c;l.push(["TOTAL","",s,c,d,(s?Math.min(100,Math.round(c/s*100)):0)+"%","","","","","",""]);const u=n.utils.aoa_to_sheet(l);u["!cols"]=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}],n.utils.book_append_sheet(r,u,"Vendor Ledger");const f=t.replace(/[^a-zA-Z0-9_\-]/g,"_")+"_VendorLedger_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";n.writeFile(r,f),P("📊 Vendor Excel downloaded — "+t)}catch(n){console.error(n),P("⚠ Excel error: "+n.message)}}function zg(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(u=>(e.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(!t.length){P("⚠ No approved invoices");return}const n=new Map;t.forEach(u=>{n.has(u.vendor)||n.set(u.vendor,[]),n.get(u.vendor).push(u)});let o=0,i=0;const r=[...n.entries()].map(([u,f])=>{let p=0,g=0;const w=f.map((m,v)=>{const x=(e.invoices||[]).filter(A=>A.vcId===m.id&&A.approvalStatus==="approved"),E=x.reduce((A,S)=>S.paid?A+Number(S.amount||0):A+(S.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),C=Number(m.amount||0),k=C-E,j=C?Math.min(100,Math.round(E/C*100)):0;p+=C,g+=E;const $=x.map(A=>{var Y;const S=((Y=(m.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:Y.name)||"—",D=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,_)=>N+Number(_.amount||0),0),z=Number(A.amount||0)-D,T=(A.partialPayments||[]).map(N=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(N.amount||0).toLocaleString()+(N.txnNo?" | Txn:"+N.txnNo:"")+"</div>").join("");return`<tr style="background:${A.paid?"#EDF8E5":"#fff"}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${A.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${A.paid?"PAID":"PARTIAL"}</span> ${A.invoiceNo||"—"} — 📍 ${S}${T}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(A.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${D.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${z>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${j}%</td></tr>`}).join("");return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:5px 8px;font-size:10px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #bcd">CONTRACT ${v+1} · ${m.trade||m.csi||"General"}${m.csi?" · "+m.csi:""}</td></tr><tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${m.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${m.trade||"—"}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${C.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${E.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${k>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${k.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${j===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${j}%</td></tr>${$}`}).join(""),y=p-g,b=p?Math.min(100,Math.round(g/p*100)):0;return o+=p,i+=g,`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">👤 ${u} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${f.length} contract(s)</span><span style="float:right;font-size:11px">Contract $${p.toLocaleString()} · Paid $${g.toLocaleString()} · Bal $${y.toLocaleString()} · ${b}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor/Invoice</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Trade</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${w}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${p.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${g.toLocaleString()}</td><td style="padding:6px 8px;color:${y>0?"#F8A4A4":"#7CC4F8"};font-weight:700">$${y.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${b}%</td></tr></tbody></table></div>`}).join(""),s=o-i,c=o?Math.min(100,Math.round(i/o*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Vendor Ledgers — ${e.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Vendor Payment Ledgers</h1>
  <div class="meta">${e.name} · ${fe(e)}<br>Livio Address: ${ee}<br>Permit: ${e.permit||"—"} · ${Ce} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${i.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${s>0?"#9B1F1F":"#2D6A0F"}">$${s.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  ${r}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${Ce} · ${ee} · ${e.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){P("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),P("🖨 All Vendor Ledgers PDF")}function Lg(){const e=B();if(e)if(P("📊 Building All-Vendor Excel…",3e3),window.XLSX)Wd(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>Wd(e),t.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(t)}}function Wd(e){try{const t=window.XLSX,n=(e.vendors||[]).filter(u=>(e.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(!n.length){P("⚠ No approved invoices");return}const o=new Map;n.forEach(u=>{o.has(u.vendor)||o.set(u.vendor,[]),o.get(u.vendor).push(u)});const i=t.utils.book_new(),r=[["ALL VENDOR PAYMENT LEDGER"],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Project Address:",fe(e),"","Permit:",e.permit||""],["Livio Address:",ee],[],["Vendor","Contracts","Contract Amount","Total Paid","Total Balance","Progress %"]];let s=0,c=0;[...o.entries()].forEach(([u,f])=>{let p=0,g=0;f.forEach(b=>{p+=Number(b.amount||0),(e.invoices||[]).filter(m=>m.vcId===b.id&&m.approvalStatus==="approved").forEach(m=>{m.paid?g+=Number(m.amount||0):g+=(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)})});const w=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;r.push([u,f.length,p,g,w,y+"%"]),s+=p,c+=g}),r.push([]),r.push(["GRAND TOTAL","",s,c,s-c,(s?Math.min(100,Math.round(c/s*100)):0)+"%"]);const l=t.utils.aoa_to_sheet(r);l["!cols"]=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}],t.utils.book_append_sheet(i,l,"Summary"),[...o.entries()].forEach(([u,f])=>{const p=[["VENDOR: "+u.toUpperCase()],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Contracts:",f.length],[],["Contract #","Trade","Contract Amt","Paid","Balance","%","Invoice #","Milestone","Inv. Amt","Inv. Paid","Inv. Bal","Status"]];f.forEach((y,b)=>{const m=(e.invoices||[]).filter(k=>k.vcId===y.id&&k.approvalStatus==="approved"),v=m.reduce((k,j)=>j.paid?k+Number(j.amount||0):k+(j.partialPayments||[]).reduce(($,A)=>$+Number(A.amount||0),0),0),x=Number(y.amount||0),E=x-v,C=x?Math.min(100,Math.round(v/x*100)):0;m.length?m.forEach((k,j)=>{var D;const $=((D=(y.milestones||[]).find(z=>z.id===k.milestoneId))==null?void 0:D.name)||"",A=k.paid?Number(k.amount||0):(k.partialPayments||[]).reduce((z,T)=>z+Number(T.amount||0),0),S=Number(k.amount||0)-A;p.push([j===0?"Contract "+(b+1):"",j===0&&y.trade||"",j===0?x:"",j===0?v:"",j===0?E:"",j===0?C+"%":"",k.invoiceNo||"",$,Number(k.amount||0),A,S,k.paid?"Paid":"Partial"]),(k.partialPayments||[]).forEach(z=>p.push(["","","","","","","  ↳ Partial","",Number(z.amount||0),Number(z.amount||0),0,(z.date||"")+(z.txnNo?" | Txn:"+z.txnNo:"")]))}):p.push(["Contract "+(b+1),y.trade||"",x,v,E,C+"%","","","","","",""]),p.push([])});const g=t.utils.aoa_to_sheet(p);g["!cols"]=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];const w=u.replace(/[^a-zA-Z0-9 ]/g,"").substring(0,31);t.utils.book_append_sheet(i,g,w)});const d="AllVendorLedgers_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";t.writeFile(i,d),P("📊 All Vendor Excel downloaded")}catch(t){console.error(t),P("⚠ Excel error: "+t.message)}}function Bg(){const e=B();if(!e)return;const t=(e.vendors||[]).filter(u=>(e.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(!t.length){P("⚠ No approved invoices");return}const n=new Map;t.forEach(u=>{const f=u.trade||u.csi||"General";n.has(f)||n.set(f,[]),n.get(f).push(u)});let o=0,i=0;const r=[...n.entries()].map(([u,f])=>{let p=0,g=0;const w=f.map((m,v)=>{const x=(e.invoices||[]).filter(A=>A.vcId===m.id&&A.approvalStatus==="approved"),E=x.reduce((A,S)=>S.paid?A+Number(S.amount||0):A+(S.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),C=Number(m.amount||0),k=C-E,j=C?Math.min(100,Math.round(E/C*100)):0;p+=C,g+=E;const $=x.map(A=>{var Y;const S=((Y=(m.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:Y.name)||"—",D=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,_)=>N+Number(_.amount||0),0),z=Number(A.amount||0)-D,T=(A.partialPayments||[]).map(N=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(N.amount||0).toLocaleString()+(N.txnNo?" | Txn:"+N.txnNo:"")+"</div>").join("");return`<tr style="background:${A.paid?"#EDF8E5":"#fff"}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${A.paid?"#2D6A0F":"#A86200"};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${A.paid?"PAID":"PARTIAL"}</span> ${A.invoiceNo||"—"} — 📍 ${S}${T}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(A.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${D.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${z>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #eee">$${z.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${j}%</td></tr>`}).join("");return`<tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${m.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${m.csi||"—"}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${C.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${E.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${k>0?"#9B1F1F":"#2D6A0F"};border-bottom:1px solid #ddd">$${k.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${j===100?"#2D6A0F":"#A86200"};border-bottom:1px solid #ddd">${j}%</td></tr>${$}`}).join(""),y=p-g,b=p?Math.min(100,Math.round(g/p*100)):0;return o+=p,i+=g,`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">🏗 ${u} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${f.length} vendor(s)</span><span style="float:right;font-size:11px">Contract $${p.toLocaleString()} · Paid $${g.toLocaleString()} · Bal $${y.toLocaleString()} · ${b}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">CSI</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${w}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL — ${f.length} vendor(s)</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${p.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${g.toLocaleString()}</td><td style="padding:6px 8px;color:${y>0?"#F8A4A4":"#7CC4F8"};font-weight:700">$${y.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${b}%</td></tr></tbody></table></div>`}).join(""),s=o-i,c=o?Math.min(100,Math.round(i/o*100)):0,l=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Trade Ledgers — ${e.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Trade Payment Ledgers</h1>
  <div class="meta">${e.name} · ${fe(e)}<br>Livio Address: ${ee}<br>Permit: ${e.permit||"—"} · ${Ce} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${o.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${i.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${s>0?"#9B1F1F":"#2D6A0F"}">$${s.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${c===100?"#2D6A0F":"#A86200"}">${c}%</div></div>
  </div>
  ${r}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${Ce} · ${ee} · ${e.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`,d=window.open("","_blank");if(!d){P("⚠ Pop-up blocked");return}d.document.write(l),d.document.close(),setTimeout(()=>{d.focus(),d.print()},600),P("🖨 All Trade Ledgers PDF")}function Tg(){const e=B();if(e)if(P("📊 Building All-Trade Excel…",3e3),window.XLSX)qd(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>qd(e),t.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(t)}}function qd(e){try{const t=window.XLSX,n=(e.vendors||[]).filter(u=>(e.invoices||[]).some(f=>f.vcId===u.id&&f.approvalStatus==="approved"));if(!n.length){P("⚠ No approved invoices");return}const o=new Map;n.forEach(u=>{const f=u.trade||u.csi||"General";o.has(f)||o.set(f,[]),o.get(f).push(u)});const i=t.utils.book_new(),r=[["ALL TRADE PAYMENT LEDGER"],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],["Project Address:",fe(e),"","Permit:",e.permit||""],["Livio Address:",ee],[],["Trade","Vendors","Contract Amount","Total Paid","Total Balance","Progress %"]];let s=0,c=0;[...o.entries()].forEach(([u,f])=>{let p=0,g=0;f.forEach(b=>{p+=Number(b.amount||0),(e.invoices||[]).filter(m=>m.vcId===b.id&&m.approvalStatus==="approved").forEach(m=>{m.paid?g+=Number(m.amount||0):g+=(m.partialPayments||[]).reduce((v,x)=>v+Number(x.amount||0),0)})});const w=p-g,y=p?Math.min(100,Math.round(g/p*100)):0;r.push([u,f.length,p,g,w,y+"%"]),s+=p,c+=g}),r.push([]),r.push(["GRAND TOTAL","",s,c,s-c,(s?Math.min(100,Math.round(c/s*100)):0)+"%"]);const l=t.utils.aoa_to_sheet(r);l["!cols"]=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}],t.utils.book_append_sheet(i,l,"Summary"),[...o.entries()].forEach(([u,f])=>{const p=[["TRADE: "+u.toUpperCase()],["Project:",e.name,"","Generated:",new Date().toLocaleDateString()],[],["Vendor","Trade","Contract Amt","Paid","Balance","%","Invoice #","Milestone","Inv. Amt","Inv. Paid","Inv. Bal","Status"]];let g=0,w=0;f.forEach((v,x)=>{const E=(e.invoices||[]).filter(A=>A.vcId===v.id&&A.approvalStatus==="approved"),C=E.reduce((A,S)=>S.paid?A+Number(S.amount||0):A+(S.partialPayments||[]).reduce((D,z)=>D+Number(z.amount||0),0),0),k=Number(v.amount||0),j=k-C,$=k?Math.min(100,Math.round(C/k*100)):0;g+=k,w+=C,E.length?E.forEach((A,S)=>{var Y;const D=((Y=(v.milestones||[]).find(N=>N.id===A.milestoneId))==null?void 0:Y.name)||"",z=A.paid?Number(A.amount||0):(A.partialPayments||[]).reduce((N,_)=>N+Number(_.amount||0),0),T=Number(A.amount||0)-z;p.push([S===0?v.vendor:"",S===0&&v.trade||"",S===0?k:"",S===0?C:"",S===0?j:"",S===0?$+"%":"",A.invoiceNo||"",D,Number(A.amount||0),z,T,A.paid?"Paid":"Partial"]),(A.partialPayments||[]).forEach(N=>p.push(["","","","","","","  ↳ Partial","",Number(N.amount||0),Number(N.amount||0),0,(N.date||"")+(N.txnNo?" | Txn:"+N.txnNo:"")]))}):p.push([v.vendor,v.trade||"",k,C,j,$+"%","","","","","",""]),p.push([])});const y=g-w;p.push(["TOTAL","",g,w,y,(g?Math.min(100,Math.round(w/g*100)):0)+"%","","","","","",""]);const b=t.utils.aoa_to_sheet(p);b["!cols"]=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];const m=u.replace(/[^a-zA-Z0-9 ]/g,"").substring(0,31);t.utils.book_append_sheet(i,b,m)});const d="AllTradeLedgers_"+(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+".xlsx";t.writeFile(i,d),P("📊 All Trade Excel downloaded")}catch(t){console.error(t),P("⚠ Excel error: "+t.message)}}function Mg(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(i=>i.id===e);if(!n)return;const o=h("invd_"+e);n.paid=!0,n.paidDate=(o==null?void 0:o.value)||Ct(),te(),oe(),P("✓ Invoice marked as paid")}function Fg(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(g=>g.id===e);if(!n)return;const o=h("invpamt_"+e),i=h("invpdate_"+e),r=parseFloat(o==null?void 0:o.value)||0;if(!r){P("⚠ Enter partial payment amount");return}const s=Number(n.amount||0),c=(n.partialPayments||[]).reduce((g,w)=>g+Number(w.amount||0),0),l=s-c;if(r>l){P("⚠ Payment $"+r.toLocaleString()+" exceeds remaining balance $"+l.toLocaleString()),o&&(o.style.border="2px solid var(--red)",o.focus(),setTimeout(()=>o.style.border="",2e3));return}const d=(i==null?void 0:i.value)||Ct();n.partialPayments||(n.partialPayments=[]);const u=h("invptxn_"+e),f=(u==null?void 0:u.value.trim())||"",p=c+r;n.partialPayments.push({id:je(),amount:r,date:d,txnNo:f,note:""}),p>=s?(n.paid=!0,n.paidDate=d,P("✓ Invoice fully paid — full amount reached")):P("✓ Partial $"+r.toLocaleString()+" recorded · Remaining: $"+(l-r).toLocaleString()),te(),oe()}function _g(e,t,n){const o=B();if(!o)return;const i=(o.invoices||[]).find(s=>s.id===e);if(!i)return;const r=(i.partialPayments||[]).find(s=>s.id===t);r&&(r.txnNo=n,te(),P("✓ Transaction # saved"))}function Rg(e,t){const n=B();if(!n)return;const o=(n.invoices||[]).find(i=>i.id===e);o&&(o.partialPayments=(o.partialPayments||[]).filter(i=>i.id!==t),te(),oe(),P("Payment removed"))}function Pu(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(i=>i.id===e);if(!n)return;const o=n.lienFiles||[];if(!o.length){P("⚠ No signed waivers uploaded for this invoice");return}o.forEach((i,r)=>setTimeout(()=>bn(i.id),r*200)),P("⬇ Downloading "+o.length+" waiver file"+(o.length!==1?"s":""))}function ju(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(i=>i.id===e);if(!n)return;const o=n.lienFiles||[];if(!o.length){P("⚠ No signed waivers uploaded for this invoice");return}o.forEach((i,r)=>setTimeout(()=>ul(i.id),r*200)),P("Opening "+o.length+" waiver file"+(o.length!==1?"s":""))}function Og(e){const t=B();if(!t)return;const n=(t.invoices||[]).find(o=>o.id===e);n&&(n.paid=!1,n.paidDate="",te(),oe(),P("Invoice unmarked"))}function Vg(e){const t=B();!t||!confirm("Delete this invoice?")||(t.invoices=(t.invoices||[]).filter(n=>n.id!==e),te(),oe(),P("🗑 Deleted"))}function Ug(){const e=B();if(!e){P("⚠ No project");return}const t=e.invoices||[];if(!t.length){P("⚠ No invoices to export");return}(e.quotes||[]).filter(d=>d.status==="approved").reduce((d,u)=>d+Number(u.amount||0),0);const o=t.reduce((d,u)=>d+Number(u.amount||0),0),i=t.filter(d=>d.paid).reduce((d,u)=>d+Number(u.amount||0),0),r=t.filter(d=>!d.paid).reduce((d,u)=>d+Number(u.amount||0),0),s=t.map(function(d,u){return'<tr style="background:'+(u%2===0?"#fff":"#fafaf8")+'"><td style="padding:5px 8px;font-size:10px;font-weight:600;border-bottom:1px solid #eee">'+(d.vendor||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(d.invoiceNo||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(d.description||"—")+'</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee;white-space:nowrap">'+(d.invoiceDate?d.invoiceDate:"—")+'</td><td style="padding:5px 8px;font-size:10px;color:'+(d.dueDate&&new Date(d.dueDate+"T12:00:00")<new Date&&!d.paid?"#9B1F1F":"#555")+';border-bottom:1px solid #eee;white-space:nowrap">'+(d.dueDate?d.dueDate:"—")+'</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(d.amount||0).toLocaleString()+'</td><td style="padding:5px 8px;border-bottom:1px solid #eee">'+(d.paid?'<span style="color:#2D6A0F;font-weight:700">&#10003; Paid</span>'+(d.paidDate?' <span style="font-size:9px;color:#999">'+d.paidDate+"</span>":""):'<span style="color:#9B1F1F">Due</span>')+'</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap;color:'+(d.paid?"#2D6A0F":"#9B1F1F")+'">$'+(d.paid?0:Number(d.amount||0)).toLocaleString()+"</td></tr>"}).join(""),c='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Invoice Report &mdash; '+e.name+'</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:18px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.7}table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:6px 8px;font-size:9px;text-transform:uppercase;text-align:left}.tot td{background:#0C1B2E;color:#fff;font-weight:700}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body><h1>Invoice Tracker Report</h1><div class="meta">'+e.name+" &nbsp;&middot;&nbsp; "+fe(e)+"<br>Livio Address: "+ee+"<br>Permit: "+(e.permit||"&mdash;")+" &nbsp;&middot;&nbsp; "+Ce+" &nbsp;&middot;&nbsp; "+new Date().toLocaleDateString()+"</div><table><thead><tr><th>Subcontractor</th><th>Invoice #</th><th>Description</th><th>Invoice Date</th><th>Due Date</th><th>Amount</th><th>Status</th><th>Outstanding</th></tr></thead><tbody>"+s+'<tr class="tot"><td colspan="5">TOTAL</td><td>$'+o.toLocaleString()+'</td><td style="color:#9FE1CB">&#10003; $'+i.toLocaleString()+'</td><td style="color:'+(r>0?"#F09595":"#9FE1CB")+'">$'+r.toLocaleString()+'</td></tr></tbody></table><div style="margin-top:12px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">'+Ce+" &middot; "+ee+" &middot; "+e.name+" &middot; Generated "+new Date().toLocaleDateString()+"</div></body></html>",l=window.open("","_blank");if(!l){P("⚠ Pop-up blocked");return}l.document.write(c),l.document.close(),setTimeout(function(){l.focus(),l.print()},600),P("🖨 Invoice report opened")}function Hg(){const e=B();if(!e){P("⚠ No project");return}if(P("📊 Building Excel…",3e3),window.XLSX)Gd(e);else{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",t.onload=()=>Gd(e),t.onerror=()=>P("⚠ Could not load Excel library"),document.head.appendChild(t)}}function Gd(e){try{const t=window.XLSX,n=t.utils.book_new(),o=e.invoices||[],i=(e.quotes||[]).filter(f=>f.status==="approved"),r=[["INVOICE TRACKER — "+e.name],["Project:",e.name,"","Project Address:",fe(e)],["Livio Address:",ee,"","Generated:",new Date().toLocaleDateString()],["Permit:",e.permit||""],[],["Subcontractor","Invoice #","Description","Invoice Date","Due Date","Amount","Status","Date Paid","Outstanding"]];o.forEach(f=>{r.push([f.vendor||"",f.invoiceNo||"",f.description||"",f.invoiceDate||"",f.dueDate||"",Number(f.amount||0),f.paid?"Paid":"Outstanding",f.paidDate||"",f.paid?0:Number(f.amount||0)])}),r.push([]);const s=o.reduce((f,p)=>f+Number(p.amount||0),0),c=o.filter(f=>f.paid).reduce((f,p)=>f+Number(p.amount||0),0),l=o.filter(f=>!f.paid).reduce((f,p)=>f+Number(p.amount||0),0);r.push(["TOTAL","","","","",s,"","",l]),r.push(["Contract Total (Approved):","","","","",i.reduce((f,p)=>f+Number(p.amount||0),0)]);const d=t.utils.aoa_to_sheet(r);d["!cols"]=[{wch:28},{wch:14},{wch:28},{wch:14},{wch:12},{wch:14},{wch:12},{wch:12},{wch:14}],t.utils.book_append_sheet(n,d,"Invoice Tracker");const u=(e.name.replace(/[^a-zA-Z0-9_\-]/g,"_")||"Project")+"_InvoiceTracker.xlsx";t.writeFile(n,u),P("📊 Invoice Excel downloaded")}catch(t){console.error(t),P("⚠ Excel error: "+t.message)}}function gl(){const e=B();if(!e)return;const t=e.vendors||[];h("ct-ven").textContent=t.length;const n=h("ven-content");if(!n)return;if(t.forEach(i=>W(i.files||[])),!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🤝</div>No vendors added yet. Click + Add Vendor to start.</div>';return}const o=(e.quotes||[]).filter(i=>i.status==="approved");n.innerHTML=t.map((i,r)=>{const s=o.find(l=>l.id===i.quoteId)||null,c=(i.files||[]).length?'<div style="display:flex;flex-direction:column;gap:4px;margin-top:6px">'+(i.files||[]).map(l=>`<div style="display:flex;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:4px 10px">
            <span style="font-size:13px">${rt(l.name)}</span>
            <span style="font-size:11px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</span>
            <button class="a-dl" onclick="dlFile('${l.id}')" title="Download">⬇</button>
          </div>`).join("")+"</div>":'<div style="font-size:11px;color:var(--muted);font-style:italic;margin-top:6px">No contract files attached</div>';return`<div class="panel" style="margin-bottom:14px">
      <div class="ph" style="background:var(--navy)">
        <div>
          <span class="ph-title" style="color:#fff;font-size:14px">${i.vendor}</span>
          ${s?`<span style="font-size:11px;color:#8AAAC8;margin-left:10px">${s.scope||""}</span>`:""}
          ${i.contractNo?`<span style="background:rgba(255,255,255,.1);color:#8AAAC8;font-size:10px;padding:2px 8px;border-radius:4px;margin-left:8px">Contract # ${i.contractNo}</span>`:""}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="generateVendorContract('${i.id}')">🖨 View Contract PDF</button>
          <button class="btn btn-xs" style="background:rgba(45,106,15,.3);color:#9FE1CB;border:1px solid rgba(45,106,15,.5);font-size:10px" onclick="sendContractEmail('${i.id}')">✉ Send for Signing</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('venfiles','${i.id}')">📎 Attach</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('vendor','${i.id}')">✏ Edit</button>
          <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4);font-size:10px" onclick="delVendor('${i.id}')">🗑</button>
        </div>
      </div>
      <div style="padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px">
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Type</div><div style="font-size:12px;font-weight:600">${i.contractType||"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Value</div><div style="font-size:14px;font-weight:700;font-family:'Barlow Condensed',sans-serif;color:var(--navy)">${i.amount?"$"+Number(i.amount).toLocaleString():"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Start Date</div><div style="font-size:12px">${i.startDate?J(i.startDate):"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">End Date</div><div style="font-size:12px">${i.endDate?J(i.endDate):"—"}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Status</div>
          <span style="display:inline-block;padding:2px 9px;border-radius:4px;font-size:10px;font-weight:700;background:${i.status==="active"?"var(--green-l)":i.status==="signed"?"var(--blue-l)":i.status==="expired"?"var(--red-l)":"var(--bg)"};color:${i.status==="active"?"var(--green)":i.status==="signed"?"var(--blue)":i.status==="expired"?"var(--red)":"var(--muted)"}">
            ${i.status?i.status.charAt(0).toUpperCase()+i.status.slice(1):"—"}
          </span>
        </div>
        ${i.notes?`<div style="grid-column:1/-1"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Notes</div><div style="font-size:11px;color:var(--text)">${i.notes}</div></div>`:""}
      </div>
      <!-- Contract files -->
      <div style="padding:10px 16px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:4px">📄 Contract Documents (${(i.files||[]).length})</div>
        ${c}
        <button class="btn btn-ghost btn-xs" style="margin-top:8px;font-size:10px" onclick="openModal('venfiles','${i.id}')">+ Add / Manage Files</button>
      </div>
      ${(()=>{const l=(e.invoices||[]).filter(d=>i.quoteId&&d.quoteId&&d.quoteId===i.quoteId||d.vcId&&d.vcId===i.id?!0:!d.quoteId&&!d.vcId&&d.vendor&&d.vendor===i.vendor?(e.vendors||[]).filter(f=>f.vendor===d.vendor).length===1:!1);return l.length?`<div style="padding:10px 16px;border-top:1px solid var(--border)">
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
              <td style="padding:4px 8px;text-align:right;font-family:'Barlow Condensed',sans-serif;font-weight:700">${F(d.amount||0)}</td>
              <td style="padding:4px 8px"><span style="padding:2px 6px;border-radius:3px;font-size:9px;font-weight:700;background:${d.paid?"var(--green-l)":d.approvalStatus==="approved"?"var(--blue-l)":d.approvalStatus==="rejected"?"var(--red-l)":"var(--amber-l)"};color:${d.paid?"var(--green)":d.approvalStatus==="approved"?"var(--blue)":d.approvalStatus==="rejected"?"var(--red)":"var(--amber)"}">${d.paid?"Paid":d.approvalStatus==="approved"?"Approved":d.approvalStatus==="rejected"?"Rejected":"Pending"}</span></td>
            </tr>`).join("")}</tbody>
          </table>
        </div>`:""})()}
    </div>`}).join("")}function Au(e){const n=e.options[e.selectedIndex].value,o=At().find(s=>s.id===n);if(!o)return;const i=document.getElementById("f-ven-email"),r=document.getElementById("f-ven-trade");i&&o.email&&(i.value=o.email),r&&o.trade&&(r.value=o.trade)}let Ye=[];function Du(){const e=h("ven-ms-list");if(!e)return;const t=Ye.length;Ye.push({id:je(),name:"",amount:"",dueDate:""});const n=document.createElement("div");n.id="venms_"+t,n.style.cssText="display:flex;gap:6px;align-items:flex-start;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px",n.innerHTML=[`<div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Milestone</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" value="" oninput="venMsChange(${t},'name',this.value)" placeholder="e.g. Final Payment"/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Amount ($)</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="number" value="" oninput="venMsChange(${t},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">%</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${t}" value="—" readonly/></div>`,`<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Due Date</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="date" value="" oninput="venMsChange(${t},'dueDate',this.value)"/></div>`,`<button type="button" onclick="venRemoveMilestone(${t})" style="margin-top:18px;background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;padding:0 3px">×</button>`].join(""),e.appendChild(n),oo()}function Wg(e,t,n){Ye[e]&&(Ye[e][t]=n),oo()}function qg(e){if(!Ye[e])return;Ye[e]._deleted=!0;const t=h("venms_"+e);t&&(t.style.opacity=".3",t.style.pointerEvents="none"),oo()}function Nu(){var t;const e=parseFloat((t=h("f-ven-amt"))==null?void 0:t.value)||0;Ye.forEach((n,o)=>{const i=e&&n.amount?Math.round(Number(n.amount)/e*100)+"%":"—",r=h("venms_pct_"+o);r&&(r.value=i)}),oo()}function oo(){const e=Ye.filter(n=>!n._deleted).reduce((n,o)=>n+Number(o.amount||0),0),t=h("ven-ms-total");t&&(t.textContent=e>0?"Total: $"+e.toLocaleString():"No milestones yet")}function xl(e,t){const n=B();if(!n)return null;const o=(n.invoices||[]).find(b=>b.id===e);if(!o)return null;const i=(n.quotes||[]).find(b=>b.id===o.quoteId),r=o.vendor||(i?i.vendor:"")||"Vendor",s=o.vendorEmail||(()=>{const b=(n.vendors||[]).find(m=>m.vendor===r||m.vdirId===o.vdirId);return b?b.vendorEmail:""})(),c=n.name||"Project",l=n.address||"",d=o.invoiceNo||e,u=F(o.amount||0),f=o.invoiceDate?J(o.invoiceDate):"",g={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Conditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Conditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",w=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,y=`Dear ${r},

Please find enclosed the ${g} for the following:

Project: ${c}
Address: ${l}
Invoice #: ${d}
Invoice Date: ${f}
Payment Amount: ${u}${w}

Please sign and return this waiver at your earliest convenience.

Best regards,
Livio Building Systems`;return{p:n,inv:o,q:i,vendorName:r,vendorEmail:s,projName:c,projAddr:l,invNo:d,invAmt:u,invDate:f,waiverDesc:g,body:y}}function Gg(e,t){var E;const n=xl(e,t);if(!n)throw new Error("Lien waiver data not found.");if(!window.jspdf||!window.jspdf.jsPDF)throw new Error("PDF library not loaded yet. Try again.");const{jsPDF:o}=window.jspdf,i=new o({unit:"pt",format:"letter"}),r=i.internal.pageSize.getWidth(),s=40,c=40,l=r-s-c;let d=44;const u={"Conditional Progress":{section:"Civil Code § 8132",title:"CONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT",notice:"NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.",throughDateLabel:"Through Date:",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant's receipt of payment from the financial institution on which the following check is drawn:",paymentFields:[["Maker of Check:","Livio Building Systems"],["Amount of Check:",n.invAmt],["Check Payable to:",n.vendorName]],exceptions:["(1) Retentions.","(2) Extras for which the claimant has not received payment.","(3) The following progress payments for which the claimant has previously given a conditional waiver and release but has not received payment:","Date(s) of waiver and release: _______________________________","Amount(s) of unpaid progress payment(s): $_____________________","(4) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment."]},"Unconditional Progress":{section:"Civil Code § 8134",title:"UNCONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT",notice:"NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.",throughDateLabel:"Through Date:",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has received the following progress payment:",paymentFields:[["Amount of Progress Payment:",n.invAmt]],exceptions:["(1) Retentions.","(2) Extras for which the claimant has not received payment.","(3) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment."]},"Conditional Final":{section:"Civil Code § 8136",title:"CONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT",notice:"NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.",throughDateLabel:"",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant's receipt of payment from the financial institution on which the following check is drawn:",paymentFields:[["Maker of Check:","Livio Building Systems"],["Amount of Check:",n.invAmt],["Check Payable to:",n.vendorName]],exceptions:["Disputed claims for extras in the amount of: $_____________________"]},"Unconditional Final":{section:"Civil Code § 8138",title:"UNCONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT",notice:"NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.",throughDateLabel:"",body:"This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for all labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has been paid in full.",paymentFields:[],exceptions:["Disputed claims for extras in the amount of: $_____________________"]}},f=u[t]||u["Conditional Progress"],p="Livio Building Systems",g=((E=n.p)==null?void 0:E.client)||n.projName||"",w=n.invDate||new Date().toLocaleDateString("en-US"),y=(C,k=10,j=[65,65,65],$=14,A="normal")=>{i.setFont("helvetica","normal"),A!=="normal"&&i.setFont("helvetica",A),i.setFontSize(k),i.setTextColor(...j);const S=i.splitTextToSize(String(C||""),l);i.text(S,s,d),d+=Math.max($,S.length*$)};i.setFillColor(26,107,196),i.rect(0,0,r,78,"F"),i.setFont("helvetica","bold"),i.setFontSize(18),i.setTextColor(255,255,255),i.text("LIVIO BUILDING SYSTEMS",s,36),i.setFontSize(9),i.text("California Statutory Lien Waiver",s,56),d=100,i.setFont("helvetica","bold"),i.setFontSize(15),i.setTextColor(12,27,46),y(f.title,15,[12,27,46],20,"bold"),y(f.section,9,[110,110,110],14),y(f.notice,9,[135,35,35],13,"bold"),d+=4,y("Identifying Information",11,[26,107,196],16,"bold"),y(`Name of Claimant: ${n.vendorName}`,10,[70,70,70],13),y(`Name of Customer: ${p}`,10,[70,70,70],13),y(`Job Location: ${n.projAddr||n.projName||"-"}`,10,[70,70,70],13),y(`Owner: ${g||"-"}`,10,[70,70,70],13),f.throughDateLabel&&y(`${f.throughDateLabel} ${w}`,10,[70,70,70],13),d+=6,i.setDrawColor(26,107,196),i.setLineWidth(1),i.line(s,d,r-c,d),d+=18,y(f.title.includes("UNCONDITIONAL")?"Unconditional Waiver and Release":"Conditional Waiver and Release",11,[26,107,196],16,"bold"),y(f.body,9.5,[55,55,55],14),f.paymentFields.forEach(([C,k])=>{y(`${C} ${k||""}`,10,[70,70,70],13)}),d+=18,y("Exceptions",11,[26,107,196],16,"bold"),f.exceptions.forEach(C=>{y(C,9.5,[55,55,55],14)}),d+=16,i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor(26,107,196),i.text("Signature",s,d),d+=30,i.setDrawColor(140,140,140),i.setLineWidth(.8),i.line(s,d,r-c,d),d+=32,i.text("Claimant's Signature",s,d),i.text("Date of Signature",r-c-110,d),d+=30,i.line(s,d,r-180,d),i.line(r-150,d,r-c,d),d+=28,i.text("Claimant's Title",s,d),d+=30,i.line(s,d,r-240,d),i.setFont("helvetica","italic"),i.setFontSize(8),i.setTextColor(120,120,120),i.text(`Prefilled from project ${n.projName} / invoice ${n.invNo}`,s,i.internal.pageSize.getHeight()-24);const b=i.output("datauristring"),m=String(b).split(",")[1]||"",v=(n.invNo||"Lien-Waiver").replace(/[^a-z0-9-_]+/gi,"_"),x=String(t||"waiver").replace(/[^a-z0-9-_]+/gi,"_");return{filename:`${v}-${x}.pdf`,content:m,contentType:"application/pdf"}}function es(e,t){const n=xl(e,t);if(!n)return;const{vendorName:o,projName:i,projAddr:r,invNo:s,invAmt:c,invDate:l}=n,u={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Unconditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Unconditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",f=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,p=`Dear ${o},

Please find enclosed the ${u} for the following:

Project: ${i}
Address: ${r}
Invoice #: ${s}
Invoice Date: ${l}
Payment Amount: ${c}${f}

Please sign and return this waiver at your earliest convenience.

Best regards,
Livio Building Systems`;h("lien-email-invid").value=e,h("lien-email-type").value=t,h("lien-email-title").textContent=t+" Lien Waiver",h("lien-email-to").value=n.vendorEmail,h("lien-email-subject").value=u+" — "+i+" / Inv #"+s,h("lien-email-body").value=p;const g=h("lien-email-status");g&&(g.innerHTML=wn(Nt())),h("mo-lien-email").classList.add("open")}function ts(){h("mo-lien-email").classList.remove("open")}function Yg(e){var r,s;const t=(r=h("lien-email-invid"))==null?void 0:r.value,n=(s=h("lien-email-type"))==null?void 0:s.value;if(!t||!n)return;const o=B();if(!o)return;const i=(o.invoices||[]).find(c=>c.id===t);i&&(i.lienSent||(i.lienSent=[]),i.lienSent.push({id:je(),type:n,date:Ct(),sentTo:e}),te(),br())}function Yd(){var s,c;const e=h("lien-email-to").value.trim(),t=h("lien-email-subject").value.trim(),n=h("lien-email-body").value.trim(),o=(s=h("lien-email-invid"))==null?void 0:s.value,i=(c=h("lien-email-type"))==null?void 0:c.value;if(!e){P("⚠ Recipient email is required");return}let r=[];try{o&&i&&(r=[Gg(o,i)])}catch(l){P("âš  Unable to attach lien waiver PDF: "+(l.message||l),"error");return}Sr({to:e,subject:t,message:n,attachments:r}).then(function(){Yg(e),ts(),P("✉ Lien waiver email sent")}).catch(function(l){console.error("Email error:",l),P("⚠ Email send failed: "+l.message,"error")})}function ns(e){const t=B();if(!t)return;const n=(t.vendors||[]).find(l=>l.id===e);if(!n)return;const o=n.vendorEmail||"",i="Subcontract Agreement — "+n.vendor+" / "+t.name,r=(n.milestones||[]).length?`

Payment Milestones:
`+n.milestones.map(function(l){return"  • "+l.name+" ($"+Number(l.amount||0).toLocaleString()+")"}).join(`
`):"",s="Dear "+n.vendor+`,

Please find attached the Subcontract Agreement for:

Project: `+t.name+`
Address: `+(t.address||"")+`
Contract #: `+(n.contractNo||"N/A")+`
Contract Value: $`+Number(n.amount||0).toLocaleString()+r+`

Please review, sign, and return at your earliest convenience.

Best regards,
Livio Building Systems`;h("cemail-vid").value=e,h("cemail-to").value=o,h("cemail-subject").value=i,h("cemail-body").value=s;const c=h("cemail-status");c&&(c.innerHTML=wn(Nt())),h("mo-contract-email").classList.add("open")}function Iu(){h("mo-contract-email").classList.remove("open")}function Jg(){const e=h("cemail-to").value.trim(),t=h("cemail-subject").value.trim(),n=h("cemail-body").value.trim();if(!e){P("⚠ Recipient email is required");return}Sr({to:e,subject:t,message:n}).then(function(){Iu(),P("✉ Contract email sent")}).catch(function(o){console.error("Email error:",o),P("⚠ Email send failed: "+o.message,"error")})}es=function(e,t){const n=xl(e,t);if(!n)return;const{vendorName:o,projName:i,projAddr:r,invNo:s,invAmt:c,invDate:l}=n,u={"Conditional Progress":"Conditional Waiver and Release on Progress Payment","Unconditional Progress":"Unconditional Waiver and Release on Progress Payment","Conditional Final":"Conditional Waiver and Release on Final Payment","Unconditional Final":"Unconditional Waiver and Release on Final Payment"}[t]||t+" Lien Waiver",f=t.startsWith("Conditional")?`

Note: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.`:`

Note: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.`,p=`Dear ${o},

Please find enclosed the ${u} for the following:

Project: ${i}
Project Address: ${r}
Livio Address: ${ee}
Invoice #: ${s}
Invoice Date: ${l}
Payment Amount: ${c}${f}

Please sign and return this waiver at your earliest convenience.

Best regards,
${el()}`;h("lien-email-invid").value=e,h("lien-email-type").value=t,h("lien-email-title").textContent=t+" Lien Waiver",h("lien-email-to").value=n.vendorEmail||Po(o),h("lien-email-subject").value=u+" — "+i+" / Inv #"+s,h("lien-email-body").value=p;const g=h("lien-email-status");g&&(g.innerHTML=wn(Nt())),h("mo-lien-email").classList.add("open")};ns=function(e){const t=B();if(!t)return;const n=(t.vendors||[]).find(l=>l.id===e);if(!n)return;const o=(n.vendorEmail||Po(n.vendor)||"").trim(),i="Subcontract Agreement — "+n.vendor+" / "+t.name,r=(n.milestones||[]).length?`

Payment Milestones:
`+n.milestones.map(function(l){return"  • "+l.name+" ($"+Number(l.amount||0).toLocaleString()+")"}).join(`
`):"",s="Dear "+n.vendor+`,

Please find attached the Subcontract Agreement for:

Project: `+t.name+`
Project Address: `+fe(t)+`
Livio Address: `+ee+`
Contract #: `+(n.contractNo||"N/A")+`
Contract Value: $`+Number(n.amount||0).toLocaleString()+r+`

Please review, sign, and return at your earliest convenience.

Best regards,
`+el();h("cemail-vid").value=e,h("cemail-to").value=o,h("cemail-subject").value=i,h("cemail-body").value=s;const c=h("cemail-status");c&&(c.innerHTML=wn(Nt())),h("mo-contract-email").classList.add("open")};function Qg(e){const t=B();!t||!confirm("Delete this vendor contract?")||(t.vendors=(t.vendors||[]).filter(n=>n.id!==e),te(),oe(),P("🗑 Deleted"))}function hl(){const e=B();if(!e)return;const t=e.checklist||[];h("ct-chk").textContent=t.length,h("chk-total").textContent=t.length,h("chk-done").textContent=t.filter(i=>i.status==="done").length,h("chk-prog").textContent=t.filter(i=>i.status==="inprogress").length,h("chk-open").textContent=t.filter(i=>!i.status||i.status==="open").length;const n=h("chk-content");if(!n)return;if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">☑</div>No checklist items yet. Click + Add Item to start.</div>';return}const o={};t.forEach(i=>{const r=i.category||"General";o[r]||(o[r]=[]),o[r].push(i)}),n.innerHTML=Object.entries(o).map(([i,r])=>{const s=r.filter(d=>d.status==="done").length,c=r.length?Math.round(s/r.length*100):0,l=r.map((d,u)=>{const f=u%2===0?"#fff":"var(--bg)",p=[["open","Open","var(--red)"],["inprogress","In Progress","var(--amber)"],["done","Done","var(--green)"]],g=(d.comments||[]).slice(-1)[0],w=(d.comments||[]).length;return`<tr style="background:${f}">
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
              ${w>1?`<button onclick="chkShowComments('${d.id}')" style="margin-top:4px;background:none;border:none;font-size:9px;color:var(--blue);cursor:pointer;padding:0;text-decoration:underline">View all ${w} comments ▾</button>`:""}
            </div>
          </div>
        </td>
        <td style="padding:8px 10px">
          <select onchange="chkSetStatus('${d.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;color:var(--text);cursor:pointer">
            ${p.map(([y,b])=>`<option value="${y}" ${d.status===y||!d.status&&y==="open"?"selected":""}>${b}</option>`).join("")}
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
        <span class="ph-title" style="color:#fff">${i}</span>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:80px;height:5px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${c}%;background:${c===100?"#9FE1CB":"#85B7EB"};border-radius:3px"></div>
            </div>
            <span style="font-size:10px;color:#8AAAC8">${s}/${r.length} · ${c}%</span>
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
    </div>`}).join("")}function Kg(e){const t=B();!t||!confirm("Delete this item?")||(t.checklist=(t.checklist||[]).filter(n=>n.id!==e),te(),oe(),P("🗑 Deleted"))}function yl(){const e=B();if(!e)return;const t=e.qaqcLog||[];h("ct-qaqc").textContent=t.length,h("qa-total").textContent=t.length,h("qa-ncr").textContent=t.filter(o=>o.type==="ncr"&&o.status!=="closed").length,h("qa-closed").textContent=t.filter(o=>o.status==="closed").length,h("qa-obs").textContent=t.filter(o=>o.type==="observation").length,t.forEach(o=>W(o.files||[]));const n=h("qa-content");if(n){if(!t.length){n.innerHTML='<div class="empty"><div class="empty-ic">🔍</div>No QA/QC entries yet. Click + Add QA/QC Entry to start.</div>';return}n.innerHTML=`<div class="panel">
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
        ${t.map((o,i)=>{const r=i%2===0?"#fff":"var(--bg)",s={ncr:"var(--red)",observation:"var(--amber)",rfi:"var(--blue)",punch:"var(--purple)",other:"var(--muted)"},c=o.type==="ncr"?"NCR":o.type==="rfi"?"RFI":o.type?o.type.charAt(0).toUpperCase()+o.type.slice(1):"Other",l=(o.files||[]).length?`<div style="display:flex;flex-direction:column;gap:2px">${(o.files||[]).map(d=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 5px"><span style="font-size:9px">${rt(d.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60px">${d.name}</span><button class="a-dl" style="font-size:8px;padding:1px 3px" onclick="dlFile('${d.id}')">⬇</button></div>`).join("")}<button class="btn btn-ghost btn-xs" style="font-size:8px;padding:1px 5px;margin-top:1px" onclick="openModal('qafiles','${o.id}')">+</button></div>`:`<button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qafiles','${o.id}')">📎 Attach</button>`;return`<tr style="background:${r}">
            <td style="padding:8px 12px;font-size:11px;font-weight:700;color:var(--navy)">${o.refNo||"—"}</td>
            <td style="padding:8px 10px">
              <span style="background:${s[o.type]||"#666"};color:#fff;padding:2px 7px;border-radius:4px;font-size:9px;font-weight:700">${c}</span>
              ${o.category?`<div style="font-size:9px;color:var(--muted);margin-top:3px">${o.category}</div>`:""}
            </td>
            <td style="padding:8px 10px;font-size:11px">${o.description||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${o.location||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${o.raisedBy||"—"}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${o.date?J(o.date):"—"}</td>
            <td style="padding:8px 10px">
              <select onchange="qaSetStatus('${o.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;cursor:pointer">
                ${[["open","Open"],["inprogress","In Progress"],["resolved","Resolved"],["closed","Closed"]].map(([d,u])=>`<option value="${d}" ${o.status===d?"selected":""}>${u}</option>`).join("")}
              </select>
            </td>
            <td style="padding:6px 8px">${l}</td>
            <td style="padding:8px 10px">
              <div style="display:flex;flex-direction:column;gap:3px">
                <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qaqc-item','${o.id}')">✏</button>
                <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 5px" onclick="delQAItem('${o.id}')">🗑</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`}}function Xg(e){const t=B();!t||!confirm("Delete this entry?")||(t.qaqcLog=(t.qaqcLog||[]).filter(n=>n.id!==e),te(),oe(),P("🗑 Deleted"))}function Zg(e){const t=e.files[0];if(!t)return;const n=new FileReader;n.onload=o=>{try{const i=JSON.parse(o.target.result);if(!i.name)throw new Error("Invalid");i.id="proj_"+je(),["works","milestones","quotes","plans","inspections"].forEach(r=>{i[r]||(i[r]=[])}),q.projects.push(i),q.activeId=i.id,te(),oe(),P("✓ Imported: "+i.name),no("dashboard")}catch{P("⚠ Invalid JSON file")}},n.readAsText(t)}function zu(){var r;const e=(((r=h("f-city"))==null?void 0:r.value)||"").trim().toLowerCase(),t=Nv[e],n=h("f-county"),o=h("county-ok"),i=h("city-ok");if(t){n&&(n.value=t.county),o&&(o.textContent="✓ Auto-filled"),i&&(i.textContent="✓ Recognized");const s=h("f-state");s&&t.state&&(s.value=t.state);const c=h("f-zip");c&&!c.value&&t.zip&&(c.value=t.zip)}else o&&(o.textContent=e?"⚠ Not in database — enter county manually":""),i&&(i.textContent="")}function ex(e,t){t.closest(".fr").querySelectorAll("label").forEach(o=>{o.style.borderColor="var(--border)",o.style.background="#fff"}),t.style.borderColor="var(--blue-m)",t.style.background="var(--blue-l)";const n=document.getElementById("f-status");n&&(n.value=e)}function tx(e,t){document.querySelectorAll(".cswatch").forEach(n=>n.classList.remove("sel")),t.classList.add("sel")}const os="livio_users_v1",bl="livio_session_v2",ea=[{id:"u1",username:"admin",password:"livio2026",role:"Admin",email:"admin@liviobuilding.com"},{id:"u2",username:"manager",password:"manager123",role:"Manager",email:"manager@liviobuilding.com"}],ta=["Admin","Manager","Viewer","Contractor","Site Supervisor","Project Engineer","Owner"],is="livio_roles_v1",Lu="livio_perms_v1",sn=[{id:"projects",label:"All Projects"},{id:"dashboard",label:"Dashboard"},{id:"works",label:"Works at Site"},{id:"milestones",label:"Milestones"},{id:"quotes",label:"Quotes"},{id:"plans",label:"Plans & Docs"},{id:"inspections",label:"Inspections"},{id:"vendors",label:"Vendor Contracts"},{id:"invoices",label:"Invoices"},{id:"payments",label:"Payments"},{id:"checklist",label:"Checklist"},{id:"qaqc",label:"QA/QC"},{id:"compliance",label:"Compliance"},{id:"export",label:"Export"},{id:"momentum",label:"Momentum"},{id:"daily-tracker",label:"Daily Tracker"},{id:"client-contract",label:"Client Contract"},{id:"client-invoice",label:"Client Invoice"},{id:"vendor-directory",label:"Vendor Directory"}];function kr(){try{const e=localStorage.getItem(Lu);return e?JSON.parse(e):{}}catch{return{}}}function nx(e){localStorage.setItem(Lu,JSON.stringify(e))}function ox(e){if(!e||e.role==="Admin")return sn.map(i=>i.id);const n=kr()[e.id];if(!n)return sn.map(i=>i.id);if(Array.isArray(n))return n.length?n:sn.map(i=>i.id);const o=Object.entries(n).filter(([i,r])=>r==="full"||r==="view").map(([i])=>i);return o.length?o:sn.map(i=>i.id)}function Bu(e,t){if(!e||e.role==="Admin")return"full";const o=kr()[e.id];if(!o)return"full";if(Array.isArray(o))return o.includes(t)?"full":"none";const i=o[t];return i||"full"}function ix(e){const t=It();return!t||t.role==="Admin"?!0:Bu(t,e)!=="none"}function rs(e){const t=It();return!t||t.role==="Admin"?!1:t.role==="Viewer"?!0:Bu(t,e)==="view"}function rx(e){const t=It();if(!t||t.role!=="Admin"){P("⚠ Admin only");return}const o=Cn().find(l=>l.id===e);if(!o||o.role==="Admin"){P("Admin users always have full access");return}const r=kr()[e]||{},s=Array.isArray(r)?r.reduce((l,d)=>(l[d]="full",l),{}):r;h("modal-title").textContent="Page Access — "+o.username+" ("+o.role+")",h("modal-body").innerHTML=`
    <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:var(--blue)">
      Set access level for each page. <strong>Full</strong> = edit &amp; view. <strong>View Only</strong> = read-only. <strong>No Access</strong> = page hidden.
    </div>
    <div style="display:flex;gap:6px;margin-bottom:10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">
      <div style="flex:2;color:var(--muted)">Page</div>
      <div style="flex:1;text-align:center;color:var(--green)">Full</div>
      <div style="flex:1;text-align:center;color:var(--amber)">View Only</div>
      <div style="flex:1;text-align:center;color:var(--red)">No Access</div>
    </div>
    ${sn.map(l=>{const d=s[l.id]||"none";return`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border:1px solid var(--border);border-radius:6px;margin-bottom:5px;background:${d==="full"?"var(--green-l)":d==="view"?"var(--amber-l)":"#fff"}">
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
    </div>`,h("mo").classList.add("open"),Q="access-ctrl-"+e;const c=document.querySelector(".modal-foot");c&&(c.style.display="none")}let tr={};function ax(e,t,n){tr[e]=t;const o=n.closest('div[style*="border:1px solid"]');o&&(o.style.background=t==="full"?"var(--green-l)":t==="view"?"var(--amber-l)":"#fff")}function sx(e){sn.forEach(t=>{tr[t.id]=e,document.querySelectorAll(`input[name="pg_${t.id}"]`).forEach(n=>{n.checked=n.value===e})}),document.querySelectorAll('#modal-body div[style*="border:1px solid"]').forEach(t=>{t.style.background=e==="full"?"var(--green-l)":e==="view"?"var(--amber-l)":"#fff"})}function lx(e){const t={};sn.forEach(o=>{const i=document.querySelector(`input[name="pg_${o.id}"]:checked`);t[o.id]=i?i.value:"none"}),Object.assign(t,tr);const n=kr();n[e]=t,nx(n),tr={},yr(),me(),P("✓ Page access saved for "+e),Ru()}function Xn(){try{const e=localStorage.getItem(is),t=e?JSON.parse(e):null;return t&&t.length?t:(localStorage.setItem(is,JSON.stringify(ta)),[...ta])}catch{return[...ta]}}function Tu(e){localStorage.setItem(is,JSON.stringify(e))}function wl(){const e=document.getElementById("nu-role");if(!e)return;const t=Xn(),n=e.value||"Manager";e.innerHTML=t.map(o=>`<option value="${o}"${o===n?" selected":""}>${o}</option>`).join("")}function Cl(){const e=Xn();h("modal-title").textContent="Manage Roles",h("modal-body").innerHTML=`
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
    </div>`,h("mo").classList.add("open"),Q="manage-roles";const t=document.querySelector(".modal-foot");t&&(t.style.display="none"),setTimeout(()=>{var n;return(n=document.getElementById("new-role-input"))==null?void 0:n.focus()},100)}function dx(){const e=document.getElementById("new-role-input"),t=((e==null?void 0:e.value)||"").trim();if(!t){P("⚠ Enter a role name");return}const n=Xn();if(n.find(o=>o.toLowerCase()===t.toLowerCase())){P("⚠ Role already exists");return}n.push(t),Tu(n),wl(),P('✓ Role "'+t+'" added'),Cl()}function cx(e){if(!confirm('Remove role "'+e+'"?'))return;const n=Cn().find(i=>i.role===e);if(n){P('⚠ Cannot delete — role is assigned to user "'+n.username+'"');return}const o=Xn().filter(i=>i!==e);Tu(o),wl(),P('🗑 Role "'+e+'" removed'),Cl()}function Cn(){try{const e=localStorage.getItem(os),t=e?JSON.parse(e):null;return t&&t.length?t:(localStorage.setItem(os,JSON.stringify(ea)),JSON.parse(JSON.stringify(ea)))}catch{return JSON.parse(JSON.stringify(ea))}}function Mu(e){localStorage.setItem(os,JSON.stringify(e))}function px(){const e=document.getElementById("sidebar"),t=document.getElementById("sb-overlay");e.classList.toggle("mob-open"),t.classList.toggle("show")}function Fu(){var e,t;(e=document.getElementById("sidebar"))==null||e.classList.remove("mob-open"),(t=document.getElementById("sb-overlay"))==null||t.classList.remove("show")}document.querySelectorAll(".sb-nav a").forEach(e=>e.addEventListener("click",()=>{window.innerWidth<=768&&Fu()}));function _u(){const e=document.getElementById("mob-menu-btn");e&&(e.style.display=window.innerWidth<=768?"flex":"none")}window.addEventListener("resize",_u);_u();function ux(){var s,c;const e=(((s=document.getElementById("login-user"))==null?void 0:s.value)||"").trim(),t=(((c=document.getElementById("login-pass"))==null?void 0:c.value)||"").trim(),n=document.getElementById("login-error"),o=document.querySelector('#login-screen button[onclick="doLogin()"]');if(!e||!t){n&&(n.style.display="",n.textContent="Please enter username and password.");return}o&&(o.textContent="Signing in…",o.disabled=!0);const r=Cn().find(l=>l.username===e&&l.password===t);if(r){sessionStorage.setItem(bl,JSON.stringify({id:r.id,username:r.username,role:r.role}));const l=document.getElementById("login-screen");l&&(l.style.display="none"),n&&(n.style.display="none");const d=document.getElementById("sb-user-label");d&&(d.textContent=r.username+" ("+r.role+")"),document.body.classList.add("logged-in"),yr(),nl(),no("projects"),setTimeout(()=>{ol(),il(),rl(),al(),sl(),ll(),br(),fl(),gl(),hl(),yl(),dl(),cl(),io()},300)}else{o&&(o.textContent="Sign In →",o.disabled=!1),n&&(n.style.display="",n.textContent="Incorrect username or password.");const l=document.getElementById("login-pass");l&&(l.value="",l.focus())}}function It(){try{const e=sessionStorage.getItem(bl);return e?JSON.parse(e):null}catch{return null}}function fx(){sessionStorage.removeItem(bl),document.body.classList.remove("logged-in");const e=document.getElementById("login-screen");e&&(e.style.display="flex");const t=document.getElementById("login-user"),n=document.getElementById("login-pass"),o=document.getElementById("sb-user-label");t&&(t.value="",setTimeout(()=>t.focus(),100)),n&&(n.value=""),o&&(o.textContent="");const i=document.getElementById("login-error");i&&(i.style.display="none")}function mx(){const e=document.getElementById("login-pass");e&&(e.type=e.type==="password"?"text":"password")}function Ru(){const e=It();if(!e||e.role!=="Admin"){P("⚠ Only Admin can manage users");return}const n=Cn().map(i=>{const r=Xn().map(s=>`<option value="${s}"${i.role===s?" selected":""}>${s}</option>`).join("");return`<tr style="background:#fff;border-bottom:1px solid var(--border)">
      <td style="padding:7px 10px">
        <input value="${i.username}" onchange="quickEditUser('${i.id}','username',this.value)"
          style="font-size:12px;font-weight:600;border:1px solid transparent;border-radius:4px;padding:3px 6px;width:100%;background:transparent;outline:none"
          onfocus="this.style.borderColor='var(--blue)';this.style.background='#fff'" onblur="this.style.borderColor='transparent';this.style.background='transparent'"/>
      </td>
      <td style="padding:7px 10px">
        <select onchange="quickEditUser('${i.id}','role',this.value)"
          style="font-size:11px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;background:#fff;color:var(--text);cursor:pointer;width:100%">
          ${r}
        </select>
      </td>
      <td style="padding:7px 10px">
        <button onclick="editUser('${i.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;white-space:nowrap">🔑 Password</button>
      </td>
      <td style="padding:7px 10px">
        ${i.role!=="Admin"?`<button onclick="showAccessControl('${i.id}')" class="btn btn-blue btn-xs" style="font-size:9px">🔐 Pages</button>`:'<span style="font-size:9px;color:var(--blue);font-weight:700">Full</span>'}
      </td>
      <td style="padding:7px 10px">
        ${i.username!==e.username?`<button onclick="deleteUser('${i.id}')" class="btn btn-red btn-xs" style="font-size:9px">🗑</button>`:'<span style="font-size:10px;color:var(--muted)">You</span>'}
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
              ${Xn().map(i=>`<option value="${i}"${i==="Manager"?" selected":""}>${i}</option>`).join("")}
            </select>
            <button type="button" onclick="showManageRoles()" class="btn btn-ghost btn-xs" style="flex-shrink:0;font-size:10px" title="Add/edit roles">⚙ Roles</button>
          </div>
        </div>
        <div class="fr" style="align-items:flex-end">
          <button onclick="addNewUser()" class="btn btn-navy" style="width:100%">+ Add User</button>
        </div>
      </div>
    </div>`,h("mo").classList.add("open"),Q="manage-users",wl();const o=document.querySelector(".modal-foot");o&&(o.style.display="none")}const nr="livio_reset_v1";function vx(){const e=document.getElementById("forgot-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("forgot-user");t&&t.focus()}function Ou(){const e=document.getElementById("forgot-pass-screen");e&&(e.style.display="none"),["forgot-user","forgot-email"].forEach(o=>{const i=document.getElementById(o);i&&(i.value="")});const t=document.getElementById("forgot-error");t&&(t.style.display="none");const n=document.getElementById("forgot-success");n&&(n.style.display="none")}function gx(){var g,w;const e=(((g=document.getElementById("forgot-user"))==null?void 0:g.value)||"").trim(),t=(((w=document.getElementById("forgot-email"))==null?void 0:w.value)||"").trim(),n=document.getElementById("forgot-error"),o=document.getElementById("forgot-success");if(!e||!t){n&&(n.style.display="",n.textContent="Please enter both username and email.");return}if(!Cn().find(y=>y.username===e&&(y.email||"").toLowerCase()===t.toLowerCase())){n&&(n.style.display="",n.textContent="No account found with that username and email combination.");return}const s=String(Math.floor(1e5+Math.random()*9e5)),c=Date.now()+30*60*1e3,l=JSON.parse(localStorage.getItem(nr)||"{}");l[e]={code:s,expiry:c},localStorage.setItem(nr,JSON.stringify(l));const d=encodeURIComponent("Livio Building Systems — Password Reset"),u=["Hello "+e+",","","You requested a password reset for your Livio Building Systems account.","","Your reset code is: "+s,"","This code is valid for 30 minutes.","","Steps to reset: 1. Open the Livio Building Systems app  2. Click Forgot Password?  3. Click I have a reset code  4. Enter the code and your new password","","If you did not request this, please ignore this email.","","— Livio Building Systems"],f=encodeURIComponent(u.join(`
`));window.open("mailto:"+t+"?subject="+d+"&body="+f,"_self"),n&&(n.style.display="none"),o&&(o.style.display="",o.innerHTML="✓ Email client opened! Send the email to <strong>"+t+'</strong>. <br><span style="font-size:10px">Then come back and click <em>"I have a reset code"</em> below.</span>');const p=document.getElementById("forgot-reset-btn");p&&(p.style.display="")}function xx(){var n;Ou();const e=document.getElementById("reset-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("reset-user");t&&(t.value=((n=document.getElementById("forgot-user"))==null?void 0:n.value)||"",t.focus())}function Vu(){const e=document.getElementById("reset-pass-screen");e&&(e.style.display="none"),["reset-user","reset-code","reset-new","reset-conf"].forEach(n=>{const o=document.getElementById(n);o&&(o.value="")});const t=document.getElementById("reset-error");t&&(t.style.display="none")}function hx(){var u,f,p,g;const e=(((u=document.getElementById("reset-user"))==null?void 0:u.value)||"").trim(),t=(((f=document.getElementById("reset-code"))==null?void 0:f.value)||"").trim(),n=(((p=document.getElementById("reset-new"))==null?void 0:p.value)||"").trim(),o=(((g=document.getElementById("reset-conf"))==null?void 0:g.value)||"").trim(),i=document.getElementById("reset-error");if(!e||!t||!n||!o){i&&(i.style.display="",i.textContent="All fields are required.");return}const r=JSON.parse(localStorage.getItem(nr)||"{}"),s=r[e];if(!s||s.code!==t){i&&(i.style.display="",i.textContent="Invalid reset code.");return}if(Date.now()>s.expiry){i&&(i.style.display="",i.textContent="Reset code has expired. Please request a new one.");return}if(n.length<4){i&&(i.style.display="",i.textContent="New password must be at least 4 characters.");return}if(n!==o){i&&(i.style.display="",i.textContent="Passwords do not match.");return}const c=Cn(),l=c.find(w=>w.username===e);if(!l){i&&(i.style.display="",i.textContent="User not found.");return}l.password=n,Mu(c),delete r[e],localStorage.setItem(nr,JSON.stringify(r)),Vu();const d=document.getElementById("login-screen");d&&(d.style.display="flex"),setTimeout(()=>{const w=document.getElementById("login-user");w&&(w.value=e);const y=document.getElementById("login-error");y&&(y.style.display="",y.style.background="#EDF8E5",y.style.borderColor="#B8DCA0",y.style.color="#2D6A0F",y.textContent="✓ Password reset successfully. Please sign in with your new password.")},100)}function yx(){const e=document.getElementById("setup-pass-screen");e&&(e.style.display="flex");const t=document.getElementById("setup-user");t&&t.focus()}function Uu(){const e=document.getElementById("setup-pass-screen");e&&(e.style.display="none"),["setup-user","setup-curr","setup-new","setup-conf"].forEach(n=>{const o=document.getElementById(n);o&&(o.value="")});const t=document.getElementById("setup-error");t&&(t.style.display="none")}function bx(){var c,l,d,u;const e=(((c=document.getElementById("setup-user"))==null?void 0:c.value)||"").trim(),t=(((l=document.getElementById("setup-curr"))==null?void 0:l.value)||"").trim(),n=(((d=document.getElementById("setup-new"))==null?void 0:d.value)||"").trim(),o=(((u=document.getElementById("setup-conf"))==null?void 0:u.value)||"").trim(),i=document.getElementById("setup-error");if(!e||!t||!n||!o){i&&(i.style.display="",i.textContent="All fields are required.");return}const r=Cn(),s=r.find(f=>f.username===e&&f.password===t);if(!s){i&&(i.style.display="",i.textContent="Current username or password is incorrect.");return}if(n.length<4){i&&(i.style.display="",i.textContent="New password must be at least 4 characters.");return}if(n!==o){i&&(i.style.display="",i.textContent="New passwords do not match.");return}s.password=n,Mu(r),Uu(),P("✓ Password updated successfully")}const Hu="dt_vendor_directory";function At(){try{return JSON.parse(localStorage.getItem(Hu)||"[]")}catch{return[]}}function Wu(e){localStorage.setItem(Hu,JSON.stringify(e))}function io(){const e=h("vdir-content");if(!e)return;const t=At();if(!t.length){e.innerHTML='<div class="empty"><div class="empty-ic">📋</div><p>No vendors in directory yet.<br>Click <strong>+ Add Vendor</strong> to start building your subcontractor database.</p></div>';return}e.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px">'+t.map(n=>`<div class="panel" style="overflow:hidden">
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
    </div>`).join("")+"</div>"}function wx(e){const t=At(),n=e?t.find(o=>o.id===e):{};document.getElementById("vdir-modal-title").textContent=e?"Edit Vendor":"Add Vendor to Directory",document.getElementById("vdir-id").value=e||"",document.getElementById("vdir-name").value=n.name||"",document.getElementById("vdir-company").value=n.company||"",document.getElementById("vdir-phone").value=n.phone||"",document.getElementById("vdir-email").value=n.email||"",document.getElementById("vdir-trade").value=n.trade||"",document.getElementById("vdir-license").value=n.license||"",document.getElementById("vdir-bank").value=n.bank||"",document.getElementById("vdir-acct-type").value=n.acctType||"",document.getElementById("vdir-acct").value=n.acct||"",document.getElementById("vdir-routing").value=n.routing||"",document.getElementById("vdir-zelle").value=n.zelle||"",document.getElementById("vdir-notes").value=n.notes||"",document.getElementById("mo-vdir").classList.add("open")}function qu(){document.getElementById("mo-vdir").classList.remove("open")}function Cx(){const e=document.getElementById("vdir-name").value.trim(),t=document.getElementById("vdir-company").value.trim();if(!e&&!t){P("⚠ Name or Company is required");return}const n=document.getElementById("vdir-id").value||"vdir_"+Math.random().toString(36).slice(2,10),o={id:n,name:e,company:t,phone:document.getElementById("vdir-phone").value.trim(),email:document.getElementById("vdir-email").value.trim(),trade:document.getElementById("vdir-trade").value.trim(),license:document.getElementById("vdir-license").value.trim(),bank:document.getElementById("vdir-bank").value.trim(),acctType:document.getElementById("vdir-acct-type").value,acct:document.getElementById("vdir-acct").value.trim(),routing:document.getElementById("vdir-routing").value.trim(),zelle:document.getElementById("vdir-zelle").value.trim(),notes:document.getElementById("vdir-notes").value.trim()},i=At(),r=i.findIndex(s=>s.id===n);r>=0?i[r]=o:i.push(o),Wu(i),qu(),io(),P("✅ Vendor saved to directory!")}function Sx(e){if(!confirm("Remove this vendor from directory?"))return;const t=At().filter(n=>n.id!==e);Wu(t),io(),P("🗑 Vendor removed")}function kx(){window.nav=no,window.handleAdd=Tv,window.renderAll=oe,window.renderProjects=nl,window.renderDashboard=ol,window.renderWorks=il,window.renderMilestones=rl,window.renderQuotes=al,window.renderPlans=sl,window.renderInspections=ll,window.renderPayments=br,window.renderInvoices=fl,window.renderVendors=gl,window.renderChecklist=hl,window.renderQAQC=yl,window.renderCompliance=dl,window.renderExport=cl,window.renderVendorDirectory=io,window.renderSettingsPage=ku,window.updateSidebar=pu,window.buildSidebarNav=yr,window.saveDB=te,window.proj=B,window.DB=q,window.switchProj=Mv,window.delProj=Kv,window.openModal=wr,window.closeModal=me,window.saveModal=Yv,window.cityLookup=zu,window.pickColor=tx,window.selectQuoteStatus=ex,window.delItem=Jv,window.dlFile=bn,window.delPlan=Qv,window.openMarkPP=Rv,window.unmarkPP=Ov,window.delProgressPayment=Vv,window.unmarkPaid=Uv,window.updatePaidDate=Hv,window.delPayMs=Wv,window.runPaySmartSearch=typeof Od<"u"?Od:()=>{},window.clearPaySmartSearch=typeof Vd<"u"?Vd:()=>{},window.filterPayVendors=typeof Ka<"u"?Ka:()=>{},window.clearPaySearch=typeof Fd<"u"?Fd:()=>{},window.showAllPayVendors=typeof Md<"u"?Md:()=>{},window.exportPaymentLedgerPDF=ng,window.exportPaymentLedgerExcel=og,window.exportVCPaymentLedgerPDF=mg,window.exportVCPaymentLedgerExcel=vg,window.exportVendorNameLedgerPDF=Ng,window.exportVendorNameLedgerExcel=Ig,window.exportTradeLedgerPDF=Ag,window.exportTradeLedgerExcel=Dg,window.exportAllVendorNameLedgerPDF=zg,window.exportAllVendorNameLedgerExcel=Lg,window.exportAllTradeLedgerPDF=Bg,window.exportAllTradeLedgerExcel=Tg,window.markPaid=_v,window.openPayInvoice=()=>{},window.openLienWvr=()=>{},window.exportInvoicePDF=Ug,window.exportInvoiceExcel=Hg,window.invSwitchSource=Qa,window.invManualVendorChange=cg,window.invUpdateMilestones=gu,window.invMilestoneSelected=pg,window.openInvPayment=lg,window.closeInvPayment=er,window.saveInvPayment=vu,window.viewFile=ul,window.addPartialPayment=Fg,window.updatePartialTxn=_g,window.removePartialPayment=Rg,window.viewAllLienFiles=ju,window.downloadAllLienFiles=Pu,window.approveInvoice=ag,window.rejectInvoice=sg,window.deleteInvPayment=dg,window.unmarkInv=Og,window.markInvPaid=Mg,window.delInvoice=Vg,window.openLienEmail=typeof es<"u"?es:()=>{},window.closeLienEmail=typeof ts<"u"?ts:()=>{},window.sendLienEmail=typeof Yd<"u"?Yd:()=>{},window.openLedgerEmail=typeof Za<"u"?Za:()=>{},window.closeLedgerEmail=$u,window.sendLedgerEmail=jg,window.copyLedgerToClipboard=Pg,window.closeContractEmailModal=Iu,window.sendContractEmailModal=Jg,window.openContractEmailModal=typeof ns<"u"?ns:()=>{},window.exportMilestonePDF=ig,window.exportMilestoneExcel=rg,window.exportPDF=Zv,window.exportWord=eg,window.exportPPTX=tg,window.exportJSON=Xv,window.exportAllFiles=mu,window.importJSON=Zg,window.openVDirModal=wx,window.closeVDirModal=qu,window.saveVDir=Cx,window.deleteVDir=Sx,window.venDirSelect=Au,window.venAddMilestone=Du,window.venMsChange=Wg,window.venRemoveMilestone=qg,window.venUpdateMilestonePct=Nu,window.venUpdateTotal=oo,window.delVendor=Qg,window.delChkItem=Kg,window.delQAItem=Xg,window.doLogin=ux,window.doLogout=fx,window.toggleLoginPass=mx,window.showForgotPass=vx,window.closeForgotPass=Ou,window.doForgotPass=gx,window.showResetPass=xx,window.closeResetPass=Vu,window.doResetPass=hx,window.showSetupPass=yx,window.closeSetupPass=Uu,window.doSetupPass=bx,window.showManageUsers=Ru,window.currentUser=It,window.showManageRoles=Cl,window.addRole=dx,window.deleteRole=cx,window.showAccessControl=rx,window.acUpdate=ax,window.acSetAll=sx,window.saveAccessControl=lx,window.toggleMobMenu=px,window.closeMobMenu=Fu,window.saveEmailConfig=Sg,window.testEmailConfig=Eg,window.clearEmailConfig=kg,window.getApiBase=Kn,window.getBackendBase=xu,window.__LIVIO_API_BASE=Kn(),window.handleFileInput=pl,window.handleDrop=qv,window.removePending=Gv,window.dropZoneHTML=Ie,window.attachListHTML=He,window.regFiles=W,window.FA=jt,window.print=window.print,bg()}function Ex(){kx()}function $x(){const{loggedIn:e}=lu();return qe.useEffect(()=>{Ex()},[]),a.jsxs(a.Fragment,{children:[a.jsx(wv,{}),a.jsx("div",{className:"sb-overlay",id:"sb-overlay",onClick:()=>{var t;return(t=window.closeMobMenu)==null?void 0:t.call(window)}}),a.jsx(Cv,{}),a.jsxs("div",{className:"main",id:"app-main",children:[a.jsx(Sv,{}),a.jsxs("div",{className:"bal-strip",id:"bal-strip",children:[a.jsxs("div",{className:"bal-item",children:[a.jsx("div",{className:"bal-lbl",children:"Contract"}),a.jsx("div",{className:"bal-val",id:"bs-c",style:{color:"#fff"},children:"$0"})]}),a.jsx("div",{className:"bal-div"}),a.jsxs("div",{className:"bal-item",children:[a.jsx("div",{className:"bal-lbl",style:{color:"#9FE1CB"},children:"✓ Paid"}),a.jsx("div",{className:"bal-val",id:"bs-p",style:{color:"#9FE1CB"},children:"$0"})]}),a.jsx("div",{className:"bal-div"}),a.jsxs("div",{className:"bal-item",children:[a.jsx("div",{className:"bal-lbl",style:{color:"#F09595"},children:"Balance Due"}),a.jsx("div",{className:"bal-val",id:"bs-b",style:{color:"#F09595"},children:"$0"})]}),a.jsx("div",{className:"bal-div"}),a.jsxs("div",{className:"bal-prog-wrap",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[a.jsx("span",{style:{fontSize:"9px",color:"#546882",textTransform:"uppercase",letterSpacing:".5px"},children:"Progress"}),a.jsx("span",{style:{fontSize:"10px",fontWeight:700,color:"#fff"},id:"bs-pct",children:"0%"})]}),a.jsx("div",{style:{height:"5px",background:"rgba(255,255,255,.1)",borderRadius:"3px",overflow:"hidden",width:"130px"},children:a.jsx("div",{id:"bs-bar",style:{height:"100%",width:"0%",background:"#9FE1CB",borderRadius:"3px",transition:".5s"}})})]})]}),a.jsx(Av,{})]}),a.jsx("div",{className:"mo",id:"mo",onClick:t=>{var n;t.target===t.currentTarget&&((n=window.closeModal)==null||n.call(window))},children:a.jsxs("div",{className:"modal",children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",id:"modal-title",children:"Add"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeModal)==null?void 0:t.call(window)},children:"✕"})]}),a.jsx("div",{className:"modal-body",id:"modal-body"}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var t;return(t=window.closeModal)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-navy btn-sm",onClick:()=>{var t;return(t=window.saveModal)==null?void 0:t.call(window)},children:"Save"})]})]})}),a.jsx("div",{className:"toast",id:"toast"}),a.jsx("div",{className:"mo",id:"mo-vdir",children:a.jsxs("div",{className:"modal",style:{maxWidth:"580px"},children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",id:"vdir-modal-title",children:"Add Vendor to Directory"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeVDirModal)==null?void 0:t.call(window)},children:"✕"})]}),a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx("input",{type:"hidden",id:"vdir-id"}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Contact Name *"}),a.jsx("input",{className:"fi",id:"vdir-name",placeholder:"John Smith"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Company Name *"}),a.jsx("input",{className:"fi",id:"vdir-company",placeholder:"ABC Plumbing Co."})]})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Phone"}),a.jsx("input",{className:"fi",id:"vdir-phone",placeholder:"+1 555 000 1234"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Email"}),a.jsx("input",{className:"fi",id:"vdir-email",placeholder:"vendor@company.com"})]})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Trade / Specialty"}),a.jsx("input",{className:"fi",id:"vdir-trade",placeholder:"Plumbing, HVAC, Electrical…"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"License Number"}),a.jsx("input",{className:"fi",id:"vdir-license",placeholder:"LIC-1234567"})]})]}),a.jsx("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"10px",fontSize:"10px",fontWeight:700,textTransform:"uppercase",letterSpacing:".6px",color:"var(--muted)"},children:"🏦 Payment / Banking Info"}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Bank Name"}),a.jsx("input",{className:"fi",id:"vdir-bank",placeholder:"Chase Bank"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Account Type"}),a.jsxs("select",{className:"fs",id:"vdir-acct-type",children:[a.jsx("option",{value:"",children:"Select…"}),a.jsx("option",{children:"Checking"}),a.jsx("option",{children:"Savings"}),a.jsx("option",{children:"Business Checking"})]})]})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Account Number"}),a.jsx("input",{className:"fi",id:"vdir-acct",placeholder:"Account number",type:"text"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Routing Number"}),a.jsx("input",{className:"fi",id:"vdir-routing",placeholder:"9-digit routing number",type:"text"})]})]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Zelle (email / phone)"}),a.jsx("input",{className:"fi",id:"vdir-zelle",placeholder:"Zelle email or phone"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Notes"}),a.jsx("input",{className:"fi",id:"vdir-notes",placeholder:"Additional notes"})]})]})]}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeVDirModal)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.saveVDir)==null?void 0:t.call(window)},children:"Save →"})]})]})}),a.jsx("div",{className:"mo",id:"mo-inv-payment",children:a.jsxs("div",{className:"modal",style:{maxWidth:"480px"},children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",children:"Record Partial Payment"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeInvPayment)==null?void 0:t.call(window)},children:"✕"})]}),a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx("input",{type:"hidden",id:"invpay-inv-id"}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Payment Date *"}),a.jsx("input",{className:"fi",id:"invpay-date",type:"date"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Amount *"}),a.jsx("input",{className:"fi",id:"invpay-amount",type:"number",placeholder:"0.00",min:"0",step:"0.01"})]})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Note"}),a.jsx("input",{className:"fi",id:"invpay-note",placeholder:"e.g. Wire transfer, Check #1234"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Proof of Payment (optional)"}),a.jsx("input",{className:"fi",id:"invpay-proof",type:"file",accept:"image/*,.pdf",style:{padding:"4px"}})]})]}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeInvPayment)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.saveInvPayment)==null?void 0:t.call(window)},children:"Record Payment →"})]})]})}),a.jsx("div",{className:"mo",id:"mo-lien-email",children:a.jsxs("div",{className:"modal",style:{maxWidth:"560px"},children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",id:"lien-email-title",children:"Send Lien Waiver"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeLienEmail)==null?void 0:t.call(window)},children:"✕"})]}),a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx("input",{type:"hidden",id:"lien-email-invid"}),a.jsx("input",{type:"hidden",id:"lien-email-type"}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"To (Vendor Email) *"}),a.jsx("input",{className:"fi",id:"lien-email-to",placeholder:"vendor@company.com"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Subject"}),a.jsx("input",{className:"fi",id:"lien-email-subject"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Message Body"}),a.jsx("textarea",{className:"fi",id:"lien-email-body",rows:"8",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.5"}})]}),a.jsx("div",{id:"lien-email-status",style:{fontSize:"11px",color:"var(--muted)"}})]}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeLienEmail)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendLienEmail)==null?void 0:t.call(window)},children:"✉ Send Lien Waiver →"})]})]})}),a.jsx("div",{className:"mo",id:"mo-ledger-email",children:a.jsxs("div",{className:"modal",style:{maxWidth:"600px"},children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",id:"ledger-email-title",children:"Send Payment Ledger"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeLedgerEmail)==null?void 0:t.call(window)},children:"✕"})]}),a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx("input",{type:"hidden",id:"ledger-email-type"}),a.jsx("input",{type:"hidden",id:"ledger-email-ref"}),a.jsxs("div",{style:{background:"var(--blue-l)",border:"1px solid #B0D0F0",borderRadius:"7px",padding:"9px 12px",fontSize:"11px",color:"var(--blue)"},children:[a.jsx("strong",{children:"📒 Payment Ledger Email"})," — Review and send the full ledger directly to the vendor."]}),a.jsxs("div",{className:"fg",children:[a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"To (Email) *"}),a.jsx("input",{className:"fi",id:"ledger-email-to",placeholder:"vendor@company.com",type:"email"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"CC"}),a.jsx("input",{className:"fi",id:"ledger-email-cc",placeholder:"cc@company.com (optional)",type:"email"})]})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Subject"}),a.jsx("input",{className:"fi",id:"ledger-email-subject"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Message Body"}),a.jsx("textarea",{className:"fi",id:"ledger-email-body",rows:"10",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.6",fontFamily:"monospace"}})]}),a.jsx("div",{id:"ledger-email-status",style:{fontSize:"11px"}})]}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeLedgerEmail)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{var t;return(t=window.copyLedgerToClipboard)==null?void 0:t.call(window)},style:{marginRight:"auto"},children:"📋 Copy Text"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendLedgerEmail)==null?void 0:t.call(window)},children:"📧 Send Ledger →"})]})]})}),a.jsx("div",{className:"mo",id:"mo-contract-email",children:a.jsxs("div",{className:"modal",style:{maxWidth:"560px"},children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("span",{className:"modal-title",children:"Send Contract for Signing"}),a.jsx("button",{className:"modal-x",onClick:()=>{var t;return(t=window.closeContractEmailModal)==null?void 0:t.call(window)},children:"✕"})]}),a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx("input",{type:"hidden",id:"cemail-vid"}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"To (Recipient Email) *"}),a.jsx("input",{className:"fi",id:"cemail-to",placeholder:"vendor@company.com"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Subject"}),a.jsx("input",{className:"fi",id:"cemail-subject",placeholder:"Subject line"})]}),a.jsxs("div",{className:"fr",style:{margin:0},children:[a.jsx("label",{className:"fl",children:"Message Body"}),a.jsx("textarea",{className:"fi",id:"cemail-body",rows:"6",style:{resize:"vertical",fontSize:"12px",lineHeight:"1.5"}})]}),a.jsx("div",{id:"cemail-status",style:{fontSize:"11px",color:"var(--muted)"}})]}),a.jsxs("div",{className:"modal-foot",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{var t;return(t=window.closeContractEmailModal)==null?void 0:t.call(window)},children:"Cancel"}),a.jsx("button",{className:"btn btn-navy",onClick:()=>{var t;return(t=window.sendContractEmailModal)==null?void 0:t.call(window)},children:"✉ Send →"})]})]})})]})}na.createRoot(document.getElementById("root")).render(a.jsx(kv,{children:a.jsx($x,{})}));
