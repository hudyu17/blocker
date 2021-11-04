// const items = [];
// const blockedSites = JSON.stringify(items);

// localStorage.setItem('items', blockedSites);

var URLStorage;

// var blockedSites = ["espn.com", "wikipedia.org"];

var items = localStorage.getItem('items');
var blockedSites = JSON.parse(items);

console.log(blockedSites);

function interceptRequest(request) {
  if(request && request.url) { 
    if (blockedSites != null) {
      if(request.type == "main_frame") // new page/site is loading in main window
    { 
        for (var i = 0; i < blockedSites.length; ++i) {
            // console.log(blockedSites[i]);
            if(request.url.indexOf(blockedSites[i].item) > -1) {
              URLStorage = request.url;
              return {redirectUrl: chrome.extension.getURL("localpage.html")};
            }
        }
    } 
    }     
  }
};

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://*/*"]}, ['blocking']);