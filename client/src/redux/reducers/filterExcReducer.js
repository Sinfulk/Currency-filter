const filterExcReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER_EXC':
      return payload;
    default:
      return state;
  }
};

export default filterExcReducer;
