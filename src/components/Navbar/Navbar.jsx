import logo from "../../assets/images/black-logo.png"
import hamburgerLogo from "../../assets/icons/hamburger.svg"
import "./Navbar.scss"

export function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <img className="navbar__logo" src={logo} alt="human magic logo"/>
                <h1 className="navbar__heading">Human Magic</h1>
            </div>

            <ul className="navbar__items">
                <li className="navbar__item">
                    <a className="navbar__link" href="/">Home</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="">Show Dates</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="">Live Footage</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="">Team</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="">Shop</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="">Our Story</a>
                </li>
            </ul>

            <div className="navbar__mobile">
                <img className="navbar__hamburger" src={hamburgerLogo} alt="hamburger logo"/>
            </div>
        </nav>
    )
}