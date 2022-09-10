const selectedDirReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SELECTED_DIR':
      return payload;
    default:
      return state;
  }
};

export default selectedDirReducer;
