import{r as t,h as e,g as s}from"./p-bd5842d7.js";import{L as r,P as i,T as l}from"./p-51a528fb.js";import"./p-40b98907.js";import{C as n}from"./p-92afb37f.js";const o=class{constructor(e){t(this,e),this.listContent=null}render(){return e(this.listType===r?"ol":"ul",null,this.listContent)}componentWillLoad(){let t="";this.getInnerContent&&(t=this.getInnerContent("innerHTML"));const e=t.split(/\n/g).map(t=>t.trim()).filter(t=>t.length>0&&"\x3c!----\x3e"!==t);if(0===e.length)return;const s=[];let r=!1,l=null,n=0,o="";e.forEach(t=>{if(null!==i.inlineTag.exec(t))r?o+=t:s.push(this._stringToHTMLElement("li",t));else{let e=i.startTag.exec(t);if(null!==e)r=!0,o+=t,l===e[0]?n++:l||(l=e[0]);else{let e=i.endTag.exec(t);null!==e?(o+=t,l===e[0].replace(/\//g,"")&&(0===n?(s.push(this._stringToHTMLElement("li",o)),l=null,o="",r=!1):n--)):r?o+=t:s.push(this._stringToHTMLElement("li",t))}}}),this.element.innerHTML="",this.listContent=[...s]}_stringToHTMLElement(t,s){return e(t,{innerHTML:s})}get element(){return s(this)}};!function(t,e,s,r){var i,l=arguments.length,n=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(l<3?i(n):l>3?i(e,s,n):i(e,s))||n);l>3&&n&&Object.defineProperty(e,s,n)}([n(),l({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:!1,propertyType:"string",defaultValue:"unordered"})],o.prototype,"listType",void 0);export{o as psk_list};