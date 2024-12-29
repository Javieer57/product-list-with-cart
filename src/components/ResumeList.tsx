import { currencyFormatted } from "../utils/currency";
import { Remove } from "./icons/Remove";

interface DessertResumeData {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface ResumeListItemProps {
  data: DessertResumeData;
  handleClick: () => void;
}

const mockData: DessertResumeData[] = [
  {
    name: "Classic Tiramisu",
    quantity: 1,
    price: 5.5,
    total: 5.5,
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    quantity: 4,
    price: 7.0,
    total: 28.0,
  },
  {
    name: "Vanilla Panna Cotta",
    quantity: 2,
    price: 6.5,
    total: 13.0,
  },
];

export const ResumeList = () => {
  return (
    <ul className="space-y-4">
      {mockData.map((dessert) => (
        <ResumeListItem data={dessert} handleClick={() => {}} />
      ))}
    </ul>
  );
};

const ResumeListItem = ({ data, handleClick }: ResumeListItemProps) => {
  const { name, quantity, price, total } = data;

  const formattedPrice = currencyFormatted(price);
  const formattedTotal = currencyFormatted(total);

  return (
    <li className="flex items-center justify-between gap-2 border-b border-rose-100 pb-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-rose-900">{name}</h4>

        <p className="flex items-baseline gap-4">
          <span className="text-sm font-bold text-red" aria-hidden="true">
            <span className="sr-only">Quantity:</span>
            {quantity}
            <span aria-hidden="true">x</span>
          </span>

          <div className="flex gap-2">
            <span className="text-rose-500">
              <span aria-hidden="true">@</span>
              <span className="sr-only">Unit price:</span>
              {formattedPrice}
            </span>

            <span className="font-medium text-rose-500">
              <span className="sr-only">Total price:</span>
              {formattedTotal}
            </span>
          </div>
        </p>
      </div>
      <button
        aria-label="Remove Classic Tiramisu from cart"
        className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-300 text-center text-rose-300 transition-colors hover:border-rose-900 hover:text-rose-900 focus:border-rose-900 focus:text-rose-900"
        onClick={handleClick}
      >
        <Remove />
      </button>
    </li>
  );
};
