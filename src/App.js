import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";

import Video from "./Components/Video";
import CarouselImg from "./Components/CarouselImg";
import LoginForm from "./Components/LoginForm";
import UserTable from "./Components/UserTable";
import "./App.css";

class App extends Component {
	state = {};
	render() {
		return (
			<Container fluid className="mt-4">
				<Row className="mx-1">
					<CarouselImg />
					<Video />
				</Row>
				<Switch>
					<Route path="/" exact component={LoginForm} />
					<Route path="/dashboard" component={UserTable} />
					<Route path="/not-found" render={() => <h1>Not Found</h1>} />
					<Redirect to="/not-found" />
				</Switch>
			</Container>
		);
	}
}

export default App;
