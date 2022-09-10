import React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import SelectButton from './SelectButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      paddingRight: '0px',
    },
  },
}));

function Input({ arrDirections, selectedState, selectedChange }) {
  const styles = useStyles();

  return (
    <div>
      <TextField
        className={styles.root}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SelectButton
                arrDirections={arrDirections}
                selectedState={selectedState}
                selectedChange={selectedChange}
              />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
}

export default Input;
