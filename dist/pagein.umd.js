!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).Pagein={})}(this,(function(t){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=Array.isArray,n="object"==typeof r&&r&&r.Object===Object&&r,o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")(),i=a.Symbol,u=i,c=Object.prototype,l=c.hasOwnProperty,f=c.toString,s=u?u.toStringTag:void 0;var v=function(t){var r=l.call(t,s),e=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=f.call(t);return n&&(r?t[s]=e:delete t[s]),o},p=Object.prototype.toString;var h=v,d=function(t){return p.call(t)},y=i?i.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?h(t):d(t)};var g=_,b=function(t){return null!=t&&"object"==typeof t};var j=function(t){return"symbol"==typeof t||b(t)&&"[object Symbol]"==g(t)},w=e,O=j,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;var P=function(t,r){if(w(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!O(t))||(m.test(t)||!z.test(t)||null!=r&&t in Object(r))};var S=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},T=_,$=S;var C,x=function(t){if(!$(t))return!1;var r=T(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},A=a["__core-js_shared__"],F=(C=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var k=function(t){return!!F&&F in t},E=Function.prototype.toString;var L=x,D=k,I=S,H=function(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,R=Function.prototype,G=Object.prototype,N=R.toString,U=G.hasOwnProperty,q=RegExp("^"+N.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var B=function(t){return!(!I(t)||D(t))&&(L(t)?q:M).test(H(t))},J=function(t,r){return null==t?void 0:t[r]};var K=function(t,r){var e=J(t,r);return B(e)?e:void 0},Q=K(Object,"create"),V=Q;var W=function(){this.__data__=V?V(null):{},this.size=0};var X=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Y=Q,Z=Object.prototype.hasOwnProperty;var tt=function(t){var r=this.__data__;if(Y){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return Z.call(r,t)?r[t]:void 0},rt=Q,et=Object.prototype.hasOwnProperty;var nt=Q;var ot=W,at=X,it=tt,ut=function(t){var r=this.__data__;return rt?void 0!==r[t]:et.call(r,t)},ct=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=nt&&void 0===r?"__lodash_hash_undefined__":r,this};function lt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}lt.prototype.clear=ot,lt.prototype.delete=at,lt.prototype.get=it,lt.prototype.has=ut,lt.prototype.set=ct;var ft=lt;var st=function(){this.__data__=[],this.size=0};var vt=function(t,r){return t===r||t!=t&&r!=r};var pt=function(t,r){for(var e=t.length;e--;)if(vt(t[e][0],r))return e;return-1},ht=pt,dt=Array.prototype.splice;var yt=pt;var _t=pt;var gt=pt;var bt=st,jt=function(t){var r=this.__data__,e=ht(r,t);return!(e<0)&&(e==r.length-1?r.pop():dt.call(r,e,1),--this.size,!0)},wt=function(t){var r=this.__data__,e=yt(r,t);return e<0?void 0:r[e][1]},Ot=function(t){return _t(this.__data__,t)>-1},zt=function(t,r){var e=this.__data__,n=gt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function mt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}mt.prototype.clear=bt,mt.prototype.delete=jt,mt.prototype.get=wt,mt.prototype.has=Ot,mt.prototype.set=zt;var Pt=mt,St=K(a,"Map"),Tt=ft,$t=Pt,Ct=St;var xt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var At=function(t,r){var e=t.__data__;return xt(r)?e["string"==typeof r?"string":"hash"]:e.map},Ft=At;var kt=At;var Et=At;var Lt=At;var Dt=function(){this.size=0,this.__data__={hash:new Tt,map:new(Ct||$t),string:new Tt}},It=function(t){var r=Ft(this,t).delete(t);return this.size-=r?1:0,r},Ht=function(t){return kt(this,t).get(t)},Mt=function(t){return Et(this,t).has(t)},Rt=function(t,r){var e=Lt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Gt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Gt.prototype.clear=Dt,Gt.prototype.delete=It,Gt.prototype.get=Ht,Gt.prototype.has=Mt,Gt.prototype.set=Rt;var Nt=Gt;function Ut(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(Ut.Cache||Nt),e}Ut.Cache=Nt;var qt=Ut;var Bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jt=/\\(\\)?/g,Kt=function(t){var r=qt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Bt,(function(t,e,n,o){r.push(n?o.replace(Jt,"$1"):e||t)})),r}));var Qt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Vt=e,Wt=j,Xt=i?i.prototype:void 0,Yt=Xt?Xt.toString:void 0;var Zt=function t(r){if("string"==typeof r)return r;if(Vt(r))return Qt(r,t)+"";if(Wt(r))return Yt?Yt.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},tr=Zt;var rr=e,er=P,nr=Kt,or=function(t){return null==t?"":tr(t)};var ar=j;var ir=function(t,r){return rr(t)?t:er(t,r)?[t]:nr(or(t))},ur=function(t){if("string"==typeof t||ar(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var cr=function(t,r){for(var e=0,n=(r=ir(r,t)).length;null!=t&&e<n;)t=t[ur(r[e++])];return e&&e==n?t:void 0};var lr=function(t,r,e){var n=null==t?void 0:cr(t,r);return void 0===n?e:n};t.paging=function(t,r){var e=void 0===r?{}:r,n=e.pagination,o=e.conditions;t=t||[];var a=n||{},i=a.currentPage,u=void 0===i?0:i,c=a.pageSize,l=void 0===c?0:c,f=(u-1)*l,s=f+l,v=t.length,p=[],h=0;if(!o||o.every((function(t){return""===t.value||null===t.value})))p=u&&l?t.slice(f,s):t,h=t.length;else{var d=t.filter((function(t){var r=o.reduce((function(t,r){return t[r.key]=!0,t}),{}),e=function(e){var n=o.find((function(t){return t.key===e}));if(r.hasOwnProperty(e)&&n){var a=n.value,i=lr(t,e);if(n.daterange){var u=+new Date(a?a[0]:0),c=+new Date(a?a[1]:0),l=+new Date(i);r[e]=u<=l&&c>=l||!u}else if(n.validHandler)r[e]=n.validHandler(a,i);else{var f=i.toLowerCase?i.toLowerCase():i,s=a.toLowerCase?a.toLowerCase():a;r[e]=(n.fuzzy?-1!==f.search(s):i==a)||""==a}}};for(var n in r)e(n);for(var n in r)if(!r[n])return!1;return!0}));p=u&&l?d.slice(f,s):d,h=d.length}return{total:h,originTotal:v,data:p,currentPage:u,pageSize:l}},Object.defineProperty(t,"__esModule",{value:!0})}));
