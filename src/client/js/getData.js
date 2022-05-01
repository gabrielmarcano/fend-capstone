async function getData(url = "") {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export { getData }
