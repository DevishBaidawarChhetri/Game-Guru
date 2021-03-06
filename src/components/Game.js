import React from "react";
/* ----- Styles and Animations ----- */
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";
/* ----- Redux ----- */
import { useDispatch } from "react-redux";
import { loadGameDetail } from "../actions/gameDetailAction";
/* ----- React Router ----- */
import { Link } from "react-router-dom";

/* ----- Image Resize ----- */
// import { smallImage } from '../mediaResize';

const Game = ({ name, released, image, id }) => {
	const stringPathId = id.toString();
	// Load Game Details
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadGameDetail(id));
	};

	return (
		<StyledGame
			variants={popup}
			initial="hidden"
			animate="show"
			layoutId={stringPathId}
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					// src={smallImage(image, 640)}
					src={image}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
	@media screen and (max-width: 768px) {
		height: 38vh;
	}
`;
export default Game;
