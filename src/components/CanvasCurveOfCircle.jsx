import React from "react";

import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function CanvasCurveOfCircle() {
  const { colors } = useTheme();
  const canvasCurveOfCircle = useRef(null);

  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);





  const handleResize = () => {
    setCanvasWidth(window.innerWidth);
    setCanvasHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box // Canvas container
      position='absolute'
      top='0'
      left='0'
      w='100%'
      h='100%'
      zIndex='0'
      overflow='hidden'>
      <canvas ref={canvasCurveOfCircle} />
    </Box>
  );
}
