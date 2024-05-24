import React from "react";
import { Box, Button, Container, CssBaseline, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./search.css";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { FaSearch } from "react-icons/fa";
import { Ambulance, Capsule, doctors, Drugstore, hospital } from "../../assects";
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  boxShadow: "none",
  flexWrap: "wrap"
}));


const items = [
  { src: doctors, label: 'Doctor' },
  { src: Drugstore, label: 'Lab' },
  { src: hospital, label: 'Hospital' , backgroundColor:"#2AA7FF14" , border:"1px solid #2AA7FF" },
  { src: Capsule, label: 'Medical Store' },
  { src: Ambulance, label: 'Ambulance' },
];


const Search = () => {
  return (
    <div className="search-background">
      <CssBaseline />
      <Container style={{ maxWidth: "1300px", boxShadow : "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", backgroundColor: '#fff', borderRadius :"10px",   }}>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid item xs={12} sm={6} md={3}>
              <StyledPaper>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-state">State</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-state"
                    startAdornment={
                      <InputAdornment position="start">
                        <FaSearch />
                      </InputAdornment>
                    }
                    label="State"
                  />
                </FormControl>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledPaper>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-city">City</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-city"
                    startAdornment={
                      <InputAdornment position="start">
                        <FaSearch />
                      </InputAdornment>
                    }
                    label="City"
                  />
                </FormControl>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledPaper>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<FaSearch />}
                  sx={{ m: 1 }}
                >
                  <Typography variant="h6" sx={{ paddingLeft: 2, textAlign: "start" }}>Search</Typography>
                </Button>
              </StyledPaper>
            </Grid>
          </Grid>
        </Box>


        <Box sx={{   pb :5}}>
          <Typography variant="h5" sx={{ textAlign: "center" , marginBottom : 1,fontWeight:"500", letterSpacing:2 , color:"#102851" }}>
            You may be looking for
          </Typography>

          <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={6}>
      {items.map((item, index) => (
        <Grid item xs={6} sm={5} md={4} lg={2} key={index}>
          <Box
            sx={{
              border: item.border || "none",
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center', // Center items horizontally
              height: '100%', // Ensure the Box takes full height
              padding: 2,
              backgroundColor:"#FAFBFE",
              backgroundColor: item.backgroundColor || '#FAFBFE',
            }}
          >
            <img src={item.src} style={{ width: '60px', height: '60px', marginTop:"20px" }} alt={item.label} />
            <Typography variant="subtitle1" color="gray">
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Search;
