import React, { useEffect } from "react";
import "./sass/App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	About,
	Awards,
	Banner,
	Footer,
	Header,
	Copyright,
	Products,
	Recommendation,
	Reservation,
	Shipping,
	Spices,
	Hero,
} from "./containers";

import Popup from "./components/popup/Popup";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="App">
				<Header />
				<Banner />
				<Hero />
				<About />
				<Reservation />
				<Products />
				<Spices />
				<Shipping />
				<Awards />
				<Recommendation />
				<Footer />
				<Copyright />
				<Popup />
			</div>
		</>
	);
}

export default App;
