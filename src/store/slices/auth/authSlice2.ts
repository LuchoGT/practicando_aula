import { createSlice,PayloadAction } from "@reduxjs/toolkit";





export const authSlice2 = createSlice({
  name: "auth2",
  initialState:{
    status: "not-authenticated",
    user:{},
    errorMessage:undefined,
  },
  reducers: {
    onLogin: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    onLogout: (state,action: PayloadAction<undefined>) => {
      state.user = {};
      state.status = "not-authenticated";
      state.errorMessage=action.payload;
    },
    onCheckingCredentials: (state) => {
        state.status = 'checking';
        state.user = {};
        state.errorMessage = undefined;
    },
    cleanErrorMessage:(state)=>{
        state.errorMessage=undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onLogin,onLogout,onCheckingCredentials,cleanErrorMessage} = authSlice2.actions;
