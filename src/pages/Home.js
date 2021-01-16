import React, { useEffect } from 'react';

/* ----- Redux ----- */
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

/* ----- Components ----- */
import Game from '../components/Game';

/* ----- Styles and Animation ----- */
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  /* ----- Fetch Data ----- */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  /* ----- Get data from store (state) ----- */
  const { popular, newGames, upComming } = useSelector((state) => state.games);
  console.log(upComming);
  return (
    <GameList>
      <h2>Upcomming Games</h2>
      <Games>
        {
          upComming.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))
        }
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {
          popular.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))
        }
      </Games>
      <h2>New Games</h2>
      <Games>
        {
          newGames.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))
        }
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2{
    padding: 3.5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;