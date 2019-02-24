import React from 'react';
import './Admin.css';
import Header from './Header'
import AdminBox from './AdminBox'

function Admin(props) {
  let makeBoxes = (n) => {
    let boxes = [];
    for (let i = 0; i < n; i++) {
      boxes.push(<AdminBox index={i}/>);
    }
    return boxes;
  }

	return (
		<div>
		<Header>
         <Header.Button to='/' text='Main'/>
        </Header>
		{ 
	      makeBoxes(30)
	    }
		</div>
	);
}

export default Admin;