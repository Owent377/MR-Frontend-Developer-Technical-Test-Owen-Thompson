import Product from "../product";

/**
 *  Renders the Products added to the users
 * cart (incomplete)
 */
const Preview = () => {
  return (
    <div className="cart-container">
      <Product isPreview={true} />
      <Product isPreview={true} />
    </div>
  );
};

export default Preview;
