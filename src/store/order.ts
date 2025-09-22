import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
  currentOrderId: string | null;
  status: 'pending' | 'processing' | 'delivering' | 'completed' | null;
}

const initialState: OrderState = {
  currentOrderId: null,
  status: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<{ orderId: string; status: OrderState['status'] }>) {
      state.currentOrderId = action.payload.orderId;
      state.status = action.payload.status;
    },
    clearOrder(state) {
      state.currentOrderId = null;
      state.status = null;
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
