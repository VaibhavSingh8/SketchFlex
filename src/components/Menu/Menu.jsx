import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const handlePencilClick = () => {};
  const handleEraserClick = () => {};
  const handleUndoClick = () => {};
  const handleRedoClick = () => {};
  const handleDownload = () => {};

  return (
    <div className="absolute px-6 py-2 flex justify-between w-1/4 left-1/2 top-7 -translate-x-1/2 border border-solid border-zinc-300 rounded-md">
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={handlePencilClick}
      >
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={handleEraserClick}
      >
        <FontAwesomeIcon icon={faEraser} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={handleUndoClick}
      >
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={handleRedoClick}
      >
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div
        className="flex hover:bg-slate-200 active:bg-slate-200 cursor-pointer h-8 w-8 justify-center items-center rounded-md"
        onClick={handleDownload}
      >
        <FontAwesomeIcon icon={faDownload} />
      </div>
    </div>
  );
};

export default Menu;
