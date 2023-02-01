import AddPLayer from "@components/AddPlayer/AddPlayer";
import Logo from "@components/Logo/Logo";
import "./style.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="welcomeTo">Welcome to</h1>
      <div className="logoTv">
        <Logo />
      </div>
      <div className="addPlayerButton">
        <AddPLayer />
      </div>
    </div>
  );
}
