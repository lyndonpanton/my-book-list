import "./Header.css";

import {useState} from "react";

const Header = ({ appTitle, filterValue, setFilterValue }) => {

	const updateSearchValue = (e) => {
		setFilterValue(e.target.value);
	};

	return (
		<header>
			<h1>{ appTitle }</h1>
			<input
				id="header-search"
				type="text"
				placeholder="Filter..."
				value={ filterValue }
				onChange={ updateSearchValue } />
		</header>
	)
};

export default Header;
