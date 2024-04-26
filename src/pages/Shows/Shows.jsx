import "./Shows.scss"
import { Show } from "../../components/Show/Show"

export function Shows() {



    return (
        <main className="shows">
            <hr className="hr hr--top" />
            <div className="shows__content">
                <Show/>
                {/* <Show/> */}
            </div>
            <hr className="hr hr--bottom-top" />
            <hr className="hr hr--bottom-bottom" />
        </main>
    )
}