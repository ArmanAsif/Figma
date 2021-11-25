import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

let db = null;
let issue;
let email;
let subject;
let happening;
let description;
let attachments;

const issueOption = ["-", "Report a bug", "Billing and account"];
const issueOption2 = ["-", "Cann't acces Figma", "Something else"];

const SupportScreen = () => {
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

	// const [issue, setIssue] = useState("");
	// const [email, setEmail] = useState("");
	// const [subject, setSubject] = useState("");
	// const [happening, setHappening] = useState("");
	// const [description, setDescription] = useState("");
	// const [attachments, setAttachments] = useState("");

	useEffect(() => {
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
			};

			request.onsuccess = (e) => {
				db = e.target.result;
			};

			request.onerror = (e) => {
				alert(`error: ${e.target.error} was found `);
			};
		}

		CreateDB();
	}, []);

	useEffect(() => {
		const btnAddNote = document.getElementById("btnAddNote");
		btnAddNote.addEventListener("click", addRequest);

		function addRequest() {
			const userRequest = {
				issue,
				email,
				subject,
				happening,
				description,
			};

			// console.log(issue, email, subject, happening, description);
			// console.log(db);

			const tx = db.transaction("Support", "readwrite");
			// tx.onerror = (e) => alert(` Error! ${e.target.error}  `);
			const support = tx.objectStore("Support");
			support.add(userRequest);
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
					<label>Please choose your issue below</label>
					<select
						id="issue"
						options={issueOption}
						onChange={setIssue}
					>
						{issueOption.map((data, index) => {
							return (
								<option key={index} value={data} label={data} />
							);
						})}
					</select>

					<label>Your email address</label>
					<input
						id="email"
						type="email"
						placeholder=""
						required={true}
						onChange={setEmail}
					/>

					<label>Subject</label>
					<input
						id="subject"
						type="text"
						placeholder=""
						required
						onChange={setSubject}
					/>

					<label>What's happening?</label>
					<select
						id="happening"
						options={issueOption2}
						onChange={setHappening}
					>
						{issueOption2.map((data, index) => {
							return (
								<option key={index} value={data} label={data} />
							);
						})}
					</select>

					<label>Description</label>
					<textarea
						id="description"
						type="text"
						rows="5"
						cols="50"
						placeholder=""
						onChange={setDescription}
					/>

					{/* <label>Confirm Password:</label>
					<input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/> */}

					<button
						type="submit"
						id="btnAddNote"
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
