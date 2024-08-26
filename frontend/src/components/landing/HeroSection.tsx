import { ComponentWrapper } from "../layout/common";
import LandingTypography from "./LandingTypography";
import LandingButton from "./LandingButton";

const HeroSection = () => {
  return (
    <ComponentWrapper
      sx={{
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <LandingTypography
        variant="h2"
        gutterBottom
        fontWeight="bold"
        sx={{ marginBottom: "20px" }}
      >
        당신만의 멘토를 찾으세요
      </LandingTypography>
      <LandingTypography
        variant="h5"
        gutterBottom
        sx={{ marginBottom: "40px" }}
      >
        실무에 종사하고 있는 개발자와 연결되어 원하는 목표에 다가가세요.
      </LandingTypography>
      <LandingButton variant="contained" size="large" sx={{ bgcolor: "black" }}>
        지금 시작하기
      </LandingButton>
      <LandingButton />
    </ComponentWrapper>
  );
};

export default HeroSection;
