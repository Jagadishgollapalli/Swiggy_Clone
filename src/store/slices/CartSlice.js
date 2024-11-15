import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.total += 1;
    },
    cartItems: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const item = state.items.find((item) => item.card.info.id === id);
      if (item) {
        item.quantity = increment
          ? item.quantity + 1
          : item.quantity > 1
          ? item.quantity - 1
          : 1;
      }
    },
    deleteItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      }
      state.total -= action.payload.quantity;
    },
  },
});

export const { addItem, cartItems, updateQuantity, deleteItem } =
  CartSlice.actions;
export default CartSlice.reducer;
