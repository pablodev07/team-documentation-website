import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useColorMode, Box } from "@chakra-ui/react";

const Layout = () => {
  const { colorMode } = useColorMode();
  let isDark = colorMode === "dark";
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
    >
      <Navbar />

      <Outlet />

      <Footer isDark={isDark} />
    </Box>
  );
};

export default Layout;
