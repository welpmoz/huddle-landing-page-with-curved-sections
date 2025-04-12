import Button from "./button";

export default function NewsletterForm() {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const emailInput = event.currentTarget.email as HTMLInputElement;
		const emailValue = emailInput.value.trim();
		const errorLabel = document.getElementById("label-error");

		if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
			emailInput.setAttribute("aria-invalid", "true");
			if (errorLabel) errorLabel.textContent = "Check your email please.";
		} else {
			emailInput.removeAttribute("aria-invalid");
			if (errorLabel) errorLabel.textContent = "";
			console.log("Form submitted with email:", emailValue);
			// Add your form submission logic here
		}
	}

	function isValidEmail(value: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	}

	// escribe un funcion para menejar el evento onchange del input
	function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
		const emailInput = event.currentTarget;
		const emailValue = emailInput.value.trim();
		const errorLabel = document.getElementById("label-error");
		if (isValidEmail(emailValue)) {
			emailInput.removeAttribute("aria-invalid");
			if (errorLabel) errorLabel.textContent = "";
		} else {
			emailInput.setAttribute("aria-invalid", "true");
			if (errorLabel) errorLabel.textContent = "Check your email please";
		}
	}

	return (
		<form className="c-newsletter-form" onSubmit={handleSubmit}>
			<div className="l-newsletter-form__text">
				<h2 className="u-text-heading-4 u-fw-700">Newsletter</h2>
				<div className="l-newsletter-form__text-fit">
					<p className="u-text-body-form u-fw-600">
						To recieve tips on how to grow your community, sign up to our weekly
						newsletter. We’ll never send you spam or pass on your email address
					</p>
				</div>
			</div>
			<div className="l-newsletter-form__interaction">
				<div className="c-newsletter-form__control">
					<label htmlFor="email" className="u-visually-hidden" id="label-email">
						Email
					</label>
					<input
						type="text"
						className="c-newsletter-form__input u-text-body-form"
						id="email"
						name="email"
						autoComplete="email"
						aria-describedby="label-error"
						placeholder="example@gmail.com"
						aria-required
						onBlur={handleBlur}
					/>
					<span
						id="label-error"
						className="u-text-error u-fc-red"
						aria-live="assertive"
					>
						{" "}
					</span>
				</div>
				<Button type="submit" variant="form">
					Subscribe
				</Button>
			</div>
		</form>
	);
}
