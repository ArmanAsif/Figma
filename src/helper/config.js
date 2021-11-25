// let db = null;
const dbName = "Figma";
const dbVersion = 1;

export default function CreateDB(db) {
	const request = indexedDB.open(dbName, dbVersion);

	request.onupgradeneeded = (e) => {
		db = e.target.result;
		const support = db.createObjectStore("Support", {
			keyPath: "email",
		});

		const sale = db.createObjectStore("sale", {
			keyPath: "email",
		});

		alert(
			`upgrade is called database name: ${db.name} version : ${db.version}`
		);
	};

	request.onsuccess = (e) => {
		db = e.target.result;
		alert(
			`success is called database name: ${db.name} version : ${db.version}`
		);
	};

	request.onerror = (e) => {
		alert(`error: ${e.target.error} was found `);
	};

	// return db;
}
