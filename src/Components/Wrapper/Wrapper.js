import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./wrapper.css"
import Search from '../Search/Search';

const Wrapper = () => {
  return (
    <>
    <div  className='background'>
    <CssBaseline />
    <Container  style={{ maxWidth: '1300px' }}>
      <Box sx={{position :"relative"}}>
        {/* <Navbar /> */}
        <Hero />
    </Box>
    </Container>
    </div>
    </>

   
  )
}

export default Wrapper