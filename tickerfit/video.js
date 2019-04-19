var










lib=Alloy.Globals,

win=null,
videoPlayer=null;

exports.play=function(url,type,callback){return(

"YOUTUBE"===type?void
h264videosWithYoutubeURL(url,function success(e){
return playVideo(e,callback);
},function error(e){
callback({
success:!1,
error:e});

}):

playVideo(url,callback));

};

function getURLArgs(_string){


for(var
pos,args={},pairs=_string.split("&"),i=0;i<pairs.length;i++)
if(pos=pairs[i].indexOf("="),-1!=pos){var
argname=pairs[i].substring(0,pos),
value=pairs[i].substring(pos+1);
args[argname]=unescape(value)}

return args;
}

function h264videosWithYoutubeURL(_youtubeId,_callbackOk,_callbackError){var
youtubeInfoUrl="http://www.youtube.com/get_video_info?video_id="+_youtubeId,
request=Titanium.Network.createHTTPClient({
timeout:1e4});
request.open("GET",youtubeInfoUrl),
request.onerror=function(_event){
_callbackError&&_callbackError({
status:this.status,
error:_event.error});

},
request.onload=function(_event){var
qualities=[],
response=this.responseText,
args=getURLArgs(response);
if(!args.hasOwnProperty("url_encoded_fmt_stream_map"))
_callbackError&&_callbackError();else
{


for(var fmtstring=args.url_encoded_fmt_stream_map,fmtarray=fmtstring.split(","),i=0,j=fmtarray.length;i<j;i++){var
args2=getURLArgs(fmtarray[i]),
type=decodeURIComponent(args2.type);
if(0<=type.indexOf("mp4")){var
url=decodeURIComponent(args2.url),
quality=decodeURIComponent(args2.quality);

qualities.push(url);
}
}
_callbackOk&&_callbackOk(qualities[0]);
}
},
request.send();
}

function getVideo(id){
var client=Ti.Network.createHTTPClient();
client.onload=function(){var
json=decodeURIComponent(decodeURIComponent(decodeURIComponent(decodeURIComponent(this.responseText.substring(4,this.responseText.length))))),
response=JSON.parse(json),
video=response.content.video,
isHighQuality=null!=video.fmt_stream_map,
streamUrl=isHighQuality?video.fmt_stream_map[0].url:video.stream_url;
isHighQuality||
LOGGER.info("using low quality video because fmt_stream_map does not exist in json response, User-Agent probably is not being sent correctly"),

playVideo(streamUrl);
},!1,




client.open("GET","http://m.youtube.com/watch?ajax=1&layout=mobile&tsp=1&utcoffset=330&v="+id),

client.setRequestHeader("Referer","http://www.youtube.com/watch?v="+id),
client.setRequestHeader("User-Agent","Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-I9003 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"),

client.send();
}

function playVideo(url,callback){
var vidOpts={
backgroundColor:"black",
url:url,
autoplay:!0};

videoPlayer=Ti.Media.createVideoPlayer(vidOpts),
videoPlayer.addEventListener("complete",function(e){
exports.close(callback);
});
var winOpts={
backgroundColor:"black",
fullscreen:!0};

win=require("ui/common/custom_window").createWindow(winOpts),

win.onBack=function(){
exports.close(callback);
},

win.add(videoPlayer),
win.open();
}

exports.close=function(callback){
if(videoPlayer){
var meta={
success:!0,
playbackTime:videoPlayer.currentPlaybackTime,
length:videoPlayer.duration};


callback(meta),

videoPlayer.hide(),
videoPlayer.release();

}
null!=win&&
win.close(),

videoPlayer=null,
win=null;
};