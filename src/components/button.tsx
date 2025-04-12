import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type: "submit" | "button";
	variant: "link" | "form" | "default";
}

export default function Button({ children, type, variant }: ButtonProps) {
	return (
		<button className="c-button" data-variant={variant} type={type}>
			{children}
		</button>
	);
}
