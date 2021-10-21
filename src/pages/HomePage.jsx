import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite, setGeoLocation } from '../store/actions/weatherAction.js'
import { WeeklyList } from "../cmps/WeeklyList.jsx";
import { AppFilter } from "../cmps/AppFilter.jsx";
import Button from '@mui/material/Button';
import loadingGif from '../assets/weatherIcons/loading.gif'

export const HomePage = () => {

    const dispatch = useDispatch()

    const {currCity , unit, favorites, isDarkMode} = useSelector(state => state.weatherModule)

    const [mainImage,setMainImage] = useState(require(`../assets/weatherIcons/1.png`))

    useEffect(()=>{
        if(currCity.cityName){
            setMainImage(require(`../assets/weatherIcons/${currCity.currWeather.WeatherIcon}.png`))
        }
    },[currCity.cityName])
    
    const getUserPos = (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        dispatch(setGeoLocation(lat,lon))
    }

    useEffect(()=>{
        if(!currCity.cityName){
            navigator.geolocation.getCurrentPosition(getUserPos)
        }
    },[])


    const convertToCel = (value) => {
        if(unit === '°C'){
            const cel = (value - 32) * 5/9
            return cel.toFixed() + '°C'
        } else return value + '℉'
    }

    const toggleFavorits = (city) => {
        dispatch(toggleFavorite(city))
    }

    const favoriteBtnTxt = () => {
        const isFavorite = favorites.filter(favorite=>{
            return favorite.cityName === currCity.cityName
        })
        if(isFavorite.length) return 'Remove favorite'
        else return 'Add to favorites'
    }

    if(!currCity.cityName) return (
        <div className="loading">
             <img src={loadingGif} alt="" />
        </div>
        )

    return (
        <section className="home-page">
            <AppFilter/>
            <div className="home-daily-weather-head main-layout">
                <div>
                    <h1 className="home-curr-city-name">{currCity.cityName}</h1>
                    <p className="home-curr-city-temp">{convertToCel(currCity.currWeather.Temperature.Imperial.Value)}</p>
                </div>
                <Button variant="contained" color={(isDarkMode?'warning':'primary')} onClick={()=>{toggleFavorits(currCity)}}>{favoriteBtnTxt()}</Button>
            </div>
            <div className="home-daily-weather-body">
                <p className="home-curr-weather-txt">{currCity.currWeather.WeatherText}</p>
                <img className="main-img" src={mainImage.default} alt=""/>
            </div>
                <WeeklyList currCity={currCity}/>
        </section>
    )
}