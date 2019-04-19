"use strict";

exports.getIconCircleSize=function(){
return 350>Alloy.Globals.Style.Size.Width.pct100?108:140;
},

exports.getBorderRadius=function(){
return 350>Alloy.Globals.Style.Size.Width.pct100?54:70;
},

exports.getIconFontSize=function(){
return 350>Alloy.Globals.Style.Size.Width.pct100?54:72;
},

exports.getBackgroundColor=function(exercise){return(

"Walking"===exercise?
"#ffebca":
"Running"===exercise?
"#ddfdc7":
"Cycling"===exercise?
"#ff6ef2":
"Gym"===exercise?
"#c7d6fd":
"Cardio"===exercise?
Alloy.Globals.Style.Color.RedPink:
"Sport"===exercise?
"#5cecc5":
"Swimming"===exercise?
"#6ef1ff":
"Yoga"===exercise?
"#5c9ded":

"#000");

},

exports.getBackgroundOpacity=function(exercise){return(

"Walking"===exercise?
.4:
"Running"===exercise?
.4:
"Cycling"===exercise?
.05:
"Gym"===exercise?
.1:
"Cardio"===exercise?
.1:
"Sport"===exercise?
.1:
"Swimming"===exercise?
.2:
"Yoga"===exercise?
.1:

.5);

},

exports.getIconClass=function(exercise){return(

"Walking"===exercise?
"tf-walking":
"Running"===exercise?
"tf-running":
"Cycling"===exercise?
"tf-cycling":
"Gym"===exercise?
"tf-gym":
"Cardio"===exercise?
"tf-cardio":
"Sport"===exercise?
"tf-sport":
"Swimming"===exercise?
"tf-swimming":
"Yoga"===exercise?
"tf-yoga":

"");

},

exports.getIconSize=function(exercise){return(

"Walking"===exercise?
30:
"Running"===exercise?
35:
"Cycling"===exercise?
30:
"Gym"===exercise?
25:
"Cardio"===exercise?
35:
"Sport"===exercise?
30:
"Swimming"===exercise?
30:
"Yoga"===exercise?
30:

0);

},

exports.getIconColor=function(exercise){return(

"Walking"===exercise?
"#fedfaa":
"Running"===exercise?
"#a4ed71":
"Cycling"===exercise?
"#f056e1":
"Gym"===exercise?
"#a8bdf4":
"Cardio"===exercise?
Alloy.Globals.Style.Color.RedPink:
"Sport"===exercise?
"#4be9be":
"Swimming"===exercise?
"#4bd6e5":
"Yoga"===exercise?
"#4f93e5":

"#fff");

},

exports.getText=function(exercise){return(

"Walking"===exercise?
"Walk":
"Running"===exercise?
"Run":
"Cycling"===exercise?
"Cycle":
"Gym"===exercise?
"Gym":
"Cardio"===exercise?
"Cardio":
"Sport"===exercise?
"Sports":
"Swimming"===exercise?
"Swim":
"Yoga"===exercise?
"Yoga":

"");

},

exports.getLabelColor=function(exercise){return(


Alloy.Globals.Style.Color.DarkerSilver);

};