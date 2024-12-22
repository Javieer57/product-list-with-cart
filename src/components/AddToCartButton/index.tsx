import { useCallback, useState } from "react";
import { CartQuantityButton } from "./CartQuantityButton";
import { AddToCartButton } from "./AddToCartButton";

interface Props {
  name: string;
}

const AddToCartWrapper = ({ name }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = useCallback((quantity: number) => {
    setQuantity((prev) => Math.max(prev + quantity, 0));
  }, []);

  return (
    <div className="absolute bottom-0 w-full flex justify-center">
      {quantity === 0 ? (
        <AddToCartButton name={name} handleClick={handleClick} />
      ) : (
        <CartQuantityButton
          name={name}
          handleClick={handleClick}
          quantity={quantity}
        />
      )}
    </div>
  );
};

export default AddToCartWrapper;
