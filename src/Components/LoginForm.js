import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

class LoginForm extends Component {
	state = {
		errors: "",
	};

	submitHandler = (e) => {
		e.preventDefault();
		let Username = document.getElementById("username").value;
		let Password = document.getElementById("password").value;

		let LocalPassword = localStorage.getItem(Username);
		if (LocalPassword === Password) {
			this.props.history.push("/dashboard");
		} else {
			console.log("Username or Password is wrong");
		}
	};

	render() {
		return (
			<Row>
				<Col className="m-3 p-3">
					<Form onSubmit={this.submitHandler}>
						<h4 className="pb-2">Login Form</h4>
						<Form.Group as={Form.Row} controlId="formHorizontalEmail">
							<Form.Label column sm={2}>
								Username
							</Form.Label>
							<Col sm={10} md={4}>
								<Form.Control
									// onChange={this.onInputUsername}
									// value={this.state.username}
									id="username"
									type="email"
									placeholder="Username"
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Form.Row} controlId="formHorizontalPassword">
							<Form.Label column sm={2}>
								Password
							</Form.Label>
							<Col sm={10} md={4}>
								<Form.Control
									// onChange={this.onInputPassword}
									// value={this.state.password}
									id="password"
									type="password"
									placeholder="Password"
								/>
							</Col>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default LoginForm;
