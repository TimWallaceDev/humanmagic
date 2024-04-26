import "./Show.scss"
import poster from "../../assets/posters/may4poster.jpg"


export function Show() {

    return (
        <article className="show">
            <div className="show__poster-container">
                <img src={poster} alt="may 4 show poster" className="show__poster" />
            </div>

            <div className="show__information">

                <h1 className="show__date">May 4th, 2024</h1>
                <h3 className="show__city">Toronto, ON</h3>
                <h2 className="show__venue">3030 Dundas</h2>

                <button className="show__button">Tickets</button>
            </div>
        </article>
    )
}