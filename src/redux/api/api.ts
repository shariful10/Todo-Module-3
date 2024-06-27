import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://todo-apiserver.vercel.app" }),
	tagTypes: ["todo"],

	endpoints: (builder) => ({
		getTodos: builder.query({
			query: (priority) => {
				const params = new URLSearchParams();

				if (priority) {
					params.append("priority", priority);
				}

				return {
					url: `/tasks`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["todo"],
		}),
		getSingleTodos: builder.query({
			query: (id) => {
				return {
					url: `/task/${id}`,
					method: "GET",
				};
			},
			providesTags: ["todo"],
		}),
		addTodos: builder.mutation({
			query: (data) => ({
				url: "/task",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["todo"],
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/task/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["todo"],
		}),
		updateTodo: builder.mutation({
			query: (data) => {
				return {
					url: `/task/${data.id}`,
					method: "PUT",
					body: data.data,
				};
			},
			invalidatesTags: ["todo"],
		}),
	}),
});

export const {
	useGetTodosQuery,
	useAddTodosMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
	useGetSingleTodosQuery,
} = baseApi;
