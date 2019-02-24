import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

function HeaderButton(props) {
	return (
		
			<Link to={props.to}>
			<button className='HeaderButton'>{props.text}</button>
			</Link>
	);
}

function Header(props) {
	return (
		<div className='Header'>
			{props.children}
		</div>
	);
}

Header.Button = HeaderButton;
export default Header;