import { Outlet, Link } from "react-router-dom";
import "../stylesheets/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Layout()
{

    return (

        <>

            <nav id="app-nav">

                <div id="nav-header">
                    Theone coder
                </div>

                <ul id="app-menu">

                    <li className="nav-item">
                        <Link to="/" className="nav-link" > <FontAwesomeIcon icon={faHome} /> <span>Accueil</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link" > <FontAwesomeIcon icon={faWallet} /> <span>Portfolio</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/skills" className="nav-link" > <FontAwesomeIcon icon={faGraduationCap} /> <span>Skills</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" > <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></Link>
                    </li>

                </ul>

            </nav>
        
        
            <Outlet />
        </>

    );

}