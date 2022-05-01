// WeatherBit API action function (Forecast)
async function callForecastWeatherBit(lat, lon, key) {

    const response = await Client.getData(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${Number.parseFloat(lat).toFixed(3)}&lon=${Number.parseFloat(lon).toFixed(3)}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
    
}

export { callForecastWeatherBit }