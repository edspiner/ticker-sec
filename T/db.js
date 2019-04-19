
exports.config=_.extend({
password:null},
Alloy.CFG.T?Alloy.CFG.T.db:{});var

MODULE_NAME='db',

Util=require('T/util');

if(exports.config.password){
var EncDatabase=Util.requireOrNull('appcelerator.encrypteddatabase');
null==EncDatabase?(



Ti.API.warn(MODULE_NAME+': you are not including the appcelerator.encrypteddatabase module, your database  is not secure. Falling back to Ti.Database'),
module.exports=Ti.Database):(EncDatabase.password=exports.config.password,module.exports=EncDatabase);

}else
module.exports=Ti.Database;