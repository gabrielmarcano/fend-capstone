// Pixabay API action function
async function callPixabay(placename, key) {
    const response = await getData(
        `https://pixabay.com/api?key=${key}&q=${encodeURIComponent(placename)}`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { callPixabay }