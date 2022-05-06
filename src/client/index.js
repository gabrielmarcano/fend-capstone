import { thisWeek } from './js/checkDate'
import { updateDateInput } from './js/inputToday'
import { getData } from './js/getData'
import { postData } from './js/postData'
import { callGeoNames } from './js/getCoords'
import { callWeatherBit } from './js/getWeather'
import { callPixabay } from './js/getImages'
import { updateUI } from './js/update'
import { removeTrip } from './js/remove'
import { main } from './js/app'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

// Update default input date
document.addEventListener("DOMContentLoaded", updateDateInput);

// Add event listener to search button
document.getElementById("search").addEventListener("click", main);

// Add event listener to remove button
document.getElementById("remove").addEventListener("click", removeTrip);

export {
    thisWeek,
    updateDateInput,
    getData,
    postData,
    callGeoNames,
    callWeatherBit,
    callPixabay,
    updateUI,
    removeTrip,
    main,
}
