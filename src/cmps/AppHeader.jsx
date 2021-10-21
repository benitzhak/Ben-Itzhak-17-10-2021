import { NavLink } from "react-router-dom"
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnit, setDarkMode } from '../store/actions/weatherAction.js'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



export const AppHeader = () => {

    const dispatch = useDispatch()

    const [selected, setSelected] = useState(false);

    const { unit ,isDarkMode } = useSelector(state => state.weatherModule)

    return (
        <section className="header main-layout">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </nav>
            <div className="actions">
                <FormControlLabel control={<Switch  />} label="Dark Mode" onChange={()=>dispatch(setDarkMode())}/>
                <ToggleButton value="check" selected={selected} sx={{ 
                    borderColor:(isDarkMode?"white":""),
                    color:(isDarkMode?"white":"")
                }}
                onChange={() => {setSelected(!selected);}}
                onClick={()=>{dispatch(changeUnit())}}>{unit}</ToggleButton>
            </div>
        </section>
    )
}