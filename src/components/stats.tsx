import communitiesIcon from "../images/icon-communities.svg";
import messagesIcon from "../images/icon-messages.svg";

interface StatProps {
	icon: string;
	info: string;
	title: string;
}

function Stat({ icon, info, title }: StatProps) {
	return (
		<div>
			<img src={icon} alt="" />
			<div>
				<span className="u-text-display u-fw-700">{info}</span>
				<span className="u-text-caption">{title}</span>
			</div>
		</div>
	);
}

export default function Stats() {
	return (
		<div>
			<h2 className="u-visually-hidden">Stats</h2>
			<Stat icon={communitiesIcon} info="1.4k+" title="Communities Formed" />
			<Stat icon={messagesIcon} info="2.7m+" title="Messages Sent" />
		</div>
	);
}
