System.register(["./p-3369a689.system.js","./p-cf18e915.system.js","./p-d7fc1715.system.js","./p-fa4e7901.system.js","./p-44df65c4.system.js","./p-030976a5.system.js"],(function(e){"use strict";var t,i,r,s,n;return{setters:[function(e){t=e.r;i=e.h},function(e){r=e.C},function(){},function(){},function(e){s=e.T},function(e){n=e.B}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)if(o=e[c])n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n;return s>3&&n&&Object.defineProperty(t,i,n),n};var c=e("psk_img",function(){function e(e){t(this,e)}e.prototype.render=function(){return i("div",{class:"image_container"},i("div",{class:"image_wrapper"},i("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?i("div",{class:"image_description"},this.title):null)};return e}());o([r(),n(),s({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:true,propertyType:"string"})],c.prototype,"src",void 0);o([s({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:false,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],c.prototype,"title",void 0)}}}));