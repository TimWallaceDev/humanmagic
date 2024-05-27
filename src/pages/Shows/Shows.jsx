import "./Shows.scss"
import { Show } from "../../components/Show/Show"

export function Shows() {



    return (
        <main className="shows">
            <h1 className="shows__heading">Upcoming Shows</h1>
            <hr className="hr hr--top" />
            <div className="shows__content">
                {/* <Show/> */}
                {/* <hr className="hr hr--show-bottom"/> */}
                <p>No upcoming shows...</p>
                <p>Check back soon!</p>
            </div>
            <hr className="hr hr--bottom-top" />
            <hr className="hr hr--bottom-bottom" />
        </main>
    )
}