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
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import TodoPriority from "./TodoPriority";
import { Textarea } from "../ui/textarea";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
	const [task, setTask] = useState("");
	const [priority, setPriority] = useState("");
	const [description, setDescription] = useState("");

	const [addTodo, { reset }] = useAddTodosMutation();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const tasksDetails = {
			title: task,
			priority,
			description,
			isCompleted: false,
		};

		addTodo(tasksDetails);
		toast.success("Todo added successfully!");
		reset();
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
							<Label htmlFor="priority">Priority</Label>
							<TodoPriority setPriority={setPriority} />
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
