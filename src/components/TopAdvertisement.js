import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const TopAdvertisement = () => {
  return (
        <Box sx={{display:'flex',justifyContent:'space-between', alignItem:'center', width:'100%', height:'100px'}}>
            <Link to='/' sx={{width:'30%'}}><img src="../../assets/adver/MicrosoftTeams-image-49.jpg" alt="" width="100%" height="100%" /></Link>
            <Link to='/home' sx={{width:'33%'}}><img src="../../assets/adver/KHMER-TIMES.jpg" alt="" width="100%" height="100%"/></Link>
            <Link to='/' sx={{width:'30%'}}><img src="../../assets/adver/UMBRELLA.png" alt="" width="100%"height="100%" /></Link>
        </Box>
  )
}

export default TopAdvertisement
