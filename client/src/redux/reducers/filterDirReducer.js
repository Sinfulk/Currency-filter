const filterDirReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER_DIR':
      return payload;
    default:
      return state;
  }
};

export default filterDirReducer;
