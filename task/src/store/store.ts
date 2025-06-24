import { configureStore } from "@reduxjs/toolkit";
import type { Store } from "@reduxjs/toolkit";
import FormSlice from "../features/FormSlice";

const store: Store = configureStore({
  reducer: {
    form: FormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
