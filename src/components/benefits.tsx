import gtIcon from "../images/illustration-grow-together.svg";
import fcIcon from "../images/illustration-flowing-conversation.svg";
import yuIcon from "../images/illustration-your-users.svg";

interface BenefitProps {
	icon: string;
	title: string;
	description: string;
}

function Benefit({ icon, title, description }: BenefitProps) {
	return (
		<div>
			<img src={icon} alt="" />
			<div>
				<h3 className="u-text-heading-3 u-fw-700">{title}</h3>
				<p className="u-text-body-2">{description}</p>
			</div>
		</div>
	);
}

export default function Benefits() {
	return (
		<div>
			<h2 className="u-visually-hidden">Benefits</h2>
			<Benefit
				description="Grow Together Generate meaningful discussions with your audience and
				build a strong, loyal community. Think of the insightful conversations
				you miss out on with a feedback form."
				icon={gtIcon}
				title="Grow Together"
			/>
			<Benefit
				description="You wouldn't paginate a conversation in real life,
				so why do it online? Our threads have just-in-time loading for a more
				natural flow."
				icon={fcIcon}
				title="Flowing Conversations"
			/>
			<Benefit
				description="It takes no time at all to integrate Huddle with your app's
				authentication solution. This means, once signed in to your app, your
				users can start chatting immediately."
				icon={yuIcon}
				title="Your Users"
			/>
		</div>
	);
}
