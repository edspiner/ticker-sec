
Alloy.Globals.SCREEN_WIDTH=!1?Ti.Platform.displayCaps.platformWidth:Ti.Platform.displayCaps.platformWidth/Ti.Platform.displayCaps.logicalDensityFactor,
Alloy.Globals.SCREEN_HEIGHT=!1?Ti.Platform.displayCaps.platformHeight:Ti.Platform.displayCaps.platformHeight/Ti.Platform.displayCaps.logicalDensityFactor,

Alloy.Globals.SCREEN_DENSITY=!0?Ti.Platform.displayCaps.logicalDensityFactor:Titanium.Platform.displayCaps.dpi/160,
Alloy.Globals.SCREEN_RETINA=2==Alloy.Globals.SCREEN_DENSITY;