import{r as e,h as t}from"./p-a1b3783e.js";import{T as s}from"./p-d92f9c24.js";import{C as r}from"./p-2a22f87e.js";var i=function(e,t,s,r){var i,a=arguments.length,p=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(p=(a<3?i(p):a>3?i(t,s,p):i(t,s))||p);return a>3&&p&&Object.defineProperty(t,s,p),p};const a=class{constructor(t){e(this,t)}computeStepDesign(e,t,s){let r="";return 0===e?r+="first ":e===s&&(r+="last "),e<t?r+="done":e===t&&(r+="current"),r}render(){return t("div",{class:"steps clearfix"},t("ul",{role:"tablist"},this.wizardSteps.map(e=>t("li",{role:"tab",class:this.computeStepDesign(e.stepIndex,this.activeStep.stepIndex,this.wizardSteps.length-1)},t("div",{class:"button",onClick:t=>{t.preventDefault(),t.stopImmediatePropagation(),this.handleStepChange(e.stepIndex)}},t("span",{class:"current-info audible"}),t("div",{class:"title"},t("p",{class:"step-icon"},t("span",null,e.stepIndex+1)),t("div",{class:"step-text"},t("span",{class:"step-inner"},e.stepName))))))))}};i([r(),s({description:"This property holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like informations for the steps.(optional).",isMandatory:!1,propertyType:"array fo WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],a.prototype,"wizardSteps",void 0),i([s({description:"The WizardStep created by psk-wizard and passed on by psk-stepper.",isMandatory:!0,propertyType:"WizardStep"})],a.prototype,"activeStep",void 0),i([s({description:"This property is a function that modifies the way the step change is interpreted.",isMandatory:!0,propertyType:"Function"})],a.prototype,"handleStepChange",void 0);export{a as psk_stepper_renderer};