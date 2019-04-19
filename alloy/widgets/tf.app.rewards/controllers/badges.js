var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.rewards/'+s:
s.substring(0,index)+'/tf.app.rewards/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){var _Mathfloor=





















































Math.floor,Widget=new(require('/alloy/widget'))('tf.app.rewards');if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='badges',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.badges=Ti.UI.createScrollView({height:Ti.UI.FILL,width:Ti.UI.FILL,disableBounce:!0,scrollType:'vertical',id:'badges'}),$.__views.badges&&$.addTopLevelView($.__views.badges),$.__views.badgeList=Ti.UI.createView({top:24,left:16,height:Ti.UI.SIZE,width:Ti.UI.FILL,bottom:40,id:'badgeList'}),$.__views.badges.add($.__views.badgeList),exports.destroy=function(){},_.extend($,$.__views),'use strict';var current,badgeWidth,badgeHeight,args=arguments[0]||{},cus=require('services/current_user_service'),du=require('utils/date'),iconStyles=require('/styles/iconFormats'),margin=16,cols=2,_init=function(){DISPATCHER.on('tf:achievements.badgeSummary.updated',_update),375<Alloy.Globals.Style.Size.Width.pct100&&(cols=_Mathfloor(Alloy.Globals.Style.Size.Width.pct100/(375/2))),

badgeWidth=(Alloy.Globals.Style.Size.Width.pct100-(cols+1)*margin)/cols,
badgeHeight=1.16*badgeWidth;
},

_affixBadges=function(badges){
$.badgeList.removeAllChildren();
var
v,i=0;
_.forEach(badges,function(s){
v=s.getView(),
v.left=i%cols*(badgeWidth+margin),
v.top=_Mathfloor(i/cols)*(badgeHeight+margin),
$.badgeList.add(v),
i++;
});
},

_getIconClass=function(badge){return(






_.contains(['DAILY_RX_STEPS_MET','WEEKLY_RX_STEPS_MET'],badge.badgeType)?
iconStyles.getIconClass('Walking'):
_.contains(['DAILY_RX_CONTINUOUS_EXERCISE_MET','WEEKLY_RX_CONTINUOUS_EXERCISE_MET'],badge.badgeType)?
iconStyles.getIconClass('Running'):
_.contains(['DAILY_RX_CARDIO_MET','WEEKLY_RX_CARDIO_MET'],badge.badgeType)?
iconStyles.getIconClass('Cardio'):
'DAILY_USER'===badge.badgeType?
'icon-wave':
'PIONEER'===badge.badgeType?
'tf-poke':
'PATIENT_ACTIVITY'===badge.behaviourCategory?
'tf-activity-badge':
'PATIENT_EDUCATION'===badge.behaviourCategory?
'tf-education-badge':
'PATIENT_INTERACTION'===badge.behaviourCategory?
'tf-interaction-badge':
'PATIENT_ADHERENCE'===badge.behaviourCategory?
'tf-adherance-badge':

'tf-default-badge');

},
_update=function(badgeSummary){var
cu=cus.singleton(),
lastBadgeSummaryTimestamp=cu.get('lastBadgeSummaryTimestamp')||0;
cus.save({lastBadgeSummaryTimestamp:new Date().getTime()});var
opts,
badges=[],
i=0,
sorted=_.chain(badgeSummary).sortBy(function(b){

return b.badgeName;
}).sortBy(function(b){

return b.precedence;
}).value();
_.forEach(sorted,function(bs){
opts={
index:i++,
width:badgeWidth,
height:badgeHeight,
iconClass:_getIconClass(bs),
updated:bs.lastAchievedTime>lastBadgeSummaryTimestamp,
title:bs.badgeName,
highlight:bs.timesAchieved?'x'+bs.timesAchieved:'',
subHighlight:bs.lastAchievedTime?'Last awarded '+du.getLongDayString(new Date(bs.lastAchievedTime)):'Never awarded',
onClick:function(){
_tapBadge(bs);
}},

badges.push(Widget.createController('badge',opts));
}),
_affixBadges(badges);
},
_tapBadge=function(badge){
var message='You have not earned this badge yet!';
0<badge.timesAchieved&&(
message='You have been awarded this badge '+badge.timesAchieved+' time'+(1<badge.timesAchieved?'s':'')+', earning a total of '+badge.pointsAchieved+' points!'),

DISPATCHER.trigger('tf:app.slideWindow.open',{
content:{
widget:'tf.app.slideWindow',
controller:'info',
args:{title:badge.badgeName,
message:badge.description+'\n\n'+message}}});



};

_init(),

exports.cleanup=function(){
DISPATCHER.off('tf:achievements.badgeSummary.updated',_update);
},









_.extend($,exports);
}

module.exports=Controller;