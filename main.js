chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "maps") {
        searchGoogleMaps(info);
    }
});


searchGoogleMaps = function(info){
    var query = info.selectionText;
    //chrome.tabs.create({url: "https://www.google.com/maps/search/" + query}); this would be for overall but without current location
    //chrome.tabs.create({url: "https://www.google.com/maps/dir/Truck+%26+Trailer+Repair+LLC,+West+Mosby+Road,+Harrisonburg,+VA,+USA/" + query});//for TTR
    chrome.tabs.create({url: "https://www.google.com/maps/dir/My+Location/" + query}); //for production. 
 };

 
chrome.contextMenus.create({
 id: "maps",
 title: "Search on Google Maps",
 contexts:["selection"],  
});
