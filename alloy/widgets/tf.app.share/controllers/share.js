var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.share/'+s:
s.substring(0,index)+'/tf.app.share/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){





























































function align(views){
0<views.length&&itemWidth&&(
views[0].left=(columns-views.length)*(itemWidth/2));

}
function clearRows(){
$.row1.removeAllChildren(),
$.row2.removeAllChildren();
}
function alignRows(){
align($.row1.children),
align($.row2.children);
}
function getRow(idx){return(
3>=idx?
$.row1:
6>=idx?
$.row2:void 0);

}var Widget=new(require('/alloy/widget'))('tf.app.share');if(this.__widgetId='tf.app.share',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='share',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.share=Ti.UI.createView({backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,opacity:0,id:'share',layout:'vertical'}),$.__views.share&&$.addTopLevelView($.__views.share),$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Progress Sharing',showClose:!0,showBack:!1,id:'titlebar',__parentSymbol:$.__views.share}),$.__views.titlebar.setParent($.__views.share),_close?$.__views.titlebar.on('close',_close):__defers['$.__views.titlebar!close!_close']=!0,$.__views.description=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:5,left:24,right:24,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'Below are people who have been setup to review your progress...',id:'description'}),$.__views.share.add($.__views.description),$.__views.row1=Ti.UI.createView({top:24,left:16,right:16,height:Ti.UI.SIZE,id:'row1',layout:'horizontal'}),$.__views.share.add($.__views.row1),$.__views.row2=Ti.UI.createView({top:24,left:16,right:16,height:Ti.UI.SIZE,id:'row2',layout:'horizontal'}),$.__views.share.add($.__views.row2),$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:16,right:16,bottom:16,type:'primary',text:'Update',enabled:!1,id:'button',__parentSymbol:$.__views.share}),$.__views.button.setParent($.__views.share),_update?$.__views.button.on('click',_update):__defers['$.__views.button!click!_update']=!0,$.__views.add=Alloy.createWidget('tf.app.share','add',{id:'add',__parentSymbol:__parentSymbol}),$.__views.add&&$.addTopLevelView($.__views.add),_close?$.__views.add.on('close',_close):__defers['$.__views.add!close!_close']=!0,_back?$.__views.add.on('back',_back):__defers['$.__views.add!back!_back']=!0,exports.destroy=function(){},_.extend($,$.__views),'use strict';var guardians,itemWidth,Q=require('vendor/q'),updates=[],columns=3,

_setGuardians=function(gs){
guardians=gs,
clearRows();
var count=0;









if(_.forEach(guardians,function(guardian){if(count++,6>=count){var widget=Widget.createController('guardian',{width:'33.25%',guardian:guardian});widget.onClick(_modify);var row=getRow(count);row&&row.add(widget.getView())}}),6>count){

count++;
var widget=Widget.createController('guardian',{width:'33.25%'});
widget.onClick(_add);
var row=getRow(count);
row&&row.add(widget.getView());
}
alignRows();
},

_modify=function(guardian){var
found=!1,
filtered=_.filter(updates,function(g){

return g.id===guardian.id&&(found=!0),g.id!==guardian.id;
});
found?


updates=filtered:updates.push(guardian),

$.button.enable(0<updates.length);
},
_reset=function(){
updates=[],
_setGuardians(guardians);
},
_add=function(){

_hide(_reset),
$.add.show();
},
_update=function(){
0<updates.length&&
_showSpinner().then(_performUpdates).then(function(){
_hide(function(){
$.trigger('close',{
type:'sharing-updated',
source:$});

});
}).catch(_errorUpdating).finally(_hideSpinner);

},
_performUpdates=function(){
var promises=[];



return _.forEach(updates,function(guardian){promises.push(require('services/guardians_service').updateSharing(guardian.id,guardian.sharing))}),Q.all(promises);
},
_errorUpdating=function(error){
LOGGER.debug('ERROR Updating Guardian:'+error);
var dialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:'There was a problem updating your progress sharing, please try again.',
title:'Uh Oh!'});

dialog.addEventListener('click',function(e){
_hide(function(){
$.trigger('close',{
type:'error-updating',
source:$});

});
}),
dialog.show();
},

_back=function(evt){
'cancel'===evt.type?
_show():
'progress-sent'===evt.type&&
$.trigger('close',{
type:evt.type,
source:$});


},
_close=function(evt){
_hide(),
$.trigger('close',{
type:evt.type,
source:$});

},

_showSpinner=function(){
return Q.fcall(function(){



return DISPATCHER.trigger('tf:progress.start',{message:'Updating...'}),!0;
});
},
_hideSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
},
_show=function(){
updates=[],
$.button.enable(!1),
$.share.animate({
opacity:1,
duration:200});

},
_hide=function(callback){
$.share.animate({
opacity:0,
duration:200},
function(){
callback&&callback();
});
};

$.row1.addEventListener('postlayout',function pl(){
$.row1.removeEventListener('postlayout',pl),
itemWidth=$.row1.size.width/columns;
}),

exports.show=_show,
exports.hide=_hide,
exports.setGuardians=_setGuardians,





__defers['$.__views.titlebar!close!_close']&&$.__views.titlebar.on('close',_close),__defers['$.__views.button!click!_update']&&$.__views.button.on('click',_update),__defers['$.__views.add!close!_close']&&$.__views.add.on('close',_close),__defers['$.__views.add!back!_back']&&$.__views.add.on('back',_back),



_.extend($,exports);
}

module.exports=Controller;