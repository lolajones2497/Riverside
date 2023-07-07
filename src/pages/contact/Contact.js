import Dumptruck from "../../images/dump.jpg";
import "./Contact.css";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="containersss">
      <div className="lines"></div>
      <div className="boxx">
        <div className="dump">
          <img
            src={Dumptruck}
            alt="background dumptruck dropping boulders"
            className="dumptruck"
          />
        </div>
        <div className="rightboxs">
          <h11 className="ourstory">Our Story</h11>
          <h12 className="us">
            Riverside Rock & Boulder was started back in 2002 with one truck and
            a lot of family support. Our family has over 80 years of trucking
            experience hauling landscape and aggregate materials. As we grew we
            branched out and started spreading rock and installing full
            landscape packages for homeowners and some commercial projects. We
            weathered the recession and now have regained our footing and are
            ready to provide our neighbors with landscape products and services
            once again. Servicing: Phoenix, Tempe, Mesa, Gilbert, Chandler,
            Apache Junction, Queen Creek, Ahwatukee San Tan Valley Arizona
          </h12>
        </div>
      </div>
      <div className="contactform">
        <Form />
      </div>
    </div>
  );
}
