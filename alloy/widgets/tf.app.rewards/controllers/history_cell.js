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

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.rewards');




if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='history_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'transparent',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',bottom:24,id:'container'}),

$.__views.row.add($.__views.container),
$.__views.detail=Ti.UI.createView(
{bottom:16,width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'detail',layout:'vertical'}),

$.__views.container.add($.__views.detail),
$.__views.date=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,left:24,id:'date'}),

$.__views.detail.add($.__views.date),
$.__views.__alloyId244=Ti.UI.createView(
{top:16,left:24,right:24,height:Ti.UI.SIZE,backgroundColor:'#F8FAFB',layout:'horizontal',id:'__alloyId244'}),

$.__views.detail.add($.__views.__alloyId244),
$.__views.__alloyId245=Ti.UI.createView(
{width:'33.3%',height:Ti.UI.SIZE,top:16,bottom:16,layout:'vertical',id:'__alloyId245'}),

$.__views.__alloyId244.add($.__views.__alloyId245),
$.__views.__alloyId246=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:'#65767C',text:'Earnings',id:'__alloyId246'}),

$.__views.__alloyId245.add($.__views.__alloyId246),
$.__views.earnings=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.KiwiGreen,id:'earnings'}),

$.__views.__alloyId245.add($.__views.earnings),
$.__views.__alloyId247=Ti.UI.createView(
{width:'33.3%',height:Ti.UI.SIZE,top:16,bottom:16,layout:'vertical',id:'__alloyId247'}),

$.__views.__alloyId244.add($.__views.__alloyId247),
$.__views.__alloyId248=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:'#65767C',text:'Grants',id:'__alloyId248'}),

$.__views.__alloyId247.add($.__views.__alloyId248),
$.__views.given=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.KiwiGreen,id:'given'}),

$.__views.__alloyId247.add($.__views.given),
$.__views.__alloyId249=Ti.UI.createView(
{width:'33.3%',height:Ti.UI.SIZE,top:16,bottom:16,layout:'vertical',id:'__alloyId249'}),

$.__views.__alloyId244.add($.__views.__alloyId249),
$.__views.__alloyId250=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:'#65767C',text:'Redeemed',id:'__alloyId250'}),

$.__views.__alloyId249.add($.__views.__alloyId250),
$.__views.spent=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.RedPink,id:'spent'}),

$.__views.__alloyId249.add($.__views.spent),
$.__views.__alloyId251=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:24,top:16,text:'Badges',id:'__alloyId251'}),

$.__views.detail.add($.__views.__alloyId251),
$.__views.badgeList=Alloy.createWidget('tf.app.tableview','widget',{height:Ti.UI.SIZE,padleft:24,padright:24,rowType:{widget:'tf.app.rewards',controller:'historyItem_cell'},type:'simulated',id:'badgeList',__parentSymbol:$.__views.detail}),
$.__views.badgeList.setParent($.__views.detail),
$.__views.rewardsSection=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'rewardsSection',layout:'vertical'}),

$.__views.detail.add($.__views.rewardsSection),
$.__views.__alloyId252=Ti.UI.createView(
{top:16,left:24,right:24,height:1,opacity:.6,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId252'}),

$.__views.rewardsSection.add($.__views.__alloyId252),
$.__views.__alloyId253=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:24,top:16,text:'Rewards',id:'__alloyId253'}),

$.__views.rewardsSection.add($.__views.__alloyId253),
$.__views.rewardsList=Alloy.createWidget('tf.app.tableview','widget',{height:Ti.UI.SIZE,padleft:24,padright:24,rowType:{widget:'tf.app.rewards',controller:'historyItem_cell'},type:'simulated',id:'rewardsList',__parentSymbol:$.__views.rewardsSection}),
$.__views.rewardsList.setParent($.__views.rewardsSection),
$.__views.milestonesSection=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'milestonesSection',layout:'vertical'}),

$.__views.detail.add($.__views.milestonesSection),
$.__views.__alloyId254=Ti.UI.createView(
{top:16,left:24,right:24,height:1,opacity:.6,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId254'}),

$.__views.milestonesSection.add($.__views.__alloyId254),
$.__views.__alloyId255=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:24,top:16,text:'Milestones',id:'__alloyId255'}),

$.__views.milestonesSection.add($.__views.__alloyId255),
$.__views.milestoneList=Alloy.createWidget('tf.app.tableview','widget',{height:Ti.UI.SIZE,padleft:24,padright:24,rowType:{widget:'tf.app.rewards',controller:'historyItem_cell'},type:'simulated',id:'milestoneList',__parentSymbol:$.__views.milestonesSection}),
$.__views.milestoneList.setParent($.__views.milestonesSection),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var




















item,args=arguments[0]||{},moment=require('alloy/moment'),nu=require('/utils/number'),cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,

setItem=function(i){

var toggles=cus.singleton().get('toggles')||{};













item=i,

$.updateViews({
"#date":{
text:moment(i.date).format('MMMM YYYY')},

"#earnings":{
text:(i.badgeEarnings?'+':'')+nu.formatNumber(i.badgeEarnings)},

"#given":{
text:(i.grantEarnings?'+':'')+nu.formatNumber(i.grantEarnings)},

"#spent":{
text:(i.rewardsClaimedSpend?'-':'')+nu.formatNumber(i.rewardsClaimedSpend)}});


var badgeItems=_.map(i.badgeSummary,function(bs){
return{name:bs.name,value:'x'+bs.count};
});

if($.badgeList.setData(badgeItems.length?badgeItems:[{name:'None',value:''}]),'yes'===toggles.enableRewards){
var rewardsItems=_.map(i.rewardsClaimed,function(rc){
return{name:rc.reward.name,value:moment(rc.rewardedTime).format('DD/MM')};
});
$.rewardsList.setData(rewardsItems.length?rewardsItems:[{name:'None',value:''}]);
}else
$.rewardsSection.height=0;

if('yes'===toggles.enableMilestones){
var milestoneItems=_.map(i.milestonesMet,function(mm){
return{name:mm.reward.name,value:moment(mm.rewardedTime).format('DD/MM')};
});
$.milestoneList.setData(milestoneItems.length?milestoneItems:[{name:'None',value:''}]);
}else
$.milestonesSection.height=0;

},

update=function(){
item&&setItem(item);
};
setItem(args.data),


exports.onClick=function(callback){
callback(!0);
},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},









_.extend($,exports);
}

module.exports=Controller;