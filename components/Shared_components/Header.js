import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Container } from "@mui/material";
const Header = () => {
  return (
    <>
      <Container className="header" sx={{ position: "relative" }}>
        {/* main nav */}
        <Box
          sx={{
            display: "flex",
            gap: "3em",
            height: "10vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            Solutions <KeyboardArrowDownIcon />
          </Box>
          <Box>Pricing</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            Company <KeyboardArrowDownIcon />
          </Box>
          <Box>Library</Box>
          <Box>Contact</Box>
        </Box>
        {/* side nav */}
        <Box
          sx={{
            position: "absolute",
            height: "10vh",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            top: 0,
            right: "10%",
            gap: "1em",
          }}
        >
          <button className="white_btn button_bigPadding">Sign in</button>
          <button className="red_btn button_bigPadding">Sign up </button>
        </Box>
      </Container>
    </>
  );
};

export default Header;
