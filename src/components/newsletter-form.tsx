export default function NewsletterForm() {
	return (
		<div>
			<form>
				<div>
					<h2 className="u-text-heading-4 u-fw-700">Newsletter</h2>
					<p className="u-text-body-form u-fw-600">
						To recieve tips on how to grow your community, sign up to our weekly
						newsletter. We’ll never send you spam or pass on your email address
					</p>
				</div>
				<div>
					<div>
						<label htmlFor="email" className="u-visually-hidden">
							Email
						</label>
						<input
							type="text"
							className="u-text-body-form"
							id="email"
							name="email"
							autoComplete="email"
						/>
						<span className="u-text-error">Check your email please</span>
					</div>
					<button type="submit" className="u-text-button-form u-fw-700">
						Subscribe
					</button>
				</div>
			</form>
		</div>
	);
}
