import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const ShowContactsScreen = () => {
	const [search, setSearch] = useState("");
	const [filteredSupports, setFilteredSupports] = useState([]);

	const userSupportList = useSelector((state) => state.userSupportList);
	const { supports } = userSupportList;

	useEffect(() => {
		search &&
			setFilteredSupports(
				supports.filter((item) =>
					item.email.toLowerCase().includes(search.toLowerCase())
				)
			);

		// eslint-disable-next-line
	}, [search]);

	return (
		<>
			<Header />
			<div className="search-box">
				<h2>Search Request</h2>
				<input
					type="text"
					placeholder="Search Request By Email..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{search
				? filteredSupports.map((data, index) => {
						return <Card key={index} data={data} />;
				  })
				: supports.map((data, index) => {
						return <Card key={index} data={data} />;
				  })}

			<Footer />
		</>
	);
};

export default ShowContactsScreen;
