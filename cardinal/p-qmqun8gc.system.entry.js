var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var l=arguments[t],s=0,o=l.length;s<o;s++,i++)r[i]=l[s];return r};System.register(["./p-0b2166d8.system.js","./p-19b00136.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,n,r,i,l,s,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(e){i=e.L;l=e.P;s=e.T},function(e){o=e.C}],execute:function(){var u=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(s=e[o])l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l;return i>3&&l&&Object.defineProperty(t,n,l),l};var f=e("psk_list",function(){function e(e){t(this,e);this.listContent=null}e.prototype.render=function(){if(this.listType===i){return n("ol",null,this.listContent)}return n("ul",null,this.listContent)};e.prototype.componentWillLoad=function(){var e=this;var t=this.element.innerHTML.split(/\n/g).map((function(e){return e.trim()})).filter((function(e){return e.length>0&&e!=="\x3c!----\x3e"}));if(t.length===0){return}var n=[];var r=false,i=null,s=0,o="";t.forEach((function(t){var u=l.inlineTag.exec(t);if(u!==null){if(r){o+=t}else{n.push(e._htmlToElement("li",t))}}else{var f=l.startTag.exec(t);if(f!==null){r=true;o+=t;if(i===f[0]){s++}else if(!i){i=f[0]}}else{var a=l.endTag.exec(t);if(a!==null){o+=t;if(i===a[0].replace(/\//g,"")){if(s===0){n.push(e._htmlToElement("li",o));i=null;o="";r=false}else{s--}}}else{if(r){o+=t}else{n.push(e._htmlToElement("li",t))}}}}}));this.element.innerHTML="";this.listContent=__spreadArrays(n)};e.prototype._htmlToElement=function(e,t){var r=e;return n(r,{innerHTML:t})};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());u([o(),s({description:['This property gives the type of the list. It has two type of values, "numeric" or "bullet"','If this property is missing, "bullet is assumed"'],isMandatory:false,propertyType:"string"})],f.prototype,"listType",void 0)}}}));