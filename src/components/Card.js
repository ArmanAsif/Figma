import React from "react";

const Card = ({ data }) => {
	const { issue, email, description } = data;

	return (
		<div className="card-container">
			<div className="card-upper">
				<h3>{issue}</h3>
				<p>{email}</p>
			</div>

			<div className="card-lower">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
