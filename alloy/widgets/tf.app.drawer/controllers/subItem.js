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

















































































function onClick(){
var runHandler=!selected;

DISPATCHER.trigger('tf:app.drawer.button.click',{id:args.button,item:args.id}),
runHandler&&_onClick({id:args.button,item:args.id});
}var Widget=new(require('/alloy/widget'))('tf.app.drawer');if(this.__widgetId='tf.app.drawer',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='subItem',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.subItem=Ti.UI.createView({left:40,width:Ti.UI.FILL,borderRadius:8,height:40,backgroundColor:'transparent',apiName:'Ti.UI.View',id:'subItem',classes:['drawer-item']}),$.__views.subItem&&$.addTopLevelView($.__views.subItem),onClick?$.addListener($.__views.subItem,'click',onClick):__defers['$.__views.subItem!click!onClick']=!0,$.__views.label=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14'},color:Alloy.Globals.Style.Color.BattleshipGrey,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,height:18,right:16,left:16,apiName:'Ti.UI.Label',id:'label',classes:['drawer-label']}),$.__views.subItem.add($.__views.label),exports.destroy=function(){},_.extend($,$.__views),'use strict';var handler,args=arguments[0]||{},selected=!1,itemHeight=40;args.text&&($.label.text=args.text);var toggle=function(){if(selected=!selected,selected){$.subItem.backgroundColor=Alloy.Globals.Style.Color.IceBlue,$.label.color=Alloy.Globals.Style.Color.RedPink;var font=$.label.font;font.fontFamily=Alloy.CFG.fontBold,$.label.font=font,$.label.text=args.text}else{$.subItem.backgroundColor='transparent',$.label.color=Alloy.Globals.Style.Color.BattleshipGrey;var font=$.label.font;font.fontFamily=Alloy.CFG.fontNormal,$.label.font=font}},_setSelected=function(val){selected!=val&&toggle()},_updateSelected=function(e){_setSelected(e.id===args.button&&e.item===args.id)},

_onClick=function(item){
LOGGER.warn('NOOP - SubItem:'+JSON.stringify(item));
},

_setOnClick=function(cb){
_onClick=cb;
};

args.onClick&&
_setOnClick(args.onClick),


DISPATCHER.on('tf:app.drawer.button.click',_updateSelected),

exports.setOnClick=_setOnClick,
exports.setSelected=_setSelected,
exports.cleanup=function(){
DISPATCHER.off('tf:app.drawer.button.click',_updateSelected);
},





__defers['$.__views.subItem!click!onClick']&&$.addListener($.__views.subItem,'click',onClick),



_.extend($,exports);
}

module.exports=Controller;