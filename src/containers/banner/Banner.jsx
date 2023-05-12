import React from "react";
import "./banner.scss";
import clockLogo from "../../assets/images/clock.png";

const Banner = () => {
	return (
		<div className="banner">
			<div className="wrap">
				<div className="worktime">
					<div className="worktime__title">
						<img className="worktime__icon" src={clockLogo} alt="clock logo" />
						<span className="worktime__info--weight">Opentime:</span>
					</div>
					<p className="worktime__info">
						Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
