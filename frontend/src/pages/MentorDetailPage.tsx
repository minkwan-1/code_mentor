import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { mentorsAtom } from "../atoms/jotaiAtoms";
import { MentorForm } from "../types/types";

const MentorDetailPage = () => {
  // useParams의 반환 타입을 문자열로 설정합니다.
  const { id } = useParams<{ id: string }>(); // id를 문자열로 받아옵니다.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mentors] = useAtom(mentorsAtom);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Handle edit action (e.g., navigate to an edit page)
    handleClose();
  };

  const handleDelete = () => {
    // Handle delete action
    handleClose();
  };

  if (!id) {
    return <Typography>Mentor not found</Typography>;
  }

  // id를 문자열에서 숫자로 변환하여 비교합니다.
  const mentor = mentors.find(
    (mentor: MentorForm) => mentor._id === id // 문자열을 직접 비교
  );

  if (!mentor) {
    return <Typography>Mentor not found</Typography>;
  }

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 800,
        margin: "20px auto",
        boxShadow: 3,
        backgroundColor: "background.paper",
        position: "relative",
      }}
    >
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ position: "absolute", top: 16, right: 16 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        {mentor.name}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {mentor.experience}
      </Typography>
      <Box sx={{ my: 1 }}>
        {mentor.techStack.map((tech, index) => (
          <Typography
            key={index}
            variant="body2"
            color="text.secondary"
            sx={{ display: "inline-block", mr: 1 }}
          >
            {tech}
          </Typography>
        ))}
      </Box>
      <Typography variant="body1">{mentor.description}</Typography>
    </Box>
  );
};

export default MentorDetailPage;
