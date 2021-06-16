chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "maps") {
        // console.log(info.selectionText + "info");
        // console.log(info);
        // console.log(tab);
        searchGoogleMaps(info);
        // randomFunction();


    }
});

// chrome.action.onClicked.addListener(function(info, tab) {
//         searchGoogleMaps(info);
// });



// randomFunction = function(){
//     navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;

//     });
// }



searchGoogleMaps = function(info){
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         const pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude,
    //         };
    //         console.log(pos);
    //         console.log("Location found.");
    //       },
    //       () => {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //       }
    //     );
    //   } else {
    //     // Browser doesn't support Geolocation
    //     console.log("fail:/")
    //   }





    // console.log(lat+"lat");
    // let loc;
    // let latitude;
    // let longitude;
    // var geoSuccess = function(position) {
    //     startPos = position;
    //     latitude = startPos.coords.latitude;
    //     longitude = startPos.coords.longitude;
    //   };
    // navigator.geolocation.getCurrentPosition(geoSuccess);

    // console.log(latitude + "loc");

    // let location = info.geolocation;
    // console.log(location);    


      


    var query = info.selectionText;

    // chrome.action({url: "https://www.google.com/maps/dir/Truck+%26+Trailer+Repair+LLC,+West+Mosby+Road,+Harrisonburg,+VA,+USA/" + query});

  //chrome.tabs.create({url: "https://www.google.com/maps/search/" + query});
    chrome.tabs.create({url: "https://www.google.com/maps/dir/Truck+%26+Trailer+Repair+LLC,+West+Mosby+Road,+Harrisonburg,+VA,+USA/" + query});
 };

chrome.contextMenus.create({
 id: "maps",
 title: "Search on Google Maps",
 contexts:["selection"],  
});
