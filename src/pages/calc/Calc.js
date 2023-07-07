import { Link } from "react-router-dom";
import Calculator from "./Calculator";

// styles
import "./Calc.css";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Calc() {
  return (
    <main>
      <div className="ca">
        <div>
          <h9 className="ggg">What is a Materials Calculator?</h9>
          <h10 className="purpose">
            The purpose of our materials calculator is to provide an estimated
            quantity of product(s) that is required for your project. To avoid
            shortage in product materials, we recommend to get 5-10% more
            product than the calculator recommends. However, it's important to
            note that variations in landscape elevation and other terrain
            factors can impact the accuracy of these results.
          </h10>
        </div>
        <div>
          <h11 className="help">Tips to measuring: </h11>
          <ul>
            <li>
              Measure your entire project in a square or rectangle for best
              results.
            </li>
            <li>
              When planning to cover an area with gravel account for the depth
              of the area. Will you need more than 2" of depth?
            </li>
            <li>
              Know the size of gravel or minus you need. The size and type of
              the gravel will affect the required product quantity.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Calculator />
      </div>
      <div className="note">
        <div>
          <IoMdInformationCircleOutline />
        </div>
        <h5>
          Please note that the recommended result is to get a 2" depth. Please{" "}
          <Link to="/contact" className="contactus">
            contact us
          </Link>{" "}
          if your project requires a different depth of coverage.
        </h5>
      </div>
    </main>
  );
}
