import React from "react";
import { Box } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import muiTheme from "../../styles/muiThemes";

import * as data from "../../data";
const SaleBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: muiTheme.palette.blue.banner,
        color: "white",
        padding: ".3em",
        gap: ".5em",
      }}
    >
      <CampaignIcon />
      <div>
        <b style={{ fontSize: "smaller" }}>
          Holiday Sales! Save {`${data.subscription_sale}%`} off your
          subscription with code: &nbsp;
        </b>
        <u>{`${data.subscription_code}`}</u>
      </div>
    </Box>
  );
};

export default SaleBanner;
