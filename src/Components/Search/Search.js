import React, { useEffect, useState } from "react";
import { Box, Button, Container, CssBaseline, Grid, Paper, Typography, InputLabel, InputAdornment, OutlinedInput, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaSearch } from "react-icons/fa";
import { Ambulance, Capsule, doctors, Drugstore, hospital as hospitalIcon } from "../../assects";
import Hospital from "../Hospital/Hospital";
import axios from 'axios';
import "./search.css";
import { fetchdata } from "../../api/api";

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
  { src: hospitalIcon, label: 'Hospital', backgroundColor: "#2AA7FF14", border: "1px solid #2AA7FF" },
  { src: Capsule, label: 'Medical Store' },
  { src: Ambulance, label: 'Ambulance' },
];

const Search = ({ visible }) => {
  const [hospitals, setHospitals] = useState([]);
  const [input, setInput] = useState({ state: "", city: "" });

  const data = async () => {
   const res =  await fetchdata(input.state , input.city);
   setHospitals(res)
  };

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = () => {
    data();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search-background">
      <CssBaseline />
      <Container style={{ maxWidth: "1300px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", backgroundColor: '#fff', borderRadius: "10px" }}>
        <Box sx={{ backgroundColor: '#fff', padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
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
                    onChange={handleChange}
                    label="State"
                    name="state"
                    value={input.state}
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
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <FaSearch />
                      </InputAdornment>
                    }
                    label="City"
                    name="city"
                    value={input.city}
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
                  onClick={handleSearch}
                >
                  <Typography variant="h6" sx={{ paddingLeft: 2, textAlign: "start" }}>Search</Typography>
                </Button>
              </StyledPaper>
            </Grid>
          </Grid>
        </Box>

        {visible && (
          <Box sx={{ pb: 5 }}>
            <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 1, fontWeight: 500, letterSpacing: 2, color: "#102851" }}>
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
                      alignItems: 'center',
                      height: '100%',
                      padding: 2,
                      backgroundColor: item.backgroundColor || '#FAFBFE',
                    }}
                  >
                    <img src={item.src} style={{ width: '60px', height: '60px', marginTop: "20px" }} alt={item.label} />
                    <Typography variant="subtitle1" color="gray">
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        <Hospital data={hospitals} />
      </Container>
    </div>
  );
};

export default Search;
