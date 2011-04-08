// This is the active module of the About Pages Add-on
// Original Author: Debloper

var contextMenu = require("context-menu");
var tabs = require("tabs");

var aboutContextMenu = contextMenu.Menu({
  label: "About Pages",
  contentScript: 'on("click", function (node, data) {' +
  '  postMessage(data.toString());' +
  '});',
  onMessage: function(url) {
      tabs.open(url);
  },
  items: [
      contextMenu.Item({ label: "About:Home", data: "about:home" }),
      contextMenu.Item({ label: "About:Addons", data: "about:addons" }),
      contextMenu.Item({ label: "About:Plugins", data: "about:plugins" }),
      contextMenu.Item({ label: "About:Config", data: "about:config" }),
      contextMenu.Item({ label: "About:Support", data: "about:support" }),
      contextMenu.Separator(),
      contextMenu.Item({ label: "All Abouts", data: "about:about" })
  ]
});