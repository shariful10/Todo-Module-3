import { baseApi } from "./api/api";
import todoReducer from "./features/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		todos: todoReducer,
		theme: themeReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
