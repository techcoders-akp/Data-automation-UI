import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#f8f9fa",
      white :"#ffff",
      darkBlue:"rgb(52, 71, 103)",
      onHover:'#1976d21c'
    },
    buttons:{
      primary:'#007fff'
    },
  }
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#007fff"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });


  export {themeLight , themeDark} ;