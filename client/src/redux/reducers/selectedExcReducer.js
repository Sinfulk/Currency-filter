const selectedExcReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SELECTED_EXC':
      return payload;
    default:
      return state;
  }
};

export default selectedExcReducer;
