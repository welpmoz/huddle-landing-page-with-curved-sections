import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
			<aside>
				<p className="attribution">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="#">Your Name Here</a>.
				</p>
			</aside>
		</>
	);
}
