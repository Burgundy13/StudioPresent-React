import React, { useState, useEffect } from "react";
import "./popup.scss";
import { RiCloseLine } from "react-icons/ri";

const Popup = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	const closePopup = () => {
		setIsOpen(false);
	};
	return (
		<div className="popup">
			{isOpen && (
				<>
					<div className="overlay js-overlay"></div>
					<div className="content js-popup-content">
						<div className="popup__body">
							<button
								className="close__btn js-close-btn"
								aria-label="Close popup"
							>
								<RiCloseLine
									className
									Name="close__btn"
									color="000"
									size={30}
									onClick={closePopup}
								/>
							</button>
							<div className="popup__text">
								<h2 className="popup__title h2">Trete unserem Team bei</h2>
								<p className="popup__description">
									Senden Sie jetzt Ihren Lebenslauf
								</p>
							</div>
							<a href="/" className="popup__btn btn--secondary">
								Jetzt beitreten
							</a>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Popup;
