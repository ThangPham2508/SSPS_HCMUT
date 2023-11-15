import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCustomer: (state) => {
      state.role = 'customer';
    },
    setAdmin: (state) => {
      state.role = 'admin';
    },
    logout: (state) => {
      state.role = null;
    },
  },
});

export const { setCustomer, setAdmin, logout } = authSlice.actions;

export default authSlice.reducer;
