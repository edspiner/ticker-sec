var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activityDetails/'+s:
s.substring(0,index)+'/tf.app.activityDetails/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activityDetails');




if(this.__widgetId='tf.app.activityDetails',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='delete',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.deleteModal=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,opacity:0,left:Alloy.Globals.Style.Size.Width.pct99,wordWrap:!0,id:'deleteModal'}),

$.__views.deleteModal&&$.addTopLevelView($.__views.deleteModal),
$.__views.__alloyId229=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId229'}),

$.__views.deleteModal.add($.__views.__alloyId229),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Are you sure you want to delete this activity?',id:'titlebar',__parentSymbol:$.__views.__alloyId229}),
$.__views.titlebar.setParent($.__views.__alloyId229),
$.__views.deleteButton=Alloy.createWidget('tf.app.button','widget',{top:24,left:16,right:16,bottom:8,type:'primary',text:'Delete',enabled:!0,id:'deleteButton',__parentSymbol:$.__views.__alloyId229}),
$.__views.deleteButton.setParent($.__views.__alloyId229),
_delete?$.__views.deleteButton.on('click',_delete):__defers['$.__views.deleteButton!click!_delete']=!0,$.__views.cancelButton=Alloy.createWidget('tf.app.button','widget',{left:16,right:16,bottom:16,type:'secondary',text:'Cancel',enabled:!0,id:'cancelButton',__parentSymbol:$.__views.__alloyId229}),
$.__views.cancelButton.setParent($.__views.__alloyId229),
_cancel?$.__views.cancelButton.on('click',_cancel):__defers['$.__views.cancelButton!click!_cancel']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
$.titlebar.title.wordWrap=!0;
},

_cancel=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_delete=function(){
_hide(function(){
$.trigger('close',{
type:'delete',
source:$});

});
},

_show=function(){
$.deleteModal.left=void 0,
$.deleteModal.animate({
opacity:1,
duration:200});

},

_hide=function(callback){
$.deleteModal.animate({
opacity:0,
duration:200},
function(){
$.deleteModal.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.deleteButton!click!_delete']&&$.__views.deleteButton.on('click',_delete),__defers['$.__views.cancelButton!click!_cancel']&&$.__views.cancelButton.on('click',_cancel),



_.extend($,exports);
}

module.exports=Controller;