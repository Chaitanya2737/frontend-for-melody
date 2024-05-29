import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Vector } from "../../assects";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const Download = () => {
  return (
    <div className="background">
      <Container style={{ maxWidth: "1300px" }}>
        <Box sx={{ flexGrow: 1, height: "100%" }}>
          <Grid container spacing={0}>
            <Grid item xs={0} sm={0} md={5} sx={{xs:"none" , sm:"none" , md:"flex"}}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  mt: 10,
                }}
              >
                <img src={Vector} alt="Vector Graphic" />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Item sx={{ ml: 2 }}>
                <Box sx={{ mt: 5 }}>
                  <Typography variant="h3" color="#1B3C74">
                    Download the
                  </Typography>
                  <Typography variant="h3" color="#1B3C74">
                    <span style={{ color: "#2AA7FF" }}> Medify </span>App
                  </Typography>

                  <Typography sx={{ mt: 3 }} variant="subtitle1" color="#414146">
                    Get the link to download the app
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <TextField
                      sx={{ width: "12%", backgroundColor: "#F0F0F0" }}
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      value={"+91"}
                    />

                    <TextField
                      sx={{ ml: 2 }}
                      id="outlined-basic"
                      label="Enter phone number"
                      variant="outlined"
                      size="small"
                    />
                    <Button sx={{ ml: 2 }} variant="contained">
                      Send SMS
                    </Button>
                  </Box>

                  <Box sx={{ display: "flex", mt: 3 , mb:10}}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: 1,
                        width: "45%",
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "#fff",
                        borderRadius: 2,
                        p: 1,
                      }}
                    >
                      <FaGooglePlay />
                      <Typography variant="h6" color="#fff" sx={{ ml: 1 }}>
                        Google Play
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: 1,
                        width: "45%",
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "#fff",
                        borderRadius: 2,
                        ml: 2,
                        p: 1,
                      }}
                    >
                      <FaApple />
                      <Typography variant="h6" color="#fff" sx={{ ml: 1 }}>
                        App Store
                      </Typography>
                    </Box>
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

export default Download;
