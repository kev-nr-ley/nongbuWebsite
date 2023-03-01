import Navbar from "@sections/Navbar";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
import About from "@pages/About";
import Order from "@pages/Order";
import Contact from "@pages/Contact";
import Reservations from "@pages/Reservations";
import Footer from "@sections/Footer";
import Events from "@pages/Events";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  const { colors, fonts } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  function checkIsMobile() {
    const checkMobile = window.innerWidth < 600;
    return setIsMobile(checkMobile);
  }

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Box bg={colors.backgroundDark}>
      <Navbar isMobile={isMobile} />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact  /> */}
      {/* <Events /> */}
      {/* <Order /> */}
      {/* <Menu objectToArray={objectToArray} /> */}
      <Reservations />
      <Footer />
    </Box>
  );
}

export default App;
