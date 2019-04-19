

var Matrix=require("T/matrix");

exports.animateFromTo=function(view,a,b,callback){
callback=callback||Alloy.Globals.noop,
view.applyProperties(a),
_.defer(function(){
view.animate(b,callback);
});
},

exports.fadeIn=function(opt){




return _.defaults(opt,{duration:400}),exports.animateFromTo(opt.view,{
opacity:0},
{
opacity:1,
duration:opt.duration},
opt.callback);
},

exports.fadeOut=function(opt){




return _.defaults(opt,{duration:400}),exports.animateFromTo(opt.view,{
opacity:1},
{
opacity:0,
duration:opt.duration},
opt.callback);
},

exports.fadeInWithTransform=function(opt){




return _.defaults(opt,{duration:400}),exports.animateFromTo(opt.view,{
opacity:0,
transform:opt.startTransform},
{
opacity:1,
transform:opt.endTransform,
duration:opt.duration},
opt.callback);
},

exports.fadeInUp=function(opt){





return _.defaults(opt,{duration:400,offset:50}),exports.fadeInWithTransform({
view:opt.view,
startTransform:Matrix.i().t(0,-opt.offset).matrix,
endTransform:Matrix.i().matrix,
duration:opt.duration},
opt.callback);
},

exports.fadeInLeft=function(opt){





return _.defaults(opt,{duration:400,offset:50}),exports.fadeInWithTransform({
view:opt.view,
startTransform:Matrix.i().t(-opt.offset,0).matrix,
endTransform:Matrix.i().matrix,
duration:opt.duration},
opt.callback);
},

exports.fadeInBottom=function(opt){





return _.defaults(opt,{duration:400,offset:50}),exports.fadeInWithTransform({
view:opt.view,
startTransform:Matrix.i().t(0,opt.offset).matrix,
endTransform:Matrix.i().matrix,
duration:opt.duration},
opt.callback);
},

exports.fadeInRight=function(opt){





return _.defaults(opt,{duration:400,offset:50}),exports.fadeInWithTransform({
view:opt.view,
startTransform:Matrix.i().t(opt.offset,0).matrix,
endTransform:Matrix.i().matrix,
duration:opt.duration},
opt.callback);
},

exports.upAndDown=function(opt){var
self={},
run=!0;

self.stop=function(){
run=!1;
},

_.defaults(opt,{
duration:1e3,
y:10});


var index=0;















return function loop(){!1==run||(index=(index+1)%2,_.defer(function(){var newY=index?opt.y:0;opt.view.animate({transform:Matrix.i().t(0,newY).matrix,duration:opt.duration},loop)}))}(),self;
},

exports.fallDownForGravity=function(opt){var
self={},
run=!0,
timeout=null;

self.stop=function(){
clearTimeout(timeout),
run=!1;
},

_.defaults(opt,{
friction:.6,
potentialEnergy:10,
y:60,
gravity:9.81,
callback:Alloy.Globals.noop});var


U=+opt.potentialEnergy,

animationDuration=1e3*(2/opt.gravity),

index=-1,
y=null;





























return function loop(){return!1==run?void 0:0===U?void opt.callback():void _.defer(function(){index++,1==index%2?(U=Math.floor(U-U*opt.friction),y=opt.y-U/opt.potentialEnergy*opt.y):y=opt.y;var curve=Titanium.UI["ANIMATION_CURVE_EASE_"+(0==index%2?"IN":"OUT")];opt.view.animate({duration:animationDuration,curve:curve,transform:Matrix.i().t(0,y).matrix},loop)})}(),self;
};