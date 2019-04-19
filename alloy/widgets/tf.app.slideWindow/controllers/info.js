var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.slideWindow/'+s:
s.substring(0,index)+'/tf.app.slideWindow/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.slideWindow');




if(this.__widgetId='tf.app.slideWindow',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='info',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.info=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'info',layout:'vertical'}),

$.__views.info&&$.addTopLevelView($.__views.info),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,height:64,left:24,right:24,width:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title'}),

$.__views.info.add($.__views.title),
$.__views.message=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,top:4,left:24,right:24,width:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'message'}),

$.__views.info.add($.__views.message),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{type:'secondary',text:'Take me back',top:32,left:24,bottom:32,right:24,id:'button',__parentSymbol:$.__views.info}),
$.__views.button.setParent($.__views.info),
_dismiss?$.__views.button.on('click',_dismiss):__defers['$.__views.button!click!_dismiss']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
cus=require('services/current_user_service'),

_init=function(){
$.updateViews({
"#title":{
text:args.title},

"#message":{
text:args.message}});


},

_dismiss=function(){
DISPATCHER.trigger('tf:app.slideWindow.close');
};

_init(),

exports.cleanup=function(){
LOGGER.error('IN Info widget cleanup!');
},





__defers['$.__views.button!click!_dismiss']&&$.__views.button.on('click',_dismiss),



_.extend($,exports);
}

module.exports=Controller;