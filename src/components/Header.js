import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	useEffect(() => {
		// const showBtn = document.getElementById("showBtn");
		// const headerRight = document.getElementById("header-right");
		// const headerMenu = document.getElementById("header-menu");
		// window.addEventListener("resize", handleResize);
		// function handleResize() {
		// 	if (window.innerWidth <= 900) {
		// 		showBtn.style.display = "block";
		// 		headerRight.style.display = "none";
		// 	} else {
		// 		showBtn.style.display = "none";
		// 		headerRight.style.display = "block";
		// 	}
		// }
		// showBtn.onclick = function () {
		// 	headerRight.style.display = "block";
		// 	headerRight.style.marginTop = "5rem";
		// };
	});

	return (
		<>
			<div className="header-main" id="header-main">
				<div>
					<Link to={"/"} className="header-logo">
						<img src="/images/logo.png" alt="logo" />
					</Link>
				</div>

				<div className="header-right" id="header-right">
					{/* <i className="fa fa-times" id="hideBtn"></i> */}
					<ul>
						<li id="header-menu">
							<Link to={"/supports"} className="header-link" id="support">
								Supports
							</Link>
							<Link to={"/sales"} className="header-link" id="sale">
								Sales
							</Link>
							<Link to={"/"} className="header-link login" id="login">
								A
							</Link>
						</li>
					</ul>
				</div>
				{/* <i className="fa fa-bars" id="showBtn"></i> */}
			</div>
		</>
	);
};

export default Header;
