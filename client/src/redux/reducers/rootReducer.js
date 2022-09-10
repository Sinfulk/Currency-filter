import { combineReducers } from 'redux';
import masageReducer from './masageReducer';
import directionsReducer from './directionsReducer';
import filterDirReducer from './filterDirReducer';
import exchangesReducer from './exchangesReducer';
import filterExcReducer from './filterExcReducer';
import tabDirReducer from './tabDirReducer';
import tabExcReducer from './tabExcReducer';
import selectedDirReducer from './selectedDirReducer';
import selectedExcReducer from './selectedExcReducer';

const rootReducer = combineReducers({
  masage: masageReducer,
  directions: directionsReducer,
  exchanges: exchangesReducer,
  filterDirections: filterDirReducer,
  filterExchanges: filterExcReducer,
  tabDirections: tabDirReducer,
  tabExchanges: tabExcReducer,
  selectedDirections: selectedDirReducer,
  selectedExchanges: selectedExcReducer,
});

export default rootReducer;
