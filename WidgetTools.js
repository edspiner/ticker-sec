
var _TI_PROPS=["scrollable","backgroundColor","borderColor","borderRadius","borderWidth","bottom","bubbleParent","center","color","height","layout","left","opacity","right","tintColor","top","touchEnabled","transform","visible","width","zIndex"];

exports.cleanArgs=function(args){



return delete args.id,delete args.__parentSymbol,delete args.children,args;
},

exports.setTiProps=function(args,component){
if(component)


for(var args=args||{},prop="",i=0;i<_TI_PROPS.length;i++)
prop=_TI_PROPS[i],
"undefined"!=typeof args[prop]&&(
component[prop]=args[prop]);


};