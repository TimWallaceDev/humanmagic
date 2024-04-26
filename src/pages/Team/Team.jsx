import "./Team.scss"
import { Member } from "../../components/Member/Member"
import james from "../../assets/images/members/james-min.jpg"
import katia from "../../assets/images/members/vocals-min.jpg"
import ray from "../../assets/images/members/ray-min.jpg"
import tbone from "../../assets/images/members/tbone-min.jpg"
import jake from "../../assets/images/members/drums-min.jpg"
import ashley from "../../assets/images/members/sax-min.jpg"

export function Team() {

    const members = [
        {
            name: "James",
            instrument: "Vocals / Bass",
            image: james
        },
        {
            name: "Katia",
            instrument: "Vocals",
            image: katia
        },
        {
            name: "Ray",
            instrument: "Guitar",
            image: ray
        },
        {
            name: "Jake",
            instrument: "Drums",
            image: jake
        },
        {
            name: "TBone",
            instrument: "Trombone",
            image: tbone
        },
        {
            name: "Ashley",
            instrument: "Sax / Woodwind",
            image: ashley
        },

    ]

    return (
        <main className="team">
            <hr className="hr hr--top" />
            <hr className="hr hr--top" />

            <div className="team__content">
                <h1 className="team__heading">Active Roster</h1>
                <section className="team__members">
                    <Member member={members[0]} className="member--0" />
                    <hr className="hr hr--mobile" />
                    <Member member={members[1]} className="member--1" />
                    <hr className="hr hr--mobile" />
                    <Member member={members[2]} className="member--2" />
                    <hr className="hr hr--mobile" />
                    <hr className="hr hr--tablet" />
                    <Member member={members[3]} className="member--3" />
                    <hr className="hr hr--mobile" />
                    <Member member={members[4]} className="member--4" />
                    <hr className="hr hr--mobile" />
                    <Member member={members[5]} className="member--5" />
                </section>

            </div>
            <hr className="hr hr--bottom-bottom" />


        </main>
    )
}