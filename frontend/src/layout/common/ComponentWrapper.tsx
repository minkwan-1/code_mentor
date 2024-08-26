import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ComponentWrapperProps {
  children: ReactNode;
}

const ComponentWrapper = ({ children }: ComponentWrapperProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "0px 20px",
      }}
    >
      {children}
    </Box>
  );
};

export default ComponentWrapper;
