import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import AddTodoModal from "./AddTodoModal";
import { useAppSelector } from "@/redux/hooks";

const TodoContainer = () => {
	const { todos } = useAppSelector((state) => state.todos);
	console.log("🚀 ~ file: TodoContainer.tsx:8 ~ TodoContainer ~ todos:", todos);

	return (
		<div>
			<div className=" flex justify-between items-center mb-5">
				<AddTodoModal />
				<TodoFilter />
			</div>
			<div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
				{todos.length > 0 ? (
					<div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
						{todos.map((item) => (
							<TodoCard key={item.id} {...item} />
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
