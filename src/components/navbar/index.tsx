import Cart from "./cart";

/**
 * generates the navbar
 * displayed at the top of the screen.
 * contains a Cart component.
 */
const Navbar = () => {
  return (
    <div className="nav-bar">
      <Cart />
    </div>
  );
};

export default Navbar;
