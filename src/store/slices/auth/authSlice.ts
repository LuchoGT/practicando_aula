import { Auth } from "@/interfaces/auth/auth";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";



// const initialState: Auth = {
//   username: null,
//   status: "not-authenticated",
// };

export const authSlice = createSlice({
  name: "auth",
  initialState:{
    status: "not-authenticated",
    user:{}
  },
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.status = "authenticated";
    },
    logout: (state) => {
      state.user = {};
      state.status = "not-authenticated";
    },
    checkingCredentials: (state) => {
        state.status = 'checking';
        state.user = {};
    },
    updateUsername:(state,action:PayloadAction<string>) => {
      state.user=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials,updateUsername } = authSlice.actions;
