import { setMasageAC } from './masageAction';
import * as db from '../../config/db';
import { filterDirAC, filterExcAC } from './filterAction';
import { tabExcAC } from './selectedActions';

export const directionsAC = (payload) => ({ type: 'SET_DIRECTIONS', payload });
export const exchangesAC = (payload) => ({ type: 'SET_EXCHANGES', payload });

export const allDirections = () => async (dispatch) => {
  // вместо db  fetch на бек
  const directions = db.directions();
  const error = 'error noy directions';
  if (directions) {
    dispatch(directionsAC(directions));
    dispatch(filterDirAC(directions));
  } else {
    // при ошибки с бека
    dispatch(setMasageAC(error));
  }
};
export const exchangeDirection = (direction) => async (dispatch) => {
  // вместо db fetch на бек
  const directions = db.filterDirections().find((el) => el.from.code === direction);
  const error = 'error noy direction';

  if (directions) {
    dispatch(exchangesAC(directions.to));
    dispatch(tabExcAC('one'));
    dispatch(filterExcAC(directions.to));
  } else {
    // при ошибки с бека
    dispatch(setMasageAC(error));
  }
};
