Ti.Network,
    Ti.Network.registerForPushNotifications,
    exports.config = _.extend({
        driver: 'http',
        autoReset: !0,
        androidModule: 'ti.goosh',
        fakeRemoteDeviceUUID: !1
    }, Alloy.CFG.T ? Alloy.CFG.T.notifications : {});
var MODULE_NAME = 'notifications',
    Event = require('T/event'),
    Util = require('T/util'),
    Router = require('T/router'),
    Q = require('T/ext/q'),
    registered_for_push_notifications = !1;
if (exports.PushModule = null, exports.PushModuleOpt = {}, !1) exports.PushModule = Ti.Network,
    exports.PushModuleOpt.types = [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND];
else
if (!0) exports.PushModule = require(exports.config.androidModule);
else throw new Error(MODULE_NAME + ': unsupported platform');
exports.PushModuleOpt.callback = function(e) {
    if (!0 && _.isString(e.data)) try {
            e.data = JSON.parse(e.data);
        } catch (ex) {
            e.data = {};
        }!0 === exports.config.autoReset && exports.resetBadge(),
        _.isFunction(exports.onReceived) && exports.onReceived(e),
        exports.trigger('received', e);
};
var interactiveCategories = [],
    interactiveCategoriesCallbacks = {},
    INTERACTIVE_NOTIFICATIONS_CAPABLE = !1;
exports.validateToken = function(token) {
        return null != token && 'undefined' != token && 'null' != token && 32 <= token.length;
    },
    exports.onReceived = function(e) {
        Ti.API.info(MODULE_NAME + ': Received', e);
    },
    exports.loadDriver = function(name) {
        return Alloy.Globals.Trimethyl.loadDriver(MODULE_NAME, name, {
            subscribe: function(opt) {},
            unsubscribe: function(opt) {}
        });
    },
    exports.on = exports.event = function(name, cb) {
        Event.on(MODULE_NAME + '.' + name, cb);
    },
    exports.off = function(name, cb) {
        Event.off(MODULE_NAME + '.' + name, cb);
    },
    exports.trigger = function(name, data) {
        Event.trigger(MODULE_NAME + '.' + name, data);
    },
    exports.activate = function(opt) {
        return opt = _.defaults(opt || {}, { success: Alloy.Globals.noop, error: Alloy.Globals.noop }), Q.promise(function(_resolve, _reject) {
            var resolve = function(e) {
                    Ti.API.debug(MODULE_NAME + ': activation success', e),
                        exports.trigger('activation.success', e),
                        opt.success(e),
                        _resolve(e);
                },
                reject = function(e) {
                    Ti.API.error(MODULE_NAME + ': activation error', e),
                        exports.trigger('activation.error', e),
                        opt.error(e),
                        _reject(e);
                };
            if (exports.config.fakeRemoteDeviceUUID) return Ti.API.warn(MODULE_NAME + ': faking activation'), void resolve(exports.config.fakeRemoteDeviceUUID);
            var registerForPushNotifications = function() {
                registered_for_push_notifications ? resolve(exports.PushModule.remoteDeviceUUID) : exports.PushModule.registerForPushNotifications(_.extend(exports.PushModuleOpt, {
                    success: function(e) {
                        registered_for_push_notifications = !0,
                            resolve(e.deviceToken);
                    },
                    error: reject
                }));
            };
            if (INTERACTIVE_NOTIFICATIONS_CAPABLE) {
                var userNotificationsCallback = function(settings) {
                    return (Ti.App.iOS.removeEventListener('usernotificationsettings', userNotificationsCallback), _.isEmpty(settings.types) ? reject({ disabled: !0 }) : void registerForPushNotifications());
                };
                Ti.App.iOS.addEventListener('usernotificationsettings', userNotificationsCallback),
                    Ti.App.iOS.registerUserNotificationSettings({
                        types: [Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE, Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND],
                        categories: interactiveCategories
                    });
            } else registerForPushNotifications();
        });
    },
    exports.deactivate = function() {
        exports.PushModule.unregisterForPushNotifications();
    },
    exports.subscribe = function(channel, data, opt) {
        return opt = _.defaults(opt || {}, { success: Alloy.Globals.noop, error: Alloy.Globals.noop }), Q.promise(function(_resolve, _reject) {
            var resolve = function(e) {
                    Ti.API.debug(MODULE_NAME + ': subscription success', e),
                        exports.trigger('subscription.success', e),
                        opt.success(e),
                        _resolve(e);
                },
                reject = function(e) {
                    Ti.API.error(MODULE_NAME + ': subscription error', e),
                        exports.trigger('subscription.error', e),
                        opt.error(e),
                        _reject(e);
                };
            return (!1 == Ti.Network.online ? reject({
                offline: !0
            }) : void exports.activate().then(function(deviceToken) {
                var driver = exports.loadDriver(exports.config.driver);
                driver.subscribe(_.extend({}, opt, {
                    deviceToken: deviceToken,
                    channel: channel,
                    data: data,
                    success: resolve,
                    error: reject
                }));
            }).fail(reject));
        });
    },
    exports.unsubscribe = function(channel, data, opt) {
        return opt = _.defaults(opt || {}, { success: Alloy.Globals.noop, error: Alloy.Globals.noop }), Q.promise(function(_resolve, _reject) {
            var resolve = function(e) {
                    Ti.API.debug(MODULE_NAME + ': unsubscription success', e),
                        exports.trigger('unsubscription.success', e),
                        opt.success(e),
                        _resolve(e);
                },
                reject = function(e) {
                    Ti.API.error(MODULE_NAME + ': unsubscription error', e),
                        exports.trigger('unsubscription.error', e),
                        opt.error(e),
                        _reject(e);
                };
            if (!1 == Ti.Network.online) return reject({
                offline: !0
            });
            var driver = exports.loadDriver(exports.config.driver),
                device_token = exports.getRemoteDeviceUUID();
            driver.unsubscribe(_.extend({}, opt, {
                deviceToken: device_token,
                channel: channel,
                data: data,
                success: resolve,
                error: reject
            }));
        });
    },
    exports.setBadge = function(value) {
        var proxy = !1 ? Ti.UI.iOS : exports.PushModule;
        proxy.setAppBadge(Math.max(value, 0));
    },
    exports.getBadge = function() {
        var proxy = !1 ? Ti.UI.iOS : exports.PushModule;
        return proxy.getAppBadge();
    },
    exports.resetBadge = function() {
        exports.setBadge(0);
    },
    exports.incBadge = function(value) {
        exports.setBadge(exports.getBadge() + value);
    },
    exports.getRemoteDeviceUUID = function() {
        return (exports.config.fakeRemoteDeviceUUID ? (Ti.API.warn(MODULE_NAME + ': getRemoteDeviceUUID is returning a fake device token'), exports.config.fakeRemoteDeviceUUID) : exports.PushModule.remoteDeviceUUID);
    },
    exports.isRemoteNotificationsEnabled = function() {
        return exports.PushModule.remoteNotificationsEnabled;
    };

