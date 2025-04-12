import emailIcon from "../images/icon-email.svg";
import phoneIcon from "../images/icon-phone.svg";
import Logo from "./logo";
import NewsletterForm from "./newsletter-form";

interface ContactProps {
	icon: string;
	contactInfo: string;
}

function Contact({ contactInfo, icon }: ContactProps) {
	return (
		<div className="c-footer__contact-item">
			<img src={icon} alt="" />
			{contactInfo}
		</div>
	);
}

export default function Footer() {
	const phoneNumber = "+51-931-959-084";
	const email = "roswell_pando@outlook.es";

	return (
		<footer className="c-footer">
			<div className="c-footer__content u-fc-white">
				<div className="c-footer__newsletter-form">
					<NewsletterForm />
				</div>
				<div className="c-footer__contact-section">
					<Logo size="large" />
					<div className="l-footer__paragraph">
						<p className="u-text-body-form u-fw-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
						</p>
					</div>
					<div className="c-footer__contacts u-text-body-form">
						<Contact contactInfo={`Phone: ${phoneNumber}`} icon={phoneIcon} />
						<Contact contactInfo={`${email}`} icon={emailIcon} />
					</div>
					<div className="l-footer__social-links">
						<div className="c-footer__social-links">
							{/* Use ionic icons */}
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noreferrer"
							>
								<ion-icon name="logo-facebook"></ion-icon>
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noreferrer"
							>
								<ion-icon name="logo-instagram"></ion-icon>
							</a>
							<a
								href="https://www.twitter.com"
								target="_blank"
								rel="noreferrer"
							>
								<ion-icon name="logo-twitter"></ion-icon>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
