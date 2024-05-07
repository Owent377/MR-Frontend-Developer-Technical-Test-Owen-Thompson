import { useState } from "react";
import Preview from "./preview";

/**
 * displays a cart button and conditionally
 * renders this based on user input.
 */
const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <button className="cart-button" onClick={() => setCartOpen(!cartOpen)}>
        My Cart{" "}
      </button>
      {cartOpen && <Preview />}
    </div>
  );
};

export default Cart;
