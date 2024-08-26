// CareerCaseCard.tsx
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import { CareerCase } from "./types";

interface CareerCaseCardProps {
  data: CareerCase;
}

const CareerCaseCard: React.FC<CareerCaseCardProps> = ({ data }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          🔥 연봉: {data.salary}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ❤️ 신입
        </Typography>
        <Typography variant="body1" color="textSecondary">
          이력서 제출: {data.resumeSubmission}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          서류 합격률: {data.successRate}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          취업 날짜: {data.employmentDate}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          준비 기간: {data.preparationPeriod}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          부트캠프/국비: {data.bootcamp}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          기업 종류: {data.companyType}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          기업 위치: {data.companyLocation}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          기업 연봉: {data.companySalary}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          기업 규모: {data.companySize}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          자격증: {data.certifications}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ✅ 기술 스택: {data.techStack}
        </Typography>
        <List>
          {data.tips.map((tip, index) => (
            <ListItem key={index}>✅ {tip}</ListItem>
          ))}
        </List>
        <Typography variant="body1" color="textSecondary">
          💡 면접 질문: {data.interviewQuestion}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CareerCaseCard;
