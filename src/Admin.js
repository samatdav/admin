import React, { useState } from 'react';
import './Admin.css';
import Header from './Header'
import AdminRow from './AdminRow'

function Admin(props) {
  let makeRows = (n) => {
    let rows = [];
    for (let i = 0; i < n; i++) {
      rows.push(
      	<AdminRow key={i} name={'Maple Old Fashioned #'+i} price='123.00'/>
	  );
    }
    return rows;
  }

  const [addNewBool, setAddNew] = useState(true);

  let addRow = <tr className='AdminAddRow'>
		      		<td colSpan='3'>
			      		<button className='AdminAddButton' onClick={() => setAddNew(!addNewBool)}>Add new</button>
			      	</td>
      			</tr>

   let clickedAddRow = <tr className='AdminAddRow'>
				      		<td><input className='AdminAddRowInput'/></td>
				      		<td><input className='AdminAddRowInput'/></td>
				      		<td>
				      			<button className='editCell' onClick={() => setAddNew(!addNewBool)}>Save</button>
				      			<button className='editCell' onClick={() => setAddNew(!addNewBool)}>Cancel</button>
				      		</td>
				      		
				      	</tr>



	return (
		<div>
		<Header>
         <Header.Button to='/' text='Main'/>
        </Header>
	      <div className='AdminContent'>
		      <table className='AdminTable'>
			      <thead>
			      	<tr>
			      		<th>Name</th>
			      		<th>Price</th>
			      		<th>Change</th>
			      	</tr>
		      	  </thead>
			      <tbody>
			      	{ addNewBool ? addRow : clickedAddRow }
		      		{makeRows(30)}
		      	  </tbody>
		      </table>
	      </div>
		</div>
	);
}

export default Admin;