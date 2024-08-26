import { Box, Button } from "@mui/material";

const Appbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        bgcolor: "white",
        top: 0,
        zIndex: 999,
        fontWeight: "bold",
        borderBottom: "1px solid gray",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          justifyContent: "space-between",
          margin: "0 auto",
          height: "100%",
          padding: "0px 12px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          로고
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>방탈출</Button>
          <Button>보드게임</Button>
          <Button>커뮤니티</Button>
          <Button>제휴</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>로그인</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Appbar;
