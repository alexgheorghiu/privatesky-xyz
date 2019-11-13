import{r as e,c as o,h as t}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as s}from"./p-9ba64865.js";import{C as i}from"./p-ef862f7f.js";import{T as l}from"./p-2b58d88b.js";var a=function(e,o,t,s){var i,l=arguments.length,a=l<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(a=(l<3?i(a):l>3?i(o,t,a):i(o,t))||a);return l>3&&a&&Object.defineProperty(o,t,a),a};const r=class{constructor(t){e(this,t),this.opened=!1,this.closeModal=o(this,"closeModal",7)}render(){return t("div",null,t("div",{id:"backdrop",onClick:()=>{this.closeModal.emit()}}),t("div",{id:"modal"},t("div",{class:"modal-content"},t("div",{class:"modal-header"},t("slot",{name:"title"}),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},t("span",{"aria-hidden":"true",onClick:()=>{this.closeModal.emit()}},"×"))),t("div",{class:"modal-body"},t("slot",null)),t("div",{class:"modal-footer"},t("slot",{name:"confirm_action"}),t("button",{class:"btn btn-primary",onClick:()=>{this.closeModal.emit()}},"Close")))))}};a([i(),s({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),a([l({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0);export{r as psk_modal};