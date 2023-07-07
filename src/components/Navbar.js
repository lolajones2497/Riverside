import { Link } from "react-router-dom";
import { useState } from "react";

// styles
import "./Navbar.css";
import rrbLogo from "../images/rrblogo.jpg";

export default function Navbar() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleEndpointClick = () => {
    setShowInfo(false);
  };

  return (
    <nav className="navbar">
      <div className="links">
        <div className="rrb">
          <a href="/" className="logo">
            <img src={rrbLogo} alt="logo" className="logopic" />
          </a>
        </div>
        <ul>
          <li>
            <div className="tabbox">
              <div
                className="tab"
                onClick={toggleInfo}
                onMouseEnter={toggleInfo}
                onMouseLeave={toggleInfo}
              >
                Products
              </div>
              {showInfo && (
                <ul className="endpoints">
                  <li onClick={handleEndpointClick}>
                    <Link to="/rock" className="rocknav">
                      Decorative Rock
                    </Link>
                  </li>
                  <li onClick={handleEndpointClick}>
                    <Link to="/turf" className="turfnav">
                      Artificial Turf
                    </Link>
                  </li>
                  <li onClick={handleEndpointClick}>
                    <Link to="/supplies" className="suppliesnav">
                      Pavers & Supplies
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li onClick={handleEndpointClick}>
            <Link to="/calc" className="calcnav">
              Materials Calculator
            </Link>
          </li>
          <li onClick={handleEndpointClick}>
            <Link to="/about" className="aboutnav">
              Services
            </Link>
          </li>
          <li onClick={handleEndpointClick}>
            <Link to="/Contact" className="contactnav">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
