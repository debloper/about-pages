// This is an active module of the about:pages Add-on
// https://builder.mozillalabs.com/api/jetpack-core/module/context-menu/
var contextMenu = require("context-menu");
var tabs = require("tabs");

var aboutContextMenu = contextMenu.Item({
  label: "about:pages",
  data : "about:about",
  contentScript: 'on("click", function (node, data) {' +
  '  postMessage(data.toString());' +
  '});',
  onMessage: function(url) {
      tabs.open(url);
  }
});