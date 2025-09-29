import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  bgColor?: string; // 添加背景色属性
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    incrementQuantity(state, action: PayloadAction<string>) {
        const item = state.items.find(i => i.id === action.payload);
        if (item) {
          item.quantity++;
        }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
        const item = state.items.find(i => i.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
    },
    clearCart(state) {
      state.items = [];
    }
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
