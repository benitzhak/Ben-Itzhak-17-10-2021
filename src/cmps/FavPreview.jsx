import { useDispatch, useSelector } from "react-redux"
import { LoadCurrCity } from "../store/actions/weatherAction"
import { useHistory } from "react-router-dom";



export const FavPreview = ({favorite}) => {

    const {unit} = useSelector(state => state.weatherModule)

    let history = useHistory();

    const dispatch = useDispatch()

    const convertToCel = (value) => {
        if(unit === '°C') {
            const cel = (value - 32) * 5/9
            return cel.toFixed() + '°C'
        } else return value + '℉'
    }

    const showCityWeather = async () => {
        await dispatch(LoadCurrCity(favorite.cityName))
        history.push('/')
    }

    return (
        <section onClick={()=>showCityWeather()}>
                <p>{favorite.cityName}</p>
                <p>{favorite.currWeather.WeatherText}</p>
                <img src={require(`../assets/weatherIcons/${favorite.currWeather.WeatherIcon}.png`).default} alt="" />
                <p>{convertToCel(favorite.currWeather.Temperature.Imperial.Value)}</p>
        </section>
    )
}