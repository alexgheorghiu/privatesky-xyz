import{r as t,c as e,h as s}from"./p-a1b3783e.js";import{T as i}from"./p-e91cdd9f.js";import{C as n}from"./p-2a22f87e.js";import{T as o}from"./p-377d0bb2.js";var l=function(t,e,s,i){var n,o=arguments.length,l=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(o<3?n(l):o>3?n(e,s,l):n(e,s))||l);return o>3&&l&&Object.defineProperty(e,s,l),l};const r=class{constructor(s){t(this,s),this.opened=!1,this.pin="",this.errorMessage=null,this.sendPinHandler=t=>{t.stopImmediatePropagation(),this.sendPin.emit({pin:this.pin,callback:t=>{if(!t)return this.opened=!1,void(this.errorMessage=null);this.errorMessage=t}})},this.sendPin=e(this,"sendPin",7)}closePinPopup(t){t.stopImmediatePropagation(),this.opened=!1}handlePinKeyUp(t){t.stopImmediatePropagation(),this.pin=t.target.value,this.errorMessage=null}render(){return s("psk-modal",{opened:this.opened},s("h3",{slot:"title"},"Enter your PIN"),s("form",{role:"form"},s("div",{class:"form-group mx-sm-3 mb-2"},s("label",{htmlFor:"pin",class:`col-form-label ${null!==this.errorMessage&&"text-danger"}`},"PIN"),s("input",{name:"pin",type:"password",class:`form-control ${null!==this.errorMessage&&"is-invalid"}`,id:"pin",placeholder:"PIN",onKeyUp:this.handlePinKeyUp.bind(this),value:this.pin}),this.errorMessage?s("span",{class:"text-danger"},this.errorMessage):null)),s("button",{slot:"confirm_action",class:"btn btn-success mt-4 mb-4",disabled:0===this.pin.trim().length,onClick:this.sendPinHandler.bind(this)},"Send PIN"))}};l([n(),i({description:"This is the property that gives the state of the popup if it is opened or closed.The possible values are ture or false",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),l([o({eventName:"sendPin",controllerInteraction:{required:!0},description:'This event is triggered when the button "Send PIN" is clicked. This event comes with two parameters:\n\t\t\tpin - the PIN written by the user\n\t\t\tcallback - a callback function that is called after the pin is checked. this callback has one parameter (err) and should be sent only if the PIN is invalid.'})],r.prototype,"sendPin",void 0);export{r as psk_pin_popup};