import{r as e,h as t,g as s}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as o}from"./p-f3fbe684.js";import{C as i}from"./p-6a61ad0f.js";import{B as r}from"./p-64525f46.js";import{P as l}from"./p-b564c8e0.js";var p=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l};const n=class{constructor(t){e(this,t),this.label="Select files"}addedFile(e){console.log(this);let t=Array.from(e.target.files);if(this.eventName){e.preventDefault(),e.stopImmediatePropagation();let s=new l(this.eventName,t,{bubbles:!0,composed:!0,cancelable:!0});this.htmlElement.dispatchEvent(s)}}render(){return[t("button",{type:"button",class:"btn btn-secondary p-0"},t("label",{class:"pt-0 mb-0 p-2"},this.label,t("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:!0,class:"form-control-file form-control-sm"}))),this.eventName?null:t("h5",{class:"mt-4"},"No controller set for this component!")]}get htmlElement(){return s(this)}};p([i(),r()],n.prototype,"htmlElement",void 0),p([o({description:"This is the lable of the button",isMandatory:!1,propertyType:"string",defaultValue:"Select files"})],n.prototype,"label",void 0),p([o({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:!1,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],n.prototype,"accept",void 0);export{n as psk_files_chooser};