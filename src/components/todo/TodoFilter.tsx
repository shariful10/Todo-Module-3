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

type TPriority = {
	priority: string;
	setPriority: React.Dispatch<React.SetStateAction<string>>;
};

const TodoFilter = ({ priority, setPriority }: TPriority) => {
	const handleFilter = (value: string) => {
		setPriority(value);
		console.log("value ", value);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="bg-primary-gradient hover:bg-secondary-gradient duration-500 font-semibold capitalize">
					{priority || "Filter"}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={priority} onValueChange={handleFilter}>
					<DropdownMenuRadioItem className="hover:cursor-pointer" value="high">
						High
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						className="hover:cursor-pointer"
						value="medium"
					>
						Medium
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem className="hover:cursor-pointer" value="low">
						Low
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoFilter;
