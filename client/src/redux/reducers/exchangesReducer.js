const exchangesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_EXCHANGES':
      return payload;
    default:
      return state;
  }
};

export default exchangesReducer;
