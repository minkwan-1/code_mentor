import { useParams } from "react-router-dom";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { mentorsAtom } from "../atoms/jotaiAtoms";
import { MentorForm } from "../types/types";

const MentorDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mentors] = useAtom(mentorsAtom);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Handle edit action
    handleClose();
  };

  const handleDelete = () => {
    // Handle delete action
    handleClose();
  };

  if (!id) {
    return <Typography>Mentor not found</Typography>;
  }

  const mentor = mentors.find(
    (mentor: MentorForm) => mentor.id === parseInt(id)
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
