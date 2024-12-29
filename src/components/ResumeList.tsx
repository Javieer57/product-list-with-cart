import { Remove } from "./icons/Remove";

export const ResumeList = () => {
  return (
    <ul className="pb-4 border-b border-rose-100">
      <ResumeListItem />
    </ul>
  );
};

const ResumeListItem = () => {
  return (
    <li className="flex justify-between items-center">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-rose-900">Classic Tiramisu</h4>

        <p className="flex items-baseline gap-4">
          <span className="font-bold text-red text-sm" aria-hidden="true">
            <span className="sr-only">Quantity:</span>1
            <span aria-hidden="true">x</span>
          </span>

          <div className="flex gap-2">
            <span className="text-rose-500">
              <span aria-hidden="true">@</span>
              <span className="sr-only">Unit price:</span>
              $5.50
            </span>

            <span className="text-rose-500 font-medium">
              <span className="sr-only">Total price:</span>
              $5.50
            </span>
          </div>
        </p>
      </div>
      <button
        aria-label="Remove Classic Tiramisu from cart"
        className="text-rose-300 focus:text-rose-900 focus:border-rose-900 hover:text-rose-900 hover:border-rose-900 transition-colors rounded-full border border-rose-300 w-4 h-4 flex relative justify-center items-center"
      >
        <Remove className="absolute left-1/2 -translate-x-1/2" />
      </button>
    </li>
  );
};
