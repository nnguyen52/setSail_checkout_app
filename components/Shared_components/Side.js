import React from "react";
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useSelector } from "react-redux";
import Product from "./Product";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import * as data from "../../data";
import { useRouter } from "next/router";
import muiTheme from "../../styles/muiThemes";
import { useDispatch } from "react-redux";
import { agreeToTermsToggle } from "../../redux/reducers/checkoutReducer";
const Side = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { products, sum, discount, total, subTotal, discountAmount } =
    useSelector((state) => state.shoppingCart);

  const { agreeToTerms } = useSelector((state) => state.checkout);

  return (
    <Box
      sx={{
        padding: "1em",
        background: `${muiTheme.palette.white.side}`,
        display: "flex",
        gap: "1em",
        flexDirection: "column",
        height: "100%",
        boxShadow: "-5px 0px 10px -7px rgb(0 0 0 / 0.2)",
      }}
    >
      <Box sx={{ flex: 1, maxHeight: "70vh" }}>
        {/* chosen products */}
        {products.length > 0 && (
          <>
            <h3 style={{ margin: 0 }}>Your Products </h3>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5em",
                height: "100%",
                maxHeight: "50vh",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              {products.map((each, idx) => {
                return <Product key={idx} data={each} status="chosen" />;
              })}
            </Box>
          </>
        )}
      </Box>
      {/* checkout box */}
      {products.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            color: `${muiTheme.palette.blue.side}`,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Price</span>
            <span>${sum}</span>
          </Box>
          {sum > 400 && discount && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <b
                  style={{
                    color:
                      router && router.route == "/checkout"
                        ? muiTheme.palette.green.main
                        : "black",
                  }}
                >
                  Volume Discount:
                </b>{" "}
                <ErrorOutlineOutlinedIcon color="error" /> {data.discount}% off
              </span>
              <span
                style={{ color: `${muiTheme.palette.green.main}` }}
              >{`-${discountAmount}`}</span>
            </Box>
          )}

          <Box
            sx={{
              margin: ".8em 0 .8em 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Subtotal</span>
            <span>{subTotal}</span>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: muiTheme.palette.blue.checkoutFont,
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            <span>Total</span>
            <span>{total}</span>
          </Box>
          {router && router.route != "/checkout" && (
            <button
              className="red_btn button_bigPadding"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1em",
                gap: ".5em",
                margin: ".8em 0 .8em 0",
              }}
              onClick={() => router.push("/checkout")}
            >
              <ShoppingCartOutlinedIcon />
              Checkout
            </button>
          )}
          {router && router.route == "/checkout" && (
            <>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: muiTheme.palette.red.main,
                        "&.Mui-checked": {
                          color: muiTheme.palette.red.main,
                        },
                      }}
                      onClick={() =>
                        dispatch(agreeToTermsToggle(!agreeToTerms))
                      }
                    />
                  }
                  label={
                    <>
                      I agree to the
                      <u
                        style={{
                          color: muiTheme.palette.red.main,
                        }}
                      >
                        Terms & Conditions
                      </u>
                    </>
                  }
                />
              </FormGroup>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Side;
