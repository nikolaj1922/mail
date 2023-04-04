import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./features/mailSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./features/mailSlice";
