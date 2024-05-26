import React from 'react'
import Container from '@mui/material/Container'
import {  Blogs, rebecca } from '../../assects'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
boxShadow:"none"
}));


const Blog = () => {
    const Block = [
        {src:Blogs , field :"medical" , date : "March 31, 2022" , content : "6 Tips To Protect Your Mental Health When You’re Sick", name :"Rebecca Lee" , image:rebecca },
        {src:Blogs , field :"medical" , date : "March 31, 2022" , content : "6 Tips To Protect Your Mental Health When You’re Sick", name :"Rebecca Lee" , image:rebecca },
        {src:Blogs , field :"medical" , date : "March 31, 2022" , content : "6 Tips To Protect Your Mental Health When You’re Sick", name :"Rebecca Lee" , image:rebecca }
    ]
  return (
    <div className='Background'>
        <Container style={{maxWidth:"1300px"}}>
            <Box sx={{textAlign :"center", mt:8, pb:4}}>
                <Typography variant="subtitle1" color="#2AA7FF">
                    Blog & News
                </Typography>

                <Typography  variant="h2" color="#1B3C74">
                Read Our Latest News
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            Block.map((item) =>(
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Item >
            <Box  sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <img style={{borderRadius:"6px", width:"100%", pl:0}} src={item.src} alt="" />
                <Box sx={{pl:2}}>
                <Box sx={{display:"flex", alignItems: "center", mt:2 }}>
                    <Typography sx={{pr:2}} variant="subtitle1" color="#77829D">
                        {item.field}
                    </Typography>
                    |
                    <Typography  sx={{pl:2 , }} variant="subtitle1" color="#77829D">
                        {item.date}
                    </Typography>
                </Box>
                <Typography  sx={{width:"80%" ,mt:1 , fontWeight:600 }} variant="subtitle1" color="#1B3C74">
                    {item.content}
                </Typography>


                <Box sx={{display:"flex", alignItems: "center", mt:2, pb:2 }}>
                    <img src={item.image} alt="" />
                    <Typography  sx={{pl:2 , fontWeight:600 }} variant="subtitle1" color="#1B3C74">
                        {item.name}
                    </Typography>
                </Box>
                </Box>



            </Box>
          </Item>
        </Grid>
            ))
        }
        
      </Grid>
    </Box>
          
        </Container>
    </div>
  )
}

export default Blog