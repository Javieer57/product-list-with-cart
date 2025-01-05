import { CarbonNeutralAdvertise } from "./CarbonNeutralAdvertise";
import { ConfirmOrderButton } from "./ConfirmOrderButton";
import { ResumeCounter } from "./ResumeCounter";
import { ResumeList } from "./ResumeList";
import { ResumeTotal } from "./ResumeTotal";

export const Resume = () => {
  return (
    <div className="space-y-6 rounded-lg border bg-white p-6">
      <h2 className="text-2xl font-bold text-red">
        Your Cart <ResumeCounter />
      </h2>

      <ResumeList />

      <ResumeTotal />

      <CarbonNeutralAdvertise />

      <ConfirmOrderButton />
    </div>
  );
};
