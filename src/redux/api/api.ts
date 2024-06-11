import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://todo-apiserver.vercel.app" }),
	tagTypes: ["todo"],

	endpoints: (builder) => ({
		getTodos: builder.query({
			query: (priority) => ({
				url: `/tasks?priority=${priority}`,
				method: "GET",
			}),
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
		deleteTodos: builder.mutation({
			query: (data) => ({
				url: "/task",
				method: "DELETE",
				body: data,
			}),
			invalidatesTags: ["todo"],
		}),
	}),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseApi;
