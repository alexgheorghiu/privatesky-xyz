import{g as e}from"./p-a1b3783e.js";const t="definedProperties",n="definedEvents",a="definedControllers",r="data-define-props",o="data-define-events",i="data-define-controller",s="Copy to clipboard",c="Copied!",d="numeric",f={startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/};function l(e,t){const n=e.replace(/( |:|\/|\.)/g,"-").toLowerCase(),a=t.querySelector(`#${n}`);if(!a)return;a.scrollIntoView({behavior:"smooth"});let r=window.location.href,o="?";-1!==r.indexOf("chapter=")?(r=window.location.href.split("chapter=")[0]).length>0&&(o=r[r.length-1],r=r.substring(0,r.length-1)):o=r.indexOf("?")>0?"&":"?";let i=`${o}chapter=`;console.log(`${r}${i}${n}`),window.history.pushState({},"",`${r}${i}${n}`)}function p(e,t,n=!1){const a=new CustomEvent(e,t);n&&document.dispatchEvent(a)}function u(e,t,n){for(var a=null;e;){if(e.matches(t)){a=e;break}if(n&&e.matches(n))break;e=e.parentElement}return a}function b(n){return function(a,o){const{connectedCallback:i,render:s}=a;a.connectedCallback=function(){let a=this;if(e(a).hasAttribute(r)){if(!a.componentDefinitions)return a.componentDefinitions={definedProperties:[Object.assign(Object.assign({},n),{propertyName:String(o)})]},i&&i.call(a);let e=a.componentDefinitions;const r=Object.assign(Object.assign({},n),{propertyName:String(o)});if(e&&e.hasOwnProperty(t)){let n=[...e[t]];n.push(r),e[t]=[...n]}else e[t]=[r];a.componentDefinitions=Object.assign({},e)}return i&&i.call(a)},a.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[t])return s&&s.call(this);let e=this.componentDefinitions[t];e&&(e=e.reverse()),p("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{n as D,d as L,f as P,b as T,o as a,i as b,p as c,a as d,u as e,c as f,s as g,l as s};