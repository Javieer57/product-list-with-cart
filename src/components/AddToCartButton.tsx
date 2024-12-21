import { useCallback, useState } from "react";
import { Minus } from "./icons/Minus";
import { Plus } from "./icons/Plus";

interface ButtonProps {
  name: string;
}

const buttonStyles =
  "rounded-full border border-white w-4 h-4 flex justify-center items-center hover:text-red hover:bg-white relative grow-0 transition-colors";
const buttonIconStyles = "absolute left-1/2 -translate-x-1/2";

export const AddToCartButton = ({ name }: ButtonProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = useCallback((quantity: number) => {
    setQuantity((prev) => Math.max(prev + quantity, 0));
  }, []);

  return (
    <div className="absolute bottom-0 px-11 w-full flex justify-center">
      {quantity === 0 ? (
        <button
          className="rounded-full bg-white py-2 px-6 flex gap-2 border border-red text-rose-900 hover:text-red items-center font-semibold transition-colors"
          aria-label={`Add ${name} to cart`}
          onClick={() => handleClick(1)}
        >
          <img src="/assets/images/icon-add-to-cart.svg" alt="" aria-hidden />
          Add to Cart
        </button>
      ) : (
        <div className="rounded-full bg-red py-2 px-6 gap-2 flex w-full text-white items-center font-semibold">
          <button
            className={buttonStyles}
            aria-label={`Remove one ${name} from cart`}
            onClick={() => handleClick(-1)}
          >
            <Minus className={buttonIconStyles} />
          </button>
          <p className="grow text-center">
            <span className="sr-only">{`Quantity of ${name} in cart:`}</span>
            {quantity}
          </p>
          <button
            className={buttonStyles}
            aria-label={`Add one more ${name} to cart`}
            onClick={() => handleClick(1)}
          >
            <Plus className={buttonIconStyles} />
          </button>
        </div>
      )}
    </div>
  );
};
