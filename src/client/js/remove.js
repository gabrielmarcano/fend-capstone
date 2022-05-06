function removeTrip() {
    // Get the results box
    let results = document.getElementById('results-box')

    if (!results.innerHTML) {
        alert('Add a trip first before trying to remove it')
        return
    }

    // Remove the trip by cleaning the output box
    results.innerHTML = '';
}

export { removeTrip }