import "./Rock.css";
import { useState } from "react";

export default function DetailsDropdown(props) {
  const { name, price, price2, price3 } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="rock-name-top">
        <p onClick={handleOpen} className="rock-name">
          {name}
          <span className="rock-icon">{isOpen ? "-" : "+"}</span>
        </p>
      </div>
      <div>
        {isOpen && (
          <p className="rock-price">
            {price}
            <p className="rock-price">{price2}</p>
            <p className="rock-price">{price3}</p>
          </p>
        )}
      </div>
    </div>
  );
}
