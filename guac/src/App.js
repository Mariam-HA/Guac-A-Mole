import "./App.css";
import Gameborder from "./components/Gameborder";
import Heder from "./components/Heder";
import Randomimage from "./components/Randomimage";

function App() {
  return (
    <>
      <Heder />
      <Randomimage />
      {/* <Timer /> */}
      <Gameborder />
    </>
  );
}

export default App;
