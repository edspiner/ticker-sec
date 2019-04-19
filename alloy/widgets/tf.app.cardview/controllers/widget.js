var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.cardview/'+s:
s.substring(0,index)+'/tf.app.cardview/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.cardview');




if(this.__widgetId='tf.app.cardview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{height:Ti.UI.FILL,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'container',layout:'composite'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.cardview=Ti.UI.createScrollView(
{top:0,zIndex:1,opacity:1,id:'cardview',scrollType:'vertical',layout:'vertical'}),

$.__views.container.add($.__views.cardview),
exports.destroy=function(){},




_.extend($,$.__views);var


width,

addTopCard=function(aView,opts,callback,sound){

opts=opts||{},
opts.children=[aView];
var card=Alloy.createWidget('tf.app.cardview','card',opts);


if(aView._card=card,!1){var
views=$.cardview.getChildren(),

newViews=[card.getView()];
_.forEach(views,function(v){
newViews.push(v);
});
}var


shiftDown=function(height){
var animation=Titanium.UI.createAnimation();
animation.duration=250;
var matrix=Ti.UI.create2DMatrix();
matrix=matrix.translate(0,height),
animation.transform=matrix,
$.cardview.animate(animation,showNewCard);
},


showNewCard=function(){var

blob=$.container.toImage(),
image=Ti.UI.createImageView({
image:blob,
height:Ti.UI.FILL,
width:Ti.UI.FILL,
zIndex:999});


$.container.add(image),


$.cardview.animate({
opacity:0},
function(){

$.cardview.removeAllChildren();


var matrix=Ti.UI.create2DMatrix();
matrix=matrix.translate(0,0),
$.cardview.transform=matrix,

_.forEach(newViews,function(v){
$.cardview.add(v);
});var
doneShow=!1,
show=function(){
if(!doneShow){
doneShow=!0;var

doneShowNewCard=!1,
showNewCard=function(){
if(!doneShowNewCard){
doneShowNewCard=!0,
$.cardview.opacity=1,

$.container.remove(image),

sound&&(
sound.stop(),
sound.play());

var newCardShowing=function(){
card.getView().opacity=1,
callback&&_.defer(callback);
};
card.getView().animate({
opacity:1,
duration:500},
function(){
newCardShowing();
})}
};

1>views.length?
showNewCard():(


$.cardview.animate({
opacity:1},
function(){
showNewCard();
}),
setTimeout(showNewCard,500))}

};
show();
});
};

card.getView().opacity=0,


card.getView().addEventListener('postlayout',function handler(){
card.getView().removeEventListener('postlayout',handler),1?



card.getView().animate({
opacity:1,
duration:500},
function(){
card.getView().opacity=1,
callback&&_.defer(callback);
}):shiftDown(card.getView().rect.height);

}),1?










$.cardview.insertAt({view:card.getView(),position:0}):$.cardview.add(card.getView());

},

addCard=function(aView,opts,callback){
opts=opts||{},
opts.children=[aView];
var card=Alloy.createWidget('tf.app.cardview','card',opts);
aView._card=card,
$.cardview.add(card.getView()),
callback();
},

updateCard=function(aView,newView,callback){
if(aView._card){
var card=aView._card;
newView._card=card,
card.setChildren([newView]);
}
callback();
},

removeCard=function(aView,animation,callback){
if(aView._card){
var remove=function(){
$.cardview.remove(aView._card.getView()),
delete aView._card,
callback();
};
animation?
aView._card.getView().animate(animation,remove):


remove();

}else
callback();

},

queue=[],

flushing=!1,

flushQueue=function(){
flushing||(

flushing=!0,
_flush());

},


_flush=function(){
var next=function(){
queue.shift(),
_flush();
};
if(0<queue.length){
var func=queue[0];
func(next);
}else

flushing=!1;

};

exports.setVisibleDimensions=function(w,h){
width=w;
},

exports.addTopCard=function(aView,opts,callback,sound){
var doit=function(done){

var cb=function(){
callback&&callback(),
done();
};
addTopCard(aView,opts,cb,sound);
};
queue.push(doit),
flushQueue();
},

exports.addCard=function(aView,opts,callback){
var doit=function(done){

var cb=function(){
callback&&callback(),
done();
};
addCard(aView,opts,cb);
};
queue.push(doit),
flushQueue();
},

exports.updateCard=function(aView,newView,callback){
var doit=function(done){

var cb=function(){
callback&&callback(),
done();
};
updateCard(aView,newView,cb);
};
queue.push(doit),
flushQueue();
},

exports.removeCard=function(aView,animation,callback){
var doit=function(done){

var cb=function(){
callback&&callback(),
done();
};
removeCard(aView,animation,cb);
};
queue.push(doit),
flushQueue();
},









_.extend($,exports);
}

module.exports=Controller;