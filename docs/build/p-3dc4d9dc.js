import{g as e}from"./p-2972acc2.js";import{D as t,a as r}from"./p-a20c91cc.js";import{c}from"./p-e2eec4d0.js";function s(s){return function(i,n){const{connectedCallback:o,render:p}=i;i.connectedCallback=function(){let c=this;if(e(c).hasAttribute(t)){if(!c.componentDefinitions)return c.componentDefinitions={definedProperties:[Object.assign(Object.assign({},s),{propertyName:String(n)})]},o&&o.call(c);let e=c.componentDefinitions;const t=Object.assign(Object.assign({},s),{propertyName:String(n)});if(e&&e.hasOwnProperty(r)){let c=[...e[r]];c.push(t),e[r]=[...c]}else e[r]=[t];c.componentDefinitions=Object.assign({},e)}return o&&o.call(c)},i.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[r])return p&&p.call(this);let e=this.componentDefinitions[r];e&&(e=e.reverse()),c("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{s as T};