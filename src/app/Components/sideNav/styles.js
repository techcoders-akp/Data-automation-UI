import { makeStyles } from '@mui/styles';

export const sideNavBarStyles = makeStyles( theme  => ({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.white ,
    position: 'fixed',
    overflowX: 'hidden',
    display: 'flex',
    zIndex: 1,
    top: 0,
    left: 0,
    height: '100%',
    minWidth: '3.3rem',
    maxWidth: '3.6rem',
    paddingTop: '1.0rem',
  },
  headIconStyles: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:theme.palette.background.darkBlue,
    height: '9.7%',
    marginTop:'-16px',
  },
  dynamicIconsDiv: {
    display: 'grid',
    justifyContent: 'center !important',
    height: '50%',
    alignItems:'center'
  },
  dynamicIcons:{
    maxHeight:'2rem',
    
    '&:hover':{
      backgroundColor:`${theme.palette.background.onHover} !important`,
    }
  },
  footerContent: {
    display: 'grid',
    justifyContent: 'center',
    height: '20%',
    alignItems:'center',

  },
  brandLogo:{
    color:theme.palette.background.tempWhite
  },
}));
