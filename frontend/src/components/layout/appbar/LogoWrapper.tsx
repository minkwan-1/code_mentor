import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LogoWrapperProps {
  to: string;
}

function LogoWrapper({ to }: LogoWrapperProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Box
      sx={{
        flex: { xs: "none", sm: "1" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      🌿TORTEE🌿
    </Box>
  );
}

export default LogoWrapper;
