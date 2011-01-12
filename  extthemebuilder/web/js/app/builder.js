Ext.namespace("Ext.ux.MyApp");var bUrl="http://extbuilder.dynalias.com";var resources=[{url:bUrl+"/springapp/js/app/Module.js",restype:"js"},{url:bUrl+"/springapp/js/ext/colorpicker/colorpicker.js",restype:"js"},{url:bUrl+"/springapp/js/ext/colorpicker/colorpickerfield.js",restype:"js"},{url:bUrl+"/springapp/js/ext/multiselect/SuperBoxSelect.js",restype:"js"},{url:bUrl+"/springapp/js/ext/image_chooser/ImageChooserField.js",restype:"js"},{url:bUrl+"/springapp/examples/ux/Spinner.js",restype:"js"},{url:bUrl+"/springapp/examples/ux/SpinnerField.js",restype:"js"},{url:bUrl+"/springapp/js/ext/colorpicker/colorpicker.css",restype:"css"},{url:bUrl+"/springapp/js/ext/multiselect/superboxselect.css",restype:"css"},{url:bUrl+"/springapp/css/cesium.css",restype:"css"},{url:bUrl+"/springapp/js/ext/image_chooser/ImageChooserField.css",restype:"css"},{url:bUrl+"/springapp/examples/ux/css/Spinner.css",restype:"css"},{url:bUrl+"/springapp/examples/examples.css",restype:"css"},{url:bUrl+"/springapp/js/ext/widgets/Window-min.js",restype:"js"}];var cookieProvider=Ext.util.Cookies?Ext.util.Cookies:new Ext.state.CookieProvider({});var CSS=Ext.util.CSS;CSS.sSS=CSS.swapStyleSheet;var JSON=Ext.util.JSON;var invStr=function(_165){var res;try{res=eval(_165);}catch(e){if(console){console.error(e);}Ext.Msg.alert("Error","Error message "+e.name+": "+e.message);}return res;};var ccs=function(prms,_168,_169,shWt){if(shWt){var wMsg=Ext.Msg.wait("Theme creation!","Please, wait.");}var _16c=function(_16d){if(_16d.showWait){_16d.waitMsg.hide();}Ext.Msg.alert("Error","Processing theme failed");};Ext.Ajax.request({url:bUrl+"/springapp/processSchema.htm",params:prms,method:"POST",timeout:60000,scriptTag:true,saveHist:_168,disableCaching:true,callbackName:"cbFn",success:_169,failure:_16c,waitMsg:wMsg,showWait:shWt});};var cbFn=function(a,b,c){};var scsFn=function(rsp,opt){var bl="blue";var gr="gray";var thId=opt.params.tId;var ver=opt.params.version;var _177=thId&&(thId==1);var _178=((!ver)||ver.indexOf(".")<0)?"33":((ver=="3.0")?"":ver.replace(".",""));var _179=(_177?"_"+gr:"")+_178;var _17a=_177?gr:bl;var link=(Ext.isIE&&!Ext.isIE7&&!Ext.isIE8?bUrl+"/springapp/getResource.htm?resourcePath="+"/WEB-INF/resources"+_179+"/css/xtheme-"+_17a+"_ie6.css"+"&rnd=":bUrl+"/springapp/getResource.htm?resourcePath="+"/WEB-INF/resources"+_179+"/css/xtheme-"+_17a+".css"+"&rnd=")+Math.random();CSS.sSS("theme",link);if(opt.saveHist){var tkn=JSON.encode(opt.params);hist.addToken(tkn);}if(opt.showWait){opt.waitMsg.hide();}};var postRequest=function(url,_17e){var temp=document.createElement("form");temp.action=url;temp.method="POST";temp.style.display="none";for(var x in _17e){var opt=document.createElement("textarea");opt.name=x;opt.value=_17e[x];temp.appendChild(opt);}document.body.appendChild(temp);temp.submit();document.body.removeChild(temp);};var loadResInvoke=function(name,type,_184,_185,mthd,_187){var _188=document.getElementById(name);if(!_188){var ref;if(type=="js"){var _18a;if(name){ref=document.createElement("script");ref.setAttribute("TYPE","text/javascript");ref.setAttribute("CHARSET","UTF-8");ref.setAttribute("id",name);ref.setAttribute("src",name);document.getElementsByTagName("head")[0].appendChild(ref);if(_184){_18a=invStr(_184);if(_18a&&_187&&_18a.getWindow){_18a.getWindow().setIconClass(_187);}}}else{if(_184){_18a=invStr(_184);if(_18a&&_187&&_18a.getWindow){_18a.getWindow().setIconClass(_187);}}}}else{if(type=="css"){ref=document.createElement("link");ref.setAttribute("rel","stylesheet");ref.setAttribute("type","text/css");ref.setAttribute("href",name);ref.setAttribute("id",name);if(typeof ref!="undefined"){document.getElementsByTagName("head")[0].appendChild(ref);}}}}};var handleRes=function(res){var type=res.restype;var _18d=res.url;var _18e=res.iconCls;var _18f=res.params;var mthd=res.method;if("js"==type){var _191=res.entityClassName;var capt=res.text;var _193=(_191||capt);var _194=res.winType;var _195=_18d?(_18d+(_193?("?entityClassName="+_191+"&caption="+capt):"")):null;loadResInvoke(_195,"js",(_194+_191)?"new Ext.ux.MyApp."+_194+_191.replace(/\./g,"_")+"Window();":false,_18f||{},mthd?mthd:"GET",_18e);}else{if("css"==type){loadResInvoke(_18d,type,null,_18f||{},mthd?mthd:"GET");}}};var processRes=function(_196,res){var _198=JSON.decode(_196);var _199=_198[res];handleRes(_199);res++;return res;};var res=0;do{res=processRes(JSON.encode(resources),res);}while(res<resources.length);var hist={stack:new Array(0),currIndex:-1,getToken:function(){var ci=this.currIndex;var st=this.stack;return ci<0||ci>=st.length?null:st[ci];},addToken:function(_19c){var st=this.stack;if(_19c!=st[st.length-1]){st.push(_19c);this.currIndex=st.length-1;}},isLast:function(){return this.stack.length-1==this.currIndex;},isFirst:function(){return this.currIndex<=0;},back:function(){if(this.stack.length==0){this.currIndex=-1;}else{if(this.currIndex!=0){this.currIndex--;}}},forward:function(){if(this.currIndex<this.stack.length-1){this.currIndex++;}},first:function(){if(this.stack.length==0){this.currIndex=-1;}else{if(this.currIndex!=0){this.currIndex=0;}}},last:function(){if(this.currIndex<this.stack.length-1){this.currIndex=this.stack.length-1;}}};Ext.lib.Ajax.isCrossDomain=function(u){var _19f=/(?:(\w*:)\/\/)?([\w\.]*(?::\d*)?)/.exec(u);if(!_19f[1]){return false;}return (_19f[1]!=location.protocol)||(_19f[2]!=location.host);};Ext.override(Ext.data.Connection,{request:function(o){if(this.fireEvent("beforerequest",this,o)!==false){var p=o.params;if(typeof p=="function"){p=p.call(o.scope||window,o);}if(typeof p=="object"){p=Ext.urlEncode(p);}if(this.extraParams){var _1a2=Ext.urlEncode(this.extraParams);p=p?(p+"&"+_1a2):_1a2;}var url=o.url||this.url;if(typeof url=="function"){url=url.call(o.scope||window,o);}if(o.form){var form=Ext.getDom(o.form);url=url||form.action;var _1a5=form.getAttribute("enctype");if(o.isUpload||(_1a5&&_1a5.toLowerCase()=="multipart/form-data")){return this.doFormUpload(o,p,url);}var f=Ext.lib.Ajax.serializeForm(form);p=p?(p+"&"+f):f;}var hs=o.headers;if(this.defaultHeaders){hs=Ext.apply(hs||{},this.defaultHeaders);if(!o.headers){o.headers=hs;}}var cb={success:this.handleResponse,failure:this.handleFailure,scope:this,argument:{options:o},timeout:this.timeout};var _1a9=o.method||this.method||(p?"POST":"GET");if(_1a9=="GET"&&(this.disableCaching&&o.disableCaching!==false)||o.disableCaching===true){url+=(url.indexOf("?")!=-1?"&":"?")+"_dc="+(new Date().getTime());}if(typeof o.autoAbort=="boolean"){if(o.autoAbort){this.abort();}}else{if(this.autoAbort!==false){this.abort();}}if((_1a9=="GET"&&p)||o.xmlData||o.jsonData){url+=(url.indexOf("?")!=-1?"&":"?")+p;p="";}if(o.scriptTag||this.scriptTag||Ext.lib.Ajax.isCrossDomain(url)){this.transId=this.scriptRequest(_1a9,url,cb,p,o);}else{this.transId=Ext.lib.Ajax.request(_1a9,url,cb,p,o);}return this.transId;}else{Ext.callback(o.callback,o.scope,[o,null,null]);return null;}},scriptRequest:function(_1aa,url,cb,data,_1ae){var _1af=++Ext.data.ScriptTagProxy.TRANS_ID;var _1b0={id:_1af,cb:_1ae.callbackName||"stcCallback"+_1af,scriptId:"stcScript"+_1af,options:_1ae};url+=(url.indexOf("?")!=-1?"&":"?")+data+String.format((""==data?"":"&")+"{0}={1}",_1ae.callbackParam||this.callbackParam||"callback",_1b0.cb);var conn=this;window[_1b0.cb]=function(o){conn.handleScriptResponse(o,_1b0);};_1b0.timeoutId=this.handleScriptFailure.defer(cb.timeout,this,[_1b0]);var _1b3=document.createElement("script");_1b3.setAttribute("src",url);_1b3.setAttribute("type","text/javascript");_1b3.setAttribute("id",_1b0.scriptId);document.getElementsByTagName("head")[0].appendChild(_1b3);return _1b0;},handleScriptResponse:function(o,_1b5){this.transId=false;this.destroyScriptTrans(_1b5,true);var _1b6=_1b5.options;var doc;if(typeof o=="string"){if(window.ActiveXObject){doc=new ActiveXObject("Microsoft.XMLDOM");doc.async="false";doc.loadXML(o);}else{doc=new DOMParser().parseFromString(o,"text/xml");}}var _1b8={responseObject:o,responseText:(typeof o=="object")?JSON.encode(o):String(o),responseXML:doc,argument:_1b6.argument};this.fireEvent("requestcomplete",this,_1b8,_1b6);Ext.callback(_1b6.success,_1b6.scope,[_1b8,_1b6]);Ext.callback(_1b6.callback,_1b6.scope,[_1b6,true,_1b8]);},handleScriptFailure:function(_1b9){this.transId=false;this.destroyScriptTrans(_1b9,false);var _1ba=_1b9.options;var _1bb={argument:_1ba.argument,status:500,statusText:"Server failed to respond",responseText:""};this.fireEvent("requestexception",this,_1bb,_1ba,{status:-1,statusText:"communication failure"});Ext.callback(_1ba.failure,_1ba.scope,[_1bb,_1ba]);Ext.callback(_1ba.callback,_1ba.scope,[_1ba,false,_1bb]);},destroyScriptTrans:function(_1bc,_1bd){document.getElementsByTagName("head")[0].removeChild(document.getElementById(_1bc.scriptId));clearTimeout(_1bc.timeoutId);if(_1bd){window[_1bc.cb]=undefined;try{delete window[_1bc.cb];}catch(e){}}else{window[_1bc.cb]=function(){window[_1bc.cb]=undefined;try{delete window[_1bc.cb];}catch(e){}};}}});var JSt=Ext.data.JsonStore;var Btn=Ext.Button;var FS=Ext.form.FieldSet;var moduleConfig={init:function(){var _1be="theme-builder";var _1bf=this.createWindow(_1be);_1bf.show();var _1c0=cookieProvider.get("theme");if(_1c0&&(_1c0!="")){var _1c1=JSON.decode(_1c0);if(_1c1&&!_1c1.newColor){_1bf.setForm(_1c1);}}},createWindow:function(_1c2){var _1c3;if((!_1c3)||(_1c3==undefined)){var _1c4;var _1c5;var _1c6;var _1c7;var _1c8;var _1c9;var _1ca;var _1cb;var _1cc;var _1cd;var _1ce;var _1cf;var _1d0;var _1d1;var _1d2;var _1d3;var _1d4;var _1d5;var _1d6;var _1d7;var _1d8;var _1d9;var _1da;var _1db;var _1dc=function(){_1c4.focus(true,true);};var _1dd=function(_1de,sh){if(sh){var _1e0=JSON.encode(_1de.params);hist.addToken(_1e0);}_1c5();};_1c5=function(){if(hist.isLast()){_1c6.disable();_1c7.disable();}else{_1c6.enable();_1c7.enable();}if(hist.isFirst()){_1c8.disable();_1c9.disable();}else{_1c8.enable();_1c9.enable();}};var _1e1=function(th,_1e3){_1ca.disable();this.originalValue=String(_1e3);};var _1e4=function(resp,_1e6){scsFn(resp,_1e6);if(_1e6.saveHist){_1c5();}_1ca.enable();var _1e7=JSON.encode(_1e6.params);cookieProvider.set("theme",_1e7);};var _1e8=function(_1e9){var _1ea=_1e9.nT;var _1eb=_1e9.tN;var ver=_1e9.version;var thId=_1e9.tId;var _1ee=_1e9.fHF;var _1ef=_1e9.wHF;var _1f0=_1e9.sHF;var _1f1=_1e9.fF;var _1f2=_1e9.wF;var _1f3=_1e9.sF;var _1f4=_1e9.nHC;_1c4.setValue(_1e9.nSN);_1c4.originalValue=String(_1c4.getValue());_1cb.setValue(_1e9.nC);_1cb.originalValue=String(_1cb.getValue());_1cc.setValue(_1e9.nFC);_1cc.originalValue=String(_1cc.getValue());_1cd.setValue(_1e9.nHFC);_1cd.originalValue=String(_1cd.getValue());_1ce.setValue(_1e9.nBdC);_1ce.originalValue=String(_1ce.getValue());_1cf.setValue(_1e9.nBC);_1cf.originalValue=String(_1cf.getValue());_1d0.setValue(_1ea||0==_1ea?_1ea:"255");_1d0.originalValue=String(_1d0.getValue());_1d1.setValue(_1eb?_1eb:"default");_1d1.originalValue=String(_1d1.getValue());_1d2.setValue(ver&&(ver.indexOf(".")==1)?ver:"3.3");_1d2.originalValue=String(_1d2.getValue());_1d3.setValue(thId?thId:0);_1d3.originalValue=String(_1d3.getValue());_1d4.setValue(_1ee?_1ee:"tahoma,arial,verdana,sans-serif");_1d4.originalValue=String(_1d4.getValue());_1d5.setValue(_1ef?_1ef:"bold");_1d5.originalValue=String(_1d5.getValue());_1d6.setValue(_1f0?_1f0:"11");_1d6.originalValue=String(_1d6.getValue());_1d7.setValue(_1f1?_1f1:"arial,tahoma,helvetica,sans-serif");_1d7.originalValue=String(_1d7.getValue());_1d8.setValue(_1f2?_1f2:"normal");_1d8.originalValue=String(_1d8.getValue());_1d9.setValue(_1f3?_1f3:"11");_1d9.originalValue=String(_1d9.getValue());_1da.setValue(_1f4?_1f4:(thId&&0!=thId?"#D7D7D7":"#CDDEF3"));_1da.originalValue=String(_1da.getValue());};var _1f5=function(){return {tId:_1d3.getValue(),nSN:_1c4.getValue(),nC:_1cb.getValue(),nHC:_1da.getValue(),nHFC:_1cd.getValue(),fHF:_1d4.getValue(),wHF:_1d5.getValue(),sHF:_1d6.getValue(),fF:_1d7.getValue(),wF:_1d8.getValue(),sF:_1d9.getValue(),nBdC:_1ce.getValue(),nT:_1d0.getValue(),tN:_1d1.getValue(),version:_1d2.getValue(),nFC:_1cc.getValue(),nBC:_1cf.getValue()};};var _1f6=function(){if(_1db.getForm().isValid()){var _1f7=_1f5();ccs(_1f7,true,_1e4,true);}else{Ext.Msg.alert("Warning","Form is not valid");}};var _1f8=function(){var frm=_1db.getForm();frm.reset();var thId=_1d3.getValue();if(0==thId){_1cb.setValue("#DFE8F6");_1da.setValue("#CDDEF3");_1cd.setValue("#15428B");_1ce.setValue("#99BBE8");CSS.sSS("theme",bUrl+"/springapp/js/ext/resources/css/xtheme-blue.css?rnd="+Math.random());}else{if(1==thId){_1cb.setValue("#F1F1F1");_1da.setValue("#D7D7D7");_1cd.setValue("#222222");_1ce.setValue("#D0D0D0");CSS.sSS("theme",bUrl+"/springapp/js/ext/resources/css/xtheme-gray.css?rnd="+Math.random());}}_1d0.setValue(255);_1d1.setValue("default");_1d2.setValue("3.3");_1cf.setValue("#FFFFFF");_1cc.setValue("#000000");_1d4.setValue("tahoma,arial,verdana,sans-serif");_1d5.setValue("bold");_1d6.setValue(11);_1d7.setValue("arial,tahoma,helvetica,sans-serif");_1d8.setValue("normal");_1d9.setValue(11);cookieProvider.set("theme","");_1ca.disable();var _1fb=_1f5();_1dd({params:_1fb},true);};var _1fc=function(th){if(_1db.getForm().isValid()){var _1fe={tId:_1d3.getValue(),nSN:_1c4.getValue(),version:_1d2.getValue()};postRequest(bUrl+"/springapp/downloadSchema.htm?rnd="+Math.random(),_1fe);}else{Ext.Msg.show({title:"Warning",icon:Ext.MessageBox.WARNING,buttons:Ext.Msg.OK,fn:_1dc,msg:"Enter theme name, please."});}};var _1ff=function(th){if(this.isDirty()){_1ca.disable();this.originalValue=String(this.getValue());}};var Cb=Ext.extend(Ext.form.ComboBox,{constructor:function(cnfg){cnfg=Ext.apply({listeners:{change:_1e1},editable:false,allowBlank:false,typeAhead:true,mode:"local",triggerAction:"all",width:70,labelStyle:"font-weight:bold;"},cnfg);Cb.superclass.constructor.call(this,cnfg);}});_1d3=new Cb({store:new JSt({id:0,fields:["thId","thName"],data:[{thId:0,thName:"Blue"},{thId:1,thName:"Gray"}]}),valueField:"thId",displayField:"thName",title:"Template",value:0});var Cpf=Ext.extend(Ext.ux.form.ColorPickerField,{constructor:function(cnf){cnf=Ext.apply({width:300,listeners:{blur:_1ff},allowBlank:false},cnf);Cpf.superclass.constructor.call(this,cnf);}});_1cb=new Cpf({fieldLabel:"Base color",name:"color",value:"#DFE8F6"});_1da=new Cpf({fieldLabel:"Header color",name:"colorHeader",value:"#CDDEF3"});_1cf=new Cpf({fieldLabel:"Background color",name:"colorBg",value:"#FFFFFF"});_1cc=new Cpf({fieldLabel:"Color",name:"colorFont",value:"#000000"});_1cd=new Cpf({fieldLabel:"Color",name:"colorHeaderFont",value:"#15428B"});var _205=[["tahoma","tahoma"],["arial","arial"],["verdana","verdana"],["sans-serif","sans-serif"],["helvetica","helvetica"]];_1d4=new Ext.ux.form.SuperBoxSelect({editable:false,mode:"local",store:_205,fieldLabel:"Family",name:"familyHeaderFont",value:"tahoma,arial,verdana,sans-serif"});_1d7=new Ext.ux.form.SuperBoxSelect({editable:false,mode:"local",store:_205,fieldLabel:"Family",name:"familyFont",value:"arial,tahoma,helvetica,sans-serif"});var _206=["weightId","weightName"];var _207=[{weightId:"normal",weightName:"normal"},{weightId:"bold",weightName:"bold"}];_1d5=new Cb({store:new JSt({id:0,fields:_206,data:_207}),valueField:"weightId",displayField:"weightName",fieldLabel:"Weight",value:"bold"});_1d8=new Cb({store:new JSt({id:0,fields:_206,data:_207}),valueField:"weightId",displayField:"weightName",fieldLabel:"Weight",value:"normal"});_1d6=new Ext.ux.form.SpinnerField({inputType:"text",allowBlank:false,allowDecimals:false,allowNegative:false,fieldLabel:"Size",value:11,labelStyle:"font-weight:bold;",name:"sizeHeaderFont",onBlur:_1ff,listeners:{"spin":_1ff},width:70,maxValue:20,minValue:5});_1d9=new Ext.ux.form.SpinnerField({inputType:"text",allowBlank:false,allowDecimals:false,allowNegative:false,fieldLabel:"Size",value:11,labelStyle:"font-weight:bold;",name:"sizeFont",onBlur:_1ff,listeners:{"spin":_1ff},width:70,maxValue:20,minValue:5});var _208=new FS({title:"Header Font",layout:"column",height:"auto",labelWidth:45,defaults:{border:false,height:"auto",xtype:"fieldset"},items:[{columnWidth:0.75,defaults:{width:330,listeners:{blur:_1ff},allowBlank:false,labelStyle:"font-weight:bold;"},items:[_1cd,_1d4]},{columnWidth:0.25,items:[_1d5,_1d6]}]});var _209=new FS({title:"Font",layout:"column",height:"auto",labelWidth:45,defaults:{border:false,height:"auto",xtype:"fieldset"},items:[{columnWidth:0.75,defaults:{width:330,listeners:{blur:_1ff},allowBlank:false,labelStyle:"font-weight:bold;"},items:[_1cc,_1d7]},{columnWidth:0.25,items:[_1d8,_1d9]}]});_1ce=new Cpf({fieldLabel:"Border color",name:"colorBorder",value:"#99BBE8"});_1c4=new Ext.form.TextField({width:300,allowBlank:false,fieldLabel:"Theme name",name:"name",value:"yourtheme"});_1ca=new Btn({text:"Download Theme",tooltip:"Download Theme",iconCls:"ext-ux-downloadbtn",disabled:true,handler:_1fc});var _20a=function(){hist.back();_1c5();var _20b=JSON.decode(hist.getToken());_1e8(_20b);ccs(_20b,false,_1e4,true);};var _20c=function(){hist.forward();_1c5();var _20d=JSON.decode(hist.getToken());_1e8(_20d);ccs(_20d,false,_1e4,true);};var _20e=function(){hist.first();_1c5();var _20f=JSON.decode(hist.getToken());_1e8(_20f);ccs(_20f,false,_1e4,true);};var _210=function(){hist.last();_1c5();var _211=JSON.decode(hist.getToken());_1e8(_211);ccs(_211,false,_1e4,true);};var _212=new Btn({text:"Reset",tooltip:"Reset form",disabled:false,iconCls:"ext-ux-button-reset",handler:_1f8});_1c8=new Btn({tooltip:"Prev theme",iconCls:"ext-ux-prevbtn",disabled:hist.isFirst(),handler:_20a});_1c6=new Btn({tooltip:"Next theme",iconCls:"ext-ux-nextbtn",disabled:hist.isLast(),handler:_20c});_1c9=new Btn({tooltip:"First theme",iconCls:"ext-ux-firstbtn",disabled:hist.isFirst(),handler:_20e});_1c7=new Btn({tooltip:"Last theme",iconCls:"ext-ux-lastbtn",disabled:hist.isLast(),handler:_210});var _213=[{text:"Apply",tooltip:"Apply changes",iconCls:"ext-ux-applybtn",handler:_1f6},{xtype:"tbseparator"},_1c9,_1c8,_1c6,_1c7,{xtype:"tbspacer",width:10},_212,{xtype:"tbseparator"},_1d3,{xtype:"tbseparator"},_1ca,{xtype:"tbfill"},{text:"Close",tooltip:"Close",iconCls:"ext-ux-uploaddialog-resetbtn",handler:function(){_1c3.close();}}];var _214=new Ext.Toolbar({items:_213});var _215=Ext.slider?new Ext.slider.Tip():new Ext.Tip({init:Ext.emptyFn});_1d0=new Ext.Slider({name:"transpSlider",fieldLabel:"Window transparency",width:300,value:255,increment:5,minValue:0,maxValue:255,isFormField:true,listeners:{changecomplete:_1e1},plugins:_215,reset:Ext.Slider.reset||function(){this.setValue(this.originalValue);},validate:function(){return true;}});_1d1=new Ext.ux.form.ImagePickerField({defaultUrl:bUrl+"/springapp/images/toolsets/",defaultValue:"default",fieldLabel:"Toolset",url:bUrl+"/springapp/getToolsets.htm",labelStyle:"font-weight:bold;",value:"default",width:102,height:85,viewWidth:395,viewHeight:320,style:{marginBottom:"3px"},listeners:{change:_1e1}});_1d2=new Cb({store:new JSt({id:0,fields:["verId","verName"],data:[{verId:"3.3",verName:"3.3"},{verId:"3.2",verName:"3.2"},{verId:"3.1",verName:"3.1"},{verId:"3.0",verName:"3.0"},{verId:"2.3",verName:"2.3"}]}),valueField:"verId",displayField:"verName",fieldLabel:"ExtJS version",value:"3.3",labelWidth:50});var _216=new FS({layout:"column",border:false,height:"auto",labelWidth:170,defaults:{height:"auto",xtype:"fieldset",style:{marginBottom:"0px",marginTop:"0px"},border:false},items:[{items:[_1d1],columnWidth:0.6},{items:[_1d2],labelWidth:120,columnWidth:0.4}]});_1db=new Ext.form.FormPanel({frame:true,xtype:"form",monitorValid:true,margin:"10px 10px 5px 10px",region:"center",buttonAlign:"center",border:false,bodyBorder:false,defaults:{style:{marginBottom:"7px"},labelStyle:"font-weight:bold;margin-left:10px;"},labelWidth:180,items:[_1c4,_1cb,_1da,_1cf,_1ce,_208,_209,_1d0,_216]});_1c3=new Ext.Window({layout:"fit",height:590,width:590,resizable:false,maximizable:false,tbar:_214,title:"Theme builder",constrainHeader:true,panel:_1db,setForm:_1e8,downloadButton:_1ca,resetBtn:_212,items:[_1db]});}return _1c3;}};var Module=Ext.ux.MyApp.Module;if(Module){Ext.ux.MyApp.simpleWindow=Ext.extend(Module,moduleConfig);new Ext.ux.MyApp.simpleWindow();}else{setTimeout("var Module = Ext.ux.MyApp.Module;if (Module){ Ext.ux.MyApp.simpleWindow=Ext.extend(Module, moduleConfig);new Ext.ux.MyApp.simpleWindow();}",1000);}