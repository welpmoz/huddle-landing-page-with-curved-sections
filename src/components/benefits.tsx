import type { ReactNode } from "react";
import gtIcon from "../images/illustration-grow-together.svg";
import fcIcon from "../images/illustration-flowing-conversation.svg";
import yuIcon from "../images/illustration-your-users.svg";

interface CompositionProp {
	children: ReactNode;
}

function Benefit({ children }: CompositionProp) {
	return <div>{children}</div>;
}

Benefit.Title = function BenefitTitle({ children }: CompositionProp) {
	return <h3 className="u-text-heading-3 u-fc-dark-cyan">{children}</h3>;
};

Benefit.Description = function BenefitDescription({
	children,
}: CompositionProp) {
	return <p className="u-text-body-2">{children}</p>;
};

export default function Benefits() {
	return (
		<div className="u-text-align:center">
			<h2 className="u-visually-hidden">Benefits</h2>
			<Benefit>
				<div
					className="c-benefit"
					data-variant="decorated"
					data-bg-number="one"
				>
					<div className="c-benefit__content" data-layout="image-last">
						<div className="l-benefit__img-wrapper">
							<img src={gtIcon} alt="grow together illustration" />
						</div>
						<div className="l-benefit__text u-fc-dark-cyan">
							<Benefit.Title>Grow Together</Benefit.Title>
							<Benefit.Description>
								Generate meaningful discussions with your audience and build a
								strong, loyal community. Think of the insightful conversations
								you miss out on with a feedback form.
							</Benefit.Description>
						</div>
					</div>
				</div>
			</Benefit>
			<Benefit>
				<div className="c-benefit">
					<div className="c-benefit__content" data-layout="image-first">
						<div className="l-benefit__img-wrapper">
							<img src={fcIcon} alt="flowing conversations illustration" />
						</div>
						<div className="l-benefit__text u-fc-dark-cyan">
							<Benefit.Title>Flowing Conversations</Benefit.Title>
							<Benefit.Description>
								You wouldn't paginate a conversation in real life, so why do it
								online? Our threads have just-in-time loading for a more natural
								flow.
							</Benefit.Description>
						</div>
					</div>
				</div>
			</Benefit>
			<Benefit>
				<div
					className="c-benefit"
					data-variant="decorated"
					data-bg-number="two"
				>
					<div className="c-benefit__content" data-layout="image-last">
						<div className="l-benefit__img-wrapper">
							<img src={yuIcon} alt="your users illustration" />
						</div>
						<div className="l-benefit__text u-fc-dark-cyan">
							<Benefit.Title>Your Users</Benefit.Title>
							<Benefit.Description>
								It takes no time at all to integrate Huddle with your app's
								authentication solution. This means, once signed in to your app,
								your users can start chatting immediately.
							</Benefit.Description>
						</div>
					</div>
				</div>
			</Benefit>
		</div>
	);
}
