// POST function
async function postData(url = "", data = {}) {

    // Save data to server
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("Error: ", error);
    }
};

export { postData }