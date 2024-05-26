import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssBaseline, Typography } from "@mui/material";
import { Drugstore1, Hospital1, svg1, svg2 } from "../../assects"; // Ensure correct import path

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  marginTop: "20px",
  marginBottom: "10px"
}));

const Family = () => {
  const data = [
    { src: svg2, value: 5000, title: "Happy Patients", color: "#EBF7FF" },
    { src: Hospital1, value: 200, title: "Hospitals", color: "#FFF2F0" },
    { src: Drugstore1, value: 1000, title: "Laboratories", color: "#FFF7E6" },
    { src: svg1, value: 700, title: "Expert Doctors", color: "#EBFAF1" },
  ];

  return (
    <div className="background" style={{ marginTop: "17px" }}>
      <CssBaseline />
      <Container style={{ maxWidth: '1300px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>
                <Box sx={{ pt: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
                  <Typography sx={{ pb: 2 }} variant="subtitle1" color="#2AA7FF">
                    CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                  </Typography>
                  <Typography sx={{ pb: 2, fontWeight: 600 }} variant="h4" color="#1B3C74">
                    Our Families
                  </Typography>
                  <Typography sx={{ width: "70%" }} variant="subtitle1" color="#77829D">
                    We will work with you to develop individualized care plans,
                    including management of chronic diseases. If we cannot assist,
                    we can provide referrals or advice about the type of
                    practitioner you require. We treat all inquiries sensitively
                    and in the strictest confidence.
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>
                <Grid container spacing={2}>
                  {data.map((item, index) => (
                    <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                      <Item sx={{ backgroundColor: "#fff" }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: "300px" }}>
                          <Box sx={{ padding: 3, borderRadius: 18, backgroundColor: item.color }}>
                            <img style={{ width: '50px', height: '50px' }} src={item.src} alt={item.title} />
                          </Box>
                          <Typography sx={{ fontWeight: 600 }} variant="h4" color="#1B3C74">
                            {item.value}+
                          </Typography>
                          <Typography variant="subtitle1" color="#77829D">
                            {item.title}
                          </Typography>
                        </Box>
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Family;
