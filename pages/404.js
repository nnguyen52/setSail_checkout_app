import React from "react";
import muiTheme from "../styles/muiThemes";
const Notfound = () => {
  return (
    <div
      style={{
        color: `${muiTheme.palette.blue.side}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>Sorry, this page does not exist</h1>
    </div>
  );
};

export default Notfound;
