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
var Widget=new(require('/alloy/widget'))('tf.app.drawer');




if(this.__widgetId='tf.app.drawer',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='footer',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.footer=Ti.UI.createView(
{top:32,height:Ti.UI.FILL,width:'85%',id:'footer'}),

$.__views.footer&&$.addTopLevelView($.__views.footer),
$.__views.container=Ti.UI.createView(
{id:'container',layout:'horizontal'}),

$.__views.footer.add($.__views.container),
$.__views.emblemContainer=Ti.UI.createView(
{width:Ti.UI.SIZE,left:8,id:'emblemContainer'}),

$.__views.container.add($.__views.emblemContainer),
$.__views.emblem=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:30,top:12,id:'emblem',image:'/images/tickerfit-heart.svg'}),

$.__views.emblemContainer.add($.__views.emblem),
$.__views.privacy=Ti.UI.createView(
{width:Ti.UI.SIZE,left:14,top:14,id:'privacy',layout:'horizontal'}),

$.__views.container.add($.__views.privacy),
$.__views.__alloyId177=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'Privacy Policy',id:'__alloyId177'}),

$.__views.privacy.add($.__views.__alloyId177),
_showPrivacy?$.addListener($.__views.__alloyId177,'click',_showPrivacy):__defers['$.__views.__alloyId177!click!_showPrivacy']=!0,$.__views.__alloyId178=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:12},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'Q',left:4,id:'__alloyId178'}),

$.__views.privacy.add($.__views.__alloyId178),
_showPrivacy?$.addListener($.__views.__alloyId178,'click',_showPrivacy):__defers['$.__views.__alloyId178!click!_showPrivacy']=!0,$.__views.separator=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.font,fontSize:14},color:Alloy.Globals.Style.Color.Silver,top:14,left:6,id:'separator',text:' \u2022 '}),

$.__views.container.add($.__views.separator),
$.__views.terms=Ti.UI.createView(
{width:Ti.UI.SIZE,left:4,top:14,id:'terms',layout:'horizontal'}),

$.__views.container.add($.__views.terms),
$.__views.__alloyId179=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'T&Cs',id:'__alloyId179'}),

$.__views.terms.add($.__views.__alloyId179),
_showTerms?$.addListener($.__views.__alloyId179,'click',_showTerms):__defers['$.__views.__alloyId179!click!_showTerms']=!0,$.__views.__alloyId180=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:12},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'Q',left:4,id:'__alloyId180'}),

$.__views.terms.add($.__views.__alloyId180),
_showTerms?$.addListener($.__views.__alloyId180,'click',_showTerms):__defers['$.__views.__alloyId180!click!_showTerms']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


_showPrivacy=function(){
require('services/event_tracking_service').record('start-view-privacy-policy',{}),
DISPATCHER.trigger('tf:app.drawer.close',function(){
Ti.Platform.openURL(Ti.App.Properties.getString('privacyUrl'));
});
},

_showTerms=function(){
require('services/event_tracking_service').record('start-view-terms-conditions',{}),
DISPATCHER.trigger('tf:app.drawer.close',function(){
Ti.Platform.openURL(Ti.App.Properties.getString('termsUrl'));
});
},

_update=function(toggles){




$.emblem.height=IS_HACKA?20:30,
$.emblem.image=IS_HACKA?'/images/hacka-emblem.svg':'/images/tickerfit-heart.svg';
};

exports.update=_update,





__defers['$.__views.__alloyId177!click!_showPrivacy']&&$.addListener($.__views.__alloyId177,'click',_showPrivacy),__defers['$.__views.__alloyId178!click!_showPrivacy']&&$.addListener($.__views.__alloyId178,'click',_showPrivacy),__defers['$.__views.__alloyId179!click!_showTerms']&&$.addListener($.__views.__alloyId179,'click',_showTerms),__defers['$.__views.__alloyId180!click!_showTerms']&&$.addListener($.__views.__alloyId180,'click',_showTerms),



_.extend($,exports);
}

module.exports=Controller;