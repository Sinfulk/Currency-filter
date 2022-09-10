import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from './Tabss';
import Input from './Input';
import { exchangeDirection } from '../redux/actions/currencyAction';
import { filterExcAC } from '../redux/actions/filterAction';

import {
  selectedDirAC,
  selectedExcAC,
  tabDirAC,
  tabExcAC
} from '../redux/actions/selectedActions';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '500px',
    display: 'flex',
    marginTop: '100px',
    marginBottom: '200px',
    flexDirection: 'column',
  },
  title: {
    color: '#f44336'
  }
}));

function MainContainer() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const exchanges = useSelector((store) => store.exchanges);
  const directions = useSelector((store) => store.directions);
  const tabExchanges = useSelector((store) => store.tabExchanges);
  const tabDirections = useSelector((store) => store.tabDirections);
  const filterExchanges = useSelector((store) => store.filterExchanges);
  const filterDirections = useSelector((store) => store.filterDirections);
  const selectedExchanges = useSelector((store) => store.selectedExchanges);
  const selectedDirections = useSelector((store) => store.selectedDirections);

  const tabExcHandler = (event, value) => {
    dispatch(selectedExcAC(''));
    dispatch(tabExcAC(value));
  };

  const tabDirHandler = (event, value) => {
    dispatch(selectedDirAC(''));
    dispatch(filterExcAC([]));
    dispatch(tabExcAC('one'));
    dispatch(tabDirAC(value));
  };

  const selectedDirChange = (event) => {
    dispatch(selectedExcAC(''));
    dispatch(selectedDirAC(event.target.value));
    dispatch(exchangeDirection(event.target.value));
  };

  const selectedExcChange = (event) => {
    dispatch(selectedExcAC(event.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отдает</h2>
      <Tabs
        tabName="directions"
        tabState={tabDirections}
        tabHandler={tabDirHandler}
        arrDirections={directions}
      />
      <Input
        selectedChange={selectedDirChange}
        selectedState={selectedDirections}
        arrDirections={filterDirections}
      />
      <h2 className={styles.title}>Получаете</h2>
      <Tabs
        tabState={tabExchanges}
        tabHandler={tabExcHandler}
        arrDirections={exchanges}
      />
      <Input
        selectedChange={selectedExcChange}
        selectedState={selectedExchanges}
        arrDirections={filterExchanges}
      />
    </div>
  );
}

export default MainContainer;
