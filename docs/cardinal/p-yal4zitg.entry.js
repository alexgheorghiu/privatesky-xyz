import{r as e,c as t,h as o}from"./p-bd5842d7.js";import"./p-f77f00c7.js";import"./p-51c401ee.js";import{T as r}from"./p-e47a4734.js";import"./p-11ec80fb.js";import{i as n}from"./p-c2b42fe0.js";import"./p-4bed3927.js";import{T as i}from"./p-45cc54e4.js";var s=function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};const p=class{constructor(o){e(this,o),this.menuItems=[],this.needMenuItemsEvt=t(this,"needMenuItems",7)}componentDidLoad(){this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItems(e){return e.map(e=>e.children?this.renderItems(e.children):o("stencil-route",{url:e.path,exact:e.exact,component:e.component,componentProps:e.componentProps}))}render(){let e=this.renderItems(this.menuItems);return 0===e.length?o("psk-ui-loader",{shouldBeRendered:!0}):o("stencil-router",{historyType:"browser"},o("stencil-route-switch",{scrollTopOffset:0},e,o("stencil-route",{url:"/",exact:!0,component:"psk-page-not-found",componentProps:{urlDestination:"/home"}}),o("stencil-route",{component:"psk-page-not-found"})))}};s([r({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],p.prototype,"menuItems",void 0),s([r({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],p.prototype,"history",void 0),s([i({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],p.prototype,"needMenuItemsEvt",void 0),n(p);var a=function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};const c=class{constructor(o){e(this,o),this.userInfo=null,this.getUserInfoEvent=t(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((e,t)=>{e?console.error("Error getting user info",e):this.userInfo=t})}render(){return o(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};a([r({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:!1,propertyType:"any",defaultValue:"null"})],c.prototype,"userInfo",void 0),a([r({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:!1,propertyType:"any"})],c.prototype,"profileRenderer",void 0),a([i({eventName:"getUserInfo",controllerInteraction:{required:!0},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],c.prototype,"getUserInfoEvent",void 0);export{p as psk_app_router,c as psk_user_profile};