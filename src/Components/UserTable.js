import React, { Component } from "react";
import { Table } from "react-bootstrap";
// import { Col, Row } from "react-bootstrap";
import { Col, Row, Form, Button } from "react-bootstrap";

// import CreateNewUser from "./CreateNewUser";

class UserTable extends Component {
	state = {
		data: Object.entries(localStorage),
	};

	submitHandler = (e) => {
		e.preventDefault();
		let Username = document.getElementById("username1").value;
		let Password = document.getElementById("password1").value;

		let LocalPassword = localStorage.getItem(Username);
		if (Username && Password) {
			localStorage.setItem(Username, Password); //save on localStorage
			this.setState({
				data: this.state.data.concat({ 0: Username, 1: Password }),
			});
			console.log("Username and Password Created");
		} else if (LocalPassword === Password) {
			console.log("User exists already");
		} else {
			console.log("Enter new Username and Password");
		}
	};

	render() {
		return (
			<Row className="mx-1">
				<Col className="p-3" sm={12} md={6}>
					<h4 className="pb-2">User login details</h4>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Username</th>
								<th>Password</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((d) => {
								return (
									<tr>
										<td>{d[0]}</td>
										<td>{d[1]}</td>
									</tr>
								);
							})}
							{console.log(this.state.data)}
						</tbody>
					</Table>
				</Col>
				<Col className="p-3" sm={12} md={6}>
					{/* //Add new user data form */}
					<Form onSubmit={this.submitHandler}>
						<h4 className="pb-2">Add new user credentials</h4>
						<Form.Group as={Form.Row} controlId="formHorizontalEmail">
							<Form.Label column sm={2} md={4}>
								Username
							</Form.Label>
							<Col sm={10} md={6}>
								<Form.Control
									id="username1"
									type="email"
									placeholder="Username"
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Form.Row} controlId="formHorizontalPassword">
							<Form.Label column sm={2} md={4}>
								Password
							</Form.Label>
							<Col sm={10} md={6}>
								<Form.Control
									id="password1"
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

export default UserTable;
