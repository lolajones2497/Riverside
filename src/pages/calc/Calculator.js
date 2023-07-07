import { useState } from "react";

// styles
import "./Calculator.css";

export default function Calculator() {
  const [product, setProduct] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [result, setResult] = useState("");
  const [equation, setEquation] = useState("");

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

  const calculateSquareFoot = () => {
    let conversionFactor = 0;
    if (equation === '1/4" Minus ') {
      conversionFactor = 0.0088;
    } else if (equation === '1/2" Rock') {
      conversionFactor = 0.009;
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
  };

  return (
    <div className="center">
      <div className="product">
        <label>
          Product:
          <select value={product} onChange={handleProduct}>
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
      <button onClick={calculateSquareFoot}>Calculate</button>
      <p>Approximate square footage required:{result}</p>
    </div>
  );
}
