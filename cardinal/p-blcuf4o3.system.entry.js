System.register(["./p-52cd94a3.system.js"],function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.r;i=t.g;n=t.h}],execute:function(){var s=t("expandable_renderer",function(){function t(t){e(this,t);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}t.prototype.handleClick=function(t){var e=t.target;if(!i(this).contains(e)){this.isOpened=false}};t.prototype.routeChanged=function(){this.dropDownHasChildActive=window.location.href.includes(this.url)};t.prototype.toggleDropdown=function(t){var e=t.target;var i=false;while(e.parentElement){e=e.parentElement;if(e.classList.contains("children")){i=true;break}}if(!i){console.log(this.firstMenuChild);this.history.push(this.firstMenuChild.path);t.stopImmediatePropagation()}this.isOpened=!this.isOpened};t.prototype.render=function(){var t=this;this.routeChanged();return n("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(e){return t.toggleDropdown(e)}},n("slot",null))};return t}())}}});