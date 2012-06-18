// This is the active module of the About Pages Add-on
// Original Author: Debloper

var contextMenu = require("context-menu")
,   prefs = require("preferences-service")
,   tabs = require("tabs");

// Array, containing the list of pages to be shown
var pageList = [];

var readPref = function ( id ) {
    return prefs.get( "extensions.aboutPages.urls." + id );
};

// Setting the pages in the pageList to be used in the next step
(function () {
    for ( var i=0; i<=4; i++ ) {
        pageList[i] = JSON.parse( readPref(i) );
    }
    pageList[5] = ["All About Pages", "about:about"];
    pageList[6] = ["About this addon", "http://code.debs.io/about-pages"];
})();

var aboutContextMenu = contextMenu.Menu({
  label: "About Pages",
  contentScript: 'on("click", function (node, data) {' +
  '  postMessage(data.toString());' +
  '});',
  onMessage: function(url) {
      tabs.open(url);
  },
  items: [
      contextMenu.Item({ label: pageList[0][0], data: pageList[0][1] }),
      contextMenu.Item({ label: pageList[1][0], data: pageList[1][1] }),
      contextMenu.Item({ label: pageList[2][0], data: pageList[2][1] }),
      contextMenu.Item({ label: pageList[3][0], data: pageList[3][1] }),
      contextMenu.Item({ label: pageList[4][0], data: pageList[4][1] }),
      contextMenu.Separator(),
      contextMenu.Item({ label: pageList[5][0], data: pageList[5][1] }),
      contextMenu.Separator(),
      contextMenu.Item({ label: pageList[6][0], data: pageList[6][1] })
  ]
});
