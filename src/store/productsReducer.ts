import { DessertData } from "../types/dessert";

export type Product = DessertData & {
  quantity: number;
};
export type State = {
  selectedProducts: Record<number, Product>;
};
export type Action =
  | { type: "ADD_PRODUCT"; product: DessertData }
  | { type: "REMOVE_PRODUCT"; productId: number }
  | { type: "DELETE_PRODUCT"; productId: number };

export const initialState: State = { selectedProducts: {} };

export function productsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_PRODUCT":
      const existingItem = state.selectedProducts[action.product.id];

      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.product.id]: {
            ...action.product,
            quantity: existingItem ? existingItem.quantity + 1 : 1,
          },
        },
      };
    case "REMOVE_PRODUCT":
      const { [action.productId]: removedItem, ...rest } =
        state.selectedProducts;

      if (removedItem.quantity > 1) {
        return {
          ...state,
          selectedProducts: {
            ...rest,
            [action.productId]: {
              ...removedItem,
              quantity: removedItem.quantity - 1,
            },
          },
        };
      }

      return {
        ...state,
        selectedProducts: {
          ...rest,
        },
      };
    case "DELETE_PRODUCT":
      const { [action.productId]: deletedItem, ...restItems } =
        state.selectedProducts;

      return {
        ...state,
        selectedProducts: {
          ...restItems,
        },
      };
    default:
      throw new Error("Acción no reconocida");
  }
}
