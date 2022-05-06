// GeoNames API action function
async function callGeoNames(placename, key) {
    const response = await Client.getData(
        `http://api.geonames.org/searchJSON?username=${key}&maxRows=10&q=${encodeURIComponent(placename)}`
    );
    
    try {
        console.info('GeoNames API Resolved');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export { callGeoNames }