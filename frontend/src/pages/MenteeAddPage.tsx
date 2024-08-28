import {
  Box,
  Button,
  TextField,
  Typography,
  Autocomplete,
  Chip,
  useTheme,
} from "@mui/material";
import { PageContainer, ComponentWrapper } from "../components/layout/common";

// interface MentorForm {
//   name: string;
//   experience: string;
//   techStack: string[];
//   description: string;
// }

const techStackOptions = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Kotlin",
  "Swift",
  "Firebase",
  "Python",
  "Pandas",
  "Scikit-learn",
  "Java",
  "Spring",
  "AWS",
];

const MenteeAddPage = () => {
  const theme = useTheme();

  return (
    <PageContainer
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ComponentWrapper
        sx={{
          mt: 5,
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
        >
          멘티로 참여하기
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 3,
          }}
        >
          {/* Name */}
          <TextField
            label="성함"
            placeholder="예)홍길동"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: theme.palette.grey[100],
              borderRadius: "8px",
            }}
          />

          {/* Experience */}
          <TextField
            label="경력"
            placeholder="예)6년 이상의 시스템 아키텍처 경험"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: theme.palette.grey[100],
              borderRadius: "8px",
            }}
          />

          {/* Tech Stack */}
          <Autocomplete
            multiple
            options={techStackOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="기술 스택"
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "8px",
                }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  sx={{ margin: "2px" }}
                  key={option}
                />
              ))
            }
          />

          {/* Description */}
          <TextField
            label="간단한 소개"
            placeholder="예)대규모 시스템 설계와 클라우드 서비스 구축에 전문성을 갖추고 있습니다."
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{
              backgroundColor: theme.palette.grey[100],
              borderRadius: "8px",
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            sx={{
              mt: 3,
              padding: "12px",
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: theme.palette.grey[800],
              },
            }}
          >
            멘티로 참여하기
          </Button>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default MenteeAddPage;
