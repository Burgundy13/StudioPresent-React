import React from "react";
import "./shipping.scss";

const Shipping = () => {
	return (
		<section className="shipping">
			<div className="wrap">
				<div
					className="shipping__content"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<h2 className="shipping__title">Fleischversand</h2>
					<a className="shipping__btn btn--secondary" href="/">
						Jetzt bestellen
					</a>
				</div>
			</div>
		</section>
	);
};

export default Shipping;
