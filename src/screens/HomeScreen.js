import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeScreen = () => {
	return (
		<>
			<Header />

			<div className="home-screen-main">
				<h2>Contact Us</h2>

				<div className="home-screen-contact-sales">Contact sales</div>

				<div className="home-screen-get-support">
					<Link to={"/support/new"}>Get support</Link>
				</div>

				<h4>Press inquiry?</h4>
				<p>Please email press@figma.com.</p>
			</div>

			<Footer />
		</>
	);
};

export default HomeScreen;
