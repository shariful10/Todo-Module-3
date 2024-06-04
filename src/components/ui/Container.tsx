import { ReactNode } from "react";

export type TChildren = {
	children: ReactNode;
};

const Container = ({ children }: TChildren) => {
	return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
