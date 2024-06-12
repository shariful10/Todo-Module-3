import toast from "react-hot-toast";
import Delete from "../icons/Delete";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import UpdateTodoModal from "./UpdateTodoModal";
import { TTodos } from "@/redux/features/todoSlice";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";

const TodoCard = ({
	_id,
	title,
	priority,
	description,
	isCompleted,
}: TTodos) => {
	const [deleteTodo] = useDeleteTodoMutation();
	const [updateTodo] = useUpdateTodoMutation();

	const toggleState = () => {
		const options = {
			id: _id,
			data: {
				title,
				priority,
				description,
				isCompleted: !isCompleted,
			},
		};

		updateTodo(options);
		toast.success("Task status updated successfully!");
	};

	const handleDelete = async () => {
		try {
			await deleteTodo(_id).unwrap();
			toast.success("Todo deleted successfully!");
		} catch (err) {
			toast.error("Failed to delete the todo!");
		}
	};

	return (
		<div className="bg-white rounded-md flex items-center justify-between p-3 border">
			<div className="">
				<Checkbox
					onClick={toggleState}
					className="text-blue-500 flex-1"
					id="complete"
					defaultChecked={isCompleted}
				/>
			</div>
			<p className="font-semibold flex-1 pl-7">{title}</p>
			<div className="flex-1 flex items-center gap-2">
				<div
					className={`size-3 rounded-full ${
						priority === "high"
							? "bg-red-500"
							: priority === "medium"
							? "bg-yellow-600"
							: "bg-green-600"
					}`}
				/>
				<p className="capitalize">{priority}</p>
			</div>
			<p
				className={`${isCompleted ? "text-green-500" : "text-red-500"} flex-1`}
			>
				{isCompleted ? "Done" : "Pending"}
			</p>
			<p className="flex-[2]">{description}</p>
			<div className="space-x-4">
				<Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
					<Delete />
				</Button>
				<UpdateTodoModal taskId={_id} isCompleted={isCompleted} />
			</div>
		</div>
	);
};

export default TodoCard;
