import * as React from 'react';
import {HeaderStyles} from './stylesheader'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

 const Header=()=> {
    const classes = HeaderStyles();

  return (
    <div className={classes.Header}>
      <button className={classes.iconButtonStyle1}><AccountCircleIcon/></button>
      <button className={classes.iconButtonStyle}>User</button>
      <button className={classes.iconButtonStyle}>Home</button>
    
    </div>
  )
}
export default Header;
