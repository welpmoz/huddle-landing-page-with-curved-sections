import screenMockupsImg from "../images/screen-mockups.svg";

export default function Hero() {
	return (
		<div>
			<div>
				<h1>Build The Community Your Fans Will Love</h1>{" "}
				<p>
					Huddle re-imagines the way we build communities. You have a voice, but
					so does your audience. Create connections with your users as you
					engage in genuine discussion.
				</p>
			</div>
			<div>
				<button type="button">Get Started For Free</button>
				<img
					src={screenMockupsImg}
					alt="Mockups"
					style={{ maxInlineSize: "100%" }}
				/>
			</div>
		</div>
	);
}
