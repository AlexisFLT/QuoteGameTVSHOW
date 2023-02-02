import Players from "@components/Players/Players";
import Game from "@pages/Game/Game";
import Home from "@pages/Home/Home";
import Scoreboard from "@pages/Scoreboard/Scoreboard";
import { Route, Routes } from "react-router";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/player/game/:id" element={<Game />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
    </Routes>
  );
}

export default App;
