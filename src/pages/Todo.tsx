import ThemeSelector from "@/components/todo/ThemeSelector";
import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
	return (
		<div>
			<div className="grid grid-cols-12 py-10">
				<div className="col-span-10">
					<h1 className="text-3xl font-semibold text-center">My Todos</h1>
				</div>
				<div className="col-span-2 flex flex-col items-end">
					<ThemeSelector />
				</div>
			</div>
			<TodoContainer />
		</div>
	);
};

export default Todo;
