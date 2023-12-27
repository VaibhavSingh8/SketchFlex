import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clickMenuItem, clickActionItem } from "../../store/slice/menuSlice";
import MENU_ITEMS from "../../utils/constants";

const Menu = () => {
  const dispatch = useDispatch();
  const handleMenuClick = (item) => {
    dispatch(clickMenuItem(item));
  };

  const handleActionClick = () => {};

  return (
    <div className="absolute px-6 py-2 flex justify-between w-1/4 left-1/2 top-7 -translate-x-1/2 border border-solid border-zinc-300 rounded-md">
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={() => handleActionClick()}
      >
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={() => handleActionClick()}
      >
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={() => handleActionClick()}
      >
        <FontAwesomeIcon icon={faDownload} />
      </div>
    </div>
  );
};

export default Menu;
