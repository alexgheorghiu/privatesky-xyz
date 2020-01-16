import{r as e,h as t}from"./p-bd5842d7.js";import{T as i}from"./p-b6a32a15.js";import{B as s}from"./p-6a61efad.js";var o=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const n=class{constructor(t){e(this,t),this.label=null,this.name=null,this.checkboxLabel=null,this.required=!1,this.checked=!1,this.value="unchecked",this.checkedValue=null,this.uncheckedValue=null}render(){const e=this.name?this.name:this.checkboxLabel?this.checkboxLabel.replace(/\s/g,"").toLowerCase():"";return t("div",{class:"form-group"},t("psk-label",{label:this.label}),t("div",{class:"form-group"},t("div",{class:"form-check form-check-inline"},t("input",{type:"checkbox",class:"form-check-input",id:e,name:e,required:this.required,checked:this.checked,onChange:this.__handleCheckbox.bind(this),value:this.value}),t("psk-label",{for:e,label:this.checkboxLabel}))))}__handleCheckbox(e){this.checked=e.target.checked,this.value=e.target.checked?this.checkedValue?this.checkedValue:"checked":this.uncheckedValue?this.uncheckedValue:"unchecked",this.changeModel?this.changeModel.call(this,"value",this.value):console.warn("[psk-input] Function named -=changeModel=- is not defined!")}};o([s()],n.prototype,"render",null),o([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),o([i({description:["Specifies the name of a psk-checkbox component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),o([i({description:['By filling out this property, the component will display near the checkbox, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"checkboxLabel",void 0),o([i({description:["Specifies that the psk-checkbox must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0),o([i({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the psk-checkbox, in case you need it to be checked."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"checked",void 0),o([i({description:["Specifies the value of a psk-checkbox component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),o([i({description:["Specifies the value that will be assigned to the component when it is checked."],isMandatory:!1,propertyType:"string"})],n.prototype,"checkedValue",void 0),o([i({description:["Specifies the value that will be assigned to the component when it is unchecked."],isMandatory:!1,propertyType:"string"})],n.prototype,"uncheckedValue",void 0);export{n as psk_checkbox};