import{r as e,h as s,g as t}from"./p-bd5842d7.js";const o=class{constructor(s){e(this,s)}componentWillLoad(){this.digestSeedHex=this.digestMessage(this.csbSeed)}componentDidLoad(){let e=this.element.querySelector("iframe");require("boot-host").getBootScriptLoader().createPowerCord(this.digestSeedHex,this.csbSeed,e),setTimeout(()=>{this.sendMessageToIframe(this.digestSeedHex,"Hi there "+this.digestSeedHex)},1e3)}sendMessageToIframe(e,s){(s=>{$$.interactions.startSwarmAs(e,"echo","say",s).onReturn(function(e,s){e?console.log(e):(console.log("Iframe received: ",s),setTimeout(()=>{},1e4))})})(s)}digestMessage(e){return require("pskcrypto").pskHash(e,"hex")}render(){return s("iframe",{sandbox:"allow-scripts allow-same-origin allow-downloads-without-user-activation allow-forms",width:"300px",height:"300px",src:"/SSApps/app/"+this.digestSeedHex+"/index.html?"+this.digestSeedHex})}get element(){return t(this)}};export{o as psk_ss_app};