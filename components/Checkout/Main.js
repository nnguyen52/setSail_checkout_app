import React from "react";
import dynamic from "next/dynamic";

const Main = () => {
  const CheckoutForm = dynamic(() => import("../Custom_form/checkoutForm"));
  return (
    <>
      <CheckoutForm />
    </>
  );
};

export default Main;
