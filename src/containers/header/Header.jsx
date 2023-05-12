import React, { useState, useEffect } from "react";
import "./header.scss";
import DarkMode from "../../components/DarkMode/DarkMode";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/images/logo.png";
import pdfLogo from "../../assets/images/pdf.png";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth > 1300) {
				setToggleMenu(false);
				enableBodyScroll();
			}
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
			enableBodyScroll();
		};
	}, []);

	const disableBodyScroll = () => {
		document.body.classList.add("no-scroll");
	};

	const enableBodyScroll = () => {
		document.body.classList.remove("no-scroll");
	};

	const toggleMenuHandler = () => {
		setToggleMenu((prevState) => {
			if (!prevState) {
				disableBodyScroll();
				enableBodyScroll();
			}
			return !prevState;
		});
	};

	return (
		<header className="header">
			<div className="wrap">
				<div
					className="header__img"
					data-aos="zoom-in"
					data-aos-duration="3000"
				>
					<img src={logo} alt="logo" />
				</div>
				<nav className="nav">
					<ul className={`nav__list  ${toggleMenu ? "show" : ""} `}>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Die Metzgerei
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Dry Aged
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Fleischversand
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Events/Kurse
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Partyservice
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Tagesessen
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Impressum
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								Kontakt
							</a>
						</li>
						<li className="nav__item">
							<a className="nav__link" href="/">
								<div className="icon__pdf">
									<img src={pdfLogo} alt="pdf logo" />
								</div>
								download
							</a>
						</li>
					</ul>
					<div className="nav__menu">
						<div className="nav__menu--item">
							<a className="nav__menu--link" href="/">
								<div className="icon__pdf">
									<img src={pdfLogo} alt="pdf logo" />
								</div>
								download
							</a>
						</div>

						{toggleMenu ? (
							<RiCloseLine
								className="hamburger__menu"
								color="fff"
								size={27}
								onClick={toggleMenuHandler}
							/>
						) : (
							<RiMenu3Line
								className="hamburger__menu"
								color="fff"
								size={27}
								onClick={toggleMenuHandler}
							/>
						)}

						<DarkMode />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
