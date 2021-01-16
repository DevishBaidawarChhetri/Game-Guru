import React from 'react';
/* ----- Styles and Animations ----- */
import styled from 'styled-components';
import { motion } from 'framer-motion';
/* ----- Redux ----- */
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GameDetail = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
    // console.log(history);
  }
  const { game, gameScreenshot, isLoading } = useSelector(state => state.gameDetails);
  return (
    <>
      {
        !isLoading && (
          <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
            <StyledDetail>
              <StyledStats>
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating}</p>
                </div>
                <StyledInfo>
                  <h3>Platforms</h3>
                  <StyledPlatforms>
                    {
                      game.platforms.map(data => (
                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                      ))
                    }
                  </StyledPlatforms>
                </StyledInfo>
              </StyledStats>
              <StyledMedia>
                <img src={game.background_image} alt={game.name} />
              </StyledMedia>
              <StyledDescription>
                <p>{game.description_raw}</p>
              </StyledDescription>
              <StyledGallery>
                {
                  gameScreenshot.results.map(screenshot => (
                    <img src={screenshot.image} key={screenshot.id} alt={screenshot.id} />
                  ))
                }
              </StyledGallery>
            </StyledDetail>
          </StyledCardShadow>
        )
      }
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0; left: 0;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track{
    background: #fff;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  color: #000;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  img{
    width: 100%;
    border-radius: 0.5rem;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img{
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 2rem 0;
`;

const StyledGallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  img{
    min-height: 50vh;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;
export default GameDetail;