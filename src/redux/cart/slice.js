import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const alreadyInCart = action.payload.some(
        (product) => product.id === action.payload.id
      );

      if (alreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return;
    },
  },
});
