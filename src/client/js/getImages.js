// Pixabay API action function
async function callPixabay(placename, key) {
    const response = await Client.getData(
        `https://pixabay.com/api?key=${key}&q=${encodeURIComponent(placename)}`
    );
    
    try {
        console.log('Pixabay OK');
        console.log(response);
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { callPixabay }