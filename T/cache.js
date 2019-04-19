
exports.config=_.extend({
driver:'database'},
Alloy.CFG.T?Alloy.CFG.T.cache:{}),

exports.loadDriver=function(name){
return Alloy.Globals.Trimethyl.loadDriver('cache',name,{
get:function(hash){},
set:function(hash,value){},
remove:function(hash){},
purge:function(hash){}});

},

module.exports=exports.loadDriver(exports.config.driver);