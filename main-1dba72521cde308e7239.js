!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=15)}([function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));h[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=b++;n=v||(v=s(e)),o=d.bind(null,n,l,!1),r=d.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=f.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=p.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function d(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),v=null,b=0,x=[],y=n(11);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=m()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(10);"string"==typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){function o(t){const e=r.cloneNode(!0);e.querySelector(".message").innerHTML=t.message+", code: "+t.code+".",t.parent.insertBefore(e,t.parent.firstChild)}n(12);const r=document.querySelector("#templates .error-message");t.exports={show:o}},function(t,e){function n(t,e){r(a,function(n){if("fail"===n.stat)e(n);else{const r=o(n);t(r)}})}function o(t){return t.photos.photo.map(function(t){return{thumbnail:i(t,"thumbnail"),large:i(t,"large"),title:t.title}})}function r(t,e){const n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE){const t=JSON.parse(n.response);e(t)}},n.open("GET",t,!0),n.send()}function i(t,e){const n="thumbnail"===e?"_n":"";return"https://farm"+t.farm+".staticflickr.com/"+t.server+"/"+t.id+"_"+t.secret+n+".jpg"}const a="https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&per_page=48&api_key=2e06777dd4123170ab693d0ac2d3f1ff";t.exports={loadImages:n}},function(t,e,n){function o(t){function e(e){e.target!==s&&e.target!==o&&(t.parent.removeChild(n),t.onClose())}i(t);const n=a.cloneNode(!0),o=n.querySelector(".title");o.innerHTML=t.image.title;const s=n.querySelector("img");s.src=t.image.large;const c=n.querySelector(".arrow.prev");t.hasPreviousImage?c.addEventListener("click",r(t,n,-1)):c.classList.add("hidden");const l=n.querySelector(".arrow.next");t.hasNextImage?l.addEventListener("click",r(t,n,1)):l.classList.add("hidden"),n.addEventListener("click",e),t.parent.appendChild(n)}function r(t,e,n){return function(e){e.stopPropagation(),t.changePhoto(n)}}function i(t){const e=t.parent.querySelector(".lightbox");e&&t.parent.removeChild(e)}n(13);const a=document.querySelector("#templates .lightbox");t.exports={show:o,close:i}},function(t,e,n){function o(t){const e=document.createDocumentFragment();t.images.forEach(function(n,o){const i=r(n);i.addEventListener("click",t.onImageClick.bind(null,o)),e.appendChild(i)}),t.root.appendChild(e)}function r(t){const e=i.cloneNode(!0);return e.querySelector(".img").style.backgroundImage="url("+t.thumbnail+")",e}n(14);const i=document.querySelector("#templates .thumbnail");t.exports={addImages:o}},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".error-message {\n  margin: 20px; }\n",""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".lightbox {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: white;\n  text-align: center; }\n  .lightbox .lightbox-content {\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%); }\n  .lightbox i {\n    cursor: pointer;\n    opacity: 0.65; }\n  .lightbox i:hover {\n    opacity: 1; }\n  .lightbox .arrow {\n    position: absolute;\n    transform: translateY(-50%);\n    top: 50%;\n    font-size: 50px;\n    width: 50px; }\n    .lightbox .arrow.prev {\n      left: 6%; }\n    .lightbox .arrow.next {\n      right: 6%; }\n  .lightbox img {\n    margin-top: 50px;\n    max-width: calc(80% - 50px);\n    max-height: calc(100vh - 100px); }\n  .lightbox .title {\n    font-weight: lighter;\n    line-height: 50px;\n    height: 50px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 80%;\n    margin: 0 auto; }\n  .lightbox .close {\n    position: absolute;\n    top: 1em;\n    right: 1em;\n    font-size: 25px; }\n",""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".photo-grid {\n  padding: 6px 12px;\n  overflow: hidden; }\n  .photo-grid .thumbnail {\n    float: left;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-bottom: 100%; }\n    @media (min-width: 241px) {\n      .photo-grid .thumbnail {\n        width: 50%;\n        padding-bottom: 50%; } }\n    @media (min-width: 481px) {\n      .photo-grid .thumbnail {\n        width: 33.33333%;\n        padding-bottom: 33.33333%; } }\n    @media (min-width: 721px) {\n      .photo-grid .thumbnail {\n        width: 25%;\n        padding-bottom: 25%; } }\n    @media (min-width: 961px) {\n      .photo-grid .thumbnail {\n        width: 20%;\n        padding-bottom: 20%; } }\n    @media (min-width: 1201px) {\n      .photo-grid .thumbnail {\n        width: 16.66667%;\n        padding-bottom: 16.66667%; } }\n    @media (min-width: 1441px) {\n      .photo-grid .thumbnail {\n        width: 14.28571%;\n        padding-bottom: 14.28571%; } }\n  .photo-grid .thumbnail-content {\n    position: absolute;\n    top: 6px;\n    bottom: 6px;\n    right: 6px;\n    left: 6px; }\n  .photo-grid .img {\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat; }\n",""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,"html, body {\n  font-family: Helvetica;\n  margin: 0; }\n\n#templates,\n.hidden {\n  display: none; }\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){function o(t){p.images=t,a.addImages({root:d,images:t,onImageClick:r})}function r(t){p.images[t]&&(p.selected=t,c.show({parent:u,image:p.images[t],hasPreviousImage:t>0,hasNextImage:t<p.images.length-1,changePhoto:function(t){r(p.selected+t)},onClose:function(){p.selected=-1}}))}function i(t){l.show({parent:u,message:t.message,code:t.code})}n(2);const a=n(6),s=n(4),c=n(5),l=n(3),u=document.querySelector(".app"),d=u.querySelector(".photo-grid"),p={images:[],selected:-1};s.loadImages(o,i),document.addEventListener("keydown",function(t){if(!(p.selected<0))switch(t.key){case"ArrowLeft":r(p.selected-1);break;case"ArrowRight":r(p.selected+1);break;case"Escape":c.close({parent:u}),p.selected=-1}})}]);