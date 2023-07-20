import { useState } from "react";

// styles
import "./Rock.css";
import DetailsDropdown from "./DetailsDropdown";

export const RockPricing = [
  {
    name: "Apache Brown",
    price: '3/8" minus $34/ton',
    price2: '5/8" Screened: $61/ton',
    price3: '7/8" Screened: $61/ton',
  },
  {
    name: "Apache Red",
    price: '1/2" Screened: $65/ton',
    price2: '1" Screened: $65/ton',
  },
  {
    name: "Desert Brown",
    price: '1/2" Screened: $69/ton',
    price2: '1" Screened: $65/ton',
  },
  {
    name: "Gila Brown",
    price: '1/2" Screened: $67.50/ton',
    price2: '1" Screened: $65.95/ton',
  },
  {
    name: "Madison Gold",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '1" Screened: $65/ton',
  },
  {
    name: "McKenna Gold",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Sized: $69/ton',
    price3: '1" Sized: $65/ton',
  },
  {
    name: "Riveside Sky",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '3/4" Screened: $65/ton',
  },
  {
    name: "Riverside Brown",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '3/4" Screened: $65/ton',
  },
  {
    name: "Riverside Horizon",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '3/4" Screened: $65/ton',
  },
  {
    name: "Riverside Marble Series",
    price: '1/2" Screened White: $195/ton',
    price2: '1/2" Screened Titanium: $195/ton',
    price3: '1/2" Screened Black: $195/ton',
  },
  {
    name: "San Tan Grey",
    price: '1/4" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '1" Screened: $65/ton',
  },
  {
    name: "Sunset Gold",
    price: '5/8" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '3/4" Screened: $65/ton',
  },
  {
    name: "Table Mesa Brown",
    price: '3/8" Minus: $38/ton',
    price2: '1/2" Screened: $69/ton',
    price3: '1" Screened: $65/ton',
  },
];

export const RipRapPricing = [
  { name: "Apache Brown", price: '3"-8": $71.95/ton' },
  { name: "Autumn Red", price: '3"-10": $56.50/ton' },
  { name: "San Tan Grey", price: '3"-10": $56.50/ton' },
  { name: "Table Mesa Brown", price: '3"-10": $56.50/ton' },
];

export const BoulderPricing = [
  { name: "Riverside Marble Series", price: "$0.20/lb." },
  { name: "San Tan Grey", price: "$0.10/lb." },
  { name: "Surface Select", price: "$0.12/lb." },
];

export const RiverRockPricing = [
  { name: "Pea Gravel", price: "$41.95/ton" },
  {
    name: "RiverRock",
    price: '1/2"-1": $41.95/ton',
    price2: '1"-3": $40.75/ton',
    price3: '3"-8": $44.50/ton',
  },
];

export const SoilPricing = [
  { name: "Fill Dirt", price: "$21.95/ton" },
  { name: "Screened Dirt", price: "$23.95/ton" },
  { name: "Bulk Premium Potting Soil", price: "$67.50/ton" },
  { name: "ABC", price: "$33.50/ton" },
  { name: "Mortar", price: "$40.75/ton" },
  { name: "Mortar Mix (80 lb. bag)", price: "$13.96/each" },
  { name: "Silica Sand (50 lb. bag)", price: "$10.50/each" },
];

export default function Rock() {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="rock-container">
        <div className="top-rock">
          <div className="products-avail"> Available Products</div>
          <div className="rock-info">
            <ul>
              <li>Minus: Contains a lot of fines.</li>
              <li>
                {" "}
                Screened: Up to 60% to 80% of fines have been sifted out.
              </li>
              <li>
                Washed: Products have been washed to remove majority of fines.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="rock-subheadings">Decorative Rock</div>
        <div className="rock-pricing-containter">
          <div className="drop">
            {RockPricing.map((item, index) => (
              <DetailsDropdown
                key={index}
                name={item.name}
                price={item.price}
                price2={item.price2}
                price3={item.price3}
              />
            ))}
          </div>
        </div>
        <div className="riprap-container">
          <div className="rock-subheadings">Rip Rap</div>
          <div className="drop">
            {RipRapPricing.map((item, index) => (
              <DetailsDropdown
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="boudler-container">
          <div className="rock-subheadings">Boulders</div>
          <div className="drop">
            {BoulderPricing.map((item, index) => (
              <DetailsDropdown
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="river-container">
          <div className="rock-subheadings">River Rock Products</div>
          <div className="drop">
            {RiverRockPricing.map((item, index) => (
              <DetailsDropdown
                key={index}
                name={item.name}
                price={item.price}
                price2={item.price2}
                price3={item.price3}
              />
            ))}
          </div>
        </div>
        <div className="soil-container">
          <div className="rock-subheadings">Soil and Sand Products</div>
          <div className="drop">
            {SoilPricing.map((item, index) => (
              <DetailsDropdown
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="delivery-container">
          <div className="rock-subheadings">Delivery Fee (per product) </div>
          <p>9 tons or less:</p>
          <div className="del-fees">
            <ul>
              <li>1-5 miles: $50.00</li>
              <li>6-10 miles: $60.00</li>
              <li>11-15 miles: $70.00</li>
              <li>16-20 miles: $80.00</li>
              <li>20+ miles: Call for Quote</li>
            </ul>
          </div>
          <p className="free-del">
            Free delivery for deliveries with 10 tons or more (within a 10 mile
            radius)
          </p>
        </div>
      </div>
    </main>
  );
}
