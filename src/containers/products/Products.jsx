import React from "react";
import "./products.scss";
import picture1 from "../../assets/images/Meat-4.jpg";
import picture2 from "../../assets/images/Meat-2.jpg";
import picture3 from "../../assets/images/Meat-3.jpg";
import logo from "../../assets/images/logo-2.png";

const Products = () => {
	return (
		<section className="products">
			<div className="wrap">
				<div
					className="products__content"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-delay="500"
					data-aos-offset="0"
				>
					<h2 className="products__title">Das Handwerk</h2>
					<h3 className="products__subtitle">
						alles über unsere Hausgemachte Produkte
					</h3>
					<p>
						Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
						Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
						veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
						Sprechen Sie deutsch aliquip ex ea commodo consequat.
					</p>
					<p>
						Wiener Schnitzel aute irure dolor in Guten Tag mollit anim
						Stuttgart.
					</p>
					<p className="products__description">
						id latine indoctum complectitur HugoClub Mate mea meliore denique
						nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
						assentior
					</p>
					<a className="products__btn btn--primary" href="/">
						Das Handwerk
					</a>
				</div>
				<div className="products__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="products__cards">
					<div className="products__card">
						<div className="card__img">
							<img
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="3000"
								src={picture1}
								alt="bacon on cutting board"
							/>
						</div>
						<div className="card__text">
							<h3 className="card__title">Würstchen</h3>
						</div>
					</div>
					<div className="products__card">
						<div className="card__img">
							<img
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="3000"
								src={picture2}
								alt="t bone stak on cutting board"
							/>
						</div>
						<div className="card__text">
							<h3 className="card__title">Hähnchen</h3>
						</div>
					</div>
					<div className="products__card">
						<div className="card__img">
							<img
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="3000"
								src={picture3}
								alt="ramstek on cutting board"
							/>
						</div>
						<div className="card__text">
							<h3 className="card__title">Schwein</h3>
						</div>
					</div>
					<div className="products__card">
						<div className="card__img">
							<img
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="3000"
								src={picture1}
								alt="bacon on cutting board"
							/>
						</div>
						<div className="card__text">
							<h3 className="card__title">Rind</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
