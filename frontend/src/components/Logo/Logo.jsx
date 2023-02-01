import "./style.scss";
import logo from "../../assets/logotv.png";

export default function Logo() {
  return (
    <div className="logoMain">
      <img className="myLogo" src={logo} alt="logo" />
    </div>
  );
}
