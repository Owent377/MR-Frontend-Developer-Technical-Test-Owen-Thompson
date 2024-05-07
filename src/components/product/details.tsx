import React from "react";
import { useState } from "react";
import { ProductProps } from ".";

/**
 * renders the product information
 * provided by the Product component.
 */
const Details = ({
  title,
  description,
  price,
  sizeOptions,
  isPreview,
}: ProductProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
    console.log(selectedSize);
  };

  if (!isPreview) {
    return (
      <div className="details-container">
        <h3>{title}</h3>
        <p>
          <strong>${price}.00</strong>
        </p>
        <p>{description}</p>
        <form>
          <label>
            SIZE<span>*</span>
          </label>
          <div className="size-buttons-container">
            {sizeOptions?.map((option) => (
              <button className="size-buttons">{option.label}</button>
            ))}
          </div>
        </form>
        <button className="add-to-cart-button">ADD TO CART</button>
      </div>
    );
  }

  return (
    <div className="preview-details-container">
      <h3>{title}</h3>
      <p>
        <strong>${price}.00</strong>
      </p>
      <p>Size: M</p>
    </div>
  );
};

export default Details;
