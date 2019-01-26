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

	render() {
		return(
			<div></div>
		);
	}
}

export default UpdateForm;