// Check if the date is within this week or if its in the future
const thisWeek = (departure) => {

    // Create a new date instance for today
    let today = new Date();
    
    // Get the time stamps
    const departureTimeStamp = departure.getTime();
    const todayTimeStamp = today.getTime();

    // Difference in microseconds
    const microDifference = Math.abs(departureTimeStamp - todayTimeStamp);

    // Number of milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 ms/second
    // Difference in days
    const daysDifference = (Math.round(microDifference / (1000 * 60 * 60  * 24)))+1;

    // If greater than 7 days of difference, its in the future, else is this week
    if (daysDifference > 7) {
        return false;
    } else {
        return true;
    }
}

export { thisWeek }