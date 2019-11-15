System.register(["./p-0b2166d8.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js","./p-64de2c1c.system.js","./p-f4e56eb5.system.js"],(function(e){"use strict";var t,n,r,s;return{setters:[function(e){t=e.r;n=e.h},function(){},function(){},function(e){r=e.T},function(e){s=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(p=e[o])i=(s<3?p(i):s>3?p(t,n,i):p(t,n))||i;return s>3&&i&&Object.defineProperty(t,n,i),i};var p=e("psk_stepper_renderer",function(){function e(e){t(this,e)}e.prototype.computeStepDesign=function(e,t,n){var r="";if(e===0){r+="first "}else if(e===n){r+="last "}if(e<t){r+="done"}else if(e===t){r+="current"}return r};e.prototype.render=function(){var e=this;return n("div",{class:"steps clearfix"},n("ul",{role:"tablist"},this.wizardSteps.map((function(t){return n("li",{role:"tab",class:e.computeStepDesign(t.stepIndex,e.activeStep.stepIndex,e.wizardSteps.length-1)},n("div",{class:"button",onClick:function(n){n.preventDefault();n.stopImmediatePropagation();e.handleStepChange(t.stepIndex)}},n("span",{class:"current-info audible"}),n("div",{class:"title"},n("p",{class:"step-icon"},n("span",null,t.stepIndex+1)),n("div",{class:"step-text"},n("span",{class:"step-inner"},t.stepName)))))}))))};return e}());i([s(),r({description:"This property holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like informations for the steps.(optional).",isMandatory:false,propertyType:"array fo WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],p.prototype,"wizardSteps",void 0);i([r({description:"The WizardStep created by psk-wizard and passed on by psk-stepper.",isMandatory:true,propertyType:"WizardStep"})],p.prototype,"activeStep",void 0);i([r({description:"This property is a function that modifies the way the step change is interpreted.",isMandatory:true,propertyType:"Function"})],p.prototype,"handleStepChange",void 0)}}}));