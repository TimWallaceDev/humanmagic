import "./Show.scss"
import poster from "../../assets/posters/may4poster.jpg"
import posterBottom from "../../assets/posters/may4posterbottom.jpg"
import { Link } from "react-router-dom"


export function Show() {

    return (
        <article className="show">
            <div className="show__poster-container">
                <img src={posterBottom} alt="may 4 show poster" className="show__poster show__poster--tablet" />
                <img src={poster} alt="may 4 show poster" className="show__poster show__poster--mobile" />
            </div>

            <div className="show__information">
                <div className="show__overlay">
                    <h1 className="show__date">May 4th, 2024</h1>
                    <h3 className="show__city">Toronto, ON</h3>
                    <h2 className="show__venue">3030 Dundas</h2>

                    <Link to="https://www.eventbrite.ca/e/human-magic-live-at-3030-dundas-west-tickets-877661227357">
                        <button className="show__button">Tickets</button>
                    </Link>

                </div>
            </div>
        </article>
    )
}