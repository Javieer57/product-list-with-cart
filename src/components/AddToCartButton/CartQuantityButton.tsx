import { DecrementButton, IncrementButton } from "./QuantityButtons";

interface Props {
  name: string;
  quantity: number;
  handleClick: (quantity: number) => void;
}

export const CartQuantityButton = ({ name, quantity, handleClick }: Props) => {
  return (
    <div className="rounded-full bg-red py-2 px-6 gap-2 flex w-full text-white items-center font-semibold">
      <DecrementButton name={name} handleClick={handleClick} />

      <p className="grow text-center">
        <span className="sr-only">{`Quantity of ${name} in cart:`}</span>
        {quantity}
      </p>

      <IncrementButton name={name} handleClick={handleClick} />
    </div>
  );
};
