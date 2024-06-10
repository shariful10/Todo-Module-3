import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodos = {
	_id: string;
	id: string;
	title: string;
	priority: "high" | "medium" | "low";
	description: string;
	status?: "pending" | "finished";
};

type TInitialState = {
	todos: TTodos[];
};

const initialState: TInitialState = {
	todos: [],
};

const sortTodos = (todos: TTodos[]) => {
	return todos.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTodos>) => {
			state.todos.push({ ...action.payload, status: "pending" });
			state.todos = sortTodos(state.todos);
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		toggleComplete: (state, action: PayloadAction<string>) => {
			const task = state.todos.find((item) => item.id === action.payload);
			if (task) {
				task.status = task.status === "pending" ? "finished" : "pending";
				state.todos = sortTodos(state.todos);
			}
		},
	},
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
