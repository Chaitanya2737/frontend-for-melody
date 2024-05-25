import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Frame, patient1, patient2 } from "../../assects";
import { PiPhoneCallFill } from "react-icons/pi";

const Caring = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    boxShadow:"none"
  }));

  return (
    <div className="background">
      <CssBaseline />
      <Container style={{ maxWidth: "1300px", marginTop:"30px" }}>
        <Box sx={{ flexGrow: 1 , mt:5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Item sx={{ position: "relative", height: "500px" }}>
                <Box>
                  <img
                    style={{
                      border: "2px solid white",
                      position: "absolute",
                      right: "30px",
                    }}
                    src={patient1}
                    alt=""
                  />
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      width: "45%",
                      padding: 1,
                      position: "absolute",
                      left: 10,
                      top: "70px",
                      zIndex:1
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        letterSpacing: 1,
                        lineHeight: 2,
                      }}
                    >
                      <PiPhoneCallFill
                        style={{
                          backgroundColor: "#2AA7FF",
                          padding: 3,
                          fontSize: 25,
                          marginRight: 6,
                          color: "#fff",
                        }}
                      />
                      <Box
                        sx={{ fontSize: 15, fontWeight: 600, color: "#1B3C74" }}
                      >
                        Free Consultation
                      </Box>
                    </Box>
                    <Typography variant="subtitle2" color="gray">
                      Consultation with the best
                    </Typography>
                  </Box>
                  <img
                    style={{
                      border: "2px solid white",
                      position: "absolute",
                      left: 0,
                      bottom: 10,
                    }}
                    src={patient2}
                    alt=""
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>
                <Box sx={{ mt: 10 }}>
                  <Typography
                    sx={{ fontWeight: 600, mt: 2 }}
                    variant="subtitle1"
                    color="#2AA7FF"
                  >
                    HELPING PATIENTS FROM AROUND THE GLOBE!!
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography
                      sx={{ fontWeight: 600, color: "#1B3C74" }}
                      variant="h3"
                    >
                      Patient{" "}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 600, pl: 2, color: "#2AA7FF" }}
                      variant="h3"
                    >
                      Caring{" "}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ mt: 3 }}
                    variant="subtitle1"
                    color="#77829D"
                  >
                    Our goal is to deliver quality of care in a courteous,
                    respectful, and compassionate manner. We hope you will allow
                    us to care for you and strive to be the first and best
                    choice for healthcare.
                  </Typography>

                  <Box sx={{ width: "100%" }}>
                    <Stack spacing={2} sx={{mt:2}}>
                      <Item sx={{color:"#1B3C74", fontWeight:600 }}> <img src={Frame} alt="" /> Stay Updated About Your Health</Item>
                      <Item sx={{color:"#1B3C74" , fontWeight:600}}> <img src={Frame} alt="" /> Check Your Results Online</Item>
                      <Item sx={{color:"#1B3C74" , fontWeight:600}}> <img src={Frame} alt="" /> Manage Your Appointments</Item>
                    </Stack>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Caring;
