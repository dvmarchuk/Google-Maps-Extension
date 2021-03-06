chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "maps") {
        searchGoogleMaps(info);
    }
});


searchGoogleMaps = function(info){
    var query = info.selectionText;
    chrome.tabs.create({url: "https://www.google.com/maps/dir/My+Location/" + query}); //to search from your current location
 };

 
chrome.contextMenus.create({
 id: "maps",
 title: "Search on maps",
 contexts:["selection"],  
});
