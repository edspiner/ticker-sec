var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;




function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){





if(require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='navigation',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.appWrap=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,top:0,left:0,zIndex:0,height:'100%',id:'appWrap'}),

$.__views.appWrap&&$.addTopLevelView($.__views.appWrap),
$.__views.navbar=Alloy.createWidget('tf.app.navbar','widget',{id:'navbar',__parentSymbol:$.__views.appWrap}),
$.__views.navbar.setParent($.__views.appWrap),
$.__views.content=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,id:'content'}),

$.__views.appWrap.add($.__views.content),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';

var animation=require('alloy/animation');


$.prop={},

$.prop.historyStack=void 0,
$.prop.historyStackOptions=void 0,
$.prop.historyLimit=20,
$.prop.index=void 0,
$.prop.indexOptions=void 0,
$.prop.defaultOpenTransition={
transition:'none',
transitionColor:'#fff',
duration:150},

$.prop.defaultBackTransition={
transition:'none',
transitionColor:'#fff',
duration:150},

$.prop.confirmOnExit=!0,
$.prop.backEnabled=!0,
$.prop.drawerEnabled=!1,
$.prop.openOnInit=!0,
$.prop.top=0,
$.prop.mainViewHasBackButton=!1,
$.prop.backgroundColor='transparent',


$.transitions={},
$.mainWindow=void 0,

$.previous={
controller:void 0,
options:void 0,
view:void 0},


$.current={
controller:void 0,
options:void 0,
view:void 0},


exports.cleanup=function(){
LOGGER.debug('NAV CONTROLLER CLEANUP!'),
$.prop.handleClose&&
$.prop.handleClose(),

DISPATCHER.off('tf:app.back',exports.back),
DISPATCHER.off('tf:navbar.right.click',exports.rightAction);
},


exports.init=function(args){

LOGGER.debug('Initializing navigation controller...'),

$.appWrap.top=args.top,


$.prop.historyStack=[],
$.prop.historyStackOptions=[],


$.mainWindow=args.mainWindow,
$.mainWindow.addEventListener('close',exports.cleanup),
delete args.mainWindow,



exports.bindBack(),


DISPATCHER.on('tf:navbar.right.click',exports.rightAction),
DISPATCHER.on('tf:app.back',exports.back);


var os=require('platform/os'),
dimension=require('platform/dimension'),
statusBarHeight=dimension.statusBarHeightDp(),
navBarHeight=dimension.navBarHeightDp();


$.content.top=os.isIOS7Plus()?statusBarHeight+navBarHeight:

navBarHeight;



var options={
backEnabled:args.backEnabled,
drawerEnabled:args.drawerEnabled,
rightAction:args.rightAction,
title:args.title};







for(var option in delete args.drawerEnabled,delete args.backEnabled,delete args.rightAction,delete args.title,args)
exports.set(option,args[option]);



var contentView=$.getView(),
zIndex=contentView.zIndex||0;

contentView.zIndex=++zIndex,

$.prop.handleClose=$.prop.handleClose,

$.mainWindow.add(contentView),


$.mainWindow.addEventListener('open',function onOpen(){
$.mainWindow.removeEventListener('open',onOpen),

exports.home(options,function(){!1;



});
}),
$.prop.openOnInit&&
$.mainWindow.open(),



LOGGER.debug('Navigation controller initialization complete');
},


exports.get=function(property){return(
$.prop.hasOwnProperty(property)?
$.prop[property]:void 0);



},

exports.set=function(property,value){
$.prop[property]=value;
},


exports.getMainWindow=function(){
return $.mainWindow;
};

var handleOptions=function(options){
LOGGER.debug('Handle:'+JSON.stringify(options)),
exports.setBackEnabled(options.backEnabled),
$.prop.backEnabled||
exports.setDrawerEnabled(options.drawerEnabled),

options.rightAction?
exports.showRightAction(options.rightAction):

exports.hideRightAction();

};

