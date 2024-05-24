import React from 'react'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ae, Blood, Heart, HeartRate, Immune, Stethoscope, XRay } from '../../assects';
const Specialisation = () => {


  const array = [
    {src: HeartRate , name:"Dentistry"},
    {src: Stethoscope , name:"Primary Care"},
    {src: Heart , name:"Cardiology"},
    {src: HeartRate , name:"MRI Resonance"},
    {src: Blood , name:"Blood Test"},
    {src: Immune , name:"Piscologist"},
    {src: ae , name:"Laboratory"},
    {src: XRay , name:"X-Ray"}, 
  ]


  const Item = styled(Paper)(({ theme }) => ({
    boxShadow:"none",
    textAlign: "center"
  }));
  return (

    <>
    <CssBaseline />
    <Container maxWidth="1300px">
     
    <Box sx={{ flexGrow: 1 }}>

      <Typography sx={{textAlign:"center", marginBottom:5}} variant="h3" color="#1B3C74">
      Find by specialization
      </Typography>
    <Grid container spacing={2}>
      {
        array.map((item)=>(
          <Grid item xs={4} sm ={4} md={3} lg={3}>
          <Item>

            <Box>
              <img src={item.src} alt="" />
              <Typography variant="subtitle1" color="gray">
                {item.name}
              </Typography>
            </Box>

          </Item>
        </Grid>
        ))

      }
  
      
    </Grid>
  </Box>
    </Container>
    </>

  )
}

export default Specialisation