import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { allDirections } from './redux/actions/currencyAction';
import MainContainer from './components/MainContainer';

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#ff4400'
      },
      primary: {
        main: '#ff4400'
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDirections());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
