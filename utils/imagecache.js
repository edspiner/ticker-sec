var c = {
        folder: 'imagecache',
        expireTime: 3600,
        debug: !1,
        remoteBackup: !1
    },
    fileList = Ti.App.Properties.getList('TF.ImageCache.ImageList', []),
    config = function(config) {
        config && (config.debug && Ti.API.info('TIC - setting config'), _.each(c, function(value, key) {
            config.hasOwnProperty(key) && (c[key] = config[key], Ti.API.info('TIC - setting ' + key + ' to ' + config[key]));;
        }));
    },
    hasFile = function(filename) {
        return c.debug && Ti.API.info('TIC - checking file in system - ' + filename), _.findWhere(fileList, {
            filename: filename
        });
    },
    checkDir = function() {
        var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, c.folder);
        return dir.exists() || dir.createDirectory(), !0;
    },
    cacheSize = function() {
        var bytes = 0;
        return c.debug && Ti.API.info('TIC - calculating cache size'), _.each(fileList, function(file) { bytes += file.fileSize }), bytes;
    },
    clearCache = function() {
        c.debug && Ti.API.info('TIC - Completely emtying cache'),
            _.each(fileList, function(file) {
                removeFile(file.filename);
            });
    },
    flushExpired = function() {
        c.debug && Ti.API.info('TIC - flush expired files');
        var removeFiles = [];
        _.each(fileList, function(file) {
                0 < Date.now() - (file.added + 1e3 * file.expireTime) && (c.debug && Ti.API.info('TIC - found expired file, removing'), removeFiles.push(file.filename));
            }),
            _.each(removeFiles, removeFile);
    },
    removeFile = function(filename) {
        c.debug && Ti.API.info('TIC - removing file ' + filename);
        var file = hasFile(filename);
        if (!file) return !1;
        var path = Ti.Filesystem.applicationDataDirectory + file.folder,
            f = Ti.Filesystem.getFile(path, file.filename);
        return (f.exists() ? void(f.deleteFile() && c.debug && Ti.API.info('TIC - file has been removed'), fileList = _.without(fileList, file), Ti.App.Properties.setList('TF.ImageCache.ImageList', fileList)) : (fileList = _.without(fileList, file), Ti.App.Properties.setList('TF.ImageCache.ImageList', fileList), c.debug && Ti.API.info('TIC - file has aleady been removed'), !1));
    };

function md5FileName(url) {
    var filename = Ti.Utils.md5HexDigest(url);
    return filename;
}
var removeRemote = function(url) {
        c.debug && Ti.API.info('TIC - removing file based on URL');
        var filename = md5FileName(url);
        removeFile(filename);
    },
    storeFile = function(filename, blob, overwrite) {
        if (c.debug && Ti.API.info('TIC - store file ' + filename), checkDir(), !overwrite && hasFile(filename)) return void(blob = null);
        var path = Ti.Filesystem.applicationDataDirectory + c.folder,
            file = Ti.Filesystem.getFile(path, filename);
        file.write(blob);
        var nPath = file.nativePath;
        if (file = null, blob && blob.length) return fileList.push({ filename: filename, added: Date.now(), fileSize: blob.length, expireTime: c.expireTime, folder: c.folder }), Ti.App.Properties.setList('TF.ImageCache.ImageList', fileList), blob = null, readFile(filename);
    },
    readFile = function(filename) {
        c.debug && Ti.API.info('TIC - reading file from system ' + filename);
        var file = hasFile(filename);
        if (!file) return !1;
        var path = Ti.Filesystem.applicationDataDirectory + file.folder,
            file = Ti.Filesystem.getFile(path, filename).read();
        return file;
    },
    remoteImage = function(url) {
        c.debug && (Ti.API.info('TIC - *************'), Ti.API.info('remote image'));
        var filename = md5FileName(url);
        if (Ti.API.info(filename), hasFile(filename)) return c.debug && (Ti.API.info('TIC - has file in system'), Ti.API.info('TIC - *************')), readFile(filename);
        Ti.API.info('TIC - doesn\'t have file yet');
        var image = Ti.UI.createImageView({
                image: url,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE
            }),
            blob = image.toBlob();
        return image = null, storeFile(filename, blob), Ti.API.info('TIC - *************'), blob;
    },
    cache = function(url, timeout, cb, err) {
        var timeout = timeout || 3e4,
            filename = md5FileName(url);
        if (hasFile(filename)) return c.debug && LOGGER.error('TIC - file already cached'), cb && cb(readFile(filename)), !1;
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                storeFile(filename, this.responseData),
                    cb && cb(readFile(filename));
            },
            onerror: function(e) {
                LOGGER.warn('TIC - error loading file'),
                    err && err(e);
            },
            timeout: timeout
        });
        return xhr.open('GET', url), xhr.send(), !0;
    },
    storeBlob = function(name, blob, cb) {
        var filename = md5FileName('blob-' + name),
            nPath = storeFile(filename, blob, !0);
        return cb && cb(nPath), blob = null, readFile(filename);
    },
    getBlob = function(name) {
        var filename = md5FileName('blob-' + name);
        return readFile(filename);
    };
module.exports = {
    config: config,
    cacheSize: cacheSize,
    flushExpired: flushExpired,
    clearCache: clearCache,
    removeFile: removeFile,
    removeRemote: removeRemote,
    remoteImage: remoteImage,
    cache: cache,
    storeBlob: storeBlob,
    getBlob: getBlob
};