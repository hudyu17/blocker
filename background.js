console.log('background running');

var URLStorage;

var blockedSites = ["espn.com", "wikipedia.org"];

function interceptRequest(request)
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
        for (var i = 0; i < blockedSites.length; ++i) {
            if(request.url.indexOf(blockedSites[i]) > -1) {
              URLStorage = request.url;
              return {redirectUrl: chrome.extension.getURL("localpage.html")};
            }
        }
    //   if(request.url.indexOf("espn.com") > -1)
    //   {
    //     URLStorage = request.url;
    //     return {redirectUrl: chrome.extension.getURL("localpage.html")};
    //   }
    }
  }
}

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://*/*"]}, ['blocking']);