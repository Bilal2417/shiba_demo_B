import { Box, Typography, IconButton } from "@mui/material";
import { SvgIcon } from "@mui/material";
import rocketImg from "../../images/images/rocket.png";
import Image from "next/image";

export default function SmartContract() {
  return (
    <Box className="container">
      <Box className="smart-head" sx={{padding : "5% 0"}}>
        <Box className="section-head">
          <Typography className="section-heading" variant="h2" >smart contract</Typography>
        </Box>

        <Box className="smart-rocket">
          <Image src={rocketImg} alt="rocket img" />
        </Box>

        <Box className="smart-copy-link-flex-center" sx={{display : "flex" , justifyContent : "center" }}>
          <Box className="smart-copy-link-block" sx={{
            backgroundColor: "rgba(183, 0, 255, 0.9)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
            padding: "18px 42px",
            borderRadius: "36px",
            border: "1px solid #fff",
            width : "fit-content",
          }}>
            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.6em" }} className="smart-copy-link">
              EgoQYRxgKhkzUdK9pcXg2WHi7ZcBA2X3NXY3JUH3odKm
            </Typography>

            <IconButton sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26" height="26">
                <path
                  d="M24.44 0H7.8C7.38626 0 6.98947 0.164357 6.69691 0.456913C6.40436 0.74947 6.24 1.14626 6.24 1.56V6.24H1.56C1.14626 6.24 0.74947 6.40436 0.456913 6.69691C0.164357 6.98947 0 7.38626 0 7.8V24.44C0 24.8537 0.164357 25.2505 0.456913 25.5431C0.74947 25.8356 1.14626 26 1.56 26H18.2C18.6137 26 19.0105 25.8356 19.3031 25.5431C19.5956 25.2505 19.76 24.8537 19.76 24.44V19.76H24.44C24.8537 19.76 25.2505 19.5956 25.5431 19.3031C25.8356 19.0105 26 18.6137 26 18.2V1.56C26 1.14626 25.8356 0.74947 25.5431 0.456913C25.2505 0.164357 24.8537 0 24.44 0ZM16.64 22.88H3.12V9.36H16.64V22.88ZM22.88 16.64H19.76V7.8C19.76 7.38626 19.5956 6.98947 19.3031 6.69691C19.0105 6.40436 18.6137 6.24 18.2 6.24H9.36V3.12H22.88V16.64Z"
                  fill="white"
                />
              </SvgIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
