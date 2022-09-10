const tabDirReducer = (state = 'one', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TAB_DIR':
      return payload;
    default:
      return state;
  }
};

export default tabDirReducer;
