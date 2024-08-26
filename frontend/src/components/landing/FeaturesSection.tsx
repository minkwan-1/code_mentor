import { Grid } from "@mui/material";
import LandingCard from "./LandingCard";
import LandingTypography from "./LandingTypography";
import { ComponentWrapper } from "../layout/common";

const FeaturesSection = () => {
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
        왜 🌿TORTEE🌿일까요?
      </LandingTypography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="전문가의 교육"
            description="당신은 실무에 종사하는 개발자와 직접 연결되어 있습니다. 우리의 멘토는 각자의 분야에서 수년간의 경험을 가지고 있으며, 최신 기술과 트렌드를 반영한 교육을 제공합니다. 전문가의 깊이 있는 지식과 실무 경험을 통해 당신의 기술을 한 단계 끌어올리세요."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="맞춤형 학습"
            description="각 개인의 학습 목표와 필요에 맞춘 맞춤형 커리큘럼을 제공합니다. 사전 상담을 통해 당신의 학습 스타일과 목표를 이해하고, 가장 적합한 교육 자료와 수업을 제공합니다. 더 효율적이고 목표 지향적인 학습을 통해 빠른 성장을 경험하세요."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="유연한 일정"
            description="당신의 바쁜 일정을 고려하여 다양한 시간대에 맞춘 유연한 세션을 제공합니다. 직장이나 학업과 병행할 수 있도록, 원하는 시간에 맞춰 수업을 예약할 수 있습니다. 언제든지 편리한 시간에 학습할 수 있는 유연함을 제공합니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="포괄적인 자료 제공"
            description="세션 동안 다루어진 모든 내용은 철저히 기록되어 포괄적인 학습 자료를 제공합니다. 강의 중 다룬 주요 개념, 코드 샘플, 참고 자료 등 모든 자료를 제공하여 복습과 자습을 돕습니다. 학습의 완성도를 높이고, 중요한 부분을 놓치지 않도록 합니다."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="상시 지원"
            description="수업 외에도 언제든지 질문과 지원을 받을 수 있습니다. 이메일이나 채팅을 통해 상시 지원을 제공하며, 학습 중에 발생하는 모든 문제를 신속하게 해결합니다. 혼자서 고민하지 말고 언제든지 도움을 요청하세요."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandingCard
            title="실무자와의 연결"
            description="인적 네트워크의 확보도 개발자의 능력 중 하나입니다. 교육생들 간의 경험 공유와 서로의 진행 상황을 공유할 수 있는 커뮤니티 공간을 운영하여, 멘토링 외에도 유익한 교류와 협업의 기회를 제공합니다."
          />
        </Grid>
      </Grid>
    </ComponentWrapper>
  );
};

export default FeaturesSection;
