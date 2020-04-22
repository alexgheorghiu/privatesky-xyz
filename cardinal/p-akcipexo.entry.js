import{r as t,h as e,g as i}from"./p-2eb42df6.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as o}from"./p-43fec8b7.js";import{C as r}from"./p-f49df5a7.js";const s="@event:";class n{static _prepareRoutesTree(t,e){let i=function(t){let o={};return t.forEach(t=>{let r=t.name.replace(/(\s+|-)/g,"").toLowerCase();if(!o[r]){let i=t.path;switch(e){case"browser":case"query":i=t.path;break;case"hash":i="/#"+t.path}o[r]={path:i}}if("object"==typeof t.children&&Array.isArray(t.children.items))o[r].children={type:"known",items:i(t.children.items)};else if("string"==typeof t.children&&0===t.children.indexOf(s)){let e=t.children.substring(s.length);o[r].children={type:"event",event:e}}}),o};return i(t)}static _prepareConfiguration(t,e){let i={};i.baseUrl=e;let o=e+t.basePagesUrl;if(t.modals&&(i.modals={},Object.keys(t.modals).length))for(let s in t.modals)i.modals[s]=o+t.modals[s];if(!t.menu||!t.menu.defaultMenuConfig)throw new Error("Default menu configuration is missing");let r=t.menu.defaultMenuConfig;t.profile&&(i.profile=t.profile);let l=function(t){for(let e=0;e<t.length;e++)t[e].children&&t[e].children.items?l(t[e].children.items):void 0!==t[e].indexed&&"false"===t[e].indexed.toString()&&t.splice(e,1);return t},a=function(t,e){return t.forEach(t=>{if(!t.path){let e=t.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");e=e.replace(/[:\/]/g,""),t.path=e}if(e?t.path=e+"/"+t.path:0!==t.path.indexOf("/")&&(t.path="/"+t.path),t.children)t.type="abstract",t.icon||(t.icon=r.icon);else{for(let e in r)t.hasOwnProperty(e)||(t[e]=r[e]);if("psk-page-loader"===t.component)if(t.componentProps||(t.componentProps={}),Object.assign(t.componentProps,t.options),t.pageSrc)t.componentProps.pageUrl=t.pageSrc.startsWith("http")?t.pageSrc:o+t.pageSrc;else{let i=t.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase(),r="";e&&(r=e.replace(/^\//,"")),t.componentProps.pageUrl=o+r+"/"+i+".html"}}if("object"==typeof t.children&&Array.isArray(t.children))t.children={type:"known",items:JSON.parse(JSON.stringify(t.children))},a(t.children.items,t.path);else if("string"==typeof t.children&&0==t.children.indexOf(s)){let e=t.children.substring(s.length);t.children={type:"event",event:e},t.component="psk-ssapp-loader"}}),t};i.routes=a(t.menu.pages),i.historyType="browser";let c=t.menu.defaultMenuConfig.historyType;if("hash"!==c&&"query"!==c||(i.historyType=c),"query"===c){let e="?";t.menu.defaultMenuConfig.pagePrefix&&(e=t.menu.defaultMenuConfig.pagePrefix);let o=function(t){t.forEach(t=>{let i=t.path;0===i.indexOf("/")&&(i=i.substr(1)),t.path=`${e}${i}`,t.children&&o(t.children.items)})};o(i.routes)}let p=JSON.parse(JSON.stringify(i.routes));return i.menu=l(p),i.pagesHierarchy=n._prepareRoutesTree(i.routes,c),i}}const l="/app-config.json";class a{constructor(t){this.configIsLoaded=!1,this.pendingRequests=[],this._getAppConfiguration(l,(t,e)=>{let i;for(i=window&&window.location&&window.location.origin?window.location.origin:e.baseUrl,this.configuration=n._prepareConfiguration(e,i),this.configIsLoaded=!0;this.pendingRequests.length;){let t=this.pendingRequests.pop();if(!this.configuration[t.configName])throw new Error(`Config ${t.configName} was not provided`);t.callback(null,this.configuration[t.configName])}}),t.addEventListener("needRoutes",this._provideConfig("routes")),t.addEventListener("needMenuItems",this._provideConfig("menu")),t.addEventListener("getUserInfo",this._provideConfig("profile")),t.addEventListener("getHistoryType",this._provideConfig("historyType")),t.addEventListener("getModals",this._provideConfig("modals")),t.addEventListener("validateUrl",t=>{t.stopImmediatePropagation();let{sourceUrl:e,callback:i}=t.detail;i&&"function"==typeof i?this._parseSourceUrl(e,i):console.error("Callback was not properly provided!")})}_provideConfig(t){return e=>{e.stopImmediatePropagation();let i=e.detail;if(i&&"function"==typeof i)if(this.configIsLoaded){if(!this.configuration[t])throw new Error(`Config ${t} was not provided`);i(null,this.configuration[t])}else this.pendingRequests.push({configName:t,callback:i})}}_parseSourceUrl(t,e){let i=(t=t.replace(/(\s+|-)/g,"").toLowerCase()).split("/"),o=this.configuration.pagesHierarchy;for(let r=0;r<i.length;r++){let s=i[r];const n=Object.keys(o).find((function(t){return-1!==o[t].path.toLowerCase().indexOf(s)}));let l,a,c=void 0!==o[n];if(!o[s]&&!c){e(`${t} is not a valid path in the application!`);break}"object"!=typeof(l=c?o[n].children:o[s].children)||"object"!=typeof l.items||r===i.length?e(null,a=c?o[n].path:o[s].children):o=l.items}}_getAppConfiguration(t,e){let i=new XMLHttpRequest;i.open("GET",t),i.onload=()=>{if(200!=i.status)e(new Error(i.status.code));else{let t=JSON.parse(i.responseText);e(null,t)}},i.onerror=()=>{e(new Error("An error occurred"))},i.send()}}const c=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let t="";for(let i=1;i<=12;i++)t+=`<div class="sk-circle${i} sk-circle"></div>`;let e=document.createElement("div");return e.className="app-loader",e.innerHTML=`<div class='sk-fading-circle'>${t}</div>`,e}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let t=this.host.innerHTML;if((t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((t,e)=>{r.getController(this.controller).then(e=>{if(this.disconnected)return t();new e(this.host),t()}).catch(e)});new a(this.host)}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return e(this.hasSlot?"slot":"psk-default-renderer",null)}get host(){return i(this)}};!function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);s>3&&n&&Object.defineProperty(e,i,n)}([o({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no controller is provided, a default controller will be passed to the component","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],c.prototype,"controller",void 0);export{c as psk_app_root};