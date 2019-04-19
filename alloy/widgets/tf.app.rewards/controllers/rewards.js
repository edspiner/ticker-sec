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

function Controller(){var _Mathround=




















































































































































































Math.round,Widget=new(require('/alloy/widget'))('tf.app.rewards');if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='rewards',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.rewards=Ti.UI.createView({layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,apiName:'Ti.UI.View',classes:['container'],id:'rewards'}),$.__views.rewards&&$.addTopLevelView($.__views.rewards),$.__views.top=Ti.UI.createView({height:160,width:Ti.UI.FILL,backgroundColor:'white',apiName:'Ti.UI.View',id:'top',classes:[]}),$.__views.rewards.add($.__views.top),$.__views.backgroundImage=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)({height:240,apiName:'Ti.UI.View',id:'backgroundImage',image:'/images/rewards-bg.svg',classes:[]}),$.__views.top.add($.__views.backgroundImage),$.__views.points=Ti.UI.createView({width:'90%',apiName:'Ti.UI.View',id:'points',classes:[]}),$.__views.top.add($.__views.points),_clickPoints?$.addListener($.__views.points,'click',_clickPoints):__defers['$.__views.points!click!_clickPoints']=!0,$.__views.__alloyId262=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',layout:'vertical',classes:['view-width-height-fit'],id:'__alloyId262'}),$.__views.points.add($.__views.__alloyId262),$.__views.__alloyId263=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:12},color:Alloy.Globals.Style.Color.TwilightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'CURRENT POINTS',apiName:'Ti.UI.Label',classes:['label','twilight-blue'],id:'__alloyId263'}),$.__views.__alloyId262.add($.__views.__alloyId263),$.__views.currentPointsBubble=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:8,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,borderRadius:16,apiName:'Ti.UI.View',id:'currentPointsBubble',classes:['view-width-height-fit']}),$.__views.__alloyId262.add($.__views.currentPointsBubble),$.__views.currentPts=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:55},color:'#fff',left:24,right:24,top:4,bottom:8,height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'currentPts',classes:['points','white']}),$.__views.currentPointsBubble.add($.__views.currentPts),$.__views.lifetimePts=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:12},color:Alloy.Globals.Style.Color.DarkSkyBlue,top:8,height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'lifetimePts',classes:['small-points','dark-sky-blue']}),$.__views.__alloyId262.add($.__views.lifetimePts),$.__views.badgesTab=Ti.UI.createView({layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!1,apiName:'Ti.UI.View',id:'badgesTab',classes:['tab-view'],label:'Badges'}),$.__views.badges=Alloy.createWidget('tf.app.rewards','badges',{apiName:'Alloy.Require',id:'badges',classes:['badges'],__parentSymbol:$.__views.badgesTab}),$.__views.badges.setParent($.__views.badgesTab),$.__views.rewardsTab=Ti.UI.createView({layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,apiName:'Ti.UI.View',id:'rewardsTab',classes:['tab-view'],label:'Rewards'}),$.__views.action=Ti.UI.createView({apiName:'Ti.UI.View',id:'action',classes:[]}),$.__views.rewardsTab.add($.__views.action),$.__views.shareCard=Ti.UI.createView({backgroundColor:'white',left:16,right:16,width:Ti.UI.FILL,height:0,apiName:'Ti.UI.View',id:'shareCard',layout:'vertical',classes:['card']}),$.__views.action.add($.__views.shareCard),$.__views.__alloyId264=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:32,right:32,top:32,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'Setup progress sharing',apiName:'Ti.UI.Label',classes:['card-title','twilight-blue'],id:'__alloyId264'}),$.__views.shareCard.add($.__views.__alloyId264),$.__views.__alloyId265=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,left:32,right:32,top:16,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'You need to share your progress to start receiving rewards.',apiName:'Ti.UI.Label',classes:['card-message','battleship-grey'],id:'__alloyId265'}),$.__views.shareCard.add($.__views.__alloyId265),$.__views.share=Alloy.createWidget('tf.app.button','widget',{type:'secondary',text:'Share Progress',enabled:!0,left:32,right:32,top:24,bottom:32,apiName:'Alloy.Require',id:'share',classes:[],__parentSymbol:$.__views.shareCard}),$.__views.share.setParent($.__views.shareCard),_share?$.__views.share.on('click',_share):__defers['$.__views.share!click!_share']=!0,$.__views.nudgeCard=Ti.UI.createView({backgroundColor:'white',left:16,right:16,width:Ti.UI.FILL,height:0,apiName:'Ti.UI.View',id:'nudgeCard',layout:'vertical',classes:['card']}),$.__views.action.add($.__views.nudgeCard),$.__views.__alloyId266=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:32,right:32,top:32,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'No rewards available',apiName:'Ti.UI.Label',classes:['card-title','twilight-blue'],id:'__alloyId266'}),$.__views.nudgeCard.add($.__views.__alloyId266),$.__views.__alloyId267=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,left:32,right:32,top:16,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'No one you\'ve shared your progress with has any current rewards created for you. Send them a nudge below to ask them to set some up!',apiName:'Ti.UI.Label',classes:['card-message','battleship-grey'],id:'__alloyId267'}),$.__views.nudgeCard.add($.__views.__alloyId267),$.__views.nudge=Alloy.createWidget('tf.app.button','widget',{type:'secondary',text:'Nudge',enabled:!0,left:32,right:32,top:24,bottom:32,apiName:'Alloy.Require',id:'nudge',classes:[],__parentSymbol:$.__views.nudgeCard}),$.__views.nudge.setParent($.__views.nudgeCard),_nudge?$.__views.nudge.on('click',_nudge):__defers['$.__views.nudge!click!_nudge']=!0,$.__views.rewardsList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:24,padbottom:40,rowType:{widget:'tf.app.rewards',controller:'reward_cell'},apiName:'Alloy.Require',id:'rewardsList',classes:['rewards-list'],__parentSymbol:$.__views.rewardsTab}),$.__views.rewardsList.setParent($.__views.rewardsTab),$.__views.milestonesTab=Ti.UI.createView({layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,apiName:'Ti.UI.View',id:'milestonesTab',classes:['tab-view'],label:'Milestones'}),$.__views.milestoneList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:24,padbottom:40,rowType:{widget:'tf.app.rewards',controller:'milestone_cell'},apiName:'Alloy.Require',id:'milestoneList',classes:['milestone-list'],__parentSymbol:$.__views.milestonesTab}),$.__views.milestoneList.setParent($.__views.milestonesTab),$.__views.historyTab=Ti.UI.createView({layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!1,apiName:'Ti.UI.View',id:'historyTab',classes:['tab-view'],label:'History'}),$.__views.historyList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:24,padbottom:40,rowType:{widget:'tf.app.rewards',controller:'history_cell'},apiName:'Alloy.Require',id:'historyList',classes:['history-list'],__parentSymbol:$.__views.historyTab}),$.__views.historyList.setParent($.__views.historyTab),$.__views.rewardsTabGroup=Alloy.createWidget('tf.app.tabGroup','widget',{style:'bar',apiName:'Alloy.Require',id:'rewardsTabGroup',classes:[],children:[$.__views.badgesTab,$.__views.rewardsTab,$.__views.milestonesTab,$.__views.historyTab],__parentSymbol:$.__views.rewards}),$.__views.rewardsTabGroup.setParent($.__views.rewards),exports.destroy=function(){},_.extend($,$.__views),$.TAG='REWARDS';var currentTab,sessionstart,enabledGuardians,Q=require('vendor/q'),navigation=Alloy.Globals.Nav.Rewards,cus=require('services/current_user_service'),moment=require('alloy/moment'),animateButton=require('utils/ui').animateClick,args=arguments[0]||{},updating=!1,nu=require('/utils/number'),doneFirst=!1,_showSpinner=function(){return Q.fcall(function(){return DISPATCHER.trigger('tf:progress.start',{message:'Loading...'}),!0})},_hideSpinner=function(){DISPATCHER.trigger('tf:progress.stop')},_updateRewards=function(){_showSpinner().then(require('services/rewards_service').getRewards).then(setRewards).then(_updateCurrentTab).finally(_hideSpinner)},_updateBadges=function(){return require('services/rewards_service').getBadgeSummary()},_updateHistory=function(){var startDateString=moment(new Date).startOf('month').subtract(2,'months').format('YYYY-MM-DD');return require('services/rewards_service').getAchievements(void 0,startDateString).then(require('services/rewards_service').getMonthlyAchievementSummary).then(function(monthlySummaries){var reverseOrder=_.sortBy(monthlySummaries,function(o){return-o.date.getTime()});$.historyList.setData(reverseOrder)})},_updateCurrentTab=function(){return doneFirst?'badgesTab'===currentTab.id?_updateBadges():'historyTab'===currentTab.id?_updateHistory():void 0:void 0},_handleShowTab=function(e){currentTab=e,_updateCurrentTab()},trackSessionStart=function(){require('services/event_tracking_service').record('start-view-rewards',{}),sessionstart=new Date},trackSessionEnd=function(){sessionstart&&require('services/event_tracking_service').record('end-view-rewards',{duration:_Mathround((new Date().getTime()-sessionstart.getTime())/1e3)});


},
onNav=function(callback){
navigation.addEventListener('nav.transitionstart',function nav(){
navigation.removeEventListener('nav.transitionstart',nav),
callback();
});
},
init=function(){
trackSessionStart(),
args.rewards?
setRewards(args.rewards):

onNav(_updateRewards),

'BADGES'===args.tab?
_.defer(function(){
DISPATCHER.trigger('tf:app.tabGroup.rewardsTabGroup.button.click',{id:'badgesTab'});
}):
'REWARDS'===args.tab&&
_.defer(function(){
DISPATCHER.trigger('tf:app.tabGroup.rewardsTabGroup.button.click',{id:'rewardsTab'});
}),


DISPATCHER.on('tf:points.updated',_updateRewards),
DISPATCHER.on('tf:rewards.claim',_handleClaim),
DISPATCHER.on('tf:app.tabGroup.rewardsTabGroup.button.click',_handleShowTab);
},

