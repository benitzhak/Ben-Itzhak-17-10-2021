import { weatherService } from "../../services/weather-service";

export function toggleFavorite(city) {
    return async (dispatch, getState) => {
      try {
        let {favorites} = getState().weatherModule
        const isCityFavorite = favorites.filter(c => {
          return c.cityName === city.cityName
        })
        if(!isCityFavorite.length){
            dispatch({ type: 'SET_FAVORITE', city })
        } else {
          dispatch({type:'REMOVE_FAVORITE', cityName:city.cityName })
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

export function LoadCurrCity(cityName) {
  return async (dispatch) => {
    try {
      const currCity = await weatherService.getCity(cityName)
      dispatch({ type: 'SET_CURR_CITY',currCity })
    } catch (err) {
      console.log(err);
    }
  }
}

export function changeUnit() {
  return async (dispatch,getState) => {
    try{
      let { unit } = getState().weatherModule
      if (unit === '°C') unit = '℉'
      else unit = '°C'
      dispatch({ type: 'SET_UNIT', unit })
    } catch (err) {
      console.log(err);
    }
  }
}

export function setDarkMode() {
  return async (dispatch,getState) => {
    try{
      let { isDarkMode } = getState().weatherModule
      isDarkMode = !isDarkMode
      dispatch({type: 'SET_DARK_MODE', isDarkMode})
    } catch (err) {
      console.log(err);
    }
  }
}

export function setGeoLocation(lat,lon) {
  return async (dispatch) => {
    try{
      const currCity = await weatherService.getGeoLocation(lat,lon)
      dispatch({type: 'SET_CURR_CITY', currCity})
    } catch (err) {
      console.log(err)
    }
  }
}
