import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import { Button } from "../ui/button";

const TodoCard = () => {
	return (
		<div className="bg-white rounded-md flex items-center justify-between p-3 border">
			<input className="cursor-pointer" type="checkbox" name="" id="" />
			<p className="font-semibold">Todo Title</p>
			<p>Time</p>
			<p>Description</p>
			<div className="space-x-4">
				<Button className="bg-red-600 hover:bg-red-700">
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
