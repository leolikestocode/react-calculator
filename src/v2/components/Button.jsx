import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.updateDisplay(this.state);
	}

	render() {
		return <button onClick={this.handleClick}>{this.props.value}</button>;
	}
}

export default Button;
