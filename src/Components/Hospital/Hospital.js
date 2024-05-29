import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { image22, sensodyne } from "../../assects";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
}));

const Hospital = ({ data , visible}) => {
  if (!data || data.length === 0) {
    return (
      <Typography variant="h6" color="textSecondary">
        No hospitals found
      </Typography>
    );
  }

  return (

    <Grid container spacing={2}>
  <Grid item xs={9}>
    <Item><Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={3}>
          <Item>
            <Box
              sx={{
                border: 1,
                backgroundColor: "#8CCFFF",
                borderRadius: "70%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center"
              }}
            >
              <img
                style={{ width: "50%", height: "70%", padding: "10px"}}
                src={image22}
                alt=""
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={8} sm={8} md={6}>
          {data.map((hospital, index) => (
            <Item>
              <Box>
                <Typography variant="h5" color="#14BEF0">
                  {hospital["Hospital Name"] || "Name is not available"}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="#414146"
                  sx={{ fontWeight: 600 }}
                >
                  {hospital["State"] + " " + hospital["City"]}
                </Typography>

                <Typography variant="subtitle1" color="#414146">
                  Smilessence Center for Advanced Dentistry + 1
                </Typography>

                <Typography variant="subtitle1" color="#414146">
                  more
                </Typography>

                <Box>
                  <span style={{ padding: "5px" }}>FREE</span>

                  <span style={{ padding: "5px" }}>$500</span>

                  <span style={{ padding: "5px" }}>
                    Consultation fee at clinic
                  </span>
                </Box>

                <hr style={{ border: "1px dashed #E8E8F0" }} />
              </Box>
            </Item>
          ))}
        </Grid>
        <Grid sx={{position:"relative" , textAlign:"center", marginTop:10}} item xs={12} sm={12} md={3}>
          <Item  >
            <Box sx={{position:"absolute", bottom:"30px",}}>
          <Typography sx={{textAlign:"center"}}  variant="subtitle2" color="#01A400">
          Available Today
          </Typography>
          <Button variant="contained">Book FREE Center Visit</Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box></Item>
  </Grid>
  <Grid item xs={3}>
    <Item>
      <img style={{width:"100%"}} src={sensodyne} alt="" />
    </Item>
  </Grid>
</Grid>
  );
};

Hospital.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      "Hospital Name": PropTypes.string,
      Address: PropTypes.string,
      City: PropTypes.string,
      State: PropTypes.string,
      "ZIP Code": PropTypes.number,
      "Phone Number": PropTypes.number,
      "Hospital Type": PropTypes.string,
      "Hospital Ownership": PropTypes.string,
      "Emergency Services": PropTypes.string,
      "Hospital overall rating": PropTypes.number,
    })
  ).isRequired,
};

export default Hospital;
