System.register(["./p-226ad382.system.js","./p-d35de16f.system.js"],function(e){"use strict";var n,t,i,r,o,s;return{setters:[function(e){n=e.g},function(e){t=e.c;i=e.D;r=e.a;o=e.b;s=e.d}],execute:function(){e("T",c);function c(e){return function(c,a){var f=c.connectedCallback,l=c.render;var u="psk-send-events";var v=i;var d=r;var p="definedEvents";c.connectedCallback=function(){var t=this;var i=n(t);if(e.controllerInteraction){d=o;p="definedControllers";v=s;u="psk-send-controllers"}if(i.hasAttribute(d)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[p]=[Object.assign({},e,{eventName:String(a)})];return f&&f.call(t)}var r=t.componentDefinitions;var c=Object.assign({},e,{eventName:String(a)});if(r&&r.hasOwnProperty(v)){var l=r[v].slice();l.push(c);r[v]=l.slice()}else{r[v]=[c]}t.componentDefinitions=Object.assign({},r)}return f&&f.call(t)};c.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[v])){return l&&l.call(e)}var n=e.componentDefinitions[v];if(n){n=n.reverse()}t(u,{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});