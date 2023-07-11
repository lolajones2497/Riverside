import Dumptruck from "../../images/dump.jpg";
import "./Contact.css";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      <div className="lines"></div>
      <div className="container-contact">
        <div className="dump">
          <img
            src={Dumptruck}
            alt="background dumptruck dropping boulders"
            className="dumptruck"
          />
        </div>
        <div className="right-container">
          <h11 className="ourstory">Our Story</h11>
          <h12 className="us">
            Riverside Rock & Boulder was established in 2002 with humble
            beginnings—a single truck and the invaluable support of our family.
            With a combined experience of over 80 years in trucking,
            specializing in hauling landscape and aggregate materials, we laid
            the foundation for our journey. As our business grew, we expanded
            our services to include rock spreading and comprehensive landscape
            installations for both homeowners and select commercial projects. We
            navigated through the challenges of the recession, and today, we
            stand strong, ready to once again serve our community with
            top-quality landscape products and services. Based in Arizona, we
            proudly offer our expertise to the residents of Mesa, Chandler,
            Queen Creek, Coolidge, and San Tan Valley.
          </h12>
        </div>
      </div>
      <div className="contactform">
        <Form />
      </div>
    </>
  );
}
