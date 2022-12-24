import React from 'react'
import UIRenderer from './app/Components/UI WINDOW/UIRenderer'
import {themeLight , themeDark} from './Internals/Themes'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';


const App = () => {
const [toggleMode, settoggleMode] = React.useState(true)
  return (
    <>
      <ThemeProvider theme={toggleMode ? themeLight : themeDark}>
      <CssBaseline />
      <UIRenderer/>
      </ThemeProvider>
    </>
  )
}

export default App