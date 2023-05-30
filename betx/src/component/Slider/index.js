import React from "react";
import Image1 from "./images/kv-sexy-roulette-m.jpg";
import Image2 from "./images/kv-all-skyexchange-m.jpg";
import Image3 from "./images/kv-betgames-9livegames-m.png";
import Image4 from "./images/kv-casino-cardMatka-m.jpg";
import Image5 from "./images/kv-casino-numberMatka-m.jpg";
import Image6 from "./images/kv-casino-tna-m.jpg";
import Image7 from "./images/kv-sexy-roulette-m.jpg";
function index() {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={Image1} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image2} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image3} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image4} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image5} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image6} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={Image7} className="d-block w-100" alt="..." />
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default index;
