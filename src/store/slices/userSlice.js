import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  fullname: null,
  email: null,
  verified: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => ({ ...state, ...action.payload }),
    clearUser: () => initialState,
    setField: (state, { payload: { field, value } }) => ({
      ...state,
      [field]: value,
    }),
  },
});

export const { setUser, clearUser, setField } = userSlice.actions;

export default userSlice.reducer;
