import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="header-main">
				<div>
					<Link to={"/"} className="header-logo">
						<img src="/images/logo.png" alt="logo" />
					</Link>
				</div>

				<div className="header-right">
					<ul>
						<li>
							<Link to={"/supports"} className="header-link">
								Supports
							</Link>
							<Link to={"/sales"} className="header-link">
								Sales
							</Link>
							<Link to={"/"} className="header-link login">
								A
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
