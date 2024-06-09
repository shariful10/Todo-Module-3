import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodos = {
	id: string;
	title: string;
	priority: string;
	description: string;
	isCompleted?: boolean;
};

type TInitialState = {
	todos: TTodos[];
};

const initialState: TInitialState = {
	todos: [],
};

const sortTodos = (todos: TTodos[]) => {
	return todos.sort((a, b) =>
		a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
	);
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTodos>) => {
			state.todos.push({ ...action.payload, isCompleted: false });
			state.todos = sortTodos(state.todos);
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		toggleComplete: (state, action: PayloadAction<string>) => {
			const task = state.todos.find((item) => item.id === action.payload);
			if (task) {
				task.isCompleted = !task.isCompleted;
				state.todos = sortTodos(state.todos);
			}
		},
	},
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
