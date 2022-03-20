(()=>{var n={286:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},372:n=>{"use strict";n.exports=function(n){return n[1]}},582:(n,t)=>{var r;!function(){var e=n.exports,o=["١","٢","٣","٤","٥","٦","٧","٨","٩","٠"],i=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],a=["1","2","3","4","5","6","7","8","9","0"];function c(n){this._str=n}function u(n){if(n){for(var t=["ي","ك","‍","دِ","بِ","زِ","ذِ","ِشِ","ِسِ","ى"],r=["ی","ک","","د","ب","ز","ذ","ش","س","ی"],e=0,o=t.length;e<o;e++)n=n.replace(new RegExp(t[e],"g"),r[e]);return this._str=n,this}}function s(n){if(n){for(var t=0,r=a.length;t<r;t++)n=n.replace(new RegExp(i[t],"g"),a[t]);return this._str=n,this}}function l(n){if(n){n=n.toString();for(var t=0,r=o.length;t<r;t++)n=n.replace(new RegExp(o[t],"g"),i[t]);return this._str=n,this}}function f(n){if(n){n=n.toString();for(var t=["1","2","3","4","5","6","7","8","9","0"],r=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],e=0,o=t.length;e<o;e++)n=n.replace(new RegExp(t[e],"g"),r[e]);return this._str=n,this}}function p(n){if(n){for(var t=0,r=a.length;t<r;t++)n=n.replace(new RegExp(i[t],"g"),a[t]).replace(new RegExp(o[t],"g"),a[t]);return this._str=n,this}}function h(n){if(n){for(var t="";t!=n;)t=n,n=n.replace(/(http\S+?)\%20/g,"$1‌‌‌_‌‌‌");return n=(n=n.replace(/(http\S+)/g,(function(n,t){return decodeURI(t)}))).replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g,"%20"),this._str=n,this}}function d(n){if(n){for(var t=["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","پ","و","؟"],r=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","?"],e=0,o=t.length;e<o;e++)n=n.replace(new RegExp(t[e],"g"),r[e]);return this._str=n,this}}function m(n){var t,r,e,o,i,a,c,u;return isFinite(n)?("string"!=typeof n&&(n=n.toString()),i=["","هزار","میلیون","میلیارد","تریلیون","کوادریلیون","کویینتیلیون","سکستیلیون"],o={0:["","صد","دویصت","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نهصد"],1:["","ده","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"],2:["","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"],two:["ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده"],zero:"صفر"},valueParts=n.split("").reverse().join("").replace(/\d{3}(?=\d)/g,"$&,").split("").reverse().join("").split(",").map((function(n){return Array(4-n.length).join("0")+n})),""===(a=(a=(a=function(){var n;for(e in n=[],valueParts)u=valueParts[e],c=(c=function(){var n,e,i;for(i=[],r=n=0,e=u.length;n<e;r=++n)if(t=u[r],1===r&&"1"===t)i.push(o.two[u[2]]);else{if(2===r&&"1"===u[1]||""===o[r][t])continue;i.push(o[r][t])}return i}()).join(" و "),n.push(c+" "+i[valueParts.length-e-1]);return n}()).filter((function(n){return""!==n.trim()}))).join(" و ").trim())&&(a=o.zero),this._str=a,this):""}function y(n){var t;if(n)return t=/((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g,n=n.replace(new RegExp(t),"$2‌$4"),t=/(([\u0600-\u06EF]{1,})+( )+(ای|ایی|اند|ایم|اید|ام){1})/g,n=n.replace(new RegExp(t),"$2‌$4"),this._str=n,this}var v=function(n){if(!n||""===n)throw new Error("Input is null or empty.");return new c(n)};v.version="0.4.0",v.fn=c.prototype={clone:function(){return v(this)},value:function(){return this._str},toString:function(){return this._str.toString()},set:function(n){return this._str=String(n),this},arabicChar:function(){return u.call(this,this._str)},persianNumber:function(){return s.call(this,this._str)},arabicNumber:function(){return l.call(this,this._str)},englishNumber:function(){return f.call(this,this._str)},toEnglishNumber:function(){return p.call(this,this._str)},fixURL:function(){return h.call(this,this._str)},decodeURL:function(){return h.call(this,this._str)},switchKey:function(){return d.call(this,this._str)},digitsToWords:function(){return m.call(this,this._str)},halfSpace:function(){return y.call(this,this._str)}},e&&(n.exports=v),"undefined"==typeof ender&&(this.persianJs=v),void 0===(r=function(){return v}.apply(t,[]))||(n.exports=r)}()},39:(n,t,r)=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}var o=function(n){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,r){return n[t]=r}}function l(n,t,r,e){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new R(e||[]);return i._invoke=function(n,t,r){var e=p;return function(o,i){if(e===d)throw new Error("Generator is already running");if(e===m){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===p)throw e=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=d;var u=f(n,t,r);if("normal"===u.type){if(e=r.done?m:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e=m,r.method="throw",r.arg=u.arg)}}}(n,r,a),i}function f(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",m="completed",y={};function v(){}function g(){}function b(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(T([])));j&&j!==r&&o.call(j,a)&&(w=j);var S=b.prototype=v.prototype=Object.create(w);function E(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function r(i,a,c,u){var s=f(n[i],n,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===e(p)&&o.call(p,"__await")?t.resolve(p.__await).then((function(n){r("next",n,c,u)}),(function(n){r("throw",n,c,u)})):t.resolve(p).then((function(n){l.value=n,c(l)}),(function(n){return r("throw",n,c,u)}))}u(s.arg)}var i;this._invoke=function(n,e){function o(){return new t((function(t,o){r(n,e,t,o)}))}return i=i?i.then(o,o):o()}}function _(n,r){var e=n.iterator[r.method];if(e===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=t,_(n,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(e,n.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[n.resultName]=i.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function R(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(O,this),this.reset(!0)}function T(n){if(n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,i=function r(){for(;++e<n.length;)if(o.call(n,e))return r.value=n[e],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=b,s(S,"constructor",b),s(b,"constructor",g),g.displayName=s(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,b):(n.__proto__=b,s(n,u,"GeneratorFunction")),n.prototype=Object.create(S),n},n.awrap=function(n){return{__await:n}},E(k.prototype),s(k.prototype,c,(function(){return this})),n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},E(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var r in n)t.push(r);return t.reverse(),function r(){for(;t.length;){var e=t.pop();if(e in n)return r.value=e,r.done=!1,r}return r.done=!0,r}},n.values=T,R.prototype={constructor:R,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!n)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),y},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:T(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}("object"===e(n=r.nmd(n))?n.exports:{});try{regeneratorRuntime=o}catch(n){"object"===("undefined"==typeof globalThis?"undefined":e(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},866:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(t,r){if(r&&("object"===n(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function e(n){var t="function"==typeof Map?new Map:void 0;return e=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return o(n,arguments,c(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a(e,n)},e(n)}function o(n,t,r){return o=i()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&a(o,r.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}var u=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&a(n,t)}(f,n);var e,o,u,s,l=(e=f,o=i(),function(){var n,t=c(e);if(o){var i=c(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return r(this,n)});function f(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this))._shadowDOM=n.attachShadow({mode:"open"}),n}return u=f,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._shadowDOM.innerHTML="\n            <style>\n                * {\n                    margin: 0;\n                    padding: 0\n                }\n\n                footer {\n                    width: 100%;\n                    height: 3em;\n                    margin-top: 40em;\n                    background: rgb(34, 34, 34);\n                    line-height: 3em;\n                    box-sizing: border-box;\n                    position: relative;\n                    bottom: 0;\n                }\n                \n                footer p {\n                    color: rgb(136, 136, 136);\n                    text-align: center;\n                }\n            </style>\n\n            <footer>\n                <p>Created by pahrurozi</p>\n            </footer>\n        "}}])&&t(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),f}(e(HTMLElement));customElements.define("footer-bar",u)},889:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(t,r){if(r&&("object"===n(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function e(n){var t="function"==typeof Map?new Map:void 0;return e=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return o(n,arguments,c(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a(e,n)},e(n)}function o(n,t,r){return o=i()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&a(o,r.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}var u=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&a(n,t)}(f,n);var e,o,u,s,l=(e=f,o=i(),function(){var n,t=c(e);if(o){var i=c(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return r(this,n)});function f(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this))._shadowDOM=n.attachShadow({mode:"open"}),n}return u=f,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this._shadowDOM.querySelector("#search-surah").value}},{key:"render",value:function(){this._shadowDOM.innerHTML='\n            <style>\n                * {\n                margin: 0;\n                padding: 0;\n                }\n\n                nav {\n                    width: 100%;\n                    background: #0066FF;\n                    top: 0;\n                    z-index: 9999;\n                    box-sizing: border-box;\n                }\n                \n                nav ul {\n                    height: 3em;\n                    width: 70%;\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    margin: 0 auto;\n                    list-style: none;\n                    box-sizing: border-box;\n                }\n\n                li {\n                    display: flex;\n                }\n\n                li a {\n                    text-decoration: none;\n                    color: white;\n                    font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;\n                    font-weight: bold;\n                }\n\n                li svg {\n                    margin-top: .1em;\n                }\n\n                input {\n                    width: 15em;\n                    background: white;\n                    position: relative;\n                    border: none;\n                    padding: .5em;\n                    border-radius: .2em 0 0 .2em;\n                    box-sizing: border-box;\n                }\n\n                #btn-search {\n                    background: white;\n                    cursor: pointer;\n                    border: none;\n                    padding: 0 .5em;\n                    border-radius: 0 .2em .2em 0;\n                }\n\n                 @media screen and (max-width: 576px) {\n                    nav ul {\n                        width: 90%;\n                    }\n\n                    input {\n                        width: 10em;\n                    }\n                }\n\n            </style>\n\n            <nav>\n                <ul>\n                    <li>\n                        <a href="#">Mari Mengaji</a>\n                    </li>\n                    <li>\n                        <input type="text" placeholder="search surah" id="search-surah">\n                        <button id="btn-search" type="submit">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n                        </button>\n                    </li>\n                </ul>\n            </nav>\n        ',this._shadowDOM.querySelector("#btn-search").addEventListener("click",this._clickEvent)}}])&&t(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),f}(e(HTMLElement));customElements.define("nav-bar",u)},890:(n,t,r)=>{"use strict";r.d(t,{Z:()=>c});var e=r(372),o=r.n(e),i=r(286),a=r.n(i)()(o());a.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background: silver;\r\n}\r\n\r\n.jumbotron {\r\n    width: 100%;\r\n    height: 5em;\r\n    margin-top: -2em;\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    top: 2em;\r\n    z-index: 999;\r\n}\r\n\r\n.sub-jumbotron {\r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    width: 100%;\r\n    height: 6em;\r\n    border-radius: .2em;\r\n    background: #0066FF;\r\n    border: .2em solid white;\r\n    border-top: none;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sub-jumbotron .button-back {\r\n    padding: .5em 0 0 .5em;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-back p {\r\n    font-weight: bold;\r\n    font-size: .9em;\r\n    margin: -.1em 0 0 .2em;\r\n}\r\n\r\n.sub-jumbotron .surah {\r\n    margin: auto;\r\n}\r\n\r\n.sub-jumbotron .surah p {\r\n    padding-bottom: .2em;\r\n    border-radius: .2em;\r\n    border-bottom: .2em solid white;\r\n}\r\n\r\n.sub-jumbotron .desc {\r\n    position: relative;\r\n    bottom: -1.2em;\r\n}\r\n\r\n.sub-jumbotron aside {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.sub-jumbotron .desc p {\r\n    background: #0066FF;\r\n    border: .2em solid white;\r\n    border-radius: .2em;\r\n    padding: .3em 3em;\r\n    margin: 0 2em;\r\n    text-transform: capitalize;  \r\n}\r\n\r\n.audio {\r\n    text-align: center;\r\n}\r\n\r\naudio {\r\n    width: 46%;\r\n}\r\n\r\nsection {\r\nwidth: 70%;\r\nbackground: white;\r\ndisplay: flex;\r\njustify-content: space-between;\r\nalign-items: center;\r\nmargin: .8em auto;\r\npadding: 2em 1em;\r\nborder-radius: .2em;\r\nbox-shadow: .1em .1em .2em black;\r\nbox-sizing: border-box;\r\nposition: relative;\r\n}\r\n\r\nsection:hover {\r\nbackground: rgb(233, 233, 233);\r\n}\r\n\r\n#allSurah {\r\n    cursor: pointer;\r\n}\r\n\r\n.surah-lists {\r\n    margin-top: 4em;\r\n}\r\n\r\n.info-surah {\r\nwidth: 20em;\r\ndisplay: flex;\r\njustify-content: flex-start;\r\nalign-items: center;\r\nbox-sizing: border-box;\r\n}\r\n\r\nsection .asma {\r\n    width: 100%;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n    text-align: right;\r\n}\r\n\r\n.info-surah .nomor,\r\n.surah-item .nomor {\r\nbackground: rgb(61, 61, 61);\r\ncolor: white;\r\nwidth: 2em;\r\nheight: 2em;\r\nline-height: 2em;\r\ntext-align: center;\r\nborder-radius: 50%;\r\nbox-sizing: border-box;\r\nposition: absolute;\r\ntop: 1em;\r\nleft: 1em;\r\n}\r\n\r\n.info-surah .nomor {\r\n    width: 2em;\r\n    height: 2em;\r\n    line-height: 2em;\r\n    top: 2.2em;\r\n}\r\n\r\n.info-surah .describe {\r\n    margin-left: .6em;\r\n    text-transform: capitalize;  \r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 2em;\r\n}\r\n\r\n.describe h5 {\r\nfont-size: 1.2em;\r\n}\r\n\r\n.describe p {\r\nmargin-top: .2em;\r\nfont-size: .7em;\r\n}\r\n\r\n\r\n/* surah items */\r\n.surah-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.surah-item .desc-asma {\r\n    width: 100%;\r\n    display: flex;\r\n    padding-left: 4em;\r\n    justify-content: flex-end;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.desc-asma h5 {\r\n    margin-right: 5em;\r\n}\r\n\r\n.desc-asma .ar {\r\n    text-align: right;\r\n    line-height: 1.5em;\r\n    font-size: 2em;\r\n}\r\n\r\n.surah-item .translate {\r\n    width: 100%;\r\n    margin-top: 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.translate p {\r\n    line-height: 1.8em;\r\n    text-align: left;\r\n    font-size: .9em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n\r\n.translate .asma {\r\n    font-style: italic;\r\n    color: rgb(68, 68, 1);\r\n    \r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n}\r\n\r\n/* surah items */\r\n@media screen and (max-width: 576px) {\r\n    section {\r\n        width: 90%;\r\n    }\r\n\r\n    .desc-asma .ar {\r\n        font-size: 1.5em;\r\n    }\r\n\r\n    .sub-jumbotron .desc p {\r\n        padding: .3em 1em;\r\n        margin: 0 1em;\r\n    }\r\n\r\n    audio {\r\n        width: 90%;\r\n    }\r\n}",""]);const c=a},379:n=>{"use strict";var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=e.base?u[0]+e.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=r(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var d=o(h,e);e.byIndex=c,t.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var u=e(n,o),s=0;s<i.length;s++){var l=r(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:n=>{"use strict";var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{"use strict";n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return n[e](i,i.exports,r),i.loaded=!0,i.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{"use strict";r(39);var n=r(379),t=r.n(n),e=r(795),o=r.n(e),i=r(569),a=r.n(i),c=r(565),u=r.n(c),s=r(216),l=r.n(s),f=r(589),p=r.n(f),h=r(890),d={};function m(n,t,r,e,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?t(u):Promise.resolve(u).then(e,o)}function y(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(n){m(i,e,o,a,c,"next",n)}function c(n){m(i,e,o,a,c,"throw",n)}a(void 0)}))}}function v(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}d.styleTagTransform=p(),d.setAttributes=u(),d.insert=a().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=l(),t()(h.Z,d),h.Z&&h.Z.locals&&h.Z.locals,r(889),r(866);var g=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,r,e,o,i;return t=n,null,r=[{key:"getAllSurah",value:(i=y(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api-alquranid.herokuapp.com/surah");case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.data);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(){return i.apply(this,arguments)})},{key:"getDetailSurah",value:(o=y(regeneratorRuntime.mark((function n(t){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api-alquranid.herokuapp.com/surah/".concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.data);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(n){return o.apply(this,arguments)})},{key:"searchSurah",value:(e=y(regeneratorRuntime.mark((function n(t){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api-alquranid.herokuapp.com/surah/search/".concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.data);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(n){return e.apply(this,arguments)})}],r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function b(n,t,r,e,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?t(u):Promise.resolve(u).then(e,o)}function w(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(n){b(i,e,o,a,c,"next",n)}function c(n){b(i,e,o,a,c,"throw",n)}a(void 0)}))}}var x=function(){var n=w(regeneratorRuntime.mark((function n(){var t,r,e,o,i,a,c,u,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=function(n,e,o){t.innerHTML="",t.style.marginTop="8em",t.style.zIndex="-99",r.style.visibility="hidden";var a=document.createElement("aside");e.filter((function(n){return n.nomor==o})).forEach((function(n){a.innerHTML='\n            <div class="jumbotron">\n                <div class="sub-jumbotron">\n                    <div class="button-back">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg> \n                        <p>Back</p>\n                    </div>\n                    <div class="surah">\n                        <p>'.concat(n.nama,'</p>\n                    </div>\n                    <div class="desc">\n                        <aside>\n                            <p>').concat(n.type,"</p>\n                            <p>").concat(n.arti,"</p>\n                            <p>").concat(n.ayat,' Ayat</p>\n                        </aside>\n                    </div>\n                </div>\n            </div>\n\n            <div class="audio">\n                <audio controls>\n                    <source src="').concat(n.audio,'" type="audio/mpeg">\n                </audio>\n            </div>\n        ')})),t.append(a),n.forEach((function(n){var r=persianJs("".concat(n.nomor)).englishNumber().toString();t.innerHTML+='\n                    <section class="surah-item">\n                        <aside class="desc-asma">\n                            <h5 class="nomor">'.concat(r,'</h5>\n                            <h4 class="ar">').concat(n.ar,'</h4>\n                        </aside>\n                        <aside class="translate">\n                            <p class="asma">').concat(n.tr,"</p>\n                            <p>").concat(n.id,"</p>\n                        </aside>\n                    </section>\n                ")})),document.querySelector(".button-back").addEventListener("click",w(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.innerHTML="",a.visibility="hidden",t.style.marginTop="4em",r.style.visibility="visible",n.next=6,g.getAllSurah();case 6:e=n.sent,i(e);case 8:case"end":return n.stop()}}),n)}))))},i=function(n){r.style.position="fixed",r.style.width="100%",r.style.top="0",r.style.zIndex="999",n.forEach((function(n){t.innerHTML+='\n            <section id="allSurah">\n                <aside class="info-surah">\n                    <h4 class="nomor">'.concat(n.nomor,'</h4>\n                    <div class="describe">\n                        <h5>').concat(n.nama,"</h5>\n                        <p>").concat(n.type," | ").concat(n.ayat,' Ayat</p>\n                    </div>\n                </aside>\n                <aside class="asma">').concat(n.asma,"</aside>\n            </section>\n        ")}))},t=document.querySelector(".surah-lists"),r=document.querySelector("nav-bar"),e=function(){var n=w(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.innerHTML="",n.next=3,g.searchSurah(r.value);case 3:e=n.sent,i(e),(o=t.querySelector("section")).addEventListener("click",w(regeneratorRuntime.mark((function n(){var t,r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.querySelector("h4").innerText,n.next=3,g.getDetailSurah(t);case 3:return r=n.sent,n.next=6,g.getAllSurah();case 6:e=n.sent,s(r,e,t);case 8:case"end":return n.stop()}}),n)}))));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r.clickEvent=e,n.next=8,g.getAllSurah();case 8:for(o=n.sent,i(o),a=t.querySelectorAll("section"),c=function(n){var t=a[n];t.addEventListener("click",w(regeneratorRuntime.mark((function n(){var r,e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.querySelector("h4").innerText,n.next=3,g.getDetailSurah(r);case 3:return e=n.sent,n.next=6,g.getAllSurah();case 6:o=n.sent,s(e,o,r);case 8:case"end":return n.stop()}}),n)}))))},u=0;u<a.length;u++)c(u);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();r(582),document.addEventListener("DOMContentLoaded",x)})()})();