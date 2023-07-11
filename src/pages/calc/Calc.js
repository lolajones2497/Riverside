import { Link } from "react-router-dom";
import Calculator from "./Calculator";

// styles
import "./Calc.css";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Calc() {
  return (
    <main>
      <div className="lines"></div>
      <div className="ca">
        <div>
          <div className="head-calc">Materials Calculator</div> <br></br>
        </div>
        <div className="container-calc">
          <div className="helpans">
            <h11 className="help">Tips to measuring: </h11>
            <ul>
              <li>
                Measure your entire project in a square or rectangle for best
                results.
              </li>
              <li>
                When planning to cover an area with gravel account for the depth
                needed of the area. Will you need more than 2" of depth?
              </li>
              <li>
                Know the size of gravel or minus you need. The size and type of
                the gravel will affect the required product quantity.
                <span className="info-icon2">
                  <IoMdInformationCircleOutline />
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Calculator />
          </div>
        </div>
      </div>
      <div className="note">
        <div className="info-icon">
          <IoMdInformationCircleOutline />
        </div>
        <div className="purpose">
          The purpose of our materials calculator is to provide an estimated
          quantity of product(s) required for your project. To avoid shortages
          in product materials, we recommend getting 5-10% more product than the
          calculator recommends. It's important to note that variations in
          landscape elevation and other terrain factors can impact the accuracy
          of these results. Please be aware that the recommended tonnage is
          based on an area requiring only 2" of depth. If your project requires
          a different depth, kindly{" "}
          <b>
            <Link to="/contact" className="contact-link">
              contact us
            </Link>{" "}
          </b>
          for further assistance.
        </div>
      </div>
    </main>
  );
}
