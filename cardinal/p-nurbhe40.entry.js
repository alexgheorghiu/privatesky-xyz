import{r as e,h as t}from"./p-bd5842d7.js";import{T as i}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as r}from"./p-bd9d7655.js";var s=function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const o=class{constructor(t){e(this,t)}render(){return t("div",{class:"image_container"},t("div",{class:"image_wrapper"},t("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?t("div",{class:"image_description"},this.title):null)}};s([r(),i({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],o.prototype,"src",void 0),s([i({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0);export{o as psk_img};