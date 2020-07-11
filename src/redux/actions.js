export const switchClass = (current) => ({
  type: "SWITCH_CLASS",
  payload: current,
});

export const showResultModal = (show) => ({
  type: "SHOW_MODAL",
  payload: show,
});

export const setMark = (position) => ({
  type: "SET_MARK",
  payload: position,
});

export const setMessage = (message) => ({
  type: "SET_MESSAGE",
  payload: message,
});

export const clearMarks = () => ({
  type: "CLEAR_MARKS",
  payload: [...Array(9)],
});
