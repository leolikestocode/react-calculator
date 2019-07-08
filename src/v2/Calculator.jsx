import React, { Component } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './calculator.css';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '0'
		};

		this.updateDisplay = this.updateDisplay.bind(this);
	}

	updateDisplay(_State) {
		this.setState({
			value:
				this.state.value.length === 1 && this.state.value === '0'
					? _State.value
					: this.state.value + _State.value
		});
	}

	render() {
		return (
			<div className='main-calc'>
				<Display value={this.state.value} />
				<div className='calc-line'>
					<Button value='0' className='number' updateDisplay={this.updateDisplay} />
					<Button value='1' className='number' updateDisplay={this.updateDisplay} />
					<Button value='2' className='number' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='3' className='number' updateDisplay={this.updateDisplay} />
					<Button value='4' className='number' updateDisplay={this.updateDisplay} />
					<Button value='5' className='number' updateDisplay={this.updateDisplay} />
					<Button value='6' className='number' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='7' className='number' updateDisplay={this.updateDisplay} />
					<Button value='8' className='number' updateDisplay={this.updateDisplay} />
					<Button value='9' className='number' updateDisplay={this.updateDisplay} />
					<Button value='+' className='operator' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='-' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='*' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='/' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='=' className='operator' updateDisplay={this.updateDisplay} />
				</div>
			</div>
		);
	}
}

export default Calculator;