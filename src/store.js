import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/productsSlice";

const reducer={
    product: productsSlice,
}
export const store = configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});