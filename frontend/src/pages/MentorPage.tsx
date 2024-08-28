import { Box, Grid, TextField, Button, Fab } from "@mui/material";
import { useState, useEffect } from "react";
import { PageContainer, ComponentWrapper } from "../components/layout/common";
import MentorCard from "../components/mentor/MentorCard";
import { useAtom } from "jotai";
import { mentorsAtom } from "../atoms/jotaiAtoms";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { MentorForm } from "../types/types";

function MentorPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mentors, setMentors] = useAtom(mentorsAtom); // Use Jotai atom
  const [filteredMentors, setFilteredMentors] = useState<MentorForm[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Here you should fetch mentors data from an API and set it to the atom
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/mentors");
        const data: MentorForm[] = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("There was an error fetching the mentors!", error);
      }
    };
    fetchMentors();
  }, [setMentors]);

  useEffect(() => {
    handleSearch(); // Re-run search whenever mentors data changes
  }, [mentors, searchTerm]);

  const handleSearch = () => {
    const filtered = mentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.techStack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredMentors(filtered);
  };
  console.log(mentors);

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
            <Grid item xs={12} sm={6} md={4} key={mentor._id}>
              <MentorCard {...mentor} />
            </Grid>
          ))}
        </Grid>

        {/* 우측 하단 네비게이션 버튼 */}
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "black",
            color: "white",
          }}
          onClick={() => {
            navigate("/mentor_add");
          }}
        >
          <AddIcon />
        </Fab>
      </ComponentWrapper>
    </PageContainer>
  );
}

export default MentorPage;
