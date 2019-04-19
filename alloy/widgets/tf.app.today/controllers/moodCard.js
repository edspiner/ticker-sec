var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='moodCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.moodCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'moodCard'}),

$.__views.moodCard&&$.addTopLevelView($.__views.moodCard),
$.__views.innerCard=Ti.UI.createView(
{backgroundColor:'white',height:Ti.UI.SIZE,zIndex:1,id:'innerCard',layout:'vertical'}),

$.__views.moodCard.add($.__views.innerCard),
_postlayout?$.addListener($.__views.innerCard,'postlayout',_postlayout):__defers['$.__views.innerCard!postlayout!_postlayout']=!0,$.__views.__alloyId83=Ti.UI.createView(
{height:50,width:Ti.UI.FILL,id:'__alloyId83'}),

$.__views.innerCard.add($.__views.__alloyId83),
$.__views.question=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Mood.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,left:16,right:16,height:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'question'}),

$.__views.__alloyId83.add($.__views.question),
$.__views.__alloyId84=Ti.UI.createView(
{opacity:.6,bottom:0,height:1,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId84'}),

$.__views.__alloyId83.add($.__views.__alloyId84),
$.__views.choice=Alloy.createWidget('tf.app.mood','choice',{id:'choice',__parentSymbol:$.__views.innerCard}),
$.__views.choice.setParent($.__views.innerCard),
$.__views.underline=Ti.UI.createView(
{opacity:.6,bottom:0,height:1,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,visible:!1,id:'underline'}),

$.__views.innerCard.add($.__views.underline),
$.__views.review=Alloy.createWidget('tf.app.mood','review',{height:0,id:'review',__parentSymbol:$.__views.innerCard}),
$.__views.review.setParent($.__views.innerCard),
$.__views.working=Ti.UI.createView(
{top:0,backgroundColor:'#9fff',opacity:0,id:'working'}),

$.__views.moodCard.add($.__views.working),
$.__views.overlay=Ti.UI.createView(
{top:0,backgroundColor:'white',opacity:0,id:'overlay'}),

$.__views.moodCard.add($.__views.overlay),
$.__views.__alloyId85=Ti.UI.createView(
{layout:'vertical',id:'__alloyId85'}),

$.__views.overlay.add($.__views.__alloyId85),
$.__views.__alloyId86=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:30},color:Alloy.Globals.Style.Color.RedPink,text:'T',top:32,id:'__alloyId86'}),

$.__views.__alloyId85.add($.__views.__alloyId86),
$.__views.thanks=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Mood.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,left:32,right:32,height:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,top:8,id:'thanks'}),

$.__views.__alloyId85.add($.__views.thanks),
$.__views.dismiss=Ti.UI.createView(
{top:0,right:0,width:40,height:40,id:'dismiss'}),

$.__views.overlay.add($.__views.dismiss),
_dismiss?$.addListener($.__views.dismiss,'touchstart',_dismiss):__defers['$.__views.dismiss!touchstart!_dismiss']=!0,$.__views.__alloyId87=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:8},color:Alloy.Globals.Style.Color.Silver,text:'j',id:'__alloyId87'}),

$.__views.dismiss.add($.__views.__alloyId87),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},

cus=require('services/current_user_service'),
animateButton=require('utils/ui').animateClick,
gotHeight=!1,

_init=function(){
_update(),
$.choice.setOnClick(_recordChoice);
},

_postlayout=function(){
$.innerCard.removeEventListener('postlayout',_postlayout),
$.overlay.height=$.innerCard.rect.height-1,
$.working.height=$.innerCard.rect.height,
gotHeight=!0,
_update();
},

_dismiss=function(){
animateButton($.dismiss,$.dismiss.color,.8,function(){
$.overlay.animate({opacity:0,duration:150},function(){
$.overlay.zIndex=0;
}),
_update();
});
},

_showReview=function(show,updateData){
$.review.show(show),
updateData&&$.review.update(),
$.underline.visible=show;
},

_update=function(updateData){var


question,cu=cus.singleton(),toggles=cu.get('toggles'),

doneMoodToday=cu.get('lastMoodRecorded')===new Date().getDate();

question='challenge'===toggles.uxMode?'Hi '+cu.get('user').firstname+', how was work today?':

'How are you feeling '+(doneMoodToday?'now ':'today ')+cu.get('user').firstname+'?',

$.question.text=question;
var thanks='Thanks '+cu.get('user').firstname+', we\'ve logged how you\'re feeling';
$.thanks.text=thanks,
gotHeight&&
_showReview(doneMoodToday,updateData);

},

_recordChoice=function(rating){
$.working.zIndex=2,
$.overlay.zIndex=3,
$.working.animate({opacity:1,duration:150}),
require('services/metric_service').record([{type:'Mood',value1:rating.value,timestamp:new Date().getTime()}]).then(function(){
cus.save({
lastMoodRecorded:new Date().getDate()}),

$.overlay.animate({opacity:1,duration:150},function(){
$.working.opacity=0,
$.working.zIndex=0,
$.review.update();
}),
setTimeout(_dismiss,2e4);
}).catch(function(err){
$.working.zIndex=0,
$.working.opacity=0,
LOGGER.error('PROBLEM SAVING MOOD: '+JSON.stringify(err)),
Alloy.Globals.alert('There was a problem saving.\n\nPlease try again.','Uh Oh!');
}),
require('services/event_tracking_service').record('record-mood',{});
};

_init(),

exports.refresh=_update,

exports.cleanup=function(){
$.choice.cleanup&&$.choice.cleanup(),
$.review.cleanup&&$.review.cleanup();
},





__defers['$.__views.innerCard!postlayout!_postlayout']&&$.addListener($.__views.innerCard,'postlayout',_postlayout),__defers['$.__views.dismiss!touchstart!_dismiss']&&$.addListener($.__views.dismiss,'touchstart',_dismiss),



_.extend($,exports);
}

module.exports=Controller;