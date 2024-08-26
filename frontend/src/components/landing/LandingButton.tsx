import { Button, ButtonProps } from "@mui/material";

interface LandingButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const LandingButton = ({
  variant,
  color,
  size,
  children,
  sx,
  ...props
}: LandingButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      sx={{
        fontSize: "18px",
        padding: "10px 20px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "white",
          border: "1px solid black",
          color: "black",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LandingButton;
