import{r as o,c as e,h as t}from"./p-bd5842d7.js";import{T as s}from"./p-b6a32a15.js";import{T as l}from"./p-f7c03059.js";import{C as a}from"./p-92afb37f.js";var i=function(o,e,t,s){var l,a=arguments.length,i=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,s);else for(var r=o.length-1;r>=0;r--)(l=o[r])&&(i=(a<3?l(i):a>3?l(e,t,i):l(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const r=class{constructor(t){o(this,t),this.opened=!1,this.closeModal=e(this,"closeModal",7)}render(){return t("div",null,t("div",{id:"backdrop",onClick:()=>{this.closeModal.emit()}}),t("div",{id:"modal"},t("div",{class:"modal-content"},t("div",{class:"modal-header"},t("slot",{name:"title"}),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},t("span",{"aria-hidden":"true",onClick:()=>{this.closeModal.emit()}},"×"))),t("div",{class:"modal-body"},t("slot",null)),t("div",{class:"modal-footer"},t("slot",{name:"confirm_action"}),t("button",{class:"btn btn-primary",onClick:()=>{this.closeModal.emit()}},"Close")))))}};i([a(),s({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),i([l({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0);export{r as psk_modal};