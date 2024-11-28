// Coordinates of Galway (central location)
const galwayCoordinates = [53.2707, -9.0568];

// Initialize map
const map = L.map('map').setView(galwayCoordinates, 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Locations array with the new 'rules' field
const locations = [
    { name: "An Púcán", coords: [53.2747894372253, -9.047568372680383], rules: "rule" },
    { name: "Sally Longs Rock Bar", coords: [53.2743799254388, -9.053407426096786], rules: "rule" },
    { name: "The Dew Drop Inn", coords: [53.27219745362809, -9.054370454607618], rules: "rule" },
    { name: "Freeney's Bar", coords: [53.27201780537688, -9.05342631705305], rules: "rule" },
    { name: "The Dáil Bar", coords: [53.27170983518985, -9.053512147739829], rules: "rule" },
    { name: "Cookes Thatch Bar", coords: [53.27273073312971, -9.062744473203534], rules: "rule" },
    { name: "Bierhaus", coords: [53.271305093032204, -9.05892424081999], rules: "rule" },
    { name: "The Crane Bar", coords: [53.271305093032204, -9.061327500049803], rules: "rule" },
    { name: "Róisín Dubh", coords: [53.2702869003129, -9.058263989321592], rules: "rule" },
    { name: "Monroe's Tavern", coords: [53.27112894650648, -9.05713010993974], rules: "rule" },
    { name: "Finnegans", coords: [53.27472184279842, -9.052666914227231], rules: "rule" },
];

// Add markers to the map
locations.forEach(location => {
    L.marker(location.coords, { draggable: false }) // Prevent dragging
        .addTo(map)
        .bindPopup(`<strong>${location.name}</strong><br>${location.rules}`);
});

// Create an array of coordinates for the polyline
const routeCoordinates = locations.map(location => location.coords);

// Draw a simple line connecting all the locations
L.polyline(routeCoordinates, {
    color: 'blue',
    weight: 4,
    opacity: 0.7
}).addTo(map);
