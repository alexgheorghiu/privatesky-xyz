import{r as t,h as i,g as s}from"./p-bd5842d7.js";import"./p-20ed7f93.js";import{T as e}from"./p-1cf1df9f.js";import{C as l}from"./p-92afb37f.js";var n=function(t,i,s,e){var l,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,s,e);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(r=(n<3?l(r):n>3?l(i,s,r):l(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};const r=class{constructor(i){t(this,i),this.fadeSeconds=1,this.visibleSeconds=10}componentWillLoad(){this.images?(this.marginTop=this.element.getBoundingClientRect().y,this.checkLayout(),this.imagesSrcs=this.images.split(","),this.getAnimationCSS()):console.log("No images provided")}checkLayout(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop}renderSlide(t,s){return i("li",{id:"slide-"+s,class:"animation-"+s,style:{backgroundImage:"url("+t+")"}})}getAnimationCSS(){let t=this.fadeSeconds+this.visibleSeconds,i=100/(t*this.imagesSrcs.length),s=`@keyframes fade {\n    0% { opacity: 0; }\n    ${i*this.fadeSeconds}% { opacity: 1; }\n    ${i*t}% { opacity: 1; }\n    ${i*(t+this.fadeSeconds)}% { opacity: 0; }\n    100% { opacity: 0; }\n  }`;for(let i=0;i<this.imagesSrcs.length;i++)s+=`#psk-slider li:nth-child(${i}) {\n        animation-delay: ${t*i}s;\n        }`;s+=`#psk-slider li{animation-duration: ${t*this.imagesSrcs.length}s;}`;let e=document.createElement("style");e.innerHTML=s,this.element.shadowRoot.prepend(e)}render(){let t=[];this.imagesSrcs.forEach((i,s)=>{t.push(this.renderSlide(i,s))});let s=this.title?i("div",{class:"title"},this.title):null,e=this.caption?i("div",{class:"caption"},this.caption):null,l=this.element.children.length>0?i("div",{class:"actions"},i("slot",null)):null,n=null;return(s||e||l)&&(n=i("div",{class:"container"},i("div",{class:"content"},[s,e,l]))),i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},n,i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))}get element(){return s(this)}};n([l(),e({description:["This property is the images sources separed by ','.","Using this property a new array will be created by spliting this string by ','."],isMandatory:!0,propertyType:"string"})],r.prototype,"images",void 0),n([e({description:["This property is the title of the slideshow that will be rendered.","If this property is given than a new div container will be created with the title as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],r.prototype,"title",void 0),n([e({description:["This property is the caption of the slideshow that will be rendered.","If this property is given than a new div container will be created with the caption as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],r.prototype,"caption",void 0);export{r as psk_slideshow};