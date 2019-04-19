var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.dialog/'+s:
s.substring(0,index)+'/tf.app.dialog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.dialog');




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='deviceSyncing',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.deviceSync=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'deviceSync',layout:'vertical'}),

$.__views.deviceSync&&$.addTopLevelView($.__views.deviceSync),
$.__views.logoContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'logoContainer'}),

$.__views.deviceSync.add($.__views.logoContainer),
$.__views.background=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.LightBlue,opacity:.1,id:'background'}),

$.__views.logoContainer.add($.__views.background),
$.__views.__alloyId189=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.LightBlue,text:'0',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId189'}),

$.__views.logoContainer.add($.__views.__alloyId189),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:32,text:'Device syncing',id:'title'}),

$.__views.deviceSync.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#898989',top:5,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,opacity:.7,id:'description'}),

$.__views.deviceSync.add($.__views.description),
$.__views.buttons=Ti.UI.createView(
{top:32,left:32,right:32,id:'buttons',layout:'vertical'}),

$.__views.deviceSync.add($.__views.buttons),
$.__views.buttonMobile=Alloy.createWidget('tf.app.button','widget',{top:0,bottom:16,height:65,type:'tertiary',text:'Mobile',enabled:!0,iconColor:Alloy.Globals.Style.Color.LightBlue,icon:'tf-mobile',id:'buttonMobile',__parentSymbol:$.__views.buttons}),
$.__views.buttonMobile.setParent($.__views.buttons),
_mobile?$.__views.buttonMobile.on('click',_mobile):__defers['$.__views.buttonMobile!click!_mobile']=!0,$.__views.buttonFitbit=Alloy.createWidget('tf.app.button','widget',{top:0,bottom:16,height:65,type:'tertiary',text:'Fitbit',enabled:!0,iconColor:Alloy.Globals.Style.Color.LightBlue,icon:'tf-wearable',id:'buttonFitbit',__parentSymbol:$.__views.buttons}),
$.__views.buttonFitbit.setParent($.__views.buttons),
_fitbit?$.__views.buttonFitbit.on('click',_fitbit):__defers['$.__views.buttonFitbit!click!_fitbit']=!0,$.__views.buttonBoth=Alloy.createWidget('tf.app.button','widget',{top:0,height:65,type:'tertiary',text:'Both',enabled:!0,iconColor:Alloy.Globals.Style.Color.LightBlue,icon:'tf-mobile-plus-wearable',iconSize:45,id:'buttonBoth',__parentSymbol:$.__views.buttons}),
$.__views.buttonBoth.setParent($.__views.buttons),
_both?$.__views.buttonBoth.on('click',_both):__defers['$.__views.buttonBoth!click!_both']=!0,exports.destroy=function(){},




_.extend($,$.__views);var





mobile,fitbit,both,args=arguments[0]||{},cu=require('services/current_user_service').singleton(),

_init=function(){




function hideButton(btn){
$.deviceSync.remove(btn.getView());
}mobile=cu.get('recordActivity')&&!cu.get('forceFitbit')&&!0,fitbit=cu.get('enableFitbit'),both=mobile&&fitbit,
mobile||
hideButton($.buttonMobile),

fitbit||
hideButton($.buttonFitbit),

both||
hideButton($.buttonBoth),

$.logoContainer.top=Alloy.Globals.Style.Size.Height.pct50-2*$.background.height+$.title.top,
$.description.text='Please choose the device(s) you would like to use to track your exercise and activity';
},

_mobile=function(data){
require('tickerfit/tracking').enablePassiveTracking(!0),
!data.both&&require('tickerfit/tracking').isFitbitLinked()&&


require('tickerfit/tracking').unlinkFitbit(),

_done('mobile-syncing',data);
},


_fitbit=function(){
mobile&&


require('tickerfit/tracking').enablePassiveTracking(!1),

_done('fitbit-syncing');
},
_both=function(){
_mobile({both:!0});
},

_done=function(val,data){
_hide(function(){
$.trigger('close',{
type:val?val:'close',
data:data,
source:$});

});
},

_show=function(){

if(_init(),!(fitbit||mobile)){
LOGGER.info('Skipping device sync\n\n\n');var

doneWelcomeCallback=function(){
DISPATCHER.trigger('tf:welcome.done');
},
doneData={
callback:doneWelcomeCallback,
message:'You\u2019re all setup and ready to go!',
title:'All done!',
btnText:'Finish setup'};


$.trigger('close',{
type:'done',
data:doneData,
source:$});

}else
$.deviceSync.left=0,
$.deviceSync.animate({
opacity:1});


},

_hide=function(callback){
$.deviceSync.animate({
opacity:0},
function(){
$.deviceSync.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.buttonMobile!click!_mobile']&&$.__views.buttonMobile.on('click',_mobile),__defers['$.__views.buttonFitbit!click!_fitbit']&&$.__views.buttonFitbit.on('click',_fitbit),__defers['$.__views.buttonBoth!click!_both']&&$.__views.buttonBoth.on('click',_both),



_.extend($,exports);
}

module.exports=Controller;