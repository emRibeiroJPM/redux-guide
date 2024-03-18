import cartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseQuantity = (payload) => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseQuantity = (payload) => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
