System.register(["./p-008f8465.system.js"],(function(t){"use strict";var e,n,s;return{setters:[function(t){e=t.r;n=t.h;s=t.g}],execute:function(){var o=t("psk_tag",function(){function t(t){e(this,t);this.title="";this.componentCode=""}t.prototype.componentWillLoad=function(){this.componentCode=this.host.innerHTML;this.host.innerHTML=""};t.prototype.render=function(){if(this.title.replace(/\s/g,"")===""){return n("psk-card",{title:this.title},n("pre",{class:"text-center code-tag"},n("code",{class:"language-html code-tag","data-lang":"html"},n("span",{class:"nt"},this.componentCode))))}return n("psk-chapter",{title:this.title},n("pre",{class:"text-center code-tag"},n("code",{class:"language-html code-tag","data-lang":"html"},n("span",{class:"nt"},this.componentCode))))};Object.defineProperty(t.prototype,"host",{get:function(){return s(this)},enumerable:true,configurable:true});return t}())}}}));