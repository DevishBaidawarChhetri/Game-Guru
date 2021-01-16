const initialState = {
  game: {}
}

const gameDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game
      }
    default:
      return { ...state }
  }
}

export default gameDetailReducer;