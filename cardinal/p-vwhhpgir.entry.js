import{r as t,h as e,c as i,g as s}from"./p-a1b3783e.js";import{T as r,f as o,s as c,e as a,g as n}from"./p-d92f9c24.js";import{C as p}from"./p-2a22f87e.js";import{T as h}from"./p-ecffe266.js";var l=function(t,e,i,s){var r,o=arguments.length,c=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,i,c):r(e,i))||c);return o>3&&c&&Object.defineProperty(e,i,c),c};const d=class{constructor(e){t(this,e),this.title="",this.id=""}render(){const t=this.id.trim().replace(/(\s+|:+|\/+)/g,"-").toLowerCase();let i=null;return this.title&&(i=e("div",{class:"card-header"},e("h5",null,this.title,t.length>0?e("psk-copy-clipboard",{id:t},"#"):null))),e("div",{class:"card psk-card",id:t},i,e("div",{class:"card-body"},e("slot",null)))}};l([p(),r({description:"This property is the title of our own version of the html card.",isMandatory:!1,propertyType:"string"})],d.prototype,"title",void 0),l([r({description:"This property is the id which will be used in order to create the unique element id and for the psk-copy-clipboard component.",isMandatory:!1,propertyType:"string"})],d.prototype,"id",void 0);var f=function(t,e,i,s){var r,o=arguments.length,c=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,i,c):r(e,i))||c);return o>3&&c&&Object.defineProperty(e,i,c),c};const u=class{constructor(e){t(this,e),this.title="",this.reportedToc=!1,this.guid=(()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})))(),this.chapterInfo={title:this.title,guid:this.guid,children:[]},this.sendChapter=i(this,"psk-send-chapter",5)}componentDidLoad(){this.reportedToc||this.sendChapter.emit(this.chapterInfo)}receivedChapter(t){if(t.path&&t.path[0]&&s(this)!==t.path[0]){if(t.stopImmediatePropagation(),this.chapterInfo.children.length>0){let e=!1;this.chapterInfo.children.forEach(i=>{i.guid===t.detail.guid&&(i.children=t.detail.children,e=!0)}),e||this.chapterInfo.children.push(t.detail)}else this.chapterInfo.children.push(t.detail);this.sendChapter.emit(this.chapterInfo),this.reportedToc=!0}}render(){return e("psk-card",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},e("slot",null))}};f([p(),r({description:"This property is the title, that will be used in order to create a psk-card ",isMandatory:!1,propertyType:"string"})],u.prototype,"title",void 0),f([r({description:"This property is the guid that will be created as a unique 32 characters code passed as a id for the chapter",isMandatory:!1,propertyType:"string"})],u.prototype,"guid",void 0),f([h({eventName:"psk-send-chapter",description:"This event is emitted the moment a psk-chapter with a title is created.\n\t\t\t\t\t It will create a tree of children which will pe rendered for the UI."})],u.prototype,"sendChapter",void 0);var y=function(t,e,i,s){var r,o=arguments.length,c=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,i,c):r(e,i))||c);return o>3&&c&&Object.defineProperty(e,i,c),c};const x=class{constructor(e){t(this,e),this.id="",this.chapterToken="",this.getHistoryType=i(this,"getHistoryType",7)}componentWillLoad(){this.getHistoryType.emit((t,e)=>{if(t)console.log(t);else switch(e){case"browser":case"hash":this.chapterToken="?chapter=";break;case"query":this.chapterToken="&chapter="}})}_copyToClipboardHandler(t){try{let e=window.location.href;-1!==window.location.href.indexOf(this.chapterToken)&&(e=window.location.href.split(this.chapterToken)[0]),console.log(`raf:${e}${this.chapterToken}${t}`),navigator.clipboard.writeText(`${e}${this.chapterToken}${t}`);const i=this.element.querySelector(".tooltip");i.innerHTML=o,i.setAttribute("class","tooltip copied"),c(t,a(this.element,"psk-page"))}catch(e){console.error(e)}}_resetTooltip(){const t=this.element.querySelector(".tooltip");t.innerHTML=n,t.setAttribute("class","tooltip")}_isCopySupported(){let t=!!document.queryCommandSupported;return["copy","cut"].forEach(e=>{t=t&&!!document.queryCommandSupported(e)}),t}render(){const t=this.id.trim().replace(/( |:|\/|\.)/g,"-").toLowerCase();if(0!==t.length&&this._isCopySupported())return e("div",{id:"tooltip",onClick:e=>{e.stopImmediatePropagation(),this._copyToClipboardHandler(t)},onMouseOut:()=>{this._resetTooltip()}},e("a",{class:"mark",href:`#${t}`,onClick:t=>{t.preventDefault()}},e("slot",null)),e("span",{class:"tooltip"},n))}get element(){return s(this)}};y([p(),h({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],x.prototype,"getHistoryType",void 0),y([r({description:"This property is the id of the textzone that will be copied to the clipboard.",isMandatory:!1,propertyType:"string"})],x.prototype,"id",void 0);export{d as psk_card,u as psk_chapter,x as psk_copy_clipboard};