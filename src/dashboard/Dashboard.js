import { Box, Grid } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import Top from './Top'

const Dashboard = () => {
  return (
    <Box>
        <Grid md={3}>
            <Sidebar/>
        </Grid>
        <Grid md={9}>
            <Top/>
        </Grid>
    </Box>
  )
}

export default Dashboard
