import{r as e,c as t,h as o,g as s}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as i}from"./p-f3fbe684.js";import{C as a}from"./p-6a61ad0f.js";import{B as l}from"./p-64525f46.js";import{P as r}from"./p-b564c8e0.js";import{T as n}from"./p-9a35ef5e.js";var d=function(e,t,o,s){var i,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(a<3?i(l):a>3?i(t,o,l):i(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};const p=class{constructor(o){e(this,o),this._closeModalHandler=e=>{if(this.eventName){e.preventDefault(),e.stopImmediatePropagation();let t=new r(this.eventName,null,{bubbles:!0,composed:!0,cancelable:!0});this._host.dispatchEvent(t)}else this.closeModal.emit()},this.opened=!1,this.closeModal=t(this,"closeModal",7)}render(){return o("div",null,o("div",{id:"backdrop",onClick:this._closeModalHandler}),o("div",{id:"modal"},o("div",{class:"modal-content"},o("div",{class:"modal-header"},o("slot",{name:"title"}),o("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},o("span",{"aria-hidden":"true",onClick:this._closeModalHandler},"×"))),o("div",{class:"modal-body"},o("slot",null)))))}get _host(){return s(this)}};d([l(),a()],p.prototype,"_host",void 0),d([i({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],p.prototype,"opened",void 0),d([n({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],p.prototype,"closeModal",void 0),d([i({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:!1,propertyType:"string"})],p.prototype,"eventName",void 0);export{p as psk_modal};