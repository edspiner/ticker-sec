
exports.config=_.extend({
ua:null,
log:!1},
Alloy.CFG.T?Alloy.CFG.T.ga:{});var

Util=require('T/util'),

AnalyticsGoogle=Util.requireOrNull('ti.ga'),
tracker=null;

function track(method,what){
if(null!==tracker&&!
_.isEmpty(what)){

!0===exports.config.log&&
Ti.API.trace('GA: Track',method,what);


try{
tracker['add'+method](what);
}catch(err){
Ti.API.error('GA: Error while calling method '+method,err);
}}
}

exports.trackEvent=function(cat,act,lbl,val){
if(null!==tracker){
var obj;


obj=_.isObject(cat)?cat:

{
category:cat,
action:act,
label:lbl||'',
value:+val||0},



track('Event',obj)}
},

exports.event=exports.trackEvent,

exports.trackScreen=function(name){
if(null!==tracker){
var obj;

try{
tracker.addScreenView(name),
!0===exports.config.log&&
Ti.API.trace('GA: Track','Screen',name);

}catch(err){
Ti.API.error('GA: Error while calling method ScreenView',err);
}}
},

exports.screen=exports.trackScreen,

exports.trackSocial=function(net,act,tar){
if(null!==tracker){
var obj;


obj=_.isObject(net)?net:

{
network:net,
action:act||'share',
target:tar||''},



track('SocialNetwork',obj)}
},

exports.social=exports.trackSocial,

exports.trackTiming=function(cat,time,name,lbl){
if(null!==tracker){
var obj;


obj=_.isObject(cat)?cat:

{
category:cat,
time:time,
name:name||'',
label:lbl||''},



track('Timing',obj)}
},

exports.time=exports.trackTiming,

exports.trackException=function(description,fatal){
if(null!==tracker){
var obj;


obj=_.isObject(description)?description:

{
description:description,
fatal:!!fatal},



track('Exception',obj)}
},

exports.exception=exports.trackException,

exports.setTrackerUA=function(ua){
Ti.API.debug('GA: Initialized with UA = '+ua),
tracker=AnalyticsGoogle.createTracker({
trackingId:ua,
useSecure:!0});

},

null==exports.config.ua?







Ti.API.error('GA: initialization failed, invalid UA'):null==AnalyticsGoogle?Ti.API.error('GA: initialization failed, unable to find module'):(exports.setTrackerUA(exports.config.ua),AnalyticsGoogle.setTrackUncaughtExceptions());