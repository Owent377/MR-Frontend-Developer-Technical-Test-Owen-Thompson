type ImageProps = {
  imageURL?: string;
  imageDescription?: string;
  isPreview?: Boolean;
};

/**
 * renders the product image which sits alongside the
 * details component.
 */
const Image = ({ imageURL, imageDescription, isPreview }: ImageProps) => {
  return (
    <img
      className={isPreview ? "preview-image" : "image"}
      src={imageURL}
      alt={imageDescription}
    />
  );
};

export default Image;
