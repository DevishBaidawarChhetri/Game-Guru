import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../svg/logo.svg";
// Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState("");

	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};

	const submitSearch = () => {
		dispatch(fetchSearch(textInput));
		setTextInput("");
	};

	const clearSearched = () => {
		dispatch({ type: "CLEAR_SEARCHED" });
		setTextInput("");
	};
	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<StyledLogo onClick={clearSearched}>
				<img src={logo} alt="Logo" />
				<h1>Game Guru</h1>
			</StyledLogo>
			<StyledSearch>
				<input
					onChange={inputHandler}
					type="text"
					value={textInput}
					placeholder="Example: GTA V"
					required
				/>
				<button onClick={submitSearch}>Search</button>
			</StyledSearch>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	border: none;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border-radius: 0px;
	}
	button {
		color: #ffffff;
		background: #656565;
		font-size: 1.2rem;
		border: none;
		padding: 0.7rem 2rem;
		cursor: pointer;
		border-radius: 0;
	}
	input[type="text"]:focus,
	button:focus {
		outline: none;
	}
	@media screen and (max-width: 768px) {
		padding: 0 1.5rem;
		input {
			width: 80%;
			font-size: 1rem;
			border-radius: 0.4rem 0 0 0.4rem;
		}
		button {
			font-size: 1rem;
			padding: 0.5rem;
			border-radius: 0 0.4rem 0.4rem 0;
		}
	}
`;

const StyledLogo = styled(motion.nav)`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	img {
		height: 2rem;
		width: 2rem;
		margin-right: 0.5rem;
	}
`;

const StyledSearch = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		margin: 0 0 1rem;
		button {
		}
	}
`;
export default Nav;
