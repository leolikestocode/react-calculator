import React from 'react';

export default (props) => (
	<input type='text' className='inputControls' value={props.value} onChange={() => console.log('changeg')} />
);
