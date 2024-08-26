import { Typography, TypographyProps } from "@mui/material";

interface LandingTypographyProps extends TypographyProps {
  variant: "h2" | "h4" | "h5" | "h6" | "body1" | "body2"; // 필요한 variant 추가
  textAlign?: "center" | "left" | "right";
  fontWeight?: "normal" | "bold";
}

const LandingTypography = ({
  variant,
  textAlign = "center",
  fontWeight = "normal",
  children,
  sx,
  ...props
}: LandingTypographyProps) => {
  return (
    <Typography
      variant={variant}
      sx={{
        textAlign: textAlign,
        fontWeight: fontWeight,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default LandingTypography;
