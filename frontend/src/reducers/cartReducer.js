import { createReducer } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const info =
  localStorage.getItem("shippingInfo") !== null
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {};

export const cartReducer = createReducer(
  { cartItems: items, shippingInfo: info },
  {
    addToCart: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, item],
        };
      }
    },
    removeCartItem: (state, action) => {
      return {
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  }
);
