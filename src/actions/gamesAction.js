import axios from 'axios';
import { popularGamesUrl, upcommingGamesUrl, newGamesUrl, searchGameUrl } from '../api';

export const loadGames = () => async (dispatch) => {
  /* ----- Fetch Data (Axios) ----- */
  const popularData = await axios.get(popularGamesUrl());
  const upcommingData = await axios.get(upcommingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcomming: upcommingData.data.results,
      newGames: newGamesData.data.results
    }
  });
}

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results
    }
  });
}