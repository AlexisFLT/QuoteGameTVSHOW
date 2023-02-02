import AddPLayer from "@components/AddPlayer/AddPlayer";
import Instructions from "@components/Instructions/Instructions";
import Logo from "@components/Logo/Logo";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="welcomeTo">Welcome to the</h1>
      <div className="logoTv">
        <Logo />
      </div>
      <div className="addPlayerButton">
        <AddPLayer />
      </div>
      <Link className="linktoPlayers" to="/players">
        <button type="button" className="launch">
          Ready
        </button>
      </Link>
      <footer className="InstructionIconBlock">
        <Instructions />
      </footer>
    </div>
  );
}

// reset button => DELETE FROM `user` WHERE `id` IN (1,2,3,6,7)
