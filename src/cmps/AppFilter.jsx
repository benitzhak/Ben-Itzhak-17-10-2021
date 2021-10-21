import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadCurrCity } from "../store/actions/weatherAction";


export const AppFilter = () => {

    const dispatch = useDispatch()

    const {currCity } = useSelector(state => state.weatherModule)

    const [cityName,setCityName] = useState(`${currCity.cityName}`) 

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(LoadCurrCity(cityName))
    }

    const setCityForDisplay = ({target}) => {
        setCityName(target.value)
    }

    return(
        <section className="app-filter">
            <form action="" onSubmit={handleChange}>
                <input type="text" placeholder="Choose city" onChange={setCityForDisplay} value={cityName}/>
            </form>
        </section>
    )
}