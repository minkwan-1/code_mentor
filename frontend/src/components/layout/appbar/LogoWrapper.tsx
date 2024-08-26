import { Box } from "@mui/material";

function LogoWrapper() {
  return (
    <Box
      sx={{
        flex: { xs: "none", sm: "1" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      🌿TORTEE🌿
    </Box>
  );
}

export default LogoWrapper;
