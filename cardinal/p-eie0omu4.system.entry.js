System.register(["./p-0b2166d8.system.js","./p-a2447dc6.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,o,n,i;return{setters:[function(e){t=e.r;o=e.h},function(e){n=e.T},function(e){i=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)if(l=e[r])s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s;return i>3&&s&&Object.defineProperty(t,o,s),s};var l=e("psk_files_chooser",function(){function e(e){t(this,e);this.label="Select files"}e.prototype.addedFile=function(e){var t=Array.from(e.target.files);if(typeof this.onFilesChange==="function"){this.onFilesChange(t)}if(typeof this.onFilesSelect==="function"){var o=t.map((function(e){return{name:e.name,size:e.size,type:e.name.substr(e.name.lastIndexOf(".")+1)}}));this.onFilesSelect(o)}};e.prototype.render=function(){return[o("button",{type:"button",class:"btn btn-secondary p-0"},o("label",{class:"pt-0 mb-0 p-2"},this.label,o("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:true,class:"form-control-file form-control-sm"}))),!this.onFilesChange&&!this.onFilesSelect?o("h5",{class:"mt-4"},"No controller set for this component!"):null]};return e}());s([i(),n({description:"This is the lable of the button",isMandatory:false,propertyType:"string",defaultValue:"Select files"})],l.prototype,"label",void 0);s([n({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:false,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],l.prototype,"accept",void 0);s([n({description:"This property tells the component what to do with the changed uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the changed uploaded files.",isMandatory:false,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],l.prototype,"onFilesChange",void 0);s([n({description:"This property tells the component what to do with the selected uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the selected uploaded files.",isMandatory:false,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],l.prototype,"onFilesSelect",void 0)}}}));