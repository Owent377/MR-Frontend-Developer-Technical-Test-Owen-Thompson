import { useState, useEffect } from "react";
import Image from "./image";
import Details from "./details";

export type sizeOptionsProps = {
  id: number;
  label: string;
};

export type ProductProps = {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  imageURL?: string;
  sizeOptions?: sizeOptionsProps[];
  isPreview?: Boolean;
};

/**
 * Generates the Product component. Renders
 * based on a useEffect hook, which queries the
 * Moustache Republic API for product data.
 */
const Product = ({ isPreview }: { isPreview: Boolean }) => {
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        await setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <>
      {product && (
        <div
          className={
            isPreview ? "preview-product-container" : "product-container"
          }
        >
          <Image
            isPreview={isPreview}
            imageURL={product.imageURL}
            imageDescription={product.title}
          />
          <Details
            title={product.title}
            description={product.description}
            price={product.price}
            sizeOptions={product.sizeOptions}
            isPreview={isPreview}
          />
        </div>
      )}
    </>
  );
};

export default Product;
