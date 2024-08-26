import { Grid } from "@mui/material";
import LandingCard from "./LandingCard";
import LandingTypography from "./LandingTypography";
import { ComponentWrapper } from "../layout/common";

const TestimonialSection = () => {
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
        sx={{ marginBottom: "40px" }}
      >
        사용자들의 추천
      </LandingTypography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="김지훈"
            testimonial="멘토와의 세션을 통해 많은 것을 배웠습니다. 실질적인 문제 해결 능력을 키울 수 있었고, 기술적 자신감도 많이 얻었습니다. 매우 유익한 경험이었어요!"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="박수현"
            testimonial="멘토의 맞춤형 학습 계획 덕분에 제 목표를 명확히 하고 효율적으로 달성할 수 있었습니다. 전문적이고 체계적인 교육이 정말 좋았습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="이수진"
            testimonial="유연한 일정과 멘토의 세심한 조언 덕분에 바쁜 일정을 조율하며 학습할 수 있었습니다. 제 시간에 맞는 맞춤형 수업이 큰 도움이 되었습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="정민호"
            testimonial="멘토와의 1:1 세션을 통해 실질적인 개발 기술을 배우는 기회를 얻었습니다. 특히, 실무 경험을 바탕으로 한 조언이 매우 유익했습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="유미래"
            testimonial="직무와 관련된 심화 교육을 통해 제 역량을 강화할 수 있었습니다. 멘토의 전문적인 피드백 덕분에 제 기술이 많이 향상되었습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="홍길동"
            testimonial="세션 동안 다양한 문제를 해결하며 자신감을 얻었습니다. 실질적인 예제와 피드백이 특히 유용했으며, 제 능력 향상에 큰 도움이 되었습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="이은비"
            testimonial="멘토링 과정에서 배운 내용이 실제 업무에 큰 도움이 되었습니다. 맞춤형 학습과 실무 중심의 교육이 매우 효과적이었습니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            name="한재민"
            testimonial="멘토와의 세션을 통해 제 전문 분야에 대한 깊이 있는 이해를 얻을 수 있었습니다. 적극적인 피드백과 실용적인 조언 덕분에 많은 도움이 되었습니다."
          />
        </Grid>
      </Grid>
    </ComponentWrapper>
  );
};

export default TestimonialSection;
