"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1941],{1941:(C,m,s)=>{s.r(m),s.d(m,{TerminalPageModule:()=>b});var u=s(177),d=s(4341),l=s(4488),p=s(8986),e=s(4438);const g=["inputArea"],f=["output"],h=["terminal"],P=["inputPrompt"],v=[{path:"",component:(()=>{var i;class r{constructor(n,t){this.ngZone=n,this.cdr=t,this.currentFontSize=14}ngOnInit(){this.postMessage("user> Enter help for all the commands"),this.inputArea.nativeElement.focus()}postMessage(n){const t=document.createElement("div");t.innerHTML=n.replace(/\n/g,"<br>"),t.classList.add("line"),this.output.nativeElement.appendChild(t),this.scrollToBottom()}postFlickeringMessage(n){const t=document.createElement("div");t.innerHTML=n.replace(/\n/g,"<br>"),t.classList.add("line","flicker"),setTimeout(()=>{this.output.nativeElement.appendChild(t),this.scrollToBottom(),this.cdr.detectChanges()},10)}handleCommand(n){switch(n.toLowerCase()){case"help":this.postMessage("user> \n- get weather\n- get news");break;case"flicker":this.postFlickeringMessage("This text is flickering")}}scrollToBottom(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.terminal.nativeElement.scrollTop=this.terminal.nativeElement.scrollHeight,this.cdr.detectChanges()},0)})}increaseTextSize(){this.currentFontSize=Math.min(24,this.currentFontSize+1),this.updateFontSize()}decreaseTextSize(){this.currentFontSize=Math.max(10,this.currentFontSize-1),this.updateFontSize()}updateFontSize(){this.output.nativeElement.style.fontSize=`${this.currentFontSize}px`,this.inputArea.nativeElement.style.fontSize=`${this.currentFontSize}px`,this.inputPrompt.nativeElement.style.fontSize=`${this.currentFontSize}px`}handleKeyDown(n){if(console.log(n),"Enter"===n.key){n.preventDefault();const t=this.inputArea.nativeElement.textContent.trim();this.postMessage("user> "+t),this.handleCommand(t),this.inputArea.nativeElement.textContent="",this.scrollToBottom()}}}return(i=r).\u0275fac=function(n){return new(n||i)(e.rXU(e.SKi),e.rXU(e.gRc))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-terminal"]],viewQuery:function(n,t){if(1&n&&(e.GBs(g,7),e.GBs(f,7),e.GBs(h,7),e.GBs(P,7)),2&n){let o;e.mGM(o=e.lsd())&&(t.inputArea=o.first),e.mGM(o=e.lsd())&&(t.output=o.first),e.mGM(o=e.lsd())&&(t.terminal=o.first),e.mGM(o=e.lsd())&&(t.inputPrompt=o.first)}},hostBindings:function(n,t){1&n&&e.bIt("keydown",function(c){return t.handleKeyDown(c)},!1,e.EBC)},decls:25,vars:2,consts:[["terminal",""],["output",""],["inputPrompt",""],["inputArea",""],[3,"translucent"],[3,"fullscreen"],["id","terminal"],["src","../../assets/terminal/scanlines.png","id","scan",1,"noselect"],["src","../../assets/terminal/bezel.png","id","bezel",1,"noselect"],["id","content"],["src","../../assets/terminal/strebla_innovation_fallout_font_logo.png","alt","fallout-font","border","0"],["id","output"],["id","inputLine"],["id","inputPrompt"],["id","inputArea","contenteditable","true"],[2,"position","absolute","bottom","80px","right","60px","display","flex","flex-direction","column","align-items","center"],[1,"transparent-button",3,"click"],["name","add",1,"green-icon"],["name","remove",1,"green-icon"]],template:function(n,t){if(1&n){const o=e.RV6();e.nrm(0,"ion-header",4),e.j41(1,"ion-content",5)(2,"div",6,0),e.nrm(4,"img",7)(5,"img",8),e.j41(6,"div",9),e.nrm(7,"img",10),e.j41(8,"h1"),e.EFF(9,"Terminal:"),e.k0s(),e.j41(10,"h3"),e.EFF(11,"Version: 1.0.0.0"),e.k0s(),e.nrm(12,"div",11,1),e.j41(14,"div",12)(15,"span",13,2),e.EFF(17,"user> "),e.k0s(),e.nrm(18,"div",14,3),e.k0s()(),e.j41(20,"div",15)(21,"div",16),e.bIt("click",function(){return e.eBV(o),e.Njj(t.increaseTextSize())}),e.nrm(22,"ion-icon",17),e.k0s(),e.j41(23,"div",16),e.bIt("click",function(){return e.eBV(o),e.Njj(t.decreaseTextSize())}),e.nrm(24,"ion-icon",18),e.k0s()()()()}2&n&&(e.Y8G("translucent",!0),e.R7$(),e.Y8G("fullscreen",!0))},dependencies:[l.W9,l.eU,l.iq],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0;height:100%;background-color:#000;color:#0f0;font-family:Courier New,Courier,monospace}#terminal[_ngcontent-%COMP%], #terminal_content[_ngcontent-%COMP%]{padding:20px;height:100vh;overflow-y:auto;position:relative;width:100vw;background-color:green}#inputLine[_ngcontent-%COMP%]{display:flex;align-items:center}#inputArea[_ngcontent-%COMP%]{flex:1;min-width:0;color:#adff2f;background:transparent;border:none;outline:none;font-family:Courier New,Courier,monospace;white-space:pre-wrap;caret-color:#adff2f;text-shadow:1px 1px 2px rgb(150,167,124),0 0 1em rgb(150,167,124),0 0 .2em rgb(150,167,124);font-family:VT323,monospace;font-size:2vw;z-index:2}#inputPrompt[_ngcontent-%COMP%], .line[_ngcontent-%COMP%]{white-space:pre-wrap}#content[_ngcontent-%COMP%]{position:absolute;top:7%;left:5%;right:5%;bottom:10%;font-family:VT323,monospace;color:#adff2f;font-size:2vw;text-shadow:1px 1px 2px rgb(150,167,124),0 0 1em rgb(150,167,124),0 0 .2em rgb(150,167,124);overflow-y:auto;z-index:2}#scan[_ngcontent-%COMP%], #bezel[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}#scan[_ngcontent-%COMP%]{opacity:80%;object-fit:cover}@keyframes _ngcontent-%COMP%_blinker{50%{opacity:0}}.flicker[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker 1s linear infinite}.line.flicker[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker 1s linear infinite!important}.line[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker 1s linear infinite}  .flicker{animation:_ngcontent-%COMP%_blinker 1s linear infinite}ion-button[_ngcontent-%COMP%]{--background: transparent !important;--background-activated: transparent !important;--background-focused: transparent !important;--background-hover: transparent !important;--border-color: transparent !important;--ripple-color: transparent !important;--box-shadow: none !important;--outline: none !important;box-shadow:none!important;border:none!important;margin:0!important;padding:0!important}.green-icon[_ngcontent-%COMP%]{color:#9acd32;font-size:24px;pointer-events:none}"]}),r})()}];let M=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.iI.forChild(v),p.iI]}),r})(),b=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[u.MD,d.YN,l.bv,M]}),r})()}}]);