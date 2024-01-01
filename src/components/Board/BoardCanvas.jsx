import { useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MENU_ITEMS from "../../utils/constants";
import { clickMenuItem, clickActionItem } from "../../store/slice/menuSlice";

const BoardCanvas = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const drawCanvas = useRef(false);
  const historyRef = useRef([]);
  const historyPointer = useRef(0);

  //read data from menu slice
  const { activeItem, actionItem } = useSelector((state) => state.menu);

  //read data from tools slice
  const { color, size } = useSelector((state) => state.tools[activeItem]);

  // for first render
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const drawStroke = (x, y) => {
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const handleMouseDown = (e) => {
      drawCanvas.current = true;
      beginPath(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!drawCanvas.current) return;
      drawStroke(e.clientX, e.clientY);
    };

    const handleMouseUp = (e) => {
      drawCanvas.current = false;
      const drawingData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      historyRef.current.push(drawingData);
      historyPointer.current = historyRef.current.length - 1;
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

  //for actionItem
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (actionItem === MENU_ITEMS.DOWNLOAD) {
      const dataURL = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = dataURL;
      anchor.download = "sketch.jpg";
      anchor.click();
    } else if (
      actionItem === MENU_ITEMS.UNDO ||
      actionItem === MENU_ITEMS.REDO
    ) {
      if (historyPointer.current > 0 && actionItem === MENU_ITEMS.UNDO)
        historyPointer.current -= 1;

      if (
        historyPointer.current < historyRef.current.length - 1 &&
        actionItem === MENU_ITEMS.REDO
      )
        historyPointer.current += 1;

      const drawingData = historyRef.current[historyPointer.current];

      ctx.putImageData(drawingData, 0, 0);
    }
    dispatch(clickActionItem(null));
  }, [actionItem]);

  return <canvas ref={canvasRef}></canvas>;
};

export default BoardCanvas;
