var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var s=arguments[n],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-0b2166d8.system.js","./p-46696aec.system.js"],(function(e){"use strict";var n,t,r,i,s,o;return{setters:[function(e){n=e.g},function(e){t=e.c;r=e.D;i=e.a;s=e.b;o=e.d}],execute:function(){e("T",a);function a(e){return function(a,c){var f=a.connectedCallback,l=a.render;var u="psk-send-events";var v=r;var p=i;var d="definedEvents";a.connectedCallback=function(){var t=this;var r=n(t);if(e.controllerInteraction){p=s;d="definedControllers";v=o;u="psk-send-controllers"}if(r.hasAttribute(p)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[d]=[Object.assign(Object.assign({},e),{eventName:String(c)})];return f&&f.call(t)}var i=t.componentDefinitions;var a=Object.assign(Object.assign({},e),{eventName:String(c)});if(i&&i.hasOwnProperty(v)){var l=__spreadArrays(i[v]);l.push(a);i[v]=__spreadArrays(l)}else{i[v]=[a]}t.componentDefinitions=Object.assign({},i)}return f&&f.call(t)};a.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[v])){return l&&l.call(e)}var n=e.componentDefinitions[v];if(n){n=n.reverse()}t(u,{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}}));