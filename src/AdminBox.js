import React from 'react';
import './AdminBox.css'
import AdminBoxButton from './AdminBoxButton'

function AdminBox(props) {
	return (
		<div className='AdminBox'> 
			<div className='AdminBoxText'>I am admin #{props.index}</div>
			<AdminBoxButton text='Add'/>
			<AdminBoxButton text='Disable'/>
		</div>
	);
}

export default AdminBox;