import axios from "axios";
import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./style.scss";

export default function UsernameInput() {
  const [name, setName] = useState({
    username: "",
  });
  const handleName = (evt) => {
    setName({ ...name, username: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, name)
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={hSubmit} className="inputBlock">
      <input
        type="text"
        className="inputName"
        placeholder="Player's name"
        onChange={handleName}
        value={name.username}
        name="username"
      />
      <button type="submit" className="subButton">
        <BsCheck2Circle className="submitIcon pulse" />
      </button>
    </form>
  );
}
