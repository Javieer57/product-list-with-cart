import { DessertData, Image } from "../types/dessert";
import AddToCartWrapper from "./AddToCartButton";

export const DessertCard = ({ data }: { data: DessertData }) => {
  return (
    <article className="space-y-4">
      <DessertCardImage image={data.image} name={data.name} />
      <DessertCardDetails {...data} />
    </article>
  );
};

const DessertCardImage = ({ image, name }: { image: Image; name: string }) => {
  return (
    <div className="relative pb-5">
      <picture>
        <source srcSet={image.mobile} media="(max-width: 624px)" />
        <source srcSet={image.tablet} media="(max-width: 768px)" />
        <img
          src={image.desktop}
          alt={name}
          className="rounded-lg h-52 w-full sm:h-auto object-cover"
        />
      </picture>

      <AddToCartWrapper name={name} />
    </div>
  );
};

const DessertCardDetails = (data: DessertData) => {
  const formattedPrice = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(data.price);

  return (
    <div className="space-y-1">
      <p className="text-sm text-rose-500">{data.category}</p>
      <h3 className="font-semibold text-rose-900">{data.name}</h3>
      <p className="text-red font-semibold">{formattedPrice}</p>
    </div>
  );
};
