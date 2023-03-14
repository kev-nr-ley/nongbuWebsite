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
import { Route, Routes, useLoadingContext } from "react-router-loading";
import LoadingScreen from "@components/LoadingScreen";
import AnimatedRoutes from "@components/AnimatedRoutes";

function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  const { colors, fonts } = useTheme();
  const loadingContext = useLoadingContext();

  const loading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    loadingContext.setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box bg={colors.backgroundLight}>
      <Navbar />
      <AnimatedRoutes />

      <Footer />
    </Box>
  );
}

export default App;
