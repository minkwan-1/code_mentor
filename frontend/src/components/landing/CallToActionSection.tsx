import LandingTypography from "./LandingTypography";
import LandingButton from "./LandingButton";
import { ComponentWrapper } from "../layout/common";

const CallToActionSection = () => {
  return (
    <ComponentWrapper
      sx={{
        padding: "50px 0",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <LandingTypography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ marginBottom: "20px" }}
      >
        준비가 되셨나요?
      </LandingTypography>
      <LandingTypography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: "40px" }}
      >
        지금 바로 시작하여 멘토링을 통해 목표를 달성하세요!
      </LandingTypography>
      <LandingButton variant="contained" size="large" sx={{ bgcolor: "black" }}>
        지금 등록하기
      </LandingButton>
    </ComponentWrapper>
  );
};

export default CallToActionSection;
