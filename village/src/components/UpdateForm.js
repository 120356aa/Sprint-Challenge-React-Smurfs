import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class UpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: '',
			id: '',
		};
	}

	updateSmurf = event => {
		let id = this.state.id;
		event.preventDefault();
		axios
			.put(`http://localhost:3333/smurfs/${id}`, {
				name: this.state.name,
				age: this.state.age,
				height: this.state.height
			})
			.then(res => this.setState({
				smurfs: res.data,
				name: '',
				age: '',
				height: ''
			}))
			.catch(err => console.log(err));
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return(
			<div>
				<form onSubmit={this.updateSmurf}> 
					<input
						onChange={this.handleInputChange}
						placeholder="name"
						value={this.state.name}
						name="name"
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="age"
						value={this.state.age}
						name="age"
					/>
					<input 
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit">Add Smurf</button>
				</form>
			</div>
		);
	}
}

export default UpdateForm;