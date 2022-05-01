// GeoNames API action function
async function callGeoNames(placename, key) {
    const response = await Client.getData(
        `http://api.geonames.org/searchJSON?username=${key}&maxRows=10&q=${encodeURIComponent(placename)}`
    );
    
    try {
        console.log('GeoNames OK');
        console.log(response);
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { callGeoNames }