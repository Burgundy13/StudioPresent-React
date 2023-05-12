import React from "react";
import "./recommendation.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import stars from "../../assets/images/stars.png";
import quotes from "../../assets/images/quotes.png";
import swiperImg from "../../assets/images/swiper-img.png";

const Recommendation = () => {
	return (
		<section className="recommendation">
			<div className="wrap">
				<p
					className="recommendation__subtitle"
					data-aos="fade-up-right"
					data-aos-duration="3000"
				>
					Empfehlungs
				</p>
				<h2
					className="recommendation__title"
					data-aos="fade-up-left"
					data-aos-duration="3000"
				>
					Was die Leute über uns sagen
				</h2>
				<Swiper
					className="recommendation__slider"
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					centeredSlides
					navigation
					initialSlide={1}
					spaceBetween={70}
					breakpoints={{
						500: {
							slidesPerView: 1,
						},
						901: {
							slidesPerView: 3,
							spaceBetween: 70,
						},
					}}
				>
					<SwiperSlide className="recommendation__slide">
						<div className="slide__img">
							<img className="icon__circle" src={swiperImg} alt="swiper logo" />
							<img className="icon__star" src={stars} alt="three star rating" />
						</div>
						<p className="slide__description">
							Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
							Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
							Stuttgart.
						</p>
						<p className="slide__person">Maria Kartofeln</p>
						<p className="slide__job">Sinker</p>
						<div className="slide__quotes">
							<img src={quotes} alt=" quotes" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="recommendation__slide">
						<div className="slide__img">
							<img className="icon__circle" src={swiperImg} alt="swiper logo" />
							<img className="icon__star" src={stars} alt="three star rating" />
						</div>
						<p className="slide__description">
							Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
							Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
							Stuttgart.
						</p>
						<p className="slide__person">Halling Tobias</p>
						<p className="slide__job">Koch</p>
						<div className="slide__quotes">
							<img src={quotes} alt=" quotes" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="recommendation__slide">
						<div className="slide__img">
							<img className="icon__circle" src={swiperImg} alt="swiper logo" />
							<img className="icon__star" src={stars} alt="three star rating" />
						</div>
						<p className="slide__description">
							Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
							Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
							Stuttgart.
						</p>
						<p className="slide__person">Rene Weinstein</p>
						<p className="slide__job">Kellner</p>
						<div className="slide__quotes">
							<img src={quotes} alt=" quotes" />
						</div>
					</SwiperSlide>
				</Swiper>

				<a className="recommendation__btn btn--primary" href="/">
					Alle Berichte
				</a>
			</div>
		</section>
	);
};

export default Recommendation;
