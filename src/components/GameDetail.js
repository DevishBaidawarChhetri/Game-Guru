import React from 'react';
/* ----- Styles and Animations ----- */
import styled from 'styled-components';
import { motion } from 'framer-motion';
/* ----- Redux ----- */
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
/* ----- Image Resize ----- */
import { smallImage } from '../mediaResize';
/* ----- Import Images ----- */
import playstation from '../svg/playstation.svg';
import steam from '../svg/steam.svg';
import xbox from '../svg/xbox.svg';
import nintendo from '../svg/nintendo.svg';
import apple from '../svg/apple.svg';
import gamepad from '../svg/gamepad.svg';
import starFull from '../svg/star-full.svg';
import starEmpty from '../svg/star-empty.svg';

const GameDetail = ({ pathId }) => {
  const { game, gameScreenshot, isLoading } = useSelector(state => state.gameDetails);

  // Exiting to home page... "/"
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  }

  // Rendering Platform Icons
  const getPlatform = (platformName) => {
    switch (platformName) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "macOS":
        return apple;
      default:
        return gamepad;
    }
  }

  // Render Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt="Rating" />)
      } else {
        stars.push(<img key={i} src={starEmpty} alt="Rating" />)
      }
    } return stars;
  }

  return (
    <>
      {
        !isLoading && (
          <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
            <div className="detail-container">
              <StyledDetail layoutId={pathId}>
                <StyledStats>
                  <div className="rating">
                    <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                    {getStars()}
                  </div>
                  <StyledInfo>
                    <h3>Platforms</h3>
                    <StyledPlatforms>
                      {
                        game.platforms.map(data => (
                          <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name} />
                        ))
                      }
                    </StyledPlatforms>
                  </StyledInfo>
                </StyledStats>
                <StyledMedia>
                  <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.name} />
                </StyledMedia>
                <StyledDescription>
                  <p>{game.description_raw}</p>
                </StyledDescription>
                <StyledGallery>
                  {
                    gameScreenshot.results.map(screenshot => (
                      <img src={smallImage(screenshot.image, 1280)} key={screenshot.id} alt={screenshot.id} />
                    ))
                  }
                </StyledGallery>
              </StyledDetail>

            </div>
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
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0; left: 0;
  z-index: 1;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track{
    background: #fff;
  }
  .detail-container{
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  color: #000;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  z-index: 2;
  position: absolute;
  img{
    width: 100%;
    border-radius: 0.5rem;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width:1.5rem;
    height: 1.5rem;
    display: inline;
    margin-right: 0.3rem;
  }
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
    margin: 0 0.5rem;
    width: 1.5rem;

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