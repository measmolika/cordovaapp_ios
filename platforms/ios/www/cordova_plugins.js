cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-file-opener2.FileOpener2",
      "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
      "pluginId": "cordova-plugin-file-opener2",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    },
    {
      "id": "cordova-background-video.backgroundvideo",
      "file": "plugins/cordova-background-video/www/backgroundvideo.js",
      "pluginId": "cordova-background-video",
      "clobbers": [
        "cordova.plugins.backgroundvideo"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-file-opener2": "3.0.0",
    "cordova-background-video": "1.0.21"
  };
});