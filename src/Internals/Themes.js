import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: {
          main: red[500],
        },
      },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.primary.main,
    }
  }));


  export {theme , useStyles} ;