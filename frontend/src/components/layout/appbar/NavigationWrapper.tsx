import { Box } from "@mui/material";

interface NavigationWrapperProps {
  children: React.ReactNode;
}

function NavigationWrapper({ children }: NavigationWrapperProps) {
  return (
    <Box
      sx={{
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        display: { xs: "none", sm: "flex" },
      }}
    >
      {children}
    </Box>
  );
}

export default NavigationWrapper;
