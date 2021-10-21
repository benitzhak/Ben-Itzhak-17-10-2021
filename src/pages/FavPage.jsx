import { useSelector } from "react-redux"
import { FavList } from "../cmps/FavList";


export const FavPage = () => {

const {favorites} = useSelector(state => state.weatherModule)

if(!favorites.length) return <div className="no-favs"><p>No favorites yet...</p></div>

    return (
        <section className="fav-page">
            <FavList favorites={favorites}/>
        </section>
    )
}