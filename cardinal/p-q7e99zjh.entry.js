import{r as s,g as t,h as i}from"./p-bedaeec3.js";import{A as e}from"./p-b3a6e3fc.js";import"./p-4bed3927.js";const o=class{constructor(t){s(this,t),this.isOpened=!1,this.dropDownHasChildActive=!1,this.somethingChanged=!1}handleClick(s){const i=s.target;t(this).contains(i)||(this.isOpened=!1)}routeChanged(){this.dropDownHasChildActive=window.location.href.includes(this.url)}toggleDropdown(s){let t=s.target,i=!1;for(;t.parentElement;)if((t=t.parentElement).classList.contains("children")){i=!0;break}i||(this.isOpened||this.history.push(this.firstMenuChild.path),s.stopImmediatePropagation()),this.isOpened=!this.isOpened}render(){return this.routeChanged(),i("div",{class:`dropdown ${this.dropDownHasChildActive?"active":""} ${this.isOpened?"isOpened":""}`,onClick:s=>this.toggleDropdown(s)},i("slot",null))}};e.injectProps(o,["history","location"]);export{o as expandable_renderer};