import React from "react";

import { useTheme } from "@chakra-ui/react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function BackgroundEllipse(props) {
  const { colors } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const updateWindowDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const square = (
    <svg
      width={screenWidth}
      height={screenHeight}
      version='1.1'
      viewBox='100 100 100 100'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='0'
        y='0'
        width='500%'
        height='140%'
        fill={props.fill || "purple"}
      />
    </svg>
  );
  const circle = (
    
    <svg
      width={screenWidth}
      height={screenHeight}
      version='1.1'
      viewBox='100 100 100 100'
      xmlns='http://www.w3.org/2000/svg'>
        
    


      <ellipse
        cx='150'
        cy='100'
        rx='clamp(200px, 200%, 200px)'
        ry='clamp(50px, 50%, 100px)'
        fill={props.fill || "purple"}
      />
    </svg>
  );

  return (
    <Box
      position='absolute'
      top='0'
      left='0'
      w='100%'
      h='100%'
      overflow='hidden'>
      {/* {square} */}
      {circle}
    </Box>
  );
}
