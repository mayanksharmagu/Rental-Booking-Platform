
    const maptoken = mapToken;
    // console.log(maptoken);
    const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets/style.json?key=${maptoken}`,
    center: [ 77.2177, 28.6304], // Longitude, Latitude
    zoom: 5
  });

//   let location = "<%= listing.location %>";


  map.addControl(new maplibregl.NavigationControl(), 'top-right');


   navigator.geolocation.getCurrentPosition(
  position => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    // Center the map on user's location
    map.setCenter([lng, lat]);
    map.setZoom(8);

    // Create a custom icon for the marker
    const el = document.createElement('div');
    el.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/684/684908.png")';
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.backgroundSize = 'cover';
    el.style.borderRadius = '50%';

    // Add the marker
    new maplibregl.Marker(el)
      .setLngLat([lng, lat])
      .addTo(map);
  },
  error => {
    console.error("Error getting location:", error);
    alert("Location access denied or unavailable.");
  }
);


