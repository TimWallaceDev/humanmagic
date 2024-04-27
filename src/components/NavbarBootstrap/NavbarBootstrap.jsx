import { useEffect } from "react";
import logo from "../../assets/images/black-logo.png"
import "./NavbarBootstrap.scss"
import { Link, useLocation } from "react-router-dom"

export function NavbarBootstrap() {

    const location = useLocation();

    useEffect(() => {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // Close the navbar by toggling the collapse class
                if (window.innerWidth < 768) {
                console.log("clicking")
                document.querySelector('.navbar-collapse').classList.add('collapsing');
                document.querySelector('.navbar-collapse').classList.remove('show');
                }
            });
        });
        console.log("listening for lcick")
    }, [])



    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="img-fluid black-logo" src={logo} alt="Human Magic Lightning Logo" />
                    <span className="logo-human-magic">Human Magic</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/shows' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/shows">Show Dates</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/live-footage' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/live-footage">Live Footage</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li> */}
                        <li className={`nav-item ${location.pathname === '/our-story' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/our-story">Our Story</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
