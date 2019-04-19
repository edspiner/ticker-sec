"use strict";
var _buildParams = function(prefix, obj, add) {
    if (_.isArray(obj)) _.each(obj, function(element, index) {
        _buildParams(prefix + "[" + ("object" == typeof element ? index : "") + "]", element, add);
    });
    else
    if (_.isObject(obj)) {
        var name;
        for (name in obj) _buildParams(prefix + "[" + name + "]", obj[name], add);
    } else add(prefix, obj);
};

function guid() {
    function s4() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}
module.exports = {
    param: function(obj) {
        var prefix,
            s = [],
            add = function(key, value) {
                value = _.isFunction(value) ? value() : null === value ? "" : value,
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            };
        if (_.isArray(obj) || !_.isObject(obj)) _.each(obj, function() {
            add(this.name, this.value);
        });
        else
            for (prefix in obj) _buildParams(prefix, obj[prefix], add);
        return s.join("&").replace(/%20/g, "+");
    },
    getResourceFile: function(path) {
        var fs = Ti.Filesystem,
            filepath = path;
        if (fs.getFile(filepath).exists()) return filepath;
        if (filepath = Ti.Filesystem.resourcesDirectory + filepath, fs.getFile(filepath).exists()) return filepath;
        throw new Error("Resource file doesn't exist " + path);
    },
    guid: guid
};