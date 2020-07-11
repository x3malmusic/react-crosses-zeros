const initialState = {
  resultMessage: "",
  currentClass: true,
  showModal: false,
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  playerMarks: [...Array(9)],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_CLASS":
      return {
        ...state,
        currentClass: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        resultMessage: action.payload,
      };
    case "CLEAR_MARKS":
      return {
        ...state,
        playerMarks: action.payload,
      };
    case "SET_MARK":
      let marks = [...state.playerMarks];
      marks[action.payload.position] = action.payload;
      return {
        ...state,
        playerMarks: marks,
      };
    default:
      return state;
  }
};
