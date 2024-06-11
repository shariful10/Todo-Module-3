import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { Loader } from "../ui/Loader";
import AddTodoModal from "./AddTodoModal";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodos } from "@/redux/features/todoSlice";

const TodoContainer = () => {
	const [priority, setPriority] = useState<string>("");
	const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (isError) {
		<div className="flex items-center justify-center">
			<p className="text-xl text-red-600 font-semibold">Something went wrong</p>
		</div>;
	}

	return (
		<div>
			<div className=" flex justify-between items-center mb-5">
				<AddTodoModal />
				<TodoFilter priority={priority} setPriority={setPriority} />
			</div>
			<div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
				{todos?.data?.length > 0 ? (
					<div className="bg-white p-5 w-full h-full rounded-lg space-y-3 o">
						{todos?.data?.map((item: TTodos) => (
							<TodoCard key={item._id} {...item} />
						))}
					</div>
				) : (
					<div className="bg-white text-xl font-semibold p-3 rounded-md flex justify-center items-center">
						<p className="">There is no pending task</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default TodoContainer;
