import { Link } from "react-router-dom";

// styles
import "./Footer.css";
import rrbLogo from "../images/rrblogo.jpg";
import { AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  const email = "sales@riversiderockandboulder.com";
  const phone = "+14808922023";

  return (
    <footer className="footer">
      <div className="left">
        <div className="rrblogo">
          <a href="/" className="logo">
            <img src={rrbLogo} alt="logo" className="logopic" />
          </a>
        </div>
        <div className="face">
          <p className="roc">ROC# 322876</p>
          <p className="facebook">
            <Link to="https://www.facebook.com/RRBlandscape">
              <AiOutlineFacebook />
            </Link>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="middle">
          <h3>Hours</h3>
          <h4>Monday - Friday:</h4>
          <p>06:30 AM - 4 PM</p>
          <h4>Saturday - Sunday:</h4>
          <p>CLOSED</p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <h4>Email:</h4>
          <a href={`mailto:${email}`}>
            {" "}
            <p className="email">Sales@riversiderockandboulder.com</p>
          </a>

          <h4>Phone Number:</h4>
          <a href={`tel:${phone}`}>
            {" "}
            <p className="email">(480)892-2023</p>
          </a>
          <h4>Address:</h4>
          <p>230 E Coolidge Ave Coolidge, AZ 85128</p>
        </div>
      </div>
    </footer>
  );
}
