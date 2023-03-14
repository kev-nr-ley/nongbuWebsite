import React from "react";

import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function CanvasCurve() {
  const canvasCurve = useRef(null);

  useEffect(() => {
    const canvas = canvasCurve.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Canvas dimensions
    const CANVAS_WIDTH = 1920;
    const CANVAS_HEIGHT = 1080;

    // Wave
    const WAVE_WIDTH = 0.01;
    const WAVE_HEIGHT = 100;
    const WAVE_LENGTH = 0.01;
    const WAVE_SPEED = 0.01;

    // Colors
    const BACKGROUND_COLOR = "#000";
    const WAVE_COLOR = "#ff0022";

    // Wave
    let waveOffset = 0;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
    };

    // Clear canvas
    const clearCanvas = () => {
      ctx.fillStyle = "#00448080";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };

    // Draw wave
    const drawWave = () => {
      ctx.beginPath();
      ctx.moveTo(0, CANVAS_HEIGHT / 2);

      for (let i = 0; i < CANVAS_WIDTH; i++) {
        const x = i;
        const y =
          WAVE_HEIGHT * Math.sin(x * WAVE_WIDTH + waveOffset * WAVE_SPEED) +
          CANVAS_HEIGHT / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.lineTo(0, CANVAS_HEIGHT);
      ctx.fillStyle = WAVE_COLOR;
      ctx.fill();
    };

    // Render frame
    const render = () => {
      clearCanvas();
      drawWave();
      waveOffset += 1;
      animationFrameId = window.requestAnimationFrame(render);
    };

    // Start animation
    const startAnimation = () => {
      resizeCanvas();
      render();
    };

    // Stop animation
    const stopAnimation = () => {
      window.cancelAnimationFrame(animationFrameId);
    };

    // Start animation
    startAnimation();

    // Stop animation on unmount
    return () => {
      stopAnimation();
    };
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
      <canvas ref={canvasCurve} />
    </Box>
  );
}