exports.open=function(controller,options,callback){

if(exports.fireEvent('nav.openstart'),!controller)
throw new Error('No controller specified');




















if(options=_.extend({},$.prop.defaultOpenTransition,options),'string'==typeof controller?(LOGGER.debug('Opening controller: '+controller+', Options: '+JSON.stringify(options)),controller=Alloy.createController(controller,options),controller.hasOwnProperty('init')&&controller.init()):LOGGER.debug('Opening unknown controller view. Options: '+JSON.stringify(options)),$.current.controller=controller,$.current.options=options,$.current.view=$.current.controller.getView(),0<$.prop.historyStack.length){
var prevIndex=$.prop.historyStack.length-1;
$.previous.controller=$.prop.historyStack[prevIndex],
$.previous.options=$.prop.historyStackOptions[prevIndex],
$.previous.view=$.previous.controller.getView();
}else
$.previous.controller=void 0,
$.previous.options=void 0,
$.previous.view=void 0;


$.prop.historyStackOptions.push(options),
$.prop.historyStack.push(controller);


var transition=options.transition||void 0;

exports.hasTransition(transition)||(
LOGGER.debug('The set transition "'+transition+'" doesn\'t exist, defaulting to: '+$.prop.defaultBackTransition.transition),
transition=$.prop.defaultBackTransition.transition),



options.title&&
exports.setTitle(options.title),


$.transitions[transition]($.current.view,$.previous.view,options,function(){
handleOptions(options),

0<$.prop.historyLimit&&
exports.clearHistory($.prop.historyLimit),

exports.fireEvent('nav.opencomplete',{
tag:$.current.controller.TAG}),


callback&&
callback();

});
},


exports.back=function(newOptions,callback){





if(newOptions||(newOptions={}),1>=$.prop.historyStack.length)


return LOGGER.debug('At end of historyStack, closing application'),exports.exit(),!0;

LOGGER.debug('Going back in the history stack from:'+$.current.controller.TAG),
exports.fireEvent('nav.backstart',{
tag:$.current.controller.TAG}),




$.previous.controller=$.prop.historyStack.pop(),
$.previous.options=$.prop.historyStackOptions.pop(),
$.previous.view=$.previous.options.hasOwnProperty('view')?$.previous.options.view:$.previous.controller.getView();


var curIndex=$.prop.historyStack.length-1;
$.current.controller=$.prop.historyStack[curIndex],
$.current.options=$.prop.historyStackOptions[curIndex],
$.current.view=$.current.options.hasOwnProperty('view')?$.current.options.view:$.current.controller.getView();


var options=_.extend({},$.current.options,$.prop.defaultBackTransition);
options=_.extend({},options,newOptions),

handleOptions(options),

options.title&&
exports.setTitle(options.title);


var transition=options.transition||void 0;

exports.hasTransition(transition)||(
LOGGER.debug('The set transition "'+transition+'" doesn\'t exist, defaulting to: '+$.prop.defaultBackTransition.transition),
transition=$.prop.defaultBackTransition.transition),



$.transitions[transition]($.current.view,$.previous.view,options,function(){
$.previous.controller.destroy(),
$.previous.controller=void 0,
$.previous.options=void 0,
$.previous.view=void 0,
exports.fireEvent('nav.backcomplete',{
tag:$.current.controller.TAG}),



callback&&
callback();

});
},


exports.home=function(options,callback){

options=options?_.extend({},$.prop.indexOptions,options):

$.prop.indexOptions,

exports.open($.prop.index,options,callback);
},


exports.addTransition=function(name,action){
$.transitions[name]=action;
},

exports.hasTransition=function(name){return!!
name&&


$.transitions.hasOwnProperty(name);

},


exports.clearContent=function(){
for(var child in $.content.children)
$.content.remove($.content.children[child]);

},


exports.hasHistory=function(){
return!!(1<$.prop.historyStack.length);
},



exports.clearHistory=function(historyLimit){






if(historyLimit=historyLimit?1>historyLimit?1:historyLimit:1,1<$.prop.historyStack.length&&historyLimit<$.prop.historyStack.length)for(;
$.prop.historyStack.length>historyLimit;){var
oldController=$.prop.historyStack.shift(),
oldOptions=$.prop.historyStackOptions.shift();

oldController.destroy(),
oldController=null,
oldOptions=null;
}

},


exports.bindBack=function(){
$.mainWindow.onBack=function(){
$.prop.backEnabled&&


exports.back();
};
},


exports.exit=function(){
DISPATCHER.trigger('tf:app.window.current.close',{force:!0});
},



exports.getPrevious=function(){
return $.previous;
},

exports.getPreviousController=function(){
return $.previous.controller;
},

exports.getPreviousOptions=function(){
return $.previous.options;
},

exports.getPreviousView=function(){
return $.previous.view;
},



exports.getCurrent=function(){
return $.current;
},

exports.getCurrentController=function(){
return $.current.controller;
},

exports.getCurrentOptions=function(){
return $.current.options;
},

exports.getCurrentView=function(){
return $.current.view;
},


exports.addEventListener=function(eventName,action){
$.appWrap.addEventListener(eventName,action);
},

exports.removeEventListener=function(eventName,action){
$.appWrap.removeEventListener(eventName,action);
},

exports.fireEvent=function(eventName,params){
$.appWrap.fireEvent(eventName,params);
},

exports.rightAction=function(){
exports.fireEvent('nav.bar.right.clicked',{
tag:$.current.controller.TAG});

},
exports.hideRightAction=function(){
$.navbar.setRightAction();
},
exports.showRightAction=function(text){
$.navbar.setRightAction(text,'tf:navbar.right.click');
},

