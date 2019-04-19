'use strict';var

messages={
msgPull:'Pull to refresh...',
msgRelease:'Release to refresh...',
msgUpdating:'Updating...'},


CustomScrollView=function(args){var

self=this,
params=_.clone(args),
indicatorTop=params.indicatorTop||0,

scrollView=Ti.UI.createScrollView(_.extend(params,{
height:Ti.UI.FILL,
width:Ti.UI.FILL,
showVerticalScrollIndicator:!0,
showHorizontalScrollIndicator:!1,
layout:'vertical',
backgroundColor:'green'})),


viewIndicator=Ti.UI.createView({
top:indicatorTop,
height:'100dp',
width:Ti.UI.FILL,
backgroundColor:'red'});

scrollView.add(viewIndicator);

var viewCenter=Ti.UI.createView({
opacity:0,
bottom:'11dp',
width:Ti.UI.SIZE,
height:Ti.UI.SIZE});

viewIndicator.add(viewCenter);

var ptrIndicator=Ti.UI.createActivityIndicator({
style:1?Ti.UI.ActivityIndicatorStyle.PLAIN:Ti.UI.ActivityIndicatorStyle.PLAIN});




if(ptrIndicator.hide(),viewCenter.add(ptrIndicator),!1){
var ptrArrow=Ti.UI.createImageView({
width:'12dp',
height:'30dp',
image:'/images/white.png'});

viewCenter.add(ptrArrow),

scrollView.addEventListener('scroll',function(e){
self._offset=e.y,

!self._loading&&!self._pulling&&-20>self._offset&&-100<self._offset&&(
LOGGER.debug('pulling'),
self._pulling=!0,
viewCenter.opacity=1),


!self._loading&&self._pulling&&!self._pulled&&-100>self._offset&&(
LOGGER.debug('pulled'),
self._pulled=!0,
ptrArrow.animate({
transform:Ti.UI.create2DMatrix().rotate(180),
duration:180})),



!self._loading&&self._pulled&&0===self._offset&&(
LOGGER.debug('released'),
scrollView.refresh()),


!self._loading&&self._pulling&&0===self._offset&&(
LOGGER.debug('canceled'),
scrollView.loaded());

}),

scrollView.refresh=function(){
self._loading=!0,
viewCenter.opacity=1,
ptrArrow.hide(),
ptrIndicator.show(),
scrollView.load&&
scrollView.load();

},

scrollView.loaded=function(){
viewCenter.animate({
opacity:0,
duration:300},
function(){
self._pulling=!1,
self._pulled=!1,
self._loading=!1,
ptrArrow.transform=Ti.UI.create2DMatrix(),
ptrArrow.show(),
ptrIndicator.hide();
});
};
}else
self._offset=0,

scrollView.addEventListener('postlayout',function handler(){
self.pullHeight=scrollView.rect.height/3,
scrollView.removeEventListener('postlayout',handler);
}),

scrollView.addEventListener('scroll',function(e){
self._offset=e.y;
}),
scrollView.addEventListener('touchstart',function(e){
var convertedPoint=e.source.convertPointToView(e,scrollView);
convertedPoint&&(
self._start=convertedPoint.y,
self._loading||0!==self._offset?







self._pulled=!1:(LOGGER.debug('pulling'),self._pulled=!0,viewCenter.animate({opacity:1,duration:300})));


}),

scrollView.addEventListener('touchend',function(e){
var convertedPoint=e.source.convertPointToView(e,scrollView);
if(convertedPoint){
self._end=convertedPoint.y;
var diff=self._end-self._start;
!self._loading&&self._pulled&&diff>self.pullHeight&&(
LOGGER.debug('release'),
scrollView.refresh());

}
}),

scrollView.refresh=function(){
self._pulled=!1,
self._loading=!0,
viewCenter.opacity=1,
ptrIndicator.show(),
scrollView.load&&
scrollView.load();

},
scrollView.loaded=function(){
viewCenter.animate({
opacity:0,
duration:300},
function(){
self._pulling=!1,
self._pulled=!1,
self._loading=!1,
ptrIndicator.hide();
});
};


return scrollView.loaded(),scrollView;
};

exports.createScrollView=function(args){
return new CustomScrollView(args);
};