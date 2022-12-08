
import {   Dashboard, Home,  SearchOutlined, } from '@mui/icons-material'
import { Box, } from '@mui/material'
import './navigatin.css'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Details from '../pages/Details'
import HomePage from '../pages/HomePage'
import Hot_news from '../pages/Hot_news'
import KhmerLanguage from '../pages/KhmerLanguage'
import National from '../pages/National'
import Sport from '../pages/Sport'
import Business from '../pages/Business'
import Not_Found from '../pages/Not_Found'



const NavigationMenu = () => {
  return (
    <BrowserRouter >
      <Box sx={{widht:"100%",mt:2,p:2, display:"flex", alignItems:'center',justifyContent:'space-between'}} className='menu'>
        <Box sx={{widht:"100%", display:"flex" }}>
          <Link to='/'><Home/></Link>
          <Link to='/national'>National</Link>
          <Link to='/business'>Bussiness</Link>
          <Link to='/khmerlenguage'>ខេមរភាសា</Link>
          <Link to='/hot_new'>Hot News</Link>
          <Link to='/sport'>Sport</Link> 
        </Box>
        <Box sx={{display:'flex',justifyContent:"space-around", alignItems:'center'}} className="search">
          <input type="text" placeholder="Looking for ...." />
          <SearchOutlined className='icon'/>
        </Box>
      </Box>
      <Box sx={{width:"100%",mt:2}}>
        <img src="../../assets/adver/Banner-Website-1140pxel-x-142pxel1.jpg" alt="" width="100%"/>
      </Box>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/national' element={<National/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/khmerlenguage' element={<KhmerLanguage/>}/>
        <Route path='/hot_new' element={<Hot_news/>}/>
        <Route path='/sport' element={<Sport/>}/>
        <Route path='/detials' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default NavigationMenu
