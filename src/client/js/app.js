function main() {
    /* Global Variables */

    // Personal API keys for GeoNames API, Weatherbit API and Pixabay API using environment variables
    const GEONAMES_KEY = process.env.GEONAMES_KEY;
    const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
    const PIXABAY_KEY = process.env.PIXABAY_KEY;
    
    // Get the Button element
    const button = document.getElementById("search");
    
    // Create a new date instance dynamically with JS
    let d = new Date();
    let today = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
    
    // Get the input values
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("departure").value;

    console.log(today);
    console.log(departure.valueAsDate);

    // Data
    var allData = {};

    // Main API call
    Client.callGeoNames(destination, GEONAMES_KEY)
        .then( (geo) => {

            console.log('Geo OK')
            document.getElementById("destination-box").innerHTML = `${geo.geonames[0].name}, ${geo.geonames[0].countryName}`
            document.getElementById("departure-box").innerHTML = `${departure}`

            if (Client.thisWeek(today, departure)) {
                Client.callCurrentWeatherBit(geo.geonames[0].lat, geo.geonames[0].lng, WEATHERBIT_KEY)
                    .then(function (weather) {
                        console.log('Weather OK')
                        console.log(weather);
                    })
            } else {
                Client.callForecastWeatherBit(geo.geonames[0].lat, geo.geonames[0].lng, WEATHERBIT_KEY)
                    .then(function (weather) {
                        console.log(weather);
                    })
            }
        })
}

export { main }