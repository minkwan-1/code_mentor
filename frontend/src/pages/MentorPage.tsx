import { Box, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { PageContainer, ComponentWrapper } from "../components/layout/common";
import MentorCard from "../components/mentor/MentorCard";
import { mentorsData } from "../data/mentorsData";

function MentorPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentorsData);

  const handleSearch = () => {
    const filtered = mentorsData.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.techStack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredMentors(filtered);
  };

  return (
    <PageContainer>
      <ComponentWrapper>
        {/* 검색바 */}
        <Box sx={{ mt: 5, mb: 5, display: "flex", justifyContent: "center" }}>
          <TextField
            label="이름 또는 기술 스택으로 검색"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mr: 2, width: "300px" }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "black" }}
            onClick={handleSearch}
          >
            검색
          </Button>
        </Box>

        {/* 멘토 카드 리스트 */}
        <Grid container spacing={2}>
          {filteredMentors.map((mentor) => (
            <Grid item xs={12} sm={6} md={4} key={mentor.id}>
              <MentorCard {...mentor} />
            </Grid>
          ))}
        </Grid>
      </ComponentWrapper>
    </PageContainer>
  );
}

export default MentorPage;
