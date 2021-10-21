const INITIAL_STATE = {
    currCity: {},
    favorites:[],
    unit:'°C',
    isDarkMode: false
  }
  export function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_CURR_CITY':
        return {
          ...state,
          currCity: action.currCity
        }
      case 'SET_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites,action.city]
        }
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(favorite => favorite.cityName !== action.cityName)
        }
      case 'SET_UNIT':
        return {
          ...state,
          unit: action.unit
        }
      case 'SET_DARK_MODE':
        return {
          ...state,
          isDarkMode: action.isDarkMode
        }
      default:
        return state
    }
  }