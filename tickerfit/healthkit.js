"use strict";
var Q = require("vendor/q"),
    startTime = new Date,
    initialised = !1;
if (!1) var mod = require("com.tickerfit.activity");

function datePredicate(startDate, endDate) {
    return {
        datePredicate: [xcodeDate(startDate), xcodeDate(endDate)]
    };
}

function xcodeDate(d) {
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
var Query = function(quantityType, limit, predicate) {
        this.quantityType = quantityType,
            this.limit = limit,
            this.predicate = predicate;
    },
    _isSupported = function() {
        return mod.isSupported();
    },
    _isAutoStarted = function() {
        return mod.isAutoStarted();
    },
    readTypes = {
        HKCategoryType: [],
        HKCharacteristicType: [],
        HKCorrelationType: [],
        HKQuantityType: ["HKQuantityTypeIdentifierStepCount"],
        HKWorkoutType: []
    },
    writeTypes = {
        HKCategoryType: [],
        HKCharacteristicType: [],
        HKCorrelationType: [],
        HKQuantityType: [],
        HKWorkoutType: []
    },
    _init = function() {
        var defer = Q.defer();
        return initialised ? (LOGGER.debug("INIT - ALREADY INITIALISED"), defer.resolve({ success: !0 })) : (initialised = !0, LOGGER.debug("INIT"), mod.authorize(writeTypes, readTypes, function(res) { _.defer(function() { 1 == res.success ? (LOGGER.debug("INIT - OK"), defer.resolve({ success: !0, result: res })) : (LOGGER.warn("INIT - NOT OK"), defer.reject({ success: !1, openSettings: !0, error: "Problem authorising Health data access", result: res })) }) })), defer.promise;
    },
    lastCheckPermsOK = 0,
    _checkPermissions = function() {
        var defer = Q.defer();
        try {
            LOGGER.debug("CHECK PERMS"),
                1e4 < new Date().getTime() - lastGotActivities && 1e4 < new Date().getTime() - lastCheckPermsOK ? mod.controlPermissions(writeTypes, readTypes, function(res) {
                    _.defer(function() {
                        1 == res.success ? (lastCheckPermsOK = new Date().getTime(), LOGGER.debug("CHECK PERMS - OK"), defer.resolve({
                            success: !0,
                            result: res
                        })) : (LOGGER.warn("CHECK PERMS - NOT OK"), defer.reject({
                            success: !1,
                            openSettings: !0,
                            error: "Permissions need to be allowed",
                            result: res
                        }));
                    });
                }) : (LOGGER.debug("CHECK PERMS - IGNORING - All ok within the last 10 secs"), defer.resolve({
                    success: !0
                }));
        } catch (e) {
            LOGGER.warn("CHECK - ERROR"),
                defer.reject({
                    success: !1,
                    openSettings: !0,
                    error: "Permissions need to be allowed"
                });
        }
        return defer.promise;
    },
    lastGotActivities = 0,
    _getActivitySince = function(date) {
        var defer = Q.defer(),
            predicate = new datePredicate(date, new Date()),
            query = new Query("HKQuantityTypeIdentifierStepCount", 0, predicate);
        return LOGGER.debug("GET ACTIVITIES"), mod.getQuantityResult(query, function(res) { _.defer(function() { res.success && 1 == res.success ? (LOGGER.debug("GET ACTIVITIES - OK"), void 0 !== res.dates && 0 < res.dates.length && (lastGotActivities = new Date().getTime()), defer.resolve({ success: !0, result: res })) : (LOGGER.warn("GET ACTIVITIES - NOT OK"), defer.reject({ success: !1, error: "Access not currently allowed", result: res })) }) }), defer.promise;
    },
    _observeSteps = function(callback) {
        mod.observeSteps(function(res) {
                _.defer(callback);
            }),
            mod.enableBackgroundDeliverySteps();
    },
    _notifyStepUpdateCompleted = function() {
        mod.notifyStepUpdateCompleted();
    },
    _stopStepUpdates = function() {
        mod.stopStepUpdates(),
            mod.disableBackgroundDeliverySteps();
    },
    readQueue = [],
    flushing = !1,
    flushReadQueue = function() {
        flushing || (flushing = !0, _flush().finally(function() {
            flushing = !1;
        }));
    },
    _flush = function() {
        var defer = Q.defer();
        if (0 < readQueue.length) {
            var read = readQueue[0];
            read().then(function() {
                readQueue.shift();
            }).then(_flush).then(function() {
                defer.resolve({});
            }).catch(function(err) {
                LOGGER.warn("Problem flushing readQueue: " + JSON.stringify(err)),
                    defer.reject(err);
            });
        } else defer.resolve({});
        return defer.promise;
    },
    _queueRead = function(read, readtimeout) {
        var deferred = Q.defer(),
            queuedRead = function() {
                var defer = Q.defer(),
                    timeout = setTimeout(function() {
                        LOGGER.warn("QUEUED READ - TIMEOUT AFTER:" + readtimeout),
                            deferred.reject({
                                success: !1,
                                error: "Operation timed out"
                            }),
                            defer.resolve({});
                    }, readtimeout);
                return read().then(function(res) { deferred.resolve(res) }).catch(function(err) { deferred.reject(err) }).finally(function() { clearTimeout(timeout), defer.resolve({}) }), defer.promise;
            };
        return readQueue.push(queuedRead), flushReadQueue(), deferred.promise;
    };
module.exports = {
    init: function() {
        return _queueRead(function() {
            return _init();
        }, 6e4);
    },
    isSupported: function() {
        return _isSupported();
    },
    isAutoStarted: function() {
        return _isAutoStarted();
    },
    checkPermissions: function() {
        return _queueRead(function() {
            return _checkPermissions();
        }, 5e3);
    },
    getActivitySince: function(date) {
        return _queueRead(function() {
            return _getActivitySince(date);
        }, 1e4);
    },
    observeSteps: function(callback) {
        return _observeSteps(callback);
    },
    notifyStepUpdateCompleted: function() {
        return _notifyStepUpdateCompleted();
    },
    stopStepUpdates: function() {
        return _stopStepUpdates();
    }
};