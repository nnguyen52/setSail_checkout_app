import { Box } from "@mui/material";
import React from "react";
import SaleBanner from "../Shared_components/SaleBanner";
import Category from "../Shared_components/Category";
import * as data from "../../data";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        height: "100%",
      }}
    >
      <SaleBanner />
      {/* heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h2 style={{ padding: 0, margin: 0 }}>Sample Heading</h2>
        <p style={{ padding: 0, margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </Box>
      {/* products */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Category />
      </Box>
      {/*  grid box for products */}
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          maxWidth: "800px",
          width: "100%",
          maxHeight: "100vh",
          height: "100%",
          margin: "0 auto",
          gap: "1em",
          justifyContent: "center ",
          alignItems: "center",
          padding: "1em",
        }}
      >
        {/* <Product /> */}
        {data?.categories.map((each, idx) => {
          return <Category data={each} key={idx} />;
        })}
      </Box>
    </Box>
  );
};

export default Main;
