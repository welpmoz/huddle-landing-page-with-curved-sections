import logoImg from "../images/logo.svg";
import emailIcon from "../images/icon-email.svg";
import phoneIcon from "../images/icon-phone.svg";
import NewsletterForm from "./newsletter-form";

export default function Footer() {
	return (
		<footer>
			<NewsletterForm />
			<div>
				<img src={logoImg} alt="Huddle" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
					quam, hendrerit lacinia vestibulum a, ultrices quis sem.
				</p>
				<div>
					<div>
						<img src={phoneIcon} alt="" /> Phone: +1-543-123-4567
					</div>
					<div>
						<img src={emailIcon} alt="" /> example@huddle.com
					</div>
				</div>
			</div>
		</footer>
	);
}
