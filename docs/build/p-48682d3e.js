import{g as e}from"./p-2972acc2.js";import{b as t,c as n}from"./p-a20c91cc.js";import{c}from"./p-e2eec4d0.js";function s(s){return function(i,r){const{connectedCallback:o,render:a}=i;i.connectedCallback=function(){let c=this;if(e(c).hasAttribute(t)){if(!c.componentDefinitions)return c.componentDefinitions={definedEvents:[Object.assign(Object.assign({},s),{eventName:String(r)})]},o&&o.call(c);let e=c.componentDefinitions;const t=Object.assign(Object.assign({},s),{eventName:String(r)});if(e&&e.hasOwnProperty(n)){let c=[...e[n]];c.push(t),e[n]=[...c]}else e[n]=[t];c.componentDefinitions=Object.assign({},e)}return o&&o.call(c)},i.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[n])return a&&a.call(this);let e=this.componentDefinitions[n];e&&(e=e.reverse()),c("psk-send-events",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{s as T};