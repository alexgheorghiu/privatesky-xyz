var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-0b2166d8.system.js","./p-6f87541f.system.js"],(function(n){"use strict";var e,t,r,i,s,o;return{setters:[function(n){e=n.g},function(n){t=n.c;r=n.D;i=n.a;s=n.b;o=n.d}],execute:function(){n("T",a);function a(n){return function(a,c){var f=a.connectedCallback,l=a.render;var u="psk-send-events";var v=r;var p=i;var d="definedEvents";a.connectedCallback=function(){var t=this;var r=e(t);if(n.controllerInteraction){p=s;d="definedControllers";v=o;u="psk-send-controllers"}if(r.hasAttribute(p)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[d]=[Object.assign(Object.assign({},n),{eventName:String(c)})];return f&&f.call(t)}var i=t.componentDefinitions;var a=Object.assign(Object.assign({},n),{eventName:String(c)});if(i&&i.hasOwnProperty(v)){var l=__spreadArrays(i[v]);l.push(a);i[v]=__spreadArrays(l)}else{i[v]=[a]}t.componentDefinitions=Object.assign({},i)}return f&&f.call(t)};a.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[v])){return l&&l.call(n)}var e=n.componentDefinitions[v];if(e){e=e.reverse()}t(u,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}}));