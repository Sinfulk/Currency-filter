export const filterDirAC = (payload) => ({ type: 'SET_FILTER_DIR', payload });
export const filterExcAC = (payload) => ({ type: 'SET_FILTER_EXC', payload });

export const filterTabs = (arrDirection, currency, tabName) => (dispatch) => {
  if (currency) {
    const result = arrDirection.filter((el) => el.code === currency[0]
    || el.code === currency[1]
    || el.code === currency[2]);
    if (tabName) {
      dispatch(filterDirAC(result));
    } else {
      dispatch(filterExcAC(result));
    }
  } else if (tabName) {
    dispatch(filterDirAC(arrDirection));
  } else {
    dispatch(filterExcAC(arrDirection));
  }
};