setRewards=function(rewards){var
points=cus.singleton().get('points'),
balance=points.creditTotal-points.debitTotal,
lifetime=points.creditTotal,

sorted=_.sortBy(rewards,function(r){
return r.amount;
});
_.forEach(sorted,function(r){
r.balance=balance,
r.lifetime=lifetime;
});var
redeemables=_.filter(sorted,function(r){
return'REDEEMABLE'===r.type;
}),
milestones=_.filter(sorted,function(r){
return'MILESTONE'===r.type;
});
_updatePoints(balance,lifetime),
_updateRedeemables(redeemables),
_updateMilestones(milestones,lifetime),
doneFirst=!0;
},

_updatePoints=function(balance,lifetime){
$.updateViews({
"#currentPts":{
text:nu.formatNumber(balance)},

"#lifetimePts":{
text:'Lifetime score: '+nu.formatNumber(lifetime)}});


},

_updateRedeemables=function(redeemables){var
toggles=cus.singleton().get('toggles')||{},
shareProgress='yes'===toggles.shareProgress,
enableRewards='yes'===toggles.enableRewards;

$.rewardsTabGroup.showTab('rewardsTab',enableRewards&&(0<redeemables.length||shareProgress),0),
enableRewards&&(
0===redeemables.length&&shareProgress?

require('services/guardians_service').getCurrent().then(function(guardians){
var sharees=_.filter(guardians,function(g){
return!0===g.sharing;
});
$.action.height=Ti.UI.SIZE,
$.action.top=24,
sharees.length?(

$.shareCard.height=0,
$.nudgeCard.height=Ti.UI.SIZE,

enabledGuardians=sharees):(


$.shareCard.height=Ti.UI.SIZE,
$.nudgeCard.height=0);

}):(

$.action.height=0,
$.action.top=0),

$.rewardsList.setData(redeemables));

},

