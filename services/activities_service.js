"use strict";
var Q = require("vendor/q"),
    cus = require("services/current_user_service"),
    _deleteActivity = function(activityId) {
        DISPATCHER.trigger("tf:progress.start", {
            id: "delete-activity"
        });
        var deferred = Q.defer(),
            t = Alloy.createModel("activity", {
                urlParams: {
                    pid: cus.singleton().get("userId"),
                    aid: activityId
                },
                id: activityId
            });
        return t.destroy().then(function(resp) { deferred.resolve({}) }).catch(function(error) { DISPATCHER.trigger("tf:progress.stop", { id: "delete-activity" }), LOGGER.error("ERROR: " + JSON.stringify(error)), deferred.reject({}) }).finally(function(result) { LOGGER.info("DONE...") }), deferred.promise;
    };
module.exports = {
    deleteActivity: _deleteActivity
};