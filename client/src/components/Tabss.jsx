import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { crypto, bancks, cash } from '../config/db';
import { filterTabs } from '../redux/actions/filterAction';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    marginTop: '100px',
    marginBottom: '200px',
    flexDirection: 'column',
  },
  title: {
    color: '#f44336'
  }
}));

export default function ColorTabs({
  arrDirections, tabState, tabHandler, tabName
}) {
  const dispatch = useDispatch();

  const handleClick = (currency,) => {
    dispatch(filterTabs(arrDirections, currency, tabName));
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Tabs
        value={tabState || 'one'}
        onChange={tabHandler}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Все" onClick={() => handleClick()} />
        <Tab value="two" label="Криптовалюты" onClick={() => handleClick(crypto)} />
        <Tab value="three" label="Наличные" onClick={() => handleClick(bancks)} />
        <Tab value="four" label="Банки RUB" onClick={() => handleClick(cash)} />
      </Tabs>
    </Box>
  );
}
