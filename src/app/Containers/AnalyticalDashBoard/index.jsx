import React from 'react'
import Stack from '@mui/material/Stack';
import StatisticsCards from '../../Components/StatisticsCards'
import AnalyticalDashBoardTable from '../../Components/Table';
const AnalyticalDashBoard = () => {
  return (
    <>
     <Stack spacing={2}>
      <StatisticsCards/>
      <AnalyticalDashBoardTable/>
     </Stack>
    </>
  )
}

export default AnalyticalDashBoard