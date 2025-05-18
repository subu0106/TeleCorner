import './App.css';
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ItemList from './pages/ItemList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} onToggleTheme={handleToggleTheme} />
      <ItemList darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App;
