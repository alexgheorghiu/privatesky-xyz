import{r as e,h as t}from"./p-a1b3783e.js";import{T as o}from"./p-7c85f64b.js";import{C as s}from"./p-2a22f87e.js";var i=function(e,t,o,s){var i,n=arguments.length,l=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(l=(n<3?i(l):n>3?i(t,o,l):i(t,o))||l);return n>3&&l&&Object.defineProperty(t,o,l),l};const n=class{constructor(t){e(this,t),this.label="Select files"}addedFile(e){let t=Array.from(e.target.files);if("function"==typeof this.onFilesChange&&this.onFilesChange(t),"function"==typeof this.onFilesSelect){let e=t.map(e=>({name:e.name,size:e.size,type:e.name.substr(e.name.lastIndexOf(".")+1)}));this.onFilesSelect(e)}}render(){return[t("button",{type:"button",class:"btn btn-secondary p-0"},t("label",{class:"pt-0 mb-0 p-2"},this.label,t("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:!0,class:"form-control-file form-control-sm"}))),this.onFilesChange||this.onFilesSelect?null:t("h5",{class:"mt-4"},"No controller set for this component!")]}};i([s(),o({description:"This is the lable of the button",isMandatory:!1,propertyType:"string",defaultValue:"Select files"})],n.prototype,"label",void 0),i([o({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:!1,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],n.prototype,"accept",void 0),i([o({description:"This property tells the component what to do with the changed uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the changed uploaded files.",isMandatory:!1,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],n.prototype,"onFilesChange",void 0),i([o({description:"This property tells the component what to do with the selected uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the selected uploaded files.",isMandatory:!1,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],n.prototype,"onFilesSelect",void 0);export{n as psk_files_chooser};