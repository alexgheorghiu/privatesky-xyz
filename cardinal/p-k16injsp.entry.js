import{r as e,h as t}from"./p-a1b3783e.js";import{T as r}from"./p-d92f9c24.js";import{C as s}from"./p-2a22f87e.js";var n=function(e,t,r,s){var n,a=arguments.length,i=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const a=class{constructor(t){e(this,t)}renderMenuItem(e){let r=e.path,s=[];return e.children&&e.children.forEach(e=>{s.push(this.renderMenuItem(e))}),t("abstract"===e.type?"dropdown-renderer":"stencil-route-link",{url:r,activeClass:"active",exact:!1,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:`icon fa ${e.icon}`}),t("a",null,e.children?t("span",{class:"item_name"},e.name,t("span",{class:"fa fa-caret-down"})):t("span",{class:"item_name"},e.name))),e.children?t("div",{class:"children"},s):null))}render(){return this.renderMenuItem(this.value)}};n([s(),r({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:!1,propertyType:"MenuItem"})],a.prototype,"value",void 0),n([r({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:!1,propertyType:"boolean"})],a.prototype,"active",void 0);export{a as psk_menu_item_renderer};