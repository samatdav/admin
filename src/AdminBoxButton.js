import React from 'react';
import './AdminBoxButton.css'

function AdminBoxButton(props) {
	return (
		<button className='AdminBoxButton'> {props.text} </button>
	);
}

export default AdminBoxButton;