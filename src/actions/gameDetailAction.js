import axios from 'axios';
import { gameDetailsUrl, gameScreenshotUrl } from '../api';

export const loadGameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL"
  })
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      game: detailData.data,
      gameScreenshot: screenshotData.data
    }
  })
}