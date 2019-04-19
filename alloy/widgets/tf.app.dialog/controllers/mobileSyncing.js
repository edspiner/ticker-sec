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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='mobileSyncing',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.mobile=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'mobile',layout:'vertical'}),

$.__views.mobile&&$.addTopLevelView($.__views.mobile),
$.__views.logoContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'logoContainer'}),

$.__views.mobile.add($.__views.logoContainer),
$.__views.background=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.LightBlue,opacity:.1,id:'background'}),

$.__views.logoContainer.add($.__views.background),
$.__views.__alloyId205=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.LightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'>',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId205'}),

$.__views.logoContainer.add($.__views.__alloyId205),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:32,id:'title'}),

$.__views.mobile.add($.__views.title),
$.__views.descriptionLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:16,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'descriptionLabel'}),

$.__views.mobile.add($.__views.descriptionLabel),
$.__views.instruction=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBlack,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:16,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'instruction'}),

$.__views.mobile.add($.__views.instruction),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:32,right:32,bottom:16,type:'primary',text:'Enable mobile syncing...',enabled:!0,id:'button',__parentSymbol:$.__views.mobile}),
$.__views.button.setParent($.__views.mobile),
_click?$.__views.button.on('click',_click):__defers['$.__views.button!click!_click']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

working=!1,
doneType='done',
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
$.title.text='Mobile syncing',

$.instruction.text=1?

'Please choose or sign in to your Google account on the following screen.':'Please "Turn All Categories On" and tap "Allow" on the following screen.',

$.descriptionLabel.text='We need your permission to enable access to the health and activity data collected by your phone.',
$.logoContainer.top=Alloy.Globals.Style.Size.Height.pct50-$.background.height-$.title.top-$.descriptionLabel.top;
},

_click=function(){
working||(
working=!0,

DISPATCHER.once('tf:tracking.started',_done),
DISPATCHER.trigger('tf:tracking.welcome.done'));

},

_done=function(){
working=!1,
_hide(function(){
$.trigger('close',{
type:doneType,
data:doneData,
source:$});

});
},

_show=function(data){
data&&data.both&&(
$.title.text='1 - Mobile syncing',
doneType='fitbit-syncing',
doneData=data),





null!=Ti.App.Properties.getString('FIT_REQUESTED',null)&&(
$.button.setText('Continue'),
$.instruction.visible=!1,
$.descriptionLabel.text='Mobile syncing is already enabled!'),

$.mobile.left=0,
$.mobile.animate({
opacity:1});

},

_hide=function(callback){
$.mobile.animate({
opacity:0},
function(){
$.mobile.left=Alloy.Globals.Style.Size.Width.pct99,
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