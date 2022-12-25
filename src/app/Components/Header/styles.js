import { makeStyles } from '@mui/styles';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


export const HeaderStyles = makeStyles( theme  => ({
    
    root:{
        backgroundColor:theme.palette.background.white,
        display:'flex',
        justifyContent:'flex-end',
        minHeight:'3.395rem',
    },
    flexEndDiv:{
        maxWidth:'30%',
        // backgroundColor:'skyblue',
        minWidth:'20%',
        marginRight:'1.5rem',
        marginLeft:'2.5rem',
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between'
    },
    headerAvatar:{
    },
    Icons:{
        color:theme.palette.buttons.primary,
    },
    dynamicSearchfield:{
        width:'65%',
        // backgroundColor:'red'
    },
    notificationIcon:{
        color:theme.palette.background.darkBlue,
    },
    moon:{
        color:theme.palette.buttons.primary
    },
    sun:{
        color:theme.palette.buttons.yellow,
    },
}));

