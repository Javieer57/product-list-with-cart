interface Props {
  name: string;
  handleClick: (quantity: number) => void;
}

export const AddToCartButton = ({ name, handleClick }: Props) => {
  return (
    <button
      className="rounded-full bg-white py-2 px-6 flex gap-2 border border-red text-rose-900 hover:text-red items-center font-semibold transition-colors"
      aria-label={`Add ${name} to cart`}
      onClick={() => handleClick(1)}
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt="" aria-hidden />
      Add to Cart
    </button>
  );
};
