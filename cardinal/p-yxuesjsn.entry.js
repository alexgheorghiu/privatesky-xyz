import{r as t,h as e,g as o}from"./p-a1b3783e.js";import{T as i}from"./p-d6ac416c.js";import{C as r}from"./p-2a22f87e.js";var s=function(t,e,o,i){var r,s=arguments.length,h=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(h=(s<3?r(h):s>3?r(e,o,h):r(e,o))||h);return s>3&&h&&Object.defineProperty(e,o,h),h};const h=class{constructor(e){t(this,e),this.tableContent=null}render(){return e("table",null,this.tableContent)}componentWillLoad(){let t=this.element.innerHTML.split(/\n/g).map(t=>t.trim().replace("\x3c!----\x3e","")).filter(t=>t.length>0).map(t=>`<tr>${t.split("|").map(t=>this.head?`<th>${t.trim()}</th>`:`<td>${t.trim()}</td>`).join("")}</tr>`),e=[];this.head?(e.push(this._htmlToElement("thead",t.splice(0,1))),this.footer?(e.push(this._htmlToElement("tbody",t.splice(0,t.length-2))),e.push(this._htmlToElement("tfoot",[t[t.length-1]]))):e.push(this._htmlToElement("tbody",t.splice(0)))):e=[this._htmlToElement("tbody",t)],this.tableContent=e,this.element.innerHTML=""}_htmlToElement(t,o){return e(t,{innerHTML:o.join("")})}get element(){return o(this)}};s([r(),i({description:"If this property is set as true then the table will have a footer in which the first info of the table will be written. ",isMandatory:!1,propertyType:"boolean"})],h.prototype,"head",void 0),s([i({description:"If this property is set as true then the table will have a footer in which the last info of the table will be written.",isMandatory:!1,propertyType:"boolean"})],h.prototype,"footer",void 0);export{h as psk_table};