import { thisWeek } from './js/checkDate'
import { getData } from './js/getData'
import { postData } from './js/postData'
import { callGeoNames } from './js/getCoords'
import { callWeatherBit } from './js/getWeather'
import { callPixabay } from './js/getImages'
import { updateUI } from './js/update'
import { main } from './js/app'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

// Add event listener to button
document.getElementById("search").addEventListener("click", main);

export {
    thisWeek,
    getData,
    postData,
    callGeoNames,
    callWeatherBit,
    callPixabay,
    updateUI,
    main,
}
