var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitySummary/'+s:
s.substring(0,index)+'/tf.app.activitySummary/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activitySummary');




if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activityReview',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.activityReview=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'activityReview',layout:'vertical'}),

$.__views.activityReview&&$.addTopLevelView($.__views.activityReview),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:15},color:Alloy.Globals.Style.Color.TwilightBlue,id:'title'}),

$.__views.activityReview.add($.__views.title),
$.__views.targetView=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:4,id:'targetView',layout:'horizontal'}),

$.__views.activityReview.add($.__views.targetView),
$.__views.__alloyId232=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:11},color:Alloy.Globals.Style.Color.TwilightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'Your target:',id:'__alloyId232'}),

$.__views.targetView.add($.__views.__alloyId232),
$.__views.target=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:11},color:Alloy.Globals.Style.Color.BattleshipGrey,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:4,id:'target'}),

$.__views.targetView.add($.__views.target),
$.__views.tick=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:13},color:Alloy.Globals.Style.Color.KiwiGreen,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'T',left:6,id:'tick'}),

$.__views.targetView.add($.__views.tick),
$.__views.dailyReviews=Ti.UI.createView(
{height:Ti.UI.SIZE,top:12,bottom:16,width:Alloy.Globals.Style.Widget.Activity.Review.DailyReviewsWidth,id:'dailyReviews',layout:'horizontal'}),

$.__views.activityReview.add($.__views.dailyReviews),
$.__views.daysAgo6=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo6',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo6.setParent($.__views.dailyReviews),
$.__views.daysAgo5=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo5',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo5.setParent($.__views.dailyReviews),
$.__views.daysAgo4=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo4',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo4.setParent($.__views.dailyReviews),
$.__views.daysAgo3=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo3',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo3.setParent($.__views.dailyReviews),
$.__views.daysAgo2=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo2',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo2.setParent($.__views.dailyReviews),
$.__views.daysAgo1=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo1',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo1.setParent($.__views.dailyReviews),
$.__views.daysAgo0=Alloy.createWidget('tf.app.activitySummary','dailyReview',{width:'14.15%',id:'daysAgo0',__parentSymbol:$.__views.dailyReviews}),
$.__views.daysAgo0.setParent($.__views.dailyReviews),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

WTools=require('WidgetTools'),
cus=require('services/current_user_service');

WTools.setTiProps(args,$.activityReview);var


















rxActivity,

















currentDay,




data,




currentType,hideAnimation=Ti.UI.createAnimation({opacity:0,duration:100}),showAnimation=Ti.UI.createAnimation({opacity:1,duration:100}),_init=function(){DISPATCHER.on('tf:app.synchronisedScrollable.scrollend',_handleScroll),DISPATCHER.on('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab),args.rxActivity&&_setActivity(args.rxActivity)},_setActivity=function(activity){rxActivity=activity},_setText=function(label,text){label.text!==text&&(label.text?label.animate(hideAnimation,function(){label.text=text,label.animate(showAnimation)}):label.text=text)},_handleScroll=function(e){currentDay=e.id},_setData=function(update){data=update,_updateData()},
_handleShowTab=function(e){
currentType=e.id,
_setText($.title,'7 DAY '+currentType.toUpperCase()+' GOAL REVIEW'),
_updateData();
},

_updateData=function(){
if(currentDay&&currentType&&data){var
typeData=data[currentType],
today=typeData[typeData.length-1];
$.target.text=today.daysPerWeek+' filled '+(IS_HACKA?'stars':'hearts');




for(var daysAgo=6,complete=0,icon=IS_HACKA?'tf-star':'tf-heart',i=typeData.length-7;i<typeData.length;i++)
0<=i&&(
complete+=100<=typeData[i].progress?1:0,
$['daysAgo'+daysAgo--].setData(typeData[i],icon,currentType));


var completed=complete>=today.daysPerWeek;
DISPATCHER.trigger('tf:app.activitySummary.goal',{type:currentType,completed:completed}),
$.updateViews({
"#tick":{
left:completed?6:0,
width:completed?Ti.UI.SIZE:0}});


}
};

_init(),

exports.setActivity=_setActivity,
exports.setData=_setData,

exports.cleanup=function(){
DISPATCHER.off('tf:app.synchronisedScrollable.scrollend',_handleScroll),
DISPATCHER.off('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab);
for(var i=0;7>i;i++)
$['daysAgo'+i].cleanup();

},




































_.extend($,exports);
}

module.exports=Controller;