exports.setActionButtonColor=function(c){
$.navbar.setLeftActionColor(c);
},

exports.showDrawerActionButton=function(){
$.navbar.setLeftAction('DRAWER','tf:app.drawer.open');
},
exports.showBackActionButton=function(){
$.navbar.setLeftAction('BACK','tf:app.back');
},
exports.hideActionButton=function(){
$.navbar.setLeftAction(void 0);
},

exports.setDrawerEnabled=function(enable){
$.prop.drawerEnabled=void 0===enable?$.prop.drawerEnabled:enable,
$.prop.drawerEnabled?
exports.showDrawerActionButton():

exports.hideActionButton();

},

exports.setBackEnabled=function(enable){
$.prop.backEnabled=void 0===enable?$.prop.backEnabled:enable,
$.prop.backEnabled?
exports.showBackActionButton():

exports.hideActionButton();

},

exports.setTitle=$.navbar.setTitle,
exports.showNavBarLine=$.navbar.showUnderline,








$.transitions.crossFade=function(newView,previousView,options,callback){


if(exports.fireEvent('nav.transitionstart'),previousView){var
oldOpacity=previousView.opacity||1,
oldZIndex=previousView.zIndex||0;

previousView.zIndex=9,
newView.opacity=0,
$.content.add(newView),


animation.crossFade(previousView,newView,options.duration,function(){
$.content.remove(previousView),
previousView.opacity=oldOpacity,
previousView.zIndex=oldZIndex,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
}else{
var opacity=newView.opacity||1;
newView.opacity=0,
$.content.add(newView),

newView.animate({
opacity:1,
duration:options.duration},
function(){
newView.opacity=opacity,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
}
},

$.transitions.fade=function(newView,previousView,options,callback){var _Mathfloor=


























Math.floor;if(exports.fireEvent('nav.transitionstart'),previousView){var transitionColor=options.transitionColor?options.transitionColor:'#000',oldZIndex=previousView.zIndex||0,oldOpacity=previousView.opacity||1;previousView.zIndex=9;var transitionView=Ti.UI.createView({backgroundColor:transitionColor,height:$.appWrap.height,width:$.appWrap.width,left:0,top:0,zIndex:8,opacity:1});$.content.add(transitionView),$.content.add(newView),previousView.animate({opacity:0,duration:_Mathfloor(options.duration/2)},
function(){
$.content.remove(previousView),
previousView.opacity=oldOpacity,
previousView.zIndex=oldZIndex,

transitionView.animate({
opacity:0,
duration:_Mathfloor(options.duration/2)},
function(){
$.content.remove(transitionView),
transitionView=null,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
});
}else{
var opacity=newView.opacity||1;
newView.opacity=0,
$.content.add(newView),

newView.animate({
opacity:opacity,
duration:options.duration},
function(){
newView.opacity=opacity,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
}
},

$.transitions.slideInFromRight=function(newView,previousView,options,callback){


if(exports.fireEvent('nav.transitionstart'),previousView){


var previousViewOldLeft=previousView.left||0;

newView.left=$.mainWindow.size.width,
$.content.add(newView),


newView.animate({
left:0,
duration:options.duration}),


previousView.animate({
left:-$.mainWindow.size.width,
duration:options.duration},
function(){
$.content.remove(previousView),
previousView.left=previousViewOldLeft,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
}else
newView.left=$.mainWindow.size.width-1,
$.content.add(newView),

newView.animate({
left:0,
duration:options.duration},
function(){
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});

},

$.transitions.slideInFromLeft=function(newView,previousView,options,callback){


if(exports.fireEvent('nav.transitionstart'),previousView){


var previousViewOldLeft=previousView.left||0;

newView.left=-$.mainWindow.size.width,
$.content.add(newView),


newView.animate({
left:0,
duration:options.duration}),


previousView.animate({
left:$.mainWindow.size.width,
duration:options.duration},
function(){
$.content.remove(previousView),
previousView.left=previousViewOldLeft,
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});
}else
newView.left=-$.mainWindow.size.width+1,
$.content.add(newView),

newView.animate({
left:0,
duration:options.duration},
function(){
exports.fireEvent('nav.transitionend'),

callback&&
callback();

});

},

$.transitions.none=function(newView,previousView,options,callback){
exports.fireEvent('nav.transitionstart'),

previousView?(
$.content.add(newView),
$.content.remove(previousView),
exports.fireEvent('nav.transitionend'),

callback&&
callback()):(


$.content.add(newView),
exports.fireEvent('nav.transitionend'),

callback&&
callback());


},









_.extend($,exports);
}

module.exports=Controller;