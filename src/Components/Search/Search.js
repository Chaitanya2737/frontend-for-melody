import React from 'react';
import { Box, Container, CssBaseline, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./search.css"
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2), // Adding some padding for better spacing inside the Paper
  textAlign: 'center',
}));

const Search = () => {
  return (

    <div className='search-background'>
    <CssBaseline />
    <Container  style={{ maxWidth: '1300px' }}>

    <Box sx={{ backgroundColor: "#fff", padding: 2, height : "250px", border:"1px solid black" }}>
      <Stack direction="row" spacing={2} sx={{display:"flex" , justifyContent :"center"}}>
        <StyledPaper>Item 1</StyledPaper>
        <StyledPaper>Item 2</StyledPaper>
        <StyledPaper>Item 4</StyledPaper>
      </Stack>
    </Box>
    </Container>
    </div>

  );
}

export default Search;
