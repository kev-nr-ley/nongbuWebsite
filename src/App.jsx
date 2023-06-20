import Navbar from "@sections/Navbar";
import Footer from "@sections/Footer";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLoadingContext } from "react-router-loading";
import { ParallaxProvider } from "react-scroll-parallax";
import LoadingScreen from "@components/LoadingScreen";
import AnimatedRoutes from "@components/AnimatedRoutes";
import { HelmetProvider } from "react-helmet-async";
function App() {
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
  

      <Box bg={colors.backgroundDark}>
        <Navbar />
        <ParallaxProvider>
          <AnimatedRoutes />
        </ParallaxProvider>
        <Footer />
      </Box>
    </HelmetProvider>
  );
}

export default App;
