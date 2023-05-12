import React from "react";
import "./about.scss";
import picture1 from "../../assets/images/Meat-1.jpg";
import picture2 from "../../assets/images/Meat-2.jpg";
import picture3 from "../../assets/images/Meat-3.jpg";
import picture4 from "../../assets/images/Meat-4.jpg";

const About = () => {
	return (
		<section className="about">
			<div className="wrap">
				<div className="about__container">
					<div
						className="about__content"
						data-aos="fade-right"
						data-aos-easing="linear"
					>
						<h2 className="about__title">Dry aged</h2>
						<h3 className="about__subtitle">Alte Wutz, Dry Aged</h3>
						<p>
							Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
							Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
							minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
							Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
							Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
							Stuttgart.
						</p>
						<p className="about__description">
							id latine indoctum complectitur HugoClub Mate mea meliore denique
							nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
							assentior.
						</p>
						<div className="about__wrap">
							<a className="about__btn btn--primary" href="/">
								Dry aged
							</a>
							<a className="about__btn btn--primary" href="/">
								Alte Wurtz
							</a>
						</div>
					</div>
					<div className="about__wrapper">
						<div
							className="about__imgs--big"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							<img src={picture1} alt="meat on grill" />
						</div>
						<div className="about__imgs--small">
							<div
								className="about__img"
								data-aos="flip-right"
								data-aos-duration="4000"
							>
								<img src={picture2} alt="t bone steak on cutting board" />
							</div>
							<div
								className="about__img"
								data-aos="flip-right"
								data-aos-duration="4000"
							>
								<img src={picture3} alt="ramstek on cutting board" />
							</div>
							<div
								className="about__img"
								data-aos="flip-right"
								data-aos-duration="4000"
							>
								<img src={picture4} alt="bacon on cutting board" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
