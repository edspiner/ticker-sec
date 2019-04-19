
exports.config=_.extend({
protocol:null},
Alloy.CFG.T?Alloy.CFG.T.router:{});var

Util=require('T/util'),
Flow=require('T/flow'),
Q=require('T/ext/q'),

routeRegistry=[];

exports.queue=[],

exports.bypassQueue=!1,

exports.currentUrl=null,

exports.currentRoute=null,

exports.stack=[],

exports.on=function(){var
middlewares=_.toArray(arguments),
key=middlewares.shift(),
callback=middlewares.pop();

routeRegistry.push({
key:key,
callback:callback,
middlewares:middlewares});

},

exports.dispatch=function(url,data){
Ti.API.debug('Router: dispatching <'+url+'>');

var callbackURL=Util.parseAsXCallbackURL(url);


if(callbackURL.path=callbackURL.path.replace(/\/$/g,''),callbackURL.protocol&&exports.config.protocol&&
exports.config.protocol!==callbackURL.protocol)

return Ti.API.warn('Router: protocol mismatch'),!1;



callbackURL.data=data;var

run=!1,
matches=null,
routeDefinition=null;

for(var i in routeRegistry)













if(routeDefinition=routeRegistry[i],_.isString(routeDefinition.key)?run=routeDefinition.key===callbackURL.path:_.isRegExp(routeDefinition.key)?(matches=callbackURL.path.match(routeDefinition.key),run=!!matches,matches&&matches.shift()):_.isFunction(routeDefinition.key)&&(matches=routeDefinition.key(callbackURL.path),run=void 0!==matches),!0==run)break;

































return!0==run?(Ti.API.debug('Router: matched on <'+routeDefinition.key+', '+JSON.stringify(matches)+'>'),_.isFunction(routeDefinition.callback)?(exports.stack.push(url),exports.currentUrl=url,exports.currentRoute=routeDefinition,0<routeDefinition.middlewares.length?routeDefinition.middlewares.reduce(function(soFar,f){return soFar.then(f.bind(callbackURL))},Q(matches)).then(function(){routeDefinition.callback.apply(callbackURL,matches)}).catch(function(err){Ti.API.error('Router: error during route dispatcher',err)}):routeDefinition.callback.apply(callbackURL,matches)):_.isObject(routeDefinition.callback)&&null!=routeDefinition.callback.alias&&exports.dispatch(routeDefinition.callback.alias)):Ti.API.warn('Router: no match for <'+url+'>'),run;
},

exports.go=exports.dispatch,

exports.enqueue=function(url){
Ti.API.debug('Router: enqueuing <'+url+'>'),

exports.bypassQueue?
exports.dispatch(url):

exports.queue.push(url);

},

exports.appendToQueue=function(array){
exports.queue=exports.queue.concat(array);
},

exports.dispatchQueue=function(bypassFromNow){for(
var e=null;
null!=(e=exports.queue.shift());)
Ti.API.debug('Router: dequeuing <'+e+'>'),
exports.dispatch(e);

exports.bypassQueue=!!bypassFromNow;
},

exports.alias=function(url,newUrl){
exports.on(url,{
alias:newUrl});

},

exports.autoMapModel=function(single,plural){
plural=plural||single+'s',

exports.on('/'+plural,function(){
Flow.open(plural,{},{},this.source);
}),

exports.on(new RegExp('/'+plural+'/([0-9]+)'),function(id){
Flow.open(single,{
id:id},
{},this.source);
});
};