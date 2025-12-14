import { TextField } from "@mui/material";

function Input({
  name,
  value,
  onChange,
  error,
  helperText,
  type = "text",
  placeholder,
  fullWidth = true,
  sx,
  ...props
}) {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      variant="outlined"
      sx={{
        backgroundColor: "background.paper", 
        borderRadius: 1,
        ...sx,
      }}
      {...props}
    />
  );
}

export default Input;
