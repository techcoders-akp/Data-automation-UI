import { makeStyles } from '@mui/styles';
export  const HeaderStyles = makeStyles({
  iconButtonStyle:{
    float: 'right',
    paddingTop:'0.255rem',
  paddingLeft: '1.25rem',
  textDecoration: 'none',
  fontSize: '1.20rem',
  color: '#818181',
  display: 'block'
  },
  iconButtonStyle1:{
    float: 'right',
    paddingTop:'0.5rem',
  paddingLeft: '1.25rem',
  paddingRight:'0.15rem',
  textDecoration: 'none',
  fontSize: '1.25rem',
  color: '#818181',
  display: 'block'
  },
  Header:{
    overflow: 'hidden',
    backgroundColor:'aqua',
    position: 'fixed', 
    top: 0, 
    width: '100%',
    height: '2.5rem',
    paddingLeft: '4.5rem'
  }
  
})