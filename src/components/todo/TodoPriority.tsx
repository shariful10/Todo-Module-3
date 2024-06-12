import { Dispatch, useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

type TTodoPriority = {
	todoPriority?: string;
	setPriority: Dispatch<React.SetStateAction<string>>;
};

const TodoPriority: React.FC<TTodoPriority> = ({
	setPriority,
	todoPriority,
}) => {
	const [selectedPriority, setSelectedPriority] = useState<string>("");

	const handlePriorityChange = (value: string) => {
		setSelectedPriority(value);
		setPriority(value);
	};

	return (
		<Select onValueChange={handlePriorityChange}>
			<SelectTrigger className="">
				<SelectValue
					placeholder={selectedPriority || todoPriority || "Select Priority"}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Priority</SelectLabel>
					<SelectItem value="high">High</SelectItem>
					<SelectItem value="medium">Medium</SelectItem>
					<SelectItem value="low">Low</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default TodoPriority;
