import data from "../../public/assets/mock/desserts.json";
import { DessertCard } from "./DessertCard";

export const DessertsGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
      {data.map((dessert) => (
        <DessertCard data={dessert} key={dessert.name} />
      ))}
    </div>
  );
};
