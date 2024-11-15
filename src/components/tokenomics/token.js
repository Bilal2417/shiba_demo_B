"use client"
import React from 'react';
import { Box, Typography, Paper, styled } from '@mui/material';
import Image from 'next/image';
import boardImg from "../../images/images/board.png";


const FullWidthContainer = styled('div')({
  maxWidth: 'none',  
  width: '100%',
  paddingTop: '5%',
  paddingBottom: '5%',
  color: '#fff',
});

export default function Tokenomics() {
  return (
    <FullWidthContainer id='tokenomics'>
      <Box className="section-head" sx={{
        textAlign: 'center',
        mb: 4
      }}>
        <Typography className='section-heading' variant="h2" sx={{
          fontSize: '5.4rem',
          fontWeight: 800,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Tokenomics
        </Typography>
      </Box>


      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 4
      }}>
          <Image 
            src={boardImg} 
            alt="board img"
            layout="responsive"
            width={1600} 
            height={800} 
          />
      </Box>
    </FullWidthContainer>
  );
}
