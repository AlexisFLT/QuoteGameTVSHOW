import Players from "@components/Players/Players";
import Game from "@pages/Game/Game";
import Home from "@pages/Home/Home";
import { Route, Routes } from "react-router";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/players/game" element={<Game />} />
    </Routes>
  );
}

export default App;
