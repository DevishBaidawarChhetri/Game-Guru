import React from 'react';
/* ----- Styles and Animations ----- */
import styled from 'styled-components';
import { motion } from 'framer-motion';
/* ----- Redux ----- */
import { useDispatch } from 'react-redux';
import { loadGameDetail } from '../actions/gameDetailAction';

const Game = ({ name, released, image, id }) => {
  // Load Game Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadGameDetail(id));
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;

  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
