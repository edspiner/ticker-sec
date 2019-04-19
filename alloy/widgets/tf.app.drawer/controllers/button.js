var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.drawer/'+s:
s.substring(0,index)+'/tf.app.drawer/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
















































































































































































function animateHeight(view,fromHeight,toHeight,duration){
if(!1){var
total_height_change=toHeight-fromHeight,
stepSize=2,
height_step=toHeight>fromHeight?stepSize:-stepSize,
time_step=Math.abs(duration*height_step/total_height_change),
num_steps=duration/time_step,
i=0,
change_height=function(){
setTimeout(function(){return(
view.height+=height_step,
i+=1,
i>num_steps?void(
view.height=toHeight):void


change_height());
},time_step);
};
change_height();
}else
view.animate({height:toHeight,duration:duration},function(){
view.height=toHeight;
});

}

function onClick(){
var runHandler=!selected||items.length;

DISPATCHER.trigger('tf:app.drawer.button.click',{id:$.args.id}),
runHandler&&_onClick({id:$.args.id});
}var Widget=new(require('/alloy/widget'))('tf.app.drawer');if(this.__widgetId='tf.app.drawer',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='button',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.button=Ti.UI.createView({top:0,height:60,apiName:'Ti.UI.View',id:'button',layout:'vertical',classes:[]}),$.__views.button&&$.addTopLevelView($.__views.button),$.__views.main=Ti.UI.createView({backgroundColor:'#fff',width:'85%',borderRadius:8,height:60,apiName:'Ti.UI.View',id:'main',classes:['drawer-button']}),$.__views.button.add($.__views.main),onClick?$.addListener($.__views.main,'click',onClick):__defers['$.__views.main!click!onClick']=!0,$.__views.icon=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'20dp'},color:Alloy.Globals.Style.Color.DarkSkyBlue,left:30,width:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'icon',classes:['drawer-icon']}),$.__views.main.add($.__views.icon),$.__views.__alloyId175=Ti.UI.createView({width:62,left:0,height:Ti.UI.FILL,apiName:'Ti.UI.View',classes:['drawer-badge-container'],id:'__alloyId175'}),$.__views.main.add($.__views.__alloyId175),$.__views.badge=Ti.UI.createView({width:Ti.UI.SIZE,height:20,backgroundColor:'white',borderRadius:10,right:0,top:12,opacity:0,apiName:'Ti.UI.View',id:'badge',classes:['drawer-icon-badge']}),$.__views.__alloyId175.add($.__views.badge),$.__views.__alloyId176=Ti.UI.createView({left:2,right:2,width:Ti.UI.SIZE,height:16,backgroundColor:Alloy.Globals.Style.Color.RedPink,borderRadius:8,apiName:'Ti.UI.View',classes:['drawer-icon-badge-dot'],id:'__alloyId176'}),$.__views.badge.add($.__views.__alloyId176),$.__views.badgeValue=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:12},color:'white',left:4,right:4,bottom:1,width:Ti.UI.SIZE,height:16,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'badgeValue',classes:['drawer-badge-value']}),$.__views.__alloyId176.add($.__views.badgeValue),_setMinBadgeWidth?$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth):__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']=!0,$.__views.label=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:'18'},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.SIZE,left:65,apiName:'Ti.UI.Label',id:'label',classes:['drawer-label']}),$.__views.main.add($.__views.label),$.__views.toggle=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:'15dp'},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'b',right:30,width:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'toggle',classes:['drawer-toggle','tf-arrow-down']}),$.__views.main.add($.__views.toggle),$.__views.items=Ti.UI.createView({top:8,backgroundColor:'transparent',width:'85%',height:Ti.UI.SIZE,bottom:13,apiName:'Ti.UI.View',id:'items',classes:['drawer-items'],layout:'vertical'}),$.__views.button.add($.__views.items),exports.destroy=function(){},_.extend($,$.__views),'use strict';var args=arguments[0]||{},selected=!1,buttonHeight=60,itemHeight=40,itemsPaddingTop=8,itemsPaddingBottom=13,visible=!0,_badgeValue=0;args.text&&($.label.text=args.text),args.icon&&$.addClass($.icon,args.icon);var items=[],_setItems=function(subItems){_.forEach(items,function(item){item.cleanup()}),items=[],$.items.removeAllChildren(),subItems&&subItems.length?($.toggle.visible=!0,_.forEach(subItems,function(item){item.button=$.args.id;var si=Widget.createController('subItem',item);items.push(si),$.items.add(si.getView())})):$.toggle.visible=!1};_setItems(args.items);var toggle=function(){selected=!selected;var animateDuration=200,openTransform=Titanium.UI.create2DMatrix().rotate(180);selected?($.addClass($.main,'selected'),$.addClass($.icon,'selected'),$.addClass($.label,'selected'),_badgeValue&&$.addClass($.badge,'selected'),$.toggle.visible&&($.addClass($.toggle,'selected'),animateHeight($.button,$.button.height,buttonHeight+itemsPaddingTop+items.length*itemHeight+itemsPaddingBottom,animateDuration),$.toggle.animate({transform:openTransform,duration:animateDuration}))):($.removeClass($.main,'selected'),$.removeClass($.icon,'selected'),$.removeClass($.label,'selected'),_badgeValue&&$.removeClass($.badge,'selected'),$.toggle.visible&&($.removeClass($.toggle,'selected'),animateHeight($.button,$.button.height,buttonHeight,animateDuration),$.toggle.transform=void 0))},_setSelected=function(val){selected!=val&&toggle()},lastHeight=buttonHeight,_show=function(val){val===visible||(visible=val,!visible&&(lastHeight=$.button.height),$.button.height=visible?lastHeight:0)},_setMinBadgeWidth=function(e){$.badgeValue.rect.width&&8>$.badgeValue.rect.width&&($.badgeValue.width=8)},_showBadge=function(value){_badgeValue=value,$.updateViews({"#badge":{opacity:value?1:0},"#badgeValue":{width:Ti.UI.SIZE,text:value}})},

_onClick=function(item){
LOGGER.debug('NOOP - Button:'+JSON.stringify(item));
},
_setOnClick=function(cb){
_onClick=cb;
};

args.onClick&&
_setOnClick(args.onClick),


DISPATCHER.on('tf:app.drawer.button.click',function(e){
_setSelected(e.id===$.args.id);
}),

exports.show=_show,
exports.setItems=_setItems,
exports.setOnClick=_setOnClick,
exports.setSelected=_setSelected,
exports.showBadge=_showBadge,





__defers['$.__views.main!click!onClick']&&$.addListener($.__views.main,'click',onClick),__defers['$.__views.badgeValue!postlayout!_setMinBadgeWidth']&&$.addListener($.__views.badgeValue,'postlayout',_setMinBadgeWidth),



_.extend($,exports);
}

module.exports=Controller;