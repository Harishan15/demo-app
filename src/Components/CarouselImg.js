import React from "react";
import { Col, Carousel } from "react-bootstrap";

import Img1 from "../Assets/img/img1.jpg";
import Img2 from "../Assets/img/img2.jpg";
import Img3 from "../Assets/img/img3.jpg";

const CarouselImg = () => {
	return (
		<Col className="p-3" sm={12} md={6}>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={Img1} alt="First slide" />
					<Carousel.Caption>
						<h3>Wallpaper 1</h3>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Img2} alt="Second slide" />
					<Carousel.Caption>
						<h3>Wallpaper 2</h3>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Img3} alt="Third slide" />
					<Carousel.Caption>
						<h3>Wallpaper</h3>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Col>
	);
};

export default CarouselImg;
