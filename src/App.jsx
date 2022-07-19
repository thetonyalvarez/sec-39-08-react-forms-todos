import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import TodoList from './TodoList'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <header>
        <Typography variant="h1" component="h1">
          Todo
        </Typography>
        <Typography variant="subtitle" component="p">
          Keep track of your todos with this app!
        </Typography>
      </header>
      <main>
        <TodoList></TodoList>
      </main>
    </ThemeProvider>
  )
}

export default App
