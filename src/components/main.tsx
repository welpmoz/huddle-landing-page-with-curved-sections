import Stats from "./stats";
import Hero from "./hero";
import Benefits from "./benefits";
import Button from "./button";

export default function Main() {
	return (
		<main>
			<Hero />
			<Stats />
			<Benefits />
			<div className="l-main__involved u-text-align:center">
				<span className="u-text-action u-fw-700">
					Ready To Build Your Community?
				</span>
				<Button type="button" variant="default">
					Get Started For Free
				</Button>
			</div>
		</main>
	);
}
