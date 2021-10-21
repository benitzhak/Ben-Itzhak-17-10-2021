import { WeeklyPreview } from "./WeeklyPreview"
import Card from '@mui/material/Card';
import { useSelector } from "react-redux";

export const WeeklyList = ({currCity}) => {

    const { isDarkMode } = useSelector(state => state.weatherModule)

    const setMainCardColor = () => {
        if(isDarkMode) return 'linear-gradient(#c50000, #790202)'
        else return 'linear-gradient(#2c6fe1, #134090)'
    }

    const setSecondCardColor = () => {
        if(isDarkMode) return 'linear-gradient(#df7708, #945108)'
        else return 'linear-gradient(#2c88de, #18639f)'
    }

    const style = {
        backgroundImage: setMainCardColor(),
        '&:nth-of-type(2n)':{ backgroundImage: setSecondCardColor()},
        margin:'0 1%',
        width:'25%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'1rem 1rem 3rem 1rem ',
        color:'white',
        textAlign:'center',
      }

    if(!currCity) return <div>Loading...</div>
    return (
        <section className="weekly-cards-container main-layout">
            {
                currCity.weeklyWeather.map((day,idx)=>(
                    <Card key={idx} sx={style}>
                        <WeeklyPreview day={day}/>
                    </Card>
                ))
            }
        </section>
    )
}