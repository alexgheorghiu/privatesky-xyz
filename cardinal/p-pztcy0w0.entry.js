import{r as e,h as r}from"./p-a1b3783e.js";import{T as t}from"./p-230f8bf8.js";import{C as s}from"./p-2a22f87e.js";const o=class{constructor(r){e(this,r)}render(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("p",null,r("img",{src:this.userInfo.avatar,alt:"card image"})),r("h5",{class:"card-title"},this.userInfo.username),r("p",{class:"card-text"},this.userInfo.email)))}};!function(e,r,t,s){var o,i=arguments.length,a=i<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,s);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);i>3&&a&&Object.defineProperty(r,t,a)}([s(),t({description:"This property is the user information that needs to be rendered for the user.",isMandatory:!1,propertyType:"any"})],o.prototype,"userInfo",void 0);export{o as psk_user_profile_renderer};