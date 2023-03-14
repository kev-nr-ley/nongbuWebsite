import React from "react";

import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function CanvasWaveStatic() {
  const canvasWaveStatic = useRef(null);

  useEffect(() => {
    const canvas = canvasWaveStatic.current;
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
      ctx.fillStyle = WAVE_COLOR;

      for (let x = 0; x < CANVAS_WIDTH; x++) {
        const y =
          WAVE_HEIGHT * Math.cos(x * WAVE_WIDTH + waveOffset * WAVE_SPEED) +
          CANVAS_HEIGHT / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.lineTo(0, CANVAS_HEIGHT);
      ctx.fill();
    };

    // Update wave
    const updateWave = () => {
      waveOffset += WAVE_LENGTH;
    };

    // Render frame
    const render = () => {
      clearCanvas();
      drawWave();
      updateWave();
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <canvas ref={canvasWaveStatic} />
    </Box>
  );
}
