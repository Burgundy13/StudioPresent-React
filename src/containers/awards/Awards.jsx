import React from "react";
import "./awards.scss";
import logo from "../../assets/images/logo-2.png";
import genLogo from "../../assets/images/genussnetz-logo.png";
import award1 from "../../assets/images/award-1.png";
import award2 from "../../assets/images/award-2.png";
import award3 from "../../assets/images/award-3.png";
import award4 from "../../assets/images/award-4.png";

const Awards = () => {
	return (
		<section className="awards">
			<div className="wrap">
				<div className="awards__container">
					<div className="awards__wrapper">
						<div
							className="awards__img"
							data-aos-duration="2000"
							data-aos="fade-right"
						>
							<img src={genLogo} alt="genussnetz logo" />
						</div>
						<div
							className="awards__content"
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h2 className="awards__title">
								Metzgerei Brath ist Mitglied im Genussnetzwerk
							</h2>
							<a className="awards__btn btn--primary" href="/">
								Das Handwerk
							</a>
						</div>
					</div>
					<div className="awards__logo">
						<img src={logo} alt="logo" />
					</div>
					<div
						className="awards__cards"
						data-aos="flip-down"
						data-aos-duration="3000"
					>
						<h2 className="awards__heading">Auszeichnungen</h2>
						<div className="awards__card">
							<img
								className="card__img"
								src={award1}
								alt="award special offer"
							/>
							<p className="card__description">
								Tollit argumentum genau Saepe lobortis
							</p>
						</div>
						<div className="awards__card">
							<img
								className="card__img"
								src={award2}
								alt="award genuine quality"
							/>
							<p className="card__description">Schneewittchen denique</p>
						</div>
						<div className="awards__card">
							<img
								className="card__img"
								src={award3}
								alt="award the best choice"
							/>
							<p className="card__description">Grimms Märchen expetenda</p>
						</div>
						<div className="awards__card">
							<img
								className="card__img"
								src={award4}
								alt="award highest quality"
							/>
							<p className="card__description">
								Mettwurst mei ullum gloriatur.
							</p>
						</div>
					</div>
					<div className="awards__logo">
						<img src={logo} alt="logo" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awards;
