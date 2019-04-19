




var Alloy=require("/alloy"),
_=Alloy._,
Backbone=Alloy.Backbone;

























APP_LAUNCHED=!0,

IS_HACKA="Hacka"===Ti.App.name,
IS_TICKERFIT="TickerFit"===Ti.App.name,

IS_HACKA||IS_TICKERFIT||(
	IS_TICKERFIT=!0),




require("bootstrap/init").init(),





T("trimethyl_foreground"),
require("bootstrap/style").preCalculate(),
require("ui/common/progress_indicator").init(),

DISPATCHER.on("tf:reload",function(){
	var w=Alloy.createController("index").getView();
	w.open();
}),


Alloy.Globals.Nav={},
Alloy.Globals.isIPhoneX=!1,






Alloy.Globals.Style.Widget.Home={},
Alloy.Globals.Style.Widget.Home.CounterSize=1.5*Alloy.Globals.Style.Size.Width.grid1,
Alloy.Globals.Style.Widget.Home.CounterDescriptionSize=Alloy.Globals.Style.Widget.Home.CounterSize/
4,
Alloy.Globals.Style.Widget.Home.HeadingSize=Alloy.Globals.Style.Widget.Home.CounterSize/2,

Alloy.Globals.Style.Widget.Drawer={},
Alloy.Globals.Style.Widget.Drawer.Width=360<Alloy.Globals.Style.Size.Width.pct100?300:Math.max(280,Alloy.Globals.Style.Size.Width.pct80);




var scale=Math.min(1.25,Alloy.Globals.Style.Size.Width.pct100/375);
Alloy.Globals.Style.Widget.Activity={},
Alloy.Globals.Style.Widget.Activity.Chart={},
Alloy.Globals.Style.Widget.Activity.TitleFontSize=26*scale,
Alloy.Globals.Style.Widget.Activity.Chart.Width=Math.round(240*scale),
Alloy.Globals.Style.Widget.Activity.Chart.BorderWidth=28*scale,
Alloy.Globals.Style.Widget.Activity.Chart.GoalTop=140*scale,
Alloy.Globals.Style.Widget.Activity.Chart.GoalFontSize=16*scale,
Alloy.Globals.Style.Widget.Activity.Chart.SubGoalTop=160*scale,
Alloy.Globals.Style.Widget.Activity.Chart.SubGoalFontSize=14*scale,
Alloy.Globals.Style.Widget.Activity.Chart.WalkingBottom=145*scale,
Alloy.Globals.Style.Widget.Activity.Chart.RunningBottom=138*scale,
Alloy.Globals.Style.Widget.Activity.Chart.CardioBottom=135*scale,
Alloy.Globals.Style.Widget.Activity.Chart.IconSize=43*scale,
Alloy.Globals.Style.Widget.Activity.Chart.WalkingIconSize=33*scale,
Alloy.Globals.Style.Widget.Activity.Chart.ValueFontSize=36*scale,
Alloy.Globals.Style.Widget.Activity.Chart.Height=Alloy.Globals.Style.Widget.Activity.Chart.Width+16,
Alloy.Globals.Style.Widget.Activity.Chart.Radius=Alloy.Globals.Style.Widget.Activity.Chart.Width/2,

Alloy.Globals.Style.Widget.Activity.Review={},

Alloy.Globals.Style.Widget.Activity.Review.DailyReviewsWidth=500<Alloy.Globals.Style.Size.Width.pct100?436:Alloy.Globals.Style.Size.Width.pct100-64,


Alloy.Globals.Style.Widget.Navbar={},
Alloy.Globals.Style.Widget.Navbar.TitleFontSize=Math.min(22*scale,22),
Alloy.Globals.Style.Widget.Navbar.RightActionFontSize=Math.min(17*scale,17),

Alloy.Globals.Style.Widget.Dialog={},
Alloy.Globals.Style.Widget.Dialog.TitleBarFontSize=Math.min(20*scale,20),

Alloy.Globals.Style.Widget.Mood={},
Alloy.Globals.Style.Widget.Mood.IconSize=Math.min(45*scale,45),
Alloy.Globals.Style.Widget.Mood.TitleFontSize==Math.min(18*scale,18),
Alloy.Globals.Style.Widget.Mood.ChoiceWidth=500<Alloy.Globals.Style.Size.Width.pct100?436:Ti.UI.FILL,

Alloy.Globals.Style.Widget.Routines={},
Alloy.Globals.Style.Widget.Routines.ProgressFontSize=Math.max(11,Math.min(12*scale,12));




var fi=require("bootstrap/flaticon");


