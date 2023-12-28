import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const BoardCanvas = () => {
  const canvasRef = useRef(null);
  const activeMenuItem = useSelector((state) => state.menu.activeItem);

  const { color } = useSelector((state) => state.tools[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default BoardCanvas;
