import React from "react";
import { Box } from "@mui/material";
import Product from "./Product";

const Category = ({ data }) => {
  return (
    <Box
      className="grey"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        borderRadius: "5px",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
      }}
    >
      {data?.title ? (
        <Box
          className="red"
          sx={{
            letterSpacing: "3px",
            fontWeight: "bold",
          }}
        >
          {data.title.toUpperCase()}
        </Box>
      ) : (
        "Lorem ipsum title"
      )}
      {data?.text ? (
        <Box> {data?.text}</Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          Some placeholer text... &nbsp;
          <a className="red">
            <u> Link</u>
          </a>{" "}
        </Box>
      )}
      {data?.products?.length > 0 &&
        data?.products.map((each, idx) => {
          return <Product data={each} key={idx} />;
        })}
    </Box>
  );
};

export default Category;
