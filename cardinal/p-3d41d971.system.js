var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var t=Array(e),i=0,n=0;n<r;n++)for(var a=arguments[n],o=0,s=a.length;o<s;o++,i++)t[i]=a[o];return t};System.register(["./p-0b2166d8.system.js"],(function(e){"use strict";var n;return{setters:[function(e){n=e.g}],execute:function(){e({T:h,c:v,e:u,s:p});var r="definedProperties";var t=e("D","definedEvents");var i=e("d","definedControllers");var a="data-define-props";var o=e("a","data-define-events");var s=e("b","data-define-controller");var c=e("g","Copy to clipboard");var f=e("f","Copied!");var l=e("L","numeric");var d=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});function p(e,n){var r=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var t=n.querySelector("#"+r);if(!t){return}t.scrollIntoView({behavior:"smooth"});var i=window.location.href;var a="?";if(i.indexOf("chapter=")!==-1){i=window.location.href.split("chapter=")[0];if(i.length>0){a=i[i.length-1];i=i.substring(0,i.length-1)}}else{a=i.indexOf("?")>0?"&":"?"}var o=a+"chapter=";console.log(""+i+o+r);window.history.pushState({},"",""+i+o+r)}function v(e,n,r){if(r===void 0){r=false}var t=new CustomEvent(e,n);if(r){document.dispatchEvent(t)}}function u(e,n,r){var t=null;while(e){if(e.matches(n)){t=e;break}else if(r&&e.matches(r)){break}e=e.parentElement}return t}function h(e){return function(t,i){var o=t.connectedCallback,s=t.render;t.connectedCallback=function(){var t=this;var s=n(t);if(s.hasAttribute(a)){if(!t.componentDefinitions){t.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:String(i)})]};return o&&o.call(t)}var c=t.componentDefinitions;var f=Object.assign(Object.assign({},e),{propertyName:String(i)});if(c&&c.hasOwnProperty(r)){var l=__spreadArrays(c[r]);l.push(f);c[r]=__spreadArrays(l)}else{c[r]=[f]}t.componentDefinitions=Object.assign({},c)}return o&&o.call(t)};t.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[r])){return s&&s.call(e)}var n=e.componentDefinitions[r];if(n){n=n.reverse()}v("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}}));