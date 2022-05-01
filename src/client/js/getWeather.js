// WeatherBit API action function
async function callWeatherBit(lat, lon, key, today, date) {

    if (Client.thisWeek(today, date)) {
        console.log('The departure is within a week');
        var response = await Client.getData(
            `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${Number.parseFloat(lat).toFixed(3)}&lon=${Number.parseFloat(lon).toFixed(3)}`
        );
    } else {
        console.log('The departure is in the future');
        var response = await Client.getData(`https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${Number.parseFloat(lat).toFixed(3)}&lon=${Number.parseFloat(lon).toFixed(3)}`)
    }
    
    try {
        console.log('Weatherbit OK');
        console.log(response);
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }

}

export { callWeatherBit }