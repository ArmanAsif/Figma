import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="header-main">
				<div>
					<Link to={"/"} className="header-logo">
						{/* <img src="/images/logo.png" alt="logo" /> */}
						<p>Figma</p>
					</Link>
				</div>

				<div className="header-right">
					<ul>
						<li>
							<Link to={"/contacts"} className="header-link">
								CONTACTS
							</Link>
							<Link to={"/request"} className="header-link">
								REQUEST
							</Link>
							<Link to={"/"} className="header-link login">
								LOGIN
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
