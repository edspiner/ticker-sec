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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='fitbitSyncing',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.fitbit=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'fitbit',layout:'vertical'}),

$.__views.fitbit&&$.addTopLevelView($.__views.fitbit),
$.__views.icon=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'icon'}),

$.__views.fitbit.add($.__views.icon),
$.__views.background=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.LightBlue,opacity:.1,id:'background'}),

$.__views.icon.add($.__views.background),
$.__views.__alloyId196=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.LightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'=',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId196'}),

$.__views.icon.add($.__views.__alloyId196),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:32,id:'title'}),

$.__views.fitbit.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:16,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'description'}),

$.__views.fitbit.add($.__views.description),
$.__views.instruction=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBlack,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:16,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'instruction'}),

$.__views.fitbit.add($.__views.instruction),
$.__views.note=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:16,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'note'}),

$.__views.fitbit.add($.__views.note),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:32,right:32,bottom:16,type:'primary',text:'Login to Fitbit...',enabled:!0,id:'button',__parentSymbol:$.__views.fitbit}),
$.__views.button.setParent($.__views.fitbit),
_click?$.__views.button.on('click',_click):__defers['$.__views.button!click!_click']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
cus=require('services/current_user_service'),
alreadyDone=!1,

doneWelcomeCallback=function(){
DISPATCHER.trigger('tf:welcome.done');
},
doneData={
callback:doneWelcomeCallback,
message:'You\u2019re all setup and ready to go!',
title:'All done!',
btnText:'Finish setup'},


_init=function(){
$.title.text='FitBit syncing',
$.description.text='We need you to login to your Fitbit account to enable us to access the data your Fitbit has collected.',
$.instruction.text='Enter your account details and select \u201CAllow all\u201D on the Fitbit screen.';
var appName=IS_HACKA?'Hacka':'TickerFit';
$.note.text='We\u2019ll bring you back to '+appName+' when you\u2019re done.',
$.icon.top=Alloy.Globals.Style.Size.Height.pct50-2*$.background.height+2*$.title.top;
},

_click=function(){
alreadyDone?
_done():

_fitbit();

},

_fitbit=function(){

require('tickerfit/tracking').linkFitbit(),



setTimeout(function(){
_done();
},400);
},

_done=function(){
_hide(function(){
$.trigger('close',{
type:'done',
data:doneData,
source:$});

});
},

_show=function(data){
data&&data.both&&(
$.title.text='2 - FitBit syncing'),

require('tickerfit/tracking').isFitbitLinked()&&(
alreadyDone=!0,
$.button.setText('Continue'),
$.button.getView().top=-18,
$.icon.top+=28,
$.instruction.visible=!1,
$.note.visible=!1,
$.description.text='FitBit syncing is already enabled!'),

$.fitbit.left=0,
$.fitbit.animate({
opacity:1});

},
_hide=function(callback){
$.fitbit.animate({
opacity:0},
function(){
$.fitbit.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.button!click!_click']&&$.__views.button.on('click',_click),



_.extend($,exports);
}

module.exports=Controller;