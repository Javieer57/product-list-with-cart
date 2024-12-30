import { CarbonNeutral } from "./icons/CarbonNeutral";
import { ResumeList } from "./ResumeList";

export const Resume = () => {
  return (
    <div className="space-y-6 rounded-lg border bg-white p-6">
      <h2 className="text-2xl font-bold text-red">Your Cart</h2>

      <ResumeList />

      <p className="flex items-center justify-between">
        <span className="text-rose-900">Order Total</span>
        <span className="text-2xl font-bold text-rose-900">$46.50</span>
      </p>

      <CarbonNeutralAdvertise />

      <button className="w-full rounded-full bg-red p-4 font-medium text-white">
        Confirm Order
      </button>
    </div>
  );
};
const CarbonNeutralAdvertise = () => {
  return (
    <p className="flex items-center justify-center gap-2 rounded-lg bg-rose-100 p-4">
      <CarbonNeutral />
      This is a <span className="font-medium">carbon-neutral</span> delivery
    </p>
  );
};
