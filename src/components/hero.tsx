import screenMockupsImg from "../images/screen-mockups.svg";

export default function Hero() {
	return (
		<div>
			<div>
				<h1 className="u-text-heading-1 u-fw-700">
					Build The Community Your Fans Will Love
				</h1>{" "}
				<p className="u-text-body">
					Huddle re-imagines the way we build communities. You have a voice, but
					so does your audience. Create connections with your users as you
					engage in genuine discussion.
				</p>
			</div>
			<div>
				<button type="button" className="u-text-button u-fw-700">
					Get Started For Free
				</button>
				<img src={screenMockupsImg} alt="Mockups" />
			</div>
		</div>
	);
}
