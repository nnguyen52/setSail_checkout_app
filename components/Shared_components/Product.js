import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  discount,
  allowDiscount,
} from "../../redux/reducers/shoppingCartReducer";
import { createRemovingProduct } from "../../redux/reducers/removingProductReducer";
import muiTheme from "../../styles/muiThemes";

const Product = ({ data, status }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { name, price, description } = data;
  const {
    products,
    sum,
    discount: hasDiscount,
  } = useSelector((state) => state.shoppingCart);

  const handleAddToCart_orRemove = () => {
    if (products.map((e) => e.name).includes(name)) {
      return dispatch(createRemovingProduct(data));
    }
    dispatch(addToCart(data));
    dispatch(allowDiscount());
  };

  useEffect(() => {
    if (!hasDiscount) return;
    if (sum > 400) dispatch(discount());
  }, [sum, hasDiscount, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        background: "white",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        padding: "1em",
        borderRadius: "10px",
        "&:hover": {
          border: !status ? `2px solid ${muiTheme.palette.red.main}` : "none",
        },
        border: `${
          status != "chosen" && products.map((e) => e.name).includes(name)
            ? `2px solid ${muiTheme.palette.red.main}`
            : "none"
        }`,
      }}
    >
      {/* info */}
      <Box sx={{ display: "flex", alignItems: "center", gap: ".5em" }}>
        {router.route != "/checkout" &&
          (status == "chosen" ? (
            <CheckCircleIcon color="success" />
          ) : (
            <ErrorOutlineOutlinedIcon
              sx={{
                color: muiTheme.palette.red.main,
              }}
            />
          ))}
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <span>{name} </span>
          {status !== "chosen" ? (
            <span>
              <b> ${price}</b> /mo
            </span>
          ) : (
            <span>{description} </span>
          )}
        </Box>
      </Box>
      {/* side info */}
      {status !== "chosen" ? (
        <button
          style={{
            padding: ".6em",
            margin: 0,
            height: "fit-content",
            background: `${
              status != "chosen" && products.map((e) => e.name).includes(name)
                ? muiTheme.palette.red.main
                : muiTheme.palette.blue.main
            }`,
            color: "white",
          }}
          onClick={handleAddToCart_orRemove}
        >
          {status != "chosen" && products.map((e) => e.name).includes(name)
            ? "Selected"
            : "Select"}
        </button>
      ) : (
        <span>
          <b> ${price}</b> /mo
        </span>
      )}
    </Box>
  );
};

export default Product;
