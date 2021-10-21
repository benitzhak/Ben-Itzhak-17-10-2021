import axios from 'axios'

export const weatherService = {
    getWeeklyWeather,
    getCity,
    getCurrWeather,
    getGeoLocation
}

const API_KEY = 'G7O8NMPW6VW6AMLmIYrz03eNFbPxR31I'

async function getWeeklyWeather(key){
const res = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
return res.data
}

async function getCity(city){
    let res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
    const weeklyWeather = await getWeeklyWeather(res.data[0].Key)
    const currWeather = await getCurrWeather(res.data[0].Key)
    return {
        cityName: res.data[0].LocalizedName,
        weeklyWeather:weeklyWeather.DailyForecasts,
        currWeather:currWeather[0]
    }
}

async function getCurrWeather(key){
    const res = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${+key}?apikey=${API_KEY}`)
    return res.data
}

async function getGeoLocation(lat,lon){
const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%20%2C${lon}`)
const city = await getCity(res.data.LocalizedName)
return city
}

