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




if(this.__widgetId='tf.app.tabGroup',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.tabGroup=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'tabGroup',layout:'vertical'}),

$.__views.tabGroup&&$.addTopLevelView($.__views.tabGroup),
$.__views.tabs=Ti.UI.createScrollView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,scrollType:'horizontal',id:'tabs',layout:'horizontal'}),

$.__views.tabGroup.add($.__views.tabs),
$.__views.underline=Ti.UI.createView(
{top:0,height:0,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.25,id:'underline'}),

$.__views.tabGroup.add($.__views.underline),
$.__views.content=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.FILL,top:14,id:'content'}),

$.__views.tabGroup.add($.__views.content),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools');
WTools.setTiProps(args,$.tabGroup);var



current,
donefirst,tabButtons=[],views=[],

_hideView=function(view){

view.left=Alloy.Globals.Style.Size.Width.pct99,
view.opacity=0;
},
_showView=function(view){
view.left=0,
view.opacity=1;
},

_init=function(){
DISPATCHER.on('tf:app.tabGroup.'+args.id+'.button.click',_showTab),
'bar'===args.style&&
$.updateViews({
"#tabs":{
width:Ti.UI.FILL,
backgroundColor:'#fff',
height:50},

"#content":{
top:0},

"#underline":{
height:1}}),



views=args.children,
tabs=[],
_.forEach(args.children,function(child){
_hideView(child),
$.content.add(child),
tabs.push({id:child.id,label:child.label,groupId:args.id,style:args.style,badge:child.badge,visible:void 0===child.hideTab||!child.hideTab});
}),
_setTabs(tabs);
},

hideAnimation=Ti.UI.createAnimation({
opacity:0,
duration:150}),

showAnimation=Ti.UI.createAnimation({
opacity:1,
duration:150}),


_getView=function(id){
return _.find(views,function(v){
return v.id===id;
});
},
_showTab=function(tab){
var id=tab.id;
if(!donefirst)
current=_getView(id),
_showView(current),
donefirst=!0;else
{
if(current.id===id)return;
$.content.animate(hideAnimation,function(){
_hideView(current),
current=_getView(id),
_showView(current),
$.content.animate(showAnimation);
});
}
},

_selectDefault=function(overrideCurrent){
if('undefined'==typeof overrideCurrent||
overrideCurrent||!current){var

firstVisible,
left=_.find(tabButtons,function(tb){

return!firstVisible&&tb.isVisible()&&(firstVisible=tb),tb.isVisible()&&tb.getBadge()&&0<tb.getBadge();
});
left=left||firstVisible,
left&&DISPATCHER.trigger('tf:app.tabGroup.'+args.id+'.button.click',{id:left.args.id})}
},

_setTabs=function(tabs){
donefirst=!1,
tabs&&tabs.length&&(
tabButtons=[],
'bar'===tabs[0].style&&$.tabs.add(Ti.UI.createView({width:16})),
_.forEach(tabs,function(t){
var w=Widget.createController('tab',t);
tabButtons.push(w),
$.tabs.add(w.getView());
}),
'bar'===tabs[0].style&&$.tabs.add(Ti.UI.createView({width:16})),


_.defer(function(){
_selectDefault();
}));

};
_init(),

exports.showTab=function(id,val,badge){
var found=_.find(tabButtons,function(tb){
return tb.getId()===id;
});
found&&(
found.show(val,badge),

!val&&current&&id===current.id&&
_selectDefault());


},

exports.selectDefault=_selectDefault,

exports.cleanup=function(){
LOGGER.debug('CLEANUP TAB GROUP: '+args.id),
DISPATCHER.off('tf:app.tabGroup.'+args.id+'.button.click',_showTab),
_.forEach(tabButtons,function(tab){
tab.cleanup();
});
},









_.extend($,exports);
}

module.exports=Controller;