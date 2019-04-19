"use strict";
var controllerOptions = ["model", "collection", "events"],
    delegateEventSplitter = /^(\S+)\s*(.*)$/,
    platformSpecificEventRegex = /(.*)\[(.+)\]/,
    platformSpecificEventSplitter = /\s*,\s*/,
    currentPlatform = "android",
    ui = require("utils/ui"),
    Controller = function(options) {
        this._sanityCheck(),
            this._configure(options || {}),
            this.initialize.apply(this, arguments),
            this._delegateEvents();
    },
    isPlatformMatch = function(platform) {
        return !!platform && (platform = platform.toLowerCase(), platform === currentPlatform || "ios" === platform && "ipad" === currentPlatform);
    };
_.extend(Controller.prototype, {
        options: {
            CLOSE_WINDOW_TIME_OUT: 3e3
        },
        initialize: function() {},
        closeWindow: function(immediate) {
            if (LOGGER.debug("[Controller] - close window"), immediate) return void ui.getWindow(this.getView()).close();
            var self = this;
            setTimeout(function() {
                ui.getWindow(self.getView()).close();
            }, this.options.CLOSE_WINDOW_TIME_OUT);
        },
        _sanityCheck: function() {
            if (this.render && !this.renderError) throw "Please provide function 'renderError' for handling rendering error";
            if (this._render && !this._renderError) throw "Please provide function '_renderError' for handling rendering error";
            return !0;
        },
        _configure: function(options) {
            this.options && (options = _.extend({}, _.result(this, "options"), options)),
                _.extend(this, _.pick(options, controllerOptions)),
                this.options = options;
        },
        _attachEvent: function(viewId, eventName, method) {
            var view = null;
            if (-1 !== viewId.indexOf(".")) {
                var widgetView = viewId.split(".");
                view = this.getView(widgetView[0]).getView(widgetView[1]);
            } else view = this.getView(viewId);
            view.addEventListener(eventName, method);
        },
        _delegateEvents: function() {
            if (!this.events) return this;
            for (var key in this.events) {
                var method = this.events[key],
                    match = key.match(delegateEventSplitter),
                    eventName = match[1],
                    viewId = match[2];
                if (_.isFunction(method) || (method = this[method]), method && eventName && viewId) {
                    method = _.bind(method, this);
                    var platformSpecificEvents = eventName.match(platformSpecificEventRegex);
                    if (!platformSpecificEvents) LOGGER.debug("[Controller] - add cross platform event listener for: " + eventName),
                        this._attachEvent(viewId, eventName, method);
                    else {
                        eventName = platformSpecificEvents[1];
                        for (var platform, platforms = platformSpecificEvents[2].split(platformSpecificEventSplitter), i = 0; i < platforms.length; i++) platform = platforms[i],
                            isPlatformMatch(platform) && (LOGGER.debug("[Controller] - add platform[" + platform + "] specific event listener for: " + eventName), this._attachEvent(viewId, eventName, method));
                    }
                }
            }
            return this;
        }
    }),
    Controller.extend = function($, protoProps, staticProps) {
        var child, parent = this;
        child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function() {
                return parent.apply(this, arguments);
            },
            _.extend(child, parent, staticProps);
        var Surrogate = function() {
            this.constructor = child;
        };
        return Surrogate.prototype = parent.prototype, child.prototype = new Surrogate, _.extend(child.prototype, $), protoProps && _.extend(child.prototype, protoProps), child.__super__ = parent.prototype, child;
    },
    module.exports = Controller;