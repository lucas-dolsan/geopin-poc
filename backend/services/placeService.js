const places = [
    {
        id: 'f26d60305dae929ef8640a75e70dd78ab809cfe9',
        coords: { lat: 37.869085, lng: -122.254775 }
    },
    {
        id: 'da4b9237bacccdf19c0760cab7aec4a8359010b0',
        coords: { lat: 31.869085, lng: -142.254775 }
    },
    {
        id: 'da4b9237bacccdf19c0760cab7aec4a8359010b0',
        coords: { lat: 31.869085, lng: -142.254775 }
    },
    {
        id: 'da4b9237bacccdf19c0760cab7aec4a8359010b0',
        coords: { lat: 31.869085, lng: -142.254775 }
    },
    {
        id: 'da4b9237bacccdf19c0760cab7aec4a8359010b0',
        coords: { lat: 31.869085, lng: -142.254775 }
    },
]

function getRandomPlace() {
    return places[Math.floor(Math.random() * places.length)];
}

module.exports = {
    getRandomPlace
}