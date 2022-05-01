import { thisWeek } from './js/checkDate'
import { getData } from './js/getData'
import { postData } from './js/postData'
import { callGeoNames } from './js/getCoords'
import { callCurrentWeatherBit } from './js/currentWeather'
import { callForecastWeatherBit } from './js/forecastWeather'
import { callWeatherBit } from './js/getWeather'
import { callPixabay } from './js/getImages'
import { updateUI } from './js/updateUI'
import { main } from './js/app'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

// Add event listener to button
document.getElementById("search").addEventListener("click", ()=>{console.log('click')})

export {
    thisWeek,
    getData,
    postData,
    callGeoNames,
    callCurrentWeatherBit,
    callForecastWeatherBit,
    callWeatherBit,
    callPixabay,
    updateUI,
    main,
}
