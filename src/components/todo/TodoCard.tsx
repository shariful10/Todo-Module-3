import Edit from "../icons/Edit";
import Delete from "../icons/Delete";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCard = {
	id: string;
	title: string;
	priority: string;
	description: string;
	isCompleted?: boolean;
};

const TodoCard = ({
	id,
	title,
	description,
	priority,
	isCompleted,
}: TTodoCard) => {
	const dispatch = useAppDispatch();

	const toggleState = () => {
		dispatch(toggleComplete(id));
	};

	return (
		<div className="bg-white rounded-md flex items-center justify-between p-3 border">
			<Checkbox onClick={toggleState} className="text-blue-500" id="complete" />
			<p className="font-semibold text-center">{title}</p>
			<p
				className={`font-semibold text-center capitalize ${
					priority === "high"
						? "text-green-500"
						: priority === "medium"
						? "text-yellow-600"
						: "text-red-600"
				}`}
			>
				{priority}
			</p>
			<p className={`${isCompleted ? "text-green-500" : "text-red-500"}`}>
				{isCompleted ? "Done" : "Pending"}
			</p>
			<p className="text-center">{description}</p>
			<div className="space-x-4">
				<Button
					onClick={() => dispatch(removeTodo(id))}
					className="bg-red-600 hover:bg-red-700"
				>
					<Delete />
				</Button>
				<Button className="bg-[#5C53FE] hover:bg-blue-700">
					<Edit />
				</Button>
			</div>
		</div>
	);
};

export default TodoCard;
