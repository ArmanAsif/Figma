import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	useEffect(() => {
		const showBtn = document.getElementById("showBtn");
		const navLinks = document.querySelector(".nav-links");

		showBtn.addEventListener("click", () => {
			navLinks.classList.toggle("nav-active");
		});
	});

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
						<li className="nav-links">
							<Link to={"/supports"} className="header-link">
								Supports{" "}
								<i
									className="fa fa-angle-down"
									style={{ fontSize: "1.25rem", fontWeight: "700" }}
								></i>
							</Link>
							<Link to={"/sales"} className="header-link">
								Sales{" "}
								<i
									className="fa fa-angle-down"
									style={{ fontSize: "1.25rem", fontWeight: "700" }}
								></i>
							</Link>
							<Link to={"/"} className="header-link login">
								A
							</Link>
						</li>
					</ul>
				</div>
				<i className="fa fa-bars" id="showBtn"></i>
			</div>
		</>
	);
};

export default Header;
