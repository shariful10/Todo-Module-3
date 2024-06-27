import Todo from "./pages/Todo";
import { useAppSelector } from "./redux/hooks";
import Container from "./components/ui/Container";

const getSystemTheme = () => {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

export const myTheme = getSystemTheme();

const App = () => {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<div
			className={`${
				theme === "dark"
					? "bg-[#0D1117] text-gray-300"
					: theme === "light"
					? ""
					: theme === "system" && myTheme === "dark"
					? "bg-[#0D1117] text-gray-300"
					: ""
			}`}
		>
			<Container>
				<Todo />
			</Container>
		</div>
	);
};

export default App;
