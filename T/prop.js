exports.config = _.extend({
    encryptionKey: null,
    allowSync: !0
}, Alloy.CFG.T ? Alloy.CFG.T.prop : {});
var MODULE_NAME = 'prop',
    Util = require('T/util'),
    Securely = Util.requireOrNull('bencoding.securely');
null == Securely ? (Ti.API.warn(MODULE_NAME + ': you are not including the security module, your auth storage is not secure'), module.exports = Ti.App.Properties) : module.exports = Securely.createProperties({
    secret: exports.config.encryptionKey,
    allowSync: exports.config.allowSync,
    debug: !1
});