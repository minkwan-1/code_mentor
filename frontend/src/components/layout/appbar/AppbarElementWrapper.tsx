import { Box } from "@mui/material";
import React from "react";

interface AppbarElementWrapperAppbarElementWrapperProps {
  children: React.ReactNode;
}

function AppbarElementWrapper({
  children,
}: AppbarElementWrapperAppbarElementWrapperProps) {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        height: "100%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        padding: "0px 20px",
      }}
    >
      {children}
    </Box>
  );
}

export default AppbarElementWrapper;
