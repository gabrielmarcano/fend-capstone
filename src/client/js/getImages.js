// Pixabay API action function
async function callPixabay(placename, key) {
    const response = await Client.getData(
        `https://pixabay.com/api?key=${key}&q=${encodeURIComponent(placename)}`
    );
    
    try {
        console.info('Pixabay API Resolved');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export { callPixabay }