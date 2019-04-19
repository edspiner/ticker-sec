var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.programs/'+s:
s.substring(0,index)+'/tf.app.programs/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){var _Mathround=













































































































































Math.round,Widget=new(require('/alloy/widget'))('tf.app.programs');if(this.__widgetId='tf.app.programs',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='program',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.program=Ti.UI.createView({layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,id:'program'}),$.__views.program&&$.addTopLevelView($.__views.program),$.__views.itemList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.programs',controller:'item_cell'},id:'itemList',__parentSymbol:$.__views.program}),$.__views.itemList.setParent($.__views.program),exports.destroy=function(){},_.extend($,$.__views),$.TAG='PROGRAM';var sessionstart,rxProgram,cus=require('services/current_user_service'),args=arguments[0]||{},setProgram=function(rxp){rxProgram=rxp;var last,items=rxProgram.program.items,sorted=_.chain(items).sortBy(function(item){return item.activationDate}).sortBy(function(item){return!item.viewable}).sortBy(function(item){return!(item.sticky&&item.due)}).sortBy(function(item){return item.done&&!item.sticky}).value(),sticky=!1,ready=!1,upnext=!1,comingsoon=!1,done=!1;_.forEach(sorted,function(i){i.separator=!1;var todo=!i.done||i.sticky;i.due&&i.sticky?!sticky&&(i.showHeader=!0,sticky=!0):i.due&&!i.done?!ready&&(last&&(last.separator=!0),i.showHeader=!0,ready=!0):i.viewable&&todo?!upnext&&(last&&(last.separator=!0),i.showHeader=!0,upnext=!0):!i.viewable&&todo?!comingsoon&&(last&&(last.separator=!0),i.showHeader=!0,comingsoon=!0):todo?i.showHeader=!1:!done&&(last&&(last.separator=!0),i.showHeader=!0,done=!0),last=i}),$.itemList.setData(sorted)},updateProgram=function(){var cu=cus.singleton(),toggles=cu.get('toggles'),rx=cu.get('rx');if(rx&&rx.rxPrograms){var rxPrograms=require('services/rx_service').filterPrograms(cu.get('enableProgramThemeMode')?rx.themeRxPrograms:rx.rxPrograms,['VIDEO','DOCUMENT','REPORT']),updated=_.find(rxPrograms,function(rxp){return rxp.id===rxProgram.id});setProgram(updated)}},showItem=_.debounce(function(item){play(item)},1e3,!0),trackSessionStart=function(){require('services/event_tracking_service').record('start-view-program',{rxProgramId:rxProgram.id}),sessionstart=new Date},trackSessionEnd=function(){require('services/event_tracking_service').record('end-view-program',{rxProgramId:rxProgram.id,duration:_Mathround((new Date().getTime()-sessionstart.getTime())/1e3)});

},

init=function(){
args.rxProgram&&(
setProgram(args.rxProgram),
trackSessionStart()),

$.itemList.onClick(showItem),
DISPATCHER.on('tf:rx.loaded',updateProgram);
};

exports.init=init,

$.cleanup=function(){
trackSessionEnd(),
LOGGER.debug('IN CLEANUP PROGRAM'),
DISPATCHER.off('tf:rx.loaded',updateProgram),
DISPATCHER.trigger('tf:program.close',{rxProgramId:rxProgram.id});
};var

play=function(item){
rxProgram&&item&&(
require('services/event_tracking_service').record('view-program-item',{
programItemId:item.id,
rxProgramId:item.rxProgramId,
contentId:item.content.id,
type:item.content.type,
due:!0==item.due}),

Alloy.createModel('contentAccessToken',{
urlParams:{
cid:item.content.id,
rxProgramId:item.rxProgramId,
programItemId:item.id}}).

fetch().then(function(token){
if('DOCUMENT'===item.content.type||'REPORT'===item.content.type||'VIDEO'===item.content.type&&'YOUTUBE'===token.videoType){
viewedDocument(item);
var url=token.url;
'YOUTUBE'===token.videoType&&(

url='https://youtu.be/'+url),

Ti.Platform.openURL(url);
}else if('VIDEO'===item.content.type){
var startTime=new Date;
require('tickerfit/video').play(token.url,token.videoType,function(meta){
playedVideo(item,startTime,meta);
});
}
}).catch(function(e){
LOGGER.error('ERROR:'+JSON.stringify(e));
}));
;
},

recordProgress=function(item){
Alloy.createModel('rx_program_item_progress',{
urlParams:{
pid:cus.singleton().get('userId'),
rxid:item.rxId,
rxProgramId:item.rxProgramId},

id:-1,
completed:!0,
programItemId:item.id}).
save().then(function(prog){


prog.rxProgramId=rxProgram.id,
item.done=!0,

require('services/rx_service').refreshCurrentRx();
});
},

viewedDocument=function(item){
recordProgress(item),
require('services/event_tracking_service').record('program-item-viewed',{
programItemId:item.id,
rxProgramId:item.rxProgramId,
contentId:item.content.id});

},

playedVideo=function(item,startTime,meta){
var viewingtime=new Date().getTime()-startTime.getTime();

if(meta.success&&meta.playbackTime&&meta.length){
var pctComplete=100*(meta.playbackTime/meta.length);
80<pctComplete&&

recordProgress(item),


require('services/event_tracking_service').record('program-item-viewed',{
programItemId:item.id,
rxProgramId:item.rxProgramId,
contentId:item.content.id,
duration:_Mathround(viewingtime/1e3),
length:_Mathround(meta.length/1e3),
current:_Mathround(meta.playbackTime/1e3)});

}
};









_.extend($,exports);
}

module.exports=Controller;