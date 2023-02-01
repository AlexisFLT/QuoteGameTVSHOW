import AddPLayer from "@components/AddPlayer/AddPlayer";
import Instructions from "@components/Instructions/Instructions";
import Logo from "@components/Logo/Logo";
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
      <footer className="InstructionIconBlock">
        <Instructions />
      </footer>
    </div>
  );
}
