import { Box } from "@mui/material";
import {
  AppbarElementWrapper,
  LogoWrapper,
  NavigationWrapper,
  NavButton,
  LoginButton,
} from "./index";

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
        {/*Logo */}
        <LogoWrapper />
        {/* Navigation */}
        <NavigationWrapper>
          <NavButton label="멘토찾기" />
          <NavButton label="멘티찾기" />
          <NavButton label="취업사례" />
          <NavButton label="코드리뷰" />
        </NavigationWrapper>
        {/* Login */}
        <LoginButton />
      </AppbarElementWrapper>
    </Box>
  );
};

export default Appbar;
