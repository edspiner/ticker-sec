"use strict";
var refreshPromise,
    messages,
    unreadOnly,
    pageSize, Q = require("vendor/q"),
    refreshing = !1,
    initialised = !1,
    cus = require("services/current_user_service"),
    setMessageInfo = function(unreadOnly, info) {
        var obj = unreadOnly ? { messagesUnread: info } : { messages: info };
        cus.save(obj),
            _.defer(function() {
                unreadOnly ? DISPATCHER.trigger("tf:messages.unread.info", info) : DISPATCHER.trigger("tf:messages.info", info);
            });
    },
    _refreshMessages = function(unreadOnly, pageSize) {
        if (!refreshing) {
            messages = void 0,
                refreshing = !0;
            var messagesCollection = Alloy.createCollection("messages");
            unreadOnly && (messagesCollection.unreadOnly = !0),
                pageSize !== void 0 && (messagesCollection.perPage = Math.max(pageSize, 1)),
                refreshPromise = messagesCollection.fetch({
                    pid: cus.singleton().get("userId")
                }).
            then(function(msgs) {
                    var filtered = [];
                    return msgs && (_.forEach(msgs, function(m) { m.id && filtered.push(m) }), messages = filtered), setMessageInfo(messagesCollection.unreadOnly, messagesCollection.pageInfo()), filtered;
                }),
                refreshPromise.finally(function(e) {
                    refreshing = !1;
                });
        }
        return refreshPromise;
    },
    _getMessages = function(unreadOnly, pageSize) {
        initialised || (initialised = !0, _initListeners());
        var deferred = Q.defer();
        return _refreshMessages(unreadOnly, pageSize).finally(function() { deferred.resolve(messages) }), deferred.promise;
    },
    _initListeners = function() {
        Ti.App.addEventListener("tf:life.cycle.loggedin", function(user) {
                _refreshMessages(!0, 0);
            }),
            Ti.App.addEventListener("tf:life.cycle.resume", function() {
                require("bootstrap/lifecycle").isLoggedIn() && _refreshMessages(!0, 0);
            });
    },
    _setRead = function(ids, categories, all) {
        var cats = "";
        return _.forEach(categories, function(c) { 0 < cats.length && (cats += ","), cats += c }), Alloy.createModel("messages_read", {
            urlParams: {
                pid: cus.singleton().get("userId"),
                categories: cats,
                all: all
            }
        }).
        save({ array: ids });
    };
module.exports = {
    getMessages: _getMessages,
    refreshMessages: function(unreadOnly, pageSize) {
        _refreshMessages(unreadOnly, pageSize);
    },
    setMessagesRead: _setRead
};