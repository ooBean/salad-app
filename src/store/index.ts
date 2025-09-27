import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
