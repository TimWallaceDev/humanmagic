import "./Footer.scss"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import spotify from "../../assets/icons/spotify.svg"
import youtube from "../../assets/icons/youtube.svg"
import { Link } from "react-router-dom"

export function Footer() {

    return (
        <footer className="footer">

            <div className="footer__socials">
                <Link to={"https://www.instagram.com/humanmagicnetwork/"}>
                    <img src={instagram} alt="instagram logo" className="footer__icon" />
                </Link>
                <Link to={"https://www.facebook.com/humanmagicstageband"}>
                    <img src={facebook} alt="facebook logo" className="footer__icon" />
                </Link>
                <Link to={"https://www.youtube.com/channel/UCGpE1E55AjA4kyDfoC5-oiw"}>

                    <img src={youtube} alt="youtube logo" className="footer__icon" />
                </Link>
                <Link to={"https://open.spotify.com/artist/66FW5R1nl4d7DFlYPjOy97"}>
                    <img src={spotify} alt="spotify logo" className="footer__icon" />
                </Link>
            </div>
        </footer>
    )
}