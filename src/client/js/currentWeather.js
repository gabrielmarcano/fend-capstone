// WeatherBit API action function (Current)
async function callCurrentWeatherBit(lat, lon, key) {

    const response = await Client.getData(
        `https://api.weatherbit.io/v2.0/current?key=${key}&lat=&lat=${Number.parseFloat(lat).toFixed(3)}&lon=${Number.parseFloat(lon).toFixed(3)}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }

}

export { callCurrentWeatherBit }