import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserSupportList } from "../actions/contactActions";

const ShowContactsScreen = () => {
	const dispatch = useDispatch();

	const userSupportList = useSelector((state) => state.userSupportList);
	const { supports } = userSupportList;

	useEffect(() => {
		dispatch(getUserSupportList());
		console.log(supports);
	}, []);

	return (
		<>
			<Header />
			contact
			<Footer />
		</>
	);
};

export default ShowContactsScreen;
