import{r as t,h as s}from"./p-a1b3783e.js";import{C as e}from"./p-99cea37f.js";const o=class{constructor(s){t(this,s),this.buttonClass="btn btn-primary",this.disabled=!1}render(){return s("button",{onClick:()=>{this.eventEmitter.emit(this.eventData)},class:this.buttonClass,disabled:this.disabled},s("slot",{name:"button_content"}),this.label?this.label:null)}};!function(t,s,e,o){var n,i=arguments.length,r=i<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,e,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(i<3?n(r):i>3?n(s,e,r):n(s,e))||r);i>3&&r&&Object.defineProperty(s,e,r)}([e()],o.prototype,"label",void 0);export{o as psk_button};