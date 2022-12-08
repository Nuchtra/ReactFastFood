import { FacebookOutlined, Telegram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import LeftPage from './LeftPage'

const Details = () => {
  return (
    <Box sx={{mt:2}}>
      <Grid container>
        <Grid md={8} sx={{pr:2}}>   
          <Typography component="span" variant="span" sx={{fontSize:"20px"}}>
            <Link to="/national"> National </Link>
          </Typography>
          <Typography component="span" variant="span"> 21 December 2022 </Typography>
          <Typography component="h1" variant="span" sx={{py:2}}>
            Cambodia gymnastics expects gold medals at SEA Games 2023
          </Typography>
          <Typography sx={{py:2}}>
            <img src="../../assets/news/gymnasts24728.jpg" alt="" width="100%"/>
            <img src='../../assets/adver/Khmer-Time-1140x140-1.gif' width="100%" alt=''/>
          </Typography>
          <Grid container>
            <Grid md={3} sx={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
              <Link to='/'><FacebookOutlined sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'> <Telegram sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'><YouTube sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'><Twitter sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
            </Grid>
            <Grid md={6}></Grid>
            <Grid md={3}></Grid>
          </Grid>
          <Typography component="span" variant="span" fontSize="16px">
          Speaker of the US House of Representatives Nancy Pelosi’s residence in San Francisco was broken into in the early hours of Oct 28. Her husband, Paul Pelosi, was attacked. The incident occurred just over a week before polling day for the midterm elections, which attracted widespread public attention.

Paul is widely known not only because of this incident, nor for his identity of being Nancy’s husband, but for trading and investing in the stock market. Earlier this year, the US media discovered that Paul bought $1 million (RM4.53 million) to $5 million worth of shares of the US chip company Nvidia. This was only a few weeks before the US Congress voted on a Bill to subsidise the chip manufacturing industry. This made “insider trading” once again a focus of public attention.

In fact, Nancy’s past stock market investments have almost always yielded profit. In 2021, their average return on investments was 56%, which is better than “stock god” Warren Buffett. The US media, therefore, jokingly called Nancy the “Capitol Hill stock god” and “investment queen”.

As a matter of fact, the phenomenon of American government officials and Congress members using pre-acquired policy information to seek personal interests, turning Congress into a place to get rich is by no means limited to Nancy and her husband.

The Wall Street Journal reported the findings of an investigation that shows thousands of US government executive officials are reported to have held or traded stocks based on the information of their departments’ decisions.

Additionally, around 240 federal officials from health agencies and the Department of Defence, a key player in the vaccine rollout, own stocks worth $28 million in drug, manufacturing and biotech companies. These companies have federal contracts related to the Covid-19 pandemic in 2020 and 2021.

The New York Times also disclosed recently that from 2019 to 2021, nearly 100 members of the US Congress had been suspected of using their powers to obtain inside information when trading stocks and securities. With their knowledge of the changes in policy, they can find the right time to buy and sell stocks and make a fortune.

The Covid epidemic and the Ukraine crisis are all business opportunities in the eyes of these “stock gods”. At the beginning of 2020, when Covid began to break out on a large scale, several US senators, including US Republican Senator Richard Burr, the chairman of the Senate Intelligence Committee, broke scandals when he failed to report the seriousness of the epidemic when selling out stock shares.

The American media questioned whether these congressmen took advantage of their positions to obtain relevant information in advance. They also sold their holdings before the US stock market plummeted, which caused dissatisfaction among the American people. Burr and other officials were heavily criticised by the public because of their actions.

The US introduced a law in 2012 that prohibits members of Congress and staff from using non-public information for personal gain. US media reported that a total of three senators voted against the Bill that year, including Burr who is the only one still in office among the three naysayers.

“Insider information” has been used by 
          </Typography>
          <Grid container sx={{mt:6}}>
            <Grid md={3} sx={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
              <Link to='/'><FacebookOutlined sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'> <Telegram sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'><YouTube sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
              <Link to='/'><Twitter sx={{fontSize:'40px',borderRadious:"50%"}}/></Link>
            </Grid>
            <Grid md={6}></Grid>
            <Grid md={3}></Grid>
          </Grid>
          <Typography component="h2" variant='span' sx={{py:1}}>
            Related Posts
          </Typography>
          <Grid container>
            <Grid md={3} sx={{pr:2}}>
              <Link to="/detials">
                <img src="../../assets/news/47114-150x88.jpg" alt="" width="100%"/>
              </Link>
              <Typography component="h5" variant="span" sx={{py:1}}> 
                  21 December 2022
              </Typography>
              <Link to="/detials">
                <Typography component="h3" variant="span">
                    2022US midterm elections two weeks away
                </Typography>
              </Link>
            </Grid>
            <Grid md={3} sx={{pr:2}}>
              <Link to="/detials">
                <img src="../../assets/news/47114-150x88.jpg" alt="" width="100%"/>
              </Link>
              <Typography component="h5" variant="span" sx={{py:1}}> 
                  21 December 2022
              </Typography>
              <Link to="/detials">
                <Typography component="h3" variant="span">
                    2022US midterm elections two weeks away
                </Typography>
              </Link>
            </Grid>
            <Grid md={3} sx={{pr:2}}>
              <Link to="/detials">
                <img src="../../assets/news/47114-150x88.jpg" alt="" width="100%"/>
              </Link>
              <Typography component="h5" variant="span" sx={{py:1}}> 
                  21 December 2022
              </Typography>
              <Link to="/detials">
                <Typography component="h3" variant="span">
                    2022US midterm elections two weeks away
                </Typography>
              </Link>
            </Grid>
            <Grid md={3} sx={{pr:2}}>
              <Link to="/detials">
                <img src="../../assets/news/47114-150x88.jpg" alt="" width="100%"/>
              </Link>
              <Typography component="h5" variant="span" sx={{py:1}}> 
                  21 December 2022
              </Typography>
              <Link to="/detials">
                <Typography component="h3" variant="span">
                    2022US midterm elections two weeks away
                </Typography>
              </Link>
            </Grid>
          </Grid>  
           
        </Grid>
        <Grid md={4}>
          <LeftPage/>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  )
}

export default Details
