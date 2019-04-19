var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.progressBar/'+s:
s.substring(0,index)+'/tf.app.progressBar/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){



































































function createView(_args){



























return options=_.defaults(_args,defaults),['width','height','left','right','top','bottom','zIndex','backgroundColor'].forEach(function(prop){_.has(options,prop)&&($.container[prop]=options[prop])}),init=!0,$.label.text=options.label,$.label.font=options.labelFont,$.label.color=options.labelColor,$.valueLabel.font=options.valueLabelFont,$.valueLabel.color=options.valueLabelColor,$.bar.height=options.barSize,$.bar.borderRadius=options.barSize/2,$.bar.backgroundColor=options.barColor,$.value.height=options.barSize,$.value.borderRadius=options.barSize/2,$.value.backgroundColor=options.valueColor,setValue(options.value||0),$.container.setValue=setValue,$.container;
}




function updateUi(){
init&&(1?




$.value.animate({width:value+'%',duration:200},function(){
$.value.setWidth(value+'%');
}):$.value.setWidth(value+'%'),


$.valueLabel.text=value+'%');
}





function setValue(_value){
_.isNumber(_value)&&0<=_value&&100>=_value?(
value=_value,
updateUi()):

Ti.API.error('[progressBar]: value (was '+_value+') must be a number between 0 and 100');

}var Widget=new(require('/alloy/widget'))('tf.app.progressBar');if(this.__widgetId='tf.app.progressBar',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.container=Ti.UI.createView({width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'container',layout:'vertical'}),$.__views.container&&$.addTopLevelView($.__views.container),$.__views.labels=Ti.UI.createView({height:Ti.UI.SIZE,bottom:5,id:'labels'}),$.__views.container.add($.__views.labels),$.__views.label=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14dp'},color:'#111',left:0,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'label'}),$.__views.labels.add($.__views.label),$.__views.valueLabel=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14dp'},color:'#111',right:0,bottom:0,width:Ti.UI.SIZE,height:Ti.UI.SIZE,text:'--%',id:'valueLabel'}),$.__views.labels.add($.__views.valueLabel),$.__views.bar=Ti.UI.createView({width:Ti.UI.FILL,id:'bar'}),$.__views.container.add($.__views.bar),$.__views.value=Ti.UI.createView({left:0,width:'0%',id:'value'}),$.__views.bar.add($.__views.value),exports.destroy=function(){},_.extend($,$.__views);var options,init=!1,value=0,barWidth=0,defaults={barSize:14,barColor:Alloy.Globals.Style.Color.BrandGreyLight,valueColor:Alloy.Globals.Style.Color.BrandPink};arguments[0]&&createView(arguments[0]);;

Object.keys(defaults).forEach(function(key){
Object.defineProperty($,key,{
get:function(){
return options[key];
},
set:function(value){
options[key]=value;
}});

}),

exports.createView=createView,
exports.setValue=setValue,









_.extend($,exports);
}

module.exports=Controller;