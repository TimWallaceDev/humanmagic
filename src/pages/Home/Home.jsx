import './Home.scss'
import { Album } from '../../components/Album/Album'

//import album covers
import brightness from "../../assets/images/brightness.png"
import coldBlooded from "../../assets/images/coldblooded-min.png"
import colorfulOverjoy from "../../assets/images/COfront3-min.png"
import myBrother from "../../assets/images/mybrotherart-min.jpg"

export function Home() {

    return (
        <>
            {/* brightness */}
            <Album album={{ name: "Brightness", date: "3.17.2023 RELEASE", link: "https://distrokid.com/hyperfollow/humanmagic1/brightness", tracks: ["Brightness", "Brightness - Radio Edit"], cover: brightness }} />

            {/* cold blooded */}
            <Album album={{ name: "Cold Blooded", date: "10.26.2022 RELEASE", link: "https://open.spotify.com/album/4J1iL8T7WyxB2mcpYsIC9b", tracks: ["Cold Blooded"], cover: coldBlooded }} />

            {/* Colorful Overjoy */}
            <Album album={{ name: "Colorful // Overjoy", date: "11.27.2021 RELEASE", link: "https://open.spotify.com/album/2uYhxL4D2URl7eMo8xRfsI", tracks: ["Colorful", "overjoy", "the magnetic wave", "it's our magic", "thank god for you"], cover: colorfulOverjoy }} />

            {/* My Brother */}
            <Album album={{ name: "My Brother", date: "11.27.2021 RELEASE", link: "https://open.spotify.com/album/79rUzfaxvTcxAOudPePnoM", tracks: ["my brother pt.1", "my brother pt.2"], cover: myBrother }} />

        </>
    )
}