import React, { Component } from 'react';
import Display from './components/Display';
import Button from './components/Button';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '0',
			operator: null,
			prevValue: null
		};

		this.updateDisplay = this.updateDisplay.bind(this);
	}

	updateDisplay(val) {
		if (val.value === 'AC') {
			this.setState({
				value: '0'
			});
			return;
		} else if (val.value === '=') {
			if (this.state.operator === null) return;

			if (this.state.operator === '+') {
				this.setState({
					value: parseInt(this.state.prevValue) + parseInt(this.state.value)
				});
			} else if (this.state.operator === '-') {
				this.setState({
					value: parseInt(this.state.prevValue) - parseInt(this.state.value)
				});
			} else if (this.state.operator === '*') {
				this.setState({
					value: parseInt(this.state.prevValue) * parseInt(this.state.value)
				});
			} else if (this.state.operator === '/') {
				this.setState({
					value: parseInt(this.state.prevValue) / parseInt(this.state.value)
				});
			}

			this.setState({
				operator: null,
				prevValue: null
			});
			return;
		} else if (val.value === '+' || val.value === '-' || val.value === '*' || val.value === '/') {
			this.setState({
				operator: val.value,
				prevValue: this.state.value,
				value: '0'
			});
			return;
		}

		this.setState({
			value: this.state.value.length === 1 && this.state.value === '0' ? val.value : this.state.value + val.value
		});
	}

	render() {
		return (
			<div className='main-calc'>
				<Display value={this.state.value || 0} />
				<div className='calc-line'>
					<Button value='0' className='number' updateDisplay={this.updateDisplay} />
					<Button value='1' className='number' updateDisplay={this.updateDisplay} />
					<Button value='2' className='number' updateDisplay={this.updateDisplay} />
					<Button value='3' className='number' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='4' className='number' updateDisplay={this.updateDisplay} />
					<Button value='5' className='number' updateDisplay={this.updateDisplay} />
					<Button value='6' className='number' updateDisplay={this.updateDisplay} />
					<Button value='7' className='number' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='8' className='number' updateDisplay={this.updateDisplay} />
					<Button value='9' className='number' updateDisplay={this.updateDisplay} />
					<Button value='+' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='-' className='operator' updateDisplay={this.updateDisplay} />
				</div>
				<div className='calc-line'>
					<Button value='*' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='/' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='=' className='operator' updateDisplay={this.updateDisplay} />
					<Button value='AC' className='operator' updateDisplay={this.updateDisplay} />
				</div>
			</div>
		);
	}
}

export default Calculator;
