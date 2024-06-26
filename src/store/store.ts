import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { authSlice2 } from './slices/auth/authSlice2'

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    auth2: authSlice2.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;