import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import LeftPage from './LeftPage'


const HomePage = () => {

  return (
    <Box sx={{width:"100%",mt:2}}>
      <Grid container spacing={2}>
        <Grid item md={6} sx={{position:"relative" ,overflow:'hidden'}}>
          <Link to='/detials'>
            <Typography component="h5" variant='span' sx={{position:'absolute',color:"black",}}>12 Desember 2022</Typography>
            <Typography component="h4" variant='span' sx={{position:'absolute',color:"white", bottom:'10px',left:'20px', textShadow:'0px 0px 5px black'}}>
              Ministry launches nationwide crackdown on illegal abortion procedures after botched operation
            </Typography>
            <img src='../../assets/news/dreamstime_m_182748298-002-750x440-2.jpg' alt='' width="100%"/>
          </Link>
        </Grid>
        <Grid item md={6} spacing={2} >
          <Grid container spacing={2}>
            <Grid item md={6} sx={{position:"relative" ,overflow:'hidden'}}>
              <Link to='/detials'>
                <Typography component="h5" variant='span' sx={{position:'absolute',color:"black",}}>12 Desember 2022</Typography>
                <Typography component="h4" variant='span' sx={{position:'absolute',color:"white", bottom:'10px',left:'20px', textShadow:'0px 0px 5px black'}}>
                  Ministry launches nationwide crackdown on illegal abortion procedures after botched operation
                </Typography>
                <img src='../../assets/news/kjhghfdf.jpg' alt='' width="100%"/>
              </Link>
            </Grid>
            <Grid item md={6} sx={{position:"relative" ,overflow:'hidden'}}>
              <Link to='/detials'>
                <Typography component="h5" variant='span' sx={{position:'absolute',color:"black",}}>12 Desember 2022</Typography>
                <Typography component="h4" variant='span' sx={{position:'absolute',color:"white", bottom:'10px',left:'20px', textShadow:'0px 0px 5px black'}}>
                  Ministry launches nationwide crackdown on illegal abortion procedures after botched operation
                </Typography>
                <img src='../../assets/news/Mystery-of-British-mans-trash-bag-suicide.jpg' alt='' width="100%"/> 
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2} >  
            <Grid item md={6} sx={{position:"relative" ,overflow:'hidden'}}>
              <Link to='/detials'>
                <Typography component="h5" variant='span' sx={{position:'absolute',color:"black",}}>12 Desember 2022</Typography>
                <Typography component="h4" variant='span' sx={{position:'absolute',color:"white", bottom:'10px',left:'20px', textShadow:'0px 0px 5px black'}}>
                  Ministry launches nationwide crackdown on illegal abortion procedures after botched operation
                </Typography>
                <img src='../../assets/news/auto-making24722.jpg' alt='' width="100%"/>
              </Link>
            </Grid>
            <Grid item md={6} sx={{position:"relative" ,overflow:'hidden'}}>
              <Link to='/detials'>
                <Typography component="h5" variant='span' sx={{position:'absolute',color:"black",}}>12 Desember 2022</Typography>
                <Typography component="h4" variant='span' sx={{position:'absolute',color:"white", bottom:'10px',left:'20px', textShadow:'0px 0px 5px black'}}>
                  Ministry launches nationwide crackdown on illegal abortion procedures after botched operation
                </Typography>
                <img src='../../assets/news/49010.jpg' alt='' width="100%"/> 
              </Link>        
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mt:1,pl:2}}>
        <Grid md={8} >
          <img src='../../assets/adver/OPTITT-For-Gif-for-Khmertimes.gif' alt='' />
          <Link to='/national'><Typography component="h2" variant='span' sx={{color:"green", mt:2}}>Natioinal</Typography></Link>
          <hr style={{margin:"5px 0px"}}/>
          <Grid container spacing={2} sx={{p:2}}>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/human-securiy-project-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                      Japan funds more than $150,000 for construction of pre-school, lower secondary school buildings
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Koh Kong and Battambang were recipients of grants, worth $171,641, from Japan for the construction of a pre-school building and a lower secondary school building.
                </Typography>
              </Box>
            </Grid>    
          </Grid>

          <Link to='/business'><Typography component="h2" variant='span' sx={{color:"green", mt:2}}>Business</Typography></Link>
          <hr style={{margin:"5px 0px"}}/>
          <Grid container spacing={2} sx={{p:2}}>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/kampot-products-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  Kampot to register 26 more products under OVOP
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Kampots administration expressed its plans to register 26 more products under the One Village One Product (OVOP) project in addition to the existing 21 registered products.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/kampot-products-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  Kampot to register 26 more products under OVOP
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Kampots administration expressed its plans to register 26 more products under the One Village One Product (OVOP) project in addition to the existing 21 registered products.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/kampot-products-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  Kampot to register 26 more products under OVOP
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Kampots administration expressed its plans to register 26 more products under the One Village One Product (OVOP) project in addition to the existing 21 registered products.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/kampot-products-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  Kampot to register 26 more products under OVOP
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Kampots administration expressed its plans to register 26 more products under the One Village One Product (OVOP) project in addition to the existing 21 registered products.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Link to='/khmerlenguage'><Typography component="h2" variant='span' sx={{color:"green", mt:2}}>ខេមរភាសា</Typography></Link>
          <hr style={{margin:"5px 0px"}}/>
          <Grid container spacing={2} sx={{p:2}}>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/remains24714-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                    អដ្ឋិធាតុ​ទាហាន​កម្ពុជាត្រូវបាន​ប្រគល់មក​ឲ្យ​កម្ពុជាវិញ
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  គណៈកម្មាធិការជំនាញរបស់រដ្ឋាភិបាល ក្រសួងការពារជាតិ និងអាជ្ញាធរនៃខេត្តភាគខាងត្បូង Dong Nai និង Binh Phuoc នាថ្ងៃទី ១ ខែធ្នូ បានប្រគល់អដ្ឋិធាតុទាហាន ៤៩រូប នៃកងកម្លាំងប្រដាប់អាវុធកម្ពុជាសាមគ្គីសង្គ្រោះជាតិកម្ពុជា ដល់គណៈប្រតិភូក្រសួងការពារជាតិ និងកងកម្លាំងយោធពលខេមរភូមិន្ទ។
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/remains24714-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                    អដ្ឋិធាតុ​ទាហាន​កម្ពុជាត្រូវបាន​ប្រគល់មក​ឲ្យ​កម្ពុជាវិញ
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  គណៈកម្មាធិការជំនាញរបស់រដ្ឋាភិបាល ក្រសួងការពារជាតិ និងអាជ្ញាធរនៃខេត្តភាគខាងត្បូង Dong Nai និង Binh Phuoc នាថ្ងៃទី ១ ខែធ្នូ បានប្រគល់អដ្ឋិធាតុទាហាន ៤៩រូប នៃកងកម្លាំងប្រដាប់អាវុធកម្ពុជាសាមគ្គីសង្គ្រោះជាតិកម្ពុជា ដល់គណៈប្រតិភូក្រសួងការពារជាតិ និងកងកម្លាំងយោធពលខេមរភូមិន្ទ។
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/remains24714-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                    អដ្ឋិធាតុ​ទាហាន​កម្ពុជាត្រូវបាន​ប្រគល់មក​ឲ្យ​កម្ពុជាវិញ
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  គណៈកម្មាធិការជំនាញរបស់រដ្ឋាភិបាល ក្រសួងការពារជាតិ និងអាជ្ញាធរនៃខេត្តភាគខាងត្បូង Dong Nai និង Binh Phuoc នាថ្ងៃទី ១ ខែធ្នូ បានប្រគល់អដ្ឋិធាតុទាហាន ៤៩រូប នៃកងកម្លាំងប្រដាប់អាវុធកម្ពុជាសាមគ្គីសង្គ្រោះជាតិកម្ពុជា ដល់គណៈប្រតិភូក្រសួងការពារជាតិ និងកងកម្លាំងយោធពលខេមរភូមិន្ទ។
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/remains24714-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                    អដ្ឋិធាតុ​ទាហាន​កម្ពុជាត្រូវបាន​ប្រគល់មក​ឲ្យ​កម្ពុជាវិញ
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  គណៈកម្មាធិការជំនាញរបស់រដ្ឋាភិបាល ក្រសួងការពារជាតិ និងអាជ្ញាធរនៃខេត្តភាគខាងត្បូង Dong Nai និង Binh Phuoc នាថ្ងៃទី ១ ខែធ្នូ បានប្រគល់អដ្ឋិធាតុទាហាន ៤៩រូប នៃកងកម្លាំងប្រដាប់អាវុធកម្ពុជាសាមគ្គីសង្គ្រោះជាតិកម្ពុជា ដល់គណៈប្រតិភូក្រសួងការពារជាតិ និងកងកម្លាំងយោធពលខេមរភូមិន្ទ។
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Link to='/sport'><Typography component="h2" variant='span' sx={{color:"green", mt:2}}>Sport</Typography></Link>
          <hr style={{margin:"5px 0px"}}/>
          <Grid container spacing={2} sx={{p:2}}>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/SEA24726-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  SEA Games 2023 expects to attract from 250,000 to 500,000 foreign tourists
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Cambodia expects to attract from 250,000 to 500,000 foreign tourists during the SEA Games-ASEAN Para Games 2023 to be hosted by Cambodia.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/SEA24726-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  SEA Games 2023 expects to attract from 250,000 to 500,000 foreign tourists
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Cambodia expects to attract from 250,000 to 500,000 foreign tourists during the SEA Games-ASEAN Para Games 2023 to be hosted by Cambodia.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/SEA24726-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  SEA Games 2023 expects to attract from 250,000 to 500,000 foreign tourists
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Cambodia expects to attract from 250,000 to 500,000 foreign tourists during the SEA Games-ASEAN Para Games 2023 to be hosted by Cambodia.
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} sx={{mt:1}}>
              <Link to="/detials"><img src="../../assets/news/SEA24726-360x245.jpg" alt=""/></Link>
              <Box >
                <Link to="/detials">
                  <Typography component="h3" variant="span">
                  SEA Games 2023 expects to attract from 250,000 to 500,000 foreign tourists
                  </Typography>
                </Link>
                <Typography component="span" variant="span">
                  Cambodia expects to attract from 250,000 to 500,000 foreign tourists during the SEA Games-ASEAN Para Games 2023 to be hosted by Cambodia.
                </Typography>
              </Box>
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

export default HomePage
