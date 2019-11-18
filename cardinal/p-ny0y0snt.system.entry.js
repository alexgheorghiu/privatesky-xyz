System.register(["./p-0b2166d8.system.js","./p-19b00136.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.r;n=e.h},function(e){o=e.T},function(e){r=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,n,o){var r=arguments.length,s=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(i=e[a])s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s;return r>3&&s&&Object.defineProperty(t,n,s),s};var i=e("psk_floating_menu",function(){function e(e){t(this,e);this.opened=false}e.prototype.render=function(){var e=this;return[n("div",{id:"backdrop",onClick:function(t){t.preventDefault();e.opened=!e.opened}}),n("div",{class:"container"},n("ul",{class:"items"},this.menuItems.map((function(t){n("li",{onClick:function(){e.opened=!e.opened},class:"nav-item"},t)}))),n("div",{class:"toggleFloatingMenu"},n("a",{href:"#",class:"plus",onClick:function(t){t.preventDefault();e.opened=!e.opened}},n("span",{class:"fa fa-plus"}))))]};return e}());s([r(),o({description:"This property represents the elements that should be rendered in a Floating Menu.",isMandatory:true,propertyType:"Array of MenuItem(MenuItem[])"})],i.prototype,"menuItems",void 0);s([o({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],i.prototype,"opened",void 0)}}}));