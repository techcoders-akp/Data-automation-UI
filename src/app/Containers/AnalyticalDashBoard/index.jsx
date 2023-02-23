import React from 'react'
import Stack from '@mui/material/Stack';
import StatisticsCards from '../../Components/StatisticsCards'
import AnalyticalDashBoardTable from '../../Components/Table';
const AnalyticalDashBoard = () => {
  return (
    <>
     <Stack spacing={2}>
      {/* <StatisticsCards/> */}
      <h1 sx={{margin:0,padding:0}}>Analytical Dashboard</h1>
      <AnalyticalDashBoardTable/>
     </Stack>
    </>
  )
}

export default AnalyticalDashBoard