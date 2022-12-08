import { FacebookOutlined, Telegram, Twitter, YouTube } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box>
      <Grid container spacing={2} sx={{mt:3 }}>
        <Grid md={4}></Grid>
        <Grid md={4} sx={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
          <Link to='/'><FacebookOutlined sx={{fontSize:'50px',borderRadious:"50%",color:"blue"}}/></Link>
          <Link to='/'> <Telegram sx={{fontSize:'50px',borderRadious:"50%", color:'blueviolet'}}/></Link>
          <Link to='/'><YouTube sx={{fontSize:'50px',borderRadious:"50%",color:"red"}}/></Link>
          <Link to='/'><Twitter sx={{fontSize:'50px',borderRadious:"50%"}}/></Link>
        </Grid>
        <Grid md={4}></Grid>
      </Grid>
      <Grid sx={{mt:3}}>
        <Typography sx={{textAlign:"center", color:"grey"}}>Testing React With Node And Mysql Database.</Typography>
        <img src="../../assets/news/Khmer-Times-AW_1000-x-124.gif" alt='' width="100%"/>
        <Typography sx={{textAlign:"center", color:"grey"}}>Copyright by @ nuchtra2222ceo@email.com </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
