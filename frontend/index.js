/*
 * Click the map to set a new location for the Street View camera.
 */
let map;
let panorama;

async function initMap() {

    const response = await fetch('http://localhost:3000/rounds', { method: 'GET'})
    const data = await response.json()

    document.title = data.place.id
    
    const sv = new google.maps.StreetViewService();
    panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"));
    // Set up the map.
    map = new google.maps.Map(document.getElementById("map"), {
        center: data.place.coords,
        zoom: 16,
        streetViewControl: false,
    });
    // Set the initial Street View camera to the center of the map
    sv.getPanorama({ location: data.place.coords, radius: 50 }, processSVData);
    // Look for a nearby Street View panorama when the map is clicked.
    // getPanorama will return the nearest pano when the given
    // radius is 50 meters or less.
    map.addListener("click", (event) => {
         sv.getPanorama({ location: event.latLng, radius: 50 }, processSVData);
    });
}

function processSVData(data, status) {
  if (status === "OK") {
    const location = data.location;
    const marker = new google.maps.Marker({
      position: location.latLng,
      map,
      title: location.description,
    });
    panorama.setPano(location.pano);
    panorama.setPov({
      heading: 270,
      pitch: 0,
    });
    panorama.setVisible(true);
    marker.addListener("click", () => {
      const markerPanoID = location.pano;
      // Set the Pano to use the passed panoID.
      panorama.setPano(markerPanoID);
      panorama.setPov({
        heading: 270,
        pitch: 0,
      });
      panorama.setVisible(true);
    });
  } else {
    console.error("Street View data not found for this location.");
  }
}