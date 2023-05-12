import React from "react";
import "./footer.scss";
import logo from "../../assets/images/logo-footer.png";
import icons from "../../assets/images/icons-footer.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrap">
				<div className="footer__container">
					<div className="footer__contact">
						<div className="footer__icons">
							<img src={icons} alt="icons footer" />
						</div>
						<div className="footer__info">
							<address className="footer__address">
								Klauprechtstraße 25 76137 <br />
								Karlsruhe, Germany
							</address>
							<p>+49 721 358060</p>
							<p>info@partyservice-brath.de</p>
						</div>
					</div>
					<div className="footer__logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="footer__socials">
						<p className="footer__socials--title">Besuchen Sie uns auf:</p>
						<ul className="footer__list">
							<li className="footer__item">
								<a href="/" className="footer__link">
									<img src={twitter} alt="twitter logo" />
								</a>
							</li>
							<li className="footer__item">
								<a href="/" className="footer__link">
									<img src={facebook} alt="facebook logo" />
								</a>
							</li>
							<li className="footer__item">
								<a href="/" className="footer__link">
									<img src={instagram} alt="instagram logo" />
								</a>
							</li>
							<li className="footer__item">
								<a href="/" className="footer__link">
									<img src={youtube} alt="youtube logo" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
