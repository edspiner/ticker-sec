
exports.config=_.extend({
antiBounce:!0,
log:!1},
Alloy.CFG.T?Alloy.CFG.T.flow:{});var

Event=require('T/event'),

Navigator=null,
windowsStack=[],
currentController=null,

controllerBouncing={};

exports.currentControllerName=null,

exports.currentControllerArgs=null,

exports.event=function(name,cb){
Event.on('flow.'+name,cb);
};

function track($window,route){
require('T/ga').trackScreen(route);

var startFocusTime=null;

$window.addEventListener('focus',function(){
startFocusTime=Date.now();
}),

$window.addEventListener('blur',function(){
null===startFocusTime||
require('T/ga').trackTiming(route,Date.now()-startFocusTime);
});
}

function open(name,args,openArgs,route,useNav){








if(args=args||{},openArgs=openArgs||{},route=route||name,exports.config.log&&Ti.API.trace('Flow: opening controller <'+name+'>'),name in controllerBouncing)

return void Ti.API.warn('Flow: Trying to open twice the controller <'+name+'> - avoided by anti bounce system');


controllerBouncing[name]=!0,

setTimeout(function(){
delete controllerBouncing[name];
},500);

var controller=Alloy.createController(name,args);
exports.setCurrentController(controller,name,args);

var $window=controller.getView();
























if($window.window&&($window=$window.window),exports.setCurrentWindow($window,route),$window.addEventListener('close',function(){controller.trigger('close'),controller.off(),controller.destroy(),_.isFunction(controller.cleanup)&&controller.cleanup(),controller=null,$window=null}),$window.addEventListener('open',function(){delete controllerBouncing[name],controller.trigger('open')}),!useNav)









_.isFunction(controller.open)?
controller.open(openArgs):

$window.open(openArgs);else if(/NavigationWindow/.test(Navigator.apiName))Navigator.openWindow($window,openArgs);else if('Ti.UI.Tab'===Navigator.apiName)Navigator.open($window,openArgs);else throw new Error('Flow: incompatible navigator');



return controller;
}

function onWindowClose(e){
var route=e.source._route;
Event.trigger('flow.close',{
route:route});


var index=-1;
for(var k in windowsStack)
if(windowsStack[k]._route===route)

return void windowsStack.splice(+k,1);


}

exports.startup=function(controller,nav,win,controllerName,controllerArgs){
windowsStack=[],

exports.setCurrentWindow(win,'/'+controllerName),
exports.setCurrentController(controller,controllerName,controllerArgs),
exports.setNavigationController(nav,!0);
},

exports.openDirect=function(name,args,openArgs,route){
return open(name,args,openArgs,route,!1);
},

exports.open=function(name,args,openArgs,route){
if(null===Navigator)
throw new Error('Flow: A Navigator is not defined yet. You have to call Flow.setNavigationController upfront.');


return open(name,args,openArgs,route,!0);
},

exports.close=function(){
null===Navigator||(

windowsStack=[],
Navigator.close(),
Navigator=null);
},

exports.setCurrentController=function(controller,name,args){
currentController=controller,
exports.currentControllerName=name,
exports.currentControllerArgs=args;
},

exports.getCurrentController=function(){
return currentController;
},

exports.setCurrentWindow=function($window,route){
$window._route=route,
windowsStack.push($window),

track($window,route),

$window.addEventListener('close',onWindowClose);
},

exports.getWindows=function(){
return windowsStack;
},

exports.getCurrentWindow=function(){
return _.last(windowsStack);
},

exports.setNavigationController=function(nav,openNow){
Navigator=nav,
!0===openNow&&
Navigator.open();

},

exports.getNavigationController=function(){
return Navigator;
},

exports.closeAllWindowsExceptFirst=function(){
if(!(2>windowsStack.length)){



for(var wins=_.clone(windowsStack),i=wins.length-2;0<i;i--)
wins[i].close({animated:!1});

wins[wins.length-1].close()}
};