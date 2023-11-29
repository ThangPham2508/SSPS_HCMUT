import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userData = action.payload;
      state.role = 'customer';
      localStorage.setItem('userData', JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem('expirationTime', expirationTime);
    },
    logout: (state) => {
      state.userData = null;
      state.role = null;
      localStorage.removeItem('userData');
      localStorage.removeItem('expirationTime');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
