import React from 'react';
import './AdminRow.css'

function AdminRow(props) {
	return (
		<tr>
      		<td>{props.name}</td>
      		<td>{props.price}</td>
      		<td>
      			<button className='editCell' onClick={() => alert('Disabled')}>Disable</button>
      			<button className='editCell' onClick={() => alert('Deleted')}>Delete</button>
      		</td>
      		
      	</tr>
	);
}

export default AdminRow;