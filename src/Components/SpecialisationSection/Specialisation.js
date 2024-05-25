import React from 'react';
import { Box, Container, CssBaseline, Grid, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ae, Blood, Heart, HeartRate, Immune, Stethoscope, XRay } from '../../assects';
import "./style.css"
const specialisations = [
  { src: HeartRate, name: "Dentistry" },
  { src: Stethoscope, name: "Primary Care" },
  { src: Heart, name: "Cardiology" },
  { src: HeartRate, name: "MRI" },
  { src: Blood, name: "Blood Test" },
  { src: Immune, name: "Psychologist" },
  { src: ae, name: "Laboratory" },
  { src: XRay, name: "X-Ray" },
];

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
}));

const Specialisation = () => {
  return (
    < div className='background'>
      <CssBaseline />
      <Container style={{maxWidth :"1300px"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ textAlign: "center", marginBottom: 7, pt:7}} variant="h3" color="#1B3C74">
            Find by specialization
          </Typography>
          <Grid container spacing={5}>
            {specialisations.map((item, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Item>
                  <Box
                    sx={{
                      boxShadow: "0px 34px 44px 0px #D5DBE470",
                      padding: 3,

                    }}
                  >
                    <img src={item.src} alt={item.name}  />
                    <Typography sx={{ mt: 2 }} variant="subtitle1" color="textSecondary">
                      {item.name}
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>

          <Box sx={{display:"flex" , justifyContent:"center", mt:5, pb:5} }>

          <Button variant='contained' sx={{textAlign:"center" , alignContent:"center" }}>
            View All
          </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Specialisation;
