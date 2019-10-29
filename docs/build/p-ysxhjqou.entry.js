import{r as e,c as t,h as i}from"./p-8c2a778d.js";import"./p-c902de24.js";import"./p-8d115afa.js";import{T as s}from"./p-bc92c46a.js";import{T as n}from"./p-3d98d3fe.js";var o=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const a=class{constructor(i){e(this,i),this.needWizardConfiguration=t(this,"needWizardConfiguration",7),this.changeStep=t(this,"changeStep",7),this.finishWizard=t(this,"finishWizard",7)}componentWillLoad(){this.needWizardConfiguration.emit(e=>{this.wizardSteps=e,this.activeStep=this.wizardSteps.length>0?this.wizardSteps[0]:null})}handleStepChange(e){this.changeStep.emit({stepIndexToDisplay:e,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:(e,t)=>{e?console.error(e):(this.activeStep=t.activeStep,this.wizardSteps=t.wizardSteps)}})}handleFinish(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:(e,t)=>{e?console.error(e):console.log(t)}})}handleStepPropertiesChange(e){this.activeStep.stepProperties=e}computeStepDesign(e,t,i){let s="";return 0===e?s+="first ":e===i-1&&(s+="last "),e<t?s+="done":e===t&&(s+="current"),s}render(){const e=this.activeStep.stepComponent;return[i("div",{class:"page-content"},i("div",{class:"wizard-content"},i("div",{class:"wizard-form"},i("form",{class:"form-register",action:"#",method:"post",onSubmit:e=>{e.preventDefault(),e.stopImmediatePropagation()}},i("div",{id:"form-total",class:"wizard clearfix"},i("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),i(e,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties}),i("div",{class:"actions clearfix"},i("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]}static get style(){return"\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-ExtraBold.ttf) format(\"truetype\");font-weight:800;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf) format(\"truetype\");font-weight:800;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-SemiBold.ttf) format(\"truetype\");font-weight:600;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf) format(\"truetype\");font-weight:600;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-LightItalic.ttf) format(\"truetype\");font-weight:300;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}.body{height:100%;width:100%}.page-content{width:100%;margin:0 auto;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.page-content,.wizard-content{display:-ms-flexbox;display:flex}.wizard-content{width:790px;border-radius:10px;font-family:Open Sans,sans-serif;position:relative;-webkit-box-shadow:0 5px 10px 0 rgba(0,0,0,.1);box-shadow:0 5px 10px 0 rgba(0,0,0,.1)}.wizard-content .wizard-form{width:100%}.form-register .vertical{display:block;width:100%;overflow:hidden;border-radius:10px}.form-register .content{float:right;width:530px;min-height:400px}.form-register .content h2{display:none}.form-register .content .inner{margin:35px 40px 25px;-webkit-box-shadow:0 3px 10px 0 rgba(0,0,0,.1);box-shadow:0 3px 10px 0 rgba(0,0,0,.1);border-radius:5px;padding:0 30px 25px;background-color:#fff;height:100%}.form-register .content .wizard-header{padding:9px 30px 11px;background:#33a7d7;border-top-left-radius:5px;border-top-right-radius:5px;margin:0 -30px 24px}.form-register .content .wizard-header h3{font-size:22px;color:#fff;margin:0}.inner .form-row{display:-ms-flexbox;display:flex;margin:0 -10px;position:relative}.inner .form-row .form-holder{width:50%;padding:0 10px;margin-bottom:19px;position:relative}.inner .form-row .form-holder.form-holder-1{width:65.3%}.inner .form-row .form-holder.form-holder-2{width:100%;position:relative}.inner .form-row .form-holder label{color:#666;font-size:16px;font-weight:400;display:block;padding-bottom:8px}.inner .form-row .form-holder input,.inner .form-row .form-holder select{width:100%;padding:12px 20px;border:1px solid #e5e5e5;-webkit-appearance:unset;-moz-appearance:unset;appearance:unset;font-family:Open Sans,sans-serif;font-weight:600;font-size:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px}input::-webkit-input-placeholder{color:#999;font-size:15px;font-weight:400}input::-moz-placeholder{color:#999;font-size:15px;font-weight:400}input::placeholder{color:#999;font-size:15px;font-weight:400}input:-ms-input-placeholder{color:#999;font-size:15px;font-weight:400}input::-ms-input-placeholder{color:#999;font-size:15px;font-weight:400}.inner .form-row .form-holder .content-inner{font-weight:400;color:#666;font-size:14px}.inner .form-row .form-holder .content-inner p{margin:0}.inner .form-row .form-holder .form-checkbox{position:relative;padding-top:55px}.inner .form-row .form-holder .form-checkbox p{margin-left:27px;color:#333;font-size:14px;font-weight:600}.inner .form-row .form-holder .form-checkbox input{position:absolute;opacity:0}.inner .form-row .form-holder .form-checkbox .checkmark{position:absolute;bottom:8%;left:0;height:18px;width:18px;border:1px solid #e5e5e5;border-radius:5px;cursor:pointer}.inner .form-row .form-holder .form-checkbox .checkmark:after{content:\"\";position:absolute;left:6px;top:2px;width:3px;height:8px;border:1px solid #33a7d7;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none}.inner .form-row .form-holder .form-checkbox input:checked~.checkmark:after{display:block}.actions{float:right;width:530px}.actions ul{list-style:none;padding:0 40px;margin-bottom:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.actions button{border:none;display:-ms-inline-flexbox;display:inline-flex;height:42px;width:120px;border-radius:3px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:#364cd2;cursor:pointer;font-size:16px;font-weight:400;color:#fff;text-decoration:none;padding:13px 19px}.actions button:hover{background:#28379e}\@media screen and (max-width:991px){.page-content .wizard-heading{margin-left:0;width:90%}.wizard-content{width:90%}.actions,.form-register .content{float:none;width:100%}}\@media screen and (max-width:575px){.inner .form-row{flex-direction:column;-o-flex-direction:column;-ms-flex-direction:column;-moz-flex-direction:column;-webkit-flex-direction:column;margin:0}.inner .form-row .form-holder{width:100%;padding:0}.form-register .steps{width:90%;float:none}}"}};o([s({description:"This property is the string that defines the psk-stepper render",isMandatory:!1,propertyType:"string"})],a.prototype,"componentRender",void 0),o([s({description:"This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like informations for the steps.",isMandatory:!1,propertyType:"array of WizardStep types (WizardStep[])",specialNote:"These informations are filled in and handled by the controller of the component, not by the component itself."})],a.prototype,"wizardSteps",void 0),o([n({eventName:"needWizardConfiguration",description:"This event is triggered when the component is loaded and if no configuration is given for the wizard.\n            In this case, the controller is responsible to send the configuration to the wizard.\n            This event comes with a single parameter, a callback function the sends the configuration to the component."})],a.prototype,"needWizardConfiguration",void 0),o([n({eventName:"changeStep",description:"This event is triggered when the buttons Next, Previous and the step names from the left side of the component are clicked.\n            This event comes with the following parameters:\n                stepIndexToDisplay - the number of the step to be displayed\n                wizardSteps - the list of the steps from the wizard\n                activeStep - the step that will be displayed\n                callback - a callback function that is called from the controller when the validation is done"})],a.prototype,"changeStep",void 0),o([n({eventName:"finishWizard",description:"This event is triggered when the buttons Finish is clicked.\n            This event comes with the following parameters:\n                wizardSteps - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere.\n                callback - a callback function that is called from the controller when the validation is done"})],a.prototype,"finishWizard",void 0);export{a as psk_wizard};