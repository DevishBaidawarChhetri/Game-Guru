const initialState = {
  popular: [],
  newGames: [],
  upComming: [],
  searched: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComming: action.payload.upcomming,
        newGames: action.payload.newGames,
        
      };
    case "FETCH_SEARCHED":
      return{
        ...state,
        searched: action.payload.searched
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: []
      };
    default:
      return { ...state }
  }
}

export default gamesReducer;