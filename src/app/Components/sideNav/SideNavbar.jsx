import React from 'react'
// import { sideIcons } from './constants'
import sideIcons from './constants';
import {sideNavBarStyles} from './styles'
import MenuIcon from '@mui/icons-material/Menu';
const SideNavbar = () => {
    console.log(sideIcons);
    const classes = sideNavBarStyles();
    return (
        <div className={classes.flexColumn}>
            <button className={classes.buttonStyle1}><MenuIcon/></button>
            {sideIcons.map((item) => {
                return <button key={item.id} className={classes.buttonStyle}>{item.icon}</button>
            })
            }
        </div>

    )
}

export default SideNavbar
