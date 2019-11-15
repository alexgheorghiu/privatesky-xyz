import{r as e,c as t,h as r}from"./p-a1b3783e.js";import{T as i}from"./p-7c85f64b.js";import{C as n}from"./p-2a22f87e.js";import{T as o}from"./p-19352696.js";var s=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const a=class{constructor(r){e(this,r),this.menuItems=null,this.hamburgerMaxWidth=600,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=t(this,"menuEvent",7),this.needMenuItemsEvt=t(this,"needMenuItems",7),this.getHistoryType=t(this,"getHistoryType",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded(),this.getHistoryType.emit((e,t)=>{e?console.log(e):this.historyType=t})}handleClick(e){e.preventDefault();let t=e.target.value;for(let r=0;r<this.menuItems.length;r++)this.menuItems[r].active=t===this.menuItems[r];this.menuItemClicked.emit(e.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItem(e){let t=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",i=[];if(e.children)for(let r=0;r<e.children.length;r++)i.push(this.renderItem(e.children[r]));return r(t,{onclick:e=>this.handleClick(e),historyType:this.historyType,active:!!e.active&&e.active,children:i,hamburger:this.showHamburgerMenu,value:e})}render(){if(!this.menuItems)return;let e=[];for(let r=0;r<this.menuItems.length;r++)e.push(this.renderItem(this.menuItems[r]));let t=this.menuItems.find(e=>e.active);if(this.showHamburgerMenu){e=e.map(e=>r("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},e));let i="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return r("nav",{class:"navbar navbar-dark "},r("a",{class:"navbar-brand",href:"#"},t?t.name:"Home"),r("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},r("span",{class:"navbar-toggler-icon"})),r("div",{class:i},r("ul",{class:"navbar-nav mr-auto"},e)))}return e}};s([n(),i({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:!1,propertyType:"string"})],a.prototype,"itemRenderer",void 0),s([i({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:!1,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],a.prototype,"menuItems",void 0),s([i({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:!1,propertyType:"number",defaultValue:"600"})],a.prototype,"hamburgerMaxWidth",void 0),s([o({eventName:"menuEvent",controllerInteraction:{required:!0},description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],a.prototype,"menuItemClicked",void 0),s([o({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],a.prototype,"needMenuItemsEvt",void 0),s([o({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],a.prototype,"getHistoryType",void 0);var l=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const h=class{constructor(r){e(this,r),this.menuItems=[],this.failRedirectTo="",this.needMenuItemsEvt=t(this,"needMenuItems",7),this.getHistoryType=t(this,"getHistoryType",7)}componentDidLoad(){this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t}),this.getHistoryType.emit((e,t)=>{e?console.log(e):this.historyType=t})}renderItems(e){return e.map(e=>e.children?this.renderItems(e.children):r("stencil-route",{url:e.path,component:e.component,componentProps:e.componentProps}))}render(){let e=this.renderItems(this.menuItems);return 0===e.length?r("psk-ui-loader",{shouldBeRendered:!0}):r("div",{class:"app_container"},r("stencil-router",{historyType:"query"===this.historyType?"browser":this.historyType},r("stencil-route-switch",{scrollTopOffset:0},"query"===this.historyType?r("stencil-route",{component:"query-pages-router",componentProps:{pages:this.menuItems}}):[e,r("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.menuItems[0].path}})])))}};l([i({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],h.prototype,"menuItems",void 0),l([i({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],h.prototype,"historyType",void 0),l([o({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],h.prototype,"needMenuItemsEvt",void 0),l([o({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],h.prototype,"getHistoryType",void 0);var c=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const p=class{constructor(r){e(this,r),this.userInfo=null,this.getUserInfoEvent=t(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((e,t)=>{e?console.error("Error getting user info",e):this.userInfo=t})}render(){return r(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};c([i({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:!1,propertyType:"any",defaultValue:"null"})],p.prototype,"userInfo",void 0),c([i({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:!1,propertyType:"any"})],p.prototype,"profileRenderer",void 0),c([o({eventName:"getUserInfo",controllerInteraction:{required:!0},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],p.prototype,"getUserInfoEvent",void 0);export{a as app_menu,h as psk_app_router,p as psk_user_profile};