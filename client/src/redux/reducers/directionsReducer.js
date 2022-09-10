const directionsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DIRECTIONS':
      return payload;
    default:
      return state;
  }
};

export default directionsReducer;
