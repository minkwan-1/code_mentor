import { Button, Typography, Container } from "@mui/material";
import { PageContainer, ComponentWrapper } from "../components/layout/common";

const AuthPage = () => {
  const handleKakaoLogin = () => {
    console.log("카카오 로그인 버튼 클릭됨");
  };

  return (
    <PageContainer>
      <ComponentWrapper>
        <Container
          maxWidth="xs"
          sx={{
            mt: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 3,
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
            로그인 페이지
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            아래 버튼을 클릭하여 카카오 계정으로 로그인하세요.
          </Typography>
          <Button
            onClick={handleKakaoLogin}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#F7E300", // 카카오 로그인 버튼 색상
              color: "#3C1A1A", // 카카오 로그인 버튼 글자 색상
              fontWeight: "bold",
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#F7E300",
                boxShadow: 6,
              },
            }}
          >
            카카오 로그인
          </Button>
        </Container>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default AuthPage;
