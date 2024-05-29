import React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdHealthAndSafety } from 'react-icons/md';
import { Stack, Typography } from '@mui/material';
import { IoIosArrowForward, IoLogoYoutube } from "react-icons/io";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
boxShadow:"none",
marginTop:10,
backgroundColor:"transparent",
color:"#fff"

}));

const Footer = () => {
  const list1 = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
  const list2 = ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"];
  const list3 = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
  const socialIcons = [<FaFacebook />, <FaInstagram />, <IoLogoYoutube />, <FaPinterest />];

  return (
    <div style={{backgroundColor:"#1B3C74"}}>
      <Container style={{ maxWidth: "1300px" }}>
        <Box sx={{ flexGrow: 1  }}>
          <Grid container spacing={2} sx={{pt:5}}>
            <Grid item xs={12} sm={12} md={3}>
              <Item sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div className='logo' style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <MdHealthAndSafety className='icon' style={{ marginRight: '10px' }} />
                  <Typography variant="h4" className='text'>Medify</Typography>
                </div>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {socialIcons.map((icon, index) => (
                    <Box key={index}>{icon}</Box>
                  ))}
                </Stack>
              </Item>
            </Grid>

            {[list1, list2, list3].map((list, index) => (
              <Grid item xs={4} sm={4} md={3} key={index}>
                <Item>
                  <Stack direction="column" spacing={2}>
                    {list.map((item, itemIndex) => (
                      <Typography key={itemIndex} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <IoIosArrowForward style={{ marginRight: '8px' }} />
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
