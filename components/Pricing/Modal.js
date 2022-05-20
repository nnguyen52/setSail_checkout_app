import React from "react";
import { Box } from "@mui/material";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import * as data from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { clearRemovingProduct } from "../../redux/reducers/removingProductReducer";
import {
  loseDiscount,
  removeFromCart,
} from "../../redux/reducers/shoppingCartReducer";
import muiTheme from "../../styles/muiThemes";

const CustomModal = () => {
  const dispatch = useDispatch();
  const { product, openModal } = useSelector((state) => state.removingProduct);
  return (
    <Box
      sx={{
        display: openModal ? "block" : "none",
        color: "red",
        background: muiTheme.palette.black.modalBackground,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: "400px",
          background: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,  -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1em",
          borderRadius: "10px",
        }}
      >
        <EventAvailableRoundedIcon
          className="grey"
          color="error"
          fontSize="medium"
          sx={{
            width: "2em",
            height: "2em",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>
            Wait! Don't lose your Discount. Keep {product?.name} and receive{" "}
            {data.discount}% off
          </h4>
        </Box>
        <Box sx={{ display: "flex", width: "100%", gap: ".5em" }}>
          <button
            style={{ border: `1px solid ${muiTheme.palette.blue.side}` }}
            className="button_full white_btn button_bigPadding"
            onClick={() => {
              dispatch(removeFromCart(product));
              dispatch(loseDiscount());
              dispatch(clearRemovingProduct());
            }}
          >
            Remove
          </button>
          <button
            className="button_full red_btn button_bigPadding"
            onClick={() => dispatch(clearRemovingProduct())}
          >
            Keep {product?.name}
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomModal;
