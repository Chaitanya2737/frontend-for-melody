import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { doctor } from '../../assects';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: 'none',
  display: "flex",
  alignItems: "center",
  justifyContent : "space-between"
}));

const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "19px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <StyledPaper>
            <div style={{marginTop:"100px"}}>
              <Typography variant="h5" sx={{ color: "#102851" }}>
                Skip the travel! Find Online
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                <Typography sx={{ paddingRight: 1, fontWeight: "700", color: "#102851" }} variant="h3">
                  Medical
                </Typography>
                <Typography sx={{ paddingLeft: 1, fontWeight: "700", color: "#2AA7FF" }} variant="h3">
                  Centers
                </Typography>
              </Typography>
              <Typography sx={{ marginTop: 2, color: "#5C6169" }} variant="subtitle1">
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
              </Typography>
              <Button sx={{ marginTop: 2, backgroundColor: "#2AA8FF" }} variant="contained">Find Center</Button>
            </div>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <StyledPaper>
            <img src={doctor} alt="Doctor" style={{ width: "100%" }} />
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
