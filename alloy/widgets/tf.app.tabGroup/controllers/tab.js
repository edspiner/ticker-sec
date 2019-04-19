var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.tabGroup/'+s:
s.substring(0,index)+'/tf.app.tabGroup/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.tabGroup');




if(this.__widgetId='tf.app.tabGroup',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='tab',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.tab=Ti.UI.createView(
{left:4,right:4,height:37,width:Ti.UI.SIZE,id:'tab'}),

$.__views.tab&&$.addTopLevelView($.__views.tab),
$.__views.caret=Ti.UI.createView(
{backgroundColor:Alloy.Globals.Style.Color.RedPink,width:26,height:26,opacity:0,id:'caret'}),

$.__views.tab.add($.__views.caret),
$.__views.underline=Ti.UI.createView(
{bottom:0,width:0,height:3,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,opacity:0,id:'underline'}),

$.__views.tab.add($.__views.underline),
$.__views.button=Ti.UI.createView(
{top:0,height:30,borderRadius:15,backgroundColor:Alloy.Globals.Style.Color.LightBlue,width:90,borderWidth:0,id:'button'}),

$.__views.tab.add($.__views.button),
_tap?$.addListener($.__views.button,'touchstart',_tap):__defers['$.__views.button!touchstart!_tap']=!0,_setUnderlineWidth?$.addListener($.__views.button,'postlayout',_setUnderlineWidth):__defers['$.__views.button!postlayout!_setUnderlineWidth']=!0,$.__views.__alloyId238=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId238'}),

$.__views.button.add($.__views.__alloyId238),
$.__views.label=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:'white',width:Ti.UI.SIZE,text:'A Label',id:'label'}),

$.__views.__alloyId238.add($.__views.label),
$.__views.badge=Ti.UI.createView(
{height:20,width:0,borderRadius:10,id:'badge'}),

$.__views.__alloyId238.add($.__views.badge),
$.__views.badgeValue=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:12},color:'#111',left:6,right:6,id:'badgeValue'}),

$.__views.badge.add($.__views.badgeValue),
_setMinBadgeWidth?$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth):__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

selected=!1,
visible=!0,
bar=!1;

$.caret.transform=Ti.UI.create2DMatrix({
rotate:45});var
















































badgeValue,_init=function(){args.label&&_setLabel(args.label),bar='bar'===args.style,$.updateViews({"#tab":{height:bar?Ti.UI.FILL:37,left:bar?0:4,right:bar?0:4},"#button":{width:bar?Ti.UI.SIZE:90,height:bar?Ti.UI.FILL:30,left:bar?16:void 0,right:bar?16:void 0,backgroundColor:bar?'transparent':Alloy.Globals.Style.Color.LightBlue},"#label":{color:bar?Alloy.Globals.Style.Color.BattleshipGrey:'#fff',font:{fontFamily:bar?Alloy.CFG.fontNormal:Alloy.CFG.fontBold}},"#badge":{backgroundColor:bar?Alloy.Globals.Style.Color.IceBlue:Alloy.Globals.Style.Color.LightBlue},"#badgeValue":{color:bar?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'}}),_show(args.visible,args.badge),_setSelected(!0===args.selected),DISPATCHER.on('tf:app.tabGroup.'+args.groupId+'.button.click',_onTabGroupBtnClick)},_onTabGroupBtnClick=function(e){_setSelected(e.id===$.args.id)},_setUnderlineWidth=function(e){bar&&$.button.rect.width&&($.underline.width=$.button.rect.width+32)},_setLabel=function(label){$.label.text=label},
_setBadge=function(badge){
badgeValue=badge,
$.updateViews({
"#badgeValue":{
text:badge?badge:'',
width:badge?Ti.UI.SIZE:0},

"#badge":{
left:badge?4:0,
width:badge?Ti.UI.SIZE:0}});


},
_setMinBadgeWidth=function(e){
$.badgeValue.rect.width&&8>$.badgeValue.rect.width&&(
$.badgeValue.width=8);

},

_toggle=function(){
selected=!selected,
selected?
bar?
$.updateViews({
"#label":{
color:Alloy.Globals.Style.Color.DarkSkyBlue,
text:$.label.text,
font:{
fontFamily:Alloy.CFG.fontBold}},


"#badge":{
backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue},

"#badgeValue":{
color:'#fff'},

"#underline":{
opacity:1}}):(



$.button.backgroundColor=Alloy.Globals.Style.Color.RedPink,
$.caret.opacity=1):


bar?
$.updateViews({
"#label":{
color:Alloy.Globals.Style.Color.BattleshipGrey,
text:$.label.text,
font:{
fontFamily:Alloy.CFG.fontNormal}},


"#badge":{
backgroundColor:Alloy.Globals.Style.Color.IceBlue},

"#badgeValue":{
color:Alloy.Globals.Style.Color.DarkSkyBlue},

"#underline":{
opacity:0}}):(



$.caret.opacity=0,
$.button.backgroundColor=Alloy.Globals.Style.Color.LightBlue);


},

_setSelected=function(val){
selected!=val&&
_toggle();

},

_tap=function(){
DISPATCHER.trigger('tf:app.tabGroup.'+args.groupId+'.button.click',{id:$.args.id}),
require('services/event_tracking_service').record('tap-tab',{id:$.args.id,group:args.groupId});
},

_show=function(val,badge){
_setBadge(badge),
val===visible||(
visible=val,
$.updateViews({
"#tab":{
left:val&&!bar?4:0,
right:val&&!bar?4:0,
width:val?Ti.UI.SIZE:0}}));


};

_init(),

exports.show=_show,
exports.getId=function(){
return $.args.id;
},
exports.isVisible=function(){
return visible;
},
exports.getBadge=function(){
return badgeValue;
},
exports.cleanup=function(){
LOGGER.debug('IN TAB BTN CLEANUP:'+args.groupId+':'+$.args.id),
DISPATCHER.off('tf:app.tabGroup.'+args.groupId+'.button.click',_onTabGroupBtnClick);
},





__defers['$.__views.button!touchstart!_tap']&&$.addListener($.__views.button,'touchstart',_tap),__defers['$.__views.button!postlayout!_setUnderlineWidth']&&$.addListener($.__views.button,'postlayout',_setUnderlineWidth),__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']&&$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth),



_.extend($,exports);
}

module.exports=Controller;