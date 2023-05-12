import React from "react";
import "./reservation.scss";

const Reservation = () => {
	return (
		<section className="reservation">
			<div className="wrap">
				<div
					className="reservation__content"
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
				>
					<h2 className="reservation__title">
						Buchen Sie den <br />
						Grillkurs jetzt
					</h2>
					<ul className="reservation__list">
						<li className="reservation__item">professioneller Lehrer</li>
						<li className="reservation__item">ausgezeichneter Metzger</li>
						<li className="reservation__item">1 Tag</li>
						<li className="reservation__item">
							lernen Sie die Kunst des Grillens
						</li>
					</ul>
					<a className="reservation__btn btn--secondary" href="/">
						Grillkurs
					</a>
				</div>
				<div className="reservation__img"></div>
			</div>
		</section>
	);
};

export default Reservation;
