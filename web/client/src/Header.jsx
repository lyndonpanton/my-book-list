import {useState} from "react";

const Header = ({ appTitle }) => {
	const [searchValue, setSearchValue] = useState("");

	const updateSearchValue = (e) => {
		setSearchValue(e.target.value);
		console.log(searchValue);
	};

	return (
		<header>
			<h1>{ appTitle }</h1>
			<input
				id="header-search"
				type="text"
				placeholder="Search..."
				value={ searchValue }
				onChange={ updateSearchValue }
				/>
		</header>
	)
};

export default Header;
