import { Box } from "@mui/material";
import {
  AppbarElementWrapper,
  LogoWrapper,
  NavigationWrapper,
  LoginButton,
} from "./index";
import NavButton from "./NavButton";

const Appbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        bgcolor: "white",
        borderBottom: "1px solid gray",
        color: "black",
        fontWeight: "bold",
        fontSize: "20px",
        top: 0,
        zIndex: 999,
      }}
    >
      <AppbarElementWrapper>
        {/* Logo */}
        <LogoWrapper to="/" />
        {/* Navigation */}
        <NavigationWrapper>
          <NavButton label="멘토찾기" to="/mentor" />
          <NavButton label="멘티찾기" to="/mentee" />
          <NavButton label="취업사례" to="/career" />
          <NavButton label="코드리뷰" to="/review" />
        </NavigationWrapper>
        {/* Login */}
        <LoginButton to="/auth" />
      </AppbarElementWrapper>
    </Box>
  );
};

export default Appbar;
