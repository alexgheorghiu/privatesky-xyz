import{r as t,g as e,h as r}from"./p-bd5842d7.js";import{e as s,s as i,T as l}from"./p-b6a32a15.js";import{C as o}from"./p-92afb37f.js";const n=class{constructor(e){t(this,e),this.chapterList=[]}connectedCallback(){this.pskPageElement=s(e(this),"psk-page")}tocReceived(t){t.detail&&(this.chapterList=this._sortChapters([...t.detail]))}_sortCurrentChapter(t,e){if(0===t.children.length)return t;let r=[];for(let s=0;s<e.length;++s){let i=t.children.find(t=>t.guid===e[s]);i&&(e.splice(s--,1),r.push(this._sortCurrentChapter(i,e)))}return Object.assign({},t,{children:r})}_sortChapters(t){const e=this.pskPageElement.querySelectorAll("psk-chapter"),r=[];e.forEach(t=>{t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events")||!t.hasAttribute("guid")||r.push(t.getAttribute("guid"))});let s=[];for(let e=0;e<r.length;++e){let i=t.find(t=>t.guid===r[e]);i&&(r.splice(e--,1),s.push(this._sortCurrentChapter(i,r)))}return s}_renderChapters(t,e,s){return e.map((e,l)=>{let o=void 0===s?`${l+1}.`:`${s}${l+1}.`;return r("li",{onClick:r=>{r.stopImmediatePropagation(),r.preventDefault(),i(e.title,t)}},r("span",null,`${o} ${e.title}`),0===e.children.length?null:r("ul",null,this._renderChapters(t,e.children,o)))})}render(){return r("div",{class:"table-of-content"},r("psk-card",{title:this.title},r("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))}};!function(t,e,r,s){var i,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(o=(l<3?i(o):l>3?i(e,r,o):i(e,r))||o);l>3&&o&&Object.defineProperty(e,r,o)}([o(),l({description:"This property is the title of the psk-card that will be created.",isMandatory:!1,propertyType:"string"})],n.prototype,"title",void 0);export{n as psk_toc};