!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).Pagein={})}(this,(function(t){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n=Array.isArray,o="object"==typeof r&&r&&r.Object===Object&&r,a="object"==typeof self&&self&&self.Object===Object&&self,i=o||a||Function("return this")(),u=i.Symbol,c=u,l=Object.prototype,f=l.hasOwnProperty,s=l.toString,v=c?c.toStringTag:void 0;var p=function(t){var r=f.call(t,v),e=t[v];try{t[v]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(r?t[v]=e:delete t[v]),o},h=Object.prototype.toString;var d=p,y=function(t){return h.call(t)},_=u?u.toStringTag:void 0;var g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?d(t):y(t)};var b=g,j=function(t){return null!=t&&"object"==typeof t};var w=function(t){return"symbol"==typeof t||j(t)&&"[object Symbol]"==b(t)},O=n,z=w,m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var S=function(t,r){if(O(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!z(t))||(P.test(t)||!m.test(t)||null!=r&&t in Object(r))};var T=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},$=g,C=T;var x,A=function(t){if(!C(t))return!1;var r=$(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},F=i["__core-js_shared__"],k=(x=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var E=function(t){return!!k&&k in t},L=Function.prototype.toString;var D=A,I=E,H=T,M=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},R=/^\[object .+?Constructor\]$/,G=Function.prototype,N=Object.prototype,U=G.toString,q=N.hasOwnProperty,B=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!H(t)||I(t))&&(D(t)?B:R).test(M(t))},K=function(t,r){return null==t?void 0:t[r]};var Q=function(t,r){var e=K(t,r);return J(e)?e:void 0},V=Q(Object,"create"),W=V;var X=function(){this.__data__=W?W(null):{},this.size=0};var Y=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Z=V,tt=Object.prototype.hasOwnProperty;var rt=function(t){var r=this.__data__;if(Z){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return tt.call(r,t)?r[t]:void 0},et=V,nt=Object.prototype.hasOwnProperty;var ot=V;var at=X,it=Y,ut=rt,ct=function(t){var r=this.__data__;return et?void 0!==r[t]:nt.call(r,t)},lt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ot&&void 0===r?"__lodash_hash_undefined__":r,this};function ft(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ft.prototype.clear=at,ft.prototype.delete=it,ft.prototype.get=ut,ft.prototype.has=ct,ft.prototype.set=lt;var st=ft;var vt=function(){this.__data__=[],this.size=0};var pt=function(t,r){return t===r||t!=t&&r!=r};var ht=function(t,r){for(var e=t.length;e--;)if(pt(t[e][0],r))return e;return-1},dt=ht,yt=Array.prototype.splice;var _t=ht;var gt=ht;var bt=ht;var jt=vt,wt=function(t){var r=this.__data__,e=dt(r,t);return!(e<0)&&(e==r.length-1?r.pop():yt.call(r,e,1),--this.size,!0)},Ot=function(t){var r=this.__data__,e=_t(r,t);return e<0?void 0:r[e][1]},zt=function(t){return gt(this.__data__,t)>-1},mt=function(t,r){var e=this.__data__,n=bt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Pt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Pt.prototype.clear=jt,Pt.prototype.delete=wt,Pt.prototype.get=Ot,Pt.prototype.has=zt,Pt.prototype.set=mt;var St=Pt,Tt=Q(i,"Map"),$t=st,Ct=St,xt=Tt;var At=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Ft=function(t,r){var e=t.__data__;return At(r)?e["string"==typeof r?"string":"hash"]:e.map},kt=Ft;var Et=Ft;var Lt=Ft;var Dt=Ft;var It=function(){this.size=0,this.__data__={hash:new $t,map:new(xt||Ct),string:new $t}},Ht=function(t){var r=kt(this,t).delete(t);return this.size-=r?1:0,r},Mt=function(t){return Et(this,t).get(t)},Rt=function(t){return Lt(this,t).has(t)},Gt=function(t,r){var e=Dt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Nt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Nt.prototype.clear=It,Nt.prototype.delete=Ht,Nt.prototype.get=Mt,Nt.prototype.has=Rt,Nt.prototype.set=Gt;var Ut=Nt;function qt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(qt.Cache||Ut),e}qt.Cache=Ut;var Bt=qt;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var r=Bt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Jt,(function(t,e,n,o){r.push(n?o.replace(Kt,"$1"):e||t)})),r}));var Vt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Wt=n,Xt=w,Yt=u?u.prototype:void 0,Zt=Yt?Yt.toString:void 0;var tr=function t(r){if("string"==typeof r)return r;if(Wt(r))return Vt(r,t)+"";if(Xt(r))return Zt?Zt.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},rr=tr;var er=n,nr=S,or=Qt,ar=function(t){return null==t?"":rr(t)};var ir=w;var ur=function(t,r){return er(t)?t:nr(t,r)?[t]:or(ar(t))},cr=function(t){if("string"==typeof t||ir(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var lr=function(t,r){for(var e=0,n=(r=ur(r,t)).length;null!=t&&e<n;)t=t[cr(r[e++])];return e&&e==n?t:void 0};var fr=e((function(t,r,e){var n=null==t?void 0:lr(t,r);return void 0===n?e:n}));t.paging=function(t,r){var e=void 0===r?{}:r,n=e.pagination,o=e.conditions;t=t||[];var a=n||{},i=a.currentPage,u=void 0===i?0:i,c=a.pageSize,l=void 0===c?0:c,f=(u-1)*l,s=f+l,v=t.length,p=[],h=0;if(!o||o.every((function(t){return""===t.value||null===t.value})))p=u&&l?t.slice(f,s):t,h=t.length;else{var d=t.filter((function(t){var r=o.reduce((function(t,r){return t[r.key]=!0,t}),{}),e=function(e){var n=o.find((function(t){return t.key===e}));if(r.hasOwnProperty(e)&&n){var a=n.value,i=fr(t,e);if(n.daterange){var u=+new Date(a?a[0]:0),c=+new Date(a?a[1]:0),l=+new Date(i);r[e]=u<=l&&c>=l||!u}else if(n.validHandler)r[e]=n.validHandler(a,i);else{var f=i.toLowerCase?i.toLowerCase():i,s=a.toLowerCase?a.toLowerCase():a;r[e]=(n.fuzzy?-1!==f.search(s):i===a)||""==a}}};for(var n in r)e(n);for(var n in r)if(!r[n])return!1;return!0}));p=u&&l?d.slice(f,s):d,h=d.length}return{total:h,originTotal:v,data:p,currentPage:u,pageSize:l}}}));
