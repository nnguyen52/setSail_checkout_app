import React from "react";
import { useField } from "formik";
import { FormHelperText, FormControl, TextField } from "@mui/material";
import muiTheme from "../../styles/muiThemes";

const InputField = ({ helperText, title, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl
      error={!!error}
      sx={{
        display: "flex",
        padding: ".4em 0 .4em 0",
      }}
    >
      <span
        style={{
          fontWeight: 450,
          color: muiTheme.palette.blue.main,
        }}
      >
        {title}
      </span>
      <TextField
        size="small"
        error={error}
        {...field}
        id={field.name}
        {...props}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && (
        <FormHelperText>
          {error.map((e) => {
            return <li>{e}</li>;
          })}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
