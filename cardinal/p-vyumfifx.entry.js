import{r as t,h as i,g as s}from"./p-a1b3783e.js";import"./p-f54614d6.js";import{i as h}from"./p-97f936e8.js";import"./p-7021fe2a.js";const e=class{constructor(i){t(this,i),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=!1}componentWillLoad(){this.computeMatch()}computeMatch(){if(this.location){let t=this.location.search;-1!==t.indexOf("&")&&(t=t.substring(0,t.indexOf("&"))),this.match=t===this.url}}handleClick(t){if(!(t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)(t)&&this.history&&this.url)return t.preventDefault(),this.history.push(this.url)}render(){let t={class:{[this.activeClass]:this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign(Object.assign({},t),{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};h(e);export{e as query_page_link};