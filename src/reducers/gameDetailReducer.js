const initialState = {
  game: { platforms: [] },
  gameScreenshot: { results: [] },
  isLoading: true
}

const gameDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        gameScreenshot: action.payload.gameScreenshot,
        isLoading: false
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true
      }
    default:
      return { ...state }
  }
}

export default gameDetailReducer;