import React from "react";
import { Form, Formik } from "formik";
import { Box, LinearProgress } from "@mui/material";
import FormCategory from "./FormCategory";
import InputField from "../Custom_form/InputField";
import { validatePassword } from "../../helperFunctions/passwordValidation";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewUser,
  successfulCheckout,
  resetCheckout,
  checkingOut,
} from "../../redux/reducers/checkoutReducer";
import { resetShoppingCart } from "../../redux/reducers/shoppingCartReducer";
import { resetRemovingProduct } from "../../redux/reducers/removingProductReducer";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shoppingCart);
  const { agreeToTerms, isCheckingOut } = useSelector(
    (state) => state.checkout
  );
  // form info
  const form_initialValues = {
    email: "",
    newPassword: "",
    fullName: "",
    address: "",
    country: "",
    city: "",
    state_province: "",
    postalCode: "",
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    if (isCheckingOut) return;
    dispatch(checkingOut());
    let allErrors = [];
    allErrors = allErrors.concat({
      newPassword: validatePassword(values.newPassword),
    });
    //   check password errors
    if (allErrors[0].newPassword) return setErrors(allErrors[0]);
    // if not agree to term -> force user to agree
    if (!agreeToTerms) {
      dispatch(checkingOut());
      return toast.error("You must agree to our Terms and Conditions");
    }
    // all good!!!
    // fake waiting , reset reducers and toast results
    dispatch(createNewUser(values));
    dispatch(successfulCheckout());
    resetForm();
    dispatch(resetRemovingProduct());
    dispatch(resetCheckout());
    await new Promise((resolve) =>
      setTimeout(() => {
        dispatch(checkingOut());
        resolve();
      }, 2000)
    );
    toast.success(
      <>
        You successfully checkout! here are items you bought:{" "}
        {products.map((e) => {
          return <li>{e.name.toString()}</li>;
        })}
      </>
    );
  };

  return (
    <Formik initialValues={form_initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          {/* account info */}
          <FormCategory
            type={"Account Info"}
            children={
              <>
                <InputField
                  title="Your email"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
                <InputField
                  title="New password"
                  helperText="Password is case sensitive, must not contain spaces or special characters (e.g, @, &, etc) and must be between 6 & 40 character"
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                />
              </>
            }
          />
          {/* billing info */}
          <FormCategory
            type="Billing Info"
            children={
              <>
                <InputField
                  title="Full Name"
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                />
                <InputField
                  title="Address"
                  id="address"
                  name="address"
                  type="text"
                  required
                />
                <InputField
                  title="Country"
                  id="country"
                  name="country"
                  type="text"
                  required
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "1em",
                  }}
                >
                  <InputField
                    title="City"
                    id="city"
                    name="city"
                    type="text"
                    required
                  />
                  <InputField
                    title="State / Province"
                    id="state_province"
                    name="state_province"
                    type="text"
                    required
                  />
                  <InputField
                    title="Postal Code"
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    required
                  />
                </Box>
              </>
            }
          />
          <button
            type="submit"
            className="button_full red_btn button_bigPadding"
            style={{ margin: "1em 0 1em 0" }}
          >
            Proceed
          </button>
          {isCheckingOut && <LinearProgress />}
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
