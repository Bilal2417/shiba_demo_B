import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./faq.css";

export default function Faq() {

  return (
    <Box className="container">
      <Box className="faq-block">
        <Box className="section-head">
          <Typography variant="h2" className="section-heading">
            FAQ
          </Typography>
        </Box>


        <Box
        key={"asap"}
          className="faq-questions-container"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 0',
            position: 'relative',
          }}
        >
 
          <Box
            sx={{
              content: '""',
              position: 'absolute',
              top: '-300px',
              right: '-300px',
              width: '500px',
              height: '500px',
              backgroundImage: 'url("../../images/images/satellite.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              content: '""',
              position: 'absolute',
              left: '-300px',
              width: '700px',
              height: '700px',
              backgroundImage: 'url("../../images/images/astronaut.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: 1,
            }}
          />

{["what is shibadino?", "why shibadino?", "how can i get an nft?", "how do i get shibadino?", "who do i contact?"].map((question, index) => (

    <Button
    className="faq-question-block"
    sx={{
        backgroundColor: 'rgba(183, 0, 255, 0.9)',
        display: 'flex',
        padding: '24px 53px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        border: '1px solid #fff',
        borderRadius: '54px',
        marginBottom: '0px', 
        '&:hover': {
            backgroundColor: 'rgba(183, 0, 255, 0.719)', 
        },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                  textTransform: 'uppercase',
                  color: '#fff',
                fontSize: '2.4em',
                fontWeight: 800,
              }}
              >
             {question}
            </Typography>
            <Box sx={{ width: 50, height: 50 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 66 66"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="64"
                  height="64"
                  rx="32"
                  stroke="white"
                  strokeWidth="2"
                  />
                <path
                  d="M46.7143 35.2857H35.2857V46.7143C35.2857 47.3205 35.0449 47.9019 34.6162 48.3305C34.1876 48.7592 33.6062 49 33 49C32.3938 49 31.8124 48.7592 31.3838 48.3305C30.9551 47.9019 30.7143 47.3205 30.7143 46.7143V35.2857H19.2857C18.6795 35.2857 18.0981 35.0449 17.6695 34.6162C17.2408 34.1876 17 33.6062 17 33C17 32.3938 17.2408 31.8124 17.6695 31.3838C18.0981 30.9551 18.6795 30.7143 19.2857 30.7143H30.7143V19.2857C30.7143 18.6795 30.9551 18.0981 31.3838 17.6695C31.8124 17.2408 32.3938 17 33 17C33.6062 17 34.1876 17.2408 34.6162 17.6695C35.0449 18.0981 35.2857 18.6795 35.2857 19.2857V30.7143H46.7143C47.3205 30.7143 47.9019 30.9551 48.3305 31.3838C48.7592 31.8124 49 32.3938 49 33C49 33.6062 48.7592 34.1876 48.3305 34.6162C47.9019 35.0449 47.3205 35.2857 46.7143 35.2857Z"
                  fill="white"
                  />
              </svg>
            </Box>
          </Button>
                ))}
          
        </Box>
      </Box>
    </Box>
  );
}
