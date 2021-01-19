const initialState = {
  popular: [],
  newGames: [],
  upComming: [],
  searched: []
}

// Shuffle Array Data
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: shuffle(action.payload.popular),
        upComming: shuffle(action.payload.upcomming),
        newGames: shuffle(action.payload.newGames),

      };
    case "FETCH_SEARCHED":
      return {
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