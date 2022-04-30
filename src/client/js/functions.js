/* Functions */

// GET Function. Asynchronously fetch the data from the app endpoint
const getData = async (url = "") => {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// POST Function
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// GeoNames API action function
const callGeoNames = async (placename, key) => {
    const response = await getData(
        `http://api.geonames.org/searchJSON?username=${key}&maxRows=10&q=${placename}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// WeatherBit API action function (Current)
const callCurrentWeatherBit = async (lat, lon, key) => {

    const response = await getData(
        `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${Client.threeDecimals(lat)}&lon=${Client.threeDecimals(lon)}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }

}

// WeatherBit API action function (Forecast)
const callForecastWeatherBit = async (lat, lon, key) => {

    const response = await getData(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
    
}

// Pixabay API action function
const callPixabay = async (placename, key) => {
    const response = await getData(
        `https://pixabay.com/api?key=${key}&q=${encodeURIComponent(placename)}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Update UI function
const updateUI = async () => {
    const request = await fetch('/data');
    try {
        const data = await request.json();

        document.getElementById("destination-box").innerHTML = 'Date: ' + newDate;
        document.getElementById("departure-box").innerHTML = 'Temperature: ' + Math.round(data.temperature) + ' degrees';

    } catch (error) {
        console.log("Error: ", error);
    }
}

