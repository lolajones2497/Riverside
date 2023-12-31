import { useState } from "react";

// styles
import "./Calculator.css";
import "../contact/loadingSpinner.css";

export default function Calculator() {
  const [product, setProduct] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [result, setResult] = useState("");
  const [equation, setEquation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [reset, setReset] = useState(false);

  const handleProduct = (e) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);

    if (selectedProduct === "1/4 minus") {
      setEquation('1/4" Minus');
    } else if (selectedProduct === "1/2 rock") {
      setEquation('1/2" Rock');
    } else if (selectedProduct === "3/4 rock") {
      setEquation('3/4" Rock');
    } else if (selectedProduct === "1 rock") {
      setEquation('1" Rock');
    } else if (selectedProduct === "1 to 3 rip rap") {
      setEquation('1" to 3" Rip Rap');
    } else if (selectedProduct === "3 to 6 rip rap") {
      setEquation('3" to 6" Rip Rap');
    } else {
      setEquation("");
    }
  };

  const calculateSquareFoot = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsButtonClicked(true);

    setTimeout(() => {
      let conversionFactor = 0;
      if (equation === '1/4" Minus') {
        conversionFactor = 1 / 110;
      } else if (equation === '1/2" Rock') {
        conversionFactor = 1 / 110;
      } else if (equation === '3/4" Rock') {
        conversionFactor = 1 / 100;
      } else if (equation === '1" Rock') {
        conversionFactor = 1 / 100;
      } else if (equation === '1" to 3" Rip Rap') {
        conversionFactor = 1 / 80;
      } else if (equation === '3" to 6" Rip Rap') {
        conversionFactor = 1 / 56;
      }
      const area = length * width * conversionFactor;
      setResult(area.toFixed(2));

      setIsLoading(false);
      setReset(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsButtonClicked(false);
    setReset(false);
    setResult("");
    setWidth("");
    setLength("");
    setProduct("");
  };

  return (
    <>
      <form className="centers">
        {/* <h13 className="mat">Materials Calculator:</h13> */}
        <div className="product">
          <label>
            Product:
            <select
              value={product}
              onChange={handleProduct}
              className="dropclick"
            >
              <option value="">Select a Product/ Size</option>
              <option value="1/4 minus">1/4" Minus</option>
              <option value="1/2 rock">1/2" Rock</option>
              <option value="3/4 rock">3/4" Rock</option>
              <option value="1 rock">1" or 7/8" Rock</option>
              <option value="1 to 3 rip rap">1" to 3" Rip Rap</option>
              <option value="3 to 6 rip rap">3" to 6" Rip Rap</option>
            </select>
          </label>
        </div>
        <div className="wi">
          <label>
            Width (in feet):
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </label>
        </div>
        <div className="leng">
          <label>
            Length (in feet):
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </label>
        </div>
        {!isButtonClicked && (
          <button onClick={calculateSquareFoot} className="tonnage">
            {isLoading ? "" : "Calculate"}
          </button>
        )}
        {isLoading ? (
          <div className="lds-ring">
            <div></div>
          </div>
        ) : (
          reset && (
            <>
              <p className="answerton">
                You need approximately: {result}{" "}
                {result > 1.01 ? "tons" : "ton"}
              </p>
              <button onClick={resetForm} className="reset">
                Reset
              </button>
            </>
          )
        )}
      </form>
    </>
  );
}