_updateMilestones=function(milestones){var
toggles=cus.singleton().get('toggles')||{},
enableMilestones='yes'===toggles.enableMilestones;

if($.rewardsTabGroup.showTab('milestonesTab',enableMilestones&&0<milestones.length,0),0<milestones.length){var
milestoneHeight=56,
last=milestones[milestones.length-1];
last.last=!0;var

milestoneData=[],
completed=_.filter(milestones,function(m){
return m.amount<=m.lifetime;
}),
incompleted=_.filter(milestones,function(m){
return m.amount>m.lifetime;
});

milestoneData.push({type:'START'}),
0<completed.length&&(
milestoneData.push({type:'LINE',height:16,completed:!0}),
milestoneData.push({type:'SPACER',completed:!0}));

var first=!0;
_.forEach(completed,function(m){
first?
first=!1:

milestoneData.push({type:'SPACER',completed:!0}),

m.completed=!0,
milestoneData.push(m);
});
var previousAmount=0;
completed.length&&(previousAmount=completed[completed.length-1].amount);
var nextAmount=last.lifetime;
incompleted.length&&(nextAmount=incompleted[0].amount);var
span=80,
unitsPerPoint=span/(nextAmount-previousAmount);

milestoneData.push({type:'LINE',height:_Mathround(unitsPerPoint*(last.lifetime-previousAmount)),completed:!0}),
milestoneData.push({type:'TAG',amount:last.lifetime,completed:!0,last:!(0<incompleted.length)}),
0<incompleted.length&&
milestoneData.push({type:'LINE',height:_Mathround(unitsPerPoint*(nextAmount-last.lifetime)),completed:!1}),

first=!0,
_.forEach(incompleted,function(m){
first?
first=!1:

milestoneData.push({type:'SPACER',completed:!1}),

m.completed=!1,
milestoneData.push(m);
}),
$.milestoneList.setData(milestoneData);
}
},

