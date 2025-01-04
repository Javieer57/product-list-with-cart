import { DessertData } from "../types/dessert";
import { currencyFormatted } from "../utils/currency";
import AddToCartWrapper from "./AddToCartButton";

export const DessertCard = ({ data }: { data: DessertData }) => {
  return (
    <article className="space-y-4">
      <DessertCardImage data={data} />
      <DessertCardDetails {...data} />
    </article>
  );
};

const DessertCardImage = ({ data }: { data: DessertData }) => {
  const { image, name } = data;

  return (
    <div className="relative pb-5">
      <picture>
        <source srcSet={image.mobile} media="(max-width: 624px)" />
        <source srcSet={image.tablet} media="(max-width: 768px)" />
        <img
          src={image.desktop}
          alt={name}
          className="h-52 w-full rounded-lg object-cover sm:h-auto"
        />
      </picture>

      <AddToCartWrapper data={data} />
    </div>
  );
};

const DessertCardDetails = ({ category, name, price }: DessertData) => {
  return (
    <div className="space-y-1">
      <p className="text-sm text-rose-500">{category}</p>
      <h3 className="font-semibold text-rose-900">{name}</h3>
      <p className="font-semibold text-red">{currencyFormatted(price)}</p>
    </div>
  );
};
