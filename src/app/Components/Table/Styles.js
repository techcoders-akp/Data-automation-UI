import { makeStyles } from '@mui/styles';

export const TableStyles = makeStyles((theme) => ({
  paper: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // color: theme.palette.text.secondary,
    // width:'100%',
  },
}));
