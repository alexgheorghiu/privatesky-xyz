import{r as e,g as t,h as o}from"./p-a1b3783e.js";import{T as r}from"./p-230f8bf8.js";var i=function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(i=e[h])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};const s=class{constructor(t){e(this,t),this.isOpened=!1,this.dropDownHasChildActive=!1,this.somethingChanged=!1}handleClick(e){const o=e.target;t(this).contains(o)||(this.isOpened=!1)}routeChanged(){this.dropDownHasChildActive=window.location.href.includes(this.url)}toggleDropdown(e){let t=e.target,o=!1;for(;t.parentElement;)if((t=t.parentElement).classList.contains("children")){o=!0;break}o||e.stopImmediatePropagation(),this.isOpened=!this.isOpened}render(){return this.routeChanged(),o("div",{class:`dropdown ${this.dropDownHasChildActive?"active":""} ${this.isOpened?"isOpened":""}`,onClick:e=>this.toggleDropdown(e)},o("slot",null))}};i([r({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:!1,propertyType:"boolean"})],s.prototype,"active",void 0),i([r({description:"This property sets the url for the component in menu in order to be routed.",isMandatory:!0,propertyType:"any"})],s.prototype,"url",void 0),i([r({description:"This property tells the component if something changed with the MenuItem",isMandatory:!1,propertyType:"boolean"})],s.prototype,"somethingChanged",void 0);export{s as dropdown_renderer};