import { makeStyles } from '@mui/styles';

export const sideNavBarStyles = makeStyles({
    buttonStyle: {
        paddingBottom: "1rem",
        textDecoration: "none",
        fontSize: "25px",
        color: "#818181",
        display: "block",
        "&:hover":{
            color: 'white',
        },
    },
    buttonStyle1:{
        paddingBottom: "8rem",
        textDecoration: "none",
        fontSize: "25px",
        color: "#818181",
        display: "block"
    },
    flexColumn:{
        flexDirection: "column",
        backgroundColor: "bisque",
        position: "fixed",
        overflowX:"hidden",
        display:"flex",
        zIndex: 1,
        top: 0,
        left: 0,
        height: "100%",
        width: "3.5rem",
        paddingTop: "1.0rem"

    }
})