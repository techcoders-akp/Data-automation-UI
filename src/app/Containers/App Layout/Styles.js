import { makeStyles } from '@mui/styles';

export const screenLayoutStyles = makeStyles( theme  => ({ 

    root:{
        width:'94.5%',
        height:'89.5%',
        position:'absolute',
        left:'5%',
        top:'9.5%',
        overflowY:'scroll',
        overflowX:'hidden',
        padding:'2px',
        color:theme.palette.text.main
    },
    container:{

    }
}));
