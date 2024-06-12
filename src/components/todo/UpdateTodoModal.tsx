import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogDescription,
} from "../ui/dialog";
import Edit from "../icons/Edit";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import TodoPriority from "./TodoPriority";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useEffect, useState } from "react";
import { useGetSingleTodosQuery, useUpdateTodoMutation } from "@/redux/api/api";

type TTaskIdProps = {
	taskId: string;
	isCompleted: boolean | undefined;
};

const UpdateTodoModal = ({ taskId, isCompleted }: TTaskIdProps) => {
	const [task, setTask] = useState("");
	const [updatedPriority, setUpdatedPriority] = useState("");
	const [updatedDescription, setUpdatedDescription] = useState("");

	const { data: todo } = useGetSingleTodosQuery(taskId);
	const [updateTodo, { reset }] = useUpdateTodoMutation();

	useEffect(() => {
		if (todo) {
			setTask(todo.title || "");
			setUpdatedPriority(todo.priority || "");
			setUpdatedDescription(todo.description || "");
		}
	}, [todo]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// const tasksDetails = {
		// 	title: task,
		// 	priority,
		// 	description,
		// 	isCompleted: false,
		// };

		const options = {
			id: taskId,
			data: {
				title: task,
				priority: updatedPriority,
				description: updatedDescription,
				isCompleted,
			},
		};

		updateTodo(options);
		toast.success("Todo updated successfully!");
		reset();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-[#5C53FE] hover:bg-blue-700">
					<Edit />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Update Task</DialogTitle>
					<DialogDescription>Update your task.</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="task">Task</Label>
							<Input
								id="task"
								className="col-span-3"
								defaultValue={todo?.title}
								onBlur={(e) => setTask(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="priority">Priority</Label>
							<TodoPriority
								setPriority={setUpdatedPriority}
								todoPriority={todo?.priority}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								className="w-full"
								id="description"
								placeholder="Write description here."
								defaultValue={todo?.description}
								onBlur={(e) => setUpdatedDescription(e.target.value)}
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

export default UpdateTodoModal;