Alloy.Globals.Style.ActivityString=fi.activity,
Alloy.Globals.Style.RemindString=fi.remind,
Alloy.Globals.Style.TickString=fi.tick,
Alloy.Globals.Style.ChronoString=fi.chronometer,
Alloy.Globals.Style.CrossString=fi.cross,
Alloy.Globals.Style.DrawerString=fi.drawer,
Alloy.Globals.Style.EmailHollowString=fi.emailHollow,
Alloy.Globals.Style.DownChevronString=fi.downChevron,
Alloy.Globals.Style.StepsString=fi.footsteps,
Alloy.Globals.Style.HappyString=fi.happyFace,
Alloy.Globals.Style.MonitoringString=fi.monitoring,
Alloy.Globals.Style.HeartbeatString=fi.heartbeat,
Alloy.Globals.Style.HelpString=fi.help,
Alloy.Globals.Style.TimeLockString=fi.timeLock,
Alloy.Globals.Style.LogoutString=fi.logout,
Alloy.Globals.Style.KnowledgeString=fi.knowledge,
Alloy.Globals.Style.PasswordString=fi.password,
Alloy.Globals.Style.PinFullString=fi.pinFull,
Alloy.Globals.Style.PlayString=fi.playButton,
Alloy.Globals.Style.StraightString=fi.straightFace,
Alloy.Globals.Style.ProgressString=fi.progress,
Alloy.Globals.Style.DiscoveryString=fi.discover,
Alloy.Globals.Style.SadString=fi.sadFace,
Alloy.Globals.Style.PerformanceString=fi.performance,
Alloy.Globals.Style.MaleString=fi.male,
Alloy.Globals.Style.FemaleString=fi.female,
Alloy.Globals.Style.RightString=fi.rightArrow,
Alloy.Globals.Style.LeftString=fi.leftArrow,
Alloy.Globals.Style.UpString=fi.upArrow,
Alloy.Globals.Style.DownString=fi.downArrow,
Alloy.Globals.Style.BirthdayString=fi.birthday,
Alloy.Globals.Style.RulerString=fi.ruler,
Alloy.Globals.Style.ScalesString=fi.scales,
Alloy.Globals.Style.BuildingString=fi.building,
Alloy.Globals.Style.BMIString=fi.bmi,
Alloy.Globals.Style.AddString=fi.add,
Alloy.Globals.Style.RemoveString=fi.minus;

var afi=require("bootstrap/activities-flaticon");
Alloy.Globals.Style.WalkString=afi.walk,
Alloy.Globals.Style.RunString=afi.run,
Alloy.Globals.Style.CycleString=afi.cycle,
Alloy.Globals.Style.SwimString=afi.swim,
Alloy.Globals.Style.CardioString=afi.cardio,
Alloy.Globals.Style.SportString=afi.sport,
Alloy.Globals.Style.GymString=afi.gym,
Alloy.Globals.Style.YogaString=afi.yoga,
Alloy.Globals.Style.WeightsString=afi.weights,
Alloy.Globals.Style.LinkString=afi.link,

Alloy.Globals.Style.DoctorString=afi.doctor,
Alloy.Globals.Style.SettingsLineString=afi.settingsLine,
Alloy.Globals.Style.SettingsSolidString=afi.settingsSolid,
Alloy.Globals.Style.CheckEmptyString=afi.checkEmpty,
Alloy.Globals.Style.CheckTickString=afi.checkTick,
Alloy.Globals.Style.CircleEmptyString=afi.circleEmpty,
Alloy.Globals.Style.CircleTickString=afi.circleTick,
Alloy.Globals.Style.PillsString=afi.pills,
Alloy.Globals.Style.PillsSolidString=afi.pillsSolid,
Alloy.Globals.Style.PillsBottleString=afi.pillsBottle,
Alloy.Globals.Style.MealString=afi.meal,
Alloy.Globals.Style.MovementString=afi.movement,
Alloy.Globals.Style.SleepString=afi.sleep,
Alloy.Globals.Style.MindString=afi.mind,
Alloy.Globals.Style.RoutineString=afi.routine,
Alloy.Globals.Style.RoutineRepeatString=afi.routineRepeat,
Alloy.Globals.Style.RoutineSetupString=afi.routineSetup,
Alloy.Globals.Style.RoutineAddString=afi.routineAdd,
Alloy.Globals.Style.RoutineRemoveString=afi.routineRemove,
Alloy.Globals.Style.RoutineSearchString=afi.routineSearch,
Alloy.Globals.Style.RoutineTickString=afi.routineTick,
Alloy.Globals.Style.RoutineCrossString=afi.routineCross,
Alloy.Globals.Style.RoutineEditString=afi.routineEdit,
Alloy.Globals.Style.RoutineSelectString=afi.routineSelect,
Alloy.Globals.Style.RoutineResetString=afi.routineReset,
Alloy.Globals.Style.RoutineViewString=afi.routineView,
Alloy.Globals.Style.RoutineStarString=afi.routineStar,
Alloy.Globals.Style.RoutineHeartString=afi.routineHeart,
Alloy.Globals.Style.RoutineTimerString=afi.routineTimer,
Alloy.Globals.Style.RoutineWarningString=afi.routineWarning,
Alloy.Globals.Style.ScheduleSetupString=afi.scheduleSetup,
Alloy.Globals.Style.ScheduleEditString=afi.scheduleEdit,
Alloy.Globals.Style.ScheduleSelectString=afi.scheduleSelect,
Alloy.Globals.Style.ScheduleAddString=afi.scheduleAdd,
Alloy.Globals.Style.ScheduleRemoveString=afi.scheduleRemove,
Alloy.Globals.Style.ScheduleTickString=afi.scheduleTick,
Alloy.Globals.Style.ScheduleCrossString=afi.scheduleCross,
Alloy.Globals.Style.ScheduleWarningString=afi.scheduleWarning,

Alloy.createController("index");