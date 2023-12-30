import { useEffect, useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
const BoardCanvas = () => {
  const canvasRef = useRef(null);
  const drawCanvas = useRef(false);

  //read data from menu slice
  const activeMenuItem = useSelector((state) => state.menu.activeItem);

  //read data from tools slice
  const { color, size } = useSelector((state) => state.tools[activeMenuItem]);

  // for first render
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = (e) => {
      drawCanvas.current = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!drawCanvas.current) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    const handleMouseUp = (e) => {
      drawCanvas.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);

      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // for color and size change
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const changeDrawConfig = (color, size) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    };

    changeDrawConfig(color, size);
  }, [color, size]);

  return <canvas ref={canvasRef}></canvas>;
};

export default BoardCanvas;
