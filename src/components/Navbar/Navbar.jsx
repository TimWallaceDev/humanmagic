import logo from "../../assets/images/black-logo.png"
import hamburgerLogo from "../../assets/icons/hamburger.svg"
import "./Navbar.scss"
import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <nav className="navbar" id="navbar">
            <div className="navbar__brand">
                <img className="navbar__logo" src={logo} alt="human magic logo"/>
                <h1 className="navbar__heading">Human Magic</h1>
            </div>

            <ul className="navbar__items">
                <li className="navbar__item">
                    <link className="navbar__link" to="/">Home</link>
                </li>
                <li className="navbar__item">
                    <link className="navbar__link" to="/dates">Show Dates</link>
                </li>
                <li className="navbar__item">
                    <link className="navbar__link" to="/live-footage">Live Footage</link>
                </li>
                <li className="navbar__item">
                    <link className="navbar__link" to="/team">Team</link>
                </li>
                <li className="navbar__item">
                    <link className="navbar__link" to="/shop">Shop</link>
                </li>
                <li className="navbar__item">
                    <link className="navbar__link" to="/our-story">Our Story</link>
                </li>
            </ul>

            <div className="navbar__mobile">
                <img className="navbar__hamburger" src={hamburgerLogo} alt="hamburger logo"/>
            </div>
        </nav>
    )
}