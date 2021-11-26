import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const ShowContactsScreen = () => {
	const userSupportList = useSelector((state) => state.userSupportList);
	const { supports } = userSupportList;

	console.log(supports);

	return (
		<>
			<Header />
			contact
			<Footer />
		</>
	);
};

export default ShowContactsScreen;
