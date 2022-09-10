const tabExcReducer = (state = 'one', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TAB_EXC':
      return payload;
    default:
      return state;
  }
};

export default tabExcReducer;
