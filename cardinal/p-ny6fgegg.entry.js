import{r as t,h as e,g as s}from"./p-a1b3783e.js";import{T as i}from"./p-7c85f64b.js";import{C as r}from"./p-2a22f87e.js";import{P as o}from"./p-2bbf68aa.js";var a=function(t,e,s,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,s,a):r(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a};const n=class{constructor(e){t(this,e),this.title="",this.language="",this.componentCode=""}componentWillLoad(){this.componentCode=this.host.innerText,this.host.innerHTML=""}componentDidLoad(){o.highlightAllUnder(this.host)}render(){const t=e("pre",null,e("code",{class:`language-${this.language}`},this.componentCode));return""===this.title.replace(/\s/g,"")?e("div",null,t):e("psk-chapter",{title:this.title},t)}get host(){return s(this)}};a([r(),i({description:"This property is the title of the psk-chapter that will be created.",isMandatory:!1,propertyType:"string"})],n.prototype,"title",void 0),a([i({description:"This property is the language, in which the code is written(so the css can identify it).",isMandatory:!1,propertyType:"string"})],n.prototype,"language",void 0);export{n as psk_code};