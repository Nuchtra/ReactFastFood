import { FacebookOutlined, Telegram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LeftPage = () => {
  return (
    <Box>
      <Grid container>
        <img src="../../assets/adver/Digital-FTB-Mobile-kill-01.jpg" alt="" width="100%"/>
      </Grid>
      <Grid container sx={{mt:3 }}>
        <Grid md={2}></Grid>
        <Grid md={8} sx={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
          <Link to='/'><FacebookOutlined sx={{fontSize:'50px',borderRadious:"50%",color:"blue"}}/></Link>
          <Link to='/'> <Telegram sx={{fontSize:'50px',borderRadious:"50%", color:'blueviolet'}}/></Link>
          <Link to='/'><YouTube sx={{fontSize:'50px',borderRadious:"50%",color:"red"}}/></Link>
          <Link to='/'><Twitter sx={{fontSize:'50px',borderRadious:"50%"}}/></Link>
        </Grid>
        <Grid md={2}></Grid>

        <Link to='/hot_new'><Typography component="h2" variant='span' sx={{color:"green", mt:3}}>Hot News</Typography></Link>
        <Grid  sx={{mt:1}}>
            <Link to="/detials"><img src="../../assets/news/jmhngfbds-300x176.jpg" alt="" width="100%"/></Link>
            <Box >
            <Link to="/detials">
                <Typography component="h3" variant="span">
                “Phnom Penh Miracle” at the 40th and 41st ASEAN Summits
                </Typography>
            </Link>
            <Typography component="span" variant="span">
                The adoptions of the ASEAN Leaders’ Statement on the Application of Timor-Leste for ASEAN Membership, and the ASEAN Leaders’ Review and Decision on the Implementation of the Five-Point Consensus at the 40th and 41st ASEAN Summits respectively was nothing short of a miracle. The Phnom Penh Miracle.
            </Typography>
            </Box>
        </Grid>
        <Grid  sx={{mt:1}}>
            <Link to="/detials"><img src="../../assets/news/jmhngfbds-300x176.jpg" alt="" width="100%"/></Link>
            <Box >
            <Link to="/detials">
                <Typography component="h3" variant="span">
                “Phnom Penh Miracle” at the 40th and 41st ASEAN Summits
                </Typography>
            </Link>
            <Typography component="span" variant="span">
                The adoptions of the ASEAN Leaders’ Statement on the Application of Timor-Leste for ASEAN Membership, and the ASEAN Leaders’ Review and Decision on the Implementation of the Five-Point Consensus at the 40th and 41st ASEAN Summits respectively was nothing short of a miracle. The Phnom Penh Miracle.
            </Typography>
            </Box>
        </Grid>
        <Grid  sx={{mt:1}}>
            <Link to="/detials"><img src="../../assets/news/jmhngfbds-300x176.jpg" alt="" width="100%"/></Link>
            <Box >
            <Link to="/detials">
                <Typography component="h3" variant="span">
                “Phnom Penh Miracle” at the 40th and 41st ASEAN Summits
                </Typography>
            </Link>
            <Typography component="span" variant="span">
                The adoptions of the ASEAN Leaders’ Statement on the Application of Timor-Leste for ASEAN Membership, and the ASEAN Leaders’ Review and Decision on the Implementation of the Five-Point Consensus at the 40th and 41st ASEAN Summits respectively was nothing short of a miracle. The Phnom Penh Miracle.
            </Typography>
            </Box>
        </Grid>
        <Grid  sx={{mt:1}}>
            <Link to="/detials"><img src="../../assets/news/jmhngfbds-300x176.jpg" alt="" width="100%"/></Link>
            <Box >
            <Link to="/detials">
                <Typography component="h3" variant="span">
                “Phnom Penh Miracle” at the 40th and 41st ASEAN Summits
                </Typography>
            </Link>
            <Typography component="span" variant="span">
                The adoptions of the ASEAN Leaders’ Statement on the Application of Timor-Leste for ASEAN Membership, and the ASEAN Leaders’ Review and Decision on the Implementation of the Five-Point Consensus at the 40th and 41st ASEAN Summits respectively was nothing short of a miracle. The Phnom Penh Miracle.
            </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LeftPage
