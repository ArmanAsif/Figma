import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getUserSaleList, getUserSupportList } from "../actions/contactActions";

let email;
let name;
let companyName;
let companySize;
let description;
let db = null;

let sizeOption = [
	"Company Size",
	"1-10",
	"11-50",
	"51-250",
	"251-1K",
	"1K-5K",
	"5K-10K",
	"10K-50K",
];

const HomeScreen = () => {
	const dispatch = useDispatch();

	const setEmail = () => {
		email = document.getElementById("email").value;
	};
	const setName = () => {
		name = document.getElementById("name").value;
	};
	const setCompanyName = () => {
		companyName = document.getElementById("companyName").value;
	};
	const setCompanySize = () => {
		let select = document.getElementById("companySize");
		companySize = select.options[select.selectedIndex].value;
	};
	const setDescription = () => {
		description = document.getElementById("description").value;
	};

	useEffect(() => {
		var modal = document.getElementById("myModal");
		var btn = document.getElementById("myBtn");

		btn.onclick = function () {
			modal.style.display = "block";
		};

		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		};
	});

	useEffect(() => {
		function CreateDB() {
			const request = indexedDB.open("Figma", 1);

			request.onupgradeneeded = (e) => {
				db = e.target.result;
				db.createObjectStore("Support", {
					keyPath: "email",
				});

				db.createObjectStore("Sale", {
					keyPath: "email",
				});

				dispatch(getUserSupportList(db));
				dispatch(getUserSaleList(db));
			};

			request.onsuccess = (e) => {
				db = e.target.result;
				dispatch(getUserSupportList(db));
				dispatch(getUserSaleList(db));
			};

			request.onerror = (e) => {
				console.log(`error: ${e.target.error} was found `);
			};
		}

		CreateDB();
	}, [dispatch]);

	useEffect(() => {
		const btnAddSaleRequest = document.getElementById("btnAddSaleRequest");
		btnAddSaleRequest.addEventListener("click", addSale);

		function addSale() {
			if (
				email &&
				name &&
				companyName &&
				companySize !== "Company Size" &&
				description
			) {
				const userSaleRequest = {
					email,
					name,
					companyName,
					companySize,
					description,
				};

				const tx = db.transaction("Sale", "readwrite");
				const sale = tx.objectStore("Sale");
				sale.add(userSaleRequest);

				const request = indexedDB.open("Figma", 1);
				request.onsuccess = (e) => {
					db = e.target.result;
					dispatch(getUserSaleList(db));
				};
			} else {
				email = "";
				name = "";
				companyName = "";
				companySize = "";
				description = "";
			}
		}
	}, [dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		document.getElementById("email").value = "Email Address";
		document.getElementById("name").value = "Name";
		document.getElementById("companyName").value = "Company Name";
		document.getElementById("companySize").value = "Company Size";
		document.getElementById("description").value = "";
	};

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
							<button id="myBtn">Contact sales</button>
						</div>
					</div>

					<div className="home-screen-get-support">
						<div className="home-screen-get-support-upper"></div>

						<div className="home-screen-get-support-lower">
							<h3>Get product or account support</h3>
							<p>We are here to help you with any of your needs.</p>
							<Link
								to={"/support/new"}
								className="home-screen-get-support-lower-link"
							>
								Get support
							</Link>
						</div>
					</div>
				</div>

				<h4>Press inquiry?</h4>
				<p>Please email press@figma.com.</p>
			</div>

			<Footer />

			<div id="myModal" className="modal">
				<div className="modal-content">
					<h2>Contact Sales</h2>
					<p>You can expect a reply within 1 business day.</p>

					<form className="modal-content-form" onSubmit={submitHandler}>
						<input
							id="email"
							type="email"
							placeholder="Email Address"
							required
							onChange={setEmail}
						/>

						<input
							id="name"
							type="text"
							placeholder="Name"
							required
							onChange={setName}
						/>

						<input
							id="companyName"
							type="text"
							placeholder="Company Name"
							required
							onChange={setCompanyName}
						/>

						<select
							id="companySize"
							options={sizeOption}
							onChange={setCompanySize}
							required
						>
							{sizeOption.map((data, index) => {
								return <option key={index} value={data} label={data} />;
							})}
						</select>

						<label>How can we help?</label>
						<textarea
							id="description"
							type="text"
							rows="5"
							cols="58"
							placeholder=""
							required
							onChange={setDescription}
						/>

						<button
							type="submit"
							id="btnAddSaleRequest"
							className="modal-submit-button"
						>
							submit
						</button>
					</form>

					<span>
						By clicking “Submit” you agree to our TOS and Privacy Policy.
					</span>
				</div>
			</div>
		</>
	);
};

export default HomeScreen;