_clickPoints=function(){
DISPATCHER.trigger('tf:app.slideWindow.open',{
content:{
widget:'tf.app.slideWindow',
controller:'info',
args:{title:'Points & Lifetime Score',
message:'Points accumulate over time and are shown here. Points are awarded by earning badges as you use the application and progress towards your goals. As points accumulate you will be able to use them to redeem any rewards created for you to claim.  When a reward is redeemed the \'cost\' of that reward will be deducted from your current points.\n\nYour lifetime total reflects the total number of points you have been awarded since you started using the application.  As your lifetime total increases you will be notified as you pass any milestones setup for you. Anyone you have shared your progress with will also be notified as you reach your milestones.'}}});



},


_share=function(){
DISPATCHER.once('tf:app.progress.share.updated',_updateRewards),
DISPATCHER.trigger('tf:app.progress.share.setup');
},
_nudge=function(){
var promisses=[];
_.forEach(enabledGuardians,function(g){
promisses.push(require('/services/guardians_service').nudge(g.id,'CREATE_PATIENT_REWARD'));
}),
Q.all(promisses).then(function(){
DISPATCHER.trigger('tf:app.dialog.show',{
type:'done',
data:{
title:'Success',
message:'Your nudge has been sent!'}});


}).catch(function(){
var dialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:'There was a problem trying to nudge, please try again later.',
title:'Uh Oh!'});

dialog.show();
});
},
_handleClaim=function(reward){
_showSpinner().then(function(){
return require('services/rewards_service').claimReward(reward.id);
}).then(require('services/guardians_service').getCurrent).then(function(guardians){

require('services/rewards_service').getPoints();
var guardian=_.find(guardians,function(g){
return g.id=reward.guardianId;
});
reward.nickname=guardian?guardian.nickname:'Guardian',
DISPATCHER.trigger('tf:app.dialog.show',{type:'reward-redeemed',data:reward});
}).catch(function(err){
var dialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:'There was a problem redeeming your reward, please try again later.',
title:'Uh Oh!'});

dialog.addEventListener('click',function(e){

require('services/rewards_service').getPoints();
}),
dialog.show();
}).finally(_hideSpinner);
};

init(),

$.cleanup=function(){

trackSessionEnd(),
$.rewardsTabGroup.cleanup(),
$.rewardsList.cleanup(),
$.milestoneList.cleanup(),
$.historyList.cleanup(),
$.badges.cleanup(),
DISPATCHER.off('tf:points.updated',_updateRewards),
DISPATCHER.off('tf:rewards.claim',_handleClaim),
DISPATCHER.off('tf:app.tabGroup.rewardsTabGroup.button.click',_handleShowTab),
DISPATCHER.off('tf:app.progress.share.updated',_updateRewards),
LOGGER.debug('IN CLEANUP REWARDS'),
DISPATCHER.trigger('tf:rewards.close',{});
},





__defers['$.__views.points!click!_clickPoints']&&$.addListener($.__views.points,'click',_clickPoints),__defers['$.__views.share!click!_share']&&$.__views.share.on('click',_share),__defers['$.__views.nudge!click!_nudge']&&$.__views.nudge.on('click',_nudge),



_.extend($,exports);
}

module.exports=Controller;