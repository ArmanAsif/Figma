import {
	USER_SUPPORT_LIST_FAIL,
	USER_SUPPORT_LIST_REQUEST,
	USER_SUPPORT_LIST_SUCCESS,
} from "../constants/contactConstants";

// let db = null;
let data = [];

export const getUserSupportList = (db) => (dispatch) => {
	try {
		dispatch({ type: USER_SUPPORT_LIST_REQUEST });

		// function CallDB() {
		// 	const req = indexedDB.open("Figma", 1);
		// 	req.onsuccess = (e) => {
		// 		console.log("success");
		// 		db = e.target.result;
		// 	};

		// 	req.onerror = (e) => {
		// 		alert(`error: ${e.target.error} was found `);
		// 	};
		// }

		// CallDB();

		function DisplaySupport() {
			data = [];
			const tx = db.transaction("Support", "readonly");
			const supports = tx.objectStore("Support");
			const request = supports.openCursor();

			request.onsuccess = (e) => {
				const cursor = e.target.result;
				if (cursor) {
					data.push(cursor.value);
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
