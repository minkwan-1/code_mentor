import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LoginButtonProps {
  to: string;
}

function LoginButton({ to }: LoginButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        flex: { xs: "none", sm: "1" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "black",
        fontSize: "17px",
        cursor: "pointer",
      }}
    >
      로그인
    </Box>
  );
}

export default LoginButton;
