import { TwitterPicker } from "react-color";
import { useSelector } from "react-redux";

const Toolbox = () => {
  const activeMenuItem = useSelector((state) => {
    return state.menu.activeItem;
  });

  const updateBrushSize = (e) => {};
  return (
    <div className="p-5 absolute top-1/4 left-5 border rounded-md border-solid border-zinc-300 bg-white">
      <div>
        <h4 className="text-sm">Stroke</h4>
        <div className="my-4">
          <TwitterPicker
            width="220px"
            colors={["#1e1e1e", "#e03131", "#2f9e44", "#1971c2", "#f08c00"]}
          />
        </div>
      </div>
      <div>
        <h4 className="text-sm">Stroke Width</h4>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
            className="h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
