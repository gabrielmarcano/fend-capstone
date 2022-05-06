// Update UI function
async function updateUI() {

    // Get the data from the server
    let data = await Client.getData('/data');

    try {

        // Create the date object
        let departureDate = new Date(data.departure);

        // Get the results wrapper element
        let results = document.getElementById('results-box');

        // Create a document fragment
        let fragment = document.createDocumentFragment();

        // Create div elements
        let destination, departure, weather, temperature;
        destination = document.createElement('div');
        departure = document.createElement('div');
        weather = document.createElement('div');
        temperature = document.createElement('div');

        // Fill the destination data element
        destination.innerText = `Destination: ${data.destination}`;

        // Fill the departure data element
        departure.innerText = `Departure day: ${departureDate.toDateString()}`;

        // Fill the weather data element
        weather.innerText = `Weather: ${data.weather}`;

        // Fill the temperature data element
        if (Client.thisWeek(departureDate)) {
            temperature.innerText = `Temperature: ${data.temperature}`;
        } else {
            temperature.innerText = `Min Temperature: ${data.temperature.min} \n Max Temperature: ${data.temperature.max}`;
        }

        // Fill the image data element
        let image = document.createElement('img');
        image.setAttribute('src', data.image);
        image.setAttribute('alt', data.destination);
        image.setAttribute('width', '300');
        
        // Append to the document fragment
        fragment.append(destination, departure, weather, temperature, image);

        // First empty the box
        results.innerHTML = '';

        // Append the document fragment to the UI
        results.appendChild(fragment);

    } catch(error) {
        console.error("Update UI: ", error);
    }
}

export { updateUI }