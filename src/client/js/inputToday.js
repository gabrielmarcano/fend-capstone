function updateDateInput() {
    // Helper function to add the 0 at the left
    function pad(n) {
        return n<10 ? '0'+n : n;
    }

    // Date input element
    let dateInput = document.getElementById('departure');

    // This moment date
    let now = new Date();

    // This year
    let year = now.getFullYear();

    // Next year
    let nextYear = now.getFullYear()+1;

    // This month
    let month = now.getMonth()+1;

    // Today
    let day = now.getDate();

    // Value today
    // dateInput.setAttribute('value', `${pad(year)}-${pad(month)}-${pad(day)}`)

    // Min value today
    dateInput.setAttribute('min', `${pad(year)}-${pad(month)}-${pad(day)}`)

    // Max value to next year
    dateInput.setAttribute('max', `${pad(nextYear)}-${pad(month)}-${pad(day)}`)
}

export { updateDateInput }