import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import AddTodoModal from "./AddTodoModal";

const TodoContainer = () => {
	return (
		<div>
			<div className=" flex justify-between items-center mb-5">
				<AddTodoModal />
				<TodoFilter />
			</div>
			<div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
				<div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
				</div>
				{/* <div className="bg-white text-xl font-semibold p-3 rounded-md flex justify-center items-center">
					<p className="">There is no pending task</p>
				</div> */}
			</div>
		</div>
	);
};

export default TodoContainer;
