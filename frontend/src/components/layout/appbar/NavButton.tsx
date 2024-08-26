import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  label: string;
  to: string;
}

function NavButton({ label, to }: NavButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{ color: "#b0b0b0", fontWeight: "bold", fontSize: "17px" }}
    >
      {label}
    </Button>
  );
}

export default NavButton;
