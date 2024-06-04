import Edit from "../icons/Edit";
import Delete from "../icons/Delete";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo } from "@/redux/features/todoSlice";

type TTodoCard = {
	id: string;
	description: string;
	title: string;
};

const TodoCard = ({ id, title, description }: TTodoCard) => {
	const dispatch = useAppDispatch();

	return (
		<div className="bg-white rounded-md flex items-center justify-between p-3 border">
			<input className="cursor-pointer" type="checkbox" name="" id="" />
			<p className="font-semibold text-center">{title}</p>
			{/* <p>Time</p> */}
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
