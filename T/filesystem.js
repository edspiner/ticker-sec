
Ti.Filesystem;

var Permissions=require('T/permissions/storage');

function recursiveIterator(file){
return _.map(file.getDirectoryListing(),function(item){
var curFile=Ti.Filesystem.getFile(file.nativePath,item);return(
curFile.isDirectory()?
{
path:curFile.nativePath,
content:recursiveIterator(curFile)}:


{
path:curFile.nativePath});


});
}

function canWrite(file){
return file.exists()&&file.writable||file.parent.writable;
}

exports.listDirectoryRecursive=function(path){
var file=Ti.Filesystem.getFile(path);return(
file.isDirectory()?



recursiveIterator(file):null);
},

exports.move=function(src,dest,ow){
var srcFile=Ti.Filesystem.getFile(src);
if(!srcFile.exists())
return!1;


var destFile=Ti.Filesystem.getFile(dest);




return!0===ow&&destFile.exists()&&destFile.deleteFile(),srcFile.move(dest);
},

exports.getSize=function(path){
var file=path.nativePath?path:Ti.Filesystem.getFile(path);return(
file.isDirectory()?



_.reduce(file.getDirectoryListing(),function(carry,f){

return carry+=exports.getSize(Ti.Filesystem.getFile(file.nativePath,f)),carry;
},0):file.size);
},

exports.write=function(opt){






function writeFile(){
var res=opt.file.write(opt.data,!!opt.append);

res?opt.success():opt.error();
}_.defaults(opt,{append:!1,success:Alloy.Globals.noop,error:Alloy.Globals.noop}),

canWrite(opt.file)?
writeFile():

Permissions.request(writeFile,opt.error);

},

exports.createDirectory=function(opt){





function writeDir(){
if(opt.file.exists()&&opt.file.isDirectory())
Ti.API.warn('Filesystem: directory already exists. Skipping.'),
opt.success();else
{
var res=opt.file.createDirectory();

res?opt.success():opt.error();
}
}_.defaults(opt,{success:Alloy.Globals.noop,error:Alloy.Globals.noop}),

canWrite(opt.file)?
writeDir():

Permissions.request(writeDir,opt.error);

},

exports.deleteDirectory=function(opt){





function deleteDir(){
var res=opt.file.deleteDirectory(opt.recursive);

res?opt.success():opt.error();
}_.defaults(opt,{success:Alloy.Globals.noop,error:Alloy.Globals.noop}),

canWrite(opt.file)?
opt.file.exists()?



deleteDir():(Ti.API.warn('Filesystem: directory does not exist. Skipping.'),opt.success()):


Permissions.request(deleteDir,opt.error);

};