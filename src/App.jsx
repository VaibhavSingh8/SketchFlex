import Menu from "./components/Menu/Menu";
import Toolbox from "./components/ToolBox/Toolbox";
import BoardCanvas from "./components/Board/BoardCanvas";
function App() {
  return (
    <>
      {/* <h1>A digital SketchBook for your needs!</h1> */}
      <Menu />
      <Toolbox />
      <BoardCanvas />
    </>
  );
}

export default App;
