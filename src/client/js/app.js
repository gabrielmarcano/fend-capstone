function main() {

    // Personal API keys for GeoNames API, Weatherbit API and Pixabay API using environment variables
    const GEONAMES_KEY = process.env.GEONAMES_KEY;
    const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
    const PIXABAY_KEY = process.env.PIXABAY_KEY;
    
    // Get the input values
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("departure").valueAsDate;

    // Check if the text input is not empty
    if (!destination) {
        alert('Enter a location');
        return
    }

    // Check if the date input is not empty
    if (!departure) {
        alert('Enter a date for departure');
        return
    }

    // Fix bugged day
    departure.setDate(departure.getDate()+1);

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

                    if (Client.thisWeek(departure)) {
                        allData.temperature = wbit.data[0].temp;
                    } else {
                        allData.temperature = {
                            min: wbit.data[0].min_temp,
                            max: wbit.data[0].max_temp
                        }
                    }
                }, reason => {
                    // WeatherBit failed
                    alert('WeatherBit API Failed');
                    console.error('WeatherBit API: ', reason);
                })
                .then(() => {
                    Client.callPixabay(geo.geonames[0].name, PIXABAY_KEY)
                        .then(pixabay => {

                            // Save the destination image data
                            allData.image = pixabay.hits[0].largeImageURL;
                        }, reason => {
                            // Pixabay failed
                            alert('Pixabay API Failed');
                            console.error('Pixabay API: ', reason);
                        })
                        .then(() => {

                            // Post the data to the server
                            Client.postData('/add', allData)
                                .then(() => {

                                    // Update the UI with the new data
                                    Client.updateUI();
                                })
                        })
                })
        }, reason => {
            // GeoNames failed
            alert('GeoNames API Failed');
            console.error('GeoNames API: ', reason);
        })
}

export { main }