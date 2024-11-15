import React from "react";
import Image from "next/image";
import logo from "../../images/images/logo.png";
import moonImg from "../../images/images/footer-bg.png";
import { Box, Grid, Typography, Button } from "@mui/material";
import "./footer.css"

export default function Footer() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, color: '#fff' }}>
      {/* Moon Image */}
      <Box sx={{ width: '100%', height: '1000px' }}>
        <Image className="footer-moon-image" src={moonImg} alt="moon img" layout="responsive"/>
      </Box>

      {/* Footer Content */}
      <Grid container spacing={5} justifyContent="space-evenly">
        {/* Logo */}
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }} className="header-img">
            <Image src={logo} alt="header-logo" layout="responsive" />
          </Box>
        </Grid>

        {/* Columns */}
        <Grid item xs={12} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: '1.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 800 }}>About</Typography>
            <a href="#tokenomics" style={{ textDecoration: 'underline' }}>tokenomics</a>
            <a href="#howBuy" style={{ textDecoration: 'underline' }}>how to buy</a>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: '1.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 800 }}>DOCS</Typography>
            <a href="" style={{ textDecoration: 'underline' }}>whitepaper</a>
            <a href="" style={{ textDecoration: 'underline' }}>audit</a>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: '1.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 800 }}>TERMS</Typography>
            <a href="" style={{ textDecoration: 'underline' }}>cookies policy</a>
            <a href="" style={{ textDecoration: 'underline' }}>privacy policy</a>
            <a href="" style={{ textDecoration: 'underline' }}>terms of use</a>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: '1.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 800 }}>socials</Typography>
            <a href="" style={{ textDecoration: 'underline' }}>telegram</a>
            <a href="" style={{ textDecoration: 'underline' }}>twitter</a>
            <a href="" style={{ textDecoration: 'underline' }}>medium</a>
          </Box>
        </Grid>

        {/* Connect Wallet Button */}
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }} className="header-img-btn">
            <Button className="header-wallet" sx={{ width: '100%' , borderRadius : "36px" , width : "70%"}}>Connect Wallet</Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer End Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', fontSize: '1.3em', width: '90%', margin: 'auto', textAlign: 'center', fontWeight: 600, lineHeight: '24px', paddingBottom: '50px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1">
            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1">
            © 2024 ShibaDino. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
