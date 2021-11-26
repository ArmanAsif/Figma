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
