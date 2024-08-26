import { Box } from "@mui/material";

function LoginButton() {
  return (
    <Box
      sx={{
        flex: { xs: "none", sm: "1" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "#b0b0b0",
        fontSize: "17px",
      }}
    >
      로그인
    </Box>
  );
}

export default LoginButton;
