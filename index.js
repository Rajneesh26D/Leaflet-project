var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

var imageSelect = document.getElementById('image-select');
imageSelect.addEventListener('change', function () {
    var selectedImage = imageSelect.value;

    document.getElementById('map').classList.remove('resized-image');

    map.eachLayer(function (layer) {
        if (layer instanceof L.ImageOverlay) {
            map.removeLayer(layer);
        }
    });

    // selected image overlay to the map
    if (selectedImage !== '') {
        document.getElementById('map').classList.add('resized-image');
        var bounds = [[51.49, -0.12], [51.51, -0.06]]; //images coordinates
        var overlay = L.imageOverlay(selectedImage, bounds).addTo(map);
        map.fitBounds(bounds);
    }
});
