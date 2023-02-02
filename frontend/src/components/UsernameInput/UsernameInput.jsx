import axios from "axios";
import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import Swal from "sweetalert2";
import "./style.scss";

export default function UsernameInput() {
  const [name, setName] = useState({
    username: "",
  });

  const handleName = (evt) => {
    setName({ ...name, username: evt.target.value });
  };

  const hSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, name);
      const validate = () => {
        Swal.fire({
          title: "Register !",
          icon: "success",
        });
      };
      validate();
    } catch (err) {
      console.error(err);
    }
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
        autoComplete="off"
      />
      <button type="submit" className="subButton">
        <BsCheck2Circle className="submitIcon pulse" />
      </button>
    </form>
  );
}
