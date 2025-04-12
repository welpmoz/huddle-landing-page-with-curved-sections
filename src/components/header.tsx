import Button from "./button";
import Logo from "./logo";

export default function Header() {
	return (
		<header className="l-header__fit">
			<div className="c-header">
				<Logo size="normal" />
				<Button type="button" variant="link">
					Try It Free
				</Button>
			</div>
		</header>
	);
}
