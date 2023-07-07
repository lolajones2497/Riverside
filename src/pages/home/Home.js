import { Link } from "react-router-dom";

// styles
import "./Home.css";

// images
import background from "../../images/homebackground.jpg";
import shovel from "../../images/customerdiy.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdConstruction } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";
import { LuShovel } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="top">
        <div className="leftText">
          <h1 className="text">Riverside Rock and Boulder</h1>
          <h2 className="text2">Decorative Rock, Delivery, & Supplies</h2>
          <h2 className="text3">
            Family and veteran owned and operated <br></br>proudly since 2002
          </h2>
        </div>
        <div className="head">
          <img
            src={background}
            alt="background landscape image"
            className="background"
          />
        </div>
      </div>
      <h1 className="heading">Our Services</h1>
      <div className="boxes">
        <div className="box">
          <div className="icon">
            <CiDeliveryTruck />
          </div>
          <Link to="/rock" className="name">
            Decorative Rock & Delivery
          </Link>
          <div className="descrip">
            {" "}
            Check out our landscape rock and delivery options!
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <MdConstruction />
          </div>
          <Link to="/supplies" className="name">
            Landscape Materials & Delivery
          </Link>
          <div className="descrip">
            {" "}
            Check out our landscaping materials and delivery options!
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <PiPlantLight />
          </div>
          <Link to="/services" className="name">
            Landscaping Services
          </Link>
          <div className="descrip">
            Check out our landscaping and other service options!
          </div>
        </div>
      </div>
      <div className="line"></div>

      <div className="customer">
        <div className="diy">
          <h1 className="headin">Are you a DIY customer?</h1>
          <h2 className="offer">We offer:</h2>
          <ul>
            <li className="facts">
              <div className="shovel">
                <LuShovel />
              </div>
              Decorative rock for any DIY project
            </li>
            <li className="facts">
              <div className="shovel">
                <LuShovel />
              </div>
              Product delivery
            </li>
            <li className="facts">
              <div className="shovel">
                <LuShovel />
              </div>
              Debris pickup and haul off
            </li>
            <li className="facts">
              <div className="shovel">
                <LuShovel />
              </div>
              Veteran and senior discounts
            </li>
          </ul>
          <div className="lin">
            <Link className="link">Browse our products and services!</Link>
          </div>
        </div>
        <div className="cust">
          <img
            src={shovel}
            alt="customer holding shovel for rock"
            className="shovelpic"
          />
        </div>
      </div>

      <div className="line"></div>

      <div className="everything">
        <h2 className="forgotten">
          “Quality is remembered long after price is forgotten”
        </h2>
        <div className="promise">
          <div className="motto">
            <div className="price">
              <FaHandsHelping />
            </div>
            <h2 className="blah">Our promise to you</h2>
            <h5 className="weprom">
              We promise to provide you the customer with great services and
              products at a great price. Honesty and integrity is priority at
              Riverside Rock & Boulder.
            </h5>
          </div>
          <div className="five">
            <div className="price">
              <MdOutlinePriceChange />
            </div>
            <h2 className="blah">5% Guarantee </h2>
            <h5 className="weprom">
              We pledge to you the Customer that we have the best pricing, if
              not, we will beat our competitors price by 5%! Please call our
              office for more information.
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
}
