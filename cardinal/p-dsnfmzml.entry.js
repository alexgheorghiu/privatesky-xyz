import{r as t,h as e,g as s}from"./p-a1b3783e.js";import{L as l,P as i,T as r}from"./p-d6ac416c.js";import{C as n}from"./p-2a22f87e.js";const o=class{constructor(e){t(this,e),this.listContent=null}render(){return e(this.listType===l?"ol":"ul",null,this.listContent)}componentWillLoad(){const t=this.element.innerHTML.split(/\n/g).map(t=>t.trim()).filter(t=>t.length>0&&"\x3c!----\x3e"!==t);if(0===t.length)return;const e=[];let s=!1,l=null,r=0,n="";t.forEach(t=>{if(null!==i.inlineTag.exec(t))s?n+=t:e.push(this._htmlToElement("li",t));else{let o=i.startTag.exec(t);if(null!==o)s=!0,n+=t,l===o[0]?r++:l||(l=o[0]);else{let o=i.endTag.exec(t);null!==o?(n+=t,l===o[0].replace(/\//g,"")&&(0===r?(e.push(this._htmlToElement("li",n)),l=null,n="",s=!1):r--)):s?n+=t:e.push(this._htmlToElement("li",t))}}}),this.element.innerHTML="",this.listContent=[...e]}_htmlToElement(t,s){return e(t,{innerHTML:s})}get element(){return s(this)}};!function(t,e,s,l){var i,r=arguments.length,n=r<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,l);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);r>3&&n&&Object.defineProperty(e,s,n)}([n(),r({description:['This property gives the type of the list. It has two type of values, "numeric" or "bullet"','If this property is missing, "bullet is assumed"'],isMandatory:!1,propertyType:"string"})],o.prototype,"listType",void 0);export{o as psk_list};