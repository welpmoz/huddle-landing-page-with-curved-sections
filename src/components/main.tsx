import Stats from "./stats";
import Hero from "./hero";
import Benefits from "./benefits";

export default function Main() {
	return (
		<main>
			<Hero />
			<Stats />
			<Benefits />
			<div>
				<span className="u-text-action u-fw-700">
					Ready To Build Your Community?
				</span>
				<button type="button" className="u-text-button u-fw-700">
					Get Started For Free
				</button>
			</div>
		</main>
	);
}
