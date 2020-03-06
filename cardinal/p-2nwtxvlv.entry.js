import{r as t,c as s,h as e}from"./p-bd5842d7.js";import{C as i}from"./p-92afb37f.js";import{T as o}from"./p-4012dae5.js";import"./p-29f685bd.js";import{C as r}from"./p-e678086e.js";var a=function(t,s,e,i){var o,r=arguments.length,a=r<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,e,i);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(a=(r<3?o(a):r>3?o(s,e,a):o(s,e))||a);return r>3&&a&&Object.defineProperty(s,e,a),a};const p=class{constructor(e){t(this,e),this.typeOfAlert=r.ALERT_SUCCESS,this.timeAlive=3e3,this.alert=null,this.isVisible=!0,this.closeFeedback=s(this,"closeFeedback",7)}closeUIFeedback(){this.isVisible=!1,setTimeout(()=>{this.closeFeedback.emit(this.message)},1e3)}render(){return this.alert=e("div",{class:`alert ${this.typeOfAlert} alert-dismissible fade ${this.isVisible?"show":"hide"}`,style:this.styleCustomisation.alert&&this.styleCustomisation.alert.style?this.styleCustomisation.alert.style:{},onClick:()=>{this.closeUIFeedback()}},e("slot",null),e("div",{class:"toast-body"},this.message.content)),setTimeout(()=>{this.closeUIFeedback()},this.timeAlive),this.alert}};a([i(),o({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:!1,propertyType:"string",defaultValue:"alert-success"})],p.prototype,"typeOfAlert",void 0),a([o({description:"This property is the message that will be rendered on the alert",isMandatory:!1,propertyType:"any"})],p.prototype,"message",void 0),a([o({description:"This property is the time in milliseconds t",isMandatory:!1,propertyType:"any"})],p.prototype,"timeAlive",void 0),a([o({description:"The style customisation for the alert so it looks according to your application",isMandatory:!1,propertyType:"StyleCustomisation"})],p.prototype,"styleCustomisation",void 0);export{p as psk_ui_alert};