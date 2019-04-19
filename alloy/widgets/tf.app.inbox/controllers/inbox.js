var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.inbox/'+s:
s.substring(0,index)+'/tf.app.inbox/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.inbox');




if(this.__widgetId='tf.app.inbox',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='inbox',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.inbox=Ti.UI.createView(
{layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,id:'inbox'}),

$.__views.inbox&&$.addTopLevelView($.__views.inbox),
$.__views.messages=Ti.UI.createView(
{layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,id:'messages',label:'Messages'}),

$.__views.messageList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.inbox',controller:'message_cell'},id:'messageList',__parentSymbol:$.__views.messages}),
$.__views.messageList.setParent($.__views.messages),
$.__views.rewards=Ti.UI.createView(
{layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,id:'rewards',label:'Rewards'}),

$.__views.rewardList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.inbox',controller:'message_cell'},id:'rewardList',__parentSymbol:$.__views.rewards}),
$.__views.rewardList.setParent($.__views.rewards),
$.__views.reminders=Ti.UI.createView(
{layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,id:'reminders',label:'Reminders'}),

$.__views.reminderList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.inbox',controller:'message_cell'},id:'reminderList',__parentSymbol:$.__views.reminders}),
$.__views.reminderList.setParent($.__views.reminders),
$.__views.alerts=Ti.UI.createView(
{layout:'vertical',width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,hideTab:!0,id:'alerts',label:'Alerts'}),

$.__views.alertList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.inbox',controller:'message_cell'},id:'alertList',__parentSymbol:$.__views.alerts}),
$.__views.alertList.setParent($.__views.alerts),
$.__views.messageTabGroup=Alloy.createWidget('tf.app.tabGroup','widget',{style:'bar',id:'messageTabGroup',children:[$.__views.messages,$.__views.rewards,$.__views.reminders,$.__views.alerts],__parentSymbol:$.__views.inbox}),
$.__views.messageTabGroup.setParent($.__views.inbox),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='INBOX';var






currentTab,
sessionstart,Q=require('vendor/q'),navigation=Alloy.Globals.Nav.Inbox,cus=require('services/current_user_service'),args=arguments[0]||{},updating=!1,




categories={
messages:['MESSAGE','PROGRAM'],
rewards:['KUDOS','REWARD','BADGE'],
reminders:['REMINDER','ROUTINE_REMINDER'],
alerts:['ALERT','RX_REVIEW','ERX_REVIEW','NUDGE']},

unread={
messages:0,
rewards:0,
reminders:0,
alerts:0},

messages={
messages:[],
rewards:[],
reminders:[],
alerts:[]},

setMessages=function(msgs){
updating=!0,
unread={
messages:0,
rewards:0,
reminders:0,
alerts:0},

messages={
messages:[],
rewards:[],
reminders:[],
alerts:[]},

_.forEach(msgs,function(m){
_.contains(categories.messages,m.category)?(
messages.messages.push(m),
!m.readTimestamp&&unread.messages++):
_.contains(categories.rewards,m.category)?(
messages.rewards.push(m),
!m.readTimestamp&&unread.rewards++):
_.contains(categories.reminders,m.category)?(
messages.reminders.push(m),
!m.readTimestamp&&unread.reminders++):
_.contains(categories.alerts,m.category)?(
messages.alerts.push(m),
!m.readTimestamp&&unread.alerts++):(


messages.alerts.push(m),
!m.readTimestamp&&unread.alerts++);

}),

$.messageTabGroup.showTab('messages',0<messages.messages.length,unread.messages),
$.messageTabGroup.showTab('rewards',0<messages.rewards.length,unread.rewards),
$.messageTabGroup.showTab('reminders',0<messages.reminders.length,unread.reminders),
$.messageTabGroup.showTab('alerts',0<messages.alerts.length,unread.alerts),
$.messageTabGroup.selectDefault(!1),
$.messageList.setData(messages.messages),
$.rewardList.setData(messages.rewards),
$.reminderList.setData(messages.reminders),
$.alertList.setData(messages.alerts),
updating=!1;
},

onNav=function(callback){
navigation.addEventListener('nav.transitionstart',function nav(){
navigation.removeEventListener('nav.transitionstart',nav),
callback();
});
},

_showSpinner=function(){
return Q.fcall(function(){



return DISPATCHER.trigger('tf:progress.start',{message:'Loading...'}),!0;
});
},
_hideSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
},
_loadMessages=function(){
return require('services/messages_service').getMessages().then(setMessages);
},

updateInbox=function(){
_showSpinner().then(_loadMessages).finally(_hideSpinner);
},

_updateReadCount=function(){
require('services/messages_service').getMessages(!0,0);
},

showMessage=_.debounce(function(message){var
toggles=cus.singleton().get('toggles')||{},
enablePoints='yes'===toggles.enablePoints,
enableRewards='yes'===toggles.enableRewards;
'BADGE'===message.category&&enablePoints?
DISPATCHER.trigger('tf:app.rewards.open',{tab:'BADGES'}):
'REWARD'===message.category&&enablePoints&&enableRewards&&
DISPATCHER.trigger('tf:app.rewards.open',{tab:'REWARDS'});
















































},500,!0),
_getCategories=function(tabId){
var cats=[];





return _.forEach(messages[tabId],function(msg){_.contains(cats,msg.category)||cats.push(msg.category)}),cats;
},
_clearCurrentTabMessages=function(){
currentTab&&0<unread[currentTab.id]&&
require('/services/messages_service').setMessagesRead([],_getCategories(currentTab.id),!0).then(_updateReadCount);

},
_handleShowTab=function(e){
updating||

_clearCurrentTabMessages(),

currentTab=e;
},
trackSessionStart=function(){
require('services/event_tracking_service').record('start-view-inbox',{}),
sessionstart=new Date;
},
trackSessionEnd=function(){
sessionstart&&
require('services/event_tracking_service').record('end-view-inbox',{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});


},
init=function(){
trackSessionStart(),
args.messages?
setMessages(args.messages):

onNav(updateInbox),

$.messageList.onClick(showMessage),
$.rewardList.onClick(showMessage),
$.reminderList.onClick(showMessage),
$.alertList.onClick(showMessage),
DISPATCHER.on('tf:messages.unread.info',updateInbox),
DISPATCHER.on('tf:app.tabGroup.messageTabGroup.button.click',_handleShowTab);
};

init(),

$.cleanup=function(){

_clearCurrentTabMessages(),
trackSessionEnd(),
$.messageTabGroup.cleanup(),
DISPATCHER.off('tf:messages.unread.info',updateInbox),
DISPATCHER.off('tf:app.tabGroup.messageTabGroup.button.click',_handleShowTab),
LOGGER.debug('IN CLEANUP INBOX'),
DISPATCHER.trigger('tf:inbox.close',{});
},









_.extend($,exports);
}

module.exports=Controller;