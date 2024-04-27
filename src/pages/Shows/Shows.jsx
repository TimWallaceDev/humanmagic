import "./Shows.scss"
import { Show } from "../../components/Show/Show"

export function Shows() {



    return (
        <main className="shows">
            <h1 className="shows__heading">Upcoming Shows</h1>
            <hr className="hr hr--top" />
            <div className="shows__content">
                <Show/>
                {/* <Show/> */}
                <hr className="hr hr--show-bottom"/>
            </div>
            <hr className="hr hr--bottom-top" />
            <hr className="hr hr--bottom-bottom" />
        </main>
    )
}