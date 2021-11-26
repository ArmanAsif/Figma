import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getUserSupportList } from "../actions/contactActions";

const HomeScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let db = null;

		function CreateDB() {
			const request = indexedDB.open("Figma", 1);

			request.onupgradeneeded = (e) => {
				db = e.target.result;
				const support = db.createObjectStore("Support", {
					keyPath: "email",
				});

				const sale = db.createObjectStore("sale", {
					keyPath: "email",
				});

				dispatch(getUserSupportList(db));
			};

			request.onsuccess = (e) => {
				db = e.target.result;
				dispatch(getUserSupportList(db));
			};

			request.onerror = (e) => {
				console.log(`error: ${e.target.error} was found `);
			};
		}

		CreateDB();
	}, []);

	return (
		<>
			<Header />

			<div className="home-screen-main">
				<h2>Contact Us</h2>

				<div className="home-screen-contact-container">
					<div className="home-screen-contact-sales">
						<div className="home-screen-contact-sales-upper"></div>

						<div className="home-screen-contact-sales-lower">
							<h3>Talk to a member of our sales team</h3>
							<p>
								We can give you a demo, help you choose the right plan for your
								team, or share best practices for getting the most out of Figma.
							</p>
							<button>Contact sales</button>
						</div>
					</div>

					<div className="home-screen-get-support">
						<div className="home-screen-get-support-upper"></div>

						<div className="home-screen-get-support-lower">
							<h3>Get product or account support</h3>
							<p>We are here to help you with any of your needs.</p>
							<Link to={"/support/new"}>Get support</Link>
						</div>
					</div>
				</div>

				<h4>Press inquiry?</h4>
				<p>Please email press@figma.com.</p>
			</div>

			<Footer />
		</>
	);
};

export default HomeScreen;
