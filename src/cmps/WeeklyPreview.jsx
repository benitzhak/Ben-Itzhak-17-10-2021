import { useSelector } from "react-redux"


export const WeeklyPreview = ({day}) => {

    const { unit } = useSelector(state => state.weatherModule)

    const getDay = (timestemp) => {
        const dayForDisplay = new Date(timestemp*1000).getDay()
        const daysForDisplay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        return daysForDisplay[dayForDisplay]
    }

    const convertToCel = (value) => {
        if(unit === '°C') {
            const cel = (value - 32) * 5/9
            return cel.toFixed() + '°C'
        } else return value + '℉'
    }
    
    return (
        <section>
            <p>{getDay(day.EpochDate)}</p>
            <img src={require(`../assets/weatherIcons/${day.Day.Icon}.png`).default} alt="" />
            <div>{convertToCel(day.Temperature.Minimum.Value)}-
                {convertToCel(day.Temperature.Maximum.Value)}
            </div>
        </section>
    )
}