import communitiesIcon from "../images/icon-communities.svg";
import messagesIcon from "../images/icon-messages.svg";

interface StatProps {
	icon: string;
	info: string;
	title: string;
}

function Stat({ icon, info, title }: StatProps) {
	return (
		<div className="c-stat">
			<img src={icon} alt="" className="c-stat__img" />
			<div className="l-stat__information">
				<p className="u-text-display u-fw-700 u-fc-dark-cyan">{info}</p>
				<p className="u-text-caption u-fc-gray">{title}</p>
			</div>
		</div>
	);
}

export default function Stats() {
	return (
		<div className="l-stat__list">
			<h2 className="u-visually-hidden">Stats</h2>
			<Stat icon={communitiesIcon} info="1.4k+" title="Communities Formed" />
			<Stat icon={messagesIcon} info="2.7m+" title="Messages Sent" />
		</div>
	);
}
