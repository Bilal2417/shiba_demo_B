import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './roadmap.css';

export default function RoadMap() {
  return (
    <Box className="container">
      <Box className="section-head" responsive="true">
        <Typography variant="h2" className="section-heading">roadmap</Typography>
      </Box>
      <Box className="roadmap-content">
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////// 1ST BLOCK ///////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Grid container spacing={6} className="Fst-roadmap-block-custom"
        sx={{
            ".css-honmcm-MuiGrid-root":{width: "40%"}
        }}>
          {/* 1st BLOCK ITEM */}
          <Grid item xs={12} sm={6} md={4} className="roadmap-block">
            <Box
              className="roadmap-block-content roadmap-1"
              sx={{ backgroundImage: `url("../../images/images/roadmap1-bg.png")` }}
            >
              <Box className="block-content-head">
                <Typography variant="h3" className="block-content-heading">
                  BRAINSTORMING AND PROJECT PREPARATION (Q1 2024)
                </Typography>
              </Box>
              <Box className="block-text-content">
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Brainstorming:</Typography>
                  <Typography className="text-description">
                    The basic idea for ShibaDino was developed, inspired by the successful Shiba Inu cryptocurrency.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Composition of the team:</Typography>
                  <Typography className="text-description">
                    A team of experts in the fields of blockchain technology, design, and marketing was formed.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Project planning:</Typography>
                  <Typography className="text-description">
                    Detailed planning and strategy development for the implementation of the project.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Financing:</Typography>
                  <Typography className="text-description">
                    Securing the financial resources to support the development and marketing activities.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 2nd BLOCK ITEM */}
          <Grid item xs={12} sm={6} md={4} className="roadmap-block">
            <Box
              className="roadmap-block-content roadmap-2"
              sx={{ backgroundImage: `url("../../images/images/roadmap3-bg.png")` }}
            >
              <Box className="block-content-head">
                <Typography variant="h3" className="block-content-heading">
                  PRESALE AND TOKEN LAUNCH (Q3 2024)
                </Typography>
              </Box>
              <Box className="block-text-content">
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Start of the presale:</Typography>
                  <Typography className="text-description">Start of the pre-sale of Shibadino tokens. Date: TBD</Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Token auditing:</Typography>
                  <Typography className="text-description">
                    Conducting an independent audit of the smart contracts to ensure security and reliability.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Token Launch:</Typography>
                  <Typography className="text-description">
                    Official launch and distribution of Shibadino tokens.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Listing on decentralized exchange:</Typography>
                  <Typography className="text-description">
                    Listing of Shibadino tokens on a decentralized exchange to enable trading.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Initiation of marketing campaign:</Typography>
                  <Typography className="text-description">
                    Launch of a comprehensive marketing campaign to increase awareness of Shibadino.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">1st mint of the NFT collection:</Typography>
                  <Typography className="text-description">
                    First minting of the exclusive Shibadino NFTs in a limited edition of 222 units.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 3rd BLOCK ITEM */}
          <Grid item xs={12} sm={6} md={4} className="roadmap-block">
            <Box
              className="roadmap-block-content roadmap-5"
              sx={{ backgroundImage: `url("../../images/images/roadmap5-bg.png")` }}
            >
              <Box className="block-content-head">
                <Typography variant="h3" className="block-content-heading">
                  2025: Expansion and new opportunities
                </Typography>
              </Box>
              <Box className="block-text-content">
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Airdrops from the Solana ecosystem:</Typography>
                  <Typography className="text-description">
                    Conducting airdrops for Shibadino holders to provide additional benefits and engagement.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Beta participation in the game for NFT holders:</Typography>
                  <Typography className="text-description">
                    Exclusive beta access for Shibadino NFT holders to a new game based on the Shibadino universe.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Further expansion:</Typography>
                  <Typography className="text-description">
                    Continuation of the expansion and introduction of new features and partnerships to increase project value and community participation.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////// 2ND BLOCK ///////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Grid container spacing={6} className="roadmap-block-custom"
                sx={{
                    ".css-honmcm-MuiGrid-root":{width: "40%"}
                }}>
          {/* 1st BLOCK ITEM */}
          <Grid item xs={12} sm={6} md={4} className="roadmap-block">
            <Box
              className="roadmap-block-content roadmap-3"
              sx={{ backgroundImage: `url("../../images/images/roadmap2-bg.png")` }}
            >
              <Box className="block-content-head">
                <Typography variant="h3" className="block-content-heading">
                  DEVELOPMENT PHASE (Q2 2024)
                </Typography>
              </Box>
              <Box className="block-text-content">
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Launch of website V1.0:</Typography>
                  <Typography className="text-description">
                    Publication of the first version of the Shibadino website.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Start of development:</Typography>
                  <Typography className="text-description">
                    Start of development of the Shibadino tokens and NFTs as well as the platform.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Smart contract development:</Typography>
                  <Typography className="text-description">
                    Programming and testing of smart contracts for Shibadino tokens and NFTs on the Solana blockchain.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 2nd BLOCK ITEM */}
          <Grid item xs={12} sm={6} md={4} className="roadmap-block">
            <Box
              className="roadmap-block-content roadmap-4"
              sx={{ backgroundImage: `url("../../images/images/roadmap4-bg.png")` }}
            >
              <Box className="block-content-head">
                <Typography variant="h3" className="block-content-heading">
                  Expansion and community building (Q3 & Q4 2024)
                </Typography>
              </Box>
              <Box className="block-text-content">
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Listing on Tier 1 Exchange:</Typography>
                  <Typography className="text-description">Listing of $DINO on Tier 1 Exchanges.</Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Global influencer collaborations:</Typography>
                  <Typography className="text-description">
                    Collaboration with global influencers to increase reach and awareness.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Marketing campaigns:</Typography>
                  <Typography className="text-description">
                    Continuation and intensification of marketing campaigns worldwide.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Community building:</Typography>
                  <Typography className="text-description">
                    Building and strengthening the Shibadino community through various initiatives and events.
                  </Typography>
                </Box>
                <Box className="text-desc-block">
                  <Typography className="text-desc-heading">Advertising deals:</Typography>
                  <Typography className="text-description">
                    Conclusion of advertising deals to further promote the Shibadino brand.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
