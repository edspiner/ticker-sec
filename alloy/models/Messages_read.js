var model,
    collection, Alloy = require("/alloy"),
    _ = require("/alloy/underscore")._;
"use strict",
exports.definition = {
        config: {
            adapter: {
                type: "restapi"
            }
        },
        extendModel: function(Model) {
            return _.extend(Model.prototype, { url: "MESSAGES_READ", isNew: function() { return !1 }, toJSON: function() { return this.get("array") } }), Model;
        }
    },
    model = Alloy.M("messages_read", exports.definition, []),
    collection = Alloy.C("messages_read", exports.definition, model),
    exports.Model = model,
    exports.Collection = collection;