function createIntNotifAction(opt) {
    if (null == opt.id) throw new Error(MODULE_NAME + ': interactive notifications must have and ID');
    if (null == opt.title) throw new Error(MODULE_NAME + ': interactive notifications must have a title');
    return Ti.App.iOS.createUserNotificationAction({
        identifier: opt.id,
        title: opt.title,
        activationMode: Ti.App.iOS['USER_NOTIFICATION_ACTIVATION_MODE_' + (!0 == opt.openApplication ? 'FOREGROUND' : 'BACKGROUND')],
        destructive: !!opt.destructive,
        authenticationRequired: !!opt.authenticationRequired
    });
}
exports.addInteractiveNotificationCategory = function(id, dict) {
        if (!1 == INTERACTIVE_NOTIFICATIONS_CAPABLE) return void Ti.API.error(MODULE_NAME + ': unable to create an interactive notification category, not supported');
        var category = Ti.App.iOS.createUserNotificationCategory({
            identifier: id,
            actionsForDefaultContext: dict.map(createIntNotifAction)
        });
        interactiveCategories.push(category),
            interactiveCategoriesCallbacks[id] = dict.callback;
    },
    exports.unmute = function(data) {
        return Q.promise(function(resolve, reject) {
            return (Ti.Network.online ? void exports.loadDriver(exports.config.driver).unmute({
                deviceToken: exports.getRemoteDeviceUUID(),
                data: data,
                success: function(response) {
                    Event.trigger('notifications.unmute.success'),
                        defer.resolve(response);
                },
                error: function(err) {
                    Event.trigger('notifications.unmute.error'),
                        defer.reject(err);
                }
            }) : reject({ offline: !0 }));
        });
    },
    exports.mute = function(data) {
        return Q.promise(function(resolve, reject) {
            return (Ti.Network.online ? void exports.loadDriver(exports.config.driver).mute({
                deviceToken: exports.getRemoteDeviceUUID(),
                data: data,
                success: function(response) {
                    Event.trigger('notifications.mute.success'),
                        defer.resolve(response);
                },
                error: function(err) {
                    Event.trigger('notifications.mute.error'),
                        defer.reject(err);
                }
            }) : reject({ offline: !0 }));
        });
    },
    INTERACTIVE_NOTIFICATIONS_CAPABLE, !0 === exports.config.autoReset && (exports.resetBadge(), Ti.App.addEventListener('resumed', exports.resetBadge));