import React from 'react';
import FormTodo from './Components/FormTodo';
import { ThemeProvider } from '@material-ui/core';
import theme from './Components/Theme';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <FormTodo/>
      </ThemeProvider>
    </div>
  );
}

export default App;
