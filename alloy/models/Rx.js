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
            return _.extend(Model.prototype, { url: "RX" }), Model;
        }
    },
    model = Alloy.M("rx", exports.definition, []),
    collection = Alloy.C("rx", exports.definition, model),
    exports.Model = model,
    exports.Collection = collection;