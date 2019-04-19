var _obj={},

_makeHandler=function(val,func){
return function(){
return func(val);
};
},

_init=function(f){


for(var map={},i=1;100>=i;i++)
Object.defineProperty(map,"P"+i,{
get:_makeHandler(i,f)});


return map;
};

module.exports={
get:function(context,type,func){



return _obj[context+type]||(_obj[context+type]=_init(func)),_obj[context+type];
}};