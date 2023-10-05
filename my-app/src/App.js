import "./App.css";
import Experiencekerala from "./Experiencekerala";
import FindMore from "./FindMore";
import Homey from "./Homey";
import Navb from "./Navb";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<Homey />}></Route>
          <Route path="/home" element={<Homey />}></Route>
          <Route
            path="/experiencekerala"
            element={<Experiencekerala />}
          ></Route>
          <Route path="/findmore" element={<FindMore />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
