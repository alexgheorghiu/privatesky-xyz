import{r as e,h as t}from"./p-bd5842d7.js";import{T as i}from"./p-b6a32a15.js";import{C as r}from"./p-92afb37f.js";var s=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const a=class{constructor(t){e(this,t)}render(){return t("div",{class:"image_container"},t("div",{class:"image_wrapper"},t("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?t("div",{class:"image_description"},this.title):null)}};s([r(),i({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],a.prototype,"src",void 0),s([i({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],a.prototype,"title",void 0);export{a as psk_img};