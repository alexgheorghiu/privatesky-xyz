import{g as e,B as t,r as n,h as o}from"./p-d76f0ca1.js";const i="definedProperties";function s(e){return function(t,n){const{componentWillLoad:o}=t;t.componentWillLoad=function(){let t=this;if(t.helpConfiguration){const o=Object.assign({},t.helpConfiguration),s=Object.assign({},e,{propertyName:n});if(o.hasOwnProperty(i)){let e=[...o[i]];e.push(s),o[i]=[...e]}else o[i]=[s];t.helpConfiguration=Object.assign({},o)}return o&&o.call(t)}}}var r=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};const a=class{constructor(e){n(this,e),this.urlDestination=null,this.pageRenderer="psk-page-not-found-renderer"}render(){return null!==this.urlDestination?o("stencil-router-redirect",{url:this.urlDestination}):-1!=window.location.pathname.indexOf(this.basePath)?o("stencil-router-redirect",{url:this.basePath}):o(this.pageRenderer,null)}static get style(){return":host>*{width:100%;height:100%}h1{color:red;padding:1em}a{text-decoration:none;font-style:italic;font-weight:700}"}};var p;r([s({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",mandatory:!1})],a.prototype,"basePath",void 0),r([s({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",mandatory:!1})],a.prototype,"urlDestination",void 0),r([s({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, <b>psk-page-not-found-renderer</b> is assumed.",mandatory:!1})],a.prototype,"pageRenderer",void 0),r([(p={className:"PskPageNotFound",componentTag:"psk-page-not-found",description:["This component is intended to be used inside a router component, so when the user navigates to an unknown route, this component will be loaded.","This component should be instantiated everywhere in application where there is a possibility to navigate to a wrong or unknown route.","The component has the role to redirect the user to a valid route inside the application by using basePath or urlDestination properties.","If none of these two properties are given, then a third property is checked: pageRenderer.","The the order of the properties priority is the following: basePath; urlDestination - if basePath is not given, this property will be used; pageRenderer - if urlDestination is not given, pageRenderer will be used"]},function(n){t.cmpWillLoad=!0;let o=!0,{render:i,componentWillLoad:s}=n;n.componentWillLoad=function(){const t=e(this);return(o=t.hasAttribute("with-help"))&&(this.helpConfiguration={baseClass:Object.assign({},p)}),s&&s.call(this)},n.render=function(){if(!o)return i&&i.call(this);document.dispatchEvent(new CustomEvent("psk-toc-help",{bubbles:!0,composed:!0,cancelable:!0,detail:this.helpConfiguration}))}})],a.prototype,"helpConfiguration",void 0);export{a as psk_page_not_found};