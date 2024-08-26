import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

interface MentorCardProps {
  id: number;
  name: string;
  techStack: string[];
  experience: string;
  description: string;
}

const MentorCard = ({
  id,
  name,
  techStack,
  experience,
  description,
}: MentorCardProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = () => {
    navigate(`/mentor/${id}`);
    handleClose();
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: "200px",
        margin: "20px auto",
        boxShadow: 3,
        border: "1px solid gray",
        position: "relative",
      }}
    >
      <CardContent>
        <IconButton
          aria-controls="card-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="card-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
        </Menu>
        <Typography variant="h5" component="div" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {experience}
        </Typography>
        <Box sx={{ my: 1 }}>
          {techStack.map((tech, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ display: "inline-block", mr: 1 }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
