import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Calculator from './main/Calculator';
import Calculatorv2 from './v2/Calculator';

ReactDOM.render(
	<div>
		Calculadora
		{/* <Calculator /> */}
		<Calculatorv2 />
	</div>,
	document.getElementById('root')
);
