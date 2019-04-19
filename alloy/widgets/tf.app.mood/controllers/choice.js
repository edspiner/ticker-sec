var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.mood/'+s:
s.substring(0,index)+'/tf.app.mood/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.mood');




if(this.__widgetId='tf.app.mood',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='choice',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.choice=Ti.UI.createView(
{height:Ti.UI.SIZE,left:16,right:16,id:'choice'}),

$.__views.choice&&$.addTopLevelView($.__views.choice),
$.__views.buttons=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Alloy.Globals.Style.Widget.Mood.ChoiceWidth,id:'buttons',layout:'horizontal'}),

$.__views.choice.add($.__views.buttons),
$.__views.down=Ti.UI.createView(
{top:24,width:'19.85%',bottom:24,height:Ti.UI.SIZE,id:'down'}),

$.__views.buttons.add($.__views.down),
choose?$.addListener($.__views.down,'click',choose):__defers['$.__views.down!click!choose']=!0,$.__views.__alloyId168=Alloy.createWidget('tf.app.mood','moodIcon',{height:Alloy.Globals.Style.Widget.Mood.IconSize,width:Alloy.Globals.Style.Widget.Mood.IconSize,value:1,id:'__alloyId168',__parentSymbol:$.__views.down}),
$.__views.__alloyId168.setParent($.__views.down),
$.__views.sad=Ti.UI.createView(
{top:24,width:'19.85%',bottom:24,height:Ti.UI.SIZE,id:'sad'}),

$.__views.buttons.add($.__views.sad),
choose?$.addListener($.__views.sad,'click',choose):__defers['$.__views.sad!click!choose']=!0,$.__views.__alloyId169=Alloy.createWidget('tf.app.mood','moodIcon',{height:Alloy.Globals.Style.Widget.Mood.IconSize,width:Alloy.Globals.Style.Widget.Mood.IconSize,value:2,id:'__alloyId169',__parentSymbol:$.__views.sad}),
$.__views.__alloyId169.setParent($.__views.sad),
$.__views.ok=Ti.UI.createView(
{top:24,width:'19.85%',bottom:24,height:Ti.UI.SIZE,id:'ok'}),

$.__views.buttons.add($.__views.ok),
choose?$.addListener($.__views.ok,'click',choose):__defers['$.__views.ok!click!choose']=!0,$.__views.__alloyId170=Alloy.createWidget('tf.app.mood','moodIcon',{height:Alloy.Globals.Style.Widget.Mood.IconSize,width:Alloy.Globals.Style.Widget.Mood.IconSize,value:3,id:'__alloyId170',__parentSymbol:$.__views.ok}),
$.__views.__alloyId170.setParent($.__views.ok),
$.__views.happy=Ti.UI.createView(
{top:24,width:'19.85%',bottom:24,height:Ti.UI.SIZE,id:'happy'}),

$.__views.buttons.add($.__views.happy),
choose?$.addListener($.__views.happy,'click',choose):__defers['$.__views.happy!click!choose']=!0,$.__views.__alloyId171=Alloy.createWidget('tf.app.mood','moodIcon',{height:Alloy.Globals.Style.Widget.Mood.IconSize,width:Alloy.Globals.Style.Widget.Mood.IconSize,value:4,id:'__alloyId171',__parentSymbol:$.__views.happy}),
$.__views.__alloyId171.setParent($.__views.happy),
$.__views.delighted=Ti.UI.createView(
{top:24,width:'19.85%',bottom:24,height:Ti.UI.SIZE,id:'delighted'}),

$.__views.buttons.add($.__views.delighted),
choose?$.addListener($.__views.delighted,'click',choose):__defers['$.__views.delighted!click!choose']=!0,$.__views.__alloyId172=Alloy.createWidget('tf.app.mood','moodIcon',{height:Alloy.Globals.Style.Widget.Mood.IconSize,width:Alloy.Globals.Style.Widget.Mood.IconSize,value:5,id:'__alloyId172',__parentSymbol:$.__views.delighted}),
$.__views.__alloyId172.setParent($.__views.delighted),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

animateButton=require('utils/ui').animateClick,

_choose=function(e){
var id=e.source.id;
animateButton(e.source,e.source.color,.8,function(e){
var rating;
'delighted'===id?
rating=5:
'happy'===id?
rating=4:
'ok'===id?
rating=3:
'sad'===id?
rating=2:
'down'===id&&(
rating=1),

_onClick({id:id,value:rating});
});
},
choose=_.debounce(_choose,1e3,!0),

_onClick=function(choice){
LOGGER.error('NOOP:'+JSON.stringify(choice));
};

exports.setOnClick=function(cb){
_onClick=cb;
},





__defers['$.__views.down!click!choose']&&$.addListener($.__views.down,'click',choose),__defers['$.__views.sad!click!choose']&&$.addListener($.__views.sad,'click',choose),__defers['$.__views.ok!click!choose']&&$.addListener($.__views.ok,'click',choose),__defers['$.__views.happy!click!choose']&&$.addListener($.__views.happy,'click',choose),__defers['$.__views.delighted!click!choose']&&$.addListener($.__views.delighted,'click',choose),



_.extend($,exports);
}

module.exports=Controller;