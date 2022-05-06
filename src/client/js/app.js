function main() {

    // Personal API keys for GeoNames API, Weatherbit API and Pixabay API using environment variables
    const GEONAMES_KEY = process.env.GEONAMES_KEY;
    const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
    const PIXABAY_KEY = process.env.PIXABAY_KEY;
    
    // Get the input values
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("departure").valueAsDate;

    // Data
    var allData = {
        destination: undefined,
        departure: undefined,
        weather: undefined,
        temperature: undefined,
        image: undefined,
    };

    // Main API call
    Client.callGeoNames(destination, GEONAMES_KEY)
        .then(geo => {

            // Save the destination and departure data
            allData.destination = `${geo.geonames[0].name}, ${geo.geonames[0].countryName}`;
            allData.departure = `${departure}`;

            Client.callWeatherBit(geo.geonames[0].lat, geo.geonames[0].lng, WEATHERBIT_KEY, departure)
                .then(wbit => {

                    // Save the weather and temperature data 
                    allData.weather = wbit.data[0].weather.description;
                    allData.temperature = wbit.data[0].temp;
                })
                .then(() => {
                    Client.callPixabay(geo.geonames[0].name, PIXABAY_KEY)
                        .then(pixabay => {

                            // Save the destination image data
                            allData.image = pixabay.hits[0].largeImageURL;
                        })
                        .then(() => {
                            console.log(allData);

                            // Post the data to the server
                            Client.postData('/add', allData)
                                .then(() => {

                                    // Update the UI with the new data
                                    Client.updateUI();
                                })
                        })
                })
        })
}

export { main }