import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { Button } from "../ui/button";

const TodoFilter = () => {
	const [position, setPosition] = useState("bottom");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="bg-primary-gradient hover:bg-secondary-gradient duration-500 font-semibold">
					Filter
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoFilter;
