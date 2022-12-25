import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#f8f9fa",
      white :"#ffff",
      darkBlue:"rgb(52, 71, 103)",
      onHover:'#1976d21c',
      tempWhite:'#ffff'
    },
    buttons:{
      primary:'#007fff',
      yellow:"#ffeb3b",
    },
  }
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#161C24",
        white :"#2d364e",
        darkBlue:"rgb(52, 71, 103)",
        onHover:'#1976d21c' ,
        tempWhite:'#ffff'
      },
      buttons:{
        primary:'#007fff',
        yellow:"#ffeb3b",
      },
    }
  });


  export {themeLight , themeDark} ;