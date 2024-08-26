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
