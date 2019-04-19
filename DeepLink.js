
(function(activity){
function deeplink(intent){
if("undefined"==typeof APP_LAUNCHED){
var mainActivityIntent=Ti.Android.createIntent({
className:Ti.App.Properties.getString("deeplink.android.launchActivity"),
packageName:Ti.App.id,
flags:Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED|Ti.Android.FLAG_ACTIVITY_SINGLE_TOP});

mainActivityIntent.addCategory(Ti.Android.CATEGORY_LAUNCHER),
activity.startActivity(mainActivityIntent);
}else;
}
var intent=activity.intent;
DEEPLINK=intent.data,
deeplink(intent),
activity.finish();
})(Ti.Android.currentActivity);