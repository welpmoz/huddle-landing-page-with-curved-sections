import logoIcon from "../images/logo.svg";

export default function Header() {
	return (
		<header>
			<img src={logoIcon} alt="Hudde Icon" />
			<button type="button" className="u-text-button-link">
				Try It Free
			</button>
		</header>
	);
}
