var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-0b2166d8.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js"],(function(n){"use strict";var e,t,r,i,s,o;return{setters:[function(n){e=n.g},function(n){t=n.b;r=n.c;i=n.d;s=n.e},function(n){o=n.c}],execute:function(){n("T",a);function a(n){return function(a,c){var f=a.componentWillLoad,u=a.render;var l="psk-send-events";var p=t;var v=r;var d="definedEvents";a.componentWillLoad=function(){var t=this;var r=e(t);if(n.controllerInteraction){v=i;d="definedControllers";p=s;l="psk-send-controllers"}if(r.hasAttribute(v)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[d]=[Object.assign(Object.assign({},n),{eventName:String(c)})];return f&&f.call(t)}var o=t.componentDefinitions;var a=Object.assign(Object.assign({},n),{eventName:String(c)});if(o&&o.hasOwnProperty(p)){var u=__spreadArrays(o[p]);u.push(a);o[p]=__spreadArrays(u)}else{o[p]=[a]}t.componentDefinitions=Object.assign({},o)}return f&&f.call(t)};a.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[p])){return u&&u.call(n)}var e=n.componentDefinitions[p];if(e){e=e.reverse()}o(l,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}}));