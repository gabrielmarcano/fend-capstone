const dotenv = require('dotenv');

/* Global Variables */

// Personal API keys for GeoNames API, Weatherbit API and Pixabay API using environment variables
dotenv.config();
const GEONAMES_KEY = process.env.GEONAMES_KEY;
const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
const PIXABAY_KEY = process.env.PIXABAY_KEY;

// Generate Button
const button = document.getElementById("search");

// Create a new date instance dynamically with JS
let d = new Date();
let today = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();


/* Main Function */

// Run the main function
const runApp = async () => {
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("departure").value;

    if (thisWeek(today, departure)) {
        callGeoNames(destination, GEONAMES_KEY)
            .then(function (geo_data) {
                geo_data.lat
            })
    } else {

    }
}

// Perform action function
const generate = async () => {
    const zipCode = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    
    // Check if the zip code is 5 characters long, and those characters are numbers
    if (zipCode.length === 5 && zipCode.match(/\d+/g)[0].length === 5) {
        callWeatherApi(zipCode, apiKey)
            .then(function (data) {
                const allData = {
                    zone: data.name,
                    temperature: data.main.temp,
                    content: feeling,
                };
        
                postData("/add", allData)
                    .then(updateUI());
            })
    } else {
        console.log('Zip code must be 5 digits long');
    }
}

// Add event listener to button
button.addEventListener("click", runApp);

export { runApp }