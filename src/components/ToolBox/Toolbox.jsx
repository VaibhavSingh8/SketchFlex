import { TwitterPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import MENU_ITEMS from "../../utils/constants";
import { changeColor, changeStrokeWidth } from "../../store/slice/toolsSlice";

const Toolbox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => {
    return state.menu.activeItem;
  });

  const showStroke = activeMenuItem === MENU_ITEMS.PENCIL;

  const showBrush =
    activeMenuItem === MENU_ITEMS.ERASER ||
    activeMenuItem === MENU_ITEMS.PENCIL;

  //update Brush Size
  const handleStrokeWidth = (e) => {
    dispatch(changeStrokeWidth({ item: activeMenuItem, size: e.target.value }));
  };

  //change color
  const handleChangeComplete = (color, event) => {
    dispatch(changeColor({ item: activeMenuItem, color: color.hex }));
  };

  return (
    <div className="p-5 absolute top-1/4 left-5 border rounded-md border-solid border-zinc-300 bg-white">
      {showStroke && (
        <div>
          <h4 className="text-sm">Stroke</h4>
          <div className="my-4">
            <TwitterPicker
              width="220px"
              colors={["#1e1e1e", "#e03131", "#2f9e44", "#1971c2", "#f08c00"]}
              onChange={handleChangeComplete}
            />
          </div>
        </div>
      )}
      {showBrush && (
        <div>
          <h4 className="text-sm">Stroke Width</h4>
          <div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={handleStrokeWidth}
              className="h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
