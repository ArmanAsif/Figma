import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const SaleListScreen = () => {
	const [search, setSearch] = useState("");
	const [filteredSales, setFilteredSales] = useState([]);

	const userSaleList = useSelector((state) => state.userSaleList);
	const { sales } = userSaleList;

	useEffect(() => {
		search &&
			setFilteredSales(
				sales.filter((item) =>
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
				? filteredSales.map((data, index) => {
						return <Card key={index} data={data} />;
				  })
				: sales.map((data, index) => {
						return <Card key={index} data={data} />;
				  })}

			<Footer />
		</>
	);
};

export default SaleListScreen;
