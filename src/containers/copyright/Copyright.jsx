import React from "react";
import "./copyright.scss";

const Copyright = () => {
	return (
		<div className="copyright">
			<div className="wrap">
				<p className="copyright__description">
					&copy; 2020 by Metzgerei Heiko Brath GmbH, Deutschland
				</p>
				<p className="copyright__description">
					Code and design by
					<a className="copyright__link" href="https://www.studiopresent.rs/">
						StudioPresent
					</a>
				</p>
			</div>
		</div>
	);
};

export default Copyright;
