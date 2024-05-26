import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa";
import { Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { image21 } from "../../assects";

const Item = styled(Paper)(({ theme }) => ({
    boxShadow:"none"
}));
const QuestionAndAnswer = () => {
  const data = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "Why we are different from others?",
      answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <>
      <CssBaseline />
      <Container style={{ maxWidth: "1300px" }}>
      <Box sx={{textAlign :"center", mt:8, pb:4}}>
                <Typography variant="subtitle1" color="#2AA7FF">
                Get Your Answer
                </Typography>

                <Typography  variant="h2" color="#1B3C74">
                Frequently Asked Questions
                </Typography>
            </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Item style={{width:"100%", height:"100%"}}>

                <img style={{width:"100%", height:"100%"}} src={image21} alt="" />
              </Item>
            </Grid>


            <Grid item xs={12} sm={12} md={6}>
              <Item sx={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%"}}>
                {data.map((item)=>(
                <div >
                  <Accordion sx={{m:2, boxShadow:"none"}}>
                    <AccordionSummary
                      expandIcon={<FaPlus style={{color:"#2AA7FF"}} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                        <Typography sx={{fontWeight:600 , fontSize:18}} variant="h6" color="#1B3C74">

                      {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Typography sx={{p:1}} variant="subtitle1" color="initial">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                ))}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default QuestionAndAnswer;
