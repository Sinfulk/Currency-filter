import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      paddingRight: '0px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderRadius: '0px',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
    },
  },
}));

function SelectButton({ arrDirections, selectedState, selectedChange }) {
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl className={classes.root} fullWidth>
        <Select value={selectedState || ''} onChange={selectedChange}>

          {arrDirections?.map((el) => (
            <MenuItem key={el.code} value={el.code}>
              {el.name}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectButton;
