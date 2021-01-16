import axios from 'axios';
import { gameDetailsUrl } from '../api';

export const loadGameDetail = (slug) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(slug));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      game: detailData.data
    }
  })
}