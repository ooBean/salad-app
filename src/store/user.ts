import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: null,
  name: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ id: string; name: string }>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.id = null;
      state.name = null;
      state.isLoggedIn = false;
    },
    updateProfile(state, action: PayloadAction<{ name: string }>) {
      if (state.isLoggedIn) {
        state.name = action.payload.name;
      }
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.isLoggedIn = true; // Assume logging in when name is set
    },
  },
});

export const { login, logout, updateProfile, setName } = userSlice.actions;
export default userSlice.reducer;
