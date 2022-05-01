// Update UI function
const updateUI = async () => {
    const request = await fetch('/data');
    try {
        const data = await request.json();

        document.getElementById("destination-box").innerHTML = 'Date: ' + newDate;
        document.getElementById("departure-box").innerHTML = 'Temperature: ' + Math.round(data.temperature) + ' degrees';

    } catch (error) {
        console.log("Error: ", error);
    }
}

export { updateUI }