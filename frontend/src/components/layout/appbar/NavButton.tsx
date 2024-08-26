import { Button } from "@mui/material";

interface NavButtonProps {
  label: string;
}

function NavButton({ label }: NavButtonProps) {
  return (
    <Button sx={{ color: "#b0b0b0", fontWeight: "bold", fontSize: "17px" }}>
      {label}
    </Button>
  );
}

export default NavButton;
