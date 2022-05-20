import { Box } from "@mui/material";
import muiTheme from "../../styles/muiThemes";

const FormCategory = ({ type, children }) => {
  return (
    <Box sx={{ margin: "1em 0 1em 0" }}>
      <Box
        sx={{
          position: "relative",
          margin: "1.5em 0 1.5em 0 ",
        }}
      >
        <Box
          sx={{
            borderTop: `1px solid ${muiTheme.palette.blue.side}`,
            width: "100%",
          }}
        >
          {" "}
        </Box>
        <Box
          sx={{
            fontSize: ".8em",
            color: muiTheme.palette.blue.side,
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
          }}
        >
          {type}
        </Box>
      </Box>
      {children}
    </Box>
  );
};
export default FormCategory;
