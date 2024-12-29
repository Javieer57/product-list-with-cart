import { ResumeList } from "./ResumeList";

export const Resume = () => {
  return (
    <div className="p-6 bg-white rounded-lg space-y-6 border">
      <h2 className="font-bold text-2xl text-red">Your Cart</h2>

      <ResumeList />
    </div>
  );
};
