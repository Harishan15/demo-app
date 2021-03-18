import React from "react";
import ReactPlayer from "react-player";
import { Col } from "react-bootstrap";

import "../App.css";

const Video = () => {
	return (
		<Col className="p-3" sm={12} md={6}>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					width="100%"
					height="100%"
					min
					url="https://www.youtube.com/watch?v=syiQmaGZFXM"
				/>
			</div>
		</Col>
	);
};

export default Video;
