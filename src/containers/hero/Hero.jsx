import React from "react";
import "./hero.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Slide from "../../components/slide/Slide";

const Hero = () => {
	return (
		<Swiper
			className="hero"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			<SwiperSlide className="hero__content hero__content--one">
				<Slide
					title="Heiko Brath Metzgermeister"
					description="	Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
							Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne,
							nam Aperol Spritz probatus pertinax."
				/>
			</SwiperSlide>

			<SwiperSlide className="hero__content hero__content--two">
				<Slide
					title="Henry Schmidt"
					description="	Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
				Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne,
				nam Aperol Spritz probatus pertinax."
				/>
			</SwiperSlide>
			<SwiperSlide className="hero__content hero__content--three">
				<Slide
					title="Everett Wagner Weber"
					description="	Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
				Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne,
				nam Aperol Spritz probatus pertinax."
				/>
			</SwiperSlide>
			<SwiperSlide className="hero__content hero__content--four">
				<Slide
					title="Julia Schneider"
					description="	Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
				Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne,
				nam Aperol Spritz probatus pertinax."
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Hero;
