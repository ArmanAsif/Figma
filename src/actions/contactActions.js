import {
	USER_SUPPORT_LIST_FAIL,
	USER_SUPPORT_LIST_REQUEST,
	USER_SUPPORT_LIST_SUCCESS,
} from "../constants/contactConstants";

let db = null;
let data = [];

export const getUserSupportList = () => (dispatch) => {
	try {
		dispatch({ type: USER_SUPPORT_LIST_REQUEST });

		function CallDB() {
			const req = indexedDB.open("Figma", 1);

			// req.onupgradeneeded = (e) => {
			// 	db = e.target.result;
			// 	const support = db.createObjectStore("Support", {
			// 		keyPath: "email",
			// 	});

			// 	const sale = db.createObjectStore("sale", {
			// 		keyPath: "email",
			// 	});
			// };

			req.onsuccess = (e) => {
				console.log("success");
				db = e.target.result;
			};

			req.onerror = (e) => {
				alert(`error: ${e.target.error} was found `);
			};
		}

		CallDB();

		// const { data } = await axios.get(`/api/requests`, config);

		function DisplaySupport() {
			data = [];
			const tx = db.transaction("Support", "readonly");
			const supports = tx.objectStore("Support");
			// console.log(supports);

			const request = supports.openCursor();
			request.onsuccess = (e) => {
				const cursor = e.target.result;

				if (cursor) {
					// alert(`Title: ${cursor.key} Text: ${cursor.value.text} `);
					// console.log(cursor);
					data.push(cursor.value);
					//do something with the cursor
					cursor.continue();
				}
			};
		}

		DisplaySupport();

		dispatch({ type: USER_SUPPORT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_SUPPORT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
