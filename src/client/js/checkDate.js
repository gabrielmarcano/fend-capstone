// Check if the date is within this week or if its in the future
const thisWeek = (departure) => {

    // Create a new date instance dynamically with JS
    let d = new Date();
    let today = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
    
    const departureTimeStamp = (new Date(departure)).getTime();
    const todayTimeStamp = today.getTime();

    const microSecondsDiff = Math.abs(departureTimeStamp - todayTimeStamp);

    // Math.round is used instead of Math.floor to account for certain DST cases
    // Number of milliseconds per day =
    //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 ms/second
    const daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60  * 24));

    console.log(daysDiff+1);

    if (daysDiff > 7) {
        return false;
    } else {
        return true;
    }
}

export { thisWeek }