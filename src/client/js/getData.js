async function getData(url = "") {
    // fetch the url
    const response = await fetch(url);
    try {
        // return data json
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { getData }
