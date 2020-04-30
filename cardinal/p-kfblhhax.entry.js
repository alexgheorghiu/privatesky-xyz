import{r as t,c as e,h as i}from"./p-2eb42df6.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as r}from"./p-43fec8b7.js";import{C as s}from"./p-9e1e2fb1.js";import{T as o}from"./p-acfddbd8.js";var n=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let a;const l=class{constructor(i){t(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=e(this,"validateUrl",7),this.getTags=e(this,"getTags",7)}getAssignedUrlFromTag(t,e){a?e(void 0,a[t]):this.getTags.emit((i,r)=>{if(i)return e(i);e(void 0,(a=r)[t])})}componentWillLoad(){let t=(t,e)=>{t||!e?this.error=!0:this.destinationUrl=this.chapter?e+"&chapter="+this.chapter:e};if(this.tag)return this.getAssignedUrlFromTag(this.tag,t);this.page&&this.validateUrl.emit({sourceUrl:this.page,callback:t})}render(){let t=null;return this.error&&(t=i("div",{class:"tooltip-error"},i("div",null,"Page ",i("b",null,this.page)," does not exists."))),i("div",{class:"psk-link"},this.error?i("div",null,i("a",{class:`btn btn-link ${this.error?"invalid-url":""}`,onClick:t=>{t.preventDefault()}},i("slot",null)),t):i("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},i("slot",null)))}};n([s(),r({description:"This property is helping the component to resolve the real URL of the target. This property is validated for the first time by the valdateUrl event.",isMandatory:!1,propertyType:"string"})],l.prototype,"page",void 0),n([r({description:"This property gives the component a unique tag which resolves a single page.",isMandatory:!1,propertyType:"string"})],l.prototype,"tag",void 0),n([r({description:"This property allows user to create a complex URL containing a page chapter identifier",isMandatory:!1,propertyType:"string"})],l.prototype,"chapter",void 0),n([o({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Page {page-name} does not exists".']})],l.prototype,"validateUrl",void 0),n([o({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order get the dictionary that keeps the mapped tags to their real page URLs"]})],l.prototype,"getTags",void 0);export{l as psk_link};