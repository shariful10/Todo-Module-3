import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuRadioGroup,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Dispatch, useState } from "react";

type TTodoPriority = {
	setPriority: Dispatch<React.SetStateAction<string>>;
};

const TodoPriority: React.FC<TTodoPriority> = ({ setPriority }) => {
	const [selectedPriority, setSelectedPriority] = useState<string>("");

	const handlePriorityChange = (value: string) => {
		setSelectedPriority(value);
		setPriority(value);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex flex-col items-start capitalize"
				>
					{selectedPriority || "Select Priority"}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Select Priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={selectedPriority}
					onValueChange={handlePriorityChange}
				>
					<DropdownMenuRadioItem id="high" value="high">
						High
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem id="medium" value="medium">
						Medium
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem id="low" value="low">
						Low
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoPriority;
