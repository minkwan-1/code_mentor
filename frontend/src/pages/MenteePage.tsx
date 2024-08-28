import { Box, Grid, TextField, Button, Fab } from "@mui/material";
import { PageContainer, ComponentWrapper } from "../components/layout/common";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const MentorPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ComponentWrapper>
        {/* Search Bar */}
        <Box sx={{ mt: 5, mb: 5, display: "flex", justifyContent: "center" }}>
          <TextField
            label="이름 또는 기술 스택으로 검색"
            variant="outlined"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mr: 2, width: "300px" }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "black" }}
            // onClick={handleSearch}
          >
            검색
          </Button>
        </Box>

        {/* Mentor Card List */}
        <Grid container spacing={2}>
          {/* {mentors.map((mentor) => (
            <Grid item xs={12} sm={6} md={4} key={mentor.id}>
              <MentorCard {...mentor} />
            </Grid>
          ))} */}
        </Grid>

        {/* Navigation Button */}
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
            navigate("/mentee_add");
          }}
        >
          <AddIcon />
        </Fab>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default MentorPage;
