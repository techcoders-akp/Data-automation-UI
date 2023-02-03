import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { TableStyles } from './Styles';

const Table = () => {
    const classes = TableStyles();
  return (
    <>
 <Grid container spacing={2}>
 <Grid xs={12}>
 <Paper className={classes.paper}>

 </Paper>
</Grid>
 </Grid>
    </>
  )
}

export default Table