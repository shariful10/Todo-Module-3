import { createSlice } from "@reduxjs/toolkit";

export type TTheme = {
	theme: string;
};

const initialState: TTheme = {
	theme: JSON.parse(localStorage.getItem("theme") ?? '""') || "",
};

export const themeSlice = createSlice({
	name: "mode",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
			localStorage.setItem("theme", JSON.stringify(state.theme));
		},
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
