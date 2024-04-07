import logo from "../../assets/images/black-logo.png"
import "./NavbarBootstrap.scss"

export function NavbarBootstrap() {

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img className="img-fluid black-logo" src={logo} alt="Human Magic Lightning Logo" />
                    <span className="logo-human-magic">Human Magic</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="dates.html">Show Dates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="live.html">Live Footage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="buffet.html">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="bio.html">Our Story</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
