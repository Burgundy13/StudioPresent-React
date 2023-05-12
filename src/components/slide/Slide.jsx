import React from "react";

const Slide = ({ title, description }) => {
	return (
		<div className="hero__text">
			<div className="hero__wrap">
				<h1 className="hero__title">{title}</h1>
				<p className="hero__description">{description}</p>
			</div>
		</div>
	);
};

export default Slide;
