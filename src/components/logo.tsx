import logoSvg from "../images/logo.svg";

interface LogoProps {
	size: "normal" | "large";
}

export default function Logo({ size }: LogoProps) {
	const width = size === "large" ? 200 : 96;
	const height = size === "large" ? 32 : 16;
	return (
		<img
			className="c-logo"
			src={logoSvg}
			alt="Huddle logo"
			data-size={size}
			width={width}
			height={height}
		/>
	);
}
