import React, { useEffect } from 'react';

/* ----- Redux ----- */
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

/* ----- Components ----- */
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

/* ----- Styles and Animation ----- */
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from "../animation";

/* ----- Get React Location ----- */
import { useLocation } from 'react-router-dom';

const Home = () => {
  /* ----- Get Location ----- */
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];


  /* ----- Fetch Data ----- */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  /* ----- Get data from store (state) ----- */
  const { popular, newGames, upComming, searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {
          searched.length ? (
            <div>
              <h2>Searched Games</h2>
              <Games>
                {
                  searched.map((game) => (
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
            </div>
          ) : ''
        }
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
      </AnimateSharedLayout>
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