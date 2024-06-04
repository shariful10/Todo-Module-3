import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogDescription,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { DialogClose } from "@radix-ui/react-dialog";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const randomId = Math.random().toString(36).substring(2, 35);

		const tasksDetails = {
			id: randomId,
			title: task,
			description,
		};

		dispatch(addTodo(tasksDetails));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-primary-gradient hover:bg-secondary-gradient duration-500 font-semibold">
					Add Todo
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
					<DialogDescription>
						Add your task that you want to finish.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="task">Task</Label>
							<Input
								id="task"
								className="col-span-3"
								onBlur={(e) => setTask(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								className="w-full"
								id="description"
								placeholder="Write description here."
								onBlur={(e) => setDescription(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex justify-end">
						<DialogClose asChild>
							<Button
								type="submit"
								className="bg-[#5C53FE] hover:bg-blue-700 duration-500"
							>
								Save changes
							</Button>
						</DialogClose>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddTodoModal;
