import { memo } from "react";

export const ConfirmOrderButton = memo(() => {
  return (
    <button className="w-full rounded-full bg-red p-4 font-medium text-white">
      Confirm Order
    </button>
  );
});
