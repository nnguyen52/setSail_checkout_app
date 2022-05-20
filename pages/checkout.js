import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Main from "../components/Checkout/Main";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    if (!router) return;
    if (products.length == 0) router.push("/pricing");
  }, [dispatch, router, products]);

  return (
    <Box
      sx={{
        background: "white",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* form */}
      <Box
        sx={{
          width: "40vw",
          margin: "1em 5em 0 0",
        }}
      >
        <Main />
      </Box>
    </Box>
  );
};

export default Checkout;
