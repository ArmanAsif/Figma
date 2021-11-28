import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getUserSupportList } from "../actions/contactActions";

let db = null;
let issue;
let email;
let subject;
let happening;
let description;

const issueOption = ["--", "Report a bug", "Billing and account"];
const issueOption2 = ["--", "Cann't acces Figma", "Something else"];

const SupportScreen = () => {
	const dispatch = useDispatch();

	const setIssue = () => {
		let select = document.getElementById("issue");
		issue = select.options[select.selectedIndex].value;
	};
	const setEmail = () => {
		email = document.getElementById("email").value;
	};
	const setSubject = () => {
		subject = document.getElementById("subject").value;
	};
	const setHappening = () => {
		let select = document.getElementById("happening");
		happening = select.options[select.selectedIndex].value;
	};
	const setDescription = () => {
		description = document.getElementById("description").value;
	};

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
	}, [dispatch]);

	useEffect(() => {
		const btnAddSupportRequest = document.getElementById(
			"btnAddSupportRequest"
		);
		btnAddSupportRequest.addEventListener("click", addRequest);

		function addRequest() {
			const userRequest = {
				issue,
				email,
				subject,
				happening,
				description,
			};

			const tx = db.transaction("Support", "readwrite");
			const support = tx.objectStore("Support");
			support.add(userRequest);

			const request = indexedDB.open("Figma", 1);
			request.onsuccess = (e) => {
				db = e.target.result;
				dispatch(getUserSupportList(db));
			};
		}
	});

	const submitHandler = (e) => {
		e.preventDefault();
		document.getElementById("issue").value = "-";
		document.getElementById("email").value = "";
		document.getElementById("subject").value = "";
		document.getElementById("happening").value = "-";
		document.getElementById("description").value = "";
	};

	return (
		<>
			<Header />

			<div className="support-screen-form-container">
				<h3>Submit a request</h3>
				<form className="support-screen-form" onSubmit={submitHandler}>
					<label>
						Please choose your issue below{" "}
						<span
							style={{ fontSize: "1.5rem", color: "red", fontWeight: "600" }}
						>
							*
						</span>
					</label>
					<select id="issue" options={issueOption} onChange={setIssue}>
						{issueOption.map((data, index) => {
							return <option key={index} value={data} label={data} />;
						})}
					</select>

					<label>
						Your email address{" "}
						<span
							style={{ fontSize: "1.5rem", color: "red", fontWeight: "600" }}
						>
							*
						</span>
					</label>
					<input
						id="email"
						type="email"
						placeholder=""
						required={true}
						onChange={setEmail}
					/>

					<label>
						Subject{" "}
						<span
							style={{ fontSize: "1.5rem", color: "red", fontWeight: "600" }}
						>
							*
						</span>
					</label>
					<input
						id="subject"
						type="text"
						placeholder=""
						required
						onChange={setSubject}
					/>

					<label>
						What's happening?{" "}
						<span
							style={{ fontSize: "1.5rem", color: "red", fontWeight: "600" }}
						>
							*
						</span>
					</label>
					<select id="happening" options={issueOption2} onChange={setHappening}>
						{issueOption2.map((data, index) => {
							return <option key={index} value={data} label={data} />;
						})}
					</select>

					<label>
						Description{" "}
						<span
							style={{ fontSize: "1.5rem", color: "red", fontWeight: "600" }}
						>
							*
						</span>
					</label>
					<textarea
						id="description"
						type="text"
						rows="5"
						cols="97"
						placeholder=""
						onChange={setDescription}
					/>

					<button
						type="submit"
						id="btnAddSupportRequest"
						className="support-screen-submit-button"
					>
						submit
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
};

export default SupportScreen;
