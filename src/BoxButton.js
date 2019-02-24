import React from 'react';
import './BoxButton.css'

function BoxButton(props) {
	return (
		<button className='BoxButton'> {props.text} </button>
	);
}

export default BoxButton;