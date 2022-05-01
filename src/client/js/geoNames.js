// GeoNames API action function
async function callGeoNames(placename, key) {
    const response = await Client.getData(
        `http://api.geonames.org/searchJSON?username=${key}&maxRows=10&q=${placename}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { callGeoNames }