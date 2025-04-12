import screenMockupsImg from "../images/screen-mockups.svg";
import Button from "./button";

export default function Hero() {
	return (
		<div className="l-hero__fit">
			<div className="c-hero u-text-align:center">
				<h1 className="u-text-heading-1 u-fw-700 u-fc-dark-cyan">
					Build The Community Your Fans Will Love
				</h1>
				<div className="l-hero__middle">
					<p className="u-text-body u-fc-dark-cyan">
						Huddle re-imagines the way we build communities. You have a voice,
						but so does your audience. Create connections with your users as you
						engage in genuine discussion.
					</p>
					<Button type="button" variant="default">
						Get Started For Free
					</Button>
				</div>
				<img src={screenMockupsImg} alt="Mockups for screens" />
			</div>
		</div>
	);
}
