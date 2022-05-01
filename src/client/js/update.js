// Update UI function
function updateUI() {
    const localData = JSON.parse(localStorage.getItem('trip'));

    let results = document.getElementById('results');
    let fragment = document.createDocumentFragment();

    let destination = document.createElement('div');
    destination.innerText = localData.destination;

    let departure = document.createElement('div');
    departure.innerText = localData.departure;

    let weather = document.createElement('div');
    weather.innerText = localData.weather;

    let temperature = document.createElement('div');
    temperature.innerText = localData.temperature;

    let image = document.createElement('img');
    image.setAttribute('src', localData.image);
    image.setAttribute('alt', localData.destination);
    image.setAttribute('width', '300');
    
    fragment.appendChild(destination);
    fragment.appendChild(departure);
    fragment.appendChild(weather);
    fragment.appendChild(temperature);
    fragment.appendChild(image);

    results.appendChild(fragment);
}

export { updateUI }