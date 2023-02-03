import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#f8f9fa",
      white :"#ffff",
      darkBlue:"rgb(52, 71, 103)",
    },
    buttons:{
      primary:'#007fff',
      yellow:"#ffeb3b",
      onHover:'#1976d21c'
    },
    icons:{
      Blue:"rgb(52, 71, 103)",
      White:'#ffff'
    },
    text:{
      main:'rgb(52, 71, 103)'
    }
  }
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#001E3C",
        white :"#2d364e",
        darkBlue:"rgb(52, 71, 103)",

      },
      buttons:{
        primary:'#007fff',
        yellow:"#ffeb3b",
        onHover:'#1976d21c'
      },
      icons:{
        darkBlue:"rgb(52, 71, 103)",
        White:'#ffff'
      },
      text:{
        main:'#ffff'
      }
    }
  });


  export {themeLight , themeDark} ;