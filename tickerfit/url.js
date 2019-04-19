"use strict";
var API_ROOT = "API_ROOT",
    TEMPLATES = {
        DEPLOYMENTS: API_ROOT + "/rest/external/deployments",
        LOGIN: API_ROOT + "/rest/user/login",
        REFRESH_TOKEN: API_ROOT + "/rest/user/refreshAccessToken",
        PATIENT: API_ROOT + "/rest/patients/<%= id %>",
        POINTS: API_ROOT + "/rest/patients/<%= pid %>/points",
        REWARDS: API_ROOT + "/rest/patients/<%= pid %>/rewards",
        CLAIMS: API_ROOT + "/rest/patients/<%= pid %>/rewards/<%= rewardid %>/claims",
        ACHIEVEMENTS: API_ROOT + "/rest/patients/<%= pid %>/achievements",
        BADGE_SUMMARY: API_ROOT + "/rest/patients/<%= pid %>/achievements/badgeSummary",
        METRICS: API_ROOT + "/rest/patients/<%= id %>/metrics",
        METRIC_SAMPLES: API_ROOT + "/rest/patients/<%= id %>/metrics/<%= type %>?startDate=<%= startDate %>&endDate=<%= endDate %>",
        GROUPINGS: API_ROOT + "/rest/practices/groupings?category=<%= category %>",
        PUSH_TOKEN: API_ROOT + "/rest/patients/<%= pid %>/token",
        SHARE_PROGRESS: API_ROOT + "/rest/patients/<%= pid %>/shareProgress",
        EVENT: API_ROOT + "/rest/patients/<%= pid %>/events",
        BULK_EVENTS: API_ROOT + "/rest/patients/<%= pid %>/events/jsonArray",
        ACTIVITY: API_ROOT + "/rest/patients/<%= pid %>/activities/<%= aid %>",
        BULK_ACTIVITIES: API_ROOT + "/rest/patients/<%= pid %>/activities/jsonArray",
        SUMMARY: API_ROOT + "/rest/patients/<%= pid %>/summary?utcOffset=<%= utcOffset %>&days=<%= days %>",
        PRESCRIPTION: API_ROOT + "/rest/patients/<%= pid %>/prescriptions/<%= rxid %>",
        RX: API_ROOT + "/rest/patients/<%= pid %>/rx/<%= rxid %>",
        PROGRAMS: API_ROOT + "/rest/programs",
        ROUTINE: API_ROOT + "/rest/patients/<%= pid %>/routines/<%= rid %>",
        ROUTINES: API_ROOT + "/rest/patients/<%= pid %>/routines",
        ROUTINES_DASHBOARD: API_ROOT + "/rest/patients/<%= pid %>/routines/dashboard?date=<%= date %>",
        ROUTINE_DASHBOARD: API_ROOT + "/rest/patients/<%= pid %>/routines/dashboard/<%= rid %>?status=<%= status %>&date=<%= date %>",
        ROUTINE_DASHBOARD_TASK: API_ROOT + "/rest/patients/<%= pid %>/routines/dashboard/<%= rid %>/tasks/<%= tid %>?status=<%= status %>&date=<%= date %>",
        TASK: API_ROOT + "/rest/patients/<%= pid %>/tasks/<%= tid %>",
        TASKS: API_ROOT + "/rest/patients/<%= pid %>/tasks",
        CONTENTACCESSTOKEN: API_ROOT + "/rest/content/<%= cid %>/accessToken?rxProgramId=<%= rxProgramId %>&programItemId=<%= programItemId %>",
        RX_PROGRAM_ITEM_PROGRESS: API_ROOT + "/rest/patients/<%= pid %>/rx/<%= rxid %>/rxPrograms/<%= rxProgramId %>/progress",
        STATS: API_ROOT + "/rest/patients/<%= pid %>/stats?utcOffset=<%= utcOffset %>&days=<%= days %>",
        PROGRESS: API_ROOT + "/rest/patients/<%= pid %>/progress?utcOffset=<%= utcOffset %>",
        FEATURE_TOGGLES: API_ROOT + "/rest/patients/<%= pid %>/featureToggles?utcOffset=<%= utcOffset %>",
        DEFERRED_LINK: API_ROOT + "/rest/link/deferred?family=<%= family %>&os=<%= os %>&ver=<%= ver %>&utc=<%= utc %>&screen=<%= screen %>&lang=<%= lang %>&emailHint=<%= emailHint %>&nameHint=<%= nameHint %>",
        DEEPLINK: API_ROOT + "/rest/link?ref=<%= ref %>&expire=<%= expire %>",
        PATIENT_PROFILE: API_ROOT + "/rest/patients/<%= pid %>/profile?verificationCode=<%= verificationCode %>",
        PATIENT_PASSWORD_SET: API_ROOT + "/rest/external/setPassword?pid=<%= pid %>&verificationCode=<%= verificationCode %>",
        PATIENT_LOGIN_EMAIL: API_ROOT + "/rest/external/requestLogin?emailAddress=<%= email %>",
        PATIENT_VALIDATE_EMAIL: API_ROOT + "/rest/external/validate?emailAddress=<%= email %>",
        GUARDIANS: API_ROOT + "/rest/patients/<%= id %>/guardians",
        GUARDIAN_INVITE: API_ROOT + "/rest/patients/<%= id %>/guardians/invite",
        GUARDIAN_SHARING: API_ROOT + "/rest/patients/<%= id %>/guardians/<%= gid %>?sharing=<%= sharing %>",
        GUARDIAN_NUDGE: API_ROOT + "/rest/patients/<%= id %>/guardians/<%= gid %>/nudge?type=<%= nudgeType %>",
        LINKED_ACCOUNT: API_ROOT + "/rest/patients/<%= id %>/linkedAccounts?type=<%= type %>&enabled=<%= enable %>",
        ACTIVITY_SYNC: API_ROOT + "/rest/patients/<%= pid %>/activities/requestSync",
        MESSAGES: API_ROOT + "/rest/patients/<%= pid %>/messages",
        MESSAGES_READ: API_ROOT + "/rest/patients/<%= pid %>/messages?categories=<%= categories %>&all=<%= all %>"
    },
    _update = function() {
        var apiRoot = require("bootstrap/env").getApiURL();
        for (var key in TEMPLATES) {
            var url = TEMPLATES[key].replace(API_ROOT, apiRoot);
            module.exports[key] = url;
        }
    };
Ti.App.addEventListener("tf:env.changed", function() {
        _update();
    }),
    _update();