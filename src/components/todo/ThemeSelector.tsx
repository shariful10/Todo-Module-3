import {
	Select,
	SelectItem,
	SelectLabel,
	SelectGroup,
	SelectTrigger,
	SelectContent,
} from "../ui/select";
import { myTheme } from "@/App";
import { Moon, Settings, Sun } from "lucide-react";
import { setTheme } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const getThemeIcon = (theme: string) => {
	switch (theme) {
		case "system":
			return <Settings size={16} />;
		case "dark":
			return <Moon size={16} />;
		case "light":
			return <Sun size={16} />;
		default:
			return null;
	}
};

const ThemeSelector = () => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state) => state.theme);

	const handleToggleTheme = (value: string) => {
		dispatch(setTheme(value));
	};

	return (
		<Select onValueChange={handleToggleTheme}>
			<SelectTrigger
				className={`w-[180px] bg-black ${
					theme === "dark"
						? "bg-[#0D1117] text-gray-300"
						: theme === "light"
						? "bg-white"
						: theme === "system" && myTheme === "dark"
						? "bg-[#0D1117] text-gray-300"
						: theme === "system" && myTheme === "light"
						? "bg-white"
						: ""
				}`}
			>
				<div className="flex items-center gap-2">
					{getThemeIcon(theme)}
					<span>
						{theme.charAt(0).toUpperCase() + theme.slice(1) || "Select Theme"}
					</span>
				</div>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Select Theme</SelectLabel>
					<SelectItem value="system" className="flex gap-2">
						<div className="flex items-center gap-2">
							<Settings size={16} />
							System
						</div>
					</SelectItem>
					<SelectItem value="dark">
						<div className="flex items-center gap-2">
							<Moon size={16} />
							Dark
						</div>
					</SelectItem>
					<SelectItem value="light">
						<div className="flex items-center gap-2">
							<Sun size={16} />
							Light
						</div>
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default ThemeSelector;
